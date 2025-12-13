"use client";

import { useEffect, useState } from "react";

type Card = {
  title: string;
  strike: string;
  description: string;
  bg: string;
  textColor: string;
};

const cards: Card[] = [
  {
    title: "Learn From Digital Marketing Professionals",
    strike: "NOT Theory-Driven Academics",
    description:
      "Get trained by experts who run real campaigns, manage real budgets, and drive real results across SEO, ads, content, automation, and analytics.",
    bg: "bg-gradient-to-br from-[#2b2b2b] to-[#111]",
    textColor: "text-white",
  },
  {
    title: "Master Proven Digital Marketing Frameworks",
    strike: "NOT Outdated Marketing Concepts",
    description:
      "Learn growth frameworks, funnels, and performance strategies used by top agencies to scale campaigns with precision.",
    bg: "bg-[#ffe1dc]",
    textColor: "text-black",
  },
  {
    title: "Learn By Doing",
    strike: "NOT Weak Assignments",
    description:
      "Work on real-world projects, live campaigns, and case studies that help you build a strong portfolio.",
    bg: "bg-gradient-to-br from-[#3a3a3a] to-[#1a1a1a]",
    textColor: "text-white",
  },
   {
    title: "Learn By Doing",
    strike: "NOT Weak Assignments",
    description:
      "Work on real-world projects, live campaigns, and case studies that help you build a strong portfolio.",
    bg: "bg-gradient-to-br from-[#3a3a3a] to-[#1a1a1a]",
    textColor: "text-white",
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
                  className={`h-[360px] md:h-[400px] p-8 rounded-3xl flex flex-col justify-between ${card.bg} ${card.textColor}`}
                >
                  <div>
                    <h3 className="text-2xl font-bold mb-3">
                      {card.title}
                    </h3>

                    <p className="line-through decoration-red-500 font-semibold mb-4">
                      {card.strike}
                    </p>

                    <p className="text-sm leading-relaxed opacity-90">
                      {card.description}
                    </p>
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
