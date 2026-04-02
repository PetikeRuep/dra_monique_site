/*
 * DESIGN: "Atelier de Beleza" — Editorial de Moda de Luxo
 * Página: /contato — Agendamento e informações de contato
 * SEO: agendar consulta dermatologista São Paulo e Marau RS
 */
import { useState } from "react";
import { Phone, Instagram, MapPin, Send, Check, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedSection from "@/components/AnimatedSection";
import SEOHead from "@/components/SEOHead";
import { SITE, SEO } from "@/lib/constants";

export default function Contato() {
  const [form, setForm] = useState({ nome: "", telefone: "", mensagem: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá, Dra. Monique! Meu nome é ${form.nome}. Telefone: ${form.telefone}. Mensagem: ${form.mensagem}`;
    window.open(`https://wa.me/5511921968645?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title={SEO.contato.title}
        description={SEO.contato.description}
        canonical={`${SITE.siteUrl}/contato`}
      />
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="pt-32 pb-16 bg-[#FAFAF7]">
        <div className="container max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <span className="font-body text-xs tracking-[0.25em] uppercase text-[#C9A55A]">
              Contato
            </span>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="font-script text-5xl md:text-6xl text-[#5C2B1D] mt-4 leading-tight">
              Vamos Conversar?
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="font-display italic text-lg text-[#C9A55A] mt-3">
              São Paulo (SP) & Marau (RS)
            </p>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <div className="w-16 h-[1px] bg-[#C9A55A] mx-auto mt-6" />
          </AnimatedSection>
          <AnimatedSection delay={400}>
            <p className="font-body text-base text-[#5C2B1D]/70 leading-relaxed mt-6">
              Estamos à disposição para tirar suas dúvidas e agendar sua consulta.
              Preencha o formulário abaixo ou entre em contato diretamente pelo WhatsApp.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== LOCAIS ===== */}
      <section className="py-12 bg-[#5C2B1D]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto items-stretch">
            {/* São Paulo */}
            <AnimatedSection className="h-full">
              <div className="bg-[#2A1208] border border-[#C9A55A]/20 rounded-sm p-8 flex flex-col gap-4 h-full">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#C9A55A] shrink-0" />
                  <h2 className="font-display text-xl text-[#F2EDE4]">São Paulo, SP</h2>
                </div>
                <p className="font-body text-sm text-[#F2EDE4]/70 leading-relaxed">{SITE.addressSP}</p>
                <div className="flex items-center gap-2 text-[#C9A55A]/80">
                  <Clock className="w-4 h-4" />
                  <span className="font-body text-xs">Atendimento semanal</span>
                </div>
                <div className="flex items-center gap-2 text-[#F2EDE4]/60">
                  <Phone className="w-4 h-4" />
                  <span className="font-body text-sm">{SITE.whatsappSP}</span>
                </div>
                <div className="flex-1" />
                <a
                  href={SITE.whatsappSPLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2.5 bg-[#C9A55A] text-[#2A1208] font-body text-xs tracking-[0.15em] uppercase hover:bg-[#D4B76A] transition-colors duration-300 rounded-sm self-start"
                >
                  Agendar em SP →
                </a>
              </div>
            </AnimatedSection>

            {/* Marau */}
            <AnimatedSection delay={100} className="h-full">
              <div className="bg-[#2A1208] border border-[#C9A55A]/20 rounded-sm p-8 flex flex-col gap-4 h-full">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#C9A55A] shrink-0" />
                  <h2 className="font-display text-xl text-[#F2EDE4]">Marau, RS</h2>
                </div>
                <p className="font-body text-sm text-[#F2EDE4]/70 leading-relaxed">{SITE.addressRS}</p>
                <div className="flex items-center gap-2 text-[#C9A55A]/80">
                  <Clock className="w-4 h-4" />
                  <span className="font-body text-xs">Atendimento mensal</span>
                </div>
                <div className="flex items-center gap-2 text-[#F2EDE4]/60">
                  <Phone className="w-4 h-4" />
                  <span className="font-body text-sm">{SITE.whatsappRS}</span>
                </div>
                <div className="flex-1" />
                <a
                  href={SITE.whatsappRSLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2.5 bg-[#C9A55A] text-[#2A1208] font-body text-xs tracking-[0.15em] uppercase hover:bg-[#D4B76A] transition-colors duration-300 rounded-sm self-start"
                >
                  Agendar em Marau →
                </a>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </section>

      {/* ===== FORMULÁRIO + SOCIAL ===== */}
      <section className="py-20 lg:py-28 bg-[#F5F0E8]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
            {/* Info */}
            <AnimatedSection>
              <div className="space-y-6">
                <span className="font-body text-xs tracking-[0.25em] uppercase text-[#C9A55A] block">
                  Fale conosco
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-[#5C2B1D] leading-tight">
                  Entre em Contato
                </h2>
                <div className="w-16 h-[1px] bg-[#C9A55A]" />
                <p className="font-body text-base text-[#5C2B1D]/70 leading-relaxed">
                  Preencha o formulário ao lado e enviaremos sua mensagem diretamente
                  para o WhatsApp. Respondemos o mais breve possível.
                </p>

                <div className="space-y-4 pt-4">
                  <a
                    href={SITE.whatsappSPLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#5C2B1D]/70 hover:text-[#5C2B1D] transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#F2EDE4] border border-[#C9A55A]/20 flex items-center justify-center shrink-0 group-hover:bg-[#C9A55A]/10 transition-colors">
                      <Phone className="w-4 h-4 text-[#C9A55A]" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-[#5C2B1D]/50 uppercase tracking-wider">São Paulo (SP)</p>
                      <p className="font-body text-sm text-[#5C2B1D]">{SITE.whatsappSP}</p>
                    </div>
                  </a>
                  <a
                    href={SITE.whatsappRSLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#5C2B1D]/70 hover:text-[#5C2B1D] transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#F2EDE4] border border-[#C9A55A]/20 flex items-center justify-center shrink-0 group-hover:bg-[#C9A55A]/10 transition-colors">
                      <Phone className="w-4 h-4 text-[#C9A55A]" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-[#5C2B1D]/50 uppercase tracking-wider">Marau (RS)</p>
                      <p className="font-body text-sm text-[#5C2B1D]">{SITE.whatsappRS}</p>
                    </div>
                  </a>
                  <a
                    href={SITE.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#5C2B1D]/70 hover:text-[#5C2B1D] transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#F2EDE4] border border-[#C9A55A]/20 flex items-center justify-center shrink-0 group-hover:bg-[#C9A55A]/10 transition-colors">
                      <Instagram className="w-4 h-4 text-[#C9A55A]" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-[#5C2B1D]/50 uppercase tracking-wider">Instagram</p>
                      <p className="font-body text-sm text-[#5C2B1D]">{SITE.instagram}</p>
                    </div>
                  </a>
                </div>

                {/* Aviso CFM */}
                <p className="font-body text-xs text-[#5C2B1D]/40 leading-relaxed pt-4 border-t border-[#C9A55A]/15">
                  {SITE.cfmNotice}
                </p>
              </div>
            </AnimatedSection>

            {/* Formulário */}
            <AnimatedSection delay={200}>
              <form
                onSubmit={handleSubmit}
                className="bg-[#FAFAF7] border border-[#C9A55A]/20 rounded-sm p-8 space-y-5 shadow-[0_8px_40px_rgba(92,43,29,0.06)]"
              >
                <div>
                  <label className="block font-body text-xs tracking-[0.15em] uppercase text-[#5C2B1D]/60 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    required
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    className="w-full bg-[#F5F0E8] border border-[#C9A55A]/25 rounded-sm px-4 py-3 font-body text-sm text-[#5C2B1D] placeholder-[#5C2B1D]/30 focus:outline-none focus:border-[#C9A55A] transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block font-body text-xs tracking-[0.15em] uppercase text-[#5C2B1D]/60 mb-2">
                    Telefone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.telefone}
                    onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                    className="w-full bg-[#F5F0E8] border border-[#C9A55A]/25 rounded-sm px-4 py-3 font-body text-sm text-[#5C2B1D] placeholder-[#5C2B1D]/30 focus:outline-none focus:border-[#C9A55A] transition-colors"
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
                    value={form.mensagem}
                    onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                    className="w-full bg-[#F5F0E8] border border-[#C9A55A]/25 rounded-sm px-4 py-3 font-body text-sm text-[#5C2B1D] placeholder-[#5C2B1D]/30 focus:outline-none focus:border-[#C9A55A] transition-colors resize-none"
                    placeholder="Sua mensagem ou dúvida..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#5C2B1D] text-[#F2EDE4] font-body text-xs tracking-[0.15em] uppercase hover:bg-[#7A3D2A] transition-colors duration-300 rounded-sm"
                >
                  {sent ? (
                    <>
                      <Check size={14} /> Enviado! Abrindo WhatsApp…
                    </>
                  ) : (
                    <>
                      <Send size={14} /> Enviar mensagem
                    </>
                  )}
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== MAPA ===== */}
      <section className="bg-[#2A1208] py-12">
        <div className="container max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="font-body text-xs tracking-[0.25em] uppercase text-[#C9A55A] text-center mb-6">
              São Paulo, SP — Ibirapuera
            </p>
            <div className="rounded-sm overflow-hidden border border-[#C9A55A]/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.7!2d-46.66!3d-23.59!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM1JzI0LjAiUyA0NsKjMzknMzYuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="300"
                style={{ border: 0, filter: "sepia(20%) saturate(80%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do consultório — Dra. Monique Damiano São Paulo"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
