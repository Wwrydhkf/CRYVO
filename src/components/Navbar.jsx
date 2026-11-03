import React, { useState, useEffect } from 'react';
import { LayoutDashboard, Menu, X, ArrowUpRight, Sparkles, ChevronRight } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function Navbar({ onOpenAdmin, leadsCount = 0, onNavigateToSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Our Works', href: '#works' },
    { label: 'About Us', href: '#about' },
    { label: 'Instagram', href: '#instagram' },
    { label: 'Estimate & Proposal', href: '#proposal' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href) => {
    setMobileMenuOpen(false);
    if (onNavigateToSection) {
      onNavigateToSection(href.replace('#', ''));
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0B0B0E]/90 backdrop-blur-xl border-b border-gold-500/20 py-3 shadow-2xl shadow-black/80'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#home');
              }}
              className="flex items-center gap-3 group"
            >
              <div className="relative w-11 h-11 rounded-full p-0.5 bg-gradient-to-tr from-gold-600 via-gold-400 to-amber-200 shadow-lg shadow-gold-500/20 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                  <img
                    src="/cryvo-logo.png"
                    alt="CRYVO Logo"
                    className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-widest text-gold-gradient group-hover:text-gold-300 transition-colors">
                  CRYVO
                </span>
                <span className="text-[9px] tracking-[0.28em] text-gray-400 uppercase -mt-1 font-medium">
                  Digital Marketing
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="text-sm font-medium text-gray-300 hover:text-gold-400 transition-colors duration-200 relative group py-1"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-gold-400 to-amber-200 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Instagram Direct Link */}
              <a
                href="https://instagram.com/cryvo.media"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/5 hover:bg-gold-500/10 text-gray-300 hover:text-gold-300 border border-white/10 hover:border-gold-500/30 transition-all duration-300"
                title="Follow @cryvo.media on Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-gold-400" />
                <span>@cryvo.media</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>

              {/* Admin Portal Toggle Button */}
              <button
                onClick={onOpenAdmin}
                className="relative flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-dark-800/90 text-gray-200 hover:text-gold-300 border border-gold-500/30 hover:border-gold-500/70 transition-all duration-300 shadow-md group"
                title="View customer submissions and choices in My Page"
              >
                <LayoutDashboard className="w-3.5 h-3.5 text-gold-400 group-hover:rotate-12 transition-transform" />
                <span>Owner Portal</span>
                {leadsCount > 0 && (
                  <span className="bg-gradient-to-r from-gold-500 to-amber-400 text-black text-[10px] font-bold px-1.5 py-0.5 rounded-full animate-pulse">
                    {leadsCount}
                  </span>
                )}
              </button>

              {/* Proposal CTA */}
              <a
                href="#proposal"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#proposal');
                }}
                className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase bg-gradient-to-r from-gold-500 via-gold-400 to-amber-300 text-black shadow-lg shadow-gold-500/25 hover:shadow-gold-500/40 hover:scale-105 transition-all duration-300"
              >
                <Sparkles className="w-3.5 h-3.5 text-black" />
                <span>Get Proposal</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenAdmin}
                className="relative p-2 rounded-lg bg-dark-800 text-gold-400 border border-gold-500/30"
                title="Owner Portal"
              >
                <LayoutDashboard className="w-5 h-5" />
                {leadsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gold-400 text-black text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {leadsCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-dark-800/80 text-gray-300 hover:text-gold-400 border border-white/10"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-16 right-0 bottom-0 w-full max-w-sm bg-[#0C0C10] border-l border-gold-500/20 p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <img src="/cryvo-logo.png" alt="CRYVO" className="w-8 h-8 rounded-full border border-gold-500/40" />
                  <span className="font-cinzel text-lg font-bold text-gold-gradient">CRYVO</span>
                </div>
                <a
                  href="https://instagram.com/cryvo.media"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-gold-400 font-semibold"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  @cryvo.media
                </a>
              </div>

              <nav className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="flex items-center justify-between text-base font-medium text-gray-200 hover:text-gold-400 py-2 px-3 rounded-lg hover:bg-white/5 transition-all"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-gold-500/60" />
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 space-y-3 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmin();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-dark-800 text-gold-300 border border-gold-500/40 text-sm font-semibold"
              >
                <LayoutDashboard className="w-4 h-4 text-gold-400" />
                <span>My Page / Owner Dashboard ({leadsCount} Leads)</span>
              </button>
              <a
                href="#proposal"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#proposal');
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-gold-500 to-amber-300 text-black text-sm font-bold shadow-lg shadow-gold-500/30"
              >
                <Sparkles className="w-4 h-4 text-black" />
                <span>Build Project & Get Proposal</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
