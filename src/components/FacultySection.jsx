import React from 'react';
import { Award, Star, BookOpen, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { FACULTIES } from '../data/academyData';

export default function FacultySection({ onOpenDemoModal }) {
  return (
    <section id="faculty" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-300 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Working Tech Leaders</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Learn from Practitioners, Not Theorists
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Our trainers are seasoned software architects with 10+ years of active enterprise experience at Persistent, Infosys, and top startups.
          </p>
        </div>

        {/* Faculty Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACULTIES.map((fac, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-6 flex flex-col justify-between border border-slate-800 hover:border-brand-500/50 transition-all duration-300 group"
            >
              <div>
                {/* Photo & Experience Badge */}
                <div className="relative mb-5">
                  <img
                    src={fac.image}
                    alt={fac.name}
                    className="w-full h-48 rounded-2xl object-cover border border-slate-800 shadow-md group-hover:scale-[1.02] transition-transform duration-300"
                  />
                  <div className="absolute bottom-2 left-2 right-2 p-2 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-800 text-center">
                    <span className="text-[10px] font-black text-amber-400 uppercase tracking-wider">
                      {fac.experience}
                    </span>
                  </div>
                </div>

                {/* Faculty Info */}
                <h3 className="text-base font-display font-bold text-white group-hover:text-brand-300 transition-colors">
                  {fac.name}
                </h3>
                <p className="text-xs text-brand-400 font-semibold mb-2">{fac.role}</p>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">{fac.bio}</p>
              </div>

              {/* Specialization Tags */}
              <div className="pt-3 border-t border-slate-800/80">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                  Domain Expertise
                </span>
                <p className="text-[11px] text-slate-300 font-medium line-clamp-2">
                  {fac.expertise}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenDemoModal('Meet Our Faculty — Free Demo Class')}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg shadow-amber-500/20 transition-all"
          >
            <span>Book A Free Demo Class With Our Mentors</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
