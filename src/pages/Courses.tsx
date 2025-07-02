
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users, BookOpen, CheckCircle, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Courses = () => {
  const allCourses = [
    {
      title: "Complete SEO Mastery",
      description: "Master search engine optimization from basics to advanced techniques including technical SEO, content strategy, and link building.",
      duration: "8 weeks",
      students: "1,200+",
      level: "Beginner to Advanced",
      price: "₹25,000",
      features: ["Technical SEO", "Content Strategy", "Link Building", "Local SEO", "Analytics & Reporting", "Tools Training"],
      color: "from-green-500 to-emerald-600",
      category: "SEO"
    },
    {
      title: "Social Media Marketing Pro",
      description: "Build engaging social media campaigns across all major platforms with advanced strategies for brand building.",
      duration: "6 weeks",
      students: "950+",
      level: "Intermediate",
      price: "₹20,000",
      features: ["Instagram Marketing", "Facebook Ads", "Content Creation", "Influencer Marketing", "Analytics", "Brand Strategy"],
      color: "from-pink-500 to-rose-600",
      category: "Social Media"
    },
    {
      title: "Google Ads & PPC Expert",
      description: "Create and optimize high-converting paid advertising campaigns across Google Ads, Bing, and social platforms.",
      duration: "10 weeks",
      students: "800+",
      level: "Advanced",
      price: "₹30,000",
      features: ["Google Ads", "Bing Ads", "Campaign Optimization", "ROI Analysis", "Shopping Ads", "Display Advertising"],
      color: "from-blue-500 to-cyan-600",
      category: "PPC"
    },
    {
      title: "Email Marketing Specialist",
      description: "Build automated email sequences that convert prospects to customers with advanced segmentation and personalization.",
      duration: "4 weeks",
      students: "600+",
      level: "Beginner",
      price: "₹15,000",
      features: ["Automation", "Segmentation", "A/B Testing", "List Building", "Deliverability", "CRM Integration"],
      color: "from-purple-500 to-violet-600",
      category: "Email Marketing"
    },
    {
      title: "Analytics & Data Insights",
      description: "Make data-driven decisions with advanced analytics, reporting, and business intelligence tools.",
      duration: "6 weeks",
      students: "750+",
      level: "Intermediate",
      price: "₹22,000",
      features: ["Google Analytics", "Data Visualization", "Reporting", "Insights", "Tag Manager", "Data Studio"],
      color: "from-orange-500 to-red-600",
      category: "Analytics"
    },
    {
      title: "Content Strategy & Creation",
      description: "Create compelling content that drives engagement and conversions across all digital channels.",
      duration: "5 weeks",
      students: "900+",
      level: "All Levels",
      price: "₹18,000",
      features: ["Content Planning", "Copywriting", "Visual Content", "Distribution", "SEO Writing", "Brand Voice"],
      color: "from-teal-500 to-green-600",
      category: "Content"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Our
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Digital Marketing
            </span>
            <br />
            Courses
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Industry-designed curriculum with hands-on projects, real-world applications, and guaranteed placement support
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-green-100 text-green-700 px-4 py-2">Live Projects</Badge>
            <Badge className="bg-blue-100 text-blue-700 px-4 py-2">Industry Mentors</Badge>
            <Badge className="bg-purple-100 text-purple-700 px-4 py-2">Job Guarantee</Badge>
            <Badge className="bg-orange-100 text-orange-700 px-4 py-2">Flexible Timing</Badge>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allCourses.map((course, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className={`w-full h-2 bg-gradient-to-r ${course.color} rounded-full mb-4`}></div>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="text-xs">{course.category}</Badge>
                    <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
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
                  
                  <div className="space-y-3">
                    <p className="font-medium text-sm">What You'll Learn:</p>
                    <div className="grid grid-cols-1 gap-2">
                      {course.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Why Our Courses Stand Out
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-0">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Live Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Work on real client projects during your training</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-0">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Expert Mentors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Learn from industry professionals with 10+ years experience</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-0">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Certification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Industry-recognized certificates upon completion</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-0">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Flexible Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Weekend and evening batches available</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
