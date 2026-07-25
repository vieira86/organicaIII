/* ============================================================
   Metadados dos tópicos da disciplina
   Química Orgânica II — Licenciatura em Química, IFRO Ji-Paraná
   ============================================================ */

const TOPICS = [
  {
    id: "condensacao",
    title: "Condensação e Adição Conjugada",
    short: "Condensação Aldólica",
    icon: "🧪",
    description: "Reações de condensação e adição conjugada (Michael) de compostos carbonílicos."
  },
  {
    id: "aminas",
    title: "Reações de Aminas",
    short: "Aminas",
    icon: "🧬",
    description: "Basicidade, síntese e reatividade de aminas em química orgânica."
  },
  {
    id: "heterociclicos",
    title: "Compostos Heterocíclicos",
    short: "Heterocíclicos",
    icon: "⚛️",
    description: "Aromaticidade e reatividade de furano, pirrol, tiofeno, piridina e derivados."
  },
  {
    id: "uv",
    title: "Espectroscopia no Ultravioleta",
    short: "UV-Vis",
    icon: "🔆",
    description: "Transições eletrônicas, cromóforos, regras de Woodward-Fieser."
  },
  {
    id: "ir",
    title: "Espectroscopia no Infravermelho",
    short: "Infravermelho",
    icon: "🌡️",
    description: "Vibrações moleculares e identificação de grupos funcionais por IV."
  },
  {
    id: "ms",
    title: "Espectrometria de Massas",
    short: "Massas (EM)",
    icon: "💥",
    description: "Ionização, íon molecular, padrões de fragmentação e rearranjos."
  },
  {
    id: "rmn",
    title: "Ressonância Magnética Nuclear",
    short: "RMN",
    icon: "🧲",
    description: "Deslocamento químico, acoplamento spin-spin, RMN de ¹H e ¹³C."
  },
  {
    id: "praticas",
    title: "Atividades Práticas: Elucidação Estrutural",
    short: "Práticas",
    icon: "🔬",
    description: "Integração de IV, EM e RMN para determinar estruturas de compostos desconhecidos."
  }
];

function getTopic(id){
  return TOPICS.find(t => t.id === id);
}
