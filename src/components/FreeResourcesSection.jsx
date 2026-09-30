import React, { useState } from 'react';
import { Download, FileText, CheckCircle2, Sparkles, ArrowRight, Check } from 'lucide-react';
import { FREE_RESOURCES } from '../data/academyData';

export default function FreeResourcesSection({ onOpenDemoModal }) {
  const [downloadedIds, setDownloadedIds] = useState([]);

  const handleDownload = (res) => {
    if (!downloadedIds.includes(res.id)) {
      setDownloadedIds(prev => [...prev, res.id]);
    }
  };

  return (
    <section id="resources" className="py-20 bg-slate-900/30 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-300 text-xs font-bold uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5" />
            <span>Free Learning Resources</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Free Roadmaps &amp; Interview Cheat Sheets
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Download our curated developer cheat sheets, SQL query guides, and placement checklists created by our senior mentors.
          </p>
        </div>

        {/* Resources Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FREE_RESOURCES.map((res) => {
            const isDone = downloadedIds.includes(res.id);
            return (
              <div
                key={res.id}
                className="glass-card rounded-3xl p-6 flex flex-col justify-between border border-slate-800 hover:border-brand-500/40 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-extrabold text-amber-400 uppercase tracking-wider px-2 py-0.5 rounded bg-amber-400/10">
                      {res.category}
                    </span>
                    <span className="text-[11px] text-slate-400 font-semibold">{res.size}</span>
                  </div>

                  <h3 className="text-sm font-bold text-white group-hover:text-brand-300 transition-colors mb-2">
                    {res.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {res.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 space-y-3">
                  <div className="flex items-center justify-between text-[10px] text-slate-400">
                    <span>{res.format}</span>
                    <span className="text-brand-400 font-semibold">{res.downloads} downloaded</span>
                  </div>

                  <button
                    onClick={() => handleDownload(res)}
                    className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                      isDone
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                        : 'bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 hover:border-brand-400'
                    }`}
                  >
                    {isDone ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Downloaded PDF ✓</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-3.5 h-3.5 text-brand-400" />
                        <span>Download Free Guide</span>
                      </>
                    )}
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
