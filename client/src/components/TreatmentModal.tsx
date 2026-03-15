/*
 * DESIGN: Treatment detail modal
 * Warm styling, gold accents, WhatsApp CTA
 */
import { X } from "lucide-react";
import { SITE } from "@/lib/constants";
import { useEffect } from "react";

interface Treatment {
  name: string;
  description: string;
  details: string;
}

interface Props {
  treatment: Treatment | null;
  onClose: () => void;
}

export default function TreatmentModal({ treatment, onClose }: Props) {
  useEffect(() => {
    if (treatment) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [treatment]);

  if (!treatment) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#2A1208]/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-[#FAFAF7] max-w-lg w-full rounded-sm shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gold top accent */}
        <div className="h-1 bg-gradient-to-r from-[#C9A55A]/0 via-[#C9A55A] to-[#C9A55A]/0" />

        <div className="p-8">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#5C2B1D]/50 hover:text-[#5C2B1D] transition-colors"
            aria-label="Fechar"
          >
            <X size={20} />
          </button>

          {/* Title */}
          <h3 className="font-display italic text-2xl text-[#5C2B1D] mb-4">
            {treatment.name}
          </h3>

          {/* Divider */}
          <div className="w-12 h-[1px] bg-[#C9A55A] mb-6" />

          {/* Description */}
          <p className="font-body text-sm text-[#5C2B1D]/70 leading-relaxed mb-6">
            {treatment.details}
          </p>

          {/* CTA */}
          <a
            href={SITE.whatsappSPLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-[#5C2B1D] text-[#F2EDE4] font-body text-xs tracking-[0.15em] uppercase hover:bg-[#7A3D2A] transition-colors duration-300 rounded-sm"
          >
            Agendar pelo WhatsApp →
          </a>
        </div>
      </div>
    </div>
  );
}
