/* ============================================================
   Vídeos reais do YouTube por tópico (curadoria manual)
   Química Orgânica II — Licenciatura em Química, IFRO Ji-Paraná
   ============================================================ */

const VIDEOS = {

  condensacao: [
    { id: "rgrB5PloSGI", title: "Condensação de Aldol", channel: "Khan Academy Brasil", desc: "Introdução ao mecanismo: o enolato reage com outro composto carbonílico formando um β-hidroxicarbonílico." },
    { id: "Stdcl0odJ3g", title: "Condensação de aldol misturada (cruzada)", channel: "Khan Academy Brasil", desc: "Como prever o produto de uma condensação aldólica cruzada e como controlar a seletividade." },
    { id: "258hwIiS64w", title: "Química Orgânica #23 — Condensação aldólica", channel: "PET Conexões de Saberes", desc: "Aula em português sobre o mecanismo e aplicações da condensação aldólica." }
  ],

  aminas: [
    { id: "8vugezja_XY", title: "GQI 109 — Química Orgânica 2 — Aula 11: Aminas", channel: "GQI/UFV", desc: "Aula universitária cobrindo o grupo funcional amina, síntese e reatividade." },
    { id: "B8P3R3pLsd0", title: "Reações de Aminas com Ácido Nitroso e de SNAr", channel: "Canal universitário de Química Orgânica", desc: "Mecanismos de reação de aminas com ácido nitroso e formação de sais de diazônio." },
    { id: "jrIGfNu393M", title: "Funções Orgânicas Nitrogenadas: Amina, Amida e Nitrocompostos", channel: "Aula 08 — Química III", desc: "Classificação de aminas (1ª, 2ª, 3ª) e propriedades gerais dos compostos nitrogenados." }
  ],

  heterociclicos: [
    { id: "brootLJOWOI", title: "Compostos Orgânicos Heterocíclicos — Unidade I", channel: "Prof. Antonio Cantanhede Filho", desc: "Introdução aos compostos heterocíclicos no contexto da Licenciatura em Química." },
    { id: "kzvf52lBtpU", title: "Heterociclos aromáticos I", channel: "Khan Academy Brasil", desc: "Aromaticidade de anéis contendo heteroátomos: furano, pirrol e tiofeno." },
    { id: "iEIVQQzNR-Q", title: "Heterociclos aromáticos II", channel: "Khan Academy Brasil", desc: "Aromaticidade e basicidade do pirrol, imidazol e tiofeno." }
  ],

  uv: [
    { id: "TByxtwSBt1M", title: "Espectroscopia UV/Vis", channel: "Khan Academy Brasil", desc: "Fundamentos da espectroscopia UV-Vis e análise de moléculas com elétrons π e não ligantes." },
    { id: "1o3FDlQQuKk", title: "Análise Instrumental — Aula 05: Espectrofotometria UV-Vis", channel: "Univesp", desc: "Aula da Licenciatura em Química (Univesp) sobre espectroscopia óptica UV-Vis." },
    { id: "UCywfpr0ELI", title: "Espectroscopia UV-VIS: Aula 2 — Lei de Lambert-Beer e desvios", channel: "Canal universitário", desc: "Aplicação da Lei de Lambert-Beer e seus desvios na quantificação por UV-Vis." }
  ],

  ir: [
    { id: "0PG5E5h7cKM", title: "Introdução à espectroscopia infravermelha", channel: "Khan Academy Brasil", desc: "Princípios básicos: absorção de luz e vibração de ligações químicas." },
    { id: "BX3eba_3Ai0", title: "Prática de espectros de IR", channel: "Khan Academy Brasil", desc: "Exercícios práticos de identificação de compostos a partir de espectros de infravermelho." },
    { id: "fMRBZttlR1Y", title: "Análise Instrumental — Aula 06: Espectroscopia no Infravermelho", channel: "Univesp", desc: "Aula da Licenciatura em Química (Univesp) sobre fundamentos e aplicações do IV." }
  ],

  ms: [
    { id: "VFGtwiqyOvc", title: "Espectrometria de Massas — Vídeo 3: Fragmentações", channel: "Canal de Química Orgânica Instrumental", desc: "Padrões de fragmentação e interpretação de picos em espectros de massas." },
    { id: "XWkn4-k13Ko", title: "Fundamentos da espectrometria de massas e fontes de ionização", channel: "Canal universitário", desc: "Explicação dos princípios de ionização e detecção em espectrometria de massas." },
    { id: "8iK8FJ3WhXU", title: "Interpretando alguns espectros de massas — fragmentos", channel: "Canal de Química", desc: "Exercícios de interpretação de fragmentos comuns em espectros de massas." }
  ],

  rmn: [
    { id: "LLiW6ew29o8", title: "Introdução à RMN de próton", channel: "Khan Academy Brasil", desc: "Princípios físicos básicos da espectroscopia de RMN de hidrogênio." },
    { id: "J6VnfYWyee4", title: "Análise Instrumental — Aula 07: RMN", channel: "Univesp", desc: "Aula da Licenciatura em Química (Univesp) sobre ressonância magnética nuclear." },
    { id: "IIxKNzIaEz0", title: "Espectroscopia de RMN — Vídeo 1: Fundamentos da técnica", channel: "Canal de Química Orgânica Instrumental", desc: "Fundamentos físicos e instrumentais da técnica de RMN." }
  ],

  praticas: [
    { id: "btSw8HKMfw4", title: "Interpretação de espectros combinados (EM, IV, ¹H RMN e ¹³C RMN)", channel: "Canal de Química Orgânica", desc: "Exercício resolvido integrando as quatro técnicas para elucidação estrutural." },
    { id: "aeh1Hc5Nrjs", title: "Elucidação estrutural: Exercício resolvido (RMN e Infravermelho)", channel: "Canal de Química Orgânica", desc: "Resolução passo a passo de um problema de elucidação estrutural." },
    { id: "zjQpPwlYGQo", title: "RMN — Interpretando espectros de ¹H, ¹³C, COSY, HSQC e HMBC", channel: "Canal de Química Orgânica", desc: "Interpretação de espectros de RMN 1D e 2D para moléculas orgânicas." }
  ]

};
