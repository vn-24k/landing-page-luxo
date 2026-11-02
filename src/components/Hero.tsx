import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import heroOrb from '../assets/hero-orb.png';
import { MagneticButton } from './MagneticButton';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [countOffers, setCountOffers] = useState(0);
  const [countClients, setCountClients] = useState(0);

  useEffect(() => {
    const timer1 = setInterval(() => {
      setCountOffers(prev => (prev < 25 ? prev + 1 : 25));
    }, 35);
    const timer2 = setInterval(() => {
      setCountClients(prev => (prev < 450 ? prev + 18 : 450));
    }, 25);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
    };
  }, []);

  return (
    <section id="hero" className="relative pt-28 sm:pt-36 pb-12 px-4 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Luz ambiente difusa sutil */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-b from-[#ff7a50]/15 via-[#1e3a8a]/12 to-transparent blur-[140px] pointer-events-none -z-10" />

      {/* Eyebrow em Português */}
      <motion.p
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-sm sm:text-base font-light text-white/90 tracking-tight mb-2"
      >
        Curadoria Internacional de Mansões e Coberturas
      </motion.p>

      {/* Headline de Alta Fidelidade */}
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-6xl sm:text-7xl md:text-[92px] font-bold tracking-tight mb-4 leading-none"
      >
        <span className="text-white">residências de </span>
        <span className="bg-gradient-to-r from-[#ffae8a] via-[#ff7a50] to-[#e64a19] bg-clip-text text-transparent">
          luxo
        </span>
      </motion.h1>

      {/* Subheadline em Português */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-xl text-xs sm:text-[13px] md:text-sm text-white/70 font-light leading-relaxed mb-8 sm:mb-12 px-2"
      >
        Seu refúgio exclusivo no mundo, selecionado com o mais alto rigor arquitetônico e discrição,
        ajustado ao seu estilo de vida e expectativas mais singulares.
      </motion.p>

      {/* Bloco Central com o Orbe 3D Real e Botões Magnéticos Táteis */}
      <div className="relative w-full max-w-4xl mx-auto flex items-center justify-between px-4 sm:px-10 my-1">
        {/* Métrica Esquerda */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-left z-10 hidden sm:block w-36"
        >
          <div className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
            +{ (countOffers / 10).toFixed(1) }k
          </div>
          <div className="text-xs sm:text-sm text-white/50 font-light mt-0.5">
            imóveis exclusivos
          </div>
        </motion.div>

        {/* Orbe 3D Real com Botões Magnéticos Interativos */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative w-[320px] sm:w-[420px] md:w-[460px] mx-auto flex items-center justify-center group"
        >
          <div className="relative w-full animate-float-slow filter drop-shadow-[0_20px_45px_rgba(255,122,80,0.25)]">
            <img
              src={heroOrb}
              alt="Orbe 3D Fluido Iridescente"
              className="w-full h-auto object-contain select-none"
              draggable="false"
            />

            {/* Botões Magnéticos do Arsenal Sobrepostos */}
            <div className="absolute inset-0 flex items-center justify-center gap-3 z-20 pointer-events-auto">
              <MagneticButton
                onClick={onOpenBooking}
                className="px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-[#ffae8a] text-[#1a0e08] hover:bg-[#ffbe9e] shadow-[0_4px_16px_rgba(255,140,88,0.4)] transition-colors"
              >
                agendar consultoria
              </MagneticButton>

              <MagneticButton
                href="#portfolio"
                className="px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium text-white bg-[#0e162f]/85 border border-white/40 hover:border-white/80 hover:bg-[#121c3b] backdrop-blur-md transition-colors"
              >
                ver portfólio
              </MagneticButton>
            </div>
          </div>
        </motion.div>

        {/* Métrica Direita */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-right z-10 hidden sm:block w-36"
        >
          <div className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
            +{countClients}k
          </div>
          <div className="text-xs sm:text-sm text-white/50 font-light mt-0.5">
            clientes atendidos
          </div>
        </motion.div>
      </div>

      {/* Versão Mobile das Métricas */}
      <div className="flex sm:hidden items-center justify-around w-full max-w-xs mt-3 mb-2">
        <div className="text-center">
          <div className="text-2xl font-medium text-white">+{ (countOffers / 10).toFixed(1) }k</div>
          <div className="text-[11px] text-white/50">imóveis exclusivos</div>
        </div>
        <div className="w-[1px] h-8 bg-white/10" />
        <div className="text-center">
          <div className="text-2xl font-medium text-white">+{countClients}k</div>
          <div className="text-[11px] text-white/50">clientes atendidos</div>
        </div>
      </div>

      {/* Manifesto Institucional em Português */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-2xl text-xs sm:text-[13px] md:text-sm text-white/70 font-light leading-relaxed mt-10 sm:mt-14 text-center px-4"
      >
        Nossa curadoria é especializada na transação confidencial de propriedades de altíssimo padrão
        no Brasil e nos polos imobiliários mais cobiçados do mundo. Proporcionamos acesso direto a residências
        exclusivas, coberturas icônicas e vilas privadas que não estão no mercado aberto.
      </motion.p>
    </section>
  );
};
