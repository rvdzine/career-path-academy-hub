
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, Users, BookOpen, CheckCircle } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const CourseHighlights = () => {
  const courses = [
    {
      title: "Complete SEO Mastery",
      description: "Master search engine optimization from basics to advanced techniques",
      duration: "8 weeks",
      students: "1,200+",
      level: "Beginner to Advanced",
      features: ["Technical SEO", "Content Strategy", "Link Building", "Analytics"],
      color: "from-green-500 to-emerald-600",
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Social Media Marketing Pro",
      description: "Build engaging social media campaigns across all major platforms",
      duration: "6 weeks",
      students: "950+",
      level: "Intermediate",
      features: ["Instagram Marketing", "Facebook Ads", "Content Creation", "Analytics"],
      color: "from-pink-500 to-rose-600",
      image: "photo-1649972904349-6e44c42644a7"
    },
    {
      title: "Google Ads & PPC Expert",
      description: "Create and optimize high-converting paid advertising campaigns",
      duration: "10 weeks",
      students: "800+",
      level: "Advanced",
      features: ["Google Ads", "Bing Ads", "Campaign Optimization", "ROI Analysis"],
      color: "from-blue-500 to-cyan-600",
      image: "photo-1488590528505-98d2b5aba04b"
    },
    {
      title: "Email Marketing Specialist",
      description: "Build automated email sequences that convert prospects to customers",
      duration: "4 weeks",
      students: "600+",
      level: "Beginner",
      features: ["Automation", "Segmentation", "A/B Testing", "List Building"],
      color: "from-purple-500 to-violet-600",
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Analytics & Data Insights",
      description: "Make data-driven decisions with advanced analytics and reporting",
      duration: "6 weeks",
      students: "750+",
      level: "Intermediate",
      features: ["Google Analytics", "Data Visualization", "Reporting", "Insights"],
      color: "from-orange-500 to-red-600",
      image: "photo-1498050108023-c5249f4df085"
    },
    {
      title: "Content Strategy & Creation",
      description: "Create compelling content that drives engagement and conversions",
      duration: "5 weeks",
      students: "900+",
      level: "All Levels",
      features: ["Content Planning", "Copywriting", "Visual Content", "Distribution"],
      color: "from-teal-500 to-green-600",
      image: "photo-1461749280684-dccba630e2f6"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Courses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Industry-designed curriculum with hands-on projects and real-world applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 overflow-hidden">
              <div className="relative">
                <AspectRatio ratio={16/9}>
                  <img 
                    src={`https://images.unsplash.com/${course.image}?w=400&h=225&fit=crop`}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </AspectRatio>
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${course.color}`}></div>
              </div>
              <CardHeader className="pb-4">
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
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" asChild>
            <Link to="/courses">View All Courses</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CourseHighlights;
