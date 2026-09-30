import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Play, CheckCircle2, Award } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

export default function TestimonialSection({ onOpenDemoModal }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Pratik Gaikwad",
      course: "Java Full Stack Development",
      company: "Infosys (Systems Engineer - ₹4.5 LPA)",
      background: "Mechanical Engineering 2023 Passout",
      text: "I was terrified of coding when I started because I had zero programming in Mechanical. Kiran Sir's method of breaking down OOPs and memory allocation made everything crystal clear. The 15 mock interviews prepared me so well that the actual Infosys interview felt easy.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=120&auto=format&fit=crop&q=80"
    },
    {
      name: "Priyanka Mohite",
      course: "Software Testing Automation",
      company: "Cognizant (QA Automation - ₹4.8 LPA)",
      background: "B.Sc Graduate (Non-IT)",
      text: "Software Testing at The Kiran Academy changed my life. From manual test design in Jira to writing Selenium 4.0 automation frameworks in Java, the practical lab sessions were phenomenal. Within 3 weeks of course completion, I had 2 offers!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
    },
    {
      name: "Saurabh Joshi",
      course: "Python Full Stack Development",
      company: "Persistent Systems (Software Engineer - ₹5.2 LPA)",
      background: "BCA Graduate with 1.5 Year Career Gap",
      text: "I had a career gap and was rejected in many walk-ins. The Kiran Academy placement cell reworked my resume, guided me to build a live SaaS Django capstone, and scheduled direct interviews. Got placed in Persistent within 4 months!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 bg-slate-900/40 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>4.8 Google Rating • 2,000+ Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Loved By Over 50,000+ Students
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Read unfiltered feedback from alumni who transformed their careers at The Kiran Academy Pune.
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="max-w-4xl mx-auto glass-panel-glow rounded-3xl p-6 sm:p-10 border border-brand-500/30 relative">
          
          <Quote className="w-12 h-12 text-brand-500/20 absolute top-6 right-6 pointer-events-none" />

          <div className="space-y-6">
            {/* Stars */}
            <div className="flex items-center gap-1">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
              ))}
              <span className="text-xs text-slate-400 font-semibold ml-2">Verified Google Review</span>
            </div>

            {/* Testimonial Content */}
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic font-normal">
              "{current.text}"
            </p>

            {/* Author Info & Controls */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-3">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-12 h-12 rounded-2xl object-cover border-2 border-brand-500/60 shadow-md"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">{current.name}</h4>
                  <p className="text-xs text-emerald-400 font-semibold">{current.company}</p>
                  <p className="text-[10px] text-slate-400">{current.background} • {current.course}</p>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-all"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs text-slate-400 font-bold px-2">
                  {currentIndex + 1} / {testimonials.length}
                </span>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-all"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
