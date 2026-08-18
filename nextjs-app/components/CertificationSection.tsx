"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const CertificationSection = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden">

      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(#EA252512 1px, transparent 1px),
            linear-gradient(to right, #EA252512 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          maskImage: "linear-gradient(to right, white 60%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, white 60%, transparent 100%)",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1300px] mx-auto px-6">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT – CERTIFICATE */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-xl">
              <Image
                src="/assets/IdsCertificate.jpg"
                alt="Industry recognized Digital Marketing Master Certification by iDigitalStudies"
                width={1200}
                height={900}
                className="w-full h-auto rounded-lg shadow-xl border"
              />
            </div>
          </div>

          {/* RIGHT – TEXT + CARDS */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-4">
              Get certified. Get noticed. <br /> Get hired.
            </h2>

            <p className="text-gray-600 mb-8 max-w-md">
              Stand out with a credential that reflects true digital marketing mastery.
            </p>

            {/* MSME CARD */}
            <Card className="mb-6 border-0 shadow-md rounded-xl bg-white">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="w-14 h-14 relative">
                  <Image
                    src="/assets/MSME_logo.jpg"
                    alt="MSME Ministry of Micro Small and Medium Enterprises Certified"
                    fill
                    loading="lazy"
                    sizes="60px"
                    className="object-contain"
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    Govt. of India
                  </h4>
                  <p className="text-sm text-gray-500">
                    MSME Recognized
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* NSDC CARD */}
            <Card className="border-0 shadow-md rounded-xl bg-white">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="w-14 h-14 relative">
                  <Image
                    src="/svg/logo_nsdc.svg"
                    alt="Skill India National Skill Development Corporation Partner"
                    fill
                    loading="lazy"
                    sizes="60px"
                    className="object-contain"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    Skill India (NSDC)
                  </h3>
                  <p className="text-sm text-gray-600">
                    Affiliated with National Skill Development Corporation
                  </p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
