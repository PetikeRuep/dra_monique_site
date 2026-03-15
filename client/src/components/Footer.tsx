/*
 * DESIGN: "Atelier de Beleza" — Editorial de Moda de Luxo
 * Footer: Dark chocolate bg (#2A1208), gold monogram, cream text
 */
import { SITE, NAV_LINKS } from "@/lib/constants";
import { Instagram } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-[#2A1208] text-[#F2EDE4] pt-16 pb-8">
      <div className="container">
        {/* Gold Monogram */}
        <div className="text-center mb-10">
          <span className="font-script text-5xl text-[#C9A55A]">MD</span>
          <p className="font-display text-lg tracking-[0.15em] mt-3 text-[#F2EDE4]/90">
            Monique Damiano · Medicina e Beleza
          </p>
        </div>

        {/* Divider */}
        <div className="w-24 h-[1px] bg-[#C9A55A]/40 mx-auto mb-10" />

        {/* Links & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-center md:text-left">
          {/* Navigation */}
          <div>
            <h4 className="font-display text-sm tracking-[0.2em] uppercase text-[#C9A55A] mb-4">
              Navegação
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/") ? (
                    <Link
                      href={link.href}
                      className="font-body text-sm text-[#F2EDE4]/70 hover:text-[#C9A55A] transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="font-body text-sm text-[#F2EDE4]/70 hover:text-[#C9A55A] transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm tracking-[0.2em] uppercase text-[#C9A55A] mb-4">
              Contato
            </h4>
            <ul className="space-y-2 font-body text-sm text-[#F2EDE4]/70">
              <li>São Paulo: {SITE.whatsappSP}</li>
              <li>Marau/RS: {SITE.whatsappRS}</li>
              <li className="pt-2">
                <a
                  href={SITE.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#C9A55A] transition-colors duration-300"
                >
                  <Instagram size={16} />
                  {SITE.instagram}
                </a>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-display text-sm tracking-[0.2em] uppercase text-[#C9A55A] mb-4">
              Localizações
            </h4>
            <ul className="space-y-2 font-body text-sm text-[#F2EDE4]/70">
              <li>{SITE.addressSP}</li>
              <li>{SITE.addressRS}</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#F2EDE4]/10 mb-6" />

        {/* CFM Notice */}
        <p className="text-center font-body text-xs text-[#F2EDE4]/50 mb-4 max-w-2xl mx-auto leading-relaxed">
          {SITE.cfmNotice}
        </p>

        {/* CRM & Copyright */}
        <div className="text-center space-y-2">
          <p className="font-body text-xs text-[#C9A55A]/60 tracking-wider">
            {SITE.crmSP} | {SITE.crmRS}
          </p>
          <p className="font-body text-xs text-[#F2EDE4]/40">
            © {new Date().getFullYear()} Dra. Monique Damiano. Todos os direitos reservados.
          </p>
          <Link
            href="/politica-de-privacidade"
            className="font-body text-xs text-[#F2EDE4]/40 hover:text-[#C9A55A] transition-colors"
          >
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}
