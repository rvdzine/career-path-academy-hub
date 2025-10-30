import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import BookingDialog from "./BookingDialog";

// SVG imports (used as images)
import offimg1 from "../components/svg/info-circle.svg";
import offimg2 from "../components/svg/location.svg";
import offimg3 from "../components/svg/monitor-mobbile.svg";
import offimg4 from "../components/svg/monitor.svg";
import offimg5 from "../components/svg/reserve.svg";
import offimg6 from "../components/svg/wifi-square.svg";
import offimg7 from "../components/svg/wind.svg";
import offimg8 from "../components/assets/offsectionimg.jpg";

const OfflineSection = () => {
  const facilities = [
    { name: "Smart Classroom", icon: offimg4 },
    { name: "WiFi", icon: offimg6 },
    { name: "Cafeteria", icon: offimg5 },
    { name: "Parking", icon: offimg2 },
    { name: "Practice Lab", icon: offimg3 },
    { name: "Doubt Classes", icon: offimg1 },
    { name: "Air Conditioner", icon: offimg7 },
  ];

  return (
    <section className="bg-[#fdecec] py-20">
      {/* Heading Section */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-[#121212]">
          Experience Hands-On Learning
        </h2>
        <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
          Join our offline classes at our premium Noida center for personalized
          attention and interactive learning
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-[1350px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
        {/* Left Image */}
       <div className="flex justify-center md:justify-start">
  <img
    src={offimg8}
    alt="IDS Offline Center"
    className="rounded-2xl w-full max-w-[420px] md:ml-10 object-cover shadow-md"
  />
</div>


        {/* Right Content */}
        <div className="space-y-6 text-left -ml-20">
          <Badge className="bg-[#2d2d2d] text-white px-4 py-1.5 rounded-full text-sm font-medium">
            Our Premium Offline Center
          </Badge>

          <h3 className="text-3xl font-bold text-black leading-snug">
            NXOne, Tech zone 4, Opposite Gaur City Mall, <br />
            Greater Noida, UP, 201306
          </h3>

          <p className="text-lg font-medium text-gray-700">
            Offline Center Facilities
          </p>

          {/* Facilities List */}
          <div className="flex flex-wrap gap-2">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-sm border border-gray-100"
              >
                <img
                  src={facility.icon}
                  alt={facility.name}
                  className="w-4 h-4 text-gray-600"
                />
                <span className="text-xs text-gray-700 font-medium">
                  {facility.name}
                </span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 animate-fade-in-up [animation-delay:0.3s]">
            {/* Book Your Demo */}
            <BookingDialog>
              <Button
                size="lg"
                className="bg-[#EA2525] hover:bg-[#d92020] text-white rounded-md px-8 py-5 text-lg font-semibold 
                 transition-all duration-300 hover:scale-105 hover:shadow-lg focus:ring-2 focus:ring-[#EA2525]/50"
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
               transition-all duration-300 hover:scale-105 hover:shadow-md focus:ring-2 focus:ring-[#EA2525]/50"
            >
              <Link to="/offline-center">View Details</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      {/* <div className="max-w-[1350px] mx-auto mt-16 px-6">
        <h3 className="text-2xl text-left font-bold text-center text-[#121212] mb-8">
          Glimpse of Our Offline Center
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {[
            "https://res.cloudinary.com/dqdpblijd/image/upload/v1728016155/offline1.png",
            "https://res.cloudinary.com/dqdpblijd/image/upload/v1728016156/offline2.png",
            "https://res.cloudinary.com/dqdpblijd/image/upload/v1728016157/offline3.png",
            "https://res.cloudinary.com/dqdpblijd/image/upload/v1728016158/offline4.png",
            "https://res.cloudinary.com/dqdpblijd/image/upload/v1728016159/offline5.png",
            "https://res.cloudinary.com/dqdpblijd/image/upload/v1728016160/offline6.png",
            "https://res.cloudinary.com/dqdpblijd/image/upload/v1728016161/offline7.png",
            "https://res.cloudinary.com/dqdpblijd/image/upload/v1728016162/offline8.png",
          ].map((img, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-xl shadow-md group"
            >
              <img
                src={img}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default OfflineSection;
