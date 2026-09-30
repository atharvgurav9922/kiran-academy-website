import React, { useState } from 'react';
import { 
  Sparkles, CheckCircle2, Phone, ArrowRight, 
  ShieldCheck, Star, Users, Briefcase, Play, Calendar, Check
} from 'lucide-react';
import { ACADEMY_INFO, COURSES, BRANCHES } from '../data/academyData';

export default function HeroSection({ onOpenDemoModal, onSelectCourse }) {
  const [leadName, setLeadName] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [leadCourse, setLeadCourse] = useState('java-full-stack');
  const [leadBranch, setLeadBranch] = useState('karvenagar');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleHeroFormSubmit = (e) => {
    e.preventDefault();
    if (!leadName.trim()) {
      setErrorMsg('Please enter your full name');
      return;
    }
    if (!leadPhone.trim() || leadPhone.replace(/\D/g, '').length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number');
      return;
    }
    setErrorMsg('');
    setIsSubmitted(true);
  };

  return (
    <section id="hero" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      {/* Background Gradients & Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-40"></div>
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-brand-600/20 via-brand-500/10 to-transparent blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-amber-500/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Trust Signals & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Institute Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-300 text-xs font-semibold shadow-inner">
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-ping"></span>
              <span>#1 Job-Ready IT Training Institute in Pune — Since 2012</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.12]">
              Land Your Dream <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
                Software Job
              </span>{' '}
              in Pune in 4–6 Months.
            </h1>

            {/* Sub-headline */}
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Live classes with working industry trainers. Real projects for your GitHub portfolio. 
              Placement support until you're hired — not just until your course ends.
            </p>

            {/* Key Value Bullets */}
            <div className="grid sm:grid-cols-3 gap-3 pt-1 text-left max-w-2xl mx-auto lg:mx-0">
              <div className="flex items-start gap-2 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300 leading-tight">
                  <strong className="text-white block font-semibold">Small Batches</strong> 
                  Personal code review &amp; doubt solving
                </span>
              </div>
              <div className="flex items-start gap-2 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300 leading-tight">
                  <strong className="text-white block font-semibold">Real Tech Stacks</strong> 
                  Spring Boot, Selenium, Python, Power BI
                </span>
              </div>
              <div className="flex items-start gap-2 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300 leading-tight">
                  <strong className="text-white block font-semibold">15+ Mock Rounds</strong> 
                  Live coding + HR interview drills
                </span>
              </div>
            </div>

            {/* Hero CTA Button Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={() => onOpenDemoModal('Hero Primary CTA')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-slate-950 font-extrabold text-sm hover:brightness-110 shadow-xl shadow-amber-500/25 transition-all flex items-center gap-2 group"
              >
                <span>Book Free Demo Class</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`tel:${ACADEMY_INFO.primaryPhone}`}
                className="px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-sm transition-all flex items-center gap-2 hover:border-brand-500"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {ACADEMY_INFO.primaryPhoneDisplay}</span>
              </a>

              <a
                href="#courses"
                className="px-4 py-3.5 text-xs font-semibold text-brand-300 hover:text-white transition-colors"
              >
                Explore Courses ↓
              </a>
            </div>

            {/* Trust Chips */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span className="font-bold text-white">4.8★</span>
                <span>(2,000+ Google Reviews)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>14+ Years in Pune</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
                <Users className="w-3.5 h-3.5 text-brand-400" />
                <span className="font-bold text-white">25,000+</span>
                <span>Alumni Placed</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Converting Quick Lead Card */}
          <div className="lg:col-span-5 relative">
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/30 to-amber-500/20 blur-2xl rounded-3xl -z-10"></div>
            
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl relative">
              
              {/* Form Header */}
              <div className="mb-5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                    🎓 Zero Fee Demo
                  </span>
                  <span className="text-xs text-slate-400">Classroom / Online</span>
                </div>
                <h3 className="text-xl font-display font-bold text-white mt-2">
                  Book a Free Demo Class
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  No payment. No commitment. Speak with senior industry mentors.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-8 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                    <Check className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Demo Seat Reserved!</h4>
                    <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                      Thank you, <strong className="text-amber-300">{leadName}</strong>. Our senior course counsellor will call you on <strong className="text-amber-300">{leadPhone}</strong> within 15 minutes to confirm your preferred batch timing.
                    </p>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs text-slate-400 text-left space-y-1">
                    <p>📍 <strong>Center:</strong> {BRANCHES.find(b => b.id === leadBranch)?.name}</p>
                    <p>📚 <strong>Course:</strong> {COURSES.find(c => c.id === leadCourse)?.title}</p>
                  </div>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setLeadName('');
                      setLeadPhone('');
                    }}
                    className="text-xs text-brand-400 hover:underline font-semibold"
                  >
                    Submit another enquiry →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleHeroFormSubmit} className="space-y-3.5">
                  {errorMsg && (
                    <div className="p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold">
                      {errorMsg}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Full Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-brand-400 focus:ring-1 focus:ring-brand-400 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Mobile Number <span className="text-amber-400">*</span>
                    </label>
                    <div className="flex items-center">
                      <span className="px-3 py-2.5 bg-slate-900 border border-r-0 border-slate-700 text-slate-400 text-xs rounded-l-xl">
                        +91
                      </span>
                      <input
                        type="tel"
                        value={leadPhone}
                        onChange={(e) => setLeadPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                        placeholder="10-digit mobile number"
                        className="w-full px-3.5 py-2.5 rounded-r-xl bg-slate-950/80 border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-brand-400 focus:ring-1 focus:ring-brand-400 transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Select Course
                      </label>
                      <select
                        value={leadCourse}
                        onChange={(e) => setLeadCourse(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-white text-xs focus:outline-none focus:border-brand-400 transition-all"
                      >
                        {COURSES.map(c => (
                          <option key={c.id} value={c.id} className="bg-slate-900 text-white">
                            {c.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Preferred Branch
                      </label>
                      <select
                        value={leadBranch}
                        onChange={(e) => setLeadBranch(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-white text-xs focus:outline-none focus:border-brand-400 transition-all"
                      >
                        {BRANCHES.map(b => (
                          <option key={b.id} value={b.id} className="bg-slate-900 text-white">
                            {b.shortName}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg shadow-amber-500/20 transition-all mt-2 flex items-center justify-center gap-2"
                  >
                    <span>Reserve Free Demo Session</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[10px] text-center text-slate-500 mt-2">
                    🔒 100% Privacy Protected. No spam calls.
                  </p>
                </form>
              )}

              {/* Floating Placement Pill */}
              <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <p className="text-white font-bold text-[11px]">Recent Placement</p>
                    <p className="text-[10px] text-slate-400">Sneha P. placed at Cognizant (₹4.8 LPA)</p>
                  </div>
                </div>
                <span className="text-[10px] text-brand-300 font-bold bg-brand-500/10 px-2 py-0.5 rounded">
                  Testing Track
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
