// ============================================================
// DESIGN: "Atelier de Beleza" — Editorial de Moda de Luxo
// Palette: Chocolate #5C2B1D | Cream #F2EDE4 | Warm White #FAFAF7 | Gold #C9A55A
// Typography: Cormorant Garamond (display), Great Vibes (script), Raleway (body)
// NOTA LEGAL: Dra. Monique não possui RQE — não usar título "Dermatologista"
// ============================================================

export const SITE = {
  name: "Dra. Monique Damiano",
  fullName: "Dra. Monique Damiano Chiosi",
  brandName: "Monique Damiano",
  slogan: "Medicina e Beleza",
  subtitle: "Pele, Saúde e Beleza",
  // Mantido: "Dermatologia | Medicina Estética" (conforme solicitado)
  specialty: "Dermatologia | Medicina Estética",
  crmSP: "CRM-SP 228351",
  crmRS: "CRM-RS 58570",
  instagram: "@dra.moniquedamiano",
  instagramUrl: "https://www.instagram.com/dra.moniquedamiano",
  whatsappSP: "(11) 92196-8645",
  whatsappRS: "(54) 98429-7119",
  whatsappSPLink: "https://wa.me/5511921968645?text=Ol%C3%A1%2C%20Dra.%20Monique!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta.",
  whatsappRSLink: "https://wa.me/5554984297119?text=Ol%C3%A1%2C%20Dra.%20Monique!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta.",
  addressSP: "Rua Agostinho Rodrigues Filho, 550, Ibirapuera - São Paulo/SP",
  addressRS: "Clínica Medvita - Rua Ângelo Mistura, 158 - Marau/RS",
  cfmNotice: "Este site tem caráter exclusivamente informativo e não substitui a consulta médica presencial.",
  siteUrl: "https://www.dramoniquedamiano.com.br",
};

export const SEO = {
  home: {
    title: "Dra. Monique Damiano — Medicina Estética e Saúde da Pele em São Paulo e Marau (RS)",
    description: "Tratamentos personalizados para acne, melasma, rejuvenescimento facial e saúde da pele em São Paulo (SP) e Marau (RS). Médica com foco em resultados naturais e duradouros.",
  },
  sobre: {
    title: "Sobre a Dra. Monique Damiano — Medicina Estética em SP e Marau (RS)",
    description: "Conheça a Dra. Monique Damiano Chiosi, médica com atuação em Medicina Estética e cuidados com a pele. Atendimento em São Paulo (SP) e Marau (RS).",
  },
  tratamentos: {
    title: "Tratamentos de Pele e Medicina Estética — Dra. Monique Damiano | SP e RS",
    description: "Conheça os tratamentos oferecidos pela Dra. Monique Damiano: acne, melasma, toxina botulínica, preenchimento, bioestimuladores e muito mais. Atendimento em São Paulo e Marau (RS).",
  },
  contato: {
    title: "Agende sua Consulta — Dra. Monique Damiano | São Paulo (SP) e Marau (RS)",
    description: "Entre em contato com a Dra. Monique Damiano para agendar sua consulta em São Paulo (SP) ou Marau (RS). WhatsApp, formulário e informações de localização.",
  },
  blog: {
    title: "Blog — Dicas de Pele e Medicina Estética | Dra. Monique Damiano",
    description: "Artigos e dicas sobre cuidados com a pele, medicina estética, skincare e saúde da pele pela Dra. Monique Damiano.",
  },
};

export const IMAGES = {
  hero: "https://d2xsxph8kpxj0f.cloudfront.net/310519663062738334/7aJWHo8S3YkG7RHgmPBpW2/hero-dra-monique-real_0fe7a07a.png",
  about: "https://d2xsxph8kpxj0f.cloudfront.net/310519663062738334/7aJWHo8S3YkG7RHgmPBpW2/IMG_9413_fc544ebf.jpg",
  treatmentDerma: "https://d2xsxph8kpxj0f.cloudfront.net/310519663062738334/7aJWHo8S3YkG7RHgmPBpW2/treatment-derma-SFzdTgTj2xFrH35y2vzHed.webp",
  treatmentEstetica: "https://d2xsxph8kpxj0f.cloudfront.net/310519663062738334/7aJWHo8S3YkG7RHgmPBpW2/treatment-estetica-Y6ApmwWQ8XBHChv4oqfZ4S.webp",
  clinic: "https://d2xsxph8kpxj0f.cloudfront.net/310519663062738334/7aJWHo8S3YkG7RHgmPBpW2/clinic-interior-3q8yZHguLAU49fAC9LtVa2.webp",
};

export const NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Tratamentos", href: "/tratamentos" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
];

export const TREATMENTS_DERMA = [
  {
    slug: "acne",
    name: "Acne e Oleosidade",
    tagline: "Tratamento de Acne em São Paulo e Marau (RS)",
    seoTitle: "Tratamento de Acne em São Paulo (SP) e Marau (RS) | Dra. Monique Damiano",
    seoDescription: "Tratamento personalizado para acne e oleosidade em São Paulo (SP) e Marau (RS). Protocolos individualizados para peles oleosas, acne leve, moderada e severa.",
    description: "Tratamento personalizado para controle da acne e oleosidade excessiva, com protocolos que respeitam a individualidade de cada pele.",
    details: "A acne é uma condição que afeta a autoestima e a qualidade de vida. Utilizamos uma abordagem completa, combinando tratamentos tópicos, orais quando necessário, e procedimentos em consultório para resultados duradouros e naturais.",
    faq: [
      { q: "Quantas sessões são necessárias?", a: "Cada caso é avaliado individualmente. Em geral, resultados significativos são observados após 2 a 3 meses de acompanhamento." },
      { q: "O tratamento para acne tem contraindicações?", a: "Algumas medicações utilizadas no tratamento da acne têm contraindicações específicas. Por isso, é fundamental a consulta médica para avaliação individualizada." },
    ],
  },
  {
    slug: "melasma",
    name: "Melasma e Manchas",
    tagline: "Tratamento de Melasma em São Paulo e Marau (RS)",
    seoTitle: "Tratamento de Melasma em São Paulo (SP) e Marau (RS) | Dra. Monique Damiano",
    seoDescription: "Protocolos avançados para clareamento e controle do melasma em São Paulo (SP) e Marau (RS). Peelings, despigmentantes e acompanhamento contínuo.",
    description: "Protocolos avançados para clareamento e controle do melasma, com acompanhamento contínuo e fotoproteção especializada.",
    details: "O melasma exige paciência e um plano de tratamento bem estruturado. Trabalhamos com peelings, laser, despigmentantes e fotoproteção de alta performance para resultados progressivos e sustentáveis.",
    faq: [
      { q: "O melasma tem cura?", a: "O melasma é uma condição crônica que pode ser controlada com tratamento adequado. O resultado é progressivo e requer manutenção." },
      { q: "Qual o papel da fotoproteção?", a: "A fotoproteção rigorosa é fundamental para qualquer tratamento de melasma — sem ela, o clareamento não se mantém." },
    ],
  },
  {
    slug: "rosacea",
    name: "Rosácea",
    tagline: "Tratamento de Rosácea em São Paulo e Marau (RS)",
    seoTitle: "Tratamento de Rosácea em São Paulo (SP) e Marau (RS) | Dra. Monique Damiano",
    seoDescription: "Cuidado especializado para peles com rosácea em São Paulo e Marau (RS). Redução de vermelhidão, sensibilidade e controle das crises.",
    description: "Cuidado especializado para peles com rosácea, reduzindo vermelhidão e sensibilidade com tratamentos delicados.",
    details: "A rosácea é uma condição crônica que requer manejo cuidadoso. Oferecemos tratamentos que combinam cuidados tópicos, laser vascular e orientação de skincare específica para controlar os sintomas.",
    faq: [
      { q: "A rosácea tem tratamento definitivo?", a: "A rosácea é uma condição crônica, mas com o tratamento correto é possível manter os sintomas bem controlados e melhorar muito a qualidade de vida." },
      { q: "Posso usar maquiagem durante o tratamento?", a: "Sim. Orientamos sobre produtos adequados para pele com rosácea, que não irritem nem piorem a vermelhidão." },
    ],
  },
  {
    slug: "psoriase-e-dermatites",
    name: "Psoríase e Dermatites",
    tagline: "Tratamento de Psoríase e Dermatites em SP e RS",
    seoTitle: "Tratamento de Psoríase e Dermatites em São Paulo (SP) | Dra. Monique Damiano",
    seoDescription: "Acompanhamento completo para psoríase e dermatites em São Paulo e Marau (RS). Tratamentos atualizados com foco em bem-estar e qualidade de vida.",
    description: "Acompanhamento completo para condições inflamatórias da pele, com foco no bem-estar e qualidade de vida.",
    details: "Condições como psoríase e dermatites necessitam de acompanhamento médico contínuo. Oferecemos tratamentos atualizados com as melhores evidências científicas para controle e melhora da qualidade de vida.",
    faq: [
      { q: "A psoríase é contagiosa?", a: "Não. A psoríase é uma doença autoimune, sem qualquer risco de contágio." },
      { q: "O estresse piora a psoríase?", a: "Sim. O estresse é um dos principais gatilhos para crises de psoríase. O manejo integral inclui orientações sobre qualidade de vida." },
    ],
  },
  {
    slug: "queda-capilar",
    name: "Queda Capilar",
    tagline: "Tratamento de Alopecia e Queda de Cabelo em SP e RS",
    seoTitle: "Tratamento de Queda Capilar em São Paulo (SP) e Marau (RS) | Dra. Monique Damiano",
    seoDescription: "Investigação e tratamento da alopecia e queda de cabelo em São Paulo e Marau (RS). Abordagem multifatorial com exames, tricoscopia e terapias capilares.",
    description: "Investigação e tratamento da alopecia com abordagem multifatorial, incluindo exames e terapias capilares.",
    details: "A queda capilar pode ter diversas causas. Realizamos investigação completa com exames laboratoriais e tricoscopia, seguida de um plano terapêutico individualizado que pode incluir medicações, mesoterapia e orientações nutricionais.",
    faq: [
      { q: "Queda de cabelo é sempre permanente?", a: "Não. Muitas causas de queda capilar são tratáveis e reversíveis, desde que identificadas e tratadas corretamente." },
      { q: "Quando devo procurar ajuda médica pela queda de cabelo?", a: "Quando perceber aumento na queda, rarefação visível ou áreas de calvície, é indicado buscar avaliação médica." },
    ],
  },
  {
    slug: "pele-sensivel",
    name: "Pele Sensível",
    tagline: "Cuidados para Pele Sensível em SP e RS",
    seoTitle: "Tratamento para Pele Sensível em São Paulo (SP) | Dra. Monique Damiano",
    seoDescription: "Protocolos gentis para peles reativas e sensíveis em São Paulo e Marau (RS). Skincare personalizado e procedimentos com mínima irritação.",
    description: "Protocolos gentis para peles reativas, com produtos e procedimentos selecionados para máxima tolerância.",
    details: "Peles sensíveis precisam de cuidado especial. Desenvolvemos rotinas de skincare personalizadas e realizamos procedimentos com técnicas e produtos específicos para minimizar irritação e fortalecer a barreira cutânea.",
    faq: [
      { q: "Como saber se minha pele é realmente sensível?", a: "Pele sensível reage a produtos, temperaturas e agressões ambientais com ardência, vermelhidão ou descamação. A avaliação médica ajuda a identificar a causa." },
      { q: "Posso fazer procedimentos estéticos com pele sensível?", a: "Sim, com escolha cuidadosa de protocolos. Existem tratamentos desenvolvidos especificamente para peles reativas." },
    ],
  },
  {
    slug: "dermatite-seborreica",
    name: "Dermatite Seborreica",
    tagline: "Tratamento de Dermatite Seborreica em SP e RS",
    seoTitle: "Tratamento de Dermatite Seborreica em São Paulo (SP) | Dra. Monique Damiano",
    seoDescription: "Controle eficaz da dermatite seborreica no couro cabeludo e rosto em São Paulo e Marau (RS). Orientações para prevenir crises e manter a pele equilibrada.",
    description: "Tratamento eficaz para o controle da dermatite seborreica, com orientações para prevenção de crises.",
    details: "A dermatite seborreica é uma condição recorrente que afeta couro cabeludo e face. Oferecemos tratamento para controle dos sintomas e orientações para manutenção, reduzindo a frequência e intensidade das crises.",
    faq: [
      { q: "Dermatite seborreica é caspa?", a: "A caspa pode ser uma manifestação leve de dermatite seborreica. A condição também afeta face, sobrancelhas e orelhas." },
      { q: "Com que frequência é necessário o retorno?", a: "Após o controle inicial, retornos semestrais costumam ser suficientes para manutenção." },
    ],
  },
];

export const TREATMENTS_ESTETICA = [
  {
    slug: "toxina-botulinica",
    name: "Toxina Botulínica",
    tagline: "Botox em São Paulo e Marau (RS)",
    seoTitle: "Toxina Botulínica (Botox) em São Paulo e Marau (RS) | Dra. Monique Damiano",
    seoDescription: "Aplicação de toxina botulínica (botox) em São Paulo (SP) e Marau (RS). Resultados naturais, sem aspecto congelado. Técnica precisa para suavização de linhas de expressão.",
    description: "Aplicação precisa para suavização de linhas de expressão, com resultado natural e harmonioso.",
    details: "A toxina botulínica é um dos procedimentos mais seguros e eficazes da medicina estética. Realizamos aplicações com técnica refinada para suavizar rugas dinâmicas mantendo a expressividade natural do rosto.",
    faq: [
      { q: "O resultado fica com aspecto natural?", a: "Sim. Quando aplicada com técnica precisa, a toxina botulínica suaviza as expressões sem eliminar a naturalidade do rosto." },
      { q: "Quanto tempo dura o efeito?", a: "O efeito dura em média de 4 a 6 meses, variando conforme o metabolismo de cada pessoa." },
    ],
  },
  {
    slug: "botox-nefertiti",
    name: "Botox Nefertiti",
    tagline: "Botox Nefertiti — Contorno Mandibular em SP e RS",
    seoTitle: "Botox Nefertiti em São Paulo (SP) e Marau (RS) | Dra. Monique Damiano",
    seoDescription: "Técnica Nefertiti de toxina botulínica para definição do contorno mandibular e rejuvenescimento do pescoço em São Paulo e Marau (RS).",
    description: "Técnica avançada para definição do contorno mandibular e rejuvenescimento do pescoço.",
    details: "O Botox Nefertiti é uma técnica sofisticada que utiliza a toxina botulínica para definir o contorno da mandíbula e melhorar a aparência do pescoço, proporcionando um efeito lifting sutil e elegante.",
    faq: [
      { q: "O que é o efeito Nefertiti?", a: "É um lifting não cirúrgico que define o ângulo da mandíbula e melhora o aspecto do pescoço, inspirado no perfil da rainha egípcia Nefertiti." },
      { q: "Quem pode fazer o Botox Nefertiti?", a: "A técnica é indicada para pessoas com flacidez discreta na região mandibular e pescoço. A avaliação médica define a indicação." },
    ],
  },
  {
    slug: "preenchimento-acido-hialuronico",
    name: "Preenchimento com Ácido Hialurônico",
    tagline: "Preenchimento Facial em São Paulo e Marau (RS)",
    seoTitle: "Preenchimento com Ácido Hialurônico em São Paulo (SP) e Marau (RS) | Dra. Monique Damiano",
    seoDescription: "Preenchimento facial com ácido hialurônico em São Paulo e Marau (RS). Restauração de volume natural, hidratação profunda e contorno facial harmonioso.",
    description: "Restauração de volume e contorno facial com naturalidade, utilizando as melhores marcas do mercado.",
    details: "O ácido hialurônico é uma substância naturalmente presente na pele. Utilizamos técnicas avançadas de preenchimento para restaurar volume, hidratar profundamente e melhorar contornos faciais com resultados naturais.",
    faq: [
      { q: "O ácido hialurônico é seguro?", a: "Sim. É uma substância biocompatível e biodegradável. Em mãos habilitadas, é um dos procedimentos mais seguros da medicina estética." },
      { q: "Onde pode ser aplicado?", a: "Lábios, nasolabial, regiões malares, mandíbula, queixo, olheiras e mãos são as áreas mais comuns de aplicação." },
    ],
  },
  {
    slug: "bioestimuladores-colageno",
    name: "Bioestimuladores de Colágeno",
    tagline: "Bioestimuladores de Colágeno em São Paulo e Marau (RS)",
    seoTitle: "Bioestimuladores de Colágeno em São Paulo (SP) e Marau (RS) | Dra. Monique Damiano",
    seoDescription: "Bioestimuladores de colágeno (Sculptra, Radiesse, Ellansé) em São Paulo e Marau (RS). Rejuvenescimento progressivo e natural com estímulo à produção de colágeno.",
    description: "Estímulo à produção natural de colágeno para firmeza e rejuvenescimento progressivo da pele.",
    details: "Os bioestimuladores de colágeno promovem a produção natural de colágeno pela pele, resultando em melhora progressiva da firmeza, textura e qualidade cutânea. Os resultados são graduais e duradouros.",
    faq: [
      { q: "Quando aparecem os resultados?", a: "Os resultados são progressivos, aparecendo ao longo de semanas após a aplicação, à medida que o colágeno é produzido." },
      { q: "Quanto tempo dura o efeito?", a: "Dependendo do produto utilizado, os resultados podem durar de 1 a 2 anos ou mais." },
    ],
  },
  {
    slug: "peelings-quimicos",
    name: "Peelings Químicos",
    tagline: "Peeling Químico em São Paulo e Marau (RS)",
    seoTitle: "Peelings Químicos em São Paulo (SP) e Marau (RS) | Dra. Monique Damiano",
    seoDescription: "Peelings químicos para manchas, acne, melasma, textura e luminosidade da pele em São Paulo e Marau (RS). Renovação celular controlada com resultados visíveis.",
    description: "Renovação celular controlada para tratamento de manchas, textura e luminosidade da pele.",
    details: "Os peelings químicos promovem renovação celular controlada, melhorando manchas, textura, poros dilatados e luminosidade. Utilizamos diferentes tipos e concentrações conforme a necessidade de cada pele.",
    faq: [
      { q: "O peeling químico dói?", a: "Pode haver sensação de formigamento ou calor durante a aplicação, mas o procedimento é bem tolerado. O desconforto é passageiro." },
      { q: "Há necessidade de recuperação?", a: "Dependendo da profundidade do peeling, pode haver descamação por alguns dias. A intensidade varia conforme o protocolo utilizado." },
    ],
  },
  {
    slug: "skinbooster",
    name: "Skinbooster",
    tagline: "Skinbooster — Hidratação Profunda em SP e RS",
    seoTitle: "Skinbooster em São Paulo (SP) e Marau (RS) | Dra. Monique Damiano",
    seoDescription: "Skinbooster para hidratação profunda injetável em São Paulo e Marau (RS). Pele luminosa, viçosa e com aspecto saudável de dentro para fora.",
    description: "Hidratação profunda injetável para pele luminosa, viçosa e com aspecto saudável.",
    details: "O Skinbooster é um tratamento injetável de hidratação profunda que melhora a qualidade da pele de dentro para fora, proporcionando luminosidade, viço e aspecto saudável com resultados progressivos.",
    faq: [
      { q: "Qual a diferença de skinbooster e preenchimento?", a: "O skinbooster hidrata e melhora a qualidade da pele; o preenchimento adiciona volume. São objetivos diferentes com o mesmo tipo de substância." },
      { q: "Quantas sessões são necessárias?", a: "O protocolo inicial costuma ser de 3 sessões com intervalo de 4 semanas, seguidas de manutenção semestral." },
    ],
  },
  {
    slug: "drug-delivery",
    name: "Drug Delivery",
    tagline: "Drug Delivery — Absorção de Ativos em SP e RS",
    seoTitle: "Drug Delivery em São Paulo (SP) e Marau (RS) | Dra. Monique Damiano",
    seoDescription: "Técnica de drug delivery para potencializar absorção de ativos na pele em São Paulo e Marau (RS). Maximização dos resultados dos tratamentos.",
    description: "Técnica que potencializa a absorção de ativos pela pele, maximizando resultados dos tratamentos.",
    details: "O Drug Delivery é uma técnica que utiliza microcanais na pele para potencializar a absorção de ativos cosméticos e farmacológicos, maximizando os resultados dos tratamentos.",
    faq: [
      { q: "Como funciona o drug delivery?", a: "Através de microagulhas ou dispositivos específicos, criam-se pequenos canais na pele que aumentam significativamente a absorção dos ativos aplicados." },
      { q: "Quais ativos podem ser utilizados?", a: "Vitamina C, retinol, peptídeos, ácido hialurônico e outros ativos selecionados conforme a necessidade de cada pele." },
    ],
  },
  {
    slug: "fios-pdo",
    name: "Fios de PDO",
    tagline: "Fios de PDO — Lifting Não Cirúrgico em SP e RS",
    seoTitle: "Fios de PDO em São Paulo (SP) e Marau (RS) | Dra. Monique Damiano",
    seoDescription: "Fios de PDO para lifting não cirúrgico em São Paulo e Marau (RS). Sustentação facial e estímulo de colágeno com resultados naturais e progressivos.",
    description: "Lifting não cirúrgico com fios absorvíveis para sustentação e estímulo de colágeno.",
    details: "Os fios de PDO são uma opção minimamente invasiva para lifting facial. Proporcionam sustentação imediata e estimulam a produção de colágeno ao longo do tempo, com resultados naturais e progressivos.",
    faq: [
      { q: "Os fios de PDO são permanentes?", a: "Não. São absorvíveis em 6 a 8 meses. Mas o estímulo de colágeno gerado por eles pode manter o resultado por mais tempo." },
      { q: "Há período de recuperação?", a: "Pode haver leve inchaço e sensibilidade nos primeiros dias. Na maioria dos casos, o retorno às atividades é rápido." },
    ],
  },
  {
    slug: "fotoproteçao-avancada",
    name: "Fotoproteção Avançada",
    tagline: "Orientação em Fotoproteção em SP e RS",
    seoTitle: "Fotoproteção Avançada em São Paulo (SP) e Marau (RS) | Dra. Monique Damiano",
    seoDescription: "Orientação especializada em fotoproteção com os melhores protetores solares para cada tipo de pele em São Paulo e Marau (RS).",
    description: "Orientação especializada em fotoproteção com os melhores produtos e tecnologias disponíveis.",
    details: "A fotoproteção é a base de qualquer tratamento de pele. Oferecemos orientação personalizada sobre os melhores protetores solares e estratégias de fotoproteção para cada tipo de pele e rotina.",
    faq: [
      { q: "Qual FPS devo usar?", a: "O mínimo recomendado é FPS 30, com reaplicação a cada 2-3 horas. Para peles com melasma ou pós-procedimento, FPS 50+ é o ideal." },
      { q: "Preciso usar protetor solar em dias nublados?", a: "Sim! A radiação UV atravessa as nuvens. A fotoproteção deve ser diária, independente do clima." },
    ],
  },
];

export const TESTIMONIALS = [
  {
    text: "A Dra. Monique mudou completamente minha relação com minha pele. Pela primeira vez, sinto que tenho um tratamento feito especialmente para mim.",
    name: "Carolina M.",
    city: "São Paulo, SP",
  },
  {
    text: "Profissional incrível! Me senti acolhida desde a primeira consulta. Os resultados do tratamento de melasma superaram todas as minhas expectativas.",
    name: "Fernanda L.",
    city: "Marau, RS",
  },
  {
    text: "O cuidado e a atenção da Dra. Monique são únicos. Ela explica tudo com calma e carinho, e os resultados falam por si.",
    name: "Juliana R.",
    city: "São Paulo, SP",
  },
  {
    text: "Depois de anos lutando contra a acne, finalmente encontrei uma médica que entendeu minha pele. Gratidão eterna!",
    name: "Beatriz S.",
    city: "Passo Fundo, RS",
  },
  {
    text: "A aplicação de toxina botulínica ficou tão natural que minhas amigas só notaram que eu estava mais bonita, sem saber o que era.",
    name: "Mariana P.",
    city: "São Paulo, SP",
  },
];

export const BLOG_POSTS = [
  {
    slug: "cuidados-essenciais-pele-inverno",
    title: "Cuidados Essenciais com a Pele no Inverno",
    excerpt: "O inverno exige atenção redobrada com a hidratação e proteção da pele. Confira as dicas da Dra. Monique para manter sua pele saudável nos dias frios.",
    category: "Skincare",
    date: "2025-06-15",
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&h=400&fit=crop",
    content: "Durante o inverno, a pele tende a ficar mais ressecada devido à baixa umidade do ar e ao uso de água quente no banho. É fundamental reforçar a hidratação com cremes mais densos e manter a fotoproteção mesmo em dias nublados. Evite banhos muito quentes e prolongados, pois eles removem a camada protetora natural da pele. Invista em um bom hidratante corporal e facial, aplicando logo após o banho para selar a umidade."
  },
  {
    slug: "melasma-tudo-que-voce-precisa-saber",
    title: "Melasma: Tudo que Você Precisa Saber",
    excerpt: "Entenda o que é o melasma, suas causas e os tratamentos mais eficazes disponíveis atualmente.",
    category: "Dermatologia Clínica",
    date: "2025-05-20",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663062738334/7aJWHo8S3YkG7RHgmPBpW2/blog-melasma-card-3CgaDJozF5rAi8uy5Q9WGk.webp",
    content: "O melasma é uma condição de hiperpigmentação que afeta principalmente mulheres, causando manchas escuras no rosto. Fatores como exposição solar, hormônios e predisposição genética contribuem para seu aparecimento. O tratamento envolve uma combinação de fotoproteção rigorosa, despigmentantes tópicos e procedimentos em consultório como peelings e laser."
  },
  {
    slug: "toxina-botulinica-mitos-verdades",
    title: "Toxina Botulínica: Mitos e Verdades",
    excerpt: "Desmistificamos os principais mitos sobre a toxina botulínica e explicamos como o procedimento funciona na prática.",
    category: "Estética Avançada",
    date: "2025-04-10",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663062738334/7aJWHo8S3YkG7RHgmPBpW2/blog-botox-card-jdRUe7Etot9q2tmAdvjYrJ.webp",
    content: "A toxina botulínica é um dos procedimentos estéticos mais realizados no mundo, mas ainda gera muitas dúvidas. Quando aplicada por um profissional qualificado, o resultado é natural e harmonioso, sem o temido aspecto congelado. O procedimento é rápido, com mínimo desconforto, e os resultados aparecem em poucos dias."
  },
  {
    slug: "rotina-skincare-iniciantes",
    title: "Rotina de Skincare para Iniciantes",
    excerpt: "Montar uma rotina de cuidados com a pele não precisa ser complicado. Veja o passo a passo essencial para começar.",
    category: "Skincare",
    date: "2025-03-25",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663062738334/7aJWHo8S3YkG7RHgmPBpW2/blog-skincare-card-abhuFsUCXgtYVn8hXTBAef.webp",
    content: "Uma boa rotina de skincare começa com três passos fundamentais: limpeza, hidratação e proteção solar. A limpeza remove impurezas e prepara a pele para receber os ativos. A hidratação mantém a barreira cutânea saudável. E o protetor solar é indispensável todos os dias, mesmo em ambientes internos."
  },
  {
    slug: "bioestimuladores-colageno-guia",
    title: "Bioestimuladores de Colágeno: Guia Completo",
    excerpt: "Saiba como os bioestimuladores de colágeno podem rejuvenescer sua pele de forma natural e progressiva.",
    category: "Estética Avançada",
    date: "2025-03-01",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&h=400&fit=crop",
    content: "Os bioestimuladores de colágeno são substâncias injetáveis que estimulam a produção natural de colágeno pela pele. Diferente dos preenchimentos, seus resultados são progressivos e aparecem ao longo de semanas, proporcionando melhora na firmeza, textura e qualidade da pele de forma natural."
  },
  {
    slug: "protetor-solar-como-escolher",
    title: "Como Escolher o Protetor Solar Ideal",
    excerpt: "Nem todo protetor solar é igual. Aprenda a escolher o produto certo para o seu tipo de pele e rotina.",
    category: "Skincare",
    date: "2025-02-14",
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=600&h=400&fit=crop",
    content: "A escolha do protetor solar ideal depende do tipo de pele, da rotina diária e das necessidades específicas de cada pessoa. Para peles oleosas, prefira texturas em gel ou sérum. Para peles secas, versões em creme são mais indicadas. O FPS mínimo recomendado é 30, com reaplicação a cada 2-3 horas."
  },
];

export const INSTAGRAM_POSTS = [
  "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=400&h=400&fit=crop",
];
