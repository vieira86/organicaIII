/* ============================================================
   apocalipse-quiz.js — Desafio "Molécula-Apocalipse" (Kaká e o
   antídoto W-01)
   Química Orgânica III — Licenciatura, IFRO Ji-Paraná

   Baseado na Lista de Exercícios "Molécula-Apocalipse": um vírus da
   Umbrella Corporation transforma pessoas em zumbis, e Kaká precisa
   reconstruir, com reações clássicas de formação de ligação C–C
   (Michael, síntese do acetato de isoamila, condensação e Dieckmann),
   a molécula-antídoto W-01, de fórmula CₓHᵧO𝓏.

   Fluxo (mesma ideia do Cofre Químico de Orgânica I):
     1) Gate (nome + turma)
     2) Enunciado completo + estrutura dos reagentes X1/X2 + os 4
        passos da síntese + input de X, Y e Z (índices da fórmula do
        antídoto)
     3) Se X, Y, Z baterem com o hash guardado, o site pede ao Apps
        Script (Code.gs) um SORTEIO de prêmio. Quem sorteia é sempre
        o servidor — nunca este arquivo — assim ninguém consegue
        manipular o resultado pelo "Ver código-fonte" ou pelo console
        do navegador.

   A resposta correta (X, Y, Z) NÃO fica em texto puro no código — só
   o hash SHA-256 dela — para não aparecer só de abrir o "Ver
   código-fonte". Ainda assim, é uma barreira pedagógica, não uma
   senha de banco: com tempo e um script, dá pra quebrar por força
   bruta.
   ============================================================ */

// Hash de "X-Y-Z" (índices da fórmula C_X H_Y O_Z do antídoto W-01),
// sempre em texto puro sem espaços, ex.: "26-32-4".
const APOC_PASSWORD_HASH = "09068a48fa6897bb30e9b06b7e193a849c085308efebaf3303f2dc46d51469b8";

// Só para exibir o quadro informativo ANTES de abrir o desafio. Quem
// controla de verdade as vagas é google-apps-script/Code.gs — se
// mudar os números lá (APOC_PRIZES), mude aqui também para o texto
// continuar batendo com a realidade.
const APOC_PRIZES_INFO = [
  { label: "+5 pontos na prova",              vagas: 1 },
  { label: "+5 pontos na média dos trabalhos", vagas: 1 }
];
const APOC_TOTAL_VAGAS = APOC_PRIZES_INFO.reduce((s, p) => s + p.vagas, 0);
const APOC_CONSOLATION_LABEL = "+1 ponto na prova";

let apocState = { name: "", turma: "" };

function initApocalipse(){
  renderApocGate();
}

/* ---------- SHA-256 (Web Crypto, nativo do navegador) ---------- */
async function apocSha256Hex(message){
  const enc = new TextEncoder().encode(message);
  const buf = await crypto.subtle.digest("SHA-256", enc);
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
}

/* ---------- TELA 1: NOME + TURMA ---------- */
function renderApocGate(){
  const body = document.getElementById("apoc-body");
  body.innerHTML = `
    <div class="apoc-card apoc-gate">
      <h3 style="margin-top:0;">Antes de entrar no laboratório subterrâneo</h3>
      <p class="apoc-sub">Digite seu nome e turma. Isso é usado para registrar quem encontrou o antídoto
        e qual prêmio foi sorteado.</p>
      <div class="field">
        <label for="apoc-input-name">Nome completo</label>
        <input type="text" id="apoc-input-name" placeholder="Seu nome" autocomplete="name">
      </div>
      <div class="field">
        <label for="apoc-input-turma">Turma</label>
        <input type="text" id="apoc-input-turma" placeholder="Ex.: Licenciatura em Química" autocomplete="off">
      </div>
      <p class="hint-small" id="apoc-gate-error" style="color: var(--danger); display:none;">Preencha os dois campos para continuar.</p>
      <button class="btn btn-primary" id="apoc-btn-start" style="width:100%; justify-content:center;">Entrar no desafio ☣️</button>
    </div>
  `;
  document.getElementById("apoc-btn-start").addEventListener("click", () => {
    const name = document.getElementById("apoc-input-name").value.trim();
    const turma = document.getElementById("apoc-input-turma").value.trim();
    const err = document.getElementById("apoc-gate-error");
    if (!name || !turma){
      err.style.display = "block";
      return;
    }
    apocState.name = name;
    apocState.turma = turma;
    renderApocPuzzle();
  });
}

/* ---------- TELA 2: HISTÓRIA + SÍNTESE + SENHA ---------- */
function renderApocPuzzle(){
  const body = document.getElementById("apoc-body");
  body.innerHTML = `
    <div class="apoc-card">
      <h3 style="margin-top:0;">☣️ Ano 2031 — Umbrella Corporation</h3>
      <p>Um vírus experimental desenvolvido pela <strong>Umbrella Corporation</strong> sofreu uma mutação
        inesperada. Pessoas infectadas que são mordidas ou atacadas por indivíduos contaminados
        desenvolvem, em poucas horas, sintomas de transformação em zumbis. Várias cidades estão em
        quarentena. Os pesquisadores simplesmente desapareceram.</p>
      <p><strong>Kaká</strong>, um dos poucos químicos que ainda permanecem no laboratório subterrâneo da
        empresa, descobre nos arquivos do projeto que existe uma molécula capaz de impedir a progressão
        da infecção. Mas tem um probleminha: a estrutura da molécula foi destruída durante o ataque ao
        laboratório.</p>

      <div class="apoc-file">
        <div class="apoc-file-title">📁 Restaram apenas algumas informações no banco de dados</div>
        <ul class="apoc-file-list">
          <li><b>Identificação do composto:</b> W-01</li>
          <li><b>Massa molar:</b> aproximadamente XX g·mol⁻¹</li>
          <li><b>Fórmula molecular:</b> C<sub>X</sub>H<sub>Y</sub>O<sub>Z</sub></li>
          <li><b>Função:</b> inibir uma enzima essencial para a transformação celular causada pelo vírus.</li>
        </ul>
      </div>

      <p>Para piorar a situação, o laboratório possui apenas alguns reagentes disponíveis. Kaká precisa
        reconstruir a molécula a partir desses reagentes, utilizando exclusivamente
        <strong>reações clássicas de formação de ligações carbono–carbono</strong>.</p>
      <p class="apoc-sub" style="font-style:italic;">Ainda bem que Kaká era expert nas aulas de Orgânica
        III, pois o destino da humanidade depende dos seus conhecimentos...</p>

      <h3> Siga o passo a passo que Kaká propôs pra sua síntese</h3>

      <div class="apoc-mol-frame">
        <img src="assets/img/apocalipse-reagentes-x1-x2.png" alt="Estruturas dos compostos X1 e X2, reagentes de partida">
        <div class="apoc-mol-caption">Reagentes disponíveis no laboratório: Composto X1 e Composto X2</div>
      </div>

      <div class="apoc-step">
        <div class="apoc-step-tag">Parte 1</div>
        <p>Primeiro reagiu-se o composto X1 e o composto X2, obtendo o produto <b>Z1</b>, cuja fórmula
          molecular é <b>C₁₆H₂₀O</b>.</p>
        <p class="apoc-sub">(Faça o mecanismo e desenhe a estrutura do produto Z1)</p>
      </div>

      <div class="apoc-step">
        <div class="apoc-step-tag">Parte 2</div>
        <p>Kaká notou que a molécula Z1 tinha um cheiro terrível e não seria possível ingeri-la assim. Mas
          ele se recordou de uma linda aula experimental em que foi produzida uma molécula cujo cheiro
          era de banana. E ele a produziu novamente, usando os mesmos reagentes da aula prática que ele tanto gostou. 
          Essa molécula com cheiro de banana tem fórmula
          <b>C₇H₁₄O₂</b> e a rotulou como molécula <b>Z2</b>.</p>
        <p class="apoc-sub">(Faça o mecanismo e desenhe a estrutura do produto Z2)</p>
      </div>

      <div class="apoc-step">
        <div class="apoc-step-tag">Parte 3</div>
        <p>Kaká teve a brilhante ideia de misturar as substâncias Z1 e Z2, assim, notou que o produto formado
          não tinha mais cheiro algum. Ele gerou o enolato para a molécula Z1 e atacou a carbonila da Z2. 
          Essa molécula foi classificada como <b>Z3</b> e tem fórmula
          molecular igual a <b>C₁₈H₂₂O₂</b>.</p>
        <p class="apoc-sub">(Faça o mecanismo e desenhe a estrutura do produto Z3)</p>
      </div>

      <div class="apoc-step">
        <div class="apoc-step-tag">Parte 4 — indo para o produto final</div>
        <p>Utilizando a famosa <strong>reação de Dieckmann</strong>, Kaká produziu uma molécula chamada
          <b>Z4</b>, cuja fórmula molecular é <b>C₈H₁₂O₃</b>. Essa molécula apresenta um anel de cinco
          membros e pertence à classe dos beta-cetoésteres. Dessa molécula, com auxílio de base, obteve-se
          o enolato. Esse enolato foi adicionado ao frasco que continha a molécula Z3 (descrita na Parte
          3). Notou-se que havia duas fases no frasco final (evidenciando que um pouco de água havia sido
          formada — possivelmente fruto da <strong>desidratação</strong> do composto). Mas ali estava a
          molécula que ele tanto queria... Kaká a caracterizou usando espectrometria de massas e definiu a
          fórmula C<sub>X</sub>H<sub>Y</sub>O<sub>Z</sub> para o que ele chamou de <b>W-01</b>.</p>
        <p class="apoc-sub">(Faça o mecanismo e desenhe a estrutura da molécula-antídoto e escreva sua
          fórmula molecular)</p>
      </div>

      <p class="apoc-sub" id="apoc-vagas-info">
        🏆 Em jogo: os <strong>${APOC_TOTAL_VAGAS} primeiros</strong> a encontrar o antídoto concorrem, por sorteio, a um dos
        prêmios abaixo:
        ${APOC_PRIZES_INFO.map(p => `${p.label} (${p.vagas} vaga${p.vagas === 1 ? "" : "s"})`).join(" · ")}.
        A partir do ${APOC_TOTAL_VAGAS + 1}º, quem resolver o desafio ganha <strong>${APOC_CONSOLATION_LABEL}</strong> garantido.
        <span id="apoc-vagas-live"></span>
      </p>

      <div class="apoc-safe" id="apoc-safe">
        <div class="apoc-lock-icon">☣️</div>
        <p class="apoc-sub" style="margin-top:0;">Digite os índices X, Y e Z da fórmula do antídoto
          (C<sub>X</sub>H<sub>Y</sub>O<sub>Z</sub>):</p>
        <div class="apoc-formula-inputs">
          <div class="apoc-formula-field">
            <label for="apoc-in-x">C<sub>X</sub></label>
            <input type="tel" inputmode="numeric" maxlength="3" id="apoc-in-x" class="apoc-num">
          </div>
          <div class="apoc-formula-field">
            <label for="apoc-in-y">H<sub>Y</sub></label>
            <input type="tel" inputmode="numeric" maxlength="3" id="apoc-in-y" class="apoc-num">
          </div>
          <div class="apoc-formula-field">
            <label for="apoc-in-z">O<sub>Z</sub></label>
            <input type="tel" inputmode="numeric" maxlength="3" id="apoc-in-z" class="apoc-num">
          </div>
        </div>
        <button class="btn btn-primary" id="apoc-btn-unlock">Sintetizar o antídoto 🧪</button>
        <div class="apoc-msg" id="apoc-msg"></div>
      </div>
    </div>
  `;

  const inputs = ["apoc-in-x", "apoc-in-y", "apoc-in-z"].map(id => document.getElementById(id));
  inputs.forEach(inp => {
    inp.addEventListener("input", () => { inp.value = inp.value.replace(/[^0-9]/g, "").slice(0, 3); });
    inp.addEventListener("keydown", (ev) => { if (ev.key === "Enter") apocTryUnlock(); });
  });
  if (inputs[0]) inputs[0].focus();

  document.getElementById("apoc-btn-unlock").addEventListener("click", apocTryUnlock);
  apocLoadVagasInfo();
}

// Busca (best-effort, sem travar a tela) quantas das 10 vagas
// principais ainda restam, só para mostrar um contador motivacional.
function apocLoadVagasInfo(){
  if (!SHEETS_WEBAPP_URL) return;
  fetch(`${SHEETS_WEBAPP_URL}?action=apocalipseStatus`)
    .then(r => r.json())
    .then(data => {
      const el = document.getElementById("apoc-vagas-live");
      if (el && data && data.status === "ok" && typeof data.totalRestantes === "number"){
        el.textContent = ` (restam ${data.totalRestantes} de ${APOC_TOTAL_VAGAS} vagas premiadas)`;
      }
    })
    .catch(() => { /* contador é só um extra — falha em silêncio */ });
}

async function apocTryUnlock(){
  const x = document.getElementById("apoc-in-x").value.trim();
  const y = document.getElementById("apoc-in-y").value.trim();
  const z = document.getElementById("apoc-in-z").value.trim();
  const msgEl = document.getElementById("apoc-msg");
  const safeEl = document.getElementById("apoc-safe");

  if (!x || !y || !z){
    msgEl.textContent = "Preencha os três índices X, Y e Z.";
    msgEl.className = "apoc-msg warn";
    return;
  }

  const code = `${Number(x)}-${Number(y)}-${Number(z)}`;
  const hash = await apocSha256Hex(code);

  if (hash === APOC_PASSWORD_HASH){
    safeEl.classList.add("apoc-unlocked");
    msgEl.textContent = "🧪 Antídoto sintetizado! A humanidade agradece.";
    msgEl.className = "apoc-msg ok";
    [document.getElementById("apoc-in-x"), document.getElementById("apoc-in-y"), document.getElementById("apoc-in-z")]
      .forEach(i => i.disabled = true);
    document.getElementById("apoc-btn-unlock").disabled = true;
    setTimeout(renderApocPrizeStep, 900);
  } else {
    safeEl.classList.remove("apoc-shake");
    void safeEl.offsetWidth; // reinicia a animação
    safeEl.classList.add("apoc-shake");
    msgEl.textContent = "Fórmula incorreta. Revise o mecanismo de cada etapa da síntese.";
    msgEl.className = "apoc-msg err";
  }
}

/* ---------- TELA 3: SORTEIO DO PRÊMIO ---------- */
function renderApocPrizeStep(){
  const body = document.getElementById("apoc-body");
  body.innerHTML = `
    <div class="apoc-card">
      <h3 style="margin-top:0;">🧪 Antídoto sintetizado!</h3>
      <p class="apoc-sub" id="apoc-prize-status">🎲 Sorteando seu prêmio…</p>
      <div id="apoc-prize-list"></div>
    </div>
  `;

  if (!SHEETS_WEBAPP_URL){
    document.getElementById("apoc-prize-status").textContent =
      "Registro em planilha não configurado (peça ao professor para configurar o Apps Script).";
    return;
  }

  // pequena pausa de suspense antes do resultado
  setTimeout(() => {
    apocClaimPrize((result) => {
      const statusEl = document.getElementById("apoc-prize-status");
      const listEl = document.getElementById("apoc-prize-list");
      statusEl.textContent = "";

      if (result.status === "concedido"){
        const isPrincipal = result.tipoPremio === "Principal";
        listEl.innerHTML = `
          <div class="apoc-final">
            ${isPrincipal ? "🎉 Você foi sorteado!" : "🙌 Prêmio garantido:"}
            <strong>${result.premio}</strong>
            ${!isPrincipal ? `<br><span class="apoc-sub" style="display:block;margin-top:6px;">
              Os prêmios principais já tinham sido todos sorteados — esse é o prêmio garantido de quem
              resolve o desafio.</span>` : ""}
            <span class="apoc-registered">Foi registrado com seu nome e turma — combine com o professor.</span>
          </div>`;
      } else if (result.status === "networkerror"){
        listEl.innerHTML = `
          <div class="apoc-final"> Antídoto sintetizado! Não foi possível confirmar o sorteio
          automaticamente (conexão instável) — anote o horário e avise o professor.</div>`;
      } else {
        listEl.innerHTML = `<div class="apoc-final"> Antídoto sintetizado! Seu pedido foi registrado.</div>`;
      }
    });
  }, 1100);
}

/* ---------- REGISTRO / SORTEIO NO GOOGLE SHEETS (aba "Apocalipse") ---------- */
function apocClaimPrize(onDone){
  const payload = {
    tipo: "apocalipse_claim",
    nome: apocState.name,
    turma: apocState.turma,
    dataHora: new Date().toLocaleString("pt-BR")
  };
  fetch(SHEETS_WEBAPP_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload)
  })
    .then(r => r.json())
    .then(data => { if (onDone) onDone(data); })
    .catch(() => { if (onDone) onDone({ status: "networkerror" }); });
}

document.addEventListener("DOMContentLoaded", initApocalipse);
