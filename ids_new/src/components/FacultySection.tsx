"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, Sparkles, Award, Briefcase, GraduationCap, ArrowRight, CheckCircle2, Quote } from "lucide-react";

interface Mentor {
  name: string;
  role: string;
  photo: string;
  badge: string;
  experience: string;
  bio: string;
  highlights: { label: string; value: string }[];
  expertise: string[];
  quote: string;
}

const MENTORS: Mentor[] = [
  {
    name: "Deepanshu Jaiswal",
    role: "COO & Senior Mentor",
    photo: "/mentors/deepanshu.jpg",
    badge: "Executive Leadership",
    experience: "10+ Years Industry Experience",
    bio: "Deepanshu is the Chief Operating Officer at IDS and an accomplished growth strategist who has architected end-to-end digital agency operations. With hands-on leadership over multi-crore media spends across diverse sectors, he is passionate about transforming students into job-ready marketing leaders through real-world client briefs, strategic media buying, and executive mentorship.",
    highlights: [
      { label: "Experience", value: "10+ Yrs" },
      { label: "Mentees Guided", value: "5,000+" },
      { label: "Ad Spend Managed", value: "₹40Cr+" },
    ],
    expertise: [
      "Agency Operations",
      "Performance Marketing",
      "Media Buying & Strategy",
      "Team Leadership",
      "Client ROI Optimization",
    ],
    quote: "True marketing mastery doesn't come from textbooks—it comes from analyzing live metrics, running real campaigns, and failing fast to win big.",
  },
  {
    name: "Ravi Verma",
    role: "Strategist Principal",
    photo: "/mentors/Ravi.jpg",
    badge: "Strategy & Growth",
    experience: "8+ Years Industry Experience",
    bio: "Ravi is a strategic marketing principal known for engineering full-funnel customer acquisition ecosystems and high-converting campaign architectures. Having steered successful campaigns for prominent national brands and leading performance agencies, he trains students in consumer psychology, brand positioning, and analytics-driven media planning that delivers sustainable, compounding ROI.",
    highlights: [
      { label: "Experience", value: "8+ Yrs" },
      { label: "Brand Campaigns", value: "120+" },
      { label: "Conversion Lift", value: "3.5x Avg" },
    ],
    expertise: [
      "Full-Funnel Strategy",
      "Consumer Psychology",
      "Conversion Rate Optimization (CRO)",
      "Brand Positioning",
      "Media Planning",
    ],
    quote: "Great marketing feels like a personal conversation at scale. We teach you how to decode buyer psychology and convert curiosity into revenue.",
  },
  {
    name: "Aman Saxena",
    role: "AI & Growth Mentor",
    photo: "/mentors/aman.jpg",
    badge: "AI & Automation",
    experience: "7+ Years Industry Experience",
    bio: "Aman leads the integration of AI tools, programmatic workflows, and growth marketing automation at IDS. With a rich background in product marketing and modern data analytics, he empowers students to harness generative AI, automated campaign funnels, and predictive analytics to achieve 10x speed and precision in modern digital marketing.",
    highlights: [
      { label: "Experience", value: "7+ Yrs" },
      { label: "Professionals Trained", value: "3,000+" },
      { label: "AI Workflows Built", value: "150+" },
    ],
    expertise: [
      "Generative AI for Marketing",
      "Marketing Automation",
      "Growth Hacking",
      "Prompt Engineering",
      "Audience Analytics",
    ],
    quote: "AI won't replace marketers, but marketers who leverage AI will replace those who don't. We prepare you to be at the forefront of this shift.",
  },
  {
    name: "Suleman",
    role: "Performance Specialist",
    photo: "/mentors/suleman.jpg",
    badge: "Paid Media Maestro",
    experience: "6+ Years Industry Experience",
    bio: "Suleman is a high-octane performance marketing engineer with exhaustive hands-on expertise across Meta Ads, Google PPC, programmatic ad bidding, and cross-channel attribution modeling. He specializes in building robust creative testing frameworks and scaling ad spends profitably with tight CAC-to-LTV unit economics.",
    highlights: [
      { label: "Experience", value: "6+ Yrs" },
      { label: "Managed Spends", value: "₹25Cr+" },
      { label: "Avg ROAS Delivered", value: "4.8x" },
    ],
    expertise: [
      "Meta Ads Manager",
      "Google PPC & Search",
      "Attribution Modeling",
      "A/B Testing Frameworks",
      "CAC/LTV Optimization",
    ],
    quote: "In performance marketing, the numbers never lie. Once you understand algorithmic bidding and attribution, every ad rupee becomes a predictable investment.",
  },
];

export default function FacultySection() {
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);

  // Lock body scroll and listen for ESC key when modal is open
  useEffect(() => {
    if (!selectedMentor) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedMentor(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedMentor]);

  return (
    <section id="faculty" className="py-16 md:py-24 bg-slate-50/50 font-sans relative overflow-hidden border-t border-slate-100">
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200/60 text-[#fe4759] text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            Learn From The Best
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight">
            Backed By{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fe4759] to-[#d02e40]">
              Experienced Industry Mentors
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Get mentored by top-tier professionals dedicated to bridging the gap between theoretical
            knowledge and practical execution. <span className="font-semibold text-slate-800">Tap any mentor to view their bio.</span>
          </p>
        </div>

        {/* 4 Mentor Cards Grid - 2 Cols on Mobile, 4 Cols on Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-6 max-w-6xl mx-auto items-stretch">
          {MENTORS.map((mentor, idx) => (
            <div
              key={idx}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedMentor(mentor)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedMentor(mentor);
                }
              }}
              className="relative aspect-[3/4] sm:aspect-[4/5] w-full mx-auto rounded-[18px] sm:rounded-[24px] md:rounded-[26px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-2xl hover:shadow-rose-500/20 hover:-translate-y-2 transition-all duration-500 group flex flex-col justify-end border border-slate-200/80 hover:border-[#fe4759]/60 cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-[#fe4759] focus:ring-offset-2"
            >
              {/* Full-bleed Cover Image */}
              <Image
                src={mentor.photo}
                alt={mentor.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
                className="object-cover object-top group-hover:scale-108 transition-transform duration-700 ease-out"
              />

              {/* Multi-stop Cinematic Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/45 via-50% to-transparent pointer-events-none group-hover:from-black transition-all duration-300" />

              {/* Top "Tap for Bio" badge */}
              <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-10 transition-all duration-300">
                <span className="inline-flex items-center gap-1 text-[9px] sm:text-[11px] font-bold text-white bg-slate-950/70 backdrop-blur-md px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-white/20 shadow-xs group-hover:bg-[#fe4759] group-hover:border-transparent transition-colors">
                  <span>View Bio</span>
                  <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>

              {/* Mentor Info Overlay */}
              <div className="relative z-10 p-3 sm:p-4 md:p-5 flex flex-col">
                <h3 className="text-sm sm:text-base md:text-lg font-bold sm:font-extrabold text-white tracking-tight leading-snug drop-shadow-md group-hover:text-rose-100 transition-colors line-clamp-1 sm:line-clamp-none">
                  {mentor.name}
                </h3>
                <p className="text-[10px] sm:text-xs font-semibold text-rose-300/95 mt-0.5 sm:mt-1 leading-tight flex items-center gap-1 sm:gap-1.5 drop-shadow-sm line-clamp-1 sm:line-clamp-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fe4759] shrink-0 shadow-[0_0_8px_#fe4759]" />
                  {mentor.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ══════════════════════════════════════════════════════════════
          MENTOR DETAILS MODAL
          ══════════════════════════════════════════════════════════════ */}
      {selectedMentor && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`About ${selectedMentor.name}`}
          onClick={() => setSelectedMentor(null)}
          className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden my-auto max-h-[92vh] flex flex-col animate-in zoom-in-95 duration-200"
          >
            {/* Modal Header Banner */}
            <div className="relative bg-gradient-to-r from-[#FFF2F4] via-[#FFE8EB] to-[#FFF5F6] p-5 sm:p-6 border-b border-rose-200/70 shrink-0">
              {/* Close Button */}
              <button
                onClick={() => setSelectedMentor(null)}
                aria-label="Close mentor details"
                className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 hover:bg-white text-slate-600 hover:text-slate-900 flex items-center justify-center shadow-sm border border-slate-200 transition-all z-20 cursor-pointer"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <div className="flex items-start gap-4 sm:gap-5 pr-8">
                {/* Mentor Photo in Avatar Box */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-3 border-white shadow-lg shadow-rose-500/15 shrink-0 bg-slate-100">
                  <Image
                    src={selectedMentor.photo}
                    alt={selectedMentor.name}
                    fill
                    sizes="96px"
                    className="object-cover object-top"
                  />
                </div>

                {/* Name, Role & Badges */}
                <div className="min-w-0 flex-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#fe4759] text-white text-[10px] font-extrabold uppercase tracking-wide mb-1.5 shadow-2xs">
                    <Award className="w-3 h-3" />
                    {selectedMentor.badge}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight">
                    {selectedMentor.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-[#fe4759] mt-0.5">
                    {selectedMentor.role}
                  </p>
                  <p className="text-[11px] sm:text-xs font-medium text-slate-600 mt-1 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    {selectedMentor.experience}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Body (Scrollable if content is tall on small screens) */}
            <div className="p-5 sm:p-6 space-y-5 overflow-y-auto">
              {/* Highlights 3-Col Metric Grid */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                {selectedMentor.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-center"
                  >
                    <div className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                      {h.value}
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500 mt-0.5 leading-tight">
                      {h.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* About Bio */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-[#fe4759]" />
                  About The Mentor
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal bg-slate-50/50 p-3.5 sm:p-4 rounded-xl border border-slate-100">
                  {selectedMentor.bio}
                </p>
              </div>

              {/* Core Expertise Tags */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  Core Areas of Expertise
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {selectedMentor.expertise.map((skill, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center text-[11px] sm:text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-rose-50 hover:text-[#fe4759] border border-slate-200/80 px-2.5 py-1 rounded-lg transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mentor Philosophy Quote */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-[#FFF7F8] to-white border border-rose-200/80 flex items-start gap-2.5">
                <Quote className="w-4 h-4 text-[#fe4759] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-[13px] italic font-medium text-slate-700 leading-relaxed">
                  &ldquo;{selectedMentor.quote}&rdquo;
                </p>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setSelectedMentor(null)}
                className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
              >
                Close
              </button>

              <a
                href="#consultation"
                onClick={() => setSelectedMentor(null)}
                className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-white bg-[#fe4759] hover:bg-[#e03a4c] px-4 sm:px-5 py-2.5 rounded-xl transition-all shadow-md shadow-rose-500/25"
              >
                <span>Get 1:1 Mentorship</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
