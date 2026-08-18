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

const row1Logos = logos.slice(0, 8);
const row2Logos = logos.slice(8);

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
              {[...row1Logos, ...row1Logos].map((logo, i) => (
                <LogoCard key={`r1-${i}`} logo={logo} />
              ))}
            </div>
          </div>

          {/* ROW 2 → LEFT */}
          <div className="overflow-hidden mt-6">
            <div className="flex w-max gap-6 animate-scroll-left flex-nowrap">
              {[...row2Logos, ...row2Logos].map((logo, i) => (
                <LogoCard key={`r2-${i}`} logo={logo} />
              ))}
            </div>
          </div>

          {/* RIGHT OVERLAY */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-28 z-20 bg-gradient-to-l from-[#fff9f7] to-transparent" />

        </div>

      </div>
    </section>
  );
}

function LogoCard({ logo }: { logo: string }) {
  const companyName = logo.split("/").pop()?.replace(".png", "") || "Company";
  return (
    <div className="w-44 h-24 bg-white border border-[#F2D6D6] rounded-2xl flex items-center justify-center shadow-sm flex-shrink-0">
      <div className="relative w-32 h-14">
        <Image
          src={logo}
          alt={`${companyName} hiring partner logo`}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 120px, 160px"
          className="object-contain"
        />
      </div>
    </div>
  );
}
