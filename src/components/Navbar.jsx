import React, { useState, useEffect } from 'react';
import { 
  Phone, MessageSquare, ChevronDown, Menu, X, 
  GraduationCap, Briefcase, Award, Users, BookOpen, 
  Sparkles, CheckCircle2, MapPin, ArrowRight 
} from 'lucide-react';
import { ACADEMY_INFO, COURSES, BRANCHES } from '../data/academyData';

export default function Navbar({ onOpenDemoModal, onSelectCourse }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const [selectedMegaCategory, setSelectedMegaCategory] = useState('placement');
  const [mobileCoursesAccordion, setMobileCoursesAccordion] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const placementCourses = COURSES.filter(c => c.category === 'placement');
  const dataCourses = COURSES.filter(c => c.category === 'data');
  const specializedCourses = COURSES.filter(c => c.category === 'specialized');

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Contact Strip */}
      <div className="bg-slate-950/90 text-slate-300 text-xs border-b border-slate-800/80 px-4 py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-brand-400" />
              <span>4 Centers: Karve Nagar (HQ), Hadapsar, Chinchwad &amp; Nagpur</span>
            </span>
            <a 
              href={`tel:${ACADEMY_INFO.primaryPhone}`} 
              className="flex items-center gap-1.5 hover:text-white transition-colors text-slate-300 font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>HQ Hotline: {ACADEMY_INFO.primaryPhoneDisplay}</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-emerald-400 flex items-center gap-1 text-[11px] font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              96% Placed in 4-6 Months
            </span>
            <a
              href={`https://wa.me/${ACADEMY_INFO.whatsappNumber}?text=Hi%2C+I+want+to+know+more+about+courses+at+The+Kiran+Academy`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30 transition-all hover:bg-emerald-500/20"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navigation */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-2xl py-3' 
          : 'bg-slate-950/80 backdrop-blur-sm border-b border-slate-800/60 py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-brand-500 to-amber-400 p-[2px] shadow-lg shadow-brand-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <span className="font-display font-black text-xl text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-amber-300">
                  KA
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-lg sm:text-xl tracking-tight text-white group-hover:text-brand-300 transition-colors">
                  THE KIRAN ACADEMY
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium tracking-wide uppercase">
                JavaByKiran • IT Training &amp; Placements
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#hero" className="hover:text-white transition-colors">Home</a>
            
            {/* Courses Mega Menu Trigger */}
            <div 
              className="relative"
              onMouseEnter={() => setIsCoursesDropdownOpen(true)}
              onMouseLeave={() => setIsCoursesDropdownOpen(false)}
            >
              <button 
                className="flex items-center gap-1.5 hover:text-white transition-colors py-2 text-brand-300 font-semibold"
                onClick={() => setIsCoursesDropdownOpen(!isCoursesDropdownOpen)}
              >
                <span>Courses</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isCoursesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega Menu Dropdown */}
              {isCoursesDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[720px] bg-slate-900/98 backdrop-blur-xl border border-slate-700/80 rounded-2xl shadow-2xl p-4 grid grid-cols-12 gap-4 animate-in fade-in zoom-in-95 duration-150">
                  {/* Category Rail */}
                  <div className="col-span-4 bg-slate-950/80 rounded-xl p-2 border border-slate-800 space-y-1">
                    <button
                      onClick={() => setSelectedMegaCategory('placement')}
                      className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-semibold flex items-center justify-between transition-all ${
                        selectedMegaCategory === 'placement'
                          ? 'bg-brand-600 text-white shadow-md'
                          : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <Award className="w-3.5 h-3.5 text-amber-300" />
                        Placement Oriented
                      </span>
                    </button>
                    
                    <button
                      onClick={() => setSelectedMegaCategory('data')}
                      className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-semibold flex items-center justify-between transition-all ${
                        selectedMegaCategory === 'data'
                          ? 'bg-brand-600 text-white shadow-md'
                          : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                        Data &amp; AI Tracks
                      </span>
                    </button>

                    <button
                      onClick={() => setSelectedMegaCategory('specialized')}
                      className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-semibold flex items-center justify-between transition-all ${
                        selectedMegaCategory === 'specialized'
                          ? 'bg-brand-600 text-white shadow-md'
                          : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <Briefcase className="w-3.5 h-3.5 text-emerald-300" />
                        Mock Interview &amp; Internship
                      </span>
                    </button>
                    
                    <div className="pt-2 mt-2 border-t border-slate-800 px-2 text-[11px] text-slate-400">
                      <span>⭐ 4.8 Rating • 1750+ Hiring Partners</span>
                    </div>
                  </div>

                  {/* Mega Panel Content */}
                  <div className="col-span-8 space-y-2 p-1">
                    {selectedMegaCategory === 'placement' && (
                      <div className="grid grid-cols-2 gap-2">
                        {placementCourses.map(course => (
                          <div
                            key={course.id}
                            onClick={() => {
                              onSelectCourse(course);
                              setIsCoursesDropdownOpen(false);
                            }}
                            className="p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-brand-500/60 cursor-pointer transition-all group"
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">{course.duration}</span>
                              <span className="text-[10px] bg-brand-500/20 text-brand-300 px-1.5 py-0.5 rounded">{course.badge}</span>
                            </div>
                            <h4 className="text-xs font-bold text-white group-hover:text-brand-300 transition-colors line-clamp-1">{course.title}</h4>
                            <p className="text-[11px] text-slate-400 line-clamp-2 mt-1">{course.shortDesc}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {selectedMegaCategory === 'data' && (
                      <div className="grid grid-cols-2 gap-2">
                        {dataCourses.map(course => (
                          <div
                            key={course.id}
                            onClick={() => {
                              onSelectCourse(course);
                              setIsCoursesDropdownOpen(false);
                            }}
                            className="p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-cyan-500/60 cursor-pointer transition-all group"
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">{course.duration}</span>
                              <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-1.5 py-0.5 rounded">{course.badge}</span>
                            </div>
                            <h4 className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">{course.title}</h4>
                            <p className="text-[11px] text-slate-400 line-clamp-2 mt-1">{course.shortDesc}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {selectedMegaCategory === 'specialized' && (
                      <div className="space-y-2">
                        {specializedCourses.map(course => (
                          <div
                            key={course.id}
                            onClick={() => {
                              onSelectCourse(course);
                              setIsCoursesDropdownOpen(false);
                            }}
                            className="p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-emerald-500/60 cursor-pointer transition-all group flex items-start justify-between"
                          >
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">{course.duration}</span>
                                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-semibold">{course.fee || 'Intensive'}</span>
                              </div>
                              <h4 className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">{course.title}</h4>
                              <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{course.shortDesc}</p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all shrink-0 mt-2" />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <a href="#results" className="hover:text-white transition-colors">Placements</a>
            <a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a>
            <a href="#faculty" className="hover:text-white transition-colors">Faculties</a>
            <a href="#resources" className="hover:text-white transition-colors">Free Resources</a>
            <a href="#branches" className="hover:text-white transition-colors">Branches</a>
          </div>

          {/* Desktop Right CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onOpenDemoModal('General Free Demo Class')}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition-all"
            >
              Book Free Demo
            </button>
            <button
              onClick={() => onOpenDemoModal('Admission Enquiry')}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:brightness-110 shadow-lg shadow-amber-500/20 transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Enquire Now</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenDemoModal('Mobile Quick Demo')}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-950 bg-amber-400 shadow-md"
            >
              Demo Class
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-900 rounded-lg border border-slate-800"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-2 text-sm font-medium text-slate-200">
              <a 
                href="#hero" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-900"
              >
                Home
              </a>

              {/* Mobile Courses Collapsible */}
              <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900/40">
                <button
                  onClick={() => setMobileCoursesAccordion(!mobileCoursesAccordion)}
                  className="w-full px-3 py-2.5 flex items-center justify-between text-brand-300 font-semibold text-sm"
                >
                  <span className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4" />
                    All Courses
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileCoursesAccordion ? 'rotate-180' : ''}`} />
                </button>
                {mobileCoursesAccordion && (
                  <div className="p-2 space-y-1 bg-slate-950/80 border-t border-slate-800">
                    {COURSES.map(c => (
                      <button
                        key={c.id}
                        onClick={() => {
                          onSelectCourse(c);
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full text-left px-3 py-2 text-xs text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg flex items-center justify-between"
                      >
                        <span>{c.title}</span>
                        <span className="text-[10px] text-amber-400 font-bold">{c.duration}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <a 
                href="#results" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-900"
              >
                Placements &amp; Alumni
              </a>
              <a 
                href="#why-us" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-900"
              >
                Why Kiran Academy
              </a>
              <a 
                href="#faculty" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-900"
              >
                Faculty Mentors
              </a>
              <a 
                href="#resources" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-900"
              >
                Free Study Materials
              </a>
              <a 
                href="#branches" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-900"
              >
                Campus Locations (4 Branches)
              </a>
            </div>

            {/* Mobile Contact Quick Actions */}
            <div className="pt-3 border-t border-slate-800 space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${ACADEMY_INFO.primaryPhone}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 bg-slate-900 border border-slate-700 text-xs font-bold text-white rounded-xl"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call HQ</span>
                </a>
                <a
                  href={`https://wa.me/${ACADEMY_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 bg-emerald-600/20 border border-emerald-500/40 text-xs font-bold text-emerald-300 rounded-xl"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenDemoModal('Mobile Header Enquiry');
                }}
                className="w-full py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs rounded-xl shadow-lg shadow-amber-500/20 uppercase tracking-wider"
              >
                Enquire Now &amp; Book Free Demo
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
