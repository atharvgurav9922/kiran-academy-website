import React, { useState } from 'react';
import { 
  Calculator, TrendingUp, DollarSign, Building, 
  ArrowRight, Sparkles, CheckCircle2, ChevronRight 
} from 'lucide-react';
import { COURSES } from '../data/academyData';

export default function InteractiveSalaryCalculator({ onOpenDemoModal }) {
  const [selectedDegree, setSelectedDegree] = useState('non-cs');
  const [selectedCourse, setSelectedCourse] = useState('java-full-stack');
  const [experienceLevel, setExperienceLevel] = useState('fresher');

  const degreeData = {
    'cs': { label: 'CS / IT / BCA / MCA', multiplier: 1.1 },
    'non-cs': { label: 'Non-IT (Mechanical, Civil, B.Com, B.Sc)', multiplier: 1.0 },
    'career-gap': { label: 'Graduate with Career Gap (1-3 yrs)', multiplier: 0.95 },
    'working-pro': { label: 'Working in Non-Tech / Support', multiplier: 1.15 }
  };

  const courseTrajectories = {
    'java-full-stack': {
      fresher: '₹3.8 - ₹6.5 LPA',
      year2: '₹7.5 - ₹12.0 LPA',
      year4: '₹14.0 - ₹22.0 LPA',
      demand: 'Extremely High (Pune MNCs & Product Startups)',
      topRoles: ['Java Developer', 'Spring Boot Engineer', 'Backend Specialist'],
      topCompanies: ['Infosys', 'Persistent', 'Capgemini', 'TCS', 'LTIMindtree']
    },
    'python-full-stack': {
      fresher: '₹3.6 - ₹6.0 LPA',
      year2: '₹7.0 - ₹11.5 LPA',
      year4: '₹13.5 - ₹20.0 LPA',
      demand: 'Very High (SaaS Startups & Automation)',
      topRoles: ['Python Developer', 'Django Backend Engineer', 'Full Stack Dev'],
      topCompanies: ['Cognizant', 'Accenture', 'Tech Mahindra', 'Zensar', 'Persistent']
    },
    'software-testing': {
      fresher: '₹3.2 - ₹5.5 LPA',
      year2: '₹6.0 - ₹9.5 LPA',
      year4: '₹11.0 - ₹16.5 LPA',
      demand: 'High (Fastest Placement Turnaround for Non-IT)',
      topRoles: ['QA Automation Engineer', 'SDET', 'Selenium Tester'],
      topCompanies: ['Wipro', 'Infosys', 'Cognizant', 'Hexaware', 'Mphasis']
    },
    'data-science': {
      fresher: '₹4.5 - ₹8.0 LPA',
      year2: '₹9.0 - ₹15.0 LPA',
      year4: '₹18.0 - ₹28.0 LPA',
      demand: 'High Growth & Advanced Analytics',
      topRoles: ['Data Scientist', 'Machine Learning Engineer', 'AI Associate'],
      topCompanies: ['LTIMindtree', 'Accenture', 'Persistent', 'Capgemini']
    },
    'data-analytics': {
      fresher: '₹3.5 - ₹6.0 LPA',
      year2: '₹6.5 - ₹10.0 LPA',
      year4: '₹12.0 - ₹17.5 LPA',
      demand: 'High (All Business Sectors & Finance)',
      topRoles: ['Power BI Analyst', 'Data Analyst', 'SQL Developer'],
      topCompanies: ['TCS', 'Wipro', 'Infosys', 'Cognizant', 'Tech Mahindra']
    },
    'mern-stack': {
      fresher: '₹4.0 - ₹7.0 LPA',
      year2: '₹8.0 - ₹13.0 LPA',
      year4: '₹15.0 - ₹24.0 LPA',
      demand: 'High (Modern Web Apps & Fast Startups)',
      topRoles: ['React Developer', 'Full Stack MERN Engineer', 'Frontend Lead'],
      topCompanies: ['Startups', 'Persistent', 'Hexaware', 'Zensar']
    }
  };

  const currentTrajectory = courseTrajectories[selectedCourse] || courseTrajectories['java-full-stack'];
  const currentCourseObj = COURSES.find(c => c.id === selectedCourse) || COURSES[0];

  return (
    <section className="py-20 bg-slate-900/50 border-y border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Career &amp; Salary Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Calculate Your Software Career ROI
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Select your academic background and desired tech domain to see realistic fresher salary packages and 4-year growth projections in Pune.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form (Left) */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
            
            {/* Step 1: Degree Background */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                1. Your Academic Background
              </label>
              <div className="grid grid-cols-1 gap-2">
                {Object.entries(degreeData).map(([key, data]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedDegree(key)}
                    className={`p-3 rounded-xl text-left text-xs font-semibold border transition-all flex items-center justify-between ${
                      selectedDegree === key
                        ? 'bg-brand-600/20 border-brand-500 text-white'
                        : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <span>{data.label}</span>
                    {selectedDegree === key && <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Target Tech Track */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                2. Choose Target Technology
              </label>
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-semibold focus:outline-none focus:border-brand-400"
              >
                {COURSES.map(course => (
                  <option key={course.id} value={course.id} className="bg-slate-900 text-white">
                    {course.title} ({course.duration})
                  </option>
                ))}
              </select>
            </div>

            <div className="pt-2 text-[11px] text-slate-400 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
              💡 <strong>Pro Tip:</strong> Over 45% of Kiran Academy students with Non-CS degrees get placed with starting packages above ₹4.5 LPA due to our 15+ live mock interviews.
            </div>

          </div>

          {/* Results Display (Right) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Projected Trajectory Card */}
            <div className="glass-panel-glow p-6 sm:p-8 rounded-3xl border border-brand-500/30 space-y-6">
              
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-800">
                <div>
                  <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                    Projected Career Trajectory
                  </span>
                  <h3 className="text-xl font-display font-black text-white mt-0.5">
                    {currentCourseObj.title}
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
                  {currentCourseObj.duration} Program
                </span>
              </div>

              {/* Salary Milestone Cards */}
              <div className="grid sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 text-center">
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Starting Fresher CTC</span>
                  <span className="text-lg font-display font-black text-emerald-400 mt-1 block">
                    {currentTrajectory.fresher}
                  </span>
                  <span className="text-[10px] text-slate-400 mt-1 block">0 - 1 Years Exp</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 text-center">
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Mid-Level Engineer</span>
                  <span className="text-lg font-display font-black text-amber-300 mt-1 block">
                    {currentTrajectory.year2}
                  </span>
                  <span className="text-[10px] text-slate-400 mt-1 block">2 - 3 Years Exp</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 text-center">
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Senior Tech Lead</span>
                  <span className="text-lg font-display font-black text-cyan-300 mt-1 block">
                    {currentTrajectory.year4}
                  </span>
                  <span className="text-[10px] text-slate-400 mt-1 block">4+ Years Exp</span>
                </div>
              </div>

              {/* Roles & Companies */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Target Job Profiles
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentTrajectory.topRoles.map((role, idx) => (
                      <span key={idx} className="text-xs bg-slate-900 text-slate-200 px-2.5 py-1 rounded-lg border border-slate-800 font-medium">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Frequent Hiring Companies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentTrajectory.topCompanies.map((comp, idx) => (
                      <span key={idx} className="text-xs bg-slate-900 text-brand-300 px-2.5 py-1 rounded-lg border border-slate-800 font-semibold">
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Row */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-400 text-center sm:text-left">
                  🚀 96% of students enrolled in this track received offers within 3 months of graduation.
                </span>
                <button
                  onClick={() => onOpenDemoModal(`Career Planner Enquiry: ${currentCourseObj.title}`)}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg shadow-amber-500/20 shrink-0 flex items-center justify-center gap-1.5"
                >
                  <span>Start This Roadmap Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
