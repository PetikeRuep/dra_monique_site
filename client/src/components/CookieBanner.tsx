/*
 * DESIGN: LGPD Cookie consent banner
 * Warm styling matching brand palette
 */
import { useState, useEffect } from "react";
import { Link } from "wouter";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6 bg-[#2A1208]/95 backdrop-blur-md border-t border-[#C9A55A]/20 transform transition-transform duration-500">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-sm text-[#F2EDE4]/80 text-center md:text-left">
          Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa{" "}
          <Link
            href="/politica-de-privacidade"
            className="text-[#C9A55A] underline hover:text-[#C9A55A]/80 transition-colors"
          >
            Política de Privacidade
          </Link>
          .
        </p>
        <button
          onClick={accept}
          className="px-6 py-2.5 bg-[#C9A55A] text-[#2A1208] font-body text-xs tracking-[0.15em] uppercase hover:bg-[#D4B76A] transition-colors duration-300 rounded-sm whitespace-nowrap"
        >
          Aceitar Cookies
        </button>
      </div>
    </div>
  );
}
