import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, Users, BookOpen, CheckCircle, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnrollmentDialog from "@/components/EnrollmentDialog";

const Courses = () => {
  const courses = [
    {
      id: "seo-mastery",
      title: "Complete SEO Mastery",
      description: "Master search engine optimization from basics to advanced techniques including technical SEO, content strategy, and link building.",
      duration: "8 weeks",
      students: "1,200+",
      level: "Beginner to Advanced",
      price: "₹25,000",
      rating: "4.9",
      modules: 12,
      projects: 5,
      features: ["Technical SEO", "Content Strategy", "Link Building", "Local SEO"],
      color: "from-green-500 to-emerald-600"
    },
    {
      id: "social-media-pro",
      title: "Social Media Marketing Pro",
      description: "Build engaging social media campaigns across all major platforms with advanced strategies for brand building.",
      duration: "6 weeks",
      students: "950+",
      level: "Intermediate",
      price: "₹20,000",
      rating: "4.8",
      modules: 10,
      projects: 4,
      features: ["Instagram Marketing", "Facebook Ads", "Content Creation", "Analytics"],
      color: "from-pink-500 to-rose-600"
    },
    {
      id: "google-ads-expert",
      title: "Google Ads & PPC Expert",
      description: "Create and optimize high-converting paid advertising campaigns with Google Ads.",
      duration: "10 weeks",
      students: "800+",
      level: "Advanced",
      price: "₹30,000",
      rating: "4.7",
      modules: 14,
      projects: 6,
      features: ["Google Ads", "PPC", "Campaign Optimization", "ROI Analysis"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: "email-marketing-specialist",
      title: "Email Marketing Specialist",
      description: "Build automated email sequences that convert prospects to customers.",
      duration: "4 weeks",
      students: "600+",
      level: "Beginner",
      price: "₹15,000",
      rating: "4.6",
      modules: 8,
      projects: 3,
      features: ["Automation", "Segmentation", "A/B Testing", "List Building"],
      color: "from-purple-500 to-violet-600"
    },
    {
      id: "analytics-data-insights",
      title: "Analytics & Data Insights",
      description: "Make data-driven decisions with advanced analytics and reporting techniques.",
      duration: "6 weeks",
      students: "750+",
      level: "Intermediate",
      price: "₹18,000",
      rating: "4.5",
      modules: 9,
      projects: 4,
      features: ["Google Analytics", "Data Visualization", "Reporting", "Insights"],
      color: "from-orange-500 to-red-600"
    },
    {
      id: "content-strategy-creation",
      title: "Content Strategy & Creation",
      description: "Create compelling content that drives engagement and conversions.",
      duration: "5 weeks",
      students: "900+",
      level: "All Levels",
      price: "₹22,000",
      rating: "4.4",
      modules: 11,
      projects: 5,
      features: ["Content Planning", "Copywriting", "Visual Content", "Distribution"],
      color: "from-teal-500 to-green-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Professional Courses
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Industry-designed curriculum with hands-on projects, real-world applications, and career placement support
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="flex items-center gap-2 text-sm px-4 py-2">
              <BookOpen className="w-4 h-4" />
              15+ Courses
            </Badge>
            <Badge className="flex items-center gap-2 text-sm px-4 py-2">
              <Users className="w-4 h-4" />
              5000+ Students
            </Badge>
            <Badge className="flex items-center gap-2 text-sm px-4 py-2">
              <Star className="w-4 h-4" />
              4.8/5 Rating
            </Badge>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className={`w-full h-2 bg-gradient-to-r ${course.color} rounded-full mb-4`}></div>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="text-lg px-3 py-1">{course.price}</Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
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
                    <Link to={`/courses/${course.id}`} className="flex-1">
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </Link>
                    <EnrollmentDialog 
                      courseTitle={course.title}
                      coursePrice={course.price}
                    >
                      <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
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
