import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, ChevronDown, Sparkles, Send, ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function ContactSection({ onOpenProposal }) {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: 'How quickly does CRYVO launch campaigns after onboarding?',
      a: 'Our rapid deployment sprint takes 5 to 7 business days from initial strategy sign-off. This includes deep market recon, tracking pixel architecture, and complete creative production.'
    },
    {
      q: 'What makes CRYVO fundamentally different from traditional agencies?',
      a: 'We eliminate agency bloat. You work directly with elite growth engineers and creative directors. We combine cinematic luxury aesthetics with mathematical attribution, driven by our active Instagram content engine @cryvo.media.'
    },
    {
      q: 'Does CRYVO produce video commercials and short-form reels in-house?',
      a: 'Yes. Our in-house studio handles 4K video cinematography, professional voiceovers, motion graphics, and viral short-form editing tailored specifically for Instagram Reels, YouTube Shorts, and TikTok.'
    },
    {
      q: 'How does your Interactive Proposal tool work?',
      a: 'You pick your desired services, target budget range, timeline, and business goals above. The moment you submit, our founders review your choices in real time and prepare a tailored growth roadmap within 4 hours.'
    },
    {
      q: 'What is your typical engagement model?',
      a: 'We offer agile 90-day growth sprints and ongoing monthly retainer partnerships. For brands needing specific project rollouts (like a web build or commercial launch), we also deliver one-off bespoke sprints.'
    }
  ];

  return (
    <section id="contact" className="py-24 relative z-10 bg-dark-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
                Get In Touch
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
                Let's Build Something <span className="text-gold-gradient font-cinzel">Dominant.</span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-base mt-4 leading-relaxed">
                Ready to accelerate your startup or luxury brand? Connect with the founders directly or drop your project specifications.
              </p>
            </div>

            {/* Channels Cards */}
            <div className="space-y-4">
              {/* Instagram */}
              <a
                href="https://instagram.com/cryvo.media"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-4 rounded-2xl flex items-center justify-between group hover:border-gold-500/50 transition-all border border-white/10"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-pink-500/20">
                    <InstagramIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 font-medium">Official Instagram</span>
                    <h4 className="text-base font-bold text-white group-hover:text-gold-300 transition-colors">
                      @cryvo.media
                    </h4>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-gold-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* WhatsApp Quick Chat */}
              <a
                href="https://wa.me/919633365935?text=Hi%20CRYVO%20Team!%20I%20am%20interested%20in%20scaling%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-4 rounded-2xl flex items-center justify-between group hover:border-[#25D366]/50 transition-all border border-white/10"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366]">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 font-medium">Instant WhatsApp Line</span>
                    <h4 className="text-base font-bold text-white group-hover:text-[#25D366] transition-colors">
                      +91 96333 65935
                    </h4>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-[#25D366] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* Email */}
              <a
                href="mailto:contact@cryvo.media"
                className="glass-panel p-4 rounded-2xl flex items-center justify-between group hover:border-gold-500/50 transition-all border border-white/10"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 font-medium">Direct Inquiries</span>
                    <h4 className="text-base font-bold text-white group-hover:text-gold-300 transition-colors">
                      contact@cryvo.media
                    </h4>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-gold-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>

            {/* Quick Consultation CTA */}
            <div className="p-6 rounded-2xl glass-panel-gold border border-gold-500/30">
              <h4 className="text-sm font-bold text-white font-cinzel">Fastest Way to Get Started?</h4>
              <p className="text-xs text-gray-300 mt-1 mb-4">
                Use our Interactive Proposal Builder to select your services and budget in 60 seconds.
              </p>
              <button
                onClick={onOpenProposal}
                className="w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-gold-500 hover:bg-gold-400 text-black shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Jump to Interactive Builder</span>
              </button>
            </div>
          </div>

          {/* FAQ Column */}
          <div className="lg:col-span-7 space-y-4">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white font-cinzel">
                Frequently Asked <span className="text-gold-gradient">Questions</span>
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Everything you need to know about partnering with CRYVO.
              </p>
            </div>

            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="glass-panel rounded-2xl overflow-hidden border border-white/10 transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 group"
                  >
                    <span className={`text-sm sm:text-base font-bold transition-colors ${isOpen ? 'text-gold-300' : 'text-white group-hover:text-gold-400'}`}>
                      {faq.q}
                    </span>
                    <div className={`p-1.5 rounded-lg bg-white/5 border border-white/10 text-gold-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
