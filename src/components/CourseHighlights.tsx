import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Calendar,
  Users,
  Globe,
  Lightbulb,
  Cpu,
  Languages,
} from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import FDM1 from "../components/assets/FDM1.png";
import SDM2 from "../components/assets/SDM2.png";
import MDM3 from "../components/assets/MDM3.png";
import BODM4 from "../components/assets/BODM4.png";
import DDM5 from "../components/assets/DDM5.png";
import DIPDM6 from "../components/assets/DIPDM6.png";

const CourseHighlights = () => {
  const courses = [
    {
      id: "fdm",
      title: "Foundation in Digital Marketing",
      description:
        "Build a strong base in digital marketing fundamentals. Learn SEO, Social Media, and Content Marketing to kickstart your career.",
      duration: "2 Months",
      students: "1,200+",
      level: "Online / Offline",
      projects: "5 Projects",
      image: FDM1,
      ai: true,
      bilingual: true,
    },
    {
      id: "sdm",
      title: "Specialist in Digital Marketing",
      description:
        "Become a digital marketing specialist with advanced strategies including PPC, Social Media Ads, and Analytics.",
      duration: "3 Months",
      students: "1000+",
      level: "Online / Offline",
      projects: "4 Projects",
      image: SDM2,
      ai: true,
      bilingual: true,
    },
    {
      id: "mdm",
      title: "Master in Digital Marketing (With Internship)",
      description:
        "Comprehensive program covering all digital marketing verticals with practical projects and guaranteed internship.",
      duration: "6 Months",
      students: "300+",
      level: "Online / Offline",
      projects: "6 Projects",
      image: MDM3,
      ai: true,
      bilingual: true,
    },
    {
      id: "bodm",
      title: "Business Owner Course (1:1 Learning)",
      description:
        "Exclusive personalised training for professionals and business owners with one-on-one mentorship.",
      duration: "Customisable",
      students: "300+",
      level: "Online",
      projects: "3 Projects",
      image: BODM4,
      ai: false,
      bilingual: true,
    },
    {
      id: "ddm",
      title: "Degree in Digital Marketing",
      description:
        "3-year comprehensive program for in-depth mastery of digital marketing with placement support.",
      duration: "36 Months",
      students: "250+",
      level: "Offline-Regular",
      projects: "4 Projects",
      image: DDM5,
      ai: true,
      bilingual: false,
    },
    {
      id: "dipdm",
      title: "Diploma in Digital Marketing",
      description:
        "Extensive diploma program with certifications, practical projects, and live assignments.",
      duration: "Customisable",
      students: "500+",
      level: "Online / Offline",
      projects: "5 Projects",
      image: DIPDM6,
      ai: true,
      bilingual: true,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 text-[#EA2525]">
          Explore our Digital Marketing Courses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Industry-designed curriculum with hands-on projects and real-world
            applications
          </p>
          <b><i>Note:</i></b>{" "}
          <i>
            Our courses start at ₹10,000 and go up to ₹1.5 Lacs depending on
            client requirements.
          </i>
          {/* <b><i>Note: </i></b> <i>Our courses starts at price 10k and it goes upto 1.5 Lacs as per the clients requirements.</i> */}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => (
            <Link to="/courses" key={index} className="group">
              <Card className="flex flex-col border rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden h-full">
                
                {/* Image */}
                <div className="relative overflow-hidden">
                  <AspectRatio ratio={16 / 8} className="w-full">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </AspectRatio>

                  {/* Top Highlight Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    {course.ai && (
                      <Badge className="bg-[#EA2525] text-white flex items-center gap-1 text-xs px-2 py-1 rounded-md shadow">
                        <Cpu className="w-3 h-3" /> AI Driven
                      </Badge>
                    )}
                    {course.bilingual && (
                      <Badge className="bg-black text-white flex items-center gap-1 text-xs px-2 py-1 rounded-md shadow">
                        <Languages className="w-3 h-3" /> Hindi / English
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Content */}
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-[#EA2525] transition-colors duration-300">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600">
                    {course.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col justify-between">
                  {/* Info Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1 px-3 py-1 text-xs bg-[#FFF2F2] border-0"
                    >
                      <Calendar className="w-3 h-3 text-gray-500" />{" "}
                      {course.duration}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1 px-3 py-1 text-xs bg-[#FFF2F2] border-0"
                    >
                      <Users className="w-3 h-3 text-gray-500" />{" "}
                      {course.students}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1 px-3 py-1 text-xs bg-[#FFF2F2] border-0"
                    >
                      <Globe className="w-3 h-3 text-gray-500" />{" "}
                      {course.level}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1 px-3 py-1 text-xs bg-[#FFF2F2] border-0"
                    >
                      <Lightbulb className="w-3 h-3 text-gray-500" />{" "}
                      {course.projects}
                    </Badge>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto">
                    <Button className="w-full bg-[#EA2525] hover:bg-[#c21e1e] text-white">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="text-center animate-fade-in-up [animation-delay:0.6s]">
          <Button
            size="lg"
            className="bg-[#EA2525] transition-all duration-300 hover:scale-105 hover:shadow-lg"
            asChild
          >
            <Link to="/courses">View All Courses</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CourseHighlights;
