import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import EnrollmentDialog from "@/components/EnrollmentDialog";
import BrochureDialog from "@/components/pages/BrochureDialog";

import FDM1 from "@/components/assets/FDM1.png";
import SDM2 from "@/components/assets/SDM2.png";
import MDM3 from "@/components/assets/MDM3.png";
import BODM4 from "@/components/assets/BODM4.png";
import DDM5 from "@/components/assets/DDM5.png";
import DIPDM6 from "@/components/assets/DIPDM6.png";

// ✅ SVG icons from public folder (NO IMPORTS)
const chimg1 = "/svg/clock.svg";
const chimg2 = "/svg/book.svg";
const chimg3 = "/svg/frame.svg";
const chimg4 = "/svg/clipboard.svg";
const chimg5 = "/svg/briefcase.svg";
const chimg6 = "/svg/verify.svg";
const chimg7 = "/svg/sparkle.svg";

const CourseHighlightsIndex = () => {
  const courses = [
    {
      id: "master-in-digital-marketing-course",
      title: "Master in Digital Marketing Course at idigitalstudies",
      duration: "6 Months",
      students: "2500+ Students Enrolled",
      mode: "Online / Offline",
      certification: "Certification",
      projects: "10+ Live Projects",
      extra: "Internship",
      skills: [
        "SEO","Digital Marketing","AI in Marketing","Social Media Marketing","Content Strategy",
        "Analytical & Technical Skills","Paid Advertising (PPC)","Content & Creative Skills",
        "Growth & Strategy","E-commerce & Specialised",
      ],
      image: MDM3,
      badges: ["AI Driven", "Hinglish"],
    },
    {
      id: "specialist-in-digital-marketing",
      title: "Digital Marketing Specialist Course at iDigitalStudies",
      duration: "3 Months",
      students: "1500+ Students Enrolled",
      mode: "Online / Offline",
      certification: "Certification",
      projects: "5 Live Projects",
      skills: [
        "SEO","Digital Marketing","AI in Marketing","Social Media Marketing","Content Strategy",
        "Analytical & Technical Skills","Paid Advertising (PPC)","Content & Creative Skills",
        "Growth & Strategy","E-commerce & Specialised",
      ],
      image: SDM2,
      badges: ["Hinglish"],
    },
    {
      id: "digital-marketing-course-for-business-owners",
      title: "Best Digital Marketing Course for Business Owners",
      duration: "Customised Timeline",
      students: "200+ Students Enrolled",
      mode: "Online",
      certification: "Certification",
      projects: "10+ Live Projects",
      skills: [
        "SEO","Digital Marketing","AI in Marketing","Social Media Marketing","Content Strategy",
        "Analytical & Technical Skills","Paid Advertising (PPC)","Content & Creative Skills",
        "Growth & Strategy","E-commerce & Specialised",
      ],
      image: BODM4,
      badges: ["AI Driven", "Hinglish/English"],
    },
    {
      id: "foundation-in-digital-marketing",
      title: "Digital Marketing Course for Beginners",
      duration: "2 Months",
      students: "500+ Students Enrolled",
      mode: "Online / Offline",
      certification: "Certification",
      projects: "2 Live Projects",
      skills: [
        "SEO","Digital Marketing","AI in Marketing","Social Media Marketing","Content Strategy",
        "Analytical & Technical Skills","Paid Advertising (PPC)","Content & Creative Skills",
        "Growth & Strategy","E-commerce & Specialised",
      ],
      image: FDM1,
      badges: ["Hinglish"],
    },
    {
      id: "customised-digital-marketing",
      title: "Customised Course in Digital Marketing",
      duration: "Customised Timeline",
      students: "500+ Students Enrolled",
      mode: "Online / Offline",
      certification: "Certification",
      projects: "2+ Live Projects",
      skills: [
        "SEO","Digital Marketing","AI in Marketing","Social Media Marketing","Content Strategy",
        "Analytical & Technical Skills","Paid Advertising (PPC)","Content & Creative Skills",
        "Growth & Strategy","E-commerce & Specialised",
      ],
      image: DIPDM6,
      badges: ["AI Driven", "Hinglish/English"],
    },
    {
      id: "degree-digital-marketing",
      title: "Degree in Digital Marketing",
      duration: "3 Years",
      students: "250+ Students Enrolled",
      mode: "Offline",
      certification: "Degree + Certification",
      projects: "Live Projects",
      skills: [
        "SEO","Digital Marketing","AI in Marketing","Social Media Marketing","Content Strategy",
        "Analytical & Technical Skills","Paid Advertising (PPC)","Content & Creative Skills",
        "Growth & Strategy","E-commerce & Specialised",
      ],
      image: DDM5,
      badges: ["AI Driven", "Hinglish/English"],
    },
  ];

  return (
  <section className="py-16 md:py-20 bg-white">
    <div className="container mx-auto px-3 sm:px-4">

      {/* Heading */}
      <div className="text-center mb-10 md:mb-16 animate-fade-in-up">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-[#000000]">
          Explore our Digital Marketing Courses
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
          Industry-designed curriculum with hands-on projects and real-world applications
        </p>
      </div>

      {/* ✅ Improved Responsive Grid */}
      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

        {courses.map((course) => {
          const isAiDriven = course.badges.includes("AI Driven");

          return (
            <Card key={course.id} className="flex flex-col border rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden min-h-[520px]">

              {/* ✅ Responsive Image Height */}
              <div className="relative h-[180px] sm:h-[200px] md:h-[220px] overflow-hidden">
                <img
                  src={typeof course.image === "string" ? course.image : course.image.src}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />

                {/* Badge */}
                <div className="absolute top-2 right-2 flex flex-wrap gap-1 sm:gap-2">
                  {course.badges.map((badge, idx) => (
                    <Badge
                      key={idx}
                      className={`flex items-center gap-1 sm:gap-2 px-2 py-1 text-[10px] sm:text-xs md:text-sm rounded-full ${
                        badge === "AI Driven"
                          ? "bg-gradient-to-r from-[#0061FF] to-[#60EFFF] text-white"
                          : "bg-white text-gray-800 border border-gray-300"
                      }`}
                    >
                      {badge === "AI Driven" && <img src={chimg7} className="w-3 h-3" />}
                      {(badge === "Hinglish" || badge === "Hinglish/English") && <img src={chimg3} className="w-3 h-3" />}
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>

              <CardContent className="px-4 sm:px-5 pb-5 flex-1 flex flex-col justify-between">

                {/* Students */}
                <div className="flex items-center gap-2 mt-3 mb-3">
                  <div className="flex -space-x-3">
                    <img src="https://i.pravatar.cc/40?img=1" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white" />
                    <img src="https://i.pravatar.cc/40?img=2" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white" />
                    <img src="https://i.pravatar.cc/40?img=3" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white" />
                  </div>
                  <p className="text-[10px] sm:text-xs text-gray-500">
                    <span className="text-sm sm:text-base font-bold text-gray-900">
                      {course.students.split(" ")[0]}
                    </span>{" "}
                    {isAiDriven
                      ? "Students Enrolled in this AI Driven Course"
                      : course.students.replace(course.students.split(" ")[0], "")
                    }
                  </p>
                </div>

                {/* Title */}
                <h2 className="text-lg sm:text-xl font-bold text-gray-800 mt-1">
                  {course.title}
                </h2>

                {/* Info Badges */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mt-3 mb-4">
                  {[ 
                    { icon: chimg1, text: course.duration },
                    { icon: chimg2, text: course.mode },
                    { icon: chimg6, text: course.certification },
                    { icon: chimg4, text: course.projects },
                  ]
                  .concat(course.extra ? [{ icon: chimg5, text: course.extra }] : [])
                  .map((item, index) => (
                    <Badge key={index} className="flex items-center gap-1 px-2 sm:px-3 py-1 text-[10px] sm:text-xs bg-[#FFF2F2] text-[#000] border-0">
                      <img src={item.icon} className="w-3 h-3 sm:w-4 sm:h-4" /> {item.text}
                    </Badge>
                  ))}
                </div>

                {/* Skills */}
                <div className="mt-4">
                  <p className="text-sm font-semibold text-gray-700">Skills you learn:</p>
                  <p className="text-[12px] sm:text-sm text-gray-600">{course.skills.join(", ")}</p>
                </div>

                {/* Buttons */}
                <div className="mt-6 flex flex-col sm:flex-row gap-2">
                  {course.id === "customised-digital-marketing" || course.id === "degree-digital-marketing" ? (
                    <Button className="w-full border border-[#EA2525] bg-[#fff] text-[#EA2525] hover:bg-[#c21e1e] hover:text-[#fff]">
                      For Queries - Contact Us
                    </Button>
                  ) : (
                    <>
                      <Link href={`/courses/${course.id}`}>
                       <Button className="w-full sm:flex-1 border border-red-500 text-[#EA2525] bg-[#fff] hover:bg-[#f7e4e4]">
                          Course Details
                        </Button>
                      </Link>
                      <EnrollmentDialog courseTitle={course.title}>
                        <Button className="flex-1 bg-[#EA2525] hover:bg-[#c21e1e] text-white">
                          Enroll Now
                        </Button>
                      </EnrollmentDialog>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  </section>
);
};
export default CourseHighlightsIndex;