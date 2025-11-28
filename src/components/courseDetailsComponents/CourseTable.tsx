
"use client";
// import {useRouter} from 'next/navigation'

import { Crown, Trophy, Target, Zap } from "lucide-react";

export default function CourseTable() {
  // const router = useRouter();

  const courses = [
    { 
      title: "Master in Digital Marketing Course", 
      link: "https://idigitalstudies.com/courses/master-in-digital-marketing-course",
      badge: { icon: Crown, text: "MOST POPULAR", color: { border: "border-yellow-500", iconText: "text-yellow-600", bg: "bg-yellow-500/10" } } 
    },
    { 
      title: "Specialist in Digital Marketing Course", 
      link: "https://idigitalstudies.com/courses/specialist-in-digital-marketing",
      badge: { icon: Trophy, text: "BEST FOR CAREER", color: { border: "border-purple-500", iconText: "text-purple-600", bg: "bg-purple-500/10" } } 
    },
    { 
      title: "Digital Marketing Course for Business Owners", 
      link: "https://idigitalstudies.com/courses/digital-marketing-course-for-business-owners",
      badge: { icon: Target, text: "FOR ENTREPRENEURS", color: { border: "border-green-500", iconText: "text-green-600", bg: "bg-green-500/10" } } 
    },
    { 
      title: "Foundation in Digital Marketing", 
      link: "https://idigitalstudies.com/courses/foundation-in-digital-marketing",
      badge: { icon: Zap, text: "BEGINNER FRIENDLY", color: { border: "border-blue-500", iconText: "text-blue-600", bg: "bg-blue-500/10" } } 
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-16">
          Courses in Digital Marketing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {courses.map((course) => {
            const Icon = course.badge.icon;

            return (
              <div
                key={course.title}
                onClick={() => window.open(course.link, "_blank")} // YEH CHANGE KIYA – ab new tab mein khulega
                className={`group flex items-center bg-gray-50 p-6 rounded-xl shadow-md border-l-4 ${course.badge.color.border} hover:bg-gray-100 transition-all duration-300 cursor-pointer hover:shadow-lg`}
              >
                {/* Icon */}
                <div className={`p-3 rounded-full ${course.badge.color.bg} ${course.badge.color.iconText} mr-6 flex-shrink-0`}>
                  <Icon className="w-8 h-8" />
                </div>

                {/* Course Details */}
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </h3>
                  <div className={`mt-1 text-xs font-semibold uppercase tracking-wider ${course.badge.color.iconText}`}>
                    {course.badge.text}
                  </div>
                </div>

                {/* Arrow */}
                <div className="text-gray-400 group-hover:text-blue-600 ml-4">
                  <svg className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}