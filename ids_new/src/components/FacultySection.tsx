"use client";

import Image from "next/image";

export default function FacultySection() {
  const mentors = [
    {
      name: "Deepanshu Jaiswal",
      role: "COO & Senior Mentor",
      photo: "/mentors/deepanshu.jpg",
    },
    {
      name: "Ravi Verma",
      role: "Strategist Principal",
      photo: "/mentors/Ravi.jpg",
    },
    {
      name: "Aman Saxena",
      role: "AI & Growth Mentor",
      photo: "/mentors/aman.jpg",
    },
    {
      name: "Suleman",
      role: "Performance Specialist",
      photo: "/mentors/suleman.jpg",
    },
  ];

  return (
    <section id="faculty" className="py-16 md:py-24 bg-slate-50/50 font-sans relative overflow-hidden border-t border-slate-100">
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-3">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight">
            Backed By{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fe4759] to-[#d02e40]">
              Experienced Industry Mentors
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Get mentored by top-tier professionals dedicated to bridging the gap between theoretical
            knowledge and practical execution.
          </p>
        </div>

        {/* 4 Mentor Cards Grid - 2 Cols on Mobile, 4 Cols on Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-6 max-w-6xl mx-auto items-stretch">
          {mentors.map((mentor, idx) => (
            <div
              key={idx}
              className="relative aspect-[3/4] sm:aspect-[4/5] w-full mx-auto rounded-[18px] sm:rounded-[24px] md:rounded-[26px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-2xl hover:shadow-rose-500/20 hover:-translate-y-2 transition-all duration-500 group flex flex-col justify-end border border-slate-200/80 hover:border-[#fe4759]/60"
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
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 via-50% to-transparent pointer-events-none group-hover:from-black transition-all duration-300" />

              {/* Mentor Info Overlay */}
              <div className="relative z-10 p-3 sm:p-4 md:p-5 flex flex-col">
                <h3 className="text-sm sm:text-base md:text-lg font-bold sm:font-extrabold text-white tracking-tight leading-snug drop-shadow-md group-hover:text-white transition-colors line-clamp-1 sm:line-clamp-none">
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
    </section>
  );
}
