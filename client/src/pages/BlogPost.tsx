/*
 * DESIGN: "Atelier de Beleza" — Individual blog post page
 */
import { Link, useParams } from "wouter";
import { BLOG_POSTS, SITE } from "@/lib/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#FAFAF7]">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="font-display text-3xl text-[#5C2B1D]">
            Artigo não encontrado
          </h1>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 mt-6 font-body text-sm text-[#C9A55A] hover:text-[#5C2B1D] transition-colors"
          >
            <ArrowLeft size={14} />
            Voltar ao blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAF7]">
      <Navbar />

      {/* Hero Image */}
      <section className="pt-20">
        <div className="w-full h-64 md:h-80 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
            style={{ filter: "saturate(0.8) brightness(0.9)" }}
          />
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="container max-w-3xl mx-auto">
          <AnimatedSection>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-body text-xs tracking-wider uppercase text-[#5C2B1D]/60 hover:text-[#5C2B1D] transition-colors mb-8"
            >
              <ArrowLeft size={14} />
              Voltar ao blog
            </Link>

            {/* Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="inline-flex items-center gap-1.5 font-body text-xs tracking-[0.15em] uppercase text-[#C9A55A]">
                <Tag size={12} />
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1.5 font-body text-xs text-[#5C2B1D]/50">
                <Calendar size={12} />
                {new Date(post.date).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-3xl md:text-4xl text-[#5C2B1D] leading-tight mb-6">
              {post.title}
            </h1>

            <div className="w-16 h-[1px] bg-[#C9A55A] mb-8" />

            {/* Content */}
            <div className="font-body text-base text-[#5C2B1D]/80 leading-relaxed space-y-6">
              <p>{post.content}</p>
              <p>
                É importante lembrar que cada caso é único e merece uma avaliação 
                individualizada. Agende sua consulta para que possamos criar juntos 
                o melhor plano de tratamento para você.
              </p>
              <p>
                Se você tem dúvidas sobre este ou outros temas relacionados à saúde 
                da pele, não hesite em entrar em contato. Estou à disposição para 
                ajudá-la a cuidar da sua pele com carinho e profissionalismo.
              </p>
            </div>

            {/* Author */}
            <div className="mt-12 p-6 bg-[#F2EDE4] rounded-sm border border-[#C9A55A]/15">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#5C2B1D] rounded-full flex items-center justify-center">
                  <span className="font-script text-lg text-[#C9A55A]">MD</span>
                </div>
                <div>
                  <p className="font-display text-base text-[#5C2B1D]">
                    {SITE.fullName}
                  </p>
                  <p className="font-body text-xs text-[#5C2B1D]/60">
                    {SITE.specialty} · {SITE.crmSP}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 text-center">
              <a
                href={SITE.whatsappSPLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-7 py-3.5 bg-[#5C2B1D] text-[#F2EDE4] font-body text-xs tracking-[0.15em] uppercase hover:bg-[#7A3D2A] transition-colors duration-300 rounded-sm"
              >
                Agendar Consulta →
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
