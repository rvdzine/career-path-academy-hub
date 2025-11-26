"use client";

// import Image from "next/image";
import { animate, motion, useAnimation, useAnimationControls } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

interface StatItem {
  id: number;
  value: number;
  label: string;
  suffix?: string;
}

const stats: StatItem[] = [
  { id: 1, value: 2400, label: "Happy Students Trained" },
  { id: 2, value: 6300, label: "Projects Completed" },
  { id: 3, value: 10, label: "Years Experience", suffix: "+" },
  { id: 4, value: 2000, label: "Students Placed" },
];

export default function TrackRecordSection() {
  const controls = useAnimationControls();
  const { ref, inView } = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <section ref={ref} className="w-full py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900">
          Proven Track Record of Outcomes
        </h2>

        <p className="text-gray-600 text-center mt-4 max-w-3xl mx-auto text-lg">
          Digiaccel’s education has helped leading professionals accelerate
          their careers and crack top jobs.
        </p>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Stats Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.6, delay: stat.id * 0.2 }}
                className="rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 px-8 py-10 text-center shadow-sm"
              >
                <CountUp end={stat.value} suffix={stat.suffix ?? ""} />
                <p className="text-gray-700 mt-2 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={controls}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            {/* Add image here if needed */}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

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
            spanRef.current.innerText = Math.floor(value).toString() + suffix;
          }
        },
      });

      return () => controls.stop();
    }
  }, [inView, end, suffix]);

  return (
    <h3 ref={ref} className="text-4xl md:text-5xl font-bold text-gray-900">
      <span ref={spanRef}>0</span>
    </h3>
  );
}
