"use client";

import React, { useState, useEffect, useCallback } from "react";
import Lottie from "lottie-react";
import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

import courseAnimation1 from "@/public/assets/Animations/1.1.json";
import courseAnimation2 from "@/public/assets/Animations/2.json";
import courseAnimation3 from "@/public/assets/Animations/3.json";
import courseAnimation4 from "@/public/assets/Animations/4.json";

import EnrollmentDialog from "@/components/EnrollmentDialog";
import DemoBookingDialog from "@/components/DemoBookingDialog";

interface Course {
  id: string;
  num: string;
  badge: string;
  duration: string;
  title: string;
  animation: any;
  mode: string;
  salary: string;
  salaryLabel: string;
  projects: string;
  internship: string;
  content: string;
  skills: string[];
}

const courses: Course[] = [
  {
    id: "master-in-digital-marketing-course",
    num: "01",
    badge: "Flagship Diploma",
    duration: "6 Months",
    title: "Master in Digital Marketing Course",
    animation: courseAnimation1,
    mode: "Offline / Online",
    salary: "₹8.5 LPA",
    salaryLabel: "TOP PLACEMENT",
    projects: "10+ Live Projects",
    internship: "3 Months Guaranteed",
    content:
      "Our 6-Month Digital Marketing Course in Noida with 100% Internship provides hands-on experience in SEO, SEM, social media, content marketing, and more, along with a guaranteed internship to kickstart your career.",
    skills: ["Generative AI & ChatGPT", "Advanced SEO & Audit", "Meta & Google Ads", "GA4 Analytics"],
  },
  {
    id: "specialist-in-digital-marketing",
    num: "02",
    badge: "Fast Track",
    duration: "3 Months",
    title: "Digital Marketing Specialist Course",
    animation: courseAnimation2,
    mode: "Offline / Online",
    salary: "₹6.2 LPA",
    salaryLabel: "AVG. BENCHMARK",
    projects: "5+ Live Projects",
    internship: "Live Client Projects",
    content:
      "Our Digital Marketing Specialist Course (3 months) offers in-depth training on SEO, SEM, social media marketing, content strategy, PPC, email campaigns, and analytics, preparing you to become an industry expert with Live Project Training.",
    skills: ["SEO & Technical SEM", "Paid Social Ad Funnels", "PPC Campaigns", "Content Strategy"],
  },
  {
    id: "digital-marketing-course-for-business-owners",
    num: "03",
    badge: "1:1 Executive",
    duration: "Custom Timeline",
    title: "Course for Business Owners",
    animation: courseAnimation3,
    mode: "Online (1:1)",
    salary: "High ROI",
    salaryLabel: "GROWTH MULTIPLIER",
    projects: "10+ Live Projects",
    internship: "Private Mentorship",
    content:
      "Our 1:1 Digital Marketing Course for Business Owners offers personalized coaching tailored to your business needs, covering SEO, social media, PPC, content strategies, and more to drive growth and success.",
    skills: ["Lead Generation Systems", "Ad Budget Scaling", "Agency Auditing", "E-commerce Funnels"],
  },
  {
    id: "customised-digital-marketing",
    num: "04",
    badge: "Tailored Pace",
    duration: "Flexible Timeline",
    title: "Customised Course in Digital Marketing",
    animation: courseAnimation4,
    mode: "Offline / Online",
    salary: "Skill Driven",
    salaryLabel: "ROLE DEPENDENT",
    projects: "Custom Projects",
    internship: "On-Demand Mentorship",
    content:
      "Our Customised - Digital Marketing Course According to Your Needs offers personalized coaching tailored to you according to your needs SEO, social media, PPC, content strategies, and more to drive growth and success.",
    skills: ["Modular Curriculum", "Custom Timeline", "Niche Skill Mastery", "Direct Mentorship"],
  },
  {
    id: "foundation-in-digital-marketing",
    num: "05",
    badge: "Beginners Track",
    duration: "2 Months",
    title: "Foundation in Digital Marketing",
    animation: courseAnimation1,
    mode: "Offline / Online",
    salary: "Entry Level",
    salaryLabel: "CAREER LAUNCH",
    projects: "2+ Live Projects",
    internship: "Practical Labs",
    content:
      "Launch your career with our Foundation in Digital Marketing course in Noida. Learn SEO, Social Media, PPC, Email Marketing & more. Hands-on training with live projects and placement assistance.",
    skills: ["Digital Marketing Basics", "Social Media Essentials", "Search Engine Basics", "Ad Fundamentals"],
  },
];

const CoursesSection: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Smooth auto-slide every 4.5 seconds, pauses when hovered
  useEffect(() => {
    if (!emblaApi || isHovered) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4500);
    return () => clearInterval(interval);
  }, [emblaApi, isHovered]);

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-t border-gray-100 overflow-hidden">
      {/* Background subtle technical grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, #EA252514 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-14">
        {/* ─── SECTION HEADER ─── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-8 h-[2.5px] bg-red-600 rounded-full" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-red-600">
                Accredited Curriculum // 2026 Edition
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-950 tracking-tight leading-[1.08]">
              Explore our <span className="text-red-600">Digital Marketing</span> Courses
            </h2>

            <p className="mt-3 text-gray-600 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
              Industry-designed curriculum with hands-on projects, real-world live campaigns, and dedicated placement assistance.
            </p>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-3 flex-shrink-0 self-start md:self-end">
            <div className="hidden sm:flex items-center gap-2 mr-2 font-mono text-xs font-bold text-gray-400">
              <span className="text-gray-950 text-sm">0{selectedIndex + 1}</span>
              <span>/</span>
              <span>0{courses.length}</span>
            </div>

            <button
              onClick={scrollPrev}
              aria-label="Previous course"
              className="w-12 h-12 rounded-none border-2 border-gray-950 bg-white hover:bg-gray-950 hover:text-white flex items-center justify-center transition-all shadow-sm cursor-pointer active:scale-95"
              style={{
                clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
              }}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next course"
              className="w-12 h-12 rounded-none border-2 border-gray-950 bg-white hover:bg-gray-950 hover:text-white flex items-center justify-center transition-all shadow-sm cursor-pointer active:scale-95"
              style={{
                clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
              }}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ─── CAROUSEL TRACK ─── */}
        <div
          className="overflow-hidden cursor-grab active:cursor-grabbing pb-6 -mx-2 px-2"
          ref={emblaRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex -ml-5 sm:-ml-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 pl-5 sm:pl-6"
              >
                {/* ─── LUXURY EDITORIAL SPLIT CARD ─── */}
                <div className="group relative bg-white border-2 border-gray-950 flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.18)] hover:-translate-y-2">
                  
                  {/* TOP STAGE: Clean Light Media Theater */}
                  <div className="relative bg-gradient-to-b from-[#FFF5F5] via-stone-50/70 to-white text-gray-950 p-5 min-h-[180px] flex flex-col justify-between overflow-hidden border-b border-gray-100">
                    {/* Subtle Red Dot Texture */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 opacity-40"
                      style={{
                        backgroundImage: "radial-gradient(circle, #EA252518 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                      }}
                    />

                    {/* Giant Graphic Number Watermark */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -bottom-4 right-2 font-black text-6xl text-gray-200/50 select-none font-mono"
                    >
                      {course.num}
                    </span>

                    {/* Header Row */}
                    <div className="relative z-10 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-black text-red-600 tracking-wider">
                          // {course.num}
                        </span>
                        <span className="bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-none">
                          {course.badge}
                        </span>
                      </div>

                      <span className="text-[11px] font-mono font-bold text-gray-900 bg-white px-2.5 py-0.5 rounded-none border border-gray-200 shadow-xs">
                        {course.duration}
                      </span>
                    </div>

                    {/* Lottie Animation Canvas */}
                    <div className="w-full flex-1 flex items-center justify-center py-1 relative z-10 group-hover:scale-105 transition-transform duration-500">
                      <div className="w-full max-w-[180px] h-[115px]">
                        <Lottie
                          animationData={course.animation}
                          loop
                          autoplay
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  {/* SIGNATURE RED DIVIDER LINE (Hero Section Motif) */}
                  <div className="h-[3px] w-full bg-red-600 relative z-20 group-hover:h-[4px] transition-all" />

                  {/* BOTTOM STAGE: Editorial Intelligence Body */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-white">
                    <div>
                      {/* Meta Delivery Line */}
                      <div className="flex items-center justify-between text-[11px] font-extrabold uppercase tracking-wider text-gray-500 mb-1.5">
                        <span>{course.mode}</span>
                        <span className="text-gray-950 font-bold">{course.projects}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-black text-gray-950 group-hover:text-red-600 transition-colors leading-snug tracking-tight mb-2">
                        {course.title}
                      </h3>

                      {/* Placement Callout Block */}
                      <div className="flex items-baseline gap-2 py-1.5 px-2.5 bg-stone-50 border-l-3 border-red-600 mb-3">
                        <span className="text-lg font-black text-gray-950 leading-none">
                          {course.salary}
                        </span>
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-gray-500">
                          {course.salaryLabel}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 text-xs leading-relaxed mb-3.5 line-clamp-2 font-normal">
                        {course.content}
                      </p>

                      {/* Core Modules Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {course.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 text-[10.5px] font-bold text-gray-800 bg-gray-100/90 border border-gray-200 px-2 py-0.5"
                          >
                            <span className="w-1 h-1 bg-red-600 rounded-full" />
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Deck */}
                    <div className="pt-3 border-t border-gray-100 mt-auto flex flex-col gap-2.5">
                      {/* Primary Chamfered CTA (Hero Button Styling) */}
                      <EnrollmentDialog courseTitle={course.title}>
                        <button
                          className="w-full bg-red-600 hover:bg-gray-950 text-white font-black text-xs uppercase tracking-widest py-3 px-4 transition-all duration-200 flex items-center justify-center gap-2 group/btn cursor-pointer shadow-md"
                          style={{
                            clipPath:
                              "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                          }}
                        >
                          <span>Enroll In Program</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </EnrollmentDialog>

                      {/* Secondary Action Row */}
                      <div className="flex items-center justify-center pt-0.5">
                        <DemoBookingDialog courseTitle={course.title}>
                          <button className="text-xs font-bold uppercase tracking-wider text-gray-600 hover:text-red-600 transition-colors cursor-pointer py-1">
                            Book Free Demo Class
                          </button>
                        </DemoBookingDialog>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── BOTTOM CONTROLS & PAGINATION ─── */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100 text-xs text-gray-500">
          <div className="flex items-center gap-1.5">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 transition-all cursor-pointer ${
                  index === selectedIndex
                    ? "w-8 bg-red-600"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <p className="text-[11px] font-mono font-bold text-gray-400 uppercase tracking-wider">
            {isHovered ? "[ PAUSED ON HOVER ]" : "[ AUTO-SWIPING ACTIVE ]"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
