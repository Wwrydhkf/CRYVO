import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, ShieldCheck, Play, Award, Flame } from 'lucide-react';

export default function Hero({ onOpenProposal, onOpenWorks }) {
  const stats = [
    { value: '7.8x', label: 'Average ROAS on Paid Ads', icon: TrendingUp },
    { value: '₹140M+', label: 'Client Revenue Generated', icon: Sparkles },
    { value: '35M+', label: 'Viral Reel & Video Views', icon: Flame },
    { value: '99.2%', label: 'Client Retention & Trust', icon: ShieldCheck },
  ];

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-b from-gold-500/15 via-gold-600/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        {/* Startup Launch Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-gold-500/30 backdrop-blur-md mb-8 animate-fade-in shadow-lg shadow-gold-500/10">
          <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping" />
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-gold-300">
            CRYVO DIGITAL MARKETING • OFFICIAL START-UP LAUNCH
          </span>
          <span className="hidden sm:inline-block text-xs text-gray-400 font-mono">
            @cryvo.media
          </span>
        </div>

        {/* Logo Presentation in Hero */}
        <div className="flex justify-center mb-8">
          <div className="relative group">
            {/* Outer animated gold ring glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-gold-600 via-amber-300 to-gold-700 rounded-full blur-xl opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
            
            {/* Logo container */}
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-b from-gold-300 via-gold-500 to-gold-800 shadow-2xl flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#08080A] flex items-center justify-center overflow-hidden p-1">
                <img
                  src="/cryvo-logo.png"
                  alt="CRYVO Official Emblem"
                  className="w-full h-full object-cover rounded-full scale-105 group-hover:scale-115 transition-transform duration-700"
                />
              </div>
            </div>
            {/* Floating verification badge */}
            <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-gold-500 to-amber-300 text-black p-1.5 rounded-full shadow-lg border border-black" title="Verified Growth Agency">
              <Award className="w-4 h-4 text-black" />
            </div>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1] max-w-5xl mx-auto">
          We Engineer <span className="text-gold-gradient font-cinzel">Unmatched</span> Growth For Next-Gen Brands.
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
          CRYVO merges high-precision performance advertising, cinematic video production, and viral social media engineering on <span className="text-gold-400 font-semibold underline decoration-gold-500/50 underline-offset-4">@cryvo.media</span> to turn ambitious businesses into dominant market leaders.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={onOpenProposal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm sm:text-base font-bold uppercase tracking-wider bg-gradient-to-r from-gold-500 via-gold-400 to-amber-300 text-black shadow-xl shadow-gold-500/30 hover:shadow-gold-500/50 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <Sparkles className="w-5 h-5 text-black" />
            <span>Customize Your Project & Get Instant Quote</span>
            <ArrowRight className="w-5 h-5 text-black" />
          </button>

          <button
            onClick={onOpenWorks}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-sm sm:text-base font-semibold text-gray-200 bg-white/5 hover:bg-gold-500/10 border border-gold-500/30 hover:border-gold-500/60 backdrop-blur-md hover:text-gold-300 transition-all duration-300"
          >
            <Play className="w-4 h-4 text-gold-400 fill-gold-400" />
            <span>View Verified Case Studies</span>
          </button>
        </div>

        {/* Stat Highlights Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="glass-panel-gold rounded-2xl p-5 text-center relative overflow-hidden group hover:border-gold-400/50 transition-all duration-300"
              >
                <div className="flex justify-center mb-2">
                  <div className="p-2 rounded-xl bg-gold-500/10 text-gold-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gold-gradient font-cinzel">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-400 mt-1 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Brand Niche Marquee */}
        <div className="mt-14 pt-8 border-t border-white/10 max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-4 font-semibold">
            Trusted By High-Growth Founders Across Industries
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-semibold text-gray-400">
            {['Luxury Fashion & Jewelry', 'D2C Skincare & Wellness', 'High-Ticket B2B & Fintech', 'Modern Hospitality & Dining', 'AI & SaaS Startups'].map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-gold-500/40 hover:text-gold-300 transition-all"
              >
                ✦ {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
