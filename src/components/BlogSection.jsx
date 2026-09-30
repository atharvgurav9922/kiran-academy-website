import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, ArrowRight, X } from 'lucide-react';
import { BLOG_POSTS } from '../data/academyData';

export default function BlogSection({ onOpenDemoModal }) {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Articles &amp; IT Career Insights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Latest Tech &amp; Placement News
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Expert strategies on software testing trends, Spring Boot salary reports, and IT career transition blueprints.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              className="glass-card rounded-3xl overflow-hidden border border-slate-800 hover:border-brand-500/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Blog Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-slate-950/80 text-amber-400 backdrop-blur-md border border-slate-800">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-brand-400" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-brand-400" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-brand-300 transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => setSelectedArticle(post)}
                  className="text-xs font-bold text-brand-400 hover:text-brand-300 flex items-center gap-1.5 transition-colors"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Article Reader Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4 animate-in zoom-in-95 duration-200">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider bg-amber-400/10 px-2 py-0.5 rounded">
                    {selectedArticle.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-white mt-2">
                    {selectedArticle.title}
                  </h3>
                  <div className="flex items-center gap-3 text-[11px] text-slate-400 mt-1">
                    <span>{selectedArticle.date}</span>
                    <span>•</span>
                    <span>{selectedArticle.readTime}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="text-xs text-slate-300 space-y-3 leading-relaxed border-t border-slate-800 pt-4">
                <p>
                  At The Kiran Academy, we constantly monitor the hiring needs of over 1,750+ partner companies across Pune (Hinjawadi, Magarpatta, Kharadi, Baner) and India.
                </p>
                <p>
                  {selectedArticle.summary}
                </p>
                <p>
                  Key takeaway: Companies evaluate real project deliverables and the ability to explain system architecture under interview conditions. Theoretical knowledge alone is not enough — focus on writing clean, modular code and mastering 15+ live mock rounds.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-end gap-2">
                <button
                  onClick={() => {
                    setSelectedArticle(null);
                    onOpenDemoModal(`Read Blog Enquiry: ${selectedArticle.title}`);
                  }}
                  className="px-4 py-2 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs rounded-xl"
                >
                  Book Free Counselling Session
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
