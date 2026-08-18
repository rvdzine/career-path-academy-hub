"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import BookingDialog from "./BookingDialog";
import Image from "next/image";

const OfflineSection = () => {
  const facilities = [
    { name: "Smart Classroom", icon: "/svg/info-circle.svg" },
    { name: "WiFi", icon: "/svg/location.svg" },
    { name: "Cafeteria", icon: "/svg/monitor-mobbile.svg" },
    { name: "Parking", icon: "/svg/monitor.svg" },
    { name: "Practice Lab", icon: "/svg/reserve.svg" },
    { name: "Doubt Classes", icon: "/svg/wifi-square.svg" },
    { name: "Air Conditioner", icon: "/svg/wind.svg" },
  ];

  return (
    <section className="bg-[#fdecec] py-16 md:py-20">
      {/* Heading Section */}
      <div className="text-center mb-14 px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-[#121212]">
          Experience Hands-On Learning
        </h2>
        <p className="text-base md:text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
          Join our offline classes at our premium Noida center for personalized
          attention and interactive learning
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-[1350px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* Left Image */}
        <div className="flex justify-center md:justify-start">
            <Image
              src="/assets/offsectionimg.jpg"
              alt="IDS Digital Marketing training center and practical lab facility in Sector 62 Noida"
              width={700}
              height={450}
              className="w-full h-auto object-cover"
            />
        </div>

        {/* Right Content */}
        <div className="space-y-6 text-center md:text-left">
          <Badge className="bg-[#2d2d2d] text-white px-4 py-1.5 rounded-full text-sm font-medium">
            Our Premium Offline Center
          </Badge>

          <h3 className="text-2xl md:text-3xl font-bold text-black leading-snug">
            NXOne, Tech zone 4, Opposite Gaur City Mall, <br />
            Greater Noida, UP, 201306
          </h3>

          <p className="text-base md:text-lg font-medium text-gray-700">
            Facilities Available
          </p>

          {/* Facilities List */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-sm border border-gray-100"
              >
                <Image
                  src={facility.icon}
                  alt={facility.name}
                  width={14}
                  height={14}
                />
                <span className="text-xs text-gray-700 font-medium">
                  {facility.name}
                </span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            {/* Book Your Demo */}
            <BookingDialog>
              <Button
                size="lg"
                className="bg-[#EA2525] hover:bg-[#d92020] text-white rounded-md px-8 py-5 text-lg font-semibold 
                transition-all duration-300 hover:scale-105 hover:shadow-lg focus:ring-2 focus:ring-[#EA2525]/50 w-full sm:w-auto"
              >
                Book Your Demo
              </Button>
            </BookingDialog>

            {/* View Details */}
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-md px-8 py-5 text-lg font-semibold 
              border border-[#EA2525] text-[#EA2525] hover:bg-[#EA2525] hover:text-white 
              transition-all duration-300 hover:scale-105 hover:shadow-md focus:ring-2 focus:ring-[#EA2525]/50 w-full sm:w-auto"
            >
              <Link href="/offline-center">View Details</Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OfflineSection;
