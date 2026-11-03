import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, TrendingUp, Sparkles, Filter } from 'lucide-react';
import { WORKS_DATA } from '../data/initialData';

export default function Works({ onSelectCaseStudy }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Performance Ads', 'Social Viral', 'Web & CRO'];

  const filteredWorks = activeFilter === 'All'
    ? WORKS_DATA
    : WORKS_DATA.filter((work) => work.category === activeFilter);

  return (
    <section id="works" className="py-24 relative z-10 bg-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
              Proof of Execution
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              Our <span className="text-gold-gradient font-cinzel">Proven Works</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mt-3 max-w-xl">
              High-impact case studies showing real revenue, viral numbers, and transformative brand positioning.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mt-6 md:mt-0 p-1.5 rounded-xl bg-dark-800/80 border border-white/10 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-gradient-to-r from-gold-500 to-amber-400 text-black shadow-md shadow-gold-500/20'
                    : 'text-gray-300 hover:text-gold-400 hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorks.map((work) => (
            <div
              key={work.id}
              onClick={() => onSelectCaseStudy(work)}
              className="glass-panel rounded-2xl overflow-hidden group glass-card-hover cursor-pointer border border-white/10 hover:border-gold-500/40 flex flex-col"
            >
              {/* Image Container with Badges */}
              <div className="relative h-60 w-full overflow-hidden bg-dark-800">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0E] via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-gold-400 border border-gold-500/30">
                    {work.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-gold-500 group-hover:text-black group-hover:border-transparent transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Client Name */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-semibold text-gold-300 tracking-wide uppercase">
                    {work.client}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-gold-300 transition-colors">
                    {work.title}
                  </h3>
                </div>
              </div>

              {/* Stats & Description */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className="text-gray-400 text-xs sm:text-sm line-clamp-2 mb-6">
                  {work.description}
                </p>

                {/* Metric Badges */}
                <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-white/5 border border-white/5 mb-4 text-center">
                  {work.stats.map((st, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-sm font-extrabold text-gold-400 font-cinzel">
                        {st.value}
                      </span>
                      <span className="text-[10px] text-gray-400 mt-0.5 truncate">
                        {st.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Services used pills */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {work.servicesUsed.map((srv, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-medium px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/5"
                    >
                      {srv}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
