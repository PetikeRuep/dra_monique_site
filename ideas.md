# Brainstorm de Design — Dra. Monique Damiano

## Contexto
Website profissional para dermatologista e especialista em medicina estética. Identidade visual baseada no Instagram @dra.moniquedamiano: sofisticado, acolhedor, feminino, quente. Paleta: marrom chocolate (#5C2B1D), creme off-white (#F2EDE4), branco quente (#FAFAF7), dourado suave (#C9A55A).

---

<response>
<text>
## Ideia 1 — "Atelier de Beleza" (Editorial de Moda de Luxo)

**Design Movement**: Editorial de moda de luxo europeu — inspirado em revistas como Vogue Italia e catálogos de marcas como Chanel Beauty.

**Core Principles**:
1. Assimetria dramática com espaço negativo generoso
2. Tipografia como elemento visual principal (não apenas informativo)
3. Camadas visuais com sobreposição sutil de elementos
4. Transições cinematográficas entre seções

**Color Philosophy**: O marrom chocolate (#5C2B1D) é a "tinta" do editorial — usado em blocos dramáticos que criam contraste com o creme (#F2EDE4). O dourado (#C9A55A) aparece como fio condutor, literalmente — linhas finas que guiam o olhar. O branco quente (#FAFAF7) é o "papel" premium onde tudo repousa.

**Layout Paradigm**: Layout assimétrico com grid de 12 colunas quebrado intencionalmente. Seções alternam entre composições com imagem dominante à esquerda/direita e blocos de texto deslocados do centro. Uso de "bleeding edges" onde elementos ultrapassam seus containers.

**Signature Elements**:
1. Linhas douradas finas verticais e horizontais como divisores editoriais
2. Monograma MD em escala grande como marca d'água sutil em seções
3. Aspas tipográficas oversized em citações (estilo editorial)

**Interaction Philosophy**: Movimentos lentos e elegantes — como folhear uma revista de luxo. Hover states revelam informação gradualmente. Scroll suave com parallax sutil.

**Animation**: Fade-in com translate vertical suave (20px) em elementos ao entrar no viewport. Linhas douradas que se "desenham" ao scroll. Cards de tratamento com scale sutil (1.02) no hover. Transições de 0.6s com easing cubic-bezier(0.16, 1, 0.3, 1).

**Typography System**:
- Display/Títulos: Cormorant Garamond Italic (script elegante para nomes de tratamentos)
- Subtítulos/Nav: Cormorant Garamond Regular (serif refinado)
- Body: Raleway Light 300 (sans-serif arejado)
- Accent: Great Vibes para assinaturas e citações especiais
</text>
<probability>0.08</probability>
</response>

<response>
<text>
## Ideia 2 — "Maison Derma" (Clínica Premium Parisiense)

**Design Movement**: Minimalismo orgânico francês — inspirado em maisons de cosmética como Aesop e Le Labo, com toques de Art Nouveau simplificado.

**Core Principles**:
1. Minimalismo quente com texturas orgânicas
2. Hierarquia visual através de escala tipográfica extrema
3. Módulos com bordas arredondadas suaves e sombras difusas
4. Fotografia como peça central com tratamento monocromático quente

**Color Philosophy**: Predominância do creme (#F2EDE4) como tela base, criando sensação de papel artesanal. O marrom (#5C2B1D) é usado em doses concentradas — como um perfume forte que não precisa de muito. O dourado é quase invisível, aparecendo apenas em micro-interações e detalhes que recompensam a atenção.

**Layout Paradigm**: Grid modular com "rooms" — cada seção é um ambiente distinto com sua própria atmosfera, conectados por transições de cor suaves. Layout predominantemente centralizado mas com elementos que quebram a simetria pontualmente.

**Signature Elements**:
1. Bordas com cantos arredondados orgânicos (border-radius variável)
2. Texturas de papel/linho sutis nos fundos
3. Ícones desenhados à mão em estilo line-art dourado

**Interaction Philosophy**: Toque delicado — como entrar em uma boutique. Elementos respondem com suavidade, sem agressividade. Micro-animações que parecem "respirar".

**Animation**: Elementos aparecem com opacity fade de 0.8s. Cards "flutuam" com box-shadow que aumenta no hover. Scroll-triggered animations com threshold alto (elemento 30% visível antes de animar). Botões com transição de background 0.4s ease.

**Typography System**:
- Display: Playfair Display Italic (elegância clássica)
- Subtítulos: Libre Baskerville Regular
- Body: Jost Light 300
- Accent: Playfair Display Italic para citações
</text>
<probability>0.06</probability>
</response>

<response>
<text>
## Ideia 3 — "Terra & Ouro" (Luxo Brasileiro Contemporâneo)

**Design Movement**: Luxo tropical contemporâneo — fusão entre a sofisticação europeia e a calidez brasileira. Inspirado em marcas como Granado e Hotel Fasano.

**Core Principles**:
1. Contraste dramático entre seções escuras e claras
2. Elementos gráficos geométricos inspirados em art déco tropical
3. Fotografia com tratamento âmbar/sépia quente
4. Navegação fluida com scroll storytelling

**Color Philosophy**: Alternância rítmica entre fundos marrom escuro (#5C2B1D / #2A1208) e creme (#F2EDE4). O dourado (#C9A55A) é protagonista decorativo — aparece em molduras, separadores geométricos e no monograma. Cria sensação de "embalagem de luxo" onde o marrom é a caixa e o dourado é o laço.

**Layout Paradigm**: Full-width storytelling com seções que ocupam viewport completo. Composições em diagonal com clip-paths sutis separando seções. Grid assimétrico 60/40 alternando lados. Elementos "flutuantes" que quebram as bordas das seções.

**Signature Elements**:
1. Separadores geométricos art déco em dourado entre seções
2. Molduras douradas finas ao redor de imagens (estilo quadro)
3. Padrão sutil de textura em seções escuras (noise grain)

**Interaction Philosophy**: Experiência imersiva de storytelling — cada scroll revela uma nova "cena". Interações são recompensadoras com feedback visual rico. O site conta uma história do topo ao rodapé.

**Animation**: Parallax sutil em imagens hero. Seções com reveal animation usando clip-path ou mask. Elementos decorativos dourados com shimmer effect sutil. Stagger animation nos cards de tratamento (aparecem em sequência). Transições com spring physics (framer-motion).

**Typography System**:
- Display: Cormorant Italic (cursiva elegante para títulos de tratamento)
- Subtítulos/Nav: Cormorant Garamond Semi-Bold
- Body: Raleway Light 300
- Accent: Great Vibes para assinatura e monograma textual
</text>
<probability>0.07</probability>
</response>

---

## Decisão: Ideia 1 — "Atelier de Beleza" (Editorial de Moda de Luxo)

Escolho a Ideia 1 por melhor capturar o mood de "editorial de moda de luxo discreto + clínica premium europeia" descrito no briefing. A assimetria dramática, o uso editorial da tipografia e as linhas douradas como fio condutor criam uma experiência visual que é sofisticada sem ser fria, elegante sem ser exagerada — exatamente o posicionamento da Dra. Monique Damiano.
