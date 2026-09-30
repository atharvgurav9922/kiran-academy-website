import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight, RotateCcw, Award, Check } from 'lucide-react';
import { COURSES } from '../data/academyData';

export default function InteractiveKnowledgeQuiz({ onOpenDemoModal, onSelectCourse }) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    background: '',
    goal: '',
    preference: ''
  });

  const handleSelectAnswer = (key, value) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
    if (step < 3) {
      setStep(step + 1);
    } else {
      setStep(4); // Show results
    }
  };

  const getRecommendedCourse = () => {
    if (answers.goal === 'fastest' || answers.preference === 'testing') {
      return COURSES.find(c => c.id === 'software-testing') || COURSES[2];
    }
    if (answers.goal === 'data' || answers.preference === 'visual') {
      return COURSES.find(c => c.id === 'data-analytics') || COURSES[4];
    }
    if (answers.goal === 'startup' || answers.background === 'non-cs') {
      return COURSES.find(c => c.id === 'python-full-stack') || COURSES[1];
    }
    return COURSES.find(c => c.id === 'java-full-stack') || COURSES[0];
  };

  const resetQuiz = () => {
    setStep(1);
    setAnswers({ background: '', goal: '', preference: '' });
  };

  const recommended = getRecommendedCourse();

  return (
    <section id="quiz" className="py-20 bg-slate-950 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>2-Minute Skill Matcher</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
            Find Your Ideal IT Track
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Answer 3 quick questions to discover which software course provides the highest ROI for your exact profile.
          </p>
        </div>

        {/* Quiz Container */}
        <div className="glass-panel-glow p-6 sm:p-10 rounded-3xl border border-slate-800 relative">
          
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-bold">
              <span>Question {step > 3 ? 3 : step} of 3</span>
              <span>{step === 4 ? '100% Complete' : `${Math.round((step / 3) * 100)}% Complete`}</span>
            </div>
            <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-brand-500 to-amber-400 transition-all duration-300 rounded-full"
                style={{ width: `${step === 4 ? 100 : (step / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question 1 */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <h3 className="text-lg font-display font-bold text-white">
                1. What is your current educational background?
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { id: 'cs', label: 'BE / BTech / BCA / MCA (Computer Science / IT)' },
                  { id: 'non-cs', label: 'Mechanical / Civil / Electrical / Other Engineering' },
                  { id: 'commerce-arts', label: 'B.Com / B.Sc / BA / Non-Engineering Graduate' },
                  { id: 'working', label: 'Currently working in Non-IT / BPO / Operations' }
                ].map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectAnswer('background', opt.id)}
                    className="p-4 rounded-2xl bg-slate-950/80 hover:bg-slate-900 border border-slate-800 hover:border-brand-500 text-left text-xs font-semibold text-slate-200 transition-all flex items-center justify-between group"
                  >
                    <span>{opt.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Question 2 */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <h3 className="text-lg font-display font-bold text-white">
                2. What is your primary career priority?
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { id: 'enterprise', label: 'High salary package at top MNCs (Infosys, TCS, Persistent)' },
                  { id: 'fastest', label: 'Fastest placement turnaround (Job ready in 4 months)' },
                  { id: 'startup', label: 'Modern full stack web apps & product startup roles' },
                  { id: 'data', label: 'Working with Business Intelligence, SQL & Dashboards' }
                ].map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectAnswer('goal', opt.id)}
                    className="p-4 rounded-2xl bg-slate-950/80 hover:bg-slate-900 border border-slate-800 hover:border-brand-500 text-left text-xs font-semibold text-slate-200 transition-all flex items-center justify-between group"
                  >
                    <span>{opt.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Question 3 */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <h3 className="text-lg font-display font-bold text-white">
                3. What kind of daily work excites you most?
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { id: 'backend', label: 'Architecting robust backend logic, APIs & Databases' },
                  { id: 'testing', label: 'Finding bugs, writing automation scripts & Quality Control' },
                  { id: 'visual', label: 'Creating business reports, charts & Power BI dashboards' },
                  { id: 'fullstack', label: 'Building complete user-facing interactive web applications' }
                ].map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectAnswer('preference', opt.id)}
                    className="p-4 rounded-2xl bg-slate-950/80 hover:bg-slate-900 border border-slate-800 hover:border-brand-500 text-left text-xs font-semibold text-slate-200 transition-all flex items-center justify-between group"
                  >
                    <span>{opt.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Result Card (Step 4) */}
          {step === 4 && (
            <div className="space-y-6 animate-in zoom-in-95 duration-200 text-center sm:text-left">
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-between">
                <span className="text-emerald-400 font-bold text-xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Best Profile Match Found
                </span>
                <button
                  onClick={resetQuiz}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Retake
                </button>
              </div>

              <div className="p-6 bg-slate-950 rounded-3xl border border-brand-500/40 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">
                      Recommended Course Track
                    </span>
                    <h4 className="text-xl sm:text-2xl font-display font-black text-white mt-1">
                      {recommended.title}
                    </h4>
                  </div>
                  <span className="px-3 py-1 bg-brand-500/20 text-brand-300 text-xs font-bold rounded-full">
                    {recommended.duration} • {recommended.salaryRange}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {recommended.shortDesc}
                </p>

                <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-1 text-left">
                  <p className="font-bold text-white mb-1">Why this track is ideal for you:</p>
                  <p>✓ High demand in Pune IT companies with zero background barrier</p>
                  <p>✓ Full placement coverage with 15+ live mock interviews</p>
                  <p>✓ 3 enterprise portfolio projects to pass technical rounds easily</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={() => onSelectCourse(recommended)}
                    className="flex-1 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs border border-slate-700 transition-all"
                  >
                    View Full Syllabus
                  </button>
                  <button
                    onClick={() => onOpenDemoModal(`Matched Quiz Track: ${recommended.title}`)}
                    className="flex-1 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Book Free Demo For This Course</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
