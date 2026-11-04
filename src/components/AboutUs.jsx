import React from 'react';
import { Target, Lightbulb, Shield, Award, Users, Flame, Star, Quote, Crown } from 'lucide-react';
import { TESTIMONIALS } from '../data/initialData';

export default function AboutUs() {
  const steps = [
    {
      num: '01',
      title: 'Forensic Market Recon',
      desc: 'We reverse-engineer your top 5 competitors, dissect customer psychographics, and identify high-leverage growth channels.'
    },
    {
      num: '02',
      title: 'Algorithmic Architecture',
      desc: 'We construct full-funnel ad campaigns, automated retargeting loops, and high-converting landing experiences designed to print positive ROAS.'
    },
    {
      num: '03',
      title: 'Cinematic Production',
      desc: 'Our creative studio produces high-velocity reels, 4K commercials, and aesthetic brand assets that capture attention within 1.5 seconds.'
    },
    {
      num: '04',
      title: 'Exponential Scaling',
      desc: 'Once the unit economics are validated, we scale ad budgets aggressively while maintaining strict CAC discipline and maximizing customer LTV.'
    }
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider">
              About CRYVO Digital
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Where Creative Ingenuity Meets <span className="text-gold-gradient font-cinzel">Mathematical Precision.</span>
            </h2>

            <p className="text-gray-300 text-base leading-relaxed">
              Founded as a high-octane digital marketing startup, CRYVO was born out of frustration with conventional agency fluff. Most agencies deliver generic vanity metrics. We deliver cash-flow acceleration and undeniable brand prestige.
            </p>

            <p className="text-gray-400 text-sm leading-relaxed">
              We operate at the intersection of cinematic design, deep algorithmic media buying, and viral social media engineering. Powered by our creative engine on <strong className="text-gold-300">@cryvo.media</strong>, we empower brands to dominate their category rather than simply compete.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-gold-400 font-bold text-lg mb-1">Our Mission</div>
                <p className="text-xs text-gray-400">To scale 100 remarkable startups into household names with zero wasted ad spend.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-gold-400 font-bold text-lg mb-1">Our Standard</div>
                <p className="text-xs text-gray-400">Cinematic luxury visual quality backed by uncompromising ROI accountability.</p>
              </div>
            </div>
          </div>

          {/* CEO / Founder Showcase Card */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-md rounded-3xl glass-panel-gold border border-gold-500/30 shadow-2xl overflow-hidden group">
              {/* Ambient top glow */}
              <div className="absolute -inset-10 bg-gold-500/10 rounded-full blur-3xl group-hover:bg-gold-500/20 transition-all duration-700 pointer-events-none" />

              {/* Founder Photo — full-bleed portrait */}
              <div className="relative h-96 w-full overflow-hidden">
                <img
                  src="/founder-ceo.jpg"
                  alt="CRYVO Founder & CEO"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-black/20 to-transparent" />

                {/* Crown Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-gold-500/50 text-gold-400 text-xs font-bold">
                  <Crown className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
                  <span>CEO & Founder</span>
                </div>

                {/* Instagram badge */}
                <a
                  href="https://instagram.com/cryvo.media"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[11px] font-semibold text-white hover:border-gold-500/50 transition-all"
                >
                  <span>@cryvo.media</span>
                </a>
              </div>

              {/* Name & Title Block */}
              <div className="relative p-6 text-center">
                <div className="font-cinzel text-2xl font-extrabold text-gold-gradient mb-0.5">
                  Arjun Santhosh
                </div>
                <div className="text-sm font-semibold text-gold-400 tracking-widest uppercase mb-3">
                  Founder & CEO — CRYVO Digital Marketing
                </div>
                <p className="text-xs text-gray-400 leading-relaxed max-w-sm mx-auto">
                  Visionary behind CRYVO's growth engine — combining cinematic creative direction with mathematical performance marketing to build brands that dominate their market.
                </p>

                {/* Stat row */}
                <div className="mt-5 grid grid-cols-3 gap-3 pt-5 border-t border-white/10 text-center">
                  <div>
                    <div className="text-gold-300 font-extrabold text-base font-cinzel">100%</div>
                    <div className="text-[10px] text-gray-400">Data Backed</div>
                  </div>
                  <div>
                    <div className="text-gold-300 font-extrabold text-base font-cinzel">4K</div>
                    <div className="text-[10px] text-gray-400">Cinematic</div>
                  </div>
                  <div>
                    <div className="text-gold-300 font-extrabold text-base font-cinzel">24/7</div>
                    <div className="text-[10px] text-gray-400">Live CRO</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Step Framework */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
              The <span className="text-gold-gradient font-cinzel">CRYVO 4-Step Framework</span>
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Our systematic protocol for engineering consistent, multi-million dollar growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st) => (
              <div
                key={st.num}
                className="glass-panel rounded-2xl p-6 relative overflow-hidden group hover:border-gold-500/40 transition-all duration-300"
              >
                <div className="text-4xl font-black text-gold-500/20 font-cinzel group-hover:text-gold-500/40 transition-colors mb-3">
                  {st.num}
                </div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                  {st.title}
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonials */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
              What Founders Say About <span className="text-gold-gradient font-cinzel">CRYVO</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="glass-panel-gold rounded-2xl p-6 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-gold-400 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-gold-500/30 mb-2" />
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed italic mb-6">
                    "{t.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <img
                    src={t.image}
                    alt={t.author}
                    className="w-10 h-10 rounded-full object-cover border border-gold-500/40"
                  />
                  <div>
                    <h5 className="text-xs font-bold text-white">{t.author}</h5>
                    <p className="text-[11px] text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
