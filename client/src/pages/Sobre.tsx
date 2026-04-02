/*
 * DESIGN: "Atelier de Beleza" — Editorial de Moda de Luxo
 * Página: /sobre — Sobre a Dra. Monique Damiano
 * SEO: Médica com atuação em Medicina Estética e Saúde da Pele em SP e RS
 */
import { Heart, Shield, Sparkles, Users, MapPin } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedSection from "@/components/AnimatedSection";
import SEOHead from "@/components/SEOHead";
import { SITE, SEO, IMAGES } from "@/lib/constants";

export default function Sobre() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title={SEO.sobre.title}
        description={SEO.sobre.description}
        canonical={`${SITE.siteUrl}/sobre`}
        ogImage={IMAGES.about}
      />
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="relative pt-20 pb-0 bg-[#FAFAF7] overflow-hidden">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-0 items-start min-h-[60vh]">
          {/* Text */}
          <div className="flex flex-col justify-start pt-12 pb-16 pr-0 lg:pr-12 space-y-6 order-2 lg:order-1">
            <AnimatedSection>
              <span className="font-body text-xs tracking-[0.25em] uppercase text-[#C9A55A]">
                Sobre
              </span>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#5C2B1D] leading-tight">
                Dra. Monique Damiano
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p className="font-display italic text-xl text-[#C9A55A] leading-snug">
                São Paulo (SP) & Marau (RS)
              </p>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="w-16 h-[1px] bg-[#C9A55A]" />
            </AnimatedSection>
            <AnimatedSection delay={400}>
              {/* SEO-rich intro paragraph */}
              <p className="font-body text-base text-[#5C2B1D]/80 leading-relaxed">
                Médica com sólida formação e atuação em <strong className="font-medium text-[#5C2B1D]">Medicina Estética e cuidados
                com a pele</strong>, a Dra. Monique Damiano Chiosi atende em{" "}
                <strong className="font-medium text-[#5C2B1D]">São Paulo (SP)</strong> e{" "}
                <strong className="font-medium text-[#5C2B1D]">Marau (RS)</strong> com o compromisso
                de oferecer tratamentos individualizados, baseados em evidências e com foco em
                resultados naturais e duradouros.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={500}>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={SITE.whatsappSPLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 bg-[#5C2B1D] text-[#F2EDE4] font-body text-xs tracking-[0.15em] uppercase hover:bg-[#7A3D2A] transition-all duration-300 rounded-sm text-center"
                >
                  Agendar Consulta
                </a>
                <Link
                  href="/tratamentos"
                  className="px-7 py-3.5 border border-[#5C2B1D] text-[#5C2B1D] font-body text-xs tracking-[0.15em] uppercase hover:bg-[#5C2B1D] hover:text-[#F2EDE4] transition-all duration-300 rounded-sm text-center"
                >
                  Ver Tratamentos
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2 h-72 lg:h-full min-h-[400px]">
            <AnimatedSection delay={150}>
              <div className="relative h-full">
                <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#C9A55A]/30 rounded-sm hidden lg:block" />
                <img
                  src={IMAGES.about}
                  alt="Dra. Monique Damiano — Médica com atuação em Medicina Estética"
                  className="relative w-full h-full object-cover object-top rounded-sm"
                  loading="eager"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== SOBRE — TEXTO COMPLETO ===== */}
      <section className="py-20 lg:py-28 bg-[#F5F0E8]">
        <div className="container max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="font-body text-xs tracking-[0.25em] uppercase text-[#C9A55A] mb-4 block">
              Trajetória
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-[#5C2B1D] mb-6 leading-snug">
              Uma medicina que olha para o todo
            </h2>
            <div className="w-16 h-[1px] bg-[#C9A55A] mb-8" />
          </AnimatedSection>

          <div className="space-y-5 font-body text-base text-[#5C2B1D]/80 leading-relaxed">
            <AnimatedSection delay={100}>
              <p>
                Formada em Medicina e com atuação voltada para a saúde da pele e Medicina Estética,
                a Dra. Monique Damiano construiu sua trajetória pautada na escuta ativa, no raciocínio
                clínico cuidadoso e no respeito à individualidade de cada paciente. Seu objetivo é
                tratar a pele não apenas como uma superfície, mas como reflexo da saúde, da autoestima
                e do bem-estar de quem a busca.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <p>
                Acredita que a{" "}
                <strong className="font-medium text-[#5C2B1D]">medicina estética de qualidade</strong>{" "}
                começa muito antes do procedimento: está na consulta detalhada, na investigação das
                causas, na orientação clara sobre rotina e cuidados, e no planejamento compartilhado
                com cada paciente. Procedimentos como{" "}
                <strong className="font-medium text-[#5C2B1D]">
                  toxina botulínica, preenchimento com ácido hialurônico, bioestimuladores de colágeno
                  e peelings químicos
                </strong>{" "}
                são ferramentas — e como tais, devem ser usadas com precisão, responsabilidade e senso
                estético apurado.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p>
                No campo dos{" "}
                <strong className="font-medium text-[#5C2B1D]">tratamentos de pele</strong>, a Dra.
                Monique acompanha condições como{" "}
                <strong className="font-medium text-[#5C2B1D]">
                  acne, melasma, rosácea, queda capilar e pele sensível
                </strong>
                , sempre com protocolos baseados em evidências científicas atualizadas e adaptados às
                necessidades reais de cada paciente.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={250}>
              <p>
                Atende em dois locais:{" "}
                <strong className="font-medium text-[#5C2B1D]">São Paulo (SP)</strong>, com consultas
                semanais, e{" "}
                <strong className="font-medium text-[#5C2B1D]">Marau (RS)</strong>, com agenda mensal,
                garantindo continuidade e qualidade no atendimento em ambas as cidades.
              </p>
            </AnimatedSection>
          </div>

          {/* Quote */}
          <AnimatedSection delay={300}>
            <div className="mt-12 bg-[#5C2B1D] rounded-sm p-8 md:p-10 text-center">
              <p className="font-display italic text-xl md:text-2xl text-[#F2EDE4] leading-relaxed mb-4">
                "Cada consulta é um momento de escuta, acolhimento e planejamento
                cuidadoso para que você se sinta bem na sua própria pele."
              </p>
              <span className="font-script text-2xl text-[#C9A55A]">
                Dra. Monique Damiano
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== 4 PILARES ===== */}
      <section className="py-20 lg:py-28 bg-[#FAFAF7]">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="font-body text-xs tracking-[0.25em] uppercase text-[#C9A55A]">
                Valores
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-[#5C2B1D] mt-3">
                O que guia cada atendimento
              </h2>
              <div className="w-16 h-[1px] bg-[#C9A55A] mx-auto mt-6" />
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto items-stretch">
            {[
              { icon: Shield, label: "Medicina baseada em evidências", desc: "Condutas fundamentadas na ciência mais atual" },
              { icon: Heart, label: "Atendimento humanizado", desc: "Escuta ativa e respeito à individualidade" },
              { icon: Sparkles, label: "Resultados naturais", desc: "Estética que realça, não transforma" },
              { icon: Users, label: "Acompanhamento contínuo", desc: "Presença em todas as etapas do tratamento" },
            ].map((pillar, i) => (
              <AnimatedSection key={pillar.label} delay={i * 100} className="h-full">
                <div className="flex flex-col items-center text-center gap-3 p-6 bg-[#F2EDE4] rounded-sm border border-[#C9A55A]/15 h-full">
                  <pillar.icon className="w-8 h-8 text-[#C9A55A] mx-auto stroke-[1.5] shrink-0" />
                  <p className="font-display text-base text-[#5C2B1D] leading-snug">
                    {pillar.label}
                  </p>
                  <p className="font-body text-xs text-[#5C2B1D]/60 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LOCAIS DE ATENDIMENTO ===== */}
      <section className="py-20 lg:py-28 bg-[#5C2B1D]">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="font-body text-xs tracking-[0.25em] uppercase text-[#C9A55A]">
                Localização
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-[#F2EDE4] mt-3">
                Locais de Atendimento
              </h2>
              <div className="w-16 h-[1px] bg-[#C9A55A] mx-auto mt-6" />
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { city: "São Paulo, SP", addr: SITE.addressSP, freq: "Atendimento semanal", link: SITE.whatsappSPLink, btnLabel: "Agendar em SP →" },
              { city: "Marau, RS", addr: SITE.addressRS, freq: "Atendimento mensal", link: SITE.whatsappRSLink, btnLabel: "Agendar em Marau →" },
            ].map((loc, i) => (
              <AnimatedSection key={loc.city} delay={i * 100}>
                <div className="bg-[#2A1208] border border-[#C9A55A]/20 rounded-sm p-8 text-center space-y-3">
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4 text-[#C9A55A]" />
                    <h3 className="font-display text-xl text-[#F2EDE4]">{loc.city}</h3>
                  </div>
                  <p className="font-body text-sm text-[#F2EDE4]/70 leading-relaxed">{loc.addr}</p>
                  <p className="font-body text-xs text-[#C9A55A]/80">{loc.freq}</p>
                  <a
                    href={loc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 px-5 py-2.5 bg-[#C9A55A] text-[#2A1208] font-body text-xs tracking-[0.15em] uppercase hover:bg-[#D4B76A] transition-colors duration-300 rounded-sm"
                  >
                    {loc.btnLabel}
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="py-20 bg-[#EDE5D8]">
        <div className="container text-center">
          <AnimatedSection>
            <span className="font-body text-xs tracking-[0.25em] uppercase text-[#C9A55A] mb-4 block">
              Próximo passo
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-[#5C2B1D] mb-4">
              Pronta para cuidar da sua pele?
            </h2>
            <p className="font-body text-base text-[#5C2B1D]/70 mb-8 max-w-lg mx-auto leading-relaxed">
              Agende sua consulta e dê o primeiro passo para um tratamento personalizado,
              com resultados que respeitam a sua beleza natural.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={SITE.whatsappSPLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#5C2B1D] text-[#F2EDE4] font-body text-xs tracking-[0.15em] uppercase hover:bg-[#7A3D2A] transition-all duration-300 rounded-sm"
              >
                Agendar em São Paulo (SP)
              </a>
              <a
                href={SITE.whatsappRSLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-[#5C2B1D] text-[#5C2B1D] font-body text-xs tracking-[0.15em] uppercase hover:bg-[#5C2B1D] hover:text-[#F2EDE4] transition-all duration-300 rounded-sm"
              >
                Agendar em Marau (RS)
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
