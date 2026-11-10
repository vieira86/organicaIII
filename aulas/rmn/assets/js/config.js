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

const WEBAPP_URL = "https://script.google.com/macros/s/AKfycbxsQMwFyIX5PiSF6iZze6SsldVwNXPb4FjOyU69zMOAIbXkEJT8VdXogpvBYA9qgoaO/exec";

const MINICURSO = {
  titulo: "Ressonância Magnética Nuclear (RMN de ¹H)",
  autor: "Prof. Dr. Rafael Vieira",
  instituicao: "IFRO — Instituto Federal de Rondônia",
  // Link opcional para a sua plataforma NUMARES. Se preencher, aparece um botão
  // "Treinar no NUMARES" na tela final da Missão RMN. Vazio = sem botão.
  numaresUrl: ""
};

/* ------------------------------------------------------------
   Missão RMN
   ------------------------------------------------------------ */
const MISSAO = {
  // frequência do aparelho simulado (só muda os valores em Hz das ampliações)
  mhz: 300
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
    antes: { id: "conhecimento_antes", texto: "ANTES da aula, meu conhecimento sobre RMN de ¹H era:" },
    depois: { id: "conhecimento_depois", texto: "DEPOIS da aula, meu conhecimento sobre RMN de ¹H é:" }
  },
  likert: [
    { id: "q1", dim: "Conteúdo",     texto: "Entendi a origem do fenômeno da RMN (spin nuclear, campo magnético e ressonância)." },
    { id: "q2", dim: "Conteúdo",     texto: "Compreendi o que é blindagem e por que os hidrogênios aparecem em deslocamentos químicos diferentes." },
    { id: "q3", dim: "Conteúdo",     texto: "Compreendi a regra do n + 1 e o significado da constante de acoplamento J." },
    { id: "q4", dim: "Prática",      texto: "Consegui contar os sinais e usar a integração para achar o nº de H de cada um." },
    { id: "q5", dim: "Prática",      texto: "Consegui usar o desdobramento e o deslocamento químico para montar a estrutura." },
    { id: "q6", dim: "Metodologia",  texto: "O desafio com a minha própria amostra desconhecida tornou o aprendizado mais interessante." },
    { id: "q7", dim: "Metodologia",  texto: "A apresentação interativa ajudou a manter minha atenção." },
    { id: "q8", dim: "Metodologia",  texto: "A carga horária da aula foi adequada." },
    { id: "q9", dim: "Impacto",      texto: "A RMN é relevante para a minha formação." },
    { id: "q10", dim: "Impacto",     texto: "Sinto-me mais preparado(a) para interpretar espectros de RMN de ¹H sozinho(a)." }
  ],
  nota: { id: "nota", texto: "De 0 a 10, que nota você dá para a aula?" },
  comentario: { id: "comentario", texto: "Quer deixar um comentário, sugestão ou elogio? (opcional)" }
};
