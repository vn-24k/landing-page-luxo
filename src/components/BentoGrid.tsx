import React from 'react';
import { motion } from 'framer-motion';
import glassHouse from '../assets/glass-house.png';

export const BentoGrid: React.FC = () => {
  return (
    <section id="diferenciais" className="w-full max-w-5xl mx-auto px-4 py-16 sm:py-20">
      {/* Título da Seção */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
          Nossos Diferenciais
        </h2>
      </div>

      {/* Grid de 3 Colunas com a Arquitetura da Referência */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {/* Card 1: Atendimento Personalizado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[24px] bg-[#0c0c12] border border-white/[0.08] p-7 sm:p-8 flex flex-col justify-between group hover:border-[#ff8a65]/30 transition-colors"
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-normal text-white mb-2 leading-snug">
              Atendimento<br />Personalizado
            </h3>
          </div>

          <div className="mt-14">
            <p className="text-[12px] sm:text-[13px] text-white/50 font-light leading-relaxed">
              Consultores seniores realizam uma imersão profunda no seu estilo de vida e perfil
              patrimonial, apresentando com exclusividade residências que ressoam com a sua identidade.
            </p>
          </div>
        </motion.div>

        {/* Card 2: Escultura 3D da Casa Flutuando + Autoridade Internacional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative flex flex-col items-center justify-center p-6"
        >
          {/* Escultura 3D da Casa Flutuante com o Asset Real */}
          <div className="relative w-44 h-44 sm:w-48 sm:h-48 flex items-center justify-center animate-float-slow mb-4">
            <img
              src={glassHouse}
              alt="Casa 3D Iridescente"
              className="w-full h-full object-contain filter drop-shadow-[0_12px_28px_rgba(255,110,64,0.35)] select-none"
              draggable="false"
            />
          </div>

          {/* Legenda em Português */}
          <h3 className="text-xl sm:text-2xl font-normal text-white text-center">
            Autoridade Internacional
          </h3>
          <p className="text-[11px] text-white/40 font-light mt-1 text-center">
            Mais de duas décadas de domínio e relações privilegiadas no mercado prime.
          </p>
        </motion.div>

        {/* Card 3: Sigilo e Segurança */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative overflow-hidden rounded-[24px] bg-[#0c0c12] border border-white/[0.08] p-7 sm:p-8 flex flex-col justify-between group hover:border-[#ff8a65]/30 transition-colors"
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-normal text-white mb-2 leading-snug">
              Sigilo &<br />Segurança
            </h3>
          </div>

          <div className="mt-14">
            <p className="text-[12px] sm:text-[13px] text-white/50 font-light leading-relaxed">
              Operações estritamente blindadas por acordos de confidencialidade (NDA), curadoria
              jurídica integral e máxima discrição para preservar seu legado e privacidade familiar.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
