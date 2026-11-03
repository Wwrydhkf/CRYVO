import React, { useState, useEffect } from 'react';
import { MessageCircle, LayoutDashboard, ArrowUp, Sparkles, X } from 'lucide-react';

export default function FloatingWidgets({ onOpenAdmin, leadsCount, onOpenProposal }) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [recentNotification, setRecentNotification] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show a dynamic toast periodically to show brand momentum
  useEffect(() => {
    const sampleNotifications = [
      { name: 'Vikram S.', company: 'Singhania Jewels', city: 'Mumbai', action: 'locked in a Performance Ads blueprint' },
      { name: 'Aanya K.', company: 'GlowAura Skincare', city: 'Delhi', action: 'requested an E-commerce CRO proposal' },
      { name: 'Rohan M.', company: 'Kinetix Gear', city: 'Bengaluru', action: 'booked a Viral Reels strategy session' },
    ];

    let timer = setTimeout(() => {
      setRecentNotification(sampleNotifications[0]);
    }, 4000);

    let hideTimer = setTimeout(() => {
      setRecentNotification(null);
    }, 11000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Live Activity Toast */}
      {recentNotification && (
        <div className="fixed bottom-6 left-6 z-40 max-w-xs sm:max-w-sm glass-panel-gold p-3.5 rounded-2xl border border-gold-500/40 shadow-2xl flex items-center gap-3 animate-fade-in">
          <div className="w-9 h-9 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center flex-shrink-0 border border-gold-500/40">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="flex-1 text-xs">
            <p className="text-white font-semibold">
              <strong className="text-gold-300">{recentNotification.name}</strong> ({recentNotification.company})
            </p>
            <p className="text-gray-400 text-[11px]">{recentNotification.action}</p>
          </div>
          <button
            onClick={() => setRecentNotification(null)}
            className="text-gray-400 hover:text-white p-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Right Bar */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* Floating "Owner Portal / My Page" Pill */}
        <button
          onClick={onOpenAdmin}
          className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#121218]/90 text-gold-300 hover:text-gold-200 border border-gold-500/40 hover:border-gold-500 shadow-xl backdrop-blur-md transition-all hover:scale-105 active:scale-95"
          title="Open CRM: View customer details and their choices"
        >
          <LayoutDashboard className="w-4 h-4 text-gold-400 group-hover:rotate-12 transition-transform" />
          <span className="text-xs font-bold font-cinzel">Owner Portal ("My Page")</span>
          {leadsCount > 0 && (
            <span className="w-5 h-5 rounded-full bg-gradient-to-r from-gold-500 to-amber-400 text-black text-[10px] font-black flex items-center justify-center shadow-md animate-pulse">
              {leadsCount}
            </span>
          )}
        </button>

        {/* WhatsApp Direct Floating Button */}
        <a
          href="https://wa.me/919633365935?text=Hi%20CRYVO%20Team!%20I%20want%20to%20discuss%20a%20marketing%20campaign."
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-black flex items-center justify-center shadow-xl shadow-green-500/30 hover:scale-110 active:scale-95 transition-all"
          title="Instant WhatsApp with CRYVO"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
        </a>

        {/* Scroll To Top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-dark-800 text-gold-400 border border-white/10 hover:border-gold-500/50 flex items-center justify-center hover:scale-110 transition-all shadow-lg"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>
    </>
  );
}
