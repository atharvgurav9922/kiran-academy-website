import React, { useState } from 'react';
import { 
  Award, Star, Building, GraduationCap, Quote, 
  ArrowRight, CheckCircle2, Filter, ExternalLink 
} from 'lucide-react';
import { PLACED_STUDENTS } from '../data/academyData';

export default function ResultsSection({ onOpenDemoModal }) {
  const [filter, setFilter] = useState('all');

  const filteredStudents = PLACED_STUDENTS.filter(s => {
    if (filter === 'all') return true;
    if (filter === 'non-it') return s.background.toLowerCase().includes('non-it') || s.background.toLowerCase().includes('mechanical') || s.background.toLowerCase().includes('chemistry') || s.background.toLowerCase().includes('b.com');
    if (filter === 'java') return s.course.toLowerCase().includes('java');
    if (filter === 'testing') return s.course.toLowerCase().includes('testing');
    return true;
  });

  return (
    <section id="results" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>25,000+ Placed Alumni</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Real Students. Real Salaries. Real Success.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            See how graduates from diverse backgrounds transformed their careers and landed dream software jobs in Pune and across India.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filter === 'all'
                ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            All Placements
          </button>
          <button
            onClick={() => setFilter('non-it')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filter === 'non-it'
                ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            Non-IT &amp; Career Switchers
          </button>
          <button
            onClick={() => setFilter('java')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filter === 'java'
                ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            Java Developers
          </button>
          <button
            onClick={() => setFilter('testing')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filter === 'testing'
                ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            Software Testing QA
          </button>
        </div>

        {/* Results Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudents.map((student, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-6 flex flex-col justify-between border border-slate-800 hover:border-amber-400/40 transition-all duration-300 relative group"
            >
              <div>
                {/* Header with Photo, Name & Package */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={student.image}
                      alt={student.name}
                      className="w-12 h-12 rounded-2xl object-cover border-2 border-brand-500/50 shadow-md"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                        {student.name}
                      </h4>
                      <p className="text-[11px] text-slate-400">{student.background}</p>
                    </div>
                  </div>

                  <span className="text-xs font-black text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 shrink-0">
                    {student.salary}
                  </span>
                </div>

                {/* Company & Role */}
                <div className="p-3 bg-slate-950/80 rounded-2xl border border-slate-800/80 mb-4 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-white flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-brand-400" />
                      {student.company}
                    </span>
                    <span className="text-[10px] text-amber-400 font-bold uppercase">{student.year}</span>
                  </div>
                  <p className="text-[11px] text-brand-300 font-medium">{student.role}</p>
                  <p className="text-[10px] text-slate-400">Track: {student.course}</p>
                </div>

                {/* Testimonial Quote */}
                <p className="text-xs text-slate-300 italic leading-relaxed line-clamp-3 mb-4">
                  "{student.quote}"
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified Alumni
                </span>
                <span className="text-brand-400 font-semibold">Pune Campus</span>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Placement Support Bar */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenDemoModal('Placement Assistance Enquiry')}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-bold transition-all hover:border-brand-500"
          >
            <span>Speak to Placement Cell &amp; View All Records</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>

      </div>
    </section>
  );
}
