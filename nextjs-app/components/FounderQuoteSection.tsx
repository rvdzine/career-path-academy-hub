"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import BookingDialog from "@/components/BookingDialog";

export default function FounderQuoteSection() {
  return (
    <section
      id="founder-vision-section"
      style={{ fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
      className="relative w-full bg-gradient-to-br from-[#FE4759] to-[#E12D40] text-white overflow-hidden py-16 sm:py-20 md:py-24"
    >
      {/* ─── TOP BACKGROUND PHOTO WITH GRADIENT OVERLAY ─── */}
      <div className="absolute top-0 left-0 right-0 h-[280px] sm:h-[340px] md:h-[380px] overflow-hidden opacity-35 pointer-events-none">
        <Image
          src="/assets/gallery3.webp"
          alt="Institute of Digital Studies students"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Smooth Gradient Fade to Seamless Solid Brand Red */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FE4759]/20 via-[#FE4759]/75 to-[#FE4759]" />
      </div>

      {/* ─── AMBIENT LINEAR SWOOPING VECTOR ACCENTS ─── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-20 overflow-hidden"
      >
        <svg
          viewBox="0 0 1440 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
        >
          <path d="M-100,200 C350,550 750,50 1600,450" stroke="#ffffff" strokeWidth="1.2" />
          <path d="M-100,320 C400,650 800,150 1600,550" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="6 6" />
          <path d="M-100,440 C450,750 850,250 1600,650" stroke="#ffffff" strokeWidth="1.2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 sm:pt-14 md:pt-16">
        
        {/* ─── FOUNDER AVATAR & CREDENTIALS ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center mb-6 sm:mb-8"
        >
          {/* Avatar Ring */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-[3px] border-white/90 shadow-2xl bg-white mb-3">
            <Image
              src="/assets/Arjun.jpg"
              alt="Abhishek Kumar - Founder & Director"
              fill
              sizes="80px"
              className="object-cover object-top"
            />
          </div>

          <h3 className="text-base sm:text-lg md:text-xl font-bold text-white tracking-tight leading-tight">
            Abhishek Kumar
          </h3>
          <p className="text-xs sm:text-[13px] font-medium text-white/80 tracking-wide mt-0.5">
            Founder &amp; Director, IDS
          </p>
        </motion.div>

        {/* ─── INSPIRING FOUNDER VISION QUOTE ─── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-8 sm:mb-10"
        >
          <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white leading-[1.25] sm:leading-[1.2] tracking-[-0.02em]">
            &ldquo;At IDS, we don&apos;t just teach digital marketing &mdash; we open doors to high-income careers and futures without borders.&rdquo;
          </blockquote>
        </motion.div>

        {/* ─── CALL TO ACTION BUTTON (YELLOW PILL) ─── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="flex justify-center items-center"
        >
          <BookingDialog>
            <button
              type="button"
              className="inline-flex items-center gap-3 bg-[#FACC15] hover:bg-[#EAB308] text-[#0C1427] font-bold text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.2)] hover:shadow-[0_14px_35px_rgba(250,204,21,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer group"
            >
              <span>Book a Consultation</span>
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0C1427] text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-200">
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FACC15]" />
              </span>
            </button>
          </BookingDialog>
        </motion.div>

      </div>
    </section>
  );
}
