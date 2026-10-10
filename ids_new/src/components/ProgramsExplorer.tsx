"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  X,
  CheckCircle2,
} from "lucide-react";

interface ProgramCard {
  title: string;
  subtitle: string;
  image: string;
  logos: string[];
  certification: string;
  duration: string;
  href: string;
}

export default function ProgramsExplorer() {
  const [activeTab, setActiveTab] = useState("marketing");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Syllabus Modal State
  const [selectedProgram, setSelectedProgram] = useState<ProgramCard | null>(null);
  const [syllabusSubmitted, setSyllabusSubmitted] = useState(false);
  const [syllabusForm, setSyllabusForm] = useState({ name: "", phone: "", email: "" });

  const tabs = [
    { id: "marketing", label: "Digital Marketing" },
  ];

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    const timer = setTimeout(checkScroll, 150);
    return () => {
      window.removeEventListener("resize", checkScroll);
      clearTimeout(timer);
    };
  }, [activeTab]);

  const programs: Record<string, ProgramCard[]> = {
    marketing: [
      {
        title: "Master in Digital Marketing Course",
        subtitle: "NSDC & MSME Approved",
        image: "/assets/courses/master_marketing.jpg",
        logos: ["nsdc", "msme"],
        certification: "Certification",
        duration: "6 Months",
        href: "/courses/master-in-digital-marketing",
      },
      {
        title: "Digital Marketing Specialist Course",
        subtitle: "Google & Meta Certified",
        image: "/assets/courses/specialist_marketing.jpg",
        logos: ["google", "meta"],
        certification: "Certification",
        duration: "3 Months",
        href: "/courses/digital-marketing-specialist",
      },
      {
        title: "Digital Marketing Course for Business Owners",
        subtitle: "IDS Executive & 1:1 Mentorship",
        image: "/assets/courses/business_owners.jpg",
        logos: ["msme", "microsoft"],
        certification: "Certification",
        duration: "Customised Timeline",
        href: "/courses/digital-marketing-for-business-owners",
      },
      {
        title: "Customised Course in Digital Marketing",
        subtitle: "Tailored Pace & Industry Mentorship",
        image: "/assets/courses/customised_marketing.jpg",
        logos: ["google", "adobe"],
        certification: "Certification",
        duration: "Flexible Timeline",
        href: "/courses/customised-course-in-digital-marketing",
      },
    ],
  };

  // Helper to render partner logos inside the top image's bottom-right cutout notch
  const renderLogos = (logos: string[]) => {
    return (
      <div className="flex items-center gap-2">
        {logos.includes("nsdc") && (
          <div className="relative w-7 h-6 flex items-center justify-center shrink-0">
            <Image
              src="/svg/logo_nsdc.svg"
              alt="NSDC"
              width={24}
              height={24}
              className="object-contain"
            />
          </div>
        )}
        {logos.includes("msme") && (
          <div className="relative w-7 h-6 flex items-center justify-center shrink-0">
            <Image
              src="/assets/MSME_logo.jpg"
              alt="MSME"
              width={26}
              height={20}
              className="object-contain"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        )}
        {logos.includes("google") && (
          <div className="flex items-center justify-center w-5 h-5 shrink-0">
            <svg className="w-4.5 h-4.5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"/>
              <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
            </svg>
          </div>
        )}
        {logos.includes("meta") && (
          <div className="flex items-center justify-center w-6 h-5 shrink-0">
            <svg className="w-5.5 h-4.5" viewBox="0 0 24 24" fill="#0081FB">
              <path d="M16.99 3.25c-2.4 0-4.04 1.63-4.99 3.01-.95-1.38-2.59-3.01-4.99-3.01C3.04 3.25 0 6.64 0 11.23c0 4.63 3.07 8.02 6.99 8.02 2.51 0 4.23-1.63 5.01-2.98.78 1.35 2.5 2.98 5.01 2.98 3.92 0 6.99-3.39 6.99-8.02 0-4.59-3.04-7.98-7.01-7.98zm-10 13.9c-2.6 0-4.54-2.44-4.54-5.92 0-3.52 1.94-5.96 4.54-5.96 2.11 0 3.65 1.76 4.3 3.51-.7 2.02-2.02 8.37-4.3 8.37zm10.02 0c-2.28 0-3.6-6.35-4.3-8.37.65-1.75 2.19-3.51 4.3-3.51 2.6 0 4.54 2.44 4.54 5.96 0 3.48-1.94 5.92-4.54 5.92z"/>
            </svg>
          </div>
        )}
        {logos.includes("microsoft") && (
          <div className="flex items-center justify-center w-5 h-5 shrink-0">
            <svg className="w-4.5 h-4.5" viewBox="0 0 24 24">
              <rect x="2" y="2" width="9" height="9" fill="#F25022"/>
              <rect x="13" y="2" width="9" height="9" fill="#7FBA00"/>
              <rect x="2" y="13" width="9" height="9" fill="#00A4EF"/>
              <rect x="13" y="13" width="9" height="9" fill="#FFB900"/>
            </svg>
          </div>
        )}
        {logos.includes("adobe") && (
          <div className="flex items-center justify-center w-5 h-5 shrink-0">
            <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="#FF0000">
              <path d="M13.96 3h8.04v18h-4.8l-3.24-8.8zm-3.92 0h-8.04v18h4.8l3.24-8.8zm1.96 7.4l3.52 9.6h-3.48l-1.4-3.88h-3.2l2.56-5.72z"/>
            </svg>
          </div>
        )}
      </div>
    );
  };

  const handleSyllabusSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSyllabusSubmitted(true);
    setTimeout(() => {
      setSelectedProgram(null);
      setSyllabusSubmitted(false);
      setSyllabusForm({ name: "", phone: "", email: "" });
    }, 2200);
  };

  return (
    <section id="programs" className="py-16 md:py-24 bg-slate-50/60 font-sans relative overflow-hidden">
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-slate-900 tracking-tight">
            Explore Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fe4759] to-[#d02e40]">
              Professional Programs
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Upskill with real-world projects and mentorship. Choose a path that fits
            your career goals with accredited certifications.
          </p>
        </div>

        {/* Category Tabs Pill Bar */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-10">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? "bg-[#fe4759] text-white shadow-md shadow-[#fe4759]/30"
                    : "bg-white hover:bg-slate-100 text-slate-600 border border-slate-200"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Full-Bleed Carousel Container - Extreme Left to Extreme Right */}
      <div className="relative w-full group/programs px-0 mt-2">
        
        {/* Left Arrow Button (Floats in the Left Margin Gap) */}
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          aria-label="Previous Programs"
          className={`absolute left-2 sm:left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-30 h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-white shadow-xl border border-slate-200/90 flex items-center justify-center text-slate-700 hover:text-white hover:bg-[#fe4759] hover:border-[#fe4759] hover:scale-105 transition-all cursor-pointer ${
            !canScrollLeft ? "opacity-0 pointer-events-none" : "opacity-95 hover:opacity-100"
          }`}
        >
          <ChevronLeft className="w-5 h-5 -ml-0.5 stroke-[2.5]" />
        </button>

        {/* Right Arrow Button (At Extreme Right) */}
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          aria-label="Next Programs"
          className={`absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-white/95 backdrop-blur-xs shadow-xl border border-slate-200/90 flex items-center justify-center text-slate-700 hover:text-white hover:bg-[#fe4759] hover:border-[#fe4759] hover:scale-105 transition-all cursor-pointer ${
            !canScrollRight ? "opacity-0 pointer-events-none" : "opacity-95 hover:opacity-100"
          }`}
        >
          <ChevronRight className="w-5 h-5 -mr-0.5 stroke-[2.5]" />
        </button>

        {/* Scrollable Container - Generous Padding at Start (Left), 0 Margin at Extreme Right */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          style={{
            paddingLeft: "clamp(2.5rem, 7vw, 7rem)",
            scrollPaddingLeft: "clamp(2.5rem, 7vw, 7rem)",
            paddingRight: "0px",
            scrollPaddingRight: "0px",
          }}
          className="flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-none pb-8 pt-3"
        >
          {programs[activeTab]?.map((program, idx) => (
            <div
              key={idx}
              className="w-[285px] sm:w-[310px] lg:w-[320px] xl:w-[325px] shrink-0 snap-start bg-white rounded-[24px] sm:rounded-[26px] border border-slate-200/80 shadow-[0_4px_25px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
                {/* 1. Top Image Banner with Bottom-Right Logo Notch */}
                <div className="relative w-full h-[175px] sm:h-[185px] overflow-hidden bg-slate-100">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    sizes="(max-width: 640px) 285px, 325px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Clean White Cutout Notch in Bottom-Right Corner matching reference */}
                  <div className="absolute bottom-0 right-0 bg-white rounded-tl-[20px] px-3 py-1.5 flex items-center gap-2 z-10 shadow-xs border-t border-l border-slate-100/60">
                    {renderLogos(program.logos)}
                  </div>
                </div>

                {/* 2. Card Body Content matching exact screenshot */}
                <div className="p-4.5 sm:p-5 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Subtitle / Institution */}
                    <p className="text-[12.5px] sm:text-[13px] font-medium text-slate-500 mb-1.5 tracking-normal">
                      {program.subtitle}
                    </p>

                    {/* Program Title */}
                    <h3 className="text-[16px] sm:text-[17px] font-bold text-slate-900 leading-[1.3] mb-4 min-h-[44px] flex items-start">
                      <Link href={program.href} className="hover:text-[#fe4759] transition-colors line-clamp-2">
                        {program.title}
                      </Link>
                    </h3>

                    {/* Metadata Specs (Certification & Duration) */}
                    <div className="space-y-2.5 mb-5 text-[13px] sm:text-[13.5px] font-medium text-slate-700">
                      {/* Spec 1: Certification */}
                      <div className="flex items-center gap-2.5">
                        <svg
                          viewBox="0 0 24 24"
                          className="w-4.5 h-4.5 text-slate-600 stroke-current fill-none stroke-[1.8] shrink-0"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="2" y="3" width="16" height="12" rx="2" />
                          <path d="M6 7h8M6 10h5" />
                          <circle cx="16" cy="15" r="3" />
                          <path d="M15 18l1 3 2-1.5" />
                        </svg>
                        <span>{program.certification}</span>
                      </div>

                      {/* Spec 2: Duration */}
                      <div className="flex items-center gap-2.5">
                        <Calendar className="w-4.5 h-4.5 text-slate-600 stroke-[1.8] shrink-0" />
                        <span>{program.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* 3. Dual Action Pill Buttons matching exact screenshot */}
                  <div className="flex items-center gap-2.5 pt-1 mt-auto">
                    {/* View Program Outlined Button */}
                    <Link
                      href={program.href}
                      className="flex-1 py-2 sm:py-2.5 px-3 rounded-full border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-[13px] text-center transition-all shadow-xs"
                    >
                      View Program
                    </Link>

                    {/* Download Syllabus Red Pill Button */}
                    <button
                      onClick={() => setSelectedProgram(program)}
                      className="flex-1 py-2 sm:py-2.5 px-3 rounded-full bg-[#fe4759] hover:bg-[#e03447] text-white font-bold text-xs sm:text-[13px] text-center transition-all shadow-md shadow-[#fe4759]/25 hover:shadow-lg hover:scale-[1.02] flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="w-3.5 h-3.5 stroke-current fill-none stroke-[2.5]"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 3v13m0 0l-4-4m4 4l4-4M5 20h14" />
                      </svg>
                      <span>Syllabus</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      {/* Syllabus Download Dialog Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedProgram(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center mx-auto mb-3 text-[#fe4759]">
                <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-current fill-none stroke-[2.2]" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3v13m0 0l-4-4m4 4l4-4M5 20h14" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                Download Syllabus
              </h3>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Get full curriculum breakdown, live project details & tools for{" "}
                <strong className="text-slate-800 font-semibold">{selectedProgram.title}</strong>
              </p>
            </div>

            <form onSubmit={handleSyllabusSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={syllabusForm.name}
                  onChange={(e) => setSyllabusForm({ ...syllabusForm, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#fe4759] focus:ring-2 focus:ring-[#fe4759]/10"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98765 43210"
                  value={syllabusForm.phone}
                  onChange={(e) => setSyllabusForm({ ...syllabusForm, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#fe4759] focus:ring-2 focus:ring-[#fe4759]/10"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. rahul@gmail.com"
                  value={syllabusForm.email}
                  onChange={(e) => setSyllabusForm({ ...syllabusForm, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#fe4759] focus:ring-2 focus:ring-[#fe4759]/10"
                />
              </div>

              <button
                type="submit"
                disabled={syllabusSubmitted}
                className="w-full py-3 px-5 rounded-full bg-[#fe4759] hover:bg-[#e03447] text-white font-bold text-sm shadow-md shadow-[#fe4759]/25 hover:shadow-lg transition-all flex items-center justify-center gap-2 mt-2 cursor-pointer"
              >
                {syllabusSubmitted ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span>Syllabus Sent Successfully!</span>
                  </>
                ) : (
                  <>
                    <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3v13m0 0l-4-4m4 4l4-4M5 20h14" />
                    </svg>
                    <span>Download Syllabus PDF</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
