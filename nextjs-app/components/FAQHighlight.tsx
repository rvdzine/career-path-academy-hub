"use client";

import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

const faqs = [
  {
    id: "faq-1",
    question: "What is the duration of digital marketing courses at IDS?",
    answer:
      "Course duration ranges from 3 months for specialized tracks (SEO, PPC) to 6 months for the Master program, which includes an intensive agency internship and real live client campaigns.",
  },
  {
    id: "faq-2",
    question: "Is a guaranteed agency internship included in the program?",
    answer:
      "Yes, our 6-month flagship Master program includes a 100% agency-based internship where you work on live ad budgets, client deliverables, and portfolio-ready performance campaigns.",
  },
  {
    id: "faq-3",
    question: "Are classes suitable for complete beginners with non-tech backgrounds?",
    answer:
      "Absolutely. Our curriculum starts from fundamental marketing logic and progresses systematically to advanced technical strategies. No coding or prior marketing experience is required.",
  },
  {
    id: "faq-4",
    question: "Will I receive recognized certifications upon completion?",
    answer:
      "Yes, graduates receive ISO 9001:2015 and Govt. recognized MSME / Skill India certifications, alongside industry credentials from Google Ads, Meta Blueprint, and HubSpot.",
  },
  {
    id: "faq-5",
    question: "What is the fee structure and do you offer EMI options?",
    answer:
      "Fees vary by track. We offer flexible zero-cost monthly EMI payment plans, corporate sponsorships, and merit scholarships of up to 40% for qualifying applicants.",
  },
  {
    id: "faq-6",
    question: "Can I attend classes online if I cannot visit the Noida campus?",
    answer:
      "Yes, we conduct live interactive virtual cohorts with real-time screen sharing, interactive doubt resolution, and lifetime access to recorded lecture archives.",
  },
];

const FAQHighlight = () => {
  // Split faqs evenly into two columns for desktop
  const col1 = faqs.slice(0, 3);
  const col2 = faqs.slice(3, 6);

  return (
    <section className="relative w-full bg-white py-12 sm:py-16 lg:py-20 border-t border-gray-100 overflow-hidden">
      {/* Subtle ambient red dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, #EA252514 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Concise Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="block w-8 h-[2.5px] bg-red-600 rounded-full" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-red-600">
              Common Inquiries // Clear Answers
            </span>
            <span className="block w-8 h-[2.5px] bg-red-600 rounded-full" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-950 tracking-tight leading-tight">
            Frequently Asked <span className="text-red-600">Questions</span>
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-gray-600 font-normal leading-relaxed">
            Quick, transparent answers to the questions prospective students ask us most.
          </p>
        </div>

        {/* 2-Column Concise FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 max-w-5xl mx-auto">
          {/* Column 1 */}
          <div className="space-y-3.5">
            {col1.map((faq) => (
              <Accordion key={faq.id} type="multiple" className="w-full">
                <AccordionItem
                  value={faq.id}
                  className="bg-white border border-gray-200/90 rounded-2xl hover:border-red-600/40 data-[state=open]:border-red-600/60 transition-all duration-200 shadow-xs hover:shadow-sm overflow-hidden"
                >
                  <AccordionTrigger className="px-5 py-3.5 text-left hover:no-underline font-bold text-xs sm:text-sm text-gray-950 hover:text-red-600 data-[state=open]:text-red-600 transition-colors">
                    <span>{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-4 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed font-normal border-t border-gray-100/80 mt-1">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>

          {/* Column 2 */}
          <div className="space-y-3.5">
            {col2.map((faq) => (
              <Accordion key={faq.id} type="multiple" className="w-full">
                <AccordionItem
                  value={faq.id}
                  className="bg-white border border-gray-200/90 rounded-2xl hover:border-red-600/40 data-[state=open]:border-red-600/60 transition-all duration-200 shadow-xs hover:shadow-sm overflow-hidden"
                >
                  <AccordionTrigger className="px-5 py-3.5 text-left hover:no-underline font-bold text-xs sm:text-sm text-gray-950 hover:text-red-600 data-[state=open]:text-red-600 transition-colors">
                    <span>{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-4 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed font-normal border-t border-gray-100/80 mt-1">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>

        {/* View All Action */}
        <div className="flex justify-center mt-8 sm:mt-10">
          <Link
            href="/faq"
            className="inline-flex items-center justify-center gap-2.5 bg-red-600 hover:bg-gray-950 text-white font-black text-xs uppercase tracking-widest py-3.5 px-8 transition-all duration-200 shadow-md shadow-red-600/15 active:scale-95"
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
            }}
          >
            <span>View All FAQs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQHighlight;

