import React, { useState } from 'react';
import { 
  Sparkles, Clock, MapPin, Award, Star, ArrowRight, 
  CheckCircle2, Search, Download, BookOpen, Layers, Laptop 
} from 'lucide-react';
import { COURSES } from '../data/academyData';

export default function CoursesSection({ onSelectCourse, onOpenDemoModal }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Programs' },
    { id: 'placement', label: 'Placement Oriented (Java, Python, QA, MERN)' },
    { id: 'data', label: 'Data Science & Analytics' },
    { id: 'specialized', label: 'Mock Interview & Internship' },
  ];

  const filteredCourses = COURSES.filter(course => {
    const matchesCategory = activeCategory === 'all' || course.category === activeCategory;
    const matchesSearch = 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.tools.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="courses" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Job-Ready Curricula</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Choose Your Preparation Track
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            From absolute beginner to deployable enterprise engineer. Every track is built in collaboration with 1,750+ hiring companies.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Pills */}
          <div className="flex items-center flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-lg shadow-brand-500/25'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search course, tools, tech..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-brand-400 focus:ring-1 focus:ring-brand-400"
            />
          </div>

        </div>

        {/* Courses Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="glass-card rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 relative group"
            >
              <div>
                {/* Top Badge & Duration */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20">
                    {course.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs font-semibold">
                    <Clock className="w-3.5 h-3.5 text-brand-400" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* Course Title */}
                <h3 className="text-lg font-display font-bold text-white group-hover:text-brand-300 transition-colors mb-2">
                  {course.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
                  {course.shortDesc}
                </p>

                {/* Salary Package & Rating Badge */}
                <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800/80 mb-4 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 block">Typical Package</span>
                    <span className="font-bold text-emerald-400">{course.salaryRange}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 block">Rating</span>
                    <span className="font-bold text-amber-300 flex items-center gap-1">
                      <Star className="w-3 h-3 fill-amber-300" />
                      {course.rating} ({course.reviews})
                    </span>
                  </div>
                </div>

                {/* Tools & Technologies */}
                <div className="mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Key Tools &amp; Libraries
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {course.tools.slice(0, 5).map((tool, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-medium bg-slate-900 text-slate-300 px-2 py-0.5 rounded-md border border-slate-800"
                      >
                        {tool}
                      </span>
                    ))}
                    {course.tools.length > 5 && (
                      <span className="text-[10px] font-medium bg-slate-900 text-brand-400 px-2 py-0.5 rounded-md border border-slate-800">
                        +{course.tools.length - 5} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-slate-800 space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onSelectCourse(course)}
                    className="py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-bold text-slate-200 border border-slate-700 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-brand-400" />
                    <span>View Syllabus</span>
                  </button>

                  <button
                    onClick={() => onOpenDemoModal(`Course Enquiry: ${course.title}`)}
                    className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-xs font-extrabold hover:brightness-110 shadow-md shadow-amber-500/10 transition-all flex items-center justify-center gap-1"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-white">Not sure which track fits your career background?</h4>
            <p className="text-xs text-slate-400">
              Take our 2-minute skill matcher or speak directly to our senior tech counsellor for personalized guidance.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#quiz"
              className="px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold transition-all shadow-md"
            >
              Take Skill Matcher
            </a>
            <button
              onClick={() => onOpenDemoModal('1-on-1 Career Counselling')}
              className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-bold transition-all"
            >
              Talk to Counsellor
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
