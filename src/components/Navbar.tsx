import React from 'react';
import { Home } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 pt-4 sm:pt-6 transition-all duration-300">
      <nav className="w-full max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-8 py-3 rounded-full glass-panel shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#ff8a65]/40 transition-colors">
            <Home className="w-4 h-4 text-white/90 group-hover:text-[#ff8a65] transition-colors" />
          </div>
          <span className="text-sm tracking-tight font-medium text-white/90 group-hover:text-white transition-colors">
            residências de prestígio
          </span>
        </a>

        {/* Links Centrais em Português */}
        <div className="hidden md:flex items-center gap-8 text-sm font-light text-white/70">
          <a href="#hero" className="hover:text-white transition-colors duration-200">
            início
          </a>
          <a href="#portfolio" className="hover:text-white transition-colors duration-200">
            portfólio privado
          </a>
          <a href="#diferenciais" className="hover:text-white transition-colors duration-200">
            diferenciais
          </a>
          <a href="#pilares" className="hover:text-white transition-colors duration-200">
            curadoria
          </a>
        </div>

        {/* CTA Direito com Botão Magnético */}
        <div className="flex items-center">
          <MagneticButton
            onClick={onOpenBooking}
            className="px-5 py-2 text-xs sm:text-sm font-medium text-white/95 rounded-full border border-white/20 hover:border-white/60 bg-white/[0.04] hover:bg-white/[0.1] transition-all duration-200 shadow-sm"
          >
            agendar consultoria
          </MagneticButton>
        </div>
      </nav>
    </header>
  );
};
