/* ============================================================
   missao.js — "Missão ¹³C"
   Fluxo (cada etapa só abre depois que a anterior é resolvida):
     0) Nome + turma → SORTEIO (feito no Apps Script, sem repetição)
     1) Fórmula molecular → índice de deficiência de hidrogênio (IDH)
     2) Nº de sinais no ¹³C desacoplado e simetria (C equivalentes)
     3) DEPT: classificar cada sinal como C, CH, CH₂ ou CH₃
     4) Deslocamento químico: o que explica a posição do sinal destacado
     5) Identificação entre 4 estruturas candidatas
     6) Conclusão escrita → registro na planilha
   ============================================================ */
const Missao = (() => {
  const KEY = "missao-c13-v1";
  const ETAPAS = [
    { n: 1, ico: "🧮", nome: "IDH" },
    { n: 2, ico: "📏", nome: "Sinais e simetria" },
    { n: 3, ico: "🔀", nome: "DEPT" },
    { n: 4, ico: "🧲", nome: "Deslocamento" },
    { n: 5, ico: "🧩", nome: "Identificação" },
    { n: 6, ico: "🧠", nome: "Conclusão" }
  ];
  const TIPOS = { C: "C (sem H)", CH: "CH", CH2: "CH₂", CH3: "CH₃" };
  let S = null, started = false;

  const body = () => document.getElementById("mission-body");
  const $ = id => document.getElementById(id);
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch(e){} };
  const load = () => { try { return JSON.parse(localStorage.getItem(KEY) || "null"); } catch(e){ return null; } };
  const am = () => AMOSTRAS[S.indice];
  const num2 = i => String(i + 1).padStart(2, "0");
  const br = (x, d) => Number(x).toLocaleString("pt-BR", { minimumFractionDigits: d, maximumFractionDigits: d });
  const parseNum = v => { const x = parseFloat(String(v).replace(",", ".").trim()); return isNaN(x) ? null : x; };
  const svgMol = slug => (typeof ESTRUTURAS !== "undefined" && ESTRUTURAS[slug]) || "";
  const letra = i => "abcdefghij"[i];
  const sig = i => am().sinais[i];

  function novoEstado(nome, turma){
    return { nome, turma, indice: null, etapa: 1, inicio: Date.now(),
      erros: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }, dados: {}, concluida: false, posicao: null, ordem: null };
  }
  function embaralhar(n){
    const a = Array.from({ length: n }, (_, i) => i);
    for (let i = n - 1; i > 0; i--){ const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }

  /* ---------- entrada ---------- */
  function init(){
    if (started) return;
    started = true;
    const saved = load();
    if (saved && saved.indice !== null && saved.indice !== undefined && AMOSTRAS[saved.indice]) renderRetomar(saved);
    else renderGate();
  }
  function aviso(){
    return API.ativo() ? "" : `<div class="notice">⚠️ <b>Modo demonstração:</b> a URL do Apps Script ainda não foi configurada em
      <span class="mono">assets/js/config.js</span>. O sorteio acontece só neste navegador (pode repetir entre alunos) e nada é gravado na planilha.</div>`;
  }
  function renderRetomar(saved){
    body().innerHTML = aviso() + `
      <div class="card" style="text-align:center">
        <h3>Bem-vindo(a) de volta, ${esc(saved.nome)}!</h3>
        <p class="muted">Você já tem uma missão ${saved.concluida ? "concluída" : "em andamento"} neste navegador (amostra nº ${num2(saved.indice)}).</p>
        <div class="row" style="justify-content:center; margin-top:18px">
          <button class="btn btn-primary" id="m-continuar">${saved.concluida ? "Ver meu resultado" : "Continuar missão →"}</button>
          <button class="btn btn-ghost" id="m-outra">Sou outra pessoa</button>
        </div>
      </div>`;
    $("m-continuar").onclick = () => { S = saved; saved.concluida ? renderFinal() : renderMissao(); };
    $("m-outra").onclick = () => { try { localStorage.removeItem(KEY); } catch(e){} renderGate(); };
  }
  function renderGate(){
    body().innerHTML = aviso() + `
      <div class="card">
        <h3>🎲 Antes de começar</h3>
        <p class="muted">Digite seu nome e sua turma. Em seguida, sorteie a sua amostra: <b>cada aluno recebe um espectro diferente</b>.</p>
        <div class="field" style="margin-top:16px"><label for="m-nome">Nome completo</label>
          <input class="input" id="m-nome" placeholder="Seu nome" autocomplete="name"></div>
        <div class="field"><label for="m-turma">Turma / curso</label>
          <input class="input" id="m-turma" placeholder="Ex.: Licenciatura em Química, Análise Orgânica" autocomplete="off"></div>
        <div class="msg err" id="m-gate-msg"></div>
        <button class="btn btn-primary" id="m-sortear" style="width:100%; margin-top:6px">🎲 Sortear minha amostra</button>
      </div>`;
    $("m-sortear").onclick = sortear;
    $("m-turma").addEventListener("keydown", e => { if (e.key === "Enter") sortear(); });
  }

  /* ---------- sorteio ---------- */
  async function sortear(){
    const nome = $("m-nome").value.trim(), turma = $("m-turma").value.trim(), msg = $("m-gate-msg");
    if (nome.split(/\s+/).length < 2 || !turma){ msg.textContent = "Preencha nome completo (nome e sobrenome) e turma para continuar."; return; }
    const btn = $("m-sortear");
    btn.disabled = true; btn.textContent = "Sorteando…";
    body().insertAdjacentHTML("beforeend", `<div class="card draw-box" id="m-draw"><p class="muted small">Sorteando entre ${AMOSTRAS.length} amostras…</p><div class="slot spinning" id="m-slot">?</div></div>`);
    const slot = $("m-slot");
    let k = 0;
    const spin = setInterval(() => { slot.textContent = "Amostra nº " + num2(k++ % AMOSTRAS.length); }, 70);
    const minDelay = new Promise(r => setTimeout(r, 2200));
    let resp;
    try {
      resp = API.ativo()
        ? await API.post({ tipo: "sorteio", nome, turma, total: AMOSTRAS.length })
        : { status: "ok", indice: Math.floor(Math.random() * AMOSTRAS.length), repetido: false, demo: true };
    } catch(e){ resp = { status: "error", message: "Não foi possível falar com a planilha. Verifique a internet e tente de novo." }; }
    await minDelay;
    clearInterval(spin);
    if (resp.status === "esgotado"){
      $("m-draw").innerHTML = `<h3>😮 Todas as ${AMOSTRAS.length} amostras já foram sorteadas!</h3><p class="muted">Avise o professor para que ele acrescente mais amostras ao banco.</p>`;
      btn.disabled = false; btn.textContent = "🎲 Sortear minha amostra"; return;
    }
    if (resp.status !== "ok" || typeof resp.indice !== "number" || !AMOSTRAS[resp.indice]){
      $("m-draw").remove(); msg.textContent = resp.message || "Erro no sorteio. Tente novamente.";
      btn.disabled = false; btn.textContent = "🎲 Sortear minha amostra"; return;
    }
    S = novoEstado(nome, turma);
    S.indice = resp.indice; S.repetido = !!resp.repetido;
    S.ordem = embaralhar(am().candidatos.length);
    save();
    renderRevelacao();
  }
  function renderRevelacao(){
    const primeiro = S.nome.split(/\s+/)[0];
    body().innerHTML = `
      <div class="card draw-box">
        <p class="eyebrow" style="margin-bottom:14px">${S.repetido ? "Você já tinha sorteado" : "Sorteio realizado"}</p>
        <p class="reveal-title">🎉 Parabéns, ${esc(primeiro)}!<br><span class="grad">Sua amostra é a nº ${num2(S.indice)}</span></p>
        <div class="spec-frame" id="m-prev-spec"></div>
        <p class="muted small">${S.repetido ? "Como você já tinha participado, recebeu a mesma amostra de antes." : "Ninguém mais da turma tem este espectro. Ele é só seu!"}</p>
        <button class="btn btn-primary" id="m-go" style="margin-top:14px">Aceitar a missão →</button>
      </div>`;
    C13.render($("m-prev-spec"), { sinais: am().sinais, xmax: 220 });
    if (!S.repetido) confetti();
    $("m-go").onclick = renderMissao;
  }

  /* ---------- tela principal ---------- */
  function renderMissao(){
    const a = am();
    body().innerHTML = aviso() + `
      <div class="card">
        <h3>🧪 Dossiê da amostra nº ${num2(S.indice)} <span id="m-nome-am" class="grad"></span></h3>
        <div class="story">Agente <b>${esc(S.nome)}</b>, o laboratório recebeu uma amostra <b>desconhecida</b>. A análise elementar
          e a espectrometria de massas já deram a fórmula molecular: <span class="formula-big hl">${esc(a.formula)}</span>.
          Agora temos o espectro de <b>RMN de ¹³C desacoplado</b> (CDCl₃, ${a.mhz} MHz) e, mais adiante, os espectros <b>DEPT</b>. Sua missão é descobrir <b>quem é essa molécula</b>, etapa por etapa.</div>
        <div class="spec-frame" id="m-spec"></div>
        <p class="small muted">💡 Passe o mouse (ou toque) nos sinais para ver o δ. O tripleto em 77 ppm é o solvente (CDCl₃) e não conta.
          No ¹³C a altura dos picos <b>não</b> é proporcional ao nº de carbonos (efeito NOE). Na etapa 4 o sinal analisado fica em <b style="color:var(--warm)">laranja</b>.</p>
      </div>
      <div class="progress-pills" id="m-pills">
        ${ETAPAS.map(e => `<span class="pill" data-p="${e.n}">${e.ico} ${e.n} · ${e.nome}</span>`).join("")}
      </div>
      ${stage1()}${stage2()}${stage3()}${stage4()}${stage5()}${stage6()}`;
    desenharEspectro();
    bind1(); bind2(); bind3(); bind4(); bind5(); bind6();
    atualizar();
  }
  function desenharEspectro(){
    const a = am(), d = {}, rot = {};
    if (S.etapa >= 3) a.sinais.forEach((_, i) => { rot[i] = letra(i); });
    if (S.etapa === 4) d[a.diag.i] = "hot";
    C13.render($("m-spec"), { sinais: a.sinais, destaque: d, rotulos: rot, modo: S.etapa >= 3 ? "dept" : "desac", xmax: 220 });
  }

  function atualizar(){
    ETAPAS.forEach(e => {
      const st = $("m-stage-" + e.n);
      if (!st) return;
      st.classList.toggle("locked", e.n > S.etapa);
      st.classList.toggle("solved", e.n < S.etapa);
      const tag = st.querySelector(".stage-tag");
      tag.textContent = (e.n < S.etapa ? "✅ " : e.n > S.etapa ? "🔒 " : "") + tag.dataset.t;
      const pill = document.querySelector(`#m-pills [data-p="${e.n}"]`);
      pill.classList.toggle("on", e.n === S.etapa);
      pill.classList.toggle("done", e.n < S.etapa);
      st.querySelectorAll("input, button, textarea").forEach(el => { if (e.n < S.etapa) el.disabled = true; });
    });
    if (S.etapa > 5) $("m-nome-am").textContent = "· " + am().nome;
    save();
  }
  function avancar(n){
    S.etapa = n + 1;
    desenharEspectro();
    atualizar();
    const prox = $("m-stage-" + (n + 1));
    if (prox) setTimeout(() => prox.scrollIntoView({ behavior: "smooth", block: "start" }), 250);
  }
  const card = (n, titulo, html) => `
    <div class="card stage" id="m-stage-${n}">
      <span class="stage-tag" data-t="Etapa ${n} · ${titulo}">Etapa ${n} · ${titulo}</span>
      <div class="stage-body">${html}</div>
    </div>`;
  const ok = (id, html) => { const m = $(id); m.className = "msg ok"; m.innerHTML = html; };
  const err = (id, html) => { const m = $(id); m.className = "msg err"; m.innerHTML = html; };
  function chipGroup(id, cb){
    document.querySelectorAll(`#${id} .chip`).forEach(b => b.onclick = () => {
      document.querySelectorAll(`#${id} .chip`).forEach(x => x.classList.toggle("sel", x === b));
      if (cb) cb(b);
    });
  }
  const chipVal = id => { const s = document.querySelector(`#${id} .chip.sel`); return s ? s.dataset.v : null; };

  /* ---------- ETAPA 1 · IDH ---------- */
  function stage1(){
    return card(1, "Índice de deficiência de hidrogênio", `
      <h3>🧮 Quantas insaturações a fórmula permite?</h3>
      <p class="muted">Calcule o <b>IDH</b> (anéis + ligações π) da fórmula <span class="mono hl">${esc(am().formula)}</span>.</p>
      <p class="mono small" style="margin:6px 0 10px">IDH = (2C + 2 + N − H − X) ÷ 2 &nbsp;·&nbsp; X = halogênios; O não entra na conta</p>
      <div class="row"><label class="muted">IDH =</label>
        <input class="input mono" id="m-idh" inputmode="numeric" placeholder="0" style="max-width:110px">
        <button class="btn btn-primary" id="m-btn-1">Confirmar</button></div>
      <div class="msg" id="m-msg-1"></div>
      <details class="help"><summary>Precisa de uma dica?</summary><div>Conte os átomos de C, H, N e halogênios (Cl, Br, I, F) da fórmula e substitua.
        IDH 0 = só ligações simples, sem anel · IDH 1 = uma C=O, uma C=C <b>ou</b> um anel · IDH ≥ 4 = pense em um anel benzênico.</div></details>`);
  }
  function significadoIDH(a){
    if (a.IDH === 0) return "a molécula só tem ligações simples e nenhum anel: nada de C=O, C=C ou anel benzênico.";
    if (a.IDH === 1) return "existe <b>uma</b> ligação π (C=O ou C=C) <b>ou</b> um anel. Com oxigênio na fórmula, uma carbonila é forte candidata.";
    if (a.IDH === 2) return "há duas insaturações: duas ligações π, uma tripla (C≡C ou C≡N) ou uma π + um anel.";
    if (a.IDH === 4) return "quatro insaturações: típico de um <b>anel benzênico</b> (3 C=C + 1 anel).";
    return `${a.IDH} insaturações: um anel benzênico (4) e mais ${a.IDH - 4} (por exemplo, uma C=O ou um grupo NO₂).`;
  }
  function bind1(){
    $("m-idh").addEventListener("keydown", e => { if (e.key === "Enter") $("m-btn-1").click(); });
    $("m-btn-1").onclick = () => {
      const v = parseNum($("m-idh").value), a = am();
      if (v === null) return err("m-msg-1", "Digite um número inteiro.");
      if (Math.round(v) === a.IDH){
        S.dados.idh = a.IDH;
        ok("m-msg-1", `✅ IDH = <b>${a.IDH}</b>: ${significadoIDH(a)}`);
        return avancar(1);
      }
      S.erros[1]++; save();
      err("m-msg-1", v !== Math.round(v)
        ? "O IDH é sempre um número inteiro. Confira a conta (o halogênio conta como um H)."
        : `Ainda não. Confira: C = ${a.nC}, H = ${a.nH}${/N/.test(a.formulaTxt) ? ", N = 1" : ""}${/Cl|Br|I|F/.test(a.formulaTxt) ? ", e não esqueça dos halogênios (somam como H)" : ""}. O oxigênio não entra na conta.`);
    };
  }

  /* ---------- ETAPA 2 · SINAIS E SIMETRIA ---------- */
  function stage2(){
    return card(2, "Sinais e simetria", `
      <h3>📏 Quantos carbonos diferentes?</h3>
      <p><b>a)</b> Quantos <b>sinais</b> de carbono aparecem no espectro desacoplado? Não conte o CDCl₃ (tripleto em 77 ppm) nem o TMS.</p>
      <div class="row"><label class="muted">nº de sinais</label>
        <input class="input mono" id="m-ns" inputmode="numeric" placeholder="0" style="max-width:110px">
        <button class="btn btn-primary btn-sm" id="m-btn-2a">Confirmar</button></div>
      <div class="msg" id="m-msg-2a"></div>
      <div id="m-2b" style="display:none">
        <p style="margin-top:12px"><b>b)</b> A fórmula tem <b>${am().nC} carbonos</b>. O que isso diz sobre a molécula?</p>
        <div class="chips" id="m-sim">
          <button class="chip" data-v="nao">Nº de sinais = nº de C → nenhum C equivalente</button>
          <button class="chip" data-v="sim">Menos sinais que C → há C equivalentes (simetria)</button>
        </div>
        <div class="msg" id="m-msg-2b"></div>
      </div>
      <details class="help"><summary>Precisa de uma dica?</summary><div>No ¹³C desacoplado cada carbono <b>não equivalente</b> dá um único pico (um singleto).
        Carbonos equivalentes por simetria (por exemplo, os dois CH₃ de um isopropila) aparecem no mesmo pico.</div></details>`);
  }
  function bind2(){
    const a = am(), n = a.sinais.length, sim = n < a.nC ? "sim" : "nao";
    const show2b = () => { $("m-2b").style.display = "block"; };
    $("m-ns").addEventListener("keydown", e => { if (e.key === "Enter") $("m-btn-2a").click(); });
    $("m-btn-2a").onclick = () => {
      const v = parseNum($("m-ns").value);
      if (v === null) return err("m-msg-2a", "Digite um número.");
      if (Math.round(v) === n){
        S.dados.nSinais = n; save();
        ok("m-msg-2a", `✅ <b>${n} sinais</b>: ${n} tipos de carbono quimicamente diferentes.`);
        show2b();
      } else {
        S.erros[2]++; save();
        err("m-msg-2a", v > n
          ? "Você contou sinais demais. O tripleto em 77 ppm é o solvente (CDCl₃) e o pico em 0 é o TMS: eles não são da amostra."
          : "Há mais sinais do que isso. Carbonos sem H (C=O, C do anel ligado a um grupo) dão picos <b>baixos</b>: procure com atenção em toda a escala.");
      }
    };
    chipGroup("m-sim", b => {
      if (b.dataset.v === sim){
        S.dados.simetria = sim;
        ok("m-msg-2b", sim === "sim"
          ? `✅ Certo: ${a.nC} carbonos e só ${n} sinais. Há <b>${a.nC - n} carbono(s) "repetido(s)"</b> por simetria. Guarde essa pista!`
          : `✅ Certo: ${a.nC} carbonos e ${n} sinais. Cada carbono da molécula é diferente dos outros.`);
        return avancar(2);
      }
      S.erros[2]++; save(); shake(b);
      err("m-msg-2b", `Compare os dois números: ${n} sinais e ${a.nC} carbonos na fórmula.`);
    });
    if (S.dados.nSinais){ $("m-ns").value = S.dados.nSinais; ok("m-msg-2a", `✅ ${S.dados.nSinais} sinais.`); show2b(); }
  }

  /* ---------- ETAPA 3 · DEPT ---------- */
  function stage3(){
    const a = am();
    return card(3, "DEPT", `
      <h3>🔀 Quantos H tem cada carbono?</h3>
      <p class="muted">Agora o espectro mostra também o <b>DEPT-135</b> e o <b>DEPT-90</b>. Compare os três e classifique cada sinal.</p>
      <ul class="small" style="margin:6px 0 10px 18px">
        <li>aparece no ¹³C mas <b>some</b> nos dois DEPT → <b>C</b> (sem H)</li>
        <li>aparece no <b>DEPT-90</b> → <b>CH</b></li>
        <li><b>para baixo</b> no DEPT-135 → <b>CH₂</b></li>
        <li>para cima no DEPT-135 mas ausente no DEPT-90 → <b>CH₃</b></li>
      </ul>
      <table class="int-table"><thead><tr><th>Sinal</th><th>δ (ppm)</th><th>Tipo</th></tr></thead>
        <tbody>${a.sinais.map((s, i) => `<tr id="m-row-${i}"><td><b class="hl">${letra(i)}</b></td><td class="num">${br(s.d, s.d % 1 && String(s.d).split(".")[1].length > 1 ? 2 : 1)}</td>
          <td><select class="dept-sel" id="m-t-${i}"><option value="">escolha…</option>${Object.entries(TIPOS).map(([k, t]) => `<option value="${k}">${t}</option>`).join("")}</select></td></tr>`).join("")}</tbody></table>
      <button class="btn btn-primary" id="m-btn-3">Verificar</button>
      <div class="msg" id="m-msg-3"></div>`);
  }
  function bind3(){
    const a = am();
    $("m-btn-3").onclick = () => {
      const vals = a.sinais.map((_, i) => $("m-t-" + i).value);
      if (vals.some(v => !v)) return err("m-msg-3", "Classifique todos os sinais.");
      const certos = vals.map((v, i) => v === a.sinais[i].tipo);
      certos.forEach((c, i) => { $("m-row-" + i).classList.toggle("ok", c); $("m-row-" + i).classList.toggle("bad", !c); });
      if (certos.every(Boolean)){
        S.dados.dept = vals;
        const nH = a.sinais.reduce((t, s) => t + s.n * { C: 0, CH: 1, CH2: 2, CH3: 3 }[s.tipo], 0);
        ok("m-msg-3", `✅ DEPT resolvido: ${a.sinais.map((s, i) => `<b>${letra(i)}</b> ${TIPOS[s.tipo]}${s.n > 1 ? ` (×${s.n})` : ""}`).join(" · ")}.
          ${nH < a.nH ? `Os C somam ${nH} H; ${a.nH - nH === 1 ? "o H que falta na fórmula está" : `os ${a.nH - nH} H que faltam na fórmula estão`} em O ou N (OH, COOH, NH…).` : `Os C somam ${nH} H, todos os H da fórmula.`}`);
        return avancar(3);
      }
      S.erros[3]++; save();
      const i = certos.indexOf(false), s = a.sinais[i], v = vals[i];
      err("m-msg-3", `Confira o sinal <b>${letra(i)}</b>. ` + (
        s.tipo === "C" ? "Ele aparece em algum dos DEPT? Se sumiu dos dois, é um carbono sem H." :
        s.tipo === "CH" ? "Procure-o no DEPT-90: só CH aparece lá." :
        s.tipo === "CH2" ? "Olhe o DEPT-135: esse sinal está para cima ou para baixo?" :
        "Ele está para cima no DEPT-135, mas aparece no DEPT-90?") + (certos.filter(x => !x).length > 1 ? ` (há ${certos.filter(x => !x).length} sinais errados)` : ""));
    };
    if (S.dados.dept) S.dados.dept.forEach((v, i) => { $("m-t-" + i).value = v; $("m-row-" + i).classList.add("ok"); });
  }

  /* ---------- ETAPA 4 · DESLOCAMENTO QUÍMICO ---------- */
  function stage4(){
    const a = am(), s = sig(a.diag.i);
    return card(4, "Deslocamento químico", `
      <h3>🧲 Por que o sinal <span style="color:var(--warm)">${letra(a.diag.i)}</span> aparece em δ ${br(s.d, 2)}?</h3>
      <p class="muted">Use as regiões de deslocamento do ¹³C (0–220 ppm), a fórmula e o que o DEPT mostrou sobre esse carbono.</p>
      <div class="opts" id="m-desl"></div>
      <div class="msg" id="m-msg-4"></div>`);
  }
  function bind4(){
    const a = am(), s = sig(a.diag.i);
    if (!S.ordemDiag){ S.ordemDiag = embaralhar(a.diag.opcoes.length); save(); }
    $("m-desl").innerHTML = S.ordemDiag.map((i, k) => `<button class="opt" data-v="${i}"><b>${"abcd"[k]})</b> <span>${esc(a.diag.opcoes[i])}</span></button>`).join("");
    document.querySelectorAll("#m-desl .opt").forEach(b => b.onclick = () => {
      if (+b.dataset.v === a.diag.certa){
        b.classList.add("right");
        document.querySelectorAll("#m-desl .opt").forEach(x => x.disabled = true);
        S.dados.deslocamento = a.diag.opcoes[a.diag.certa];
        ok("m-msg-4", `✅ Exatamente. Guarde essa pista: ela diz que tipo de carbono é o sinal ${letra(a.diag.i)} (${TIPOS[s.tipo]}).`);
        avancar(4);
      } else {
        S.erros[4]++; save();
        b.classList.add("wrong"); b.disabled = true;
        err("m-msg-4", `Não é esse. Compare a faixa citada na opção com o valor do sinal (${br(s.d, 2)} ppm), e lembre-se da fórmula: ${esc(a.formula)}, IDH ${a.IDH}.`);
      }
    });
    if (S.etapa > 4) document.querySelectorAll("#m-desl .opt").forEach(x => { if (+x.dataset.v === a.diag.certa) x.classList.add("right"); });
  }

  /* ---------- ETAPA 5 · IDENTIFICAÇÃO ---------- */
  function stage5(){
    return card(5, "Identificação", `
      <h3>🧩 Quem é a sua amostra?</h3>
      <p class="muted" id="m-pistas">Reúna as pistas e escolha a estrutura compatível com o espectro.</p>
      <div class="cands" id="m-cands"></div>
      <div class="msg" id="m-msg-5"></div>
      <div id="m-reveal"></div>`);
  }
  function pistas(){
    const a = am();
    return `Suas pistas: <b>${esc(a.formula)}</b> · IDH ${a.IDH} · ${a.sinais.length} sinais para ${a.nC} C: ` +
      a.sinais.map((s, i) => `<b>${letra(i)}</b> ${br(s.d, 1)} (${TIPOS[s.tipo]})`).join(" · ") + ".";
  }
  function bind5(){
    const a = am();
    if (!S.ordem) { S.ordem = embaralhar(a.candidatos.length); save(); }
    $("m-pistas").innerHTML = pistas();
    $("m-cands").innerHTML = S.ordem.map(i => {
      const c = a.candidatos[i];
      return `<button class="cand" data-i="${i}"><div class="mol">${svgMol(c.slug)}</div><div class="cn">${esc(c.formula)}</div></button>`;
    }).join("");
    const revelar = () => {
      $("m-reveal").innerHTML = `<div class="tile" style="margin-top:12px; padding:16px">
        <p>🔬 Sua amostra é <b class="grad" style="font-size:1.15em">${esc(a.nome)}</b> · <span class="mono">${esc(a.formula)}</span> · ${esc(a.classe)}</p>
        <p class="small" style="margin-top:6px">${esc(a.explicacao)}</p>
      </div>`;
    };
    document.querySelectorAll("#m-cands .cand").forEach(b => b.onclick = () => {
      const i = +b.dataset.i, c = a.candidatos[i];
      if (i === 0){
        b.classList.add("right");
        document.querySelectorAll("#m-cands .cand").forEach(x => x.disabled = true);
        S.dados.identificacao = c.nome;
        ok("m-msg-5", `✅ Identificação correta${S.erros[5] === 0 ? " de primeira" : ""}!`);
        revelar();
        return avancar(5);
      }
      S.erros[5]++; save();
      b.classList.add("wrong"); b.disabled = true;
      err("m-msg-5", c.formula !== a.formula
        ? `Essa molécula é ${esc(c.formula)}, mas a sua amostra é ${esc(a.formula)}.`
        : `Mesma fórmula (isômero!), mas o espectro dela seria diferente: ${esc(c.padrao)}. Compare com o seu.`);
    });
    if (S.etapa > 5){
      const r = document.querySelector('#m-cands .cand[data-i="0"]'); if (r) r.classList.add("right");
      revelar();
    }
  }

  /* ---------- ETAPA 6 · CONCLUSÃO ---------- */
  function stage6(){
    return card(6, "Conclusão", `
      <h3>🧠 Justifique como um(a) cientista</h3>
      <p class="muted">Escreva 2 ou 3 frases explicando <b>como</b> os espectros levaram à sua identificação. Cite pelo menos duas evidências (IDH, nº de sinais e simetria, DEPT, deslocamento químico…).</p>
      <div class="field"><textarea class="input" id="m-conc" placeholder="O sinal em ... ppm, que no DEPT é um ..., indica ... O nº de sinais mostra que ..."></textarea></div>
      <button class="btn btn-primary" id="m-btn-6" style="width:100%">🏁 Concluir missão</button>
      <div class="msg" id="m-msg-6"></div>`);
  }
  function bind6(){ $("m-btn-6").onclick = concluir; }

  async function concluir(){
    const txt = $("m-conc").value.trim();
    if (txt.length < 40){ S.erros[6]++; save(); return err("m-msg-6", "Escreva um pouco mais (pelo menos 2 frases)."); }
    if (!/\d/.test(txt)){ S.erros[6]++; save(); return err("m-msg-6", "Cite pelo menos um valor do espectro (um δ em ppm) como evidência."); }
    S.dados.conclusao = txt;
    const btn = $("m-btn-6"); btn.disabled = true; btn.textContent = "Registrando…";
    const tempoMin = ((Date.now() - S.inicio) / 60000).toFixed(1);
    const a = am(), d = S.dados;
    const payload = {
      tipo: "missao",
      nome: S.nome, turma: S.turma, dataHora: new Date().toLocaleString("pt-BR"),
      amostra_n: S.indice + 1, amostra: a.nome, formula: a.formulaTxt, classe: a.classe,
      IDH: a.IDH, n_carbonos: a.nC, n_sinais: a.sinais.length, simetria: a.sinais.length < a.nC ? "sim" : "não",
      dept: a.sinais.map(s => `${s.d}:${s.tipo}`).join(" "),
      sinal_deslocamento: `${br(sig(a.diag.i).d, 1)} ppm`,
      identificacao: d.identificacao, conclusao: txt,
      erros_idh: S.erros[1], erros_sinais: S.erros[2], erros_dept: S.erros[3],
      erros_deslocamento: S.erros[4], erros_identificacao: S.erros[5], erros_conclusao: S.erros[6],
      tempo_min: tempoMin
    };
    let r = null;
    if (API.ativo()){ try { r = await API.post(payload); } catch(e){ r = null; } }
    S.concluida = true; S.tempoMin = tempoMin;
    S.registro = API.ativo() ? (r && r.status === "ok" ? "ok" : "falhou") : "demo";
    S.posicao = r && r.posicao ? r.posicao : null;
    if (S.registro === "falhou") S.pendente = payload;
    save();
    renderFinal(true);
  }

  function renderFinal(festa){
    const a = am();
    const totErros = Object.values(S.erros).reduce((x, y) => x + y, 0);
    const reg = S.registro === "ok"
      ? `<span class="msg ok">✅ Resultado gravado na planilha${S.posicao ? ` · você foi o(a) <b>${S.posicao}º</b> a concluir!` : "."}</span>`
      : S.registro === "falhou"
        ? `<span class="msg err">⚠️ Não foi possível gravar na planilha agora.</span> <button class="btn btn-ghost btn-sm" id="m-reenviar">Tentar enviar de novo</button>`
        : `<span class="msg warn">Modo demonstração: mostre esta tela ao professor.</span>`;
    const rot = {}; a.sinais.forEach((s, i) => { rot[i] = letra(i); });
    body().innerHTML = `
      <div class="card" style="text-align:center">
        <div style="font-size:3rem">🏆</div>
        <p class="reveal-title">Missão cumprida, ${esc(S.nome.split(/\s+/)[0])}!</p>
        <p class="muted">Amostra nº ${num2(S.indice)} · <b>${esc(a.nome)}</b> · ${S.tempoMin ? br(S.tempoMin, 0) : "?"} min</p>
        <div class="mol" style="height:150px; margin:10px auto; max-width:320px">${svgMol(a.slug)}</div>
        <div class="spec-frame" id="m-final-spec"></div>
        <p class="small muted" style="margin:-2px 0 10px">${a.sinais.map((s, i) => `<b class="hl">${letra(i)}</b> ${esc(s.rot)} (${br(s.d, 1)}, ${TIPOS[s.tipo]})`).join(" · ")}</p>
        <div class="props" style="text-align:left">
          <div class="prop"><div class="k">Fórmula</div><div class="v">${esc(a.formula)}</div><div class="small muted">IDH ${a.IDH} · ${esc(a.classe)}</div></div>
          <div class="prop"><div class="k">Sinais</div><div class="v">${a.sinais.length}</div><div class="small muted">para ${a.nC} carbonos${a.sinais.length < a.nC ? " (simetria)" : ""}</div></div>
          <div class="prop"><div class="k">DEPT</div><div class="v" style="font-size:1rem">${["C", "CH", "CH2", "CH3"].map(t => [t, a.sinais.filter(s => s.tipo === t).length]).filter(x => x[1]).map(([t, k]) => `${k} ${TIPOS[t].replace(" (sem H)", "")}`).join(" · ")}</div></div>
          <div class="prop ${totErros ? "" : "ok"}"><div class="k">Tentativas erradas</div><div class="v">${totErros}</div><div class="small muted">${totErros ? "em todas as etapas" : "perfeito!"}</div></div>
        </div>
        <div style="margin:10px 0 16px">${reg}</div>
        <div class="row" style="justify-content:center">
          <a class="btn btn-primary" href="#questionario">📝 Agora responda ao questionário →</a>
          ${MINICURSO.numaresUrl ? `<a class="btn btn-ghost" href="${esc(MINICURSO.numaresUrl)}" target="_blank" rel="noopener">🧲 Treinar no NUMARES ↗</a>` : ""}
        </div>
      </div>`;
    C13.render($("m-final-spec"), { sinais: a.sinais, rotulos: rot, modo: "dept", xmax: 220 });
    if (festa) confetti(140);
    const re = $("m-reenviar");
    if (re) re.onclick = async () => {
      re.disabled = true; re.textContent = "Enviando…";
      try {
        const r = await API.post(S.pendente);
        if (r && r.status === "ok"){ S.registro = "ok"; S.posicao = r.posicao; delete S.pendente; save(); }
      } catch(e){}
      renderFinal(false);
    };
  }

  return { init };
})();
window.Missao = Missao;
