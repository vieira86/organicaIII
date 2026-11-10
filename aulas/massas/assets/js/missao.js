/* ============================================================
   missao.js — "Missão Espectral"
   Fluxo (cada etapa só abre depois que a anterior é resolvida):
     0) Nome + turma → SORTEIO (feito no Apps Script, sem repetição)
     1) Íon molecular: clicar no pico M⁺• do espectro
     2) Regra do nitrogênio
     3) Isótopos: halogênios (M+2) e nº de carbonos (M+1)
     4) Fragmentação: pico base, perda e mecanismo do pico-chave
     5) Identificação entre 4 estruturas candidatas
     6) Conclusão escrita → registro na planilha
   O progresso fica salvo no navegador (se a página recarregar,
   o aluno continua de onde parou).
   ============================================================ */
const Missao = (() => {
  const KEY = "missao-espectral-v1";
  const ETAPAS = [
    { n: 1, ico: "🎯", nome: "Íon molecular" },
    { n: 2, ico: "🔢", nome: "Nitrogênio" },
    { n: 3, ico: "⚖️", nome: "Isótopos" },
    { n: 4, ico: "💥", nome: "Fragmentação" },
    { n: 5, ico: "🧩", nome: "Identificação" },
    { n: 6, ico: "🧠", nome: "Conclusão" }
  ];
  const HAL = { nenhum: "Sem Cl ou Br", "1Cl": "1 cloro (≈ 3 : 1)", "2Cl": "2 cloros (≈ 9 : 6 : 1)", "1Br": "1 bromo (≈ 1 : 1)" };
  let S = null, started = false;

  const body = () => document.getElementById("mission-body");
  const $ = id => document.getElementById(id);
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch(e){} };
  const load = () => { try { return JSON.parse(localStorage.getItem(KEY) || "null"); } catch(e){ return null; } };
  const am = () => AMOSTRAS[S.indice];
  const num2 = i => String(i + 1).padStart(2, "0");
  const br = (x, d) => Number(x).toLocaleString("pt-BR", { minimumFractionDigits: d, maximumFractionDigits: d });
  const parseNum = v => { const x = parseFloat(String(v).replace(",", ".").trim()); return isNaN(x) ? null : x; };
  const intens = mz => { const p = am().picos.find(q => q[0] === mz); return p ? p[1] : 0; };
  const picoBase = () => am().picos.reduce((a, b) => b[1] > a[1] ? b : a)[0];
  const svgMol = slug => (typeof ESTRUTURAS !== "undefined" && ESTRUTURAS[slug]) || "";

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
          <input class="input" id="m-turma" placeholder="Ex.: Licenciatura em Química, 5º período" autocomplete="off"></div>
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
    Espectro.render($("m-prev-spec"), { picos: am().picos });
    if (!S.repetido) confetti();
    $("m-go").onclick = renderMissao;
  }

  /* ---------- tela principal ---------- */
  function renderMissao(){
    body().innerHTML = aviso() + `
      <div class="card">
        <h3>🧪 Dossiê da amostra nº ${num2(S.indice)} <span id="m-nome-am" class="grad"></span></h3>
        <div class="story">Agente <b>${esc(S.nome)}</b>, o laboratório recebeu uma amostra <b>desconhecida</b>, analisada por
          GC-MS com ionização por elétrons (70 eV). Tudo o que temos é o espectro abaixo. Sua missão é descobrir
          <b>quem é essa molécula</b>, etapa por etapa, como um químico analítico.</div>
        <div class="spec-frame" id="m-spec"></div>
        <p class="small muted">💡 Passe o mouse (ou toque) nos picos para ver o m/z e a intensidade. Nas etapas 1 e 4 você vai <b>clicar</b> em picos.</p>
        <details class="help"><summary>Ver a tabela de picos</summary><div class="peak-table" id="m-peaks"></div></details>
      </div>
      <div class="progress-pills" id="m-pills">
        ${ETAPAS.map(e => `<span class="pill" data-p="${e.n}">${e.ico} ${e.n} · ${e.nome}</span>`).join("")}
      </div>
      ${stage1()}${stage2()}${stage3()}${stage4()}${stage5()}${stage6()}`;
    $("m-peaks").innerHTML = am().picos.slice().sort((a, b) => b[0] - a[0])
      .map(([m, v]) => `<span>m/z <b>${m}</b> · ${br(v, v < 10 ? 2 : 1)}%</span>`).join("");
    desenharEspectro();
    bind1(); bind2(); bind3(); bind4(); bind5(); bind6();
    atualizar();
  }
  function desenharEspectro(){
    const d = {};
    if (S.etapa > 1) d[am().M] = "mol";
    const chave = S.etapa > 4 || (S.etapa === 4 && S.dados.base);
    if (chave) d[am().chave.mz] = "hot";
    const rot = {};
    if (S.etapa > 1) rot[am().M] = "M⁺•";
    if (chave) rot[am().chave.mz] = "pico-chave";
    Espectro.render($("m-spec"), {
      picos: am().picos, destaque: d, rotulos: rot,
      clicavel: S.etapa === 1 || S.etapa === 4,
      onPick: mz => {
        if (S.etapa === 1) $("m-in-1").value = mz;
        else if (S.etapa === 4 && !S.dados.base) $("m-in-4").value = mz;
      }
    });
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

  /* ---------- ETAPA 1 · ÍON MOLECULAR ---------- */
  function stage1(){
    return card(1, "Íon molecular", `
      <h3>🎯 Encontre o íon molecular (M⁺•)</h3>
      <p class="muted">Clique no espectro, no pico que corresponde ao <b>íon molecular</b>: a molécula inteira que perdeu só um elétron.</p>
      <div class="row"><label class="muted">m/z do íon molecular</label>
        <input class="input mono" id="m-in-1" inputmode="numeric" placeholder="clique no pico" style="max-width:150px">
        <button class="btn btn-primary" id="m-btn-1">Confirmar</button></div>
      <p class="small muted" id="m-sel-1">Clique no pico (ou digite o valor de m/z, se o pico for muito estreito na sua tela).</p>
      <div class="msg" id="m-msg-1"></div>
      <details class="help"><summary>Precisa de uma dica?</summary><div>O íon molecular costuma ser o pico de <b>maior m/z</b> do espectro,
        desconsiderando os pequenos picos isotópicos logo depois dele (M+1, M+2). Ele <b>não</b> precisa ser o mais alto.</div></details>`);
  }
  function bind1(){
    $("m-in-1").addEventListener("keydown", e => { if (e.key === "Enter") $("m-btn-1").click(); });
    $("m-btn-1").onclick = () => {
      const mz = parseNum($("m-in-1").value), a = am();
      if (mz === null) return err("m-msg-1", "Clique em um pico do espectro (ou digite o m/z).");
      if (!a.picos.some(q => q[0] === mz)) return err("m-msg-1", `Não há pico em m/z ${mz} neste espectro. Passe o mouse nos picos para conferir o valor.`);
      if (mz === a.M){
        S.dados.M = mz;
        ok("m-msg-1", `✅ Isso! O íon molecular está em <b>m/z ${a.M}</b>${intens(a.M) < 15 ? " (repare como ele é pequeno: a molécula se fragmenta muito)" : ""}. A massa molar nominal da amostra é <b>${a.M} g/mol</b>.`);
        return avancar(1);
      }
      S.erros[1]++; save();
      const diff = mz - a.M;
      let t;
      if (diff > 0 && diff <= 4) t = diff === 2 && intens(mz) > 20
        ? `m/z ${mz} está 2 u acima de outro pico forte: ele é o <b>M+2</b>, causado por um isótopo pesado (pense em Cl ou Br). O íon molecular é o pico de massa <b>mais leve</b> do aglomerado.`
        : `m/z ${mz} é um pico <b>isotópico</b> (M+1, M+2…), causado por ¹³C e outros isótopos. Olhe um pouco à esquerda.`;
      else if (mz === picoBase()) t = `Esse é o <b>pico base</b> (o mais intenso, 100%), mas o íon molecular é o de <b>maior m/z</b> (sem contar os isotópicos). Há picos mais à direita!`;
      else t = `Ainda não. O íon molecular é a molécula inteira: procure o pico de <b>maior m/z</b> que não seja um pico isotópico.`;
      err("m-msg-1", t);
    };
  }

  /* ---------- ETAPA 2 · REGRA DO NITROGÊNIO ---------- */
  function stage2(){
    return card(2, "Regra do nitrogênio", `
      <h3>🔢 Aplique a regra do nitrogênio</h3>
      <p class="muted">Olhando apenas para o valor de M, o que dá para dizer sobre o número de átomos de <b>nitrogênio</b> da molécula?</p>
      <div class="chips" id="m-n">
        <button class="chip" data-v="par">M é par → nenhum N (ou nº par de N)</button>
        <button class="chip" data-v="impar">M é ímpar → nº ímpar de N (1, 3…)</button>
      </div>
      <div class="msg" id="m-msg-2"></div>`);
  }
  function bind2(){
    chipGroup("m-n", b => {
      const a = am(), certo = a.M % 2 === 0 ? "par" : "impar";
      if (b.dataset.v === certo){
        S.dados.nitrogenio = certo;
        ok("m-msg-2", certo === "par"
          ? `✅ Correto: M = ${a.M} é par, então a molécula tem <b>zero ou um número par</b> de átomos de N.`
          : `✅ Correto: M = ${a.M} é ímpar, então a molécula tem <b>um número ímpar</b> de N (provavelmente 1).`);
        return avancar(2);
      }
      S.erros[2]++; save(); shake(b);
      err("m-msg-2", `Confira se ${a.M} é par ou ímpar. Lembre: o N tem massa par (14) mas valência ímpar (3); por isso cada N muda a paridade de M.`);
    });
  }

  /* ---------- ETAPA 3 · ISÓTOPOS ---------- */
  function stage3(){
    return card(3, "Isótopos", `
      <h3>⚖️ Leia os picos isotópicos</h3>
      <p class="muted">Ampliação da região do íon molecular, com <b>M ajustado para 100%</b>. Passe o mouse nos picos para ler os valores.</p>
      <div class="spec-frame zoom-frame" id="m-zoom"></div>
      <p style="margin-top:10px"><b>a)</b> O que o pico <b>M+2</b> indica?</p>
      <div class="chips" id="m-hal">
        ${Object.entries(HAL).map(([k, t]) => `<button class="chip" data-v="${k}">${t}</button>`).join("")}
      </div>
      <p style="margin-top:12px"><b>b)</b> Use o pico <b>M+1</b> para estimar o número de carbonos: <span class="mono hl">nº C ≈ (% de M+1) ÷ 1,1</span></p>
      <div class="row">
        <label class="muted" style="min-width:150px">M+1 (% de M)</label>
        <input class="input mono" id="m-m1" inputmode="decimal" placeholder="0,0" style="max-width:140px">
        <label class="muted">nº de carbonos</label>
        <input class="input mono" id="m-nc" inputmode="numeric" placeholder="0" style="max-width:110px">
      </div>
      <button class="btn btn-primary" id="m-btn-3">Verificar</button>
      <div class="msg" id="m-msg-3"></div>`);
  }
  function zoomPicos(){
    const a = am(), base = intens(a.M);
    return a.picos.filter(p => p[0] >= a.M - 2 && p[0] <= a.M + 6).map(([m, v]) => [m, +(v / base * 100).toFixed(2)]);
  }
  function bind3(){
    const a = am();
    const zp = zoomPicos();
    const rot = {}; zp.forEach(([m]) => { const d = m - a.M; if (d > 0) rot[m] = "M+" + d; else if (d === 0) rot[m] = "M"; });
    const dest = {}; zp.forEach(([m]) => { dest[m] = m === a.M ? "mol" : m > a.M ? "iso" : "dim"; });
    Espectro.render($("m-zoom"), { picos: zp, xmin: a.M - 3, xmax: a.M + 6, rotulos: rot, destaque: dest, limiteRotulo: 0.3 });
    chipGroup("m-hal");
    $("m-btn-3").onclick = () => {
      const hal = chipVal("m-hal"), m1 = parseNum($("m-m1").value), nc = parseNum($("m-nc").value);
      if (!hal || m1 === null || nc === null) return err("m-msg-3", "Responda o item a) e preencha os dois campos do item b).");
      const probs = [];
      if (hal !== a.halogenio){
        probs.push(a.halogenio === "nenhum"
          ? `O M+2 desta amostra é bem pequeno (${br(zp.find(p => p[0] === a.M + 2)?.[1] || 0, 2)}% de M): <b>não há Cl nem Br</b>.`
          : `Olhe a altura do M+2 em relação a M (e do M+4, se houver). Compare com os padrões: Cl ≈ 3 : 1 · Cl₂ ≈ 9 : 6 : 1 · Br ≈ 1 : 1.`);
      }
      const real = a.razaoM1;
      if (Math.abs(m1 - real) > Math.max(0.6, real * 0.12)) probs.push(`Releia o pico M+1 no gráfico ampliado (passe o mouse sobre ele): o valor está perto de <b>${br(real, 1)}%</b>?`);
      else if (Math.abs(Math.round(nc) - a.nC) > (MISSAO.toleranciaCarbonos ?? 1)) probs.push(`Faça a conta: ${br(m1, 2)} ÷ 1,1 ≈ <b>${br(m1 / 1.1, 1)}</b>. Arredonde para um número inteiro de carbonos.`);
      if (probs.length){ S.erros[3]++; save(); return err("m-msg-3", probs.join("<br>")); }
      S.dados.halogenio = hal; S.dados.m1 = m1; S.dados.nC = Math.round(nc);
      ok("m-msg-3", `✅ Ótimo! ${HAL[hal]}${hal === "nenhum" ? "" : " na molécula"} e cerca de <b>${Math.round(nc)} carbono(s)</b>${Math.round(nc) !== a.nC ? ` (o valor exato é ${a.nC}; o M+1 também tem uma pequena contribuição de H, N e O)` : ""}.`);
      avancar(3);
    };
  }

  /* ---------- ETAPA 4 · FRAGMENTAÇÃO ---------- */
  function stage4(){
    return card(4, "Fragmentação", `
      <h3>💥 Interprete a fragmentação</h3>
      <p><b>a)</b> Clique no espectro, no <b>pico base</b>.</p>
      <div class="row"><label class="muted">m/z do pico base</label>
        <input class="input mono" id="m-in-4" inputmode="numeric" placeholder="clique no pico" style="max-width:150px">
        <button class="btn btn-primary btn-sm" id="m-btn-4a">Confirmar pico base</button></div>
      <div class="msg" id="m-msg-4a"></div>
      <div id="m-4b" style="display:none">
        <p style="margin-top:10px"><b>b)</b> O <b style="color:var(--warm)">pico-chave</b> desta amostra (em laranja no espectro) está em
          <span class="kv"><span class="k">m/z</span><span class="v" id="m-k-mz"></span></span>. Quantas unidades de massa (Δ) a molécula perdeu para formá-lo a partir do M?</p>
        <div class="row"><label class="muted">Δ = M − m/z =</label>
          <input class="input mono" id="m-delta" inputmode="numeric" placeholder="0" style="max-width:120px">
          <button class="btn btn-primary btn-sm" id="m-btn-4b">Verificar</button></div>
        <div class="msg" id="m-msg-4b"></div>
      </div>
      <div id="m-4c" style="display:none">
        <p style="margin-top:10px"><b>c)</b> Qual processo explica melhor esse pico?</p>
        <div class="opts" id="m-mec"></div>
        <div class="msg" id="m-msg-4c"></div>
      </div>`);
  }
  function bind4(){
    const a = am();
    $("m-k-mz").textContent = a.chave.mz;
    const base = picoBase();
    const show4b = () => { $("m-4b").style.display = "block"; };
    const show4c = () => {
      $("m-4c").style.display = "block";
      if (!S.ordemMec) { S.ordemMec = embaralhar(a.chave.opcoes.length); save(); }
      $("m-mec").innerHTML = S.ordemMec.map((i, k) => `<button class="opt" data-v="${i}"><b>${"abcd"[k]})</b> <span>${esc(a.chave.opcoes[i])}</span></button>`).join("");
      document.querySelectorAll("#m-mec .opt").forEach(b => b.onclick = () => {
        if (+b.dataset.v === a.chave.certa){
          b.classList.add("right");
          document.querySelectorAll("#m-mec .opt").forEach(x => x.disabled = true);
          S.dados.mecanismo = a.mecanismo;
          ok("m-msg-4c", `✅ Exatamente: <b>${esc(a.mecanismo)}</b>. Guarde essa pista para a identificação!`);
          avancar(4);
        } else {
          S.erros[4]++; save();
          b.classList.add("wrong"); b.disabled = true;
          err("m-msg-4c", `Não é esse. Pense: a perda foi de ${a.chave.perda} u. Isso corresponde a um <b>radical</b> (massa ímpar, se não houver N) ou a uma <b>molécula neutra</b> (massa par)? E qual grupo da molécula poderia sair?`);
        }
      });
    };
    $("m-btn-4a").onclick = () => {
      const mz = parseNum($("m-in-4").value);
      if (mz === null) return err("m-msg-4a", "Clique em um pico do espectro (ou digite o m/z).");
      if (mz === base){
        S.dados.base = base; save();
        ok("m-msg-4a", `✅ Pico base: <b>m/z ${base}</b> (100%)${base === a.M ? ", que aqui é o próprio íon molecular: sinal de uma molécula estável, típica de aromáticos" : ""}.`);
        desenharEspectro(); show4b();
      } else {
        S.erros[4]++; save();
        err("m-msg-4a", `O pico base é simplesmente o <b>mais alto</b> do espectro (intensidade 100%). m/z ${mz} tem ${br(intens(mz), 1)}%.`);
      }
    };
    $("m-btn-4b").onclick = () => {
      const d = parseNum($("m-delta").value);
      if (d === null) return err("m-msg-4b", "Digite um número.");
      if (Math.round(d) === a.chave.perda){
        S.dados.delta = a.chave.perda; save();
        ok("m-msg-4b", `✅ Δ = ${a.M} − ${a.chave.mz} = <b>${a.chave.perda} u</b>.`);
        show4c();
      } else { S.erros[4]++; save(); err("m-msg-4b", `Faça a subtração: M (${a.M}) menos o m/z do pico-chave (${a.chave.mz}).`); }
    };
    if (S.dados.base){ $("m-msg-4a").className = "msg ok"; $("m-msg-4a").textContent = `✅ Pico base: m/z ${S.dados.base}.`; $("m-in-4").value = S.dados.base; show4b(); }
    if (S.dados.delta){ $("m-delta").value = S.dados.delta; $("m-msg-4b").className = "msg ok"; $("m-msg-4b").textContent = `✅ Δ = ${S.dados.delta} u.`; show4c(); }
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
    const a = am(), d = S.dados;
    return `Suas pistas: <b>M = ${a.M}</b> · ${a.M % 2 ? "nº ímpar de N" : "sem N (ou nº par)"} · ${HAL[d.halogenio || a.halogenio]} ·
      ~${d.nC ?? a.nC} C · pico base m/z ${picoBase()} · pico-chave m/z ${a.chave.mz} (perda de ${a.chave.perda} u, ${esc(a.mecanismo)}).`;
  }
  function bind5(){
    const a = am();
    if (!S.ordem) { S.ordem = embaralhar(a.candidatos.length); save(); }
    $("m-pistas").innerHTML = pistas();
    $("m-cands").innerHTML = S.ordem.map(i => {
      const c = a.candidatos[i];
      return `<button class="cand" data-i="${i}"><div class="mol">${svgMol(c.slug)}</div><div class="cn">M = ${c.M}</div></button>`;
    }).join("");
    const revelar = () => {
      $("m-reveal").innerHTML = `<div class="tile" style="margin-top:12px; padding:16px">
        <p>🔬 Sua amostra é <b class="grad" style="font-size:1.15em">${esc(a.nome)}</b> · <span class="mono">${esc(a.formula)}</span> · massa exata ${br(a.massaExata, 4)}</p>
        <p class="small" style="margin-top:6px">${esc(a.explicacao)}</p>
        ${MISSAO.mostrarLinkNIST && a.nist ? `<p class="small" style="margin-top:8px"><a class="btn btn-ghost btn-sm" href="${esc(a.nist)}" target="_blank" rel="noopener">Comparar com o espectro real no NIST ↗</a></p>` : ""}
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
      err("m-msg-5", c.M !== a.M
        ? `Essa molécula tem M = ${c.M}, mas o íon molecular da sua amostra está em ${a.M}.`
        : `Mesma massa (${c.M}), mas pense no pico-chave m/z ${a.chave.mz}: essa estrutura conseguiria formá-lo (perda de ${a.chave.perda} u, ${esc(a.mecanismo)})?`);
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
      <p class="muted">Escreva 2 ou 3 frases explicando <b>como</b> o espectro levou à sua identificação. Cite pelo menos duas evidências (íon molecular, isótopos, pico base, mecanismo…).</p>
      <div class="field"><textarea class="input" id="m-conc" placeholder="O íon molecular em m/z ... indica ... O pico em m/z ... corresponde a ..."></textarea></div>
      <button class="btn btn-primary" id="m-btn-6" style="width:100%">🏁 Concluir missão</button>
      <div class="msg" id="m-msg-6"></div>`);
  }
  function bind6(){ $("m-btn-6").onclick = concluir; }

  async function concluir(){
    const txt = $("m-conc").value.trim();
    if (txt.length < 40){ S.erros[6]++; save(); return err("m-msg-6", "Escreva um pouco mais (pelo menos 2 frases)."); }
    const nums = (txt.match(/\d{2,3}/g) || []).length;
    if (nums < 1){ S.erros[6]++; save(); return err("m-msg-6", "Cite pelo menos um valor de m/z do espectro como evidência."); }
    S.dados.conclusao = txt;
    const btn = $("m-btn-6"); btn.disabled = true; btn.textContent = "Registrando…";
    const tempoMin = ((Date.now() - S.inicio) / 60000).toFixed(1);
    const a = am(), d = S.dados;
    const payload = {
      tipo: "missao",
      nome: S.nome, turma: S.turma, dataHora: new Date().toLocaleString("pt-BR"),
      amostra_n: S.indice + 1, amostra: a.nome, formula: a.formula, M: a.M,
      nitrogenio: d.nitrogenio, halogenio_aluno: d.halogenio, halogenio_real: a.halogenio,
      m1_aluno: d.m1, m1_real: a.razaoM1, nC_aluno: d.nC, nC_real: a.nC,
      pico_base: picoBase(), pico_chave: a.chave.mz, perda: a.chave.perda, mecanismo: a.mecanismo,
      identificacao: d.identificacao, conclusao: txt,
      erros_ion_molecular: S.erros[1], erros_nitrogenio: S.erros[2], erros_isotopos: S.erros[3],
      erros_fragmentacao: S.erros[4], erros_identificacao: S.erros[5], erros_conclusao: S.erros[6],
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
    const a = am(), d = S.dados;
    const totErros = Object.values(S.erros).reduce((x, y) => x + y, 0);
    const reg = S.registro === "ok"
      ? `<span class="msg ok">✅ Resultado gravado na planilha${S.posicao ? ` · você foi o(a) <b>${S.posicao}º</b> a concluir!` : "."}</span>`
      : S.registro === "falhou"
        ? `<span class="msg err">⚠️ Não foi possível gravar na planilha agora.</span> <button class="btn btn-ghost btn-sm" id="m-reenviar">Tentar enviar de novo</button>`
        : `<span class="msg warn">Modo demonstração: mostre esta tela ao professor.</span>`;
    body().innerHTML = `
      <div class="card" style="text-align:center">
        <div style="font-size:3rem">🏆</div>
        <p class="reveal-title">Missão cumprida, ${esc(S.nome.split(/\s+/)[0])}!</p>
        <p class="muted">Amostra nº ${num2(S.indice)} · <b>${esc(a.nome)}</b> · ${S.tempoMin ? br(S.tempoMin, 0) : "?"} min</p>
        <div class="mol" style="height:150px; margin:10px auto; max-width:320px">${svgMol(a.slug)}</div>
        <div class="spec-frame" id="m-final-spec"></div>
        <div class="props" style="text-align:left">
          <div class="prop"><div class="k">Fórmula</div><div class="v">${esc(a.formula)}</div><div class="small muted">M = ${a.M} · exata ${br(a.massaExata, 4)}</div></div>
          <div class="prop"><div class="k">Pico base</div><div class="v">m/z ${picoBase()}</div></div>
          <div class="prop"><div class="k">Mecanismo-chave</div><div class="v" style="font-size:1rem">${esc(a.mecanismo)}</div><div class="small muted">m/z ${a.chave.mz} · perda de ${a.chave.perda} u</div></div>
          <div class="prop ${totErros ? "" : "ok"}"><div class="k">Tentativas erradas</div><div class="v">${totErros}</div><div class="small muted">${totErros ? "em todas as etapas" : "perfeito!"}</div></div>
        </div>
        <div style="margin:10px 0 16px">${reg}</div>
        <div class="row" style="justify-content:center">
          <a class="btn btn-primary" href="#questionario">📝 Agora responda ao questionário →</a>
          ${MISSAO.mostrarLinkNIST && a.nist ? `<a class="btn btn-ghost" href="${esc(a.nist)}" target="_blank" rel="noopener">Espectro real no NIST ↗</a>` : ""}
          ${MINICURSO.spectrosUrl ? `<a class="btn btn-ghost" href="${esc(MINICURSO.spectrosUrl)}" target="_blank" rel="noopener">🧪 Treinar no Spectros ↗</a>` : ""}
        </div>
      </div>`;
    Espectro.render($("m-final-spec"), { picos: a.picos, destaque: { [a.M]: "mol", [a.chave.mz]: "hot" }, rotulos: { [a.M]: "M⁺•", [a.chave.mz]: a.mecanismo } });
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
