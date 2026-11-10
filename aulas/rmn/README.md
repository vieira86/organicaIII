# Aula: Ressonância Magnética Nuclear (RMN de ¹H)

Aula de **Análise Orgânica** (Licenciatura em Química), montada a partir das duas videoaulas
(`rmn1.mp4` e `rmn2.mp4`), no mesmo padrão do minicurso de Espectrometria de Massas: página única com
quatro seções (menu no topo).

| Seção | O que é |
|---|---|
| 🎬 **Apresentação** | 46 slides "estilo vídeo": cada clique revela a próxima informação. Teclas → / ←, **F** = tela cheia, **P** = reproduzir automaticamente. No celular, deslize. Os espectros são desenhados pela página (passe o mouse nos sinais). |
| 🧲 **Missão RMN** | O aluno digita nome e turma, **sorteia uma amostra desconhecida exclusiva** (sem repetição) e recebe a fórmula molecular e o espectro de RMN de ¹H (300 MHz), com curva de integração e ampliações de cada sinal (linhas em Hz). Seis etapas: IDH → nº de sinais e integração → desdobramento (multiplicidade, n + 1 e J) → deslocamento químico → identificação entre 4 isômeros → justificativa escrita. Tudo vai para a planilha, inclusive os erros de cada etapa. |
| 📝 **Questionário** | Percepção da aula, só com cliques (Likert de 1 a 5, antes/depois, nota de 0 a 10). |
| 📊 **Análise de Dados** | Lê a planilha e gera gráficos e interpretações automáticas (concordância, Wilcoxon antes × depois, alfa de Cronbach, erros e acertos de primeira por etapa, desempenho por classe funcional, tempo × erros). Exporta CSV. |

## Conteúdo dos slides (seguindo os vídeos)

**Vídeo 1:** spin nuclear e 2I + 1 · níveis de energia no campo B₀ · ΔE = γ(h/2π)B₀ = hν e tabela de isótopos ·
precessão e ressonância · blindagem diamagnética · deslocamento químico, TMS e δ (ppm) · escala δ · aparelhos CW
e FT (DIL/FID) · equivalência química · tabela de deslocamentos · integração (acetato de benzila) ·
eletronegatividade · hibridização · H ácidos e ligação de hidrogênio · anisotropia magnética · anulenos ·
regra do n + 1 · por que existe o desdobramento · triângulo de Pascal · constante J e valores típicos ·
acoplamentos recíprocos · alcanos · alcenos.

**Vídeo 2:** alcinos · aromáticos · haletos de alquila · álcoois (troca com D₂O) · éteres · aminas · nitrilas e
nitroalcanos · cetonas · aldeídos (septeto de dubletos) · ésteres · ácidos carboxílicos · amidas · IDH + IV ·
exercícios com ésteres isoméricos C₅H₁₀O₂ e com os ácidos cloropropanoicos C₃H₅ClO₂.

## Estrutura

```
index.html                  página única (os slides estão aqui)
assets/css/style.css        visual (mesmo padrão do minicurso de massas e do de docking)
assets/js/config.js         ← URL do Apps Script, link do NUMARES e perguntas do questionário
assets/js/rmn.js            desenha os espectros de RMN (slides e missão)
assets/js/estruturas.js     desenhos das moléculas (SVG gerado com RDKit)
assets/js/slides.js         motor da apresentação
assets/js/missao.js         Missão RMN
assets/js/questionario.js   questionário
assets/js/analise.js        análise de dados
moleculas/amostras.js       ← as 25 amostras (sinais, integração, sinal-chave, candidatos)
google-apps-script/         Code.gs + COMO_CONFIGURAR.md
```

## Para colocar no ar

1. Siga `google-apps-script/COMO_CONFIGURAR.md` (planilha **nova**, separada da de massas) e cole a URL em `assets/js/config.js`.
2. (Opcional) Coloque o link do NUMARES em `MINICURSO.numaresUrl` no `config.js`.
3. Publique no GitHub Pages, como nos outros sites. Os vídeos `.mp4` ficam fora do Git (ver `.gitignore`).

Só a biblioteca **Chart.js** (gráficos da análise) é carregada da internet. O resto funciona offline,
inclusive abrindo o `index.html` direto do computador (em modo demonstração).

## Sobre os espectros

- São **simulados em primeira ordem** (regra do n + 1, intensidades do triângulo de Pascal), como na aula.
  Os δ e os J são valores típicos da literatura, arredondados; a frequência é 300 MHz.
- Sinais aromáticos de anéis monossubstituídos aparecem como multipleto; o padrão AA'BB' do anel
  para-dissubstituído é mostrado como dois dubletos (simplificação didática).
- As alturas da integração são proporcionais ao nº de H, multiplicadas por um fator diferente em cada amostra,
  para o aluno ter de fazer a divisão pela menor, como no exemplo do acetato de benzila.

## As 25 amostras

Acetato de etila · propanoato de metila · acetato de isopropila · acetato de propila · propanoato de etila ·
butanona · 2-metilpropanal · butanal · ácido 2-metilpropanoico · ácido 2-cloropropanoico · ácido 3-cloropropanoico ·
1-nitropropano · 2-nitropropano · etilbenzeno · cumeno · 4-nitrotolueno · acetato de benzila · 2-metilpropan-1-ol ·
1-bromopropano · propilamina · acetato de vinila · 1,1,2-tricloroetano · butanonitrila · 2-bromopropano · éter dietílico.

As 3 estruturas "erradas" de cada amostra são, sempre que possível, **isômeros de mesma fórmula**, que só se
distinguem pelo nº de sinais, pela integração, pelo desdobramento e pelo deslocamento químico.
