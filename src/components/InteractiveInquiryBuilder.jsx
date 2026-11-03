import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  Sparkles,
  Check,
  TrendingUp,
  Send,
  Zap,
  Building,
  User,
  Mail,
  Phone,
  Globe,
  MessageSquare,
  ShieldCheck,
  ArrowRight,
  Clock,
  Target,
  DollarSign
} from 'lucide-react';

const SERVICE_OPTIONS = [
  { id: 'Performance Ads', title: 'High-ROI Performance Marketing', desc: 'Meta, Google & TikTok Paid Acquisition', icon: '🚀' },
  { id: 'Viral Social Media', title: 'Viral Social Media Growth', desc: 'Reels, Story Sequences & Instagram Domination', icon: '🔥' },
  { id: 'Web & E-Commerce', title: 'High-Conversion Web & E-Commerce', desc: 'Custom Animated Storefronts & Next.js Platforms', icon: '💻' },
  { id: 'Cinematic Branding', title: 'Cinematic Video & Brand Identity', desc: '4K Commercials, Luxury Visuals & 3D Assets', icon: '🎬' },
  { id: 'Dominant SEO', title: 'Dominant SEO & Search Authority', desc: 'Rank #1 on Google for Buyer-Intent Searches', icon: '📈' },
  { id: 'Influencer PR', title: 'Influencer Collabs & Tier-1 PR', desc: 'Top Creator Seedings & Press Coverage', icon: '👑' },
];

const BUDGET_OPTIONS = [
  { label: 'Starter Scale', range: '₹25,000 - ₹50,000 / mo', desc: 'For early startups seeking rapid validation' },
  { label: 'Growth Engine', range: '₹50,000 - ₹1,50,000 / mo', desc: 'Aggressive scaling with multichannel ads' },
  { label: 'Market Leader', range: '₹1,50,000 - ₹3,50,000 / mo', desc: 'Full-service omnichannel domination' },
  { label: 'Enterprise Custom', range: '₹3,50,000+ / mo', desc: 'Bespoke retainer with dedicated growth squad' },
];

const TIMELINE_OPTIONS = [
  'Immediate (Within 7-14 Days)',
  'Next 1 Month',
  'Next 2 - 3 Months',
  'Strategic Long-Term Retainer'
];

const GOAL_OPTIONS = [
  'Scale Revenue & 5x+ ROAS',
  'Explode Brand Awareness & Viral Reach',
  'Launch New Brand / Rebranding Overhaul',
  'Increase Conversion Rate & Lead Flow'
];

export default function InteractiveInquiryBuilder({ onLeadSubmit, preselectedService }) {
  const [selectedServices, setSelectedServices] = useState(['Performance Ads', 'Viral Social Media']);
  const [selectedBudget, setSelectedBudget] = useState('₹50,000 - ₹1,50,000 / mo');
  const [selectedTimeline, setSelectedTimeline] = useState('Immediate (Within 7-14 Days)');
  const [selectedGoal, setSelectedGoal] = useState('Scale Revenue & 5x+ ROAS');

  // Customer contact details
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    website: '',
    notes: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submittedLead, setSubmittedLead] = useState(null);

  // Sync if preselected from service cards
  useEffect(() => {
    if (preselectedService) {
      const match = SERVICE_OPTIONS.find(s => s.title.toLowerCase().includes(preselectedService.toLowerCase()) || preselectedService.toLowerCase().includes(s.id.toLowerCase()));
      if (match && !selectedServices.includes(match.id)) {
        setSelectedServices(prev => [...prev, match.id]);
      }
    }
  }, [preselectedService]);

  const toggleService = (id) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.phone.trim()) {
      alert('Please provide at least your Full Name and Phone / WhatsApp number so our team can send your custom blueprint.');
      return;
    }

    setSubmitting(true);

    const generatedId = `CRV-${Math.floor(1000 + Math.random() * 9000)}`;

    const newLead = {
      id: generatedId,
      timestamp: new Date().toISOString(),
      fullName: formData.fullName.trim(),
      businessName: formData.businessName.trim() || 'Private Brand',
      email: formData.email.trim() || 'Not specified',
      phone: formData.phone.trim(),
      website: formData.website.trim() || 'N/A',
      selectedServices: selectedServices,
      budget: selectedBudget,
      timeline: selectedTimeline,
      primaryGoal: selectedGoal,
      notes: formData.notes.trim() || 'None provided',
      status: 'New',
      adminNotes: 'Recently submitted through interactive quote builder.'
    };

    setTimeout(() => {
      onLeadSubmit(newLead);
      setSubmitting(false);
      setSubmittedLead(newLead);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#FFDF73', '#FFFFFF', '#996515']
        });
      } catch (err) {
        console.error(err);
      }
    }, 600);
  };

  const resetForm = () => {
    setSubmittedLead(null);
    setFormData({
      fullName: '',
      businessName: '',
      email: '',
      phone: '',
      website: '',
      notes: ''
    });
  };

  return (
    <section id="proposal" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Interactive Project Builder
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
            Customize Your <span className="text-gold-gradient font-cinzel">Growth Blueprint</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Select your preferred capabilities, budget tier, and business goals. Submit your choices to receive a custom execution plan tailored to your brand.
          </p>
        </div>

        {/* Builder Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Options & Form Column */}
          <div className="lg:col-span-8 space-y-10">
            {/* Step 1: Choose Capabilities */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-gold-500/20 text-gold-400 border border-gold-500/30 flex items-center justify-center font-bold text-sm">
                    01
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white">Choose Your Services</h3>
                    <p className="text-xs text-gray-400">Select all services you need for your brand</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-gold-400">
                  {selectedServices.length} Selected
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SERVICE_OPTIONS.map((srv) => {
                  const isSelected = selectedServices.includes(srv.id);
                  return (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => toggleService(srv.id)}
                      className={`p-4 rounded-xl text-left transition-all duration-200 border flex items-start gap-3.5 ${
                        isSelected
                          ? 'bg-gold-500/10 border-gold-500/70 shadow-lg shadow-gold-500/10'
                          : 'bg-dark-800/60 border-white/5 hover:border-white/20 text-gray-300'
                      }`}
                    >
                      <span className="text-2xl">{srv.icon}</span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className={`text-sm font-bold ${isSelected ? 'text-gold-300' : 'text-white'}`}>
                            {srv.title}
                          </span>
                          <div
                            className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all ${
                              isSelected
                                ? 'bg-gold-500 border-gold-500 text-black'
                                : 'border-white/20 bg-black/40'
                            }`}
                          >
                            {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                        </div>
                        <p className="text-[11px] text-gray-400 mt-1">{srv.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Choose Investment Range */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-lg bg-gold-500/20 text-gold-400 border border-gold-500/30 flex items-center justify-center font-bold text-sm">
                  02
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white">Target Monthly Growth Budget</h3>
                  <p className="text-xs text-gray-400">Estimated investment you are comfortable deploying</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {BUDGET_OPTIONS.map((bg) => {
                  const isSelected = selectedBudget === bg.range;
                  return (
                    <button
                      key={bg.label}
                      type="button"
                      onClick={() => setSelectedBudget(bg.range)}
                      className={`p-4 rounded-xl text-left transition-all duration-200 border ${
                        isSelected
                          ? 'bg-gold-500/15 border-gold-400 text-white shadow-md shadow-gold-500/10'
                          : 'bg-dark-800/60 border-white/5 hover:border-white/20 text-gray-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold uppercase tracking-wider text-gold-400">
                          {bg.label}
                        </span>
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            isSelected ? 'border-gold-400 bg-gold-400' : 'border-white/30'
                          }`}
                        >
                          {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-black" />}
                        </div>
                      </div>
                      <div className="text-base font-extrabold text-white">{bg.range}</div>
                      <div className="text-[11px] text-gray-400 mt-1">{bg.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Timeline & Goals */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Timeline */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-gold-400" />
                  <label className="text-sm font-bold text-white">Launch Timeline</label>
                </div>
                <div className="space-y-2">
                  {TIMELINE_OPTIONS.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTimeline(time)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-medium border transition-all ${
                        selectedTimeline === time
                          ? 'bg-gold-500/20 border-gold-500 text-gold-200 font-bold'
                          : 'bg-dark-800/40 border-white/5 text-gray-400 hover:text-white'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Goal */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Target className="w-4 h-4 text-gold-400" />
                  <label className="text-sm font-bold text-white">Primary Goal</label>
                </div>
                <div className="space-y-2">
                  {GOAL_OPTIONS.map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setSelectedGoal(g)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-medium border transition-all ${
                        selectedGoal === g
                          ? 'bg-gold-500/20 border-gold-500 text-gold-200 font-bold'
                          : 'bg-dark-800/40 border-white/5 text-gray-400 hover:text-white'
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 4: Customer Details Form */}
            <div className="glass-panel-gold rounded-2xl p-6 sm:p-8 border border-gold-500/30">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-lg bg-gold-500/20 text-gold-400 border border-gold-500/30 flex items-center justify-center font-bold text-sm">
                  03
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white">Enter Your Details</h3>
                  <p className="text-xs text-gray-400">Where should our strategists deliver your blueprint?</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Your Full Name <span className="text-gold-400">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Arjun Mehta"
                        required
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-dark-900 border border-white/10 focus:border-gold-500 focus:outline-none text-sm text-white placeholder-gray-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Brand / Company Name */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Brand / Business Name
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        placeholder="e.g. Velvet & Gold Apparel"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-dark-900 border border-white/10 focus:border-gold-500 focus:outline-none text-sm text-white placeholder-gray-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Phone / WhatsApp Number <span className="text-gold-400">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        required
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-dark-900 border border-white/10 focus:border-gold-500 focus:outline-none text-sm text-white placeholder-gray-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="arjun@yourbrand.com"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-dark-900 border border-white/10 focus:border-gold-500 focus:outline-none text-sm text-white placeholder-gray-500 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Website / Instagram */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Website URL or Instagram Profile Link
                  </label>
                  <div className="relative">
                    <Globe className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      placeholder="e.g. instagram.com/mybrand or mybrand.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-dark-900 border border-white/10 focus:border-gold-500 focus:outline-none text-sm text-white placeholder-gray-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Notes / Vision */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    What is your current biggest growth bottleneck or vision?
                  </label>
                  <div className="relative">
                    <MessageSquare className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                    <textarea
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="Tell us about your target audience, current monthly revenue, or specific expectations..."
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-dark-900 border border-white/10 focus:border-gold-500 focus:outline-none text-sm text-white placeholder-gray-500 transition-colors resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-xl font-extrabold text-sm sm:text-base uppercase tracking-wider bg-gradient-to-r from-gold-500 via-gold-400 to-amber-300 text-black shadow-xl shadow-gold-500/30 hover:shadow-gold-500/50 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        Generating Custom Strategy...
                      </span>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5 text-black" />
                        <span>Submit Requirements & Lock In Strategy</span>
                        <Send className="w-4 h-4 text-black" />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-gray-400 text-center mt-2 flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                    Your information is 100% confidential. No spam, ever.
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Dynamic Summary Sticky Card Column */}
          <div className="lg:col-span-4 sticky top-24 space-y-6">
            <div className="glass-panel-gold rounded-2xl p-6 border border-gold-500/40 relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-300 font-cinzel">
                  Live Project Summary
                </span>
                <span className="px-2 py-0.5 rounded-full bg-gold-500/20 text-gold-400 text-[10px] font-bold">
                  ACTIVE BUILD
                </span>
              </div>

              {/* Projections */}
              <div className="py-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">Services Picked</span>
                  <span className="text-sm font-bold text-white">{selectedServices.length} Core Modules</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">Budget Tier</span>
                  <span className="text-xs font-bold text-gold-400 truncate max-w-[170px] text-right">{selectedBudget}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">Timeline</span>
                  <span className="text-xs font-medium text-gray-200">{selectedTimeline.split(' ')[0]}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">Projected ROAS</span>
                  <span className="text-sm font-extrabold text-gold-gradient font-cinzel">5.2x - 8.4x</span>
                </div>
              </div>

              {/* Selected Services Tags */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold block mb-2">
                  Selected Modules:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedServices.map((id) => (
                    <span
                      key={id}
                      className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-white/5 border border-gold-500/30 text-gold-300"
                    >
                      ✓ {id}
                    </span>
                  ))}
                </div>
              </div>

              {/* Start-Up Guarantee */}
              <div className="mt-6 p-3.5 rounded-xl bg-black/40 border border-gold-500/20 text-center">
                <Zap className="w-5 h-5 text-gold-400 mx-auto mb-1.5" />
                <h4 className="text-xs font-bold text-white">CRYVO Zero-Fluff Commitment</h4>
                <p className="text-[10px] text-gray-400 mt-1 leading-relaxed">
                  Every strategy is crafted directly by senior growth directors. We personally review every submission within 4 hours.
                </p>
              </div>
            </div>

            {/* Instagram Connection Pill */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <img src="/cryvo-logo.png" alt="CRYVO" className="w-8 h-8 rounded-full border border-gold-500/30" />
                <div>
                  <div className="text-xs font-bold text-white">Follow our journey</div>
                  <div className="text-[11px] text-gold-400 font-mono">@cryvo.media</div>
                </div>
              </div>
              <a
                href="https://instagram.com/cryvo.media"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-gold-500 text-black hover:bg-gold-400 transition-colors"
              >
                Follow
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal when customer submits */}
      {submittedLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="glass-panel-gold rounded-3xl max-w-lg w-full p-8 border border-gold-500/50 relative shadow-2xl shadow-gold-500/20 text-center">
            <div className="w-16 h-16 rounded-full bg-gold-500/20 border-2 border-gold-400 flex items-center justify-center mx-auto mb-5 text-gold-400 shadow-lg shadow-gold-500/30">
              <Sparkles className="w-8 h-8" />
            </div>

            <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white/10 text-gold-300 border border-gold-500/40">
              REFERENCE ID: {submittedLead.id}
            </span>

            <h3 className="text-2xl font-extrabold text-white mt-4 mb-2 font-cinzel">
              Strategy Request Received!
            </h3>

            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Thank you, <strong className="text-gold-300">{submittedLead.fullName}</strong>. Your customized project requirements for <strong className="text-white">{submittedLead.businessName}</strong> have been recorded in our system.
            </p>

            <div className="p-4 rounded-xl bg-dark-900/80 border border-white/10 text-left text-xs space-y-2 mb-6">
              <div><strong className="text-gray-400">Services:</strong> <span className="text-white">{submittedLead.selectedServices.join(', ')}</span></div>
              <div><strong className="text-gray-400">Budget:</strong> <span className="text-gold-400 font-semibold">{submittedLead.budget}</span></div>
              <div><strong className="text-gray-400">Timeline:</strong> <span className="text-white">{submittedLead.timeline}</span></div>
              <div><strong className="text-gray-400">Goal:</strong> <span className="text-white">{submittedLead.primaryGoal}</span></div>
            </div>

            <div className="space-y-3">
              {/* Direct WhatsApp Instant Connect */}
              <a
                href={`https://wa.me/919633365935?text=${encodeURIComponent(`Hi CRYVO Team! I just submitted my proposal on your website for ${submittedLead.businessName} (Ref ID: ${submittedLead.id}). Here are my details: Services: ${submittedLead.selectedServices.join(', ')}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm bg-[#25D366] hover:bg-[#20bd5a] text-black shadow-lg shadow-green-500/20 transition-all"
              >
                <span>Chat on WhatsApp Directly with CRYVO</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={resetForm}
                className="w-full py-2.5 rounded-xl text-xs font-semibold text-gray-400 hover:text-white transition-colors"
              >
                Close & Submit Another Request
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
