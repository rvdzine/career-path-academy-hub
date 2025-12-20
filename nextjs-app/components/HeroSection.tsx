"use client";

import React from "react";
import Image from "next/image";
import { Briefcase, Users, ArrowRight } from "lucide-react";
import herosectionimg from "../public/assets/bg.jpg";
import ContactDialog from "@/components/ContactDialog";

// import PlacedStudentCarousel from "@/components/PlacedStudentCarousel";
const stats = [
  { image: "/svg/ai.svg", title: "AI-Driven", sub: "Module" },
  { image: "/svg/ph_certificate.svg", title: "30+", sub: "Certifications" },
  { image: "/svg/placement.svg", title: "Placement", sub: "Guarantee" },
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
              linear-gradient(#EA252512   1px, transparent 1px),
              linear-gradient(to right, #EA252512   1px, transparent 1px),
              linear-gradient(to right, rgba(255, 255, 255, 0.74), rgba(255, 255, 255, 0.37), rgba(255, 255, 255, 0.12), transparent)
            `,
            backgroundSize: "44px 44px, 44px 44px, 100% 100%",
            backgroundRepeat: "repeat, repeat, no-repeat",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(6px)",
            maskImage: "linear-gradient(to right, white 40%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, white 70%, transparent 100%)",
          }}
        />

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0 flex justify-end items-center">
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
        <div className="relative z-20 container mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-12 flex items-center h-full">
          <div className="max-w-3xl">

            {/* SPARKLES */}
            <div className="mb-3 flex -ml-10">
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

            {/* HEADING */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              <span className="text-red-600">AI-Powered</span>{" "}
              <span className="text-black">
                Digital Marketing Education for the Next Generation
              </span>
            </h1>

            {/* SUBHEADING */}
            <p className="text-[#615F5F] text-[17px] sm:text-[18px] lg:text-[16px] max-w-xl leading-relaxed mb-4">
              Upskill with practical training, industry tools, and hands-on
              experience that transforms beginners into professionals.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-4 gap-0 -ml-10 mt-4 mb-4 max-w-[550px]">
  {stats.map((item, i) => (
    <div key={i} className="flex flex-col items-center text-center gap-1">
      
      {/* IMAGE */}
      <div className=" p-3 rounded-xl">
        <Image
          src={item.image}
          alt={item.title}
          width={35}
          height={35}
          className="object-contain"
        />
      </div>

      <p className="font-semibold text-[14px] leading-none">{item.title}</p>
      <p className="text-[12px] text-gray-500 leading-none">{item.sub}</p>
    </div>
  ))}
</div>



            {/* CTA BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-10">
              <ContactDialog>
                <button className="bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-full font-semibold flex items-center gap-2 transition-all">
                  Enroll Now <ArrowRight className="w-4 h-4" />
                </button>
              </ContactDialog>

              <ContactDialog>
                <button className="border-2 border-red-600 text-[#615F5F] hover:bg-red-600/10 px-7 py-3 rounded-full font-semibold transition-all">
                  Speak to a Counsellor
                </button>
              </ContactDialog>
            </div>

          </div>
        </div>
      </section>

      {/* <PlacedStudentCarousel /> */}
    </>
  );
}
