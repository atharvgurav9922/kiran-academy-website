import React from 'react';
import { 
  Zap, Briefcase, CheckCircle2, Award, 
  ArrowRight, Users, Code, ShieldCheck, Sparkles 
} from 'lucide-react';

export default function MockInterviewInternshipSection({ onOpenDemoModal }) {
  const roundTypes = [
    {
      num: "01",
      title: "Technical Theory & Fundamentals",
      desc: "Deep-dive into OOPs, language internals, JVM memory, decorators, collections, and database mechanics."
    },
    {
      num: "02",
      title: "Live Screen-Share Coding",
      desc: "Solve DSA, string algorithms, and database queries under live timer conditions directly with an interviewer."
    },
    {
      num: "03",
      title: "Project Deep Dive & Defense",
      desc: "Defend your GitHub architecture, database design choices, REST endpoints, and security implementations."
    },
    {
      num: "04",
      title: "HR Behavioral & Transition Round",
      desc: "Master tricky questions: salary negotiation, career gap justifications, non-IT background explanations."
    },
    {
      num: "05",
      title: "Surprise Speed Round",
      desc: "High-intensity rapid-fire technical questions simulating top-tier MNC filtration rounds."
    }
  ];

  const internshipTracks = [
    "Java Full Stack (Spring Boot + React)",
    "Python Full Stack (Django + PostgreSQL)",
    "Software QA Automation (Selenium 4.0)",
    "Data Analytics (Power BI + SQL)",
    "MERN Stack (React + Node.js)"
  ];

  return (
    <section className="py-20 bg-slate-900/60 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* Mock Interview Program Showcase */}
        <div className="glass-panel-glow rounded-3xl p-6 sm:p-10 border border-brand-500/30">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Specialized Programme</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                15+ Rounds Mock Interview Programme
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Eliminate interview anxiety. 15+ live 1-on-1 simulated interviews with senior tech leads from Persistent, Infosys &amp; TCS. Written feedback scorecard after every single session.
              </p>
              
              <div className="flex items-baseline gap-3 pt-1">
                <span className="text-2xl font-black text-amber-400">₹10,000</span>
                <span className="text-xs text-slate-400 font-semibold">Online &amp; Offline in Pune</span>
              </div>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Granular written scorecards across 5 parameters</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Resume &amp; LinkedIn ATS optimization included</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Boosts candidate selection rate by 85%</span>
                </div>
              </div>

              <button
                onClick={() => onOpenDemoModal('15+ Rounds Mock Interview Programme (₹10,000)')}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
              >
                <span>Enrol in Mock Programme →</span>
              </button>
            </div>

            {/* Round Types Cards */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3">
              {roundTypes.map((round, idx) => (
                <div 
                  key={idx} 
                  className={`p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5 ${
                    idx === 4 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-brand-400">ROUND {round.num}</span>
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  </div>
                  <h4 className="text-xs font-bold text-white">{round.title}</h4>
                  <p className="text-[11px] text-slate-400 leading-snug">{round.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* College Industry Internship Showcase */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-emerald-500/30">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <Briefcase className="w-3.5 h-3.5" />
                <span>College Accepted</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                Industry Internship Programme
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Work on real running industry projects under senior mentors. Designed specifically for 2nd, 3rd, and final year engineering/CS students requiring official college-accepted internship certificates.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-2 pt-2">
                {internshipTracks.map((track, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>{track}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-950 p-6 rounded-3xl border border-slate-800 space-y-4 text-center">
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase">Program Fee</span>
                <p className="text-3xl font-black text-emerald-400">₹10,000</p>
                <p className="text-xs text-slate-400">2-3 Months Duration • College Accepted</p>
              </div>

              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-left text-xs text-slate-300 space-y-1">
                <p>✓ Official Industry Experience Certificate</p>
                <p>✓ College submission report &amp; project defense support</p>
                <p>✓ Live Git code repository for your portfolio</p>
              </div>

              <button
                onClick={() => onOpenDemoModal('College Industry Internship Programme (₹10,000)')}
                className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                Apply for Internship Track
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
