"use client";

import { Newspaper, ExternalLink, ArrowRight } from "lucide-react";

export default function MediaPresence() {
  const articles = [
    {
      publisher: "The Economic Times",
      title: "IDS: Industry-Relevant Practical Training for High-Growth Careers",
      date: "July 2025",
      tag: "Leadership",
    },
    {
      publisher: "Times of India",
      title: "Explore high-paying short-term data analytics courses in India",
      date: "September 2025",
      tag: "Analytics",
    },
    {
      publisher: "The Hindu",
      title: "Top EdTech Platforms Offering Practical Virtual Internships",
      date: "August 2025",
      tag: "EdTech",
    },
    {
      publisher: "Financial Express",
      title: "How IDS reshaped online professional certifications with practical learning",
      date: "June 2025",
      tag: "Innovation",
    },
    {
      publisher: "NDTV Education",
      title: "Will AI replace marketing and finance jobs? Here is how to upskill in 2026",
      date: "January 2026",
      tag: "Future of Work",
    },
    {
      publisher: "India Today",
      title: "SRCC and top colleges gear up with IDS for corporate placement readiness",
      date: "November 2025",
      tag: "Campuses",
    },
  ];

  return (
    <section id="media-coverage" className="py-16 md:py-24 bg-[#FFF9F9] font-sans relative">
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fe4759]/10 border border-[#fe4759]/20">
            <Newspaper className="w-3.5 h-3.5 text-[#fe4759]" />
            <span className="text-xs font-bold text-[#fe4759] uppercase tracking-wider">
              Press & Publications
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-slate-900 tracking-tight">
            Media{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fe4759] to-[#d02e40]">
              Presence
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Discover how our commitment to practical education is making waves
            across top global publications and mainstream media channels.
          </p>
        </div>

        {/* Media Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs hover:shadow-xl hover:border-[#fe4759]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[#fe4759] uppercase tracking-wide">
                    {item.publisher}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">
                    {item.date}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-sm leading-snug group-hover:text-[#fe4759] transition-colors">
                  {item.title}
                </h3>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                  {item.tag}
                </span>
                <span className="text-[#fe4759] font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  Read Article
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
