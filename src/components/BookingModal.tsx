import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    categoria: 'Mansão de Autor',
    investimento: 'R$ 25M - R$ 50M'
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
      setSubmitted(false);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 2800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Fosco Escuro */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg rounded-[28px] bg-[#0c0c12]/90 border border-white/15 p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.85)] z-10 overflow-hidden"
          >
            {/* Brilho Sutil Superior */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#ff7a50]/20 to-transparent blur-3xl pointer-events-none" />

            {/* Botão Fechar */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center">
                <CheckCircle2 className="w-14 h-14 text-[#ffae8a] mb-4 animate-bounce" />
                <h3 className="text-2xl font-bold text-white mb-2">Solicitação Recebida</h3>
                <p className="text-sm text-white/60 max-w-sm">
                  Um dos nossos Diretores de Contas VIP entrará em contato com sigilo absoluto
                  nas próximas 2 horas.
                </p>
              </div>
            ) : (
              <div>
                {/* Header */}
                <div className="flex items-center gap-2 mb-2 text-[#ffae8a] text-xs uppercase tracking-wider font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Atendimento Confidencial VIP</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-1">
                  Agendar Consultoria
                </h2>
                <p className="text-xs text-white/50 mb-6">
                  Preencha seus dados para receber nosso portfólio restrito sob protocolo NDA.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-white/70 mb-1.5">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nome}
                      onChange={e => setFormData({ ...formData, nome: e.target.value })}
                      placeholder="Ex: Roberto Albuquerque"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#ff8a65]/60 focus:bg-white/[0.07] transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-white/70 mb-1.5">
                        E-mail
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="contato@empresa.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#ff8a65]/60 focus:bg-white/[0.07] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-white/70 mb-1.5">
                        Telefone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.telefone}
                        onChange={e => setFormData({ ...formData, telefone: e.target.value })}
                        placeholder="+55 (11) 99999-9999"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#ff8a65]/60 focus:bg-white/[0.07] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-white/70 mb-1.5">
                        Interesse Principal
                      </label>
                      <select
                        value={formData.categoria}
                        onChange={e => setFormData({ ...formData, categoria: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-[#14141c] border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff8a65]/60 transition-all"
                      >
                        <option value="Mansão de Autor">Mansão de Autor</option>
                        <option value="Cobertura Sky">Cobertura Sky</option>
                        <option value="Vila Histórica">Vila Histórica</option>
                        <option value="Propriedade Prime">Propriedade Prime</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-white/70 mb-1.5">
                        Faixa de Investimento
                      </label>
                      <select
                        value={formData.investimento}
                        onChange={e => setFormData({ ...formData, investimento: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-[#14141c] border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff8a65]/60 transition-all"
                      >
                        <option value="R$ 15M - R$ 25M">R$ 15M - R$ 25M</option>
                        <option value="R$ 25M - R$ 50M">R$ 25M - R$ 50M</option>
                        <option value="R$ 50M - R$ 100M">R$ 50M - R$ 100M</option>
                        <option value="Acima de R$ 100M">Acima de R$ 100M</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 py-3 rounded-full bg-gradient-to-r from-[#ffae8a] via-[#ff7a50] to-[#e64a19] text-[#120a06] font-semibold text-sm shadow-[0_4px_20px_rgba(255,122,80,0.35)] hover:shadow-[0_6px_25px_rgba(255,122,80,0.5)] transition-all transform hover:scale-[1.01] active:scale-[0.99]"
                  >
                    Confirmar Solicitação de Acesso VIP
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
