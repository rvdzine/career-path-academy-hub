import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnrollmentDialog from "@/components/EnrollmentDialog";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import FDM1 from "../components/assets/FDM1.png";
import SDM2 from "../components/assets/SDM2.png";
import MDM3 from "../components/assets/MDM3.png";
import BODM4 from "../components/assets/BODM4.png";
import DDM5 from "../components/assets/DDM5.png";
import DIPDM6 from "../components/assets/DIPDM6.png";

const Courses = () => {
  const courses = [
    {
      id: "seo-mastery",
      title: "Foundation in Digital Marketing",
      description: "Build a strong base in digital marketing fundamentals. Learn core concepts like SEO, Social Media, and Content Marketing to kickstart your career.",
      duration: "2 Months",
      students: "1,200+",
      level: "Online/Offline",
      rating: "4.9",
      modules: 12,
      projects: 5,
      color: "from-green-500 to-emerald-600",
      image: FDM1,
    },
    {
      id: "social-media-pro",
      title: "Specialist in Digital Marketing",
      description: "Become a digital marketing specialist with in-depth knowledge of advanced strategies including PPC, Social Media Ads, and Analytics.",
      duration: "3 Months",
      students: "1000+",
      level: "Online/Offline",
      rating: "4.8",
      modules: 10,
      projects: 4,
      color: "from-pink-500 to-rose-600",
      image: SDM2
    },
    {
      id: "google-ads-expert",
      title: "Master in Digital Marketing (With Guaranteed Internship)",
      description: "A complete program covering all digital marketing verticals with practical projects and a guaranteed internship for real-world experience.",
      duration: "Customisable",
      students: "300+",
      level: "Online/Offline",
      rating: "4.7",
      modules: 14,
      projects: 6,
      color: "from-blue-500 to-cyan-600",
      image: MDM3
    },
    {
      id: "email-marketing-specialist",
      title: "Professional & Business Owner Course (1:1 Learning)",
      description: "Exclusive personalised training for professionals and business owners. Tailored modules with live one-on-one sessions for your business needs.",
      duration: "Customisable",
      students: "300+",
      level: "Online",
      rating: "4.6",
      modules: 8,
      projects: 3,
      color: "from-purple-500 to-violet-600",
      image: BODM4
    },
    {
      id: "analytics-data-insights",
      title: "Degree in Digital Marketing",
      description: "A comprehensive 3-year program designed for in-depth mastery of digital marketing with academic rigor, internship opportunities, and placement support.",
      duration: "36 Months",
      students: "250+",
      level: "Offline-Regular",
      rating: "4.5",
      modules: 9,
      projects: 4,
      color: "from-orange-500 to-red-600",
      image: DDM5
    },
    {
      id: "content-strategy-creation",
      title: "Customize Course in Digital Marketing",
      description: "Earn a diploma with extensive training across all digital marketing domains. Includes certifications, practical projects, and live assignments.",
      duration: "Customisable",
      students: "500+",
      level: "Online/Offline",
      rating: "4.4",
      modules: 11,
      projects: 5,
      color: "from-teal-500 to-green-600",
      image: DIPDM6
    }
  ];


  return (
    <div className="min-h-screen bg-background">
      <Navbar />

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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card
                key={course.id}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 overflow-hidden cursor-pointer"
              >
                <div className="relative">
                  <AspectRatio>
                    <img
                      src={course.image}
                      alt={course.title}
                      className="max-w-full max-h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </AspectRatio>
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${course.color}`}></div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl group-hover:text-[#EA2525] transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {course.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {course.duration}
                    </Badge>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {course.students}
                    </Badge>
                    <Badge variant="outline">{course.level}</Badge>
                  </div>

                  {/* Custom Button for 'Customize Course in Digital Marketing' */}
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
                      <a
                        href="/brochure.pdf"
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          variant="outline"
                          className="w-full border border-red-500 text-[#EA2525] hover:bg-[#f7e4e4] flex items-center justify-center gap-2"
                        >
                          <FaDownload className="text-sm" />
                          Brochure
                        </Button>
                      </a>

                      <EnrollmentDialog courseTitle={course.title}>
                        <Button className="flex-1 bg-gradient-to-r bg-[#EA2525] hover:from-[#AA2526] hover:to-[#EA2525]">
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
