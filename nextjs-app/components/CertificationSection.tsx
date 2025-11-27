"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Shield, CheckCircle, Star } from "lucide-react";
import WhyIDS from "./whyids";

const CertificationSection = () => {
  const certifications = [
    {
      name: "MSME Registered",
      description: "Registered under Ministry of Micro, Small & Medium Enterprises",
      icon: Shield,
      color: "from-blue-500 to-blue-600",
      badge: "Government Recognized",
      image: "/assets/MSME_logo.jpg",
    },
    {
      name: "Skill India (NSDC)",
      description: "Affiliated with National Skill Development Corporation",
      icon: Award,
      color: "from-green-500 to-green-600",
      badge: "NSDC Partner",
      image: "/svg/logo_nsdc.svg",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-[1300px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Government Recognized Certifications
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Our programs are affiliated with leading government bodies, ensuring your certification holds real value in the industry.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-500 border-0 shadow-md hover:-translate-y-2 rounded-2xl bg-white"
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  {cert.image && (
                    <div className="w-16 h-16 relative flex-shrink-0">
                      <Image
                        src={cert.image}
                        alt={cert.name}
                        fill
                        className="object-contain rounded-lg"
                      />
                    </div>
                  )}

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-xl md:text-2xl font-bold text-black group-hover:text-blue-600 transition-colors">
                        {cert.name}
                      </h3>

                      <Badge
                        className={`bg-gradient-to-r ${cert.color} text-white border-0 px-3 py-1 rounded-md text-xs font-semibold`}
                      >
                        {cert.badge}
                      </Badge>
                    </div>

                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
      <div className="mt-20 w-full">
  {/* Heading + Description */}
  <div className="text-center mb-10">
    <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
      IDS Recognized Certifications
    </h2>
    <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
      Get industry-recognized certification that validates your practical
      digital marketing skills and boosts your career opportunities globally.
    </p>
  </div>

  {/* Certificate Image */}
  <div className="relative w-full max-w-4xl mx-auto">
    <Image
      src="/assets/certificate.png"
      alt="IDS Certificate Sample"
      width={1600}
      height={1100}
      className="rounded-xl shadow-lg object-contain w-full h-auto"
    />
  </div>
</div>

      
      
    </section>
  );
};

export default CertificationSection;
