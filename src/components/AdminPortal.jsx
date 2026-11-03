import React, { useState } from 'react';
import {
  X,
  Search,
  Filter,
  Download,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Building,
  User,
  DollarSign,
  CheckCircle,
  ExternalLink,
  PlusCircle,
  Trash2,
  Edit3,
  Calendar,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  FileSpreadsheet
} from 'lucide-react';

export default function AdminPortal({
  isOpen,
  onClose,
  leads,
  onUpdateLeadStatus,
  onUpdateLeadNotes,
  onDeleteLead,
  onAddSampleLead
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedLeadId, setSelectedLeadId] = useState(null);
  const [editingNotesId, setEditingNotesId] = useState(null);
  const [tempNotes, setTempNotes] = useState('');

  if (!isOpen) return null;

  // Filter leads
  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (lead.email && lead.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
      lead.selectedServices.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesStatus = statusFilter === 'All' || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const activeLead = leads.find((l) => l.id === selectedLeadId) || filteredLeads[0];

  // Pipeline calculations
  const totalLeads = leads.length;
  const newLeads = leads.filter(l => l.status === 'New').length;
  const serviceCounts = {};
  leads.forEach(l => {
    l.selectedServices.forEach(s => {
      serviceCounts[s] = (serviceCounts[s] || 0) + 1;
    });
  });
  const topService = Object.keys(serviceCounts).reduce((a, b) => serviceCounts[a] > serviceCounts[b] ? a : b, 'Performance Ads');

  // Export to CSV
  const exportToCSV = () => {
    const headers = ['Lead ID', 'Timestamp', 'Full Name', 'Business Name', 'Phone', 'Email', 'Website/IG', 'Services Picked', 'Budget Range', 'Timeline', 'Primary Goal', 'Notes', 'Status', 'Admin Notes'];
    const rows = leads.map(l => [
      `"${l.id}"`,
      `"${l.timestamp}"`,
      `"${l.fullName.replace(/"/g, '""')}"`,
      `"${l.businessName.replace(/"/g, '""')}"`,
      `"${l.phone.replace(/"/g, '""')}"`,
      `"${(l.email || '').replace(/"/g, '""')}"`,
      `"${(l.website || '').replace(/"/g, '""')}"`,
      `"${l.selectedServices.join('; ')}"`,
      `"${l.budget}"`,
      `"${l.timeline}"`,
      `"${l.primaryGoal}"`,
      `"${(l.notes || '').replace(/"/g, '""')}"`,
      `"${l.status}"`,
      `"${(l.adminNotes || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `CRYVO_Customer_Leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'New':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
      case 'Contacted':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/40';
      case 'In Discussion':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/40';
      case 'Closed Won':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
      case 'Archived':
        return 'bg-gray-500/20 text-gray-400 border-gray-500/40';
      default:
        return 'bg-white/10 text-white border-white/20';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-xl animate-fade-in overflow-hidden">
      <div className="glass-panel-gold rounded-3xl w-full max-w-7xl h-[92vh] flex flex-col border border-gold-500/40 shadow-2xl shadow-gold-500/20 overflow-hidden">
        {/* Top Navbar */}
        <div className="p-4 sm:p-6 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 bg-[#08080A]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-gold-500 to-amber-200">
              <img src="/cryvo-logo.png" alt="CRYVO" className="w-full h-full object-cover rounded-full" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-cinzel text-xl sm:text-2xl font-extrabold text-gold-gradient">
                  CRYVO Owner CRM Portal
                </h2>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gold-500/20 text-gold-300 border border-gold-500/30">
                  LIVE DASHBOARD
                </span>
              </div>
              <p className="text-xs text-gray-400">
                View all incoming client inquiries, custom choices, and manage deals.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={exportToCSV}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-white/5 hover:bg-gold-500/20 text-gold-300 border border-gold-500/30 transition-all"
              title="Download Leads to Excel / CSV"
            >
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Export CSV</span>
            </button>

            <button
              onClick={onAddSampleLead}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 transition-all"
              title="Generate a realistic test submission"
            >
              <PlusCircle className="w-3.5 h-3.5 text-gold-400" />
              <span className="hidden sm:inline">Add Test Lead</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* KPI Summary Header Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 sm:p-6 bg-dark-900/60 border-b border-white/5">
          <div className="glass-panel p-3.5 rounded-xl border border-white/10">
            <span className="text-[11px] text-gray-400 uppercase font-semibold">Total Submissions</span>
            <div className="text-2xl font-black text-white mt-1 font-cinzel">{totalLeads}</div>
          </div>
          <div className="glass-panel p-3.5 rounded-xl border border-gold-500/30 bg-gold-500/5">
            <span className="text-[11px] text-gold-400 uppercase font-semibold">New / Uncontacted</span>
            <div className="text-2xl font-black text-gold-300 mt-1 font-cinzel">{newLeads}</div>
          </div>
          <div className="glass-panel p-3.5 rounded-xl border border-white/10">
            <span className="text-[11px] text-gray-400 uppercase font-semibold">Top Demanded Service</span>
            <div className="text-sm font-bold text-white mt-1.5 truncate">{topService}</div>
          </div>
          <div className="glass-panel p-3.5 rounded-xl border border-white/10">
            <span className="text-[11px] text-gray-400 uppercase font-semibold">Instagram Channel</span>
            <div className="text-sm font-bold text-gold-400 mt-1.5 truncate">@cryvo.media</div>
          </div>
        </div>

        {/* Content Area (Split: Left List, Right Detail View) */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-hidden">
          {/* Left Column: Leads List */}
          <div className="md:col-span-5 lg:col-span-5 border-r border-white/10 flex flex-col h-full bg-[#0A0A0D]">
            {/* Search & Filter Bar */}
            <div className="p-4 border-b border-white/5 space-y-3">
              <div className="relative">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Search by client, brand, service..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-dark-800 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-gold-500"
                />
              </div>

              {/* Status Filter Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-[11px]">
                {['All', 'New', 'Contacted', 'In Discussion', 'Closed Won'].map((st) => (
                  <button
                    key={st}
                    onClick={() => setStatusFilter(st)}
                    className={`px-2.5 py-1 rounded-lg font-semibold whitespace-nowrap transition-all ${
                      statusFilter === st
                        ? 'bg-gold-500 text-black font-bold'
                        : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Scrollable list */}
            <div className="flex-1 overflow-y-auto divide-y divide-white/5 p-2 space-y-1">
              {filteredLeads.length === 0 ? (
                <div className="p-8 text-center text-gray-500 text-xs">
                  No submissions found matching criteria.
                </div>
              ) : (
                filteredLeads.map((lead) => {
                  const isSelected = activeLead?.id === lead.id;
                  return (
                    <div
                      key={lead.id}
                      onClick={() => setSelectedLeadId(lead.id)}
                      className={`p-3.5 rounded-xl cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-gold-500/15 border border-gold-500/50 shadow-md'
                          : 'hover:bg-white/5 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-bold text-white truncate max-w-[170px]">
                          {lead.fullName}
                        </span>
                        <span
                          className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${getStatusBadge(
                            lead.status
                          )}`}
                        >
                          {lead.status}
                        </span>
                      </div>

                      <div className="flex items-center gap-1 text-[11px] text-gold-400 font-medium mb-2">
                        <Building className="w-3 h-3 text-gray-400" />
                        <span className="truncate">{lead.businessName}</span>
                      </div>

                      {/* Selected Service Badges Preview */}
                      <div className="flex flex-wrap gap-1 mb-2">
                        {lead.selectedServices.slice(0, 2).map((srv, i) => (
                          <span
                            key={i}
                            className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 border border-white/5 text-gray-300"
                          >
                            {srv}
                          </span>
                        ))}
                        {lead.selectedServices.length > 2 && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-gold-400">
                            +{lead.selectedServices.length - 2} more
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between text-[10px] text-gray-400 pt-1 border-t border-white/5">
                        <span>{lead.budget.split(' ')[0]} budget</span>
                        <span>{new Date(lead.timestamp).toLocaleDateString()}</span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Right Column: Lead Deep-Dive & Action Center */}
          <div className="md:col-span-7 lg:col-span-7 h-full overflow-y-auto p-4 sm:p-6 bg-[#08080A]">
            {activeLead ? (
              <div className="space-y-6">
                {/* Header with Quick Contact Actions */}
                <div className="glass-panel rounded-2xl p-6 border border-gold-500/30">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-gold-400">
                          ID: {activeLead.id}
                        </span>
                        <span className="text-xs text-gray-500">•</span>
                        <span className="text-xs text-gray-400">
                          {new Date(activeLead.timestamp).toLocaleString()}
                        </span>
                      </div>
                      <h3 className="text-2xl font-black text-white mt-1 font-cinzel">
                        {activeLead.fullName}
                      </h3>
                      <div className="text-sm font-semibold text-gold-300 flex items-center gap-1.5 mt-0.5">
                        <Building className="w-4 h-4 text-gold-500" />
                        {activeLead.businessName}
                      </div>
                    </div>

                    {/* Status Changer Dropdown */}
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400">Deal Status:</span>
                      <select
                        value={activeLead.status}
                        onChange={(e) => onUpdateLeadStatus(activeLead.id, e.target.value)}
                        className="px-3 py-1.5 rounded-xl bg-dark-800 border border-gold-500/40 text-xs font-bold text-gold-300 focus:outline-none"
                      >
                        <option value="New">New</option>
                        <option value="Contacted">Contacted</option>
                        <option value="In Discussion">In Discussion</option>
                        <option value="Closed Won">Closed Won</option>
                        <option value="Archived">Archived</option>
                      </select>
                    </div>
                  </div>

                  {/* 1-Click Direct Outreach Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
                    {/* WhatsApp */}
                    <a
                      href={`https://wa.me/${activeLead.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                        `Hi ${activeLead.fullName}, this is the leadership team at CRYVO Digital Marketing (@cryvo.media). We reviewed your proposal for ${activeLead.businessName} regarding ${activeLead.selectedServices.join(
                          ', '
                        )} and have prepared your growth blueprint. When is a good time for a 10-minute briefing?`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-black border border-[#25D366]/40 text-xs font-bold transition-all shadow-md"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp Customer</span>
                    </a>

                    {/* Direct Call */}
                    <a
                      href={`tel:${activeLead.phone}`}
                      className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-gold-500 text-gray-200 hover:text-black border border-white/10 hover:border-transparent text-xs font-bold transition-all"
                    >
                      <Phone className="w-4 h-4 text-gold-400" />
                      <span>Call {activeLead.phone}</span>
                    </a>

                    {/* Email */}
                    <a
                      href={`mailto:${activeLead.email}?subject=${encodeURIComponent(
                        `CRYVO Growth Proposal for ${activeLead.businessName}`
                      )}`}
                      className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/15 text-gray-200 border border-white/10 text-xs font-bold transition-all"
                    >
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span>Email Client</span>
                    </a>
                  </div>
                </div>

                {/* Full Details of Choices Picked by Customer */}
                <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-5">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-gold-400 font-cinzel">
                    Customer Choices & Specifications
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-3.5 rounded-xl bg-dark-900 border border-white/5">
                      <span className="text-gray-400 block mb-1">Target Monthly Budget</span>
                      <span className="text-sm font-black text-white">{activeLead.budget}</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-dark-900 border border-white/5">
                      <span className="text-gray-400 block mb-1">Desired Timeline</span>
                      <span className="text-sm font-black text-white">{activeLead.timeline}</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-dark-900 border border-white/5 sm:col-span-2">
                      <span className="text-gray-400 block mb-1">Primary Growth Objective</span>
                      <span className="text-sm font-black text-gold-300">{activeLead.primaryGoal}</span>
                    </div>
                  </div>

                  {/* Selected Services */}
                  <div>
                    <span className="text-xs text-gray-400 block mb-2 font-semibold">
                      Selected Services & Capabilities:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeLead.selectedServices.map((service, idx) => (
                        <div
                          key={idx}
                          className="px-3 py-1.5 rounded-lg bg-gold-500/15 border border-gold-500/40 text-gold-300 text-xs font-bold flex items-center gap-1.5"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-gold-400" />
                          <span>{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Customer Website / Social */}
                  {activeLead.website && activeLead.website !== 'N/A' && (
                    <div>
                      <span className="text-xs text-gray-400 block mb-1 font-semibold">
                        Website or Social Handle:
                      </span>
                      <a
                        href={activeLead.website.startsWith('http') ? activeLead.website : `https://${activeLead.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-gold-400 hover:underline inline-flex items-center gap-1"
                      >
                        {activeLead.website} <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}

                  {/* Customer's Own Message / Notes */}
                  <div>
                    <span className="text-xs text-gray-400 block mb-1 font-semibold">
                      Client Brief & Vision:
                    </span>
                    <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-xs text-gray-200 italic leading-relaxed">
                      "{activeLead.notes}"
                    </div>
                  </div>
                </div>

                {/* Internal Admin Notes Card */}
                <div className="glass-panel-gold rounded-2xl p-6 border border-gold-500/20">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Edit3 className="w-4 h-4 text-gold-400" />
                      <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                        Internal Discussion Notes (Only Visible to You)
                      </h4>
                    </div>
                    <button
                      onClick={() => onDeleteLead(activeLead.id)}
                      className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1 font-semibold"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Delete Lead</span>
                    </button>
                  </div>

                  <textarea
                    rows={3}
                    placeholder="Type call takeaways, quote amounts, client reactions..."
                    value={activeLead.adminNotes || ''}
                    onChange={(e) => onUpdateLeadNotes(activeLead.id, e.target.value)}
                    className="w-full p-3 rounded-xl bg-dark-900 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 resize-none"
                  />
                  <p className="text-[10px] text-gray-500 mt-1">
                    Auto-saved to your browser storage instantly.
                  </p>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-gray-500 text-sm">
                Select a lead from the list to review details.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
