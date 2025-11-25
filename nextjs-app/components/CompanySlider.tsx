"use client";

import Image from "next/image";

const logos = [
  "/svg/download 7.svg",
  "/svg/download 10.svg",
  "/svg/download 36.svg",
  "/svg/download 16.svg",
  "/svg/download 18.svg",
  "/svg/download 20.svg",
  "/svg/download 28.svg",
   "/svg/download 26.svg",
   "/svg/download 31.svg",
    "/assets/mask-group.png",
     "/assets/ai-marketing.png",
    "/assets/conversion-rate.png",
     "/assets/wordpress.png",
     "/assets/pabbly.png",
     "/assets/shopify.png",
];

export default function CompanySlider() {
  return (
    <section className="w-full py-16">
      
      {/* Heading */}
      <h2 className="text-center text-4xl font-bold text-gray-900">
        Companies That Love <span className="text-red-500">Our Students</span>
      </h2>

      {/* Paragraph */}
      <p className="text-center mt-3 text-gray-600 text-lg max-w-2xl mx-auto">
        Our alumni from across programmes work at India's top startups and corporates.
      </p>

      {/* Row 1 */}
      <div className="overflow-hidden mt-10">
        <div className="flex gap-10 w-[200%] animate-[row1_20s_linear_infinite]">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`row1-${index}`}
              className="min-w-[250px] h-[90px] bg-white border border-red-500 rounded-xl flex items-center justify-center"
            >
              <Image
                src={logo}
                alt="brand"
                width={100}
                height={30}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 (Reverse direction) */}
      <div className="overflow-hidden mt-10">
        <div className="flex gap-10 w-[200%] animate-[row2_22s_linear_infinite]">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`row2-${index}`}
              className="min-w-[250px] h-[90px] bg-white border border-red-500 rounded-xl flex items-center justify-center"
            >
              <Image
                src={logo}
                alt="brand"
                width={100}
                height={30}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
