/* ============================================================
   amostras.js — banco de amostras da Missão RMN
   ============================================================
   25 amostras "desconhecidas". Cada aluno sorteia uma (sem repetição).

   sinais     → sinais de ¹H (CDCl₃, 300 MHz), do mais desblindado
                para o mais blindado:
                  d        deslocamento químico (ppm)
                  h        nº de hidrogênios do sinal
                  acopl    [[nº de H vizinhos, J em Hz], …]
                  tipo     "mult" | "s" (singleto) | "br" (singleto largo,
                           OH/NH/COOH) | "m" (multipleto aromático; larg em ppm)
                  integral altura da curva de integração mostrada ao aluno
                Os deslocamentos e as constantes J são valores típicos
                da literatura, arredondados; o espectro é simulado em
                PRIMEIRA ORDEM (regra do n+1), como na aula.
   chave      → sinal que o aluno analisa na etapa 3 (multiplicidade e J)
   diag       → sinal da etapa 4 (deslocamento químico); opção 0 = certa
   candidatos → o 1º é a resposta certa (a página embaralha a ordem)

   ATENÇÃO: depois que a turma começar a sortear, NÃO mude a ordem
   da lista. Para acrescentar amostras, adicione sempre no FINAL.
   Este arquivo foi gerado por um script (RDKit), mas pode ser
   editado à mão.
   ============================================================ */

const AMOSTRAS = [
 {
  "slug": "acetato_etila",
  "nome": "Acetato de etila",
  "smiles": "CC(=O)OCC",
  "classe": "Éster",
  "formula": "C₄H₈O₂",
  "formulaTxt": "C4H8O2",
  "IDH": 1,
  "nC": 4,
  "nH": 8,
  "mhz": 300,
  "sinais": [
   {
    "d": 4.12,
    "h": 2,
    "tipo": "mult",
    "acopl": [
     [
      3,
      7.1
     ]
    ],
    "mult": "quarteto",
    "abrev": "q",
    "rot": "OCH₂",
    "integral": 2.6
   },
   {
    "d": 2.05,
    "h": 3,
    "tipo": "s",
    "acopl": [],
    "mult": "singleto",
    "abrev": "s",
    "rot": "CH₃C=O",
    "integral": 3.9
   },
   {
    "d": 1.26,
    "h": 3,
    "tipo": "mult",
    "acopl": [
     [
      2,
      7.1
     ]
    ],
    "mult": "tripleto",
    "abrev": "t",
    "rot": "CH₃",
    "integral": 3.9
   }
  ],
  "chave": {
   "i": 0,
   "mult": "quarteto",
   "vizinhos": 3,
   "J": 7.1,
   "Jtodos": [
    7.1
   ]
  },
  "diag": {
   "i": 0,
   "opcoes": [
    "CH ligado ao O do éster (lado alcoólico): o oxigênio eletronegativo desblinda (3,5–4,8 ppm).",
    "H em carbono α à carbonila (C=O): leve desblindagem (2,1–2,5 ppm).",
    "H vinílico (C=C–H): anisotropia da ligação dupla (4,5–6,5 ppm).",
    "CH ligado ao N de uma amina: leve desblindagem (2,2–2,9 ppm)."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Acetato de etila",
    "slug": "acetato_etila",
    "formula": "C₄H₈O₂",
    "padrao": "",
    "sinais": 3
   },
   {
    "nome": "Propanoato de metila",
    "slug": "c_propanoato_de_metila",
    "formula": "C₄H₈O₂",
    "padrao": "3 sinais: singleto 3H em 3,67 (OCH₃), quarteto 2H em 2,32 e tripleto 3H em 1,14"
   },
   {
    "nome": "Ácido butanoico",
    "slug": "c_acido_butanoico",
    "formula": "C₄H₈O₂",
    "padrao": "4 sinais, com o H ácido largo em ~11,5 ppm"
   },
   {
    "nome": "Formato de propila",
    "slug": "c_formato_de_propila",
    "formula": "C₄H₈O₂",
    "padrao": "4 sinais, com um singleto do H do formato em ~8,0 ppm"
   }
  ],
  "explicacao": "O quarteto em 4,12 ppm é um CH₂ vizinho de um CH₃ (n = 3) e ligado ao oxigênio do éster; o singleto em 2,05 é o CH₃ ligado à carbonila. O CH₂ está do lado alcoólico: é um acetato, não um propanoato."
 },
 {
  "slug": "propanoato_metila",
  "nome": "Propanoato de metila",
  "smiles": "CCC(=O)OC",
  "classe": "Éster",
  "formula": "C₄H₈O₂",
  "formulaTxt": "C4H8O2",
  "IDH": 1,
  "nC": 4,
  "nH": 8,
  "mhz": 300,
  "sinais": [
   {
    "d": 3.67,
    "h": 3,
    "tipo": "s",
    "acopl": [],
    "mult": "singleto",
    "abrev": "s",
    "rot": "OCH₃",
    "integral": 2.7
   },
   {
    "d": 2.33,
    "h": 2,
    "tipo": "mult",
    "acopl": [
     [
      3,
      7.6
     ]
    ],
    "mult": "quarteto",
    "abrev": "q",
    "rot": "CH₂C=O",
    "integral": 1.8
   },
   {
    "d": 1.14,
    "h": 3,
    "tipo": "mult",
    "acopl": [
     [
      2,
      7.6
     ]
    ],
    "mult": "tripleto",
    "abrev": "t",
    "rot": "CH₃",
    "integral": 2.7
   }
  ],
  "chave": {
   "i": 1,
   "mult": "quarteto",
   "vizinhos": 3,
   "J": 7.6,
   "Jtodos": [
    7.6
   ]
  },
  "diag": {
   "i": 0,
   "opcoes": [
    "CH₃ ligado a oxigênio (metóxi): singleto em 3,3–4,0 ppm.",
    "CH₃ ligado diretamente à carbonila (metilcetona, ~2,1 ppm).",
    "H de alcano comum, longe de grupos retiradores (0,7–1,7 ppm).",
    "H de hidroxila (OH): posição variável (0,5–5 ppm), sem desdobramento."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Propanoato de metila",
    "slug": "propanoato_metila",
    "formula": "C₄H₈O₂",
    "padrao": "",
    "sinais": 3
   },
   {
    "nome": "Acetato de etila",
    "slug": "c_acetato_de_etila",
    "formula": "C₄H₈O₂",
    "padrao": "3 sinais: quarteto 2H em 4,12 (OCH₂), singleto 3H em 2,05 e tripleto 3H em 1,26"
   },
   {
    "nome": "Ácido 2-metilpropanoico",
    "slug": "c_acido_2_metilpropanoico",
    "formula": "C₄H₈O₂",
    "padrao": "3 sinais: H ácido largo em ~12, septeto 1H e dubleto 6H"
   },
   {
    "nome": "1,4-Dioxano",
    "slug": "c_1_4_dioxano",
    "formula": "C₄H₈O₂",
    "padrao": "1 único sinal (8H equivalentes) em 3,70 ppm"
   }
  ],
  "explicacao": "O singleto 3H em 3,67 é o grupo metóxi do éster; o quarteto (2H) em 2,33 está α à carbonila. Ou seja: o etila está do lado ácido (propanoato) e o metila do lado alcoólico."
 },
 {
  "slug": "acetato_isopropila",
  "nome": "Acetato de isopropila",
  "smiles": "CC(=O)OC(C)C",
  "classe": "Éster",
  "formula": "C₅H₁₀O₂",
  "formulaTxt": "C5H10O2",
  "IDH": 1,
  "nC": 5,
  "nH": 10,
  "mhz": 300,
  "sinais": [
   {
    "d": 4.99,
    "h": 1,
    "tipo": "mult",
    "acopl": [
     [
      6,
      6.3
     ]
    ],
    "mult": "septeto",
    "abrev": "sept",
    "rot": "OCH",
    "integral": 1.7
   },
   {
    "d": 2.02,
    "h": 3,
    "tipo": "s",
    "acopl": [],
    "mult": "singleto",
    "abrev": "s",
    "rot": "CH₃C=O",
    "integral": 5.1
   },
   {
    "d": 1.23,
    "h": 6,
    "tipo": "mult",
    "acopl": [
     [
      1,
      6.3
     ]
    ],
    "mult": "dubleto",
    "abrev": "d",
    "rot": "(CH₃)₂",
    "integral": 10.2
   }
  ],
  "chave": {
   "i": 0,
   "mult": "septeto",
   "vizinhos": 6,
   "J": 6.3,
   "Jtodos": [
    6.3
   ]
  },
  "diag": {
   "i": 0,
   "opcoes": [
    "CH ligado ao O do éster (lado alcoólico): o oxigênio eletronegativo desblinda (3,5–4,8 ppm).",
    "H vinílico (C=C–H): anisotropia da ligação dupla (4,5–6,5 ppm).",
    "H em carbono α à carbonila (C=O): leve desblindagem (2,1–2,5 ppm).",
    "CH ligado ao N de uma amina: leve desblindagem (2,2–2,9 ppm)."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Acetato de isopropila",
    "slug": "acetato_isopropila",
    "formula": "C₅H₁₀O₂",
    "padrao": "",
    "sinais": 3
   },
   {
    "nome": "Acetato de propila",
    "slug": "c_acetato_de_propila",
    "formula": "C₅H₁₀O₂",
    "padrao": "4 sinais: tripleto 2H em 4,02, singleto 3H, sexteto 2H e tripleto 3H"
   },
   {
    "nome": "Propanoato de etila",
    "slug": "c_propanoato_de_etila",
    "formula": "C₅H₁₀O₂",
    "padrao": "4 sinais: dois quartetos (4,12 e 2,32) e dois tripletos"
   },
   {
    "nome": "Butanoato de metila",
    "slug": "c_butanoato_de_metila",
    "formula": "C₅H₁₀O₂",
    "padrao": "4 sinais: singleto 3H em 3,67, tripleto 2H em 2,30, sexteto e tripleto"
   }
  ],
  "explicacao": "Um septeto de 1H em ~5,0 ppm ao lado de um dubleto de 6H é a assinatura do isopropila ligado ao oxigênio; o singleto 3H em 2,02 é o CH₃ do acetato."
 },
 {
  "slug": "acetato_propila",
  "nome": "Acetato de propila",
  "smiles": "CCCOC(C)=O",
  "classe": "Éster",
  "formula": "C₅H₁₀O₂",
  "formulaTxt": "C5H10O2",
  "IDH": 1,
  "nC": 5,
  "nH": 10,
  "mhz": 300,
  "sinais": [
   {
    "d": 4.02,
    "h": 2,
    "tipo": "mult",
    "acopl": [
     [
      2,
      6.7
     ]
    ],
    "mult": "tripleto",
    "abrev": "t",
    "rot": "OCH₂",
    "integral": 2.3
   },
   {
    "d": 2.05,
    "h": 3,
    "tipo": "s",
    "acopl": [],
    "mult": "singleto",
    "abrev": "s",
    "rot": "CH₃C=O",
    "integral": 3.4
   },
   {
    "d": 1.65,
    "h": 2,
    "tipo": "mult",
    "acopl": [
     [
      5,
      7.0
     ]
    ],
    "mult": "sexteto",
    "abrev": "sext",
    "rot": "CH₂",
    "integral": 2.3
   },
   {
    "d": 0.94,
    "h": 3,
    "tipo": "mult",
    "acopl": [
     [
      2,
      7.4
     ]
    ],
    "mult": "tripleto",
    "abrev": "t",
    "rot": "CH₃",
    "integral": 3.4
   }
  ],
  "chave": {
   "i": 0,
   "mult": "tripleto",
   "vizinhos": 2,
   "J": 6.7,
   "Jtodos": [
    6.7
   ]
  },
  "diag": {
   "i": 0,
   "opcoes": [
    "CH ligado ao O do éster (lado alcoólico): o oxigênio eletronegativo desblinda (3,5–4,8 ppm).",
    "H em carbono α à carbonila (C=O): leve desblindagem (2,1–2,5 ppm).",
    "CH ligado ao cloro (3,1–4,1 ppm).",
    "H benzílico (carbono ligado ao anel): 2,3–3,0 ppm."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Acetato de propila",
    "slug": "acetato_propila",
    "formula": "C₅H₁₀O₂",
    "padrao": "",
    "sinais": 4
   },
   {
    "nome": "Acetato de isopropila",
    "slug": "c_acetato_de_isopropila",
    "formula": "C₅H₁₀O₂",
    "padrao": "3 sinais: septeto 1H em 4,99, singleto 3H e dubleto 6H"
   },
   {
    "nome": "Propanoato de etila",
    "slug": "c_propanoato_de_etila",
    "formula": "C₅H₁₀O₂",
    "padrao": "4 sinais: dois quartetos (4,12 e 2,32) e dois tripletos"
   },
   {
    "nome": "Butanoato de metila",
    "slug": "c_butanoato_de_metila",
    "formula": "C₅H₁₀O₂",
    "padrao": "4 sinais: singleto 3H em 3,67 (OCH₃) e tripleto 2H em 2,30 (α à C=O)"
   }
  ],
  "explicacao": "O tripleto 2H em 4,02 é um OCH₂ com um CH₂ vizinho; a cadeia continua (sexteto 2H, tripleto 3H): propila do lado alcoólico. O singleto 3H em 2,05 é o acetato."
 },
 {
  "slug": "propanoato_etila",
  "nome": "Propanoato de etila",
  "smiles": "CCOC(=O)CC",
  "classe": "Éster",
  "formula": "C₅H₁₀O₂",
  "formulaTxt": "C5H10O2",
  "IDH": 1,
  "nC": 5,
  "nH": 10,
  "mhz": 300,
  "sinais": [
   {
    "d": 4.12,
    "h": 2,
    "tipo": "mult",
    "acopl": [
     [
      3,
      7.1
     ]
    ],
    "mult": "quarteto",
    "abrev": "q",
    "rot": "OCH₂",
    "integral": 4.2
   },
   {
    "d": 2.32,
    "h": 2,
    "tipo": "mult",
    "acopl": [
     [
      3,
      7.6
     ]
    ],
    "mult": "quarteto",
    "abrev": "q",
    "rot": "CH₂C=O",
    "integral": 4.2
   },
   {
    "d": 1.25,
    "h": 3,
    "tipo": "mult",
    "acopl": [
     [
      2,
      7.1
     ]
    ],
    "mult": "tripleto",
    "abrev": "t",
    "rot": "CH₃",
    "integral": 6.3
   },
   {
    "d": 1.14,
    "h": 3,
    "tipo": "mult",
    "acopl": [
     [
      2,
      7.6
     ]
    ],
    "mult": "tripleto",
    "abrev": "t",
    "rot": "CH₃",
    "integral": 6.3
   }
  ],
  "chave": {
   "i": 1,
   "mult": "quarteto",
   "vizinhos": 3,
   "J": 7.6,
   "Jtodos": [
    7.6
   ]
  },
  "diag": {
   "i": 0,
   "opcoes": [
    "CH ligado ao O do éster (lado alcoólico): o oxigênio eletronegativo desblinda (3,5–4,8 ppm).",
    "H em carbono α à carbonila (C=O): leve desblindagem (2,1–2,5 ppm).",
    "CH ligado ao grupo nitro (NO₂): forte desblindagem (4,1–4,4 ppm).",
    "H vinílico (C=C–H): anisotropia da ligação dupla (4,5–6,5 ppm)."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Propanoato de etila",
    "slug": "propanoato_etila",
    "formula": "C₅H₁₀O₂",
    "padrao": "",
    "sinais": 4
   },
   {
    "nome": "Acetato de propila",
    "slug": "c_acetato_de_propila",
    "formula": "C₅H₁₀O₂",
    "padrao": "4 sinais, com um singleto 3H em 2,05 (CH₃C=O)"
   },
   {
    "nome": "Butanoato de metila",
    "slug": "c_butanoato_de_metila",
    "formula": "C₅H₁₀O₂",
    "padrao": "4 sinais, com um singleto 3H em 3,67 (OCH₃)"
   },
   {
    "nome": "Acetato de isopropila",
    "slug": "c_acetato_de_isopropila",
    "formula": "C₅H₁₀O₂",
    "padrao": "3 sinais: septeto 1H, singleto 3H e dubleto 6H"
   }
  ],
  "explicacao": "Dois grupos etila: um com o CH₂ em 4,12 (ligado ao O) e outro com o CH₂ em 2,32 (α à C=O). Nenhum singleto: não há CH₃ isolado."
 },
 {
  "slug": "butanona",
  "nome": "Butanona",
  "smiles": "CCC(C)=O",
  "classe": "Cetona",
  "formula": "C₄H₈O",
  "formulaTxt": "C4H8O",
  "IDH": 1,
  "nC": 4,
  "nH": 8,
  "mhz": 300,
  "sinais": [
   {
    "d": 2.45,
    "h": 2,
    "tipo": "mult",
    "acopl": [
     [
      3,
      7.3
     ]
    ],
    "mult": "quarteto",
    "abrev": "q",
    "rot": "CH₂C=O",
    "integral": 1.5
   },
   {
    "d": 2.14,
    "h": 3,
    "tipo": "s",
    "acopl": [],
    "mult": "singleto",
    "abrev": "s",
    "rot": "CH₃C=O",
    "integral": 2.2
   },
   {
    "d": 1.06,
    "h": 3,
    "tipo": "mult",
    "acopl": [
     [
      2,
      7.3
     ]
    ],
    "mult": "tripleto",
    "abrev": "t",
    "rot": "CH₃",
    "integral": 2.2
   }
  ],
  "chave": {
   "i": 0,
   "mult": "quarteto",
   "vizinhos": 3,
   "J": 7.3,
   "Jtodos": [
    7.3
   ]
  },
  "diag": {
   "i": 1,
   "opcoes": [
    "CH₃ ligado diretamente à carbonila (H α de cetona, 2,1–2,4 ppm).",
    "CH₃ ligado a oxigênio (metóxi): singleto em 3,3–4,0 ppm.",
    "CH₃ ligado a um anel aromático (benzílico).",
    "H de alcano comum, longe de grupos retiradores (0,7–1,7 ppm)."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Butanona",
    "slug": "butanona",
    "formula": "C₄H₈O",
    "padrao": "",
    "sinais": 3
   },
   {
    "nome": "Butanal",
    "slug": "c_butanal",
    "formula": "C₄H₈O",
    "padrao": "4 sinais, com o H do aldeído em 9,77 ppm"
   },
   {
    "nome": "2-Metilpropanal",
    "slug": "c_2_metilpropanal",
    "formula": "C₄H₈O",
    "padrao": "3 sinais: dubleto 1H em 9,61 (CHO), multipleto 1H e dubleto 6H"
   },
   {
    "nome": "Tetra-hidrofurano",
    "slug": "c_tetra_hidrofurano",
    "formula": "C₄H₈O",
    "padrao": "2 sinais de 4H cada: 3,75 (OCH₂) e 1,85"
   }
  ],
  "explicacao": "Nada acima de 3 ppm: não há CHO nem O–CH. O singleto 3H em 2,14 e o quarteto 2H em 2,45 estão ambos α a uma carbonila de cetona."
 },
 {
  "slug": "metilpropanal",
  "nome": "2-Metilpropanal",
  "smiles": "CC(C)C=O",
  "classe": "Aldeído",
  "formula": "C₄H₈O",
  "formulaTxt": "C4H8O",
  "IDH": 1,
  "nC": 4,
  "nH": 8,
  "mhz": 300,
  "sinais": [
   {
    "d": 9.61,
    "h": 1,
    "tipo": "mult",
    "acopl": [
     [
      1,
      1.5
     ]
    ],
    "mult": "dubleto",
    "abrev": "d",
    "rot": "CHO",
    "integral": 1.4
   },
   {
    "d": 2.44,
    "h": 1,
    "tipo": "mult",
    "acopl": [
     [
      6,
      7.0
     ],
     [
      1,
      1.5
     ]
    ],
    "mult": "septeto de dubletos",
    "abrev": "sd",
    "rot": "CH",
    "integral": 1.4
   },
   {
    "d": 1.12,
    "h": 6,
    "tipo": "mult",
    "acopl": [
     [
      1,
      7.0
     ]
    ],
    "mult": "dubleto",
    "abrev": "d",
    "rot": "(CH₃)₂",
    "integral": 8.7
   }
  ],
  "chave": {
   "i": 2,
   "mult": "dubleto",
   "vizinhos": 1,
   "J": 7.0,
   "Jtodos": [
    7.0
   ]
  },
  "diag": {
   "i": 0,
   "opcoes": [
    "H de aldeído (CHO): eletronegatividade + anisotropia da C=O (9–10 ppm).",
    "H ácido de COOH: muito desblindado (10,5–12 ppm) e alargado por ligação de hidrogênio.",
    "H aromático: a corrente do anel desblinda fortemente (6,5–8,0 ppm).",
    "H vinílico (C=C–H): anisotropia da ligação dupla (4,5–6,5 ppm)."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "2-Metilpropanal",
    "slug": "metilpropanal",
    "formula": "C₄H₈O",
    "padrao": "",
    "sinais": 3
   },
   {
    "nome": "Butanal",
    "slug": "c_butanal",
    "formula": "C₄H₈O",
    "padrao": "4 sinais: tripleto 1H em 9,77, dois CH₂ e um tripleto 3H"
   },
   {
    "nome": "Butanona",
    "slug": "c_butanona",
    "formula": "C₄H₈O",
    "padrao": "3 sinais, todos abaixo de 2,5 ppm (quarteto, singleto, tripleto)"
   },
   {
    "nome": "Tetra-hidrofurano",
    "slug": "c_tetra_hidrofurano",
    "formula": "C₄H₈O",
    "padrao": "2 sinais de 4H cada: 3,75 e 1,85"
   }
  ],
  "explicacao": "O sinal em 9,61 é o H do aldeído, um dubleto por acoplar fraco (J ≈ 1,5 Hz) com o único H vizinho. O dubleto 6H mostra um isopropila: (CH₃)₂CH–CHO."
 },
 {
  "slug": "butanal",
  "nome": "Butanal",
  "smiles": "CCCC=O",
  "classe": "Aldeído",
  "formula": "C₄H₈O",
  "formulaTxt": "C4H8O",
  "IDH": 1,
  "nC": 4,
  "nH": 8,
  "mhz": 300,
  "sinais": [
   {
    "d": 9.77,
    "h": 1,
    "tipo": "mult",
    "acopl": [
     [
      2,
      1.7
     ]
    ],
    "mult": "tripleto",
    "abrev": "t",
    "rot": "CHO",
    "integral": 1.1
   },
   {
    "d": 2.42,
    "h": 2,
    "tipo": "mult",
    "acopl": [
     [
      2,
      7.3
     ],
     [
      1,
      1.7
     ]
    ],
    "mult": "tripleto de dubletos",
    "abrev": "td",
    "rot": "CH₂C=O",
    "integral": 2.1
   },
   {
    "d": 1.68,
    "h": 2,
    "tipo": "mult",
    "acopl": [
     [
      5,
      7.4
     ]
    ],
    "mult": "sexteto",
    "abrev": "sext",
    "rot": "CH₂",
    "integral": 2.1
   },
   {
    "d": 0.97,
    "h": 3,
    "tipo": "mult",
    "acopl": [
     [
      2,
      7.4
     ]
    ],
    "mult": "tripleto",
    "abrev": "t",
    "rot": "CH₃",
    "integral": 3.2
   }
  ],
  "chave": {
   "i": 3,
   "mult": "tripleto",
   "vizinhos": 2,
   "J": 7.4,
   "Jtodos": [
    7.4
   ]
  },
  "diag": {
   "i": 0,
   "opcoes": [
    "H de aldeído (CHO): eletronegatividade + anisotropia da C=O (9–10 ppm).",
    "H ácido de COOH: muito desblindado (10,5–12 ppm) e alargado por ligação de hidrogênio.",
    "H aromático: a corrente do anel desblinda fortemente (6,5–8,0 ppm).",
    "H de amida (N–H): 5–9 ppm."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Butanal",
    "slug": "butanal",
    "formula": "C₄H₈O",
    "padrao": "",
    "sinais": 4
   },
   {
    "nome": "2-Metilpropanal",
    "slug": "c_2_metilpropanal",
    "formula": "C₄H₈O",
    "padrao": "3 sinais: dubleto 1H em 9,61, multipleto 1H e dubleto 6H"
   },
   {
    "nome": "Butanona",
    "slug": "c_butanona",
    "formula": "C₄H₈O",
    "padrao": "3 sinais, nenhum acima de 2,5 ppm"
   },
   {
    "nome": "Tetra-hidrofurano",
    "slug": "c_tetra_hidrofurano",
    "formula": "C₄H₈O",
    "padrao": "2 sinais de 4H cada"
   }
  ],
  "explicacao": "O H do aldeído em 9,77 é um tripleto (J pequeno, 1,7 Hz) porque tem um CH₂ vizinho; a cadeia CH₂–CH₂–CH₃ dá sexteto e tripleto: cadeia linear."
 },
 {
  "slug": "acido_metilpropanoico",
  "nome": "Ácido 2-metilpropanoico",
  "smiles": "CC(C)C(=O)O",
  "classe": "Ácido carboxílico",
  "formula": "C₄H₈O₂",
  "formulaTxt": "C4H8O2",
  "IDH": 1,
  "nC": 4,
  "nH": 8,
  "mhz": 300,
  "sinais": [
   {
    "d": 11.9,
    "h": 1,
    "tipo": "br",
    "acopl": [],
    "mult": "singleto largo",
    "abrev": "s largo",
    "rot": "COOH",
    "integral": 1.3
   },
   {
    "d": 2.57,
    "h": 1,
    "tipo": "mult",
    "acopl": [
     [
      6,
      7.0
     ]
    ],
    "mult": "septeto",
    "abrev": "sept",
    "rot": "CH",
    "integral": 1.3
   },
   {
    "d": 1.2,
    "h": 6,
    "tipo": "mult",
    "acopl": [
     [
      1,
      7.0
     ]
    ],
    "mult": "dubleto",
    "abrev": "d",
    "rot": "(CH₃)₂",
    "integral": 7.8
   }
  ],
  "chave": {
   "i": 1,
   "mult": "septeto",
   "vizinhos": 6,
   "J": 7.0,
   "Jtodos": [
    7.0
   ]
  },
  "diag": {
   "i": 0,
   "opcoes": [
    "H ácido de COOH: muito desblindado (10,5–12 ppm) e alargado por ligação de hidrogênio.",
    "H de aldeído (CHO): eletronegatividade + anisotropia da C=O (9–10 ppm).",
    "H de hidroxila (OH): posição variável (0,5–5 ppm), sem desdobramento.",
    "H aromático: a corrente do anel desblinda fortemente (6,5–8,0 ppm)."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Ácido 2-metilpropanoico",
    "slug": "acido_metilpropanoico",
    "formula": "C₄H₈O₂",
    "padrao": "",
    "sinais": 3
   },
   {
    "nome": "Ácido butanoico",
    "slug": "c_acido_butanoico",
    "formula": "C₄H₈O₂",
    "padrao": "4 sinais: H ácido, tripleto 2H, sexteto 2H e tripleto 3H"
   },
   {
    "nome": "Acetato de etila",
    "slug": "c_acetato_de_etila",
    "formula": "C₄H₈O₂",
    "padrao": "3 sinais, sem nada acima de 4,2 ppm"
   },
   {
    "nome": "Propanoato de metila",
    "slug": "c_propanoato_de_metila",
    "formula": "C₄H₈O₂",
    "padrao": "3 sinais: singleto 3H em 3,67, quarteto e tripleto"
   }
  ],
  "explicacao": "O sinal largo em ~12 ppm é o H do COOH. O septeto 1H + dubleto 6H revelam o isopropila ligado à carbonila."
 },
 {
  "slug": "acido_2_cloropropanoico",
  "nome": "Ácido 2-cloropropanoico",
  "smiles": "CC(Cl)C(=O)O",
  "classe": "Ácido carboxílico",
  "formula": "C₃H₅ClO₂",
  "formulaTxt": "C3H5ClO2",
  "IDH": 1,
  "nC": 3,
  "nH": 5,
  "mhz": 300,
  "sinais": [
   {
    "d": 11.2,
    "h": 1,
    "tipo": "br",
    "acopl": [],
    "mult": "singleto largo",
    "abrev": "s largo",
    "rot": "COOH",
    "integral": 0.9
   },
   {
    "d": 4.43,
    "h": 1,
    "tipo": "mult",
    "acopl": [
     [
      3,
      6.9
     ]
    ],
    "mult": "quarteto",
    "abrev": "q",
    "rot": "CHCl",
    "integral": 0.9
   },
   {
    "d": 1.73,
    "h": 3,
    "tipo": "mult",
    "acopl": [
     [
      1,
      6.9
     ]
    ],
    "mult": "dubleto",
    "abrev": "d",
    "rot": "CH₃",
    "integral": 2.7
   }
  ],
  "chave": {
   "i": 1,
   "mult": "quarteto",
   "vizinhos": 3,
   "J": 6.9,
   "Jtodos": [
    6.9
   ]
  },
  "diag": {
   "i": 1,
   "opcoes": [
    "CH ligado ao Cl e vizinho à C=O: os dois grupos retiradores somam a desblindagem.",
    "H vinílico (C=C–H): anisotropia da ligação dupla (4,5–6,5 ppm).",
    "CH ligado ao N de uma amina: leve desblindagem (2,2–2,9 ppm).",
    "H α de uma cetona isolada (2,1–2,4 ppm)."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Ácido 2-cloropropanoico",
    "slug": "acido_2_cloropropanoico",
    "formula": "C₃H₅ClO₂",
    "padrao": "",
    "sinais": 3
   },
   {
    "nome": "Ácido 3-cloropropanoico",
    "slug": "c_acido_3_cloropropanoico",
    "formula": "C₃H₅ClO₂",
    "padrao": "3 sinais: H ácido e dois tripletos de 2H (3,77 e 2,87)"
   },
   {
    "nome": "Cloroacetato de metila",
    "slug": "c_cloroacetato_de_metila",
    "formula": "C₃H₅ClO₂",
    "padrao": "2 singletos: 4,07 (2H) e 3,80 (3H)"
   },
   {
    "nome": "Cloroformato de etila",
    "slug": "c_cloroformato_de_etila",
    "formula": "C₃H₅ClO₂",
    "padrao": "2 sinais: quarteto 2H em 4,35 e tripleto 3H em 1,38"
   }
  ],
  "explicacao": "Quarteto 1H + dubleto 3H = CH–CH₃. O CH em 4,43 está ligado ao Cl e ao C=O ao mesmo tempo; o H largo em 11,2 confirma o ácido."
 },
 {
  "slug": "acido_3_cloropropanoico",
  "nome": "Ácido 3-cloropropanoico",
  "smiles": "OC(=O)CCCl",
  "classe": "Ácido carboxílico",
  "formula": "C₃H₅ClO₂",
  "formulaTxt": "C3H5ClO2",
  "IDH": 1,
  "nC": 3,
  "nH": 5,
  "mhz": 300,
  "sinais": [
   {
    "d": 11.0,
    "h": 1,
    "tipo": "br",
    "acopl": [],
    "mult": "singleto largo",
    "abrev": "s largo",
    "rot": "COOH",
    "integral": 1.7
   },
   {
    "d": 3.77,
    "h": 2,
    "tipo": "mult",
    "acopl": [
     [
      2,
      6.6
     ]
    ],
    "mult": "tripleto",
    "abrev": "t",
    "rot": "CH₂Cl",
    "integral": 3.4
   },
   {
    "d": 2.87,
    "h": 2,
    "tipo": "mult",
    "acopl": [
     [
      2,
      6.6
     ]
    ],
    "mult": "tripleto",
    "abrev": "t",
    "rot": "CH₂C=O",
    "integral": 3.4
   }
  ],
  "chave": {
   "i": 1,
   "mult": "tripleto",
   "vizinhos": 2,
   "J": 6.6,
   "Jtodos": [
    6.6
   ]
  },
  "diag": {
   "i": 1,
   "opcoes": [
    "CH ligado ao cloro (3,1–4,1 ppm).",
    "H em carbono α à carbonila (C=O): leve desblindagem (2,1–2,5 ppm).",
    "CH ligado ao O do éster (lado alcoólico): o oxigênio eletronegativo desblinda (3,5–4,8 ppm).",
    "H benzílico (carbono ligado ao anel): 2,3–3,0 ppm."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Ácido 3-cloropropanoico",
    "slug": "acido_3_cloropropanoico",
    "formula": "C₃H₅ClO₂",
    "padrao": "",
    "sinais": 3
   },
   {
    "nome": "Ácido 2-cloropropanoico",
    "slug": "c_acido_2_cloropropanoico",
    "formula": "C₃H₅ClO₂",
    "padrao": "3 sinais: H ácido, quarteto 1H em 4,43 e dubleto 3H"
   },
   {
    "nome": "Cloroacetato de metila",
    "slug": "c_cloroacetato_de_metila",
    "formula": "C₃H₅ClO₂",
    "padrao": "2 singletos, sem H ácido"
   },
   {
    "nome": "Cloroformato de etila",
    "slug": "c_cloroformato_de_etila",
    "formula": "C₃H₅ClO₂",
    "padrao": "2 sinais: quarteto e tripleto, sem H ácido"
   }
  ],
  "explicacao": "Dois tripletos de 2H com o mesmo J: –CH₂–CH₂–. O de 3,77 está ligado ao Cl; o de 2,87, à carbonila. O sinal largo em 11 ppm é o COOH."
 },
 {
  "slug": "nitropropano",
  "nome": "1-Nitropropano",
  "smiles": "CCC[N+](=O)[O-]",
  "classe": "Nitroalcano",
  "formula": "C₃H₇NO₂",
  "formulaTxt": "C3H7NO2",
  "IDH": 1,
  "nC": 3,
  "nH": 7,
  "mhz": 300,
  "sinais": [
   {
    "d": 4.37,
    "h": 2,
    "tipo": "mult",
    "acopl": [
     [
      2,
      7.0
     ]
    ],
    "mult": "tripleto",
    "abrev": "t",
    "rot": "CH₂NO₂",
    "integral": 2.3
   },
   {
    "d": 2.03,
    "h": 2,
    "tipo": "mult",
    "acopl": [
     [
      5,
      7.2
     ]
    ],
    "mult": "sexteto",
    "abrev": "sext",
    "rot": "CH₂",
    "integral": 2.3
   },
   {
    "d": 1.04,
    "h": 3,
    "tipo": "mult",
    "acopl": [
     [
      2,
      7.4
     ]
    ],
    "mult": "tripleto",
    "abrev": "t",
    "rot": "CH₃",
    "integral": 3.4
   }
  ],
  "chave": {
   "i": 0,
   "mult": "tripleto",
   "vizinhos": 2,
   "J": 7.0,
   "Jtodos": [
    7.0
   ]
  },
  "diag": {
   "i": 0,
   "opcoes": [
    "CH ligado ao grupo nitro (NO₂): forte desblindagem (4,1–4,4 ppm).",
    "CH ligado ao N de uma amina: leve desblindagem (2,2–2,9 ppm).",
    "CH₂ α a uma nitrila (C≡N): 2,1–3,0 ppm.",
    "H em carbono α à carbonila (C=O): leve desblindagem (2,1–2,5 ppm)."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "1-Nitropropano",
    "slug": "nitropropano",
    "formula": "C₃H₇NO₂",
    "padrao": "",
    "sinais": 3
   },
   {
    "nome": "2-Nitropropano",
    "slug": "c_2_nitropropano",
    "formula": "C₃H₇NO₂",
    "padrao": "2 sinais: septeto 1H em 4,67 e dubleto 6H"
   },
   {
    "nome": "Carbamato de etila",
    "slug": "c_carbamato_de_etila",
    "formula": "C₃H₇NO₂",
    "padrao": "3 sinais: quarteto 2H em 4,1, NH₂ largo e tripleto 3H"
   },
   {
    "nome": "Glicinato de metila",
    "slug": "c_glicinato_de_metila",
    "formula": "C₃H₇NO₂",
    "padrao": "3 sinais: dois singletos (3,73 e 3,43) e NH₂ largo"
   }
  ],
  "explicacao": "O tripleto 2H em 4,37 só pode ser um CH₂ preso ao NO₂ (4,1–4,4 ppm). Sexteto + tripleto completam a cadeia propila."
 },
 {
  "slug": "nitropropano2",
  "nome": "2-Nitropropano",
  "smiles": "CC(C)[N+](=O)[O-]",
  "classe": "Nitroalcano",
  "formula": "C₃H₇NO₂",
  "formulaTxt": "C3H7NO2",
  "IDH": 1,
  "nC": 3,
  "nH": 7,
  "mhz": 300,
  "sinais": [
   {
    "d": 4.67,
    "h": 1,
    "tipo": "mult",
    "acopl": [
     [
      6,
      6.6
     ]
    ],
    "mult": "septeto",
    "abrev": "sept",
    "rot": "CHNO₂",
    "integral": 2.1
   },
   {
    "d": 1.56,
    "h": 6,
    "tipo": "mult",
    "acopl": [
     [
      1,
      6.6
     ]
    ],
    "mult": "dubleto",
    "abrev": "d",
    "rot": "(CH₃)₂",
    "integral": 12.6
   }
  ],
  "chave": {
   "i": 0,
   "mult": "septeto",
   "vizinhos": 6,
   "J": 6.6,
   "Jtodos": [
    6.6
   ]
  },
  "diag": {
   "i": 0,
   "opcoes": [
    "CH ligado ao grupo nitro (NO₂): forte desblindagem (4,1–4,4 ppm).",
    "CH ligado ao O de um álcool (3,2–3,8 ppm).",
    "CH ligado ao N de uma amina: leve desblindagem (2,2–2,9 ppm).",
    "H vinílico (C=C–H): anisotropia da ligação dupla (4,5–6,5 ppm)."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "2-Nitropropano",
    "slug": "nitropropano2",
    "formula": "C₃H₇NO₂",
    "padrao": "",
    "sinais": 2
   },
   {
    "nome": "1-Nitropropano",
    "slug": "c_1_nitropropano",
    "formula": "C₃H₇NO₂",
    "padrao": "3 sinais: tripleto 2H em 4,37, sexteto e tripleto"
   },
   {
    "nome": "Carbamato de etila",
    "slug": "c_carbamato_de_etila",
    "formula": "C₃H₇NO₂",
    "padrao": "3 sinais: quarteto, NH₂ largo e tripleto"
   },
   {
    "nome": "Glicinato de metila",
    "slug": "c_glicinato_de_metila",
    "formula": "C₃H₇NO₂",
    "padrao": "3 sinais: dois singletos e NH₂ largo"
   }
  ],
  "explicacao": "Septeto 1H + dubleto 6H = isopropila. O CH em 4,67 está ligado ao grupo nitro, que desblinda fortemente."
 },
 {
  "slug": "etilbenzeno",
  "nome": "Etilbenzeno",
  "smiles": "CCc1ccccc1",
  "classe": "Aromático",
  "formula": "C₈H₁₀",
  "formulaTxt": "C8H10",
  "IDH": 4,
  "nC": 8,
  "nH": 10,
  "mhz": 300,
  "sinais": [
   {
    "d": 7.24,
    "h": 5,
    "tipo": "m",
    "acopl": [],
    "mult": "multipleto",
    "abrev": "m",
    "rot": "ArH",
    "larg": 0.17,
    "integral": 3.8
   },
   {
    "d": 2.65,
    "h": 2,
    "tipo": "mult",
    "acopl": [
     [
      3,
      7.6
     ]
    ],
    "mult": "quarteto",
    "abrev": "q",
    "rot": "CH₂Ar",
    "integral": 1.5
   },
   {
    "d": 1.24,
    "h": 3,
    "tipo": "mult",
    "acopl": [
     [
      2,
      7.6
     ]
    ],
    "mult": "tripleto",
    "abrev": "t",
    "rot": "CH₃",
    "integral": 2.2
   }
  ],
  "chave": {
   "i": 1,
   "mult": "quarteto",
   "vizinhos": 3,
   "J": 7.6,
   "Jtodos": [
    7.6
   ]
  },
  "diag": {
   "i": 0,
   "opcoes": [
    "H aromático: a corrente do anel desblinda fortemente (6,5–8,0 ppm).",
    "H vinílico (C=C–H): anisotropia da ligação dupla (4,5–6,5 ppm).",
    "H de aldeído (CHO): eletronegatividade + anisotropia da C=O (9–10 ppm).",
    "H de amida (N–H): 5–9 ppm."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Etilbenzeno",
    "slug": "etilbenzeno",
    "formula": "C₈H₁₀",
    "padrao": "",
    "sinais": 3
   },
   {
    "nome": "o-Xileno",
    "slug": "c_o_xileno",
    "formula": "C₈H₁₀",
    "padrao": "2 sinais: aromáticos (4H) e um singleto 6H em 2,25"
   },
   {
    "nome": "p-Xileno",
    "slug": "c_p_xileno",
    "formula": "C₈H₁₀",
    "padrao": "2 singletos: 7,05 (4H) e 2,30 (6H)"
   },
   {
    "nome": "m-Xileno",
    "slug": "c_m_xileno",
    "formula": "C₈H₁₀",
    "padrao": "aromáticos (4H) e um singleto 6H em 2,30"
   }
  ],
  "explicacao": "5H aromáticos = anel monossubstituído. Quarteto 2H (2,65, benzílico) + tripleto 3H = etila ligado ao anel."
 },
 {
  "slug": "cumeno",
  "nome": "Isopropilbenzeno (cumeno)",
  "smiles": "CC(C)c1ccccc1",
  "classe": "Aromático",
  "formula": "C₉H₁₂",
  "formulaTxt": "C9H12",
  "IDH": 4,
  "nC": 9,
  "nH": 12,
  "mhz": 300,
  "sinais": [
   {
    "d": 7.25,
    "h": 5,
    "tipo": "m",
    "acopl": [],
    "mult": "multipleto",
    "abrev": "m",
    "rot": "ArH",
    "larg": 0.18,
    "integral": 7.2
   },
   {
    "d": 2.9,
    "h": 1,
    "tipo": "mult",
    "acopl": [
     [
      6,
      6.9
     ]
    ],
    "mult": "septeto",
    "abrev": "sept",
    "rot": "CHAr",
    "integral": 1.4
   },
   {
    "d": 1.25,
    "h": 6,
    "tipo": "mult",
    "acopl": [
     [
      1,
      6.9
     ]
    ],
    "mult": "dubleto",
    "abrev": "d",
    "rot": "(CH₃)₂",
    "integral": 8.7
   }
  ],
  "chave": {
   "i": 1,
   "mult": "septeto",
   "vizinhos": 6,
   "J": 6.9,
   "Jtodos": [
    6.9
   ]
  },
  "diag": {
   "i": 1,
   "opcoes": [
    "H benzílico (carbono ligado ao anel): 2,3–3,0 ppm.",
    "H em carbono α à carbonila (C=O): leve desblindagem (2,1–2,5 ppm).",
    "CH ligado ao O de um álcool (3,2–3,8 ppm).",
    "H de alcano comum, longe de grupos retiradores (0,7–1,7 ppm)."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Isopropilbenzeno (cumeno)",
    "slug": "cumeno",
    "formula": "C₉H₁₂",
    "padrao": "",
    "sinais": 3
   },
   {
    "nome": "Propilbenzeno",
    "slug": "c_propilbenzeno",
    "formula": "C₉H₁₂",
    "padrao": "4 sinais: aromáticos, tripleto 2H em 2,58, sexteto e tripleto"
   },
   {
    "nome": "1,3,5-Trimetilbenzeno",
    "slug": "c_1_3_5_trimetilbenzeno",
    "formula": "C₉H₁₂",
    "padrao": "2 singletos: 6,78 (3H) e 2,26 (9H)"
   },
   {
    "nome": "4-Etiltolueno",
    "slug": "c_4_etiltolueno",
    "formula": "C₉H₁₂",
    "padrao": "4 sinais: 4H aromáticos, quarteto, singleto 3H e tripleto"
   }
  ],
  "explicacao": "O septeto 1H em 2,90 é um H benzílico com seis H vizinhos (dois CH₃): isopropila preso a um anel monossubstituído (5H)."
 },
 {
  "slug": "nitrotolueno",
  "nome": "4-Nitrotolueno",
  "smiles": "Cc1ccc([N+](=O)[O-])cc1",
  "classe": "Aromático",
  "formula": "C₇H₇NO₂",
  "formulaTxt": "C7H7NO2",
  "IDH": 5,
  "nC": 7,
  "nH": 7,
  "mhz": 300,
  "sinais": [
   {
    "d": 8.1,
    "h": 2,
    "tipo": "mult",
    "acopl": [
     [
      1,
      8.6
     ]
    ],
    "mult": "dubleto",
    "abrev": "d",
    "rot": "ArH orto-NO₂",
    "integral": 2.1
   },
   {
    "d": 7.31,
    "h": 2,
    "tipo": "mult",
    "acopl": [
     [
      1,
      8.6
     ]
    ],
    "mult": "dubleto",
    "abrev": "d",
    "rot": "ArH orto-CH₃",
    "integral": 2.1
   },
   {
    "d": 2.46,
    "h": 3,
    "tipo": "s",
    "acopl": [],
    "mult": "singleto",
    "abrev": "s",
    "rot": "CH₃Ar",
    "integral": 3.2
   }
  ],
  "chave": {
   "i": 0,
   "mult": "dubleto",
   "vizinhos": 1,
   "J": 8.6,
   "Jtodos": [
    8.6
   ]
  },
  "diag": {
   "i": 0,
   "opcoes": [
    "H aromático orto ao NO₂: anisotropia do anel + forte retirada de elétrons do nitro.",
    "H de aldeído (CHO): eletronegatividade + anisotropia da C=O (9–10 ppm).",
    "H vinílico (C=C–H): anisotropia da ligação dupla (4,5–6,5 ppm).",
    "H de amida (N–H): 5–9 ppm."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "4-Nitrotolueno",
    "slug": "nitrotolueno",
    "formula": "C₇H₇NO₂",
    "padrao": "",
    "sinais": 3
   },
   {
    "nome": "2-Nitrotolueno",
    "slug": "c_2_nitrotolueno",
    "formula": "C₇H₇NO₂",
    "padrao": "4 sinais aromáticos diferentes (1H cada) e um singleto 3H"
   },
   {
    "nome": "3-Nitrotolueno",
    "slug": "c_3_nitrotolueno",
    "formula": "C₇H₇NO₂",
    "padrao": "4 sinais aromáticos diferentes (1H cada) e um singleto 3H"
   },
   {
    "nome": "Fenilnitrometano",
    "slug": "c_fenilnitrometano",
    "formula": "C₇H₇NO₂",
    "padrao": "2 sinais: 5H aromáticos e singleto 2H em 5,43"
   }
  ],
  "explicacao": "Dois dubletos de 2H com o mesmo J (orto, 8,6 Hz) = anel para-dissubstituído. O dubleto em 8,10 fica ao lado do NO₂; o singleto 3H em 2,46 é o CH₃ no anel."
 },
 {
  "slug": "acetato_benzila",
  "nome": "Acetato de benzila",
  "smiles": "CC(=O)OCc1ccccc1",
  "classe": "Éster",
  "formula": "C₉H₁₀O₂",
  "formulaTxt": "C9H10O2",
  "IDH": 5,
  "nC": 9,
  "nH": 10,
  "mhz": 300,
  "sinais": [
   {
    "d": 7.34,
    "h": 5,
    "tipo": "m",
    "acopl": [],
    "mult": "multipleto",
    "abrev": "m",
    "rot": "ArH",
    "larg": 0.12,
    "integral": 6.5
   },
   {
    "d": 5.09,
    "h": 2,
    "tipo": "s",
    "acopl": [],
    "mult": "singleto",
    "abrev": "s",
    "rot": "OCH₂Ar",
    "integral": 2.6
   },
   {
    "d": 2.08,
    "h": 3,
    "tipo": "s",
    "acopl": [],
    "mult": "singleto",
    "abrev": "s",
    "rot": "CH₃C=O",
    "integral": 3.9
   }
  ],
  "chave": {
   "i": 1,
   "mult": "singleto",
   "vizinhos": 0,
   "J": null,
   "Jtodos": []
  },
  "diag": {
   "i": 1,
   "opcoes": [
    "CH₂ benzílico ligado ao O do éster: anel + oxigênio somam desblindagem (~5 ppm).",
    "H vinílico (C=C–H): anisotropia da ligação dupla (4,5–6,5 ppm).",
    "CH₃ ligado a oxigênio (metóxi): singleto em 3,3–4,0 ppm.",
    "H em carbono α à carbonila (C=O): leve desblindagem (2,1–2,5 ppm)."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Acetato de benzila",
    "slug": "acetato_benzila",
    "formula": "C₉H₁₀O₂",
    "padrao": "",
    "sinais": 3
   },
   {
    "nome": "Fenilacetato de metila",
    "slug": "c_fenilacetato_de_metila",
    "formula": "C₉H₁₀O₂",
    "padrao": "3 sinais: aromáticos, singleto 3H em 3,69 e singleto 2H em 3,62"
   },
   {
    "nome": "Benzoato de etila",
    "slug": "c_benzoato_de_etila",
    "formula": "C₉H₁₀O₂",
    "padrao": "4 sinais: aromáticos (até 8,05), quarteto 2H em 4,38 e tripleto 3H"
   },
   {
    "nome": "Propanoato de fenila",
    "slug": "c_propanoato_de_fenila",
    "formula": "C₉H₁₀O₂",
    "padrao": "3 sinais: aromáticos, quarteto 2H em 2,58 e tripleto 3H"
   }
  ],
  "explicacao": "Só singletos fora do anel: CH₂ em 5,09 (entre o anel e o O) e CH₃ em 2,08 (acetato). Integração 5 : 2 : 3, como no exemplo do Pavia."
 },
 {
  "slug": "isobutanol",
  "nome": "2-Metilpropan-1-ol",
  "smiles": "CC(C)CO",
  "classe": "Álcool",
  "formula": "C₄H₁₀O",
  "formulaTxt": "C4H10O",
  "IDH": 0,
  "nC": 4,
  "nH": 10,
  "mhz": 300,
  "sinais": [
   {
    "d": 3.39,
    "h": 2,
    "tipo": "mult",
    "acopl": [
     [
      1,
      6.5
     ]
    ],
    "mult": "dubleto",
    "abrev": "d",
    "rot": "CH₂OH",
    "integral": 1.8
   },
   {
    "d": 2.2,
    "h": 1,
    "tipo": "br",
    "acopl": [],
    "mult": "singleto largo",
    "abrev": "s largo",
    "rot": "OH",
    "integral": 0.9
   },
   {
    "d": 1.77,
    "h": 1,
    "tipo": "mult",
    "acopl": [
     [
      8,
      6.7
     ]
    ],
    "mult": "noneto",
    "abrev": "non",
    "rot": "CH",
    "integral": 0.9
   },
   {
    "d": 0.92,
    "h": 6,
    "tipo": "mult",
    "acopl": [
     [
      1,
      6.7
     ]
    ],
    "mult": "dubleto",
    "abrev": "d",
    "rot": "(CH₃)₂",
    "integral": 5.4
   }
  ],
  "chave": {
   "i": 0,
   "mult": "dubleto",
   "vizinhos": 1,
   "J": 6.5,
   "Jtodos": [
    6.5
   ]
  },
  "diag": {
   "i": 0,
   "opcoes": [
    "CH ligado ao O de um álcool (3,2–3,8 ppm).",
    "H em carbono α à carbonila (C=O): leve desblindagem (2,1–2,5 ppm).",
    "CH ligado ao cloro (3,1–4,1 ppm).",
    "H vinílico (C=C–H): anisotropia da ligação dupla (4,5–6,5 ppm)."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "2-Metilpropan-1-ol",
    "slug": "isobutanol",
    "formula": "C₄H₁₀O",
    "padrao": "",
    "sinais": 4
   },
   {
    "nome": "Butan-1-ol",
    "slug": "c_butan_1_ol",
    "formula": "C₄H₁₀O",
    "padrao": "5 sinais: tripleto 2H em 3,64, OH, dois CH₂ e tripleto 3H"
   },
   {
    "nome": "Butan-2-ol",
    "slug": "c_butan_2_ol",
    "formula": "C₄H₁₀O",
    "padrao": "5 sinais, com um multipleto 1H em 3,72 (CH–OH)"
   },
   {
    "nome": "Éter dietílico",
    "slug": "c_eter_dietilico",
    "formula": "C₄H₁₀O",
    "padrao": "2 sinais: quarteto 4H em 3,48 e tripleto 6H"
   }
  ],
  "explicacao": "O dubleto 2H em 3,39 é um CH₂–O vizinho de um único H (o CH). Dubleto 6H = dois CH₃ equivalentes. O singleto largo (1H) é o OH, que troca e não desdobra."
 },
 {
  "slug": "bromopropano",
  "nome": "1-Bromopropano",
  "smiles": "CCCBr",
  "classe": "Haleto de alquila",
  "formula": "C₃H₇Br",
  "formulaTxt": "C3H7Br",
  "IDH": 0,
  "nC": 3,
  "nH": 7,
  "mhz": 300,
  "sinais": [
   {
    "d": 3.4,
    "h": 2,
    "tipo": "mult",
    "acopl": [
     [
      2,
      6.8
     ]
    ],
    "mult": "tripleto",
    "abrev": "t",
    "rot": "CH₂Br",
    "integral": 3.4
   },
   {
    "d": 1.89,
    "h": 2,
    "tipo": "mult",
    "acopl": [
     [
      5,
      7.0
     ]
    ],
    "mult": "sexteto",
    "abrev": "sext",
    "rot": "CH₂",
    "integral": 3.4
   },
   {
    "d": 1.03,
    "h": 3,
    "tipo": "mult",
    "acopl": [
     [
      2,
      7.4
     ]
    ],
    "mult": "tripleto",
    "abrev": "t",
    "rot": "CH₃",
    "integral": 5.1
   }
  ],
  "chave": {
   "i": 1,
   "mult": "sexteto",
   "vizinhos": 5,
   "J": 7.0,
   "Jtodos": [
    7.0
   ]
  },
  "diag": {
   "i": 0,
   "opcoes": [
    "CH ligado ao bromo (2,7–4,1 ppm).",
    "CH ligado ao O de um álcool (3,2–3,8 ppm).",
    "CH ligado ao N de uma amina: leve desblindagem (2,2–2,9 ppm).",
    "H benzílico (carbono ligado ao anel): 2,3–3,0 ppm."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "1-Bromopropano",
    "slug": "bromopropano",
    "formula": "C₃H₇Br",
    "padrao": "",
    "sinais": 3
   },
   {
    "nome": "2-Bromopropano",
    "slug": "c_2_bromopropano",
    "formula": "C₃H₇Br",
    "padrao": "2 sinais: septeto 1H em 4,29 e dubleto 6H"
   },
   {
    "nome": "1-Cloropropano",
    "slug": "c_1_cloropropano",
    "formula": "C₃H₇Cl",
    "padrao": "mesmo padrão, mas a fórmula é C₃H₇Cl"
   },
   {
    "nome": "1-Bromobutano",
    "slug": "c_1_bromobutano",
    "formula": "C₄H₉Br",
    "padrao": "4 sinais e fórmula C₄H₉Br"
   }
  ],
  "explicacao": "O sexteto 2H tem cinco H vizinhos (2 + 3): é o CH₂ do meio de uma cadeia propila. O tripleto em 3,40 é o CH₂ ligado ao Br."
 },
 {
  "slug": "propilamina",
  "nome": "Propilamina",
  "smiles": "CCCN",
  "classe": "Amina",
  "formula": "C₃H₉N",
  "formulaTxt": "C3H9N",
  "IDH": 0,
  "nC": 3,
  "nH": 9,
  "mhz": 300,
  "sinais": [
   {
    "d": 2.67,
    "h": 2,
    "tipo": "mult",
    "acopl": [
     [
      2,
      7.0
     ]
    ],
    "mult": "tripleto",
    "abrev": "t",
    "rot": "CH₂N",
    "integral": 2.3
   },
   {
    "d": 1.46,
    "h": 2,
    "tipo": "mult",
    "acopl": [
     [
      5,
      7.2
     ]
    ],
    "mult": "sexteto",
    "abrev": "sext",
    "rot": "CH₂",
    "integral": 2.3
   },
   {
    "d": 1.15,
    "h": 2,
    "tipo": "br",
    "acopl": [],
    "mult": "singleto largo",
    "abrev": "s largo",
    "rot": "NH₂",
    "integral": 2.3
   },
   {
    "d": 0.92,
    "h": 3,
    "tipo": "mult",
    "acopl": [
     [
      2,
      7.4
     ]
    ],
    "mult": "tripleto",
    "abrev": "t",
    "rot": "CH₃",
    "integral": 3.4
   }
  ],
  "chave": {
   "i": 0,
   "mult": "tripleto",
   "vizinhos": 2,
   "J": 7.0,
   "Jtodos": [
    7.0
   ]
  },
  "diag": {
   "i": 0,
   "opcoes": [
    "CH ligado ao N de uma amina: leve desblindagem (2,2–2,9 ppm).",
    "CH ligado ao O de um álcool (3,2–3,8 ppm).",
    "CH ligado ao grupo nitro (NO₂): forte desblindagem (4,1–4,4 ppm).",
    "CH ligado ao bromo (2,7–4,1 ppm)."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Propilamina",
    "slug": "propilamina",
    "formula": "C₃H₉N",
    "padrao": "",
    "sinais": 4
   },
   {
    "nome": "Isopropilamina",
    "slug": "c_isopropilamina",
    "formula": "C₃H₉N",
    "padrao": "3 sinais: septeto 1H em 3,1, NH₂ largo e dubleto 6H"
   },
   {
    "nome": "Trimetilamina",
    "slug": "c_trimetilamina",
    "formula": "C₃H₉N",
    "padrao": "1 único singleto (9H) em 2,12"
   },
   {
    "nome": "Etilmetilamina",
    "slug": "c_etilmetilamina",
    "formula": "C₃H₉N",
    "padrao": "4 sinais: quarteto 2H, singleto 3H em 2,42, NH e tripleto 3H"
   }
  ],
  "explicacao": "Fórmula com N e IDH 0: amina. O tripleto 2H em 2,67 é o CH₂ ligado ao N; o NH₂ aparece largo (1,15) e não acopla com o CH₂."
 },
 {
  "slug": "acetato_vinila",
  "nome": "Acetato de vinila",
  "smiles": "CC(=O)OC=C",
  "classe": "Éster vinílico",
  "formula": "C₄H₆O₂",
  "formulaTxt": "C4H6O2",
  "IDH": 2,
  "nC": 4,
  "nH": 6,
  "mhz": 300,
  "sinais": [
   {
    "d": 7.27,
    "h": 1,
    "tipo": "mult",
    "acopl": [
     [
      1,
      14.0
     ],
     [
      1,
      6.3
     ]
    ],
    "mult": "dubleto de dubletos",
    "abrev": "dd",
    "rot": "OCH=",
    "integral": 2.1
   },
   {
    "d": 4.88,
    "h": 1,
    "tipo": "mult",
    "acopl": [
     [
      1,
      14.0
     ],
     [
      1,
      1.5
     ]
    ],
    "mult": "dubleto de dubletos",
    "abrev": "dd",
    "rot": "=CH₂ (trans)",
    "integral": 2.1
   },
   {
    "d": 4.57,
    "h": 1,
    "tipo": "mult",
    "acopl": [
     [
      1,
      6.3
     ],
     [
      1,
      1.5
     ]
    ],
    "mult": "dubleto de dubletos",
    "abrev": "dd",
    "rot": "=CH₂ (cis)",
    "integral": 2.1
   },
   {
    "d": 2.13,
    "h": 3,
    "tipo": "s",
    "acopl": [],
    "mult": "singleto",
    "abrev": "s",
    "rot": "CH₃C=O",
    "integral": 6.3
   }
  ],
  "chave": {
   "i": 0,
   "mult": "dubleto de dubletos",
   "vizinhos": 2,
   "J": 14.0,
   "Jtodos": [
    14.0,
    6.3
   ]
  },
  "diag": {
   "i": 0,
   "opcoes": [
    "H vinílico preso ao C ligado ao O: a ligação dupla e o oxigênio desblindam muito (~7,3).",
    "H aromático: a corrente do anel desblinda fortemente (6,5–8,0 ppm).",
    "H de aldeído (CHO): eletronegatividade + anisotropia da C=O (9–10 ppm).",
    "H ácido de COOH: muito desblindado (10,5–12 ppm) e alargado por ligação de hidrogênio."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Acetato de vinila",
    "slug": "acetato_vinila",
    "formula": "C₄H₆O₂",
    "padrao": "",
    "sinais": 4
   },
   {
    "nome": "Acrilato de metila",
    "slug": "c_acrilato_de_metila",
    "formula": "C₄H₆O₂",
    "padrao": "3 H vinílicos (5,8–6,4) e um singleto 3H em 3,76 (OCH₃)"
   },
   {
    "nome": "γ-Butirolactona",
    "slug": "c_butirolactona",
    "formula": "C₄H₆O₂",
    "padrao": "3 sinais de 2H: tripleto 4,35, tripleto 2,50 e quinteto 2,28"
   },
   {
    "nome": "Ácido crotônico",
    "slug": "c_acido_crotonico",
    "formula": "C₄H₆O₂",
    "padrao": "H ácido largo, 2 H vinílicos e um CH₃ em 1,91"
   }
  ],
  "explicacao": "Três H vinílicos, cada um dubleto de dubletos: J = 14 Hz (trans), 6,3 Hz (cis) e 1,5 Hz (geminal). O H em 7,27 está no carbono ligado ao O; o singleto 3H é o acetato."
 },
 {
  "slug": "tricloroetano",
  "nome": "1,1,2-Tricloroetano",
  "smiles": "ClCC(Cl)Cl",
  "classe": "Haleto de alquila",
  "formula": "C₂H₃Cl₃",
  "formulaTxt": "C2H3Cl3",
  "IDH": 0,
  "nC": 2,
  "nH": 3,
  "mhz": 300,
  "sinais": [
   {
    "d": 5.77,
    "h": 1,
    "tipo": "mult",
    "acopl": [
     [
      2,
      6.0
     ]
    ],
    "mult": "tripleto",
    "abrev": "t",
    "rot": "CHCl₂",
    "integral": 0.8
   },
   {
    "d": 3.95,
    "h": 2,
    "tipo": "mult",
    "acopl": [
     [
      1,
      6.0
     ]
    ],
    "mult": "dubleto",
    "abrev": "d",
    "rot": "CH₂Cl",
    "integral": 1.5
   }
  ],
  "chave": {
   "i": 0,
   "mult": "tripleto",
   "vizinhos": 2,
   "J": 6.0,
   "Jtodos": [
    6.0
   ]
  },
  "diag": {
   "i": 0,
   "opcoes": [
    "CH ligado a dois átomos de Cl: os efeitos eletronegativos se somam (~5,8 ppm).",
    "H vinílico (C=C–H): anisotropia da ligação dupla (4,5–6,5 ppm).",
    "H aromático: a corrente do anel desblinda fortemente (6,5–8,0 ppm).",
    "CH ligado ao O do éster (lado alcoólico): o oxigênio eletronegativo desblinda (3,5–4,8 ppm)."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "1,1,2-Tricloroetano",
    "slug": "tricloroetano",
    "formula": "C₂H₃Cl₃",
    "padrao": "",
    "sinais": 2
   },
   {
    "nome": "1,1,1-Tricloroetano",
    "slug": "c_1_1_1_tricloroetano",
    "formula": "C₂H₃Cl₃",
    "padrao": "1 único singleto (3H) em 2,74"
   },
   {
    "nome": "1,1-Dicloroetano",
    "slug": "c_1_1_dicloroetano",
    "formula": "C₂H₄Cl₂",
    "padrao": "quarteto 1H + dubleto 3H; fórmula C₂H₄Cl₂"
   },
   {
    "nome": "1,2-Dicloroetano",
    "slug": "c_1_2_dicloroetano",
    "formula": "C₂H₄Cl₂",
    "padrao": "1 singleto (4H) em 3,73; fórmula C₂H₄Cl₂"
   }
  ],
  "explicacao": "É o exemplo Cl₂CH–CH₂Cl da aula: tripleto 1H (vizinho de 2H) e dubleto 2H (vizinho de 1H). O CH com dois Cl fica em 5,77."
 },
 {
  "slug": "butanonitrila",
  "nome": "Butanonitrila",
  "smiles": "CCCC#N",
  "classe": "Nitrila",
  "formula": "C₄H₇N",
  "formulaTxt": "C4H7N",
  "IDH": 2,
  "nC": 4,
  "nH": 7,
  "mhz": 300,
  "sinais": [
   {
    "d": 2.33,
    "h": 2,
    "tipo": "mult",
    "acopl": [
     [
      2,
      7.1
     ]
    ],
    "mult": "tripleto",
    "abrev": "t",
    "rot": "CH₂CN",
    "integral": 2.9
   },
   {
    "d": 1.71,
    "h": 2,
    "tipo": "mult",
    "acopl": [
     [
      5,
      7.2
     ]
    ],
    "mult": "sexteto",
    "abrev": "sext",
    "rot": "CH₂",
    "integral": 2.9
   },
   {
    "d": 1.09,
    "h": 3,
    "tipo": "mult",
    "acopl": [
     [
      2,
      7.4
     ]
    ],
    "mult": "tripleto",
    "abrev": "t",
    "rot": "CH₃",
    "integral": 4.3
   }
  ],
  "chave": {
   "i": 0,
   "mult": "tripleto",
   "vizinhos": 2,
   "J": 7.1,
   "Jtodos": [
    7.1
   ]
  },
  "diag": {
   "i": 0,
   "opcoes": [
    "CH₂ α à nitrila (C≡N): desblindagem moderada (2,1–3,0 ppm).",
    "CH ligado ao grupo nitro (NO₂): forte desblindagem (4,1–4,4 ppm).",
    "H acetilênico (C≡C–H): blindado pela anisotropia da tripla (1,7–2,7 ppm).",
    "CH ligado ao O do éster (lado alcoólico): o oxigênio eletronegativo desblinda (3,5–4,8 ppm)."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Butanonitrila",
    "slug": "butanonitrila",
    "formula": "C₄H₇N",
    "padrao": "",
    "sinais": 3
   },
   {
    "nome": "2-Metilpropanonitrila",
    "slug": "c_2_metilpropanonitrila",
    "formula": "C₄H₇N",
    "padrao": "2 sinais: septeto 1H em 2,72 e dubleto 6H"
   },
   {
    "nome": "Propanonitrila",
    "slug": "c_propanonitrila",
    "formula": "C₃H₅N",
    "padrao": "2 sinais (quarteto e tripleto); fórmula C₃H₅N"
   },
   {
    "nome": "Pentanonitrila",
    "slug": "c_pentanonitrila",
    "formula": "C₅H₉N",
    "padrao": "4 sinais; fórmula C₅H₉N"
   }
  ],
  "explicacao": "IDH 2 com um N e sem O: nitrila (C≡N). Tripleto 2H em 2,33 (α ao CN), sexteto 2H e tripleto 3H: cadeia propila."
 },
 {
  "slug": "bromopropano2",
  "nome": "2-Bromopropano",
  "smiles": "CC(C)Br",
  "classe": "Haleto de alquila",
  "formula": "C₃H₇Br",
  "formulaTxt": "C3H7Br",
  "IDH": 0,
  "nC": 3,
  "nH": 7,
  "mhz": 300,
  "sinais": [
   {
    "d": 4.29,
    "h": 1,
    "tipo": "mult",
    "acopl": [
     [
      6,
      6.6
     ]
    ],
    "mult": "septeto",
    "abrev": "sept",
    "rot": "CHBr",
    "integral": 1.1
   },
   {
    "d": 1.71,
    "h": 6,
    "tipo": "mult",
    "acopl": [
     [
      1,
      6.6
     ]
    ],
    "mult": "dubleto",
    "abrev": "d",
    "rot": "(CH₃)₂",
    "integral": 6.3
   }
  ],
  "chave": {
   "i": 1,
   "mult": "dubleto",
   "vizinhos": 1,
   "J": 6.6,
   "Jtodos": [
    6.6
   ]
  },
  "diag": {
   "i": 0,
   "opcoes": [
    "CH ligado ao bromo (2,7–4,1 ppm).",
    "CH ligado ao O de um álcool (3,2–3,8 ppm).",
    "H vinílico (C=C–H): anisotropia da ligação dupla (4,5–6,5 ppm).",
    "CH ligado ao N de uma amina: leve desblindagem (2,2–2,9 ppm)."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "2-Bromopropano",
    "slug": "bromopropano2",
    "formula": "C₃H₇Br",
    "padrao": "",
    "sinais": 2
   },
   {
    "nome": "1-Bromopropano",
    "slug": "c_1_bromopropano",
    "formula": "C₃H₇Br",
    "padrao": "3 sinais: tripleto 2H em 3,40, sexteto e tripleto"
   },
   {
    "nome": "2-Cloropropano",
    "slug": "c_2_cloropropano",
    "formula": "C₃H₇Cl",
    "padrao": "mesmo padrão, mas a fórmula é C₃H₇Cl"
   },
   {
    "nome": "2-Nitropropano",
    "slug": "c_2_nitropropano",
    "formula": "C₃H₇NO₂",
    "padrao": "mesmo padrão, mas a fórmula é C₃H₇NO₂"
   }
  ],
  "explicacao": "Dubleto 6H + septeto 1H = isopropila. Um CH secundário ligado ao Br aparece em 4,29 (mais desblindado que um CH₂Br)."
 },
 {
  "slug": "eter_dietilico",
  "nome": "Éter dietílico",
  "smiles": "CCOCC",
  "classe": "Éter",
  "formula": "C₄H₁₀O",
  "formulaTxt": "C4H10O",
  "IDH": 0,
  "nC": 4,
  "nH": 10,
  "mhz": 300,
  "sinais": [
   {
    "d": 3.48,
    "h": 4,
    "tipo": "mult",
    "acopl": [
     [
      3,
      7.0
     ]
    ],
    "mult": "quarteto",
    "abrev": "q",
    "rot": "OCH₂",
    "integral": 5.2
   },
   {
    "d": 1.21,
    "h": 6,
    "tipo": "mult",
    "acopl": [
     [
      2,
      7.0
     ]
    ],
    "mult": "tripleto",
    "abrev": "t",
    "rot": "CH₃",
    "integral": 7.8
   }
  ],
  "chave": {
   "i": 0,
   "mult": "quarteto",
   "vizinhos": 3,
   "J": 7.0,
   "Jtodos": [
    7.0
   ]
  },
  "diag": {
   "i": 0,
   "opcoes": [
    "CH₂ ligado ao O de um éter (3,2–3,8 ppm).",
    "H em carbono α à carbonila (C=O): leve desblindagem (2,1–2,5 ppm).",
    "CH ligado ao bromo (2,7–4,1 ppm).",
    "H vinílico (C=C–H): anisotropia da ligação dupla (4,5–6,5 ppm)."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Éter dietílico",
    "slug": "eter_dietilico",
    "formula": "C₄H₁₀O",
    "padrao": "",
    "sinais": 2
   },
   {
    "nome": "Butan-1-ol",
    "slug": "c_butan_1_ol",
    "formula": "C₄H₁₀O",
    "padrao": "5 sinais, incluindo o OH"
   },
   {
    "nome": "2-Metilpropan-1-ol",
    "slug": "c_2_metilpropan_1_ol",
    "formula": "C₄H₁₀O",
    "padrao": "4 sinais: dubleto 2H em 3,39, OH, multipleto 1H e dubleto 6H"
   },
   {
    "nome": "Metil propil éter",
    "slug": "c_metil_propil_eter",
    "formula": "C₄H₁₀O",
    "padrao": "4 sinais: tripleto 2H, singleto 3H (OCH₃), sexteto e tripleto"
   }
  ],
  "explicacao": "Só dois sinais, quarteto 4H e tripleto 6H: dois grupos etila equivalentes ligados ao mesmo O (simetria)."
 }
];
