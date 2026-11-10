/* ============================================================
   missao.js — "Missão RMN"
   Fluxo (cada etapa só abre depois que a anterior é resolvida):
     0) Nome + turma → SORTEIO (feito no Apps Script, sem repetição)
     1) Fórmula molecular → índice de deficiência de hidrogênio (IDH)
     2) Nº de sinais (ambientes químicos) e nº de H de cada sinal (integração)
     3) Desdobramento do sinal-chave: multiplicidade, nº de vizinhos (n+1) e J
     4) Deslocamento químico: o que explica a posição do sinal mais diagnóstico
     5) Identificação entre 4 estruturas candidatas
     6) Conclusão escrita → registro na planilha
   O progresso fica salvo no navegador (se a página recarregar,
   o aluno continua de onde parou).
   ============================================================ */
const Missao = (() => {
  const KEY = "missao-rmn-v1";
  const ETAPAS = [
    { n: 1, ico: "🧮", nome: "IDH" },
    { n: 2, ico: "📏", nome: "Sinais e integração" },
    { n: 3, ico: "🔀", nome: "Desdobramento" },
    { n: 4, ico: "🧲", nome: "Deslocamento" },
    { n: 5, ico: "🧩", nome: "Identificação" },
    { n: 6, ico: "🧠", nome: "Conclusão" }
  ];
  const MULTS = ["singleto", "dubleto", "tripleto", "quarteto", "quinteto", "sexteto", "septeto", "noneto", "dubleto de dubletos"];
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
    Rmn.render($("m-prev-spec"), { sinais: am().sinais, integral: false });
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
          Agora temos o espectro de <b>RMN de ¹H</b> (CDCl₃, ${a.mhz} MHz). Sua missão é descobrir <b>quem é essa molécula</b>, etapa por etapa.</div>
        <div class="spec-frame" id="m-spec"></div>
        <p class="small muted">💡 Passe o mouse (ou toque) nos sinais para ver o δ e a altura da integração (números em rosa, sob o eixo).
          As <b>ampliações</b> mostram cada sinal de perto. Nas etapas 3 e 4 o sinal analisado fica em <b style="color:var(--warm)">laranja</b>.</p>
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
    if (S.etapa === 3) d[a.chave.i] = "hot";
    if (S.etapa === 4) d[a.diag.i] = "hot";
    Rmn.render($("m-spec"), { sinais: a.sinais, destaque: d, rotulos: rot, ampliacoes: true });
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

  /* ---------- ETAPA 2 · SINAIS E INTEGRAÇÃO ---------- */
  function stage2(){
    return card(2, "Sinais e integração", `
      <h3>📏 Quantos tipos de hidrogênio? Quantos H em cada um?</h3>
      <p><b>a)</b> Quantos <b>sinais</b> (ambientes químicos diferentes de H) aparecem no espectro? Não conte o TMS.</p>
      <div class="row"><label class="muted">nº de sinais</label>
        <input class="input mono" id="m-ns" inputmode="numeric" placeholder="0" style="max-width:110px">
        <button class="btn btn-primary btn-sm" id="m-btn-2a">Confirmar</button></div>
      <div class="msg" id="m-msg-2a"></div>
      <div id="m-2b" style="display:none">
        <p style="margin-top:12px"><b>b)</b> As alturas da curva de integração (em rosa) são proporcionais ao nº de H. A fórmula tem
          <b>${am().nH} H</b>. Descubra quantos H há em cada sinal.</p>
        <p class="small muted">Método da aula: divida todas as alturas pela menor, multiplique por 2 (ou 3) se precisar e arredonde. A soma tem que dar ${am().nH}.</p>
        <table class="int-table"><thead><tr><th>Sinal</th><th>δ (ppm)</th><th>Integral</th><th>nº de H</th></tr></thead>
          <tbody>${am().sinais.map((s, i) => `<tr id="m-row-${i}"><td><b class="hl">${letra(i)}</b></td><td class="num">${br(s.d, 2)}</td>
            <td class="num">${br(s.integral, 1)}</td><td><input class="input mono" id="m-h-${i}" inputmode="numeric" placeholder="?"></td></tr>`).join("")}</tbody></table>
        <button class="btn btn-primary" id="m-btn-2b">Verificar</button>
        <div class="msg" id="m-msg-2b"></div>
      </div>`);
  }
  function bind2(){
    const a = am(), n = a.sinais.length;
    const show2b = () => { $("m-2b").style.display = "block"; };
    $("m-ns").addEventListener("keydown", e => { if (e.key === "Enter") $("m-btn-2a").click(); });
    $("m-btn-2a").onclick = () => {
      const v = parseNum($("m-ns").value);
      if (v === null) return err("m-msg-2a", "Digite um número.");
      if (Math.round(v) === n){
        S.dados.nSinais = n; save();
        ok("m-msg-2a", `✅ <b>${n} sinais</b>: a molécula tem ${n} grupos de hidrogênios <b>quimicamente equivalentes</b>. Na tabela abaixo eles aparecem como ${a.sinais.map((_, i) => letra(i)).join(", ")}.`);
        show2b();
      } else {
        S.erros[2]++; save();
        err("m-msg-2a", v > n
          ? "Você contou sinais demais. Um multipleto (várias linhas próximas) é <b>um</b> sinal só: olhe as ampliações. E o TMS (0 ppm) não conta."
          : "Há mais sinais do que isso. Procure em toda a escala, inclusive sinais baixos e largos (OH, NH, COOH).");
      }
    };
    $("m-btn-2b").onclick = () => {
      const vals = a.sinais.map((_, i) => parseNum($("m-h-" + i).value));
      if (vals.some(v => v === null)) return err("m-msg-2b", "Preencha o nº de H de todos os sinais.");
      const certos = vals.map((v, i) => Math.round(v) === a.sinais[i].h);
      certos.forEach((c, i) => { $("m-row-" + i).classList.toggle("ok", c); $("m-row-" + i).classList.toggle("bad", !c); });
      if (certos.every(Boolean)){
        S.dados.hs = vals.map(Math.round);
        ok("m-msg-2b", `✅ Integração resolvida: ${a.sinais.map((s, i) => `<b>${letra(i)}</b> = ${s.h}H`).join(" · ")} (total ${a.nH} H, como na fórmula).`);
        return avancar(2);
      }
      S.erros[2]++; save();
      const soma = vals.reduce((x, y) => x + Math.round(y), 0);
      const menor = Math.min(...a.sinais.map(s => s.integral));
      err("m-msg-2b", soma !== a.nH
        ? `A soma dos seus H dá ${soma}, mas a fórmula tem <b>${a.nH} H</b>. Divida cada integral por ${br(menor, 1)} (a menor) e veja a proporção.`
        : `A soma bate (${a.nH}), mas a distribuição não. Refaça a divisão pela menor integral (${br(menor, 1)}): ${a.sinais.map(s => br(s.integral / menor, 2)).join(" : ")}.`);
    };
    if (S.dados.nSinais){ $("m-ns").value = S.dados.nSinais; ok("m-msg-2a", `✅ ${S.dados.nSinais} sinais.`); show2b(); }
    if (S.dados.hs){ S.dados.hs.forEach((h, i) => { $("m-h-" + i).value = h; $("m-row-" + i).classList.add("ok"); }); }
  }

  /* ---------- ETAPA 3 · DESDOBRAMENTO ---------- */
  function stage3(){
    const a = am(), c = a.chave, s = sig(c.i);
    const pedeJ = c.J !== null && c.J !== undefined;
    return card(3, "Desdobramento", `
      <h3>🔀 Leia o desdobramento do sinal <span style="color:var(--warm)">${letra(c.i)}</span> (δ ${br(s.d, 2)})</h3>
      <p class="muted">Use a <b>ampliação</b> do sinal em laranja.</p>
      <p style="margin-top:8px"><b>a)</b> Qual é a multiplicidade?</p>
      <div class="chips" id="m-mult">${MULTS.map(m => `<button class="chip" data-v="${m}">${m}</button>`).join("")}</div>
      <p style="margin-top:12px"><b>b)</b> Quantos H existem nos carbonos <b>vizinhos</b> (regra do n + 1)?</p>
      <div class="row"><label class="muted">n =</label>
        <input class="input mono" id="m-viz" inputmode="numeric" placeholder="0" style="max-width:110px">
        ${pedeJ ? `<label class="muted" style="margin-left:8px">${c.Jtodos.length > 1 ? "maior J" : "J"} (Hz) =</label>
        <input class="input mono" id="m-J" inputmode="decimal" placeholder="0,0" style="max-width:110px">` : ""}</div>
      ${pedeJ ? `<p class="small muted">${c.Jtodos.length > 1 ? "<b>c)</b> Este sinal tem duas constantes diferentes. Meça a <b>maior</b>: a distância entre as linhas externas de cada par." : "<b>c)</b> J = diferença, em Hz, entre duas linhas vizinhas do multipleto."}</p>` : ""}
      <button class="btn btn-primary" id="m-btn-3">Verificar</button>
      <div class="msg" id="m-msg-3"></div>
      <details class="help"><summary>Precisa de uma dica?</summary><div>Conte as linhas da ampliação: 1 = singleto, 2 = dubleto, 3 = tripleto, 4 = quarteto…
        O nº de linhas é <b>n + 1</b>, em que n é o nº de H vizinhos (nos carbonos ao lado). H de OH e NH normalmente não acoplam.
        As intensidades seguem o triângulo de Pascal (1:1 · 1:2:1 · 1:3:3:1…).</div></details>`);
  }
  function bind3(){
    const a = am(), c = a.chave, pedeJ = c.J !== null && c.J !== undefined;
    chipGroup("m-mult");
    $("m-btn-3").onclick = () => {
      const m = chipVal("m-mult"), v = parseNum($("m-viz").value), J = pedeJ ? parseNum($("m-J").value) : null;
      if (!m || v === null || (pedeJ && J === null)) return err("m-msg-3", `Escolha a multiplicidade e preencha ${pedeJ ? "os dois campos" : "o nº de vizinhos"}.`);
      const probs = [];
      if (m !== c.mult) probs.push(c.mult === "dubleto de dubletos"
        ? "Conte as linhas: são <b>4 linhas de mesma altura</b>, mas não na proporção 1:3:3:1. Isso acontece quando o H tem dois vizinhos <b>diferentes</b> (dois J diferentes)."
        : c.mult === "singleto" ? "O sinal tem uma única linha." : `Conte de novo as linhas da ampliação e observe as alturas relativas.`);
      if (Math.round(v) !== c.vizinhos) probs.push(c.mult === "singleto"
        ? "Singleto = nenhum H vizinho (n = 0)."
        : c.mult === "dubleto de dubletos" ? "Cada um dos dois vizinhos diferentes desdobra o sinal em dois: n = 2 (1 + 1)."
        : `Pela regra do n + 1, um ${m === c.mult ? c.mult : "sinal"} com ${c.vizinhos + 1} linhas tem n = nº de linhas − 1.`);
      if (pedeJ && Math.abs(J - c.J) > 0.6) probs.push(`Para J, subtraia as posições (em Hz) de duas linhas vizinhas na ampliação${c.Jtodos.length > 1 ? " — a maior separação" : ""}.`);
      if (probs.length){ S.erros[3]++; save(); return err("m-msg-3", probs.join("<br>")); }
      S.dados.mult = c.mult; S.dados.vizinhos = c.vizinhos; if (pedeJ) S.dados.J = J;
      let extra = "";
      if (pedeJ && c.Jtodos.length > 1) extra = ` Os J deste sinal são ${c.Jtodos.map(x => br(x, 1)).join(" e ")} Hz: ${c.J >= 11 ? "o maior é típico de H em posição <b>trans</b> numa ligação dupla (11–18 Hz)" : "acoplamentos com dois vizinhos diferentes"}.`;
      else if (pedeJ && c.J >= 6 && c.J <= 8) extra = " J ≈ 7 Hz é o valor típico de H em carbonos vizinhos com livre rotação (³J).";
      else if (pedeJ && c.J >= 8) extra = " J de 7–10 Hz entre H aromáticos indica posição <b>orto</b>.";
      ok("m-msg-3", `✅ Isso! ${c.mult[0].toUpperCase() + c.mult.slice(1)}${c.mult === "singleto" ? ": o grupo não tem H vizinhos" : `: o grupo tem <b>${c.vizinhos} H vizinho(s)</b>`}${pedeJ ? `, J = ${br(c.J, 1)} Hz` : ""}.${extra}`);
      avancar(3);
    };
  }

  /* ---------- ETAPA 4 · DESLOCAMENTO QUÍMICO ---------- */
  function stage4(){
    const a = am(), s = sig(a.diag.i);
    return card(4, "Deslocamento químico", `
      <h3>🧲 Por que o sinal <span style="color:var(--warm)">${letra(a.diag.i)}</span> aparece em δ ${br(s.d, 2)}?</h3>
      <p class="muted">Pense em <b>blindagem</b>: eletronegatividade dos vizinhos, hibridização, anisotropia magnética e ligação de hidrogênio.</p>
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
        ok("m-msg-4", `✅ Exatamente. Guarde essa pista: ela diz a que grupo o sinal ${letra(a.diag.i)} (${s.h}H) está ligado.`);
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
    return `Suas pistas: <b>${esc(a.formula)}</b> · IDH ${a.IDH} · ${a.sinais.length} sinais: ` +
      a.sinais.map((s, i) => `<b>${letra(i)}</b> ${br(s.d, 2)} (${s.h}H, ${s.abrev})`).join(" · ") + ".";
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
      <p class="muted">Escreva 2 ou 3 frases explicando <b>como</b> o espectro levou à sua identificação. Cite pelo menos duas evidências (IDH, integração, desdobramento, deslocamento químico…).</p>
      <div class="field"><textarea class="input" id="m-conc" placeholder="O sinal em ... ppm, um ... de ...H, indica ... O IDH ... mostra que ..."></textarea></div>
      <button class="btn btn-primary" id="m-btn-6" style="width:100%">🏁 Concluir missão</button>
      <div class="msg" id="m-msg-6"></div>`);
  }
  function bind6(){ $("m-btn-6").onclick = concluir; }

  async function concluir(){
    const txt = $("m-conc").value.trim();
    if (txt.length < 40){ S.erros[6]++; save(); return err("m-msg-6", "Escreva um pouco mais (pelo menos 2 frases)."); }
    if (!/\d/.test(txt)){ S.erros[6]++; save(); return err("m-msg-6", "Cite pelo menos um valor do espectro (um δ em ppm, um nº de H ou um J) como evidência."); }
    S.dados.conclusao = txt;
    const btn = $("m-btn-6"); btn.disabled = true; btn.textContent = "Registrando…";
    const tempoMin = ((Date.now() - S.inicio) / 60000).toFixed(1);
    const a = am(), d = S.dados, c = a.chave;
    const payload = {
      tipo: "missao",
      nome: S.nome, turma: S.turma, dataHora: new Date().toLocaleString("pt-BR"),
      amostra_n: S.indice + 1, amostra: a.nome, formula: a.formulaTxt, classe: a.classe,
      IDH: a.IDH, n_sinais: a.sinais.length,
      sinal_chave: `${br(sig(c.i).d, 2)} ppm`, multiplicidade: c.mult, vizinhos: c.vizinhos, J_real: c.J ?? "", J_aluno: d.J ?? "",
      sinal_deslocamento: `${br(sig(a.diag.i).d, 2)} ppm`,
      identificacao: d.identificacao, conclusao: txt,
      erros_idh: S.erros[1], erros_integracao: S.erros[2], erros_desdobramento: S.erros[3],
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
    const a = am(), c = a.chave;
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
        <p class="small muted" style="margin:-2px 0 10px">${a.sinais.map((s, i) => `<b class="hl">${letra(i)}</b> ${esc(s.rot)} (${br(s.d, 2)}, ${s.h}H, ${esc(s.mult)})`).join(" · ")}</p>
        <div class="props" style="text-align:left">
          <div class="prop"><div class="k">Fórmula</div><div class="v">${esc(a.formula)}</div><div class="small muted">IDH ${a.IDH} · ${esc(a.classe)}</div></div>
          <div class="prop"><div class="k">Sinais</div><div class="v">${a.sinais.length}</div><div class="small muted">${a.sinais.map(s => s.h + "H").join(" : ")}</div></div>
          <div class="prop"><div class="k">Sinal-chave</div><div class="v" style="font-size:1rem">${esc(c.mult)}</div><div class="small muted">δ ${br(sig(c.i).d, 2)} · n = ${c.vizinhos}${c.J ? ` · J = ${br(c.J, 1)} Hz` : ""}</div></div>
          <div class="prop ${totErros ? "" : "ok"}"><div class="k">Tentativas erradas</div><div class="v">${totErros}</div><div class="small muted">${totErros ? "em todas as etapas" : "perfeito!"}</div></div>
        </div>
        <div style="margin:10px 0 16px">${reg}</div>
        <div class="row" style="justify-content:center">
          <a class="btn btn-primary" href="#questionario">📝 Agora responda ao questionário →</a>
          ${MINICURSO.numaresUrl ? `<a class="btn btn-ghost" href="${esc(MINICURSO.numaresUrl)}" target="_blank" rel="noopener">🧲 Treinar no NUMARES ↗</a>` : ""}
        </div>
      </div>`;
    Rmn.render($("m-final-spec"), { sinais: a.sinais, rotulos: rot, integral: true, mostrarH: true });
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
