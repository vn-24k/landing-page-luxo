import React from 'react';
import { Home, Building2, Building, Castle } from 'lucide-react';

export const Pillars: React.FC = () => {
  const pillars = [
    {
      icon: Home,
      line1: 'Mansões',
      line2: 'de Autor'
    },
    {
      icon: Building2,
      line1: 'Propriedades',
      line2: 'Prime'
    },
    {
      icon: Building,
      line1: 'Coberturas',
      line2: 'Sky'
    },
    {
      icon: Castle,
      line1: 'Vilas',
      line2: 'Históricas'
    }
  ];

  return (
    <section id="pilares" className="w-full max-w-5xl mx-auto px-4 py-8 sm:py-12">
      <div className="flex flex-wrap items-center justify-between gap-6 sm:gap-8 py-6">
        {pillars.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-3.5 group cursor-default transition-transform hover:-translate-y-0.5"
            >
              <Icon className="w-6 h-6 text-white/80 group-hover:text-[#ff8a65] transition-colors stroke-[1.5]" />
              
              <div className="flex flex-col text-left leading-tight">
                <span className="text-sm font-medium text-white/90 tracking-tight group-hover:text-white transition-colors">
                  {item.line1}
                </span>
                <span className="text-sm font-medium text-white/90 tracking-tight group-hover:text-white transition-colors">
                  {item.line2}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
