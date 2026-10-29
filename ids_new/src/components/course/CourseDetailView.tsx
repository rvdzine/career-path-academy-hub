"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyWidgets from "@/components/StickyWidgets";
import SuccessStories from "@/components/SuccessStories";
import { CourseData, COURSES_DATA } from "@/data/coursesData";
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  FileDown,
  Laptop,
  Palette,
  FileText,
  Search,
  Target,
  Share2,
  BarChart3,
  Layers,
  Globe,
  Sparkles,
  TrendingUp,
  Mail,
  Briefcase,
  Zap,
  Users,
  Clock,
  Award,
  AlertCircle,
  Calendar,
  X,
  Loader2,
  Star,
  Building2,
  User,
  GraduationCap,
  BookOpen,
} from "lucide-react";
import api, { contactApi } from "@/lib/api";

interface CourseDetailViewProps {
  course: CourseData;
}

export default function CourseDetailView({ course }: CourseDetailViewProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experienceLevel: "fresher_student",
    learningGoals: "",
    agreeTerms: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Brochure Download Lead Capture State
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [brochureForm, setBrochureForm] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [isBrochureSubmitting, setIsBrochureSubmitting] = useState(false);
  const [brochureSubmitted, setBrochureSubmitted] = useState(false);
  const [brochureError, setBrochureError] = useState<string | null>(null);

  const handleBrochureSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isBrochureSubmitting) return;

    const trimmedName = brochureForm.name.trim();
    const cleanPhone = brochureForm.phone.replace(/\D/g, "");
    const trimmedEmail = brochureForm.email.trim().toLowerCase();

    if (!trimmedName || !trimmedEmail || !cleanPhone) {
      setBrochureError("Please fill in your name, email, and 10-digit phone number.");
      return;
    }
    if (cleanPhone.length !== 10) {
      setBrochureError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setBrochureError(null);
    setIsBrochureSubmitting(true);

    try {
      await contactApi.submitContact({
        full_name: trimmedName,
        email: trimmedEmail,
        phone: cleanPhone,
        interested_courses: course.name,
        experience: "Not specified",
        message: `Brochure Download: ${course.name}`,
      });
    } catch (err) {
      console.error("Failed to save brochure lead to contact table:", err);
      // Still proceed with download so the user experience isn't blocked
    }

    setBrochureSubmitted(true);
    setIsBrochureSubmitting(false);

    // Trigger brochure PDF download
    const link = document.createElement("a");
    link.href = "/brochure.pdf";
    link.download = `IDS_${course.name.replace(/\s+/g, "_")}_Brochure.pdf`;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setIsBrochureOpen(false);
      setBrochureSubmitted(false);
      setBrochureForm({ name: "", phone: "", email: "" });
    }, 2200);
  };

  // Accordion state: first module expanded by default
  const [expandedModules, setExpandedModules] = useState<number[]>([1]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim().toLowerCase();
    const cleanPhone = formData.phone.replace(/\D/g, "");

    if (!trimmedName || !trimmedEmail || !cleanPhone) {
      setErrorMessage("Please fill in your name, email, and 10-digit mobile number.");
      return;
    }

    if (cleanPhone.length !== 10) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!formData.agreeTerms) {
      setErrorMessage("Please accept the terms and privacy policy to continue.");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        full_name: trimmedName,
        email: trimmedEmail,
        phone: cleanPhone,
        experience: formData.experienceLevel,
        learning_goals: formData.learningGoals.trim() || undefined,
        course_title: course.name,
      };

      const res = await api.post("/courses/enroll/", payload);
      if (res.status === 200 || res.status === 201) {
        setIsSubmitted(true);
      }
    } catch (err: any) {
      console.error("Enrollment form submission error:", err);
      const detail = err?.response?.data?.detail;
      const errorMsg =
        (typeof detail === "object" ? detail?.error : detail) ||
        err?.response?.data?.error ||
        err?.response?.data?.message ||
        "Submission failed. Please check your inputs and try again.";

      if (
        typeof errorMsg === "string" &&
        (errorMsg.toLowerCase().includes("already booked") ||
          errorMsg.toLowerCase().includes("already registered") ||
          errorMsg.toLowerCase().includes("already exists"))
      ) {
        setErrorMessage(
          "This account is already registered/enrolled for this course."
        );
      } else {
        setErrorMessage(
          typeof errorMsg === "string"
            ? errorMsg
            : "An unexpected error occurred. Please try again."
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToEnroll = () => {
    setErrorMessage(null);
    const el = document.getElementById("enroll-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleModule = (id: number) => {
    setExpandedModules((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  const expandAllModules = () => {
    setExpandedModules(course.modules.map((m) => m.id));
  };

  const collapseAllModules = () => {
    setExpandedModules([]);
  };

  // Icon resolver
  const getModuleIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe":
        return Globe;
      case "Palette":
        return Palette;
      case "FileText":
        return FileText;
      case "Search":
        return Search;
      case "Sparkles":
        return Sparkles;
      case "Target":
        return Target;
      case "TrendingUp":
        return TrendingUp;
      case "Share2":
        return Share2;
      case "Mail":
        return Mail;
      case "BarChart3":
        return BarChart3;
      case "Briefcase":
        return Briefcase;
      case "Zap":
        return Zap;
      case "Layers":
        return Layers;
      case "Laptop":
      default:
        return Laptop;
    }
  };

  // SCALE Framework
  const scaleFramework = [
    {
      letter: "S",
      title: "Strategic",
      subtitle: "FULL-FUNNEL ARCHITECTURE & AI AUTOMATION",
      desc: "Learn to build high-converting full-funnel digital architectures, programmatic ad campaigns, and AI workflows using ChatGPT, Midjourney & Claude.",
    },
    {
      letter: "C",
      title: "Campaigns",
      subtitle: "HANDS-ON EXECUTION WITH REAL LIVE AD BUDGETS",
      desc: "Execute live ad spends on Google Ads, Meta Ads Manager, and LinkedIn. Analyze actual ROAS, CPA, and attribution metrics rather than simulated dashboards.",
    },
    {
      letter: "A",
      title: "Applied",
      subtitle: "REAL CLIENT BRIEFS, CONVERSION CRO & AUDITS",
      desc: "Audit and optimize real-world growth funnels for top brands like Zomato, Nykaa, and Razorpay with hands-on technical SEO and conversion rate audits.",
    },
    {
      letter: "L",
      title: "Live",
      subtitle: "1:1 PRACTITIONER MENTORSHIP & INTERACTIVE SPRINTS",
      desc: "Get trained by senior VP & Agency Director-level practitioners through live interactive sprints, portfolio reviews, and weekly 1-on-1 feedback.",
    },
    {
      letter: "E",
      title: "Employment",
      subtitle: "100% PLACEMENT SUPPORT & 100+ HIRING PARTNERS",
      desc: "Dedicated placement cell connecting you to 100+ high-growth tech and agency recruiters with resume grooming, portfolio creation, and interview referrals.",
    },
  ];

  // Comparison Matrix Rows
  const comparisonRows = [
    {
      icon: Zap,
      feature: "Training Delivery",
      ids: "100% Practical & Tool-Driven (Building from scratch)",
      others: "Theory-heavy lectures & PDF reading material",
    },
    {
      icon: TrendingUp,
      feature: "Live Projects",
      ids: "Live Client Campaigns & Actual Ad Budgets",
      others: "2-3 Dummy Projects with no real ad spend",
    },
    {
      icon: Globe,
      feature: "LMS Access",
      ids: "Lifetime Access with Continuous AI & Module Updates",
      others: "1 Year Limit with expiring course videos",
    },
    {
      icon: Briefcase,
      feature: "Work Experience",
      ids: "Guaranteed Internship on Live Client Accounts",
      others: "No practical agency work experience provided",
    },
    {
      icon: Users,
      feature: "Placement Support",
      ids: "Direct Access to 100+ Active Hiring Partners & Mock Audits",
      others: "Basic job alerts or generic 'Interview Tips'",
    },
  ];

  // Course Schema for SEO
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.seoDescription,
    provider: {
      "@type": "EducationalOrganization",
      name: "Institute of Digital Studies (IDS)",
      sameAs: "https://idigitalstudies.com",
    },
    timeToComplete: course.duration,
    educationalCredentialAwarded: "Certification",
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: course.mode,
      duration: course.duration,
    },
  };

  return (
    <main className="min-h-screen bg-white text-slate-800 font-sans">
      {/* Course Schema JSON-LD for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      {/* 1. Global Navigation */}
      <Navbar />

      {/* 2. Breadcrumbs Bar */}
      <div className="bg-slate-50/80 border-b border-slate-100 py-2.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] w-full mx-auto flex items-center gap-1.5 sm:gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-[#fe4759] transition-colors shrink-0">
            Home
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-400 shrink-0">Programs</span>
          <span className="text-slate-300">/</span>
          <span className="text-slate-800 font-semibold truncate max-w-[160px] xs:max-w-xs sm:max-w-md">
            {course.name}
          </span>
        </div>
      </div>

      {/* 3. HERO SECTION */}
      <section className="relative pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-12 lg:pb-20 bg-gradient-to-b from-[#FBFDFF] via-white to-white overflow-hidden border-b border-slate-100">
        <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Headline, Stats, Overview */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              {/* Eyebrow / Credibility Badge */}
              {course.pillTag && (
                <div className="inline-flex items-start sm:items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-2xl sm:rounded-full bg-gradient-to-r from-rose-50 to-orange-50/50 border border-rose-200/90 text-[10px] sm:text-xs font-bold text-[#fe4759] tracking-wide uppercase shadow-2xs max-w-full">
                  <Sparkles className="w-3.5 h-3.5 text-[#fe4759] shrink-0 mt-0.5 sm:mt-0" />
                  <span className="leading-relaxed whitespace-normal break-words">
                    {course.pillTag}
                  </span>
                </div>
              )}

              {/* Main Headline - Significantly Increased Font Size */}
              <h1 className="text-[32px] xs:text-[38px] sm:text-[44px] md:text-5xl lg:text-[56px] font-black text-slate-900 tracking-tight leading-[1.1]">
                <span className="text-slate-800">{course.headlinePre} </span>
                <span className="text-[#fe4759]">{course.headlineHighlight}</span>
                {course.headlinePost && (
                  <span className="text-slate-800"> {course.headlinePost}</span>
                )}
              </h1>

              {/* Subheadline */}
              <p className="text-xs sm:text-base lg:text-[17px] text-slate-600 font-normal leading-relaxed max-w-xl">
                {course.subheadline}
              </p>

              {/* Structured Key Highlights (2x2 Grid) */}
              <div className="grid grid-cols-2 gap-2 max-w-xl text-[11px] sm:text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-1.5 bg-slate-50/90 border border-slate-200/80 rounded-xl px-2.5 py-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span className="truncate">35+ Live Agency Tools</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-50/90 border border-slate-200/80 rounded-xl px-2.5 py-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span className="truncate">Guaranteed Live Internship</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-50/90 border border-slate-200/80 rounded-xl px-2.5 py-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span className="truncate">Real Ad Budget Spends</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-50/90 border border-slate-200/80 rounded-xl px-2.5 py-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span className="truncate">100% Placement Support</span>
                </div>
              </div>

              {/* Duration, Mode, and Code Tile in ONE LINE ONLY */}
              <div className="grid grid-cols-3 gap-1 sm:gap-2 bg-gradient-to-r from-slate-50 via-white to-slate-50 border border-slate-200/90 rounded-xl sm:rounded-2xl p-2 sm:p-2.5 shadow-2xs max-w-xl">
                {/* Duration */}
                <div className="flex items-center gap-1.5 sm:gap-2 px-1 border-r border-slate-200/70 min-w-0">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-rose-50 text-[#fe4759] flex items-center justify-center shrink-0">
                    <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[8px] sm:text-[9px] font-bold text-slate-400 uppercase tracking-wider">Duration</span>
                    <span className="block text-[11px] sm:text-xs font-bold text-slate-900 truncate">{course.duration}</span>
                  </div>
                </div>

                {/* Mode */}
                <div className="flex items-center gap-1.5 sm:gap-2 px-1 border-r border-slate-200/70 min-w-0">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-rose-50 text-[#fe4759] flex items-center justify-center shrink-0">
                    <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[8px] sm:text-[9px] font-bold text-slate-400 uppercase tracking-wider">Mode</span>
                    <span className="block text-[11px] sm:text-xs font-bold text-slate-900 truncate">{course.mode.split("(")[0].trim()}</span>
                  </div>
                </div>

                {/* Code */}
                <div className="flex items-center gap-1.5 sm:gap-2 px-1 min-w-0">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-rose-50 text-[#fe4759] flex items-center justify-center shrink-0">
                    <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[8px] sm:text-[9px] font-bold text-slate-400 uppercase tracking-wider">Code</span>
                    <span className="block text-[11px] sm:text-xs font-bold text-slate-900 truncate">{course.courseCode}</span>
                  </div>
                </div>
              </div>

              {/* Two Statistics Cards (Side-by-side 2-col on all screens) */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-4 max-w-xl pt-0.5">
                <div className="bg-gradient-to-br from-[#FFF8F9] to-white border border-rose-100 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 flex items-center gap-2.5 sm:gap-3.5 shadow-2xs">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-rose-100 flex items-center justify-center text-[#fe4759] shrink-0 shadow-2xs">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-[#fe4759]" />
                  </div>
                  <div>
                    <div className="text-lg sm:text-2xl font-black text-slate-900 leading-none">
                      {course.statRating}
                    </div>
                    <div className="text-[10px] sm:text-xs text-slate-500 font-medium mt-1 leading-tight line-clamp-1">
                      {course.statRatingLabel}
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#FFF8F9] to-white border border-rose-100 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 flex items-center gap-2.5 sm:gap-3.5 shadow-2xs">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-rose-100 flex items-center justify-center text-[#fe4759] shrink-0 shadow-2xs">
                    <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-lg sm:text-2xl font-black text-slate-900 leading-none">
                      {course.statPartners}
                    </div>
                    <div className="text-[10px] sm:text-xs text-slate-500 font-medium mt-1 leading-tight line-clamp-1">
                      {course.statPartnersLabel}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Lead Capture Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div
                id="enroll-form"
                className="w-full max-w-[460px] bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-slate-100/90 transition-all relative overflow-hidden"
              >
                {/* Top Accent Strip */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#fe4759] via-rose-400 to-[#fe4759]" />

                {/* Form Header */}
                <div className="pb-3 border-b border-slate-100 mt-1">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-50 border border-rose-200/70 text-[10px] font-bold text-[#fe4759] uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#fe4759] animate-ping" />
                      Admissions Open
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500">
                      Batch: <strong className="text-slate-800">{course.courseCode}</strong>
                    </span>
                  </div>
                  <h3 className="text-base sm:text-xl font-black text-slate-900 tracking-tight leading-snug">
                    Direct Admission &amp; Seat Booking
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-normal mt-0.5 truncate">
                    Apply for <span className="font-semibold text-slate-700">{course.name}</span>
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
                    <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center shadow-xs">
                      <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                    </div>
                    <h4 className="text-lg font-extrabold text-slate-800">
                      Enrollment Submitted Successfully!
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
                      Thank you! Your enrollment application has been recorded. Our admissions team will reach out with the onboarding schedule and fee confirmation.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setErrorMessage(null);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          experienceLevel: "fresher_student",
                          learningGoals: "",
                          agreeTerms: true,
                        });
                      }}
                      className="text-xs font-bold text-[#fe4759] hover:underline cursor-pointer pt-2 inline-block"
                    >
                      ← Submit another application
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-3.5 space-y-2.5 sm:space-y-3">
                    {errorMessage && (
                      <div className="p-2.5 sm:p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs font-semibold text-rose-700 flex items-start gap-2 animate-in fade-in">
                        <AlertCircle className="w-4 h-4 text-[#fe4759] shrink-0 mt-0.5" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <User className="w-3.5 h-3.5" />
                        </div>
                        <input
                          type="text"
                          required
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full pl-9 pr-3.5 py-2 sm:py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#fe4759] focus:ring-1 focus:ring-[#fe4759] outline-none transition-all bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Email Address *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                            <Mail className="w-3.5 h-3.5" />
                          </div>
                          <input
                            type="email"
                            required
                            placeholder="name@gmail.com"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            className="w-full pl-9 pr-3 py-2 sm:py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#fe4759] focus:ring-1 focus:ring-[#fe4759] outline-none transition-all bg-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Phone Number *
                        </label>
                        <div className="flex rounded-xl border border-slate-200 overflow-hidden focus-within:border-[#fe4759] focus-within:ring-1 focus-within:ring-[#fe4759] transition-all bg-white">
                          <div className="bg-slate-50 border-r border-slate-200 px-2.5 py-2 sm:py-2.5 flex items-center gap-1 text-[11px] font-bold text-slate-700 shrink-0 select-none">
                            <span>+91</span>
                          </div>
                          <input
                            type="tel"
                            required
                            pattern="[0-9]{10}"
                            maxLength={10}
                            placeholder="10-digit number"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                            className="w-full px-3 py-2 sm:py-2.5 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 outline-none bg-white"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Current Profile / Experience Level *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <Briefcase className="w-3.5 h-3.5" />
                        </div>
                        <select
                          value={formData.experienceLevel}
                          onChange={(e) =>
                            setFormData({ ...formData, experienceLevel: e.target.value })
                          }
                          className="w-full pl-9 pr-8 py-2 sm:py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 bg-white focus:border-[#fe4759] focus:ring-1 focus:ring-[#fe4759] outline-none transition-all cursor-pointer appearance-none"
                        >
                          <option value="fresher_student">Student / Fresher</option>
                          <option value="working_professional">Working Professional</option>
                          <option value="business_owner">Business Owner / Entrepreneur</option>
                          <option value="freelancer">Freelancer</option>
                          <option value="career_switcher">Career Switcher</option>
                          <option value="home_maker">Homemaker</option>
                          <option value="others">Other</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Career Goals <span className="text-slate-400 font-normal lowercase">(optional)</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Job switch, Freelancing, Agency growth"
                        value={formData.learningGoals}
                        onChange={(e) =>
                          setFormData({ ...formData, learningGoals: e.target.value })
                        }
                        className="w-full px-3.5 py-2 sm:py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#fe4759] focus:ring-1 focus:ring-[#fe4759] outline-none transition-all bg-white"
                      />
                    </div>

                    <div className="flex items-center gap-2 pt-0.5">
                      <input
                        type="checkbox"
                        id="agreeTerms"
                        required
                        checked={formData.agreeTerms}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            agreeTerms: e.target.checked,
                          })
                        }
                        className="h-4 w-4 rounded border-slate-300 accent-[#fe4759] cursor-pointer"
                      />
                      <label
                        htmlFor="agreeTerms"
                        className="text-[11px] text-slate-600 cursor-pointer select-none"
                      >
                        I agree to the{" "}
                        <Link href="/terms-and-conditions" target="_blank" className="text-[#fe4759] underline font-medium">
                          Terms
                        </Link>{" "}
                        &amp;{" "}
                        <Link href="/privacy-policy" target="_blank" className="text-[#fe4759] underline font-medium">
                          Privacy Policy
                        </Link>
                        .
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 sm:py-3.5 px-4 rounded-xl text-center text-xs sm:text-sm font-bold text-white bg-[#fe4759] hover:bg-[#e0384a] shadow-md shadow-[#fe4759]/25 hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 mt-1 disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting Application...</span>
                        </div>
                      ) : (
                        <>
                          <span>Lock My Admission Seat</span>
                          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-center gap-3 pt-0.5 text-[10px] text-slate-400 font-medium select-none">
                      <span className="flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> 100% Confidential
                      </span>
                      <span>•</span>
                      <span>Direct Admissions Desk</span>
                    </div>

                    <div className="relative my-2 flex items-center justify-center">
                      <div className="border-t border-slate-100 w-full" />
                      <span className="bg-white px-2.5 text-[9px] uppercase font-bold text-slate-400">
                        OR
                      </span>
                    </div>

                    <a
                      href={`https://wa.me/919315471293?text=Hi%2C%20I%20would%20like%20to%20enroll%20for%20${encodeURIComponent(course.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3 rounded-xl text-center text-xs font-bold text-slate-800 bg-[#FFF5F6] border border-rose-100 hover:bg-[#FFEBEF] transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#25D366] shrink-0">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                      <span>Quick Inquiry on WhatsApp</span>
                    </a>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OTHER COURSES QUICK SWITCHER - INFINITE HORIZONTAL SCROLL */}
      <section className="bg-slate-900 text-white py-2.5 sm:py-3 px-4 border-b border-slate-800 overflow-hidden relative">
        <div className="max-w-[1400px] w-full mx-auto flex items-center gap-3 sm:gap-4">
          <div className="shrink-0 flex items-center gap-2 z-10 bg-slate-900 pr-2">
            <span className="w-2 h-2 rounded-full bg-[#fe4759] animate-pulse" />
            <span className="font-extrabold text-slate-300 uppercase tracking-wider text-[10px] sm:text-[11px] whitespace-nowrap">
              Explore All 4 Programs:
            </span>
          </div>

          {/* Infinite Marquee Track with Fade Masks */}
          <div className="relative flex-1 overflow-hidden">
            <div className="absolute left-0 inset-y-0 w-6 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 inset-y-0 w-8 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

            <div className="flex w-max items-center gap-3 sm:gap-4 animate-marquee hover:[animation-play-state:paused]">
              {[...COURSES_DATA, ...COURSES_DATA, ...COURSES_DATA].map((c, idx) => {
                const isCurrent = c.id === course.id;
                const shortInfo: Record<string, { label: string; duration: string }> = {
                  master: { label: "Master in DM + AI", duration: "6M" },
                  specialist: { label: "Performance Marketing", duration: "12W" },
                  "business-owners": { label: "For Business Owners", duration: "Custom" },
                  customised: { label: "Customised Program", duration: "Flexible" },
                };
                const info = shortInfo[c.id] || {
                  label: c.name.replace(" Course", "").replace(" Program", ""),
                  duration: c.duration,
                };

                return (
                  <Link
                    key={`${c.id}-${idx}`}
                    href={`/courses/${c.slug}`}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 shrink-0 ${
                      isCurrent
                        ? "bg-[#fe4759] text-white shadow-xs ring-1 ring-[#fe4759]"
                        : "bg-slate-800/90 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60"
                    }`}
                  >
                    <span>{info.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-md font-semibold ${
                        isCurrent
                          ? "bg-white/20 text-white"
                          : "bg-slate-900/60 text-slate-400"
                      }`}
                    >
                      {info.duration}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4B. PROGRAM OVERVIEW & LEARNING OBJECTIVES */}
      {(course.programOverview || course.learningObjectives) && (
        <section className="py-12 sm:py-16 bg-gradient-to-b from-white via-slate-50/50 to-slate-50/80 border-b border-slate-200/80">
          <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column (5 Cols): #1 Program Overview */}
              {course.programOverview && (
                <div className="lg:col-span-5 space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200/70 text-[#fe4759] text-xs font-bold uppercase tracking-wider shadow-2xs">
                    <BookOpen className="w-3.5 h-3.5" />
                    1. Program Overview
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                    Strategic Paid Growth Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fe4759] to-[#d02e40]">Practical Execution</span>
                  </h2>
                  <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {course.programOverview.map((paragraph, pIdx) => (
                      <p key={pIdx} className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/70 shadow-2xs">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Right Column (7 Cols): #2 Learning Objectives */}
              {course.learningObjectives && (
                <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
                  <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-slate-100">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-700 text-xs font-bold uppercase tracking-wider shadow-2xs">
                      <Target className="w-3.5 h-3.5 text-emerald-600" />
                      2. Learning Objectives
                    </div>
                    <span className="text-xs font-bold text-slate-400">
                      {course.learningObjectives.length} CORE CAPABILITIES
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                    What You Will Achieve by the End of the Program:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1">
                    {course.learningObjectives.map((obj, oIdx) => (
                      <div
                        key={oIdx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50/70 border border-slate-100 text-xs text-slate-700 font-medium hover:bg-rose-50/30 hover:border-rose-100 transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#fe4759] shrink-0 mt-0.5" />
                        <span className="leading-snug">{obj}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </section>
      )}

      {/* 5. DETAILED CURRICULUM MODULES SECTION */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-3">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#fe4759] block">
              {course.curriculumCategory}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-black text-slate-800 tracking-tight leading-[1.2]">
              {course.curriculumTitlePre}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fe4759] to-[#d02e40]">
                {course.curriculumTitleHighlight}
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
              {course.curriculumSubtitle}
            </p>

            {/* Expand / Collapse Controls */}
            <div className="flex items-center justify-center gap-3 pt-3">
              <button
                onClick={expandAllModules}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
              >
                <span>Expand All Modules</span>
                <ChevronDown className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
              <button
                onClick={collapseAllModules}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Collapse All</span>
                <ChevronUp className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* 2-Column Grid: Left Module Accordion, Right Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column: Modules Accordion */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-6 bg-[#fe4759] rounded-full" />
                  <h3 className="text-lg sm:text-xl font-black text-slate-800 tracking-tight">
                    Structured Curriculum Breakdown
                  </h3>
                  <span className="text-xs font-bold text-slate-400">
                    {course.modules.length} MODULES
                  </span>
                </div>
              </div>

              {/* Modules List */}
              <div className="space-y-3.5 pt-1">
                {course.modules.map((item) => {
                  const Icon = getModuleIcon(item.iconName);
                  const isExpanded = expandedModules.includes(item.id);

                  return (
                    <div
                      key={item.id}
                      className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                        isExpanded
                          ? "border-rose-300 shadow-[0_10px_30px_rgba(254,71,89,0.08)] ring-1 ring-rose-500/10"
                          : "border-slate-200/90 hover:border-rose-200/90 shadow-2xs hover:shadow-md"
                      }`}
                    >
                      {/* Accordion Header */}
                      <button
                        onClick={() => toggleModule(item.id)}
                        className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                      >
                        <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                          <div className="shrink-0 flex items-center justify-center">
                            <Icon
                              className={`w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2] ${item.iconColor}`}
                            />
                          </div>

                          <div className="min-w-0">
                            <h4 className="text-sm sm:text-base font-extrabold text-slate-800 tracking-tight leading-snug group-hover:text-[#fe4759] transition-colors">
                              {item.title}
                            </h4>
                            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 block mt-0.5">
                              {item.tag}
                            </span>
                          </div>
                        </div>

                        {/* Toggle Button */}
                        <div
                          className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                            isExpanded
                              ? "bg-[#fe4759] text-white shadow-xs"
                              : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                          }`}
                        >
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4 stroke-[2.5]" />
                          ) : (
                            <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                          )}
                        </div>
                      </button>

                      {/* Expanded Body */}
                      {isExpanded && (
                        <div className="px-5 pb-5 pt-1 border-t border-slate-100/90 animate-in fade-in duration-200">
                          <div className="pl-3 sm:pl-4 border-l-2 border-rose-300 space-y-3.5 mt-2">
                            <div>
                              <h5 className="text-xs sm:text-sm font-extrabold text-slate-800 tracking-tight">
                                {item.subtitle}
                              </h5>
                              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mt-1">
                                {item.desc}
                              </p>
                            </div>

                            {/* Topics List if available */}
                            {item.topics && item.topics.length > 0 && (
                              <div className="pt-1">
                                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block mb-1.5">
                                  KEY TOPICS COVERED
                                </span>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                                  {item.topics.map((topic, tIdx) => (
                                    <div
                                      key={tIdx}
                                      className="flex items-start gap-1.5 text-xs text-slate-700 font-medium"
                                    >
                                      <span className="w-1.5 h-1.5 rounded-full bg-[#fe4759] shrink-0 mt-1.5" />
                                      <span className="leading-snug">{topic}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Key Metrics if available */}
                            {item.keyMetrics && item.keyMetrics.length > 0 && (
                              <div>
                                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block mb-1.5">
                                  KEY METRICS MASTERED
                                </span>
                                <div className="flex items-center gap-1.5 flex-wrap">
                                  {item.keyMetrics.map((metric, mIdx) => (
                                    <span
                                      key={mIdx}
                                      className="px-2 py-0.5 bg-rose-50 text-[#fe4759] font-bold text-[10px] rounded-md border border-rose-100"
                                    >
                                      {metric}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Tech Stack Pills */}
                            <div>
                              <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block mb-1.5">
                                TOOLS &amp; STACK MASTERED
                              </span>
                              <div className="flex items-center gap-1.5 flex-wrap">
                                {item.techStack.map((tool, i) => (
                                  <span
                                    key={i}
                                    className="px-2.5 py-0.5 bg-slate-100 text-slate-700 font-bold text-[10px] rounded-md border border-slate-200/60"
                                  >
                                    {tool}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Practical Assignment if available */}
                            {item.practicalAssignment && (
                              <div className="p-2.5 sm:p-3 rounded-xl bg-amber-50/70 border border-amber-200/60 text-xs text-amber-950">
                                <span className="font-extrabold uppercase text-[10px] tracking-wider text-amber-800 block mb-0.5 flex items-center gap-1.5">
                                  <Briefcase className="w-3.5 h-3.5 text-amber-600" />
                                  Practical Hands-On Assignment
                                </span>
                                <p className="leading-relaxed text-amber-900 font-medium">{item.practicalAssignment}</p>
                              </div>
                            )}

                            {/* Expected Outcome if available */}
                            {item.expectedOutcome && (
                              <div className="p-2.5 sm:p-3 rounded-xl bg-emerald-50/70 border border-emerald-200/60 text-xs text-emerald-950 flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                <div>
                                  <span className="font-extrabold uppercase text-[10px] tracking-wider text-emerald-800 block mb-0.5">
                                    Expected Outcome
                                  </span>
                                  <p className="leading-relaxed text-emerald-900 font-medium">{item.expectedOutcome}</p>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Sticky Sidebar with Highlights & Audience */}
            <div className="lg:col-span-4 space-y-5 lg:sticky lg:top-24">
              {/* Card 1: Download Complete Brochure Button */}
              <button
                type="button"
                onClick={() => setIsBrochureOpen(true)}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#fe4759] via-[#e63946] to-[#c72234] text-white font-extrabold text-sm sm:text-base shadow-xl shadow-rose-900/15 hover:shadow-2xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Download complete brochure</span>
                <FileDown className="w-5 h-5 stroke-[2.2]" />
              </button>

              {/* Card 2: Program Highlights */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-rose-50 text-[#fe4759] flex items-center justify-center">
                    <Sparkles className="w-4 h-4 stroke-[2.2]" />
                  </div>
                  <h4 className="font-extrabold text-slate-800 text-sm">
                    Key Highlights
                  </h4>
                </div>

                <div className="space-y-3 text-xs font-semibold text-slate-700">
                  {course.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 stroke-[2.5] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 3: Who Is This For */}
              <div className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200/80 space-y-3">
                <h4 className="font-extrabold text-slate-800 text-sm flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#fe4759]" />
                  <span>Who Should Enroll?</span>
                </h4>
                <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc list-inside">
                  {course.targetAudience.map((audience, idx) => (
                    <li key={idx} className="pl-1">
                      {audience}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5B. PRACTICAL PROJECTS & ASSIGNMENTS (If provided) */}
      {course.practicalProjects && course.practicalProjects.length > 0 && (
        <section className="py-16 md:py-20 bg-slate-50/70 border-t border-slate-200/80">
          <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-3">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#fe4759] block">
                LEARN BY EXECUTING
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-800 tracking-tight">
                7 Hands-On <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fe4759] to-[#d02e40]">Practical Projects</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
                No simulated toy assignments. Every project mirrors live client media mandates, real ad spend budgeting, and technical conversion infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {course.practicalProjects.map((proj, pIdx) => (
                <div
                  key={pIdx}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 hover:border-rose-300 shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-8 h-8 rounded-xl bg-rose-50 text-[#fe4759] font-black text-xs flex items-center justify-center border border-rose-100">
                        0{pIdx + 1}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2.5 py-0.5 rounded-full">
                        Live Industry Brief
                      </span>
                    </div>
                    <h3 className="text-base font-extrabold text-slate-900 group-hover:text-[#fe4759] transition-colors mb-2 leading-snug">
                      {proj.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                      {proj.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-emerald-600">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Portfolio-Verified Milestone</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5C. RECOMMENDED TOOLS & PLATFORMS GRID (If provided) */}
      {course.toolsCategories && course.toolsCategories.length > 0 && (
        <section className="py-16 md:py-20 bg-white border-t border-slate-100">
          <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-3">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#fe4759] block">
                COMPREHENSIVE TOOL STACK
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-800 tracking-tight">
                Recommended <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fe4759] to-[#d02e40]">Tools &amp; Platforms</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
                Gain hands-on proficiency with the exact digital advertising, analytics telemetry, AI creation, and CRM automation stack used by top global agencies.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {course.toolsCategories.map((cat, cIdx) => (
                <div
                  key={cIdx}
                  className="bg-slate-50/70 rounded-2xl p-4 sm:p-5 border border-slate-200/80 hover:bg-white hover:border-rose-200 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-slate-800 block mb-2.5 pb-2 border-b border-slate-200/60">
                      {cat.category}
                    </span>
                    <div className="space-y-1.5">
                      {cat.tools.map((tool, tIdx) => (
                        <div
                          key={tIdx}
                          className="text-xs font-semibold text-slate-600 flex items-center gap-1.5"
                        >
                          <span className="w-1 h-1 rounded-full bg-[#fe4759]" />
                          <span>{tool}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5D. FINAL CAPSTONE PROJECT SHOWCASE (If provided) */}
      {course.capstoneProject && (
        <section className="py-16 md:py-20 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden border-t border-slate-800">
          <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs font-bold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5 text-[#fe4759]" />
                  FINAL CAPSTONE BENCHMARK
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
                  {course.capstoneProject.title}
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {course.capstoneProject.description}
                </p>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <span className="text-xs font-black uppercase tracking-wider text-rose-400 block">
                    Comprehensive Evaluation
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Evaluated on strategic thinking, technical accuracy, campaign architecture, attribution telemetry, creative quality, automation efficiency, and data-backed presentation.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={scrollToEnroll}
                  className="px-5 py-3 rounded-xl bg-[#fe4759] hover:bg-[#e03447] text-white font-bold text-xs sm:text-sm shadow-lg shadow-rose-950/40 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Build Your Capstone System</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="lg:col-span-7 bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl">
                <h3 className="text-base font-black text-white mb-4 flex items-center justify-between">
                  <span>13 Core System Deliverables</span>
                  <span className="text-xs font-bold text-rose-400 bg-rose-500/20 px-2.5 py-0.5 rounded-full">
                    End-to-End
                  </span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-200">
                  {course.capstoneProject.deliverables.map((deliv, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-start gap-2 bg-white/5 p-2.5 rounded-xl border border-white/5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5E. ASSESSMENT, CAREERS & OUTCOMES (If provided) */}
      {(course.assessmentCriteria || course.careerOpportunities || course.programOutcomes) && (
        <section className="py-16 md:py-20 bg-slate-50/80 border-t border-slate-200/80">
          <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
            
            {/* Career Opportunities Grid */}
            {course.careerOpportunities && (
              <div>
                <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#fe4759] block">
                    HIGH-GROWTH JOB ROLES
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">
                    Where This Program <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fe4759] to-[#d02e40]">Takes Your Career</span>
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
                  {course.careerOpportunities.map((role, rIdx) => (
                    <div
                      key={rIdx}
                      className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs hover:border-rose-300 hover:shadow-sm transition-all flex items-center gap-2.5"
                    >
                      <div className="w-7 h-7 rounded-lg bg-rose-50 text-[#fe4759] flex items-center justify-center shrink-0">
                        <Briefcase className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-bold text-slate-800 leading-tight">
                        {role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Assessment & Program Outcomes Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
              {/* Left: Assessment Weightage */}
              {course.assessmentCriteria && (
                <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-rose-50 text-[#fe4759] flex items-center justify-center shrink-0">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-base font-extrabold text-slate-900 leading-tight">
                        Assessment &amp; Evaluation
                      </h4>
                      <span className="text-[11px] text-slate-500 font-medium">
                        Suggested Passing Benchmark: 60% Overall
                      </span>
                    </div>
                  </div>

                  <div className="divide-y divide-slate-100 pt-1">
                    {course.assessmentCriteria.map((item, aIdx) => (
                      <div key={aIdx} className="py-2.5 flex items-center justify-between text-xs">
                        <span className="text-slate-700 font-medium">{item.component}</span>
                        <span className="font-extrabold text-[#fe4759] bg-rose-50 px-2 py-0.5 rounded-md">
                          {item.weightage}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-[11px] text-slate-500 leading-relaxed">
                    IDS certification reflects hands-on campaign execution, capstone submission, and practical portfolio defense.
                  </div>
                </div>
              )}

              {/* Right: Program Outcomes Checklist */}
              {course.programOutcomes && (
                <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-rose-50 text-[#fe4759] flex items-center justify-center shrink-0">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-base font-extrabold text-slate-900 leading-tight">
                        Graduate Program Outcomes
                      </h4>
                      <span className="text-[11px] text-slate-500 font-medium">
                        Skills You Will Master &amp; Demonstrate
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {course.programOutcomes.map((outcome, oIdx) => (
                      <div
                        key={oIdx}
                        className="flex items-start gap-2 text-xs text-slate-700 leading-snug"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>
        </section>
      )}

      {/* 6. REAL STORIES & VIDEO TESTIMONIALS */}
      <div className="border-t border-slate-100">
        <SuccessStories />
      </div>

      {/* 7. THE S.C.A.L.E. METHODOLOGY SECTION */}
      <section className="py-16 md:py-24 bg-slate-50/60 relative border-t border-slate-100">
        <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-black text-slate-800 tracking-tight leading-[1.2]">
              Designed for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fe4759] to-[#d02e40] underline decoration-rose-300 decoration-wavy decoration-2 underline-offset-8">
                Tangible Results
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed pt-1">
              Why learning at Institute of Digital Studies (IDS) delivers measurable ROI from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {scaleFramework.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-rose-200 shadow-[0_6px_25px_rgba(0,0,0,0.04)] hover:shadow-xl hover:shadow-rose-500/5 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="text-4xl sm:text-5xl font-black text-[#fe4759] group-hover:scale-110 transition-transform duration-200 text-center mb-2">
                    {item.letter}
                  </div>
                  <h3 className="text-lg font-black text-slate-800 text-center mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-rose-500/90 text-center mb-3 leading-snug">
                    {item.subtitle}
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed text-center mt-2 border-t border-slate-100 pt-3">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. COMPARISON MATRIX SECTION */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-200/80">
        <div className="max-w-[1100px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-200/90 overflow-hidden">
            <div className="bg-[#1E293B] px-6 sm:px-8 py-5 text-white grid grid-cols-12 items-center">
              <div className="col-span-4 sm:col-span-4 text-xs font-black uppercase tracking-wider text-slate-300">
                FEATURES
              </div>
              <div className="col-span-4 sm:col-span-4 text-center">
                <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-white bg-[#fe4759] border border-rose-400/40 px-3.5 py-1 rounded-full inline-block shadow-xs">
                  IDS ADVANTAGE
                </span>
              </div>
              <div className="col-span-4 sm:col-span-4 text-right text-xs font-black uppercase tracking-wider text-slate-400">
                OTHER INSTITUTES
              </div>
            </div>

            <div className="divide-y divide-slate-100">
              {comparisonRows.map((row, index) => {
                const IconComponent = row.icon;
                return (
                  <div
                    key={index}
                    className="px-6 sm:px-8 py-5 grid grid-cols-12 items-center gap-3 sm:gap-4 hover:bg-rose-50/20 transition-colors"
                  >
                    <div className="col-span-4 sm:col-span-4 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-rose-50 text-[#fe4759] flex items-center justify-center shrink-0">
                        <IconComponent className="w-4 h-4 stroke-[2.2]" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-slate-800">
                        {row.feature}
                      </span>
                    </div>

                    <div className="col-span-4 sm:col-span-4 flex items-start sm:items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0 mt-0.5 sm:mt-0 stroke-[2.5]" />
                      <span className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                        {row.ids}
                      </span>
                    </div>

                    <div className="col-span-4 sm:col-span-4 flex items-start sm:items-center gap-2 justify-end sm:justify-start">
                      <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500 shrink-0 mt-0.5 sm:mt-0 stroke-[2.2]" />
                      <span className="text-xs sm:text-sm text-slate-500 leading-snug">
                        {row.others}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-gradient-to-r from-[#fe4759] via-[#e63946] to-[#c72234] px-6 sm:px-8 py-5 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg shadow-rose-950/5">
              <div className="flex items-center gap-3.5 text-center sm:text-left">
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-white stroke-[2.2]" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-black text-white leading-tight">
                    Start Your Learning Journey
                  </h4>
                  <p className="text-xs text-rose-100 mt-0.5">
                    Enroll in {course.name} and get practical mastery on live tools.
                  </p>
                </div>
              </div>

              <button
                onClick={() => scrollToEnroll()}
                className="py-3 px-6 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider text-[#fe4759] bg-white hover:bg-slate-50 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5"
              >
                <span>APPLY NOW</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Brochure Download Lead Capture Modal ── */}
      {isBrochureOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-200">
            <button
              type="button"
              onClick={() => {
                if (!isBrochureSubmitting) {
                  setIsBrochureOpen(false);
                  setBrochureError(null);
                }
              }}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center mx-auto mb-3 text-[#fe4759]">
                <FileDown className="w-6 h-6 stroke-[2.2]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                Download Complete Brochure
              </h3>
              <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">
                Get full curriculum modules, project blueprints, and certifications for{" "}
                <strong className="text-slate-800 font-semibold">{course.name}</strong>.
              </p>
            </div>

            {brochureError && (
              <div className="mb-3.5 p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs font-semibold text-rose-700 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-[#fe4759] shrink-0 mt-0.5" />
                <span>{brochureError}</span>
              </div>
            )}

            <form onSubmit={handleBrochureSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={brochureForm.name}
                  onChange={(e) =>
                    setBrochureForm({ ...brochureForm, name: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#fe4759] focus:ring-2 focus:ring-[#fe4759]/10"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Phone Number (WhatsApp) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={brochureForm.phone}
                  onChange={(e) =>
                    setBrochureForm({ ...brochureForm, phone: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#fe4759] focus:ring-2 focus:ring-[#fe4759]/10"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. rahul@gmail.com"
                  value={brochureForm.email}
                  onChange={(e) =>
                    setBrochureForm({ ...brochureForm, email: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#fe4759] focus:ring-2 focus:ring-[#fe4759]/10"
                />
              </div>

              <button
                type="submit"
                disabled={brochureSubmitted || isBrochureSubmitting}
                className="w-full py-3 px-5 rounded-full bg-[#fe4759] hover:bg-[#e03447] text-white font-bold text-sm shadow-md shadow-[#fe4759]/25 hover:shadow-lg transition-all flex items-center justify-center gap-2 mt-4 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {isBrochureSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Saving & Downloading...</span>
                  </>
                ) : brochureSubmitted ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span>Brochure Sent Successfully!</span>
                  </>
                ) : (
                  <>
                    <FileDown className="w-4 h-4 stroke-[2.2]" />
                    <span>Download Brochure PDF</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 8. Sticky Widgets & Footer */}
      <StickyWidgets />
      <Footer />
    </main>
  );
}
