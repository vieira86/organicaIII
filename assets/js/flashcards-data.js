/* ============================================================
   Banco de Flashcards por tópico
   Química Orgânica II — Licenciatura em Química, IFRO Ji-Paraná
   ============================================================ */

const FLASHCARDS = {

  condensacao: [
    { q: "O que é uma condensação aldólica?", a: "Reação entre duas moléculas carbonílicas (aldeído/cetona) catalisada por base ou ácido, em que um enolato ataca o carbono carbonílico de outra molécula, formando um β-hidroxialdeído ou β-hidroxicetona (aldol)." },
    { q: "Qual é o intermediário-chave formado sob catálise básica na condensação aldólica?", a: "O enolato, formado pela desprotonação do carbono α ao grupo carbonila." },
    { q: "O que ocorre na etapa de desidratação após a formação do aldol?", a: "Eliminação de água (via enolização) formando uma enona α,β-insaturada conjugada — a condensação aldólica completa (aldol + desidratação)." },
    { q: "O que é uma condensação aldólica cruzada (mista) e qual seu problema?", a: "Ocorre entre dois carbonílicos diferentes; sem controle, gera mistura de até 4 produtos. Controla-se usando um componente sem H α (ex. benzaldeído) ou formando o enolato antes de adicionar o outro reagente (LDA)." },
    { q: "O que é adição conjugada (adição de Michael)?", a: "Adição nucleofílica 1,4 de um nucleófilo (ex. enolato) à posição β de uma enona α,β-insaturada, em vez de adição direta 1,2 à carbonila." },
    { q: "Qual a diferença entre adição 1,2 e adição 1,4 em enonas?", a: "Adição 1,2 ocorre no carbono carbonílico (produz álcool alílico); adição 1,4 ocorre no carbono β, com a carga negativa deslocando-se para o oxigênio via ressonância, regenerando a carbonila após tautomerização." },
    { q: "O que é a anelação de Robinson?", a: "Sequência de adição de Michael seguida de condensação aldólica intramolecular, usada para construir cicloexenonas — muito empregada na síntese de esteroides e terpenos." },
    { q: "Por que enolatos estabilizados (malonato, acetoacetato) são bons doadores em adição de Michael?", a: "A carga negativa é deslocada por dois grupos carbonila vizinhos (dupla estabilização por ressonância), tornando o carbânion menos básico e mais seletivo para adição 1,4." },
    { q: "Qual organocatalisador é usado hoje para condensações aldólicas assimétricas?", a: "A prolina (e derivados), que atua via formação de enamina, promovendo aldóis enantiosseletivos (organocatálise)." },
    { q: "Como a condensação aldólica intramolecular pode formar anéis?", a: "Quando um dicarbonílico tem cadeia suficiente, o enolato de um lado ataca a carbonila do outro extremo da mesma molécula, formando preferencialmente anéis de 5 ou 6 membros." },
    { q: "Qual o papel do calor (Δ) na condensação aldólica clássica?", a: "Favorece a desidratação do aldol para formar a enona conjugada, termodinamicamente mais estável (conjugação estende a deslocalização eletrônica)." },
    { q: "Em uma adição conjugada com reagente de Gilman (R₂CuLi) a uma enona, qual regioquímica prevalece?", a: "Adição 1,4 seletiva — organocupratos são nucleófilos \"moles\", diferente dos organolítios/Grignard, que tendem à adição 1,2." }
  ],

  aminas: [
    { q: "Por que aminas são mais básicas que amidas?", a: "O par de elétrons do nitrogênio em amidas está deslocalizado por ressonância com a carbonila, tornando-o menos disponível; em aminas o par está livre e disponível para protonação." },
    { q: "Como o efeito indutivo de grupos alquila afeta a basicidade das aminas em fase gasosa vs. em água?", a: "Em fase gasosa, mais grupos alquila aumentam a basicidade; em água, aminas terciárias podem ser menos básicas devido a impedimento estérico na solvatação do íon amônio formado." },
    { q: "Como se prepara uma amina primária pela síntese de Gabriel?", a: "Ftalimida de potássio reage com haleto de alquila (SN2), seguida de hidrólise (ou hidrazinólise) para liberar a amina primária livre de contaminação por aminas secundárias/terciárias." },
    { q: "O que é a degradação de Hofmann de amidas?", a: "Amida primária + Br₂/NaOH forma uma amina primária com um carbono a menos, via rearranjo de nitreno/isocianato." },
    { q: "O que ocorre quando uma amina primária alifática reage com ácido nitroso (HNO₂)?", a: "Forma-se um sal de diazônio instável que se decompõe rapidamente liberando N₂ e gerando carbocátion, levando a mistura de álcoois, alcenos e haletos." },
    { q: "Por que sais de arenodiazônio (ArN₂⁺) são mais estáveis que os alifáticos?", a: "A carga positiva é estabilizada por ressonância com o anel aromático, permitindo isolamento a baixa temperatura e uso em substituição (Sandmeyer) e acoplamento azo." },
    { q: "O que é a reação de Sandmeyer?", a: "Conversão de um sal de arenodiazônio em haleto de arila (Cl, Br, CN) usando sais de cobre(I) (CuCl, CuBr, CuCN) como catalisador." },
    { q: "Como se distingue amina primária, secundária e terciária pelo teste de Hinsberg?", a: "Com cloreto de sulfonila: amina 1ª forma sulfonamida solúvel em base (N-H ácido); amina 2ª forma sulfonamida insolúvel em base; amina 3ª não reage (forma sal solúvel em meio ácido)." },
    { q: "O que é acoplamento azo e qual sua importância?", a: "Reação de um sal de diazônio aromático com um composto aromático ativado (fenol, anilina), formando um corante azo (–N=N–), muito usado na indústria de corantes." },
    { q: "Como alquilar seletivamente uma amina evitando superalquilação?", a: "Usando aminação redutiva (amina/amônia + aldeído/cetona + agente redutor como NaBH₃CN), que para na etapa desejada sem gerar mistura de aminas mais substituídas." },
    { q: "Qual a hibridização do nitrogênio na anilina e como isso afeta sua basicidade?", a: "Parcialmente sp², pois o par de elétrons se conjuga com o anel aromático, diminuindo a basicidade da anilina em relação a aminas alifáticas." },
    { q: "Como grupos retiradores de elétrons (NO₂) afetam a basicidade de anilinas substituídas?", a: "Diminuem a basicidade, pois retiram densidade eletrônica do nitrogênio por ressonância/indução, estabilizando a forma neutra em detrimento do sal protonado." }
  ],

  heterociclicos: [
    { q: "Por que furano, pirrol e tiofeno são aromáticos apesar de terem um heteroátomo no anel?", a: "O heteroátomo contribui com um par de elétrons não ligante para o sistema π, completando 6 elétrons π deslocalizados (regra de Hückel, 4n+2)." },
    { q: "Qual heterociclo de 5 membros é o mais reativo em substituição eletrofílica aromática (SEA) e por quê?", a: "O pirrol, pois o par de elétrons do N é mais doado ao anel (N menos eletronegativo que O; no tiofeno o par 3p do S se sobrepõe pior ao anel)." },
    { q: "Por que a piridina é muito menos reativa que o benzeno em SEA?", a: "O par de elétrons do N está em orbital sp² no plano do anel (não participa da aromaticidade), mas o N eletronegativo retira densidade eletrônica do anel, desativando-o fortemente." },
    { q: "Onde ocorre preferencialmente a substituição eletrofílica em piridina?", a: "Na posição 3 (meta ao N), pois os intermediários de SEA em C2 e C4 colocam carga positiva próxima ao nitrogênio eletronegativo, desestabilizando-os." },
    { q: "Por que a basicidade da piridina é menor que a de uma amina alifática?", a: "O par de elétrons livre do N na piridina está em orbital sp² (mais caráter s, mais próximo do núcleo, menos disponível) comparado ao orbital sp³ de aminas alifáticas." },
    { q: "Qual a posição preferencial de SEA no furano, pirrol e tiofeno?", a: "Posição 2 (α ao heteroátomo), pois o intermediário catiônico formado é estabilizado por mais estruturas de ressonância." },
    { q: "O que caracteriza um sistema heterocíclico \"π-deficiente\"?", a: "Anéis como piridina e pirimidina, onde o N está no plano contribuindo apenas por efeito indutivo retirador, tornando o anel menos reativo a eletrófilos e mais reativo a nucleófilos (SNAr)." },
    { q: "Dê um exemplo de heterociclo de importância biológica com anel de 5 membros contendo N.", a: "O imidazol, presente na histidina e histamina, com dois nitrogênios de caráter químico distinto (um tipo pirrólico, um tipo piridínico)." },
    { q: "Como se sintetiza um pirrol pela síntese de Paal-Knorr?", a: "Um composto 1,4-dicarbonílico reage com uma amina primária (ou NH₃), com dupla condensação e desidratação, fechando o anel pirrólico." },
    { q: "Onde ocorre preferencialmente a SEA no indol e por quê?", a: "O indol (fusão benzeno + pirrol) reage preferencialmente na posição 3, pelo maior caráter nucleofílico dessa posição no anel pirrólico fundido." },
    { q: "Qual a diferença de basicidade entre pirrol e piridina?", a: "Pirrol é essencialmente não básico (par de elétrons do N faz parte do sexteto aromático); piridina é básica (par de elétrons livre, não aromático, disponível para protonação)." },
    { q: "Cite um heterociclo de 6 membros com dois nitrogênios usado em fármacos.", a: "A pirimidina (presente em citosina, timina, uracila) ou a piperazina (saturada), amplamente usada em síntese farmacêutica." }
  ],

  uv: [
    { q: "O que é um cromóforo?", a: "Grupo funcional responsável pela absorção de luz UV-Vis devido a transições eletrônicas, geralmente envolvendo elétrons π ou pares não ligantes (n)." },
    { q: "Quais as principais transições eletrônicas observadas em UV-Vis de compostos orgânicos?", a: "σ→σ*, n→σ*, π→π* e n→π*, sendo π→π* e n→π* as mais relevantes para grupos com ligações duplas/carbonilas na faixa de 200-800 nm." },
    { q: "O que é efeito batocrômico (deslocamento para o vermelho)?", a: "Deslocamento do máximo de absorção (λmax) para comprimentos de onda maiores, geralmente causado por extensão de conjugação ou efeito de solvente." },
    { q: "O que é efeito hipsocrômico (deslocamento para o azul)?", a: "Deslocamento do λmax para comprimentos de onda menores, geralmente por remoção de conjugação ou mudança de solvente." },
    { q: "O que ocorre com o λmax ao aumentar a conjugação em um polieno?", a: "O λmax aumenta (efeito batocrômico), pois o gap de energia HOMO-LUMO diminui com mais orbitais π conjugados." },
    { q: "O que são as regras de Woodward-Fieser?", a: "Conjunto de regras empíricas que permitem calcular o λmax previsto de dienos e enonas conjugados, somando incrementos de substituintes a um valor-base do cromóforo." },
    { q: "O que é a Lei de Lambert-Beer e para que serve em UV-Vis?", a: "A = ε·c·l (absorbância = coeficiente de absortividade molar × concentração × caminho óptico); permite quantificar a concentração de uma substância em solução." },
    { q: "O que representa um alto valor do coeficiente de absortividade molar (ε)?", a: "Uma transição eletrônica permitida e de alta probabilidade (ex. π→π* em sistemas conjugados, ε tipicamente > 10.000 L·mol⁻¹·cm⁻¹)." },
    { q: "Por que transições n→π* têm coeficientes de absortividade (ε) baixos?", a: "São transições proibidas por simetria, resultando em baixa probabilidade e ε tipicamente menor que 100 L·mol⁻¹·cm⁻¹." },
    { q: "O que é um grupo auxocromo?", a: "Substituinte (ex. -OH, -NH₂, -OR) que, ligado a um cromóforo, altera a intensidade e/ou posição de absorção sem absorver luz por si só." },
    { q: "Qual a utilidade prática da espectroscopia UV-Vis na determinação estrutural?", a: "Indica a presença e extensão de conjugação (dienos, polienos, sistemas aromáticos, enonas), complementando dados de IV e RMN." },
    { q: "Por que solventes polares deslocam o λmax de transições n→π* para o azul?", a: "A solvatação estabiliza mais o par de elétrons n do estado fundamental do que o estado excitado π*, aumentando a energia necessária para a transição." }
  ],

  ir: [
    { q: "Qual princípio físico fundamenta a espectroscopia no infravermelho?", a: "Absorção de radiação IV que promove transições entre níveis vibracionais quantizados (estiramento e deformação) de ligações covalentes com momento de dipolo variável." },
    { q: "Onde se localiza a \"região de impressão digital\" (fingerprint) no IV?", a: "Abaixo de 1500 cm⁻¹, região rica em bandas de deformação angular e estiramentos C-C/C-O, característica única de cada molécula." },
    { q: "Em qual faixa aparece o estiramento C=O de carbonilas e por que é uma banda tão intensa?", a: "Aproximadamente 1650-1750 cm⁻¹; é intensa porque a ligação C=O tem grande variação de momento de dipolo durante o estiramento." },
    { q: "Como o estiramento O-H de álcoois se diferencia do de ácidos carboxílicos no IV?", a: "O-H de álcool é forte e larga entre 3200-3550 cm⁻¹; O-H de ácido carboxílico é ainda mais larga e intensa, entre 2500-3300 cm⁻¹, devido à forte ligação de hidrogênio (dimerização)." },
    { q: "Em que região aparece o estiramento N-H de aminas e como diferenciar amina 1ª de 2ª?", a: "3300-3500 cm⁻¹; aminas primárias mostram duas bandas (assimétrica e simétrica), aminas secundárias mostram apenas uma banda fraca." },
    { q: "Qual a faixa típica do estiramento C≡N (nitrila) e C≡C (alcino)?", a: "Nitrila: ~2210-2260 cm⁻¹ (estreita, média intensidade); alcino: ~2100-2260 cm⁻¹ (fraca, ausente se o alcino for internamente simétrico)." },
    { q: "Por que uma ligação simétrica como a de N₂ ou O₂ não absorve no IV?", a: "Porque não há variação de momento de dipolo durante a vibração (regra de seleção: só vibrações que alteram o dipolo são ativas no IV)." },
    { q: "Como a conjugação afeta a frequência de estiramento C=O em cetonas aromáticas/α,β-insaturadas?", a: "A conjugação diminui a frequência de estiramento C=O (desloca para número de onda menor), pois reduz a ordem de ligação C=O ao delocalizar densidade eletrônica." },
    { q: "Qual a diferença entre estiramento C-H de alcano, alceno e aldeído (CHO)?", a: "Alcano: 2850-2960 cm⁻¹; alceno (=C-H): ~3000-3100 cm⁻¹; aldeído: duas bandas fracas em ~2720 e 2820 cm⁻¹ (ressonância de Fermi)." },
    { q: "Como identificar um éster no espectro de IV?", a: "Duas bandas fortes: C=O (~1735-1750 cm⁻¹) e C-O (1000-1300 cm⁻¹), sem banda larga de O-H." },
    { q: "O que causa o alargamento de bandas de estiramento O-H e N-H no IV?", a: "Formação de ligações de hidrogênio, que geram ambientes químicos ligeiramente diferentes e alargam o sinal." },
    { q: "Como diferenciar uma amida de uma cetona no espectro de IV?", a: "Amidas apresentam banda C=O (amida I) em frequência mais baixa (~1630-1700 cm⁻¹) que cetonas (~1715 cm⁻¹), além de bandas N-H ausentes em cetonas." }
  ],

  ms: [
    { q: "O que é o íon molecular (M⁺•) em espectrometria de massas?", a: "Cátion radical formado pela remoção de um elétron da molécula neutra durante a ionização, cuja m/z corresponde à massa molecular do composto." },
    { q: "O que é a \"regra do nitrogênio\" em espectrometria de massas?", a: "Se a molécula contém número ímpar de átomos de N, sua massa molecular será ímpar; número par (ou zero) de N resulta em massa par." },
    { q: "O que caracteriza um pico base no espectro de massas?", a: "É o pico de maior intensidade relativa do espectro (definido como 100%), correspondente ao fragmento mais estável/abundante." },
    { q: "O que é clivagem alfa (α-cleavage) e onde é comum?", a: "Quebra da ligação C-C adjacente a um heteroátomo ou grupo funcional, estabilizada pela deslocalização da carga no heteroátomo; comum em cetonas, álcoois e aminas." },
    { q: "O que é o rearranjo de McLafferty?", a: "Fragmentação de compostos carbonílicos com cadeia de ao menos 3 carbonos na posição γ, envolvendo transferência de H γ via estado de transição de 6 membros e quebra da ligação β-γ." },
    { q: "Como reconhecer a perda de cloro ou bromo pelo padrão isotópico M e M+2?", a: "Cloro: razão isotópica M:M+2 ≈ 3:1 (³⁵Cl:³⁷Cl); bromo: razão M:M+2 ≈ 1:1 (⁷⁹Br:⁸¹Br)." },
    { q: "Por que carbocátions terciários e benzílicos/alílicos aparecem com maior intensidade nos espectros?", a: "Porque são fragmentos catiônicos mais estáveis (estabilização por hiperconjugação/ressonância), formando-se preferencialmente." },
    { q: "O que é ionização por electrospray (ESI) e quando é preferida?", a: "Técnica de ionização branda que produz majoritariamente o íon molecular (às vezes multiplamente carregado); preferida para moléculas grandes, polares ou termicamente instáveis." },
    { q: "Como se calcula o índice de deficiência de hidrogênio (IDH)?", a: "IDH = (2C + 2 + N − H)/2, onde cada anel ou ligação π conta como uma unidade de insaturação." },
    { q: "Qual fragmentação típica ocorre em álcoois primários por impacto de elétrons?", a: "Perda de água (M-18) e clivagem α ao grupo OH, gerando um cátion oxocarbênio estabilizado." },
    { q: "Por que ésteres e ácidos carboxílicos frequentemente perdem CO₂ ou CO?", a: "Porque a carbonila permite rearranjos que eliminam pequenas moléculas neutras estáveis, gerando fragmentos característicos com perda de 28 ou 44 unidades de massa." },
    { q: "O que distingue espectrometria de massas de alta resolução (HRMS) da de baixa resolução?", a: "HRMS mede a massa exata com múltiplas casas decimais, permitindo determinar a fórmula molecular exata do composto." }
  ],

  rmn: [
    { q: "O que é deslocamento químico (δ) em RMN e em que unidade é medido?", a: "Medida da posição de um sinal em relação a uma referência (TMS, δ=0), expressa em partes por milhão (ppm), refletindo o ambiente eletrônico do núcleo." },
    { q: "O que é blindagem magnética e como afeta o deslocamento químico?", a: "Elétrons ao redor do núcleo geram um campo magnético induzido oposto ao externo, protegendo o núcleo; maior blindagem = sinal em campo mais alto = menor δ." },
    { q: "Por que hidrogênios próximos a grupos eletronegativos (O, N, halogênios) aparecem em δ mais alto?", a: "Grupos eletronegativos retiram densidade eletrônica (desblindagem), diminuindo a blindagem do próton e deslocando o sinal para campo mais baixo." },
    { q: "O que é acoplamento spin-spin e qual a regra de multiplicidade n+1?", a: "Interação entre spins nucleares vizinhos através das ligações; um próton com n vizinhos equivalentes aparece dividido em n+1 linhas (dubleto, tripleto, etc.)." },
    { q: "O que é a constante de acoplamento (J) e o que ela indica?", a: "Distância (em Hz) entre as linhas de um multipleto; seu valor característico ajuda a identificar a relação geométrica entre prótons (ex. cis vs trans em alcenos)." },
    { q: "Qual a faixa típica de deslocamento químico de hidrogênios aromáticos (Ar-H)?", a: "Aproximadamente δ 6,5-8,5 ppm, devido ao efeito de desblindagem por corrente de anel aromático (efeito anisotrópico)." },
    { q: "Por que hidrogênios de alcinos terminais aparecem em δ menor que os de alcenos?", a: "A circulação de elétrons π perpendicular ao eixo da tripla ligação gera um cone de blindagem ao longo do eixo, protegendo o H (δ ~1,8-3,1, contra ~4,5-6,5 dos alcenos)." },
    { q: "Como a integração de sinais em RMN de ¹H auxilia na elucidação estrutural?", a: "A área sob cada sinal é proporcional ao número de hidrogênios que o originam, permitindo determinar a razão relativa de H em cada ambiente químico." },
    { q: "Qual a diferença fundamental entre RMN de ¹H e de ¹³C quanto à sensibilidade?", a: "O ¹³C tem abundância natural de apenas ~1,1% e menor sensibilidade magnética, tornando o RMN de ¹³C menos sensível e geralmente adquirido com desacoplamento de ¹H." },
    { q: "O que são prótons diastereotópicos?", a: "Prótons ligados ao mesmo carbono que não são equivalentes por simetria; podem ter ambientes químicos distintos e acoplar entre si." },
    { q: "Por que o TMS é usado como referência em RMN?", a: "É quimicamente inerte, volátil (fácil remoção) e apresenta um único sinal intenso em campo muito alto (δ=0), servindo de referência universal." },
    { q: "O que é troca química rápida e como afeta o sinal de OH/NH em RMN?", a: "Prótons ácidos trocam rapidamente entre moléculas, fazendo o sinal aparecer como singleto largo, com posição/multiplicidade variando com concentração, temperatura e solvente." }
  ],

  praticas: [
    { q: "Qual a ordem lógica recomendada para elucidar uma estrutura desconhecida a partir de dados espectrais?", a: "Determinar a fórmula molecular (EM de alta resolução), calcular o índice de insaturação, usar IV para grupos funcionais e, por fim, RMN (¹H/¹³C) para montar o esqueleto carbônico." },
    { q: "Como o índice de deficiência de hidrogênio (IDH) orienta a interpretação de um problema de elucidação?", a: "Indica quantos anéis e/ou ligações π a molécula possui; por exemplo, IDH=4 é consistente com um anel aromático (1 anel + 3 π)." },
    { q: "Se o IV mostra banda forte em ~1710 cm⁻¹ e a RMN de ¹H não mostra sinal entre δ 9-10, que grupo carbonílico é mais provável?", a: "Cetona — aldeídos mostram H característico em δ 9,5-10 ppm; ácidos/ésteres têm bandas de IV adicionais características." },
    { q: "Como confirmar a presença de um grupo éster combinando EM e IV?", a: "IV mostra duas bandas C=O/C-O (~1735 e 1200 cm⁻¹); EM frequentemente mostra perda de fragmento alcóxi (OR) ou acila, com m/z compatíveis." },
    { q: "Como a multiplicidade e a integração da RMN de ¹H ajudam a posicionar substituintes em um anel aromático?", a: "O padrão de acoplamento (orto J~7-8 Hz, meta J~1-3 Hz, para J~0-1 Hz) e o número de sinais indicam o padrão de substituição do anel." },
    { q: "Como o UV-Vis complementa IV e RMN num problema combinado?", a: "Indica a extensão de conjugação (λmax alto sugere sistema poliênico/aromático extenso), ajudando a confirmar ou descartar estruturas propostas." },
    { q: "Como usar a perda de 18 (M-18) no espectro de massas para apoiar uma hipótese estrutural?", a: "Sugere perda de água, consistente com presença de grupo OH (álcool) ou ácido carboxílico — deve-se cruzar com banda larga O-H no IV." },
    { q: "Um sinal em δ ~2,1 ppm (singleto, 3H) na RMN é consistente com qual grupo comum?", a: "CH₃ de metil cetona (ex. acetofenona) ou de acetato/acetamida, cujo ambiente é definido pela carbonila vizinha." },
    { q: "Como diferenciar um álcool de uma amina secundária no IV se ambos mostram banda larga entre 3200-3400 cm⁻¹?", a: "Amina secundária mostra banda única (N-H), mais fraca e estreita que a de álcool; o teste de Hinsberg pode confirmar quimicamente a amina." },
    { q: "Por que é importante verificar a fórmula molecular proposta contra o IDH e os dados espectrais?", a: "Garante consistência interna: átomos, ligações π e anéis propostos devem ser coerentes com a massa molecular, o IDH e todos os sinais observados." },
    { q: "Por que a espectrometria de massas de alta resolução é decisiva antes de propor a estrutura final?", a: "Fornece a fórmula molecular exata, eliminando ambiguidades entre estruturas isoméricas de mesma massa nominal." },
    { q: "Qual estratégia é recomendada quando os dados são compatíveis com mais de uma estrutura isomérica?", a: "Comparar previsões teóricas de deslocamento químico, acoplamento e fragmentação de cada estrutura candidata com os dados experimentais, escolhendo a de melhor concordância global." }
  ]

};
