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
    <section className="relative h-[90vh] md:h-[95vh] overflow-hidden">

  {/* Dark Overlay */}
  {/* <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-10"></div> */}

  {/* GRID OVERLAY (Responsive) */}
  <div
  className="absolute left-0 top-0 h-full w-[50%] z-10 pointer-events-none"
  style={{
    backgroundImage: `
      linear-gradient(#EA25251F 1px, transparent 1px),
      linear-gradient(to right, #EA25251F 1px, transparent 1px),
      linear-gradient(to right, rgba(255, 255, 255, 0.74), rgba(255, 255, 255, 0.37), rgba(255, 255, 255, 0.12), transparent)
    `,
    backgroundSize: "44px 44px, 44px 44px, 100% 100%",
    backgroundRepeat: "repeat, repeat, no-repeat",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(6px)",
    maskImage: "linear-gradient(to right, white 40%, transparent 100%)",
    WebkitMaskImage: "linear-gradient(to right, white 70%, transparent 100%)",
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

    {/* ❗Off-White Blur Fade (left side of image, fading to right) */}
    <div className="absolute inset-0 bg-gradient-to-r 
        from-[#FFFFFF] via-[#ffffffaa]/10 to-transparent
        
        pointer-events-none">
    </div>
  </div>
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
        <span className="text-black">
          Digital Marketing Education for the Next Generation
        </span>
      </h1>

      {/* Subheading */}
<p className="text-[#615F5F] text-[18px] sm:text-[20px] lg:text-[22px] mb-5 max-w-xl leading-relaxed">
  Upskill with practical training, industry tools, and hands-on experience
  that transforms beginners into professionals.
</p>

{/* Stats Cards - 4 Horizontal Items */}
<div className="grid grid-cols-4 gap-2 -ml-10 mt-6 mb-6 w-full max-w-[650px]">

  {/* AI-Driven Module */}
  <div className="flex flex-col items-center text-center gap-1">
    <div className="bg-red-600/10 p-2.5 rounded-xl">
      <Briefcase className="w-5 h-5 text-red-600" />
    </div>
    <p className="font-semibold text-[14px] leading-none">AI- Driven</p>
    <p className="text-[12px] text-gray-500 leading-none">Module</p>
  </div>

  {/* 30+ Certifications */}
  <div className="flex flex-col items-center text-center gap-1">
    <div className="bg-red-600/10 p-2.5 rounded-xl">
      <Users className="w-5 h-5 text-red-600" />
    </div>
    <p className="font-semibold text-[14px] leading-none">30+</p>
    <p className="text-[12px] text-gray-500 leading-none">Certifications</p>
  </div>

  {/* Placement Guarantee */}
  <div className="flex flex-col items-center text-center gap-1">
    <div className="bg-red-600/10 p-2.5 rounded-xl">
      <Briefcase className="w-5 h-5 text-red-600" />
    </div>
    <p className="font-semibold text-[14px] leading-none">Placement</p>
    <p className="text-[12px] text-gray-500 leading-none">Guarantee</p>
  </div>

  {/* Live Projects */}
  <div className="flex flex-col items-center text-center gap-1">
    <div className="bg-red-600/10 p-2.5 rounded-xl">
      <Users className="w-5 h-5 text-red-600" />
    </div>
    <p className="font-semibold text-[14px] leading-none">Live</p>
    <p className="text-[12px] text-gray-500 leading-none">Projects</p>
  </div>

</div>




      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-4 mb-10 mt-12 lg:mt-14">
        <ContactDialog>
          <button className="bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-full font-semibold text-base w-full sm:w-auto flex items-center justify-center gap-2 transition-all">
            Enroll Now <ArrowRight className="w-4 h-4" />
          </button>
        </ContactDialog>
        <ContactDialog>
        <button className="border-2 border-red-600 text-[#615F5F] hover:bg-red-600/10 px-7 py-3 rounded-full font-semibold text-base w-full sm:w-auto transition-all">
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