"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Search,
  Star,
  Users,
  ArrowRight,
  BookOpen,
  Zap,
  GraduationCap,
} from "lucide-react";

const partnerLogos = [
  { name: "Meesho", src: "/assets/Meesho.svg", width: 85, height: 26 },
  { name: "TCS", src: "/assets/TCS.svg", width: 80, height: 26 },
  { name: "PhonePe", src: "/assets/PhonePe.svg", width: 95, height: 26 },
  { name: "Paytm", src: "/assets/Paytm.svg", width: 75, height: 24 },
  { name: "Godrej", src: "/assets/Godrej.png", width: 85, height: 28 },
  { name: "Flipkart", src: "/assets/Flipkart.svg", width: 90, height: 26 },
  { name: "Nykaa", src: "/assets/Nykaa.svg", width: 80, height: 24 },
  { name: "Salesforce", src: "/assets/Salesforce.svg", width: 80, height: 26 },
  { name: "Tech Mahindra", src: "/assets/techmahindra.svg", width: 110, height: 24 },
  { name: "Myntra", src: "/assets/Myntra.svg", width: 80, height: 26 },
  { name: "Sleepwell", src: "/assets/Sleepwell.png", width: 90, height: 26 },
];

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const popularCourses = [
    "Data Science",
    "Data Analytics",
    "Digital Marketing",
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const element = document.getElementById("programs");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="hero" className="relative min-h-[calc(100vh-90px)] md:min-h-[calc(100dvh-90px)] flex flex-col justify-between pt-4 sm:pt-5 lg:pt-6 pb-5 sm:pb-6 lg:pb-8 bg-gradient-to-b from-[#FFF8F9] via-[#FFFAFA] to-white overflow-hidden font-sans">
      {/* ─── DECORATIVE CORNER ACCENTS ─── */}
      {/* Bottom-Left Red Wave */}
      <div className="absolute -bottom-10 -left-10 w-[300px] sm:w-[380px] h-[200px] pointer-events-none z-0">
        <svg viewBox="0 0 380 200" className="w-full h-full fill-[#fe4759] opacity-90">
          <path d="M 0 200 L 0 50 C 70 70 120 160 210 120 C 290 85 330 150 380 200 Z" />
        </svg>
      </div>

      {/* Bottom-Left Dot Grid (Beside the Wave) */}
      <div
        className="absolute bottom-6 left-6 w-28 h-20 z-0 opacity-40 pointer-events-none hidden sm:block"
        style={{
          backgroundImage: "radial-gradient(#fe4759 2px, transparent 2px)",
          backgroundSize: "14px 14px",
        }}
      ></div>

      {/* Bottom-Right Red Wave & Arc */}
      <div className="absolute -bottom-10 -right-10 w-[320px] sm:w-[400px] h-[220px] pointer-events-none z-0">
        <svg viewBox="0 0 400 220" className="w-full h-full fill-[#fe4759] opacity-90">
          <path d="M 400 220 L 400 50 C 330 70 280 165 190 120 C 110 80 60 160 0 220 Z" />
        </svg>
      </div>

      {/* Top-Right Soft Dot Matrix */}
      <div
        className="absolute top-6 right-6 lg:right-10 w-44 h-32 z-0 opacity-25 pointer-events-none hidden md:block"
        style={{
          backgroundImage: "radial-gradient(#fe4759 2px, transparent 2px)",
          backgroundSize: "16px 16px",
        }}
      ></div>

      <div className="max-w-[1420px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex flex-col justify-between">
        {/* ─── 3-COLUMN MAIN HERO GRID (Guaranteed 12-col fit: 5 + 3 + 4 = 12) ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 xl:gap-8 items-center my-auto py-2">
          
          {/* ══════════ COLUMN 1: LEFT HEADLINE, FEATURES & SEARCH (5 Cols) ══════════ */}
          <div className="lg:col-span-5 space-y-4 lg:space-y-5">
            
            

            {/* H1 Main Headline - Strictly 3 Lines (Enforced with whitespace-nowrap and exact 56px desktop font size) */}
            <h1 className="text-[32px] sm:text-[40px] md:text-[46px] lg:text-[50px] xl:text-[56px] 2xl:text-[56px] font-extrabold text-slate-800 leading-[1.08] tracking-tight">
              <span className="block whitespace-nowrap">Master In-Demand</span>
              <span className="block whitespace-nowrap">Skills For a</span>
              <span className="block whitespace-nowrap text-[#fe4759]">High-Growth Career</span>
            </h1>

            {/* 3 Features Row: Live Projects, Guaranteed Internships, Placement Assistance */}
            <div className="flex items-center gap-3 sm:gap-5 pt-1">
              {/* Feature 1: Live Projects */}
              <div className="flex items-center gap-2">
                <div className="shrink-0 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 fill-[#fe4759] text-[#fe4759]" />
                </div>
                <div className="leading-tight">
                  <span className="text-xs sm:text-sm font-bold text-slate-900 block">Live</span>
                  <span className="text-[11px] sm:text-xs font-medium text-slate-600 block">Projects</span>
                </div>
              </div>

              {/* Feature 2: Hands-On Internships */}
              <div className="flex items-center gap-2">
                <div className="shrink-0 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 fill-[#fe4759]">
                    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
                    <rect x="11" y="11" width="2" height="3" fill="#fff" rx="0.5" />
                  </svg>
                </div>
                <div className="leading-tight">
                  <span className="text-xs sm:text-sm font-bold text-slate-900 block">Hands-On</span>
                  <span className="text-[11px] sm:text-xs font-medium text-slate-600 block">Internships</span>
                </div>
              </div>

              {/* Feature 3: Placement Assistance */}
              <div className="flex items-center gap-2">
                <div className="shrink-0 flex items-center justify-center">
                  <Users className="w-6 h-6 sm:w-7 sm:h-7 fill-[#fe4759] text-[#fe4759]" />
                </div>
                <div className="leading-tight">
                  <span className="text-xs sm:text-sm font-bold text-slate-900 block">Placement</span>
                  <span className="text-[11px] sm:text-xs font-medium text-slate-600 block">Assistance</span>
                </div>
              </div>
            </div>

            {/* Pill Search Bar with Red "Find a Course →" Button */}
            <form
              onSubmit={handleSearch}
              className="bg-white p-1.5 pl-4 sm:pl-5 rounded-full shadow-[0_10px_35px_rgba(254,71,89,0.07),0_2px_8px_rgba(0,0,0,0.03)] border border-slate-100 flex items-center justify-between gap-2 max-w-xl"
            >
              <div className="flex items-center gap-2.5 flex-1 min-w-0">
                <Search className="w-5 h-5 text-[#fe4759] stroke-[2.2] shrink-0" />
                <input
                  type="text"
                  placeholder="Search for a course..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs sm:text-sm outline-none text-slate-800 placeholder:text-slate-400 bg-transparent py-1.5 font-medium"
                />
              </div>
              <button
                type="submit"
                className="px-5 sm:px-7 py-2.5 sm:py-3 bg-[#fe3b56] hover:bg-[#e22a45] text-white font-bold text-xs sm:text-sm rounded-full transition-all shadow-md shadow-[#fe3b56]/25 hover:scale-[1.02] cursor-pointer whitespace-nowrap flex items-center gap-1.5 shrink-0"
              >
                <span>Find a Course</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </form>

            {/* Popular Courses Pills */}
            <div className="flex items-center gap-2 flex-wrap text-xs pt-0.5">
              <span className="font-semibold text-slate-400">Popular:</span>
              {popularCourses.map((course, idx) => (
                <a
                  key={idx}
                  href="#programs"
                  className="px-4 py-1.5 rounded-full bg-white hover:bg-rose-50/50 border border-[#fed7dc] text-xs font-semibold text-[#fe4759] shadow-2xs hover:border-[#fe4759] transition-all"
                >
                  {course}
                </a>
              ))}
            </div>

          </div>

          {/* ══════════ COLUMN 2: CENTER STUDENT CUTOUT + "BUILD YOUR FUTURE" (3 Cols) ══════════ */}
          <div className="lg:col-span-3 xl:col-span-3 flex items-center justify-center relative my-4 lg:my-0">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] aspect-[1145/1374] flex items-center justify-center">
              
              {/* <div className="absolute top-2 -left-4 sm:-left-8 z-20 pointer-events-none select-none">
                <div
                  className="text-2xl sm:text-[32px] font-bold text-[#fe3b56] -rotate-12 tracking-wide leading-tight drop-shadow-xs"
                  style={{ fontFamily: "var(--font-caveat), 'Caveat', cursive, sans-serif" }}
                >
                  Build <br />
                  Your Future
                </div>
                <svg
                  viewBox="0 0 60 40"
                  className="w-12 h-9 text-[#fe3b56] ml-8 -mt-2 fill-none stroke-current stroke-[2.2] stroke-linecap-round stroke-linejoin-round"
                >
                  <path d="M 6 36 Q 24 6 52 14" />
                  <path d="M 40 8 L 52 14 L 46 24" />
                </svg>
              </div> */}

              {/* Student Image with Red Fluid Accent (High-Res cutout matching reference) */}
              <div className="relative w-full h-full">
                <Image
                  src="/hero_banner.png"
                  alt="Student with laptop and notebook building a rewarding career"
                  fill
                  priority
                  sizes="(max-width: 768px) 340px, (max-width: 1200px) 380px, 420px"
                  className="object-contain object-bottom drop-shadow-md"
                />
              </div>

            </div>
          </div>

          {/* ══════════ COLUMN 3: RIGHT FLOATING TRUST & METRIC CARDS (Exact match to screenshot) ══════════ */}
          <div className="lg:col-span-4 xl:col-span-4 w-full">
            <div className="max-w-[460px] xl:max-w-[480px] w-full ml-auto space-y-3.5 sm:space-y-4">
              
              {/* Row 1: 55K+ Students Trained Card with 3-bar outline chart */}
              <div className="bg-white rounded-[26px] sm:rounded-[28px] p-4.5 sm:p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100/60 flex items-center justify-between hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 sm:gap-3.5">
                  <div className="shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 32 32" className="w-8 h-8 sm:w-9 sm:h-9 fill-[#fe4759]">
                      <circle cx="16" cy="11" r="4.2" />
                      <path d="M9.5 24.5c0-3.3 2.9-6 6.5-6s6.5 2.7 6.5 6V26h-13v-1.5z" />
                      <circle cx="9" cy="13" r="3.2" />
                      <path d="M3.5 24.5c0-2.6 2-4.7 4.6-4.7.6 0 1.1.1 1.6.3-.7 1-1.1 2.2-1.1 3.5V26h-5.1v-1.5z" />
                      <circle cx="23" cy="13" r="3.2" />
                      <path d="M23.4 19.8c.5-.2 1-.3 1.6-.3 2.6 0 4.6 2.1 4.6 4.7V26h-5.1v-2.4c0-1.3-.4-2.5-1.1-3.5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[28px] sm:text-[32px] font-black text-[#0B132A] tracking-tight leading-none">
                      10K+
                    </div>
                    <div className="text-xs sm:text-[13px] text-[#64748B] font-semibold mt-1 whitespace-nowrap">
                      Students Trained
                    </div>
                  </div>
                </div>
                {/* 3-Bar Outline Chart */}
                <div className="pr-1">
                  <svg viewBox="0 0 32 36" className="w-8 h-9 stroke-[#fe7888] fill-none stroke-[2.5] stroke-linecap-round stroke-linejoin-round">
                    <rect x="3" y="18" width="5.5" height="15" rx="2.75" />
                    <rect x="13.5" y="10" width="5.5" height="23" rx="2.75" />
                    <rect x="24" y="2" width="5.5" height="31" rx="2.75" />
                  </svg>
                </div>
              </div>

              {/* Row 2: 95% Placement Rate Card with trend arrow graphic */}
              <div className="bg-white rounded-[26px] sm:rounded-[28px] p-4.5 sm:p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100/60 flex items-center justify-between hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 sm:gap-3.5">
                  <div className="shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9 stroke-[#00C48C] fill-none stroke-[2.8] stroke-linecap-round stroke-linejoin-round">
                      <path d="M3 17 L9 11 L13 15 L21 7" />
                      <path d="M15 7 L21 7 L21 13" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[28px] sm:text-[32px] font-black text-[#0B132A] tracking-tight leading-none">
                      95%
                    </div>
                    <div className="text-xs sm:text-[13px] text-[#64748B] font-semibold mt-1 whitespace-nowrap">
                      Placement Rate
                    </div>
                  </div>
                </div>
                {/* Stylized Trend Arrow */}
                <div className="pr-1 text-[#fe4759]">
                  <svg
                    viewBox="0 0 50 30"
                    className="w-11 h-6 sm:w-12 sm:h-7 stroke-current fill-none stroke-[2.5] stroke-linecap-round stroke-linejoin-round"
                  >
                    <path d="M 2 24 L 11 16 L 20 22 L 32 9 L 46 5" />
                    <path d="M 36 5 L 46 5 L 46 15" />
                  </svg>
                </div>
              </div>

              {/* Row 3: Verified Reviews Card (Google 4.9 & Justdial 4.8) */}
              <div className="bg-white rounded-[26px] sm:rounded-[28px] p-4.5 sm:p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100/60 space-y-3.5 hover:shadow-md transition-shadow">
                {/* Header: Verified Reviews with Red Shield Check */}
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#fe3b56]">
                    <path d="M12 2L4 5.5v6c0 5 3.4 9.7 8 10.9 4.6-1.2 8-5.9 8-10.9v-6L12 2zm-1.5 14.5L6.5 12l1.4-1.4 2.6 2.6 6.6-6.6 1.4 1.4-8 8.5z"/>
                  </svg>
                  <span className="text-sm sm:text-[15px] font-black text-[#0B132A] tracking-tight">Verified Reviews</span>
                </div>

                {/* Dual Platform Reviews: Google 4.9 & Justdial 4.8 */}
                <div className="grid grid-cols-2 divide-x divide-slate-100/90 gap-3 sm:gap-4 pt-0.5">
                  
                  {/* Google Review (4.9 Rating) */}
                  <div className="pr-2 sm:pr-3 flex flex-col justify-between">
                    <div className="flex items-center gap-2">
                      <div className="shrink-0 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="w-5 h-5">
                          <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                          <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.41 7.34 24 12 24z"/>
                          <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                          <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.59 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#64748B] leading-tight">
                          Google
                        </div>
                        <div className="flex items-baseline gap-1 mt-0.5">
                          <span className="text-2xl sm:text-[26px] font-black text-[#0B132A] leading-none">
                            4.9
                          </span>
                          <span className="text-xs font-semibold text-[#94A3B8]">/5</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-2">
                      <div className="flex text-[#FFB800] gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#FFB800] text-[#FFB800]" />
                        ))}
                      </div>
                      <div className="text-xs font-semibold text-[#64748B] mt-1">
                        1,850+ reviews
                      </div>
                    </div>
                  </div>

                  {/* Justdial Review (4.8 Stars) */}
                  <div className="pl-3 sm:pl-4 flex flex-col justify-between">
                    <div className="flex items-center gap-2">
                      <div className="shrink-0 flex items-center justify-center">
                        <span className="text-[#FF6600] font-black text-sm tracking-tight">Jd</span>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#64748B] leading-tight">
                          Justdial
                        </div>
                        <div className="flex items-baseline gap-1 mt-0.5">
                          <span className="text-2xl sm:text-[26px] font-black text-[#0B132A] leading-none">
                            4.8
                          </span>
                          <span className="text-xs font-semibold text-[#94A3B8]">/5</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-2">
                      <div className="flex text-[#FFB800] gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#FFB800] text-[#FFB800]" />
                        ))}
                      </div>
                      <div className="text-xs font-semibold text-[#64748B] mt-1">
                        920+ reviews
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Row 4: Two cards side by side (20+ Courses Offered & 1,500+ Learning Now) */}
              <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
                {/* 20+ Courses Offered */}
                <div className="bg-white rounded-[26px] sm:rounded-[28px] p-4 sm:p-4.5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100/60 flex items-center gap-3 hover:shadow-md transition-shadow">
                  <div className="shrink-0 flex items-center justify-center">
                    <BookOpen className="w-7 h-7 sm:w-8 sm:h-8 text-[#fe4759] stroke-[2.3]" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-[26px] font-black text-[#0B132A] tracking-tight leading-none">
                      20+
                    </div>
                    <div className="text-xs sm:text-[13px] text-[#64748B] font-semibold mt-1 whitespace-nowrap">
                      Courses Offered
                    </div>
                  </div>
                </div>

                {/* 1,500+ Active Learners (Solid Brand Red Card) */}
                <div className="bg-gradient-to-r from-[#FF4D63] to-[#FE324E] rounded-[26px] sm:rounded-[28px] p-4 sm:p-4.5 shadow-[0_10px_28px_rgba(254,50,78,0.28)] text-white flex items-center gap-3 hover:scale-[1.02] transition-transform">
                  <div className="shrink-0 flex items-center justify-center">
                    <Zap className="w-7 h-7 sm:w-8 sm:h-8 fill-white text-white stroke-none" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-[26px] font-black text-white tracking-tight leading-none">
                      1,500+
                    </div>
                    <div className="text-xs sm:text-[13px] text-white/95 font-semibold mt-1 whitespace-nowrap">
                      Active Learners
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ══════════ BOTTOM FLOATING COLLABORATION STRIP (Matching Reference Design) ══════════ */}
        <div className="mt-auto max-w-[1380px] mx-auto w-full bg-white rounded-3xl lg:rounded-full p-2 sm:p-2.5 px-5 sm:px-8 shadow-[0_12px_40px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col lg:flex-row items-center justify-between gap-4 relative z-10">
          
          {/* Left Side: "IN COLLABORATION WITH LEADING ORGANIZATIONS" */}
          <div className="text-center sm:text-left shrink-0">
            <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-tight">
              IN COLLABORATION WITH
            </div>
            <div className="text-xs font-black text-slate-800 tracking-tight leading-tight">
              LEADING ORGANIZATIONS
            </div>
          </div>

          <div className="h-7 w-px bg-slate-200 hidden lg:block shrink-0"></div>

          {/* Middle: Scrolling Marquee of 11 Companies */}
          <div className="flex-1 min-w-0 w-full overflow-hidden relative py-1">
            {/* Left & Right gradient masks */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-12 z-10 bg-gradient-to-r from-white via-white/80 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-12 z-10 bg-gradient-to-l from-white via-white/80 to-transparent" />

            <div className="flex w-max items-center gap-7 sm:gap-9 animate-marquee hover:[animation-play-state:paused]">
              {[...partnerLogos, ...partnerLogos].map((partner, idx) => (
                <div
                  key={`${partner.name}-${idx}`}
                  className="flex items-center justify-center shrink-0 group/logo opacity-85 hover:opacity-100 transition-opacity"
                  title={partner.name}
                >
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    width={partner.width}
                    height={partner.height}
                    className="h-6 sm:h-7 w-auto object-contain grayscale-[20%] group-hover/logo:grayscale-0 group-hover/logo:scale-105 transition-all duration-200"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="h-7 w-px bg-slate-200 hidden lg:block shrink-0"></div>

          {/* Right Side Pill: Join thousands of successful learners */}
          <a
            href="#programs"
            className="flex items-center gap-3 bg-slate-50/80 hover:bg-rose-50/60 pl-3 pr-2 py-1.5 rounded-full transition-all border border-slate-100 shrink-0 group"
          >
            <div className="flex -space-x-2 shrink-0">
              <div className="relative w-7 h-7 rounded-full overflow-hidden border-2 border-white shadow-2xs">
                <Image src="/alumni/isha_verma.jpg" alt="Learner" fill sizes="28px" className="object-cover" />
              </div>
              <div className="relative w-7 h-7 rounded-full overflow-hidden border-2 border-white shadow-2xs">
                <Image src="/alumni/divya.jpg" alt="Learner" fill sizes="28px" className="object-cover" />
              </div>
              <div className="relative w-7 h-7 rounded-full overflow-hidden border-2 border-white shadow-2xs">
                <Image src="/alumni/bhumi.jpg" alt="Learner" fill sizes="28px" className="object-cover" />
              </div>
            </div>
            <span className="text-xs font-bold text-slate-800 whitespace-nowrap group-hover:text-[#fe4759] transition-colors">
              Join thousands of successful learners
            </span>
            <div className="w-8 h-8 rounded-full bg-rose-100/80 text-[#fe4759] flex items-center justify-center font-bold text-xs group-hover:bg-[#fe4759] group-hover:text-white transition-all shadow-2xs">
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </div>
          </a>

        </div>

      </div>
    </section>
  );
}
