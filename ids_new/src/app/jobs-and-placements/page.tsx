"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { vacancyApi } from "@/lib/api";

function formatDate(dateStr?: string): string {
  if (!dateStr) return "Recent";
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
  } catch {
    return dateStr;
  }
}
import {
  GraduationCap,
  TrendingUp,
  Building,
  Users,
  Briefcase,
  MapPin,
  Calendar,
  Search,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Check,
  Send,
  X,
  Clock,
  Laptop,
  Flame,
  Award,
  ShieldCheck,
  ChevronDown,
  ArrowUpDown,
  FileCheck,
  UserCheck,
  Phone,
  Mail,
  Building2,
  DollarSign,
} from "lucide-react";

interface JobVacancy {
  id: string;
  title: string;
  company: string;
  companyInitials: string;
  location: string;
  date: string;
  rawDate: string;
  stipend: string;
  jobType: "hybrid" | "remote" | "on-site";
  description: string;
  requiredSkills: string[];
  requirements: string[];
  highlight?: boolean;
}

const vacanciesData: JobVacancy[] = [
  {
    id: "techcorp-dm-intern",
    title: "Digital Marketing Intern",
    company: "TechCorp Solutions",
    companyInitials: "TC",
    location: "Mumbai, Maharashtra",
    date: "9/5/2026",
    rawDate: "2026-09-05",
    stipend: "As per industry standards",
    jobType: "hybrid",
    description:
      "Support senior campaign strategists in building organic content calendars, managing active SEO audits, and analyzing user conversion funnels across multi-channel consumer touchpoints.",
    requiredSkills: ["SEO", "Social Media", "Content Writing"],
    requirements: [
      "Currently pursuing/completed digital marketing course",
      "Basic knowledge of SEO and social media",
      "Good communication skills",
    ],
    highlight: true,
  },
  {
    id: "digital-solutions-ppc",
    title: "PPC Campaign Intern",
    company: "Digital Solutions Ltd",
    companyInitials: "DS",
    location: "Pune, Maharashtra",
    date: "9/4/2026",
    rawDate: "2026-09-04",
    stipend: "As per industry standards",
    jobType: "hybrid",
    description:
      "Assist in setting up search & display campaigns, keyword bid adjustments, negative keyword curation, and ad copy split-testing on Google Ads and Meta platforms.",
    requiredSkills: ["Google Ads", "PPC", "Analytics"],
    requirements: [
      "Google Ads certification",
      "Basic understanding of PPC",
      "Analytical mindset",
    ],
    highlight: true,
  },
  {
    id: "startup-hub-email",
    title: "Email Marketing Intern",
    company: "Startup Hub",
    companyInitials: "SH",
    location: "Hyderabad, Telangana",
    date: "9/3/2026",
    rawDate: "2026-09-03",
    stipend: "As per industry standards",
    jobType: "remote",
    description:
      "Design transactional and newsletter email workflows, optimize deliverability, and run A/B subject line tests on modern CRM automation tools.",
    requiredSkills: ["Email Marketing", "Automation", "Analytics"],
    requirements: [
      "Knowledge of email marketing tools",
      "Understanding of automation",
      "Good writing skills",
    ],
  },
  {
    id: "ecommerce-giants-seo",
    title: "SEO Specialist Intern",
    company: "E-commerce Giants",
    companyInitials: "EG",
    location: "Bangalore, Karnataka",
    date: "9/2/2026",
    rawDate: "2026-09-02",
    stipend: "As per industry standards",
    jobType: "on-site",
    description:
      "Execute high-impact technical on-page optimizations, crawl error resolution, and competitive keyword gap analyses for enterprise ecommerce catalogs.",
    requiredSkills: ["SEO", "Google Analytics", "Keyword Research"],
    requirements: [
      "SEO certification preferred",
      "Knowledge of Google Analytics",
      "Understanding of keyword research tools",
    ],
  },
  {
    id: "media-house-content",
    title: "Content Marketing Intern",
    company: "Media House Pro",
    companyInitials: "MH",
    location: "Chennai, Tamil Nadu",
    date: "9/1/2026",
    rawDate: "2026-09-01",
    stipend: "As per industry standards",
    jobType: "on-site",
    description:
      "Write engaging articles, social copy, and brand assets. Conduct topical research to align editorial output with organic search demand.",
    requiredSkills: ["Content Strategy", "Writing", "SEO"],
    requirements: [
      "Excellent writing skills",
      "Content strategy knowledge",
      "SEO understanding",
    ],
  },
  {
    id: "creative-agency-smm",
    title: "Social Media Marketing Intern",
    company: "Creative Agency Inc",
    companyInitials: "CA",
    location: "Delhi, NCR",
    date: "8/31/2026",
    rawDate: "2026-08-31",
    stipend: "As per industry standards",
    jobType: "remote",
    description:
      "Create scroll-stopping social media creatives, reel hooks, and community polls. Track profile reach and engagement metrics across platforms.",
    requiredSkills: ["Social Media", "Content Creation", "Canva"],
    requirements: [
      "Strong creative skills",
      "Experience with design tools",
      "Understanding of social media platforms",
    ],
  },
  {
    id: "craft-media-bulk",
    title: "Bulk Hiring",
    company: "Craft Media Hub",
    companyInitials: "CM",
    location: "Greater Noida",
    date: "3/27/2026",
    rawDate: "2026-03-27",
    stipend: "Attractive (Based on skills)",
    jobType: "on-site",
    description:
      "Immediate recruitment drive for digital operations, media campaign assistants, and client servicing executives across expansion teams.",
    requiredSkills: ["Digital Marketing", "Media Planning", "Campaign Operations"],
    requirements: [
      "Graduates or digital marketing diploma holders",
      "Willingness to learn and grow in agency environment",
      "Open to immediate joining",
    ],
    highlight: true,
  },
  {
    id: "cybershield-trainer",
    title: "Digital Marketing Tutor / Trainer",
    company: "Cybershield Technologies Private Limited",
    companyInitials: "CS",
    location: "Noida, India",
    date: "2/12/2026",
    rawDate: "2026-02-12",
    stipend: "As per Industry Standards",
    jobType: "hybrid",
    description:
      "Mentor students in live practical labs, conduct assignments walkthroughs on Meta Ads and AI workflows, and evaluate capstone portfolio projects.",
    requiredSkills: ["Training & Mentorship", "Meta & Google Ads", "AI Tools"],
    requirements: [
      "Strong practical expertise in digital marketing",
      "Passion for coaching and student development",
      "Good communication and presentation skills",
    ],
  },
  {
    id: "cybershield-strategist",
    title: "Digital Marketing Strategist",
    company: "Cybershield Technologies Private Limited",
    companyInitials: "CS",
    location: "Noida, India",
    date: "2/9/2026",
    rawDate: "2026-02-09",
    stipend: "4-7 LPA",
    jobType: "on-site",
    description:
      "Lead omni-channel growth campaigns, full-funnel conversion optimization, and client ROI attribution across enterprise performance accounts.",
    requiredSkills: ["Growth Strategy", "Performance Marketing", "Data Analytics"],
    requirements: [
      "Proven track record managing paid ad campaigns",
      "Expertise in data attribution and funnel optimization",
      "Strong strategic leadership capabilities",
    ],
    highlight: true,
  },
];

const alumniSuccessList = [
  { name: "Rahul S.", role: "Growth Marketer", company: "Physics Wallah", pkg: "₹7.5 LPA", badge: "Alumni" },
  { name: "Sneha M.", role: "PPC Strategist", company: "KPMG", pkg: "₹8.2 LPA", badge: "Alumni" },
  { name: "Aman V.", role: "Performance Lead", company: "Tata Group", pkg: "₹6.8 LPA", badge: "Alumni" },
  { name: "Neha K.", role: "SEO Specialist", company: "Adani Group", pkg: "₹7.0 LPA", badge: "Alumni" },
];

const hiringAllies = [
  { name: "Physics Wallah", initials: "PW", tag: "EdTech" },
  { name: "KPMG", initials: "KPMG", tag: "Consulting" },
  { name: "Tata Group", initials: "TATA", tag: "Enterprise" },
  { name: "Adani Group", initials: "ADANI", tag: "Energy & Infra" },
  { name: "WSP Global", initials: "WSP", tag: "Engineering" },
  { name: "ICICI Bank", initials: "ICICI", tag: "Banking" },
];

export default function JobsAndPlacementsPage() {
  const [activeSection, setActiveSection] = useState<"vacancies" | "register" | "recruiters">("vacancies");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  
  // Selected Vacancy Modal
  const [selectedModalVacancy, setSelectedModalVacancy] = useState<JobVacancy | null>(null);

  // Dynamic Vacancies State
  const [vacancies, setVacancies] = useState<JobVacancy[]>(vacanciesData);
  const [loadingVacancies, setLoadingVacancies] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    async function loadDynamicVacancies() {
      try {
        setLoadingVacancies(true);
        const res = await vacancyApi.getVacancies({ status: "published" });
        const apiData = Array.isArray(res.data) ? res.data : [];

        if (apiData.length > 0 && isMounted) {
          const formatted: JobVacancy[] = apiData.map((v: any) => {
            const initials = v.company
              ? v.company
                  .split(" ")
                  .map((w: string) => w[0])
                  .filter(Boolean)
                  .slice(0, 2)
                  .join("")
                  .toUpperCase()
              : "ID";

            return {
              id: String(v.id || v.slug),
              title: v.title,
              company: v.company,
              companyInitials: initials || "ID",
              location: v.location || "Noida, India",
              date: formatDate(v.published_at || v.created_at),
              rawDate: v.published_at || v.created_at || new Date().toISOString(),
              stipend: v.stipend || "As per industry standards",
              jobType: (v.job_type === "remote" || v.job_type === "hybrid" ? v.job_type : "on-site") as "hybrid" | "remote" | "on-site",
              description:
                v.job_description_body ||
                v.job_description_header ||
                "Immediate opening for talented professionals to manage live client projects, analyze performance metrics, and drive business growth.",
              requiredSkills:
                Array.isArray(v.skills_list) && v.skills_list.length > 0
                  ? v.skills_list
                  : typeof v.skills === "string"
                  ? v.skills.split(",").map((s: string) => s.trim()).filter(Boolean)
                  : ["Digital Marketing", "SEO", "Analytics"],
              requirements:
                Array.isArray(v.requirements_list) && v.requirements_list.length > 0
                  ? v.requirements_list
                  : typeof v.requirements === "string"
                  ? v.requirements.split("\n").map((r: string) => r.trim()).filter(Boolean)
                  : ["Relevant certification or degree", "Strong passion for growth", "Good communication skills"],
              highlight: true,
            };
          });

          setVacancies(formatted);
        }
      } catch (err) {
        console.warn("Could not fetch vacancies from API, using fallback data:", err);
      } finally {
        if (isMounted) setLoadingVacancies(false);
      }
    }

    loadDynamicVacancies();

    return () => {
      isMounted = false;
    };
  }, []);

  // Candidate Registration Form State
  const [candidateForm, setCandidateForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "Master in Digital Marketing with AI",
    selectedRole: "Digital Marketing Intern",
    experienceLevel: "Fresher / Student",
    portfolioUrl: "",
    message: "",
  });
  const [candidateSubmitting, setCandidateSubmitting] = useState(false);
  const [candidateSubmitted, setCandidateSubmitted] = useState(false);

  // Recruiter Form State
  const [recruiterForm, setRecruiterForm] = useState({
    companyName: "",
    contactPerson: "",
    workEmail: "",
    phoneNumber: "",
    openRoles: "Digital Marketing / Performance Ads",
    positionsCount: "1 - 3 Positions",
    hiringLocation: "Noida / Delhi NCR",
    salaryBracket: "₹3 LPA - ₹6 LPA",
    message: "",
  });
  const [recruiterSubmitting, setRecruiterSubmitting] = useState(false);
  const [recruiterSubmitted, setRecruiterSubmitted] = useState(false);

  // Filtered & Sorted Vacancies
  const filteredVacancies = useMemo(() => {
    return vacancies
      .filter((v) => {
        const matchesSearch =
          v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          v.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
          v.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          v.requiredSkills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

        const matchesType =
          selectedType === "all" || v.jobType === selectedType;

        return matchesSearch && matchesType;
      })
      .sort((a, b) => {
        const timeA = new Date(a.rawDate).getTime();
        const timeB = new Date(b.rawDate).getTime();
        return sortOrder === "newest" ? timeB - timeA : timeA - timeB;
      });
  }, [vacancies, searchQuery, selectedType, sortOrder]);

  const handleApplyClick = (vacancy: JobVacancy) => {
    setCandidateForm((prev) => ({
      ...prev,
      selectedRole: `${vacancy.title} (${vacancy.company})`,
    }));
    setActiveSection("register");
    const regElement = document.getElementById("active-content-section");
    if (regElement) {
      regElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCandidateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCandidateSubmitting(true);
    setTimeout(() => {
      setCandidateSubmitting(false);
      setCandidateSubmitted(true);
    }, 800);
  };

  const handleRecruiterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRecruiterSubmitting(true);
    setTimeout(() => {
      setRecruiterSubmitting(false);
      setRecruiterSubmitted(true);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-rose-100 selection:text-[#fe4759]">
      {/* ─── GLOBAL SITE NAVBAR ─── */}
      <Navbar />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 1: HERO SECTION (MATCHING IDS NEW DESIGN LANGUAGE)
          ══════════════════════════════════════════════════════════════ */}
      <section className="relative pt-12 sm:pt-16 lg:pt-20 pb-16 lg:pb-22 bg-gradient-to-b from-[#FFFDFC] via-white to-white border-b border-slate-100 overflow-hidden">
        {/* Subtle, Barely-There Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-[450px] h-[300px] bg-[#fe4759]/2.5 rounded-full blur-3xl pointer-events-none" />

        {/* Delicate Subtle Brand Grid Texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(254,71,89,0.04) 1px, transparent 1px),
              linear-gradient(to right, rgba(254,71,89,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

        <div className="max-w-[1360px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Headlines, Trust Badges & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Badge: CAREER & INTERNSHIP ACCELERATOR */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-rose-200/90 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#fe4759] animate-ping" />
                <span className="text-xs font-black text-[#fe4759] tracking-widest uppercase">
                  100% CAREER & INTERNSHIP ACCELERATOR
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-[#0B132A] leading-[1.12] tracking-tight">
                Jobs & <span className="text-[#fe4759] underline decoration-[#fe4759]/30 underline-offset-8">Placements</span>
              </h1>

              {/* Mission Subtitle */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                Start your career with our industry-focused internship program. Gain real-world experience, execute live campaigns on enterprise ad budgets, and secure your dream job with verified corporate allies.
              </p>

              {/* Primary Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setActiveSection("vacancies");
                    const el = document.getElementById("active-content-section");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-8 py-4 bg-[#fe4759] hover:bg-[#e0384a] text-white font-extrabold text-sm sm:text-base rounded-xl transition-all shadow-lg shadow-[#fe4759]/25 hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 group cursor-pointer"
                >
                  <span>Explore 9 Open Vacancies</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setActiveSection("register");
                    const el = document.getElementById("active-content-section");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-7 py-4 bg-white hover:bg-rose-50/60 text-[#fe4759] font-bold text-sm sm:text-base rounded-xl border border-rose-200 transition-all hover:-translate-y-0.5 shadow-2xs flex items-center gap-2 cursor-pointer"
                >
                  <span>Register for Job</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setActiveSection("recruiters");
                    const el = document.getElementById("active-content-section");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-6 py-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm sm:text-base rounded-xl transition-all hover:-translate-y-0.5 shadow-2xs cursor-pointer"
                >
                  For Recruiters
                </button>
              </div>

              {/* 4 Feature Badges Strip (Clean & Un-congested) */}
              <div className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3">
                <span className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-2xs">
                  <GraduationCap className="w-4 h-4 text-emerald-600 shrink-0" />
                  Internship Program Available
                </span>

                <span className="inline-flex items-center gap-1.5 bg-white border border-rose-200 text-[#fe4759] text-xs font-bold px-3 py-1.5 rounded-full shadow-2xs">
                  <TrendingUp className="w-4 h-4 text-[#fe4759] shrink-0" />
                  90% Placement Success Rate
                </span>

                <span className="inline-flex items-center gap-1.5 bg-white border border-rose-200 text-[#fe4759] text-xs font-bold px-3 py-1.5 rounded-full shadow-2xs">
                  <Building className="w-4 h-4 text-[#fe4759] shrink-0" />
                  50+ Partner Companies
                </span>

                <span className="inline-flex items-center gap-1.5 bg-white border border-rose-200 text-[#fe4759] text-xs font-bold px-3 py-1.5 rounded-full shadow-2xs">
                  <Users className="w-4 h-4 text-[#fe4759] shrink-0" />
                  2000+ Students Placed
                </span>
              </div>

            </div>

            {/* Right Column: Signature IDS New Placement Showcase Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[460px]">
                
                {/* Background Ambient Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#fe4759]/4 to-transparent rounded-2xl blur-lg pointer-events-none" />

                {/* Main Showcase Container */}
                <div className="relative bg-white rounded-2xl p-6 sm:p-7 shadow-xl border border-slate-200/90 space-y-5">
                  
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-rose-50 text-[#fe4759] flex items-center justify-center font-black">
                        <Award className="w-5 h-5 stroke-[2.2]" />
                      </div>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-wider text-[#fe4759] block">
                          VERIFIED OUTCOMES
                        </span>
                        <h4 className="text-slate-900 font-extrabold text-sm sm:text-base">
                          Recent Alumni Placements
                        </h4>
                      </div>
                    </div>
                    <span className="text-[10px] font-black bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded-full">
                      Live Ticker
                    </span>
                  </div>

                  {/* List of Recent Verified Placements */}
                  <div className="space-y-2.5">
                    {alumniSuccessList.map((alumni, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/70 hover:border-[#fe4759]/40 transition-colors flex items-center justify-between gap-3 group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 text-slate-800 font-black text-xs flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-[#fe4759] group-hover:text-white transition-colors">
                            {alumni.company.slice(0, 2).toUpperCase()}
                          </div>
                          <div>
                            <div className="text-xs font-extrabold text-slate-900 leading-tight">
                              {alumni.name}
                            </div>
                            <div className="text-[11px] text-slate-500">
                              {alumni.role} • <span className="font-semibold text-slate-700">{alumni.company}</span>
                            </div>
                          </div>
                        </div>

                        <div className="text-right shrink-0">
                          <span className="text-xs font-black text-[#fe4759] bg-rose-50 px-2 py-0.5 rounded-md">
                            {alumni.pkg}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Guarantee Banner */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-slate-600 font-semibold">
                      <ShieldCheck className="w-4 h-4 text-emerald-500" />
                      <span>Dedicated Placement Desk</span>
                    </div>
                    <span className="text-[#fe4759] font-black">100% Free for Students</span>
                  </div>

                </div>

                {/* Floating Top-Right Mini Badge */}
                <div className="absolute -top-3 -right-3 bg-[#0B132A] text-white rounded-xl p-2.5 sm:p-3 shadow-lg border border-slate-800 flex items-center gap-2 z-20">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span className="text-[11px] font-black tracking-wide">
                    ₹8.5 LPA Top Entry CTC
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 2: 4-COLUMN STATS COUNTER BAR (MATCHING ABOUT & SERVICES)
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-8 bg-white border-y border-slate-200/80">
        <div className="max-w-[1360px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            
            <div className="p-4 rounded-2xl bg-rose-50/40 border border-rose-100/60">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#fe4759] tracking-tight">
                90%
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
                Placement Success Rate
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">Across all certification cohorts</p>
            </div>

            <div className="p-4 rounded-2xl bg-rose-50/40 border border-rose-100/60">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#fe4759] tracking-tight">
                2000+
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
                Students Placed
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">In top agency & corporate roles</p>
            </div>

            <div className="p-4 rounded-2xl bg-rose-50/40 border border-rose-100/60">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#fe4759] tracking-tight">
                50+
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
                Hiring Partner Companies
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">Active recruiter network</p>
            </div>

            <div className="p-4 rounded-2xl bg-rose-50/40 border border-rose-100/60">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#fe4759] tracking-tight">
                ₹8.5 LPA
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
                Highest Entry Package
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">Performance marketing track</p>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 3: EXPLORE OPPORTUNITIES SECTION SWITCHER
          ══════════════════════════════════════════════════════════════ */}
      <section id="active-content-section" className="pt-12 pb-6 bg-[#FFF9F9]">
        <div className="max-w-[1360px] w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <span className="inline-block bg-[#fe4759]/10 border border-[#fe4759]/30 text-[#fe4759] text-xs sm:text-sm font-black px-4 py-1.5 rounded-full mb-3 tracking-wider uppercase">
            Explore Opportunities
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B132A] tracking-tight">
            Choose an Option Below to <span className="text-[#fe4759]">Get Started</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-lg mx-auto">
            Browse current internship openings, register your profile for placement support, or partner with us to recruit talent.
          </p>

          {/* Clean Modern Segment Control (IDS New Style) */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            <button
              onClick={() => setActiveSection("vacancies")}
              className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
                activeSection === "vacancies"
                  ? "bg-[#fe4759] text-white shadow-lg shadow-[#fe4759]/30 scale-105"
                  : "bg-white text-slate-700 border border-slate-200 hover:border-[#fe4759]/50 shadow-2xs"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>View Vacancies ({vacancies.length})</span>
            </button>

            <button
              onClick={() => setActiveSection("register")}
              className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
                activeSection === "register"
                  ? "bg-[#fe4759] text-white shadow-lg shadow-[#fe4759]/30 scale-105"
                  : "bg-white text-slate-700 border border-slate-200 hover:border-[#fe4759]/50 shadow-2xs"
              }`}
            >
              <UserCheck className="w-4 h-4" />
              <span>Register for Job</span>
            </button>

            <button
              onClick={() => setActiveSection("recruiters")}
              className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
                activeSection === "recruiters"
                  ? "bg-[#fe4759] text-white shadow-lg shadow-[#fe4759]/30 scale-105"
                  : "bg-white text-slate-700 border border-slate-200 hover:border-[#fe4759]/50 shadow-2xs"
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>For Recruiters</span>
            </button>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 4: OPEN INTERNSHIP VACANCIES (SHOW ONLY WHEN SELECTED)
          ══════════════════════════════════════════════════════════════ */}
      {activeSection === "vacancies" && (
        <section
          id="vacancies-section"
          className="py-12 sm:py-16 bg-[#FFF9F9] relative"
        >
        <div className="max-w-[1360px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Row: Title + Controls */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm mb-8 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                  {filteredVacancies.length} Active Positions
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#0B132A]">
                Open Internship Vacancies
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
                Discover exciting internship opportunities from top verified companies
              </p>
            </div>

            {/* Interactive Filters: Search, Mode, Sort */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Search Bar */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search role, skill, city..."
                  className="pl-9 pr-3 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#fe4759] focus:ring-1 focus:ring-[#fe4759]/20 w-52 sm:w-60 bg-slate-50/50"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Mode Pills */}
              <div className="flex items-center bg-slate-100 p-1 rounded-xl text-xs font-semibold">
                {["all", "remote", "hybrid", "on-site"].map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedType(t)}
                    className={`px-3 py-1.5 rounded-lg capitalize transition-colors cursor-pointer ${
                      selectedType === t
                        ? "bg-white text-slate-900 shadow-2xs font-bold"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              {/* Sort Toggle */}
              <button
                onClick={() => setSortOrder(sortOrder === "newest" ? "oldest" : "newest")}
                className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold transition-colors cursor-pointer shadow-2xs"
              >
                <ArrowUpDown className="w-3.5 h-3.5 text-[#fe4759]" />
                <span>Sort: {sortOrder === "newest" ? "Newest First" : "Oldest First"}</span>
              </button>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════
              THE 9 VACANCIES: CONCISE & NON-CONGESTED BENTO CARDS
              ══════════════════════════════════════════════════════════ */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {filteredVacancies.map((vacancy) => {
              const isRemote = vacancy.jobType === "remote";
              const isHybrid = vacancy.jobType === "hybrid";

              return (
                <div
                  key={vacancy.id}
                  className="group relative bg-white rounded-[28px] p-6 sm:p-7 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:shadow-[#fe4759]/10 hover:border-[#fe4759]/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
                >
                  {/* Card Top: Monogram Avatar + Company + Work Mode */}
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-11 h-11 rounded-2xl bg-rose-50 border border-rose-200/80 text-[#fe4759] font-black text-sm flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                          {vacancy.companyInitials}
                        </div>
                        <div className="min-w-0">
                          <span className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block truncate">
                            {vacancy.company}
                          </span>
                          <span className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                            <MapPin className="w-3 h-3 text-[#fe4759] shrink-0" />
                            <span className="truncate">{vacancy.location}</span>
                          </span>
                        </div>
                      </div>

                      {/* Mode Badge */}
                      <span
                        className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shrink-0 ${
                          isRemote
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : isHybrid
                            ? "bg-purple-50 text-purple-700 border border-purple-200"
                            : "bg-slate-100 text-slate-700 border border-slate-200"
                        }`}
                      >
                        {vacancy.jobType}
                      </span>
                    </div>

                    {/* Job Title */}
                    <h4 className="text-lg sm:text-xl font-black text-[#0B132A] group-hover:text-[#fe4759] transition-colors leading-snug mb-3">
                      {vacancy.title}
                    </h4>

                    {/* Compensation & Date Info Strip */}
                    <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs mb-4">
                      <div className="flex items-center gap-1 font-bold text-[#fe4759]">
                        <span>💰</span>
                        <span>{vacancy.stipend}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-slate-500">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        <span>{vacancy.date}</span>
                      </div>
                    </div>

                    {/* Skills Tags (Clean, un-congested pills) */}
                    <div className="mb-4">
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1.5">
                        Required Skills:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {vacancy.requiredSkills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[11px] font-semibold text-slate-700 bg-rose-50/50 border border-rose-100 px-2.5 py-0.5 rounded-lg"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Requirements Preview (Concise 2 bullets with green checkmarks) */}
                    <div className="pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-1.5 mb-5">
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">
                        Requirements:
                      </span>
                      {vacancy.requirements.slice(0, 2).map((req, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dual Action Buttons Footer */}
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-2.5">
                    <button
                      onClick={() => setSelectedModalVacancy(vacancy)}
                      className="flex-1 py-2.5 px-3 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold text-xs rounded-xl border border-slate-200 transition-colors text-center cursor-pointer"
                    >
                      View Job Description
                    </button>

                    <button
                      onClick={() => handleApplyClick(vacancy)}
                      className="flex-1 py-2.5 px-3 bg-[#fe4759] hover:bg-[#e0384a] text-white font-black text-xs rounded-xl transition-all shadow-md shadow-[#fe4759]/25 hover:scale-[1.02] text-center cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Zero Results State */}
          {filteredVacancies.length === 0 && (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 mt-6">
              <Briefcase className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h4 className="text-lg font-bold text-slate-800">No vacancies matched your filter</h4>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Try searching for a different keyword or switch mode to &ldquo;All&rdquo;.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedType("all");
                }}
                className="mt-4 px-5 py-2.5 bg-[#fe4759] text-white rounded-xl text-xs font-bold hover:bg-[#e0384a]"
              >
                Reset Search Filters
              </button>
            </div>
          )}

        </div>
      </section>
      )}

      {/* ══════════════════════════════════════════════════════════════
          SECTION 5: REGISTER FOR JOB (SHOW ONLY WHEN SELECTED)
          ══════════════════════════════════════════════════════════════ */}
      {activeSection === "register" && (
        <section
          id="register-section"
          className="py-16 sm:py-24 bg-white relative"
        >
          <div className="max-w-[1360px] w-full mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Back Button to Vacancies */}
            <div className="mb-8">
              <button
                type="button"
                onClick={() => {
                  setActiveSection("vacancies");
                  const el = document.getElementById("active-content-section");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#fe4759] hover:underline cursor-pointer bg-rose-50 border border-rose-100 px-4 py-2 rounded-xl transition-colors hover:bg-rose-100/60"
              >
                ← Back to Browse 9 Open Vacancies
              </button>
            </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Why Choose IDS Placement Cell */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 shadow-xs">
                <UserCheck className="w-3.5 h-3.5 text-[#fe4759]" />
                <span className="text-xs font-black text-[#fe4759] tracking-wider uppercase">
                  REGISTER FOR JOB
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-[#0B132A] leading-tight">
                Get Pre-Screened & Shortlisted for <br />
                <span className="text-[#fe4759]">50+ Hiring Partners</span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Submit your credentials directly to our Corporate Placement Cell. We provide 100% free resume optimization, mock interviews, and guaranteed internship referrals.
              </p>

              {/* 3 Value Pillars */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#fe4759] flex items-center justify-center shrink-0">
                    <FileCheck className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-slate-900 text-sm">
                      1-on-1 Portfolio & Resume Audit
                    </h5>
                    <p className="text-xs text-slate-500">
                      Our hiring experts optimize your profile to pass corporate ATS screens.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#fe4759] flex items-center justify-center shrink-0">
                    <Laptop className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-slate-900 text-sm">
                      Live Technical Mock Interviews
                    </h5>
                    <p className="text-xs text-slate-500">
                      Practice campaign walkthroughs, metrics defense, and analytical questions.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#fe4759] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-slate-900 text-sm">
                      Direct HR Introductions
                    </h5>
                    <p className="text-xs text-slate-500">
                      Skip cold applications with direct referrals to decision makers.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Candidate Registration Card */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[32px] p-8 sm:p-10 shadow-2xl border border-rose-100/90 relative">
                
                {candidateSubmitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <Check className="w-8 h-8 stroke-[3]" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900">
                      Application Submitted!
                    </h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto">
                      Thank you, <span className="font-bold text-[#fe4759]">{candidateForm.fullName}</span>! Your profile has been received for <span className="font-semibold text-slate-900">{candidateForm.selectedRole}</span>. Our placement coordinator will contact you via WhatsApp within 24 hours.
                    </p>
                    <button
                      onClick={() => setCandidateSubmitted(false)}
                      className="mt-4 px-6 py-2.5 bg-[#fe4759] text-white font-bold rounded-xl text-sm hover:bg-[#e0384a]"
                    >
                      Submit Another Application
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleCandidateSubmit} className="space-y-5">
                    
                    <div className="border-b border-slate-100 pb-4">
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                        Register for Job & Placement Support
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                        Free placement assistance for digital marketing, analytics & AI learners.
                      </p>
                    </div>

                    {/* Role Pre-Selection Banner */}
                    <div className="p-3 rounded-xl bg-rose-50/70 border border-rose-100 flex items-center justify-between text-xs">
                      <span className="text-slate-600 font-semibold">Applying For / Desired Role:</span>
                      <span className="font-extrabold text-[#fe4759]">{candidateForm.selectedRole}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={candidateForm.fullName}
                          onChange={(e) => setCandidateForm({ ...candidateForm, fullName: e.target.value })}
                          placeholder="e.g. Priya Sharma"
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#fe4759]/20 focus:border-[#fe4759]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          WhatsApp / Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={candidateForm.phone}
                          onChange={(e) => setCandidateForm({ ...candidateForm, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#fe4759]/20 focus:border-[#fe4759]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={candidateForm.email}
                          onChange={(e) => setCandidateForm({ ...candidateForm, email: e.target.value })}
                          placeholder="priya@gmail.com"
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#fe4759]/20 focus:border-[#fe4759]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Course Enrolled / Completed
                        </label>
                        <select
                          value={candidateForm.course}
                          onChange={(e) => setCandidateForm({ ...candidateForm, course: e.target.value })}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#fe4759]/20 focus:border-[#fe4759] bg-white text-slate-800"
                        >
                          <option value="Master in Digital Marketing with AI">Master in Digital Marketing with AI</option>
                          <option value="Data Analytics Master Course">Data Analytics Master Course</option>
                          <option value="PG Diploma in Advanced Analytics">PG Diploma in Advanced Analytics</option>
                          <option value="UI/UX Design Master Course">UI/UX Design Master Course</option>
                          <option value="External Candidate / Self-Taught">External Candidate / Self-Taught</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Experience Level
                        </label>
                        <select
                          value={candidateForm.experienceLevel}
                          onChange={(e) => setCandidateForm({ ...candidateForm, experienceLevel: e.target.value })}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#fe4759]/20 focus:border-[#fe4759] bg-white text-slate-800"
                        >
                          <option value="Fresher / Student">Fresher / Student</option>
                          <option value="0 - 1 Year Experience">0 - 1 Year Experience</option>
                          <option value="1 - 3 Years Experience">1 - 3 Years Experience</option>
                          <option value="Career Switcher">Career Switcher</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          LinkedIn / Portfolio URL (Optional)
                        </label>
                        <input
                          type="url"
                          value={candidateForm.portfolioUrl}
                          onChange={(e) => setCandidateForm({ ...candidateForm, portfolioUrl: e.target.value })}
                          placeholder="https://linkedin.com/in/username"
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#fe4759]/20 focus:border-[#fe4759]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Key Skills & Preferred Cities (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={candidateForm.message}
                        onChange={(e) => setCandidateForm({ ...candidateForm, message: e.target.value })}
                        placeholder="Mention your top tools (Google Ads, SEO, Meta Ads, Python, Canva) and preferred locations..."
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#fe4759]/20 focus:border-[#fe4759]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={candidateSubmitting}
                      className="w-full py-4 bg-[#fe4759] hover:bg-[#e0384a] text-white font-black text-sm sm:text-base rounded-xl transition-all shadow-lg shadow-[#fe4759]/30 hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {candidateSubmitting ? (
                        <span>Submitting Application...</span>
                      ) : (
                        <>
                          <span>Submit Profile for Placements</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-[11px] text-slate-400">
                      🔒 Zero consultation fee. 100% confidential. Directly routed to partner recruiters.
                    </p>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>
      )}

      {/* ══════════════════════════════════════════════════════════════
          SECTION 6: FOR RECRUITERS (SHOW ONLY WHEN SELECTED)
          ══════════════════════════════════════════════════════════════ */}
      {activeSection === "recruiters" && (
        <section
          id="recruiters-section"
          className="py-16 sm:py-24 bg-gradient-to-b from-[#FFF5F6] to-white relative"
        >
          <div className="max-w-[1360px] w-full mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Back Button to Vacancies */}
            <div className="mb-8">
              <button
                type="button"
                onClick={() => {
                  setActiveSection("vacancies");
                  const el = document.getElementById("active-content-section");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#fe4759] hover:underline cursor-pointer bg-white border border-slate-200 px-4 py-2 rounded-xl transition-colors hover:bg-slate-50 shadow-2xs"
              >
                ← Back to Browse 9 Open Vacancies
              </button>
            </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Why Recruit From IDS */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-rose-200 shadow-xs">
                <Building2 className="w-3.5 h-3.5 text-[#fe4759]" />
                <span className="text-xs font-black text-[#fe4759] tracking-wider uppercase">
                  FOR CORPORATE RECRUITERS
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-[#0B132A] leading-tight">
                Hire Pre-Screened, <br />
                <span className="text-[#fe4759]">Job-Ready Digital Talent</span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Partner with iDigitalStudies to recruit candidates who have trained on live client ad spends, verified case studies, and modern AI marketing toolchains.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#fe4759] flex items-center justify-center shrink-0">
                    <TrendingUp className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-slate-900 text-sm">
                      Zero Sourcing Fees
                    </h5>
                    <p className="text-xs text-slate-500">
                      Direct access to candidate batches without placement agency commissions.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#fe4759] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-slate-900 text-sm">
                      48-Hour Shortlist Delivery
                    </h5>
                    <p className="text-xs text-slate-500">
                      Receive tailored portfolios aligned exactly with your tech stack within 2 business days.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#fe4759] flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-slate-900 text-sm">
                      Practical Tool Mastery
                    </h5>
                    <p className="text-xs text-slate-500">
                      Candidates certified in Google Ads, Meta Business Manager, GA4, Semrush, and AI workflows.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Recruiter Request Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[32px] p-8 sm:p-10 shadow-2xl border border-rose-100/90 relative">
                
                {recruiterSubmitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <Check className="w-8 h-8 stroke-[3]" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900">
                      Requirement Received!
                    </h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto">
                      Thank you, <span className="font-bold text-[#fe4759]">{recruiterForm.companyName}</span>. Our Corporate Relations Officer will contact <span className="font-semibold">{recruiterForm.contactPerson}</span> within 2 hours with curated profiles.
                    </p>
                    <button
                      onClick={() => setRecruiterSubmitted(false)}
                      className="mt-4 px-6 py-2.5 bg-[#fe4759] text-white font-bold rounded-xl text-sm hover:bg-[#e0384a]"
                    >
                      Post Another Vacancy
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleRecruiterSubmit} className="space-y-5">
                    
                    <div className="border-b border-slate-100 pb-4">
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                        Partner with Us for Hiring
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                        Register your company to access our pre-vetted digital marketing talent.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={recruiterForm.companyName}
                          onChange={(e) => setRecruiterForm({ ...recruiterForm, companyName: e.target.value })}
                          placeholder="e.g. Acme Media Corp"
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#fe4759]/20 focus:border-[#fe4759]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Contact Person & Designation *
                        </label>
                        <input
                          type="text"
                          required
                          value={recruiterForm.contactPerson}
                          onChange={(e) => setRecruiterForm({ ...recruiterForm, contactPerson: e.target.value })}
                          placeholder="e.g. Vikas Verma (HR Lead)"
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#fe4759]/20 focus:border-[#fe4759]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Official Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={recruiterForm.workEmail}
                          onChange={(e) => setRecruiterForm({ ...recruiterForm, workEmail: e.target.value })}
                          placeholder="hr@acmemedia.com"
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#fe4759]/20 focus:border-[#fe4759]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={recruiterForm.phoneNumber}
                          onChange={(e) => setRecruiterForm({ ...recruiterForm, phoneNumber: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#fe4759]/20 focus:border-[#fe4759]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Role Needed
                        </label>
                        <select
                          value={recruiterForm.openRoles}
                          onChange={(e) => setRecruiterForm({ ...recruiterForm, openRoles: e.target.value })}
                          className="w-full px-3 py-3 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#fe4759]/20 focus:border-[#fe4759] bg-white text-slate-800"
                        >
                          <option value="Digital Marketing / Performance Ads">Digital Marketing / Ads</option>
                          <option value="SEO & Content Strategist">SEO & Content</option>
                          <option value="Social Media & UGC Creator">Social Media & UGC</option>
                          <option value="Data & Growth Analyst">Data & Growth Analyst</option>
                          <option value="Bulk Campus Hiring">Bulk Campus Hiring</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Positions Count
                        </label>
                        <select
                          value={recruiterForm.positionsCount}
                          onChange={(e) => setRecruiterForm({ ...recruiterForm, positionsCount: e.target.value })}
                          className="w-full px-3 py-3 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#fe4759]/20 focus:border-[#fe4759] bg-white text-slate-800"
                        >
                          <option value="1 - 3 Positions">1 - 3 Positions</option>
                          <option value="4 - 10 Positions">4 - 10 Positions</option>
                          <option value="10+ Bulk Positions">10+ Bulk Positions</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Offered CTC / Stipend
                        </label>
                        <select
                          value={recruiterForm.salaryBracket}
                          onChange={(e) => setRecruiterForm({ ...recruiterForm, salaryBracket: e.target.value })}
                          className="w-full px-3 py-3 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#fe4759]/20 focus:border-[#fe4759] bg-white text-slate-800"
                        >
                          <option value="Stipend (₹10k - ₹25k/mo)">Stipend (₹10k - ₹25k/mo)</option>
                          <option value="₹3 LPA - ₹6 LPA">₹3 LPA - ₹6 LPA</option>
                          <option value="₹6 LPA - ₹10 LPA">₹6 LPA - ₹10 LPA</option>
                          <option value="10+ LPA (Senior)">10+ LPA (Senior)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Specific Requirements / Mandatory Tools (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={recruiterForm.message}
                        onChange={(e) => setRecruiterForm({ ...recruiterForm, message: e.target.value })}
                        placeholder="Mention preferred joining timeline, mandatory tools, or specific location..."
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#fe4759]/20 focus:border-[#fe4759]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={recruiterSubmitting}
                      className="w-full py-4 bg-[#fe4759] hover:bg-[#e0384a] text-white font-black text-sm sm:text-base rounded-xl transition-all shadow-lg shadow-[#fe4759]/30 hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {recruiterSubmitting ? (
                        <span>Processing Request...</span>
                      ) : (
                        <>
                          <span>Request Candidate Profiles</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-[11px] text-slate-400">
                      ⚡ Quick 2-hour response from our Senior Corporate Relations Director.
                    </p>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>
      )}

      {/* ══════════════════════════════════════════════════════════════
          SECTION 7: CORPORATE PARTNERS & ALUMNI CREDIBILITY WALL
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-14 bg-white border-t border-slate-200/80">
        <div className="max-w-[1360px] w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <span className="text-xs font-black uppercase tracking-widest text-[#fe4759] bg-rose-50 px-3.5 py-1 rounded-full border border-rose-100">
            Trusted Corporate Alliances
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-[#0B132A] mt-2 mb-8">
            Where Our Alumni Work & Excel
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {hiringAllies.map((c, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs hover:border-[#fe4759]/40 hover:shadow-md transition-all flex flex-col items-center justify-center text-center group"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-900 text-white font-black text-xs flex items-center justify-center mb-2 group-hover:bg-[#fe4759] transition-colors">
                  {c.initials}
                </div>
                <div className="text-xs font-bold text-slate-800 leading-tight">
                  {c.name}
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">
                  {c.tag}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          JOB DESCRIPTION MODAL (ACCESSED VIA "View Job Description")
          ══════════════════════════════════════════════════════════════ */}
      {selectedModalVacancy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-150"
          onClick={() => setSelectedModalVacancy(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedModalVacancy(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="pr-8 mb-5">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#fe4759] bg-rose-50 px-2.5 py-0.5 rounded-full">
                {selectedModalVacancy.company}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                {selectedModalVacancy.title}
              </h3>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-1">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#fe4759]" />
                  {selectedModalVacancy.location}
                </span>
                <span>•</span>
                <span className="capitalize font-semibold text-slate-700">
                  {selectedModalVacancy.jobType}
                </span>
                <span>•</span>
                <span>Posted: {selectedModalVacancy.date}</span>
              </div>
            </div>

            {/* Compensation */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs mb-5">
              <span className="text-slate-500 font-semibold">Stipend / Offered CTC:</span>
              <span className="font-extrabold text-[#fe4759]">{selectedModalVacancy.stipend}</span>
            </div>

            {/* Role Overview */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-600 mb-6">
              <div>
                <h5 className="font-bold text-slate-900 mb-1">Role Description:</h5>
                <p className="leading-relaxed text-slate-600">
                  {selectedModalVacancy.description}
                </p>
              </div>

              <div>
                <h5 className="font-bold text-slate-900 mb-2">Required Skills:</h5>
                <div className="flex flex-wrap gap-1.5">
                  {selectedModalVacancy.requiredSkills.map((s, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-rose-50 text-[#fe4759] font-bold text-xs border border-rose-100"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="font-bold text-slate-900 mb-2">Eligibility & Requirements:</h5>
                <ul className="space-y-1.5">
                  {selectedModalVacancy.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => setSelectedModalVacancy(null)}
                className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const vac = selectedModalVacancy;
                  setSelectedModalVacancy(null);
                  handleApplyClick(vac);
                }}
                className="flex-1 py-3 bg-[#fe4759] hover:bg-[#e0384a] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-[#fe4759]/25 hover:scale-[1.02] cursor-pointer"
              >
                Apply for this Position
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ─── SITE FOOTER ─── */}
      <Footer />
    </div>
  );
}
