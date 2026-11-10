# Minicurso: Espectrometria de Massas

Mesmo padrão do minicurso de Docking: página única com quatro seções (menu no topo).

| Seção | O que é |
|---|---|
| 🎬 **Apresentação** | 57 slides "estilo vídeo" (vídeos 005, 006 e 007): cada clique revela a próxima informação. Teclas → / ←, **F** = tela cheia, **P** = reproduzir automaticamente. No celular, deslize. Os espectros são interativos (passe o mouse nos picos). |
| 🔬 **Missão Espectral** | O aluno digita nome e turma, **sorteia uma amostra desconhecida exclusiva** (sem repetição) e recebe só o espectro de massas (EI, 70 eV). Seis etapas: clicar no íon molecular → regra do nitrogênio → isótopos (M+2 → Cl/Br; M+1 → nº de C) → fragmentação (pico base, perda e mecanismo do pico-chave) → identificação entre 4 estruturas → justificativa escrita. Tudo vai para a planilha, inclusive os erros de cada etapa. |
| 📝 **Questionário** | Percepção do minicurso, só com cliques (Likert de 1 a 5, antes/depois, nota de 0 a 10). |
| 📊 **Análise de Dados** | Lê a planilha e gera gráficos e interpretações automáticas (concordância, Wilcoxon antes × depois, alfa de Cronbach, erros e acertos de primeira por etapa, desempenho por mecanismo, tempo × erros). Exporta CSV. |

## Estrutura

```
index.html                  página única (os slides estão aqui)
assets/css/style.css        visual (mesmo padrão do site pessoal e do minicurso de Docking)
assets/js/config.js         ← URL do Apps Script, link do Spectros e perguntas do questionário
assets/js/espectro.js       desenha os espectros de massas (slides e missão)
assets/js/estruturas.js     desenhos das moléculas (SVG gerado com RDKit)
assets/js/slides.js         motor da apresentação
assets/js/missao.js         Missão Espectral
assets/js/questionario.js   questionário
assets/js/analise.js        análise de dados
moleculas/amostras.js       ← as 20 amostras (picos, pico-chave, mecanismo, candidatos)
google-apps-script/         Code.gs + COMO_CONFIGURAR.md
```

## Para colocar no ar

1. Siga `google-apps-script/COMO_CONFIGURAR.md` e cole a URL em `assets/js/config.js`.
2. (Opcional) Coloque o link do Spectros em `MINICURSO.spectrosUrl` no `config.js`.
3. Publique no GitHub Pages, como nos outros sites.

Só a biblioteca **Chart.js** (gráficos da análise) é carregada da internet. O resto funciona offline,
inclusive abrindo o `index.html` direto do computador (em modo demonstração).

## Sobre os espectros

- Os **picos dos fragmentos** estão nas posições características do espectro de impacto de elétrons de cada
  composto; as **intensidades foram arredondadas** para fins didáticos.
- O **aglomerado do íon molecular** (M, M+1, M+2, M+4) foi **calculado** a partir da fórmula, com as mesmas
  abundâncias isotópicas da tabela mostrada na aula. Assim o aluno chega ao nº de carbonos e ao padrão do
  Cl/Br exatamente pela conta ensinada.
- Ao final da missão o aluno tem um link para o **espectro real no NIST WebBook**, para comparar.
- Os slides de ionização química (CI) usam espectros esquemáticos redesenhados a partir de Pavia et al.

## As 22 amostras

Tolueno · propilbenzeno · clorobenzeno · bromobenzeno · 1-bromobutano · diclorometano · 2-butanona ·
3-pentanona · 2-hexanona · butanal · ácido butanoico · acetato de etila · benzoato de metila · acetofenona ·
fenol · nitrobenzeno · trietilamina · propilamina · cicloexeno · limoneno · benzaldeído · éter di-isopropílico.

Os mecanismos-chave cobrem o que foi visto na aula: clivagem benzílica/tropílio, clivagem indutiva
(halogênios), clivagem α (cetonas, ésteres, aminas), McLafferty, perda de neutro e retro-Diels-Alder. As
3 estruturas "erradas" de cada amostra incluem isômeros de **mesma massa**, que só se distinguem pela
fragmentação.
