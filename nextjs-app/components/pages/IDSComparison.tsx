"use client";

import {
  BookOpen,
  Presentation,
  Users,
  ClipboardList,
  Briefcase,
  Check,
} from "lucide-react";

const rows = [
  {
    icon: <BookOpen className="text-red-500 w-6 h-6" />,
    title: "Curriculum",
    other: "Stuck in outdated theory.",
    idsTitle: "Built for Today’s Digital World",
    idsDesc: "Always updated, always industry-ready.",
  },
  {
    icon: <Presentation className="text-red-500 w-6 h-6" />,
    title: "Teaching Approach",
    other: "Listen, memorize, repeat.",
    idsTitle: "Do. Build. Execute.",
    idsDesc: "Hands-on projects, real tools, real outcomes.",
  },
  {
    icon: <Users className="text-red-500 w-6 h-6" />,
    title: "Faculty",
    other: "Limited industry exposure.",
    idsTitle: "Experts Who Do This Every Day",
    idsDesc: "Learn from marketers running real campaigns and real budgets.",
  },
  {
    icon: <ClipboardList className="text-red-500 w-6 h-6" />,
    title: "Assignments & Projects",
    other: "Written papers with no practical value.",
    idsTitle: "Work That Mirrors Real Jobs",
    idsDesc: "SEO audits, ad setups, analytics dashboards, live strategies.",
  },
  {
    icon: <Briefcase className="text-red-500 w-6 h-6" />,
    title: "Career Readiness",
    other: "Minimal industry connection.",
    idsTitle: "Skills That Get You Hired",
    idsDesc: "Portfolio-ready work, tool mastery, and interview preparation.",
  },
];

export default function IDSComparison() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* TOP TEXT */}
        <h2 className="text-3xl md:text-5xl font-bold text-center max-w-4xl mx-auto leading-tight">
          See how IDS transforms digital careers <br className="hidden md:block" />
          with practical, industry-first learning.
        </h2>

        {/* HEADERS (Desktop & Tab) */}
        <div className="hidden md:grid grid-cols-12 mt-20 items-end">
          <div className="col-span-7 bg-gray-100 text-2xl font-bold text-center py-6 rounded-t-2xl">
            Others
          </div>
          <div className="col-span-5 bg-red-600 text-white text-2xl font-semibold text-center py-6 rounded-t-2xl">
            IDS Advantage
          </div>
        </div>

        {/* TABLE – DESKTOP & TAB */}
        <div className="hidden md:block border border-gray-200 rounded-b-2xl overflow-hidden">
          {rows.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-12 border-t first:border-t-0"
            >
              {/* OTHERS */}
              <div className="col-span-7 px-6 py-8 flex items-center">
                <div className="grid grid-cols-7 w-full items-center">
                  <div className="col-span-3 flex items-center gap-4 font-medium">
                    {row.icon}
                    {row.title}
                  </div>
                  <div className="col-span-4 text-gray-600">
                    {row.other}
                  </div>
                </div>
              </div>

              {/* IDS ADVANTAGE */}
              <div className="col-span-5 bg-[#2b2b2b] text-white px-8 py-8 flex items-center">
                <div className="flex flex-col gap-1">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    {row.idsTitle}
                  </h4>
                  <p className="text-gray-300 mt-1 text-sm ml-[26px]">
                    {row.idsDesc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE SLIDER */}
        <div className="md:hidden mt-14 overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 w-max px-1">
            {rows.map((row, index) => (
              <div
                key={index}
                className="min-w-[85vw] bg-white border border-gray-200 rounded-2xl shadow-sm"
              >
                {/* OTHERS */}
                <div className="p-5">
                  <div className="flex items-center gap-3 font-semibold">
                    {row.icon}
                    {row.title}
                  </div>
                  <p className="text-gray-600 mt-2 text-sm">
                    {row.other}
                  </p>
                </div>

                {/* IDS ADVANTAGE */}
                <div className="bg-[#2b2b2b] text-white p-5 rounded-b-2xl">
                  <h4 className="font-semibold text-base flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    {row.idsTitle}
                  </h4>
                  <p className="text-gray-300 mt-2 text-sm ml-[26px]">
                    {row.idsDesc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-gray-400 mt-4">
            Swipe to compare →
          </p>
        </div>

      </div>
    </section>
  );
}
