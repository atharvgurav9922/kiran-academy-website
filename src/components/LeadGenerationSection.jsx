import React, { useState } from 'react';
import { 
  Sparkles, Phone, MessageSquare, Mail, 
  CheckCircle2, ArrowRight, ShieldCheck, Check, Clock 
} from 'lucide-react';
import { COURSES, BRANCHES, ACADEMY_INFO } from '../data/academyData';

export default function LeadGenerationSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: 'java-full-stack',
    branch: 'karvenagar',
    mode: 'classroom',
    timing: 'morning',
    message: ''
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMsg('Please enter your full name');
      return;
    }
    if (!formData.phone.trim() || formData.phone.replace(/\D/g, '').length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please enter a valid email address');
      return;
    }

    setErrorMsg('');
    setIsSuccess(true);
  };

  return (
    <section id="enquire" className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading & Value Points */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>1-on-1 Career Mentorship</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
              Not Sure Which Course Is Right For You?
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed">
              Talk to our experienced course counsellors and get personalized guidance tailored to your degree, career goals, and preferred learning schedule.
            </p>

            <div className="space-y-3 text-xs text-slate-300 pt-2 text-left">
              <div className="flex items-start gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Detailed Syllabus Walkthrough</strong>
                  Understand prerequisites, tools stack, and weekly project milestones.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Non-IT Career Transition Roadmap</strong>
                  Learn how our alumni from mechanical/civil/commerce landed IT jobs.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Zero Fee Free Demo Confirmation</strong>
                  Attend a live class at Karve Nagar, Hadapsar, Chinchwad, Nagpur or Online.
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-400">
              <a href={`tel:${ACADEMY_INFO.primaryPhone}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call: {ACADEMY_INFO.primaryPhoneDisplay}</span>
              </a>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <Clock className="w-4 h-4" />
                <span>Open Mo-Sa: 9 AM - 8 PM</span>
              </span>
            </div>
          </div>

          {/* Right Column: Lead Form Card */}
          <div className="lg:col-span-7">
            <div className="glass-panel-glow p-6 sm:p-8 rounded-3xl border border-brand-500/30 shadow-2xl relative">
              
              {isSuccess ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">
                    Counselling Request Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-amber-300">{formData.name}</strong>. Our senior technical counsellor will reach out on <strong className="text-amber-300">{formData.phone}</strong> and <strong className="text-amber-300">{formData.email}</strong> shortly.
                  </p>
                  <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 text-xs text-left max-w-md mx-auto space-y-1.5 text-slate-300">
                    <p>📚 <strong>Course:</strong> {COURSES.find(c => c.id === formData.course)?.title}</p>
                    <p>📍 <strong>Center:</strong> {BRANCHES.find(b => b.id === formData.branch)?.name}</p>
                    <p>⏰ <strong>Mode:</strong> {formData.mode === 'classroom' ? 'Classroom (Pune/Nagpur)' : 'Live Interactive Online'}</p>
                  </div>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        course: 'java-full-stack',
                        branch: 'karvenagar',
                        mode: 'classroom',
                        timing: 'morning',
                        message: ''
                      });
                    }}
                    className="text-xs text-brand-400 font-bold hover:underline"
                  >
                    Submit another enquiry form →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-800 pb-4 mb-2">
                    <h3 className="text-lg font-display font-bold text-white">
                      Get Free Course Counselling &amp; Demo Pass
                    </h3>
                    <p className="text-xs text-slate-400">
                      Fill in your details below. Our counselling team responds within 15 minutes.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold">
                      {errorMsg}
                    </div>
                  )}

                  {/* Name and Mobile */}
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Full Name <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-brand-400"
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
                          name="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value.replace(/\D/g, '').slice(0, 10) }))}
                          placeholder="10-digit number"
                          className="w-full px-3.5 py-2.5 rounded-r-xl bg-slate-950 border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-brand-400"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email & Course */}
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Email Address <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@email.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-brand-400"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Interested Course
                      </label>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-brand-400"
                      >
                        {COURSES.map(c => (
                          <option key={c.id} value={c.id} className="bg-slate-900 text-white">
                            {c.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Branch & Learning Mode */}
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Preferred Branch / Campus
                      </label>
                      <select
                        name="branch"
                        value={formData.branch}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-brand-400"
                      >
                        {BRANCHES.map(b => (
                          <option key={b.id} value={b.id} className="bg-slate-900 text-white">
                            {b.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Learning Mode
                      </label>
                      <select
                        name="mode"
                        value={formData.mode}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-brand-400"
                      >
                        <option value="classroom" className="bg-slate-900 text-white">Classroom Training (In-Person)</option>
                        <option value="online" className="bg-slate-900 text-white">Live Online Instructor-led</option>
                        <option value="weekend" className="bg-slate-900 text-white">Weekend Fast-Track Batch</option>
                      </select>
                    </div>
                  </div>

                  {/* Optional Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Message / Questions (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={2}
                      placeholder="e.g. I am a 2024 Mechanical graduate looking for batch timings..."
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-brand-400"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Get Free Counselling Session</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-4 text-[10px] text-slate-500 pt-1">
                    <span>🔒 Privacy Guaranteed</span>
                    <span>•</span>
                    <span>⚡ 15-Minute Response Time</span>
                    <span>•</span>
                    <span>🎓 100% Free Demo</span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
