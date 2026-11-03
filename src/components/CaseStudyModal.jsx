import React from 'react';
import { X, TrendingUp, CheckCircle, ExternalLink, Sparkles, ArrowRight } from 'lucide-react';

export default function CaseStudyModal({ work, onClose, onOpenProposal }) {
  if (!work) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="glass-panel-gold rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-gold-500/40 shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 hover:bg-gold-500 text-white hover:text-black border border-white/20 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img
            src={work.image}
            alt={work.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0E] via-black/40 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-500 text-black">
              {work.category}
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 font-cinzel">
              {work.title}
            </h3>
            <p className="text-sm text-gold-300 font-semibold">{work.client}</p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Metrics Grid */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
            {work.stats.map((st, i) => (
              <div key={i}>
                <span className="text-xl sm:text-2xl font-black text-gold-400 font-cinzel">
                  {st.value}
                </span>
                <span className="block text-[11px] text-gray-400 mt-1">{st.label}</span>
              </div>
            ))}
          </div>

          {/* Overview */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold-400 mb-2 font-cinzel">
              Project Execution Overview
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              {work.description}
            </p>
          </div>

          {/* Solution & Strategy Breakdown */}
          <div className="p-5 rounded-2xl bg-dark-900 border border-white/5 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Core Strategic Interventions:
            </h4>
            <div className="space-y-2 text-xs text-gray-300">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>Audited historical ad waste and restructured pixel conversion tracking for maximum fidelity.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>Deployed 15+ cinematic hook variations on Instagram reels via @cryvo.media content protocol.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>Engineered high-converting offer funnel and simplified checkout path, reducing friction by 40%.</span>
              </div>
            </div>
          </div>

          {/* Services Deployed */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
              Capabilities Deployed:
            </h4>
            <div className="flex flex-wrap gap-2">
              {work.servicesUsed.map((srv, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-semibold"
                >
                  {srv}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs text-gray-400">Want similar results for your brand?</p>
              <p className="text-sm font-bold text-white">We guarantee tailored strategy within 24 hours.</p>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenProposal();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-gold-500 to-amber-300 text-black text-xs font-bold uppercase tracking-wider shadow-lg shadow-gold-500/20 hover:scale-105 transition-all"
            >
              <span>Build Similar Blueprint</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
