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

export default function BrandSlider() {
  return (
    <div className="w-full bg-gray-50 py-14 overflow-hidden">
      
      {/* Heading */}
      <h2 className="text-center text-4xl font-bold text-gray-900">
        Companies That Love <span className="text-red-500">Our Students</span>
      </h2>

      {/* Paragraph */}
      <p className="text-center mt-3 text-gray-600 text-lg max-w-2xl mx-auto">
        Our alumni from across programmes work at India&apos;s top startups and corporates.
      </p>

      {/* ROW → RIGHT */}
      <div className="flex gap-6 mt-12 animate-scrollRight">
        {logos.concat(logos).map((logo, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl min-w-[160px] min-h-[110px] flex items-center justify-center shadow-md p-4"
          >
            <Image
             src={logo}
             alt={`logo-${i}`}
             width={140}
             height={80}
             className="object-contain hover:scale-110 transition-transform duration-300"
            />

          </div>
        ))}
      </div>

      {/* ROW → LEFT */}
      <div className="flex gap-6 mt-6 animate-scrollLeft">
        {logos.concat(logos).map((logo, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl min-w-[160px] min-h-[110px] flex items-center justify-center shadow-md p-4"
          >
            <Image
             src={logo}
             alt={`logo-${i}`}
             width={140}
             height={80}
             className="object-contain hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
