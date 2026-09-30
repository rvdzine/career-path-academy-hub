"use client";

import React from "react";
import Image from "next/image";
import { Download } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import BookingDialog from "@/components/BookingDialog";
import BrochureDialog from "@/components/BrochureDialog";

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section className="relative w-full bg-white overflow-hidden border-b border-gray-100">
      {/* ── Soft Red/Coral Graph Paper Grid Background ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(239, 68, 68, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(239, 68, 68, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          backgroundPosition: "0 0",
        }}
      />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-4 min-h-[460px] lg:min-h-[500px]">
          
          {/* ═══════════════ LEFT CONTENT COLUMN (7 cols on lg) ═══════════════ */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center max-w-[640px]"
            initial="initial"
            animate="animate"
          >
            {/* Headline */}
            <motion.div {...(reduceMotion ? {} : fadeIn(0.08))} className="relative">
              <h1 className="text-[32px] sm:text-[42px] lg:text-[46px] xl:text-[50px] font-extrabold tracking-tight text-gray-950 leading-[1.12]">
                <span className="text-[#DC2626]">AI-Integrated</span>{" "}
                Advance Digital Marketing Institute
              </h1>
            </motion.div>

            {/* Subtitle Paragraph */}
            <motion.p
              {...(reduceMotion ? {} : fadeIn(0.18))}
              className="mt-4 sm:mt-5 text-[14px] sm:text-[15.5px] text-gray-600 leading-relaxed font-normal max-w-[560px]"
            >
              Upskill with practical training, industry tools, and hands-on experience
              that transforms beginners into professionals with AI-Powered Digital
              Marketing Course in Noida.
            </motion.p>

            {/* 4 Feature Badges with Red Outline Icons & Vertical Dividers */}
            <motion.div
              {...(reduceMotion ? {} : fadeIn(0.28))}
              className="my-7 sm:my-8 py-2 grid grid-cols-4 divide-x divide-gray-200 border-y border-transparent max-w-[540px]"
            >
              {/* Feature 1: AI-Driven Module */}
              <div className="flex flex-col items-center text-center px-1 sm:px-3">
                <div className="mb-2 text-[#DC2626]">
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <rect x="9" y="9" width="6" height="6" />
                    <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
                  </svg>
                </div>
                <span className="text-[12px] sm:text-[13.5px] font-bold text-gray-900 leading-tight">
                  AI-Driven
                </span>
                <span className="text-[10px] sm:text-[11.5px] text-gray-500 font-normal mt-0.5">
                  Module
                </span>
              </div>

              {/* Feature 2: 30+ Certifications */}
              <div className="flex flex-col items-center text-center px-1 sm:px-3">
                <div className="mb-2 text-[#DC2626]">
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="12" rx="2" />
                    <path d="M7 8h10M7 11h6" />
                    <circle cx="16" cy="16" r="2.5" />
                    <path d="M15 18.5v2.5l1.5-.8 1.5.8v-2.5" />
                  </svg>
                </div>
                <span className="text-[12px] sm:text-[13.5px] font-bold text-gray-900 leading-tight">
                  30+
                </span>
                <span className="text-[10px] sm:text-[11.5px] text-gray-500 font-normal mt-0.5">
                  Certifications
                </span>
              </div>

              {/* Feature 3: Placement Support */}
              <div className="flex flex-col items-center text-center px-1 sm:px-3">
                <div className="mb-2 text-[#DC2626]">
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <span className="text-[12px] sm:text-[13.5px] font-bold text-gray-900 leading-tight">
                  Placement
                </span>
                <span className="text-[10px] sm:text-[11.5px] text-gray-500 font-normal mt-0.5">
                  Support
                </span>
              </div>

              {/* Feature 4: Live Projects */}
              <div className="flex flex-col items-center text-center px-1 sm:px-3">
                <div className="mb-2 text-[#DC2626]">
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <path d="M9 13v4M12 11v6M15 14v3" />
                  </svg>
                </div>
                <span className="text-[12px] sm:text-[13.5px] font-bold text-gray-900 leading-tight">
                  Live
                </span>
                <span className="text-[10px] sm:text-[11.5px] text-gray-500 font-normal mt-0.5">
                  Projects
                </span>
              </div>
            </motion.div>

            {/* Action Buttons: Solid Red Pill & Outlined Red Pill */}
            <motion.div
              {...(reduceMotion ? {} : fadeIn(0.38))}
              className="flex flex-wrap items-center gap-3.5 sm:gap-4"
            >
              <BookingDialog>
                <button
                  type="button"
                  className="rounded-full bg-[#DC2626] hover:bg-[#b91c1c] active:scale-[0.98] text-white font-semibold text-[14px] sm:text-[15px] px-7 sm:px-8 py-3 sm:py-3.5 shadow-[0_4px_14px_rgba(220,38,38,0.28)] transition-all duration-200"
                >
                  Book Your Demo
                </button>
              </BookingDialog>

              <BrochureDialog>
                <button
                  type="button"
                  className="rounded-full border-[1.5px] border-[#DC2626] bg-white hover:bg-red-50/60 active:scale-[0.98] text-[#DC2626] font-semibold text-[14px] sm:text-[15px] px-6 sm:px-7 py-2.5 sm:py-3 inline-flex items-center gap-2 shadow-sm transition-all duration-200"
                >
                  <Download className="w-4 h-4 text-[#DC2626]" />
                  <span>Download Brochure</span>
                </button>
              </BrochureDialog>
            </motion.div>
          </motion.div>

          {/* ═══════════════ RIGHT IMAGE COLUMN (5 cols on lg) ═══════════════ */}
          <div className="lg:col-span-5 relative w-full flex items-end justify-center lg:justify-end mt-4 lg:mt-0">
            <motion.div
              {...(reduceMotion ? {} : fadeIn(0.2))}
              className="relative w-full max-w-[560px] lg:max-w-none h-[280px] sm:h-[380px] md:h-[440px] lg:h-[480px] xl:h-[510px]"
            >
              {/* Soft Gradient Overlay for Left Side Blending */}
              <div
                aria-hidden="true"
                className="hidden lg:block absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-white via-white/50 to-transparent"
              />

              <Image
                src="/images/ids-hero-banner.png"
                alt="IDS Graduates and Mentors"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain lg:object-cover object-bottom select-none pointer-events-none drop-shadow-sm"
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent 0%, black 12%, black 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent 0%, black 12%, black 100%)",
                }}
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
