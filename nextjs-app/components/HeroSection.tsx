"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Download, ChevronRight, ArrowRight } from "lucide-react";
import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from "framer-motion";
import studentImg from "./assets/demo-elearning-hero-banner-01.webp";
import BookingDialog from "@/components/BookingDialog";
import BrochureDialog from "@/components/BrochureDialog";

const stats = [
  { value: "500+",   label: "Students Trained" },
  { value: "30+",    label: "Certifications"   },
  { value: "95%",    label: "Placement Rate"   },
  { value: "8 LPA",  label: "Avg. Package"     },
];

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function HeroSection() {
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // 3D interactive tilt: tracking cursor position so whatever corner/edge is hovered depresses inward
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 240, damping: 22 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  // y: negative (top) -> positive rotateX (top tilts backward/inward)
  // y: positive (bottom) -> negative rotateX (bottom tilts backward/inward)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [14, -14]);

  // x: negative (left) -> negative rotateY (left tilts backward/inward)
  // x: positive (right) -> positive rotateY (right tilts backward/inward)
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-16, 16]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="relative bg-white overflow-hidden h-[calc(100vh-4rem)] flex flex-col">

      {/* ─── subtle dot grid (full bg) ─── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, #EA252518 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ─── Main content wrapper ─── */}
      <div className="relative z-10 flex-1 flex flex-col">

        {/* ══ TOP: Two-column section ══ */}
        <div className="flex-1 container mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-14 flex flex-col lg:flex-row lg:items-stretch gap-0">

          {/* ── LEFT: text ── */}
          <motion.div
            className="flex-1 flex flex-col justify-center pt-14 pb-8 lg:pt-20 lg:pb-12 lg:pr-10"
            initial="initial"
            animate="animate"
          >
            {/* eyebrow */}
            <motion.div
              {...(reduceMotion ? {} : fadeIn(0.05))}
              className="flex items-center gap-3 mb-7"
            >
              <span className="block w-8 h-[2.5px] bg-red-600 rounded-full" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-red-600">
                Noida&apos;s #1 Digital Marketing Institute
              </span>
            </motion.div>

            {/* ── Giant editorial headline ── */}
            <div className="mb-6">
              <motion.span
                {...(reduceMotion ? {} : fadeIn(0.12))}
                className="block font-black leading-[0.88] tracking-tight text-gray-950"
                style={{ fontSize: "clamp(2.6rem, 7vw, 5.5rem)" }}
              >
                MASTER
              </motion.span>

              {/* "DIGITAL" — stroke outline style */}
              <motion.span
                {...(reduceMotion ? {} : fadeIn(0.2))}
                className="block font-black leading-[0.88] tracking-tight"
                style={{
                  fontSize: "clamp(2.6rem, 7vw, 5.5rem)",
                  WebkitTextStroke: "3px #EA2525",
                  color: "transparent",
                }}
              >
                DIGITAL
              </motion.span>

              <motion.span
                {...(reduceMotion ? {} : fadeIn(0.28))}
                className="block font-black leading-[0.88] tracking-tight text-gray-950"
                style={{ fontSize: "clamp(2.6rem, 7vw, 5.5rem)" }}
              >
                MARKETING
              </motion.span>

              {/* sub-line */}
              <motion.p
                {...(reduceMotion ? {} : fadeIn(0.36))}
                className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-gray-400 font-medium"
                style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
              >
                <span>With</span>
                <span className="text-red-600 font-bold italic">AI&#x2011;Powered</span>
                <span>Learning</span>
                {/* hand-drawn squiggle */}
                <svg
                  viewBox="0 0 80 12"
                  className="w-16 h-3 flex-shrink-0"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M0 6 Q10 0 20 6 Q30 12 40 6 Q50 0 60 6 Q70 12 80 6"
                    stroke="#EA2525"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.p>
            </div>

            {/* description */}
            <motion.p
              {...(reduceMotion ? {} : fadeIn(0.42))}
              className="text-gray-500 leading-relaxed mb-8 max-w-[440px]"
              style={{ fontSize: "clamp(0.875rem, 1.4vw, 1rem)" }}
            >
              From SEO to AI tools — real campaigns, live projects &amp; expert mentors
              that turn you into a{" "}
              <strong className="text-gray-800 font-semibold">
                job-ready digital marketer.
              </strong>
            </motion.p>

            {/* ── CTAs — sharp, editorial style ── */}
            <motion.div
              {...(reduceMotion ? {} : fadeIn(0.5))}
              className="flex flex-wrap gap-3 items-center"
            >
              <BookingDialog>
                <motion.button
                  whileHover={reduceMotion ? {} : { x: 3 }}
                  whileTap={reduceMotion ? {} : { scale: 0.97 }}
                  className="group relative overflow-hidden inline-flex items-center gap-2.5 px-7 py-4 bg-red-600 text-white font-bold text-sm"
                  style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}
                >
                  {/* shine on hover */}
                  <span
                    aria-hidden
                    className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />
                  Book Free Demo
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
              </BookingDialog>

              <BrochureDialog>
                <motion.button
                  whileHover={reduceMotion ? {} : { x: 3 }}
                  whileTap={reduceMotion ? {} : { scale: 0.97 }}
                  className="group inline-flex items-center gap-2.5 px-7 py-4 border-2 border-gray-900 text-gray-900 font-bold text-sm hover:bg-gray-950 hover:text-white transition-all duration-250"
                >
                  <Download className="w-4 h-4" />
                  Download Brochure
                </motion.button>
              </BrochureDialog>
            </motion.div>

            {/* micro-trust line */}
            <motion.p
              {...(reduceMotion ? {} : fadeIn(0.58))}
              className="mt-5 flex items-center gap-2 text-[12px] text-gray-400 font-medium"
            >
              <ArrowRight className="w-3 h-3 text-red-500 flex-shrink-0" />
              Next batch starts soon &mdash; limited seats
            </motion.p>
          </motion.div>

          {/* ── RIGHT: image block — interactive 3D perspective wrapper ── */}
          <div
            className="hidden lg:flex items-end flex-shrink-0 cursor-pointer"
            style={{
              width: "clamp(320px, 36vw, 500px)",
              perspective: "1000px",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              className="relative w-full h-full select-none"
              style={{
                transformStyle: "preserve-3d",
                transformOrigin: "center center",
                rotateX: reduceMotion ? 0 : rotateX,
                rotateY: reduceMotion ? 0 : rotateY,
              }}
              whileHover={reduceMotion ? {} : { scale: 0.99 }}
              transition={{ duration: 0.2 }}
            >
              {/* Red diagonal backing shape */}
              <div
                aria-hidden
                className="absolute right-0 bottom-0 w-[88%] h-[90%] bg-red-600 z-0 pointer-events-none"
                style={{ clipPath: "polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
              />

              {/* White gap strip */}
              <div
                aria-hidden
                className="absolute left-0 bottom-0 w-[14%] h-[90%] bg-white z-0 pointer-events-none"
              />

              {/* Year badge */}
              {mounted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.45 }}
                  className="absolute top-[18%] -left-5 z-20 bg-white border-l-4 border-red-600 shadow-xl px-4 py-3 pointer-events-none"
                  style={{ transform: "translateZ(30px)" }}
                >
                  <p className="text-[11px] font-extrabold uppercase tracking-widest text-gray-500 leading-none mb-1">Est.</p>
                  <p className="text-2xl font-black text-gray-950 leading-none">2019</p>
                </motion.div>
              )}

              {/* AI badge */}
              {mounted && (
                <motion.div
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.45 }}
                  className="absolute top-6 right-5 z-20 flex items-center gap-2 bg-gray-950 text-white px-3 py-2 pointer-events-none"
                  style={{ transform: "translateZ(35px)" }}
                >
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[11px] font-bold uppercase tracking-wider">AI&#x2011;Integrated</span>
                </motion.div>
              )}

              {/* Student image */}
              <div className="relative z-10 w-full h-full pointer-events-none" style={{ minHeight: "420px" }}>
                <Image
                  src={studentImg}
                  alt="Confident student at iDigitalStudies Noida"
                  fill
                  priority
                  sizes="(max-width: 1024px) 0px, 500px"
                  className="object-contain object-bottom pointer-events-none select-none"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* ══ BOTTOM: Dark stat bar ══ */}
        <div className="border-t-[3px] border-red-600 bg-gray-950">
          <div className="container mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-14">
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-gray-800">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={reduceMotion ? {} : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65 + i * 0.1, duration: 0.45 }}
                  className="py-5 px-5 sm:px-7 text-center"
                >
                  <p className="text-[1.6rem] font-black text-white leading-none mb-1">{s.value}</p>
                  <p className="text-[10.5px] uppercase tracking-[0.12em] text-gray-500 font-semibold">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
