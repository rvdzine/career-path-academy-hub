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
    <section className="relative py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(#EA252533 1px, transparent 1px),
            linear-gradient(to right, #EA252533 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          maskImage: "linear-gradient(to right, white 60%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, white 60%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Tools you’ll Master
          </h2>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            Digital marketing relies on a wide variety of tools to manage
            campaigns, analyze performance, create content, and engage with
            audiences.
          </p>
        </div>

        {/* Auto Moving Rows */}
        <div className="space-y-6 sm:space-y-8 md:space-y-10">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`flex w-max gap-3 sm:gap-4 md:gap-6 ${
                rowIndex % 2 === 0
                  ? "animate-scroll-left"
                  : "animate-scroll-right"
              }`}
            >
              {[...row, ...row, ...row].map((tool, index) => (
                <div
                  key={`${tool.id}-${index}`}
                  className={`
                    bg-white rounded-xl shadow-md
                    w-[140px] h-[80px]
                    sm:w-[160px] sm:h-[90px]
                    md:w-[180px] md:h-[100px]
                    flex items-center justify-center
                    hover:scale-105 transition-transform duration-300
                  `}
                >
                  <div className="relative w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px]">
                    <Image
                       src={tool.logo}
                       alt={tool.name}
                       fill
                       className="object-contain"/>
                  </div>
                  
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes scrollLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scrollRight {
          from {
            transform: translateX(-33.333%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scrollLeft 45s linear infinite;
        }

        .animate-scroll-right {
          animation: scrollRight 45s linear infinite;
        }

        @media (min-width: 768px) {
          .animate-scroll-left,
          .animate-scroll-right {
            animation-duration: 30s;
          }
        }
      `}</style>
    </section>
  );
};

export default ToolsYouWillMaster;
