import React from 'react';
import { TrendingUp, Sparkles, Layout, Search, Megaphone, CheckCircle2, ArrowRight } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { SERVICES_DATA } from '../data/initialData';

const iconMap = {
  TrendingUp,
  Instagram: InstagramIcon,
  Sparkles,
  Layout,
  Search,
  Megaphone
};

export default function Services({ onSelectService }) {
  return (
    <section id="services" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Elite Capabilities
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
            Full-Funnel <span className="text-gold-gradient font-cinzel">Revenue Engine</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            We don't do vanity metrics. We construct mathematical growth ecosystems engineered to deliver predictable, compounding revenue.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => {
            const Icon = iconMap[service.icon] || Sparkles;
            return (
              <div
                key={service.id}
                className="glass-panel rounded-2xl p-7 flex flex-col justify-between group glass-card-hover relative overflow-hidden"
              >
                {/* Accent top gradient */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent group-hover:via-gold-400 transition-all duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/20 to-amber-500/5 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:scale-110 group-hover:text-gold-300 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-400 group-hover:border-gold-500/30 group-hover:text-gold-400 transition-colors">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    {service.highlights.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-white/10 mt-auto">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-gray-400">Estimated Base:</span>
                    <span className="text-sm font-bold text-gold-400">{service.startingFrom}</span>
                  </div>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-white/5 hover:bg-gold-500 text-gray-200 hover:text-black border border-gold-500/30 hover:border-transparent transition-all duration-300 group/btn"
                  >
                    <span>Select for Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
