import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, X } from 'lucide-react';

export default function AnnouncementRibbon({ onOpenDemoModal }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const dismissed = localStorage.getItem('kiran_ribbon_dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('kiran_ribbon_dismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-slate-950 via-brand-900 to-slate-950 border-b border-amber-500/30 text-white text-xs sm:text-sm font-medium py-2 px-4 shadow-lg shadow-amber-500/5 z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 flex-1 justify-center sm:justify-start">
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40 animate-pulse">
            <Sparkles className="w-3 h-3" />
          </span>
          <span className="bg-amber-400 text-slate-950 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full">
            New Batches
          </span>
          <span className="text-slate-200">
            <strong>Full-Day Master Programs:</strong> Python &amp; Java Full Stack — New classroom batches starting this week in Karve Nagar &amp; Chinchwad!
          </span>
        </div>
        
        <div className="flex items-center gap-3 mx-auto sm:mx-0">
          <button
            onClick={() => onOpenDemoModal('Master Programs (Java & Python)')}
            className="flex items-center gap-1 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold px-3 py-1 rounded-full text-xs hover:brightness-110 transition-all shadow-md shadow-amber-400/20"
          >
            <span>Reserve Seat</span>
            <ArrowRight className="w-3 h-3" />
          </button>
          
          <button
            onClick={handleDismiss}
            aria-label="Dismiss banner"
            className="text-slate-400 hover:text-white transition-colors p-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
