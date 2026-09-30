import React from 'react';
import { Award, Users, Building2, TrendingUp, Star, ShieldCheck } from 'lucide-react';
import { ACADEMY_INFO, HIRING_COMPANIES } from '../data/academyData';

export default function TrustBar() {
  const stats = [
    {
      label: "Students Trained",
      value: "50,000+",
      sub: "Since 2012 in Pune & India",
      icon: Users,
      color: "text-brand-400"
    },
    {
      label: "Alumni Placed",
      value: "25,000+",
      sub: "96% Placement Success Rate",
      icon: Award,
      color: "text-amber-400"
    },
    {
      label: "Hiring Partners",
      value: "1,750+",
      sub: "Top MNCs & Product Startups",
      icon: Building2,
      color: "text-cyan-400"
    },
    {
      label: "Google Rating",
      value: "4.8 / 5.0",
      sub: "2,000+ Verified Student Reviews",
      icon: Star,
      color: "text-emerald-400"
    }
  ];

  return (
    <section className="relative py-10 bg-slate-950/90 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all text-center sm:text-left group"
              >
                <div className="flex items-center justify-center sm:justify-between mb-3">
                  <span className={`text-2xl sm:text-3xl font-display font-black tracking-tight text-white group-hover:${stat.color} transition-colors`}>
                    {stat.value}
                  </span>
                  <div className={`p-2 rounded-xl bg-slate-900 border border-slate-800 ${stat.color} hidden sm:block`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-200">{stat.label}</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">{stat.sub}</p>
              </div>
            );
          })}
        </div>

        {/* Hiring Partners Marquee */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Our Alumni Work At Top IT Giants &amp; Fast-Growing Companies
            </span>
            <span className="text-[11px] text-brand-400 font-semibold hidden sm:inline">
              1,750+ Companies Hiring
            </span>
          </div>

          <div className="relative overflow-hidden w-full py-3 bg-slate-900/40 rounded-2xl border border-slate-800/60 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <div className="animate-marquee flex items-center gap-10">
              {/* Render twice for continuous loop */}
              {[...HIRING_COMPANIES, ...HIRING_COMPANIES].map((company, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 px-4 py-2 bg-slate-950/80 rounded-xl border border-slate-800 shrink-0 hover:border-brand-500/50 transition-all cursor-default"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-400"></div>
                  <span className="text-sm font-bold text-slate-200 tracking-wide">
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
