import React from 'react';
import bannerGlow from '../assets/banner-glow.jpg';
import { MagneticButton } from './MagneticButton';

interface FeatureBannerProps {
  onOpenBooking: () => void;
}

export const FeatureBanner: React.FC<FeatureBannerProps> = ({ onOpenBooking }) => {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-8">
      <div className="relative overflow-hidden rounded-[24px] sm:rounded-[30px] bg-[#0d0d11] border border-white/10 p-6 sm:p-10 md:p-12 shadow-[0_16px_48px_rgba(0,0,0,0.7)] flex flex-col md:flex-row items-center justify-between gap-6 group">
        {/* Iluminação Líquida Real da Referência */}
        <div className="absolute top-0 left-0 bottom-0 w-full md:w-3/5 overflow-hidden pointer-events-none opacity-50 group-hover:opacity-65 transition-opacity duration-700">
          <img
            src={bannerGlow}
            alt="Luz Fluida"
            className="w-full h-full object-cover filter blur-[2px] transform -scale-x-100"
          />
        </div>

        {/* Textos em Português */}
        <div className="relative z-10 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-white mb-2">
            o extraordinário ao seu alcance
          </h2>
          <p className="text-xs sm:text-sm text-white/60 font-light">
            descubra residências singulares e coleções privadas sob protocolo de sigilo
          </p>
        </div>

        {/* Botão Magnético do Arsenal */}
        <div className="relative z-10 flex-shrink-0">
          <MagneticButton
            onClick={onOpenBooking}
            className="px-7 py-2.5 rounded-full text-xs sm:text-sm font-medium text-white/95 border border-white/30 hover:border-white/70 bg-black/30 hover:bg-black/50 backdrop-blur-md transition-all shadow-md"
          >
            explorar acervo
          </MagneticButton>
        </div>
      </div>
    </section>
  );
};
