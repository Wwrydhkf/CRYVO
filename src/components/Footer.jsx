import React from 'react';
import { ArrowUpRight, Heart, Shield, LayoutDashboard } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function Footer({ onOpenAdmin, onNavigateToSection }) {
  const handleNav = (id) => {
    if (onNavigateToSection) {
      onNavigateToSection(id);
    }
  };

  return (
    <footer className="relative bg-[#050507] border-t border-gold-500/20 pt-16 pb-12 z-10 overflow-hidden">
      {/* Ambient background gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gold-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-gold-600 via-gold-400 to-amber-200 shadow-lg shadow-gold-500/20">
                <img
                  src="/cryvo-logo.png"
                  alt="CRYVO Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <span className="font-cinzel text-2xl font-bold tracking-widest text-gold-gradient">
                  CRYVO
                </span>
                <span className="text-[10px] tracking-[0.25em] text-gray-400 uppercase block font-semibold">
                  Digital Marketing Start-Up
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              We engineer high-ROI performance marketing, viral short-form reels on <strong className="text-gold-400">@cryvo.media</strong>, and luxury brand prestige for next-generation founders.
            </p>

            {/* Social Pill */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/cryvo.media"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/5 hover:bg-gold-500/20 text-gold-300 border border-gold-500/30 transition-all group"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-gold-400" />
                <span>@cryvo.media</span>
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-cinzel">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-gold-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-gold-400 transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('works')} className="hover:text-gold-400 transition-colors">
                  Our Works / Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-gold-400 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('proposal')} className="hover:text-gold-400 transition-colors">
                  Interactive Proposal Builder
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-cinzel">
              Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>Performance Meta & Google Ads</li>
              <li>Viral Reels & Content Engine</li>
              <li>High-Conversion Web Design</li>
              <li>Luxury Brand Identity & 4K Video</li>
              <li>Programmatic SEO & Rankings</li>
              <li>Influencer Marketing & PR</li>
            </ul>
          </div>

          {/* Owner Portal Shortcut */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-cinzel">
              Internal Portal
            </h4>
            <p className="text-xs text-gray-400 mb-3">
              Access customer inquiries and campaign blueprint submissions in your CRM dashboard.
            </p>
            <button
              onClick={onOpenAdmin}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold bg-dark-800 text-gold-300 border border-gold-500/40 hover:bg-gold-500/20 transition-all shadow-md"
            >
              <LayoutDashboard className="w-3.5 h-3.5 text-gold-400" />
              <span>Open Owner CRM Portal</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} CRYVO Digital Marketing Start-Up. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="https://instagram.com/cryvo.media" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">
              Instagram: @cryvo.media
            </a>
            <span>•</span>
            <button onClick={onOpenAdmin} className="text-gray-400 hover:text-gold-400 transition-colors">
              Client Database ("My Page")
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
