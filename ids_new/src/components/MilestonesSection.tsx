"use client";

import {
  Award,
  Globe2,
  Laptop2,
  Users2,
  Presentation,
  GraduationCap,
  Briefcase,
  UserCheck,
  Building2,
  FolderGit2,
  Headphones,
  BookOpen,
} from "lucide-react";

export default function MilestonesSection() {
  const track1 = [
    {
      icon: Award,
      title: "100% Recognized Certifications",
      color: "text-[#fe4759] bg-[#fe4759]/10",
    },
    {
      icon: Globe2,
      title: "Active Corporate Placement Drives",
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      icon: Laptop2,
      title: "70%+ Hands On Experience",
      color: "text-purple-600 bg-purple-50",
    },
    {
      icon: Users2,
      title: "12+ Yrs Expert Faculties",
      color: "text-amber-600 bg-amber-50",
    },
    {
      icon: Briefcase,
      title: "Dedicated Placement Assistance",
      color: "text-[#fe4759] bg-[#fe4759]/10",
    },
    {
      icon: GraduationCap,
      title: "Practical Project-Based Learning",
      color: "text-rose-600 bg-rose-50",
    },
  ];

  const track2 = [
    {
      icon: Presentation,
      title: "Interactive Live Masterclasses",
      color: "text-sky-600 bg-sky-50",
    },
    {
      icon: UserCheck,
      title: "Direct 1-on-1 Mentorship",
      color: "text-[#fe4759] bg-[#fe4759]/10",
    },
    {
      icon: Building2,
      title: "Top Hiring Partner Network",
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      icon: FolderGit2,
      title: "20+ Portfolio-Ready Projects",
      color: "text-purple-600 bg-purple-50",
    },
    {
      icon: Headphones,
      title: "Dedicated Learning Support",
      color: "text-amber-600 bg-amber-50",
    },
    {
      icon: BookOpen,
      title: "Lifetime LMS & Resource Access",
      color: "text-indigo-600 bg-indigo-50",
    },
  ];

  return (
    <section id="milestones" className="py-16 md:py-24 bg-slate-50/50 font-sans relative overflow-hidden border-t border-slate-100">
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight">
            The IDS{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fe4759] to-[#d02e40]">
              Learning Advantage
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Core pillars and industry standards designed to give you hands-on experience,
            direct mentorship, and career readiness at every stage.
          </p>
        </div>

      </div>

      {/* Infinite Carousel Bars Container with Gradient Edge Masks */}
      <div className="relative w-full overflow-hidden space-y-5">
        
        {/* Left & Right Smooth Edge Fade Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-slate-50/90 via-slate-50/60 to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-slate-50/90 via-slate-50/60 to-transparent z-10"></div>

        {/* Track 1: Infinite Marquee Scrolling Left */}
        <div className="flex w-max animate-marquee">
          {[...track1, ...track1, ...track1].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="mx-2.5 sm:mx-3 px-5 sm:px-6 py-3.5 sm:py-4 rounded-full bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-[#fe4759]/50 transition-all flex items-center gap-3.5 whitespace-nowrap cursor-default group"
              >
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full ${item.color} flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-5 h-5 stroke-[2.2]" />
                </div>
                <span className="text-sm sm:text-[15px] font-black text-slate-800 tracking-tight">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* Track 2: Infinite Marquee Scrolling Right */}
        <div className="flex w-max animate-marquee-reverse">
          {[...track2, ...track2, ...track2].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="mx-2.5 sm:mx-3 px-5 sm:px-6 py-3.5 sm:py-4 rounded-full bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-[#fe4759]/50 transition-all flex items-center gap-3.5 whitespace-nowrap cursor-default group"
              >
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full ${item.color} flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-5 h-5 stroke-[2.2]" />
                </div>
                <span className="text-sm sm:text-[15px] font-black text-slate-800 tracking-tight">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
