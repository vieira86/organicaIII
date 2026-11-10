/* ============================================================
   config.js — configuração geral do minicurso
   ============================================================

   1) Publique o Apps Script (google-apps-script/Code.gs) e cole
      aqui a URL do Web App (termina em /exec).
      Passo a passo: google-apps-script/COMO_CONFIGURAR.md

   Enquanto WEBAPP_URL estiver vazia a página funciona em
   "modo demonstração": o sorteio é feito no próprio navegador
   (sem garantia de não repetir entre alunos) e nada é gravado.
   ============================================================ */

const WEBAPP_URL = "";

const MINICURSO = {
  titulo: "Espectrometria de Massas",
  autor: "Prof. Dr. Rafael Vieira",
  instituicao: "IFRO — Instituto Federal de Rondônia",
  // Link opcional para a sua plataforma Spectros. Se preencher, aparece um botão
  // "Treinar no Spectros" na tela final da Missão Espectral. Vazio = sem botão.
  spectrosUrl: ""
};

/* ------------------------------------------------------------
   Missão Espectral
   ------------------------------------------------------------ */
const MISSAO = {
  // true = depois de concluir, o aluno vê o link do espectro REAL no NIST WebBook
  mostrarLinkNIST: true,
  // tolerância (±) na estimativa do número de carbonos pelo pico M+1
  toleranciaCarbonos: 1
};

/* ------------------------------------------------------------
   Perguntas do questionário de percepção.
   tipo "likert" = escala de 1 (discordo totalmente) a 5 (concordo totalmente)
   Pode editar os textos à vontade. Se mudar o "id", a planilha
   ganha uma coluna nova automaticamente.
   ------------------------------------------------------------ */
const QUESTIONARIO = {
  perfil: {
    id: "perfil",
    texto: "Qual é a sua formação atual?",
    opcoes: ["Ensino Técnico", "Licenciatura", "Bacharelado", "Pós-graduação", "Outro"]
  },
  conhecimento: {
    opcoes: ["Nenhum", "Básico", "Intermediário", "Avançado"],
    antes: { id: "conhecimento_antes", texto: "ANTES do minicurso, meu conhecimento sobre espectrometria de massas era:" },
    depois: { id: "conhecimento_depois", texto: "DEPOIS do minicurso, meu conhecimento sobre espectrometria de massas é:" }
  },
  likert: [
    { id: "q1", dim: "Conteúdo",     texto: "Entendi como funciona um espectrômetro de massas (ionização, analisador e detector)." },
    { id: "q2", dim: "Conteúdo",     texto: "Ficou clara a diferença entre ionização por elétrons (EI) e ionização química (CI)." },
    { id: "q3", dim: "Conteúdo",     texto: "Compreendi os principais mecanismos de fragmentação (clivagem α, McLafferty, retro-Diels-Alder)." },
    { id: "q4", dim: "Prática",      texto: "Consegui identificar o íon molecular e aplicar a regra do nitrogênio." },
    { id: "q5", dim: "Prática",      texto: "Consegui usar os picos M+1 e M+2 para tirar conclusões sobre a fórmula." },
    { id: "q6", dim: "Metodologia",  texto: "O desafio com a minha própria amostra desconhecida tornou o aprendizado mais interessante." },
    { id: "q7", dim: "Metodologia",  texto: "A apresentação interativa ajudou a manter minha atenção." },
    { id: "q8", dim: "Metodologia",  texto: "A carga horária do minicurso foi adequada." },
    { id: "q9", dim: "Impacto",      texto: "A espectrometria de massas é relevante para a minha formação." },
    { id: "q10", dim: "Impacto",     texto: "Sinto-me mais preparado(a) para interpretar espectros de massas sozinho(a)." }
  ],
  nota: { id: "nota", texto: "De 0 a 10, que nota você dá para o minicurso?" },
  comentario: { id: "comentario", texto: "Quer deixar um comentário, sugestão ou elogio? (opcional)" }
};
