/* ============================================================
   sheets-config.js — configuração do registro em Google Sheets
   Química Orgânica III — Licenciatura, IFRO Ji-Paraná

   Depois de publicar o Google Apps Script (veja o arquivo
   google-apps-script/Code.gs e o passo a passo em
   google-apps-script/COMO_CONFIGURAR.md, na raiz do projeto
   organicaIII, ao lado da pasta "site"), cole aqui a URL do Web
   App gerada pelo Deploy.

   Exemplo: "https://script.google.com/macros/s/AKfycb.../exec"

   Enquanto este campo estiver vazio, o desafio Molécula-Apocalipse
   funciona normalmente (o antídoto destranca), só o sorteio de
   prêmio no final fica avisando que ainda não foi configurado.
   ============================================================ */

const SHEETS_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbxRGFTaAPIyBsOrUP1sGqE9uv80zBLcpi99OG8DG1BzVwz_bDeHtSv0FCMAYLMaFqYfLQ/exec";

const SHEETS_PLATFORM_NAME = "Química Orgânica III";

/* ------------------------------------------------------------
   Enigmas de Elucidação Estrutural (enigma-elucidacao-1.html e -2.html)
   Web App próprio (planilha própria). Passo a passo:
   google-apps-script/enigmas-elucidacao/COMO_CONFIGURAR.md
   (na pasta organicaIII, fora de "site").
   Enquanto estiver vazio, os enigmas funcionam normalmente, mas
   não registram na planilha (o aluno vê um aviso para mostrar a tela).
   ------------------------------------------------------------ */
const ELUCIDACAO_WEBAPP_URL = "";
