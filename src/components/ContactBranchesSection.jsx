import React, { useState } from 'react';
import { 
  MapPin, Phone, MessageSquare, Clock, 
  ExternalLink, Building2, CheckCircle2, Navigation 
} from 'lucide-react';
import { BRANCHES, ACADEMY_INFO } from '../data/academyData';

export default function ContactBranchesSection({ onOpenDemoModal }) {
  const [activeBranchId, setActiveBranchId] = useState('karvenagar');

  const selectedBranch = BRANCHES.find(b => b.id === activeBranchId) || BRANCHES[0];

  return (
    <section id="branches" className="py-20 bg-slate-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-300 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>4 Campuses + Live Online</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Visit Our Campuses in Pune &amp; Nagpur
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Walk into any of our state-of-the-art tech training facilities to inspect our coding labs, interact with live batches, and speak with faculty.
          </p>
        </div>

        {/* Branch Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {BRANCHES.map(branch => (
            <button
              key={branch.id}
              onClick={() => setActiveBranchId(branch.id)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeBranchId === branch.id
                  ? 'bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-lg shadow-brand-500/20'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>{branch.shortName}</span>
              {branch.id === 'karvenagar' && (
                <span className="text-[9px] bg-amber-400 text-slate-950 font-black px-1.5 py-0.2 rounded-full">
                  HQ
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Active Branch Showcase Card */}
        <div className="grid lg:grid-cols-12 gap-8 items-start glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800">
          
          {/* Left Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20">
                  {selectedBranch.badge}
                </span>
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Admissions Open
                </span>
              </div>
              <h3 className="text-2xl font-display font-black text-white">
                {selectedBranch.name}
              </h3>
            </div>

            {/* Address */}
            <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 space-y-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-slate-200 block">Campus Address</span>
                  <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                    {selectedBranch.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-slate-800/80">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-slate-200 block">Office &amp; Lab Timings</span>
                  <p className="text-xs text-slate-300 mt-0.5">
                    {selectedBranch.timings}
                  </p>
                </div>
              </div>
            </div>

            {/* Campus Facilities */}
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Campus Highlights
              </span>
              <div className="grid grid-cols-2 gap-2">
                {selectedBranch.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 rounded-xl bg-slate-950 border border-slate-800/80 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={`tel:${selectedBranch.phone}`}
                className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs border border-slate-700 hover:border-brand-500 transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Branch: {selectedBranch.phoneDisplay}</span>
              </a>

              <a
                href={`https://wa.me/${selectedBranch.phone.replace(/\D/g, '')}?text=Hi%2C+I+want+to+enquire+about+courses+at+The+Kiran+Academy+${selectedBranch.shortName}+branch`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 font-bold text-xs border border-emerald-500/40 transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Branch</span>
              </a>
            </div>

          </div>

          {/* Right Map / Virtual Lab Showcase */}
          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-3xl overflow-hidden border border-slate-800 h-80 bg-slate-950 relative shadow-xl">
              {selectedBranch.mapEmbedUrl ? (
                <iframe
                  title={`Map location for ${selectedBranch.name}`}
                  src={selectedBranch.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-slate-950 via-brand-950 to-slate-950">
                  <Building2 className="w-12 h-12 text-brand-400 mb-2" />
                  <h4 className="text-base font-bold text-white">Live Interactive Online Classroom</h4>
                  <p className="text-xs text-slate-400 max-w-sm mt-1">
                    Connect from anywhere across India with daily live Zoom/Google Meet sessions and 1-on-1 mentor screen sharing.
                  </p>
                </div>
              )}
            </div>

            <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-white">Need directions or planning a visit?</p>
                <p className="text-[11px] text-slate-400">Our counsellors can arrange parking and campus tours.</p>
              </div>
              <button
                onClick={() => onOpenDemoModal(`Schedule Campus Visit: ${selectedBranch.shortName}`)}
                className="px-4 py-2 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs rounded-xl hover:brightness-110 shadow-md shrink-0"
              >
                Schedule Visit
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
