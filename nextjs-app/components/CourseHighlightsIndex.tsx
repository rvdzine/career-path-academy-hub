import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import EnrollmentDialog from "@/components/EnrollmentDialog";
import BrochureDialog from "@/components/pages/BrochureDialog";
// import { FaDownload } from "react-icons/fa";

import FDM1 from "@/components/assets/FDM1.png";
import SDM2 from "@/components/assets/SDM2.png";
import MDM3 from "@/components/assets/MDM3.png";
import BODM4 from "@/components/assets/BODM4.png";
import DDM5 from "@/components/assets/DDM5.png";
import DIPDM6 from "@/components/assets/DIPDM6.png";

// SVG icons
import chimg1 from "@/components/svg/clock.svg";
import chimg2 from "@/components/svg/book.svg";
import chimg3 from "@/components/svg/frame.svg";
import chimg4 from "@/components/svg/clipboard.svg";
import chimg5 from "@/components/svg/briefcase.svg";
import chimg6 from "@/components/svg/verify.svg";
import chimg7 from "@/components/svg/sparkle.svg";

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
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 text-[#000000]">
              Explore our Digital Marketing Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-designed curriculum with hands-on projects and real-world applications
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => {
              const isAiDriven = course.badges.includes("AI Driven");
              return (
                <Card
                  key={course.id}
                  className="flex flex-col border rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden min-h-[540px]"
                >
                  {/* Image Section */}
                  <div className="relative h-[220px] overflow-hidden">
                    <img
                      src={typeof course.image === 'string' ? course.image : course.image.src}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Badges */}
                    <div className="absolute top-2 right-2 flex flex-wrap gap-2">
                      {course.badges.map((badge, idx) => (
                        <Badge
                          key={idx}
                          className={`flex items-center gap-2 px-2 py-1 text-sm rounded-full ${badge === "AI Driven"
                            ? "bg-gradient-to-r from-[#0061FF] to-[#60EFFF] text-white"
                            : "bg-white text-gray-800 border border-gray-300"
                            }`}
                        >
                          {badge === "AI Driven" && (
                            <img src={chimg7} alt="" className="w-3 h-3" />
                          )}
                          {(badge === "Hinglish" || badge === "Hinglish/English") && (
                            <img src={chimg3} alt="" className="w-3 h-3" />
                          )}
                          {badge}


                        </Badge>
                      ))}
                    </div>
                  </div>

                  <CardContent className="px-5 pb-5 flex-1 flex flex-col justify-between">
                    <div className="flex-1">
                      {/* Students Enrolled */}
                      <div className="flex items-center gap-2 mt-3 mb-3">
                        <div className="flex -space-x-3">
                          <img
                            src="https://i.pravatar.cc/40?img=1"
                            className="w-8 h-8 rounded-full border-2 border-white"
                          />
                          <img
                            src="https://i.pravatar.cc/40?img=2"
                            className="w-8 h-8 rounded-full border-2 border-white"
                          />
                          <img
                            src="https://i.pravatar.cc/40?img=3"
                            className="w-8 h-8 rounded-full border-2 border-white"
                          />
                        </div>
                        <p className="text-xs text-gray-500">
                          <span className="text-base font-bold text-gray-900">
                            {course.students.split(" ")[0]}
                          </span>{" "}
                          {isAiDriven
                            ? "Students Enrolled in this AI Driven Course"
                            : course.students.replace(course.students.split(" ")[0], "")}
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
                      <div className="mt-4">
                        <p className="text-sm font-semibold text-gray-700">Skills you learn:</p>
                        <p className="text-sm text-gray-600">{course.skills.join(", ")}</p>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-6 flex flex-col sm:flex-row gap-2">
                      {course.id === "customised-digital-marketing" || course.id === "degree-digital-marketing" ? (
                        <Button className="w-full border border-[#EA2525] bg-[#fff] text-[#EA2525] hover:bg-[#c21e1e] hover:text-[#fff]">
                          For Queries - Contact Us
                        </Button>
                      ) : (
                        <>
                          {/* <BrochureDialog courseTitle={course.title}> */}
                            {/* <FaDownload className="text-sm" /> */}
                            <Link href={`/courses/${course.id}`}>
                              <Button
                                variant="outline"
                                className="flex-1 border border-red-500 text-[#EA2525] hover:bg-[#f7e4e4] flex items-center justify-center gap-2"
                              >
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
        </div>
      </section>
    </>
  );
};

export default CourseHighlightsIndex;
