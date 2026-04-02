/*
 * DESIGN: "Atelier de Beleza" — Editorial de Moda de Luxo
 * Página: /tratamentos — Listagem de todos os tratamentos
 * SEO: Tratamentos de pele e medicina estética em SP e RS
 */
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedSection from "@/components/AnimatedSection";
import SEOHead from "@/components/SEOHead";
import { SITE, SEO, IMAGES, TREATMENTS_DERMA, TREATMENTS_ESTETICA } from "@/lib/constants";

export default function Tratamentos() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title={SEO.tratamentos.title}
        description={SEO.tratamentos.description}
        canonical={`${SITE.siteUrl}/tratamentos`}
        ogImage={IMAGES.treatmentEstetica}
      />
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="relative pt-32 pb-16 bg-[#FAFAF7]">
        <div className="container max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <span className="font-body text-xs tracking-[0.25em] uppercase text-[#C9A55A]">
              Especialidades
            </span>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#5C2B1D] mt-4 leading-tight">
              Tratamentos de Pele e<br />
              <span className="font-display italic">Medicina Estética</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="font-display italic text-lg text-[#C9A55A] mt-4">
              São Paulo (SP) & Marau (RS)
            </p>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <div className="w-16 h-[1px] bg-[#C9A55A] mx-auto mt-6" />
          </AnimatedSection>
          <AnimatedSection delay={400}>
            {/* Parágrafo rico em keywords para SEO */}
            <p className="font-body text-base text-[#5C2B1D]/75 leading-relaxed mt-6 max-w-2xl mx-auto">
              A Dra. Monique Damiano oferece uma ampla gama de{" "}
              <strong className="font-medium text-[#5C2B1D]">tratamentos para a pele</strong> e{" "}
              <strong className="font-medium text-[#5C2B1D]">procedimentos de medicina estética</strong>{" "}
              em São Paulo (SP) e Marau (RS). De{" "}
              <strong className="font-medium text-[#5C2B1D]">
                acne e melasma a toxina botulínica e bioestimuladores de colágeno
              </strong>
              , cada tratamento é planejado de forma individualizada para resultados naturais
              e duradouros.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== DERMATOLOGIA CLÍNICA ===== */}
      <section className="py-20 lg:py-28 bg-[#F2EDE4]">
        <div className="container">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-10">
              <img
                src={IMAGES.treatmentDerma}
                alt="Tratamentos de Pele — Dermatologia Clínica"
                className="w-16 h-16 rounded-full object-cover border-2 border-[#C9A55A]/30"
                loading="lazy"
              />
              <div>
                <span className="font-body text-xs tracking-[0.2em] uppercase text-[#C9A55A] block mb-1">
                  Área Clínica
                </span>
                <h2 className="font-display text-2xl md:text-3xl text-[#5C2B1D]">
                  Tratamentos de Pele
                </h2>
                <div className="w-10 h-[1px] bg-[#C9A55A] mt-1" />
              </div>
            </div>
            <p className="font-body text-sm text-[#5C2B1D]/70 leading-relaxed mb-10 max-w-2xl">
              Tratamentos para condições da pele como acne, melasma, rosácea, dermatites e queda
              capilar, com protocolos baseados em evidências e acompanhamento personalizado.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {TREATMENTS_DERMA.map((t, i) => (
              <AnimatedSection key={t.slug} delay={i * 60}>
                <Link
                  href={`/tratamentos/${t.slug}`}
                  className="group block bg-[#FAFAF7] border border-[#C9A55A]/20 p-6 rounded-sm hover:bg-[#5C2B1D] transition-all duration-500 h-full"
                >
                  <h3 className="font-display italic text-lg text-[#5C2B1D] group-hover:text-[#F2EDE4] transition-colors duration-500 mb-2">
                    {t.name}
                  </h3>
                  <p className="font-body text-xs text-[#5C2B1D]/60 group-hover:text-[#F2EDE4]/70 transition-colors duration-500 leading-relaxed line-clamp-3">
                    {t.description}
                  </p>
                  <span className="inline-block mt-3 font-body text-xs text-[#C9A55A] tracking-wider uppercase">
                    Saiba mais →
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ESTÉTICA AVANÇADA ===== */}
      <section className="py-20 lg:py-28 bg-[#FAFAF7]">
        <div className="container">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-10">
              <img
                src={IMAGES.treatmentEstetica}
                alt="Procedimentos de Medicina Estética"
                className="w-16 h-16 rounded-full object-cover border-2 border-[#C9A55A]/30"
                loading="lazy"
              />
              <div>
                <span className="font-body text-xs tracking-[0.2em] uppercase text-[#C9A55A] block mb-1">
                  Estética Avançada
                </span>
                <h2 className="font-display text-2xl md:text-3xl text-[#5C2B1D]">
                  Medicina Estética
                </h2>
                <div className="w-10 h-[1px] bg-[#C9A55A] mt-1" />
              </div>
            </div>
            <p className="font-body text-sm text-[#5C2B1D]/70 leading-relaxed mb-10 max-w-2xl">
              Procedimentos estéticos como toxina botulínica (botox), preenchimentos, bioestimuladores
              de colágeno, peelings e fios de PDO — sempre com técnica refinada e foco em resultados
              harmoniosos e naturais.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {TREATMENTS_ESTETICA.map((t, i) => (
              <AnimatedSection key={t.slug} delay={i * 60}>
                <Link
                  href={`/tratamentos/${t.slug}`}
                  className="group block bg-[#F2EDE4] border border-[#C9A55A]/20 p-6 rounded-sm hover:bg-[#5C2B1D] transition-all duration-500 h-full"
                >
                  <h3 className="font-display italic text-lg text-[#5C2B1D] group-hover:text-[#F2EDE4] transition-colors duration-500 mb-2">
                    {t.name}
                  </h3>
                  <p className="font-body text-xs text-[#5C2B1D]/60 group-hover:text-[#F2EDE4]/70 transition-colors duration-500 leading-relaxed line-clamp-3">
                    {t.description}
                  </p>
                  <span className="inline-block mt-3 font-body text-xs text-[#C9A55A] tracking-wider uppercase">
                    Saiba mais →
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-[#5C2B1D]">
        <div className="container text-center">
          <AnimatedSection>
            <span className="font-body text-xs tracking-[0.25em] uppercase text-[#C9A55A] mb-4 block">
              Próximo passo
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-[#F2EDE4] mb-4">
              Consulta Personalizada
            </h2>
            <p className="font-body text-base text-[#F2EDE4]/70 mb-8 max-w-lg mx-auto leading-relaxed">
              Cada pele é única. Agende uma consulta para receber um plano de tratamento
              desenvolvido especialmente para você.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={SITE.whatsappSPLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#C9A55A] text-[#2A1208] font-body text-xs tracking-[0.15em] uppercase hover:bg-[#D4B76A] transition-all duration-300 rounded-sm"
              >
                Agendar em São Paulo (SP)
              </a>
              <a
                href={SITE.whatsappRSLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-[#C9A55A]/50 text-[#F2EDE4] font-body text-xs tracking-[0.15em] uppercase hover:bg-[#C9A55A]/10 transition-all duration-300 rounded-sm"
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
