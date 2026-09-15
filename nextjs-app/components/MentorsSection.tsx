"use client";

import Image from "next/image";
import { Building2, ShieldCheck, CheckCircle2, Sparkles, Award } from "lucide-react";

interface Mentor {
  name: string;
  role: string;
  company: string;
  experience: string;
  specialty: string;
  avatar: string;
  logo?: string;
}

const mentors: Mentor[] = [
  {
    name: "Ravi Verma",
    role: "Strategist Principal",
    experience: "12+ Yrs",
    company: "Physics Wallah",
    specialty: "Brand Strategy & Growth",
    avatar: "/assets/Ravi.jpg",
    logo: "/assets/pw.png",
  },
  {
    name: "Sweta Kushwaha",
    role: "Sr. Marketing Manager",
    experience: "8+ Yrs",
    company: "Amazon",
    specialty: "E-Commerce & Scaling",
    avatar: "/assets/sweta.jpg",
    logo: "/assets/amazon.jpg",
  },
  {
    name: "Deepanshi Kukreja",
    role: "Trainer & Growth Coach",
    experience: "8+ Yrs",
    company: "WsCube Tech",
    specialty: "Paid Media & Analytics",
    avatar: "/assets/deepanshi.jpeg",
    logo: "/assets/ws.jpg",
  },
  {
    name: "Suleman Khan",
    role: "Performance Specialist",
    experience: "9+ Yrs",
    company: "Mondelez",
    specialty: "Omni-Channel Marketing",
    avatar: "/assets/suleman.jpeg",
  },
  {
    name: "Jitender Singh",
    role: "Paid Ads & SEO Lead",
    experience: "7+ Yrs",
    company: "Mondelez",
    specialty: "Technical SEO & PPC",
    avatar: "/assets/jitender-singh.jpg",
  },
];

export default function MentorsSection() {
  return (
    <section className="relative w-full bg-white py-14 sm:py-18 lg:py-20 border-t border-gray-100 overflow-hidden">
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
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center justify-center gap-3 mb-2.5">
            <span className="block w-8 h-[2.5px] bg-red-600 rounded-full" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-red-600">
              Industry Practitioners // Learn From The Best
            </span>
            <span className="block w-8 h-[2.5px] bg-red-600 rounded-full" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-950 tracking-tight leading-[1.12]">
            Meet Your <span className="text-red-600">Industry Mentors</span>
          </h2>

          <p className="mt-2.5 text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Get trained directly by senior marketing leads managing multi-crore budgets across top global brands and fast-growth agencies.
          </p>
        </div>

        {/* ─── 5-COLUMN COMPACT MENTORS GRID ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 items-stretch">
          {mentors.map((mentor, idx) => (
            <div
              key={idx}
              className="group bg-white border border-gray-200/90 hover:border-red-600/40 rounded-2xl p-3.5 flex flex-col justify-between shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div>
                {/* PHOTO STAGE (Compact, Natural Framing) */}
                <div className="relative w-full h-36 sm:h-40 rounded-xl overflow-hidden bg-stone-100 mb-3 border border-gray-100/80">
                  <Image
                    src={mentor.avatar}
                    alt={`${mentor.name} - ${mentor.role}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 220px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Top Floating Experience Badge */}
                  <div className="absolute top-2 right-2 z-10">
                    <span className="bg-gray-950/75 backdrop-blur-md text-white text-[9.5px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full shadow-xs">
                      {mentor.experience}
                    </span>
                  </div>

                  {/* Top Left Red Pill */}
                  <div className="absolute top-2 left-2 z-10">
                    <span className="bg-red-600 text-white text-[8.5px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-md shadow-xs">
                      Mentor
                    </span>
                  </div>
                </div>

                {/* Name & Role */}
                <h3 className="font-black text-base text-gray-950 group-hover:text-red-600 transition-colors leading-tight truncate">
                  {mentor.name}
                </h3>

                <p className="text-[11.5px] font-bold text-gray-500 leading-snug mt-0.5 truncate">
                  {mentor.role}
                </p>

                {/* Specialization Tag */}
                <p className="text-[10px] font-semibold text-red-600 bg-red-50/80 border border-red-100 rounded-md px-2 py-0.5 mt-2 truncate">
                  {mentor.specialty}
                </p>
              </div>

              {/* Company Stage */}
              <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 min-w-0">
                  <Building2 className="w-3 h-3 text-red-600 flex-shrink-0" />
                  <span className="text-xs font-bold text-gray-800 truncate">
                    {mentor.company}
                  </span>
                </div>

                {mentor.logo && (
                  <div className="w-6 h-6 rounded-md bg-stone-50 border border-gray-200/80 p-0.5 flex items-center justify-center flex-shrink-0">
                    <Image
                      src={mentor.logo}
                      alt={`${mentor.company} logo`}
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ─── BOTTOM MENTORSHIP VALUE RIBBON ─── */}
        <div className="mt-10 pt-5 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3.5 text-center">
          <div className="bg-stone-50 border border-gray-200/80 rounded-xl p-2.5 sm:p-3 flex items-center justify-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-red-600 flex-shrink-0" />
            <span className="text-xs font-black text-gray-900">1-on-1 Portfolio Reviews</span>
          </div>

          <div className="bg-stone-50 border border-gray-200/80 rounded-xl p-2.5 sm:p-3 flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-red-600 flex-shrink-0" />
            <span className="text-xs font-black text-gray-900">Live Campaign Audits</span>
          </div>

          <div className="bg-stone-50 border border-gray-200/80 rounded-xl p-2.5 sm:p-3 flex items-center justify-center gap-2">
            <Award className="w-3.5 h-3.5 text-red-600 flex-shrink-0" />
            <span className="text-xs font-black text-gray-900">Direct Agency Referrals</span>
          </div>

          <div className="bg-stone-50 border border-gray-200/80 rounded-xl p-2.5 sm:p-3 flex items-center justify-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-red-600 flex-shrink-0" />
            <span className="text-xs font-black text-gray-900">Weekly Live Q&A / AMA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
