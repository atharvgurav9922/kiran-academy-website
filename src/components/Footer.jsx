import React from 'react';
import { 
  MapPin, Phone, Mail, MessageSquare, 
  Youtube, Instagram, Linkedin, Facebook, 
  ShieldCheck, Heart, ArrowUp, Award, Sparkles 
} from 'lucide-react';
import { ACADEMY_INFO, COURSES, BRANCHES } from '../data/academyData';

export default function Footer({ onSelectCourse, onOpenDemoModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 to-amber-400 p-[2px]">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <span className="font-display font-black text-lg text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-amber-300">
                    KA
                  </span>
                </div>
              </div>
              <div>
                <span className="font-display font-black text-lg text-white tracking-tight">
                  THE KIRAN ACADEMY
                </span>
                <p className="text-[10px] text-slate-500 uppercase tracking-wide">
                  JavaByKiran • Pune IT Training
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Pune's leading job-ready IT training and software placements institute since 2012. 
              Over 50,000+ students trained and 25,000+ placed across 1,750+ hiring partner companies.
            </p>

            <div className="flex items-center gap-2 pt-1 text-slate-300">
              <span className="font-bold text-amber-400 text-sm">4.8 / 5.0 ⭐</span>
              <span>on Google Reviews (2,000+ Ratings)</span>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={ACADEMY_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Channel"
                className="w-8 h-8 rounded-xl bg-slate-900 hover:bg-rose-600 text-slate-300 hover:text-white border border-slate-800 flex items-center justify-center transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={ACADEMY_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Page"
                className="w-8 h-8 rounded-xl bg-slate-900 hover:bg-pink-600 text-slate-300 hover:text-white border border-slate-800 flex items-center justify-center transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={ACADEMY_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Company"
                className="w-8 h-8 rounded-xl bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white border border-slate-800 flex items-center justify-center transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={ACADEMY_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Page"
                className="w-8 h-8 rounded-xl bg-slate-900 hover:bg-blue-700 text-slate-300 hover:text-white border border-slate-800 flex items-center justify-center transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Courses (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Popular Training Tracks
            </h4>
            <ul className="space-y-2">
              {COURSES.slice(0, 6).map(c => (
                <li key={c.id}>
                  <button
                    onClick={() => onSelectCourse(c)}
                    className="hover:text-brand-400 transition-colors text-left flex items-center justify-between w-full text-xs"
                  >
                    <span>{c.title}</span>
                    <span className="text-[10px] text-amber-400 font-semibold">{c.duration}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links & Resources (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#results" className="hover:text-white transition-colors">Placements Record</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#faculty" className="hover:text-white transition-colors">Mentors &amp; Faculty</a></li>
              <li><a href="#resources" className="hover:text-white transition-colors">Free Study Roadmaps</a></li>
              <li><a href="#branches" className="hover:text-white transition-colors">Campus Locations</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ Support</a></li>
            </ul>
          </div>

          {/* Col 4: Campus Hotlines (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Branch Direct Lines
            </h4>
            <div className="space-y-2.5">
              {BRANCHES.filter(b => b.id !== 'online').map(branch => (
                <div key={branch.id} className="p-2.5 bg-slate-900/60 rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="font-bold text-white text-xs">{branch.shortName}</span>
                    <a
                      href={`tel:${branch.phone}`}
                      className="text-amber-400 hover:underline font-bold text-xs"
                    >
                      {branch.phoneDisplay}
                    </a>
                  </div>
                  <p className="text-[10px] text-slate-400 line-clamp-1">{branch.address}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            <p>© {new Date().getFullYear()} The Kiran Academy. All Rights Reserved.</p>
            <p className="text-[10px] text-slate-500 mt-0.5">
              Karve Nagar • Hadapsar • Chinchwad • Nagpur • Pan-India Online
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenDemoModal('Footer Demo Enquiry')}
              className="text-amber-400 font-bold hover:underline"
            >
              Book Free Demo Class
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-300 hover:text-white"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
