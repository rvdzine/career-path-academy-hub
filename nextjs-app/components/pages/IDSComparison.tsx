"use client";

import React from "react";
import {
  BookOpen,
  Presentation,
  Users,
  ClipboardList,
  Briefcase,
  CheckCircle2,
  XCircle,
  Building2,
} from "lucide-react";

interface RowItem {
  
  icon: typeof BookOpen;
  title: string;
  other: string;
  idsTitle: string;
  idsDesc: string;
}

const rows: RowItem[] = [
  {
    icon: BookOpen,
    title: "Curriculum & Tech",
    other: "Stuck in outdated textbook theory with zero real AI or analytics tools.",
    idsTitle: "Built for Today’s Digital World",
    idsDesc: "Always updated with live Meta algorithms, GA4, Performance Max & automation.",
  },
  {
    icon: Presentation,
    title: "Teaching Approach",
    other: "Listen, memorize slides, repeat. Zero real budget execution.",
    idsTitle: "Do. Build. Execute.",
    idsDesc: "100% practical hands-on projects, real tools, real live ad outcomes.",
  },
  {
    icon: Users,
    title: "Faculty & Mentors",
    other: "Academic teachers with limited corporate marketing exposure.",
    idsTitle: "Experts Who Do This Daily",
    idsDesc: "Mentored by active growth leads running real campaigns & multi-lakh budgets.",
  },
  {
    icon: ClipboardList,
    title: "Assignments & Projects",
    other: "Theoretical paperwork with zero real-world employer value.",
    idsTitle: "Work That Mirrors Real Jobs",
    idsDesc: "SEO audits, live ad setups, analytics dashboards, and real client strategies.",
  },
  {
    icon: Briefcase,
    title: "Career Readiness",
    other: "Minimal industry connection and unverified job board forwarding.",
    idsTitle: "Skills That Get You Hired",
    idsDesc: "Portfolio-ready case studies, tool mastery, and direct access to 300+ hiring partners.",
  },
];

export default function IDSComparison() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-t border-gray-100 overflow-hidden">
      {/* Subtle ambient red dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, #EA252514 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-14">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center justify-center gap-3 mb-3">
            <span className="block w-8 h-[2.5px] bg-red-600 rounded-full" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-red-600">
              Pedagogy Comparison // The IDS Difference
            </span>
            <span className="block w-8 h-[2.5px] bg-red-600 rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-950 tracking-tight leading-[1.12]">
            See How IDS Transforms Digital Careers <br className="hidden md:inline" />
            With <span className="text-red-600">Industry-First Learning</span>
          </h2>

          <p className="mt-3.5 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Compare the practical reality of our agency-led curriculum against conventional training institutes.
          </p>
        </div>

        {/* ─── BEAUTIFIED TABULAR MATRIX (MD+) ─── */}
        <div className="hidden md:block">
          {/* Table Headers */}
          <div className="grid grid-cols-12 items-stretch">
            {/* Left 7 Cols Header */}
            <div className="col-span-7 bg-stone-100/90 border border-r-0 border-gray-200 rounded-tl-3xl p-5 sm:p-6 grid grid-cols-7 items-center gap-4">
              <div className="col-span-3 text-xs font-black uppercase tracking-wider text-gray-500">
                Training Pillar
              </div>
              <div className="col-span-4 text-xs font-black uppercase tracking-wider text-gray-500">
                Conventional Institutes
              </div>
            </div>

            {/* Right 5 Cols Header: IDS Advantage */}
            <div className="col-span-5 bg-red-600 text-white border border-red-600 rounded-tr-3xl p-5 sm:p-6 flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                <span className="text-base sm:text-lg font-black tracking-tight">
                  The IDS Advantage
                </span>
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest bg-white/20 px-2.5 py-1 rounded-full text-white">
                ★ 95% Placed
              </span>
            </div>
          </div>

          {/* Table Body */}
          <div className="border border-t-0 border-gray-200 rounded-b-3xl overflow-hidden bg-white shadow-sm divide-y divide-gray-100">
            {rows.map((row, index) => {
              const Icon = row.icon;
              return (
                <div
                  key={index}
                  className="grid grid-cols-12 group hover:bg-stone-50/50 transition-colors"
                >
                  {/* OTHERS (7 cols) */}
                  <div className="col-span-7 p-5 sm:p-6 grid grid-cols-7 items-center gap-4 border-r-2 border-gray-200/80">
                    {/* Category Pillar */}
                    <div className="col-span-3 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100/80 flex items-center justify-center flex-shrink-0 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-black text-gray-950 leading-tight">
                        {row.title}
                      </span>
                    </div>

                    {/* Other Institutes Reality */}
                    <div className="col-span-4 flex items-start gap-2 text-xs sm:text-sm text-gray-500 font-medium leading-relaxed pr-2">
                      <XCircle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                      <span>{row.other}</span>
                    </div>
                  </div>

                  {/* IDS ADVANTAGE (5 cols) */}
                  <div className="col-span-5 bg-gradient-to-r from-red-50/40 via-white to-red-50/20 p-5 sm:p-6 flex items-center">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm sm:text-base font-black text-gray-950 leading-tight">
                          {row.idsTitle}
                        </h4>
                        <p className="text-xs sm:text-[13px] text-gray-600 font-medium leading-relaxed mt-1">
                          {row.idsDesc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── BEAUTIFIED MOBILE SLIDER ─── */}
        <div className="md:hidden mt-8 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4">
          <div className="flex gap-4 w-max">
            {rows.map((row, index) => {
              const Icon = row.icon;
              return (
                <div
                  key={index}
                  className="w-[84vw] max-w-[340px] bg-white border border-gray-200/90 hover:border-red-600/40 rounded-2xl shadow-sm overflow-hidden flex flex-col justify-between flex-shrink-0 transition-all"
                >
                  {/* Category Header */}
                  <div className="p-4 border-b border-gray-100 bg-stone-50 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-wider text-gray-900">
                      {row.title}
                    </span>
                  </div>

                  {/* Conventional Institutes */}
                  <div className="p-4 bg-white">
                    <div className="flex items-center gap-1.5 text-[10.5px] font-bold text-gray-400 uppercase tracking-wide mb-1.5">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>Conventional Institutes</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-gray-500 font-medium leading-relaxed">
                        {row.other}
                      </p>
                    </div>
                  </div>

                  {/* IDS Advantage */}
                  <div className="p-4 bg-red-50/60 border-t-2 border-red-600/30">
                    <div className="flex items-center gap-1.5 text-[10.5px] font-black text-red-600 uppercase tracking-wide mb-1.5">
                      <span className="w-4 h-4 rounded-full bg-red-600 text-white flex items-center justify-center text-[9px] font-black">
                        ✓
                      </span>
                      <span>The IDS Advantage</span>
                    </div>
                    <h4 className="text-xs font-black text-gray-950 leading-tight">
                      {row.idsTitle}
                    </h4>
                    <p className="text-[11.5px] text-gray-600 font-medium leading-relaxed mt-1">
                      {row.idsDesc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-center text-[11px] font-mono font-bold text-gray-400 uppercase tracking-wider mt-4">
            ← SWIPE TO COMPARE ALL PILLARS →
          </p>
        </div>
      </div>
    </section>
  );
}
