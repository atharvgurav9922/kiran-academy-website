import React from 'react';
import { 
  Code2, Users, Building, Laptop, ShieldCheck, 
  Sparkles, CheckCircle2, Award, Zap, HeartHandshake 
} from 'lucide-react';

export default function WhyChooseUs({ onOpenDemoModal }) {
  const pillars = [
    {
      title: "1-on-1 Personal Code Reviews",
      desc: "Small batches mean your trainer knows your name, checks your daily assignments, and reviews your Git pull requests — not an impersonal 200-student lecture hall.",
      icon: Code2,
      accent: "from-brand-500/20 to-brand-500/5",
      border: "border-brand-500/30",
      textAccent: "text-brand-400"
    },
    {
      title: "Working Industry Mentors",
      desc: "Learn from practitioner faculty with 10+ years hands-on experience in Persistent, Infosys, and TCS who teach current real-world software architectures.",
      icon: Users,
      accent: "from-amber-500/20 to-amber-500/5",
      border: "border-amber-500/30",
      textAccent: "text-amber-400"
    },
    {
      title: "1,750+ Hiring Company Network",
      desc: "Our dedicated placement cell organizes weekly exclusive campus recruitment drives, direct HR referrals, and off-campus opportunities until you are placed.",
      icon: Building,
      accent: "from-cyan-500/20 to-cyan-500/5",
      border: "border-cyan-500/30",
      textAccent: "text-cyan-400"
    },
    {
      title: "Real GitHub Capstone Projects",
      desc: "Graduate with 3+ production-ready full stack applications hosted live on GitHub and cloud servers to showcase your skills during technical interviews.",
      icon: Laptop,
      accent: "from-emerald-500/20 to-emerald-500/5",
      border: "border-emerald-500/30",
      textAccent: "text-emerald-400"
    },
    {
      title: "15+ Rounds Mock Interviews",
      desc: "Face simulated live coding, theory deep-dives, architecture defense, and HR behavioural rounds with granular written feedback before real company interviews.",
      icon: Zap,
      accent: "from-purple-500/20 to-purple-500/5",
      border: "border-purple-500/30",
      textAccent: "text-purple-400"
    },
    {
      title: "Support Until You're Placed",
      desc: "Our placement support doesn't expire when course classes end. You get unlimited access to lab doubts, placement drives, and mentors until you hold an offer letter.",
      icon: HeartHandshake,
      accent: "from-rose-500/20 to-rose-500/5",
      border: "border-rose-500/30",
      textAccent: "text-rose-400"
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-slate-950/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-300 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>The Kiran Academy Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Why 50,000+ Students Trust The Kiran Academy
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            We focus on what companies actually test in interviews: clean coding, practical system understanding, and strong communication.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-3xl bg-slate-900/60 border ${pillar.border} relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900 group`}
              >
                {/* Background Glow */}
                <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${pillar.accent} rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`}></div>

                <div className="relative z-10 space-y-3">
                  <div className={`w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center ${pillar.textAccent} shadow-md`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-white group-hover:text-amber-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Callout Box */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-slate-800 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-3">
              <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
                Proven Track Record Since 2012
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                How We Take Non-IT &amp; Freshers to Software Developers
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Whether you graduated in Mechanical, Civil, Commerce, or had a career gap — our step-by-step roadmap from logic fundamentals to Spring Boot / Django / Selenium gives you the exact skills top IT recruiters look for.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 bg-slate-800 rounded-lg text-xs font-semibold text-slate-300 border border-slate-700">
                  ✓ Zero coding background needed
                </span>
                <span className="px-3 py-1 bg-slate-800 rounded-lg text-xs font-semibold text-slate-300 border border-slate-700">
                  ✓ 4 Physical branches + Online
                </span>
                <span className="px-3 py-1 bg-slate-800 rounded-lg text-xs font-semibold text-slate-300 border border-slate-700">
                  ✓ 96% placement rate
                </span>
              </div>
            </div>

            <div className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800 text-center space-y-4">
              <span className="text-xs text-slate-400 font-medium">Ready to experience our teaching methodology?</span>
              <h4 className="text-lg font-bold text-white">Attend a 100% Free Live Demo Class</h4>
              <p className="text-xs text-slate-400">
                Sit in on a real ongoing batch, talk with students, and see the code for yourself.
              </p>
              <button
                onClick={() => onOpenDemoModal('Why Choose Us Demo Box')}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg shadow-amber-500/20 transition-all"
              >
                Book Your Free Demo Seat Now →
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
