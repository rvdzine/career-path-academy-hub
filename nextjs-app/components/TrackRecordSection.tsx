"use client";

import { animate, motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Briefcase, Users, Award, ShieldCheck } from "lucide-react";

interface StatItem {
  id: number;
  value: number;
  label: string;
  sublabel: string;
  suffix?: string;
  icon: typeof Award;
}

const stats: StatItem[] = [
  {
    id: 1,
    value: 10,
    label: "Years of Excellence",
    sublabel: "Pioneering digital education since 2014",
    suffix: "+",
    icon: Award,
  },
  {
    id: 2,
    value: 2000,
    label: "Students Placed",
    sublabel: "Working in top agencies & brands",
    suffix: "+",
    icon: Briefcase,
  },
  {
    id: 3,
    value: 3500,
    label: "Learners Trained",
    sublabel: "Job-ready skills in SEO & Growth",
    suffix: "+",
    icon: Users,
  },
];

export default function TrackRecordSection() {
  const controls = useAnimationControls();
  const { ref, inView } = useInView({ threshold: 0.25 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <section ref={ref} className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-t border-gray-100 overflow-hidden">
      {/* Subtle ambient red dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, #EA252514 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-14">
        {/* Section Eyebrow & Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center justify-center gap-3 mb-3">
            <span className="block w-8 h-[2.5px] bg-red-600 rounded-full" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-red-600">
              Measurable Growth // Proven Track Record
            </span>
            <span className="block w-8 h-[2.5px] bg-red-600 rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-950 tracking-tight leading-[1.1]">
            Career Results You Can <span className="text-red-600">Count On</span>
          </h2>
          <p className="mt-3 text-gray-600 text-sm sm:text-base font-normal leading-relaxed">
            IDS students enter the industry with confidence, live campaign mastery, and real-world hiring outcomes.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8 lg:gap-10 items-stretch">
          {/* Left Stats Column */}
          <div className="flex flex-col gap-4 sm:gap-5 justify-between">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={controls}
                  variants={{
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="group relative bg-white border-2 border-gray-950 rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden flex items-center justify-between gap-4"
                >
                  <div className="relative z-10 min-w-0">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                    <p className="mt-1 text-sm sm:text-base font-black text-gray-900 leading-tight">
                      {stat.label}
                    </p>
                    <p className="text-xs text-gray-500 font-semibold leading-snug mt-0.5">
                      {stat.sublabel}
                    </p>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Image Showcase Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.7 }}
            className="group relative w-full min-h-[340px] sm:min-h-[400px] rounded-3xl overflow-hidden border-2 border-gray-950 shadow-md"
          >
            <Image
              src="/assets/gallery3.webp"
              alt="Institute of Digital Studies track record and student success"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent pointer-events-none" />

            {/* Floating Credibility Pill */}
            <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-white/95 backdrop-blur-md border border-gray-200/90 rounded-2xl p-3.5 sm:px-5 sm:py-3.5 shadow-xl flex items-center gap-3.5 z-10">
              <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white flex-shrink-0 shadow-xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-black text-gray-950 leading-tight">
                  100% Practical & Live Campaign Training
                </p>
                <p className="text-[11px] font-semibold text-gray-500 leading-tight mt-0.5">
                  Audited by senior industry performance marketers
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- COUNT UP ---------------- */

interface CountUpProps {
  end: number;
  suffix?: string;
}

function CountUp({ end, suffix = "" }: CountUpProps) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const { ref, inView } = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView && spanRef.current) {
      const controls = animate(0, end, {
        duration: 1.8,
        ease: "easeOut",
        onUpdate(value) {
          if (spanRef.current) {
            spanRef.current.innerText =
              Math.floor(value).toLocaleString("en-IN") + suffix;
          }
        },
      });

      return () => controls.stop();
    }
  }, [inView, end, suffix]);

  return (
    <h3
      ref={ref}
      className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight"
    >
      <span ref={spanRef} suppressHydrationWarning>
        {end.toLocaleString("en-IN")}{suffix}
      </span>
    </h3>
  );
}
