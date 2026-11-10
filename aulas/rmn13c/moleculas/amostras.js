/* ============================================================
   amostras.js — banco de amostras da Missão ¹³C
   ============================================================
   26 amostras "desconhecidas". Cada aluno sorteia uma (sem repetição).

   sinais     → sinais de ¹³C desacoplados (CDCl₃, 75 MHz), do mais
                desblindado para o mais blindado:
                  d     deslocamento químico (ppm)
                  tipo  "C" | "CH" | "CH2" | "CH3"  (o que o DEPT revela)
                  n     nº de carbonos equivalentes nesse sinal
                Deslocamentos típicos da literatura, arredondados.
                A altura dos picos é só ilustrativa (efeito NOE: C
                quaternários ficam baixos) — no ¹³C não se integra.
   diag       → sinal da etapa 4 (deslocamento químico); opção 0 = certa
   candidatos → o 1º é a resposta certa (a página embaralha a ordem)

   ATENÇÃO: depois que a turma começar a sortear, NÃO mude a ordem
   da lista. Para acrescentar amostras, adicione sempre no FINAL.
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
  "mhz": 75,
  "sinais": [
   {
    "d": 171.1,
    "tipo": "C",
    "n": 1,
    "rot": "C=O"
   },
   {
    "d": 60.4,
    "tipo": "CH2",
    "n": 1,
    "rot": "OCH₂"
   },
   {
    "d": 21.0,
    "tipo": "CH3",
    "n": 1,
    "rot": "CH₃C=O"
   },
   {
    "d": 14.2,
    "tipo": "CH3",
    "n": 1,
    "rot": "CH₃"
   }
  ],
  "diag": {
   "i": 1,
   "opcoes": [
    "C sp³ ligado a oxigênio (C–O de álcool, éter ou éster: 40–80 ppm).",
    "C sp³ sem átomo eletronegativo por perto (8–55 ppm).",
    "C de alceno, C=C (100–150 ppm).",
    "C de nitrila, C≡N (110–140 ppm)."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Acetato de etila",
    "slug": "acetato_etila",
    "formula": "C₄H₈O₂",
    "padrao": ""
   },
   {
    "nome": "Propanoato de metila",
    "slug": "c_propanoato_de_metila",
    "formula": "C₄H₈O₂",
    "padrao": "4 sinais, mas o C–O é um CH₃ (51,5) e há um CH₂ em 27"
   },
   {
    "nome": "Ácido butanoico",
    "slug": "c_acido_butanoico",
    "formula": "C₄H₈O₂",
    "padrao": "4 sinais, C=O em ~180 e nenhum C entre 40 e 80 ppm"
   },
   {
    "nome": "1,4-Dioxano",
    "slug": "c_1_4_dioxano",
    "formula": "C₄H₈O₂",
    "padrao": "1 único sinal (4 CH₂ equivalentes) em 67 ppm"
   }
  ],
  "explicacao": "C=O de éster em 171; um CH₂ ligado ao O em 60,4 (lado alcoólico) e dois CH₃: um ligado à C=O (21) e outro do etila (14)."
 },
 {
  "slug": "propanoato_metila",
  "nome": "Propanoato de metila",
  "smiles": "COC(=O)CC",
  "classe": "Éster",
  "formula": "C₄H₈O₂",
  "formulaTxt": "C4H8O2",
  "IDH": 1,
  "nC": 4,
  "nH": 8,
  "mhz": 75,
  "sinais": [
   {
    "d": 174.9,
    "tipo": "C",
    "n": 1,
    "rot": "C=O"
   },
   {
    "d": 51.5,
    "tipo": "CH3",
    "n": 1,
    "rot": "OCH₃"
   },
   {
    "d": 27.4,
    "tipo": "CH2",
    "n": 1,
    "rot": "CH₂C=O"
   },
   {
    "d": 9.1,
    "tipo": "CH3",
    "n": 1,
    "rot": "CH₃"
   }
  ],
  "diag": {
   "i": 1,
   "opcoes": [
    "C sp³ ligado a oxigênio (C–O de álcool, éter ou éster: 40–80 ppm).",
    "C sp³ sem átomo eletronegativo por perto (8–55 ppm).",
    "C sp³ ligado a cloro (C–Cl: 35–80 ppm).",
    "C de alcino, C≡C (65–90 ppm)."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Propanoato de metila",
    "slug": "propanoato_metila",
    "formula": "C₄H₈O₂",
    "padrao": ""
   },
   {
    "nome": "Acetato de etila",
    "slug": "c_acetato_de_etila",
    "formula": "C₄H₈O₂",
    "padrao": "4 sinais, mas o C–O é um CH₂ (60,4)"
   },
   {
    "nome": "Ácido 2-metilpropanoico",
    "slug": "c_acido_2_metilpropanoico",
    "formula": "C₄H₈O₂",
    "padrao": "3 sinais: dois CH₃ equivalentes dão um sinal só"
   },
   {
    "nome": "1,4-Dioxano",
    "slug": "c_1_4_dioxano",
    "formula": "C₄H₈O₂",
    "padrao": "1 único sinal (4 CH₂ equivalentes) em 67 ppm"
   }
  ],
  "explicacao": "O CH₃ em 51,5 está ligado ao O (metóxi); o CH₂ em 27 está α à carbonila. Metila do lado alcoólico, etila do lado ácido."
 },
 {
  "slug": "acido_butanoico",
  "nome": "Ácido butanoico",
  "smiles": "CCCC(=O)O",
  "classe": "Ácido carboxílico",
  "formula": "C₄H₈O₂",
  "formulaTxt": "C4H8O2",
  "IDH": 1,
  "nC": 4,
  "nH": 8,
  "mhz": 75,
  "sinais": [
   {
    "d": 180.6,
    "tipo": "C",
    "n": 1,
    "rot": "COOH"
   },
   {
    "d": 36.0,
    "tipo": "CH2",
    "n": 1,
    "rot": "CH₂C=O"
   },
   {
    "d": 18.4,
    "tipo": "CH2",
    "n": 1,
    "rot": "CH₂"
   },
   {
    "d": 13.6,
    "tipo": "CH3",
    "n": 1,
    "rot": "CH₃"
   }
  ],
  "diag": {
   "i": 0,
   "opcoes": [
    "C=O de ácido carboxílico, éster ou amida (155–185 ppm).",
    "C=O de aldeído ou cetona (185–220 ppm).",
    "C aromático (110–175 ppm).",
    "C de alceno, C=C (100–150 ppm)."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Ácido butanoico",
    "slug": "acido_butanoico",
    "formula": "C₄H₈O₂",
    "padrao": ""
   },
   {
    "nome": "Ácido 2-metilpropanoico",
    "slug": "c_acido_2_metilpropanoico",
    "formula": "C₄H₈O₂",
    "padrao": "3 sinais, com um CH (não CH₂) α à carbonila"
   },
   {
    "nome": "Acetato de etila",
    "slug": "c_acetato_de_etila",
    "formula": "C₄H₈O₂",
    "padrao": "4 sinais, com um CH₂ ligado ao O em 60"
   },
   {
    "nome": "Propanoato de metila",
    "slug": "c_propanoato_de_metila",
    "formula": "C₄H₈O₂",
    "padrao": "4 sinais, com um CH₃ ligado ao O em 51,5"
   }
  ],
  "explicacao": "C=O em 180,6 (ácido); nenhum C entre 40 e 80, logo não há C–O de éster. Dois CH₂ e um CH₃: cadeia propila linear."
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
  "mhz": 75,
  "sinais": [
   {
    "d": 184.0,
    "tipo": "C",
    "n": 1,
    "rot": "COOH"
   },
   {
    "d": 34.0,
    "tipo": "CH",
    "n": 1,
    "rot": "CH"
   },
   {
    "d": 18.8,
    "tipo": "CH3",
    "n": 2,
    "rot": "(CH₃)₂"
   }
  ],
  "diag": {
   "i": 0,
   "opcoes": [
    "C=O de ácido carboxílico, éster ou amida (155–185 ppm).",
    "C=O de aldeído ou cetona (185–220 ppm).",
    "C aromático (110–175 ppm).",
    "C de nitrila, C≡N (110–140 ppm)."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Ácido 2-metilpropanoico",
    "slug": "acido_metilpropanoico",
    "formula": "C₄H₈O₂",
    "padrao": ""
   },
   {
    "nome": "Ácido butanoico",
    "slug": "c_acido_butanoico",
    "formula": "C₄H₈O₂",
    "padrao": "4 sinais: dois CH₂ e um CH₃"
   },
   {
    "nome": "Acetato de etila",
    "slug": "c_acetato_de_etila",
    "formula": "C₄H₈O₂",
    "padrao": "4 sinais, com um CH₂ ligado ao O em 60"
   },
   {
    "nome": "Propanoato de metila",
    "slug": "c_propanoato_de_metila",
    "formula": "C₄H₈O₂",
    "padrao": "4 sinais, com um CH₃ ligado ao O em 51,5"
   }
  ],
  "explicacao": "4 carbonos, só 3 sinais: dois CH₃ equivalentes (simetria). O CH em 34 está α à C=O do ácido (184)."
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
  "mhz": 75,
  "sinais": [
   {
    "d": 209.3,
    "tipo": "C",
    "n": 1,
    "rot": "C=O"
   },
   {
    "d": 36.9,
    "tipo": "CH2",
    "n": 1,
    "rot": "CH₂C=O"
   },
   {
    "d": 29.4,
    "tipo": "CH3",
    "n": 1,
    "rot": "CH₃C=O"
   },
   {
    "d": 7.9,
    "tipo": "CH3",
    "n": 1,
    "rot": "CH₃"
   }
  ],
  "diag": {
   "i": 0,
   "opcoes": [
    "C=O de aldeído ou cetona (185–220 ppm).",
    "C=O de ácido carboxílico, éster ou amida (155–185 ppm).",
    "C aromático (110–175 ppm).",
    "C de alceno, C=C (100–150 ppm)."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Butanona",
    "slug": "butanona",
    "formula": "C₄H₈O",
    "padrao": ""
   },
   {
    "nome": "Butanal",
    "slug": "c_butanal",
    "formula": "C₄H₈O",
    "padrao": "4 sinais, mas a C=O (202,7) é um CH no DEPT"
   },
   {
    "nome": "2-Metilpropanal",
    "slug": "c_2_metilpropanal",
    "formula": "C₄H₈O",
    "padrao": "3 sinais; a C=O é um CH no DEPT"
   },
   {
    "nome": "Tetra-hidrofurano",
    "slug": "c_tetra_hidrofurano",
    "formula": "C₄H₈O",
    "padrao": "2 sinais de CH₂: 68 (C–O) e 26 ppm; nenhuma C=O"
   }
  ],
  "explicacao": "C=O em 209 que some no DEPT-90 e no DEPT-135: carbono sem H, cetona. Um CH₂ e dois CH₃ completam a butanona."
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
  "mhz": 75,
  "sinais": [
   {
    "d": 202.7,
    "tipo": "CH",
    "n": 1,
    "rot": "CHO"
   },
   {
    "d": 45.8,
    "tipo": "CH2",
    "n": 1,
    "rot": "CH₂C=O"
   },
   {
    "d": 15.7,
    "tipo": "CH2",
    "n": 1,
    "rot": "CH₂"
   },
   {
    "d": 13.7,
    "tipo": "CH3",
    "n": 1,
    "rot": "CH₃"
   }
  ],
  "diag": {
   "i": 0,
   "opcoes": [
    "C=O de aldeído: região 185–220 e, no DEPT-90, aparece (é um CH).",
    "C=O de ácido carboxílico, éster ou amida (155–185 ppm).",
    "C aromático (110–175 ppm).",
    "C de alceno, C=C (100–150 ppm)."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Butanal",
    "slug": "butanal",
    "formula": "C₄H₈O",
    "padrao": ""
   },
   {
    "nome": "Butanona",
    "slug": "c_butanona",
    "formula": "C₄H₈O",
    "padrao": "4 sinais, mas a C=O (209) é quaternária: some no DEPT"
   },
   {
    "nome": "2-Metilpropanal",
    "slug": "c_2_metilpropanal",
    "formula": "C₄H₈O",
    "padrao": "3 sinais: dois CH₃ equivalentes"
   },
   {
    "nome": "Tetra-hidrofurano",
    "slug": "c_tetra_hidrofurano",
    "formula": "C₄H₈O",
    "padrao": "2 sinais de CH₂: 68 (C–O) e 26 ppm; nenhuma C=O"
   }
  ],
  "explicacao": "A C=O em 202,7 aparece no DEPT-90: é um CH, logo um aldeído. Dois CH₂ e um CH₃: cadeia linear."
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
  "mhz": 75,
  "sinais": [
   {
    "d": 204.6,
    "tipo": "CH",
    "n": 1,
    "rot": "CHO"
   },
   {
    "d": 41.1,
    "tipo": "CH",
    "n": 1,
    "rot": "CH"
   },
   {
    "d": 15.5,
    "tipo": "CH3",
    "n": 2,
    "rot": "(CH₃)₂"
   }
  ],
  "diag": {
   "i": 0,
   "opcoes": [
    "C=O de aldeído: região 185–220 e, no DEPT-90, aparece (é um CH).",
    "C=O de ácido carboxílico, éster ou amida (155–185 ppm).",
    "C aromático (110–175 ppm).",
    "C de nitrila, C≡N (110–140 ppm)."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "2-Metilpropanal",
    "slug": "metilpropanal",
    "formula": "C₄H₈O",
    "padrao": ""
   },
   {
    "nome": "Butanal",
    "slug": "c_butanal",
    "formula": "C₄H₈O",
    "padrao": "4 sinais, com dois CH₂"
   },
   {
    "nome": "Butanona",
    "slug": "c_butanona",
    "formula": "C₄H₈O",
    "padrao": "4 sinais; a C=O é quaternária"
   },
   {
    "nome": "Tetra-hidrofurano",
    "slug": "c_tetra_hidrofurano",
    "formula": "C₄H₈O",
    "padrao": "2 sinais de CH₂: 68 (C–O) e 26 ppm; nenhuma C=O"
   }
  ],
  "explicacao": "Três sinais para 4 C: os dois CH₃ são equivalentes. Dois CH no DEPT-90: o CHO (204,6) e o CH α (41,1)."
 },
 {
  "slug": "pentanona3",
  "nome": "3-Pentanona",
  "smiles": "CCC(=O)CC",
  "classe": "Cetona",
  "formula": "C₅H₁₀O",
  "formulaTxt": "C5H10O",
  "IDH": 1,
  "nC": 5,
  "nH": 10,
  "mhz": 75,
  "sinais": [
   {
    "d": 211.9,
    "tipo": "C",
    "n": 1,
    "rot": "C=O"
   },
   {
    "d": 35.5,
    "tipo": "CH2",
    "n": 2,
    "rot": "CH₂"
   },
   {
    "d": 7.9,
    "tipo": "CH3",
    "n": 2,
    "rot": "CH₃"
   }
  ],
  "diag": {
   "i": 0,
   "opcoes": [
    "C=O de aldeído ou cetona (185–220 ppm).",
    "C=O de ácido carboxílico, éster ou amida (155–185 ppm).",
    "C de alceno, C=C (100–150 ppm).",
    "C aromático (110–175 ppm)."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "3-Pentanona",
    "slug": "pentanona3",
    "formula": "C₅H₁₀O",
    "padrao": ""
   },
   {
    "nome": "2-Pentanona",
    "slug": "c_2_pentanona",
    "formula": "C₅H₁₀O",
    "padrao": "5 sinais: nenhum par de C equivalentes"
   },
   {
    "nome": "3-Metil-2-butanona",
    "slug": "c_3_metil_2_butanona",
    "formula": "C₅H₁₀O",
    "padrao": "4 sinais, com um CH (DEPT-90) em 41"
   },
   {
    "nome": "Pentanal",
    "slug": "c_pentanal",
    "formula": "C₅H₁₀O",
    "padrao": "5 sinais; a C=O (202) é um CH"
   }
  ],
  "explicacao": "5 carbonos e só 3 sinais: a molécula é simétrica. C=O quaternária em 212 e dois etilas iguais (CH₂ e CH₃)."
 },
 {
  "slug": "pentanona2",
  "nome": "2-Pentanona",
  "smiles": "CCCC(C)=O",
  "classe": "Cetona",
  "formula": "C₅H₁₀O",
  "formulaTxt": "C5H10O",
  "IDH": 1,
  "nC": 5,
  "nH": 10,
  "mhz": 75,
  "sinais": [
   {
    "d": 209.1,
    "tipo": "C",
    "n": 1,
    "rot": "C=O"
   },
   {
    "d": 45.7,
    "tipo": "CH2",
    "n": 1,
    "rot": "CH₂C=O"
   },
   {
    "d": 29.9,
    "tipo": "CH3",
    "n": 1,
    "rot": "CH₃C=O"
   },
   {
    "d": 17.3,
    "tipo": "CH2",
    "n": 1,
    "rot": "CH₂"
   },
   {
    "d": 13.7,
    "tipo": "CH3",
    "n": 1,
    "rot": "CH₃"
   }
  ],
  "diag": {
   "i": 0,
   "opcoes": [
    "C=O de aldeído ou cetona (185–220 ppm).",
    "C=O de ácido carboxílico, éster ou amida (155–185 ppm).",
    "C de alceno, C=C (100–150 ppm).",
    "C aromático (110–175 ppm)."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "2-Pentanona",
    "slug": "pentanona2",
    "formula": "C₅H₁₀O",
    "padrao": ""
   },
   {
    "nome": "3-Pentanona",
    "slug": "c_3_pentanona",
    "formula": "C₅H₁₀O",
    "padrao": "3 sinais (molécula simétrica)"
   },
   {
    "nome": "3-Metil-2-butanona",
    "slug": "c_3_metil_2_butanona",
    "formula": "C₅H₁₀O",
    "padrao": "4 sinais, com um CH e dois CH₃ equivalentes"
   },
   {
    "nome": "Pentanal",
    "slug": "c_pentanal",
    "formula": "C₅H₁₀O",
    "padrao": "5 sinais; a C=O (202) é um CH"
   }
  ],
  "explicacao": "5 sinais para 5 C: nenhuma simetria. C=O quaternária (cetona) em 209, dois CH₂ e dois CH₃ diferentes."
 },
 {
  "slug": "cicloexanona",
  "nome": "Cicloexanona",
  "smiles": "O=C1CCCCC1",
  "classe": "Cetona",
  "formula": "C₆H₁₀O",
  "formulaTxt": "C6H10O",
  "IDH": 2,
  "nC": 6,
  "nH": 10,
  "mhz": 75,
  "sinais": [
   {
    "d": 211.9,
    "tipo": "C",
    "n": 1,
    "rot": "C=O"
   },
   {
    "d": 42.0,
    "tipo": "CH2",
    "n": 2,
    "rot": "C-2/6"
   },
   {
    "d": 27.1,
    "tipo": "CH2",
    "n": 2,
    "rot": "C-3/5"
   },
   {
    "d": 25.1,
    "tipo": "CH2",
    "n": 1,
    "rot": "C-4"
   }
  ],
  "diag": {
   "i": 0,
   "opcoes": [
    "C=O de aldeído ou cetona (185–220 ppm).",
    "C=O de ácido carboxílico, éster ou amida (155–185 ppm).",
    "C de alceno, C=C (100–150 ppm).",
    "C aromático (110–175 ppm)."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Cicloexanona",
    "slug": "cicloexanona",
    "formula": "C₆H₁₀O",
    "padrao": ""
   },
   {
    "nome": "2-Metilciclopentanona",
    "slug": "c_2_metilciclopentanona",
    "formula": "C₆H₁₀O",
    "padrao": "6 sinais, com um CH e um CH₃"
   },
   {
    "nome": "Ciclopentanocarbaldeído",
    "slug": "c_ciclopentanocarbaldeido",
    "formula": "C₆H₁₀O",
    "padrao": "4 sinais, mas a C=O (~205) é um CH"
   },
   {
    "nome": "Hex-5-en-2-ona",
    "slug": "c_hex_5_en_2_ona",
    "formula": "C₆H₁₀O",
    "padrao": "6 sinais, dois deles de alceno (115 e 137)"
   }
  ],
  "explicacao": "IDH 2: C=O + anel. Só 4 sinais para 6 C (simetria do anel) e todos os outros C são CH₂ (negativos no DEPT-135)."
 },
 {
  "slug": "butanol1",
  "nome": "Butan-1-ol",
  "smiles": "CCCCO",
  "classe": "Álcool",
  "formula": "C₄H₁₀O",
  "formulaTxt": "C4H10O",
  "IDH": 0,
  "nC": 4,
  "nH": 10,
  "mhz": 75,
  "sinais": [
   {
    "d": 62.6,
    "tipo": "CH2",
    "n": 1,
    "rot": "CH₂OH"
   },
   {
    "d": 35.0,
    "tipo": "CH2",
    "n": 1,
    "rot": "CH₂"
   },
   {
    "d": 19.0,
    "tipo": "CH2",
    "n": 1,
    "rot": "CH₂"
   },
   {
    "d": 13.9,
    "tipo": "CH3",
    "n": 1,
    "rot": "CH₃"
   }
  ],
  "diag": {
   "i": 0,
   "opcoes": [
    "C sp³ ligado a oxigênio (C–O de álcool, éter ou éster: 40–80 ppm).",
    "C sp³ sem átomo eletronegativo por perto (8–55 ppm).",
    "C sp³ ligado a cloro (C–Cl: 35–80 ppm).",
    "C de alcino, C≡C (65–90 ppm)."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Butan-1-ol",
    "slug": "butanol1",
    "formula": "C₄H₁₀O",
    "padrao": ""
   },
   {
    "nome": "Butan-2-ol",
    "slug": "c_butan_2_ol",
    "formula": "C₄H₁₀O",
    "padrao": "4 sinais, mas o C–O é um CH (69)"
   },
   {
    "nome": "2-Metilpropan-1-ol",
    "slug": "c_2_metilpropan_1_ol",
    "formula": "C₄H₁₀O",
    "padrao": "3 sinais: dois CH₃ equivalentes"
   },
   {
    "nome": "Éter dietílico",
    "slug": "c_eter_dietilico",
    "formula": "C₄H₁₀O",
    "padrao": "2 sinais (simetria)"
   }
  ],
  "explicacao": "IDH 0 com um O: álcool ou éter. 4 sinais (sem simetria); o C–O em 62,6 é um CH₂ (negativo no DEPT-135): álcool primário linear."
 },
 {
  "slug": "butanol2",
  "nome": "Butan-2-ol",
  "smiles": "CCC(C)O",
  "classe": "Álcool",
  "formula": "C₄H₁₀O",
  "formulaTxt": "C4H10O",
  "IDH": 0,
  "nC": 4,
  "nH": 10,
  "mhz": 75,
  "sinais": [
   {
    "d": 69.2,
    "tipo": "CH",
    "n": 1,
    "rot": "CHOH"
   },
   {
    "d": 32.0,
    "tipo": "CH2",
    "n": 1,
    "rot": "CH₂"
   },
   {
    "d": 22.8,
    "tipo": "CH3",
    "n": 1,
    "rot": "CH₃"
   },
   {
    "d": 10.0,
    "tipo": "CH3",
    "n": 1,
    "rot": "CH₃"
   }
  ],
  "diag": {
   "i": 0,
   "opcoes": [
    "C sp³ ligado a oxigênio (C–O de álcool, éter ou éster: 40–80 ppm).",
    "C sp³ sem átomo eletronegativo por perto (8–55 ppm).",
    "C de alcino, C≡C (65–90 ppm).",
    "C sp³ ligado a cloro (C–Cl: 35–80 ppm)."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Butan-2-ol",
    "slug": "butanol2",
    "formula": "C₄H₁₀O",
    "padrao": ""
   },
   {
    "nome": "Butan-1-ol",
    "slug": "c_butan_1_ol",
    "formula": "C₄H₁₀O",
    "padrao": "4 sinais, mas o C–O é um CH₂ (62,6)"
   },
   {
    "nome": "2-Metilpropan-2-ol",
    "slug": "c_2_metilpropan_2_ol",
    "formula": "C₄H₁₀O",
    "padrao": "2 sinais; o C–O é quaternário"
   },
   {
    "nome": "Éter dietílico",
    "slug": "c_eter_dietilico",
    "formula": "C₄H₁₀O",
    "padrao": "2 sinais (simetria)"
   }
  ],
  "explicacao": "O C–O em 69,2 aparece no DEPT-90: é um CH, álcool secundário. Dois CH₃ diferentes e um CH₂."
 },
 {
  "slug": "tercbutanol",
  "nome": "2-Metilpropan-2-ol (terc-butanol)",
  "smiles": "CC(C)(C)O",
  "classe": "Álcool",
  "formula": "C₄H₁₀O",
  "formulaTxt": "C4H10O",
  "IDH": 0,
  "nC": 4,
  "nH": 10,
  "mhz": 75,
  "sinais": [
   {
    "d": 69.1,
    "tipo": "C",
    "n": 1,
    "rot": "C–OH"
   },
   {
    "d": 31.3,
    "tipo": "CH3",
    "n": 3,
    "rot": "(CH₃)₃"
   }
  ],
  "diag": {
   "i": 0,
   "opcoes": [
    "C sp³ ligado a oxigênio (C–O de álcool, éter ou éster: 40–80 ppm).",
    "C de alcino, C≡C (65–90 ppm).",
    "C sp³ sem átomo eletronegativo por perto (8–55 ppm).",
    "C sp³ ligado a cloro (C–Cl: 35–80 ppm)."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "2-Metilpropan-2-ol (terc-butanol)",
    "slug": "tercbutanol",
    "formula": "C₄H₁₀O",
    "padrao": ""
   },
   {
    "nome": "Butan-2-ol",
    "slug": "c_butan_2_ol",
    "formula": "C₄H₁₀O",
    "padrao": "4 sinais; o C–O é um CH"
   },
   {
    "nome": "2-Metilpropan-1-ol",
    "slug": "c_2_metilpropan_1_ol",
    "formula": "C₄H₁₀O",
    "padrao": "3 sinais; o C–O é um CH₂"
   },
   {
    "nome": "Éter dietílico",
    "slug": "c_eter_dietilico",
    "formula": "C₄H₁₀O",
    "padrao": "2 sinais, mas o C–O é um CH₂ (65,9)"
   }
  ],
  "explicacao": "4 C, só 2 sinais: três CH₃ equivalentes. O C–O em 69 some no DEPT: carbono quaternário, álcool terciário."
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
  "mhz": 75,
  "sinais": [
   {
    "d": 69.7,
    "tipo": "CH2",
    "n": 1,
    "rot": "CH₂OH"
   },
   {
    "d": 30.9,
    "tipo": "CH",
    "n": 1,
    "rot": "CH"
   },
   {
    "d": 18.9,
    "tipo": "CH3",
    "n": 2,
    "rot": "(CH₃)₂"
   }
  ],
  "diag": {
   "i": 0,
   "opcoes": [
    "C sp³ ligado a oxigênio (C–O de álcool, éter ou éster: 40–80 ppm).",
    "C sp³ sem átomo eletronegativo por perto (8–55 ppm).",
    "C sp³ ligado a cloro (C–Cl: 35–80 ppm).",
    "C de alceno, C=C (100–150 ppm)."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "2-Metilpropan-1-ol",
    "slug": "isobutanol",
    "formula": "C₄H₁₀O",
    "padrao": ""
   },
   {
    "nome": "Butan-1-ol",
    "slug": "c_butan_1_ol",
    "formula": "C₄H₁₀O",
    "padrao": "4 sinais (sem simetria)"
   },
   {
    "nome": "2-Metilpropan-2-ol",
    "slug": "c_2_metilpropan_2_ol",
    "formula": "C₄H₁₀O",
    "padrao": "2 sinais; C–O quaternário"
   },
   {
    "nome": "Butan-2-ol",
    "slug": "c_butan_2_ol",
    "formula": "C₄H₁₀O",
    "padrao": "4 sinais; C–O é um CH"
   }
  ],
  "explicacao": "3 sinais para 4 C: dois CH₃ equivalentes ligados a um CH. O C–O em 69,7 é um CH₂ (negativo no DEPT-135)."
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
  "mhz": 75,
  "sinais": [
   {
    "d": 65.9,
    "tipo": "CH2",
    "n": 2,
    "rot": "OCH₂"
   },
   {
    "d": 15.4,
    "tipo": "CH3",
    "n": 2,
    "rot": "CH₃"
   }
  ],
  "diag": {
   "i": 0,
   "opcoes": [
    "C sp³ ligado a oxigênio (C–O de álcool, éter ou éster: 40–80 ppm).",
    "C sp³ sem átomo eletronegativo por perto (8–55 ppm).",
    "C de alcino, C≡C (65–90 ppm).",
    "C sp³ ligado a cloro (C–Cl: 35–80 ppm)."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Éter dietílico",
    "slug": "eter_dietilico",
    "formula": "C₄H₁₀O",
    "padrao": ""
   },
   {
    "nome": "Butan-1-ol",
    "slug": "c_butan_1_ol",
    "formula": "C₄H₁₀O",
    "padrao": "4 sinais (sem simetria)"
   },
   {
    "nome": "2-Metilpropan-2-ol",
    "slug": "c_2_metilpropan_2_ol",
    "formula": "C₄H₁₀O",
    "padrao": "2 sinais, mas o C–O é quaternário"
   },
   {
    "nome": "Metil propil éter",
    "slug": "c_metil_propil_eter",
    "formula": "C₄H₁₀O",
    "padrao": "4 sinais, dois deles C–O (CH₂ e CH₃)"
   }
  ],
  "explicacao": "4 C e só 2 sinais: dois etilas idênticos ligados ao mesmo O. O CH₂ em 65,9 está ligado ao oxigênio."
 },
 {
  "slug": "tolueno",
  "nome": "Tolueno",
  "smiles": "Cc1ccccc1",
  "classe": "Aromático",
  "formula": "C₇H₈",
  "formulaTxt": "C7H8",
  "IDH": 4,
  "nC": 7,
  "nH": 8,
  "mhz": 75,
  "sinais": [
   {
    "d": 137.9,
    "tipo": "C",
    "n": 1,
    "rot": "C-1 (ipso)"
   },
   {
    "d": 129.1,
    "tipo": "CH",
    "n": 2,
    "rot": "C-2/6 (orto)"
   },
   {
    "d": 128.3,
    "tipo": "CH",
    "n": 2,
    "rot": "C-3/5 (meta)"
   },
   {
    "d": 125.4,
    "tipo": "CH",
    "n": 1,
    "rot": "C-4 (para)"
   },
   {
    "d": 21.5,
    "tipo": "CH3",
    "n": 1,
    "rot": "CH₃"
   }
  ],
  "diag": {
   "i": 0,
   "opcoes": [
    "C aromático sem H (ipso ao CH₃): região 110–175 e some no DEPT.",
    "C=O de ácido carboxílico, éster ou amida (155–185 ppm).",
    "C de nitrila, C≡N (110–140 ppm).",
    "C sp³ ligado a oxigênio (C–O de álcool, éter ou éster: 40–80 ppm)."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Tolueno",
    "slug": "tolueno",
    "formula": "C₇H₈",
    "padrao": ""
   },
   {
    "nome": "Cicloepta-1,3,5-trieno",
    "slug": "c_cicloepta_1_3_5_trieno",
    "formula": "C₇H₈",
    "padrao": "4 sinais: três CH de alceno e um CH₂ em 28"
   },
   {
    "nome": "Benzeno",
    "slug": "c_benzeno",
    "formula": "C₆H₆",
    "padrao": "1 único sinal (6 C equivalentes)"
   },
   {
    "nome": "Etilbenzeno",
    "slug": "c_etilbenzeno",
    "formula": "C₈H₁₀",
    "padrao": "6 sinais e fórmula C₈H₁₀"
   }
  ],
  "explicacao": "4 sinais aromáticos (anel monossubstituído: ipso, orto, meta, para) e um CH₃ em 21,5. Pela tabela de incrementos: ipso = 128,5 + 9,3 = 137,8."
 },
 {
  "slug": "pxileno",
  "nome": "p-Xileno",
  "smiles": "Cc1ccc(C)cc1",
  "classe": "Aromático",
  "formula": "C₈H₁₀",
  "formulaTxt": "C8H10",
  "IDH": 4,
  "nC": 8,
  "nH": 10,
  "mhz": 75,
  "sinais": [
   {
    "d": 134.7,
    "tipo": "C",
    "n": 2,
    "rot": "C-1/4"
   },
   {
    "d": 129.1,
    "tipo": "CH",
    "n": 4,
    "rot": "C-2/3/5/6"
   },
   {
    "d": 21.0,
    "tipo": "CH3",
    "n": 2,
    "rot": "CH₃"
   }
  ],
  "diag": {
   "i": 0,
   "opcoes": [
    "C aromático sem H (ipso): região 110–175 e some no DEPT.",
    "C=O de ácido carboxílico, éster ou amida (155–185 ppm).",
    "C de nitrila, C≡N (110–140 ppm).",
    "C de alcino, C≡C (65–90 ppm)."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "p-Xileno",
    "slug": "pxileno",
    "formula": "C₈H₁₀",
    "padrao": ""
   },
   {
    "nome": "o-Xileno",
    "slug": "c_o_xileno",
    "formula": "C₈H₁₀",
    "padrao": "4 sinais (um C e dois CH aromáticos)"
   },
   {
    "nome": "m-Xileno",
    "slug": "c_m_xileno",
    "formula": "C₈H₁₀",
    "padrao": "5 sinais (um C e três CH aromáticos)"
   },
   {
    "nome": "Etilbenzeno",
    "slug": "c_etilbenzeno",
    "formula": "C₈H₁₀",
    "padrao": "6 sinais, com um CH₂ em 29"
   }
  ],
  "explicacao": "8 carbonos e só 3 sinais: simetria máxima. Um C e um CH aromáticos e um CH₃: anel para-dissubstituído com dois grupos iguais."
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
  "mhz": 75,
  "sinais": [
   {
    "d": 144.3,
    "tipo": "C",
    "n": 1,
    "rot": "C-1"
   },
   {
    "d": 128.4,
    "tipo": "CH",
    "n": 2,
    "rot": "C-3/5"
   },
   {
    "d": 127.9,
    "tipo": "CH",
    "n": 2,
    "rot": "C-2/6"
   },
   {
    "d": 125.7,
    "tipo": "CH",
    "n": 1,
    "rot": "C-4"
   },
   {
    "d": 29.0,
    "tipo": "CH2",
    "n": 1,
    "rot": "CH₂"
   },
   {
    "d": 15.6,
    "tipo": "CH3",
    "n": 1,
    "rot": "CH₃"
   }
  ],
  "diag": {
   "i": 4,
   "opcoes": [
    "C sp³ ligado ao anel (benzílico): continua na região sp³, um pouco desblindado.",
    "C sp³ ligado a oxigênio (C–O de álcool, éter ou éster: 40–80 ppm).",
    "C sp³ ligado a cloro (C–Cl: 35–80 ppm).",
    "C de alcino, C≡C (65–90 ppm)."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Etilbenzeno",
    "slug": "etilbenzeno",
    "formula": "C₈H₁₀",
    "padrao": ""
   },
   {
    "nome": "p-Xileno",
    "slug": "c_p_xileno",
    "formula": "C₈H₁₀",
    "padrao": "3 sinais (simetria)"
   },
   {
    "nome": "o-Xileno",
    "slug": "c_o_xileno",
    "formula": "C₈H₁₀",
    "padrao": "4 sinais, sem CH₂"
   },
   {
    "nome": "m-Xileno",
    "slug": "c_m_xileno",
    "formula": "C₈H₁₀",
    "padrao": "5 sinais, sem CH₂"
   }
  ],
  "explicacao": "6 sinais: anel monossubstituído (4 sinais) + CH₂ (negativo no DEPT-135, 29,0) + CH₃ (15,6). Os xilenos não têm CH₂."
 },
 {
  "slug": "mxileno",
  "nome": "m-Xileno",
  "smiles": "Cc1cccc(C)c1",
  "classe": "Aromático",
  "formula": "C₈H₁₀",
  "formulaTxt": "C8H10",
  "IDH": 4,
  "nC": 8,
  "nH": 10,
  "mhz": 75,
  "sinais": [
   {
    "d": 137.7,
    "tipo": "C",
    "n": 2,
    "rot": "C-1/3"
   },
   {
    "d": 130.0,
    "tipo": "CH",
    "n": 1,
    "rot": "C-2"
   },
   {
    "d": 128.3,
    "tipo": "CH",
    "n": 1,
    "rot": "C-5"
   },
   {
    "d": 126.2,
    "tipo": "CH",
    "n": 2,
    "rot": "C-4/6"
   },
   {
    "d": 21.3,
    "tipo": "CH3",
    "n": 2,
    "rot": "CH₃"
   }
  ],
  "diag": {
   "i": 0,
   "opcoes": [
    "C aromático sem H (ipso): região 110–175 e some no DEPT.",
    "C=O de ácido carboxílico, éster ou amida (155–185 ppm).",
    "C de nitrila, C≡N (110–140 ppm).",
    "C de alceno, C=C (100–150 ppm)."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "m-Xileno",
    "slug": "mxileno",
    "formula": "C₈H₁₀",
    "padrao": ""
   },
   {
    "nome": "p-Xileno",
    "slug": "c_p_xileno",
    "formula": "C₈H₁₀",
    "padrao": "3 sinais"
   },
   {
    "nome": "o-Xileno",
    "slug": "c_o_xileno",
    "formula": "C₈H₁₀",
    "padrao": "4 sinais"
   },
   {
    "nome": "Etilbenzeno",
    "slug": "c_etilbenzeno",
    "formula": "C₈H₁₀",
    "padrao": "6 sinais, com um CH₂"
   }
  ],
  "explicacao": "É o exemplo da aula: C1 = 128,5 + 9,3 − 0,1 = 137,7; C2 = 128,5 + 0,7 + 0,7 = 129,9; C4 = 128,5 + 0,7 − 2,9 = 126,3; C5 = 128,5 − 0,1 − 0,1 = 128,3."
 },
 {
  "slug": "clorobutano",
  "nome": "1-Clorobutano",
  "smiles": "CCCCCl",
  "classe": "Haleto de alquila",
  "formula": "C₄H₉Cl",
  "formulaTxt": "C4H9Cl",
  "IDH": 0,
  "nC": 4,
  "nH": 9,
  "mhz": 75,
  "sinais": [
   {
    "d": 44.7,
    "tipo": "CH2",
    "n": 1,
    "rot": "CH₂Cl"
   },
   {
    "d": 34.7,
    "tipo": "CH2",
    "n": 1,
    "rot": "CH₂"
   },
   {
    "d": 20.2,
    "tipo": "CH2",
    "n": 1,
    "rot": "CH₂"
   },
   {
    "d": 13.4,
    "tipo": "CH3",
    "n": 1,
    "rot": "CH₃"
   }
  ],
  "diag": {
   "i": 0,
   "opcoes": [
    "C sp³ ligado ao cloro (C–Cl: 35–80 ppm).",
    "C sp³ ligado a oxigênio (C–O de álcool, éter ou éster: 40–80 ppm).",
    "C de alcino, C≡C (65–90 ppm).",
    "C sp³ sem átomo eletronegativo por perto (8–55 ppm)."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "1-Clorobutano",
    "slug": "clorobutano",
    "formula": "C₄H₉Cl",
    "padrao": ""
   },
   {
    "nome": "2-Clorobutano",
    "slug": "c_2_clorobutano",
    "formula": "C₄H₉Cl",
    "padrao": "4 sinais; o C–Cl é um CH (~60)"
   },
   {
    "nome": "1-Cloro-2-metilpropano",
    "slug": "c_1_cloro_2_metilpropano",
    "formula": "C₄H₉Cl",
    "padrao": "3 sinais: dois CH₃ equivalentes"
   },
   {
    "nome": "2-Cloro-2-metilpropano",
    "slug": "c_2_cloro_2_metilpropano",
    "formula": "C₄H₉Cl",
    "padrao": "2 sinais; o C–Cl é quaternário (67)"
   }
  ],
  "explicacao": "4 sinais, três CH₂ (negativos no DEPT-135) e um CH₃: cadeia linear. O CH₂ em 44,7 é o ligado ao Cl."
 },
 {
  "slug": "acido_metilpentenoico",
  "nome": "Ácido 2-metil-2-pentenoico",
  "smiles": "CC/C=C(\\C)C(=O)O",
  "classe": "Ácido insaturado",
  "formula": "C₆H₁₀O₂",
  "formulaTxt": "C6H10O2",
  "IDH": 2,
  "nC": 6,
  "nH": 10,
  "mhz": 75,
  "sinais": [
   {
    "d": 174.19,
    "tipo": "C",
    "n": 1,
    "rot": "COOH"
   },
   {
    "d": 146.71,
    "tipo": "CH",
    "n": 1,
    "rot": "=CH"
   },
   {
    "d": 126.62,
    "tipo": "C",
    "n": 1,
    "rot": "=C(CH₃)"
   },
   {
    "d": 22.24,
    "tipo": "CH2",
    "n": 1,
    "rot": "CH₂"
   },
   {
    "d": 12.89,
    "tipo": "CH3",
    "n": 1,
    "rot": "CH₃"
   },
   {
    "d": 11.79,
    "tipo": "CH3",
    "n": 1,
    "rot": "CH₃"
   }
  ],
  "diag": {
   "i": 1,
   "opcoes": [
    "C de alceno, C=C (100–150 ppm).",
    "C aromático (110–175 ppm).",
    "C=O de ácido carboxílico, éster ou amida (155–185 ppm).",
    "C de nitrila, C≡N (110–140 ppm)."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Ácido 2-metil-2-pentenoico",
    "slug": "acido_metilpentenoico",
    "formula": "C₆H₁₀O₂",
    "padrao": ""
   },
   {
    "nome": "Ácido hex-2-enoico",
    "slug": "c_acido_hex_2_enoico",
    "formula": "C₆H₁₀O₂",
    "padrao": "6 sinais, mas os dois C=C são CH (dois sinais no DEPT-90)"
   },
   {
    "nome": "Ácido ciclopentanocarboxílico",
    "slug": "c_acido_ciclopentanocarboxilico",
    "formula": "C₆H₁₀O₂",
    "padrao": "4 sinais (simetria) e nenhum C=C"
   },
   {
    "nome": "Metacrilato de etila",
    "slug": "c_metacrilato_de_etila",
    "formula": "C₆H₁₀O₂",
    "padrao": "6 sinais, com =CH₂ (negativo) e OCH₂ em 60"
   }
  ],
  "explicacao": "É o problema da aula (C₆H₁₀O₂, IDH 2): C=O em 174 + C=C (um CH em 146,7 e um C em 126,6). DEPT: dois CH₃, um CH₂. Estrutura: CH₃CH₂CH=C(CH₃)COOH."
 },
 {
  "slug": "metacrilato_metila",
  "nome": "Metacrilato de metila",
  "smiles": "COC(=O)C(C)=C",
  "classe": "Éster insaturado",
  "formula": "C₅H₈O₂",
  "formulaTxt": "C5H8O2",
  "IDH": 2,
  "nC": 5,
  "nH": 8,
  "mhz": 75,
  "sinais": [
   {
    "d": 167.8,
    "tipo": "C",
    "n": 1,
    "rot": "C=O"
   },
   {
    "d": 136.3,
    "tipo": "C",
    "n": 1,
    "rot": "=C"
   },
   {
    "d": 125.3,
    "tipo": "CH2",
    "n": 1,
    "rot": "=CH₂"
   },
   {
    "d": 51.7,
    "tipo": "CH3",
    "n": 1,
    "rot": "OCH₃"
   },
   {
    "d": 18.3,
    "tipo": "CH3",
    "n": 1,
    "rot": "CH₃"
   }
  ],
  "diag": {
   "i": 2,
   "opcoes": [
    "C de alceno (C=C, 100–150); negativo no DEPT-135: é um =CH₂.",
    "C aromático (110–175 ppm).",
    "C sp³ ligado a oxigênio (C–O de álcool, éter ou éster: 40–80 ppm).",
    "C de nitrila, C≡N (110–140 ppm)."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Metacrilato de metila",
    "slug": "metacrilato_metila",
    "formula": "C₅H₈O₂",
    "padrao": ""
   },
   {
    "nome": "Acrilato de etila",
    "slug": "c_acrilato_de_etila",
    "formula": "C₅H₈O₂",
    "padrao": "5 sinais, com um CH= (DEPT-90) e um OCH₂ em 60"
   },
   {
    "nome": "Propanoato de vinila",
    "slug": "c_propanoato_de_vinila",
    "formula": "C₅H₈O₂",
    "padrao": "5 sinais: =CH–O em 141 e =CH₂ muito blindado (97)"
   },
   {
    "nome": "Crotonato de metila",
    "slug": "c_crotonato_de_metila",
    "formula": "C₅H₈O₂",
    "padrao": "5 sinais, com dois CH de alceno"
   }
  ],
  "explicacao": "É o exercício do fim da aula (C₅H₈O₂): C=O de éster (167,8), um C= (136,3) e um =CH₂ (125,3), um OCH₃ (51,7) e um CH₃ ligado ao alceno (18,3)."
 },
 {
  "slug": "acetato_vinila",
  "nome": "Acetato de vinila",
  "smiles": "CC(=O)OC=C",
  "classe": "Éster insaturado",
  "formula": "C₄H₆O₂",
  "formulaTxt": "C4H6O2",
  "IDH": 2,
  "nC": 4,
  "nH": 6,
  "mhz": 75,
  "sinais": [
   {
    "d": 167.9,
    "tipo": "C",
    "n": 1,
    "rot": "C=O"
   },
   {
    "d": 141.2,
    "tipo": "CH",
    "n": 1,
    "rot": "=CH–O"
   },
   {
    "d": 97.4,
    "tipo": "CH2",
    "n": 1,
    "rot": "=CH₂"
   },
   {
    "d": 20.6,
    "tipo": "CH3",
    "n": 1,
    "rot": "CH₃"
   }
  ],
  "diag": {
   "i": 2,
   "opcoes": [
    "C de alceno muito blindado: o O doa elétrons por ressonância ao =CH₂ (~97 ppm).",
    "C sp³ ligado a oxigênio (C–O de álcool, éter ou éster: 40–80 ppm).",
    "C de alcino, C≡C (65–90 ppm).",
    "C aromático (110–175 ppm)."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Acetato de vinila",
    "slug": "acetato_vinila",
    "formula": "C₄H₆O₂",
    "padrao": ""
   },
   {
    "nome": "Acrilato de metila",
    "slug": "c_acrilato_de_metila",
    "formula": "C₄H₆O₂",
    "padrao": "4 sinais, com um OCH₃ em 51,6 e =CH₂ em 130"
   },
   {
    "nome": "γ-Butirolactona",
    "slug": "c_butirolactona",
    "formula": "C₄H₆O₂",
    "padrao": "4 sinais e nenhum C=C"
   },
   {
    "nome": "Ácido crotônico",
    "slug": "c_acido_crotonico",
    "formula": "C₄H₆O₂",
    "padrao": "4 sinais, com dois CH de alceno"
   }
  ],
  "explicacao": "C=O de éster (167,9), um =CH ligado ao O (141,2, desblindado) e um =CH₂ (97,4, blindado pela doação de elétrons do O). O CH₃ (20,6) é do acetato."
 },
 {
  "slug": "acetofenona",
  "nome": "Acetofenona",
  "smiles": "CC(=O)c1ccccc1",
  "classe": "Cetona aromática",
  "formula": "C₈H₈O",
  "formulaTxt": "C8H8O",
  "IDH": 5,
  "nC": 8,
  "nH": 8,
  "mhz": 75,
  "sinais": [
   {
    "d": 198.1,
    "tipo": "C",
    "n": 1,
    "rot": "C=O"
   },
   {
    "d": 137.1,
    "tipo": "C",
    "n": 1,
    "rot": "C-1"
   },
   {
    "d": 133.1,
    "tipo": "CH",
    "n": 1,
    "rot": "C-4"
   },
   {
    "d": 128.6,
    "tipo": "CH",
    "n": 2,
    "rot": "C-3/5"
   },
   {
    "d": 128.3,
    "tipo": "CH",
    "n": 2,
    "rot": "C-2/6"
   },
   {
    "d": 26.6,
    "tipo": "CH3",
    "n": 1,
    "rot": "CH₃"
   }
  ],
  "diag": {
   "i": 0,
   "opcoes": [
    "C=O de aldeído ou cetona (185–220 ppm).",
    "C=O de ácido carboxílico, éster ou amida (155–185 ppm).",
    "C aromático (110–175 ppm).",
    "C de alceno, C=C (100–150 ppm)."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Acetofenona",
    "slug": "acetofenona",
    "formula": "C₈H₈O",
    "padrao": ""
   },
   {
    "nome": "Fenilacetaldeído",
    "slug": "c_fenilacetaldeido",
    "formula": "C₈H₈O",
    "padrao": "6 sinais; a C=O (~199) é um CH e há um CH₂ em 50"
   },
   {
    "nome": "4-Metilbenzaldeído",
    "slug": "c_4_metilbenzaldeido",
    "formula": "C₈H₈O",
    "padrao": "6 sinais; a C=O (192) é um CH (DEPT-90)"
   },
   {
    "nome": "Óxido de estireno",
    "slug": "c_oxido_de_estireno",
    "formula": "C₈H₈O",
    "padrao": "nenhuma C=O; dois C–O em 51 e 52"
   }
  ],
  "explicacao": "C=O quaternária em 198 (cetona conjugada com o anel). Anel monossubstituído (4 sinais) e um CH₃ α à carbonila (26,6)."
 },
 {
  "slug": "diclorobenzeno13",
  "nome": "1,3-Diclorobenzeno",
  "smiles": "Clc1cccc(Cl)c1",
  "classe": "Aromático",
  "formula": "C₆H₄Cl₂",
  "formulaTxt": "C6H4Cl2",
  "IDH": 4,
  "nC": 6,
  "nH": 4,
  "mhz": 75,
  "sinais": [
   {
    "d": 135.0,
    "tipo": "C",
    "n": 2,
    "rot": "C-1/3"
   },
   {
    "d": 130.5,
    "tipo": "CH",
    "n": 1,
    "rot": "C-5"
   },
   {
    "d": 128.7,
    "tipo": "CH",
    "n": 1,
    "rot": "C-2"
   },
   {
    "d": 126.9,
    "tipo": "CH",
    "n": 2,
    "rot": "C-4/6"
   }
  ],
  "diag": {
   "i": 0,
   "opcoes": [
    "C aromático ligado ao Cl (ipso): some no DEPT e é desblindado pelo Cl.",
    "C sp³ ligado a cloro (C–Cl: 35–80 ppm).",
    "C=O de ácido carboxílico, éster ou amida (155–185 ppm).",
    "C de alceno, C=C (100–150 ppm)."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "1,3-Diclorobenzeno",
    "slug": "diclorobenzeno13",
    "formula": "C₆H₄Cl₂",
    "padrao": ""
   },
   {
    "nome": "1,2-Diclorobenzeno",
    "slug": "c_1_2_diclorobenzeno",
    "formula": "C₆H₄Cl₂",
    "padrao": "3 sinais"
   },
   {
    "nome": "1,4-Diclorobenzeno",
    "slug": "c_1_4_diclorobenzeno",
    "formula": "C₆H₄Cl₂",
    "padrao": "2 sinais"
   },
   {
    "nome": "Clorobenzeno",
    "slug": "c_clorobenzeno",
    "formula": "C₆H₅Cl",
    "padrao": "4 sinais, mas fórmula C₆H₅Cl"
   }
  ],
  "explicacao": "É o exemplo da aula: orto dá 3 sinais, meta dá 4 e para dá 2. Aqui há 4 sinais, um deles C (ligado ao Cl): 1,3-diclorobenzeno."
 },
 {
  "slug": "cicloexanol",
  "nome": "Cicloexanol",
  "smiles": "OC1CCCCC1",
  "classe": "Álcool",
  "formula": "C₆H₁₂O",
  "formulaTxt": "C6H12O",
  "IDH": 1,
  "nC": 6,
  "nH": 12,
  "mhz": 75,
  "sinais": [
   {
    "d": 70.3,
    "tipo": "CH",
    "n": 1,
    "rot": "CHOH"
   },
   {
    "d": 35.5,
    "tipo": "CH2",
    "n": 2,
    "rot": "C-2/6"
   },
   {
    "d": 25.5,
    "tipo": "CH2",
    "n": 1,
    "rot": "C-4"
   },
   {
    "d": 24.2,
    "tipo": "CH2",
    "n": 2,
    "rot": "C-3/5"
   }
  ],
  "diag": {
   "i": 0,
   "opcoes": [
    "C sp³ ligado a oxigênio (C–O de álcool, éter ou éster: 40–80 ppm).",
    "C sp³ sem átomo eletronegativo por perto (8–55 ppm).",
    "C sp³ ligado a cloro (C–Cl: 35–80 ppm).",
    "C de alcino, C≡C (65–90 ppm)."
   ],
   "certa": 0
  },
  "candidatos": [
   {
    "nome": "Cicloexanol",
    "slug": "cicloexanol",
    "formula": "C₆H₁₂O",
    "padrao": ""
   },
   {
    "nome": "Hexanal",
    "slug": "c_hexanal",
    "formula": "C₆H₁₂O",
    "padrao": "6 sinais, com CHO em 203"
   },
   {
    "nome": "2-Hexanona",
    "slug": "c_2_hexanona",
    "formula": "C₆H₁₂O",
    "padrao": "6 sinais, com C=O em 209"
   },
   {
    "nome": "Ciclopentilmetanol",
    "slug": "c_ciclopentilmetanol",
    "formula": "C₆H₁₂O",
    "padrao": "4 sinais, mas o C–O é um CH₂ (67)"
   }
  ],
  "explicacao": "IDH 1 sem C=O nem C=C: um anel. 4 sinais para 6 C (simetria do anel); o C–O em 70,3 é um CH."
 }
];
