"use client";

import Image from "next/image";

export default function FacultySection() {
  const mentors = [
    {
      name: "Deepanshu Jaiswal",
      role: "COO & Senior Mentor",
      photo: "/mentors/deepanshu.jpg",
      companyType: "ids",
      companyName: "IDS",
    },
    {
      name: "Ravi Verma",
      role: "Strategist Principal",
      photo: "/mentors/Ravi.jpg",
      companyType: "pw",
      companyName: "Physics Wallah",
    },
    {
      name: "Sweta Kushwaha",
      role: "Sr. Marketing Manager",
      photo: "/mentors/sweta.jpg",
      companyType: "amazon",
      companyName: "Amazon",
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

        {/* 3 Mentor Cards Grid - Clean Brand Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 max-w-4xl mx-auto items-stretch">
          {mentors.map((mentor, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[26px] p-4 sm:p-5 border border-slate-200/80 hover:border-[#fe4759]/40 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-xl hover:shadow-rose-500/[0.06] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo Container with rounded corners */}
                <div className="relative w-full aspect-square rounded-[20px] overflow-hidden bg-slate-100 border border-slate-100/80 shadow-xs">
                  <Image
                    src={mentor.photo}
                    alt={mentor.name}
                    fill
                    sizes="(max-width: 768px) 280px, 300px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Name + LinkedIn Icon */}
                <div className="mt-4 px-1">
                  <div className="flex items-center justify-between gap-1.5">
                    <h3 className="text-base sm:text-[17px] font-extrabold text-slate-900 tracking-tight leading-snug group-hover:text-[#fe4759] transition-colors">
                      {mentor.name}
                    </h3>
                    {/* LinkedIn Official Blue 'in' Icon */}
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-5 h-5 rounded-[5px] bg-[#0A66C2] text-white text-[10px] font-bold shrink-0 hover:opacity-90 transition-opacity shadow-2xs"
                      aria-label={`${mentor.name} LinkedIn Profile`}
                    >
                      in
                    </a>
                  </div>

                  {/* Role / Designation */}
                  <p className="text-xs font-semibold text-[#fe4759] mt-1 leading-tight">
                    {mentor.role}
                  </p>
                </div>
              </div>

              {/* Bottom Company Logo Badge Container */}
              <div className="mt-5 pt-3.5 border-t border-slate-100">
                <div className="h-9 px-4 rounded-xl bg-slate-50/80 group-hover:bg-[#FFF0F2] border border-slate-200/70 group-hover:border-[#fe4759]/20 flex items-center justify-center mx-auto w-fit min-w-[120px] transition-colors">
                  {mentor.companyType === "ids" && (
                    <div className="flex items-center justify-center">
                      <span className="font-black text-sm text-[#fe4759] tracking-tight">IDS</span>
                    </div>
                  )}

                  {mentor.companyType === "pw" && (
                    <div className="flex items-center justify-center">
                      <Image
                        src="/mentors/pw.png"
                        alt="Physics Wallah"
                        width={90}
                        height={20}
                        className="object-contain h-5 w-auto"
                      />
                    </div>
                  )}

                  {mentor.companyType === "amazon" && (
                    <div className="flex items-center justify-center">
                      <Image
                        src="/mentors/amazon.jpg"
                        alt="Amazon"
                        width={60}
                        height={18}
                        className="object-contain h-4 w-auto"
                      />
                    </div>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
