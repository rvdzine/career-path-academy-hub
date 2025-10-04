// src/components/coursedetailslanding.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CourseDetailsLanding() {
  return (
    <>
      <Navbar />
      <section className="bg-[#fdf7f7] py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="inline-block bg-blue-900 text-white text-sm font-medium px-4 py-1 rounded-full">
              #Internship Guarantee Program
            </span>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Master in Digital Marketing - <br /> With Guaranteed Internship
            </h1>

            <p className="text-gray-600 text-lg max-w-xl">
              Learn how to apply User Experience (UX) principles to your website
              designs, code a variety of sites, and increase sales!
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="outline"
                className="border border-red-600 text-red-600 hover:bg-red-50"
              >
                Download Brochure
              </Button>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Enroll Now
              </Button>
            </div>
          </div>

          {/* Right Content - Demo Video */}
          <div className="relative">
            {/* Top-left Dots */}
            {/* <div className="absolute -top-10 -left-6 grid grid-cols-15 gap-3 opacity-70">
              {[...Array(45)].map((_, i) => (
                <span
                  key={i}
                  className="w-1.5 h-1.5 bg-blue-900 rounded-full"
                />
              ))}
            </div> */}

            {/* Bottom-right Dots */}
            {/* <div className="absolute -bottom-10 -right-6 grid grid-cols-15 gap-3 opacity-70">
              {[...Array(45)].map((_, i) => (
                <span
                  key={i}
                  className="w-1.5 h-1.5 bg-blue-900 rounded-full"
                />
              ))}
            </div> */}

            {/* Video thumbnail */}
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src="#"
                alt="Demo Video"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <button className="bg-white rounded-full p-4 shadow-md text-xl">
                  ▶
                </button>
                <span className="ml-3 text-white font-semibold text-lg">
                  Watch Demo
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
       
<section className="w-full bg-gray-100 py-12 mt-16">
  <div className=" px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
    <div>
      <h3 className="text-3xl font-bold text-gray-900">8</h3>
      <p className="text-gray-600">Modules</p>
    </div>
    <div>
      <h3 className="text-3xl font-bold text-gray-900">12</h3>
      <p className="text-gray-600">
        Course Duration in <span className="font-semibold">Weeks</span>
      </p>
    </div>
    <div>
      <h3 className="text-3xl font-bold text-gray-900">10+</h3>
      <p className="text-gray-600">Live projects</p>
    </div>
    <div>
      <h3 className="text-3xl font-bold text-gray-900">4,312+</h3>
      <p className="text-gray-600">Students Enrolled</p>
    </div>
  </div>
</section>


      </section>
      <Footer />
    </>
  );
}
