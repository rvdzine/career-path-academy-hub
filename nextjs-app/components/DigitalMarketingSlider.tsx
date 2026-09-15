"use client";

import { useEffect, useState } from "react";

type Card = {
  title: string;
  strike: string;
  description: string;
  bg: string;
  textColor: string;
  image: string;
};


const cards: Card[] = [
  {
    title: "Learn From Digital Marketing Professionals",
    strike: "NOT Theory-Driven Academics",
    description:
      "Trained by professionals who run real campaigns and deliver results.",
    bg: "bg-gradient-to-br from-[#1c1c1c] to-[#0a0a0a] border border-gray-800",
    textColor: "text-white",
    image: "/svg/Frame 5434.svg",
  },
  {
    title: "Master Proven Digital Marketing Frameworks",
    strike: "NOT Outdated Marketing Concepts",
    description:
      "Learn modern strategies and funnels used by top marketing teams.",
    bg: "bg-gradient-to-br from-[#FFF5F5] to-[#FEE2E2] border border-red-200/70",
    textColor: "text-gray-950",
    image: "/svg/Frame 5435.svg",
  },
  {
    title: "Learn By Executing Real Campaigns",
    strike: "NOT Watching Recorded Lectures",
    description:
      "Build skills by working on live campaigns and marketing projects.",
    bg: "bg-gradient-to-br from-[#222222] to-[#0f0f0f] border border-gray-800",
    textColor: "text-white",
    image: "/svg/Frame 5436.svg",
  },
  {
    title: "Data-Driven Performance Feedback",
    strike: "NOT Basic Exam Scores",
    description:
      "Improve with insights based on real performance metrics.",
    bg: "bg-gradient-to-br from-[#FFF5F5] to-[#FEE2E2] border border-red-200/70",
    textColor: "text-gray-950",
    image: "/svg/Frame 5437.svg",
  },
  {
    title: "Industry Tools & Platforms Training",
    strike: "NOT Just Theoretical Notes",
    description:
      "Hands-on experience with leading marketing tools & platforms.",
    bg: "bg-gradient-to-br from-[#1c1c1c] to-[#0a0a0a] border border-gray-800",
    textColor: "text-white",
    image: "/svg/Frame 5438.svg",
  },
  {
    title: "Career Support & Real-World Mentorship",
    strike: "NOT Generic Guidance Sessions",
    description:
      "Get guidance to build confidence and grow your digital career.",
    bg: "bg-gradient-to-br from-[#FFF5F5] to-[#FEE2E2] border border-red-200/70",
    textColor: "text-gray-950",
    image: "/svg/Frame 5439.svg",
  },
];


export default function DigitalMarketingCards() {
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  // 🔍 Detect screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const maxIndex = Math.max(cards.length - cardsPerView, 0);

  // 🔁 Auto slide (NO BLANK EVER)
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);

    return () => clearInterval(timer);
  }, [maxIndex]);

  const next = () => setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prev = () => setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  return (
    <section className="relative py-20 bg-white overflow-hidden border-t border-gray-100">
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

      {/* Heading */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-16 px-4">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="block w-8 h-[2.5px] bg-red-600 rounded-full" />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-red-600">
            Methodology & Mentorship
          </span>
          <span className="block w-8 h-[2.5px] bg-red-600 rounded-full" />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-950 tracking-tight leading-[1.1] mb-4">
          Specialist <span className="text-red-600">Digital Marketing</span> Education to Accelerate Your Career
        </h2>
        <p className="text-gray-600 text-sm sm:text-base font-normal max-w-2xl mx-auto">
          Learn from real practitioners using modern frameworks and real-world projects.
        </p>
      </div>

      {/* Slider */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${(index * 100) / cardsPerView}%)`,
            }}
          >
            {cards.map((card, i) => (
              <div
                key={i}
                className="w-full flex-shrink-0 px-4 md:w-2/3 lg:w-1/3"
              >
                <div
  className={`relative h-[340px] sm:h-[360px] md:h-[420px] p-6 sm:p-8 rounded-3xl overflow-hidden ${card.bg} ${card.textColor}`}
>
  {/* Text Content */}
  <div className="relative z-10">
    <h3 className="text-xl sm:text-2xl font-bold mb-3 leading-snug">
      {card.title}
    </h3>

    <p className="text-sm line-through decoration-red-500 font-semibold mb-3">
      {card.strike}
    </p>

    <p className="text-sm leading-relaxed opacity-90 max-w-full sm:max-w-[90%]">
      {card.description}
    </p>
  </div>

  {/* Image — RESPONSIVE */}
  <div
    className="
      absolute
      bottom-0
      left-1/2
      -translate-x-1/2
      w-full
      flex
      justify-center
      pointer-events-none
    "
  >
    <img
      src={card.image}
      alt={card.title}
      className="
        w-[80%]
        sm:w-[75%]
        md:w-auto
        h-[140px]
        sm:h-[170px]
        md:h-[240px]
        object-contain
      "
    />
  </div>
</div>



            </div>
             
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={prev}
            aria-label="Previous"
            className="w-11 h-11 rounded-full border border-gray-300 hover:border-gray-950 bg-white hover:bg-gray-950 hover:text-white flex items-center justify-center transition shadow-sm cursor-pointer text-lg font-bold"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="w-11 h-11 rounded-full border border-gray-300 hover:border-gray-950 bg-white hover:bg-gray-950 hover:text-white flex items-center justify-center transition shadow-sm cursor-pointer text-lg font-bold"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
