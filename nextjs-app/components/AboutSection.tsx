"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import BookingDialog from "@/components/BookingDialog";

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{ fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
      className="relative w-full bg-gradient-to-br from-[#FE4759] to-[#E12D40] text-white py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* ─── BACKGROUND LINEAR WAVE SVG GRAPHICS ─── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-15 overflow-hidden"
      >
        <svg
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
        >
          <path d="M-100,200 C300,500 800,-50 1600,350" stroke="white" strokeWidth="1.5" strokeDasharray="6 6" />
          <path d="M-100,300 C350,600 850,50 1600,450" stroke="white" strokeWidth="1.2" />
          <path d="M-100,400 C400,700 900,150 1600,550" stroke="white" strokeWidth="1" strokeDasharray="8 8" />
          <path d="M-100,500 C450,800 950,250 1600,650" stroke="white" strokeWidth="1.5" />
          <path d="M-100,600 C500,900 1000,350 1600,750" stroke="white" strokeWidth="1.2" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* ─── FLOATING CIRCLE STAT BADGES (DESKTOP) ─── */}
        {/* Left Badge: Dark Navy Circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: -30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden lg:flex absolute left-4 xl:left-14 top-4 z-20 w-32 h-32 xl:w-36 xl:h-36 rounded-full bg-[#0C1427] border-[3.5px] border-white shadow-2xl flex-col items-center justify-center p-3 text-center hover:scale-105 transition-transform"
        >
          <span className="text-2xl xl:text-3xl font-black text-white tracking-tight">15K+</span>
          <span className="text-[10px] xl:text-[11px] font-semibold text-white/80 leading-tight mt-1 max-w-[90px]">
            Students Placed Worldwide
          </span>
        </motion.div>

        {/* Right Badge: Coral/Orange Circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:flex absolute right-4 xl:right-14 top-20 z-20 w-32 h-32 xl:w-36 xl:h-36 rounded-full bg-[#FF5E36] border-[3.5px] border-white shadow-2xl flex-col items-center justify-center p-3 text-center hover:scale-105 transition-transform"
        >
          <span className="text-2xl xl:text-3xl font-black text-white tracking-tight">100%</span>
          <span className="text-[10px] xl:text-[11px] font-semibold text-white/95 leading-tight mt-1 max-w-[85px]">
            Placement Support Rate
          </span>
        </motion.div>

        {/* ─── CENTER HEADER: Eyebrow + Headline + CTA ─── */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center mb-10 sm:mb-14">
          
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center gap-1.5 mb-3">
            <span className="w-2.5 h-2.5 bg-white rounded-[2px]" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-white">
              ABOUT US
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white tracking-[-0.03em] leading-[1.2]">
            Behind Every Student’s Journey Is a Team Dedicated to Making Career Growth Simple and Rewarding.
          </h2>

          {/* Yellow CTA Button */}
          <BookingDialog>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 sm:pl-7 sm:pr-2.5 sm:py-2.5 rounded-full bg-[#FFD600] hover:bg-[#FACC15] text-[#0C1427] font-bold text-xs sm:text-sm shadow-xl transition-all cursor-pointer mt-6 sm:mt-8"
            >
              <span>More About Us</span>
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0C1427] text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 shadow-xs">
                <ChevronRight className="w-4 h-4 text-white" />
              </span>
            </motion.button>
          </BookingDialog>

          {/* Mobile/Tablet Stat Badges Row */}
          <div className="flex lg:hidden items-center justify-center gap-4 mt-8">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#0C1427] border-[3px] border-white shadow-xl flex flex-col items-center justify-center p-2 text-center">
              <span className="text-lg sm:text-xl font-black text-white">15K+</span>
              <span className="text-[9px] sm:text-[10px] font-semibold text-white/80 leading-tight mt-0.5">
                Students Placed
              </span>
            </div>
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#FF5E36] border-[3px] border-white shadow-xl flex flex-col items-center justify-center p-2 text-center">
              <span className="text-lg sm:text-xl font-black text-white">100%</span>
              <span className="text-[9px] sm:text-[10px] font-semibold text-white/95 leading-tight mt-0.5">
                Placement Rate
              </span>
            </div>
          </div>

        </div>

        {/* ─── TWO LARGE ROUNDED PHOTO CARDS ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 max-w-5xl lg:max-w-[1100px] mx-auto">
          
          {/* Left Photo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative h-[250px] sm:h-[320px] md:h-[360px] lg:h-[400px] rounded-2xl sm:rounded-[26px] overflow-hidden border-[3.5px] sm:border-[4px] border-white/30 bg-white/10 shadow-2xl group cursor-pointer"
          >
            <Image
              src="/assets/offsectionimg.jpg"
              alt="Students learning together at Institute of Digital Studies"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Right Photo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[250px] sm:h-[320px] md:h-[360px] lg:h-[400px] rounded-2xl sm:rounded-[26px] overflow-hidden border-[3.5px] sm:border-[4px] border-white/30 bg-white/10 shadow-2xl group cursor-pointer"
          >
            <Image
              src="/assets/gallery3.webp"
              alt="Collaborative classroom and live mentoring session"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
          </motion.div>

        </div>

        {/* ─── BOTTOM FEATURE BULLETS ─── */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-white font-semibold text-xs sm:text-sm mt-8 sm:mt-12 tracking-wide text-center">
          <span className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white shadow-xs" />
            Tailored Educational Pathways
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white shadow-xs" />
            End-to-End Industry Guidance
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white shadow-xs" />
            350+ Global Placement Network
          </span>
        </div>

      </div>
    </section>
  );
}
