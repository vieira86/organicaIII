/* ============================================================
   enigma-elucidacao-dados-1.js — conteúdo do Enigma 1
   Gerado por script (os hashes SHA-256 dependem do texto exato
   das respostas). Para mudar uma resposta, gere de novo os
   hashes — o gabarito está em google-apps-script/
   enigmas-elucidacao/COMO_CONFIGURAR.md.
   ============================================================ */
const ENIGMA = {
 "id": "1",
 "salt": "oIII-elu1-7f3a",
 "emoji": "🍌",
 "historia": {
  "titulo": "🧪 O frasco sem rótulo",
  "texto": "Depois de uma aula prática, a técnica do laboratório encontrou na capela um frasco com um <em>líquido incolor, de cheiro adocicado de fruta</em>, sem rótulo nenhum. Antes de descartá-lo, ela enviou uma amostra para a central analítica. Você é o(a) analista responsável: os laudos vão chegando um de cada vez, e <em>cada laudo só é liberado quando você interpreta o anterior</em>. Ao final, desenhe a molécula e decifre o código que fecha o caso."
 },
 "ava": [
  "a <strong>estrutura da molécula</strong>, desenhada por você;",
  "os <strong>cálculos da análise elementar</strong> (fórmula mínima e massa);",
  "a <strong>atribuição dos dados</strong>: pico base e íon molecular do EM, bandas do IV e cada sinal de RMN de ¹H e de ¹³C;",
  "a <strong>conta do código final</strong>."
 ],
 "etapas": [
  {
   "pill": "Análise elementar",
   "ico": "⚖️",
   "titulo": "Análise elementar",
   "chamada": "Laudo 1: do que a amostra é feita?",
   "historia": "A combustão de uma massa conhecida da amostra (análise CHN) deu as porcentagens em massa abaixo. Nenhum N, S ou halogênio foi detectado: o restante é oxigênio.",
   "dados": {
    "tipo": "html",
    "legenda": "Laudo 1 · análise elementar (CHN)",
    "html": "<table class=\"enig-tabela\"><tbody><tr><td>Carbono (C)</td><td class=\"num\">64,58%</td></tr><tr><td>Hidrogênio (H)</td><td class=\"num\">10,84%</td></tr><tr><td>Nitrogênio (N)</td><td class=\"num\">0,00%</td></tr><tr><td>Oxigênio (O)</td><td class=\"num\">por diferença</td></tr></tbody></table>",
    "nota": "Massas atômicas: C = 12,01 · H = 1,008 · O = 16,00 g/mol."
   },
   "questoes": [
    {
     "tipo": "num",
     "qid": "e1a1",
     "enunciado": "Qual é a porcentagem de oxigênio na amostra?",
     "fator": 10,
     "dica": "O oxigênio é o que falta para 100%: 100 − %C − %H.",
     "unidade": "%",
     "ok": "Isso! 24,58% de O.",
     "hash": [
      "0187cbec3b2221e1759e8b2e2c471affc5aa31e43a3bc8bef059ee55393f07fe"
     ]
    },
    {
     "tipo": "formula",
     "qid": "e1a2",
     "enunciado": "Qual é a fórmula mínima (empírica) da substância?",
     "apoio": "Divida cada porcentagem pela massa atômica do elemento, depois divida todos pelo menor valor. Se aparecer um número terminado em ,5, multiplique tudo por 2.",
     "elementos": [
      "C",
      "H",
      "O"
     ],
     "dica": "Depois da divisão pelo menor você deve encontrar 3,5 : 7 : 1. Não pode haver meio átomo!",
     "ok": "Fórmula mínima C₇H₁₄O₂.",
     "hash": {
      "C": "ff73da02840c903c2e0d2b4676d7a6d7d28b93caa45be57e2819a9a1452a4a3b",
      "H": "5615b4560192eb12e7b78e5f917bdb42caa262ec50ae47c768893827e7826cde",
      "O": "90a91cb07d1731b96be3d2e6282cb957546669f6193dd5646c84e8ea522a9666"
     }
    },
    {
     "tipo": "num",
     "qid": "e1a3",
     "enunciado": "Qual é a massa da fórmula mínima?",
     "fator": 1,
     "dica": "Some: 7 × 12,01 + 14 × 1,008 + 2 × 16,00 e arredonde para o inteiro.",
     "unidade": "g/mol",
     "ok": "130 g/mol. Guarde esse número!",
     "hash": [
      "037390f70ec1ad4f823cb661f63b86470dd762a5b00c56ea0f4ee7ceb1bdc33a"
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
   "dicaFerramenta": "desenhe a sua hipótese e compare os fragmentos",
   "dados": {
    "tipo": "ms",
    "legenda": "Laudo 2 · espectro de massas (impacto de elétrons, 70 eV)",
    "direita": "passe o mouse nos picos",
    "picos": [
     [
      27,
      12
     ],
     [
      29,
      9
     ],
     [
      39,
      8
     ],
     [
      41,
      24
     ],
     [
      42,
      22
     ],
     [
      43,
      100
     ],
     [
      55,
      38
     ],
     [
      61,
      9
     ],
     [
      70,
      46
     ],
     [
      73,
      4
     ],
     [
      87,
      7
     ],
     [
      115,
      0.8
     ],
     [
      130,
      1.2
     ]
    ],
    "xmin": 20,
    "xmax": 140,
    "nota": "O íon molecular deste tipo de composto é muito fraco: procure com atenção na ponta direita do espectro."
   },
   "questoes": [
    {
     "tipo": "num",
     "qid": "e1b1",
     "enunciado": "Qual é o m/z do íon molecular (M⁺•)?",
     "fator": 1,
     "dica": "O íon molecular é o pico de MAIOR m/z do espectro (aqui, bem pequeno).",
     "ok": "M = 130.",
     "hash": [
      "d928f1d813f4ec019bb8fdca382af2609b88c988815fa45d3a6fb65b41cf674e"
     ]
    },
    {
     "tipo": "opcoes",
     "qid": "e1b2",
     "enunciado": "Comparando M com a massa da fórmula mínima, qual é a fórmula MOLECULAR?",
     "opcoes": {
      "a": "C₁₄H₂₈O₄ (o dobro da fórmula mínima)",
      "b": "C₈H₁₈O (mesma massa, outra fórmula)",
      "c": "C₇H₁₄O₂ (fórmula molecular = fórmula mínima)",
      "d": "C₆H₁₀O₃"
     },
     "dica": "Se M é igual à massa da fórmula mínima, n = 1.",
     "hash": "5cd4fc278c28c5b2ecfe03904b2245032d5249297eae7783c4c732005474a099"
    },
    {
     "tipo": "opcoes",
     "qid": "e1b3",
     "enunciado": "O que a regra do nitrogênio diz sobre M = 130?",
     "opcoes": {
      "a": "M par → exatamente 1 átomo de N",
      "b": "M par → a molécula tem um halogênio",
      "c": "A regra não vale para compostos com O",
      "d": "M par → 0 ou um número par de átomos de N"
     },
     "dica": "Massa molecular ímpar ↔ número ímpar de N.",
     "ok": "Isso: concorda com a análise elementar (0% de N).",
     "hash": "24d49d8095512111bcb5edff7913f6178b2038e964c26af05e8b8cf2b6099adc"
    },
    {
     "tipo": "num",
     "qid": "e1b4",
     "enunciado": "Qual é o m/z do pico base?",
     "fator": 1,
     "dica": "O pico base é o mais intenso do espectro (100%).",
     "ok": "m/z 43: em acetatos, é o íon acílio CH₃–C≡O⁺.",
     "hash": [
      "12d18281f5198aa3a1c666aa514a169a5762f68f4020ae9b152f321a57b967db"
     ]
    },
    {
     "tipo": "opcoes",
     "qid": "e1b5",
     "enunciado": "O pico em m/z 70 corresponde a M − 60. Que molécula neutra a amostra perdeu?",
     "opcoes": {
      "a": "CO₂ + H₂O",
      "b": "CH₃COOH (ácido acético)",
      "c": "C₂H₄ + CO",
      "d": "H₂O + C₃H₆"
     },
     "dica": "Calcule a massa de cada opção: só uma soma exatamente 60.",
     "ok": "Perder 60 (CH₃COOH) é típico dos ésteres de acetato.",
     "hash": "fdf81a78268f66119fbb98882fe73e87b32e469732f8c9712076571188f8f7eb"
    }
   ]
  },
  {
   "pill": "IDH e IV",
   "ico": "🌈",
   "titulo": "IDH e infravermelho",
   "chamada": "Laudo 3: espectro de infravermelho",
   "ferramenta": "iris",
   "dicaFerramenta": "digite as bandas principais e siga a árvore de decisão",
   "dados": {
    "tipo": "ir",
    "legenda": "Laudo 3 · IV (filme líquido)",
    "direita": "passe o mouse para ler o número de onda",
    "bandas": [
     [
      2960,
      0.8,
      60
     ],
     [
      2935,
      0.5,
      40
     ],
     [
      2875,
      0.45,
      40
     ],
     [
      1742,
      0.95,
      30
     ],
     [
      1468,
      0.45,
      25
     ],
     [
      1387,
      0.35,
      20
     ],
     [
      1368,
      0.6,
      20
     ],
     [
      1240,
      0.95,
      45
     ],
     [
      1058,
      0.6,
      35
     ],
     [
      965,
      0.3,
      30
     ],
     [
      610,
      0.25,
      30
     ]
    ]
   },
   "questoes": [
    {
     "tipo": "num",
     "qid": "e1c1",
     "enunciado": "Qual é o índice de deficiência de hidrogênio (IDH) da fórmula molecular?",
     "fator": 1,
     "dica": "IDH = (2C + 2 + N − H − X) ÷ 2. O oxigênio não entra na conta.",
     "ok": "IDH = 1: uma ligação π (C=O ou C=C) ou um anel.",
     "hash": [
      "ecd0b3c3e008e5f4af3363d76b600845125ff80dc463c5c4e1ff6014eb285667"
     ]
    },
    {
     "tipo": "opcoes",
     "qid": "e1c2",
     "enunciado": "Banda muito forte em ~1740 cm⁻¹, outra muito forte em ~1240 cm⁻¹ e nenhuma banda larga entre 3200 e 3600 cm⁻¹. Que função orgânica é essa?",
     "opcoes": {
      "a": "Cetona",
      "b": "Ácido carboxílico",
      "c": "Álcool",
      "d": "Aldeído",
      "e": "Éster"
     },
     "dica": "1740 é C=O; 1240 é um C–O forte. Qual função tem as duas coisas e nenhum O–H?",
     "hash": "b8bbd59ba0ea62069828a660db53172412707c4159ae147a7af0e418da62d4ba"
    },
    {
     "tipo": "opcoes",
     "qid": "e1c3",
     "enunciado": "Por que a amostra NÃO pode ser um ácido carboxílico?",
     "opcoes": {
      "a": "Falta a banda O–H muito larga entre 2500 e 3300 cm⁻¹",
      "b": "Ácidos não têm banda de C=O",
      "c": "A C=O de ácidos fica acima de 1900 cm⁻¹",
      "d": "Ácidos não absorvem no infravermelho"
     },
     "dica": "Pense no que um ácido carboxílico tem que um éster não tem.",
     "hash": "2837395f4573cbe814c15fd724edb556d483020e53a61a96e2103ea594763974"
    }
   ]
  },
  {
   "pill": "RMN ¹H",
   "ico": "🧲",
   "titulo": "RMN de ¹H",
   "chamada": "Laudo 4: RMN de ¹H (CDCl₃, 300 MHz)",
   "ferramenta": "numares",
   "dicaFerramenta": "simule o espectro da sua hipótese e compare",
   "dados": {
    "tipo": "rmn",
    "legenda": "Laudo 4 · RMN de ¹H · os números em rosa são as alturas da integração",
    "direita": "ampliações com posições em Hz",
    "sinais": [
     {
      "d": 4.09,
      "h": 2,
      "tipo": "mult",
      "acopl": [
       [
        2,
        6.9
       ]
      ],
      "integral": 2.7
     },
     {
      "d": 2.04,
      "h": 3,
      "tipo": "s",
      "acopl": [],
      "integral": 4.1
     },
     {
      "d": 1.69,
      "h": 1,
      "tipo": "mult",
      "acopl": [
       [
        8,
        6.7
       ]
      ],
      "integral": 1.4
     },
     {
      "d": 1.51,
      "h": 2,
      "tipo": "mult",
      "acopl": [
       [
        3,
        6.8
       ]
      ],
      "integral": 2.7
     },
     {
      "d": 0.92,
      "h": 6,
      "tipo": "mult",
      "acopl": [
       [
        1,
        6.6
       ]
      ],
      "integral": 8.1
     }
    ]
   },
   "questoes": [
    {
     "tipo": "num",
     "qid": "e1d1",
     "enunciado": "Quantos sinais (tipos de H) aparecem no espectro? (Não conte o TMS.)",
     "fator": 1,
     "dica": "Cada grupo de linhas próximas é UM sinal: olhe as ampliações.",
     "ok": "5 tipos de hidrogênio.",
     "hash": [
      "f1e1b913e40417f7dfde662460f6c595a61112c2903668625e33d1cc9398b547"
     ]
    },
    {
     "tipo": "tabela",
     "qid": "e1d2",
     "enunciado": "Quantos H há em cada sinal?",
     "apoio": "Divida as integrais pela menor e arredonde. A soma tem que dar 14 (a fórmula).",
     "colunas": [
      "δ (ppm)",
      "integral"
     ],
     "linhas": [
      [
       "4,09",
       "2,7"
      ],
      [
       "2,04",
       "4,1"
      ],
      [
       "1,69",
       "1,4"
      ],
      [
       "1,51",
       "2,7"
      ],
      [
       "0,92",
       "8,1"
      ]
     ],
     "pergunta": "nº de H",
     "dica": "Divida tudo por 1,4 (a menor integral). Confira se a soma dá 14.",
     "ok": "2 : 3 : 1 : 2 : 6 = 14 H.",
     "hash": "478ac41301e94d9d7399df1847d3431ab981ae92ca2126d801bd5977d3ea402d"
    },
    {
     "tipo": "opcoes",
     "qid": "e1d3",
     "enunciado": "Um dubleto de 6H em 0,92 ppm, acoplado a um multipleto de 1H. Que fragmento é esse?",
     "opcoes": {
      "a": "Um grupo terc-butila, (CH₃)₃C–",
      "b": "Um grupo isopropila, (CH₃)₂CH–",
      "c": "Dois grupos etila iguais",
      "d": "Um grupo propila, CH₃CH₂CH₂–"
     },
     "dica": "Dubleto = vizinho de 1 H. Seis H equivalentes = dois CH₃ iguais.",
     "hash": "02d32c3d9356525683a05aaf37381ae24541c9902afb523344acaaf2df296dde"
    },
    {
     "tipo": "opcoes",
     "qid": "e1d4",
     "enunciado": "O tripleto de 2H em 4,09 ppm é:",
     "opcoes": {
      "a": "CH₂ α à carbonila, vizinho de um CH₃",
      "b": "H vinílico de um alceno",
      "c": "CH₂ ligado ao O do éster, vizinho de um CH₂",
      "d": "CH₂ ligado ao O, vizinho de um CH₃"
     },
     "dica": "δ ≈ 4 indica CH ligado a O; tripleto = 2 H vizinhos.",
     "ok": "É o O–CH₂ do lado do álcool do éster.",
     "hash": "e88f2cb9e64946f0eb60d1cb205ff691d3221c3a541456e0a1af6581efdf2f4a"
    },
    {
     "tipo": "opcoes",
     "qid": "e1d5",
     "enunciado": "O singleto de 3H em 2,04 ppm é:",
     "opcoes": {
      "a": "Grupo metóxi (–OCH₃)",
      "b": "CH₃ de cadeia, vizinho de um CH₂",
      "c": "H de uma hidroxila (OH)",
      "d": "CH₃ ligado à carbonila (CH₃–C=O)"
     },
     "dica": "Singleto: sem vizinhos com H. Em ~2 ppm, ao lado de uma C=O.",
     "ok": "É o CH₃ do acetato.",
     "hash": "cbdddacfe064ef239fb408ec9535b8816542abf01e80611ae821c3a251beb442"
    }
   ]
  },
  {
   "pill": "RMN ¹³C",
   "ico": "🧬",
   "titulo": "RMN de ¹³C e DEPT",
   "chamada": "Laudo 5: RMN de ¹³C e DEPT (CDCl₃, 75 MHz)",
   "ferramenta": "numares",
   "dicaFerramenta": "confira o nº de sinais esperado para a sua estrutura",
   "dados": {
    "tipo": "c13",
    "legenda": "Laudo 5 · ¹³C desacoplado, DEPT-135 e DEPT-90",
    "direita": "o tripleto em 77 ppm é o CDCl₃",
    "sinais": [
     {
      "d": 171.1,
      "tipo": "C",
      "n": 1
     },
     {
      "d": 63.1,
      "tipo": "CH2",
      "n": 1
     },
     {
      "d": 37.4,
      "tipo": "CH2",
      "n": 1
     },
     {
      "d": 25.1,
      "tipo": "CH",
      "n": 1
     },
     {
      "d": 22.5,
      "tipo": "CH3",
      "n": 2
     },
     {
      "d": 21.0,
      "tipo": "CH3",
      "n": 1
     }
    ]
   },
   "questoes": [
    {
     "tipo": "num",
     "qid": "e1e1",
     "enunciado": "Quantos sinais de carbono aparecem no espectro desacoplado? (Sem CDCl₃ e TMS.)",
     "fator": 1,
     "dica": "Conte os picos do primeiro painel, inclusive o baixinho perto de 171 ppm.",
     "ok": "6 sinais.",
     "hash": [
      "835a9554d812365a49377b9993eb8328c0d1677d6815063a35b9ada477927384"
     ]
    },
    {
     "tipo": "opcoes",
     "qid": "e1e2",
     "enunciado": "A fórmula tem 7 carbonos, mas só há 6 sinais. Por quê?",
     "opcoes": {
      "a": "Um C sem H não aparece no ¹³C",
      "b": "Os dois CH₃ do isopropila são equivalentes",
      "c": "A C=O nunca aparece no ¹³C",
      "d": "Um sinal está escondido pelo CDCl₃"
     },
     "dica": "Lembre do dubleto de 6H no ¹H.",
     "hash": "80785a8f654b17b9e836a8e46a2432132f629be0cf582efcf1b1e1f8808e0da7"
    },
    {
     "tipo": "num",
     "qid": "e1e3",
     "enunciado": "Quantos carbonos CH₂ a molécula tem?",
     "fator": 1,
     "dica": "No DEPT-135 os CH₂ aparecem PARA BAIXO.",
     "ok": "Dois CH₂.",
     "hash": [
      "11437207f6f2ecf3fdd8a6f106637737655dee96eae5ef5eb76936ae464161c2"
     ]
    },
    {
     "tipo": "opcoes",
     "qid": "e1e4",
     "enunciado": "O sinal em 171,1 ppm, que desaparece nos dois DEPT, é:",
     "opcoes": {
      "a": "C=O de cetona (185–220 ppm)",
      "b": "Carbono aromático (110–175 ppm)",
      "c": "Carbono de alceno, =CH (100–150 ppm)",
      "d": "C=O de éster (155–185 ppm)"
     },
     "dica": "Compare com as regiões do ¹³C. Sumir no DEPT = carbono sem H.",
     "ok": "Carbono sem H, na região das C=O de ésteres.",
     "hash": "1bde0924125b1b96a988f6517b6c3d80292505f4dfc59ca77985d6d1155ea92b"
    }
   ]
  },
  {
   "pill": "Estrutura",
   "ico": "🧩",
   "titulo": "A estrutura",
   "chamada": "Monte a molécula",
   "historia": "Junte as peças: C₇H₁₄O₂, éster, um acetato (CH₃–C=O), um O–CH₂–CH₂– e um isopropila. Desenhe no caderno e só então escolha.",
   "dados": {
    "tipo": "html",
    "legenda": "Resumo dos laudos",
    "html": "<table class=\"enig-tabela\"><tbody><tr><td>Fórmula</td><td class=\"num\">C₇H₁₄O₂ · IDH 1</td></tr><tr><td>EM</td><td class=\"num\">M = 130 · pico base 43 · M − 60 = 70</td></tr><tr><td>IV</td><td class=\"num\">1742 (C=O) · 1240 (C–O) · sem O–H</td></tr><tr><td>¹H</td><td class=\"num\">4,09 t 2H · 2,04 s 3H · 1,69 m 1H · 1,51 q 2H · 0,92 d 6H</td></tr><tr><td>¹³C</td><td class=\"num\">171,1 · 63,1 · 37,4 · 25,1 · 22,5 (2C) · 21,0</td></tr></tbody></table>"
   },
   "questoes": [
    {
     "tipo": "estrutura",
     "qid": "e1f1",
     "enunciado": "Qual destas moléculas é a amostra?",
     "candidatos": [
      {
       "id": "840d1de3",
       "svg": "cand_propanoato_isobutila"
      },
      {
       "id": "18088b20",
       "svg": "cand_acetato_isoamila"
      },
      {
       "id": "c09f6976",
       "svg": "cand_butanoato_isopropila"
      },
      {
       "id": "1504d484",
       "svg": "cand_acetato_pentila"
      }
     ],
     "dicas": {
      "840d1de3": "Ela teria um quarteto 2H em ~2,3 (CH₂ α à C=O) e nenhum singleto de 3H; o O–CH₂ seria um dubleto.",
      "c09f6976": "O O–CH seria um septeto de 1H em ~5,0 ppm; aqui o sinal mais desblindado é um tripleto de 2H.",
      "1504d484": "Ela não teria o dubleto de 6H: só um tripleto de CH₃ (3H), e daria 7 sinais no ¹³C."
     },
     "dica": "Confira os laudos de RMN.",
     "ok": "Estrutura correta! Falta só o código final.",
     "hash": "3af1167c9645960e546cb37b498592aa451d6aaff05281ea1f6e5516435dcd8b"
    }
   ]
  }
 ],
 "codigo": {
  "titulo": "O código que fecha o caso",
  "len": 4,
  "texto": "Use dois números que você descobriu pelo caminho:",
  "formula": "CÓDIGO = (m/z do íon molecular) × (número de átomos de H da fórmula molecular)",
  "hash": "6149d3ab4aeb31471e9bbbe9e39297d2e4ba7a24f9fceb911a57b6611b395fdc",
  "dicas": {
   "d7cd8b2cdaad8af9c52b65dacde56824ca50e4a3e4d632658fe0a61506c20e64": "Quase! Confira o número de H da fórmula molecular.",
   "8470db9a3df6f6436a4360d3655f84ccc1da68fdaaf579e2322f5d8403f04571": "Quase! Confira o número de H da fórmula molecular."
  }
 },
 "final": "d25d69461e0e4df0a0a7f0f633c230e10845c3370cb34eaae631cd7126c4d26e66dabe22ba05098eae6ff22fc816c421a6074270a13c1a2c81eb1287648bbc8ac9a7f3d1f33d56892c1041e3939489adec9a40c5b542e1208336631529470304030803ce1f931ac8c190c76facb768c3bb935ae691158fa54b2589596aec5fb67ceb54c74a95593f8a61c43973d56ee2253f87cf81f965088ee7b818fcd773118cf59d3e7c1563b473b9009d656b826c49ff34597288dc3f142a412f1d185e4e44fda447abe3d42c020b5b097bf2638aaa9efb997a3a31081d8bd888ff08bb4ec527c9151f4ceb66261e17781cf5ce011b1bbe7f739fc2bfeeba3d621d530328889c16bdce6bb986bc39706c422f85ec4e5118f56aee9478d05ccda019bc0ae873df81f8434e0aa52de18d76e6a8fdfb777c838390a15c2ef031f6eb3aa0b3f1fa5d3333ac5adcb8f09de204d300f70a4d55f748e76a8974fe9098e3e17349291287c0086772c65838995e25be088393043347aeb34548083fb7a11e904e11e5dbd7377840de1fe2b0be118352562b2758b0a3f961c87434167276a4948af1c9edb8ade10d0305bd19be52a38ef8d7a3f799f06e04357d66a03d228dd10b45aa81d75284c33dcdd1a2f2679444a4e41163f034bbae6a65e78d33e7792a6316d17e174d114fb4e28d417aac606517c242495b5d2bd294ddc3afe7175d5a70ac35dd634cd29d35b192d9d4aa0b19c5a84b6ce5ba9cdc2497a5577ffda257b0faf782c68bf0458f30387d162e850f32a697353d259195c3ee1d6cde8cce98f65c5c6165a69561ef11271192e3ac91edb8a6a7aeb1d5bf43ad1dbdde24967b013fc77f2a513809b7f040f8540fbfa70431caf99e54a339b069e4895f05aba7f91420d92a435c5ced9665223ac0722acb569b40947c76f09809c9e364d5c8c54e67f96a4714f449527563375fb27d5d76171fc3eb1348c89db9b13cc657131c857e8f1cb61d004cb21ceb8586df97e241b80862330bddb4c3ae5807f9327c0e18562cdef8a9ece7cc34a389065142adf3ef5f26ffa85b9847810b7bacb11e6fb565a4759dd7b42d0c80c8491bf667b97e66634d7c45d83865e6d1a1df54b5b3adb75c072a1bde6e634a301749dc82f7a675b6395fcba9f0047789a61eb265134768b720042c2324094de05c0de45f24c1a32ebca80298f4e7706eeccf93f88bad79a4c36e2010e4de1b628293ae0ded891b070ee72225ce71b45e083857a379a8d12d8a89683c968cd76b3b19d41faed90cb1b2a14c888642a05861a43e2926157b68760428a261575e9a24ccd2b81bbe7fa90ba305d96fdb07afa579ed9e513c87b21419cf1ba4d80c9525f3958226313fcb9123a0cce102887471bcb3d3680cc34d9c21e55428be7caccc0566c8df62074fb0102f320e7cb103229474a161099e13837e71c7af9ba8e656a283a2ea2d294ed0237b724d37ba02bea37a6df16686b0ffe472c8441c1c7bfc382fe32de0d4428303d6102d9b166880c4a80f096b889be14d7ef303cc03a7298c97ed9d05538c6708bba96958d2ee1be43104fe9c277f2c514dc59ded45112d27252a408b6df4c42a64b90077719536bcdcd9b09a1c3d4a8dcd6ad838f37d23345bb0889561b8ed3cc82e24dc0180900fea905e81a6407ab47dc6511d48648187c9ed60db7ef86581158f6e416f9842e3ec9983c62de289bb15351b7b1ea6b186f5b36933c14d7d598d47b6694b26a869fa78ade6b269bd8c02aff1b43e147c7ec416b74bc42774d280c2b1c0f4a57bb62257c6671f8a0de30fc17b8e8724efa6b1c09191885b97d150f0a7fb9afb1b277dfc7d8647d4dfa7dccaf04cb22918995053566635161c2d8abc3b5fca3fc6d54024aaf037491fab2c8a0e14146712da925295e714a2279c58534d5dc0389b13969ed86ebb48f12f2d6cdae0a6ab3afd8a6258798ad8fb8e31161ca4090ece1c21019b9b916ddc07e01d121bff936c3af99ecb4de4c35169c36f0fe63a9f7b9352e726ed26a33cf96302aca04d306fdbcc024597f26bf9c2623c3ff3470bfba14619661a1fc0687af9d923095307d8ba8aa962318c306f7df438a8d110da18a8e5d6d1580aa052a681d21d95dafb8e2f1507f012ea276d06829a68ec4a17c236e5290d3750f8e12f2b42bd332a44e40e0320b5dfe560319a1446241a06d397a015c438532e8d7614d3ea7490a49fb400bf46d9d18f6c6c9b3af39dfce7be469e78743368f45e073ed2bf83f1761e652b922529e23d94b14e774a2380e40be7b6f5e857b11c6792213c2ff6883abd2bcb5e88b2d87f3ba3eda2cbeebf80f3ae15470371ce0a2f0d89f8a96f48433c6b536e2a89778de27bdcbdf40dfa0227d8069842740fa8bdc0350a68aac1e111cf7e98d1eef2c447265668b392a9e760b1e5b5c759111fdcc87b020a7bae9b958f4ec1f84773d75dfb6c3f60a601a6648ea7e0e79d16f3b88777b3e9d2339480d57927eebcd4002618c54b457b8df733005228b33f683d17b37d1d9843e1986a8affce4939315a6e0b1b93977121823c3ad6ab5c365a7e9783719fa76be7f40fe4868e5cc442c1dda727eb23a9976d0ed0e066679b867c2d27c1b3bc7346447405c6d34617f04975e285c047cba0be2f15ef865a9e4024efaa49586a7701e7a27507ce893c5b6dd42573c84c125352c1a21c6c187da951f324f4800e06d354803525c1ea7177d725e026d9290186b9423e83454e6bc89c2cfdc5c3e08ff9f5ae4f8a4225877967f55c17415728c6ae2b81bf45c22434e74cec8b006d79d7ce935c3fc9c9759eb87e83012ff7de7783e3c23f0296c173f45f9423f90d366b1e689cef65a3d62df2fb8c5d6cf485634b6e1659d960bdea11117a43752c697121f31482f184d14c5003e805ef601731427c3b7807f65cc9ee62859fa57b227a0cad086c906c293d359a70706ab0ab278c133731896da9018fcc7848e02141716d29ce6b12c1ef429fc224013154ef3caa01a4b76858310a77306c91ed9f6e29b83a0b7c3ada5f358f6330648f871e6481b0703cc55b55ed7d892572c1642d55f14975197455a2652ddf7aaf2edf45f6dcc68af623a9e3c817a14721479c6b7a5793e743c48d8796afb33dc40b038758c4e9d17eb089b31d0d4f27c95f83e8f0d420a5536f8050e6e3788966f9483a9d9e0311e301db834eb7c3b3b7008f09249a0866d119776f25b4e87b0dcb3eb8f81f96e03ed5b5eec7d592d5c970dd24feb33f5d7751a4a270619f38498da07be3cee0e96d98399515c29fc88eeed31feef74a8c7f1986f737d1b373b3e500744674839af686120dbd0e8fac2abb61f2477baedb3e7a208bbfb912d939d1443e98778b73d91867f02dcc50d08cca6fa0d32e2a0982cf755b9fc9f6c522528825717a724bf33feafd98e404182850a33bbab0daae50f5de372b7dc3f7d0ea088c4a5a5069441cc83ea4ff4ca9c575157ebab66bbdf1acb29d5964a553b0b9fd1bd7645fea261e4c749d9f013c914f09dfa2cf762eee3d494f19f5b5d69e9d89c5be65c93122fc6ec0e0a73858d9e14ba922d035f4c8fe0ff02781b0bb377f21ae8345470b1dd290304f6723368327e7bd2199ec247ae6c45ad0e37d227bf919a56b229b6d597220f4f217e50d884d43e64fdd6b17ec1f6ad6fafaee0e36ae7d277070120618fcfe83e08682707a782ab3953e2634e2f76366ed36af7529c375bff3f2e648f0fc40b76d992f08a4fb7105a0d52facdc14c7e23c0d0d14269d02a47e86a86d73f771e2f93fd216b65d60c481aa3b7457fcb08bbd9743c3c5deb92280a93e8f92ce0b523f4fa4c9a71028892cc5dd4e1b0ea9b00faf2ab446dc2dd2507e75c19f981e2922a520bf19914e489e7f4a54929914d224cf91aad9f183af580b3cccc7912b9f9cd92792c4864d93036ce5a959b6b61193990eb3c08bc93c27722b87422c8703f90dd949daf8630528a8e5f3e8ae4928a12259f4e811b839c4be170be50ea655dbdd96ac6f31cde645f2a1e40766d1b1a6dac78e21260c050a8ebf10300d14272c4a08ef71bd65b7ba222aea15d2a018655335ce5cfd678b1c578ad36139cc9add938ca8dd2cd2afff6d2d54fe628b2bdf5a06180c8146ecd222a6cad426a7eab30f6f174623e843cc4f01d705a1e3091ebfd50c0503a96d04c2b7ce3961a086f34fb5d84303ebe629c7264b30ccb845727ea55d1ec7d02e228e6814d71a0e24e6608478569e34d856ec6d9aabd811c335ad48bd2d6efd07d31d5c8d4993cf6673f6ac06d1f64e5d0006dcfc44d37763711e9d7f7ec31bc0292fef2ee8ebe545ec59d7cc873eef8db32967320bcdd3be5de2600c0025786b3245939c8040f4f53a1572647e3bfddde44ebe7a6903af908b5361178020696ed782cc76b706597006ca5de1d22992b1a3896596c9a3be9c020c2c498f038d721c6d218aeee9a020a90961e373ee49794f422f58402a9abe7272d4ea0888e53085b254683ccad755bb64ecfe314a74be38e64b0cd2050945d13b5bfa30a49d6f6945e62991207a35d78fc7c6a06e77e8e5993c36b5e33b6ea4f43fd8a1497aa6dafe96e36b060fa0dd3ead9983c11113a36fcf66bb9cbc772e0bd6e7e523e1a1935f3a45e9dec42e4e438163b3f68e63f1d79f939b8bd695099773207feac21635a8f7e60a974f1561f4dafb54a0398f219309acb717d1f67247c2b58d683bb6c8e8159e239a38f2227f595edf8f974559e0f82ec8d5e7cf7dae1d48d8ffece816517b1b43f8371b804c0cf22397a473d9191094f5a117bf6367e81f38511fb111bf18f32e8a2c56c7ec849c3a24f83928f344a281aa1ae6e6cdcf487941336d777185efda34095b32603745dc5e51e10a4811da3033f65a4e17ca01fb7279f6ba9a3e0b2bae92f61abae89ca4c24c70d44baf2810b1a919682583058c5934d3bba32fc37cf8a75a288f971cfaebeb2d3b27adefb8cce486525914854a8c329a66bbc876bb6a77ccd3134326a24118969f3623abc84d4ab831c724f3570c12237fb7ba749938cfd3ed674348d09cf0f9e0af8b5d99e17e9221048dcd2341cc3f13707df710aed79ed2736d7421d84e19076528b7f89fb38ab68dadca6ffdc18dabc0065e763133c509536776d6d785f4b1b81d74bb5bac2f3de945d35a5e4b6b8e6ad5e7ce93aa9d552852a67a6b283229525472292719788ff59b48eaa32beab7a63f27d4877bd57b1a0fe24a70182efdb26bb7feae79e0481efc8e5c18f703ac9d0ddb536e6cea15f586c9c30ee1a26967c1b979c54c9ec3486be69fb56d5efb154a7af42d355cf21eea702e4a0b2a597c97f56210856e790e7a24eb056600e90fa18c1e11d124ade4ae21fa10fde3acf68e6a11a6c8664ca13c17196215c7f563473f1fec0d1183b40858a2fe4b9b657df7eb19f1a66179feba501a767efd1065083b7add7a4a13f8cf452ae6bb8d87530e009dcd43900392efaf9052519526e2d88abdebd479ee69ed1d9797daae153099a866cafb054d866edfeb13e82aea781ed648e9cfaad47b3113320904accbc8cce31c0d7099d686ba5cc8f61b0fa2356fbef39d40ff861026a3f147591f660a8467fe35e4ffe9e4cf647422f03b879680634b1814bab459ba2eb38bbb120a88fbb93c00ac498c63b076c77e6aa1d53bafd7d24bbf88840238260ac0a3153cd9e6a38c4a9ddd710abc9cfbf7b6d8681f9321e673c0707163976987c86bf159d06620493f905fffc237c27f5d9ce8f51ba525b32e3fa19eb48393cd31892559a7f8ce7408266ac160933138f47535a5cf84692bdc073e87265b77cecb2fbfb3f1cdc4d1bbf30088e0a8736061353cdd02e3e83ec3aecb707615701b32d35aa9eaeed4d23aaf24741986289f5dfc96e716b5cb764cc56475a7c2403ef9c171a6ad2847ea88e82e90c148bef5d2166eb6b1e76917f06be3b1ad141dd48cf5798fcfecff94089f8b8f7a0d3a742bbd4b69af7db2afe6fbdbd263f8ac308074a429b417a0e5bd0fb8758f747b053197bd38b1450bb6689d123d18422ab381fd4213479cbf1b9d1d574b6b239694038fa2a95489ae38d499cfc381eab996436e3008d4a86a78edfa411a8bc8b4b5aceb48fe51e1e4d30596883f1037b060b132a68d95a07691171301d5510503e99c3476529bfa8abfd666f15804213f91e907abf944f76cf3194c16f23f8926eea0e57560e37214421e4b7b794d756c4eb2e779b9015449f025b40a1fdcafac06939e895aa451dd96728cd2ac7cffe998391411efd721fff3cf3aea74af60c982c58f53f466f4e296bbf68765b6b587ee3b9c97bc5c86d9a684ab755081cb12d46c110e84fb7c0a444a054edf30bc8ac7482ba02001e9a81e5abc4d0e25a6f2af84d28e4e6f56747dc473d353975fa63dd904e6d964161e768571e0f82b6d632e359d9f53c6a176664c1fa8cbd52b4d7f5e3c03720ca78b4b6e076e92cadf06d4b12a9904994c48ffd06da228b147891831d979a4c2cd5ea836407cd61fdb8f0bbf9d85d04fa35a6f83c32345944289560958511752fe7e1845d74032ef0e51213df56ece2f13478ebd136c55e7835ac57be9dcece1584875c7c8c4fc6db46aa2164953020d535d69a0ece901650d25f48fd535b7088f025db6c418310cd05ed173dce13dfe08f511af2480b185a114816f571f1340281681d324cfffbe97fc2dc125a70efd4e0e32769f4e344eb4e25e651ae3f335817e2dd73d761e504ad42a0e9c2bc57d865948424faae7899aa5ecbb8414958935b82c24259596cf4fcb561df445be05150a390ee9ef02d6e11a7720b449dade86c43760408fc0f4c9f551d978b2d2d1154ee6df12d79e6c32195c88462229c2bbd29dda7638b86f3d904ad7e486ff2081f760ceb6e8953e5cf17bc31ba17cacc0a0fcb20aa69402b6487714fad078c8c0191d541fb44cb9229afde6247a24499bc828079276100b9a5cdf2e2cf583b54db3f7e3457691d812c7dccfb73f670cb2be1803e75b670a3538ad961ae685f66cd3f8e3b604635f8de7aad0920536b1fe47e8010543062dd2c0518a06e3"
};
const ESTRUTURAS = {"cand_propanoato_isobutila": "<svg version='1.1' baseProfile='full' xmlns='http://www.w3.org/2000/svg' xmlns:rdkit='http://www.rdkit.org/xml' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' width='100%' height='100%' preserveAspectRatio='xMidYMid meet' viewBox='0 0 260 190'> <rect style='opacity:1.0;fill:#00000000;stroke:none' width='260.0' height='190.0' x='0.0' y='0.0'> </rect> <path class='bond-0 atom-0 atom-1' d='M 31.2,83.2 L 66.9,69.2' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-1 atom-1 atom-2' d='M 66.9,69.2 L 96.9,93.1' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-2 atom-2 atom-3' d='M 94.3,91.1 L 91.9,106.6' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-2 atom-2 atom-3' d='M 91.9,106.6 L 89.6,122.2' style='fill:none;fill-rule:evenodd;stroke:#FF7F7F;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-2 atom-2 atom-3' d='M 100.0,91.9 L 97.6,107.5' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-2 atom-2 atom-3' d='M 97.6,107.5 L 95.2,123.0' style='fill:none;fill-rule:evenodd;stroke:#FF7F7F;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-3 atom-2 atom-4' d='M 96.9,93.1 L 110.8,87.7' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-3 atom-2 atom-4' d='M 110.8,87.7 L 124.8,82.2' style='fill:none;fill-rule:evenodd;stroke:#FF7F7F;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-4 atom-4 atom-5' d='M 140.3,85.3 L 151.4,94.2' style='fill:none;fill-rule:evenodd;stroke:#FF7F7F;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-4 atom-4 atom-5' d='M 151.4,94.2 L 162.5,103.1' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-5 atom-5 atom-6' d='M 162.5,103.1 L 198.2,89.1' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-6 atom-6 atom-7' d='M 198.2,89.1 L 228.2,113.0' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-7 atom-6 atom-8' d='M 198.2,89.1 L 204.0,51.2' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path d='M 65.1,69.9 L 66.9,69.2 L 68.4,70.4' style='fill:none;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' /> <path d='M 95.4,91.9 L 96.9,93.1 L 97.6,92.9' style='fill:none;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' /> <path d='M 162.0,102.6 L 162.5,103.1 L 164.3,102.4' style='fill:none;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' /> <path class='atom-3' d='M 84.6 131.1 Q 84.6 127.7, 86.3 125.8 Q 88.0 123.9, 91.1 123.9 Q 94.3 123.9, 95.9 125.8 Q 97.6 127.7, 97.6 131.1 Q 97.6 134.5, 95.9 136.5 Q 94.2 138.4, 91.1 138.4 Q 88.0 138.4, 86.3 136.5 Q 84.6 134.5, 84.6 131.1 M 91.1 136.8 Q 93.3 136.8, 94.4 135.4 Q 95.6 133.9, 95.6 131.1 Q 95.6 128.3, 94.4 126.9 Q 93.3 125.5, 91.1 125.5 Q 89.0 125.5, 87.8 126.9 Q 86.6 128.3, 86.6 131.1 Q 86.6 133.9, 87.8 135.4 Q 89.0 136.8, 91.1 136.8 ' fill='#FF7F7F'/> <path class='atom-4' d='M 126.1 79.2 Q 126.1 75.8, 127.8 73.9 Q 129.4 72.0, 132.6 72.0 Q 135.7 72.0, 137.4 73.9 Q 139.1 75.8, 139.1 79.2 Q 139.1 82.6, 137.4 84.6 Q 135.7 86.5, 132.6 86.5 Q 129.5 86.5, 127.8 84.6 Q 126.1 82.6, 126.1 79.2 M 132.6 84.9 Q 134.7 84.9, 135.9 83.5 Q 137.1 82.0, 137.1 79.2 Q 137.1 76.4, 135.9 75.0 Q 134.7 73.6, 132.6 73.6 Q 130.4 73.6, 129.2 75.0 Q 128.1 76.4, 128.1 79.2 Q 128.1 82.0, 129.2 83.5 Q 130.4 84.9, 132.6 84.9 ' fill='#FF7F7F'/> </svg>", "cand_acetato_isoamila": "<svg version='1.1' baseProfile='full' xmlns='http://www.w3.org/2000/svg' xmlns:rdkit='http://www.rdkit.org/xml' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' width='100%' height='100%' preserveAspectRatio='xMidYMid meet' viewBox='0 0 260 190'> <rect style='opacity:1.0;fill:#00000000;stroke:none' width='260.0' height='190.0' x='0.0' y='0.0'> </rect> <path class='bond-0 atom-0 atom-1' d='M 31.2,66.3 L 64.0,85.2' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-1 atom-1 atom-2' d='M 64.0,85.2 L 64.0,123.1' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-2 atom-1 atom-3' d='M 64.0,85.2 L 96.9,66.3' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-3 atom-3 atom-4' d='M 96.9,66.3 L 129.7,85.2' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-4 atom-4 atom-5' d='M 129.7,85.2 L 142.2,78.0' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-4 atom-4 atom-5' d='M 142.2,78.0 L 154.8,70.7' style='fill:none;fill-rule:evenodd;stroke:#FF7F7F;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-5 atom-5 atom-6' d='M 170.3,70.7 L 182.8,78.0' style='fill:none;fill-rule:evenodd;stroke:#FF7F7F;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-5 atom-5 atom-6' d='M 182.8,78.0 L 195.4,85.2' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-6 atom-6 atom-7' d='M 195.4,85.2 L 228.2,66.3' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-7 atom-6 atom-8' d='M 192.5,83.6 L 192.5,99.1' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-7 atom-6 atom-8' d='M 192.5,99.1 L 192.5,114.7' style='fill:none;fill-rule:evenodd;stroke:#FF7F7F;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-7 atom-6 atom-8' d='M 198.2,83.6 L 198.2,99.1' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-7 atom-6 atom-8' d='M 198.2,99.1 L 198.2,114.7' style='fill:none;fill-rule:evenodd;stroke:#FF7F7F;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path d='M 95.2,67.2 L 96.9,66.3 L 98.5,67.2' style='fill:none;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' /> <path d='M 128.1,84.3 L 129.7,85.2 L 130.3,84.8' style='fill:none;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' /> <path d='M 194.7,84.8 L 195.4,85.2 L 197.0,84.3' style='fill:none;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' /> <path class='atom-5' d='M 156.0 66.3 Q 156.0 62.9, 157.7 61.0 Q 159.4 59.1, 162.5 59.1 Q 165.7 59.1, 167.4 61.0 Q 169.0 62.9, 169.0 66.3 Q 169.0 69.7, 167.3 71.7 Q 165.6 73.6, 162.5 73.6 Q 159.4 73.6, 157.7 71.7 Q 156.0 69.8, 156.0 66.3 M 162.5 72.0 Q 164.7 72.0, 165.9 70.6 Q 167.0 69.1, 167.0 66.3 Q 167.0 63.5, 165.9 62.1 Q 164.7 60.7, 162.5 60.7 Q 160.4 60.7, 159.2 62.1 Q 158.0 63.5, 158.0 66.3 Q 158.0 69.2, 159.2 70.6 Q 160.4 72.0, 162.5 72.0 ' fill='#FF7F7F'/> <path class='atom-8' d='M 188.9 123.2 Q 188.9 119.8, 190.5 117.9 Q 192.2 116.0, 195.4 116.0 Q 198.5 116.0, 200.2 117.9 Q 201.9 119.8, 201.9 123.2 Q 201.9 126.6, 200.2 128.6 Q 198.5 130.5, 195.4 130.5 Q 192.2 130.5, 190.5 128.6 Q 188.9 126.6, 188.9 123.2 M 195.4 128.9 Q 197.5 128.9, 198.7 127.5 Q 199.9 126.0, 199.9 123.2 Q 199.9 120.4, 198.7 119.0 Q 197.5 117.6, 195.4 117.6 Q 193.2 117.6, 192.0 119.0 Q 190.9 120.4, 190.9 123.2 Q 190.9 126.0, 192.0 127.5 Q 193.2 128.9, 195.4 128.9 ' fill='#FF7F7F'/> </svg>", "cand_butanoato_isopropila": "<svg version='1.1' baseProfile='full' xmlns='http://www.w3.org/2000/svg' xmlns:rdkit='http://www.rdkit.org/xml' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' width='100%' height='100%' preserveAspectRatio='xMidYMid meet' viewBox='0 0 260 190'> <rect style='opacity:1.0;fill:#00000000;stroke:none' width='260.0' height='190.0' x='0.0' y='0.0'> </rect> <path class='bond-0 atom-0 atom-1' d='M 31.2,113.6 L 65.6,97.3' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-1 atom-1 atom-2' d='M 65.6,97.3 L 96.9,119.0' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-2 atom-2 atom-3' d='M 96.9,119.0 L 131.3,102.8' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-3 atom-3 atom-4' d='M 134.0,104.7 L 135.3,89.2' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-3 atom-3 atom-4' d='M 135.3,89.2 L 136.6,73.8' style='fill:none;fill-rule:evenodd;stroke:#FF7F7F;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-3 atom-3 atom-4' d='M 128.3,104.2 L 129.6,88.7' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-3 atom-3 atom-4' d='M 129.6,88.7 L 130.9,73.3' style='fill:none;fill-rule:evenodd;stroke:#FF7F7F;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-4 atom-3 atom-5' d='M 131.3,102.8 L 143.0,111.0' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-4 atom-3 atom-5' d='M 143.0,111.0 L 154.8,119.1' style='fill:none;fill-rule:evenodd;stroke:#FF7F7F;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-5 atom-5 atom-6' d='M 170.3,120.8 L 183.6,114.6' style='fill:none;fill-rule:evenodd;stroke:#FF7F7F;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-5 atom-5 atom-6' d='M 183.6,114.6 L 196.9,108.3' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-6 atom-6 atom-7' d='M 196.9,108.3 L 228.2,130.0' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-7 atom-6 atom-8' d='M 196.9,108.3 L 200.1,70.4' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path d='M 63.9,98.1 L 65.6,97.3 L 67.2,98.4' style='fill:none;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' /> <path d='M 95.3,117.9 L 96.9,119.0 L 98.6,118.2' style='fill:none;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' /> <path d='M 129.6,103.6 L 131.3,102.8 L 131.9,103.2' style='fill:none;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' /> <path class='atom-4' d='M 127.9 64.9 Q 127.9 61.5, 129.6 59.6 Q 131.3 57.7, 134.4 57.7 Q 137.6 57.7, 139.3 59.6 Q 140.9 61.5, 140.9 64.9 Q 140.9 68.4, 139.2 70.3 Q 137.5 72.3, 134.4 72.3 Q 131.3 72.3, 129.6 70.3 Q 127.9 68.4, 127.9 64.9 M 134.4 70.7 Q 136.6 70.7, 137.8 69.2 Q 138.9 67.8, 138.9 64.9 Q 138.9 62.1, 137.8 60.7 Q 136.6 59.3, 134.4 59.3 Q 132.3 59.3, 131.1 60.7 Q 129.9 62.1, 129.9 64.9 Q 129.9 67.8, 131.1 69.2 Q 132.3 70.7, 134.4 70.7 ' fill='#FF7F7F'/> <path class='atom-5' d='M 156.0 124.5 Q 156.0 121.1, 157.7 119.2 Q 159.4 117.3, 162.5 117.3 Q 165.7 117.3, 167.4 119.2 Q 169.0 121.1, 169.0 124.5 Q 169.0 128.0, 167.3 129.9 Q 165.6 131.9, 162.5 131.9 Q 159.4 131.9, 157.7 129.9 Q 156.0 128.0, 156.0 124.5 M 162.5 130.3 Q 164.7 130.3, 165.9 128.8 Q 167.0 127.4, 167.0 124.5 Q 167.0 121.8, 165.9 120.4 Q 164.7 118.9, 162.5 118.9 Q 160.4 118.9, 159.2 120.3 Q 158.0 121.7, 158.0 124.5 Q 158.0 127.4, 159.2 128.8 Q 160.4 130.3, 162.5 130.3 ' fill='#FF7F7F'/> </svg>", "cand_acetato_pentila": "<svg version='1.1' baseProfile='full' xmlns='http://www.w3.org/2000/svg' xmlns:rdkit='http://www.rdkit.org/xml' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' width='100%' height='100%' preserveAspectRatio='xMidYMid meet' viewBox='0 0 260 190'> <rect style='opacity:1.0;fill:#00000000;stroke:none' width='260.0' height='190.0' x='0.0' y='0.0'> </rect> <path class='bond-0 atom-0 atom-1' d='M 228.2,95.8 L 200.7,113.4' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-1 atom-1 atom-2' d='M 200.7,113.4 L 171.7,98.3' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-2 atom-2 atom-3' d='M 171.7,98.3 L 144.2,115.9' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-3 atom-3 atom-4' d='M 144.2,115.9 L 115.2,100.9' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-4 atom-4 atom-5' d='M 115.2,100.9 L 105.2,107.3' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-4 atom-4 atom-5' d='M 105.2,107.3 L 95.3,113.7' style='fill:none;fill-rule:evenodd;stroke:#FF7F7F;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-5 atom-5 atom-6' d='M 80.1,114.6 L 69.4,109.0' style='fill:none;fill-rule:evenodd;stroke:#FF7F7F;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-5 atom-5 atom-6' d='M 69.4,109.0 L 58.7,103.5' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-6 atom-6 atom-7' d='M 58.7,103.5 L 31.2,121.1' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-7 atom-6 atom-8' d='M 61.2,104.8 L 60.6,92.0' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-7 atom-6 atom-8' d='M 60.6,92.0 L 60.1,79.2' style='fill:none;fill-rule:evenodd;stroke:#FF7F7F;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-7 atom-6 atom-8' d='M 56.3,105.0 L 55.7,92.2' style='fill:none;fill-rule:evenodd;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path class='bond-7 atom-6 atom-8' d='M 55.7,92.2 L 55.2,79.4' style='fill:none;fill-rule:evenodd;stroke:#FF7F7F;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /> <path d='M 202.1,112.5 L 200.7,113.4 L 199.2,112.6' style='fill:none;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' /> <path d='M 173.2,99.1 L 171.7,98.3 L 170.3,99.2' style='fill:none;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' /> <path d='M 145.6,115.1 L 144.2,115.9 L 142.7,115.2' style='fill:none;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' /> <path d='M 116.7,101.7 L 115.2,100.9 L 114.7,101.2' style='fill:none;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' /> <path d='M 59.2,103.8 L 58.7,103.5 L 57.3,104.4' style='fill:none;stroke:#E4ECF7;stroke-width:3.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;' /> <path class='atom-5' d='M 81.2 118.6 Q 81.2 115.2, 82.9 113.3 Q 84.6 111.4, 87.7 111.4 Q 90.8 111.4, 92.5 113.3 Q 94.2 115.2, 94.2 118.6 Q 94.2 122.0, 92.5 124.0 Q 90.8 125.9, 87.7 125.9 Q 84.6 125.9, 82.9 124.0 Q 81.2 122.0, 81.2 118.6 M 87.7 124.3 Q 89.9 124.3, 91.0 122.9 Q 92.2 121.4, 92.2 118.6 Q 92.2 115.8, 91.0 114.4 Q 89.9 113.0, 87.7 113.0 Q 85.5 113.0, 84.4 114.4 Q 83.2 115.8, 83.2 118.6 Q 83.2 121.4, 84.4 122.9 Q 85.5 124.3, 87.7 124.3 ' fill='#FF7F7F'/> <path class='atom-8' d='M 50.7 70.9 Q 50.7 67.5, 52.4 65.6 Q 54.1 63.7, 57.2 63.7 Q 60.4 63.7, 62.0 65.6 Q 63.7 67.5, 63.7 70.9 Q 63.7 74.3, 62.0 76.3 Q 60.3 78.2, 57.2 78.2 Q 54.1 78.2, 52.4 76.3 Q 50.7 74.4, 50.7 70.9 M 57.2 76.6 Q 59.4 76.6, 60.5 75.2 Q 61.7 73.7, 61.7 70.9 Q 61.7 68.1, 60.5 66.7 Q 59.4 65.3, 57.2 65.3 Q 55.1 65.3, 53.9 66.7 Q 52.7 68.1, 52.7 70.9 Q 52.7 73.8, 53.9 75.2 Q 55.1 76.6, 57.2 76.6 ' fill='#FF7F7F'/> </svg>"};
