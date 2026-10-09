"use client";

import Image from "next/image";
import { Award, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Quote } from "lucide-react";

export default function FounderSpotlight() {
  return (
    <section id="founder-vision" className="py-16 md:py-24 bg-white font-sans relative overflow-hidden border-t border-slate-100">
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean, Premium Light Card with Subtle Rose Accent */}
        <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-slate-50/90 via-rose-50/20 to-white border border-slate-200/80 p-8 sm:p-12 lg:p-16 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
          
          {/* Faint Ambient Glow Accents (Tasteful, Non-Overpowering) */}
          <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#fe4759]/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-slate-200/30 rounded-full blur-[80px] pointer-events-none" />

          {/* Watermark Quote Icon */}
          <div className="absolute top-8 left-8 text-rose-500/[0.04] pointer-events-none select-none">
            <Quote className="w-36 h-36 rotate-180" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            
            {/* Left Column: Inspiring Vision & Philosophy (8 cols) */}
            <div className="lg:col-span-7 xl:col-span-8 space-y-6">
              
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200/70 text-[#fe4759] text-xs font-black uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#fe4759]" />
                Founder&apos;s Vision
              </div>

              {/* Main Headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-[1.18]">
                &ldquo;Think Beyond Classrooms.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fe4759] to-[#d02e40]">
                  Work on Real-Time Projects.
                </span>&rdquo;
              </h2>

              {/* Philosophy Message */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl">
                &ldquo;At IDS, we don&apos;t just teach digital marketing &mdash; we open doors to high-income careers and futures without borders. Our programs are engineered beyond conventional classrooms, where ambitious learners gain hands-on mastery working on real-life client ad budgets, high-ROI campaigns, and guaranteed internship pipelines.&rdquo;
              </p>

              {/* Trust Highlight Badges Row */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm">
                <div className="flex items-center gap-2.5 bg-white px-4 py-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#fe4759] shrink-0" />
                  <span className="font-semibold text-slate-800">Live Real-Time Ad Budgets</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white px-4 py-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                  <ShieldCheck className="w-4 h-4 text-[#fe4759] shrink-0" />
                  <span className="font-semibold text-slate-800">1-on-1 Executive Mentorship</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white px-4 py-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                  <Award className="w-4 h-4 text-[#fe4759] shrink-0" />
                  <span className="font-semibold text-slate-800">Direct Placement Assistance</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/919315471293"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[#fe4759] hover:bg-[#e03447] text-white font-extrabold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-lg shadow-[#fe4759]/20 hover:shadow-xl hover:shadow-[#fe4759]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer group"
                >
                  <span>Chat with Advisor</span>
                  <span className="w-6 h-6 rounded-full bg-white/20 text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-200">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </a>
                <a
                  href="#programs"
                  className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 font-bold text-sm px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 transition-colors border border-slate-200/80 shadow-2xs"
                >
                  <span>Explore Programs</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </a>
              </div>

            </div>

            {/* Right Column: Sleek Founder Profile Card (4 cols) */}
            <div className="lg:col-span-5 xl:col-span-4 flex justify-center">
              <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 text-center space-y-4 max-w-sm w-full shadow-[0_12px_35px_rgba(0,0,0,0.05)] relative group hover:shadow-xl transition-all duration-300">
                
                {/* Leadership Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-[#fe4759] text-[10.5px] font-black uppercase tracking-wider mb-2">
                  <Award className="w-3 h-3 text-[#fe4759]" />
                  <span>IDS LEADERSHIP</span>
                </div>

                {/* Founder Avatar with subtle ring */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-rose-50 ring-2 ring-[#fe4759]/20 shadow-md bg-slate-100 mx-auto group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/assets/Arjun.jpg"
                    alt="Abhishek Kumar - Founder & Director"
                    fill
                    sizes="128px"
                    className="object-cover object-top"
                  />
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Abhishek Kumar
                  </h3>
                  <p className="text-xs sm:text-[13px] font-bold text-[#fe4759] uppercase tracking-wider mt-1">
                    Founder &amp; Director, IDS
                  </p>
                  <p className="text-xs text-slate-500 mt-1.5 font-medium leading-relaxed">
                    Digital Marketing Pioneer &amp; Career Transformation Mentor
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-white bg-slate-50 hover:bg-[#0A66C2] border border-slate-200/80 px-4 py-2 rounded-full transition-all duration-200 shadow-2xs"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
