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
    bg: "bg-gradient-to-br from-[#2b2b2b] to-[#111]",
    textColor: "text-white",
    image: "/svg/Frame 5434.svg",
  },
  {
    title: "Master Proven Digital Marketing Frameworks",
    strike: "NOT Outdated Marketing Concepts",
    description:
      "Learn modern strategies and funnels used by top marketing teams.",
    bg: "bg-[#ffe1dc]",
    textColor: "text-black",
    image: "/svg/Frame 5435.svg",
  },
  {
    title: "Learn By Executing Real Campaigns",
    strike: "NOT Watching Recorded Lectures",
    description:
      "Build skills by working on live campaigns and marketing projects.",
    bg: "bg-gradient-to-br from-[#3a3a3a] to-[#1a1a1a]",
    textColor: "text-white",
    image: "/svg/Frame 5436.svg",
  },
  {
    title: "Data-Driven Performance Feedback",
    strike: "NOT Basic Exam Scores",
    description:
      "Improve with insights based on real performance metrics.",
    bg: "bg-[#ffe1dc]",
    textColor: "text-black",
    image: "/svg/Frame 5437.svg",
  },
  {
    title: "Industry Tools & Platforms Training",
    strike: "NOT Just Theoretical Notes",
    description:
      "Hands-on experience with leading marketing tools & platforms.",
    bg: "bg-gradient-to-br from-[#2b2b2b] to-[#111]",
    textColor: "text-white",
    image: "/svg/Frame 5438.svg",
  },
  {
    title: "Career Support & Real-World Mentorship",
    strike: "NOT Generic Guidance Sessions",
    description:
      "Get guidance to build confidence and grow your digital career.",
    bg: "bg-[#ffe1dc]",
    textColor: "text-black",
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
    <section className="py-20 bg-white overflow-hidden">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16 px-4">
        <h2 className="text-4xl font-bold mb-4">
          Specialist Digital Marketing Education to Accelerate Your Career
        </h2>
        <p className="text-gray-600">
          Learn from real practitioners using modern frameworks and real-world projects.
        </p>
      </div>

      {/* Slider */}
      <div className="relative max-w-[1400px] mx-auto px-4">
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
  className={`relative h-[380px] md:h-[420px] p-8 rounded-3xl overflow-hidden ${card.bg} ${card.textColor}`}
>
  {/* Text Content */}
  <div className="relative z-10">
    <h3 className="text-2xl font-bold mb-3 leading-snug">
      {card.title}
    </h3>

    <p className="text-sm line-through decoration-red-500 font-semibold mb-4">
      {card.strike}
    </p>

    <p className="text-sm leading-relaxed opacity-90 max-w-[90%]">
      {card.description}
    </p>
  </div>

  {/* Image — BIG & BOTTOM-ALIGNED */}
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-center">
    <img
      src={card.image}
      alt={card.title}
      className="h-[200px] md:h-[240px] object-contain"
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
            className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
