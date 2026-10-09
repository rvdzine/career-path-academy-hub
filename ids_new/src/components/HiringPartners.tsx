"use client";

import Image from "next/image";
import {
  TrendingUp,
  Zap,
  ShieldCheck,
} from "lucide-react";

const techLogosRows = [
  [
    { name: "Nykaa", logo: "/svg/Nykaa.svg" },
    { name: "Zomato", logo: "/svg/Zomato.svg" },
  ],
  [
    { name: "TCS", logo: "/assets/TCS.svg" },
    { name: "Paytm", logo: "/svg/Paytm.svg" },
  ],
  [
    { name: "Titan", logo: "/assets/Titan.png" },
    { name: "Meesho", logo: "/svg/Meesho.svg" },
  ],
  [
    { name: "Flipkart", logo: "/assets/Flipkart.svg" },
    { name: "Godrej", logo: "/assets/Godrej.png" },
  ],
  [
    { name: "Razorpay", logo: "/svg/razorpay.svg" },
    { name: "Salesforce", logo: "/assets/Salesforce.svg" },
  ],
  [
    { name: "Sleepwell", logo: "/assets/Sleepwell.png" },
    { name: "Myntra", logo: "/assets/Myntra.svg" },
  ],
  [
    { name: "Tech Mahindra", logo: "/assets/techmahindra.svg" },
    { name: "Vishal Mega Mart", logo: "/assets/Vishal mega mart.png" },
  ],
  [
    { name: "Urban Company", logo: "/svg/Urbancompany.svg" },
    { name: "Cyber Shield", logo: "/assets/Cyber Shield.png" },
  ],
];

export default function HiringPartners() {
  return (
    <section id="hiring-partners" className="py-16 md:py-24 bg-white font-sans relative overflow-hidden">
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-3">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight">
            Trusted By{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fe4759] to-[#d82a3d]">
              Leading Brands & Recruiters
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Our graduates interview and get placed at high-growth organizations and leading enterprises across tech, finance, and marketing.
          </p>
        </div>

        {/* Bento Grid Layout - Concise 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          
          {/* Card 1: Placement Stat Card */}
          <div className="bg-gradient-to-br from-[#fe4759] to-[#e03447] rounded-[28px] p-6 sm:p-7 text-white shadow-xl shadow-[#fe4759]/20 flex flex-col justify-between relative overflow-hidden group">
            {/* Background ambient pulse */}
            <div className="absolute -right-12 -top-12 w-44 h-44 rounded-full bg-white/10 blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>

            {/* Top Header inside Stat Card */}
            <div>
              <div className="flex items-center justify-between gap-3 relative z-10 mb-4 sm:mb-5">
                <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-inner">
                  <TrendingUp className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div className="px-3 py-1 rounded-full bg-white text-[#fe4759] text-[10px] font-black uppercase tracking-wider shadow-sm">
                  CAREER ASSISTANCE
                </div>
              </div>

              {/* Main Stat */}
              <div className="flex items-baseline tracking-tight">
                <span className="text-5xl sm:text-6xl font-black text-white leading-none">
                  92
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-white/90 ml-1">
                  %
                </span>
              </div>
              <p className="text-white/95 text-xs sm:text-sm font-medium mt-2 leading-snug">
                Placement support rate connecting graduates to growing tech & marketing companies.
              </p>
            </div>

            {/* 3 Metric Pills */}
            <div className="pt-4 space-y-2 relative z-10 border-t border-white/20 mt-4">
              <div className="flex items-center justify-between bg-white/10 backdrop-blur-xs rounded-xl px-3.5 py-2 text-xs font-semibold">
                <span>Hiring Network</span>
                <span className="font-black text-white">Active Recruiters</span>
              </div>
              <div className="flex items-center justify-between bg-white/10 backdrop-blur-xs rounded-xl px-3.5 py-2 text-xs font-semibold">
                <span>Highest Package</span>
                <span className="font-black text-white">₹12.5 LPA</span>
              </div>
              <div className="flex items-center justify-between bg-white/10 backdrop-blur-xs rounded-xl px-3.5 py-2 text-xs font-semibold">
                <span>Placement Support</span>
                <span className="font-black text-white">Dedicated Cell</span>
              </div>
            </div>
          </div>

          {/* Card 2: Technology & Product Giants with Vertical Infinite Marquee */}
          <div className="bg-white border border-slate-200/90 rounded-[28px] p-6 sm:p-7 shadow-[0_10px_35px_rgba(0,0,0,0.04)] flex flex-col">
            {/* Header */}
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#fe4759]/10 border border-[#fe4759]/20 flex items-center justify-center text-[#fe4759] shrink-0">
                <Zap className="w-5 h-5 fill-[#fe4759]" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-slate-900 tracking-tight leading-snug">
                  Technology & Product
                </h3>
                <p className="text-[10px] font-black tracking-wider text-[#fe4759] uppercase">
                  TOP TECH RECRUITERS
                </p>
              </div>
            </div>

            {/* Vertical Auto-Scrolling 2-Column Marquee (Showing exactly 6 cards / 3 rows at a time) */}
            <div className="relative h-[216px] overflow-hidden rounded-2xl">
              {/* Top & Bottom Smooth Gradient Edge Masks */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-white via-white/80 to-transparent z-10" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />

              {/* Infinite Scrolling Track */}
              <div className="animate-marquee-vertical flex flex-col">
                {[...techLogosRows, ...techLogosRows].map((row, rowIdx) => (
                  <div key={rowIdx} className="grid grid-cols-2 gap-3 mb-3">
                    {row.map((item, colIdx) => (
                      <div
                        key={colIdx}
                        className="h-16 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-300 shadow-2xs hover:shadow-md flex items-center justify-center p-3 transition-all"
                      >
                        <Image
                          src={item.logo}
                          alt={item.name}
                          width={95}
                          height={28}
                          className="h-6 sm:h-7 w-auto max-w-[100px] max-h-8 object-contain"
                          unoptimized
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: Banking & Enterprise Allies */}
          <div className="bg-white border border-slate-200/90 rounded-[28px] p-6 sm:p-7 shadow-[0_10px_35px_rgba(0,0,0,0.04)] flex flex-col">
            {/* Header */}
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#fe4759]/10 border border-[#fe4759]/20 flex items-center justify-center text-[#fe4759] shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#fe4759] stroke-[2.5]" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-slate-900 tracking-tight leading-snug">
                  Enterprise & Fintech
                </h3>
                <p className="text-[10px] font-black tracking-wider text-[#fe4759] uppercase">
                  BANKING & MEDIA PARTNERS
                </p>
              </div>
            </div>

            {/* 6 Logos Grid (3 rows x 2 columns, perfectly matching 216px height) */}
            <div className="grid grid-cols-2 gap-3 h-[216px]">
              {/* 1. Razorpay */}
              <div className="h-16 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-300 shadow-2xs hover:shadow-md flex items-center justify-center p-3 transition-all">
                <div className="flex items-center gap-1">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#0A85EA]">
                    <path d="M12.8 2L5 13.5h5.5L7.5 22 19 8.5h-6.2z"/>
                  </svg>
                  <span className="font-bold text-xs text-[#0C2340] tracking-tight">Razorpay</span>
                </div>
              </div>

              {/* 2. Paytm */}
              <div className="h-16 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-300 shadow-2xs hover:shadow-md flex items-center justify-center p-3 transition-all">
                <div className="flex items-center font-black text-sm tracking-tight">
                  <span className="text-[#002E6E]">Pay</span>
                  <span className="text-[#00BAF2]">tm</span>
                </div>
              </div>

              {/* 3. HDFC Bank */}
              <div className="h-16 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-300 shadow-2xs hover:shadow-md flex items-center justify-center p-3 transition-all">
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 bg-[#004C8F] flex items-center justify-center p-0.5 rounded-xs">
                    <div className="w-full h-full bg-red-600 border border-white"></div>
                  </div>
                  <span className="font-black text-[9px] text-[#004C8F] tracking-tighter">HDFC BANK</span>
                </div>
              </div>

              {/* 4. Airtel */}
              <div className="h-16 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-300 shadow-2xs hover:shadow-md flex items-center justify-center p-3 transition-all">
                <div className="flex items-center gap-1">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#E40000]">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5c-2.49 0-4.5-2.01-4.5-4.5S8.51 7.5 11 7.5c1.45 0 2.74.69 3.56 1.76l-1.39 1.39C12.69 10.27 11.9 10 11 10c-1.1 0-2 .9-2 2s.9 2 2 2c.74 0 1.38-.41 1.72-1.02h-1.72V11.5h3.41c.06.27.09.56.09.87 0 2.28-1.63 4.13-3.5 4.13z"/>
                  </svg>
                  <span className="font-black text-[#E40000] text-sm lowercase tracking-tight">airtel</span>
                </div>
              </div>

              {/* 5. Netflix */}
              <div className="h-16 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-300 shadow-2xs hover:shadow-md flex items-center justify-center p-3 transition-all">
                <span className="font-black text-base text-[#E50914] tracking-wider">NETFLIX</span>
              </div>

              {/* 6. Salesforce */}
              <div className="h-16 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-300 shadow-2xs hover:shadow-md flex items-center justify-center p-3 transition-all">
                <Image src="/assets/Salesforce.svg" alt="Salesforce" width={75} height={24} className="h-5 w-auto object-contain" unoptimized />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
