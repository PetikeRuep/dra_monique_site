/*
 * DESIGN: "Atelier de Beleza" — Blog listing page
 * Grid layout with category filters
 */
import { useState } from "react";
import { Link } from "wouter";
import { BLOG_POSTS } from "@/lib/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowLeft } from "lucide-react";

const CATEGORIES = ["Todos", "Dermatologia Clínica", "Estética Avançada", "Skincare", "Novidades"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredPosts =
    activeCategory === "Todos"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FAFAF7]">
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-12 bg-[#F2EDE4]">
        <div className="container">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-body text-xs tracking-wider uppercase text-[#5C2B1D]/60 hover:text-[#5C2B1D] transition-colors mb-6"
          >
            <ArrowLeft size={14} />
            Voltar ao início
          </Link>
          <h1 className="font-display text-4xl md:text-5xl text-[#5C2B1D]">
            Blog
          </h1>
          <p className="font-display italic text-lg text-[#5C2B1D]/60 mt-3">
            Dicas de Pele e Beleza
          </p>
          <div className="w-16 h-[1px] bg-[#C9A55A] mt-6" />
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-[#C9A55A]/10">
        <div className="container">
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 font-body text-xs tracking-[0.1em] uppercase rounded-sm transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#5C2B1D] text-[#F2EDE4]"
                    : "bg-[#F2EDE4] text-[#5C2B1D]/60 hover:text-[#5C2B1D] border border-[#C9A55A]/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12">
        <div className="container">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-display italic text-xl text-[#5C2B1D]/50">
                Nenhum artigo encontrado nesta categoria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, i) => (
                <AnimatedSection key={post.slug} delay={i * 80}>
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
                      <h3 className="font-display text-lg text-[#5C2B1D] leading-snug">
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
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
