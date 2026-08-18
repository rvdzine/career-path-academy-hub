"use client";

import { animate, motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";


interface StatItem {
  id: number;
  value: number;
  label: string;
  suffix?: string;
}

const stats: StatItem[] = [
  { id: 1, value: 10, label: "Years Experience", suffix: "+" },
  { id: 2, value: 2000, label: "Students Placed", suffix: "+" },
  { id: 3, value: 3500, label: "Happy Students Trained", suffix: "+" },
];

export default function TrackRecordSection() {
  const controls = useAnimationControls();
  const { ref, inView } = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <section ref={ref} className="w-full bg-[#FFF9F9] py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900">
          Career Results You Can Count On
        </h2>
        <p className="text-gray-600 text-center mt-4 max-w-3xl mx-auto text-lg">
          IDS students enter the industry with confidence and job-ready skills.
        </p>

        {/* Layout */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 items-center">

          {/* Left Stats Column */}
          <div className="flex flex-col gap-6 h-[420px]">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, x: -20 }}
                animate={controls}
                variants={{
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className=" flex-1
                  rounded-2xl
                  h-[100px]
                  bg-gradient-to-r
                  from-[#EA2525]/20
                  to-[#FFF9F9]
                  p-8"
              >
                <CountUp end={stat.value} suffix={stat.suffix} />
                <p className="mt-2 text-gray-800 text-lg font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Grey Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[360px] md:h-[420px] rounded-3xl overflow-hidden"
          >
            <Image
              src="/assets/gallery3.webp"
              alt="Institute of Digital Studies track record and student success"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
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
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          if (spanRef.current) {
            spanRef.current.innerText =
              Math.floor(value).toString() + suffix;
          }
        },
      });

      return () => controls.stop();
    }
  }, [inView, end, suffix]);

  return (
    <h3
      ref={ref}
      className="text-4xl md:text-5xl font-bold text-gray-900"
    >
      <span ref={spanRef} suppressHydrationWarning>
        {end}{suffix}
      </span>
    </h3>
  );
}

