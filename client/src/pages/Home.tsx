/*
 * DESIGN: "Atelier de Beleza" — Editorial de Moda de Luxo
 * Full homepage with all 8 sections
 * Palette: Chocolate #5C2B1D | Cream #F2EDE4 | Warm White #FAFAF7 | Gold #C9A55A
 * Typography: Cormorant Garamond (display), Great Vibes (script), Raleway (body)
 */
import { useState } from "react";
import { Link } from "wouter";
import {
  SITE,
  IMAGES,
  TREATMENTS_DERMA,
  TREATMENTS_ESTETICA,
  BLOG_POSTS,
} from "@/lib/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";
import AnimatedSection from "@/components/AnimatedSection";
import TreatmentModal from "@/components/TreatmentModal";
import {
  Heart,
  Shield,
  Sparkles,
  Users,
  MapPin,
  Phone,
  Instagram,
  ArrowRight,
  Send,
  Check,
  HeartHandshake,
  ScanFace,
  Gem,
} from "lucide-react";

export default function Home() {
  const [selectedTreatment, setSelectedTreatment] = useState<null | {
    name: string;
    description: string;
    details: string;
  }>(null);
  const [contactForm, setContactForm] = useState({ nome: "", telefone: "", mensagem: "" });
  const [formSent, setFormSent] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message with form data
    const msg = `Olá, Dra. Monique! Meu nome é ${contactForm.nome}. Telefone: ${contactForm.telefone}. Mensagem: ${contactForm.mensagem}`;
    const url = `https://wa.me/5511921968645?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    setFormSent(true);
    setTimeout(() => setFormSent(false), 3000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ===== SECTION 1: HERO ===== */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center bg-[#FAFAF7] pt-20 overflow-hidden"
      >
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center py-12 lg:py-0">
          {/* Left Column — Text */}
          <div className="lg:col-span-5 space-y-6 lg:space-y-8 z-10 order-2 lg:order-1">
            <AnimatedSection>
              <span className="inline-block font-body text-xs tracking-[0.25em] uppercase text-[#5C2B1D]/60 border border-[#C9A55A]/30 px-4 py-1.5 rounded-sm">
                Dermatologia | Medicina Estética
              </span>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <h1 className="font-script text-5xl md:text-6xl lg:text-7xl text-[#5C2B1D] leading-tight">
                Medicina e Beleza
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <p className="font-display italic text-xl md:text-2xl text-[#5C2B1D]/70 leading-relaxed">
                Pele, Saúde e Beleza
              </p>
            </AnimatedSection>

            <AnimatedSection delay={450}>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="#tratamentos"
                  className="px-7 py-3.5 bg-[#5C2B1D] text-[#F2EDE4] font-body text-xs tracking-[0.15em] uppercase hover:bg-[#7A3D2A] transition-all duration-300 rounded-sm text-center"
                >
                  Conheça os Tratamentos
                </a>
                <a
                  href={SITE.whatsappSPLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 border border-[#5C2B1D] text-[#5C2B1D] font-body text-xs tracking-[0.15em] uppercase hover:bg-[#5C2B1D] hover:text-[#F2EDE4] transition-all duration-300 rounded-sm text-center"
                >
                  Agendar pelo WhatsApp
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Gold Divider Line */}
          <div className="hidden lg:flex lg:col-span-1 justify-center order-2">
            <div className="w-[1px] h-80 bg-gradient-to-b from-[#C9A55A]/0 via-[#C9A55A] to-[#C9A55A]/0" />
          </div>

          {/* Right Column — Image */}
          <div className="lg:col-span-6 relative order-1 lg:order-3">
            <AnimatedSection delay={200}>
              <div className="relative">
                {/* Gold frame accent */}
                <div className="absolute -top-3 -right-3 w-full h-full border border-[#C9A55A]/30 rounded-sm" />
                <img
                  src={IMAGES.hero}
                  alt="Dra. Monique Damiano"
                  className="relative w-full h-[500px] lg:h-[520px] object-cover object-top rounded-sm"
                  loading="eager"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* CRM Strip */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#5C2B1D]/5 py-3">
          <p className="text-center font-body text-xs tracking-[0.2em] text-[#5C2B1D]/50">
            {SITE.crmSP} · {SITE.crmRS}
          </p>
        </div>
      </section>

      {/* ===== SECTION 2: SOBRE ===== */}
      <section id="sobre" className="py-20 lg:py-28 bg-[#FAFAF7]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <AnimatedSection>
              <div className="space-y-6">
                <span className="font-body text-xs tracking-[0.25em] uppercase text-[#C9A55A]">
                  Sobre
                </span>
                <h2 className="font-script text-4xl md:text-5xl text-[#5C2B1D] leading-tight">
                  Prazer, sou a Dra. Monique Damiano
                </h2>
                <div className="w-16 h-[1px] bg-[#C9A55A]" />
                <p className="font-body text-base text-[#5C2B1D]/70 leading-relaxed">
                  Sou médica formada com especialização em Dermatologia e Medicina Estética. 
                  Minha paixão é cuidar da pele de cada paciente de forma individualizada, 
                  unindo ciência e sensibilidade para alcançar resultados que respeitam a 
                  beleza natural de cada pessoa.
                </p>
                <p className="font-body text-base text-[#5C2B1D]/70 leading-relaxed">
                  Acredito que a dermatologia vai além do tratamento de doenças de pele — 
                  é sobre autoestima, bem-estar e confiança. Cada consulta é um momento de 
                  escuta, acolhimento e planejamento cuidadoso para que você se sinta bem 
                  na sua própria pele.
                </p>
                <p className="font-body text-base text-[#5C2B1D]/70 leading-relaxed">
                  Atendo em São Paulo/SP e Marau/RS, sempre com o compromisso de oferecer 
                  medicina baseada em evidências com um toque humano e acolhedor.
                </p>
              </div>
            </AnimatedSection>

            {/* Image */}
            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="absolute -bottom-4 -left-4 w-full h-full border border-[#C9A55A]/30 rounded-sm" />
                <img
                  src={IMAGES.about}
                  alt="Dra. Monique Damiano em seu consultório"
                  className="relative w-full h-[620px] object-cover object-top rounded-sm"
                  loading="lazy"
                />
              </div>
            </AnimatedSection>
          </div>

          {/* 4 Pillars */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 lg:mt-20">
            {[
              { icon: Shield, label: "Medicina baseada em evidências" },
              { icon: Heart, label: "Atendimento humanizado" },
              { icon: Sparkles, label: "Resultados naturais" },
              { icon: Users, label: "Acompanhamento contínuo" },
            ].map((pillar, i) => (
              <AnimatedSection key={pillar.label} delay={i * 100}>
                <div className="text-center space-y-3 p-6">
                  <pillar.icon className="w-8 h-8 text-[#C9A55A] mx-auto stroke-[1.5]" />
                  <p className="font-display text-sm text-[#5C2B1D] leading-snug">
                    {pillar.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Quote Card */}
          <AnimatedSection delay={200}>
            <div className="mt-16 bg-[#5C2B1D] rounded-sm p-8 md:p-12 text-center max-w-2xl mx-auto">
              <p className="font-display italic text-xl md:text-2xl text-[#F2EDE4] leading-relaxed mb-4">
                "Com amor, cuidado e planejamento."
              </p>
              <span className="font-script text-2xl text-[#C9A55A]">
                Dra. Monique Damiano
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== SECTION 3: TRATAMENTOS ===== */}
      <section id="tratamentos" className="py-20 lg:py-28 bg-[#F2EDE4]">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="font-body text-xs tracking-[0.25em] uppercase text-[#C9A55A]">
                Especialidades
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-[#5C2B1D] mt-3">
                Tratamentos
              </h2>
              <p className="font-display italic text-lg text-[#5C2B1D]/60 mt-3">
                Cada pele é única. Cada tratamento, personalizado.
              </p>
              <div className="w-16 h-[1px] bg-[#C9A55A] mx-auto mt-6" />
            </div>
          </AnimatedSection>

          {/* Dermatologia Clínica */}
          <div className="mb-16">
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-8">
                <img
                  src={IMAGES.treatmentDerma}
                  alt="Dermatologia Clínica"
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#C9A55A]/30"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-display text-2xl text-[#5C2B1D]">
                    Dermatologia Clínica
                  </h3>
                  <div className="w-10 h-[1px] bg-[#C9A55A] mt-1" />
                </div>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {TREATMENTS_DERMA.map((t, i) => (
                <AnimatedSection key={t.name} delay={i * 60}>
                  <button
                    onClick={() => setSelectedTreatment(t)}
                    className="w-full text-left bg-[#FAFAF7] border border-[#C9A55A]/15 p-6 rounded-sm group hover:bg-[#5C2B1D] transition-all duration-500 h-full"
                  >
                    <h4 className="font-display italic text-lg text-[#5C2B1D] group-hover:text-[#F2EDE4] transition-colors duration-500 mb-2">
                      {t.name}
                    </h4>
                    <p className="font-body text-xs text-[#5C2B1D]/60 group-hover:text-[#F2EDE4]/70 transition-colors duration-500 leading-relaxed line-clamp-3">
                      {t.description}
                    </p>
                    <span className="inline-block mt-3 font-body text-xs text-[#C9A55A] group-hover:text-[#C9A55A] tracking-wider uppercase">
                      Saiba mais →
                    </span>
                  </button>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Estética Avançada */}
          <div>
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-8">
                <img
                  src={IMAGES.treatmentEstetica}
                  alt="Estética Avançada"
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#C9A55A]/30"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-display text-2xl text-[#5C2B1D]">
                    Estética Avançada
                  </h3>
                  <div className="w-10 h-[1px] bg-[#C9A55A] mt-1" />
                </div>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {TREATMENTS_ESTETICA.map((t, i) => (
                <AnimatedSection key={t.name} delay={i * 60}>
                  <button
                    onClick={() => setSelectedTreatment(t)}
                    className="w-full text-left bg-[#FAFAF7] border border-[#C9A55A]/15 p-6 rounded-sm group hover:bg-[#5C2B1D] transition-all duration-500 h-full"
                  >
                    <h4 className="font-display italic text-lg text-[#5C2B1D] group-hover:text-[#F2EDE4] transition-colors duration-500 mb-2">
                      {t.name}
                    </h4>
                    <p className="font-body text-xs text-[#5C2B1D]/60 group-hover:text-[#F2EDE4]/70 transition-colors duration-500 leading-relaxed line-clamp-3">
                      {t.description}
                    </p>
                    <span className="inline-block mt-3 font-body text-xs text-[#C9A55A] group-hover:text-[#C9A55A] tracking-wider uppercase">
                      Saiba mais →
                    </span>
                  </button>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: ONDE ME ENCONTRAR ===== */}
      <section className="py-20 lg:py-28 bg-[#5C2B1D]">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="font-body text-xs tracking-[0.25em] uppercase text-[#C9A55A]">
                Localização
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-[#F2EDE4] mt-3">
                Onde Me Encontrar
              </h2>
              <div className="w-16 h-[1px] bg-[#C9A55A] mx-auto mt-6" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* São Paulo */}
            <AnimatedSection>
              <div className="bg-[#2A1208] border border-[#C9A55A]/20 rounded-sm p-8 space-y-4 text-center flex flex-col items-center justify-center">
                <div className="flex items-center justify-center gap-3">
                  <MapPin className="w-5 h-5 text-[#C9A55A]" />
                  <h3 className="font-display text-xl text-[#F2EDE4]">
                    São Paulo, SP
                  </h3>
                </div>
                <p className="font-body text-sm text-[#F2EDE4]/70 leading-relaxed">
                  {SITE.addressSP}
                </p>
                <p className="font-body text-xs text-[#C9A55A]/80">
                  Atendimento semanal
                </p>
                <div className="flex items-center gap-2 text-[#F2EDE4]/60">
                  <Phone className="w-4 h-4" />
                  <span className="font-body text-sm">{SITE.whatsappSP}</span>
                </div>
                <a
                  href={SITE.whatsappSPLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-5 py-2.5 bg-[#C9A55A] text-[#2A1208] font-body text-xs tracking-[0.15em] uppercase hover:bg-[#D4B76A] transition-colors duration-300 rounded-sm"
                >
                  Agendar em SP →
                </a>
              </div>
            </AnimatedSection>

            {/* Marau RS */}
            <AnimatedSection delay={150}>
              <div className="bg-[#2A1208] border border-[#C9A55A]/20 rounded-sm p-8 h-[283px] flex flex-col justify-center items-center text-center space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <MapPin className="w-5 h-5 text-[#C9A55A]" />
                  <h3 className="font-display text-xl text-[#F2EDE4]">
                    Marau, RS
                  </h3>
                </div>
                <p className="font-body text-sm text-[#F2EDE4]/70 leading-relaxed">
                  {SITE.addressRS}
                </p>
                <p className="font-body text-xs text-[#C9A55A]/80">
                  Atendimento mensal
                </p>
                <div className="flex items-center gap-2 text-[#F2EDE4]/60">
                  <Phone className="w-4 h-4" />
                  <span className="font-body text-sm">{SITE.whatsappRS}</span>
                </div>
                <a
                  href={SITE.whatsappRSLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-5 py-2.5 bg-[#C9A55A] text-[#2A1208] font-body text-xs tracking-[0.15em] uppercase hover:bg-[#D4B76A] transition-colors duration-300 rounded-sm"
                >
                  Agendar em Marau →
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Map */}
          <AnimatedSection delay={200}>
            <div className="mt-10 max-w-4xl mx-auto rounded-sm overflow-hidden border border-[#C9A55A]/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.7!2d-46.66!3d-23.59!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM1JzI0LjAiUyA0NsijMzknMzYuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="300"
                style={{ border: 0, filter: "sepia(20%) saturate(80%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do consultório"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== SECTION 5: DIFERENCIAIS ===== */}
      <section className="py-20 lg:py-28 bg-[#F2EDE4]">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <span className="font-body text-xs tracking-[0.25em] uppercase text-[#C9A55A]">
                Diferenciais
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-[#5C2B1D] mt-3">
                Uma Dermatologia Guiada por Técnica, Escuta e Naturalidade
              </h2>
              <p className="font-display italic text-lg text-[#5C2B1D]/65 mt-4 leading-relaxed">
                Um cuidado pensado para respeitar a individualidade de cada paciente, com olhar clínico, planejamento e foco em resultados elegantes e coerentes com sua beleza.
              </p>
              <div className="w-16 h-[1px] bg-[#C9A55A] mx-auto mt-6" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-10 items-stretch">
            <AnimatedSection>
              <div className="h-full bg-[#FAF6F0] border border-[#C9A55A]/15 rounded-sm p-8 md:p-10 shadow-[0_24px_60px_rgba(92,43,29,0.08)]">
                <span className="font-body text-xs tracking-[0.2em] uppercase text-[#C9A55A]">
                  Pilares do atendimento
                </span>
                <div className="mt-8 space-y-6">
                  {[
                    {
                      icon: HeartHandshake,
                      title: "Escuta atenta e consulta individualizada",
                      text: "Cada plano terapêutico parte de uma avaliação cuidadosa da pele, da rotina, das queixas e dos objetivos de cada paciente.",
                    },
                    {
                      icon: ScanFace,
                      title: "Precisão diagnóstica e planejamento",
                      text: "A condução clínica une raciocínio dermatológico, acompanhamento e escolhas alinhadas à necessidade real de cada caso.",
                    },
                    {
                      icon: Gem,
                      title: "Resultados naturais e elegantes",
                      text: "Na estética, a prioridade é realçar a beleza com equilíbrio, leveza e respeito à identidade facial de cada paciente.",
                    },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="grid grid-cols-[auto_1fr] gap-4 items-start">
                        <div className="w-11 h-11 rounded-full border border-[#C9A55A]/30 bg-[#FFFDF8] flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-[#C9A55A]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-display text-2xl text-[#5C2B1D] leading-tight">
                            {item.title}
                          </h3>
                          <p className="font-body text-[15px] leading-7 text-[#5C2B1D]/72">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="h-full bg-[#2A1208] text-[#F6F0E8] rounded-sm p-8 md:p-10 border border-[#C9A55A]/20 flex flex-col justify-between shadow-[0_24px_60px_rgba(42,18,8,0.18)]">
                <div>
                  <span className="font-body text-xs tracking-[0.2em] uppercase text-[#C9A55A]">
                    O que orienta cada cuidado
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl leading-tight mt-5">
                    Segurança, constância e um olhar integral sobre a pele.
                  </h3>
                  <p className="font-body text-sm md:text-[15px] leading-7 text-[#F6F0E8]/78 mt-6">
                    Do tratamento clínico à estética avançada, o atendimento é construído com responsabilidade, clareza nas orientações e acompanhamento próximo em cada etapa.
                  </p>
                </div>

                <div className="mt-10 space-y-4">
                  {[
                    "Condutas personalizadas e baseadas em avaliação clínica",
                    "Orientações claras para rotina, prevenção e manutenção",
                    "Integração entre saúde, qualidade da pele e estética natural",
                    "Acompanhamento próximo para evolução com confiança",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#C9A55A]/16 border border-[#C9A55A]/30 flex items-center justify-center mt-0.5 shrink-0">
                        <Check className="w-3.5 h-3.5 text-[#C9A55A]" />
                      </div>
                      <p className="font-body text-sm md:text-[15px] leading-7 text-[#F6F0E8]/88">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: BLOG ===== */}
      <section className="py-20 lg:py-28 bg-[#FAFAF7]">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="font-body text-xs tracking-[0.25em] uppercase text-[#C9A55A]">
                Blog
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-[#5C2B1D] mt-3">
                Dicas de Pele e Beleza
              </h2>
              <p className="font-display italic text-lg text-[#5C2B1D]/60 mt-3">
                Conteúdo sobre dermatologia, estética e cuidados com a pele
              </p>
              <div className="w-16 h-[1px] bg-[#C9A55A] mx-auto mt-6" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {BLOG_POSTS.slice(0, 4).map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 100}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block bg-[#F2EDE4] rounded-sm overflow-hidden border border-[#C9A55A]/10 hover:shadow-lg transition-all duration-500"
                >
                  <div className="overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="font-body text-[10px] tracking-[0.2em] uppercase text-[#C9A55A]">
                        {post.category}
                      </span>
                      <span className="font-body text-[10px] text-[#5C2B1D]/40">
                        {new Date(post.date).toLocaleDateString("pt-BR", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <h3 className="font-display text-lg text-[#5C2B1D] group-hover:text-[#5C2B1D] leading-snug">
                      {post.title}
                    </h3>
                    <p className="font-body text-xs text-[#5C2B1D]/60 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={300}>
            <div className="text-center mt-10">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-7 py-3 border border-[#5C2B1D] text-[#5C2B1D] font-body text-xs tracking-[0.15em] uppercase hover:bg-[#5C2B1D] hover:text-[#F2EDE4] transition-all duration-300 rounded-sm"
              >
                Ver todos os artigos
                <ArrowRight size={14} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== SECTION 8: CONTATO ===== */}
      <section id="contato" className="py-20 lg:py-28 bg-[#FAFAF7]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
            {/* Left — Info */}
            <AnimatedSection>
              <div className="space-y-6">
                <span className="font-body text-xs tracking-[0.25em] uppercase text-[#C9A55A]">
                  Contato
                </span>
                <h2 className="font-script text-4xl md:text-5xl text-[#5C2B1D] leading-tight">
                  Vamos Conversar?
                </h2>
                <div className="w-16 h-[1px] bg-[#C9A55A]" />
                <p className="font-body text-base text-[#5C2B1D]/70 leading-relaxed">
                  Estou à disposição para tirar suas dúvidas e agendar sua consulta. 
                  Preencha o formulário ao lado ou entre em contato diretamente pelo WhatsApp.
                </p>

                <div className="space-y-4 pt-4">
                  <a
                    href={SITE.whatsappSPLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#5C2B1D]/70 hover:text-[#5C2B1D] transition-colors"
                  >
                    <Phone className="w-5 h-5 text-[#C9A55A]" />
                    <span className="font-body text-sm">SP: {SITE.whatsappSP}</span>
                  </a>
                  <a
                    href={SITE.whatsappRSLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#5C2B1D]/70 hover:text-[#5C2B1D] transition-colors"
                  >
                    <Phone className="w-5 h-5 text-[#C9A55A]" />
                    <span className="font-body text-sm">RS: {SITE.whatsappRS}</span>
                  </a>
                  <a
                    href={SITE.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#5C2B1D]/70 hover:text-[#5C2B1D] transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-[#C9A55A]" />
                    <span className="font-body text-sm">{SITE.instagram}</span>
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Right — Form */}
            <AnimatedSection delay={200}>
              <form
                onSubmit={handleContactSubmit}
                className="bg-[#F2EDE4] border border-[#C9A55A]/15 rounded-sm p-8 space-y-5"
              >
                <div>
                  <label className="block font-body text-xs tracking-[0.15em] uppercase text-[#5C2B1D]/60 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    required
                    value={contactForm.nome}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, nome: e.target.value })
                    }
                    className="w-full bg-[#FAFAF7] border border-[#C9A55A]/20 rounded-sm px-4 py-3 font-body text-sm text-[#5C2B1D] placeholder-[#5C2B1D]/30 focus:outline-none focus:border-[#C9A55A] transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block font-body text-xs tracking-[0.15em] uppercase text-[#5C2B1D]/60 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    required
                    value={contactForm.telefone}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, telefone: e.target.value })
                    }
                    className="w-full bg-[#FAFAF7] border border-[#C9A55A]/20 rounded-sm px-4 py-3 font-body text-sm text-[#5C2B1D] placeholder-[#5C2B1D]/30 focus:outline-none focus:border-[#C9A55A] transition-colors"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label className="block font-body text-xs tracking-[0.15em] uppercase text-[#5C2B1D]/60 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={contactForm.mensagem}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, mensagem: e.target.value })
                    }
                    className="w-full bg-[#FAFAF7] border border-[#C9A55A]/20 rounded-sm px-4 py-3 font-body text-sm text-[#5C2B1D] placeholder-[#5C2B1D]/30 focus:outline-none focus:border-[#C9A55A] transition-colors resize-none"
                    placeholder="Sua mensagem..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#5C2B1D] text-[#F2EDE4] font-body text-xs tracking-[0.15em] uppercase hover:bg-[#7A3D2A] transition-colors duration-300 rounded-sm"
                >
                  <Send size={14} />
                  {formSent ? "Mensagem enviada!" : "Enviar mensagem"}
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <CookieBanner />
      <TreatmentModal
        treatment={selectedTreatment}
        onClose={() => setSelectedTreatment(null)}
      />
    </div>
  );
}
