/* ============================================================
   enigma-elucidacao-dados-2.js — conteúdo do Enigma 2
   Gerado por script (os hashes SHA-256 dependem do texto exato
   das respostas). Para mudar uma resposta, gere de novo os
   hashes — o gabarito está em google-apps-script/
   enigmas-elucidacao/COMO_CONFIGURAR.md.
   ============================================================ */
const ENIGMA = {
 "id": "2",
 "salt": "oIII-elu2-c91d",
 "emoji": "💊",
 "historia": {
  "titulo": "💊 A pomada sem bula",
  "texto": "A vigilância sanitária apreendeu, numa feira, potes de uma pomada “para dor de dente” vendida sem bula e sem registro. No laboratório, o princípio ativo foi isolado e purificado: <em>um sólido branco, cristalino (p.f. 89–92 °C), que deixa a língua dormente</em>. O laudo final precisa dizer exatamente que molécula é essa. Os laudos chegam um de cada vez; <em>cada um só é liberado quando você interpreta o anterior</em>. Este enigma é mais longo e exige atenção aos detalhes."
 },
 "ava": [
  "a <strong>estrutura da molécula</strong>, desenhada por você;",
  "os <strong>cálculos</strong>: fórmula mínima, nº de carbonos pelo pico M+1, IDH e os incrementos do ¹³C;",
  "a <strong>atribuição dos dados</strong>: fragmentos da EM, bandas do IV e cada sinal de RMN de ¹H e de ¹³C;",
  "a <strong>conta do código final</strong>."
 ],
 "etapas": [
  {
   "pill": "Análise elementar",
   "ico": "⚖️",
   "titulo": "Análise elementar",
   "chamada": "Laudo 1: análise elementar (CHN)",
   "historia": "O resultado da análise CHN está abaixo. Não há S nem halogênios; o restante da massa é oxigênio.",
   "dados": {
    "tipo": "html",
    "legenda": "Laudo 1 · análise elementar (CHN)",
    "html": "<table class=\"enig-tabela\"><tbody><tr><td>Carbono (C)</td><td class=\"num\">65,44%</td></tr><tr><td>Hidrogênio (H)</td><td class=\"num\">6,71%</td></tr><tr><td>Nitrogênio (N)</td><td class=\"num\">8,48%</td></tr><tr><td>Oxigênio (O)</td><td class=\"num\">por diferença</td></tr></tbody></table>",
    "nota": "Massas atômicas: C = 12,01 · H = 1,008 · N = 14,01 · O = 16,00 g/mol."
   },
   "questoes": [
    {
     "tipo": "num",
     "qid": "e2a1",
     "enunciado": "Qual é a porcentagem de oxigênio?",
     "fator": 10,
     "dica": "100 − %C − %H − %N.",
     "unidade": "%",
     "ok": "19,37% de O.",
     "hash": [
      "f22ed6a2e6f650311887afeccfda512599b1592fefd72e749f8b597130e48922"
     ]
    },
    {
     "tipo": "formula",
     "qid": "e2a2",
     "enunciado": "Qual é a fórmula mínima?",
     "apoio": "Divida cada porcentagem pela massa atômica e depois pelo menor valor (aqui, o do N).",
     "elementos": [
      "C",
      "H",
      "N",
      "O"
     ],
     "dica": "O menor valor é o do nitrogênio (≈ 0,605). Divida todos por ele.",
     "ok": "Fórmula mínima C₉H₁₁NO₂.",
     "hash": {
      "C": "a448f986fb1dd748af3101d7b82d7e0d1b4aa7ab605c831ebd784def07a5c20d",
      "H": "1f98286f443eb2341e478fbb2867b0e8b72aeb0979824df6b6e49919b57a2a11",
      "N": "31745bac9c57afb12b7ccbbf9a9baedef8675618bc9f02d24ead0d01fc1e688c",
      "O": "205cf44b2dfbb770c1e2c33dcf31ed9c3167d329299e3320950b07221319f832"
     }
    },
    {
     "tipo": "num",
     "qid": "e2a3",
     "enunciado": "Qual é a massa da fórmula mínima?",
     "fator": 1,
     "dica": "9 × 12,01 + 11 × 1,008 + 14,01 + 2 × 16,00; arredonde para o inteiro.",
     "unidade": "g/mol",
     "ok": "165 g/mol.",
     "hash": [
      "2f0baf34316ca3e641f3ed68cfe7294232926e34bd0c3c6ba1898a7b1aecd551"
     ]
    }
   ]
  },
  {
   "pill": "Massas",
   "ico": "⚡",
   "titulo": "Espectrometria de massas",
   "chamada": "Laudo 2: espectro de massas (EI, 70 eV)",
   "ferramenta": "spectros",
   "dicaFerramenta": "compare os fragmentos da sua hipótese",
   "dados": {
    "tipo": "ms",
    "legenda": "Laudo 2 · espectro de massas (70 eV)",
    "direita": "passe o mouse nos picos para ler as intensidades",
    "picos": [
     [
      39,
      8
     ],
     [
      63,
      5
     ],
     [
      64,
      6
     ],
     [
      65,
      22
     ],
     [
      92,
      27
     ],
     [
      93,
      4
     ],
     [
      120,
      100
     ],
     [
      121,
      9
     ],
     [
      137,
      22
     ],
     [
      138,
      2
     ],
     [
      165,
      42
     ],
     [
      166,
      4.1
     ]
    ],
    "xmin": 30,
    "xmax": 175
   },
   "questoes": [
    {
     "tipo": "num",
     "qid": "e2b1",
     "enunciado": "Qual é o m/z do íon molecular?",
     "fator": 1,
     "dica": "O íon molecular é o pico de maior m/z, sem contar o pequeno pico M+1 logo ao lado.",
     "ok": "M = 165, igual à fórmula mínima: a fórmula molecular é C₉H₁₁NO₂.",
     "hash": [
      "1cf2a748c437902803e56805c07e4b8027b7ed570f039f2a339794467f1e52b5"
     ]
    },
    {
     "tipo": "opcoes",
     "qid": "e2b2",
     "enunciado": "M = 165 é ímpar. O que a regra do nitrogênio diz?",
     "opcoes": {
      "a": "Nenhum átomo de nitrogênio",
      "b": "Número par de átomos de N",
      "c": "Presença de um halogênio",
      "d": "Número ímpar de átomos de N"
     },
     "dica": "Massa molecular ímpar ↔ número ímpar de N.",
     "ok": "Concorda com a análise elementar: 1 N.",
     "hash": "9d710229135766041ccb43bc9d06d5c3cbc2797d89a36455992fb3d32363a286"
    },
    {
     "tipo": "num",
     "qid": "e2b3",
     "enunciado": "Use a razão entre M+1 (m/z 166) e M (m/z 165) para estimar o número de carbonos.",
     "fator": 1,
     "dica": "nº de C ≈ (intensidade de M+1 ÷ intensidade de M × 100) ÷ 1,1. Passe o mouse nos picos para ler as intensidades.",
     "ok": "≈ 9 carbonos, como na fórmula.",
     "apoio": "Cada carbono contribui com ≈ 1,1% de ¹³C para o pico M+1.",
     "hash": [
      "88bbf726eb1bcab2d647799695be20a97a9eb0ea9598d2a6506d9db9febc3d38"
     ]
    },
    {
     "tipo": "opcoes",
     "qid": "e2b4",
     "enunciado": "O pico base, m/z 120, corresponde a M − 45. O que a molécula perdeu?",
     "opcoes": {
      "a": "Molécula de CO₂",
      "b": "Radical etóxi (•OCH₂CH₃)",
      "c": "Radical metila + água",
      "d": "Molécula de etanol"
     },
     "dica": "Calcule as massas. 45 é ímpar: só um RADICAL com um O e dois C fecha a conta.",
     "ok": "Forma-se o íon acílio Ar–C≡O⁺ (m/z 120).",
     "hash": "f0bba83fb18929202b28894accf00d76693d973b9d98e7e7d18eade4476b7ede"
    },
    {
     "tipo": "opcoes",
     "qid": "e2b5",
     "enunciado": "De m/z 120 para m/z 92 há nova perda de 28. Sabendo que 120 é um íon acílio (Ar–C≡O⁺), o que saiu?",
     "opcoes": {
      "a": "Eteno (C₂H₄)",
      "b": "N₂",
      "c": "CO (monóxido de carbono)",
      "d": "Dois radicais metila"
     },
     "dica": "Um íon acílio perde facilmente o próprio grupo C≡O.",
     "ok": "Sobra o cátion arila, m/z 92.",
     "hash": "3e5e7acd605e7603a0de6787e9998c0f90e2faee383d1d1d8c77d1bcdf57f84f"
    }
   ]
  },
  {
   "pill": "IDH e IV",
   "ico": "🌈",
   "titulo": "IDH e infravermelho",
   "chamada": "Laudo 3: espectro de infravermelho (pastilha de KBr)",
   "ferramenta": "iris",
   "dicaFerramenta": "digite as bandas acima de 3000, a da C=O e as de 1600–1500",
   "dados": {
    "tipo": "ir",
    "legenda": "Laudo 3 · IV (KBr)",
    "direita": "passe o mouse para ler o número de onda",
    "bandas": [
     [
      3424,
      0.6,
      40
     ],
     [
      3343,
      0.65,
      40
     ],
     [
      3222,
      0.35,
      60
     ],
     [
      2980,
      0.35,
      40
     ],
     [
      1685,
      0.95,
      28
     ],
     [
      1636,
      0.6,
      22
     ],
     [
      1598,
      0.7,
      20
     ],
     [
      1573,
      0.3,
      15
     ],
     [
      1515,
      0.45,
      18
     ],
     [
      1440,
      0.3,
      20
     ],
     [
      1367,
      0.35,
      20
     ],
     [
      1314,
      0.4,
      20
     ],
     [
      1280,
      0.95,
      30
     ],
     [
      1171,
      0.75,
      25
     ],
     [
      1115,
      0.6,
      20
     ],
     [
      1022,
      0.45,
      20
     ],
     [
      845,
      0.6,
      20
     ],
     [
      772,
      0.45,
      20
     ],
     [
      700,
      0.3,
      20
     ]
    ]
   },
   "questoes": [
    {
     "tipo": "num",
     "qid": "e2c1",
     "enunciado": "Qual é o IDH da fórmula C₉H₁₁NO₂?",
     "fator": 1,
     "dica": "IDH = (2C + 2 + N − H − X) ÷ 2.",
     "ok": "IDH = 5: um anel benzênico (4) + mais uma ligação π.",
     "hash": [
      "88aed77294c59e9a21460e5b41c6ccd63a661d4252a26dca05cea9cd40a2234c"
     ]
    },
    {
     "tipo": "opcoes",
     "qid": "e2c2",
     "enunciado": "Duas bandas finas de intensidade média em 3424 e 3343 cm⁻¹. O que elas indicam?",
     "opcoes": {
      "a": "Amina primária (–NH₂)",
      "b": "Hidroxila de álcool (O–H)",
      "c": "Amina secundária (N–H)",
      "d": "O–H de ácido carboxílico"
     },
     "dica": "O–H dá uma banda larga; N–H secundária dá uma banda; quantas bandas tem um NH₂?",
     "ok": "São os estiramentos simétrico e assimétrico do NH₂.",
     "hash": "78047418724b17f4df3a45380367b76647a66b45272edfe23ddae7a1a9e98e76"
    },
    {
     "tipo": "opcoes",
     "qid": "e2c3",
     "enunciado": "A C=O aparece em 1685 cm⁻¹, bem abaixo dos ~1735 de um éster comum. Por quê?",
     "opcoes": {
      "a": "Tensão de anel na C=O",
      "b": "Conjugação da C=O com o anel aromático",
      "c": "Não é C=O, e sim C=C",
      "d": "Todo éster absorve abaixo de 1700"
     },
     "dica": "Conjugação abaixa a frequência da C=O; tensão de anel aumenta.",
     "ok": "A conjugação (com o anel e o NH₂ doador) diminui o caráter de dupla da C=O.",
     "hash": "27afbe6b22caa04f23727a91c029b10a2ec4ede3818759aac63370bf405653d2"
    },
    {
     "tipo": "opcoes",
     "qid": "e2c4",
     "enunciado": "As bandas em 1598 e 1515 cm⁻¹, junto com a banda forte em 845 cm⁻¹, sugerem:",
     "opcoes": {
      "a": "Anel aromático monossubstituído",
      "b": "Alceno trans",
      "c": "Anel aromático para-dissubstituído",
      "d": "Anel aromático orto-dissubstituído"
     },
     "dica": "A deformação fora do plano em 800–860 cm⁻¹ é típica de dois H adjacentes no anel.",
     "hash": "6533e1c10980b5343baec81e0a4c0539a869061749cd6b80e65be4c12533cf2e"
    }
   ]
  },
  {
   "pill": "RMN ¹H",
   "ico": "🧲",
   "titulo": "RMN de ¹H",
   "chamada": "Laudo 4: RMN de ¹H (CDCl₃, 300 MHz)",
   "ferramenta": "numares",
   "dicaFerramenta": "simule a sua hipótese e compare os deslocamentos dos H aromáticos",
   "dados": {
    "tipo": "rmn",
    "legenda": "Laudo 4 · RMN de ¹H · os números em rosa são as alturas da integração",
    "direita": "ampliações com posições em Hz",
    "nota": "O sinal em 4,05 ppm desaparece quando se agita a amostra com D₂O.",
    "sinais": [
     {
      "d": 7.86,
      "h": 2,
      "tipo": "mult",
      "acopl": [
       [
        1,
        8.7
       ]
      ],
      "integral": 3.1
     },
     {
      "d": 6.63,
      "h": 2,
      "tipo": "mult",
      "acopl": [
       [
        1,
        8.7
       ]
      ],
      "integral": 3.1
     },
     {
      "d": 4.31,
      "h": 2,
      "tipo": "mult",
      "acopl": [
       [
        3,
        7.1
       ]
      ],
      "integral": 3.1
     },
     {
      "d": 4.05,
      "h": 2,
      "tipo": "br",
      "acopl": [],
      "integral": 3.1
     },
     {
      "d": 1.36,
      "h": 3,
      "tipo": "mult",
      "acopl": [
       [
        2,
        7.1
       ]
      ],
      "integral": 4.7
     }
    ]
   },
   "questoes": [
    {
     "tipo": "num",
     "qid": "e2d1",
     "enunciado": "Quantos sinais aparecem no espectro? (Não conte o TMS.)",
     "fator": 1,
     "dica": "Inclua o sinal largo; cada multipleto é um sinal só.",
     "ok": "5 sinais.",
     "hash": [
      "ef4d4ca9c82dafa1cfc4b9383f45656051be51d07b3959033299f717544f3613"
     ]
    },
    {
     "tipo": "tabela",
     "qid": "e2d2",
     "enunciado": "Quantos H há em cada sinal?",
     "apoio": "Divida pela menor integral. Se aparecer ,5, multiplique tudo por 2. A soma deve ser 11.",
     "colunas": [
      "δ (ppm)",
      "integral"
     ],
     "linhas": [
      [
       "7,86",
       "3,1"
      ],
      [
       "6,63",
       "3,1"
      ],
      [
       "4,31",
       "3,1"
      ],
      [
       "4,05",
       "3,1"
      ],
      [
       "1,36",
       "4,7"
      ]
     ],
     "pergunta": "nº de H",
     "dica": "A proporção é 1 : 1 : 1 : 1 : 1,5. Multiplique por 2 e confira se a soma dá 11.",
     "ok": "2 : 2 : 2 : 2 : 3 = 11 H.",
     "hash": "ea082f8649db065d46fce7f5aaa610449576adc934354620d9b7604e1f0bc8fc"
    },
    {
     "tipo": "opcoes",
     "qid": "e2d3",
     "enunciado": "Na região aromática há dois dubletos de 2H cada, com o mesmo J = 8,7 Hz. Isso indica:",
     "opcoes": {
      "a": "Anel monossubstituído",
      "b": "Anel orto-dissubstituído",
      "c": "Anel para-dissubstituído",
      "d": "Anel meta-dissubstituído"
     },
     "dica": "Quantos H aromáticos há (4) e quantos ambientes diferentes (2)?",
     "ok": "Dois pares de H equivalentes, acoplados em orto.",
     "hash": "cd274c3b21e450d66ed81b82ec53cfed82dbcc301fc38d879cdbb0f4d99f0a64"
    },
    {
     "tipo": "opcoes",
     "qid": "e2d4",
     "enunciado": "O sinal largo de 2H em 4,05 ppm, que some com D₂O, é:",
     "opcoes": {
      "a": "OH de um álcool",
      "b": "OCH₂ do éster",
      "c": "H de ácido carboxílico",
      "d": "NH₂ da amina"
     },
     "dica": "Some com D₂O = H ligado a heteroátomo. Que grupo com 2 H o IV mostrou?",
     "ok": "H trocável: some com D₂O.",
     "hash": "3a165c993e52bd4f20222c0fa7c00f286c5698fa81ab4bca45fee17562e945fe"
    },
    {
     "tipo": "opcoes",
     "qid": "e2d5",
     "enunciado": "Quarteto de 2H em 4,31 ppm + tripleto de 3H em 1,36 ppm (mesmo J = 7,1 Hz):",
     "opcoes": {
      "a": "Etila ligado ao O do éster (–OCH₂CH₃)",
      "b": "Etila ligado ao anel aromático",
      "c": "Etila ligado ao nitrogênio",
      "d": "Dois grupos metila isolados"
     },
     "dica": "O CH₂ em 4,3 ppm está muito desblindado: ligado a quê?",
     "hash": "3247d3bdda2f760d4563eba80cd442a376c227ed02dfc73bd727cc0d0fd6f1b7"
    },
    {
     "tipo": "opcoes",
     "qid": "e2d6",
     "enunciado": "Por que um par de H aromáticos aparece em 6,63 ppm e o outro em 7,86 ppm?",
     "opcoes": {
      "a": "O NH₂ retira elétrons e desblinda seus vizinhos",
      "b": "O NH₂ (doador) blinda seus vizinhos; a C=O (retiradora) desblinda os dela",
      "c": "Os H em 6,63 são vinílicos, não aromáticos",
      "d": "É apenas um efeito do solvente"
     },
     "dica": "Lembre do efeito de grupos doadores (–NH₂, –OH) e retiradores (C=O, NO₂) nas posições orto.",
     "hash": "4c9a340299449427830e4832e98b267356eb0b4067f0d69052ef4db52356e9d6"
    }
   ]
  },
  {
   "pill": "RMN ¹³C",
   "ico": "🧬",
   "titulo": "RMN de ¹³C e DEPT",
   "chamada": "Laudo 5: RMN de ¹³C e DEPT (CDCl₃, 75 MHz)",
   "ferramenta": "numares",
   "dicaFerramenta": "confira o nº de sinais e os deslocamentos dos C aromáticos",
   "dados": {
    "tipo": "c13",
    "legenda": "Laudo 5 · ¹³C desacoplado, DEPT-135 e DEPT-90",
    "direita": "o tripleto em 77 ppm é o CDCl₃",
    "sinais": [
     {
      "d": 166.8,
      "tipo": "C",
      "n": 1
     },
     {
      "d": 150.9,
      "tipo": "C",
      "n": 1
     },
     {
      "d": 131.6,
      "tipo": "CH",
      "n": 2
     },
     {
      "d": 120.0,
      "tipo": "C",
      "n": 1
     },
     {
      "d": 113.8,
      "tipo": "CH",
      "n": 2
     },
     {
      "d": 60.3,
      "tipo": "CH2",
      "n": 1
     },
     {
      "d": 14.4,
      "tipo": "CH3",
      "n": 1
     }
    ]
   },
   "questoes": [
    {
     "tipo": "num",
     "qid": "e2e1",
     "enunciado": "Quantos sinais de carbono aparecem? (Sem CDCl₃ e TMS.)",
     "fator": 1,
     "dica": "Conte também os picos baixos (carbonos sem H).",
     "ok": "7 sinais para 9 carbonos: há simetria (o anel para).",
     "hash": [
      "60c56af5367bd347f554f7782ef194a2ebcc7bb2f684512b9b7185d7708abc18"
     ]
    },
    {
     "tipo": "num",
     "qid": "e2e2",
     "enunciado": "Quantos carbonos SEM hidrogênio (quaternários) a molécula tem?",
     "fator": 1,
     "dica": "Procure os sinais do primeiro painel que somem no DEPT-135 e no DEPT-90.",
     "ok": "3 carbonos sem H: a C=O, o C ligado ao N e o C ligado à C=O.",
     "hash": [
      "02d2a77548fe6d63c4701deb5245434197689abbf7f9f58e7f4c31deaeda028f"
     ]
    },
    {
     "tipo": "opcoes",
     "qid": "e2e3",
     "enunciado": "O sinal em 166,8 ppm é:",
     "opcoes": {
      "a": "C=O de cetona (185–220 ppm)",
      "b": "C aromático ligado ao N",
      "c": "C–O de álcool (40–80 ppm)",
      "d": "C=O de éster conjugado (155–185 ppm)"
     },
     "dica": "Compare com as regiões do ¹³C.",
     "hash": "dcc636e405eb5d3d55ecf9891e0e566c8717a487d6928952f953ebc3e21795bc"
    },
    {
     "tipo": "num",
     "qid": "e2e4",
     "enunciado": "Estime, com a tabela de incrementos, o δ do carbono aromático ligado ao NH₂.",
     "fator": 1,
     "dica": "δ = 128,5 + (ipso do NH₂) + (para do –COOEt). O –COOEt está em para em relação a esse carbono.",
     "ok": "128,5 + 18,2 + 4,3 = 151,0 ppm — o sinal observado é 150,9!",
     "apoio": "Benzeno = 128,5 ppm. Incrementos: –NH₂ ipso +18,2 · orto −13,4 · meta +0,8 · para −10,0 &nbsp;|&nbsp; –COOEt ipso +2,0 · orto +1,2 · meta −0,1 · para +4,3. Arredonde para o inteiro.",
     "hash": [
      "083046bf5062554d38acbd55f7732140377d3fd3e202c3e72bb35e5a1ff35378"
     ]
    },
    {
     "tipo": "num",
     "qid": "e2e5",
     "enunciado": "Agora estime o δ do carbono aromático ligado ao grupo –COOEt.",
     "fator": 1,
     "dica": "δ = 128,5 + (ipso do –COOEt) + (para do NH₂).",
     "ok": "128,5 + 2,0 − 10,0 = 120,5 ppm — observado: 120,0.",
     "apoio": "Use a mesma tabela. Arredonde para o inteiro.",
     "hash": [
      "daa09b05f3aff39ee08bb030b784cc122b5629c968138094f50d74b85e558dd6",
      "7f8abfe3943014ac75b11fbde23d5488a416ef71f25b3235aa8fa2de51307bf1"
     ]
    }
   ]
  },
  {
   "pill": "Estrutura",
   "ico": "🧩",
   "titulo": "A estrutura",
   "chamada": "Monte a molécula",
   "historia": "Junte as peças: C₉H₁₁NO₂ com IDH 5; anel para-dissubstituído; um –NH₂; um éster conjugado com o anel; um etila no oxigênio.",
   "dados": {
    "tipo": "html",
    "legenda": "Resumo dos laudos",
    "html": "<table class=\"enig-tabela\"><tbody><tr><td>Fórmula</td><td class=\"num\">C₉H₁₁NO₂ · IDH 5</td></tr><tr><td>EM</td><td class=\"num\">M = 165 · pico base 120 (M − OEt) · 92 (120 − CO)</td></tr><tr><td>IV</td><td class=\"num\">3424/3343 (NH₂) · 1685 (C=O conjugada) · 1280 (C–O) · 845 (para)</td></tr><tr><td>¹H</td><td class=\"num\">7,86 d 2H · 6,63 d 2H · 4,31 q 2H · 4,05 s largo 2H · 1,36 t 3H</td></tr><tr><td>¹³C</td><td class=\"num\">166,8 · 150,9 · 131,6 (2C) · 120,0 · 113,8 (2C) · 60,3 · 14,4</td></tr></tbody></table>"
   },
   "questoes": [
    {
     "tipo": "estrutura",
     "qid": "e2f1",
     "enunciado": "Qual destas moléculas é o princípio ativo da pomada?",
     "candidatos": [
      {
       "id": "aa36f67e",
       "svg": "cand_antranilato_etila"
      },
      {
       "id": "73d247d1",
       "svg": "cand_metil_antranilato_metila"
      },
      {
       "id": "ceca7feb",
       "svg": "cand_benzocaina"
      },
      {
       "id": "327a01e6",
       "svg": "cand_aminobenzoato3"
      }
     ],
     "dicas": {
      "aa36f67e": "Um anel orto-dissubstituído teria 4 H aromáticos diferentes (4 sinais no ¹H) e 9 sinais no ¹³C.",
      "73d247d1": "Ela teria um singleto OCH₃ e um NCH₃ (3H cada), e não um grupo etila.",
      "327a01e6": "Um anel meta-dissubstituído não tem simetria: 4 H aromáticos diferentes e 9 sinais no ¹³C."
     },
     "dica": "Confira os laudos de RMN.",
     "ok": "Estrutura correta! Falta só o código final.",
     "hash": "7cc1e83274244c7be15e39836f9cec0f80a7363f95a6f46f32dd7253162e6f02"
    }
   ]
  }
 ],
 "codigo": {
  "titulo": "O código do laudo final",
  "len": 4,
  "texto": "Use três números que você descobriu pelo caminho:",
  "formula": "CÓDIGO = (m/z do íon molecular) × (nº de sinais no ¹³C) + (nº de carbonos sem H)",
  "hash": "253007d1273b38f06f5ab25499dbb4f2948974d7b6c70370609c4e026741deee",
  "dicas": {
   "54203f6d9c60c097707fe1b0fa0b12a18728f7285bdf1823d23a3ab18d6cb568": "Quase! Use o número de SINAIS do ¹³C, não o número de carbonos da fórmula.",
   "bed8b5eb002bacb4f6db98bac11ac530d647443e7dd2a6a724534626ecce043f": "Quase! Não esqueça de somar o número de carbonos sem H.",
   "a7ee6b36b5ebc2ba1f327672d7002ecff5754fe166fb6b9ec8f5538a3132e834": "Quase! Confira quantos carbonos não têm H (somem no DEPT)."
  }
 },
 "final": "421493418bc3f2bc5c57cfa99b02915c990fa4b7503268410791cf0a64fd6f754e33e9e55f3017b77406e763ed201feace504745eea78552199032922a50ed8d1439800f5535a1838c5988140e920b06ad4970da407c3de37efc2be2f8d343b9f2be521c4cafcac63a513f0ee4ec3f47669f7a8ad956f405bfef755dd7356e867190d10899b8521c10bf63dab2c4dfaddbc962f76e0c5bfdf3851ca586ea83ce7ef6bd4eb7cbdf20c76642dff9615b70f506dfc481c948c16fecb41b4e7319ab1cc69ec87b79d6a5042b8afab960c6e021a25018607018bb265d27208345f9066f0c059b9a4701db6ed80c8f0ad16ddb7ce02f8394682eb365fd96fb0d7d77c058d04d38401a7d043d845df499d4f00f4738c52e434536c33f7c141298aba5c166b385eb97ef955c350e9a1ce7ff18fd413598682f6bf1b2ae5712e4a6c2994c8a28a4923793909fd82aace5b274766d2f8a114c5cfa6378f5fd3232521eaf1afe645c966f47c70d3fbe26a188edb4a43c039d04ec472f45d45ed8a077594b9aa806a2ce3d2052e0ac1ec80f5148f4cbd6d55e7317352bb24bad41f4d1c5b31c2f539ae21f33d8ce64187b929695f4abe3fbb56a808769b11ddd1d5e73172993e021904bf33f927451303799a68d10452c167ac487b555b4be412e023d804b00def864859be594ea1d93bcdc43801619ada143954d13c1148000d1d0d9d1bf523e19441a6924f7db369f9c30e197a93cc85bdc29678dd7fd1742731dfd804fa10b3e5ff672a1bf187360f386df317dd4a18283f0aa9db7eaf165fed4225c5f35f40c898a925604a0df9164ae27439b8a7f1c007f0ebd4a75f69c951f8a67640dcf30d155f3683efb77830b002c5a25bc3852c5b400eb331c69e5aafa433902445d9fa065dd8a7f28c853f730ab2f26ca94117ef7191576ccbcae8626c645f66ca14451a275baa7bcb9c1d3b5440cce73d46cabd6900b83f750327b9c41c66272c507835694d2dc0d3740f5666276b8c2d103b884b09d87c1e718e92362d1f76010f5668a1291ef85142e501cabd95da027782d5ee70647b4c5642f0b71906b385a5625faa424966957764ec85672242f1f8d40595bdb41ea06032cd0b8ff549a6468efd8b25881cf36d6c6af82b6b2d1664a0e63baa95293d88a912c98f051034f94bdb79f98d7ac2ce427d8a34bd2c5d694bcbfac4f55d6c01777d3495af11820584b01066beab3639e612ca221ade0d7a8cacbd834b0138385f62d1a3f904a928b872557645332a057f9bba0c7e5ee9f6b49124a3fc852896c6a99ab09a9f82dce85183edd6f7c1061cc5fe7738577e6ca4e45c0c0480ef89a91a806b6ed72fe47322e87fdb77657707aea0c5fb637f692b52954160534dcbd7d2605adfe7f2ccf8ded0dc19795e4a37a876fe2000fff2fd40a92989819189cce18bd02fb3a4dfb5f839f79bead44190c68a011aeaacb9be8b65037a1c42a8b70812dc97eb4e4bd2ca019c28d2aa1972c697db4091b9de02b638e3426ed6db2f7c8f7870366f36bbbb3b0426a2166269129705fdb3c6ee566f0cddb785c760f611c80ee4487aa0bc944b96b0075ffc93ad1f429c871b8a245b4b0f022aff55fc1d7a3f704d8c33baf8b87567235fa9e763735f6b9e982a54344cca1fa8838bdd4d911d0b0fafe9c7fe3aa0401c6440018c9a20b689be438550d7c5e7db8314b61811e65a84ddf54f65c266b8a20076208534c9ac1717f41daefe6d44bac279bb950d4e765fe532790d4fe28720c2d7199dead11b5b2b6a50d08db2507895906018bdac0daa4b3d5a98f012f53a239df7358e6b97fa51c1362cf2150beb454b48c23bb93057b95712b17eec98f81b8acd57263ef7de8b4ce25002abfcc1fb58c71d1572a0c984adb6cdefe6e08c1bd6a72dcb52f0696af3235528bc72edaa89212472e496d92392f1ca85484a3793240362e7a65f1184f84f585bee17055fd3e49da261eafc0d8eb4ae88d238894275be4e78bb3eef246b2cae6eddc7180319b4a1fb5c4ed5d16f720d98918727174c3fb4b7bfa6b366ed54e8e797360eec718b699a928e3d8e5ad562c0605693ba219192264c0d7301cf0a3e90a07dd7656699b28fcec4974e413d3db617216fe814ca82477b8bb407c1efd2f456211a8275d21360810b58bc1ffac27050b027ac169e41b23d3b92796035ce0a36cb2a20cff24e3ceeef00f4ad3a59ec91b0861f319863277273acc077a72306c2998b0e1721699156e009460114f9d806d8b08c56d2f94d4420d3e48afa118b49724c74abbf9d69e99a648768a6ad6c3a507c0966621fdc9157c1dba4ecd30df35b014f13e2b5b27dd1336e76129c894b1cced2e28a7c34e3881c73169ebdfc8f2f58830182ed805f9d65c5a272c5b594fdbc1308a6dcae945640e667fd8dbf7bf2140da0f31e6a5512dd9df4044f6162c4c49f4a75049ac45eb944bf7e74fe0822a00733a196d916866ece6892ea5a393f1471786b5b5d8dbffe3b613780488b4caa13e7707a189151835c5b19401a397daad5a12341d4e5ba2d40081b58bbcfadd4198de0007ff7977208ac5b55f879ac8820f5cd8b94dbce0496c80e66ffa7aaf11e4befcf86222b3bf4f36b847989ea9a2fb2094129351817191019f11ed6c1908ac27ed10c6538f223a4e1199f70d34ee2359cc7988795c201b710b0b65b9803ba0c860beb5f63029fce609f2b8c0fedc178b09693064942dd5c8342301ef0ddd0b75e4b3147d60efd3a6bb6579c64f4f48afbd7a212854dd8b3416b6f1232745dfc6609d537f36f7cb29b32f458160fc9f485ce63811bca34b1f2d3dadf5293385020c8e23ac72826c83c3c2734eae9be2d6f8ce44e358838cdce51f87ad1fad5acfb93d40ad27d99d67558aeb436cf487ff15bb23440d9c5b45051768afb7787d33b908a30a2b23c9ce6f36b29ae15d7d8c09beb0e6436666bda509c0f9767caa47c43feacb6a3e95d343f42f83f2c01e70102d6bd6d97f9200426a5d8ea6ebedc86209de805e7d9b933edb79aec2308ccee53d4ea99e00f1c092a330f14a96ad1877c7d8a74d8986822a5d5781f09d5c74f9942f2fb2290866cd97e690f80e8a791e8c16d370941231c5438bb73262d7f16651e8b89aa9339463ef76bb72551eb5b91b9a7a642146cb0dcc06c39140a19784631caaa2e8c8597ca109136a3e8a7ea8c4107b00e8b3af0bcff05e6dbc2bd4a477a1585cdabdf7759536489be6b84c726bf045fcd111888945903caa2470c56d1c19ff54f18708243729dafe9baced53b7b9c92b59cdcc8c3a5ffb5f85914d67e2a379d1f0f2e489bb6a2ff800c9b735481438405f25d2767aa51e113dcffe708501f974f6780940577b520330670a28bd47b4fba3d27e00e8daeca31d0d527910162e39850e0d834fc9f49ed019d9b9b6aad3ad9a62053e0c999e2a8305611fde060ca51c186de8943b1e3986edb38125674a142d0d0fec608c785ec814bb1baa0aa0c74b46f603dd0abda1e13d5239f590a321c361068b42e6803b7471639fad89a28cb1de6ccd826fd96c15fdb340cac8a35198f004044983ce45c5d090d131aca99ac84688bec69f5529d7b0a4662f39ac97b709bec44731e7b67fb8f4da6dfa57b161f9190494f69eef8fdde0f7d7da4eb07632edfb817f6cc30737f0749e74b2ff2c30cb0ff5c8e9516d2882c351389220a7797d55071c60dd938feabb0a8fe6abb40a380762221c33b6f552c51da4adc0c2c956b19e8b21dcecba2fd63e61317fdeb300931bb2af37a2b5471998be7ec4d9db4d623358cf617707aa38731c27704a3da462fa759b6800bb644b5fc7d7ced346cf922366b7fceb799e948a21644f46a85d648fb8efd79cf56c754d77d00a15e6bde68236b80c861009413d53cf0d065cc2edd5d16cfaf172c920d2b10bcbe76eec4ed5bf9b27a8fd3c9e7ebf006e6135a8308b3d1a789617f4ac389a18145562e9084161e9ef9cda90d99672fa13da155d3dfd2f799c91f67e351e7756d7308f71d2b5f494883a92db825176b0edddd8504ff2e05d046b698b281e3f729d876c9cbb2d38d44181390d64a2d4fe50935d51787e4e3cfd8405f24ec4720d730feef240ef7f84988c7e645cdfadbfe8e32a405addfb8b473b8ca86072f04f584c9018316a442bca58ffb269c582ba0b82991a8c91889bbe7b6342ea2dad99b9388b384f44fd2e5833ac8225eccc8970ac52684b798efe2af2a3a9f7e838e8cebd44d3faebaa9843c78f821473b0989e48191307119701cd5b3a914375f8dc051d654ec8270f74327ed74e7889617ad498cefe60cea12358edaa9525d1e10809c8d5e16cc5b494ced8133e0af0afd9790b0be177f2693ee2c45117a32d8b864fd253b2f1a3f696edbc1736a99d664f150bebbc18cfb79e8fd30a1655f8074b83e2ade1f3c2e7343b6183d05dac87bee1ace32fa018525781f1923a846baa971b9370c4ad4440b4af9f784087bc80d5aabe20d448f35510f94efd71bf766cd43a2737200b942adf9fb44b806eb57ce90806947c88c430717475a77f8ce15b9a961a6a4d210622b6fdbaab5bf05ea52424e4a91cec9d0df34e1f6cdbb0254eac85c0c60851b18d1bda1005b7613c61cdb58c6da44daebb5cf44d5ec54b9369c5b20566883147403a9b61c59d2ced709a31044a37872ffc1aaf317878eb44c687fd705ab18bc93d0532b65b00d19a6ee3d3ceb3ae4daa122354016d7950a8e2f9c13d83ebc031a8d5236b31964c70b9523a6861d1ead3fb63951133b23182b046536d6e736d967b67a5c0622fb4a241c9f5228317a88ed4b204e835179cba92b3b973629b386f516b063544d02b379fa3e89f04a1dfdfde443dd0cc4c21424864c160ed2b0cb5d6afdd6b2ce82a88d32331a183aec48853af440c284321d225968b0b4353d2726c8f12658565e49414a74b07ac94993e2e8b8570cb0183bd2530438df5a4085769069cc9f1756f1862958fb08aacbdd75e824a0b5bdc33f794bb6a05aab5fe125847b090c5e82f25b3580d6372400f2efebdfbd06f47ca6c32b256ca2fe4842a39a6a96ff99d45ac69f668ae36790aadbdc833fa226f41f78a8f6c92bc4917e7cff82ec2578e6542d800ba377d428a1b4601ac269633af2ff50814df22948916d963f82a921bac0a7b36224ee5af54f0c59d9793b9a24cf14e8f8b7b600fe8e38d4403e241b36675d122f4e90aac856f64db49c622ad2f16a1f4c45e3d09f6ba4fb674f278e1f6c9caa49c805d023b8f0b335b472b0f1e09d2169845d7635dfe60d3490f7f2c4658196112fe0c924d7705956979582fc50ca42521af5c6c6f42037bc2199463d37db381da90cde1df3f7740ad3ab94318b62393fbe6b020a79649d5be126a70504d5a80ceac88680b21d59856325a5a5430d6f93c0e01d8ac36c3c2524585f31bd739758141a9643aaad9d2513b30d0b9dde399adea4ae92c928e8bde1f3f9c841857bb6798b9ecbfd5ab7b9318e29f2019273988b167fa63963e519e9058a7f56af95f2223d2b6c8b81e3d361445a5a40bb0a972597b4747ed94c6639c1e6fe769996e11770a5912dede5d6d2e4c69d8daecefdfe116468ec205ceab25bbb441403a63f6e0f3ae89266f0a2dd6016a1490f9a4b68eb63879b0a81098f887848bbb43d50b44d4ab30c4c79b060dd02f92cfd41686ca7d70188ecfc00ecbfe520f39cb124d3622af6af281c3eda02c3c54244a592546a2b96934fed48e47d8c4b05fd89b2b0bece39403f331a11d57aefa21af3dc77507665f8344098856e4384215b2aa4f4709b17375433e421335dd8d372ebdd102b74d2f8173d51a93ab9fe467345af62562d651db2489b9d05f9df1bd342e53421e77e45d43a82c9338d6eba4a50d8334fc7da95469151f4cc7626b5dd4cfc5aceb782cd13fa755394f11ed10e8703045b706253e3e90d90ef8315df4558d475f979523acc03eb55997289ac8f9036b680ea9c0de03c9c64fe15d93569977118b0f8294022d148418ff231536cd39f1bc1b5d1230b0e24eed1b872182089ba091f6d07dc9af4bfd5cf5e680c65553ee35a97a776a11711975df2caf8927d32c33e8bc9a15db312596af9aa48e5f8cab72594eb213b0e909ae2ab68c0df5acad99875d30f9191468dff7f734854a084b93ba73330f5f6ab2dac7b42224c57d206392c68e167168f36d7b90c22041102eaa4e49739f4a8a60724b8e73a11b41600e858275015ad0471dda1799238a8c151d21fe303151f25cbd1b659367c60cf741f5834257ce748a42bcb5eb08884f2ff461fd9b344f366e0d432d7785c3fd90f89f3bd807fc77a66bc54a31475f69a4ec040afe0164070ba47cee3ea141ab0c9807d8976b69829cc674449096540fddbc5339d4469cb97f6e1107f8756acc0c7486eb00a636ede001c834395acdac23f146a3f0eba50aa9e7d5f1656ecdc78f43cce07fd79f86dae3a0315a64dd1a4938b958df4ad9bb6b0d36cad2b49f6a150fe7f04c8f3af1eaa93f07d43581e20790cc2589d8b29e5ffb4e34f01b12419700a8311b28e44f27a8d920155fb1a727134e37673439a105284d69909c17a7382c0419bfa75ee369214067a8223ddb6b67ed37758a5de5320f2a2c11264dd998559a48a6da0913bfdc9b74b2cc61996a23479a409e2770b8b0f940de7af6b3914bf7850a8324ac476a9360898e5ff71d6c54ec06394438dc71ef371efc3a159154b0fefcc88abfae3195f0471292fc639e3a73dfd78d251efe8678a9f8e188cbc1de00cafada24f89aa85cf70d726fba23820aed77698f505662c36d8066f1332e17cc430345d5b499a17f5f78c87326c59bba4eb70ecd2e26245eb071fcc0417c15f5968fabd5bd0b1aaf65e938d091b7e2d277e747331c828ac31f56f1a0f6086440241a6b164ef7a2720cbe94ddb634ad99bca726510de7cf9f28a80ef9338e3b6022d96578b773d626e56a78413e29e31083f1d9ecf2933d9fb3fcc594559bdb8417e458548bb6f9d39fe734af0654e9a6c1d78bc4001265d320e756ef4f7ec95c4487c5c8fbb0073f96d430811be2b61f7157d8ebe516094a10fa73c6f70b2646817dba3ad0c93c8c22039dda4af6f4fbda2818197f56fbad8ff5e4c3cb7dcccac4e14b67d8a1af70a067933e4cb6e083e48f5573675bd611d5b1e90bc98b798da3c5834100fb5b9972c84f76573f78c91382bbf215711ab9d2b09b31eb0a9db533a6443ff79cba89f7171b6ddefdb9e6ecd465c435de1fe7825db21e86f16c2ce8cf271310143a91ebf8f69dd547909feda21ea512016e8606146af443e3bc3cad71ec9ae4ea9d5f4f0244ae5da04eda280fbe970737e1504034470c8973ea0adec3f01d2f28003abce9003c1eea87b1ad7098ac4514b2eef809ad499b6b0c74fa45b641a6fb22a417a2bf0cba2f7b1eb77359120742cdd7b6e94896ccd17f3011de5dec6ab3e9e8cbabed9fc14378160cd9bcd406b1e2d7e784431a592976bea6254cc998db644f89ff256581fbe949551d3dcef06a8389b46daf87d8500dbc9d6b10ea0cc4c5b78e79fe133491cf71465246ff468c99165aded110c3857036b41c9df5f1a8c8327f51292632ac872cc018f25dec682097a139920b2cbd36cbcc09b2ebc58f835d235582831ecc6ffcd3eccb8aa6a1f36cdf2562e2be04116c0cc78d5fecef4462923e4accc9c3934acb86ca30edaaf8c4e11f7231e595a7923927bf364f994f7c291e4252323dce45c3022a661bc226d5ececfd05defb2f314963476f720e7911e30a8a755de154ed235a0ee54bf25c14b1fffb48fd6b5330191f754b2c72e480d695e41f160ad22c211dd5286e59f154fcda22cef2cadcd582673ebe5a36fcd81e6fe44b8f15f154a523cd6d99a39ac55ab0cd70dfbe8dd7bd7c9557441a76f850d8ac1204ec77a3fc86b9be6931f023cfd65e8230436f743b976ac357c32c70205396db2a595b2a0949a404a08a3cd7c04a402930cd1b94092758cee80ce40c9ff8952f86ae23ddfe4f26df298bbd0845993eab492df55963bd786c834b77c669b7b26c759b49b2369ab40f30cef7d76a2c4b53c52250cd3c1ce8b1e536df25168967995c00820c20d5fe5d8b2e16536806ee465a5c42dea6d8d887c761647118b76fa37067e12f9e8a75afa439a047bc6e48954f86c0cfbaf9e70ab46b1f199c1134df01fa5666922a6e2b42c1963c617e87ea3215efa8283241fdc2df25b932d20398e767f8ab068ecbebae174b4ee6266a91a4674aaa2bb1fc1830f4411ec80f25016f0665648797e54c893e60abcf31975dd8621be1e24f151dea870d2617bd03fff73d7f8547e094a5c543d013e197843ec691add0b511b4a9c3e4ff778cc756dec7cf2637895c45c497ce613b3882bc32f11bb3d9a5771d31693da708a3387ecd1a48a6825dbec431d9891abc52919bb5347f1e8820adaf1b5bcdfc1317342167aa780c60eb18e75bd8db6b2ed7739123335f0eb9d364e62666390495f454505250430036ef3bbf4e2a120dacf88ce290cb684fcd0a6c0fcb40b04dc6034c7e8c5fe9c48e0be3e2d19ad8fb216b3fc9620164dfbcbc60af9b5cd074ce9f985d1088f19f5ac1ecc2ba5ea4cf729bb56f7fc6eb7c270551de8969c7eb271ae487362a21243be6d02ac93dd9d452cd27c0d3a5efa2be89e5dcb9fae24904528c8d9df7c36b492bb6a0d0749fca6bc86f52dd4cea8e80a147763cabe31badea649aecb7236c79d12da637f6674b34e8335e184f81a3c69051c80b55a26d9107299b1fba7510fc870bb7c7ba06e542c345887403eb08058e74f1ad0e9bd69b2294de4115d7a5546411279a5a910cf89bd937e10448875df74c668f843ae365317e3412d7bd2ebbe79108944fe1223306277c22126c88b31292b767e21f51070f71d1146fb4efc448ac2bfe892bcef8db672d2882117496dce90c3a834649a38a933355d731ff7c82dd8753a79e88ba04cbfd18cccf3888e75944891a21213ba2c3358e01bbf8d1c21b9cd6b61eabda52ee1a7caecc4e36b7c2c555b40f477f3b20e21890e00939a73047964c5526f4e9b5a7861029cebfbab7794bcd7d72c4340ae89f31cfb930f63540a1e7d670f2546ab7511f63aa415c1be097d8a9cc0e0a59107107cb3c2c69e9c3b43525138a60f27f69366ac4f0ae4f2f5e6c80ab3fee0a9f1545b24f1ca7908527addaec21ff52d4d446565c5fe4d5a7d67aba093abc6204c52faea3b76c862dcb3fbc2ef2c22490fbba220dc354dff5642ed465f500032f728aaec15c1d0a8a5e2febe4e6d7da4fb19336ac0fa371f4082fcf4308798c9a059902ae50d14f1cad9500b2b3480de0140ce893181cd3b7b4f5f4ae6af382d196b8ea114e5c7223c03d165a39b5b6c5dfa1be098495a5402ad684d700b839b7cea9c90ec40a60285343c44a393a48743779a1b683a57e2cc11c777db541251e02a2b30d8d8aaf2f95501060f003b8063bae68473f08f3134ea32f6506e1c01d861abdd61460b598c03ed1b8a4dae23cc920ed10523de9b70bc31493ae6977c61c8795f5e6df258ecb6944af9effbd49df5fafff293917123d47a76d8cbdfac4cf75f885ee4aa9cb5d500d073fa014a688dabc6849130ea231d9f00d639acdac642060b7d738893813c70b8dc968ad9185e2a178598c8bba0b6602a2043a5a2246c9015e671e1340e2fc125149849cdca36e7e94414332ea663eec9564dea012d935d6c8dfc3b0fb2e5afca02e2f4d558f8ff33971d0dc72303fb42561644422a811d068641b9cd930a5ddd3ac4c9dd23620fac737b11c43ee2d5cadf0b2396d580730c94f593ec739944b8a5d1154ce71b0d75fe804de56507ba9a43193106d4ed3ee3b15bfb86d8a4a21cc6b02ae822d359819d20bdf1aab29ce5d55f5a2af2937dee7175b76d5eb996fdc12c8c6a997073c220daf4abd17c98d3e21dd4e035cad4bb86366e029859595bfe86e31e1d0b8fab89c84d9e892dd80f3a482ecbbfa38ac40d60ccfa319d305d668cc758205c044ff03c6b190363b8d6c1eeef813ae0a7472fbd11b82cb36b6751f8153e0d84a5f9f9693ed4df066872e31009029e992d28e1d5a01687a327888c922389ee722b9f6bd929be3b4b809a73280b3df409e1c81ede1ee20fac0cd124b296e0d7fd6c9ce6e3e8da7d1ca31630105aa8a68aa7a885a3da2d62ea7034ea8e8bc9e74624576a8ae294551fd2f981ad6ccfad8d0d21511088329560615f266a099b8fa74917ab543d0127bb6e8cb3caca87b4342a5d48b0dc45d096660e10782861c7dc281c17971a26cd1d57b660c1d58a5123854505e599f7daf76fd79e0a1417e81145d5840167768044647d07fae914641e955bc03d3c9ba7fd2745ef05993a12c921095b5590bac12bf40bd2c179a6b68301803166e95fca9a1bfcbb9fdccfc832db972c70278c7bdfb69f8023130ac1c02f09e2857153e0c14006bc7eef80fd99057d81dd1f1d632bd3a40bfd5f115662ee741de2281b53739c09af134faf989bff126df4bdb95d5ff98cd938b0acced5a5a8848e18a1169e9ddf668f113e40bb345682654ba990a33fcf95ea4ec9de40ef88c7929e2f219a430c5499f2ad49961c3dcceaf0d2b3dc582afb6cc8d7fe8c5562143135728728443fc8b05f789c8444c9743ebce93e97057a6263c1c99e52accdc7ac44cd0bfd0376ef25a045e8d07d842a5be6328278d83b6c64a8445dc1d7a462428cfaa11c215d7cb326386dd5a36f491327176aba7ef319aba884612be34d759add5dfba44ea0cce5ce8633857361bff5f434b79bad38fc100694abdd159c7d48ed54dd788f801b24676c5b9fbb6b2261d64c49aac39dd815a1d25e1959c3e806af6f6cab80bfcf3958b5a99b84d79b7b9c05543206d6b96bfbc51091797cb5f029895c2b7032a320f906afa5b3fef51781e5a094c22d17d1aa2699b5a95ab86230cff8171b8d00e0330ad77244c65e57c2e2d52d6fcbb04b718f9caa57a403e242190c60dcdf748687dbf858c85c6dd2dab8947ec415f906570b231b85930c514c7f1c486ae9a8d6adc7d8f43094aeb510177aea8caf1a69f50fe92deacfebec380d8fb690e5ce4c55433e31f63cdeba604cdf949fda11d37c88fd15e6eccc2a06c3ab2e88b1cd6c46038ee183fb0c8aed93c96b5bb8d184304fa09232299ee46dfbbedbeb7d281108870c79cdc1fd13d97d9ca6af4e1529ec33fc8ba39c440c47126feb33c95cf056be902a12d3d2b5902dc5663ad40008288fe4b3ac4fd3b136058e4941b84bc8900f1f29b65fed5dec26ca123a72f52c253d0c24ef0fc4228592509cdaab9ae2f67a0ca3f700bf00a6eaad49bdc5c15de2f092675a0125fdd3f7d8ee33a8364263315024fc2a10b342615109a4929"
};
const ESTRUTURAS = {"cand_antranilato_etila": "<svg version='1.1' baseProfile='full' xmlns='http://www.w3.org/2000/svg' xmlns:rdkit='http://www.rdkit.org/xml' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' width='100%' height='100%' preserveAspectRatio='xMidYMid meet' viewBox='0 0 260 190'> <rect style='opacity:1.0;fill:#00000000;stroke:none' width='260.0' height='190.0' x='0.0' y='0.0'> </rect> <path class='bond-0 atom-0 atom-1' d='M 31.2,71.7 L 58.2,97.5' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-1 atom-1 atom-2' d='M 58.2,97.5 L 72.2,93.4' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-1 atom-1 atom-2' d='M 72.2,93.4 L 86.2,89.3' style='fill:none;fill-rule:evenodd;stroke:#FF7F7F;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-2 atom-2 atom-3' d='M 101.7,94.4 L 111.3,103.6' style='fill:none;fill-rule:evenodd;stroke:#FF7F7F;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-2 atom-2 atom-3' d='M 111.3,103.6 L 120.9,112.8' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-3 atom-3 atom-4' d='M 118.6,110.5 L 115.0,125.2' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-3 atom-3 atom-4' d='M 115.0,125.2 L 111.4,139.9' style='fill:none;fill-rule:evenodd;stroke:#FF7F7F;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-3 atom-3 atom-4' d='M 124.0,111.9 L 120.4,126.5' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-3 atom-3 atom-4' d='M 120.4,126.5 L 116.8,141.2' style='fill:none;fill-rule:evenodd;stroke:#FF7F7F;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-4 atom-3 atom-5' d='M 120.9,112.8 L 156.7,102.3' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-5 atom-5 atom-6' d='M 156.7,102.3 L 183.6,128.0' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-5 atom-5 atom-6' d='M 162.9,100.5 L 185.1,121.8' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-6 atom-6 atom-7' d='M 183.6,128.0 L 219.4,117.6' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-7 atom-7 atom-8' d='M 219.4,117.6 L 228.2,81.3' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-7 atom-7 atom-8' d='M 214.7,113.1 L 222.0,83.2' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-8 atom-8 atom-9' d='M 228.2,81.3 L 201.2,55.6' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-9 atom-9 atom-10' d='M 201.2,55.6 L 165.5,66.1' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-9 atom-9 atom-10' d='M 199.7,61.9 L 170.1,70.5' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-10 atom-10 atom-11' d='M 165.5,66.1 L 155.3,56.3' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-10 atom-10 atom-11' d='M 155.3,56.3 L 145.1,46.6' style='fill:none;fill-rule:evenodd;stroke:#7FB2FF;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-11 atom-10 atom-5' d='M 165.5,66.1 L 156.7,102.3' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path d='M 56.8,96.2 L 58.2,97.5 L 58.9,97.3' style='fill:none;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' /> <path d='M 120.4,112.3 L 120.9,112.8 L 122.7,112.2' style='fill:none;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' /> <path d='M 182.3,126.7 L 183.6,128.0 L 185.4,127.5' style='fill:none;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' /> <path d='M 217.6,118.1 L 219.4,117.6 L 219.8,115.7' style='fill:none;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' /> <path d='M 227.8,83.1 L 228.2,81.3 L 226.9,80.0' style='fill:none;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' /> <path d='M 202.6,56.9 L 201.2,55.6 L 199.5,56.1' style='fill:none;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' /> <path class='atom-2' d='M 87.4 87.1 Q 87.4 83.7, 89.1 81.8 Q 90.8 79.9, 93.9 79.9 Q 97.1 79.9, 98.7 81.8 Q 100.4 83.7, 100.4 87.1 Q 100.4 90.5, 98.7 92.5 Q 97.0 94.4, 93.9 94.4 Q 90.8 94.4, 89.1 92.5 Q 87.4 90.5, 87.4 87.1 M 93.9 92.8 Q 96.1 92.8, 97.2 91.4 Q 98.4 89.9, 98.4 87.1 Q 98.4 84.3, 97.2 82.9 Q 96.1 81.5, 93.9 81.5 Q 91.8 81.5, 90.6 82.9 Q 89.4 84.3, 89.4 87.1 Q 89.4 89.9, 90.6 91.4 Q 91.8 92.8, 93.9 92.8 ' fill='#FF7F7F'/> <path class='atom-4' d='M 105.6 149.0 Q 105.6 145.6, 107.2 143.7 Q 108.9 141.8, 112.1 141.8 Q 115.2 141.8, 116.9 143.7 Q 118.6 145.6, 118.6 149.0 Q 118.6 152.5, 116.9 154.4 Q 115.2 156.4, 112.1 156.4 Q 108.9 156.4, 107.2 154.4 Q 105.6 152.5, 105.6 149.0 M 112.1 154.8 Q 114.2 154.8, 115.4 153.3 Q 116.6 151.9, 116.6 149.0 Q 116.6 146.2, 115.4 144.8 Q 114.2 143.4, 112.1 143.4 Q 109.9 143.4, 108.7 144.8 Q 107.6 146.2, 107.6 149.0 Q 107.6 151.9, 108.7 153.3 Q 109.9 154.8, 112.1 154.8 ' fill='#FF7F7F'/> <path class='atom-11' d='M 111.2 33.2 L 113.1 33.2 L 113.1 39.3 L 120.3 39.3 L 120.3 33.2 L 122.3 33.2 L 122.3 47.4 L 120.3 47.4 L 120.3 40.9 L 113.1 40.9 L 113.1 47.4 L 111.2 47.4 L 111.2 33.2 ' fill='#7FB2FF'/> <path class='atom-11' d='M 125.0 46.9 Q 125.4 46.0, 126.2 45.5 Q 127.0 45.0, 128.2 45.0 Q 129.6 45.0, 130.4 45.8 Q 131.1 46.6, 131.1 47.9 Q 131.1 49.3, 130.1 50.6 Q 129.1 51.9, 127.0 53.4 L 131.3 53.4 L 131.3 54.5 L 125.0 54.5 L 125.0 53.6 Q 126.8 52.4, 127.8 51.4 Q 128.8 50.5, 129.3 49.7 Q 129.8 48.8, 129.8 48.0 Q 129.8 47.1, 129.4 46.6 Q 128.9 46.1, 128.2 46.1 Q 127.4 46.1, 126.9 46.4 Q 126.4 46.7, 126.0 47.4 L 125.0 46.9 ' fill='#7FB2FF'/> <path class='atom-11' d='M 135.4 33.2 L 140.0 40.7 Q 140.5 41.5, 141.2 42.8 Q 142.0 44.2, 142.0 44.2 L 142.0 33.2 L 143.9 33.2 L 143.9 47.4 L 141.9 47.4 L 137.0 39.2 Q 136.4 38.2, 135.8 37.1 Q 135.2 36.0, 135.0 35.7 L 135.0 47.4 L 133.1 47.4 L 133.1 33.2 L 135.4 33.2 ' fill='#7FB2FF'/> </svg>", "cand_metil_antranilato_metila": "<svg version='1.1' baseProfile='full' xmlns='http://www.w3.org/2000/svg' xmlns:rdkit='http://www.rdkit.org/xml' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' width='100%' height='100%' preserveAspectRatio='xMidYMid meet' viewBox='0 0 260 190'> <rect style='opacity:1.0;fill:#00000000;stroke:none' width='260.0' height='190.0' x='0.0' y='0.0'> </rect> <path class='bond-0 atom-0 atom-1' d='M 203.9,166.8 L 191.3,157.1' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-0 atom-0 atom-1' d='M 191.3,157.1 L 178.8,147.4' style='fill:none;fill-rule:evenodd;stroke:#7FB2FF;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-1 atom-1 atom-2' d='M 173.2,133.9 L 175.3,118.1' style='fill:none;fill-rule:evenodd;stroke:#7FB2FF;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-1 atom-1 atom-2' d='M 175.3,118.1 L 177.4,102.4' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-2 atom-2 atom-3' d='M 177.4,102.4 L 214.6,87.2' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-2 atom-2 atom-3' d='M 178.3,95.5 L 209.1,82.9' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-3 atom-3 atom-4' d='M 214.6,87.2 L 219.9,47.3' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-4 atom-4 atom-5' d='M 219.9,47.3 L 188.1,22.8' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-4 atom-4 atom-5' d='M 213.5,50.0 L 187.2,29.7' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-5 atom-5 atom-6' d='M 188.1,22.8 L 151.0,38.1' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-6 atom-6 atom-7' d='M 151.0,38.1 L 145.6,77.9' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-6 atom-6 atom-7' d='M 156.5,42.3 L 152.0,75.3' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-7 atom-7 atom-8' d='M 145.6,77.9 L 108.4,93.2' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-8 atom-8 atom-9' d='M 105.7,91.1 L 103.5,107.6' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-8 atom-8 atom-9' d='M 103.5,107.6 L 101.3,124.1' style='fill:none;fill-rule:evenodd;stroke:#FF7F7F;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-8 atom-8 atom-9' d='M 111.7,91.9 L 109.4,108.4' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-8 atom-8 atom-9' d='M 109.4,108.4 L 107.2,124.9' style='fill:none;fill-rule:evenodd;stroke:#FF7F7F;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-9 atom-8 atom-10' d='M 108.4,93.2 L 96.5,83.9' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-9 atom-8 atom-10' d='M 96.5,83.9 L 84.5,74.7' style='fill:none;fill-rule:evenodd;stroke:#FF7F7F;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-10 atom-10 atom-11' d='M 68.8,71.9 L 54.1,77.9' style='fill:none;fill-rule:evenodd;stroke:#FF7F7F;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-10 atom-10 atom-11' d='M 54.1,77.9 L 39.5,83.9' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-11 atom-7 atom-2' d='M 145.6,77.9 L 177.4,102.4' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path d='M 212.7,87.9 L 214.6,87.2 L 214.8,85.2' style='fill:none;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' /> <path d='M 219.7,49.3 L 219.9,47.3 L 218.3,46.1' style='fill:none;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' /> <path d='M 189.7,24.0 L 188.1,22.8 L 186.3,23.6' style='fill:none;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' /> <path d='M 152.8,37.3 L 151.0,38.1 L 150.7,40.1' style='fill:none;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' /> <path d='M 110.3,92.4 L 108.4,93.2 L 107.8,92.7' style='fill:none;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' /> <path class='atom-1' d='M 152.8 135.2 L 154.7 135.2 L 154.7 141.2 L 162.0 141.2 L 162.0 135.2 L 163.9 135.2 L 163.9 149.3 L 162.0 149.3 L 162.0 142.8 L 154.7 142.8 L 154.7 149.3 L 152.8 149.3 L 152.8 135.2 ' fill='#7FB2FF'/> <path class='atom-1' d='M 168.9 135.2 L 173.6 142.7 Q 174.0 143.4, 174.8 144.8 Q 175.5 146.1, 175.6 146.2 L 175.6 135.2 L 177.4 135.2 L 177.4 149.3 L 175.5 149.3 L 170.5 141.1 Q 169.9 140.2, 169.3 139.1 Q 168.7 138.0, 168.5 137.6 L 168.5 149.3 L 166.7 149.3 L 166.7 135.2 L 168.9 135.2 ' fill='#7FB2FF'/> <path class='atom-9' d='M 96.6 133.0 Q 96.6 129.6, 98.3 127.7 Q 100.0 125.8, 103.1 125.8 Q 106.2 125.8, 107.9 127.7 Q 109.6 129.6, 109.6 133.0 Q 109.6 136.5, 107.9 138.4 Q 106.2 140.4, 103.1 140.4 Q 100.0 140.4, 98.3 138.4 Q 96.6 136.5, 96.6 133.0 M 103.1 138.8 Q 105.3 138.8, 106.4 137.3 Q 107.6 135.9, 107.6 133.0 Q 107.6 130.3, 106.4 128.9 Q 105.3 127.4, 103.1 127.4 Q 100.9 127.4, 99.8 128.8 Q 98.6 130.2, 98.6 133.0 Q 98.6 135.9, 99.8 137.3 Q 100.9 138.8, 103.1 138.8 ' fill='#FF7F7F'/> <path class='atom-10' d='M 70.1 68.7 Q 70.1 65.3, 71.8 63.4 Q 73.5 61.5, 76.6 61.5 Q 79.8 61.5, 81.5 63.4 Q 83.1 65.3, 83.1 68.7 Q 83.1 72.1, 81.4 74.1 Q 79.7 76.0, 76.6 76.0 Q 73.5 76.0, 71.8 74.1 Q 70.1 72.1, 70.1 68.7 M 76.6 74.4 Q 78.8 74.4, 80.0 73.0 Q 81.1 71.5, 81.1 68.7 Q 81.1 65.9, 80.0 64.5 Q 78.8 63.1, 76.6 63.1 Q 74.5 63.1, 73.3 64.5 Q 72.1 65.9, 72.1 68.7 Q 72.1 71.5, 73.3 73.0 Q 74.5 74.4, 76.6 74.4 ' fill='#FF7F7F'/> </svg>", "cand_benzocaina": "<svg version='1.1' baseProfile='full' xmlns='http://www.w3.org/2000/svg' xmlns:rdkit='http://www.rdkit.org/xml' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' width='100%' height='100%' preserveAspectRatio='xMidYMid meet' viewBox='0 0 260 190'> <rect style='opacity:1.0;fill:#00000000;stroke:none' width='260.0' height='190.0' x='0.0' y='0.0'> </rect> <path class='bond-0 atom-0 atom-1' d='M 25.3,61.0 L 44.9,82.3' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-1 atom-1 atom-2' d='M 44.9,82.3 L 55.3,80.0' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-1 atom-1 atom-2' d='M 55.3,80.0 L 65.7,77.7' style='fill:none;fill-rule:evenodd;stroke:#FF7F7F;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-2 atom-2 atom-3' d='M 80.6,84.2 L 86.7,90.8' style='fill:none;fill-rule:evenodd;stroke:#FF7F7F;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-2 atom-2 atom-3' d='M 86.7,90.8 L 92.7,97.4' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-3 atom-3 atom-4' d='M 91.1,95.5 L 87.8,105.9' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-3 atom-3 atom-4' d='M 87.8,105.9 L 84.5,116.3' style='fill:none;fill-rule:evenodd;stroke:#FF7F7F;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-3 atom-3 atom-4' d='M 95.2,96.9 L 91.9,107.2' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-3 atom-3 atom-4' d='M 91.9,107.2 L 88.7,117.6' style='fill:none;fill-rule:evenodd;stroke:#FF7F7F;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-4 atom-3 atom-5' d='M 92.7,97.4 L 121.0,91.1' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-5 atom-5 atom-6' d='M 121.0,91.1 L 140.6,112.5' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-6 atom-6 atom-7' d='M 140.6,112.5 L 168.9,106.2' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-6 atom-6 atom-7' d='M 142.1,107.7 L 165.5,102.5' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-7 atom-7 atom-8' d='M 168.9,106.2 L 177.6,78.5' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-8 atom-8 atom-9' d='M 177.6,78.5 L 188.6,76.1' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-8 atom-8 atom-9' d='M 188.6,76.1 L 199.6,73.7' style='fill:none;fill-rule:evenodd;stroke:#7FB2FF;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-9 atom-8 atom-10' d='M 177.6,78.5 L 158.0,57.2' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-9 atom-8 atom-10' d='M 172.7,79.6 L 156.5,62.0' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-10 atom-10 atom-11' d='M 158.0,57.2 L 129.7,63.5' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-11 atom-11 atom-5' d='M 129.7,63.5 L 121.0,91.1' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-11 atom-11 atom-5' d='M 133.1,67.2 L 125.9,90.0' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path d='M 43.9,81.3 L 44.9,82.3 L 45.4,82.2' style='fill:none;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' /> <path d='M 92.4,97.1 L 92.7,97.4 L 94.2,97.1' style='fill:none;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' /> <path d='M 139.7,111.4 L 140.6,112.5 L 142.0,112.2' style='fill:none;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' /> <path d='M 167.5,106.5 L 168.9,106.2 L 169.4,104.8' style='fill:none;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' /> <path d='M 159.0,58.2 L 158.0,57.2 L 156.6,57.5' style='fill:none;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' /> <path d='M 131.2,63.1 L 129.7,63.5 L 129.3,64.8' style='fill:none;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' /> <path class='atom-2' d='M 66.7 76.1 Q 66.7 72.7, 68.3 70.8 Q 70.0 68.9, 73.2 68.9 Q 76.3 68.9, 78.0 70.8 Q 79.7 72.7, 79.7 76.1 Q 79.7 79.5, 78.0 81.5 Q 76.3 83.4, 73.2 83.4 Q 70.0 83.4, 68.3 81.5 Q 66.7 79.5, 66.7 76.1 M 73.2 81.8 Q 75.3 81.8, 76.5 80.4 Q 77.7 78.9, 77.7 76.1 Q 77.7 73.3, 76.5 71.9 Q 75.3 70.5, 73.2 70.5 Q 71.0 70.5, 69.8 71.9 Q 68.7 73.3, 68.7 76.1 Q 68.7 78.9, 69.8 80.4 Q 71.0 81.8, 73.2 81.8 ' fill='#FF7F7F'/> <path class='atom-4' d='M 77.5 125.1 Q 77.5 121.7, 79.2 119.8 Q 80.9 117.9, 84.0 117.9 Q 87.2 117.9, 88.9 119.8 Q 90.5 121.7, 90.5 125.1 Q 90.5 128.5, 88.8 130.5 Q 87.1 132.4, 84.0 132.4 Q 80.9 132.4, 79.2 130.5 Q 77.5 128.5, 77.5 125.1 M 84.0 130.8 Q 86.2 130.8, 87.4 129.4 Q 88.5 127.9, 88.5 125.1 Q 88.5 122.3, 87.4 120.9 Q 86.2 119.5, 84.0 119.5 Q 81.9 119.5, 80.7 120.9 Q 79.5 122.3, 79.5 125.1 Q 79.5 127.9, 80.7 129.4 Q 81.9 130.8, 84.0 130.8 ' fill='#FF7F7F'/> <path class='atom-9' d='M 202.8 65.2 L 207.4 72.7 Q 207.9 73.4, 208.6 74.8 Q 209.4 76.1, 209.4 76.2 L 209.4 65.2 L 211.3 65.2 L 211.3 79.3 L 209.4 79.3 L 204.4 71.1 Q 203.8 70.2, 203.2 69.1 Q 202.6 68.0, 202.4 67.6 L 202.4 79.3 L 200.6 79.3 L 200.6 65.2 L 202.8 65.2 ' fill='#7FB2FF'/> <path class='atom-9' d='M 214.0 65.2 L 215.9 65.2 L 215.9 71.2 L 223.2 71.2 L 223.2 65.2 L 225.1 65.2 L 225.1 79.3 L 223.2 79.3 L 223.2 72.8 L 215.9 72.8 L 215.9 79.3 L 214.0 79.3 L 214.0 65.2 ' fill='#7FB2FF'/> <path class='atom-9' d='M 227.9 78.8 Q 228.2 78.0, 229.0 77.5 Q 229.8 77.0, 231.0 77.0 Q 232.4 77.0, 233.2 77.7 Q 234.0 78.5, 234.0 79.9 Q 234.0 81.2, 232.9 82.5 Q 231.9 83.8, 229.8 85.4 L 234.1 85.4 L 234.1 86.4 L 227.8 86.4 L 227.8 85.5 Q 229.6 84.3, 230.6 83.4 Q 231.6 82.4, 232.1 81.6 Q 232.6 80.8, 232.6 79.9 Q 232.6 79.0, 232.2 78.5 Q 231.7 78.0, 231.0 78.0 Q 230.2 78.0, 229.7 78.3 Q 229.2 78.6, 228.9 79.3 L 227.9 78.8 ' fill='#7FB2FF'/> </svg>", "cand_aminobenzoato3": "<svg version='1.1' baseProfile='full' xmlns='http://www.w3.org/2000/svg' xmlns:rdkit='http://www.rdkit.org/xml' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' width='100%' height='100%' preserveAspectRatio='xMidYMid meet' viewBox='0 0 260 190'> <rect style='opacity:1.0;fill:#00000000;stroke:none' width='260.0' height='190.0' x='0.0' y='0.0'> </rect> <path class='bond-0 atom-0 atom-1' d='M 27.2,64.6 L 49.1,92.7' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-1 atom-1 atom-2' d='M 49.1,92.7 L 62.9,90.8' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-1 atom-1 atom-2' d='M 62.9,90.8 L 76.8,88.9' style='fill:none;fill-rule:evenodd;stroke:#FF7F7F;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-2 atom-2 atom-3' d='M 91.1,96.4 L 98.7,106.2' style='fill:none;fill-rule:evenodd;stroke:#FF7F7F;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-2 atom-2 atom-3' d='M 98.7,106.2 L 106.4,116.1' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-3 atom-3 atom-4' d='M 104.5,113.6 L 99.1,126.7' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-3 atom-3 atom-4' d='M 99.1,126.7 L 93.8,139.8' style='fill:none;fill-rule:evenodd;stroke:#FF7F7F;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-3 atom-3 atom-4' d='M 109.4,115.6 L 104.1,128.7' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-3 atom-3 atom-4' d='M 104.1,128.7 L 98.8,141.8' style='fill:none;fill-rule:evenodd;stroke:#FF7F7F;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-4 atom-3 atom-5' d='M 106.4,116.1 L 141.7,111.2' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-5 atom-5 atom-6' d='M 141.7,111.2 L 163.6,139.4' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-5 atom-5 atom-6' d='M 147.9,110.3 L 166.0,133.7' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-6 atom-6 atom-7' d='M 163.6,139.4 L 199.0,134.5' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-7 atom-7 atom-8' d='M 199.0,134.5 L 212.5,101.4' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-7 atom-7 atom-8' d='M 195.2,129.6 L 206.4,102.3' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-8 atom-8 atom-9' d='M 212.5,101.4 L 190.6,73.2' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-9 atom-9 atom-10' d='M 190.6,73.2 L 195.6,60.8' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-9 atom-9 atom-10' d='M 195.6,60.8 L 200.7,48.4' style='fill:none;fill-rule:evenodd;stroke:#7FB2FF;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-10 atom-9 atom-11' d='M 190.6,73.2 L 155.2,78.1' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-10 atom-9 atom-11' d='M 188.2,79.0 L 159.0,83.0' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-11 atom-11 atom-5' d='M 155.2,78.1 L 141.7,111.2' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path d='M 48.0,91.3 L 49.1,92.7 L 49.8,92.7' style='fill:none;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' /> <path d='M 106.0,115.6 L 106.4,116.1 L 108.1,115.8' style='fill:none;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' /> <path d='M 162.6,138.0 L 163.6,139.4 L 165.4,139.1' style='fill:none;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' /> <path d='M 197.2,134.7 L 199.0,134.5 L 199.7,132.9' style='fill:none;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' /> <path d='M 211.8,103.1 L 212.5,101.4 L 211.4,100.0' style='fill:none;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' /> <path d='M 157.0,77.9 L 155.2,78.1 L 154.5,79.8' style='fill:none;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' /> <path class='atom-2' d='M 78.0 87.9 Q 78.0 84.5, 79.6 82.6 Q 81.3 80.7, 84.5 80.7 Q 87.6 80.7, 89.3 82.6 Q 91.0 84.5, 91.0 87.9 Q 91.0 91.3, 89.3 93.3 Q 87.6 95.2, 84.5 95.2 Q 81.3 95.2, 79.6 93.3 Q 78.0 91.4, 78.0 87.9 M 84.5 93.6 Q 86.6 93.6, 87.8 92.2 Q 89.0 90.7, 89.0 87.9 Q 89.0 85.1, 87.8 83.7 Q 86.6 82.3, 84.5 82.3 Q 82.3 82.3, 81.1 83.7 Q 80.0 85.1, 80.0 87.9 Q 80.0 90.8, 81.1 92.2 Q 82.3 93.6, 84.5 93.6 ' fill='#FF7F7F'/> <path class='atom-4' d='M 86.4 149.2 Q 86.4 145.8, 88.1 143.9 Q 89.8 142.0, 92.9 142.0 Q 96.0 142.0, 97.7 143.9 Q 99.4 145.8, 99.4 149.2 Q 99.4 152.6, 97.7 154.6 Q 96.0 156.5, 92.9 156.5 Q 89.8 156.5, 88.1 154.6 Q 86.4 152.6, 86.4 149.2 M 92.9 154.9 Q 95.1 154.9, 96.2 153.5 Q 97.4 152.0, 97.4 149.2 Q 97.4 146.4, 96.2 145.0 Q 95.1 143.6, 92.9 143.6 Q 90.7 143.6, 89.6 145.0 Q 88.4 146.4, 88.4 149.2 Q 88.4 152.0, 89.6 153.5 Q 90.7 154.9, 92.9 154.9 ' fill='#FF7F7F'/> <path class='atom-10' d='M 200.9 33.1 L 205.5 40.6 Q 206.0 41.3, 206.7 42.7 Q 207.5 44.0, 207.5 44.1 L 207.5 33.1 L 209.4 33.1 L 209.4 47.2 L 207.5 47.2 L 202.5 39.0 Q 201.9 38.1, 201.3 37.0 Q 200.7 35.9, 200.5 35.5 L 200.5 47.2 L 198.7 47.2 L 198.7 33.1 L 200.9 33.1 ' fill='#7FB2FF'/> <path class='atom-10' d='M 212.1 33.1 L 214.0 33.1 L 214.0 39.1 L 221.3 39.1 L 221.3 33.1 L 223.2 33.1 L 223.2 47.2 L 221.3 47.2 L 221.3 40.7 L 214.0 40.7 L 214.0 47.2 L 212.1 47.2 L 212.1 33.1 ' fill='#7FB2FF'/> <path class='atom-10' d='M 226.0 46.7 Q 226.3 45.9, 227.1 45.4 Q 227.9 44.9, 229.1 44.9 Q 230.5 44.9, 231.3 45.6 Q 232.1 46.4, 232.1 47.8 Q 232.1 49.1, 231.0 50.4 Q 230.0 51.7, 227.9 53.3 L 232.2 53.3 L 232.2 54.3 L 225.9 54.3 L 225.9 53.4 Q 227.7 52.2, 228.7 51.3 Q 229.7 50.4, 230.3 49.5 Q 230.8 48.7, 230.8 47.8 Q 230.8 46.9, 230.3 46.4 Q 229.9 45.9, 229.1 45.9 Q 228.3 45.9, 227.8 46.2 Q 227.3 46.5, 227.0 47.2 L 226.0 46.7 ' fill='#7FB2FF'/> </svg>"};
