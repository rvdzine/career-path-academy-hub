import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, Users } from "lucide-react";
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
      id: "seo-mastery",
      title: "Foundation in Digital Marketing",
      description:
        "Build a strong base in digital marketing fundamentals. Learn core concepts like SEO, Social Media, and Content Marketing to kickstart your career..",
      duration: "2 Months",
      students: "1,200+",
      level: "Online/Offline",
      rating: "4.9",
      modules: 12,
      projects: 5,
      image: FDM1,
    },
    {
      id: "social-media-pro",
      title: "Specialist in Digital Marketing",
      description:
        "Become a digital marketing specialist with in-depth knowledge of advanced strategies including PPC, Social Media Ads, and Analytics..",
      duration: "3 Months",
      students: "1000+",
      level: "Online/Offline",
      rating: "4.8",
      modules: 10,
      projects: 4,
      image: SDM2,
    },
    {
      id: "google-ads-expert",
      title: "Master in Digital Marketing (With Guaranteed Internship)",
      description:
        "A complete program covering all digital marketing verticals with practical projects and a guaranteed internship for real-world experience..",
      duration: "Customisable",
      students: "300+",
      level: "Online",
      rating: "4.7",
      modules: 14,
      projects: 6,
      image: MDM3,
    },
    {
      id: "email-marketing-specialist",
      title: "Professional & Business Owner Course (1:1 Learning)",
      description:
        "Exclusive personalised training for professionals and business owners. Tailored modules with live one-on-one sessions for your business needs..",
      duration: "Customisable",
      students: "300+",
      level: "Online",
      rating: "4.6",
      modules: 8,
      projects: 3,
      image: BODM4,
    },
    {
      id: "analytics-data-insights",
      title: "Degree in Digital Marketing",
      description:
        "A comprehensive 3-year program designed for in-depth mastery of digital marketing with academic rigor, internship opportunities, and placement support.",
      duration: "36 Months",
      students: "250+",
      level: "Offline",
      rating: "4.5",
      modules: 9,
      projects: 4,
      image: DDM5,
    },
    {
      id: "content-strategy-creation",
      title: "Diploma in Digital Marketing",
      description:
        "Earn a diploma with extensive training across all digital marketing domains. Includes certifications, practical projects, and live assignments..",
      duration: "12 Months",
      students: "500+",
      level: "Offline",
      rating: "4.4",
      modules: 11,
      projects: 5,
      image: DIPDM6,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 text-[#EA2525]">
            Featured Courses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Industry-designed curriculum with hands-on projects and real-world
            applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => (
            <Link to="/courses" key={index} className="group">
              <Card
                className="hover:shadow-xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-3 overflow-hidden animate-fade-in-up cursor-pointer h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <AspectRatio>
                    <img
                      src={course.image}
                      alt={course.title}
                      className="max-w-full max-h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </AspectRatio>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl group-hover:text-[#EA2525] transition-colors duration-300">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="secondary"
                      className="flex items-center gap-1 hover:scale-105 transition-transform duration-200"
                    >
                      <Clock className="w-3 h-3" />
                      {course.duration}
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="flex items-center gap-1 hover:scale-105 transition-transform duration-200"
                    >
                      <Users className="w-3 h-3" />
                      {course.students}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="hover:scale-105 transition-transform duration-200"
                    >
                      {course.level}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

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
