
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, BookOpen, Target } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import about_csh from "../components/assets/about-csh.png"

const About = () => {
  const instructors = [
    {
      name: "Ravi Gupta",
      role: "Lead SEO Instructor",
      experience: "12+ years",
      expertise: ["Technical SEO", "Content Strategy", "Local SEO"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Former SEO Manager at Google India with extensive experience in enterprise SEO strategies."
    },
    {
      name: "Priya Sharma",
      role: "Social Media Marketing Expert",
      experience: "10+ years",
      expertise: ["Instagram Marketing", "Facebook Ads", "Influencer Marketing"],
      image: "https://randomuser.me/api/portraits/women/50.jpg",
      bio: "Ex-Facebook Marketing Manager who has managed campaigns worth ₹100+ crores."
    },
    {
      name: "Amit Patel",
      role: "PPC & Analytics Specialist",
      experience: "15+ years",
      expertise: ["Google Ads", "Data Analytics", "Conversion Optimization"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Certified Google Ads trainer and former Analytics lead at Amazon India."
    },
    {
      name: "Neha Verma",
      role: "Content Strategy Director",
      experience: "8+ years",
      expertise: ["Content Marketing", "Email Marketing", "Brand Strategy"],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Content marketing strategist who has worked with 200+ brands across industries."
    }
  ];

  const achievements = [
    { icon: Users, number: "5000+", label: "Students Trained" },
    { icon: Award, number: "90%", label: "Placement Rate" },
    { icon: BookOpen, number: "6", label: "Course Modules" },
    { icon: Target, number: "50+", label: "Partner Companies" }
  ];

  const values = [
    {
      title: "Quality Education",
      description: "We believe in providing industry-relevant, practical education that prepares students for real-world challenges.",
      icon: BookOpen
    },
    {
      title: "Career Success",
      description: "Our primary goal is to ensure every student achieves their career objectives through our comprehensive support system.",
      icon: Target
    },
    {
      title: "Industry Connection",
      description: "We maintain strong relationships with leading companies to provide the best placement opportunities for our students.",
      icon: Users
    },
    {
      title: "Continuous Learning",
      description: "We stay updated with the latest digital marketing trends and update our curriculum accordingly.",
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold">
                About
                <span className="bg-gradient-to-r from-[#EA2525] to-[#AA2526] bg-clip-text text-transparent">
                  {" "}IDS
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We are India's leading digital marketing training institute, dedicated to bridging the gap between 
                academic learning and industry requirements. Since our inception, we have trained over 5000 students 
                and maintained a remarkable 90% placement success rate.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-blue-100 text-blue-700 px-4 py-2">Est. 2016</Badge>
                {/* <Badge className="bg-green-100 text-green-700 px-4 py-2">5000+ Alumni</Badge> */}
                <Badge className="bg-purple-100 text-purple-700 px-4 py-2">Industry Leaders</Badge>
              </div>
            </div>
            <div className="relative">
              <img 
                src= {about_csh}
                alt="about csh" 
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-r from-blue-200 to-purple-200 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gradient-to-r from-[#EA2525] to-[#AA2526] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="text-4xl font-bold mb-2">{achievement.number}</div>
                  <div className="text-blue-100 text-lg">{achievement.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To empower individuals with cutting-edge digital marketing skills and provide them with the 
                  support needed to build successful careers in the digital economy. We are committed to delivering 
                  practical, industry-relevant education that bridges the gap between learning and employment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To become the most trusted digital marketing education platform in India, known for producing 
                  industry-ready professionals who drive digital transformation across businesses. We envision a 
                  future where every student achieves their career aspirations through our comprehensive training programs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#EA2525] to-[#AA2526] bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0">
                  <CardHeader>
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-red-600" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Instructor Profiles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#EA2525] to-[#AA2526] bg-clip-text text-transparent">
              Meet Our Expert Instructors
            </h2>
            <p className="text-xl text-muted-foreground">
              Learn from industry professionals with extensive real-world experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {instructors.map((instructor, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="text-center">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-xl">{instructor.name}</CardTitle>
                  <CardDescription className="text-red-600 font-medium">
                    {instructor.role}
                  </CardDescription>
                  <Badge variant="secondary">{instructor.experience}</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {instructor.bio}
                  </p>
                  <div className="space-y-2">
                    <p className="font-medium text-sm">Expertise:</p>
                    <div className="flex flex-wrap gap-1">
                      {instructor.expertise.map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#EA2525] to-[#AA2526] bg-clip-text text-transparent">
              Why Students Choose Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Industry-Relevant Curriculum</h3>
                <p className="text-muted-foreground">Our curriculum is regularly updated to match current industry trends and requirements.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Hands-on Learning</h3>
                <p className="text-muted-foreground">Every course includes practical projects and real-world case studies.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Placement Guarantee</h3>
                <p className="text-muted-foreground">We provide comprehensive placement support with a 90% success rate.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Flexible Learning Options</h3>
                <p className="text-muted-foreground">Choose from online, offline, or hybrid learning modes to suit your schedule.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Lifetime Support</h3>
                <p className="text-muted-foreground">Get continued support and access to updated content even after course completion.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Strong Alumni Network</h3>
                <p className="text-muted-foreground">Join a community of 5000+ successful digital marketing professionals.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
