
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Users, Briefcase, TrendingUp, Building, Award, GraduationCap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InternshipForm from "@/components/InternshipForm";
import InternshipVacancies from "@/components/InternshipVacancies";
import RecruiterForm from "@/components/RecruiterForm"

const Placement = () => {
  const placementStats = [
    { number: "90%", label: "Placement Rate", icon: TrendingUp },
    { number: "50+", label: "Partner Companies", icon: Building },
    { number: "₹8.5L", label: "Average Package", icon: Award },
    { number: "3000+", label: "Students Placed", icon: Users }
  ];

  const partnerCompanies = [
    "Google", "Facebook", "Amazon", "Flipkart", "Paytm", "Zomato",
    "Swiggy", "OYO", "Byju's", "Unacademy", "PhonePe", "Razorpay"
  ];

  const placementPrograms = [
    {
      title: "Internship Program",
      description: "3-6 months paid internship with guaranteed job opportunity upon successful completion.",
      duration: "3-6 months internship + job placement",
      features: [
        "Paid internship opportunities",
        "Real-world project experience",
        "One-on-one mentorship",
        "Industry exposure and networking",
        "Performance-based job offers",
        "Certificate of completion"
      ],
      price: "Free Registration",
      guarantee: "Internship Guaranteed",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Job Guarantee Program",
      description: "100% job guarantee or full fee refund. Complete training with dedicated placement support.",
      duration: "12 weeks + 3 months placement support",
      features: [
        "Comprehensive training in all modules",
        "Personal interview preparation",
        "Resume building workshop",
        "Mock interviews with industry experts",
        "Direct company referrals",
        "Salary negotiation support"
      ],
      price: "₹45,000",
      guarantee: "Job Guaranteed",
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Premium Placement Support",
      description: "Enhanced placement assistance with priority access to top companies and personalized mentoring.",
      duration: "Course duration + 6 months support",
      features: [
        "Priority company applications",
        "1-on-1 career counseling",
        "LinkedIn profile optimization",
        "Portfolio development",
        "Industry networking events",
        "Alumni network access"
      ],
      price: "₹15,000",
      guarantee: "Premium Support",
      color: "from-purple-500 to-violet-600"
    }
  ];

  const successStories = [
    {
      name: "Rajesh Kumar",
      previousRole: "Sales Executive",
      currentRole: "Digital Marketing Manager",
      company: "TechCorp India",
      salaryIncrease: "180%",
      package: "₹12 LPA",
      course: "Complete Digital Marketing"
    },
    {
      name: "Sneha Patel",
      previousRole: "Fresh Graduate",
      currentRole: "SEO Specialist",
      company: "E-commerce Giants",
      salaryIncrease: "New Career",
      package: "₹6.5 LPA",
      course: "SEO Mastery"
    },
    {
      name: "Amit Sharma",
      previousRole: "Content Writer",
      currentRole: "PPC Manager",
      company: "Digital Solutions Ltd",
      salaryIncrease: "150%",
      package: "₹10 LPA",
      course: "Google Ads Expert"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Internship & Placement
            </span>
            <br />
            Programs
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Start your career with our industry-focused internship program. Gain real-world experience and secure your dream job!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-green-100 text-green-700 px-6 py-2 text-lg">
              <GraduationCap className="w-5 h-5 mr-2" />
              Internship Program Available
            </Badge>
            <Badge className="bg-blue-100 text-blue-700 px-6 py-2 text-lg">
              90% Placement Success Rate
            </Badge>
          </div>
        </div>
      </section>

      {/* Placement Stats */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {placementStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-100 text-lg">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="register" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="register">Register for Internship</TabsTrigger>
              <TabsTrigger value="vacancies">View Vacancies</TabsTrigger>
              <TabsTrigger value="recruiters">For Recruiters</TabsTrigger>
            </TabsList>
            
            <TabsContent value="register" className="space-y-8">
              <InternshipForm />
            </TabsContent>
            
            <TabsContent value="vacancies" className="space-y-8">
              <InternshipVacancies />
            </TabsContent>
            
            <TabsContent value="recruiters" className="space-y-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Partner with Us for Hiring
                </h2>
                <p className="text-xl text-muted-foreground">
                  Register your company to access our pool of talented candidates
                </p>
              </div>
              <RecruiterForm />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Placement Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              Real people, real careers, real success
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="text-center">
                    <h4 className="font-bold text-xl text-blue-600">{story.name}</h4>
                    <Badge className="bg-green-100 text-green-700 mt-2">{story.salaryIncrease} Salary Increase</Badge>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Previous:</span>
                      <span className="text-sm font-medium">{story.previousRole}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Current:</span>
                      <span className="text-sm font-medium">{story.currentRole}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Company:</span>
                      <span className="text-sm font-medium">{story.company}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Package:</span>
                      <span className="text-sm font-bold text-green-600">{story.package}</span>
                    </div>
                  </div>
                  
                  <Badge variant="secondary" className="w-full justify-center">
                    {story.course}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Career Journey?</h2>
          <p className="text-xl mb-8 opacity-90">Join our internship program and take the first step towards your dream job</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Register for Internship
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
              Schedule a Counseling Call
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Placement;
