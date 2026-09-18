"use client";

import React, { useState } from "react";
import Link from "next/link";
import Lottie from "lottie-react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Sparkles,
  GraduationCap,
  Briefcase,
  Target,
  ChevronRight,
  HelpCircle,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import EnrollmentDialog from "@/components/EnrollmentDialog";
import DemoBookingDialog from "@/components/DemoBookingDialog";
import Footer from "@/components/Footer";
import ProgramForm from "@/components/ProgramForm";

import courseAnimation1 from "@/public/assets/Animations/1.1.json";
import courseAnimation2 from "@/public/assets/Animations/2.json";
import courseAnimation3 from "@/public/assets/Animations/3.json";
import courseAnimation4 from "@/public/assets/Animations/4.json";

// Badge SVG icons
const chimg3 = "/svg/chimg3.svg";
const chimg4 = "/svg/clipboard.svg";
const chimg6 = "/svg/verify.svg";

type CategoryFilter = "all" | "diploma" | "specialist" | "foundation" | "executive";

interface CourseItem {
  id: string;
  num: string;
  category: "diploma" | "specialist" | "foundation" | "executive";
  tag: string;
  badge: string;
  duration: string;
  title: string;
  animation: any;
  mode: string;
  salary: string;
  salaryLabel: string;
  projects: string;
  internship: string;
  certification: string;
  content: string;
  skills: string[];
  slug?: string;
  enrolledStudents?: string;
  rating?: string;
}

const courseData: CourseItem[] = [
  {
    id: "master-in-digital-marketing-course",
    num: "01",
    category: "diploma",
    tag: "AI DRIVEN",
    badge: "Flagship Diploma",
    duration: "6 Months",
    title: "Master in Digital Marketing Course",
    animation: courseAnimation1,
    mode: "Offline / Online",
    salary: "₹8.5 LPA",
    salaryLabel: "TOP PLACEMENT",
    projects: "10+ Live Projects",
    internship: "3 Months Guaranteed",
    certification: "Global Certification",
    content:
      "Our premier 6-Month flagship diploma with 100% placement support and a 3-month guaranteed internship. Master end-to-end performance marketing, SEO, live ad campaigns, Generative AI tools, and data analytics with live industry client budgets.",
    skills: [
      "Generative AI & ChatGPT",
      "Advanced SEO & Technical Audits",
      "Meta & Google Ads Funnels",
      "GA4 & Tag Manager",
      "E-commerce & Shopify Growth",
    ],
    slug: "master-in-digital-marketing-course",
    enrolledStudents: "180+ enrolled this batch",
    rating: "4.9/5 (380+ reviews)",
  },
  {
    id: "specialist-in-digital-marketing",
    num: "02",
    category: "specialist",
    tag: "AI INTEGRATED",
    badge: "Fast Track",
    duration: "3 Months",
    title: "Digital Marketing Specialist Course",
    animation: courseAnimation2,
    mode: "Offline / Online",
    salary: "₹6.2 LPA",
    salaryLabel: "AVG. BENCHMARK",
    projects: "5+ Live Projects",
    internship: "Live Client Projects",
    certification: "Industry Recognized",
    content:
      "Accelerated 3-month curriculum designed for graduates and career transitioners seeking high-impact job readiness. Gain intensive practical mastery in paid advertising, search algorithms, lead funnels, and viral social content.",
    skills: [
      "Technical SEO & Search Console",
      "Paid Search (PPC) Architecture",
      "Social Media Ad Scaling",
      "Content & Email Sequences",
      "Conversion Rate Optimization",
    ],
    slug: "specialist-in-digital-marketing",
    enrolledStudents: "140+ enrolled this batch",
    rating: "4.8/5 (240+ reviews)",
  },
  {
    id: "digital-marketing-course-for-business-owners",
    num: "03",
    category: "executive",
    tag: "1:1 COACHING",
    badge: "Executive Track",
    duration: "Custom Timeline",
    title: "Course for Business Owners & Founders",
    animation: courseAnimation3,
    mode: "Online (1:1)",
    salary: "High ROI",
    salaryLabel: "GROWTH MULTIPLIER",
    projects: "Your Own Business as Live Lab",
    internship: "Direct Mentor Access",
    certification: "Executive Credential",
    content:
      "Private 1:1 mentorship designed for entrepreneurs, CXOs, and SMEs. Build high-converting automated sales funnels, scale ad budgets with positive ROAS, audit digital agencies without getting cheated, and own your brand's digital dominance.",
    skills: [
      "Lead Generation & Acquisition Funnels",
      "High-ROAS Ad Budget Scaling",
      "Agency Auditing & Team Oversight",
      "E-commerce Revenue Architecture",
      "Brand Positioning & Authority",
    ],
    slug: "digital-marketing-course-for-business-owners",
    enrolledStudents: "Selective 1:1 Cohorts",
    rating: "4.9/5 (160+ reviews)",
  },
  {
    id: "foundation-in-digital-marketing",
    num: "04",
    category: "foundation",
    tag: "CAREER LAUNCH",
    badge: "Beginners Track",
    duration: "2 Months",
    title: "Foundation in Digital Marketing",
    animation: courseAnimation1,
    mode: "Offline / Online",
    salary: "Entry Level",
    salaryLabel: "CAREER LAUNCH",
    projects: "2+ Live Projects",
    internship: "Practical Lab Training",
    certification: "Foundation Certificate",
    content:
      "Kickstart your digital marketing journey with fundamental principles. Designed for students, beginners, and traditional marketers who want a clear, hands-on introduction to modern search, social, and creative workflows.",
    skills: [
      "Digital Marketing Landscape",
      "Social Media Strategy Essentials",
      "Keyword & On-Page SEO Basics",
      "Paid Ad Campaign Setup",
      "Canva & Creative Production",
    ],
    slug: "foundation-in-digital-marketing",
    enrolledStudents: "95+ enrolled this batch",
    rating: "4.8/5 (190+ reviews)",
  },
  {
    id: "customised-digital-marketing",
    num: "05",
    category: "executive",
    tag: "BESPOKE SYLLABUS",
    badge: "Tailored Pace",
    duration: "Flexible Timeline",
    title: "Customised Course in Digital Marketing",
    animation: courseAnimation4,
    mode: "Offline / Online",
    salary: "Skill Driven",
    salaryLabel: "ROLE DEPENDENT",
    projects: "Custom Capstone Projects",
    internship: "On-Demand Mentorship",
    certification: "Tailored Certification",
    content:
      "A completely personalized digital marketing training program engineered around your specific career objectives, existing knowledge gaps, and preferred schedule. Choose modules on-demand with dedicated expert sessions.",
    skills: [
      "Personalized Module Selection",
      "Flexible Self-Paced Schedule",
      "Niche Technical Specialization",
      "1:1 Portfolio & Project Review",
      "Targeted Industry Interview Prep",
    ],
    enrolledStudents: "Tailored Admissions",
    rating: "4.9/5 (90+ alumni)",
  },
];

export default function Courses() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");

  const filteredCourses = courseData.filter((c) => {
    if (activeFilter === "all") return true;
    return c.category === activeFilter;
  });

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-red-600 selection:text-white">
      <Navbar />

      {/* ─── LUXURY HERO SECTION ─── */}
      <section className="relative w-full bg-white pt-10 sm:pt-14 pb-14 sm:pb-18 border-b border-gray-100 overflow-hidden">
        {/* Background subtle technical grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: "radial-gradient(circle, #EA252514 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-14">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-gray-500 mb-6">
            <Link href="/" className="hover:text-red-600 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <span className="text-gray-900 font-bold">Courses</span>
          </nav>

          {/* Double-bar Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-8 h-[2.5px] bg-red-600 rounded-full" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-red-600">
              ACCREDITED CURRICULUM // 2026 INDUSTRY-READY EDITION
            </span>
          </div>

          {/* Main Headline */}
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-950 tracking-tight leading-[1.08]">
              Master High-Impact <span className="text-red-600">Digital Marketing</span> Programs
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed font-normal">
              Industry-crafted courses designed for rapid career breakthroughs, verified freelancing income, and business scaling.
              Learn with real ad budgets, AI-powered automation, and 100% dedicated placement support.
            </p>
          </div>

          {/* 4 Trust Highlights Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-6 border-t border-gray-200/80">
            <div className="flex items-start gap-3 p-3 bg-stone-50/70 border-l-2 border-red-600">
              <GraduationCap className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-black uppercase text-gray-950 tracking-wider">100% Placement</p>
                <p className="text-[11px] text-gray-500 mt-0.5">Dedicated career cell & interview guarantee</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-stone-50/70 border-l-2 border-red-600">
              <Briefcase className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-black uppercase text-gray-950 tracking-wider">₹8.5 LPA Top Salary</p>
                <p className="text-[11px] text-gray-500 mt-0.5">High benchmark salary packages secured</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-stone-50/70 border-l-2 border-red-600">
              <Sparkles className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-black uppercase text-gray-950 tracking-wider">AI-Integrated</p>
                <p className="text-[11px] text-gray-500 mt-0.5">ChatGPT, Midjourney, Claude & Automation</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-stone-50/70 border-l-2 border-red-600">
              <Target className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-black uppercase text-gray-950 tracking-wider">Live Ad Budgets</p>
                <p className="text-[11px] text-gray-500 mt-0.5">Spend real money on Google & Meta Ads</p>
              </div>
            </div>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-8 pt-4">
            <span className="text-xs font-mono font-bold text-gray-400 mr-2 uppercase tracking-wider hidden sm:inline-block">
              Filter by Track:
            </span>
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === "all"
                  ? "bg-gray-950 text-white shadow-sm"
                  : "bg-stone-100 text-gray-700 hover:bg-stone-200"
              }`}
              style={{
                clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
              }}
            >
              All Programs ({courseData.length})
            </button>

            <button
              onClick={() => setActiveFilter("diploma")}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === "diploma"
                  ? "bg-red-600 text-white shadow-sm"
                  : "bg-stone-100 text-gray-700 hover:bg-stone-200"
              }`}
              style={{
                clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
              }}
            >
              Diploma (6 Months)
            </button>

            <button
              onClick={() => setActiveFilter("specialist")}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === "specialist"
                  ? "bg-red-600 text-white shadow-sm"
                  : "bg-stone-100 text-gray-700 hover:bg-stone-200"
              }`}
              style={{
                clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
              }}
            >
              Specialist (3 Months)
            </button>

            <button
              onClick={() => setActiveFilter("foundation")}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === "foundation"
                  ? "bg-red-600 text-white shadow-sm"
                  : "bg-stone-100 text-gray-700 hover:bg-stone-200"
              }`}
              style={{
                clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
              }}
            >
              Foundation (2 Months)
            </button>

            <button
              onClick={() => setActiveFilter("executive")}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === "executive"
                  ? "bg-red-600 text-white shadow-sm"
                  : "bg-stone-100 text-gray-700 hover:bg-stone-200"
              }`}
              style={{
                clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
              }}
            >
              Executive & Custom
            </button>
          </div>
        </div>
      </section>

      {/* ─── COURSE CATALOG (EDITORIAL SPLIT CARDS) ─── */}
      <section className="py-12 sm:py-16 bg-stone-50/50">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-14">
          <div className="grid grid-cols-1 gap-8 sm:gap-10">
            {filteredCourses.map((course) => {
              return (
                <article
                  key={course.id}
                  id={course.id}
                  className="group relative bg-white border-2 border-gray-950 flex flex-col lg:flex-row overflow-hidden transition-all duration-300 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.18)]"
                >
                  {/* LEFT STAGE: Media Theater & Visual Identity */}
                  <div className="relative w-full lg:w-[40%] bg-gradient-to-b from-[#FFF5F5] via-stone-50/80 to-white text-gray-950 p-6 sm:p-8 flex flex-col justify-between overflow-hidden border-b lg:border-b-0 lg:border-r border-gray-100">
                    {/* Subtle Red Dot Texture */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 opacity-40"
                      style={{
                        backgroundImage: "radial-gradient(circle, #EA252518 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                      }}
                    />

                    {/* Graphic Watermark Number */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -bottom-6 right-2 font-black text-8xl text-gray-200/40 select-none font-mono"
                    >
                      {course.num}
                    </span>

                    {/* Top Metadata Header */}
                    <div className="relative z-10 flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-black text-red-600 tracking-wider">
                          {"//"} {course.num}
                        </span>
                        <span className="bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1">
                          {course.badge}
                        </span>
                      </div>

                      <span className="text-xs font-mono font-bold text-gray-900 bg-white px-3 py-1 border border-gray-200 shadow-xs flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-red-600" />
                        {course.duration}
                      </span>
                    </div>

                    {/* Lottie Animation Media Canvas */}
                    <div className="w-full flex-1 flex items-center justify-center py-4 relative z-10 group-hover:scale-105 transition-transform duration-500">
                      <div className="w-full max-w-[260px] h-[180px] sm:h-[220px]">
                        <Lottie
                          animationData={course.animation}
                          loop
                          autoplay
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>

                    {/* Bottom stage badge tags */}
                    <div className="relative z-10 flex flex-wrap items-center gap-2 mt-4 pt-3 border-t border-gray-200/60">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold bg-white border border-gray-200 text-gray-700">
                        <img src={chimg6} alt="Certification" className="w-3.5 h-3.5" />
                        {course.certification}
                      </span>

                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold bg-white border border-gray-200 text-gray-700">
                        <img src={chimg4} alt="Projects" className="w-3.5 h-3.5" />
                        {course.projects}
                      </span>

                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold bg-white border border-gray-200 text-gray-700">
                        <img src={chimg3} alt="Language" className="w-3.5 h-3.5" />
                        Hindi / English
                      </span>
                    </div>
                  </div>

                  {/* SIGNATURE RED ACCENT STRIP (Responsive) */}
                  <div className="h-[4px] lg:h-auto lg:w-[4px] bg-red-600 flex-shrink-0" />

                  {/* RIGHT STAGE: Editorial Intelligence Body */}
                  <div className="p-6 sm:p-8 lg:w-[60%] flex flex-col justify-between bg-white">
                    <div>
                      {/* Sub-header meta bar */}
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-2">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center gap-1 text-red-600 font-mono">
                            <Sparkles className="w-3.5 h-3.5" />
                            {course.tag}
                          </span>
                          <span>•</span>
                          <span className="text-gray-700">{course.mode}</span>
                        </div>

                        {course.internship && (
                          <span className="bg-red-50 text-red-700 px-2.5 py-0.5 text-[11px] font-bold border border-red-200/60">
                            ★ {course.internship}
                          </span>
                        )}
                      </div>

                      {/* Course Title */}
                      <h2 className="text-2xl sm:text-3xl font-black text-gray-950 group-hover:text-red-600 transition-colors tracking-tight leading-tight mb-3">
                        {course.slug ? (
                          <Link href={`/courses/${course.slug}`} className="hover:underline">
                            {course.title}
                          </Link>
                        ) : (
                          course.title
                        )}
                      </h2>

                      {/* Benchmark Package / Growth Callout */}
                      <div className="inline-flex items-baseline gap-3 py-2 px-3 bg-stone-50 border-l-4 border-red-600 mb-4">
                        <span className="text-xl sm:text-2xl font-black text-gray-950 leading-none">
                          {course.salary}
                        </span>
                        <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-gray-500">
                          [{course.salaryLabel}]
                        </span>
                      </div>

                      {/* Course Narrative Description */}
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5 font-normal">
                        {course.content}
                      </p>

                      {/* Skills Covered Strip */}
                      <div className="mb-6">
                        <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-gray-400 mb-2">
                          Key Modules & Tool proficiencies:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {course.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold bg-stone-100 hover:bg-stone-200/80 text-gray-800 transition-colors"
                            >
                              <CheckCircle2 className="w-3 h-3 text-red-600 flex-shrink-0" />
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* ACTION CTAs & Social Proof Footer */}
                    <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      {/* Button Group */}
                      <div className="flex flex-wrap items-center gap-3">
                        <EnrollmentDialog courseTitle={course.title}>
                          <button
                            className="bg-red-600 text-white text-xs sm:text-sm font-black uppercase tracking-wider px-6 py-3 hover:bg-red-700 transition-all cursor-pointer active:scale-95 shadow-xs"
                            style={{
                              clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                            }}
                          >
                            Enroll Now
                          </button>
                        </EnrollmentDialog>

                        <DemoBookingDialog courseTitle={course.title}>
                          <button
                            className="border-2 border-gray-950 text-gray-950 text-xs sm:text-sm font-black uppercase tracking-wider px-5 py-2.5 hover:bg-gray-950 hover:text-white transition-all cursor-pointer active:scale-95"
                            style={{
                              clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                            }}
                          >
                            Book Free Demo
                          </button>
                        </DemoBookingDialog>

                        {course.slug && (
                          <Link
                            href={`/courses/${course.slug}`}
                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-red-600 hover:text-red-700 hover:underline px-2 py-2 group/link"
                          >
                            <span>Explore Full Syllabus</span>
                            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                          </Link>
                        )}
                      </div>

                      {/* Batch Status / Review badge */}
                      <div className="text-left sm:text-right sm:self-center">
                        <p className="text-xs font-mono font-bold text-gray-900">
                          {course.enrolledStudents || "High Demand Batch"}
                        </p>
                        <p className="text-[11px] text-gray-500 font-medium">
                          {course.rating || "★ 4.9 Rating"}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── PROGRAM COMPARISON MATRIX SECTION ─── */}
      <section className="py-16 sm:py-20 bg-white border-t border-gray-200">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-14">
          <div className="max-w-2xl mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-8 h-[2.5px] bg-red-600 rounded-full" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-red-600">
                DECISION MATRIX // PROGRAM COMPARISON
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-950 tracking-tight">
              Which Course Fits Your Ambition?
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Compare our programs across duration, practical exposure, and career outcomes to make an informed decision.
            </p>
          </div>

          {/* Responsive Comparison Table */}
          <div className="overflow-x-auto border-2 border-gray-950 bg-white shadow-xs">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-gray-950 text-white text-xs font-mono font-black uppercase tracking-wider border-b-2 border-red-600">
                  <th className="py-4 px-5">Program Name</th>
                  <th className="py-4 px-4">Duration</th>
                  <th className="py-4 px-4">Mode</th>
                  <th className="py-4 px-4">Live Projects</th>
                  <th className="py-4 px-4">Placement / Internship</th>
                  <th className="py-4 px-4">Ideal For</th>
                  <th className="py-4 px-5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-xs sm:text-sm">
                <tr className="hover:bg-red-50/40 transition-colors">
                  <td className="py-4 px-5 font-bold text-gray-950">
                    <span className="text-red-600 font-mono mr-1.5">01.</span>
                    Master in Digital Marketing
                  </td>
                  <td className="py-4 px-4 font-mono font-semibold">6 Months</td>
                  <td className="py-4 px-4 text-gray-600">Offline / Online</td>
                  <td className="py-4 px-4 font-bold text-red-600">10+ Projects</td>
                  <td className="py-4 px-4">
                    <span className="inline-block bg-green-100 text-green-800 text-[11px] font-bold px-2 py-0.5 rounded">
                      100% Placement + 3 Mo Internship
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-600">Graduates, Job Seekers, Career Switchers</td>
                  <td className="py-4 px-5 text-right">
                    <Link
                      href="/courses/master-in-digital-marketing-course"
                      className="text-xs font-black uppercase tracking-wider text-red-600 hover:text-red-700 hover:underline"
                    >
                      View Details →
                    </Link>
                  </td>
                </tr>

                <tr className="hover:bg-red-50/40 transition-colors bg-stone-50/50">
                  <td className="py-4 px-5 font-bold text-gray-950">
                    <span className="text-red-600 font-mono mr-1.5">02.</span>
                    Digital Marketing Specialist
                  </td>
                  <td className="py-4 px-4 font-mono font-semibold">3 Months</td>
                  <td className="py-4 px-4 text-gray-600">Offline / Online</td>
                  <td className="py-4 px-4 font-bold text-gray-900">5+ Projects</td>
                  <td className="py-4 px-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-[11px] font-bold px-2 py-0.5 rounded">
                      Live Client Campaigns
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-600">Working Professionals, Marketers</td>
                  <td className="py-4 px-5 text-right">
                    <Link
                      href="/courses/specialist-in-digital-marketing"
                      className="text-xs font-black uppercase tracking-wider text-red-600 hover:text-red-700 hover:underline"
                    >
                      View Details →
                    </Link>
                  </td>
                </tr>

                <tr className="hover:bg-red-50/40 transition-colors">
                  <td className="py-4 px-5 font-bold text-gray-950">
                    <span className="text-red-600 font-mono mr-1.5">03.</span>
                    Business Owners & Founders
                  </td>
                  <td className="py-4 px-4 font-mono font-semibold">Custom / 2 Mo</td>
                  <td className="py-4 px-4 text-gray-600">Online (1:1)</td>
                  <td className="py-4 px-4 font-bold text-red-600">Your Business</td>
                  <td className="py-4 px-4">
                    <span className="inline-block bg-amber-100 text-amber-800 text-[11px] font-bold px-2 py-0.5 rounded">
                      High ROAS Mentorship
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-600">Entrepreneurs, Agency Heads, CXOs</td>
                  <td className="py-4 px-5 text-right">
                    <Link
                      href="/courses/digital-marketing-course-for-business-owners"
                      className="text-xs font-black uppercase tracking-wider text-red-600 hover:text-red-700 hover:underline"
                    >
                      View Details →
                    </Link>
                  </td>
                </tr>

                <tr className="hover:bg-red-50/40 transition-colors bg-stone-50/50">
                  <td className="py-4 px-5 font-bold text-gray-950">
                    <span className="text-red-600 font-mono mr-1.5">04.</span>
                    Foundation in Digital Marketing
                  </td>
                  <td className="py-4 px-4 font-mono font-semibold">2 Months</td>
                  <td className="py-4 px-4 text-gray-600">Offline / Online</td>
                  <td className="py-4 px-4 font-bold text-gray-900">2+ Projects</td>
                  <td className="py-4 px-4">
                    <span className="inline-block bg-stone-200 text-gray-800 text-[11px] font-bold px-2 py-0.5 rounded">
                      Practical Labs
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-600">College Students, Absolute Beginners</td>
                  <td className="py-4 px-5 text-right">
                    <Link
                      href="/courses/foundation-in-digital-marketing"
                      className="text-xs font-black uppercase tracking-wider text-red-600 hover:text-red-700 hover:underline"
                    >
                      View Details →
                    </Link>
                  </td>
                </tr>

                <tr className="hover:bg-red-50/40 transition-colors">
                  <td className="py-4 px-5 font-bold text-gray-950">
                    <span className="text-red-600 font-mono mr-1.5">05.</span>
                    Customised Digital Marketing
                  </td>
                  <td className="py-4 px-4 font-mono font-semibold">Flexible</td>
                  <td className="py-4 px-4 text-gray-600">Offline / Online</td>
                  <td className="py-4 px-4 font-bold text-red-600">Custom Built</td>
                  <td className="py-4 px-4">
                    <span className="inline-block bg-purple-100 text-purple-800 text-[11px] font-bold px-2 py-0.5 rounded">
                      Role Specialization
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-600">Freelancers, Specialized Teams</td>
                  <td className="py-4 px-5 text-right">
                    <DemoBookingDialog courseTitle="Customised Course in Digital Marketing">
                      <button className="text-xs font-black uppercase tracking-wider text-red-600 hover:text-red-700 hover:underline">
                        Inquire Now →
                      </button>
                    </DemoBookingDialog>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── COUNSELOR ADVISORY STRIP ─── */}
      <section className="bg-stone-100 border-y border-gray-200 py-10">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 bg-red-600 text-white flex items-center justify-center flex-shrink-0"
              style={{
                clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
              }}
            >
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-black text-gray-950">Not sure which program matches your background?</h3>
              <p className="text-sm text-gray-600">Speak with our senior admission counselors for a free 15-minute profile assessment.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <DemoBookingDialog courseTitle="General Counseling & Profile Evaluation">
              <button
                className="bg-gray-950 text-white text-xs sm:text-sm font-black uppercase tracking-wider px-6 py-3 hover:bg-red-600 transition-all cursor-pointer active:scale-95"
                style={{
                  clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                }}
              >
                Request Free Counseling
              </button>
            </DemoBookingDialog>
          </div>
        </div>
      </section>

      {/* ─── LEAD CAPTURE PROGRAM FORM ─── */}
      <ProgramForm />

      {/* ─── FOOTER ─── */}
      <Footer />
    </div>
  );
}
