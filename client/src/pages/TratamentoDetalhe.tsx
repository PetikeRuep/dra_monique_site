/*
 * DESIGN: "Atelier de Beleza" — Editorial de Moda de Luxo
 * Página: /tratamentos/:slug — Detalhe de cada tratamento
 * SEO: título e descrição dinâmicos por tratamento, com localização SP e RS
 */
import { Link, useParams } from "wouter";
import { ArrowLeft, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedSection from "@/components/AnimatedSection";
import SEOHead from "@/components/SEOHead";
import NotFound from "@/pages/NotFound";
import {
  SITE,
  IMAGES,
  TREATMENTS_DERMA,
  TREATMENTS_ESTETICA,
} from "@/lib/constants";

const ALL_TREATMENTS = [...TREATMENTS_DERMA, ...TREATMENTS_ESTETICA];

export default function TratamentoDetalhe() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;

  const treatment = ALL_TREATMENTS.find((t) => t.slug === slug);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!treatment) return <NotFound />;

  // Outros tratamentos para sugerir (excluindo o atual)
  const others = ALL_TREATMENTS.filter((t) => t.slug !== slug).slice(0, 4);

  return (
    <div className="min-h-screen">
      <SEOHead
        title={treatment.seoTitle}
        description={treatment.seoDescription}
        canonical={`${SITE.siteUrl}/tratamentos/${slug}`}
        ogImage={IMAGES.hero}
      />
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="relative pt-32 pb-16 bg-[#FAFAF7]">
        <div className="container max-w-4xl mx-auto">
          <AnimatedSection>
            <Link
              href="/tratamentos"
              className="inline-flex items-center gap-2 font-body text-xs tracking-[0.15em] uppercase text-[#5C2B1D]/50 hover:text-[#5C2B1D] transition-colors duration-200 mb-8"
            >
              <ArrowLeft size={14} />
              Todos os Tratamentos
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <span className="font-body text-xs tracking-[0.25em] uppercase text-[#C9A55A] block mb-4">
              Tratamento
            </span>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#5C2B1D] leading-tight mb-4">
              {treatment.name}
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="font-display italic text-lg text-[#C9A55A] mb-4">
              {treatment.tagline}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={250}>
            <div className="w-16 h-[1px] bg-[#C9A55A] mb-6" />
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <p className="font-body text-base text-[#5C2B1D]/75 leading-relaxed max-w-2xl">
              {treatment.description}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <a
                href={SITE.whatsappSPLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 bg-[#5C2B1D] text-[#F2EDE4] font-body text-xs tracking-[0.15em] uppercase hover:bg-[#7A3D2A] transition-all duration-300 rounded-sm text-center"
              >
                Agendar em São Paulo →
              </a>
              <a
                href={SITE.whatsappRSLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 border border-[#5C2B1D] text-[#5C2B1D] font-body text-xs tracking-[0.15em] uppercase hover:bg-[#5C2B1D] hover:text-[#F2EDE4] transition-all duration-300 rounded-sm text-center"
              >
                Agendar em Marau (RS) →
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== DETALHES DO TRATAMENTO ===== */}
      <section className="py-20 lg:py-28 bg-[#F2EDE4]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 max-w-5xl mx-auto">
            {/* Coluna principal */}
            <div className="space-y-10">
              <AnimatedSection>
                <div>
                  <span className="font-body text-xs tracking-[0.25em] uppercase text-[#C9A55A] block mb-4">
                    Sobre o Tratamento
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl text-[#5C2B1D] mb-4 leading-snug">
                    Como funciona
                  </h2>
                  <div className="w-10 h-[1px] bg-[#C9A55A] mb-6" />
                  <p className="font-body text-base text-[#5C2B1D]/75 leading-relaxed">
                    {treatment.details}
                  </p>
                </div>
              </AnimatedSection>

              {/* FAQ */}
              {treatment.faq && treatment.faq.length > 0 && (
                <AnimatedSection delay={100}>
                  <div>
                    <span className="font-body text-xs tracking-[0.25em] uppercase text-[#C9A55A] block mb-4">
                      Dúvidas Frequentes
                    </span>
                    <h2 className="font-display text-2xl md:text-3xl text-[#5C2B1D] mb-6 leading-snug">
                      Perguntas sobre {treatment.name}
                    </h2>
                    <div className="space-y-3">
                      {treatment.faq.map((item, i) => (
                        <div
                          key={i}
                          className="border border-[#C9A55A]/20 rounded-sm overflow-hidden bg-[#FAFAF7]"
                        >
                          <button
                            onClick={() => setOpenFaq(openFaq === i ? null : i)}
                            className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 group"
                          >
                            <span className="font-display text-base text-[#5C2B1D] leading-snug">
                              {item.q}
                            </span>
                            {openFaq === i ? (
                              <ChevronUp className="w-4 h-4 text-[#C9A55A] shrink-0" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-[#C9A55A] shrink-0" />
                            )}
                          </button>
                          {openFaq === i && (
                            <div className="px-6 pb-4">
                              <p className="font-body text-sm text-[#5C2B1D]/70 leading-relaxed">
                                {item.a}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              )}

              {/* Aviso legal CFM */}
              <AnimatedSection delay={150}>
                <p className="font-body text-xs text-[#5C2B1D]/40 leading-relaxed border-t border-[#C9A55A]/15 pt-6">
                  {SITE.cfmNotice}
                </p>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <AnimatedSection delay={200}>
              <div className="space-y-4">
                {/* Card agendar */}
                <div className="bg-[#5C2B1D] rounded-sm p-6 text-center space-y-4">
                  <p className="font-display italic text-xl text-[#F2EDE4] leading-snug">
                    Cada pele é única.<br />Cada tratamento, personalizado.
                  </p>
                  <div className="w-8 h-[1px] bg-[#C9A55A] mx-auto" />
                  <p className="font-body text-xs text-[#F2EDE4]/70 leading-relaxed">
                    Agende uma avaliação para receber um protocolo desenvolvido
                    especialmente para você.
                  </p>
                  <a
                    href={SITE.whatsappSPLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 bg-[#C9A55A] text-[#2A1208] font-body text-xs tracking-[0.15em] uppercase hover:bg-[#D4B76A] transition-colors duration-300 rounded-sm"
                  >
                    Agendar em SP →
                  </a>
                  <a
                    href={SITE.whatsappRSLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 border border-[#C9A55A]/40 text-[#F2EDE4] font-body text-xs tracking-[0.15em] uppercase hover:bg-[#C9A55A]/10 transition-colors duration-300 rounded-sm"
                  >
                    Agendar em Marau (RS) →
                  </a>
                </div>

                {/* Card localização */}
                <div className="bg-[#FAFAF7] border border-[#C9A55A]/20 rounded-sm p-6 space-y-3">
                  <span className="font-body text-xs tracking-[0.2em] uppercase text-[#C9A55A] block">
                    Locais de Atendimento
                  </span>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#C9A55A] mt-0.5 shrink-0" />
                      <div>
                        <p className="font-display text-sm text-[#5C2B1D]">São Paulo, SP</p>
                        <p className="font-body text-xs text-[#5C2B1D]/60 leading-relaxed">{SITE.addressSP}</p>
                        <p className="font-body text-[10px] text-[#C9A55A]/80 mt-1">Atendimento semanal</p>
                      </div>
                    </div>
                    <div className="w-full h-[1px] bg-[#C9A55A]/15" />
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#C9A55A] mt-0.5 shrink-0" />
                      <div>
                        <p className="font-display text-sm text-[#5C2B1D]">Marau, RS</p>
                        <p className="font-body text-xs text-[#5C2B1D]/60 leading-relaxed">{SITE.addressRS}</p>
                        <p className="font-body text-[10px] text-[#C9A55A]/80 mt-1">Atendimento mensal</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== OUTROS TRATAMENTOS ===== */}
      <section className="py-20 lg:py-28 bg-[#FAFAF7]">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="font-body text-xs tracking-[0.25em] uppercase text-[#C9A55A]">
                Explore
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-[#5C2B1D] mt-3">
                Outros Tratamentos
              </h2>
              <div className="w-16 h-[1px] bg-[#C9A55A] mx-auto mt-6" />
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {others.map((t, i) => (
              <AnimatedSection key={t.slug} delay={i * 80}>
                <Link
                  href={`/tratamentos/${t.slug}`}
                  className="group block bg-[#F2EDE4] border border-[#C9A55A]/15 p-6 rounded-sm hover:bg-[#5C2B1D] transition-all duration-500 h-full"
                >
                  <h3 className="font-display italic text-lg text-[#5C2B1D] group-hover:text-[#F2EDE4] transition-colors duration-500 mb-2">
                    {t.name}
                  </h3>
                  <p className="font-body text-xs text-[#5C2B1D]/60 group-hover:text-[#F2EDE4]/70 transition-colors duration-500 leading-relaxed line-clamp-2">
                    {t.description}
                  </p>
                  <span className="inline-block mt-3 font-body text-xs text-[#C9A55A] tracking-wider uppercase">
                    Saiba mais →
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={300}>
            <div className="text-center mt-10">
              <Link
                href="/tratamentos"
                className="inline-flex items-center gap-2 px-7 py-3 border border-[#5C2B1D] text-[#5C2B1D] font-body text-xs tracking-[0.15em] uppercase hover:bg-[#5C2B1D] hover:text-[#F2EDE4] transition-all duration-300 rounded-sm"
              >
                Ver todos os tratamentos
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
