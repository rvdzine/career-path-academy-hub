"use client";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnrollmentDialog from "@/components/EnrollmentDialog";
import Link from "next/link";
// import BrochureDialog from "./BrochureDialog";
// import { FaDownload } from "react-icons/fa";

// SVG icons
const chimg1 = "/svg/clock.svg";
const chimg2 = "/svg/book.svg";
const chimg3 = "/svg/frame.svg";
const chimg4 = "/svg/clipboard.svg";
const chimg5 = "/svg/briefcase.svg";
const chimg6 = "/svg/verify.svg";
const chimg7 = "/svg/sparkle.svg";

// Course images
import FDM1 from "@/components/assets/FDM1.png";
import SDM2 from "@/components/assets/SDM2.png";
import MDM3 from "@/components/assets/MDM3.png";
import BODM4 from "@/components/assets/BODM4.png";
import DDM5 from "@/components/assets/DDM5.png";
import DIPDM6 from "@/components/assets/DIPDM6.png";

const Courses = () => {
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
        "SEO",
        "Digital Marketing",
        "AI in Marketing",
        "Social Media Marketing",
        "Content Strategy",
        "Analytical & Technical Skills",
        "Paid Advertising (PPC)",
        "Content & Creative Skills",
        "Growth & Strategy",
        "E-commerce & Specialised",
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
        "SEO",
        "Digital Marketing",
        "AI in Marketing",
        "Social Media Marketing",
        "Content Strategy",
        "Analytical & Technical Skills",
        "Paid Advertising (PPC)",
        "Content & Creative Skills",
        "Growth & Strategy",
        "E-commerce & Specialised",
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
        "SEO",
        "Digital Marketing",
        "AI in Marketing",
        "Social Media Marketing",
        "Content Strategy",
        "Analytical & Technical Skills",
        "Paid Advertising (PPC)",
        "Content & Creative Skills",
        "Growth & Strategy",
        "E-commerce & Specialised",
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
        "SEO",
        "Digital Marketing",
        "AI in Marketing",
        "Social Media Marketing",
        "Content Strategy",
        "Analytical & Technical Skills",
        "Paid Advertising (PPC)",
        "Content & Creative Skills",
        "Growth & Strategy",
        "E-commerce & Specialised",
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
        "SEO",
        "Digital Marketing",
        "AI in Marketing",
        "Social Media Marketing",
        "Content Strategy",
        "Analytical & Technical Skills",
        "Paid Advertising (PPC)",
        "Content & Creative Skills",
        "Growth & Strategy",
        "E-commerce & Specialised",
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
        "SEO",
        "Digital Marketing",
        "AI in Marketing",
        "Social Media Marketing",
        "Content Strategy",
        "Analytical & Technical Skills",
        "Paid Advertising (PPC)",
        "Content & Creative Skills",
        "Growth & Strategy",
        "E-commerce & Specialised",
      ],
      image: DDM5,
      badges: ["AI Driven", "Hinglish/English"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4 bg-[#EA2525] bg-clip-text text-transparent">
          Professional Courses
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Industry-designed curriculum with hands-on projects, real-world applications, and career placement support.
        </p>
      </section>

      {/* Courses */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => {
            const isAiDriven = course.badges.includes("AI Driven");

            return (
              <Card
                key={course.id}
                className="flex flex-col border rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden min-h-[540px]"
              >
                {/* Image with badges */}
                <div className="relative h-[180px] sm:h-[200px] md:h-[220px] overflow-hidden">
                  <img
                    src={typeof course.image === 'string' ? course.image : course.image.src}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Badges Overlay */}
                  <div className="absolute top-2 right-2 flex flex-wrap gap-2">
                    {course.badges.map((badge, idx) => {
                      let iconSrc = null;

                      if (badge === "AI Driven") iconSrc = chimg7;
                      else if (badge === "Hinglish") iconSrc = chimg3;
                      else if (badge === "Hinglish/English") iconSrc = chimg3;

                      return (
                        <Badge
                          key={idx}
                          className={`flex items-center gap-1 px-2 py-1 text-sm rounded-full ${badge === "AI Driven"
                              ? "bg-gradient-to-r from-[#0061FF] to-[#60EFFF] text-white"
                              : "bg-white text-gray-800 border border-gray-300"
                            }`}
                        >
                          {iconSrc && <img src={iconSrc} alt={badge} className="w-3 h-3" />}
                          {badge}
                        </Badge>
                      );
                    })}
                  </div>
                </div>

                <CardContent className="px-5 pb-5 flex flex-col flex-1">
                  {/* Students Enrolled */}
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
                  <h2 className="text-xl font-bold text-gray-800 mt-1">{course.title}</h2>

                  {/* Info Badges */}
                  <div className="flex flex-wrap gap-2 mt-3 mb-4">
                    <Badge className="flex items-center gap-1 px-3 py-1 text-xs bg-[#FFF2F2] text-[#000] border-0">
                      <img src={chimg1} alt="" className="w-4 h-4" /> {course.duration}
                    </Badge>
                    <Badge className="flex items-center gap-1 px-3 py-1 text-xs bg-[#FFF2F2] text-[#000] border-0">
                      <img src={chimg2} alt="" className="w-4 h-4" /> {course.mode}
                    </Badge>
                    <Badge className="flex items-center gap-1 px-3 py-1 text-xs bg-[#FFF2F2] text-[#000] border-0">
                      <img src={chimg6} alt="" className="w-4 h-4" /> {course.certification}
                    </Badge>
                    <Badge className="flex items-center gap-1 px-3 py-1 text-xs bg-[#FFF2F2] text-[#000] border-0">
                      <img src={chimg4} alt="" className="w-4 h-4" /> {course.projects}
                    </Badge>
                    {course.extra && (
                      <Badge className="flex items-center gap-1 px-3 py-1 text-xs bg-[#FFF2F2] text-[#000] border-0">
                        <img src={chimg5} alt="" className="w-4 h-4" /> {course.extra}
                      </Badge>
                    )}
                  </div>

                  {/* Skills */}
                  <div className="mt-2">
                    <p className="text-sm font-semibold text-gray-700">Skills you learn:</p>
                    <p className="text-sm text-gray-600">{course.skills.join(", ")}</p>
                  </div>

                  {/* Bottom Buttons */}
                  <div className="mt-auto pt-6 flex flex-col sm:flex-row gap-2">
                    {course.id === "customised-digital-marketing" || course.id === "degree-digital-marketing" ? (
                      <Button className="w-full border border-[#EA2525] bg-[#fff] text-[#EA2525] hover:bg-[#c21e1e] hover:text-[#fff]">
                        For Queries - Contact Us
                      </Button>
                    ) : (
                      <>
                        {/* <BrochureDialog courseTitle={course.title}> */}
                        <Link href={`/courses/${course.id}`} className="flex-1">
                          <Button
                            variant="outline"
                           className="w-full sm:flex-1 border border-red-500 text-[#EA2525] bg-[#fff] hover:bg-[#f7e4e4]">
                            Course Details
                          </Button>
                        </Link>
                        {/* </BrochureDialog> */}
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
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
