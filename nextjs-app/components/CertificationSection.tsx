"use client";

import Image from "next/image";
import { ShieldCheck, QrCode, Award, Share2 } from "lucide-react";

const CertificationSection = () => {
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

      <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT – CERTIFICATE SHOWCASE */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="group relative w-full max-w-lg bg-white border-2 border-gray-950 rounded-3xl p-3 sm:p-4 shadow-xl hover:shadow-2xl transition-all duration-300">
              {/* Certificate Image Frame */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200/90 bg-stone-50">
                <Image
                  src="/assets/IdsCertificate.jpg"
                  alt="Industry recognized Digital Marketing Master Certification by iDigitalStudies"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                />
              </div>

              {/* Floating Verification Tag */}
              <div className="mt-3 flex items-center justify-between px-2 pt-1 text-xs">
                <div className="flex items-center gap-1.5 text-gray-700 font-bold text-[11.5px]">
                  <ShieldCheck className="w-4 h-4 text-red-600 flex-shrink-0" />
                  <span>ISO 9001:2015 & Govt. Recognized Standard</span>
                </div>
                <span className="bg-red-50 text-red-600 border border-red-200/80 text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md">
                  Official
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT – TEXT + ACCREDITATIONS */}
          <div className="lg:col-span-6">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-2.5">
              <span className="block w-8 h-[2.5px] bg-red-600 rounded-full" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-red-600">
                Recognized Credentials // Career Acceleration
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-950 tracking-tight leading-tight">
              Get Certified. Get Noticed. <span className="text-red-600">Get Hired.</span>
            </h2>

            <p className="mt-2 text-xs sm:text-sm text-gray-600 max-w-lg font-normal leading-relaxed">
              Stand out to recruiters with credentials backed by the Government of India and industry leaders. Verifiable, portfolio-ready, and recognized nationwide.
            </p>

            {/* ACCREDITATION CARDS */}
            <div className="mt-4 space-y-2.5">
              {/* MSME CARD */}
              <div className="group relative bg-white border-2 border-gray-950/10 hover:border-gray-950 rounded-2xl p-3 sm:p-3.5 shadow-xs hover:shadow-md transition-all duration-300 flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-stone-50 border border-gray-200/80 p-1.5 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/assets/MSME_logo.jpg"
                    alt="MSME Ministry of Micro Small and Medium Enterprises Certified"
                    width={40}
                    height={40}
                    loading="lazy"
                    className="object-contain"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm sm:text-base font-black text-gray-950 group-hover:text-red-600 transition-colors">
                      Govt. of India (MSME)
                    </h3>
                    <span className="text-[9.5px] font-extrabold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200/70 px-2 py-0.5 rounded-md flex-shrink-0">
                      Govt. Recognized
                    </span>
                  </div>
                  <p className="text-[11.5px] sm:text-xs text-gray-600 font-medium mt-0.5 leading-snug">
                    Ministry of Micro, Small and Medium Enterprises verified curriculum
                  </p>
                </div>
              </div>

              {/* NSDC / SKILL INDIA CARD */}
              <div className="group relative bg-white border-2 border-gray-950/10 hover:border-gray-950 rounded-2xl p-3 sm:p-3.5 shadow-xs hover:shadow-md transition-all duration-300 flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-stone-50 border border-gray-200/80 p-1.5 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/svg/logo_nsdc.svg"
                    alt="Skill India National Skill Development Corporation Partner"
                    width={40}
                    height={40}
                    loading="lazy"
                    className="object-contain"
                    unoptimized
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm sm:text-base font-black text-gray-950 group-hover:text-red-600 transition-colors">
                      Skill India (NSDC)
                    </h3>
                    <span className="text-[9.5px] font-extrabold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200/70 px-2 py-0.5 rounded-md flex-shrink-0">
                      Affiliated
                    </span>
                  </div>
                  <p className="text-[11.5px] sm:text-xs text-gray-600 font-medium mt-0.5 leading-snug">
                    National Skill Development Corporation compliant industry competencies
                  </p>
                </div>
              </div>
            </div>

            {/* CREDENTIAL PERKS STRIP */}
            <div className="mt-4 pt-3.5 border-t border-gray-100 grid grid-cols-3 gap-2 sm:gap-2.5 text-center">
              <div className="p-2 rounded-xl bg-stone-50 border border-gray-200/70">
                <QrCode className="w-3.5 h-3.5 text-red-600 mx-auto mb-0.5" />
                <p className="text-[10.5px] font-bold text-gray-900 leading-tight">QR Verified</p>
                <p className="text-[9px] text-gray-500 font-medium">Instant audit</p>
              </div>

              <div className="p-2 rounded-xl bg-stone-50 border border-gray-200/70">
                <Share2 className="w-3.5 h-3.5 text-red-600 mx-auto mb-0.5" />
                <p className="text-[10.5px] font-bold text-gray-900 leading-tight">LinkedIn Ready</p>
                <p className="text-[9px] text-gray-500 font-medium">1-click profile add</p>
              </div>

              <div className="p-2 rounded-xl bg-stone-50 border border-gray-200/70">
                <Award className="w-3.5 h-3.5 text-red-600 mx-auto mb-0.5" />
                <p className="text-[10.5px] font-bold text-gray-900 leading-tight">Lifetime Validity</p>
                <p className="text-[9px] text-gray-500 font-medium">No expiry fees</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
