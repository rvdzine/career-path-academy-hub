"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import herosectionimg from "../public/assets/bg.jpg";
import ContactDialog from "@/components/ContactDialog";

const stats = [
  { image: "/svg/ai.svg", title: "AI-Driven", sub: "Module" },
  { image: "/svg/ph_certificate.svg", title: "30+", sub: "Certifications" },
  { image: "/svg/placement.svg", title: "Placement", sub: "Support" },
  { image: "/svg/project.png", title: "Live", sub: "Projects" },
];

export default function HeroSection() {
  return (
    <>
      <section className="relative h-[60vh] md:h-[65vh] lg:h-[70vh] overflow-hidden">

        {/* GRID OVERLAY */}
        <div
          className="absolute left-0 top-0 h-full w-[50%] z-10 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(#EA252512 1px, transparent 1px),
              linear-gradient(to right, #EA252512 1px, transparent 1px),
              linear-gradient(to right, rgba(255,255,255,0.74), rgba(255,255,255,0.37), rgba(255,255,255,0.12), transparent)
            `,
            backgroundSize: "44px 44px, 44px 44px, 100% 100%",
            backgroundRepeat: "repeat, repeat, no-repeat",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(6px)",
            maskImage: "linear-gradient(to right, white 40%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, white 70%, transparent 100%)",
          }}
        />

        {/* BACKGROUND IMAGE (HIDDEN ON MOBILE) */}
        <div className="hidden sm:flex absolute inset-0 z-0 justify-end items-center">
          <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[55%] max-w-[900px] h-full relative">
            <Image
              src={herosectionimg}
              alt="Students"
              fill
              className="object-cover object-center opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/10 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* CONTENT */}
        <div className="relative z-20 container mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-12 flex items-center h-full text-center sm:text-left">
          <div className="max-w-3xl mx-auto sm:mx-0">

            {/* SPARKLES — HIDDEN ON PHONE */}
            <div className="hidden sm:flex mb-3 sm:-ml-10">
              <div className="relative h-0">
                <div className="absolute -top-2 left-2 text-red-600">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0 L14.59 9.41 L24 12 L14.59 14.59 L12 24 L9.41 14.59 L0 12 L9.41 9.41 Z" />
                  </svg>
                </div>
                <div className="absolute top-2 left-4 text-red-600">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0 L14.59 9.41 L24 12 L14.59 14.59 L12 24 L9.41 14.59 L0 12 L9.41 9.41 Z" />
                  </svg>
                </div>
                <div className="absolute -top-4 left-10 text-red-600">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0 L14.59 9.41 L24 12 L14.59 14.59 L12 24 L9.41 14.59 L0 12 L9.41 9.41 Z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* HEADING — MOBILE ONLY ADJUST */}
           <h1 className="
  text-[24px]
  max-[360px]:text-[21px]
  sm:text-4xl
  lg:text-5xl
  font-bold
  mb-2
  sm:mb-4
  leading-snug
  max-[360px]:leading-tight
">
  <span className="text-red-600">AI-Powered</span>{" "}
  <span className="text-black">
    {/* Digital Marketing Education for the Next Generation */}
    Best Digital Marketing Institute in Noida

  </span>
</h1>


            {/* SUBHEADING — MOBILE ONLY ADJUST */}
            <p className="
  text-[#615F5F]
  text-[14px]
  max-[360px]:text-[13px]
  sm:text-[18px]
  lg:text-[16px]
  max-w-xl
  mx-auto
  sm:mx-0
  leading-relaxed
  max-[360px]:leading-snug
  mb-3
  sm:mb-4
">
  Upskill with practical training, industry tools, and hands-on
  experience that transforms beginners into professionals.
</p>


            {/* STATS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-0 mt-3 mb-4 max-w-[550px] mx-auto sm:mx-0">
              {stats.map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-1">
                  <div className="p-2 sm:p-3 rounded-xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <p className="font-semibold text-[12px] sm:text-[14px] leading-none">
                    {item.title}
                  </p>
                  <p className="text-[11px] sm:text-[12px] text-gray-500 leading-none">
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA BUTTONS — MOBILE OPTIMIZED */}
            <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-3 sm:gap-4 mt-4 sm:mt-10">

  <ContactDialog>
    <button
      className="
        bg-red-600 hover:bg-red-700 text-white
        px-5 py-2
        sm:px-7 sm:py-3
        max-[360px]:px-4
        max-[360px]:py-[6px]
        rounded-full
        font-semibold
        flex items-center justify-center gap-2
        transition-all
        text-sm sm:text-base
        max-[360px]:text-[13px]
      "
    >
      Enroll Now
      <ArrowRight className="w-4 h-4 max-[360px]:w-3 max-[360px]:h-3" />
    </button>
  </ContactDialog>

  <ContactDialog>
    <button
      className="
        border-2 border-red-600 text-[#615F5F]
        hover:bg-red-600/10
        px-5 py-2
        sm:px-7 sm:py-3
        max-[360px]:px-4
        max-[360px]:py-[6px]
        rounded-full
        font-semibold
        transition-all
        text-sm sm:text-base
        max-[360px]:text-[13px]
      "
    >
      Speak to a Counsellor
    </button>
  </ContactDialog>

</div>


          </div>
        </div>
      </section>
    </>
  );
}
