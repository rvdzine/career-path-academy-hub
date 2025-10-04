import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import EnrollmentDialog from "@/components/EnrollmentDialog";
import BrochureDialog from "../pages/BrochureDialog";
import { FaDownload } from "react-icons/fa";
import {
  Calendar,
  Globe,
  Lightbulb,
  Cpu,
  Languages,
  GraduationCap,
  CheckCircle,
} from "lucide-react";

import FDM1 from "../components/assets/FDM1.png";
import SDM2 from "../components/assets/SDM2.png";
import MDM3 from "../components/assets/MDM3.png";
import BODM4 from "../components/assets/BODM4.png";
import DDM5 from "../components/assets/DDM5.png";
import DIPDM6 from "../components/assets/DIPDM6.png";

const CourseHighlights = () => {
  const courses = [
    {
      id: "mdm",
      title: "Master in Digital Marketing (With Guaranteed Internship)",
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
        " Analytical & Technical Skills",
         "Paid Advertising (PPC)", 
         "Content & Creative Skills",
         "Growth & Strategy",
         "E-commerce & Specialised",
      ],
      image: MDM3,
      badges: ["AI Driven", "Hinglish"],
    },
    {
      id: "sdm",
      title: "Specialist in Digital Marketing",
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
        " Analytical & Technical Skills",
         "Paid Advertising (PPC)", 
         "Content & Creative Skills",
         "Growth & Strategy",
         "E-commerce & Specialised",
      ],
      image: SDM2,
      badges: ["Hinglish"],
    },
    {
      id: "bodm",
      title: "Professional & Business Owner Course (1:1 Learning)",
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
        " Analytical & Technical Skills",
         "Paid Advertising (PPC)", 
         "Content & Creative Skills",
         "Growth & Strategy",
         "E-commerce & Specialised",
      ],
      image: BODM4,
      badges: ["AI Driven", "Hinglish/English"],
    },
    {
      id: "fdm",
      title: "Foundation in Digital Marketing",
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
        " Analytical & Technical Skills",
         "Paid Advertising (PPC)", 
         "Content & Creative Skills",
         "Growth & Strategy",
         "E-commerce & Specialised",
      ],
      image: FDM1,
      badges: ["Hinglish"],
    },
    {
      id: "dipdm",
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
        " Analytical & Technical Skills",
         "Paid Advertising (PPC)", 
         "Content & Creative Skills",
         "Growth & Strategy",
         "E-commerce & Specialised",
      ],
      image: DIPDM6,
      badges: ["AI Driven", "Hinglish/English"],
    },
    {
      id: "ddm",
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
        " Analytical & Technical Skills",
         "Paid Advertising (PPC)", 
         "Content & Creative Skills",
         "Growth & Strategy",
         "E-commerce & Specialised",
      ],
      image: DDM5,
      badges: ["AI Driven", "Hinglish/English"],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 text-[#00000]">
            Explore our Digital Marketing Courses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Industry-designed curriculum with hands-on projects and real-world
            applications
          </p>
        </div>

        {/* Grid */}
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => {
            const isAiDriven = course.badges.includes("AI Driven");
            return (
              <Card
                key={course.id}
                className="flex flex-col border rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden min-h-[540px]"
              >
                {/* Image with badges */}
                <div className="relative h-[220px] overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover "
                  />

                  {/* Badges Overlay (top-right) */}
                  <div className="absolute top-2 right-2 flex flex-wrap gap-2">
                    {course.badges.map((badge, idx) => {
                      let IconComponent = null;

                      if (badge === "AI Driven") IconComponent = Cpu;
                      else if (badge === "Hinglish") IconComponent = Languages;
                      else if (badge === "Hinglish/English")
                        IconComponent = Globe;

                      return (
                        <Badge
                          key={idx}
                          className={`flex items-center gap-2 px-2 py-1 text-sm rounded-full ${
                            badge === "AI Driven"
                              ? "bg-gradient-to-r from-[#0061FF] to-[#60EFFF] text-white"
                              : "bg-white text-gray-800 border border-gray-300"
                          }`}
                        >
                          {IconComponent && (
                            <IconComponent className="w-3 h-3" />
                          )}
                          {badge}
                        </Badge>
                      );
                    })}
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
                          : course.students.replace(
                              course.students.split(" ")[0],
                              ""
                            )}
                      </p>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-gray-800 mt-1">
                      {course.title}
                    </h2>

                    {/* Info Badges under Title */}
                    <div className="flex flex-wrap gap-2 mt-3 mb-4">
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 px-3 py-1 text-xs bg-[#FFF2F2] border-0"
                      >
                        <Calendar className="w-4 h-4 text-gray-500" />{" "}
                        {course.duration}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 px-3 py-1 text-xs bg-[#FFF2F2] border-0"
                      >
                        <Globe className="w-4 h-4 text-gray-500" />{" "}
                        {course.mode}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 px-3 py-1 text-xs bg-[#FFF2F2] border-0"
                      >
                        <GraduationCap className="w-4 h-4 text-gray-500" />{" "}
                        {course.certification}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 px-3 py-1 text-xs bg-[#FFF2F2] border-0"
                      >
                        <Lightbulb className="w-4 h-4 text-gray-500" />{" "}
                        {course.projects}
                      </Badge>
                      {course.extra && (
                        <Badge
                          variant="outline"
                          className="flex items-center gap-1 px-3 py-1 text-xs bg-[#FFF2F2] border-0"
                        >
                          <CheckCircle className="w-4 h-4 text-gray-500" />{" "}
                          {course.extra}
                        </Badge>
                      )}
                    </div>

                    {/* Skills */}
                    <div className="mt-4">
                      <p className="text-sm font-semibold text-gray-700">
                        Skills you learn:
                      </p>
                      <p className="text-sm text-gray-600">
                        {course.skills.join(", ")}
                      </p>
                    </div>
                  </div>

                  {/* Buttons always bottom aligned */}
                  <div className="mt-6 flex flex-col sm:flex-row gap-2">
                    {course.id === "dipdm" || course.id === "ddm" ? (
                      <Button className="w-full border border-[#EA2525] bg-[#fff] text-[#EA2525] hover:bg-[#c21e1e] hover:text-[#fff]">
                        For Queries - Contact Us
                      </Button>
                    ) : (
                      <>
                        <BrochureDialog courseTitle={course.title}>
                          <Button
                            variant="outline"
                            className="flex-1 border border-red-500 text-[#EA2525] hover:bg-[#f7e4e4] flex items-center justify-center gap-2"
                          >
                            <FaDownload className="text-sm" />
                            Course Details
                          </Button>
                        </BrochureDialog>
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

        {/* View All */}
        {/* <div className="text-center animate-fade-in-up [animation-delay:0.6s] mt-12">
          <Button
            size="lg"
            className="bg-[#EA2525] transition-all duration-300 hover:scale-105 hover:shadow-lg"
            asChild
          >
            <Link to="/courses">View All Courses</Link>
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default CourseHighlights;
