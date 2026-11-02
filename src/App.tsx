import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Pillars } from './components/Pillars';
import { PropertyShowcase } from './components/PropertyShowcase';
import { FeatureBanner } from './components/FeatureBanner';
import { BentoGrid } from './components/BentoGrid';
import { BookingModal } from './components/BookingModal';

export const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#040405] text-[#ededed] font-sans selection:bg-[#ff7a50]/20 selection:text-[#ff9d7d] overflow-x-hidden relative">
      <div className="fixed inset-0 bg-noise opacity-30 pointer-events-none z-0" />

      <div className="relative z-10 pb-24">
        <Navbar onOpenBooking={() => setIsBookingOpen(true)} />
        <main>
          <Hero onOpenBooking={() => setIsBookingOpen(true)} />
          <Pillars />
          <PropertyShowcase onOpenBooking={() => setIsBookingOpen(true)} />
          <FeatureBanner onOpenBooking={() => setIsBookingOpen(true)} />
          <BentoGrid />
        </main>
      </div>

      {/* Modal VIP em Glassmorphism do Arsenal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
};

export default App;
