/*
 * DESIGN: Floating WhatsApp button — chocolate brown (not green)
 * Fixed bottom-right, with pulse animation
 */
import { SITE } from "@/lib/constants";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href={SITE.whatsappSPLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#5C2B1D] rounded-full flex items-center justify-center shadow-lg hover:bg-[#7A3D2A] transition-all duration-300 hover:scale-110 group"
      aria-label="Agendar pelo WhatsApp"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#5C2B1D]/30 animate-ping" />
      <MessageCircle className="w-6 h-6 text-[#F2EDE4] relative z-10" />
    </a>
  );
}
