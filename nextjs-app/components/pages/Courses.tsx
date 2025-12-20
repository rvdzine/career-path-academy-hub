"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Lottie from "lottie-react";

import Navbar from "@/components/Navbar";
import EnrollmentDialog from "@/components/EnrollmentDialog";
import ContactDialog from "@/components/ContactDialog";

import courseAnimation1 from "@/public/assets/Animations/1.1.json";
import courseAnimation2 from "@/public/assets/Animations/2.json";
import courseAnimation3 from "@/public/assets/Animations/3.json";
import courseAnimation4 from "@/public/assets/Animations/4.json";

// Badge Icons
const chimg3 = "/svg/chimg3.svg";
const chimg4 = "/svg/clipboard.svg";
const chimg6 = "/svg/verify.svg";

type CourseKey =
  | "Master Course"
  | "Specialist Course"
  | "Business Owner"
  | "Custom Course";

const courseData: Record<CourseKey, any> = {
  "Master Course": {
    tag: "AI Driven",
    title: "Master in Digital Marketing Course at Institute of Digital Studies",
    animation: courseAnimation1,
    duration: "6 Months",
    mode: "Off/Online",
    badge: "Hinglish",
    salary: "₹8.5 LPA",
    internship: "3 Months",
    certification: "Certification",
    projects: "10+ Live Projects",
    content:
      "Our 6-Month Digital Marketing Course with 100% Internship provides hands-on experience in SEO, SEM, social media, content marketing, and more.",
  },

  "Specialist Course": {
    tag: "AI Driven",
    title: "Digital Marketing Specialist Course at Institute of Digital Studies",
    animation: courseAnimation2,
    duration: "3 Months",
    mode: "Off/Online",
    badge: "Hinglish",
    salary: "₹6.2 LPA",
    certification: "Certification",
    projects: "5+ Live Projects",
    content:
      "In-depth Digital Marketing training covering SEO, PPC, social media, email marketing, and analytics with live projects.",
  },

  "Business Owner": {
    tag: "AI Driven",
    title: "Best Digital Marketing Course for Business Owners",
    animation: courseAnimation3,
    duration: "Customised Timeline",
    mode: "Online (1:1)",
    badge: "Hinglish/English",
    certification: "Certification",
    projects: "10+ Live Projects",
    content:
      "1:1 personalised digital marketing coaching tailored to your business goals and growth strategy.",
  },

  "Custom Course": {
    tag: "AI Driven",
    title: "Customised Course in Digital Marketing",
    animation: courseAnimation4,
    duration: "Customised Timeline",
    mode: "Off/Online",
    badge: "Hinglish/English",
    salary: "Depends on Skills",
    certification: "Certification",
    projects: "Custom Projects",
    content:
      "A completely customized digital marketing program designed according to your goals, skills, and learning pace.",
  },
};

// Badge Component
const Badge = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-[#FFF2F2] rounded">
    {children}
  </div>
);

export default function Courses() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Explore our Digital Marketing Courses
        </h2>
        <p className="text-gray-600">
          Industry-designed curriculum with hands-on projects and real-world
          applications
        </p>
      </section>

      {/* Course Cards */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 gap-10">
          {(Object.keys(courseData) as CourseKey[]).map((key) => {
            const data = courseData[key];

            return (
              <div
                key={key}
                className="bg-white border border-gray-300 rounded-2xl shadow-lg flex flex-col md:flex-row p-6 md:p-8"
              >
                {/* Animation */}
                <div className="w-full md:w-[45%] h-[360px] flex items-center justify-center bg-[#FFF5F5] rounded-xl">
                  <Lottie
                    animationData={data.animation}
                    loop
                    autoplay
                    className="w-full h-full max-h-[420px]"
                  />
                </div>

                {/* Content */}
                <div className="md:w-[55%] md:pl-8 mt-6 md:mt-0 flex flex-col justify-between">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm w-fit mb-3">
                    {data.tag}
                  </span>

                  <h3 className="text-2xl font-bold mb-3">
                    {data.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge>
                      <img src={chimg6} className="w-4 h-4" />
                      {data.certification}
                    </Badge>
                    <Badge>
                      <img src={chimg4} className="w-4 h-4" />
                      {data.projects}
                    </Badge>
                    <Badge>
                      <img src={chimg3} className="w-4 h-4" />
                      {data.badge}
                    </Badge>
                  </div>

                  <p className="text-sm text-gray-600 mb-4">
                    {data.content}
                  </p>

                  {/* Info */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <Info label="Duration" value={data.duration} />
                    {data.mode && <Info label="Mode" value={data.mode} />}
                    {data.salary && (
                      <Info label="Avg Salary" value={data.salary} />
                    )}
                    {data.internship && (
                      <Info label="Internship" value={data.internship} />
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <ContactDialog>
                      <button className="flex-1 border border-[#EA2525] text-[#EA2525] px-6 py-2 rounded-md font-medium hover:bg-[#EA2525]/10">
                        Speak to a Counsellor
                      </button>
                    </ContactDialog>

                    <EnrollmentDialog courseTitle={data.title}>
                      <button className="flex-1 bg-[#EA2525] text-white px-6 py-2 rounded-md font-medium hover:bg-[#c21e1e]">
                        Enroll Now
                      </button>
                    </EnrollmentDialog>
                  </div>

                  {(key === "Master Course" ||
                    key === "Specialist Course") && (
                    <p className="text-xs text-gray-500 mt-3">
                      <b>150+</b> Students enrolled last week
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

// Info Box
const Info = ({ label, value }: any) => (
  <div className="border rounded-lg p-3 text-center">
    <p className="text-xs text-gray-500">{label}</p>
    <p className="font-bold">{value}</p>
  </div>
);
