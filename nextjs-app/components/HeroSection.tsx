"use client";

import React from "react";
import Image from "next/image";
import { Briefcase, Users, ArrowRight } from "lucide-react";
import herosectionimg from "../public/assets/gallery8.png";
import ContactDialog from "@/components/ContactDialog";
import PlacedStudentCarousel from "@/components/PlacedStudentCarousel";

export default function HeroSection() {
  return (
    <>
    <section className="relative h-[90vh] md:h-[95vh] bg-black overflow-hidden">

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent z-10"></div>

  {/* GRID OVERLAY (Responsive) */}
  <div
    className="absolute left-0 top-0 h-full w-[50%] z-10 pointer-events-none"
     style={{
    backgroundImage: `
      linear-gradient(#ffffff22 1px, transparent 1px),
      linear-gradient(to right, #ffffff22 1px, transparent 1px),
      linear-gradient(to right, rgba(0, 0, 0, 0.53), rgba(0, 0, 0, 0.37), rgba(0, 0, 0, 0.12), transparent)
    `,
    backgroundSize: "22px 22px, 22px 22px, 100% 100%",
    backgroundRepeat: "repeat, repeat, no-repeat",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(6px)",
    maskImage: "linear-gradient(to right, black 40%, transparent 100%)",
    WebkitMaskImage: "linear-gradient(to right, black 70%, transparent 100%)",
  }}
  ></div>

  {/* Background Image */}
  <div className="absolute inset-0 z-0 overflow-hidden flex justify-end items-center">
    <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[55%] max-w-[900px] h-full relative">
      <Image
        src={herosectionimg}
        alt="Students"
        fill
        className="object-cover object-center opacity-90"
      />
    </div>

    {/* Right fade on image */}
    <div className="absolute right-0 top-0 bottom-0 w-[40%] md:w-[30%] lg:w-1/3 bg-gradient-to-l from-black/60 to-transparent"></div>
  </div>

  {/* Content */}
  <div className="relative z-20 container mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-12 py-10 flex items-center h-full">
    <div className="max-w-3xl">

    
      {/* Sparkles */}
<div className="mb-4 flex gap-2 -ml-10">
 
  {/* Sparkles (each star individually positioned) */}
<div className="relative h-0">

  {/* Small Star — slightly above & left */}
  <div className="absolute -top-2 left-2 text-red-600 opacity-90">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0 L14.59 9.41 L24 12 L14.59 14.59 L12 24 L9.41 14.59 L0 12 L9.41 9.41 Z" />
    </svg>
  </div>

  {/* Medium Star — a bit to the right & lower */}
  <div className="absolute top-2 left-4 text-red-600 opacity-95">
    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0 L14.59 9.41 L24 12 L14.59 14.59 L12 24 L9.41 14.59 L0 12 L9.41 9.41 Z" />
    </svg>
  </div>

  {/* Large Star — slightly right & more down */}
  <div className="absolute -top-2 left-10 text-red-600 opacity-100">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0 L14.59 9.41 L24 12 L14.59 14.59 L12 24 L9.41 14.59 L0 12 L9.41 9.41 Z" />
    </svg>
  </div>

</div>
</div>



      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-5 leading-tight">
        <span className="text-red-600">AI-Powered</span>{" "}
        <span className="text-white">
          Digital Marketing Education for the Next Generation
        </span>
      </h1>

      {/* Subheading */}
      <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-8 max-w-xl">
        Upskill with practical training, industry tools, and hands-on experience
        that transforms beginners into professionals.
      </p>

      {/* Arrow (hide on mobile)
      <div className="absolute -left-10 top-[240px] -mt-[50px] -ml-[20px] hidden [@media(min-width:1300px)]:block z-30">
        <svg
          width="160"
          height="260"
          viewBox="0 0 200 200"
          fill="none"
          stroke="white"
          strokeWidth="5"
          className="opacity-80 rotate-[25deg]"
        >
          <path
            d="M40 50 
              Q10 90 100 90 
              Q70 160 280 200

              M180 200
              L275 105
              M180 200
              L265 100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div> */}

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-4 mb-10">
        <ContactDialog>
          <button className="bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-full font-semibold text-base w-full sm:w-auto flex items-center justify-center gap-2 transition-all">
            Enroll Now <ArrowRight className="w-4 h-4" />
          </button>
        </ContactDialog>

        <button className="border-2 border-red-600 text-white hover:bg-red-600/10 px-7 py-3 rounded-full font-semibold text-base w-full sm:w-auto transition-all">
          Speak to a Counsellor
        </button>
      </div>


      {/* Stats Cards */}
<div className="grid grid-cols-2 gap-x-3 gap-y-3 mt-10 text-white max-w-sm">

  <div className="bg-white/5 border border-white/10 backdrop-blur-md p-3 rounded-xl flex items-center gap-2 ">
    <div className="bg-red-600/20 p-1.5 rounded">
      <Briefcase className="w-4 h-4 text-red-600" />
    </div>
    <div>
      <p className="font-bold text-base leading-tight">AI-Driven</p>
      <p className="text-xs text-gray-300 leading-tight">Module</p>
    </div>
  </div>

  <div className="bg-white/5 border border-white/10 backdrop-blur-md p-3 rounded-xl flex items-center gap-2 ">
    <div className="bg-red-600/20 p-1.5 rounded">
      <Users className="w-4 h-4 text-red-600" />
    </div>
    <div>
      <p className="font-bold text-base leading-tight">30+</p>
      <p className="text-xs text-gray-300 leading-tight">Certifications</p>
    </div>
  </div>

  <div className="bg-white/5 border border-white/10 backdrop-blur-md p-3 rounded-xl flex items-center gap-2 ">
    <div className="bg-red-600/20 p-1.5 rounded">
      <Briefcase className="w-4 h-4 text-red-600" />
    </div>
    <div>
      <p className="font-bold text-base leading-tight">99%</p>
      <p className="text-xs text-gray-300 leading-tight">Placement</p>
    </div>
  </div>

  <div className="bg-white/5 border border-white/10 backdrop-blur-md p-3 rounded-xl flex items-center gap-2 ">
    <div className="bg-red-600/20 p-1.5 rounded">
      <Users className="w-4 h-4 text-red-600" />
    </div>
    <div>
      <p className="font-bold text-base leading-tight">Live</p>
      <p className="text-xs text-gray-300 leading-tight">Projects</p>
    </div>
  </div>

</div>


</div>


    </div>
  
</section>

{/* <PlacedStudentCarousel /> */}

    </>

  );
}