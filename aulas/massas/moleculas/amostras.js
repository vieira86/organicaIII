/* ============================================================
   amostras.js — banco de amostras da Missão Espectral
   ============================================================
   22 amostras "desconhecidas". Cada aluno sorteia uma (sem repetição).

   picos      → [m/z, intensidade relativa %] (pico base = 100)
                Os picos dos FRAGMENTOS estão nas posições características
                do espectro de impacto de elétrons (70 eV); as intensidades
                foram arredondadas para fins didáticos. Os picos do
                aglomerado do íon molecular (M, M+1, M+2…) foram CALCULADOS
                a partir da fórmula, com as mesmas abundâncias da tabela
                mostrada na aula (¹³C 1,1% · ²H 0,015% · ¹⁵N 0,37% ·
                ¹⁷O 0,04% · ¹⁸O 0,20% · ³⁷Cl 32% · ⁸¹Br 97,3%).
   chave      → pico que o aluno precisa interpretar na etapa 4
   candidatos → o 1º é a resposta certa (a página embaralha a ordem)
   nist       → link para o espectro real no NIST WebBook

   ATENÇÃO: depois que a turma começar a sortear, NÃO mude a ordem
   da lista. Para acrescentar amostras, adicione sempre no FINAL.
   Este arquivo foi gerado por um script (RDKit), mas pode ser
   editado à mão.
   ============================================================ */

const AMOSTRAS = [
 {
  "slug": "tolueno",
  "nome": "Tolueno",
  "smiles": "Cc1ccccc1",
  "formula": "C7H8",
  "M": 92,
  "massaExata": 92.0626,
  "nC": 7,
  "nN": 0,
  "halogenio": "nenhum",
  "razaoM1": 7.82,
  "picoBase": 91,
  "mecanismo": "Benzílica / tropílio",
  "picos": [
   [
    39,
    14
   ],
   [
    50,
    4
   ],
   [
    51,
    6
   ],
   [
    62,
    4
   ],
   [
    63,
    7
   ],
   [
    65,
    11
   ],
   [
    89,
    4
   ],
   [
    91,
    100
   ],
   [
    92,
    72.0
   ],
   [
    93,
    5.63
   ],
   [
    94,
    0.19
   ]
  ],
  "chave": {
   "mz": 91,
   "perda": 1,
   "opcoes": [
    "Perda de H• do grupo CH₃: forma-se o cátion benzila, que se rearranja no íon tropílio (C₇H₇⁺, aromático e muito estável).",
    "Rearranjo de McLafferty com perda de eteno.",
    "Retro-Diels-Alder do anel aromático.",
    "Perda de •CH₃, formando o cátion fenila."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Tolueno",
    "slug": "tolueno",
    "M": 92,
    "formula": "C7H8"
   },
   {
    "nome": "Etilbenzeno",
    "slug": "c_etilbenzeno",
    "M": 106,
    "formula": "C8H10"
   },
   {
    "nome": "Benzeno",
    "slug": "c_benzeno",
    "M": 78,
    "formula": "C6H6"
   },
   {
    "nome": "Metilcicloexano",
    "slug": "c_metilcicloexano",
    "M": 98,
    "formula": "C7H14"
   }
  ],
  "explicacao": "O pico M−1 (m/z 91) maior que o próprio M é a assinatura do tropílio: alquilbenzenos perdem a ligação benzílica com facilidade.",
  "nist": "https://webbook.nist.gov/cgi/cbook.cgi?Name=Toluene&Units=SI&cMS=on"
 },
 {
  "slug": "propilbenzeno",
  "nome": "Propilbenzeno",
  "smiles": "CCCc1ccccc1",
  "formula": "C9H12",
  "M": 120,
  "massaExata": 120.0939,
  "nC": 9,
  "nN": 0,
  "halogenio": "nenhum",
  "razaoM1": 10.08,
  "picoBase": 91,
  "mecanismo": "Benzílica / tropílio",
  "picos": [
   [
    39,
    7
   ],
   [
    51,
    6
   ],
   [
    65,
    11
   ],
   [
    77,
    6
   ],
   [
    78,
    5
   ],
   [
    91,
    100
   ],
   [
    92,
    9
   ],
   [
    105,
    5
   ],
   [
    120,
    25.0
   ],
   [
    121,
    2.52
   ],
   [
    122,
    0.11
   ]
  ],
  "chave": {
   "mz": 91,
   "perda": 29,
   "opcoes": [
    "Clivagem benzílica: sai o radical etila (•C₂H₅, 29 u) e fica o cátion benzila/tropílio C₇H₇⁺.",
    "Perda de água (H₂O, 18 u).",
    "Clivagem α a uma carbonila, formando um íon acílio.",
    "Perda de •CH₃ do grupo isopropila."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Propilbenzeno",
    "slug": "propilbenzeno",
    "M": 120,
    "formula": "C9H12"
   },
   {
    "nome": "Isopropilbenzeno (cumeno)",
    "slug": "c_isopropilbenzeno_cumeno_",
    "M": 120,
    "formula": "C9H12"
   },
   {
    "nome": "1,3,5-Trimetilbenzeno",
    "slug": "c_1_3_5_trimetilbenzeno",
    "M": 120,
    "formula": "C9H12"
   },
   {
    "nome": "Acetofenona",
    "slug": "c_acetofenona",
    "M": 120,
    "formula": "C8H8O"
   }
  ],
  "explicacao": "Perder 29 u na posição benzílica só é possível com uma cadeia –CH₂–CH₂CH₃ presa ao anel. No cumeno, a perda benzílica é de •CH₃ (pico em 105).",
  "nist": "https://webbook.nist.gov/cgi/cbook.cgi?Name=Benzene%2C%20propyl-&Units=SI&cMS=on"
 },
 {
  "slug": "clorobenzeno",
  "nome": "Clorobenzeno",
  "smiles": "Clc1ccccc1",
  "formula": "C6H5Cl",
  "M": 112,
  "massaExata": 112.008,
  "nC": 6,
  "nN": 0,
  "halogenio": "1Cl",
  "razaoM1": 6.67,
  "picoBase": 112,
  "mecanismo": "Indutiva (halogênio)",
  "picos": [
   [
    50,
    12
   ],
   [
    51,
    16
   ],
   [
    74,
    4
   ],
   [
    75,
    4
   ],
   [
    77,
    45
   ],
   [
    112,
    100.0
   ],
   [
    113,
    6.67
   ],
   [
    114,
    32.19
   ],
   [
    115,
    2.14
   ],
   [
    116,
    0.06
   ]
  ],
  "chave": {
   "mz": 77,
   "perda": 35,
   "opcoes": [
    "Perda do radical Cl• (35 u), formando o cátion fenila C₆H₅⁺.",
    "Perda de HCl (36 u) como molécula neutra.",
    "Rearranjo de McLafferty.",
    "Perda de •CH₃ (15 u)."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Clorobenzeno",
    "slug": "clorobenzeno",
    "M": 112,
    "formula": "C6H5Cl"
   },
   {
    "nome": "Bromobenzeno",
    "slug": "c_bromobenzeno",
    "M": 156,
    "formula": "C6H5Br"
   },
   {
    "nome": "Clorocicloexano",
    "slug": "c_clorocicloexano",
    "M": 118,
    "formula": "C6H11Cl"
   },
   {
    "nome": "Fluorobenzeno",
    "slug": "c_fluorobenzeno",
    "M": 96,
    "formula": "C6H5F"
   }
  ],
  "explicacao": "O par M / M+2 na proporção ≈ 3 : 1 denuncia um átomo de cloro. A perda de 35 u leva ao cátion fenila (m/z 77).",
  "nist": "https://webbook.nist.gov/cgi/cbook.cgi?Name=Chlorobenzene&Units=SI&cMS=on"
 },
 {
  "slug": "bromobenzeno",
  "nome": "Bromobenzeno",
  "smiles": "Brc1ccccc1",
  "formula": "C6H5Br",
  "M": 156,
  "massaExata": 155.9575,
  "nC": 6,
  "nN": 0,
  "halogenio": "1Br",
  "razaoM1": 6.68,
  "picoBase": 77,
  "mecanismo": "Indutiva (halogênio)",
  "picos": [
   [
    50,
    24
   ],
   [
    51,
    38
   ],
   [
    74,
    5
   ],
   [
    75,
    5
   ],
   [
    77,
    100
   ],
   [
    156,
    62.0
   ],
   [
    157,
    4.14
   ],
   [
    158,
    60.44
   ],
   [
    159,
    4.03
   ],
   [
    160,
    0.11
   ]
  ],
  "chave": {
   "mz": 77,
   "perda": 79,
   "opcoes": [
    "Perda do radical Br• (79 u), formando o cátion fenila C₆H₅⁺.",
    "Perda de HBr (80 u) como molécula neutra.",
    "Retro-Diels-Alder do anel.",
    "Perda de dois radicais metila."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Bromobenzeno",
    "slug": "bromobenzeno",
    "M": 156,
    "formula": "C6H5Br"
   },
   {
    "nome": "Clorobenzeno",
    "slug": "c_clorobenzeno",
    "M": 112,
    "formula": "C6H5Cl"
   },
   {
    "nome": "1-Bromobutano",
    "slug": "c_1_bromobutano",
    "M": 136,
    "formula": "C4H9Br"
   },
   {
    "nome": "4-Bromotolueno",
    "slug": "c_4_bromotolueno",
    "M": 170,
    "formula": "C7H7Br"
   }
  ],
  "explicacao": "M e M+2 com praticamente a mesma altura (≈ 1 : 1) indicam um bromo (⁷⁹Br e ⁸¹Br quase meio a meio).",
  "nist": "https://webbook.nist.gov/cgi/cbook.cgi?Name=Bromobenzene&Units=SI&cMS=on"
 },
 {
  "slug": "bromobutano",
  "nome": "1-Bromobutano",
  "smiles": "CCCCBr",
  "formula": "C4H9Br",
  "M": 136,
  "massaExata": 135.9888,
  "nC": 4,
  "nN": 0,
  "halogenio": "1Br",
  "razaoM1": 4.5,
  "picoBase": 57,
  "mecanismo": "Indutiva (halogênio)",
  "picos": [
   [
    27,
    38
   ],
   [
    29,
    45
   ],
   [
    39,
    12
   ],
   [
    41,
    62
   ],
   [
    56,
    8
   ],
   [
    57,
    100
   ],
   [
    107,
    9
   ],
   [
    109,
    9
   ],
   [
    136,
    8.0
   ],
   [
    137,
    0.36
   ],
   [
    138,
    7.79
   ],
   [
    139,
    0.35
   ]
  ],
  "chave": {
   "mz": 57,
   "perda": 79,
   "opcoes": [
    "Clivagem indutiva: o Br, eletronegativo, sai como radical Br• e fica o cátion butila C₄H₉⁺.",
    "Rearranjo de McLafferty com perda de propeno.",
    "Perda de HBr seguida de perda de H₂.",
    "Clivagem α com formação de um íon acílio."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "1-Bromobutano",
    "slug": "bromobutano",
    "M": 136,
    "formula": "C4H9Br"
   },
   {
    "nome": "Bromobenzeno",
    "slug": "c_bromobenzeno",
    "M": 156,
    "formula": "C6H5Br"
   },
   {
    "nome": "1-Clorobutano",
    "slug": "c_1_clorobutano",
    "M": 92,
    "formula": "C4H9Cl"
   },
   {
    "nome": "1-Bromopropano",
    "slug": "c_1_bromopropano",
    "M": 122,
    "formula": "C3H7Br"
   }
  ],
  "explicacao": "Os pares 136/138 e 107/109 (1 : 1) mostram fragmentos que ainda contêm Br. O pico base (57) não tem mais o halogênio: é o C₄H₉⁺.",
  "nist": "https://webbook.nist.gov/cgi/cbook.cgi?Name=Butane%2C%201-bromo-&Units=SI&cMS=on"
 },
 {
  "slug": "diclorometano",
  "nome": "Diclorometano",
  "smiles": "ClCCl",
  "formula": "CH2Cl2",
  "M": 84,
  "massaExata": 83.9534,
  "nC": 1,
  "nN": 0,
  "halogenio": "2Cl",
  "razaoM1": 1.13,
  "picoBase": 49,
  "mecanismo": "Indutiva (halogênio)",
  "picos": [
   [
    35,
    5
   ],
   [
    47,
    10
   ],
   [
    48,
    8
   ],
   [
    49,
    100
   ],
   [
    51,
    32
   ],
   [
    84,
    75.0
   ],
   [
    85,
    0.85
   ],
   [
    86,
    48.0
   ],
   [
    87,
    0.54
   ],
   [
    88,
    7.68
   ],
   [
    89,
    0.09
   ]
  ],
  "chave": {
   "mz": 49,
   "perda": 35,
   "opcoes": [
    "Perda de um radical Cl• (35 u), formando CH₂Cl⁺ (o par 49/51 mostra que ainda resta um Cl).",
    "Perda de HCl (36 u).",
    "Perda de •CH₃.",
    "Rearranjo de McLafferty."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Diclorometano",
    "slug": "diclorometano",
    "M": 84,
    "formula": "CH2Cl2"
   },
   {
    "nome": "Clorofórmio",
    "slug": "c_clorofrmio",
    "M": 118,
    "formula": "CHCl3"
   },
   {
    "nome": "Cloroetano",
    "slug": "c_cloroetano",
    "M": 64,
    "formula": "C2H5Cl"
   },
   {
    "nome": "1,2-Dicloroetano",
    "slug": "c_1_2_dicloroetano",
    "M": 98,
    "formula": "C2H4Cl2"
   }
  ],
  "explicacao": "O trio M, M+2, M+4 na proporção ≈ 9 : 6 : 1 é a impressão digital de DOIS átomos de cloro.",
  "nist": "https://webbook.nist.gov/cgi/cbook.cgi?Name=Methylene%20chloride&Units=SI&cMS=on"
 },
 {
  "slug": "butanona",
  "nome": "2-Butanona",
  "smiles": "CCC(C)=O",
  "formula": "C4H8O",
  "M": 72,
  "massaExata": 72.0575,
  "nC": 4,
  "nN": 0,
  "halogenio": "nenhum",
  "razaoM1": 4.54,
  "picoBase": 43,
  "mecanismo": "Clivagem α",
  "picos": [
   [
    15,
    5
   ],
   [
    27,
    14
   ],
   [
    29,
    16
   ],
   [
    42,
    6
   ],
   [
    43,
    100
   ],
   [
    57,
    7
   ],
   [
    72,
    24.0
   ],
   [
    73,
    1.09
   ],
   [
    74,
    0.07
   ]
  ],
  "chave": {
   "mz": 43,
   "perda": 29,
   "opcoes": [
    "Clivagem α: sai o radical etila (•C₂H₅, 29 u) e fica o cátion acílio CH₃–C≡O⁺.",
    "Rearranjo de McLafferty com perda de eteno.",
    "Perda de água (H₂O).",
    "Retro-Diels-Alder."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "2-Butanona",
    "slug": "butanona",
    "M": 72,
    "formula": "C4H8O"
   },
   {
    "nome": "Butanal",
    "slug": "c_butanal",
    "M": 72,
    "formula": "C4H8O"
   },
   {
    "nome": "Tetra-hidrofurano",
    "slug": "c_tetra_hidrofurano",
    "M": 72,
    "formula": "C4H8O"
   },
   {
    "nome": "3-Pentanona",
    "slug": "c_3_pentanona",
    "M": 86,
    "formula": "C5H10O"
   }
  ],
  "explicacao": "Cetonas quebram ao lado da carbonila (clivagem α) e o maior radical sai primeiro: perde-se •C₂H₅ e fica o acílio m/z 43.",
  "nist": "https://webbook.nist.gov/cgi/cbook.cgi?Name=2-Butanone&Units=SI&cMS=on"
 },
 {
  "slug": "pentanona3",
  "nome": "3-Pentanona",
  "smiles": "CCC(=O)CC",
  "formula": "C5H10O",
  "M": 86,
  "massaExata": 86.0732,
  "nC": 5,
  "nN": 0,
  "halogenio": "nenhum",
  "razaoM1": 5.71,
  "picoBase": 57,
  "mecanismo": "Clivagem α",
  "picos": [
   [
    27,
    30
   ],
   [
    28,
    10
   ],
   [
    29,
    62
   ],
   [
    57,
    100
   ],
   [
    58,
    4
   ],
   [
    86,
    24.0
   ],
   [
    87,
    1.37
   ],
   [
    88,
    0.08
   ]
  ],
  "chave": {
   "mz": 57,
   "perda": 29,
   "opcoes": [
    "Clivagem α: sai •C₂H₅ (29 u) e fica o cátion acílio CH₃CH₂–C≡O⁺.",
    "Rearranjo de McLafferty com perda de propeno.",
    "Perda de •CH₃ seguida de CO.",
    "Perda de água."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "3-Pentanona",
    "slug": "pentanona3",
    "M": 86,
    "formula": "C5H10O"
   },
   {
    "nome": "2-Pentanona",
    "slug": "c_2_pentanona",
    "M": 86,
    "formula": "C5H10O"
   },
   {
    "nome": "Acetato de vinila",
    "slug": "c_acetato_de_vinila",
    "M": 86,
    "formula": "C4H6O2"
   },
   {
    "nome": "3-Metil-2-butanona",
    "slug": "c_3_metil_2_butanona",
    "M": 86,
    "formula": "C5H10O"
   }
  ],
  "explicacao": "Uma cetona simétrica dá um só acílio (m/z 57). As metilcetonas (2-pentanona, 3-metil-2-butanona) e o acetato de vinila formariam CH₃CO⁺ e teriam o pico base em m/z 43.",
  "nist": "https://webbook.nist.gov/cgi/cbook.cgi?Name=3-Pentanone&Units=SI&cMS=on"
 },
 {
  "slug": "hexanona2",
  "nome": "2-Hexanona",
  "smiles": "CCCCC(C)=O",
  "formula": "C6H12O",
  "M": 100,
  "massaExata": 100.0888,
  "nC": 6,
  "nN": 0,
  "halogenio": "nenhum",
  "razaoM1": 6.78,
  "picoBase": 43,
  "mecanismo": "McLafferty",
  "picos": [
   [
    27,
    10
   ],
   [
    29,
    12
   ],
   [
    41,
    15
   ],
   [
    43,
    100
   ],
   [
    57,
    12
   ],
   [
    58,
    55
   ],
   [
    71,
    5
   ],
   [
    85,
    5
   ],
   [
    100,
    9.0
   ],
   [
    101,
    0.61
   ]
  ],
  "chave": {
   "mz": 58,
   "perda": 42,
   "opcoes": [
    "Rearranjo de McLafferty: o H-γ migra para o oxigênio e sai propeno (42 u, neutro), formando o enol radical-cátion m/z 58.",
    "Clivagem α com perda de •C₃H₇.",
    "Retro-Diels-Alder.",
    "Perda de •CH₂CH₃ e de CO."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "2-Hexanona",
    "slug": "hexanona2",
    "M": 100,
    "formula": "C6H12O"
   },
   {
    "nome": "3-Hexanona",
    "slug": "c_3_hexanona",
    "M": 100,
    "formula": "C6H12O"
   },
   {
    "nome": "Hexanal",
    "slug": "c_hexanal",
    "M": 100,
    "formula": "C6H12O"
   },
   {
    "nome": "Cicloexanol",
    "slug": "c_cicloexanol",
    "M": 100,
    "formula": "C6H12O"
   }
  ],
  "explicacao": "m/z 58 é PAR (perdeu um neutro, não um radical): é o McLafferty típico de metilcetonas com cadeia de 3 ou mais carbonos. Na 3-hexanona o McLafferty daria m/z 72.",
  "nist": "https://webbook.nist.gov/cgi/cbook.cgi?Name=2-Hexanone&Units=SI&cMS=on"
 },
 {
  "slug": "butanal",
  "nome": "Butanal",
  "smiles": "CCCC=O",
  "formula": "C4H8O",
  "M": 72,
  "massaExata": 72.0575,
  "nC": 4,
  "nN": 0,
  "halogenio": "nenhum",
  "razaoM1": 4.57,
  "picoBase": 44,
  "mecanismo": "McLafferty",
  "picos": [
   [
    27,
    50
   ],
   [
    29,
    55
   ],
   [
    41,
    30
   ],
   [
    43,
    55
   ],
   [
    44,
    100
   ],
   [
    57,
    16
   ],
   [
    71,
    6
   ],
   [
    72,
    60.0
   ],
   [
    73,
    2.74
   ],
   [
    74,
    0.17
   ]
  ],
  "chave": {
   "mz": 44,
   "perda": 28,
   "opcoes": [
    "Rearranjo de McLafferty: o H-γ migra para o O e sai eteno (28 u), formando o enol CH₂=CH–OH⁺• (m/z 44).",
    "Clivagem α com perda de •C₂H₅.",
    "Perda de CO (28 u) direto do íon molecular.",
    "Perda de água seguida de H₂."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Butanal",
    "slug": "butanal",
    "M": 72,
    "formula": "C4H8O"
   },
   {
    "nome": "2-Butanona",
    "slug": "c_2_butanona",
    "M": 72,
    "formula": "C4H8O"
   },
   {
    "nome": "2-Metilpropanal",
    "slug": "c_2_metilpropanal",
    "M": 72,
    "formula": "C4H8O"
   },
   {
    "nome": "Tetra-hidrofurano",
    "slug": "c_tetra_hidrofurano",
    "M": 72,
    "formula": "C4H8O"
   }
  ],
  "explicacao": "Aldeídos com H-γ dão McLafferty em m/z 44; o 2-metilpropanal não tem H-γ e por isso não forma esse pico. O pequeno M−1 (71) também é típico de aldeídos.",
  "nist": "https://webbook.nist.gov/cgi/cbook.cgi?Name=Butanal&Units=SI&cMS=on"
 },
 {
  "slug": "butanoico",
  "nome": "Ácido butanoico",
  "smiles": "CCCC(=O)O",
  "formula": "C4H8O2",
  "M": 88,
  "massaExata": 88.0524,
  "nC": 4,
  "nN": 0,
  "halogenio": "nenhum",
  "razaoM1": 4.5,
  "picoBase": 60,
  "mecanismo": "McLafferty",
  "picos": [
   [
    27,
    22
   ],
   [
    29,
    10
   ],
   [
    41,
    20
   ],
   [
    42,
    14
   ],
   [
    45,
    18
   ],
   [
    60,
    100
   ],
   [
    73,
    22
   ],
   [
    88,
    4.0
   ],
   [
    89,
    0.18
   ]
  ],
  "chave": {
   "mz": 60,
   "perda": 28,
   "opcoes": [
    "Rearranjo de McLafferty: sai eteno (28 u) e fica o enol do ácido acético CH₂=C(OH)₂⁺• (m/z 60).",
    "Perda de •C₂H₅ por clivagem α.",
    "Perda de CO₂ (44 u).",
    "Retro-Diels-Alder."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Ácido butanoico",
    "slug": "butanoico",
    "M": 88,
    "formula": "C4H8O2"
   },
   {
    "nome": "Acetato de etila",
    "slug": "c_acetato_de_etila",
    "M": 88,
    "formula": "C4H8O2"
   },
   {
    "nome": "Ácido 2-metilpropanoico",
    "slug": "c_cido_2_metilpropanoico",
    "M": 88,
    "formula": "C4H8O2"
   },
   {
    "nome": "1,4-Dioxano",
    "slug": "c_1_4_dioxano",
    "M": 88,
    "formula": "C4H8O2"
   }
  ],
  "explicacao": "m/z 60 é o pico de McLafferty clássico dos ácidos carboxílicos com H-γ. O ácido 2-metilpropanoico não tem H-γ.",
  "nist": "https://webbook.nist.gov/cgi/cbook.cgi?Name=Butanoic%20acid&Units=SI&cMS=on"
 },
 {
  "slug": "acetato_etila",
  "nome": "Acetato de etila",
  "smiles": "CCOC(C)=O",
  "formula": "C4H8O2",
  "M": 88,
  "massaExata": 88.0524,
  "nC": 4,
  "nN": 0,
  "halogenio": "nenhum",
  "razaoM1": 4.56,
  "picoBase": 43,
  "mecanismo": "Clivagem α",
  "picos": [
   [
    27,
    12
   ],
   [
    29,
    22
   ],
   [
    42,
    8
   ],
   [
    43,
    100
   ],
   [
    45,
    16
   ],
   [
    61,
    14
   ],
   [
    70,
    12
   ],
   [
    73,
    4
   ],
   [
    88,
    9.0
   ],
   [
    89,
    0.41
   ]
  ],
  "chave": {
   "mz": 43,
   "perda": 45,
   "opcoes": [
    "Clivagem α: sai o radical etóxi (•OC₂H₅, 45 u) e fica o acílio CH₃–C≡O⁺.",
    "Rearranjo de McLafferty com perda de eteno.",
    "Perda de CO₂.",
    "Perda de •CH₃ do grupo etila."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Acetato de etila",
    "slug": "acetato_etila",
    "M": 88,
    "formula": "C4H8O2"
   },
   {
    "nome": "Ácido butanoico",
    "slug": "c_cido_butanoico",
    "M": 88,
    "formula": "C4H8O2"
   },
   {
    "nome": "Propanoato de metila",
    "slug": "c_propanoato_de_metila",
    "M": 88,
    "formula": "C4H8O2"
   },
   {
    "nome": "1,4-Dioxano",
    "slug": "c_1_4_dioxano",
    "M": 88,
    "formula": "C4H8O2"
   }
  ],
  "explicacao": "Ésteres de ácido acético dão um acílio CH₃CO⁺ intenso em 43. No propanoato de metila, o acílio seria CH₃CH₂CO⁺ (m/z 57).",
  "nist": "https://webbook.nist.gov/cgi/cbook.cgi?Name=Ethyl%20acetate&Units=SI&cMS=on"
 },
 {
  "slug": "benzoato_metila",
  "nome": "Benzoato de metila",
  "smiles": "COC(=O)c1ccccc1",
  "formula": "C8H8O2",
  "M": 136,
  "massaExata": 136.0524,
  "nC": 8,
  "nN": 0,
  "halogenio": "nenhum",
  "razaoM1": 9.0,
  "picoBase": 105,
  "mecanismo": "Clivagem α",
  "picos": [
   [
    50,
    9
   ],
   [
    51,
    24
   ],
   [
    77,
    58
   ],
   [
    105,
    100
   ],
   [
    106,
    8
   ],
   [
    136,
    30.0
   ],
   [
    137,
    2.7
   ],
   [
    138,
    0.23
   ]
  ],
  "chave": {
   "mz": 105,
   "perda": 31,
   "opcoes": [
    "Clivagem α: sai o radical metóxi (•OCH₃, 31 u) e fica o cátion benzoíla C₆H₅–C≡O⁺.",
    "Perda de •CH₃ (15 u).",
    "Rearranjo de McLafferty.",
    "Formação do íon tropílio."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Benzoato de metila",
    "slug": "benzoato_metila",
    "M": 136,
    "formula": "C8H8O2"
   },
   {
    "nome": "Ácido fenilacético",
    "slug": "c_cido_fenilactico",
    "M": 136,
    "formula": "C8H8O2"
   },
   {
    "nome": "Acetato de fenila",
    "slug": "c_acetato_de_fenila",
    "M": 136,
    "formula": "C8H8O2"
   },
   {
    "nome": "4-Metoxibenzaldeído",
    "slug": "c_4_metoxibenzaldedo",
    "M": 136,
    "formula": "C8H8O2"
   }
  ],
  "explicacao": "105 (benzoíla) → 77 (fenila, perde CO) é a sequência típica de derivados de ácido benzoico.",
  "nist": "https://webbook.nist.gov/cgi/cbook.cgi?Name=Methyl%20benzoate&Units=SI&cMS=on"
 },
 {
  "slug": "acetofenona",
  "nome": "Acetofenona",
  "smiles": "CC(=O)c1ccccc1",
  "formula": "C8H8O",
  "M": 120,
  "massaExata": 120.0575,
  "nC": 8,
  "nN": 0,
  "halogenio": "nenhum",
  "razaoM1": 8.97,
  "picoBase": 105,
  "mecanismo": "Clivagem α",
  "picos": [
   [
    43,
    12
   ],
   [
    50,
    12
   ],
   [
    51,
    30
   ],
   [
    77,
    80
   ],
   [
    105,
    100
   ],
   [
    120,
    30.0
   ],
   [
    121,
    2.69
   ],
   [
    122,
    0.17
   ]
  ],
  "chave": {
   "mz": 105,
   "perda": 15,
   "opcoes": [
    "Clivagem α: sai o radical metila (•CH₃, 15 u) e fica o cátion benzoíla C₆H₅–C≡O⁺.",
    "Clivagem benzílica formando tropílio.",
    "Perda de CO (28 u) direto do íon molecular.",
    "Rearranjo de McLafferty."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Acetofenona",
    "slug": "acetofenona",
    "M": 120,
    "formula": "C8H8O"
   },
   {
    "nome": "Propilbenzeno",
    "slug": "c_propilbenzeno",
    "M": 120,
    "formula": "C9H12"
   },
   {
    "nome": "Fenilacetaldeído",
    "slug": "c_fenilacetaldedo",
    "M": 120,
    "formula": "C8H8O"
   },
   {
    "nome": "4-Metilbenzaldeído",
    "slug": "c_4_metilbenzaldedo",
    "M": 120,
    "formula": "C8H8O"
   }
  ],
  "explicacao": "M − 15 = 105 (benzoíla) e depois 77 (fenila). Propilbenzeno e fenilacetaldeído teriam o pico base em 91 (tropílio).",
  "nist": "https://webbook.nist.gov/cgi/cbook.cgi?Name=Acetophenone&Units=SI&cMS=on"
 },
 {
  "slug": "fenol",
  "nome": "Fenol",
  "smiles": "Oc1ccccc1",
  "formula": "C6H6O",
  "M": 94,
  "massaExata": 94.0419,
  "nC": 6,
  "nN": 0,
  "halogenio": "nenhum",
  "razaoM1": 6.73,
  "picoBase": 94,
  "mecanismo": "Perda de neutro",
  "picos": [
   [
    39,
    16
   ],
   [
    40,
    8
   ],
   [
    55,
    5
   ],
   [
    65,
    24
   ],
   [
    66,
    30
   ],
   [
    94,
    100.0
   ],
   [
    95,
    6.73
   ],
   [
    96,
    0.39
   ]
  ],
  "chave": {
   "mz": 66,
   "perda": 28,
   "opcoes": [
    "Perda de monóxido de carbono (CO, 28 u, neutro) após rearranjo do anel, típica de fenóis.",
    "Rearranjo de McLafferty com perda de eteno.",
    "Perda de N₂ (28 u).",
    "Clivagem α com perda de •C₂H₅."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Fenol",
    "slug": "fenol",
    "M": 94,
    "formula": "C6H6O"
   },
   {
    "nome": "Anilina",
    "slug": "c_anilina",
    "M": 93,
    "formula": "C6H7N"
   },
   {
    "nome": "Cicloexanona",
    "slug": "c_cicloexanona",
    "M": 98,
    "formula": "C6H10O"
   },
   {
    "nome": "2-Metilfurano",
    "slug": "c_2_metilfurano",
    "M": 82,
    "formula": "C5H6O"
   }
  ],
  "explicacao": "Íon molecular intenso (aromático) e perda de CO (M−28) e de CHO• (M−29) são o padrão dos fenóis.",
  "nist": "https://webbook.nist.gov/cgi/cbook.cgi?Name=Phenol&Units=SI&cMS=on"
 },
 {
  "slug": "nitrobenzeno",
  "nome": "Nitrobenzeno",
  "smiles": "O=[N+]([O-])c1ccccc1",
  "formula": "C6H5NO2",
  "M": 123,
  "massaExata": 123.032,
  "nC": 6,
  "nN": 1,
  "halogenio": "nenhum",
  "razaoM1": 7.13,
  "picoBase": 77,
  "mecanismo": "Indutiva (heteroátomo)",
  "picos": [
   [
    50,
    20
   ],
   [
    51,
    55
   ],
   [
    65,
    14
   ],
   [
    77,
    100
   ],
   [
    93,
    14
   ],
   [
    123,
    70.0
   ],
   [
    124,
    4.99
   ],
   [
    125,
    0.43
   ]
  ],
  "chave": {
   "mz": 77,
   "perda": 46,
   "opcoes": [
    "Perda do radical •NO₂ (46 u), formando o cátion fenila C₆H₅⁺.",
    "Perda de NO (30 u) e depois de CO.",
    "Rearranjo de McLafferty.",
    "Perda de HCN (27 u)."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Nitrobenzeno",
    "slug": "nitrobenzeno",
    "M": 123,
    "formula": "C6H5NO2"
   },
   {
    "nome": "Ácido nicotínico",
    "slug": "c_cido_nicotnico",
    "M": 123,
    "formula": "C6H5NO2"
   },
   {
    "nome": "4-Nitrotolueno",
    "slug": "c_4_nitrotolueno",
    "M": 137,
    "formula": "C7H7NO2"
   },
   {
    "nome": "Benzamida",
    "slug": "c_benzamida",
    "M": 121,
    "formula": "C7H7NO"
   }
  ],
  "explicacao": "M ímpar (123) → número ímpar de N. M−46 (77) é a perda de NO₂ e M−30 (93) a perda de NO, típicas de nitroaromáticos.",
  "nist": "https://webbook.nist.gov/cgi/cbook.cgi?Name=Nitrobenzene&Units=SI&cMS=on"
 },
 {
  "slug": "trietilamina",
  "nome": "Trietilamina",
  "smiles": "CCN(CC)CC",
  "formula": "C6H15N",
  "M": 101,
  "massaExata": 101.1204,
  "nC": 6,
  "nN": 1,
  "halogenio": "nenhum",
  "razaoM1": 7.22,
  "picoBase": 86,
  "mecanismo": "Clivagem α",
  "picos": [
   [
    29,
    15
   ],
   [
    30,
    30
   ],
   [
    42,
    10
   ],
   [
    44,
    12
   ],
   [
    58,
    28
   ],
   [
    86,
    100
   ],
   [
    101,
    18.0
   ],
   [
    102,
    1.3
   ]
  ],
  "chave": {
   "mz": 86,
   "perda": 15,
   "opcoes": [
    "Clivagem α ao nitrogênio: sai •CH₃ (15 u) e fica o íon imínio CH₂=N⁺(C₂H₅)₂, muito estabilizado pelo par de elétrons do N.",
    "Perda de NH₃ (17 u).",
    "Rearranjo de McLafferty com perda de propeno.",
    "Perda de H₂O."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Trietilamina",
    "slug": "trietilamina",
    "M": 101,
    "formula": "C6H15N"
   },
   {
    "nome": "Dipropilamina",
    "slug": "c_dipropilamina",
    "M": 101,
    "formula": "C6H15N"
   },
   {
    "nome": "Hexan-1-amina",
    "slug": "c_hexan_1_amina",
    "M": 101,
    "formula": "C6H15N"
   },
   {
    "nome": "N,N-Dimetilbutan-1-amina",
    "slug": "c_n_n_dimetilbutan_1_amina",
    "M": 101,
    "formula": "C6H15N"
   }
  ],
  "explicacao": "As quatro aminas têm M = 101 (ímpar, 1 N). O que as separa é a clivagem α: só a trietilamina perde •CH₃ (→ 86). Dipropilamina perde •C₂H₅ (→ 72), a hexilamina dá CH₂=NH₂⁺ (30) e a N,N-dimetilbutilamina dá CH₂=N⁺Me₂ (58).",
  "nist": "https://webbook.nist.gov/cgi/cbook.cgi?Name=Triethylamine&Units=SI&cMS=on"
 },
 {
  "slug": "propilamina",
  "nome": "Propan-1-amina (propilamina)",
  "smiles": "CCCN",
  "formula": "C3H9N",
  "M": 59,
  "massaExata": 59.0735,
  "nC": 3,
  "nN": 1,
  "halogenio": "nenhum",
  "razaoM1": 3.78,
  "picoBase": 30,
  "mecanismo": "Clivagem α",
  "picos": [
   [
    27,
    6
   ],
   [
    28,
    12
   ],
   [
    30,
    100
   ],
   [
    41,
    5
   ],
   [
    42,
    5
   ],
   [
    58,
    4
   ],
   [
    59,
    9.0
   ],
   [
    60,
    0.34
   ]
  ],
  "chave": {
   "mz": 30,
   "perda": 29,
   "opcoes": [
    "Clivagem α ao nitrogênio: sai •C₂H₅ (29 u) e fica o íon imínio CH₂=NH₂⁺ (m/z 30).",
    "Perda de NH₃ e de eteno.",
    "Rearranjo de McLafferty.",
    "Perda de •CH₃ e de H₂O."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Propan-1-amina (propilamina)",
    "slug": "propilamina",
    "M": 59,
    "formula": "C3H9N"
   },
   {
    "nome": "Trimetilamina",
    "slug": "c_trimetilamina",
    "M": 59,
    "formula": "C3H9N"
   },
   {
    "nome": "Propan-2-amina",
    "slug": "c_propan_2_amina",
    "M": 59,
    "formula": "C3H9N"
   },
   {
    "nome": "N-Metiletanamina",
    "slug": "c_n_metiletanamina",
    "M": 59,
    "formula": "C3H9N"
   }
  ],
  "explicacao": "m/z 30 (CH₂=NH₂⁺) é a marca de aminas primárias com –CH₂–NH₂. A propan-2-amina e a N-metiletanamina dariam m/z 44; a trimetilamina, 58.",
  "nist": "https://webbook.nist.gov/cgi/cbook.cgi?Name=1-Propanamine&Units=SI&cMS=on"
 },
 {
  "slug": "cicloexeno",
  "nome": "Cicloexeno",
  "smiles": "C1=CCCCC1",
  "formula": "C6H10",
  "M": 82,
  "massaExata": 82.0782,
  "nC": 6,
  "nN": 0,
  "halogenio": "nenhum",
  "razaoM1": 6.75,
  "picoBase": 67,
  "mecanismo": "Retro-Diels-Alder",
  "picos": [
   [
    27,
    15
   ],
   [
    39,
    30
   ],
   [
    41,
    30
   ],
   [
    53,
    12
   ],
   [
    54,
    62
   ],
   [
    67,
    100
   ],
   [
    81,
    8
   ],
   [
    82,
    40.0
   ],
   [
    83,
    2.7
   ],
   [
    84,
    0.08
   ]
  ],
  "chave": {
   "mz": 54,
   "perda": 28,
   "opcoes": [
    "Retro-Diels-Alder: o anel se abre, sai eteno (28 u, neutro) e fica o radical-cátion do 1,3-butadieno (m/z 54).",
    "Rearranjo de McLafferty com perda de propeno.",
    "Perda de •C₂H₅ por clivagem alílica.",
    "Perda de dois H₂."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Cicloexeno",
    "slug": "cicloexeno",
    "M": 82,
    "formula": "C6H10"
   },
   {
    "nome": "Hex-1-ino",
    "slug": "c_hex_1_ino",
    "M": 82,
    "formula": "C6H10"
   },
   {
    "nome": "Metilciclopentano",
    "slug": "c_metilciclopentano",
    "M": 84,
    "formula": "C6H12"
   },
   {
    "nome": "Hexa-1,5-dieno",
    "slug": "c_hexa_1_5_dieno",
    "M": 82,
    "formula": "C6H10"
   }
  ],
  "explicacao": "Cicloexenos sofrem retro-Diels-Alder: o pico em M−28 (perda de eteno) é a assinatura. O pico base (67) vem da perda de •CH₃ alílica.",
  "nist": "https://webbook.nist.gov/cgi/cbook.cgi?Name=Cyclohexene&Units=SI&cMS=on"
 },
 {
  "slug": "limoneno",
  "nome": "Limoneno",
  "smiles": "CC1=CCC(CC1)C(C)=C",
  "formula": "C10H16",
  "M": 136,
  "massaExata": 136.1252,
  "nC": 10,
  "nN": 0,
  "halogenio": "nenhum",
  "razaoM1": 11.25,
  "picoBase": 68,
  "mecanismo": "Retro-Diels-Alder",
  "picos": [
   [
    39,
    20
   ],
   [
    41,
    25
   ],
   [
    53,
    20
   ],
   [
    67,
    60
   ],
   [
    68,
    100
   ],
   [
    79,
    22
   ],
   [
    93,
    65
   ],
   [
    107,
    20
   ],
   [
    121,
    20
   ],
   [
    136,
    20.0
   ],
   [
    137,
    2.25
   ],
   [
    138,
    0.11
   ]
  ],
  "chave": {
   "mz": 68,
   "perda": 68,
   "opcoes": [
    "Retro-Diels-Alder: o anel cicloexeno se divide em duas unidades de isopreno (C₅H₈); uma sai neutra e a outra fica como radical-cátion (m/z 68).",
    "Rearranjo de McLafferty com perda de eteno.",
    "Perda de •C₃H₇ por clivagem α.",
    "Formação do íon tropílio."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Limoneno",
    "slug": "limoneno",
    "M": 136,
    "formula": "C10H16"
   },
   {
    "nome": "Mirceno",
    "slug": "c_mirceno",
    "M": 136,
    "formula": "C10H16"
   },
   {
    "nome": "Benzoato de metila",
    "slug": "c_benzoato_de_metila",
    "M": 136,
    "formula": "C8H8O2"
   },
   {
    "nome": "p-Cimeno",
    "slug": "c_p_cimeno",
    "M": 134,
    "formula": "C10H14"
   }
  ],
  "explicacao": "O limoneno é um 'dímero' do isopreno montado por Diels-Alder; no espectrômetro, o retro-Diels-Alder o desfaz e dá o pico base em 68 (metade do M = 136). O mirceno, de cadeia aberta, não tem o anel cicloexeno necessário para o RDA.",
  "nist": "https://webbook.nist.gov/cgi/cbook.cgi?Name=Limonene&Units=SI&cMS=on"
 },
 {
  "slug": "benzaldeido",
  "nome": "Benzaldeído",
  "smiles": "O=Cc1ccccc1",
  "formula": "C7H6O",
  "M": 106,
  "massaExata": 106.0419,
  "nC": 7,
  "nN": 0,
  "halogenio": "nenhum",
  "razaoM1": 7.83,
  "picoBase": 77,
  "mecanismo": "Clivagem α",
  "picos": [
   [
    39,
    10
   ],
   [
    50,
    40
   ],
   [
    51,
    65
   ],
   [
    74,
    8
   ],
   [
    77,
    100
   ],
   [
    78,
    22
   ],
   [
    105,
    97
   ],
   [
    106,
    95.0
   ],
   [
    107,
    7.44
   ],
   [
    108,
    0.44
   ]
  ],
  "chave": {
   "mz": 105,
   "perda": 1,
   "opcoes": [
    "Clivagem α: o aldeído perde o H• ligado à carbonila e fica o cátion benzoíla C₆H₅–C≡O⁺ (M−1, típico de aldeídos).",
    "Clivagem benzílica formando o íon tropílio.",
    "Rearranjo de McLafferty com perda de eteno.",
    "Perda de •CH₃ do anel."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Benzaldeído",
    "slug": "benzaldeido",
    "M": 106,
    "formula": "C7H6O"
   },
   {
    "nome": "Etilbenzeno",
    "slug": "c_etilbenzeno",
    "M": 106,
    "formula": "C8H10"
   },
   {
    "nome": "Álcool benzílico",
    "slug": "c_lcool_benzlico",
    "M": 108,
    "formula": "C7H8O"
   },
   {
    "nome": "p-Xileno",
    "slug": "c_p_xileno",
    "M": 106,
    "formula": "C8H10"
   }
  ],
  "explicacao": "M e M−1 quase do mesmo tamanho são a marca dos aldeídos aromáticos. Depois, a benzoíla (105) perde CO e dá a fenila (77). Etilbenzeno e p-xileno (também M = 106) teriam o pico base em 91 (tropílio).",
  "nist": "https://webbook.nist.gov/cgi/cbook.cgi?Name=Benzaldehyde&Units=SI&cMS=on"
 },
 {
  "slug": "eter_diisopropilico",
  "nome": "Éter di-isopropílico",
  "smiles": "CC(C)OC(C)C",
  "formula": "C6H14O",
  "M": 102,
  "massaExata": 102.1045,
  "nC": 6,
  "nN": 0,
  "halogenio": "nenhum",
  "razaoM1": 7.0,
  "picoBase": 45,
  "mecanismo": "Clivagem α",
  "picos": [
   [
    27,
    14
   ],
   [
    41,
    15
   ],
   [
    43,
    40
   ],
   [
    45,
    100
   ],
   [
    59,
    8
   ],
   [
    87,
    20
   ],
   [
    102,
    2.0
   ],
   [
    103,
    0.14
   ]
  ],
  "chave": {
   "mz": 87,
   "perda": 15,
   "opcoes": [
    "Clivagem α ao oxigênio: sai •CH₃ (15 u) e fica o íon oxônio (CH₃)₂CH–O⁺=CH–CH₃, estabilizado pelo par de elétrons do O.",
    "Perda de água (H₂O) típica de álcoois.",
    "Rearranjo de McLafferty de uma carbonila.",
    "Perda de •OH (17 u)."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Éter di-isopropílico",
    "slug": "eter_diisopropilico",
    "M": 102,
    "formula": "C6H14O"
   },
   {
    "nome": "Éter dipropílico",
    "slug": "c_ter_diproplico",
    "M": 102,
    "formula": "C6H14O"
   },
   {
    "nome": "Hexan-1-ol",
    "slug": "c_hexan_1_ol",
    "M": 102,
    "formula": "C6H14O"
   },
   {
    "nome": "Ácido pentanoico",
    "slug": "c_cido_pentanoico",
    "M": 102,
    "formula": "C5H10O2"
   }
  ],
  "explicacao": "Éteres têm M fraco e fazem clivagem α. Com grupos isopropila, a perda é de •CH₃ (M−15 = 87); depois o oxônio perde propeno e dá m/z 45 (pico base). No éter dipropílico a clivagem α perderia •C₂H₅ (M−29 = 73).",
  "nist": "https://webbook.nist.gov/cgi/cbook.cgi?Name=Diisopropyl%20ether&Units=SI&cMS=on"
 }
];
