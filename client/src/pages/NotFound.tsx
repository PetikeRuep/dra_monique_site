import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center pt-20">
        <div className="text-center space-y-6 px-4">
          <span className="font-script text-7xl text-[#C9A55A]">404</span>
          <h1 className="font-display text-3xl text-[#5C2B1D]">
            Página não encontrada
          </h1>
          <p className="font-body text-base text-[#5C2B1D]/60 max-w-md mx-auto">
            A página que você procura não existe ou foi movida. Volte à página inicial para continuar navegando.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#5C2B1D] text-[#F2EDE4] font-body text-xs tracking-[0.15em] uppercase hover:bg-[#7A3D2A] transition-colors duration-300 rounded-sm"
          >
            <ArrowLeft size={14} />
            Voltar ao início
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
