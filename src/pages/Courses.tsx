
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, Users, BookOpen, CheckCircle } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnrollmentDialog from "@/components/EnrollmentDialog";

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
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-[#EA2525] bg-clip-text text-transparent">
            Professional Courses
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Industry-designed curriculum with hands-on projects, real-world applications, and career placement support
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 overflow-hidden cursor-pointer">
                <div className="relative">
                  <AspectRatio>
                    {/* <img 
                      src={`https://images.unsplash.com/${course.image}?w=400&h=225&fit=crop`}
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    /> */}
                    <img
                      src={course.image}
                      alt={course.title}
                      className="max-w-full max-h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </AspectRatio>
                  {/* <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div> */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${course.color}`}></div>
                </div>
                <CardHeader className="pb-4">
                  {/* <div className="flex justify-between items-start mb-2">
                    <Badge className="text-lg px-3 py-1">{course.price}</Badge>
                  </div> */}
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
                  
                  <div className="space-y-2">
                    <p className="font-medium text-sm">Key Features:</p>
                    <div className="grid grid-cols-1 gap-1">
                      {course.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4">
                    {/* <Link to={`/courses/${course.id}`} className="flex-1">
                      <Button variant="outline" className="border-2 border-red-500 text-[#EA2525]">
                        View Details
                      </Button>
                    </Link> */}
                    <EnrollmentDialog 
                      courseTitle={course.title}
                      // coursePrice={course.price}
                    >
                      <Button className="flex-1 bg-gradient-to-r bg-[#EA2525] hover:from-[#AA2526] hover:to-[#EA2525]">
                        Enroll Now
                      </Button>
                    </EnrollmentDialog>
                  </div>
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
