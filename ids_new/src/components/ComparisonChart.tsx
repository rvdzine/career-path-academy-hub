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
} from "lucide-react";

export default function ComparisonChart() {
  const comparisonData = [
    {
      pillar: "Curriculum & Tech",
      icon: BookOpen,
      conventional:
        "Stuck in outdated textbook theory with zero real AI or analytics tools.",
      ids: {
        title: "Built for Today’s Digital World",
        description:
          "Always updated with live Meta algorithms, GA4, Performance Max & automation.",
      },
    },
    {
      pillar: "Teaching Approach",
      icon: Laptop,
      conventional:
        "Listen, memorize slides, repeat. Zero real budget execution.",
      ids: {
        title: "Do. Build. Execute.",
        description:
          "100% practical hands-on projects, real tools, real live ad outcomes.",
      },
    },
    {
      pillar: "Faculty & Mentors",
      icon: Users,
      conventional:
        "Academic teachers with limited corporate marketing exposure.",
      ids: {
        title: "Experts Who Do This Daily",
        description:
          "Mentored by active growth leads running real campaigns & multi-lakh budgets.",
      },
    },
    {
      pillar: "Assignments & Projects",
      icon: FolderGit2,
      conventional:
        "Theoretical paperwork with zero real-world employer value.",
      ids: {
        title: "Work That Mirrors Real Jobs",
        description:
          "SEO audits, live ad setups, analytics dashboards, and real client strategies.",
      },
    },
    {
      pillar: "Career Readiness",
      icon: Briefcase,
      conventional:
        "Minimal industry connection and unverified job board forwarding.",
      ids: {
        title: "Skills That Get You Hired",
        description:
          "Portfolio-ready case studies, tool mastery, and direct access to 300+ hiring partners.",
      },
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white font-sans relative overflow-hidden border-t border-slate-100">
      {/* Subtle Ambient Red Dot Pattern */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(#fe4759 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-5xl w-full mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="flex items-center justify-center gap-2.5 mb-2.5">
            <span className="block w-6 h-[2px] bg-[#fe4759] rounded-full" />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#fe4759]">
              PEDAGOGY COMPARISON // THE IDS DIFFERENCE
            </span>
            <span className="block w-6 h-[2px] bg-[#fe4759] rounded-full" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-slate-900 tracking-tight leading-[1.2] mb-2.5">
            See How IDS Transforms Digital Careers
            <br />
            With{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fe4759] to-[#d02e40]">
              Industry-First Learning
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-xl mx-auto">
            Compare the practical reality of our agency-led curriculum against conventional training institutes.
          </p>
        </div>

        {/* ============================================================== */}
        {/* DESKTOP TABLE VIEW (lg and above) */}
        {/* ============================================================== */}
        <div className="hidden lg:block relative bg-white rounded-2xl border border-slate-200/80 shadow-[0_4px_25px_rgba(0,0,0,0.02)] overflow-hidden">
          {/* Table Headers */}
          <div className="grid grid-cols-12 items-stretch border-b border-slate-200/80 bg-slate-50/70">
            {/* Col 1 Header */}
            <div className="col-span-3 px-5 py-3.5 flex items-center">
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                TRAINING PILLAR
              </span>
            </div>

            {/* Col 2 Header */}
            <div className="col-span-4 px-5 py-3.5 flex items-center border-l border-slate-200/60">
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                CONVENTIONAL INSTITUTES
              </span>
            </div>

            {/* Col 3 Header (Hero / The IDS Advantage) */}
            <div className="col-span-5 relative bg-gradient-to-r from-[#fe4759] to-[#eb384c] px-6 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                </span>
                <span className="text-sm font-extrabold text-white tracking-wide">
                  The IDS Advantage
                </span>
              </div>
              <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-xs border border-white/30 text-white text-[10px] font-black uppercase tracking-wider">
                <Sparkles className="w-3 h-3 fill-white text-white" />
                <span>95% Placed</span>
              </div>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-slate-100">
            {comparisonData.map((item, idx) => {
              const PillarIcon = item.icon;
              return (
                <div
                  key={idx}
                  className="grid grid-cols-12 items-stretch transition-colors duration-150 hover:bg-slate-50/40 group"
                >
                  {/* Col 1: Pillar (NO BACKGROUND ON ICON) */}
                  <div className="col-span-3 px-5 py-4 flex items-center gap-3">
                    <PillarIcon className="w-4 h-4 text-[#fe4759] stroke-[2] shrink-0" />
                    <span className="font-bold text-slate-900 text-xs sm:text-[13.5px] leading-snug">
                      {item.pillar}
                    </span>
                  </div>

                  {/* Col 2: Conventional Institutes (NO BACKGROUND ON ICON) */}
                  <div className="col-span-4 px-5 py-4 flex items-start gap-2.5 border-l border-slate-200/60 bg-slate-50/20">
                    <XCircle className="w-4 h-4 text-rose-400 stroke-[1.8] shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-600 font-normal leading-relaxed">
                      {item.conventional}
                    </p>
                  </div>

                  {/* Col 3: The IDS Advantage (NO BACKGROUND ON ICON) */}
                  <div className="col-span-5 px-6 py-4 flex items-start gap-2.5 bg-rose-50/20 border-l border-rose-200/50 group-hover:bg-rose-50/35 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-[#fe4759] stroke-[2] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-xs sm:text-[13.5px] tracking-tight leading-snug mb-0.5">
                        {item.ids.title}
                      </h4>
                      <p className="text-[11.5px] sm:text-xs text-slate-600 font-normal leading-relaxed">
                        {item.ids.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ============================================================== */}
        {/* MOBILE & TABLET CARD VIEW (Below lg) */}
        {/* ============================================================== */}
        <div className="block lg:hidden space-y-3">
          {comparisonData.map((item, idx) => {
            const PillarIcon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200/80 shadow-2xs overflow-hidden"
              >
                {/* Pillar Header Banner (NO BACKGROUND ON ICON) */}
                <div className="px-4 py-2.5 bg-slate-50/90 border-b border-slate-200/70 flex items-center gap-2.5">
                  <PillarIcon className="w-4 h-4 text-[#fe4759] stroke-[2] shrink-0" />
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                    {item.pillar}
                  </h3>
                </div>

                <div className="p-3 sm:p-4 space-y-2.5">
                  {/* Conventional Comparison (NO BACKGROUND ON ICON) */}
                  <div className="p-2.5 sm:p-3 rounded-lg bg-slate-50/70 border border-slate-200/60 flex items-start gap-2">
                    <XCircle className="w-3.5 h-3.5 text-rose-400 stroke-[1.8] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[9.5px] font-black uppercase tracking-wider text-slate-400 mb-0.5">
                        Conventional Institutes
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {item.conventional}
                      </p>
                    </div>
                  </div>

                  {/* IDS Advantage (NO BACKGROUND ON ICON) */}
                  <div className="p-2.5 sm:p-3 rounded-lg bg-rose-50/30 border border-rose-200/70 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#fe4759] stroke-[2] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[9.5px] font-black uppercase tracking-wider text-[#fe4759] mb-0.5">
                        The IDS Advantage
                      </span>
                      <h4 className="font-bold text-slate-900 text-xs mb-0.5 leading-snug">
                        {item.ids.title}
                      </h4>
                      <p className="text-[11.5px] text-slate-600 leading-relaxed font-normal">
                        {item.ids.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
