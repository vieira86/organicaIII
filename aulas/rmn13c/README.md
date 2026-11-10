# Aula: RMN de ¹³C

Aula de **Análise Orgânica** (Licenciatura em Química), montada a partir da videoaula `rmn_C.mp4`
(que está em `../rmn/`), no mesmo padrão das aulas de Espectrometria de Massas e de RMN de ¹H:
página única com quatro seções (menu no topo).

| Seção | O que é |
|---|---|
| 🎬 **Apresentação** | 29 slides "estilo vídeo": cada clique revela a próxima informação. Teclas → / ←, **F** = tela cheia, **P** = reproduzir automaticamente. Os espectros (¹³C desacoplado, acoplado, fora de ressonância e DEPT) são desenhados pela página. |
| 🧲 **Missão ¹³C** | O aluno digita nome e turma, **sorteia uma amostra desconhecida exclusiva** (sem repetição) e recebe a fórmula molecular e o espectro de ¹³C desacoplado (75 MHz). Seis etapas: IDH → nº de sinais e simetria → DEPT-135/DEPT-90 (classificar cada C como C, CH, CH₂ ou CH₃) → deslocamento químico → identificação entre 4 isômeros → justificativa escrita. Tudo vai para a planilha, inclusive os erros de cada etapa. |
| 📝 **Questionário** | Percepção da aula, só com cliques. |
| 📊 **Análise de Dados** | Gráficos e interpretações automáticas a partir da planilha. Exporta CSV. |

## Conteúdo dos slides (seguindo o vídeo)

¹³C ativo (I = ½), baixa abundância e ausência de acoplamento C–C · faixa de 0 a 220 ppm · carta de correlação ·
regiões de deslocamento · tabelas de incremento para benzenos (cálculo do m-xileno) · espectro desacoplado ·
cada C não equivalente = um sinal (fenilacetato de etila) · espectro acoplado (¹J C–H = 100–250 Hz) · NOE
(CH₃ > CH₂ > CH ≫ C; não se integra) · desacoplado fora da ressonância · DEPT-45/90/135 (acetato de isobutila) ·
carbonos equivalentes e simetria · aromáticos (tolueno) e diclorobenzenos (3, 4 e 2 picos) · acoplamento com D
(CDCl₃, DMSO-d₆, M = 2nI + 1), ¹⁹F e ³¹P · cicloexanona · problema resolvido C₆H₁₀O₂ com ¹H + ¹³C + DEPT ·
exercícios de contar picos e do éster C₅H₈O₂.

## Estrutura

```
index.html                  página única (os slides estão aqui)
assets/css/style.css        visual (mesmo padrão das outras aulas)
assets/js/config.js         ← URL do Apps Script, link do NUMARES e perguntas do questionário
assets/js/c13.js            desenha os espectros de ¹³C e DEPT
assets/js/rmn.js            desenha espectros de ¹H e multipletos (slides de comparação)
assets/js/estruturas.js     desenhos das moléculas (SVG gerado com RDKit)
assets/js/slides.js · missao.js · questionario.js · analise.js · app.js
moleculas/amostras.js       ← as 26 amostras (δ e tipo DEPT de cada C, candidatos)
google-apps-script/         Code.gs + COMO_CONFIGURAR.md
```

## Para colocar no ar

1. Siga `google-apps-script/COMO_CONFIGURAR.md` (planilha **nova**, separada das outras aulas) e cole a URL em `assets/js/config.js`.
2. (Opcional) Coloque o link do NUMARES em `MINICURSO.numaresUrl` no `config.js`.
3. Publique no GitHub Pages, como nos outros sites.

## Sobre os espectros

- Deslocamentos típicos em CDCl₃ da literatura, arredondados. O tripleto do CDCl₃ (77 ppm) e o TMS aparecem
  no espectro desacoplado, como num espectro real.
- A altura dos picos é ilustrativa e imita o efeito NOE (C quaternários baixos). Por isso a Missão não pede integração.

## As 26 amostras

Acetato de etila · propanoato de metila · ácido butanoico · ácido 2-metilpropanoico · butanona · butanal ·
2-metilpropanal · 3-pentanona · 2-pentanona · cicloexanona · butan-1-ol · butan-2-ol · terc-butanol ·
2-metilpropan-1-ol · éter dietílico · tolueno · p-xileno · etilbenzeno · m-xileno · 1-clorobutano ·
ácido 2-metil-2-pentenoico · metacrilato de metila · acetato de vinila · acetofenona · 1,3-diclorobenzeno · cicloexanol.

As 3 estruturas "erradas" de cada amostra são, sempre que possível, **isômeros de mesma fórmula**, que só se
distinguem pelo nº de sinais (simetria), pelo DEPT e pelas regiões de deslocamento.
