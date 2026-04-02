/*
 * DESIGN: "Atelier de Beleza" — Editorial de Moda de Luxo
 * Navbar: todos os links agora são rotas reais (multi-page)
 * Indicador de página ativa com underline dourado
 */
import { useState, useEffect } from "react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fecha menu mobile ao navegar
  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FAFAF7]/95 backdrop-blur-md shadow-[0_2px_20px_rgba(92,43,29,0.08)]"
          : "bg-[#FAFAF7]/80 backdrop-blur-sm"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo / Monogram */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center rounded-sm bg-transparent">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663062738334/7aJWHo8S3YkG7RHgmPBpW2/LogosomenteMD-transparent_66a4aab4.png"
              alt="Logo Monique Damiano"
              className="h-10 w-10 object-contain md:h-12 md:w-12"
            />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-display text-sm md:text-base font-semibold text-[#5C2B1D] tracking-wide leading-tight">
              Monique Damiano
            </span>
            <span className="font-body text-[10px] md:text-xs text-[#5C2B1D]/60 tracking-[0.2em] uppercase">
              {SITE.slogan}
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`font-display tracking-wide transition-colors duration-300 relative text-[20px]
                after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:bg-[#C9A55A] after:transition-all after:duration-300
                ${isActive(link.href)
                  ? "text-[#5C2B1D] after:w-full"
                  : "text-[#5C2B1D]/70 hover:text-[#5C2B1D] after:w-0 hover:after:w-full"
                }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={SITE.whatsappSPLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-5 py-2.5 bg-[#5C2B1D] text-[#F2EDE4] font-body text-xs tracking-[0.15em] uppercase hover:bg-[#7A3D2A] transition-all duration-300 rounded-sm"
          >
            Agendar Consulta →
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-[#5C2B1D] p-2"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#FAFAF7] border-t border-[#C9A55A]/20 px-6 py-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`block font-display text-lg tracking-wide transition-colors duration-200 ${
                isActive(link.href) ? "text-[#5C2B1D]" : "text-[#5C2B1D]/70"
              }`}
            >
              {isActive(link.href) && (
                <span className="inline-block w-2 h-2 rounded-full bg-[#C9A55A] mr-2 mb-0.5" />
              )}
              {link.label}
            </Link>
          ))}
          <a
            href={SITE.whatsappSPLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center mt-4 px-5 py-3 bg-[#5C2B1D] text-[#F2EDE4] font-body text-xs tracking-[0.15em] uppercase rounded-sm"
          >
            Agendar Consulta →
          </a>
        </div>
      </div>
    </nav>
  );
}
