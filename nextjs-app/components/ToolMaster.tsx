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
  { id: 3,  name: "HubSpot", logo: "/svg/download 36.svg" },
  { id:4, name: "Mailchimp", logo: "/svg/download 16.svg" },
  { id:5, name: "Google Ads", logo: "/svg/download 18.svg" },
  { id:6, name: "Google Analytics", logo: "/svg/download 20.svg" },
  { id:7, name: "Salesforce", logo: "/svg/download 28.svg" },
  { id:8, name: "HubSpot Marketing Hub",  logo: "/svg/download 26.svg" },
  { id:9, name: "Canva",  logo: "/svg/download 31.svg" },
  { id:10, name: "Refersion", logo: "/assets/mask-group.png" },
  { id:11, name: "AI-Powered Marketing",  logo: "/assets/ai-marketing.png" },
  { id:12, name: "Clarity Hotjar", logo: "/assets/conversion-rate.png" },
  { id:13, name: "WordPress", logo: "/assets/wordpress.png" },
  { id:14, name: "Pabbly",  logo: "/assets/pabbly.png" },
  { id:15, name: "Shopify",  logo: "/assets/shopify.png" },
];


/* 🔹 EXACTLY 3 ROWS */
const ROWS = 3;
const toolsPerRow = Math.ceil(tools.length / ROWS);

const rows: Tool[][] = Array.from({ length: ROWS }, (_, i) =>
  tools.slice(i * toolsPerRow, (i + 1) * toolsPerRow)
);

const ToolsYouWillMaster: React.FC = () => {
  return (
    <section className="relative  py-20 bg-white overflow-hidden">
      
     {/* Grid Background (BACKSIDE) */}
<div
  className="absolute inset-0 z-0 pointer-events-none"
  style={{
    backgroundImage: `
      linear-gradient(#EA252533 1px, transparent 1px),
      linear-gradient(to right, #EA252533 1px, transparent 1px)
    `,
    backgroundSize: "44px 44px",
    maskImage: "linear-gradient(to right, white 60%, transparent 100%)",
    WebkitMaskImage: "linear-gradient(to right, white 60%, transparent 100%)",
  }}
/>


      {/* Content */}
      <div className="relative z-10 w-full px-4 md:px-10">
        {/* Heading */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Tools you’ll Master
          </h2>
          <p className="mt-4 text-gray-600 text-sm md:text-base">
            Digital marketing relies on a wide variety of tools to manage
            campaigns, analyze performance, create content, and engage with
            audiences.
          </p>
        </div>

        {/* Auto Moving Rows */}
        <div className="space-y-10">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`flex gap-6 w-max ${
                rowIndex % 2 === 0
                  ? "animate-scroll-left"
                  : "animate-scroll-right"
              }`}
            >
              {/* Duplicate content for infinite loop */}
              {[...row, ...row, ...row].map((tool, index) => (
                <div
                  key={`${tool.id}-${index}`}
                  className={`bg-white rounded-xl shadow-md
            px-8 py-5 md:px-10 md:py-6
            w-[180px] h-[110px] md:w-[220px] md:h-[120px]
            flex items-center justify-center
            hover:scale-105 transition-transform duration-300`}

                >
                  <Image
                    src={tool.logo}
                    alt={tool.name}
                    width={120}
                    height={40}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animations */}
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
          animation: scrollLeft 30s linear infinite;
        }

        .animate-scroll-right {
          animation: scrollRight 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ToolsYouWillMaster;
