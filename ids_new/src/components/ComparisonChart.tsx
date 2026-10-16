"use client";

import {
  BookOpen,
  Laptop,
  Users,
  FolderGit2,
  Briefcase,
  CheckCircle2,
  XCircle,
  Sparkles,
  ArrowRight,
  Check,
  X,
  Zap,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

export default function ComparisonChart() {
  const comparisonData = [
    {
      pillar: "Curriculum & Tech",
      tag: "AI & Tech Stack",
      icon: BookOpen,
      conventional:
        "Stuck in outdated textbook theory with zero real AI workflows or modern analytics tools.",
      ids: {
        title: "Built for Today’s AI-Driven World",
        description:
          "Constantly updated with live Meta algorithms, GA4 event tracking, Performance Max & generative AI automations.",
        badge: "Updated Weekly",
      },
    },
    {
      pillar: "Teaching Approach",
      tag: "Execution Model",
      icon: Laptop,
      conventional:
        "Passive classroom listening, memorizing outdated slide decks with zero live ad budget execution.",
      ids: {
        title: "Do. Build. Execute with Live Capital",
        description:
          "100% practical simulator and live ad campaigns where you spend real money and optimize for positive ROAS.",
        badge: "Real Ad Budgets",
      },
    },
    {
      pillar: "Faculty & Mentors",
      tag: "Leadership",
      icon: Users,
      conventional:
        "Academic teachers and generalist trainers with limited real-world corporate marketing experience.",
      ids: {
        title: "Practitioners Managing Crores in Ad Spend",
        description:
          "Mentored by active VPs, COOs, and Growth Leads from top tech enterprises (Amazon, Physics Wallah, IDS).",
        badge: "Top 1% Industry Leads",
      },
    },
    {
      pillar: "Assignments & Projects",
      tag: "Work Experience",
      icon: FolderGit2,
      conventional:
        "Dummy hypothetical paperwork and generic MCQ quizzes with zero employer credibility.",
      ids: {
        title: "Production-Grade Client Case Studies",
        description:
          "Full-funnel SEO technical audits, live ad setups, ROI dashboards, and pitch-ready growth roadmaps.",
        badge: "Portfolio-Grade Work",
      },
    },
    {
      pillar: "Career Readiness",
      tag: "Placements",
      icon: Briefcase,
      conventional:
        "Unverified mass email forwarding to public job boards with zero personalized portfolio feedback.",
      ids: {
        title: "Guaranteed Interview Pipeline & 1:1 Prep",
        description:
          "Direct access to 300+ hiring partners, rigorous mock interview rounds, and personalized resume reviews.",
        badge: "300+ Hiring Partners",
      },
    },
  ];

  return (
    <section id="comparison" className="py-16 md:py-24 bg-slate-50/50 font-sans relative overflow-hidden border-t border-slate-100">
      {/* Ambient Decorative Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-rose-100/40 via-red-50/30 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="relative z-10 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200/80 mb-3.5 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#fe4759] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#fe4759]">
              The IDS Pedagogy Difference
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            See How IDS Transforms Digital Careers
            <br className="hidden sm:inline" />
            {" "}With{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fe4759] to-[#d02e40]">
              Industry-First Learning
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Compare the practical, agency-driven training at IDS against traditional textbook-heavy institutes.
          </p>
        </div>

        {/* ============================================================== */}
        {/* DESKTOP & TABLET MODERN TABULAR VIEW (md and above) */}
        {/* ============================================================== */}
        <div className="hidden md:block relative bg-white rounded-3xl border border-slate-200/80 shadow-[0_10px_40px_rgba(0,0,0,0.04)] overflow-hidden">
          
          {/* Table Header Row */}
          <div className="grid grid-cols-12 items-stretch border-b border-slate-100">
            {/* Col 1: Pillar Header */}
            <div className="col-span-3 px-6 py-5 bg-slate-50/80 flex items-center">
              <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                Training Dimension
              </span>
            </div>

            {/* Col 2: Conventional Institutes */}
            <div className="col-span-4 px-6 py-5 bg-slate-50/50 border-l border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-slate-400 block">
                  Conventional Institutes
                </span>
                <span className="text-[11px] font-medium text-slate-500">
                  Theoretical & Passive
                </span>
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">
                <X className="w-3 h-3 text-slate-400 stroke-[2.5]" />
                Traditional
              </span>
            </div>

            {/* Col 3: The IDS Advantage (Hero Header) */}
            <div className="col-span-5 px-6 py-5 bg-gradient-to-r from-[#FFF5F6] via-[#FFF0F2] to-[#FFF5F6] border-l border-rose-200/80 flex items-center justify-between relative overflow-hidden">
              <div className="relative z-10 flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#fe4759] flex items-center justify-center text-white shadow-md shadow-rose-500/25">
                  <Sparkles className="w-4 h-4 fill-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-black text-slate-900 tracking-tight">
                      The IDS Advantage
                    </span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#fe4759] text-white text-[10px] font-extrabold uppercase tracking-wide">
                      Agency Model
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#fe4759]">
                    100% Practical & Placement-Focused
                  </span>
                </div>
              </div>

              <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-rose-200 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-[11px] font-bold text-slate-700">95% Placement Rate</span>
              </div>
            </div>
          </div>

          {/* Table Data Rows */}
          <div className="divide-y divide-slate-100">
            {comparisonData.map((item, idx) => {
              const PillarIcon = item.icon;
              return (
                <div
                  key={idx}
                  className="grid grid-cols-12 items-stretch transition-colors duration-200 hover:bg-slate-50/40 group"
                >
                  {/* Column 1: Pillar Name & Icon */}
                  <div className="col-span-3 px-6 py-5 flex items-center gap-3.5 bg-white group-hover:bg-slate-50/20">
                    <div className="w-9 h-9 rounded-xl bg-slate-100/90 text-slate-700 group-hover:bg-rose-50 group-hover:text-[#fe4759] flex items-center justify-center shrink-0 transition-colors">
                      <PillarIcon className="w-4.5 h-4.5 stroke-[2]" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        {item.tag}
                      </span>
                      <h3 className="font-extrabold text-slate-900 text-sm leading-snug group-hover:text-[#fe4759] transition-colors">
                        {item.pillar}
                      </h3>
                    </div>
                  </div>

                  {/* Column 2: Conventional Institutes */}
                  <div className="col-span-4 px-6 py-5 flex items-start gap-3 border-l border-slate-100 bg-slate-50/20">
                    <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                      {item.conventional}
                    </p>
                  </div>

                  {/* Column 3: The IDS Advantage (Highlighted Champion Column) */}
                  <div className="col-span-5 px-6 py-5 flex items-start gap-3.5 border-l border-rose-200/80 bg-gradient-to-r from-[#FFFBFB] to-white group-hover:from-[#FFF6F7] transition-colors">
                    <div className="w-5 h-5 rounded-full bg-[#fe4759] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm shadow-rose-500/30">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1">
                        <h4 className="font-extrabold text-slate-900 text-sm tracking-tight leading-snug">
                          {item.ids.title}
                        </h4>
                        <span className="text-[10px] font-bold text-[#fe4759] bg-[#FFF0F2] border border-[#fe4759]/20 px-2 py-0.5 rounded-full">
                          {item.ids.badge}
                        </span>
                      </div>
                      <p className="text-xs sm:text-[12.5px] text-slate-600 font-normal leading-relaxed">
                        {item.ids.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Table Summary Strip */}
          <div className="p-4 px-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="text-xs font-semibold text-slate-200">
                Experience real agency workflow before you even step into a corporate interview.
              </span>
            </div>
            <Link
              href="#programs"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#fe4759] hover:bg-[#e03a4c] px-4 py-2 rounded-full transition-all duration-200 shadow-md shadow-rose-500/20 shrink-0"
            >
              Explore Job-Ready Programs
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* ============================================================== */}
        {/* MOBILE CARDS VIEW (Under md) */}
        {/* ============================================================== */}
        <div className="block md:hidden space-y-4">
          {comparisonData.map((item, idx) => {
            const PillarIcon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden"
              >
                {/* Pillar Header */}
                <div className="p-3.5 px-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-rose-50 text-[#fe4759] flex items-center justify-center shrink-0">
                      <PillarIcon className="w-4 h-4 stroke-[2]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block leading-tight">
                        {item.tag}
                      </span>
                      <h3 className="font-extrabold text-slate-900 text-sm">
                        {item.pillar}
                      </h3>
                    </div>
                  </div>

                  <span className="text-[10px] font-bold text-[#fe4759] bg-[#FFF0F2] border border-[#fe4759]/20 px-2 py-0.5 rounded-full">
                    {item.ids.badge}
                  </span>
                </div>

                <div className="p-3.5 sm:p-4 space-y-3">
                  {/* Conventional Side */}
                  <div className="p-3 rounded-xl bg-slate-50/70 border border-slate-200/60 flex items-start gap-2.5">
                    <div className="w-4.5 h-4.5 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-0.5">
                        Conventional Institutes
                      </span>
                      <p className="text-xs text-slate-500 leading-relaxed font-normal">
                        {item.conventional}
                      </p>
                    </div>
                  </div>

                  {/* IDS Side */}
                  <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#FFF5F6] to-white border border-rose-200/80 flex items-start gap-2.5 shadow-2xs">
                    <div className="w-4.5 h-4.5 rounded-full bg-[#fe4759] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm shadow-rose-500/30">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span className="text-[10px] font-black uppercase tracking-wider text-[#fe4759]">
                          The IDS Advantage
                        </span>
                      </div>
                      <h4 className="font-extrabold text-slate-900 text-xs sm:text-[13px] leading-snug mb-1">
                        {item.ids.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {item.ids.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Mobile Bottom CTA */}
          <div className="pt-2 text-center">
            <Link
              href="#programs"
              className="inline-flex items-center justify-center gap-2 w-full text-xs font-bold text-white bg-[#fe4759] hover:bg-[#e03a4c] py-3 rounded-xl transition-all shadow-md shadow-rose-500/20"
            >
              Explore Job-Ready Programs
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

