import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnrollmentDialog from "@/components/EnrollmentDialog";
import { FaDownload } from "react-icons/fa";
import FDM1 from "../components/assets/FDM1.png";
import SDM2 from "../components/assets/SDM2.png";
import MDM3 from "../components/assets/MDM3.png";
import BODM4 from "../components/assets/BODM4.png";
import DDM5 from "../components/assets/DDM5.png";
import DIPDM6 from "../components/assets/DIPDM6.png";
import BrochureDialog from "./BrochureDialog";

const Courses = () => {
  const courses = [
    {
      id: "seo-mastery",
      title: "Foundation in Digital Marketing",
      skills: ["React.js", "Node.js", "MongoDB", "JavaScript", "HTML/CSS", "REST APIs"],

      duration: "2 Months",
      students: "1,200+",
      level: "Online/Offline",
      certification: "Certification",
      rating: "4.9",
      modules: 12,
      projects: 5,
      color: "from-green-500 to-emerald-600",
      image: FDM1,
    },
    {
      id: "social-media-pro",
      title: "Specialist in Digital Marketing",
      skills: ["React.js", "Node.js", "MongoDB", "JavaScript", "HTML/CSS", "REST APIs"],
     duration: "3 Months",
      students: "1000+",
      level: "Online/Offline",
      certification: "Certification",
      rating: "4.8",
      modules: 10,
      projects: 4,
      color: "from-pink-500 to-rose-600",
      image: SDM2,
    },
    {
      id: "google-ads-expert",
      title: "Master in Digital Marketing (With Guaranteed Internship)",
      skills: ["React.js", "Node.js", "MongoDB", "JavaScript", "HTML/CSS", "REST APIs"],
      duration: "6 Months",
      students: "300+",
      level: "Online",
      certification: "Certification",
      rating: "4.7",
      modules: 14,
      projects: 6,
      color: "from-blue-500 to-cyan-600",
      image: MDM3,
    },
    {
      id: "email-marketing-specialist",
      title: "Professional & Business Owner Course (1:1 Learning)",
      skills: ["React.js", "Node.js", "MongoDB", "JavaScript", "HTML/CSS", "REST APIs"],

      duration: "Customisable",
      students: "300+",
      level: "Online",
      certification: "Certification",
      rating: "4.6",
      modules: 8,
      projects: 3,
      color: "from-purple-500 to-violet-600",
      image: BODM4,
    },
    {
      id: "analytics-data-insights",
      title: "Degree in Digital Marketing",
      skills: ["React.js", "Node.js", "MongoDB", "JavaScript", "HTML/CSS", "REST APIs"],

      duration: "36 Months",
      students: "250+",
      level: "Offline-Regular",
      certification: "Certification",
      rating: "4.5",
      modules: 9,
      projects: 4,
      color: "from-orange-500 to-red-600",
      image: DDM5,
    },
    {
      id: "content-strategy-creation",
      title: "Customize Course in Digital Marketing",
      skills: ["React.js", "Node.js", "MongoDB", "JavaScript", "HTML/CSS", "REST APIs"],

      duration: "Customisable",
      students: "500+",
      level: "Online/Offline",
      certification: "Certification",
      rating: "4.4",
      modules: 11,
      projects: 5,
      color: "from-teal-500 to-green-600",
      image: DIPDM6,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-[#EA2525] bg-clip-text text-transparent">
            Professional Courses
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Industry-designed curriculum with hands-on projects, real-world applications, and career placement support.
          </p>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card
                key={course.id}
                className="flex flex-col h-[650px] group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 overflow-hidden cursor-pointer rounded-xl"
              >
                {/* Header with Title and Badges */}
               <div
  className="p-5 text-white"
  style={{
    background:
      "linear-gradient(56deg, rgba(133, 0, 0, 1) 0%, rgba(198, 1, 31, 1) 100%)",
  }}
>
  {/* Badges at top */}
  <div className="flex gap-2 mb-3 flex-wrap">
    <Badge className="bg-yellow-400 h-[35px] text-black">AI Driven</Badge>
    <Badge variant="secondary">Language: English/Hinglish</Badge>
  </div>

  {/* Heading */}
  <h2 className="text-xl font-bold leading-snug min-h-[60px] flex items-center text-white">
    {course.title}
  </h2>

  {/* Subheading */}
  <p className="mt-1 text-sm text-gray-200">
    Next Batch: Starting January 15, 2025
  </p>
</div>

                {/* Image */}
                <div className="relative m-[15px]">
                  <div className="h-[150px]  overflow-hidden rounded-xl">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${course.color}`}
                  ></div>
                </div>

                {/* Description */}
              <CardHeader className="pb-3 flex-1">
  <div className="flex flex-wrap items-center gap-2">
    <span className="font-semibold text-gray-700">Skills:</span>
    {course.skills.map((skill, idx) => (
      <Badge
        key={idx}
        className="h-[30px] px-3 flex items-center justify-center text-white bg-[#C74457] hover:bg-[#9a3746] transition-colors duration-200"
      >
        {skill}
      </Badge>
    ))}
  </div>
</CardHeader>




                {/* Content */}
                <CardContent className="space-y-4">
  {/* Title */}
  <h3 className="text-md font-semibold text-gray-700">Course Details</h3>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {course.duration}
                    </Badge>
                    <Badge variant="secondary">{course.certification}</Badge>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {course.students}
                    </Badge>
                    <Badge variant="outline">{course.level}</Badge>
                  </div>

                  {/* Buttons */}
                  {course.id === "content-strategy-creation" ? (
                    <div className="pt-4">
                      <a href="/contact" className="block w-full">
                        <Button className="w-full bg-[#EA2525] hover:bg-[#c21e1e]">
                          For Queries - Contact Us
                        </Button>
                      </a>
                    </div>
                  ) : (
                    <div className="flex flex-col sm:flex-row justify-between gap-2 pt-4">
                      {/* Brochure Button */}
                      <BrochureDialog courseTitle={course.title}>
                        <Button
                          variant="outline"
                          className="flex-1 border border-red-500 text-[#EA2525] hover:bg-[#f7e4e4] flex items-center justify-center gap-2"
                        >
                          <FaDownload className="text-sm" />
                          Course Details
                        </Button>
                      </BrochureDialog>

                      {/* Enroll Button */}
                      <EnrollmentDialog courseTitle={course.title}>
                        <Button className="flex-1 bg-[#EA2525] hover:bg-[#c21e1e] text-white">
                          Enroll Now
                        </Button>
                      </EnrollmentDialog>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
