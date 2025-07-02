
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users, BookOpen, CheckCircle, Calendar, Award, PlayCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CourseDetails = () => {
  const { courseId } = useParams();

  const courseData = {
    "seo-mastery": {
      title: "Complete SEO Mastery",
      description: "Master search engine optimization from basics to advanced techniques including technical SEO, content strategy, and link building.",
      duration: "8 weeks",
      students: "1,200+",
      level: "Beginner to Advanced",
      price: "₹25,000",
      rating: "4.9/5",
      modules: 12,
      projects: 5,
      color: "from-green-500 to-emerald-600",
      instructor: "Priya Sharma",
      instructorImage: "/placeholder.svg",
      curriculum: [
        { title: "SEO Fundamentals", duration: "Week 1", topics: ["What is SEO", "Search Engine Basics", "Keyword Research"] },
        { title: "On-Page SEO", duration: "Week 2-3", topics: ["Title Tags", "Meta Descriptions", "Header Tags", "Internal Linking"] },
        { title: "Technical SEO", duration: "Week 4-5", topics: ["Site Speed", "Mobile Optimization", "Schema Markup"] },
        { title: "Content Strategy", duration: "Week 6", topics: ["Content Planning", "SEO Writing", "Content Optimization"] },
        { title: "Link Building", duration: "Week 7", topics: ["Link Building Strategies", "Outreach", "Guest Posting"] },
        { title: "Analytics & Reporting", duration: "Week 8", topics: ["Google Analytics", "Search Console", "Reporting"] }
      ],
      features: ["Technical SEO", "Content Strategy", "Link Building", "Local SEO", "Analytics & Reporting", "Tools Training"],
      tools: ["Google Analytics", "SEMrush", "Ahrefs", "Screaming Frog", "Google Search Console"],
      career: ["SEO Specialist", "Digital Marketing Manager", "Content Marketing Manager", "SEO Consultant"]
    },
    "social-media-pro": {
      title: "Social Media Marketing Pro",
      description: "Build engaging social media campaigns across all major platforms with advanced strategies for brand building.",
      duration: "6 weeks",
      students: "950+",
      level: "Intermediate",
      price: "₹20,000",
      rating: "4.8/5",
      modules: 10,
      projects: 4,
      color: "from-pink-500 to-rose-600",
      instructor: "Rahul Kumar",
      instructorImage: "/placeholder.svg",
      curriculum: [
        { title: "Social Media Strategy", duration: "Week 1", topics: ["Platform Overview", "Audience Research", "Content Planning"] },
        { title: "Instagram Marketing", duration: "Week 2", topics: ["Instagram Strategy", "Content Creation", "Reels & Stories"] },
        { title: "Facebook Marketing", duration: "Week 3", topics: ["Facebook Ads", "Page Management", "Community Building"] },
        { title: "LinkedIn Marketing", duration: "Week 4", topics: ["B2B Strategy", "LinkedIn Ads", "Personal Branding"] },
        { title: "Content Creation", duration: "Week 5", topics: ["Visual Content", "Video Marketing", "Copywriting"] },
        { title: "Analytics & Growth", duration: "Week 6", topics: ["Social Media Analytics", "Growth Hacking", "ROI Measurement"] }
      ],
      features: ["Instagram Marketing", "Facebook Ads", "Content Creation", "Influencer Marketing", "Analytics", "Brand Strategy"],
      tools: ["Hootsuite", "Buffer", "Canva", "Adobe Creative Suite", "Facebook Business Manager"],
      career: ["Social Media Manager", "Content Creator", "Digital Marketing Specialist", "Brand Manager"]
    }
  };

  const course = courseData[courseId as keyof typeof courseData];

  if (!course) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
          <Link to="/courses">
            <Button>Back to Courses</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" variant="outline">Featured Course</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                {course.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {course.description}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Badge className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {course.duration}
                </Badge>
                <Badge className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  {course.students}
                </Badge>
                <Badge variant="outline">{course.level}</Badge>
                <Badge className="flex items-center gap-1">
                  <Award className="w-3 h-3" />
                  {course.rating}
                </Badge>
              </div>

              <div className="flex gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Enroll Now - {course.price}
                </Button>
                <Button size="lg" variant="outline">
                  <PlayCircle className="w-4 h-4 mr-2" />
                  Preview Course
                </Button>
              </div>
            </div>

            <Card className="p-8">
              <div className="text-center mb-6">
                <div className={`w-full h-2 bg-gradient-to-r ${course.color} rounded-full mb-6`}></div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{course.price}</div>
                <p className="text-muted-foreground">One-time payment</p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-medium">{course.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span>Modules:</span>
                  <span className="font-medium">{course.modules}</span>
                </div>
                <div className="flex justify-between">
                  <span>Projects:</span>
                  <span className="font-medium">{course.projects}</span>
                </div>
                <div className="flex justify-between">
                  <span>Students:</span>
                  <span className="font-medium">{course.students}</span>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Enroll Now
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Curriculum */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Course Curriculum</h2>
                <div className="space-y-4">
                  {course.curriculum.map((module, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <div className="flex justify-between items-center">
                          <CardTitle className="text-xl">{module.title}</CardTitle>
                          <Badge variant="outline">{module.duration}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {module.topics.map((topic, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-3 h-3 text-green-500" />
                              {topic}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Tools & Technologies */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Tools & Technologies</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {course.tools.map((tool, index) => (
                    <Card key={index} className="p-4 text-center hover:shadow-lg transition-shadow">
                      <p className="font-medium">{tool}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Instructor */}
              <Card>
                <CardHeader>
                  <CardTitle>Your Instructor</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">{course.instructor.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{course.instructor}</h3>
                  <p className="text-sm text-muted-foreground">10+ years experience in Digital Marketing</p>
                </CardContent>
              </Card>

              {/* Career Opportunities */}
              <Card>
                <CardHeader>
                  <CardTitle>Career Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {course.career.map((role, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        {role}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card>
                <CardHeader>
                  <CardTitle>What You'll Learn</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {course.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetails;
