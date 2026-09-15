"use client";

import Image from "next/image";
import { CheckCircle2, Sparkles } from "lucide-react";

interface HiringPartner {
  name: string;
  logo: string;
}

const row1Partners: HiringPartner[] = [
  { name: "Nykaa", logo: "/svg/Nykaa.svg" },
  { name: "Zomato", logo: "/svg/Zomato.svg" },
  { name: "TCS", logo: "/svg/TCS.svg" },
  { name: "Paytm", logo: "/svg/Paytm.svg" },
  { name: "Titan", logo: "/assets/Titan.png" },
  { name: "Meesho", logo: "/svg/Meesho.svg" },
  { name: "Flipkart", logo: "/svg/Flipkart.svg" },
  { name: "Godrej", logo: "/assets/Godrej.png" },
];

const row2Partners: HiringPartner[] = [
  { name: "Razorpay", logo: "/svg/razorpay.svg" },
  { name: "Salesforce", logo: "/svg/Salesforce.svg" },
  { name: "Sleepwell", logo: "/assets/Sleepwell.png" },
  { name: "Myntra", logo: "/svg/Myntra.svg" },
  { name: "Tech Mahindra", logo: "/svg/techmahindra.svg" },
  { name: "Vishal Mega Mart", logo: "/assets/Vishal mega mart.png" },
  { name: "Urban Company", logo: "/svg/Urbancompany.svg" },
  { name: "Cyber Shield", logo: "/assets/Cyber Shield.png" },
];

export default function TrustedCompaniesSlider() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-t border-gray-100 overflow-hidden">
      {/* Subtle ambient red dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, #EA252514 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-14 grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 lg:gap-14 items-center">
        {/* LEFT TEXT */}
        <div>
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-3">
            <span className="block w-8 h-[2.5px] bg-red-600 rounded-full" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-red-600">
              Industry Trust // 300+ Hiring Partners
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-950 tracking-tight leading-[1.12]">
            Companies That Trust <br className="hidden sm:inline" />
            <span className="text-red-600">Our Talent</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-lg font-normal leading-relaxed">
            Organizations across digital, tech, and ecommerce sectors rely on IDS graduates to strengthen their teams with modern, high-ROI marketing expertise.
          </p>

          {/* Value Highlights */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 pt-5 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-black text-gray-950">Direct Campus Hiring</p>
                <p className="text-[11px] font-medium text-gray-500">Fast-track interview pipelines</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-black text-gray-950">Day-1 Job Readiness</p>
                <p className="text-[11px] font-medium text-gray-500">Trained on live ad budgets</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SLIDER */}
        <div className="relative overflow-hidden">
          {/* Gradient Edge Fade Masks */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 sm:w-28 z-20 bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 sm:w-28 z-20 bg-gradient-to-l from-white via-white/80 to-transparent" />

          {/* ROW 1 → RIGHT */}
          <div className="overflow-hidden group/row1">
            <div className="flex w-max gap-4 sm:gap-5 animate-scroll-right group-hover/row1:[animation-play-state:paused] flex-nowrap py-1">
              {[...row1Partners, ...row1Partners, ...row1Partners].map((partner, i) => (
                <LogoCard key={`r1-${i}`} partner={partner} />
              ))}
            </div>
          </div>

          {/* ROW 2 → LEFT */}
          <div className="overflow-hidden mt-4 sm:mt-5 group/row2">
            <div className="flex w-max gap-4 sm:gap-5 animate-scroll-left group-hover/row2:[animation-play-state:paused] flex-nowrap py-1">
              {[...row2Partners, ...row2Partners, ...row2Partners].map((partner, i) => (
                <LogoCard key={`r2-${i}`} partner={partner} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoCard({ partner }: { partner: HiringPartner }) {
  const isSvg = partner.logo.endsWith(".svg");
  return (
    <div className="w-40 sm:w-44 h-20 sm:h-22 bg-white border-2 border-gray-950/10 hover:border-gray-950 rounded-2xl flex items-center justify-center p-3 sm:p-4 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0 group">
      <div className="relative w-28 sm:w-32 h-10 sm:h-12 flex items-center justify-center">
        <Image
          src={partner.logo}
          alt={`${partner.name} hiring partner`}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 112px, 128px"
          className="object-contain grayscale-[35%] group-hover:grayscale-0 transition-all duration-300"
          unoptimized={isSvg}
        />
      </div>
    </div>
  );
}
