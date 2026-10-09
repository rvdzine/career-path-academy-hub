"use client";

import Image from "next/image";
import {
  GraduationCap,
  TrendingUp,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: "/svg/tuition.svg",
      title: "Industry Experienced Mentors",
    },
    {
      icon: "/svg/job_seeker.svg",
      title: "Dedicated Placement Assistance",
    },
    {
      icon: "/svg/why_lms.svg",
      title: "Lifetime LMS Access",
    },
    {
      icon: "/svg/ph_certificate.svg",
      title: "Industry Recognized Certifications",
    },
    {
      icon: "/svg/notepad_user.svg",
      title: "Resume & Mock Interviews",
    },
    {
      icon: "/svg/purposeful_man.svg",
      title: "Direct Mentorship with Faculty",
    },
    {
      icon: "/svg/users_community.svg",
      title: "24*7 Learning Support",
    },
    {
      icon: "/svg/group_projects.svg",
      title: "Portfolio Building",
    },
    {
      icon: "/svg/classroom.svg",
      title: "Live Interactive Trainings",
    },
    {
      icon: "/svg/why_assignments.svg",
      title: "Practical Assignments",
    },
  ];

  const renderCard = (feat: (typeof features)[0], idx: number) => (
    <div
      key={idx}
      className="bg-white border border-slate-200/80 hover:border-rose-200/90 rounded-[26px] p-5 sm:p-6 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-lg hover:shadow-rose-500/[0.06] hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 group cursor-default"
    >
      {/* Bolder Illustration Icon (No Background) */}
      <div className="relative w-12 h-12 sm:w-13 sm:h-13 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
        <Image
          src={feat.icon}
          alt={feat.title}
          width={48}
          height={48}
          className="w-full h-full object-contain filter drop-shadow-[0_0_0.75px_#fe4759] drop-shadow-[0_2px_6px_rgba(254,71,89,0.18)]"
          unoptimized
        />
      </div>

      {/* Text Content */}
      <h4 className="text-sm sm:text-[15px] font-extrabold text-slate-800 tracking-tight leading-snug group-hover:text-[#fe4759] transition-colors">
        {feat.title}
      </h4>
    </div>
  );

  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-white font-sans relative overflow-hidden">
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-3">
          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight">
            Why Students{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fe4759] to-[#d82a3d]">
              Choose Us
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            A high-octane learning ecosystem designed to bridge the gap between academic theory and
            high-paying tech careers.
          </p>
        </div>

        {/* Bento Grid: 4 Columns Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          
          {/* 1. Large Feature Card: 10+ Years of Excellence (Spans 2 cols & 2 rows) */}
          <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-[#fe4759] via-[#eb384c] to-[#d82a3d] rounded-[30px] p-7 sm:p-9 text-white shadow-xl shadow-[#fe4759]/20 flex flex-col justify-between relative overflow-hidden group">
            
            {/* Background Giant Watermark Cap Icon */}
            <div className="absolute -right-6 -bottom-6 w-60 h-60 text-white/10 pointer-events-none group-hover:scale-110 transition-transform duration-700">
              <GraduationCap className="w-full h-full stroke-[1.2]" />
            </div>

            {/* Ambient Radial Highlight */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10">
              {/* Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10.5px] font-black uppercase tracking-wider shadow-xs">
                <span>★</span>
                <span>PIONEERING SINCE 2014</span>
              </div>

              {/* Main Bold Metric & Headline */}
              <div className="mt-5 mb-3">
                <div className="text-4xl sm:text-5xl lg:text-[54px] font-black text-white tracking-tight leading-none">
                  10+
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
                  Years of Excellence
                </div>
              </div>

              {/* Tagline */}
              <p className="text-white/95 text-base sm:text-[17px] font-bold leading-snug mb-2">
                Pioneering digital education since 2014.
              </p>

              {/* Body Text */}
              <p className="text-white/90 text-sm sm:text-[14px] font-normal leading-relaxed max-w-sm">
                Empowering careers through practical skills, live projects, and dedicated mentorship.
              </p>
            </div>

            {/* Bottom: Overlapping Student Avatars + Verified Badge */}
            <div className="flex items-center gap-4 pt-8 relative z-10">
              <div className="flex items-center -space-x-2.5">
                <div className="relative w-9 h-9 rounded-full border-2 border-white overflow-hidden shadow-sm">
                  <Image src="/alumni/shranya.jpg" alt="Alumni" fill sizes="36px" className="object-cover" />
                </div>
                <div className="relative w-9 h-9 rounded-full border-2 border-white overflow-hidden shadow-sm">
                  <Image src="/alumni/anushka.jpg" alt="Alumni" fill sizes="36px" className="object-cover" />
                </div>
                <div className="relative w-9 h-9 rounded-full border-2 border-white overflow-hidden shadow-sm">
                  <Image src="/alumni/mannat.jpg" alt="Alumni" fill sizes="36px" className="object-cover" />
                </div>
                <div className="relative w-9 h-9 rounded-full border-2 border-white overflow-hidden shadow-sm">
                  <Image src="/alumni/divyansh.jpg" alt="Alumni" fill sizes="36px" className="object-cover" />
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-white font-bold text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-300 fill-emerald-300/20 stroke-[2.5]" />
                <span>Trusted Learning Legacy</span>
              </div>
            </div>

          </div>

          {/* Cards 1 to 4 (Next to Large Card in Rows 1 & 2) */}
          {features.slice(0, 4).map(renderCard)}

          {/* Cards 5 to 8 (Row 3: Full 4 Columns) */}
          {features.slice(4, 8).map(renderCard)}

          {/* Cards 9 & 10 (Row 4: Columns 1 & 2) */}
          {features.slice(8, 10).map(renderCard)}

          {/* 11. CTA Card: Accelerate Your Career (Spans 2 columns on Bottom Right) */}
          <a
            href="#consultation"
            className="md:col-span-2 lg:col-span-2 bg-gradient-to-r from-[#fe4759] via-[#eb384c] to-[#d82a3d] rounded-[26px] p-5 sm:p-6 text-white shadow-xl shadow-[#fe4759]/20 flex items-center justify-between gap-4 group hover:shadow-2xl hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer relative overflow-hidden"
          >
            {/* Ambient pulse */}
            <div className="absolute right-0 top-0 w-44 h-44 bg-white/10 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>

            {/* Left Content */}
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shrink-0 shadow-inner">
                <TrendingUp className="w-6 h-6 stroke-[2.5]" />
              </div>

              <div>
                <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-white/80 block">
                  NEXT STEP
                </span>
                <span className="text-lg sm:text-xl font-black text-white tracking-tight leading-tight block">
                  Accelerate Your Career
                </span>
              </div>
            </div>

            {/* Right Action: White Circle with Diagonal Arrow */}
            <div className="w-12 h-12 rounded-full bg-white text-[#fe4759] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all shrink-0 relative z-10">
              <ArrowUpRight className="w-6 h-6 stroke-[2.5]" />
            </div>
          </a>

        </div>

      </div>
    </section>
  );
}
