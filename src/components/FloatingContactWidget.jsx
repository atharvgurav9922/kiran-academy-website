import React, { useState } from 'react';
import { Phone, MessageSquare, Sparkles, X, ChevronUp } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

export default function FloatingContactWidget({ onOpenDemoModal }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside aria-label="Quick contact widget" className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-2.5">
      
      {/* Floating Action Pills */}
      {isOpen && (
        <div className="flex flex-col items-end gap-2 animate-in slide-in-from-bottom-3 duration-200">
          
          {/* Book Demo Button */}
          <button
            onClick={() => onOpenDemoModal('Floating Widget Demo')}
            className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-slate-950 font-extrabold text-xs rounded-full shadow-2xl hover:brightness-110 transition-all border border-amber-300/40 group"
          >
            <Sparkles className="w-4 h-4 text-slate-950 group-hover:rotate-12 transition-transform" />
            <span>Free Demo Class</span>
          </button>

          {/* WhatsApp Direct */}
          <a
            href={`https://wa.me/${ACADEMY_INFO.whatsappNumber}?text=Hi%2C+I+am+interested+in+courses+at+The+Kiran+Academy.+Please+share+details.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-full shadow-2xl transition-all border border-emerald-400/30 group"
          >
            <MessageSquare className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
            <span>WhatsApp Us</span>
          </a>

          {/* Call Hotline */}
          <a
            href={`tel:${ACADEMY_INFO.primaryPhone}`}
            className="flex items-center gap-2 px-4 py-2.5 bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs rounded-full shadow-2xl transition-all border border-brand-400/30 group"
          >
            <Phone className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
            <span>Call {ACADEMY_INFO.primaryPhoneDisplay}</span>
          </a>

        </div>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white flex items-center justify-center shadow-2xl hover:bg-slate-800 transition-all"
        aria-label="Toggle contact buttons"
      >
        {isOpen ? <X className="w-5 h-5" /> : <MessageSquare className="w-5 h-5 text-emerald-400" />}
      </button>

    </aside>
  );
}
