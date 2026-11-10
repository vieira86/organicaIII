/* ============================================================
   enigma-elucidacao.js — motor dos "Enigmas de Elucidação Estrutural"
   Química Orgânica III — Licenciatura, IFRO Ji-Paraná

   Mesmo formato dos enigmas da Química Orgânica II:
     0) Nome + turma (+ aviso do que deve ir para o AVA)
     1…n) Etapas trancadas. Cada etapa traz um NOVO DADO
          (análise elementar, espectro de massas, IV, RMN…) e
          perguntas que aparecem uma de cada vez. Resolver todas
          destranca a próxima etapa e o próximo dado.
     Final) Código de 4 algarismos → registro na planilha
          (posição de chegada calculada pelo Apps Script).

   O conteúdo de cada enigma (dados, perguntas, hashes) está em
   assets/js/enigma-elucidacao-dados-N.js (variável ENIGMA).
   Nenhuma resposta fica em texto puro: só hashes SHA-256 e o
   texto final cifrado com o código. É uma barreira pedagógica
   (dá para quebrar por força bruta), não segurança de verdade.
   O gabarito está em google-apps-script/enigmas-elucidacao/
   COMO_CONFIGURAR.md, fora do site.

   O progresso fica salvo no navegador: se a página recarregar,
   o aluno continua de onde parou.
   ============================================================ */

/* Endereços das plataformas de apoio (ajuste aqui se mudarem) */
const ENIG_FERRAMENTAS = {
  spectros: { nome: "Spectros", url: "https://vieira86.github.io/spectros/", ico: "⚡", txt: "espectrometria de massas" },
  iris:     { nome: "IRIS",     url: "https://vieira86.github.io/iris/",     ico: "🌈", txt: "interpretação de IV" },
  numares:  { nome: "NUMARES",  url: "https://vieira86.github.io/numares/",  ico: "🧲", txt: "simulação de RMN de ¹H e ¹³C" }
};

const enig = { nome: "", turma: "", inicio: 0, erros: [], prog: 0, codigo: null, done: false };
let ENIG_QS = [];          // lista achatada de perguntas: { etapa, q, i }
const enigKey = () => "enigma-elucidacao-" + ENIGMA.id;
const $e = id => document.getElementById(id);

async function enigSha(msg){
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(msg));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
}
const enigH = (qid, v) => enigSha(`${ENIGMA.salt}|${qid}|${v}`);
function enigShake(el){ el.classList.remove("enig-shake"); void el.offsetWidth; el.classList.add("enig-shake"); }
function enigSave(){ try { localStorage.setItem(enigKey(), JSON.stringify(enig)); } catch(e){} }
function enigNum(v){ const x = parseFloat(String(v).replace(",", ".").trim()); return isNaN(x) ? null : x; }
function enigEsc(s){ return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }

/* texto final: XOR com fluxo SHA-256(sal|codigo|bloco) */
async function enigDecifra(hex, code){
  const bytes = new Uint8Array(hex.match(/../g).map(h => parseInt(h, 16)));
  const out = new Uint8Array(bytes.length);
  for (let b = 0; b * 32 < bytes.length; b++){
    const k = await enigSha(`${ENIGMA.salt}|final|${code}|${b}`);
    for (let i = 0; i < 32 && b * 32 + i < bytes.length; i++) out[b * 32 + i] = bytes[b * 32 + i] ^ parseInt(k.substr(i * 2, 2), 16);
  }
  return new TextDecoder().decode(out);
}

/* ---------- ENTRADA ---------- */
function initEnigma(){
  ENIG_QS = [];
  ENIGMA.etapas.forEach((et, e) => et.questoes.forEach((q, i) => ENIG_QS.push({ e, q, i })));
  let saved = null;
  try { saved = JSON.parse(localStorage.getItem(enigKey()) || "null"); } catch(e){}
  if (saved && saved.nome){
    $e("enig-body").innerHTML = `
      <div class="enig-card enig-resume">
        <h3>Bem-vindo(a) de volta, ${enigEsc(saved.nome.split(" ")[0])}!</h3>
        <p class="enig-sub">Você já ${saved.done ? "concluiu" : "começou"} este enigma neste navegador.</p>
        <div class="enig-row" style="justify-content:center">
          <button class="btn btn-primary" id="enig-btn-cont">${saved.done ? "Ver meu resultado" : "Continuar de onde parei →"}</button>
          <button class="btn btn-ghost" id="enig-btn-novo">Sou outra pessoa</button>
        </div>
      </div>`;
    $e("enig-btn-cont").onclick = () => { Object.assign(enig, saved); renderEnigma(); };
    $e("enig-btn-novo").onclick = () => { try { localStorage.removeItem(enigKey()); } catch(e){} renderGate(); };
  } else renderGate();
}

function avaHTML(){
  return `<div class="enig-ava">
      <strong class="ava-title">⚠️ ATENÇÃO: SÓ SERÁ COMPUTADO SE VOCÊ COLOCAR NO AVA:</strong>
      <ul>${ENIGMA.ava.map(t => `<li>${t}</li>`).join("")}</ul>
      <p style="margin:8px 0 0; font-size:0.9rem;">📝 Tenha papel, caneta e calculadora à mão e guarde seus cálculos durante o desafio.</p>
    </div>`;
}

function renderGate(){
  $e("enig-body").innerHTML = `
    <div class="enig-card enig-gate">
      <h3>Antes de começar</h3>
      <p class="enig-sub">Digite seu nome e turma. Eles serão registrados junto com a sua ordem de chegada quando você
        decifrar o código final.</p>
      <div class="field"><label for="enig-input-name">Nome completo</label>
        <input type="text" id="enig-input-name" placeholder="Seu nome" autocomplete="name"></div>
      <div class="field"><label for="enig-input-turma">Turma</label>
        <input type="text" id="enig-input-turma" placeholder="Ex.: Licenciatura em Química — Análise Orgânica" autocomplete="off"></div>
      ${avaHTML()}
      <p class="hint-small" id="enig-gate-error" style="color: var(--danger); display:none;">Preencha os dois campos para continuar.</p>
      <button class="btn btn-primary" id="enig-btn-start" style="width:100%; justify-content:center; margin-top:14px">Aceitar a missão →</button>
    </div>`;
  $e("enig-btn-start").onclick = () => {
    const nome = $e("enig-input-name").value.trim(), turma = $e("enig-input-turma").value.trim();
    if (!nome || !turma){ $e("enig-gate-error").style.display = "block"; return; }
    Object.assign(enig, { nome, turma, inicio: Date.now(), erros: ENIGMA.etapas.map(() => 0).concat([0]), prog: 0, codigo: null, done: false });
    enigSave();
    renderEnigma();
  };
}

/* ---------- PÁGINA DO ENIGMA ---------- */
function ferramentasHTML(){
  return `<div class="enig-tools">${Object.values(ENIG_FERRAMENTAS).map(f =>
    `<a class="enig-tool" href="${f.url}" target="_blank" rel="noopener"><b>${f.ico} ${f.nome} ↗</b><small>${f.txt}</small></a>`).join("")}</div>`;
}
function etapaAtual(){ return enig.prog >= ENIG_QS.length ? ENIGMA.etapas.length : ENIG_QS[enig.prog].e; }

function renderEnigma(){
  const nEt = ENIGMA.etapas.length;
  $e("enig-body").innerHTML = `
    <div class="enig-card">
      <h3>${ENIGMA.historia.titulo}</h3>
      <div class="enig-story">${ENIGMA.historia.texto}</div>
      <p class="enig-sub" style="margin-top:12px"><b>Ferramentas de apoio:</b> use as plataformas abaixo para conferir
        suas interpretações. Cada etapa indica qual delas ajuda mais.</p>
      ${ferramentasHTML()}
    </div>
    <div class="enig-progress">
      ${ENIGMA.etapas.map((et, e) => `<span class="enig-pill" data-p="${e}">${et.ico} ${e + 1} · ${et.pill}</span>`).join("")}
      <span class="enig-pill" data-p="${nEt}">🔐 ${nEt + 1} · Código</span>
    </div>
    ${ENIGMA.etapas.map((et, e) => etapaHTML(et, e)).join("")}
    <div class="enig-card enig-stage locked" id="enig-stage-${nEt}">
      <span class="enig-stage-tag" data-t="Etapa ${nEt + 1} · O código final">🔒 Etapa ${nEt + 1} · O código final</span>
      <div class="enig-stage-body">
        <h3>🕵️ ${ENIGMA.codigo.titulo}</h3>
        <p class="enig-sub">${ENIGMA.codigo.texto}</p>
        <div class="enig-formula">${ENIGMA.codigo.formula}</div>
        <div class="enig-safe" id="enig-safe">
          <div class="enig-lock-icon">🔒</div>
          <div class="enig-digits">${Array.from({ length: ENIGMA.codigo.len }, (_, i) =>
            `<input type="tel" inputmode="numeric" maxlength="1" class="enig-digit" data-i="${i}" aria-label="Algarismo ${i + 1}">`).join("")}</div>
          <button class="btn btn-primary" id="enig-btn-unlock">Destrancar 🔓</button>
          <div class="enig-msg" id="enig-msg-codigo"></div>
        </div>
      </div>
    </div>
    <div id="enig-result"></div>`;
  ENIGMA.etapas.forEach((et, e) => { desenhaDados(et, e); et.questoes.forEach((q, i) => bindQuestao(q, e, i)); });
  setupDigits();
  $e("enig-btn-unlock").onclick = checkCodigo;
  // restaura o progresso salvo
  for (let k = 0; k < enig.prog; k++){
    const { e, i } = ENIG_QS[k];
    const box = $e(`enig-q-${e}-${i}`);
    box.classList.remove("hidden");
    box.querySelectorAll("input, button, select").forEach(x => x.disabled = true);
    const m = $e(`enig-msg-${e}-${i}`); m.textContent = "✔ Resolvida."; m.className = "enig-msg ok";
  }
  if (enig.prog < ENIG_QS.length){ const { e, i } = ENIG_QS[enig.prog]; $e(`enig-q-${e}-${i}`).classList.remove("hidden"); }
  atualizaEtapas();
  if (enig.done && enig.codigo) finalizar(true);
}

function etapaHTML(et, e){
  const f = et.ferramenta && ENIG_FERRAMENTAS[et.ferramenta];
  return `
    <div class="enig-card enig-stage locked" id="enig-stage-${e}">
      <span class="enig-stage-tag" data-t="Etapa ${e + 1} · ${et.titulo}">🔒 Etapa ${e + 1} · ${et.titulo}</span>
      <div class="enig-stage-body">
        <h3>${et.ico} ${et.chamada}</h3>
        ${et.historia ? `<div class="enig-story">${et.historia}</div>` : ""}
        <div class="enig-dados enig-spec"><div class="enig-dados-cap"><span>${et.dados.legenda || ""}</span><span>${et.dados.direita || ""}</span></div>
          <div id="enig-dados-${e}"></div>${et.dados.nota ? `<p class="enig-sub" style="font-size:.85rem; margin-top:6px">${et.dados.nota}</p>` : ""}</div>
        ${f ? `<div class="enig-tip-tool">${f.ico} Dica: confira sua interpretação no <a href="${f.url}" target="_blank" rel="noopener">${f.nome} ↗</a>${et.dicaFerramenta ? " — " + et.dicaFerramenta : ""}.</div>` : ""}
        ${et.questoes.map((q, i) => questaoHTML(q, e, i, et.questoes.length)).join("")}
      </div>
    </div>`;
}

function desenhaDados(et, e){
  const el = $e(`enig-dados-${e}`), d = et.dados;
  if (d.tipo === "html") el.innerHTML = d.html;
  else if (d.tipo === "ms") Espectro.render(el, { picos: d.picos, xmin: d.xmin, xmax: d.xmax, limiteRotulo: 4 });
  else if (d.tipo === "ir") IR.render(el, { bandas: d.bandas });
  else if (d.tipo === "rmn") Rmn.render(el, { sinais: d.sinais, ampliacoes: true, xmax: d.xmax });
  else if (d.tipo === "c13") C13.render(el, { sinais: d.sinais, modo: "dept", xmax: 220 });
}

function questaoHTML(q, e, i, n){
  const id = `${e}-${i}`;
  let corpo = "";
  if (q.tipo === "opcoes"){
    corpo = `<div class="enig-options" id="enig-opts-${id}">${Object.entries(q.opcoes).map(([l, t]) =>
      `<button class="enig-opt" data-v="${l}"><b>${l})</b> ${t}</button>`).join("")}</div>`;
  } else if (q.tipo === "num"){
    corpo = `<div class="enig-row"><input type="text" inputmode="decimal" class="enig-input" id="enig-in-${id}" placeholder="?">
      ${q.unidade ? `<span class="enig-unit">${q.unidade}</span>` : ""}<button class="btn btn-primary" id="enig-btn-${id}">Verificar</button></div>`;
  } else if (q.tipo === "formula"){
    corpo = `<div class="enig-formula-inputs">${q.elementos.map(el =>
      `<span class="el">${el}</span><input type="text" inputmode="numeric" class="enig-input" id="enig-f-${id}-${el}" placeholder="?" aria-label="Número de ${el}">`).join("")}</div>
      <div style="text-align:center"><button class="btn btn-primary" id="enig-btn-${id}">Verificar fórmula</button></div>`;
  } else if (q.tipo === "tabela"){
    corpo = `<table class="enig-tabela"><thead><tr>${q.colunas.map(c => `<th>${c}</th>`).join("")}<th>${q.pergunta}</th></tr></thead><tbody>
      ${q.linhas.map((l, k) => `<tr>${l.map(c => `<td class="num">${c}</td>`).join("")}<td><input type="text" inputmode="numeric" class="enig-input" id="enig-t-${id}-${k}" placeholder="?"></td></tr>`).join("")}
      </tbody></table><button class="btn btn-primary" id="enig-btn-${id}">Verificar</button>`;
  } else if (q.tipo === "estrutura"){
    corpo = `<div class="enig-cands" id="enig-cands-${id}">${q.candidatos.map((c, k) =>
      `<button class="enig-cand" data-v="${c.id}"><div class="mol">${ESTRUTURAS[c.svg] || ""}</div><div>${"ABCDEF"[k]}</div></button>`).join("")}</div>`;
  }
  return `<div class="enig-q hidden" id="enig-q-${id}">
      <span class="enig-q-num">Pergunta ${i + 1} de ${n}</span>
      <h4>${q.enunciado}</h4>${q.apoio ? `<p class="enig-sub">${q.apoio}</p>` : ""}
      ${corpo}
      <div class="enig-msg" id="enig-msg-${id}"></div>
    </div>`;
}

/* ---------- conferência ---------- */
function bindQuestao(q, e, i){
  const id = `${e}-${i}`;
  const msg = $e(`enig-msg-${id}`);
  const erro = (texto, alvo) => {
    enig.erros[e]++; enigSave();
    if (alvo) enigShake(alvo);
    msg.textContent = texto; msg.className = "enig-msg err";
  };
  const acerto = () => {
    $e(`enig-q-${id}`).querySelectorAll("input, button, select").forEach(x => x.disabled = true);
    msg.innerHTML = "✔ " + (q.ok || "Isso mesmo!"); msg.className = "enig-msg ok";
    avancar();
  };
  if (q.tipo === "opcoes"){
    $e(`enig-opts-${id}`).querySelectorAll(".enig-opt").forEach(b => b.onclick = async () => {
      if (await enigH(q.qid, b.dataset.v) === q.hash){ b.classList.add("right"); acerto(); }
      else { b.classList.add("wrong"); b.disabled = true; erro("Não é essa. " + (q.dica || ""), $e(`enig-opts-${id}`)); }
    });
  } else if (q.tipo === "num"){
    const inp = $e(`enig-in-${id}`);
    const go = async () => {
      const v = enigNum(inp.value);
      if (v === null){ msg.textContent = "Digite um número (pode usar vírgula)."; msg.className = "enig-msg warn"; return; }
      const h = await enigH(q.qid, Math.round(v * (q.fator || 1)));
      if ([].concat(q.hash).includes(h)){ inp.classList.add("ok"); acerto(); }
      else { inp.classList.add("bad"); setTimeout(() => inp.classList.remove("bad"), 900); erro("Ainda não. " + (q.dica || ""), inp); }
    };
    $e(`enig-btn-${id}`).onclick = go;
    inp.addEventListener("keydown", ev => { if (ev.key === "Enter") go(); });
  } else if (q.tipo === "formula"){
    const go = async () => {
      const errados = [];
      for (const el of q.elementos){
        const inp = $e(`enig-f-${id}-${el}`), v = enigNum(inp.value);
        const okEl = v !== null && await enigH(q.qid, `${el}:${Math.round(v)}`) === q.hash[el];
        inp.classList.toggle("ok", okEl); inp.classList.toggle("bad", !okEl);
        if (!okEl) errados.push(el);
      }
      if (!errados.length) acerto();
      else erro(`Confira: ${errados.join(", ")}. ${q.dica || ""}`, $e(`enig-q-${id}`).querySelector(".enig-formula-inputs"));
    };
    $e(`enig-btn-${id}`).onclick = go;
  } else if (q.tipo === "tabela"){
    $e(`enig-btn-${id}`).onclick = async () => {
      const vals = q.linhas.map((_, k) => enigNum($e(`enig-t-${id}-${k}`).value));
      if (vals.some(v => v === null)){ msg.textContent = "Preencha todas as linhas."; msg.className = "enig-msg warn"; return; }
      if (await enigH(q.qid, vals.map(Math.round).join(",")) === q.hash) acerto();
      else erro("Ainda não. " + (q.dica || ""), $e(`enig-q-${id}`).querySelector("table"));
    };
  } else if (q.tipo === "estrutura"){
    $e(`enig-cands-${id}`).querySelectorAll(".enig-cand").forEach(b => b.onclick = async () => {
      if (await enigH(q.qid, b.dataset.v) === q.hash){ b.classList.add("right"); acerto(); }
      else { b.classList.add("wrong"); b.disabled = true; erro((q.dicas && q.dicas[b.dataset.v]) || q.dica || "Não é essa.", $e(`enig-cands-${id}`)); }
    });
  }
}

function avancar(){
  const antes = etapaAtual();
  enig.prog++; enigSave();
  const depois = etapaAtual();
  setTimeout(() => {
    if (enig.prog < ENIG_QS.length){
      const { e, i } = ENIG_QS[enig.prog];
      const box = $e(`enig-q-${e}-${i}`);
      box.classList.remove("hidden");
      if (depois === antes) box.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    atualizaEtapas();
    if (depois !== antes){
      const st = $e(`enig-stage-${depois}`);
      setTimeout(() => st.scrollIntoView({ behavior: "smooth", block: "start" }), 200);
    }
  }, 550);
}

function atualizaEtapas(){
  const atual = enig.done ? ENIGMA.etapas.length + 1 : etapaAtual();
  for (let e = 0; e <= ENIGMA.etapas.length; e++){
    const st = $e(`enig-stage-${e}`), tag = st.querySelector(".enig-stage-tag");
    st.classList.toggle("locked", e > atual);
    st.classList.toggle("solved", e < atual);
    tag.textContent = (e < atual ? "✅ " : e > atual ? "🔒 " : "🔓 ") + tag.dataset.t;
  }
  document.querySelectorAll(".enig-pill").forEach(p => {
    const n = +p.dataset.p;
    p.classList.toggle("done", n < atual); p.classList.toggle("on", n === atual);
  });
}

/* ---------- CÓDIGO FINAL ---------- */
function setupDigits(){
  const inputs = Array.from(document.querySelectorAll(".enig-digit"));
  inputs.forEach((inp, i) => {
    inp.addEventListener("input", () => {
      inp.value = inp.value.replace(/[^0-9]/g, "").slice(0, 1);
      if (inp.value && i < inputs.length - 1) inputs[i + 1].focus();
    });
    inp.addEventListener("keydown", ev => {
      if (ev.key === "Backspace" && !inp.value && i > 0) inputs[i - 1].focus();
      if (ev.key === "Enter") checkCodigo();
    });
  });
}
async function checkCodigo(){
  const inputs = Array.from(document.querySelectorAll(".enig-digit"));
  const code = inputs.map(i => i.value).join("");
  const msg = $e("enig-msg-codigo");
  if (code.length < ENIGMA.codigo.len){ msg.textContent = `Digite os ${ENIGMA.codigo.len} algarismos do código.`; msg.className = "enig-msg warn"; return; }
  const h = await enigH("codigo", code);
  if (h === ENIGMA.codigo.hash){
    enig.codigo = code; enig.done = true; enigSave();
    finalizar(false);
  } else {
    enig.erros[ENIGMA.etapas.length]++; enigSave();
    enigShake(document.querySelector(".enig-digits"));
    msg.textContent = (ENIGMA.codigo.dicas && ENIGMA.codigo.dicas[h]) || "Código incorreto. Revise os valores que você encontrou nas etapas e a conta.";
    msg.className = "enig-msg err";
    inputs.forEach(i => { i.value = ""; }); inputs[0].focus();
  }
}

async function finalizar(restaurado){
  const safe = $e("enig-safe");
  safe.classList.add("unlocked");
  safe.querySelector(".enig-lock-icon").textContent = "🔓";
  const inputs = Array.from(document.querySelectorAll(".enig-digit"));
  inputs.forEach((i, k) => { i.value = enig.codigo[k]; i.disabled = true; });
  $e("enig-btn-unlock").disabled = true;
  $e("enig-msg-codigo").textContent = "🔓 Código aceito!"; $e("enig-msg-codigo").className = "enig-msg ok";
  atualizaEtapas();
  const fin = JSON.parse(await enigDecifra(ENIGMA.final, enig.codigo));
  const totalErros = enig.erros.reduce((a, b) => a + b, 0);
  if (!enig.fim) { enig.fim = Date.now(); enigSave(); }
  const minutos = ((enig.fim - enig.inicio) / 60000).toFixed(1).replace(".", ",");
  $e("enig-result").innerHTML = `
    <div class="enig-card">
      <div class="enig-final enig-reveal">
        <span class="big">${ENIGMA.emoji}</span>
        <strong>Missão cumprida, ${enigEsc(enig.nome.split(" ")[0])}!</strong><br>
        <span class="enig-sub">A molécula é <b style="color:var(--enig-acc-soft)">${fin.nome}</b> · ${fin.formula}</span>
        <div class="mol">${fin.svg}</div>
        <p class="enig-sub" style="text-align:left">${fin.texto}</p>
        <span class="enig-sub">Tempo: ${minutos} min · erros no caminho: ${totalErros}</span>
        <span class="enig-registered" id="enig-reg-status">📝 Registrando na planilha…</span>
      </div>
      ${avaHTML()}
    </div>`;
  if (!restaurado) $e("enig-result").scrollIntoView({ behavior: "smooth", block: "start" });
  registrar(minutos, totalErros);
}

function registrar(minutos, total){
  const st = $e("enig-reg-status");
  if (typeof ELUCIDACAO_WEBAPP_URL === "undefined" || !ELUCIDACAO_WEBAPP_URL){
    st.textContent = "Registro em planilha não configurado — mostre esta tela ao professor."; return;
  }
  fetch(ELUCIDACAO_WEBAPP_URL, {
    method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ tipo: "enigma_elucidacao", enigma: ENIGMA.id, nome: enig.nome, turma: enig.turma,
      dataHora: new Date().toLocaleString("pt-BR"), erros: enig.erros, etapas: ENIGMA.etapas.map(e => e.pill).concat(["Código"]),
      totalErros: total, tempoMin: minutos })
  }).then(r => r.json()).then(d => {
    if (d && d.status === "ok" && d.posicao){
      st.innerHTML = d.repetido ? `Você já tinha concluído antes — sua posição continua sendo <strong>${d.posicao}º</strong>.`
        : `✅ Registrado! Você foi o(a) <strong>${d.posicao}º</strong> a decifrar este enigma.`;
    } else st.textContent = "✅ Registrado com seu nome e turma.";
  }).catch(() => { st.textContent = "Não foi possível confirmar o registro (conexão instável) — mostre esta tela ao professor."; });
}

document.addEventListener("DOMContentLoaded", initEnigma);
