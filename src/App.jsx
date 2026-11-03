import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import GoldParticleBackground from './components/GoldParticleBackground';
import Hero from './components/Hero';
import Services from './components/Services';
import Works from './components/Works';
import AboutUs from './components/AboutUs';
import InstagramSection from './components/InstagramSection';
import InteractiveInquiryBuilder from './components/InteractiveInquiryBuilder';
import AdminPortal from './components/AdminPortal';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CaseStudyModal from './components/CaseStudyModal';
import FloatingWidgets from './components/FloatingWidgets';
import { INITIAL_LEADS } from './data/initialData';

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [preselectedService, setPreselectedService] = useState(null);

  // Initialize leads from localStorage or use initial demo leads
  const [leads, setLeads] = useState(() => {
    try {
      const saved = localStorage.getItem('cryvo_leads_v1');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error(e);
    }
    return INITIAL_LEADS;
  });

  // Sync leads to localStorage whenever updated
  useEffect(() => {
    try {
      localStorage.setItem('cryvo_leads_v1', JSON.stringify(leads));
    } catch (e) {
      console.error(e);
    }
  }, [leads]);

  // Handle new incoming lead from customer
  const handleLeadSubmit = (newLead) => {
    setLeads((prev) => [newLead, ...prev]);
  };

  // Admin lead updates
  const handleUpdateLeadStatus = (leadId, newStatus) => {
    setLeads((prev) =>
      prev.map((l) => (l.id === leadId ? { ...l, status: newStatus } : l))
    );
  };

  const handleUpdateLeadNotes = (leadId, notes) => {
    setLeads((prev) =>
      prev.map((l) => (l.id === leadId ? { ...l, adminNotes: notes } : l))
    );
  };

  const handleDeleteLead = (leadId) => {
    if (window.confirm('Are you sure you want to delete this lead?')) {
      setLeads((prev) => prev.filter((l) => l.id !== leadId));
    }
  };

  const handleAddSampleLead = () => {
    const demoNames = ['Devraj Kapoor', 'Priyanka Sen', 'Aditya Roy', 'Natasha Patel'];
    const demoBrands = ['Chronos Haute Horlogerie', 'Solstice Botanicals', 'Hyperion Tech', 'Kaviar Living'];
    const demoServices = [
      ['Performance Ads', 'Viral Social Media'],
      ['Web & E-Commerce', 'Cinematic Branding'],
      ['Dominant SEO', 'Influencer PR'],
      ['Performance Ads', 'Web & E-Commerce', 'Influencer PR']
    ];
    const demoBudgets = [
      '₹50,000 - ₹1,50,000 / mo',
      '₹1,50,000 - ₹3,50,000 / mo',
      '₹3,50,000+ / mo',
      '₹25,000 - ₹50,000 / mo'
    ];

    const randomIndex = Math.floor(Math.random() * demoNames.length);
    const newSample = {
      id: `CRV-${Math.floor(2000 + Math.random() * 8000)}`,
      timestamp: new Date().toISOString(),
      fullName: demoNames[randomIndex],
      businessName: demoBrands[randomIndex],
      email: `${demoNames[randomIndex].toLowerCase().replace(' ', '.')}@brand.com`,
      phone: `+91 98${Math.floor(10000000 + Math.random() * 90000000)}`,
      website: `instagram.com/${demoBrands[randomIndex].toLowerCase().replace(/\s+/g, '')}`,
      selectedServices: demoServices[randomIndex],
      budget: demoBudgets[randomIndex],
      timeline: 'Immediate (Within 7-14 Days)',
      primaryGoal: 'Scale Revenue & 5x+ ROAS',
      notes: 'Demo generated lead for testing CRM choices and layout.',
      status: 'New',
      adminNotes: 'Sample lead added for testing.'
    };

    setLeads((prev) => [newSample, ...prev]);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceFromCard = (serviceTitle) => {
    setPreselectedService(serviceTitle);
    scrollToSection('proposal');
  };

  return (
    <div className="min-h-screen bg-[#070709] text-gray-100 relative selection:bg-gold-500 selection:text-black">
      {/* 60fps Interactive Gold Stardust Particles */}
      <GoldParticleBackground />

      {/* Floating Header Navbar */}
      <Navbar
        onOpenAdmin={() => setIsAdminOpen(true)}
        leadsCount={leads.filter((l) => l.status === 'New').length}
        onNavigateToSection={scrollToSection}
      />

      {/* Main Page Sections */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero
          onOpenProposal={() => scrollToSection('proposal')}
          onOpenWorks={() => scrollToSection('works')}
        />

        {/* Services Showcase */}
        <Services onSelectService={handleSelectServiceFromCard} />

        {/* Works / Portfolio Showcase */}
        <Works onSelectCaseStudy={(work) => setSelectedCaseStudy(work)} />

        {/* About CRYVO & Philosophy */}
        <AboutUs />

        {/* Instagram Showcase: @cryvo.media */}
        <InstagramSection />

        {/* Interactive Proposal Builder: Customers enter details & pick options */}
        <InteractiveInquiryBuilder
          onLeadSubmit={handleLeadSubmit}
          preselectedService={preselectedService}
        />

        {/* Contact & FAQ */}
        <ContactSection onOpenProposal={() => scrollToSection('proposal')} />
      </main>

      {/* Footer */}
      <Footer
        onOpenAdmin={() => setIsAdminOpen(true)}
        onNavigateToSection={scrollToSection}
      />

      {/* Floating Action & Notification Widgets */}
      <FloatingWidgets
        onOpenAdmin={() => setIsAdminOpen(true)}
        leadsCount={leads.filter((l) => l.status === 'New').length}
        onOpenProposal={() => scrollToSection('proposal')}
      />

      {/* Case Study Deep Dive Modal */}
      <CaseStudyModal
        work={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onOpenProposal={() => scrollToSection('proposal')}
      />

      {/* Owner CRM Portal ("My Page"): Customer Details & Choices Viewer */}
      <AdminPortal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        leads={leads}
        onUpdateLeadStatus={handleUpdateLeadStatus}
        onUpdateLeadNotes={handleUpdateLeadNotes}
        onDeleteLead={handleDeleteLead}
        onAddSampleLead={handleAddSampleLead}
      />
    </div>
  );
}
