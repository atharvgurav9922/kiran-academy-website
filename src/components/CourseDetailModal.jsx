import React, { useState } from 'react';
import { 
  X, Clock, MapPin, Award, Star, CheckCircle2, 
  Download, ArrowRight, BookOpen, Layers, Check, ShieldCheck, Sparkles 
} from 'lucide-react';
import { BRANCHES } from '../data/academyData';

export default function CourseDetailModal({ course, onClose, onOpenDemoModal }) {
  const [activeTab, setActiveTab] = useState('curriculum');
  const [isDownloadSuccess, setIsDownloadSuccess] = useState(false);

  if (!course) return null;

  const handleDownloadSyllabus = () => {
    setIsDownloadSuccess(true);
    setTimeout(() => {
      setIsDownloadSuccess(false);
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 bg-slate-950/90 border-b border-slate-800 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20">
                {course.badge}
              </span>
              <span className="text-xs text-slate-400 font-semibold flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-brand-400" />
                {course.duration}
              </span>
              <span className="text-xs text-slate-400 font-semibold">
                • {course.mode}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-black text-white">
              {course.title}
            </h3>
            <p className="text-xs text-slate-300 mt-1 max-w-2xl">
              {course.shortDesc}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 px-6 bg-slate-950/50">
          <button
            onClick={() => setActiveTab('curriculum')}
            className={`py-3 px-4 text-xs font-bold border-b-2 transition-all ${
              activeTab === 'curriculum'
                ? 'border-brand-500 text-brand-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            5-Module Curriculum
          </button>
          <button
            onClick={() => setActiveTab('highlights')}
            className={`py-3 px-4 text-xs font-bold border-b-2 transition-all ${
              activeTab === 'highlights'
                ? 'border-brand-500 text-brand-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Highlights &amp; Tools
          </button>
          <button
            onClick={() => setActiveTab('eligibility')}
            className={`py-3 px-4 text-xs font-bold border-b-2 transition-all ${
              activeTab === 'eligibility'
                ? 'border-brand-500 text-brand-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Eligibility &amp; Career
          </button>
        </div>

        {/* Modal Body Scrollable */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs">
          
          {activeTab === 'curriculum' && (
            <div className="space-y-4">
              <div className="p-4 bg-brand-950/40 border border-brand-800/50 rounded-2xl flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm">Industry-Aligned Detailed Syllabus</h4>
                  <p className="text-[11px] text-slate-400">Everything tested in MNC and startup technical rounds.</p>
                </div>
                <button
                  onClick={handleDownloadSyllabus}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-brand-300 font-bold border border-brand-500/30 text-xs flex items-center gap-1.5 transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{isDownloadSuccess ? 'Syllabus Downloaded! ✓' : 'Download PDF'}</span>
                </button>
              </div>

              {isDownloadSuccess && (
                <div className="p-3 bg-emerald-500/20 border border-emerald-500/40 rounded-xl text-emerald-300 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>The complete PDF roadmap for <strong>{course.title}</strong> has been saved to your downloads folder.</span>
                </div>
              )}

              <div className="space-y-3">
                {course.curriculum.map((mod, index) => (
                  <div key={index} className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                    <h5 className="font-bold text-amber-300 text-xs flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold text-[10px]">
                        {index + 1}
                      </span>
                      {mod.module}
                    </h5>
                    <ul className="grid sm:grid-cols-2 gap-2 pl-7 text-slate-300">
                      {mod.topics.map((topic, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-1.5">
                          <span className="text-brand-400 font-bold">•</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'highlights' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-white text-sm mb-3">Key Program Features</h4>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {course.highlights.map((hl, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-slate-200 font-medium">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-white text-sm mb-3">Tools, Frameworks &amp; Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {course.tools.map((tool, idx) => (
                    <div key={idx} className="px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 font-semibold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-brand-400"></span>
                      <span>{tool}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800">
                <h4 className="font-bold text-amber-300 mb-1">Placement Support Guarantee</h4>
                <p className="text-slate-300 leading-relaxed text-xs">
                  Full access to our 1,750+ hiring company database, weekly campus recruitment drives, ATS resume polish, GitHub portfolio reviews, and 15+ live mock interviews until you get hired.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'eligibility' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                <h4 className="font-bold text-white text-sm">Who Can Enroll?</h4>
                <p className="text-slate-300">{course.eligibility}</p>
                <div className="pt-2 text-slate-400">
                  <p className="font-semibold text-slate-200 mb-1">Non-IT Background Students:</p>
                  <p>
                    Over 45% of our placed students come from Mechanical, Civil, Commerce, B.Sc, and Arts streams. We start from absolute zero logic so you can easily master programming.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                <h4 className="font-bold text-white text-sm">Expected Salary Package Range</h4>
                <p className="text-emerald-400 font-bold text-base">{course.salaryRange}</p>
                <p className="text-slate-400">
                  Fresher starting packages typically range between ₹3.5 LPA to ₹6 LPA. Alumni with 1-2 years experience scale to ₹8 - ₹14 LPA.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                <h4 className="font-bold text-white text-sm">Training Centers</h4>
                <p className="text-slate-300">
                  Available in Karve Nagar (HQ), Hadapsar, Chinchwad, Nagpur, and Pan-India Live Online.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-6 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-400">
            <span>⭐ <strong>4.8/5 Rating</strong> based on 2,000+ reviews</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenDemoModal(`Free Demo: ${course.title}`);
              }}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-extrabold text-xs hover:brightness-110 shadow-lg shadow-amber-500/20 transition-all flex items-center gap-1.5"
            >
              <span>Book Free Demo Class</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
