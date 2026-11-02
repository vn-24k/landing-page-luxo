import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, Maximize2, Bed, Car, ArrowUpRight } from 'lucide-react';

interface PropertyCardProps {
  title: string;
  location: string;
  price: string;
  area: string;
  suites: string;
  parking: string;
  image: string;
  onOpenBooking: () => void;
}

const TiltCard: React.FC<PropertyCardProps> = ({
  title,
  location,
  price,
  area,
  suites,
  parking,
  image,
  onOpenBooking
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rX = ((y - centerY) / centerY) * -10;
    const rY = ((x - centerX) / centerX) * 10;
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: 'spring', damping: 20, stiffness: 200, mass: 0.1 }}
      style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
      className="relative rounded-[26px] bg-[#0c0c12] border border-white/10 overflow-hidden group hover:border-[#ff8a65]/40 transition-colors shadow-[0_15px_40px_rgba(0,0,0,0.7)] flex flex-col"
    >
      {/* Imagem com Overlay de Gradiente */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c12] via-transparent to-black/30" />
        
        {/* Badge de Preço */}
        <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-xs font-semibold text-[#ffae8a]">
          {price}
        </div>

        {/* Localização */}
        <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs text-white/80">
          <Compass className="w-3.5 h-3.5 text-[#ff8a65]" />
          <span>{location}</span>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ffae8a] transition-colors">
            {title}
          </h3>

          {/* Grid de Especificações */}
          <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/[0.08] mb-5">
            <div className="flex items-center gap-1.5 text-xs text-white/60">
              <Maximize2 className="w-3.5 h-3.5 text-white/40" />
              <span>{area}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-white/60">
              <Bed className="w-3.5 h-3.5 text-white/40" />
              <span>{suites}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-white/60">
              <Car className="w-3.5 h-3.5 text-white/40" />
              <span>{parking}</span>
            </div>
          </div>
        </div>

        {/* Botão de Solicitação */}
        <button
          onClick={onOpenBooking}
          className="w-full py-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.12] border border-white/15 text-xs font-medium text-white flex items-center justify-center gap-1.5 transition-all group-hover:border-[#ff8a65]/50"
        >
          <span>Agendar Visita Exclusiva</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-white/60" />
        </button>
      </div>
    </motion.div>
  );
};

interface PropertyShowcaseProps {
  onOpenBooking: () => void;
}

export const PropertyShowcase: React.FC<PropertyShowcaseProps> = ({ onOpenBooking }) => {
  const properties = [
    {
      title: 'Villa Origami Skyline',
      location: 'Jardim Europa, São Paulo',
      price: 'R$ 48.000.000',
      area: '1.450 m²',
      suites: '6 Suítes',
      parking: '10 Vagas',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Cliffside Ocean Sanctuary',
      location: 'Joá, Rio de Janeiro',
      price: 'R$ 39.500.000',
      area: '1.200 m²',
      suites: '5 Suítes',
      parking: '8 Vagas',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Palacete Bellagio Vista',
      location: 'Lago de Como, Itália',
      price: '€ 16.800.000',
      area: '2.100 m²',
      suites: '8 Suítes',
      parking: 'Heliponto',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="portfolio" className="w-full max-w-6xl mx-auto px-4 py-16 sm:py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#ffae8a] font-semibold">
            Portfólio Confidencial
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-1.5">
            Propriedades em Destaque
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-white/50 max-w-sm mt-3 md:mt-0 font-light">
          Acesso reservado a propriedades singulares com arquitetura assinada e segurança máxima.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {properties.map((prop, idx) => (
          <TiltCard key={idx} {...prop} onOpenBooking={onOpenBooking} />
        ))}
      </div>
    </section>
  );
};
