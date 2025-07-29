import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, Users, BookOpen, CheckCircle } from "lucide-react";
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
      description: "Build a strong base in digital marketing fundamentals. Learn core concepts like SEO, Social Media, and Content Marketing to kickstart your career..",
      duration: "2 Months",
      students: "1,200+",
      level: "Online/Offline",
      // price: "₹25,000",
      rating: "4.9",
      modules: 12,
      projects: 5,
      features: ["SEO Basics", "Social Media Essentials", "Content Marketing Foundations", "Google Ads Introduction"],
      color: "from-green-500 to-emerald-600",
      image: FDM1,
    },
    {
      id: "social-media-pro",
      title: "Specialist in Digital Marketing",
      description: "Become a digital marketing specialist with in-depth knowledge of advanced strategies including PPC, Social Media Ads, and Analytics..",
      duration: "3 Months",
      students: "1000+",
      level: "Online/Offline",
      // price: "₹20,000",
      rating: "4.8",
      modules: 10,
      projects: 4,
      features: ["Advanced SEO & SEM", "Paid Marketing & PPC", "Social Media Ads", "Google Analytics"],
      color: "from-pink-500 to-rose-600",
      image: SDM2
    },
    {
      id: "google-ads-expert",
      title: "Master in Digital Marketing (With Guaranteed Internship)",
      description: "A complete program covering all digital marketing verticals with practical projects and a guaranteed internship for real-world experience..",
      duration: "Customisable",
      students: "300+",
      level: "Online",
      // price: "₹30,000",
      rating: "4.7",
      modules: 14,
      projects: 6,
      features: ["Full Stack Digital Marketing", "Real Projects & Case Studies", "Internship Guarantee", "1-on-1 Mentorship Chat Support"],
      color: "from-blue-500 to-cyan-600",
      image: MDM3
    },
    {
      id: "email-marketing-specialist",
      title: "Professional & Business Owner Course (1:1 Learning)",
      description: "Exclusive personalised training for professionals and business owners. Tailored modules with live one-on-one sessions for your business needs..",
      duration: "Customisable",
      students: "300+",
      level: "Online",
      // price: "₹15,000",
      rating: "4.6",
      modules: 8,
      projects: 3,
      features: ["Custom Business Strategies", "Lead Generation for Business", "Personalised Marketing Plan", "Hands-on Implementation"],
      color: "from-purple-500 to-violet-600",
      image: BODM4
    },
    {
      id: "analytics-data-insights",
      title: "Degree in Digital Marketing",
      description: "A comprehensive 3-year program designed for in-depth mastery of digital marketing with academic rigor, internship opportunities, and placement support.",
      duration: "36 Months",
      students: "250+",
      level: "Offline",
      // price: "₹18,000",
      rating: "4.5",
      modules: 9,
      projects: 4,
      features: ["Complete Digital Marketing Ecosystem", "Multiple Internships & Projects", "Placement Assistance", "Degree Certification"],
      color: "from-orange-500 to-red-600",
      image: DDM5
    },
    {
      id: "content-strategy-creation",
      title: "Diploma in Digital Marketing",
      description: "Earn a diploma with extensive training across all digital marketing domains. Includes certifications, practical projects, and live assignments..",
      duration: "12 Months",
      students: "500+",
      level: "Offline",
      // price: "₹22,000",
      rating: "4.4",
      modules: 11,
      projects: 5,
      features: ["360° Digital Marketing Coverage", "Capstone Projects", "Industry Certifications", "Live Case Studies"],
      color: "from-teal-500 to-green-600",
      image: DIPDM6
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 text-[#EA2525]">
            Featured Courses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Industry-designed curriculum with hands-on projects and real-world applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-3 overflow-hidden animate-fade-in-up cursor-pointer"
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
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${course.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
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
                  <Badge variant="secondary" className="flex items-center gap-1 hover:scale-105 transition-transform duration-200">
                    <Clock className="w-3 h-3" />
                    {course.duration}
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-1 hover:scale-105 transition-transform duration-200">
                    <Users className="w-3 h-3" />
                    {course.students}
                  </Badge>
                  <Badge variant="outline" className="hover:scale-105 transition-transform duration-200">{course.level}</Badge>
                </div>
                
                <div className="space-y-2">
                  <p className="font-medium text-sm">Key Features:</p>
                  <div className="grid grid-cols-1 gap-1">
                    {course.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in-up [animation-delay:0.6s]">
          <Button size="lg" className="bg-[#EA2525] transition-all duration-300 hover:scale-105 hover:shadow-lg" asChild>
            <Link to="/courses">View All Courses</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CourseHighlights;
