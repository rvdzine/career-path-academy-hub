"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import BookingDialog from "@/components/BookingDialog";

interface FlowStep {
  stepNumber: string;
  title: string;
  description: string;
  isTopRow: boolean;
}

const stepsData: FlowStep[] = [
  {
    stepNumber: "01",
    title: "Explore Programs",
    description: "Explore in-demand digital courses tailored to your career aspirations.",
    isTopRow: true,
  },
  {
    stepNumber: "02",
    title: "1:1 Career Counseling",
    description: "Connect with our expert mentors to choose the right learning track.",
    isTopRow: false,
  },
  {
    stepNumber: "03",
    title: "Live Agency Projects",
    description: "Work on real ad budgets, live client campaigns, and AI tools.",
    isTopRow: true,
  },
  {
    stepNumber: "04",
    title: "Paid Internship",
    description: "Gain hands-on agency work experience with corporate teams.",
    isTopRow: false,
  },
  {
    stepNumber: "05",
    title: "Placement & Launch",
    description: "Interview with 350+ hiring partners and launch your career.",
    isTopRow: true,
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      style={{ fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
      className="relative w-full bg-[#FFF6F7] py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* ─── SECTION HEADER ─── */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 mb-2.5">
            <span className="w-2.5 h-2.5 bg-[#FE4759] rounded-[2px]" />
            <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-[#FE4759]">
              WORKING PROCESS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C1427] tracking-[-0.03em] leading-tight">
            How it Works
          </h2>
        </div>

        {/* ─── DESKTOP 5-STEP ALTERNATING PIPELINE FLOW ─── */}
        <div className="hidden lg:block relative max-w-6xl mx-auto h-[480px]">
          
          {/* SVG Interconnecting Animated Pipeline Path */}
          <svg
            viewBox="0 0 1100 480"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
          >
            {/* Background static curve */}
            <path
              d="M 110,140 C 110,240 330,220 330,340 C 330,220 550,240 550,140 C 550,240 770,220 770,340 C 770,220 990,240 990,140"
              stroke="#FEDCE0"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Animated dashed traveling wave stroke */}
            <motion.path
              d="M 110,140 C 110,240 330,220 330,340 C 330,220 550,240 550,140 C 550,240 770,220 770,340 C 770,220 990,240 990,140"
              stroke="#FE4759"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="14 14"
              animate={{ strokeDashoffset: [0, -56] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
            />
          </svg>

          {/* 5 Cards Positioned Precisely along the 5 columns */}
          <div className="relative z-10 w-full h-full grid grid-cols-5 gap-4">
            
            {/* ─── COLUMN 1: STEP 01 (TOP CARD) ─── */}
            <div className="flex flex-col items-center justify-between h-full">
              {/* Top Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="w-full bg-white rounded-2xl p-5 xl:p-6 shadow-[0_10px_25px_rgba(0,0,0,0.05)] border border-white text-center flex flex-col justify-center relative cursor-default"
              >
                <h3 className="text-base xl:text-lg font-bold text-[#0C1427] mb-2">{stepsData[0].title}</h3>
                <p className="text-xs text-[#52607D] leading-relaxed">{stepsData[0].description}</p>
                {/* Yellow Connection Node */}
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#FFD600] border-2 border-white shadow-xs" />
              </motion.div>

              {/* Number Badge 01 below */}
              <div className="flex flex-col items-center gap-2 mb-12">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0C1427]" />
                <div className="w-8 h-8 rounded-full bg-white border border-[#FEDCE0] text-[#FE4759] font-bold text-xs flex items-center justify-center shadow-xs">
                  01
                </div>
              </div>
            </div>

            {/* ─── COLUMN 2: STEP 02 (BOTTOM CARD) ─── */}
            <div className="flex flex-col items-center justify-between h-full">
              {/* Number Badge 02 above */}
              <div className="flex flex-col items-center gap-2 mt-12">
                <div className="w-8 h-8 rounded-full bg-white border border-[#FEDCE0] text-[#FE4759] font-bold text-xs flex items-center justify-center shadow-xs">
                  02
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-[#0C1427]" />
              </div>

              {/* Bottom Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="w-full bg-white rounded-2xl p-5 xl:p-6 shadow-[0_10px_25px_rgba(0,0,0,0.05)] border border-white text-center flex flex-col justify-center relative cursor-default"
              >
                {/* Yellow Connection Node */}
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#FFD600] border-2 border-white shadow-xs" />
                <h3 className="text-base xl:text-lg font-bold text-[#0C1427] mb-2">{stepsData[1].title}</h3>
                <p className="text-xs text-[#52607D] leading-relaxed">{stepsData[1].description}</p>
              </motion.div>
            </div>

            {/* ─── COLUMN 3: STEP 03 (TOP CARD) ─── */}
            <div className="flex flex-col items-center justify-between h-full">
              {/* Top Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.15 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="w-full bg-white rounded-2xl p-5 xl:p-6 shadow-[0_10px_25px_rgba(0,0,0,0.05)] border border-white text-center flex flex-col justify-center relative cursor-default"
              >
                <h3 className="text-base xl:text-lg font-bold text-[#0C1427] mb-2">{stepsData[2].title}</h3>
                <p className="text-xs text-[#52607D] leading-relaxed">{stepsData[2].description}</p>
                {/* Yellow Connection Node */}
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#FFD600] border-2 border-white shadow-xs" />
              </motion.div>

              {/* Number Badge 03 below */}
              <div className="flex flex-col items-center gap-2 mb-12">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0C1427]" />
                <div className="w-8 h-8 rounded-full bg-white border border-[#FEDCE0] text-[#FE4759] font-bold text-xs flex items-center justify-center shadow-xs">
                  03
                </div>
              </div>
            </div>

            {/* ─── COLUMN 4: STEP 04 (BOTTOM CARD) ─── */}
            <div className="flex flex-col items-center justify-between h-full">
              {/* Number Badge 04 above */}
              <div className="flex flex-col items-center gap-2 mt-12">
                <div className="w-8 h-8 rounded-full bg-white border border-[#FEDCE0] text-[#FE4759] font-bold text-xs flex items-center justify-center shadow-xs">
                  04
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-[#0C1427]" />
              </div>

              {/* Bottom Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="w-full bg-white rounded-2xl p-5 xl:p-6 shadow-[0_10px_25px_rgba(0,0,0,0.05)] border border-white text-center flex flex-col justify-center relative cursor-default"
              >
                {/* Yellow Connection Node */}
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#FFD600] border-2 border-white shadow-xs" />
                <h3 className="text-base xl:text-lg font-bold text-[#0C1427] mb-2">{stepsData[3].title}</h3>
                <p className="text-xs text-[#52607D] leading-relaxed">{stepsData[3].description}</p>
              </motion.div>
            </div>

            {/* ─── COLUMN 5: STEP 05 (TOP CARD) ─── */}
            <div className="flex flex-col items-center justify-between h-full">
              {/* Top Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.25 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="w-full bg-white rounded-2xl p-5 xl:p-6 shadow-[0_10px_25px_rgba(0,0,0,0.05)] border border-white text-center flex flex-col justify-center relative cursor-default"
              >
                <h3 className="text-base xl:text-lg font-bold text-[#0C1427] mb-2">{stepsData[4].title}</h3>
                <p className="text-xs text-[#52607D] leading-relaxed">{stepsData[4].description}</p>
                {/* Yellow Connection Node */}
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#FFD600] border-2 border-white shadow-xs" />
              </motion.div>

              {/* Number Badge 05 below */}
              <div className="flex flex-col items-center gap-2 mb-12">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0C1427]" />
                <div className="w-8 h-8 rounded-full bg-white border border-[#FEDCE0] text-[#FE4759] font-bold text-xs flex items-center justify-center shadow-xs">
                  05
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* ─── MOBILE / TABLET VERTICAL TIMELINE FLOW ─── */}
        <div className="block lg:hidden max-w-md mx-auto relative pl-8 border-l-2 border-[#FEDCE0] space-y-6">
          {stepsData.map((step, idx) => (
            <motion.div
              key={step.stepNumber}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="relative bg-white rounded-2xl p-5 shadow-sm border border-[#FEDCE0]"
            >
              {/* Left Number Dot Anchor */}
              <div className="absolute -left-[45px] top-4 w-7 h-7 rounded-full bg-[#FE4759] text-white font-bold text-xs flex items-center justify-center shadow-xs">
                {step.stepNumber}
              </div>
              <h3 className="text-base font-bold text-[#0C1427] mb-1">{step.title}</h3>
              <p className="text-xs text-[#52607D] leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
