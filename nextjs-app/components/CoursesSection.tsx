"use client";

import Image from "next/image";
import { useState } from "react";
import React from "react";
import Link from "next/link";
import EnrollmentDialog from "@/components/EnrollmentDialog";

// Course Images
import FDM1 from "@/components/assets/FDM1.png";
import SDM2 from "@/components/assets/SDM2.png";
import MDM3 from "@/components/assets/MDM3.png";
import BODM4 from "@/components/assets/BODM4.png";
import DDM5 from "@/components/assets/DDM5.png";
import DIPDM6 from "@/components/assets/DIPDM6.png";

// const patternimg="/assets/bg-pattern.png";

// Badge Icons (replace with your actual images or import)
const chimg1 = "/svg/clock.svg";
const chimg2 = "/svg/book.svg";
const chimg3 = "/svg/chimg3.svg";
const chimg4 = "/svg/clipboard.svg";
const chimg5 = "/svg/briefcase.svg";
const chimg6 = "/svg/verify.svg";
const chimg7 = "/svg/sparkle.svg";

const tabs = ["Master Course", "Specialist Course", "Custom Course", "Business Owner"] as const;
type TabType = (typeof tabs)[number];

const courseData: Record<TabType, any> = {
  "Master Course": {
    tag: "AI Powered",
    id: "master-in-digital-marketing-course",
    title: "Master in Digital Marketing Course at Insitute of Digital Studies",
    image: MDM3,
    duration: "6 Months",
    mode: "Online / Offline",
    badge:  "Hinglish",
    salary: "₹8.5 LPA",
    skills: [
        "SEO","Digital Marketing","AI in Marketing","Social Media Marketing","Content Strategy",
        "Analytical & Technical Skills","Paid Advertising (PPC)","Content & Creative Skills",
        "Growth & Strategy","E-commerce & Specialised",
    ],
    certification: "Certification",
    projects: "10+ Live Projects",
  },
  "Specialist Course": {
    tag: "Advanced",
    id: "specialist-in-digital-marketing",
    title: "Digital Marketing Specialist Course at Insitute of Digital Studies",
    image: SDM2,
    duration: "3 Months",
    mode: "Online / Offline",
    badge:  "Hinglish",
    salary: "₹6.2 LPA",
    skills: [
        "SEO","Digital Marketing","AI in Marketing","Social Media Marketing","Content Strategy",
        "Analytical & Technical Skills","Paid Advertising (PPC)","Content & Creative Skills",
        "Growth & Strategy","E-commerce & Specialised",
    ],
    certification: "Certification",
    projects: "5+ Live Projects",
  },
  "Custom Course": {
    tag: "Personalized",
    id: "customised-digital-marketing",
    title: "Customised Course in Digital Marketing",
    image: DIPDM6,
    duration: "Customised Timeline",
    mode: "Online / Offline",
    badge:  "Hinglish/English",
    salary: "Depends on Skills",
    skills: [
        "SEO","Digital Marketing","AI in Marketing","Social Media Marketing","Content Strategy",
        "Analytical & Technical Skills","Paid Advertising (PPC)","Content & Creative Skills",
        "Growth & Strategy","E-commerce & Specialised",
    ],
    certification: "Certification",
    projects: "Custom Projects",
  },
  "Business Owner": {
    tag: "AI Driven",
    id: "digital-marketing-course-for-business-owners",
    title: "Best Digital Marketing Course for Business Owners",
    image: BODM4,
    duration: "Customised Timeline",
    mode: "Online / Offline",
    badge:  "Hinglish/English",
    salary: "₹7.5 LPA",
    skills: [
        "SEO","Digital Marketing","AI in Marketing","Social Media Marketing","Content Strategy",
        "Analytical & Technical Skills","Paid Advertising (PPC)","Content & Creative Skills",
        "Growth & Strategy","E-commerce & Specialised",
    ],
    certification: "Certification",
    projects: "10+ Live Projects",
  },
};

// Simple Badge component
const Badge: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={`inline-flex items-center gap-1 px-2 py-1 text-[10px] sm:text-xs bg-[#FFF2F2] text-[#000] rounded ${className}`}>
    {children}
  </div>
);

const CoursesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("Master Course");
  const data = courseData[activeTab];

  return (
    <section className="w-full max-w-[1250px] mx-auto py-16 relative">

      {/* Background Pattern */}
      {/* <div className="absolute inset-0 opacity-80 pointer-events-none">
        <Image src={patternimg} alt="pattern" fill className="object-cover object-cover w-full h-full" />
      </div> */}

      <div className="relative z-10 px-4">

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-2">
          Explore our Digital Marketing Courses
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Industry-designed curriculum with hands-on projects and real-world applications
        </p>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-md border transition-all font-medium ${
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
        <div className="bg-white border-[0.5px] border-gray-300 rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden p-6 md:p-8">

          {/* Left Image */}
          <div className="w-full md:w-[45%] h-60 md:h-auto relative rounded-xl overflow-hidden">
            <Image src={data.image} alt={data.title} fill className="object-cover" />
          </div>

          {/* Right Content */}
          <div className="md:w-[55%] md:pl-8 mt-6 md:mt-0 flex flex-col justify-between">

            {/* Tag */}
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm w-fit mb-3">
              {data.tag}
            </span>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-3">{data.title}</h3>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {/* <Badge><img src={chimg1} className="w-4 h-4 rounded-full" /> {data.duration}</Badge> */}
              {/* <Badge><img src={chimg2} className="w-4 h-4 rounded-full"  /> {data.mode}</Badge> */}
              <Badge><img src={chimg6} className="w-4 h-4 rounded-full" /> {data.certification}</Badge>
              <Badge><img src={chimg4} className="w-4 h-4 rounded-full" /> {data.projects}</Badge>
              <Badge><img src={chimg3} className="w-5 h-5 rounded-full" /> {data.badge}</Badge>
            </div>

             {/* Skills */}
                <div className="mt-4">
                  <p className="text-sm font-semibold text-gray-700">Skills you learn:</p>
                  <p className="text-[12px] sm:text-sm text-gray-600">{data.skills.join(", ")}</p>
                </div>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-4">{data.description}</p>

            {/* Info Boxes */}
            <div className="grid grid-cols-3 gap-4 my-4">
              <div className="border rounded-lg p-3 text-center">
                <p className="text-sm text-gray-500">Duration</p>
                <p className="font-bold">{data.duration}</p>
              </div>

              <div className="border rounded-lg p-3 text-center">
                <p className="text-sm text-gray-500">Mode</p>
                <p className="font-bold">{data.mode}</p>
              </div>

              <div className="border rounded-lg p-3 text-center">
                <p className="text-sm text-gray-500">Avg Salary</p>
                <p className="font-bold">{data.salary}</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
                <Link href={`/courses/${data.id}`}>
                  <button className="flex-1 border border-[#EA2525] text-[#EA2525] px-6 py-2 rounded-md font-medium">
                    Course Details
                  </button>
                </Link>
             <EnrollmentDialog courseTitle={data.title}>
               <button className="flex-1 bg-[#EA2525] hover:bg-[#c21e1e] text-white px-6 py-2 rounded-md font-medium">
                Enroll Now
               </button>
             </EnrollmentDialog>
            </div>


            <p className="text-xs text-gray-500 mt-3">
              <b>150+</b> Students enrolled last week
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CoursesSection;
