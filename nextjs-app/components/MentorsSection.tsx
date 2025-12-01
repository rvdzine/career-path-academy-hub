"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const mentors = [
  {
    name: "Abhishek Singh",
    title: "Ex Marketing Manager",
    companyLogo: "/assets/loveb.png",
  },
  {
    name: "Summit Mishra",
    title: "Ex Marketing Manager",
    companyLogo: "/assets/loveb.png",
  },
  {
    name: "Ravi Verma",
    title: "Ex Marketing Manager",
    companyLogo: "/assets/loveb.png",
  },
  {
    name: "Deepanshi Kukreja",
    title: "Ex Marketing Manager",
    companyLogo: "/assets/loveb.png",
  },
  {
    name: "Deepanshi Kukreja",
    title: "Ex Marketing Manager",
    companyLogo: "/assets/loveb.png",
  }
];

export default function MentorCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = direction === "left" ? -350 : 350;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-20"
      style={{
        backgroundColor: "#000",
        backgroundImage: `
          linear-gradient(#2a2a2a 1px, transparent 1px),
          linear-gradient(to right, #2a2a2a 1px, transparent 1px)
        `,
        backgroundSize: "30px 30px",
      }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Title */}
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-4">
          Meet Our Mentors
        </h2>
        <p className="text-gray-300 text-center mb-10 text-lg">
          Our mentors comprise leaders from some of India’s Leading Marketing, Tech & 
          Product Organizations.
        </p>

        {/* Slider Container */}
        <div className="relative flex items-center">
          
          {/* Left Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 z-10 bg-white shadow-md p-2 rounded-full"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Cards Wrapper */}
          <div
            ref={scrollRef}
            className="flex overflow-x-scroll no-scrollbar gap-6 px-10 scroll-smooth"
          >
            {mentors.map((m, index) => (
              <div
                key={index}
                className="min-w-[250px] bg-white rounded-2xl p-6 flex flex-col items-center shadow-md"
              >
                {/* Image Placeholder */}
                <div className="w-40 h-40 bg-gray-300 rounded-full mb-6" />

                {/* Name */}
                <h3 className="text-xl font-semibold text-black">{m.name}</h3>

                {/* Title */}
                <p className="text-blue-700 text-sm">{m.title}</p>

                {/* Company Logo */}
                <Image
                  src={m.companyLogo}
                  width={180}
                  height={40}
                  alt="company"
                  className="mt-6"
                />
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 z-10 bg-white shadow-md p-2 rounded-full"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
