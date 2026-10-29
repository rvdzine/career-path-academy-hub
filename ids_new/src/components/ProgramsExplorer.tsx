"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, CheckCircle2, Loader2 } from "lucide-react";
import { contactApi } from "@/lib/api";

// ─── Types ──────────────────────────────────────────────────────────────────

interface ProgramFeature {
  icon: React.ReactNode;
  label: string;
}

interface ProgramCard {
  title: string;
  subtag?: string;
  description: string;
  badge: string;
  badgeIcon: React.ReactNode;
  badgeClass: string;
  image: string;
  features: ProgramFeature[];
  href: string;
  cardBg: string;
  titleColor: string;
  descColor: string;
  featureTextColor: string;
  iconBg: string;
  viewBtnClass: string;
  syllabusBtnClass: string;
  syllabusTextClass: string;
  uspBadges: React.ReactNode;
}

// ─── Icon helpers ────────────────────────────────────────────────────────────

const CertIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] shrink-0 stroke-current fill-none stroke-[1.9]" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 15l-2 5-3-1 2-4" /><path d="M12 15l2 5 3-1-2-4" />
    <circle cx="12" cy="9" r="6" /><path d="M9 9l2 2 4-4" />
  </svg>
);
const CalIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] shrink-0 stroke-current fill-none stroke-[1.9]" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);
const BarIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] shrink-0 stroke-current fill-none stroke-[1.9]" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 20V10M12 20V4M6 20v-6" />
  </svg>
);
const GoogleIcon = () => (
  <svg className="w-[18px] h-[18px] shrink-0" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"/>
    <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
  </svg>
);
const MetaIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-[21px] h-[21px] shrink-0"
    fill="none"
    stroke="#0081FB"
    strokeWidth="2.3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 10.174c1.766 -2.784 3.315 -4.174 4.648 -4.174c2 0 3.263 2.213 4 5.217c.704 2.869 .5 6.783 -2 6.783c-1.114 0 -2.648 -1.565 -4.148 -3.652a27.627 27.627 0 0 1 -2.5 -4.174" />
    <path d="M12 10.174c-1.766 -2.784 -3.315 -4.174 -4.648 -4.174c-2 0 -3.263 2.213 -4 5.217c-.704 2.869 -.5 6.783 2 6.783c1.114 0 2.648 -1.565 4.148 -3.652c1 -1.391 1.833 -2.783 2.5 -4.174" />
  </svg>
);
const MicrosoftIcon = () => (
  <svg className="w-[17px] h-[17px] shrink-0" viewBox="0 0 21 21">
    <rect x="1" y="1" width="9" height="9" fill="#F25022"/>
    <rect x="11" y="1" width="9" height="9" fill="#7FBA00"/>
    <rect x="1" y="11" width="9" height="9" fill="#00A4EF"/>
    <rect x="11" y="11" width="9" height="9" fill="#FFB900"/>
  </svg>
);
const HubspotIcon = () => (
  <svg className="w-[18px] h-[18px] shrink-0" viewBox="0 0 24 24" fill="#FF7A59">
    <path d="M18.164 7.93V5.084a2.198 2.198 0 001.267-1.978v-.067A2.2 2.2 0 0017.238.845h-.067a2.2 2.2 0 00-2.193 2.193v.067a2.196 2.196 0 001.252 1.973l.013.006v2.852a6.22 6.22 0 00-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 104.3 4.656l-.012.006 7.697 5.991a6.176 6.176 0 00-1.038 3.446c0 1.343.425 2.588 1.147 3.607l-.013-.02-2.342 2.343a1.968 1.968 0 00-.58-.095h-.002a2.033 2.033 0 102.033 2.033 1.978 1.978 0 00-.1-.595l.005.014 2.317-2.317a6.247 6.247 0 104.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 113.215-3.207v.002a3.206 3.206 0 01-3.207 3.207z"/>
  </svg>
);
const SkillIndiaIcon = () => (
  <div className="h-[20px] w-[20px] relative shrink-0">
    <Image
      src="/assets/skills_nsdc.svg"
      alt="Skill India"
      fill
      className="object-contain"
    />
  </div>
);
const MsmeIcon = () => (
  <div className="h-[18px] w-[34px] relative shrink-0">
    <Image
      src="/assets/MSME_logo.jpg"
      alt="MSME"
      fill
      className="object-contain"
    />
  </div>
);
const NsdcIcon = () => (
  <span className="text-[11.5px] font-black tracking-tight text-[#0f2c59] flex items-center gap-1 leading-none shrink-0">
    <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-[#0f2c59] via-[#ea580c] to-[#16a34a] shrink-0" />
    <span>NSDC</span>
  </span>
);
const MentorIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] shrink-0 stroke-current fill-none stroke-[1.9]" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M21 21v-2a4 4 0 0 0-3-3.87"/>
  </svg>
);
const BriefcaseIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] shrink-0 stroke-current fill-none stroke-[1.9]" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="12.01"/>
  </svg>
);
const TuneIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] shrink-0 stroke-current fill-none stroke-[1.9]" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/>
    <line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>
  </svg>
);

const TrophyIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 stroke-current fill-none stroke-[2]" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H3.5a2.5 2.5 0 0 0 0 5H6"/><path d="M18 9h2.5a2.5 2.5 0 0 1 0 5H18"/>
    <path d="M6 3h12v9a6 6 0 0 1-12 0V3z"/><path d="M12 18v3"/><path d="M8 21h8"/>
  </svg>
);
const StarIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 stroke-current fill-none stroke-[2]" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);
const PersonIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 stroke-current fill-none stroke-[2]" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);
const SlidersIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 stroke-current fill-none stroke-[2]" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/>
    <line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>
  </svg>
);
const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-current fill-none stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v13m0 0l-4-4m4 4l4-4M5 20h14" />
  </svg>
);


// ─── Component ───────────────────────────────────────────────────────────────

export default function ProgramsExplorer() {
  const [activeTab, setActiveTab] = useState("marketing");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Brochure Modal State
  const [selectedProgram, setSelectedProgram] = useState<ProgramCard | null>(null);
  const [syllabusSubmitted, setSyllabusSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [syllabusForm, setSyllabusForm] = useState({ name: "", phone: "", email: "" });

  const tabs = [{ id: "marketing", label: "Digital Marketing" }];

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -360 : 360,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    const t = setTimeout(checkScroll, 150);
    return () => { window.removeEventListener("resize", checkScroll); clearTimeout(t); };
  }, [activeTab]);

  // ── Program data ────────────────────────────────────────────────────────────
  const programs: Record<string, ProgramCard[]> = {
    marketing: [
      {
        title: "Master in Digital Marketing with AI & Automation",
        description:
          "Master AI-powered marketing, live client ad spends, SEO & guaranteed internship.",
        badge: "Most Popular",
        badgeIcon: <TrophyIcon />,
        badgeClass: "bg-[#fef3c7] text-[#92400e] border border-[#fde68a]",
        image: "/assets/courses/master_marketing_v2.jpg",
        cardBg: "bg-gradient-to-b from-white via-[#fffbfc] to-[#fff0f2] border border-rose-200/70 shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_35px_rgba(0,0,0,0.12)]",
        titleColor: "text-slate-900",
        descColor: "text-slate-500",
        featureTextColor: "text-slate-700",
        iconBg: "bg-rose-50 text-[#fe4759]",
        viewBtnClass: "bg-[#fe4759] hover:bg-[#e03447] text-white border-transparent shadow-sm shadow-[#fe4759]/25",
        syllabusBtnClass: "bg-[#fff1f2] hover:bg-[#ffe4e6] text-[#e11d48] border border-[#fecdd3]",
        syllabusTextClass: "text-[#e11d48]",
        features: [
          { icon: <CertIcon />, label: "Certification" },
          { icon: <CalIcon />, label: "6 Months" },
          { icon: <BriefcaseIcon />, label: "Guaranteed Internship" },
          { icon: <BarIcon />, label: "Live Projects & Tools Access" },
        ],
        href: "/courses/master-in-digital-marketing-with-ai-automation",
        uspBadges: (
          <>
            <NsdcIcon />
            <MsmeIcon />
          </>
        ),
      },
      {
        title: "Performance Marketing Mastery Program",
        description:
          "Meta Ads, Google Ads, LinkedIn Ads, AI Marketing, CRO, analytics telemetry, and CRM automation.",
        badge: "12 Weeks Sprint",
        badgeIcon: <GoogleIcon />,
        badgeClass: "bg-[#2563eb] text-white shadow-sm",
        image: "/assets/courses/specialist_marketing_v2.jpg",
        cardBg: "bg-gradient-to-b from-white via-[#fffbfc] to-[#fff0f2] border border-rose-200/70 shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_35px_rgba(0,0,0,0.12)]",
        titleColor: "text-slate-900",
        descColor: "text-slate-500",
        featureTextColor: "text-slate-700",
        iconBg: "bg-rose-50 text-[#fe4759]",
        viewBtnClass: "bg-[#fe4759] hover:bg-[#e03447] text-white border-transparent shadow-sm shadow-[#fe4759]/25",
        syllabusBtnClass: "bg-[#fff1f2] hover:bg-[#ffe4e6] text-[#e11d48] border border-[#fecdd3]",
        syllabusTextClass: "text-[#e11d48]",
        features: [
          { icon: <CertIcon />, label: "Certification" },
          { icon: <CalIcon />, label: "12 Weeks" },
          { icon: <BarIcon />, label: "7 Practical Projects" },
          { icon: <GoogleIcon />, label: "Meta & Google Certified" },
        ],
        href: "/courses/performance-marketing-mastery-program",
        uspBadges: (
          <>
            <GoogleIcon />
            <MetaIcon />
          </>
        ),
      },
      {
        title: "Digital Marketing Program for Business Owners",
        description:
          "Generate high-intent B2B & B2C leads, scale brand authority and maximize ROI.",
        badge: "For Business Owners",
        badgeIcon: <BriefcaseIcon />,
        badgeClass: "bg-[#fef3c7] text-[#78350f] border border-[#fde68a]",
        image: "/assets/courses/business_owners_v2.jpg",
        cardBg: "bg-gradient-to-b from-white via-[#fffbfc] to-[#fff0f2] border border-rose-200/70 shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_35px_rgba(0,0,0,0.12)]",
        titleColor: "text-slate-900",
        descColor: "text-slate-500",
        featureTextColor: "text-slate-700",
        iconBg: "bg-rose-50 text-[#fe4759]",
        viewBtnClass: "bg-[#fe4759] hover:bg-[#e03447] text-white border-transparent shadow-sm shadow-[#fe4759]/25",
        syllabusBtnClass: "bg-[#fff1f2] hover:bg-[#ffe4e6] text-[#e11d48] border border-[#fecdd3]",
        syllabusTextClass: "text-[#e11d48]",
        features: [
          { icon: <CertIcon />, label: "Certification" },
          { icon: <CalIcon />, label: "Customised Timeline" },
          { icon: <BarIcon />, label: "Business-Focused Curriculum" },
          { icon: <MentorIcon />, label: "1:1 Sessions" },
        ],
        href: "/courses/digital-marketing-program-for-business-owners",
        uspBadges: (
          <>
            <MetaIcon />
            <MicrosoftIcon />
          </>
        ),
      },
      {
        title: "Customised Program in Digital Marketing",
        description:
          "Tailored modular training designed around your niche industry and career goals.",
        badge: "Tailored to Your Goals",
        badgeIcon: <SlidersIcon />,
        badgeClass: "bg-[#ede9fe] text-[#6b21a8] border border-[#ddd6fe]",
        image: "/assets/courses/customised_marketing_v2.jpg",
        cardBg: "bg-gradient-to-b from-white via-[#fffbfc] to-[#fff0f2] border border-rose-200/70 shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_35px_rgba(0,0,0,0.12)]",
        titleColor: "text-slate-900",
        descColor: "text-slate-500",
        featureTextColor: "text-slate-700",
        iconBg: "bg-rose-50 text-[#fe4759]",
        viewBtnClass: "bg-[#fe4759] hover:bg-[#e03447] text-white border-transparent shadow-sm shadow-[#fe4759]/25",
        syllabusBtnClass: "bg-[#fff1f2] hover:bg-[#ffe4e6] text-[#e11d48] border border-[#fecdd3]",
        syllabusTextClass: "text-[#e11d48]",
        features: [
          { icon: <CertIcon />, label: "Certification" },
          { icon: <CalIcon />, label: "Flexible Timeline" },
          { icon: <TuneIcon />, label: "Tailored Curriculum" },
          { icon: <MentorIcon />, label: "1:1 / Batches" },
        ],
        href: "/courses/customised-program-in-digital-marketing",
        uspBadges: (
          <>
            <HubspotIcon />
            <SkillIndiaIcon />
          </>
        ),
      },
    ],
  };

  const handleSyllabusSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      await contactApi.submitContact({
        full_name: syllabusForm.name.trim(),
        email: syllabusForm.email.trim(),
        phone: syllabusForm.phone.trim(),
        interested_courses: selectedProgram?.title || "Digital Marketing",
        experience: "Not specified",
        message: `Brochure Download: ${selectedProgram?.title || "Digital Marketing"}`,
      });
    } catch (err) {
      console.error("Failed to save brochure lead to contact table:", err);
      // Still proceed with download so the user experience isn't blocked
    }

    setSyllabusSubmitted(true);
    setIsSubmitting(false);

    // Trigger single PDF download for all cards
    const link = document.createElement("a");
    link.href = "/brochure.pdf";
    link.download = "IDS_Course_Brochure.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setSelectedProgram(null);
      setSyllabusSubmitted(false);
      setSyllabusForm({ name: "", phone: "", email: "" });
    }, 2200);
  };

  return (
    <section id="programs" className="py-16 md:py-24 bg-[#f5f5f0] font-sans relative overflow-hidden">
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
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

        {/* ── Category Tabs ── */}
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

      {/* ── Carousel ── */}
      <div className="relative w-full mt-2">

        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          aria-label="Previous Programs"
          className={`absolute left-2 sm:left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-30 h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-white shadow-xl border border-slate-200/90 flex items-center justify-center text-slate-700 hover:text-white hover:bg-[#fe4759] hover:border-[#fe4759] hover:scale-105 transition-all cursor-pointer ${
            !canScrollLeft ? "opacity-0 pointer-events-none" : "opacity-95"
          }`}
        >
          <ChevronLeft className="w-5 h-5 -ml-0.5 stroke-[2.5]" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          aria-label="Next Programs"
          className={`absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-white/95 backdrop-blur-xs shadow-xl border border-slate-200/90 flex items-center justify-center text-slate-700 hover:text-white hover:bg-[#fe4759] hover:border-[#fe4759] hover:scale-105 transition-all cursor-pointer ${
            !canScrollRight ? "opacity-0 pointer-events-none" : "opacity-95"
          }`}
        >
          <ChevronRight className="w-5 h-5 -mr-0.5 stroke-[2.5]" />
        </button>

        {/* Scroll track */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          style={{
            paddingLeft: "clamp(2.5rem, 7vw, 7rem)",
            scrollPaddingLeft: "clamp(2.5rem, 7vw, 7rem)",
            paddingRight: "0px",
          }}
          className="flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-none pb-8 pt-3"
        >
          {programs[activeTab]?.map((program, idx) => {
            return (
              <div
                key={idx}
                className={`w-[270px] sm:w-[300px] lg:w-[308px] xl:w-[312px] shrink-0 snap-start rounded-[22px] hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden group ${program.cardBg}`}
              >
                {/* ── Image + Badge ── */}
                <div className="relative w-full h-[200px] sm:h-[210px] overflow-hidden bg-slate-900 shrink-0">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    sizes="(max-width: 640px) 270px, 312px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Badge pill – top-left */}
                  <div className={`absolute top-3 left-3 z-10 flex items-center gap-1.5 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-md ${program.badgeClass}`}>
                    <span className="shrink-0">{program.badgeIcon}</span>
                    <span className="text-[11.5px] font-bold whitespace-nowrap leading-none">
                      {program.badge}
                    </span>
                  </div>

                  {/* ── USP Section: Dynamic Badges (Bottom-Right Cutout) ── */}
                  <div className="absolute bottom-0 right-0 z-10 bg-white rounded-tl-[24px] pt-2.5 pb-2 pl-3.5 pr-4 flex items-center gap-2.5 shadow-xs">
                    {program.uspBadges}
                  </div>
                </div>

                {/* ── Body ── */}
                <div className="flex flex-col flex-1 px-5 pt-5 pb-5">

                  {/* Subtag if present */}
                  {program.subtag && (
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#fe4759] mb-1.5 block">
                      {program.subtag}
                    </span>
                  )}

                  {/* Title */}
                  <h3 className={`text-[17px] sm:text-[18px] font-extrabold leading-[1.25] mb-2.5 min-h-[46px] flex items-start ${program.titleColor}`}>
                    <Link href={program.href} className="hover:opacity-80 transition-opacity">
                      {program.title}
                    </Link>
                  </h3>

                  {/* Description */}
                  <p className={`text-[12.5px] sm:text-[13px] leading-[1.55] mb-5 line-clamp-2 min-h-[38px] sm:min-h-[40px] ${program.descColor}`}>
                    {program.description}
                  </p>

                  {/* Feature list */}
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {program.features.map((f, fi) => (
                      <li key={fi} className={`flex items-center gap-2.5 text-[12.5px] sm:text-[13px] font-semibold ${program.featureTextColor}`}>
                        <span className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${program.iconBg}`}>
                          {f.icon}
                        </span>
                        <span>{f.label}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA row - rounded-[10px] buttons */}
                  <div className="flex items-center gap-2.5 mt-auto">
                    {/* View Program button */}
                    <Link
                      href={program.href}
                      className={`flex-1 py-[10px] px-4 rounded-[10px] text-[12.5px] sm:text-[13px] font-bold text-center transition-all shadow-sm flex items-center justify-center gap-1.5 ${program.viewBtnClass}`}
                    >
                      View Program <span className="text-base leading-none">→</span>
                    </Link>

                    {/* Brochure button */}
                    <button
                      onClick={() => setSelectedProgram(program)}
                      className={`flex items-center justify-center gap-1.5 py-[10px] px-3.5 sm:px-4 rounded-[10px] text-[12.5px] sm:text-[13px] font-bold transition-all cursor-pointer ${program.syllabusBtnClass}`}
                    >
                      <DownloadIcon />
                      <span className={program.syllabusTextClass}>Brochure</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Brochure Modal ── */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-200">
            <button
              onClick={() => {
                if (!isSubmitting) {
                  setSelectedProgram(null);
                }
              }}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center mx-auto mb-3 text-[#fe4759]">
                <DownloadIcon />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Download Brochure</h3>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Get full curriculum breakdown, live project details & tools for{" "}
                <strong className="text-slate-800 font-semibold">{selectedProgram.title}</strong>
              </p>
            </div>

            <form onSubmit={handleSyllabusSubmit} className="space-y-3.5">
              {[
                { label: "Full Name", type: "text", key: "name", placeholder: "e.g. Rahul Sharma" },
                { label: "Phone Number", type: "tel", key: "phone", placeholder: "e.g. +91 98765 43210" },
                { label: "Email Address", type: "email", key: "email", placeholder: "e.g. rahul@gmail.com" },
              ].map(({ label, type, key, placeholder }) => (
                <div key={key}>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">{label}</label>
                  <input
                    type={type}
                    required
                    placeholder={placeholder}
                    value={syllabusForm[key as keyof typeof syllabusForm]}
                    onChange={(e) => setSyllabusForm({ ...syllabusForm, [key]: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#fe4759] focus:ring-2 focus:ring-[#fe4759]/10"
                  />
                </div>
              ))}

              <button
                type="submit"
                disabled={syllabusSubmitted || isSubmitting}
                className="w-full py-3 px-5 rounded-full bg-[#fe4759] hover:bg-[#e03447] text-white font-bold text-sm shadow-md shadow-[#fe4759]/25 hover:shadow-lg transition-all flex items-center justify-center gap-2 mt-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /><span>Saving & Downloading...</span></>
                ) : syllabusSubmitted ? (
                  <><CheckCircle2 className="w-4 h-4" /><span>Brochure Sent Successfully!</span></>
                ) : (
                  <><DownloadIcon /><span>Download Brochure PDF</span></>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

