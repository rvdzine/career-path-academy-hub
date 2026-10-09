"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyWidgets from "@/components/StickyWidgets";
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
} from "lucide-react";
import api from "@/lib/api";

interface CourseDetailViewProps {
  course: CourseData;
}

export type FormMode = "demo" | "enroll";

export default function CourseDetailView({ course }: CourseDetailViewProps) {
  const [formMode, setFormMode] = useState<FormMode>("demo");
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
  const [submittedMode, setSubmittedMode] = useState<FormMode>("demo");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Accordion state: first module expanded by default
  const [expandedModules, setExpandedModules] = useState<number[]>([1]);

  const getCourseDemoSlug = (courseCode: string, courseName: string): string => {
    const code = (courseCode || "").toUpperCase();
    const name = (courseName || "").toLowerCase();
    if (code === "DM01M" || name.includes("master")) {
      return "master_dm_internship";
    }
    if (code === "DM01S" || name.includes("specialist")) {
      return "specialist_dm";
    }
    if (code === "DM01B" || name.includes("business")) {
      return "dm_business_owners";
    }
    return "custom_dm";
  };

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
      if (formMode === "demo") {
        const payload = {
          full_name: trimmedName,
          email: trimmedEmail,
          phone: cleanPhone,
          course: getCourseDemoSlug(course.courseCode, course.name),
          course_title: course.name,
          experience_level: formData.experienceLevel,
          learning_goals: formData.learningGoals.trim() || undefined,
        };

        const res = await api.post("/online-demo/book/", payload);
        if (res.status === 200 || res.status === 201) {
          setSubmittedMode("demo");
          setIsSubmitted(true);
        }
      } else {
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
          setSubmittedMode("enroll");
          setIsSubmitted(true);
        }
      }
    } catch (err: any) {
      console.error("Form submission error:", err);
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
          formMode === "demo"
            ? "You have already booked a free demo for this course with this contact number/email."
            : "This account is already registered/enrolled for this course."
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

  const scrollToEnroll = (mode: FormMode = "enroll") => {
    setFormMode(mode);
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
        <div className="max-w-[1400px] w-full mx-auto flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-[#fe4759] transition-colors">
            Home
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-400">Programs</span>
          <span className="text-slate-300">/</span>
          <span className="text-slate-800 font-semibold truncate max-w-xs sm:max-w-md">
            {course.name}
          </span>
        </div>
      </div>

      {/* 3. HERO SECTION */}
      <section className="relative pt-8 pb-16 lg:pt-12 lg:pb-20 bg-gradient-to-b from-[#FBFDFF] via-white to-white overflow-hidden border-b border-slate-100">
        <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Headline, Stats, Overview */}
            <div className="lg:col-span-7 space-y-6">
              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-slate-800 tracking-tight leading-[1.15]">
                {course.headlinePre} <br />
                <span className="text-[#fe4759]">
                  {course.headlineHighlight}
                </span>{" "}
                {course.headlinePost}
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-[17px] text-slate-600 font-normal leading-relaxed max-w-xl">
                {course.subheadline}
              </p>

              {/* Course Meta Specs Pill Row */}
              <div className="flex items-center flex-wrap gap-3 text-xs sm:text-sm font-semibold text-slate-700 pt-1">
                <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200/80 px-3 py-1.5 rounded-lg">
                  <Clock className="w-4 h-4 text-[#fe4759] shrink-0" />
                  <span>Duration: <strong className="text-slate-900">{course.duration}</strong></span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200/80 px-3 py-1.5 rounded-lg">
                  <Globe className="w-4 h-4 text-[#fe4759] shrink-0" />
                  <span>Mode: <strong className="text-slate-900">{course.mode.split("(")[0].trim()}</strong></span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200/80 px-3 py-1.5 rounded-lg">
                  <Award className="w-4 h-4 text-[#fe4759] shrink-0" />
                  <span>Code: <strong className="text-slate-900">{course.courseCode}</strong></span>
                </div>
              </div>

              {/* Two Statistics Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg pt-2">
                <div className="bg-[#FFF8F9] border border-rose-100 rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 shadow-2xs">
                  <div className="w-1.5 h-10 bg-[#fe4759] rounded-full shrink-0" />
                  <div>
                    <div className="text-2xl sm:text-[26px] font-black text-slate-800 leading-none">
                      {course.statRating}
                    </div>
                    <div className="text-xs text-slate-500 font-medium mt-1">
                      {course.statRatingLabel}
                    </div>
                  </div>
                </div>

                <div className="bg-[#FFF8F9] border border-rose-100 rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 shadow-2xs">
                  <div className="w-1.5 h-10 bg-[#fe4759] rounded-full shrink-0" />
                  <div>
                    <div className="text-2xl sm:text-[26px] font-black text-slate-800 leading-none">
                      {course.statPartners}
                    </div>
                    <div className="text-xs text-slate-500 font-medium mt-1">
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
                className="w-full max-w-[460px] bg-white rounded-3xl p-6 sm:p-7 shadow-[0_15px_45px_rgba(0,0,0,0.06)] border border-slate-100 transition-all"
              >
                {/* 2-Option Segmented Tab Switcher */}
                <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-2xl mb-4">
                  <button
                    type="button"
                    onClick={() => {
                      setFormMode("demo");
                      setErrorMessage(null);
                    }}
                    className={`py-2.5 px-3 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      formMode === "demo"
                        ? "bg-[#fe4759] text-white shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Book Free Demo</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setFormMode("enroll");
                      setErrorMessage(null);
                    }}
                    className={`py-2.5 px-3 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      formMode === "enroll"
                        ? "bg-[#fe4759] text-white shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <Award className="w-3.5 h-3.5" />
                    <span>Enroll Now</span>
                  </button>
                </div>

                {/* Dynamic Header */}
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-[22px] font-black text-slate-800 tracking-tight">
                    {formMode === "demo" ? "Book Your Free Demo Class" : `Enroll in ${course.name}`}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {formMode === "demo"
                      ? `Attend a live interactive walkthrough with a senior industry mentor for ${course.name}.`
                      : `Submit your admission form to secure your seat and batch timings for ${course.name}.`}
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
                    <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center shadow-xs">
                      <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                    </div>
                    <h4 className="text-lg font-extrabold text-slate-800">
                      {submittedMode === "demo" ? "Demo Class Booked Successfully!" : "Enrollment Submitted Successfully!"}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
                      {submittedMode === "demo"
                        ? "Thank you! Our academic counselor will contact you via WhatsApp/Phone shortly to confirm your preferred demo class slot."
                        : "Thank you! Your enrollment application has been recorded. Our admissions team will reach out with the onboarding schedule and fee confirmation."}
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
                      ← Submit another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                    {errorMessage && (
                      <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs font-semibold text-rose-700 flex items-start gap-2 animate-in fade-in">
                        <AlertCircle className="w-4 h-4 text-[#fe4759] shrink-0 mt-0.5" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#fe4759] focus:ring-1 focus:ring-[#fe4759] outline-none transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@gmail.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#fe4759] focus:ring-1 focus:ring-[#fe4759] outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Phone Number *
                        </label>
                        <div className="flex rounded-xl border border-slate-200 overflow-hidden focus-within:border-[#fe4759] focus-within:ring-1 focus-within:ring-[#fe4759] transition-all">
                          <div className="bg-slate-50/70 border-r border-slate-200 px-2.5 py-2.5 flex items-center gap-1 text-[11px] font-bold text-slate-700 shrink-0 select-none">
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
                            className="w-full px-3 py-2.5 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Current Profile / Experience Level *
                      </label>
                      <select
                        value={formData.experienceLevel}
                        onChange={(e) =>
                          setFormData({ ...formData, experienceLevel: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 bg-white focus:border-[#fe4759] focus:ring-1 focus:ring-[#fe4759] outline-none transition-all cursor-pointer"
                      >
                        <option value="fresher_student">Student / Fresher</option>
                        <option value="working_professional">Working Professional</option>
                        <option value="business_owner">Business Owner / Entrepreneur</option>
                        <option value="freelancer">Freelancer</option>
                        <option value="career_switcher">Career Switcher</option>
                        <option value="home_maker">Homemaker</option>
                        <option value="others">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Learning Goals <span className="text-slate-400 font-normal lowercase">(optional)</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Job switch, Freelancing, Business growth"
                        value={formData.learningGoals}
                        onChange={(e) =>
                          setFormData({ ...formData, learningGoals: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#fe4759] focus:ring-1 focus:ring-[#fe4759] outline-none transition-all"
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
                        className="text-[11px] text-slate-600 cursor-pointer"
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
                      className="w-full py-3.5 px-4 rounded-xl text-center text-sm font-bold text-white bg-[#fe4759] hover:bg-[#e0384a] shadow-md shadow-[#fe4759]/25 hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 mt-2 disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <span>Processing...</span>
                      ) : (
                        <>
                          <span>
                            {formMode === "demo" ? "Book Free Demo Class" : `Submit Enrollment for ${course.courseCode}`}
                          </span>
                          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                        </>
                      )}
                    </button>

                    <div className="relative my-2.5 flex items-center justify-center">
                      <div className="border-t border-slate-100 w-full" />
                      <span className="bg-white px-3 text-[10px] uppercase font-bold text-slate-400">
                        OR
                      </span>
                    </div>

                    <a
                      href={`https://wa.me/919315471293?text=Hi%2C%20I%20would%20like%20to%20${formMode === "demo" ? "book%20a%20free%20demo%20class" : "enroll"}%20for%20${encodeURIComponent(course.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl text-center text-xs font-bold text-slate-800 bg-[#FFF5F6] border border-rose-100 hover:bg-[#FFEBEF] transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#25D366]">
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

      {/* 4. OTHER COURSES QUICK SWITCHER */}
      <section className="bg-slate-900 text-white py-4 px-4 sm:px-6">
        <div className="max-w-[1400px] w-full mx-auto flex items-center justify-between flex-wrap gap-3 text-xs">
          <span className="font-bold text-slate-400 uppercase tracking-wider text-[11px]">
            Explore All 4 Certified Programs:
          </span>
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            {COURSES_DATA.map((c) => {
              const isCurrent = c.id === course.id;
              return (
                <Link
                  key={c.id}
                  href={`/courses/${c.slug}`}
                  className={`px-3 py-1.5 rounded-full font-bold transition-all ${
                    isCurrent
                      ? "bg-[#fe4759] text-white shadow-xs"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
                  }`}
                >
                  {c.name.replace(" Course", "")} ({c.duration})
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. DETAILED CURRICULUM MODULES SECTION */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-3">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#fe4759] block">
              {course.curriculumCategory}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 tracking-tight leading-[1.15]">
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
                          <div className="pl-3 sm:pl-4 border-l-2 border-rose-300 space-y-3 mt-2">
                            <div>
                              <h5 className="text-xs sm:text-sm font-extrabold text-slate-800 tracking-tight">
                                {item.subtitle}
                              </h5>
                              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mt-1">
                                {item.desc}
                              </p>
                            </div>

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
              {/* Card 1: Syllabus PDF Download Button */}
              <button
                onClick={() => scrollToEnroll("demo")}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#fe4759] via-[#e63946] to-[#c72234] text-white font-extrabold text-sm sm:text-base shadow-xl shadow-rose-900/15 hover:shadow-2xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Download Complete Syllabus PDF</span>
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

      {/* 6. THE S.C.A.L.E. METHODOLOGY SECTION */}
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
                onClick={() => scrollToEnroll("enroll")}
                className="py-3 px-6 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider text-[#fe4759] bg-white hover:bg-slate-50 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5"
              >
                <span>APPLY NOW</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Sticky Widgets & Footer */}
      <StickyWidgets />
      <Footer />
    </main>
  );
}
