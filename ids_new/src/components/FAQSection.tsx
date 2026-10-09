"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What makes IDS courses different from other platforms?",
      a: "Our programs are practical, project-based, and aligned with NEP 2020 guidelines. We provide hands-on virtual internships with live client campaigns, direct 1-on-1 mentor code reviews, lifetime LMS access, and dedicated placement assistance connected with active hiring partners.",
    },
    {
      q: "What kind of placement assistance is provided?",
      a: "All our master courses and PG diplomas include comprehensive placement assistance. Our dedicated placement cell provides resume building, LinkedIn optimization, mock technical interview sessions, and interview scheduling with reputable companies.",
    },
    {
      q: "Are the certifications globally recognized?",
      a: "Yes, our certifications are accredited and recognized by industry leaders including Microsoft, Google, and IBM alignments, along with partnerships with Medhavi Skills University and government bodies like MSME and NSDC.",
    },
    {
      q: "What is the 100% Money Back Guarantee policy?",
      a: "We are confident in our world-class faculty and curriculum. If you attend the first live session and feel the course does not meet your career aspirations, you can claim a 100% no-questions-asked refund immediately.",
    },
    {
      q: "Can I pay course fees in No-Cost EMIs?",
      a: "Yes, we offer flexible 0% interest EMI options starting at just ₹2,500/month through our partnered NBFC and banking networks, with instant online paperless approval.",
    },
    {
      q: "What happens if I miss a live class session?",
      a: "Every single live training session is recorded in HD and uploaded to your personal Learning Management System (LMS) dashboard within 24 hours. You have lifetime access to rewatch sessions anytime.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-white font-sans relative border-t border-slate-100">
      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fe4759] to-[#d02e40]">
              Questions
            </span>
          </h2>
          <p className="text-sm text-slate-600 font-normal leading-relaxed">
            Everything you need to know about our certifications, admissions,
            practical internships, and flexible payment plans.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200/80 rounded-2xl overflow-hidden transition-all duration-200 bg-slate-50/50 hover:bg-slate-50"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-900 text-sm sm:text-base cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#fe4759] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/40 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
