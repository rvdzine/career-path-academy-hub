"use client";

import Image from "next/image";

export default function RecognizedCertifications() {
  return (
    <section className="py-12 md:py-18 bg-white font-sans relative overflow-hidden border-t border-slate-100">
      {/* Subtle Ambient Red Dot Pattern */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-25"
        style={{
          backgroundImage: "radial-gradient(#fe4759 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-[1300px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3">
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-slate-900 tracking-tight leading-tight">
            Our Certifications are{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fe4759] to-[#d02e40]">
              Recognized by Top Companies
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Earn globally accredited credentials that validate your practical skills and accelerate your career.
          </p>
        </div>

        {/* Prominent Badges Showcase Banner */}
        <div className="relative bg-white rounded-3xl p-4 sm:p-8 lg:p-10 border border-slate-200/80 shadow-[0_10px_35px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-300">
          {/* Subtle Accent Glows */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#fe4759]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Badges Image */}
          <div className="relative w-full aspect-[1024/341] max-w-5xl mx-auto select-none">
            <Image
              src="/assets/CC.png"
              alt="Certifications Recognized by AI Powered Training, Skill India, IDS, Meta, HubSpot, Google, and 100+ Partners"
              fill
              sizes="(max-width: 768px) 100vw, 1024px"
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
