/*
 * DESIGN: "Atelier de Beleza" — Privacy Policy page (LGPD)
 */
import { Link } from "wouter";
import { SITE } from "@/lib/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#FAFAF7]">
      <Navbar />

      <section className="pt-28 pb-20">
        <div className="container max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-body text-xs tracking-wider uppercase text-[#5C2B1D]/60 hover:text-[#5C2B1D] transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Voltar ao início
          </Link>

          <h1 className="font-display text-3xl md:text-4xl text-[#5C2B1D] mb-4">
            Política de Privacidade
          </h1>
          <div className="w-16 h-[1px] bg-[#C9A55A] mb-10" />

          <div className="font-body text-sm text-[#5C2B1D]/80 leading-relaxed space-y-6">
            <p>
              A {SITE.fullName} valoriza a privacidade de seus pacientes e visitantes. 
              Esta Política de Privacidade descreve como coletamos, usamos e protegemos 
              suas informações pessoais, em conformidade com a Lei Geral de Proteção de 
              Dados Pessoais (LGPD — Lei nº 13.709/2018).
            </p>

            <h2 className="font-display text-xl text-[#5C2B1D] pt-4">
              1. Dados Coletados
            </h2>
            <p>
              Coletamos apenas os dados necessários para a prestação de nossos serviços:
              nome, telefone e mensagem enviada através do formulário de contato do site. 
              Também podemos coletar dados de navegação (cookies) para melhorar sua 
              experiência no site.
            </p>

            <h2 className="font-display text-xl text-[#5C2B1D] pt-4">
              2. Finalidade do Uso
            </h2>
            <p>
              Os dados coletados são utilizados exclusivamente para: responder suas 
              solicitações de contato, agendar consultas, enviar informações sobre 
              tratamentos e melhorar a experiência de navegação no site.
            </p>

            <h2 className="font-display text-xl text-[#5C2B1D] pt-4">
              3. Compartilhamento de Dados
            </h2>
            <p>
              Não compartilhamos, vendemos ou alugamos seus dados pessoais a terceiros. 
              Seus dados são tratados com total sigilo e confidencialidade.
            </p>

            <h2 className="font-display text-xl text-[#5C2B1D] pt-4">
              4. Cookies
            </h2>
            <p>
              Utilizamos cookies para melhorar sua experiência de navegação, analisar 
              o tráfego do site e personalizar conteúdo. Você pode configurar seu 
              navegador para recusar cookies, embora isso possa afetar a funcionalidade 
              do site.
            </p>

            <h2 className="font-display text-xl text-[#5C2B1D] pt-4">
              5. Segurança
            </h2>
            <p>
              Adotamos medidas de segurança técnicas e administrativas para proteger 
              seus dados pessoais contra acesso não autorizado, perda ou destruição.
            </p>

            <h2 className="font-display text-xl text-[#5C2B1D] pt-4">
              6. Seus Direitos
            </h2>
            <p>
              Conforme a LGPD, você tem direito a: acessar seus dados pessoais, 
              solicitar correção de dados incompletos ou desatualizados, solicitar 
              a exclusão de seus dados, revogar o consentimento para o tratamento 
              de dados e solicitar informações sobre o compartilhamento de dados.
            </p>

            <h2 className="font-display text-xl text-[#5C2B1D] pt-4">
              7. Contato
            </h2>
            <p>
              Para exercer seus direitos ou esclarecer dúvidas sobre esta política, 
              entre em contato pelo WhatsApp {SITE.whatsappSP} ou pelo Instagram {SITE.instagram}.
            </p>

            <h2 className="font-display text-xl text-[#5C2B1D] pt-4">
              8. Aviso CFM
            </h2>
            <p>
              {SITE.cfmNotice}
            </p>

            <p className="text-[#5C2B1D]/50 pt-6 text-xs">
              Última atualização: Janeiro de 2025
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
