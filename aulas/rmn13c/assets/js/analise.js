/* ============================================================
   analise.js — botão "Análise de Dados"
   Busca na planilha (doGet ?acao=dados) as respostas do
   questionário e os resultados da Missão ¹³C, e gera
   gráficos + interpretações automáticas.
   ============================================================ */
const Analise = (() => {
  // paleta validada (contraste e daltonismo) sobre o fundo escuro do site
  const C = { blue: "#4f8cff", teal: "#0ea597", purple: "#9b7bf7", amber: "#c97a08",
              surface: "#10141f", grid: "rgba(255,255,255,0.06)", ink: "#eef1f7", muted: "#9aa4b8" };
  // escala divergente da Likert: 2 vermelhos · cinza neutro · 2 azuis
  const LIK = ["#e5484d", "#f0a0a0", "#5c6475", "#8ab4ff", "#3b6fe0"];
  const LIK_T = ["Discordo totalmente", "Discordo", "Neutro", "Concordo", "Concordo totalmente"];
  const CONHEC = QUESTIONARIO.conhecimento.opcoes;
  let charts = [], DATA = null, aba = "q", exemplo = false;

  const $ = id => document.getElementById(id);
  const body = () => $("analysis-body");
  const mean = a => a.length ? a.reduce((s, x) => s + x, 0) / a.length : NaN;
  const sd = a => { if (a.length < 2) return NaN; const m = mean(a); return Math.sqrt(a.reduce((s, x) => s + (x - m) ** 2, 0) / (a.length - 1)); };
  const f = (x, d = 1) => isFinite(x) ? x.toLocaleString("pt-BR", { minimumFractionDigits: d, maximumFractionDigits: d }) : "—";
  const pct = (x, d = 0) => isFinite(x) ? f(x * 100, d) + "%" : "—";
  const num = v => { const x = typeof v === "number" ? v : parseFloat(String(v ?? "").replace(",", ".")); return isFinite(x) ? x : null; };

  /* ---------- estatística ---------- */
  function cronbach(rows, ids){
    const k = ids.length;
    const full = rows.filter(r => ids.every(id => num(r[id]) !== null));
    if (full.length < 3 || k < 2) return NaN;
    const varOf = a => { const m = mean(a); return a.reduce((s, x) => s + (x - m) ** 2, 0) / (a.length - 1); };
    const itemVar = ids.reduce((s, id) => s + varOf(full.map(r => num(r[id]))), 0);
    const totVar = varOf(full.map(r => ids.reduce((s, id) => s + num(r[id]), 0)));
    return totVar > 0 ? (k / (k - 1)) * (1 - itemVar / totVar) : NaN;
  }
  // Wilcoxon pareado (aproximação normal com correção de empates e de continuidade)
  function wilcoxon(pares){
    const d = pares.map(([a, b]) => b - a).filter(x => x !== 0);
    const n = d.length;
    if (n < 6) return { n, p: NaN };
    const abs = d.map((x, i) => ({ a: Math.abs(x), s: Math.sign(x), i })).sort((x, y) => x.a - y.a);
    let i = 0, tie = 0;
    while (i < n){
      let j = i; while (j + 1 < n && abs[j + 1].a === abs[i].a) j++;
      const r = (i + j + 2) / 2; for (let k = i; k <= j; k++) abs[k].r = r;
      const t = j - i + 1; tie += t ** 3 - t; i = j + 1;
    }
    const Wp = abs.filter(x => x.s > 0).reduce((s, x) => s + x.r, 0);
    const mu = n * (n + 1) / 4;
    const sigma = Math.sqrt(n * (n + 1) * (2 * n + 1) / 24 - tie / 48);
    const z = sigma > 0 ? (Math.abs(Wp - mu) - 0.5) / sigma : 0;
    return { n, z, p: 2 * (1 - normCdf(z)), W: Wp };
  }
  function normCdf(z){ // Abramowitz-Stegun
    const t = 1 / (1 + 0.2316419 * Math.abs(z));
    const d = 0.3989423 * Math.exp(-z * z / 2);
    const p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
    return z > 0 ? 1 - p : p;
  }
  function pearson(xs, ys){
    const n = xs.length; if (n < 4) return NaN;
    const mx = mean(xs), my = mean(ys);
    let a = 0, b = 0, c = 0;
    for (let i = 0; i < n; i++){ a += (xs[i] - mx) * (ys[i] - my); b += (xs[i] - mx) ** 2; c += (ys[i] - my) ** 2; }
    return b && c ? a / Math.sqrt(b * c) : NaN;
  }
  const fmtP = p => !isFinite(p) ? "—" : p < 0.001 ? "p < 0,001" : "p = " + f(p, 3);
  const forca = r => { const a = Math.abs(r); return a >= .7 ? "forte" : a >= .4 ? "moderada" : a >= .2 ? "fraca" : "desprezível"; };

  /* ---------- Chart.js ---------- */
  function setupChart(){
    const ch = window.Chart;
    ch.defaults.color = C.muted;
    ch.defaults.font.family = "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif";
    ch.defaults.font.size = 12;
    ch.defaults.borderColor = C.grid;
    ch.defaults.plugins.legend.labels.boxWidth = 12;
    ch.defaults.plugins.legend.labels.boxHeight = 12;
    ch.defaults.plugins.legend.labels.useBorderRadius = true;
    ch.defaults.plugins.legend.labels.borderRadius = 3;
    ch.defaults.plugins.tooltip.backgroundColor = "rgba(11,15,26,0.96)";
    ch.defaults.plugins.tooltip.borderColor = "rgba(255,255,255,0.12)";
    ch.defaults.plugins.tooltip.borderWidth = 1;
    ch.defaults.plugins.tooltip.padding = 10;
    ch.defaults.plugins.tooltip.titleColor = C.ink;
    ch.defaults.plugins.tooltip.bodyColor = C.ink;
    ch.defaults.elements.bar.borderRadius = 4;
    ch.defaults.animation.duration = 600;
  }
  function mk(id, cfg){
    const el = $(id); if (!el) return;
    charts.push(new Chart(el, cfg));
  }
  const axisCommon = { grid: { color: C.grid }, border: { display: false }, ticks: { color: C.muted } };
  const noGrid = { grid: { display: false }, border: { display: false }, ticks: { color: C.muted } };

  /* ---------- carregar ---------- */
  async function analisar(){
    const btn = $("btn-analisar");
    charts.forEach(c => c.destroy()); charts = [];
    body().innerHTML = `<div class="loader"><span class="autoplay-ring"></span><br>Buscando respostas na planilha…</div>`;
    btn.disabled = true;
    try {
      await getChart(); setupChart();
      if (!API.ativo()){
        body().innerHTML = `<div class="notice" style="text-align:center">⚠️ A URL do Apps Script ainda não foi configurada em <span class="mono">assets/js/config.js</span>, então não há dados reais para analisar.<br><br>
          <button class="btn btn-ghost btn-sm" id="btn-exemplo">Ver como fica com dados FICTÍCIOS de exemplo</button></div>`;
        $("btn-exemplo").onclick = () => { exemplo = true; DATA = dadosExemplo(); renderAll(); };
        return;
      }
      const r = await API.get({ acao: "dados" });
      if (r.status !== "ok") throw new Error(r.message || "Resposta inválida");
      exemplo = false;
      DATA = { questionario: r.questionario || [], missao: r.missao || [], sorteio: r.sorteio || [] };
      renderAll();
    } catch(e){
      body().innerHTML = `<div class="notice">Não foi possível carregar os dados: ${esc(e.message)}. Verifique a internet e se o Apps Script foi publicado com acesso para "Qualquer pessoa".</div>`;
    } finally { btn.disabled = false; btn.textContent = "🔄 Atualizar análise"; }
  }

  function renderAll(){
    charts.forEach(c => c.destroy()); charts = [];
    const nq = DATA.questionario.length, nm = DATA.missao.length;
    body().innerHTML = `
      ${exemplo ? `<div class="notice" style="text-align:center">🧪 <b>Dados fictícios de exemplo</b>: só para visualizar o painel. Não correspondem a respostas reais.</div>` : ""}
      <div class="tabs">
        <button data-a="q" class="${aba === "q" ? "on" : ""}">📝 Questionário (${nq})</button>
        <button data-a="m" class="${aba === "m" ? "on" : ""}">🧲 Missão ¹³C (${nm})</button>
      </div>
      <div id="an-content"></div>
      <div style="text-align:center; margin-top:10px"><button class="btn btn-ghost btn-sm" id="btn-csv">⬇️ Baixar dados desta aba (CSV)</button></div>`;
    body().querySelectorAll(".tabs button").forEach(b => b.onclick = () => { aba = b.dataset.a; renderAll(); });
    $("btn-csv").onclick = () => baixarCSV(aba === "q" ? DATA.questionario : DATA.missao, aba === "q" ? "questionario.csv" : "missao_c13.csv");
    aba === "q" ? renderQuest() : renderMissao();
  }

  /* ============================================================
     QUESTIONÁRIO
     ============================================================ */
  function renderQuest(){
    const rows = DATA.questionario;
    const el = $("an-content");
    if (!rows.length){ el.innerHTML = `<div class="card" style="text-align:center"><p class="muted">Ainda não há respostas no questionário.</p></div>`; return; }
    const items = QUESTIONARIO.likert;
    const ids = items.map(q => q.id);
    const n = rows.length;

    // por item
    const stats = items.map(q => {
      const v = rows.map(r => num(r[q.id])).filter(x => x !== null);
      const cnt = [1, 2, 3, 4, 5].map(k => v.filter(x => x === k).length);
      return { ...q, n: v.length, m: mean(v), s: sd(v), cnt, conc: v.length ? (cnt[3] + cnt[4]) / v.length : NaN, disc: v.length ? (cnt[0] + cnt[1]) / v.length : NaN };
    });
    const allV = rows.flatMap(r => ids.map(id => num(r[id])).filter(x => x !== null));
    const concGeral = allV.filter(x => x >= 4).length / allV.length;
    const notas = rows.map(r => num(r[QUESTIONARIO.nota.id])).filter(x => x !== null);
    const alpha = cronbach(rows, ids);
    const lvl = v => { const i = CONHEC.indexOf(v); return i >= 0 ? i + 1 : null; };
    const pares = rows.map(r => [lvl(r[QUESTIONARIO.conhecimento.antes.id]), lvl(r[QUESTIONARIO.conhecimento.depois.id])]).filter(([a, b]) => a && b);
    const subiu = pares.filter(([a, b]) => b > a).length;
    const wil = wilcoxon(pares);
    const ord = [...stats].sort((a, b) => b.m - a.m);
    const melhor = ord[0], pior = ord[ord.length - 1];

    el.innerHTML = `
      <div class="kpis">
        <div class="kpi"><div class="k">Respostas</div><div class="v">${n}</div><div class="s">participantes</div></div>
        <div class="kpi"><div class="k">Nota média</div><div class="v">${f(mean(notas))}</div><div class="s">de 0 a 10 · DP ${f(sd(notas))}</div></div>
        <div class="kpi"><div class="k">Concordância geral</div><div class="v">${pct(concGeral)}</div><div class="s">respostas 4 ou 5</div></div>
        <div class="kpi"><div class="k">Melhoraram o conhecimento</div><div class="v">${pct(pares.length ? subiu / pares.length : NaN)}</div><div class="s">${subiu} de ${pares.length}</div></div>
        <div class="kpi"><div class="k">Confiabilidade (α)</div><div class="v">${f(alpha, 2)}</div><div class="s">alfa de Cronbach</div></div>
      </div>

      <div class="chart-card">
        <h3>Percepção por afirmação</h3>
        <p class="sub">Distribuição das respostas: discordância à esquerda, concordância à direita. Passe o mouse para ver os valores.</p>
        <div class="chart-box tall"><canvas id="ch-likert"></canvas></div>
        <div class="interp">${interpLikert(stats, melhor, pior, concGeral)}</div>
      </div>

      <div class="grid-2">
        <div class="chart-card">
          <h3>Conhecimento antes × depois</h3>
          <p class="sub">Autoavaliação do conhecimento em RMN de ¹³C</p>
          <div class="chart-box"><canvas id="ch-prepos"></canvas></div>
          <div class="interp">${interpPrePos(pares, subiu, wil)}</div>
        </div>
        <div class="chart-card">
          <h3>Média por dimensão</h3>
          <p class="sub">Escala de 1 (discordo totalmente) a 5 (concordo totalmente)</p>
          <div class="chart-box"><canvas id="ch-dim"></canvas></div>
          <div class="interp" id="interp-dim"></div>
        </div>
      </div>

      <div class="grid-2">
        <div class="chart-card">
          <h3>Distribuição das notas</h3>
          <p class="sub">Nota de 0 a 10 dada à aula</p>
          <div class="chart-box"><canvas id="ch-nota"></canvas></div>
          <div class="interp">${interpNota(notas)}</div>
        </div>
        <div class="chart-card">
          <h3>Perfil dos participantes</h3>
          <p class="sub">${esc(QUESTIONARIO.perfil.texto)}</p>
          <div class="chart-box"><canvas id="ch-perfil"></canvas></div>
          <div class="interp" id="interp-perfil"></div>
        </div>
      </div>

      <div class="chart-card">
        <h3>Tabela das afirmações</h3>
        <p class="sub">Estatística descritiva por item</p>
        <div class="table-wrap"><table class="data"><thead><tr><th>Item</th><th>Dimensão</th><th>n</th><th>Média</th><th>DP</th><th>% concorda</th><th>% discorda</th></tr></thead><tbody>
          ${stats.map(s => `<tr><td style="white-space:normal; min-width:260px">${esc(s.texto)}</td><td>${esc(s.dim)}</td><td class="num">${s.n}</td><td class="num">${f(s.m, 2)}</td><td class="num">${f(s.s, 2)}</td><td class="num">${pct(s.conc)}</td><td class="num">${pct(s.disc)}</td></tr>`).join("")}
        </tbody></table></div>
        <div class="interp">${interpAlpha(alpha, rows.length)}</div>
      </div>

      ${comentarios(rows)}`;

    // --- Likert divergente ---
    const labels = stats.map(s => s.texto.length > 58 ? s.texto.slice(0, 56) + "…" : s.texto);
    const P = stats.map(s => s.cnt.map(c => s.n ? c / s.n * 100 : 0));
    // ordem de empilhamento: neutro colado no zero, depois para fora
    const ds = [
      { label: LIK_T[2] + " (½)", data: P.map(p => -p[2] / 2), backgroundColor: LIK[2], _k: 2 },
      { label: LIK_T[2], data: P.map(p => p[2] / 2), backgroundColor: LIK[2], _k: 2 },
      { label: LIK_T[1], data: P.map(p => -p[1]), backgroundColor: LIK[1], _k: 1 },
      { label: LIK_T[0], data: P.map(p => -p[0]), backgroundColor: LIK[0], _k: 0 },
      { label: LIK_T[3], data: P.map(p => p[3]), backgroundColor: LIK[3], _k: 3 },
      { label: LIK_T[4], data: P.map(p => p[4]), backgroundColor: LIK[4], _k: 4 }
    ].map(d => ({ ...d, borderColor: C.surface, borderWidth: 1.5, borderRadius: 3, borderSkipped: false, barPercentage: .78 }));
    mk("ch-likert", {
      type: "bar", data: { labels, datasets: ds },
      options: {
        indexAxis: "y", responsive: true, maintainAspectRatio: false,
        scales: {
          x: { ...axisCommon, stacked: true, min: -100, max: 100, ticks: { color: C.muted, callback: v => Math.abs(v) + "%" } },
          y: { ...noGrid, stacked: true, ticks: { color: C.ink, font: { size: 11.5 } } }
        },
        plugins: {
          legend: { position: "bottom", labels: { filter: it => !it.text.includes("(½)"),
            sort: (a, b) => LIK_T.indexOf(a.text) - LIK_T.indexOf(b.text) } },
          tooltip: { filter: it => !it.dataset.label.includes("(½)"), callbacks: {
            title: it => stats[it[0].dataIndex].texto,
            label: it => {
              const i = it.dataIndex, s = stats[i];
              const k = it.dataset._k;
              return ` ${LIK_T[k]}: ${f(P[i][k], 0)}% (${s.cnt[k]})`;
            },
            footer: it => { const s = stats[it[0].dataIndex]; return `Média ${f(s.m, 2)} · concordância ${pct(s.conc)}`; }
          } }
        }
      }
    });

    // --- antes x depois ---
    const ca = CONHEC.map(o => rows.filter(r => r[QUESTIONARIO.conhecimento.antes.id] === o).length);
    const cd = CONHEC.map(o => rows.filter(r => r[QUESTIONARIO.conhecimento.depois.id] === o).length);
    mk("ch-prepos", {
      type: "bar",
      data: { labels: CONHEC, datasets: [
        { label: "Antes", data: ca, backgroundColor: C.purple, borderColor: C.surface, borderWidth: 2, borderSkipped: "start" },
        { label: "Depois", data: cd, backgroundColor: C.teal, borderColor: C.surface, borderWidth: 2, borderSkipped: "start" }
      ] },
      options: { responsive: true, maintainAspectRatio: false,
        scales: { x: noGrid, y: { ...axisCommon, beginAtZero: true, ticks: { color: C.muted, precision: 0 }, title: { display: true, text: "participantes", color: C.muted } } },
        plugins: { legend: { position: "top", align: "end" }, tooltip: { callbacks: { label: it => ` ${it.dataset.label}: ${it.raw} (${pct(it.raw / n)})` } } } }
    });

    // --- dimensões ---
    const dims = [...new Set(items.map(q => q.dim))];
    const dm = dims.map(d => mean(rows.flatMap(r => items.filter(q => q.dim === d).map(q => num(r[q.id])).filter(x => x !== null))));
    mk("ch-dim", {
      type: "bar",
      data: { labels: dims, datasets: [{ label: "Média", data: dm, backgroundColor: C.blue, borderSkipped: "start", barPercentage: .6 }] },
      options: { responsive: true, maintainAspectRatio: false,
        scales: { x: noGrid, y: { ...axisCommon, min: 1, max: 5, ticks: { color: C.muted, stepSize: 1 } } },
        plugins: { legend: { display: false }, tooltip: { callbacks: { label: it => ` Média: ${f(it.raw, 2)}` } } } }
    });
    const di = dims.map((d, i) => [d, dm[i]]).sort((a, b) => b[1] - a[1]);
    $("interp-dim").innerHTML = `A dimensão mais bem avaliada foi <b>${esc(di[0][0])}</b> (média ${f(di[0][1], 2)})` +
      (di.length > 1 ? ` e a menos, <b>${esc(di[di.length - 1][0])}</b> (${f(di[di.length - 1][1], 2)}).` : ".") +
      ` Médias acima de 4 indicam avaliação positiva; entre 3 e 4, moderada; abaixo de 3, pede atenção.`;

    // --- notas ---
    const hist = Array.from({ length: 11 }, (_, i) => notas.filter(x => x === i).length);
    mk("ch-nota", {
      type: "bar",
      data: { labels: hist.map((_, i) => String(i)), datasets: [{ label: "Participantes", data: hist, backgroundColor: C.blue, borderSkipped: "start", barPercentage: .82, categoryPercentage: .9 }] },
      options: { responsive: true, maintainAspectRatio: false,
        scales: { x: { ...noGrid, title: { display: true, text: "nota", color: C.muted } }, y: { ...axisCommon, beginAtZero: true, ticks: { color: C.muted, precision: 0 } } },
        plugins: { legend: { display: false }, tooltip: { callbacks: { title: it => "Nota " + it[0].label, label: it => ` ${it.raw} participante(s)` } } } }
    });

    // --- perfil ---
    const po = QUESTIONARIO.perfil.opcoes;
    const pc = po.map(o => rows.filter(r => r[QUESTIONARIO.perfil.id] === o).length);
    mk("ch-perfil", {
      type: "bar",
      data: { labels: po, datasets: [{ label: "Participantes", data: pc, backgroundColor: C.purple, borderSkipped: "start", barPercentage: .6 }] },
      options: { indexAxis: "y", responsive: true, maintainAspectRatio: false,
        scales: { x: { ...axisCommon, beginAtZero: true, ticks: { color: C.muted, precision: 0 } }, y: { ...noGrid, ticks: { color: C.ink } } },
        plugins: { legend: { display: false }, tooltip: { callbacks: { label: it => ` ${it.raw} (${pct(it.raw / n)})` } } } }
    });
    const pmax = po.map((o, i) => [o, pc[i]]).sort((a, b) => b[1] - a[1])[0];
    $("interp-perfil").innerHTML = pmax[1] ? `O público foi majoritariamente de <b>${esc(pmax[0])}</b> (${pct(pmax[1] / n)} dos participantes).` : "Sem dados de perfil.";
  }

  function interpLikert(stats, melhor, pior, conc){
    const altos = stats.filter(s => s.conc >= .8).length;
    const atencao = stats.filter(s => s.m < 3.5);
    const nivel = conc >= .8 ? "muito positiva" : conc >= .6 ? "positiva" : conc >= .4 ? "dividida" : "pouco favorável";
    let t = `A percepção geral foi <b>${nivel}</b>: ${pct(conc)} de todas as respostas foram "concordo" ou "concordo totalmente". `;
    t += `${altos} de ${stats.length} afirmações tiveram concordância de 80% ou mais. `;
    t += `<br><b>Ponto mais forte:</b> "${esc(melhor.texto)}" (média ${f(melhor.m, 2)}). `;
    t += `<br><b>Ponto a melhorar:</b> "${esc(pior.texto)}" (média ${f(pior.m, 2)}).`;
    if (atencao.length) t += `<br>⚠️ ${atencao.length} item(ns) com média abaixo de 3,5 merece(m) atenção na próxima edição.`;
    return t;
  }
  function interpPrePos(pares, subiu, w){
    if (!pares.length) return "Sem dados pareados de antes e depois.";
    const ma = mean(pares.map(p => p[0])), md = mean(pares.map(p => p[1]));
    const toLbl = m => CONHEC[Math.max(0, Math.min(CONHEC.length - 1, Math.round(m) - 1))];
    let t = `O nível médio passou de <b>${f(ma, 2)}</b> (≈ ${toLbl(ma)}) para <b>${f(md, 2)}</b> (≈ ${toLbl(md)}), numa escala de 1 (${CONHEC[0]}) a ${CONHEC.length} (${CONHEC[CONHEC.length - 1]}). `;
    t += `${subiu} participante(s) (${pct(subiu / pares.length)}) relataram ter subido pelo menos um nível. `;
    if (isFinite(w.p)) t += `<br>Teste de Wilcoxon pareado: <b>${fmtP(w.p)}</b>, ${w.p < 0.05 ? "o ganho percebido é <b>estatisticamente significativo</b> (α = 0,05)." : "a diferença <b>não</b> é estatisticamente significativa (α = 0,05)."}`;
    else t += `<br>(O teste de Wilcoxon é calculado a partir de 6 participantes com mudança de nível.)`;
    t += `<br><span class="small">Lembre: é uma <i>autoavaliação</i>, que mede a percepção de aprendizagem, não o desempenho.</span>`;
    return t;
  }
  function interpNota(notas){
    if (!notas.length) return "Sem notas.";
    const s = [...notas].sort((a, b) => a - b), med = s.length % 2 ? s[(s.length - 1) / 2] : (s[s.length / 2 - 1] + s[s.length / 2]) / 2;
    const prom = notas.filter(x => x >= 9).length / notas.length, det = notas.filter(x => x <= 6).length / notas.length;
    return `Nota média <b>${f(mean(notas))}</b> e mediana <b>${f(med, 1)}</b>. ${pct(prom)} deram nota 9 ou 10 e ${pct(det)} deram 6 ou menos. ` +
      `Pela lógica do NPS, o saldo (notas 9–10 menos notas 0–6) é de <b>${f((prom - det) * 100, 0)} pontos</b>.`;
  }
  function interpAlpha(a, n){
    if (!isFinite(a)) return "O alfa de Cronbach é calculado a partir de 3 respostas completas.";
    const q = a >= .9 ? "excelente" : a >= .8 ? "boa" : a >= .7 ? "aceitável" : a >= .6 ? "questionável" : "baixa";
    return `Alfa de Cronbach = <b>${f(a, 2)}</b>: consistência interna <b>${q}</b> entre as ${QUESTIONARIO.likert.length} afirmações (n = ${n}). ` +
      (a >= .7 ? "As afirmações medem de forma coerente a percepção sobre a aula, e as médias podem ser reportadas em conjunto." : "Interprete os itens individualmente, sem somar as afirmações num escore único.");
  }
  function comentarios(rows){
    const cs = rows.map(r => String(r[QUESTIONARIO.comentario.id] || "").trim()).filter(Boolean);
    if (!cs.length) return "";
    return `<div class="chart-card"><h3>💬 Comentários (${cs.length})</h3><p class="sub">Respostas abertas, sem identificação</p>
      <div class="comments">${cs.slice().reverse().map(c => `<div class="comment">“${esc(c)}”</div>`).join("")}</div></div>`;
  }

  /* ============================================================
     MISSÃO RMN
     ============================================================ */
  const ETAPAS_M = [["IDH", "erros_idh"], ["Sinais", "erros_sinais"], ["DEPT", "erros_dept"],
                    ["Deslocamento", "erros_deslocamento"], ["Identificação", "erros_identificacao"], ["Conclusão", "erros_conclusao"]];
  const DICA_ETAPA = [
    "Vale revisar a conta do IDH (halogênio conta como H; oxigênio não entra) e o que cada valor significa.",
    "Vale praticar simetria e equivalência de carbonos (contar sinais) e lembrar que o CDCl₃ não conta.",
    "Vale revisar a leitura do DEPT-135 e do DEPT-90 (C some, CH no DEPT-90, CH₂ para baixo).",
    "Vale retomar as regiões do ¹³C: sp³ (0–60), C–O/C–X (40–80), C=C e aromáticos (100–175), C=O (155–220).",
    "Vale discutir mais como isômeros de mesma fórmula se distinguem pelo nº de sinais e pelo DEPT.",
    "Vale mostrar exemplos de uma boa justificativa, citando δ e o resultado do DEPT."
  ];
  function renderMissao(){
    const el = $("an-content");
    const rows = DATA.missao.filter(r => String(r.status || r.Status || "") !== "Repetição");
    if (!rows.length){ el.innerHTML = `<div class="card" style="text-align:center"><p class="muted">Nenhuma missão concluída ainda.${DATA.sorteio.length ? ` ${DATA.sorteio.length} aluno(s) já sortearam a amostra.` : ""}</p></div>`; return; }
    const tempos = rows.map(r => num(r.tempo_min)).filter(x => x !== null);
    const totErr = r => ETAPAS_M.reduce((s, [, k]) => s + (num(r[k]) ?? 0), 0);
    const perfeitas = rows.filter(r => totErr(r) === 0).length;
    const idPrimeira = rows.filter(r => (num(r.erros_identificacao) ?? 0) === 0).length;
    const sorteadas = DATA.sorteio.length || rows.length;

    // acerto de primeira (etapas 3 e 4) por classe funcional
    const mecs = [...new Set(rows.map(r => r.classe).filter(Boolean))];
    const mecStats = mecs.map(m => { const g = rows.filter(r => r.classe === m); return { m, n: g.length, ok: g.filter(r => (num(r.erros_dept) ?? 0) + (num(r.erros_deslocamento) ?? 0) === 0).length }; })
      .sort((a, b) => b.ok / b.n - a.ok / a.n);

    el.innerHTML = `
      <div class="kpis">
        <div class="kpi"><div class="k">Missões concluídas</div><div class="v">${rows.length}</div><div class="s">${sorteadas} amostra(s) sorteada(s) de ${AMOSTRAS.length}</div></div>
        <div class="kpi"><div class="k">Identificação de primeira</div><div class="v">${pct(idPrimeira / rows.length)}</div><div class="s">${idPrimeira} de ${rows.length} alunos</div></div>
        <div class="kpi"><div class="k">Missões sem nenhum erro</div><div class="v">${perfeitas}</div><div class="s">${pct(perfeitas / rows.length)} da turma</div></div>
        <div class="kpi"><div class="k">Tempo médio</div><div class="v">${f(mean(tempos), 0)}</div><div class="s">minutos por missão</div></div>
      </div>

      <div class="grid-2">
        <div class="chart-card">
          <h3>Onde os alunos mais erraram</h3>
          <p class="sub">Média de tentativas erradas por etapa</p>
          <div class="chart-box"><canvas id="ch-erros"></canvas></div>
          <div class="interp" id="interp-erros"></div>
        </div>
        <div class="chart-card">
          <h3>Acerto de primeira por etapa</h3>
          <p class="sub">% de alunos que resolveram a etapa sem errar</p>
          <div class="chart-box"><canvas id="ch-primeira"></canvas></div>
          <div class="interp" id="interp-primeira"></div>
        </div>
      </div>

      <div class="grid-2">
        <div class="chart-card">
          <h3>DEPT e deslocamento por função</h3>
          <p class="sub">% de alunos sem erro nas etapas 3 e 4, conforme a classe da amostra</p>
          <div class="chart-box"><canvas id="ch-mec"></canvas></div>
          <div class="interp" id="interp-mec"></div>
        </div>
        <div class="chart-card">
          <h3>Tempo × tentativas erradas</h3>
          <p class="sub">Cada ponto é um aluno</p>
          <div class="chart-box"><canvas id="ch-scatter"></canvas></div>
          <div class="interp" id="interp-scatter"></div>
        </div>
      </div>

      <div class="chart-card">
        <h3>Resultados por aluno</h3>
        <p class="sub">Ordem de chegada · número de tentativas erradas em cada etapa</p>
        <div class="table-wrap"><table class="data"><thead><tr><th>#</th><th>Aluno</th><th>Amostra</th><th>Fórmula</th><th>Classe</th>${ETAPAS_M.map(e => `<th>${e[0].slice(0, 5)}.</th>`).join("")}<th>Tempo</th></tr></thead><tbody>
        ${rows.slice().sort((a, b) => (num(a.posicao) ?? 999) - (num(b.posicao) ?? 999)).map(r => `<tr>
          <td class="num">${esc(r.posicao ?? "")}</td><td>${esc(r.nome)}</td><td>${esc(r.amostra)}</td><td class="num">${esc(r.formula)}</td><td>${esc(r.classe)}</td>
          ${ETAPAS_M.map(([, k]) => { const v = num(r[k]) ?? 0; return `<td class="num" style="${v ? "color:#ffcf8a" : "color:#4ade80"}">${v}</td>`; }).join("")}
          <td class="num">${esc(r.tempo_min)}</td></tr>`).join("")}
        </tbody></table></div>
      </div>

      <div class="chart-card"><h3>🧠 Justificativas dos alunos</h3><p class="sub">Texto da etapa 6</p>
        <div class="comments">${rows.map(r => `<div class="comment"><b>${esc(r.nome)}</b> · <span class="muted">${esc(r.amostra)}</span><br>${esc(r.conclusao)}</div>`).join("")}</div></div>`;

    // erros por etapa
    const em = ETAPAS_M.map(([, k]) => mean(rows.map(r => num(r[k]) ?? 0)));
    mk("ch-erros", {
      type: "bar",
      data: { labels: ETAPAS_M.map(e => e[0]), datasets: [{ label: "Erros médios", data: em, backgroundColor: C.amber, borderSkipped: "start", barPercentage: .6 }] },
      options: { responsive: true, maintainAspectRatio: false,
        scales: { x: noGrid, y: { ...axisCommon, beginAtZero: true } },
        plugins: { legend: { display: false }, tooltip: { callbacks: { label: it => ` ${f(it.raw, 2)} erro(s) por aluno` } } } }
    });
    const ie = em.indexOf(Math.max(...em));
    $("interp-erros").innerHTML = Math.max(...em) > 0
      ? `A etapa com mais dificuldade foi <b>${ETAPAS_M[ie][0]}</b> (${f(em[ie], 2)} erro por aluno, em média). ${DICA_ETAPA[ie]}`
      : "Nenhum erro registrado: a turma foi impecável!";

    // acerto de primeira
    const pp = ETAPAS_M.map(([, k]) => rows.filter(r => (num(r[k]) ?? 0) === 0).length / rows.length * 100);
    mk("ch-primeira", {
      type: "bar",
      data: { labels: ETAPAS_M.map(e => e[0]), datasets: [{ label: "% de primeira", data: pp, backgroundColor: C.teal, borderSkipped: "start", barPercentage: .6 }] },
      options: { responsive: true, maintainAspectRatio: false,
        scales: { x: noGrid, y: { ...axisCommon, min: 0, max: 100, ticks: { color: C.muted, callback: v => v + "%" } } },
        plugins: { legend: { display: false }, tooltip: { callbacks: { label: it => ` ${f(it.raw, 0)}% acertaram de primeira` } } } }
    });
    const ip = pp.indexOf(Math.max(...pp));
    $("interp-primeira").innerHTML = `A etapa mais tranquila foi <b>${ETAPAS_M[ip][0]}</b> (${f(pp[ip], 0)}% de acerto de primeira). ` +
      `Em média, ${f(mean(pp), 0)}% das etapas foram resolvidas sem nenhum erro.`;

    // classes funcionais
    mk("ch-mec", {
      type: "bar",
      data: { labels: mecStats.map(m => m.m), datasets: [{ label: "% de primeira", data: mecStats.map(m => m.ok / m.n * 100), backgroundColor: C.purple, borderSkipped: "start", barPercentage: .6 }] },
      options: { indexAxis: "y", responsive: true, maintainAspectRatio: false,
        scales: { x: { ...axisCommon, min: 0, max: 100, ticks: { color: C.muted, callback: v => v + "%" } }, y: { ...noGrid, ticks: { color: C.ink } } },
        plugins: { legend: { display: false }, tooltip: { callbacks: { label: it => { const m = mecStats[it.dataIndex]; return ` ${m.ok} de ${m.n} aluno(s) (${f(it.raw, 0)}%)`; } } } } }
    });
    const pior = mecStats[mecStats.length - 1];
    $("interp-mec").innerHTML = mecStats.length
      ? `A classe com mais dificuldade foi <b>${esc(pior.m)}</b> (${pior.ok} de ${pior.n} sem erro nas etapas 3 e 4). <span class="small">Cada aluno teve uma amostra diferente; com poucos alunos por classe, leia como tendência.</span>`
      : "Sem dados de classe.";

    // tempo x erros
    const pts = rows.map(r => ({ x: num(r.tempo_min), y: totErr(r), r })).filter(p => p.x !== null);
    mk("ch-scatter", {
      type: "scatter",
      data: { datasets: [{ label: "Alunos", data: pts, backgroundColor: C.blue, borderColor: C.surface, borderWidth: 2, pointRadius: 6, pointHoverRadius: 9 }] },
      options: { responsive: true, maintainAspectRatio: false,
        scales: { x: { ...axisCommon, beginAtZero: true, title: { display: true, text: "tempo (min)", color: C.muted } },
                  y: { ...axisCommon, beginAtZero: true, ticks: { color: C.muted, precision: 0 }, title: { display: true, text: "tentativas erradas", color: C.muted } } },
        plugins: { legend: { display: false }, tooltip: { callbacks: { label: it => { const p = pts[it.dataIndex]; return ` ${p.r.nome} (${p.r.amostra}): ${f(p.x, 0)} min · ${p.y} erro(s)`; } } } } }
    });
    const rr = pearson(pts.map(p => p.x), pts.map(p => p.y));
    $("interp-scatter").innerHTML = isFinite(rr)
      ? `Correlação de Pearson r = <b>${f(rr, 2)}</b> (${forca(rr)}). ${rr >= 0.2 ? "Quem errou mais também levou mais tempo, o que é esperado: cada erro traz uma dica e uma nova tentativa." : rr <= -0.2 ? "Curiosamente, quem levou mais tempo errou menos: sinal de que ler o espectro com calma compensa." : "Tempo e número de erros não andaram juntos nesta turma."}`
      : "A correlação é calculada a partir de 4 alunos.";
  }

  /* ---------- CSV ---------- */
  function baixarCSV(rows, nome){
    if (!rows.length) return;
    const cols = [...new Set(rows.flatMap(r => Object.keys(r)))];
    const q = v => `"${String(v ?? "").replace(/"/g, '""')}"`;
    const csv = "﻿" + [cols.map(q).join(";"), ...rows.map(r => cols.map(c => q(r[c])).join(";"))].join("\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    a.download = nome; a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  }

  /* ---------- dados fictícios para pré-visualização ---------- */
  function dadosExemplo(){
    let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    const pick = a => a[Math.floor(rnd() * a.length)];
    const questionario = Array.from({ length: 24 }, () => {
      const r = { perfil: pick(["Licenciatura", "Licenciatura", "Ensino Técnico", "Bacharelado", "Pós-graduação"]) };
      const a = Math.floor(rnd() * 2); r.conhecimento_antes = CONHEC[a];
      r.conhecimento_depois = CONHEC[Math.min(3, a + (rnd() < .8 ? 1 : 0) + (rnd() < .25 ? 1 : 0))];
      const base = 3.6 + rnd() * 1.2;
      QUESTIONARIO.likert.forEach((q, i) => { r[q.id] = Math.max(1, Math.min(5, Math.round(base + (rnd() - .5) * 1.6 - (i === 7 ? .8 : 0) - (i === 4 ? .4 : 0)))); });
      r.nota = Math.max(5, Math.min(10, Math.round(base * 2 + rnd())));
      r.comentario = rnd() < .3 ? pick(["Adorei identificar a minha amostra!", "Poderia ter mais tempo para o DEPT.", "A apresentação foi muito dinâmica.", "O DEPT ficou bem mais claro."]) : "";
      return r;
    });
    const nomes = ["Ana Souza", "Bruno Lima", "Carla Dias", "Diego Alves", "Elisa Rocha", "Felipe Melo", "Gabi Nunes", "Heitor Reis", "Iara Costa", "João Pires", "Kátia Luz", "Lucas Faria", "Marina Teles", "Nícolas Brito"];
    const missao = nomes.map((nome, i) => {
      const a = AMOSTRAS[(i * 3) % AMOSTRAS.length];
      const e = () => Math.floor(rnd() * rnd() * 3.2);
      return { posicao: i + 1, nome, turma: "Análise Orgânica", amostra_n: (i * 3) % AMOSTRAS.length + 1, amostra: a.nome, formula: a.formulaTxt, classe: a.classe,
        n_sinais: a.sinais.length, identificacao: a.nome,
        erros_idh: Math.floor(rnd() * 1.4), erros_sinais: e(), erros_dept: e(), erros_deslocamento: e(), erros_identificacao: Math.floor(rnd() * 1.6), erros_conclusao: Math.floor(rnd() * 1.2),
        tempo_min: +(14 + rnd() * 18).toFixed(1), conclusao: `O sinal em ${a.sinais[0].d} ppm (${a.sinais[0].tipo} no DEPT) e os ${a.sinais.length} sinais para ${a.nC} C indicam ${a.classe.toLowerCase()}, compatível com ${a.nome}.`, status: "Concluiu" };
    });
    return { questionario, missao, sorteio: missao };
  }

  document.addEventListener("DOMContentLoaded", () => { $("btn-analisar").onclick = analisar; });
  return { analisar };
})();
window.Analise = Analise;
