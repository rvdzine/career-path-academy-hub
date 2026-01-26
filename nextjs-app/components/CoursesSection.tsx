"use client";

import Image from "next/image";
import { useState } from "react";
import React from "react";
import Link from "next/link";
import Lottie from "lottie-react";

import courseAnimation1 from "@/public/assets/Animations/1.1.json";
import courseAnimation2 from "@/public/assets/Animations/2.json";
import courseAnimation3 from "@/public/assets/Animations/3.json";
import courseAnimation4 from "@/public/assets/Animations/4.json";

import EnrollmentDialog from "@/components/EnrollmentDialog";
import DemoBookingDialog from "@/components/DemoBookingDialog";

// Badge Icons
const chimg1 = "/svg/clock.svg";
const chimg2 = "/svg/book.svg";
const chimg3 = "/svg/chimg3.svg";
const chimg4 = "/svg/clipboard.svg";
const chimg5 = "/svg/briefcase.svg";
const chimg6 = "/svg/verify.svg";
const chimg7 = "/svg/sparkle.svg";

const tabs = [
  "Master Course",
  "Specialist Course",
  "Business Owner",
  "Custom Course",
] as const;

type TabType = (typeof tabs)[number];

const courseData: Record<TabType, any> = {
  "Master Course": {
    tag: "AI Driven",
    id: "master-in-digital-marketing-course",
    title: "Master in Digital Marketing Course at Insitute of Digital Studies",
    animation: courseAnimation1,
    duration: "6 Months",
    mode: "Off/Online",
    badge: "Hinglish",
    salary: "₹8.5 LPA",
    internship: "3 Months",
    content:
      "Our 6-Month Digital Marketing Course in Noida with 100% Internship provides hands-on experience in SEO, SEM, social media, content marketing, and more, along with a guaranteed internship to kickstart your career.",
    certification: "Certification",
    projects: "10+ Live Projects",
  },

  "Specialist Course": {
    tag: "AI Driven",
    id: "specialist-in-digital-marketing",
    title: "Digital Marketing Specialist Course at Insitute of Digital Studies",
    animation: courseAnimation2,
    duration: "3 Months",
    mode: "Off/Online",
    badge: "Hinglish",
    salary: "₹6.2 LPA",
    content:
      "Our Digital Marketing Specialist Course (3 months) offers in-depth training on SEO, SEM, social media marketing, content strategy, PPC, email campaigns, and analytics, preparing you to become an industry expert with Live Project Training.",
    certification: "Certification",
    projects: "5+ Live Projects",
  },

  "Custom Course": {
    tag: "AI Driven",
    id: "customised-digital-marketing",
    title: "Customised Course in Digital Marketing",
    animation: courseAnimation4,
    duration: "Customised Timeline",
    mode: "Off/Online",
    badge: "Hinglish/English",
    salary: "Depends on Skills",
    content:
      "Our Customized - Digital Marketing Course According to Your Needs offers personalized coaching tailored to you according to your needs SEO, social media, PPC, content strategies, and more to drive growth and success.",
    certification: "Certification",
    projects: "Custom Projects",
  },

  "Business Owner": {
    tag: "AI Driven",
    id: "digital-marketing-course-for-business-owners",
    title: "Best Digital Marketing Course for Business Owners",
    animation: courseAnimation3,
    duration: "Customised Timeline",
    mode: "Online (1:1)",
    badge: "Hinglish/English",
    content:
      "Our 1:1 Digital Marketing Course for Business Owners offers personalized coaching tailored to your business needs, covering SEO, social media, PPC, content strategies, and more to drive growth and success.",
    certification: "Certification",
    projects: "10+ Live Projects",
  },
};

// Badge component
const Badge: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <div
    className={`inline-flex items-center gap-1 px-2 py-1 text-[10px] sm:text-xs bg-[#FFF2F2] text-black rounded ${className}`}
  >
    {children}
  </div>
);

const CoursesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("Master Course");
  const data = courseData[activeTab];

  return (
    <section className="w-full max-w-[1250px] mx-auto py-10 sm:py-16 relative">
      <div className="relative z-10 px-4">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-2">
          Explore our Digital Marketing Courses
        </h2>

        <p className="text-center text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
          Industry-designed curriculum with hands-on projects and real-world
          applications
        </p>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-2 sm:gap-4 mb-8 sm:mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 sm:px-6 py-2 text-sm sm:text-base rounded-md border transition-all font-medium ${
                activeTab === tab
                  ? "bg-[#EA2525] text-white border-[#EA2525]"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Course Card */}
        <div className="bg-white border-[0.5px] border-gray-300 rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden p-4 sm:p-6 md:p-8">
          {/* Animation */}
          <div className="w-full md:w-[45%] h-[220px] sm:h-[260px] md:h-auto flex items-center justify-center rounded-xl bg-[#FFF5F5]">
            <Lottie
              animationData={data.animation}
              loop
              autoplay
              className="w-full h-full max-h-[460px]"
            />
          </div>

          {/* Content */}
          <div className="md:w-[55%] md:pl-8 mt-4 sm:mt-6 md:mt-0 flex flex-col justify-between">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm w-fit mb-3">
              {data.tag}
            </span>

            <h3 className="text-xl sm:text-2xl font-bold mb-3">
              {data.title}
            </h3>

            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
              <Badge>
                <img src={chimg6} className="w-4 h-4" /> {data.certification}
              </Badge>
              <Badge>
                <img src={chimg4} className="w-4 h-4" /> {data.projects}
              </Badge>
              <Badge>
                <img src={chimg3} className="w-5 h-5" /> {data.badge}
              </Badge>
            </div>

            <p className="text-xs sm:text-sm text-gray-600">{data.content}</p>

            {/* Info Grid */}
            <div
              className={`grid gap-3 sm:gap-4 my-4 ${
                activeTab === "Master Course"
                  ? "grid-cols-2 sm:grid-cols-4"
                  : activeTab === "Business Owner"
                  ? "grid-cols-2"
                  : "grid-cols-2 sm:grid-cols-3"
              }`}
            >
              <div className="border rounded-lg p-3 text-center">
                <p className="text-xs sm:text-sm text-gray-500">Duration</p>
                <p className="font-bold text-sm sm:text-base">
                  {data.duration}
                </p>
              </div>

              <div className="border rounded-lg p-3 text-center">
                <p className="text-xs sm:text-sm text-gray-500">Mode</p>
                <p className="font-bold text-sm sm:text-base">{data.mode}</p>
              </div>

              {data.salary && (
  <div className="border rounded-lg p-3 text-center">
    <p className="text-xs sm:text-sm text-gray-500 flex items-center justify-center gap-1">
      Avg Salary
      <span className="text-red-500 font-bold">*</span>
    </p>

    <p className="font-bold text-sm sm:text-base">
      {data.salary}
    </p>

    {/* Show note ONLY if salary is numeric */}
    {!data.salary.toLowerCase().includes("depend") && (
      <p className="text-[10px] sm:text-xs text-gray-400 mt-1">
        Depends on skills
      </p>
    )}
  </div>
)}


              {data.internship && (
                <div className="border rounded-lg p-3 text-center">
                  <p className="text-xs sm:text-sm text-gray-500">
                    Internship
                  </p>
                  <p className="font-bold text-sm sm:text-base">
                    {data.internship}
                  </p>
                </div>
              )}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4">
              <DemoBookingDialog courseTitle={data.title}>
                <button className="flex-1 border border-[#EA2525] text-[#EA2525] px-6 py-2 rounded-md font-medium hover:bg-[#EA2525]/10 transition">
                  Book Free Demo Class
                </button>
              </DemoBookingDialog>

              <EnrollmentDialog courseTitle={data.title}>
                <button className="flex-1 bg-[#EA2525] hover:bg-[#c21e1e] text-white px-6 py-2 rounded-md font-medium transition">
                  Enroll Now
                </button>
              </EnrollmentDialog>
            </div>

            {(activeTab === "Master Course" ||
              activeTab === "Specialist Course") && (
              <p className="text-xs text-gray-500 mt-2 sm:mt-3 text-center sm:text-left">
                <b>150+</b> Students enrolled last week
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
