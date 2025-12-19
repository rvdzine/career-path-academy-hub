"use client";

import Image from "next/image";

const logos = [
  "/assets/Cyber Shield.png",
  "/assets/Geeksquares.png",
  "/assets/Glam space.png",
  "/assets/ICR Infra.png",
  "/assets/IDS.png",
  "/assets/skillgrow.png",
  "/assets/Tech Maestro.png",
  "/assets/Deshizayka.png",
  "/assets/Vishal mega mart.png",
  "/assets/Titan.png",
  "/assets/Sleepwell.png",
  "/assets/Roto pumps.png",
  "/assets/NX ONE.png",
  "/assets/Aakkar.png",
  "/assets/Godrej.png",
  "/assets/Cavana Fashion.png",
];

export default function TrustedCompaniesSlider() {
  return (
    <section className="w-full bg-[#FFF9F9] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT TEXT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Companies That Trust <br /> Our Talent
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-lg">
            Organizations across digital, tech, and ecommerce sectors rely on IDS
            to strengthen their teams with modern marketing expertise.
          </p>
        </div>

        {/* RIGHT SLIDER */}
<div className="relative overflow-hidden">

  {/* LEFT OVERLAY */}
  <div className="pointer-events-none absolute left-0 top-0 h-full w-28 z-20 bg-gradient-to-r from-[#fff9f7] to-transparent" />

  {/* ROW 1 → RIGHT */}
  <div className="overflow-hidden">
    <div className="flex w-max gap-6 animate-scroll-right flex-nowrap">
      {[...logos, ...logos].map((logo, i) => (
        <LogoCard key={`r1-${i}`} logo={logo} />
      ))}
    </div>
  </div>

  {/* ROW 2 → LEFT */}
  <div className="overflow-hidden mt-6">
    <div className="flex w-max gap-6 animate-scroll-left flex-nowrap">
      {[...logos, ...logos].map((logo, i) => (
        <LogoCard key={`r2-${i}`} logo={logo} />
      ))}
    </div>
  </div>

        </div>
      </div>
    </section>
  );
}

/* LOGO CARD */
function LogoCard({ logo }: { logo: string }) {
  return (
    <div className="bg-white rounded-2xl min-w-[160px] h-[110px] flex items-center justify-center shadow-sm hover:shadow-md transition">
      <Image
        src={logo}
        alt="company-logo"
        width={140}
        height={70}
        className="object-contain"
      />
    </div>
  );
}
