"use client";

import Image from "next/image";
import React from "react";

type Tool = {
  id: number;
  name: string;
  logo: string;
};

/* 👉 ADD / REMOVE TOOLS FREELY — NOTHING BREAKS */
const tools: Tool[] = [
  { id: 1, name: "SEMRUSH", logo: "/svg/download 7.svg" },
  { id: 2, name: "Hootsuite", logo: "/svg/download 10.svg" },
  { id: 3, name: "HubSpot", logo: "/svg/download 36.svg" },
  { id: 4, name: "Mailchimp", logo: "/svg/download 16.svg" },
  { id: 5, name: "Google Ads", logo: "/svg/download 18.svg" },
  { id: 6, name: "Google Analytics", logo: "/svg/download 20.svg" },
  { id: 7, name: "Salesforce", logo: "/svg/download 28.svg" },
  { id: 8, name: "HubSpot Marketing Hub", logo: "/svg/download 26.svg" },
  { id: 9, name: "Canva", logo: "/svg/download 31.svg" },
  { id: 10, name: "Refersion", logo: "/assets/mask-group.png" },
  { id: 11, name: "AI-Powered Marketing", logo: "/assets/ai-marketing.png" },
  { id: 12, name: "Clarity Hotjar", logo: "/assets/conversion-rate.png" },
  { id: 13, name: "WordPress", logo: "/assets/wordpress.png" },
  { id: 14, name: "Pabbly", logo: "/assets/pabbly.png" },
  { id: 15, name: "Shopify", logo: "/assets/shopify.png" },
];

/* 🔹 EXACTLY 3 ROWS */
const ROWS = 3;
const toolsPerRow = Math.ceil(tools.length / ROWS);

const rows: Tool[][] = Array.from({ length: ROWS }, (_, i) =>
  tools.slice(i * toolsPerRow, (i + 1) * toolsPerRow)
);

const ToolsYouWillMaster: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden border-t border-gray-100">
      {/* Background subtle ambient red dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, #EA252514 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="block w-8 h-[2.5px] bg-red-600 rounded-full" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-red-600">
              Industry Tech Stack // 30+ Tools
            </span>
            <span className="block w-8 h-[2.5px] bg-red-600 rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-950 tracking-tight leading-[1.1] mb-3">
            Tools You’ll <span className="text-red-600">Master</span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base font-normal max-w-2xl mx-auto leading-relaxed">
            Gain hands-on proficiency in the world&apos;s leading marketing suites, analytics platforms, and AI automation tools.
          </p>
        </div>

        {/* Marquee Wrapper with Smooth Edge Fades */}
        <div className="relative overflow-hidden py-2">
          {/* Edge Fade Gradients */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 bottom-0 left-0 w-20 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-20"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 bottom-0 right-0 w-20 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-20"
          />

          {/* Auto Moving Rows */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            {rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={`flex w-max gap-3 sm:gap-4 md:gap-5 ${
                  rowIndex % 2 === 0
                    ? "animate-scroll-left"
                    : "animate-scroll-right"
                }`}
              >
                {[...row, ...row, ...row].map((tool, index) => (
                  <div
                    key={`${tool.id}-${index}`}
                    className="bg-white rounded-2xl border-2 border-gray-100 hover:border-red-600/40 w-[150px] h-[85px] sm:w-[170px] sm:h-[95px] md:w-[195px] md:h-[105px] flex items-center justify-center p-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group cursor-default select-none"
                  >
                    <div className="relative w-[85px] h-[45px] sm:w-[100px] sm:h-[50px] md:w-[115px] md:h-[55px] group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src={tool.logo}
                        alt={tool.name}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100px, 130px"
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Animations */}
      <style jsx>{`
        @keyframes scrollLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.33%);
          }
        }

        @keyframes scrollRight {
          from {
            transform: translateX(-33.33%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scrollLeft 35s linear infinite;
        }

        .animate-scroll-right {
          animation: scrollRight 35s linear infinite;
        }

        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }

        @media (min-width: 768px) {
          .animate-scroll-left,
          .animate-scroll-right {
            animation-duration: 28s;
          }
        }
      `}</style>
    </section>
  );
};

export default ToolsYouWillMaster;
