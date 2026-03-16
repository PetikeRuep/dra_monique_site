// ============================================================
// DESIGN: "Atelier de Beleza" — Editorial de Moda de Luxo
// Palette: Chocolate #5C2B1D | Cream #F2EDE4 | Warm White #FAFAF7 | Gold #C9A55A
// Typography: Cormorant Garamond (display), Great Vibes (script), Raleway (body)
// ============================================================

export const SITE = {
  name: "Dra. Monique Damiano",
  fullName: "Dra. Monique Damiano Chiosi",
  brandName: "Monique Damiano",
  slogan: "Medicina e Beleza",
  subtitle: "Pele, Saúde e Beleza",
  specialty: "Dermatologia | Medicina Estética",
  crmSP: "CRM-SP 228351",
  crmRS: "CRM-RS 58570",
  instagram: "@modamiano",
  instagramUrl: "https://www.instagram.com/modamiano",
  whatsappSP: "(11) 92196-8645",
  whatsappRS: "(54) 98429-7119",
  whatsappSPLink: "https://wa.me/5511921968645?text=Ol%C3%A1%2C%20Dra.%20Monique!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta.",
  whatsappRSLink: "https://wa.me/5554984297119?text=Ol%C3%A1%2C%20Dra.%20Monique!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta.",
  addressSP: "Rua Agostinho Rodrigues Filho, 550, Ibirapuera - São Paulo/SP",
  addressRS: "Clínica Medvita - Rua Ângelo Mistura, 158 - Marau/RS",
  cfmNotice: "Este site tem caráter exclusivamente informativo e não substitui a consulta médica presencial.",
};

export const IMAGES = {
  hero: "https://d2xsxph8kpxj0f.cloudfront.net/310519663062738334/7aJWHo8S3YkG7RHgmPBpW2/hero-dra-monique-real_0fe7a07a.png",
  about: "https://d2xsxph8kpxj0f.cloudfront.net/310519663062738334/7aJWHo8S3YkG7RHgmPBpW2/Gemini_Generated_Image_v4pmfnv4pmfnv4pm_aab98995.jpg",
  treatmentDerma: "https://d2xsxph8kpxj0f.cloudfront.net/310519663062738334/7aJWHo8S3YkG7RHgmPBpW2/treatment-derma-SFzdTgTj2xFrH35y2vzHed.webp",
  treatmentEstetica: "https://d2xsxph8kpxj0f.cloudfront.net/310519663062738334/7aJWHo8S3YkG7RHgmPBpW2/treatment-estetica-Y6ApmwWQ8XBHChv4oqfZ4S.webp",
  clinic: "https://d2xsxph8kpxj0f.cloudfront.net/310519663062738334/7aJWHo8S3YkG7RHgmPBpW2/clinic-interior-3q8yZHguLAU49fAC9LtVa2.webp",
};

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "#contato" },
];

export const TREATMENTS_DERMA = [
  {
    name: "Acne e Oleosidade",
    description: "Tratamento personalizado para controle da acne e oleosidade excessiva, com protocolos que respeitam a individualidade de cada pele.",
    details: "A acne é uma condição que afeta a autoestima e a qualidade de vida. Utilizamos uma abordagem completa, combinando tratamentos tópicos, orais quando necessário, e procedimentos em consultório para resultados duradouros e naturais."
  },
  {
    name: "Melasma e Manchas",
    description: "Protocolos avançados para clareamento e controle do melasma, com acompanhamento contínuo e fotoproteção especializada.",
    details: "O melasma exige paciência e um plano de tratamento bem estruturado. Trabalhamos com peelings, laser, despigmentantes e fotoproteção de alta performance para resultados progressivos e sustentáveis."
  },
  {
    name: "Rosácea",
    description: "Cuidado especializado para peles com rosácea, reduzindo vermelhidão e sensibilidade com tratamentos delicados.",
    details: "A rosácea é uma condição crônica que requer manejo cuidadoso. Oferecemos tratamentos que combinam cuidados tópicos, laser vascular e orientação de skincare específica para controlar os sintomas."
  },
  {
    name: "Psoríase e Dermatites",
    description: "Acompanhamento completo para condições inflamatórias da pele, com foco no bem-estar e qualidade de vida.",
    details: "Condições como psoríase e dermatites necessitam de acompanhamento médico contínuo. Oferecemos tratamentos atualizados com as melhores evidências científicas para controle e melhora da qualidade de vida."
  },
  {
    name: "Queda Capilar",
    description: "Investigação e tratamento da alopecia com abordagem multifatorial, incluindo exames e terapias capilares.",
    details: "A queda capilar pode ter diversas causas. Realizamos investigação completa com exames laboratoriais e tricoscopia, seguida de um plano terapêutico individualizado que pode incluir medicações, mesoterapia e orientações nutricionais."
  },
  {
    name: "Pele Sensível",
    description: "Protocolos gentis para peles reativas, com produtos e procedimentos selecionados para máxima tolerância.",
    details: "Peles sensíveis precisam de cuidado especial. Desenvolvemos rotinas de skincare personalizadas e realizamos procedimentos com técnicas e produtos específicos para minimizar irritação e fortalecer a barreira cutânea."
  },
  {
    name: "Dermatite Seborreica",
    description: "Tratamento eficaz para o controle da dermatite seborreica, com orientações para prevenção de crises.",
    details: "A dermatite seborreica é uma condição recorrente que afeta couro cabeludo e face. Oferecemos tratamento para controle dos sintomas e orientações para manutenção, reduzindo a frequência e intensidade das crises."
  },
];

export const TREATMENTS_ESTETICA = [
  {
    name: "Toxina Botulínica",
    description: "Aplicação precisa para suavização de linhas de expressão, com resultado natural e harmonioso.",
    details: "A toxina botulínica é um dos procedimentos mais seguros e eficazes da medicina estética. Realizamos aplicações com técnica refinada para suavizar rugas dinâmicas mantendo a expressividade natural do rosto."
  },
  {
    name: "Botox Nefertiti",
    description: "Técnica avançada para definição do contorno mandibular e rejuvenescimento do pescoço.",
    details: "O Botox Nefertiti é uma técnica sofisticada que utiliza a toxina botulínica para definir o contorno da mandíbula e melhorar a aparência do pescoço, proporcionando um efeito lifting sutil e elegante."
  },
  {
    name: "Preenchimento com Ácido Hialurônico",
    description: "Restauração de volume e contorno facial com naturalidade, utilizando as melhores marcas do mercado.",
    details: "O ácido hialurônico é uma substância naturalmente presente na pele. Utilizamos técnicas avançadas de preenchimento para restaurar volume, hidratar profundamente e melhorar contornos faciais com resultados naturais."
  },
  {
    name: "Bioestimuladores de Colágeno",
    description: "Estímulo à produção natural de colágeno para firmeza e rejuvenescimento progressivo da pele.",
    details: "Os bioestimuladores de colágeno promovem a produção natural de colágeno pela pele, resultando em melhora progressiva da firmeza, textura e qualidade cutânea. Os resultados são graduais e duradouros."
  },
  {
    name: "Peelings Químicos",
    description: "Renovação celular controlada para tratamento de manchas, textura e luminosidade da pele.",
    details: "Os peelings químicos promovem renovação celular controlada, melhorando manchas, textura, poros dilatados e luminosidade. Utilizamos diferentes tipos e concentrações conforme a necessidade de cada pele."
  },
  {
    name: "Skinbooster",
    description: "Hidratação profunda injetável para pele luminosa, viçosa e com aspecto saudável.",
    details: "O Skinbooster é um tratamento injetável de hidratação profunda que melhora a qualidade da pele de dentro para fora, proporcionando luminosidade, viço e aspecto saudável com resultados progressivos."
  },
  {
    name: "Drug Delivery",
    description: "Técnica que potencializa a absorção de ativos pela pele, maximizando resultados dos tratamentos.",
    details: "O Drug Delivery é uma técnica que utiliza microcanais na pele para potencializar a absorção de ativos cosméticos e farmacológicos, maximizando os resultados dos tratamentos dermatológicos."
  },
  {
    name: "Fios de PDO",
    description: "Lifting não cirúrgico com fios absorvíveis para sustentação e estímulo de colágeno.",
    details: "Os fios de PDO são uma opção minimamente invasiva para lifting facial. Proporcionam sustentação imediata e estimulam a produção de colágeno ao longo do tempo, com resultados naturais e progressivos."
  },
  {
    name: "Fotoproteção Avançada",
    description: "Orientação especializada em fotoproteção com os melhores produtos e tecnologias disponíveis.",
    details: "A fotoproteção é a base de qualquer tratamento dermatológico. Oferecemos orientação personalizada sobre os melhores protetores solares e estratégias de fotoproteção para cada tipo de pele e rotina."
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
    text: "Depois de anos lutando contra a acne, finalmente encontrei uma dermatologista que entendeu minha pele. Gratidão eterna!",
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
    excerpt: "Entenda o que é o melasma, suas causas e os tratamentos mais eficazes disponíveis atualmente na dermatologia.",
    category: "Dermatologia Clínica",
    date: "2025-05-20",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=400&fit=crop",
    content: "O melasma é uma condição de hiperpigmentação que afeta principalmente mulheres, causando manchas escuras no rosto. Fatores como exposição solar, hormônios e predisposição genética contribuem para seu aparecimento. O tratamento envolve uma combinação de fotoproteção rigorosa, despigmentantes tópicos e procedimentos em consultório como peelings e laser."
  },
  {
    slug: "toxina-botulinica-mitos-verdades",
    title: "Toxina Botulínica: Mitos e Verdades",
    excerpt: "Desmistificamos os principais mitos sobre a toxina botulínica e explicamos como o procedimento funciona na prática.",
    category: "Estética Avançada",
    date: "2025-04-10",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop",
    content: "A toxina botulínica é um dos procedimentos estéticos mais realizados no mundo, mas ainda gera muitas dúvidas. Quando aplicada por um profissional qualificado, o resultado é natural e harmonioso, sem o temido aspecto congelado. O procedimento é rápido, com mínimo desconforto, e os resultados aparecem em poucos dias."
  },
  {
    slug: "rotina-skincare-iniciantes",
    title: "Rotina de Skincare para Iniciantes",
    excerpt: "Montar uma rotina de cuidados com a pele não precisa ser complicado. Veja o passo a passo essencial para começar.",
    category: "Skincare",
    date: "2025-03-25",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=400&fit=crop",
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
