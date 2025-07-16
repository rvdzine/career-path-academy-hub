
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Phone, Mail, CheckCircle } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import axios from 'axios'
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    experience: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // console.log("Form submitted:", formData);
    // alert("Thank you for your inquiry! We'll get back to you soon.");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8000/api/contact/contact/", {
        full_name: formData.name,
        email: formData.email,
        phone: formData.phone,
        interested_courses: formData.course,
        experience: formData.experience,
        message: formData.message
      });

      if (response.status === 201) {
        toast({
          title: "Success!",
          description: "Your details have been submitted. We’ll contact you within 24 hours."
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          course: "",
          experience: "",
          message: ""
        });
      }
    } catch (error: any) {
      const errorMsg =
        error?.response?.data?.non_field_errors?.[0] ||
        error?.response?.data?.email?.[0] ||
        "Something went wrong. Please try again.";
      toast({
        title: "Submission Failed",
        description: errorMsg,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const campusLocations = [
    {
      city: "Mumbai",
      address: "Andheri East, Mumbai - 400069",
      phone: "+91 9876543210",
      email: "mumbai@digitalacademy.com"
    },
    {
      city: "Delhi",
      address: "Connaught Place, New Delhi - 110001",
      phone: "+91 9876543211",
      email: "delhi@digitalacademy.com"
    },
    {
      city: "Bangalore",
      address: "Koramangala, Bangalore - 560034",
      phone: "+91 9876543212",
      email: "bangalore@digitalacademy.com"
    }
  ];

  const enrollmentSteps = [
    {
      step: "1",
      title: "Choose Your Course",
      description: "Select from our comprehensive range of digital marketing courses"
    },
    {
      step: "2",
      title: "Schedule Counseling",
      description: "Book a free career counseling session with our experts"
    },
    {
      step: "3",
      title: "Complete Registration",
      description: "Fill out the enrollment form and make payment"
    },
    {
      step: "4",
      title: "Start Learning",
      description: "Begin your journey with our industry-expert instructors"
    }
  ];

  const faqs = [
    {
      question: "What is the duration of the courses?",
      answer: "Course duration varies from 4 weeks to 12 weeks depending on the program. Our comprehensive digital marketing course is 12 weeks long."
    },
    {
      question: "Do you provide placement assistance?",
      answer: "Yes! We have a dedicated placement team with a 90% success rate. We offer job guarantee programs and lifetime placement support."
    },
    {
      question: "Are the courses available online?",
      answer: "Yes, we offer flexible learning options including online, offline, and hybrid modes to suit your schedule and preferences."
    },
    {
      question: "What certifications do you provide?",
      answer: "We provide industry-recognized certifications upon course completion, along with Google and Facebook certified training modules."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Get in
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Touch
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Ready to transform your career? Contact us today to learn more about our courses and placement programs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-green-100 text-green-700 px-4 py-2">Free Counseling</Badge>
            <Badge className="bg-blue-100 text-blue-700 px-4 py-2">Quick Response</Badge>
            <Badge className="bg-purple-100 text-purple-700 px-4 py-2">Expert Guidance</Badge>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Enroll Now - Free Counseling
                </CardTitle>
                <CardDescription>
                  Fill out the form below and our counselors will contact you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="course">Interested Course</Label>
                    <Select onValueChange={(value) => handleInputChange("course", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a course" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="digitalmarketing">Complete Digital Marketing</SelectItem>
                        <SelectItem value="seomastery">SEO Mastery</SelectItem>
                        <SelectItem value="socialmediamarketingpro">Social Media Marketing Pro</SelectItem>
                        <SelectItem value="googleads">Google Ads & PPC Expert</SelectItem>
                        <SelectItem value="emailmarketing">Email Marketing Specialist</SelectItem>
                        <SelectItem value="analyticsanddatainsights">Analytics & Data Insights</SelectItem>
                        <SelectItem value="content">Content Strategy & Creation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Current Experience Level</Label>
                    <Select onValueChange={(value) => handleInputChange("experience", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fresher">Fresher / Student</SelectItem>
                        <SelectItem value="0-2">0-2 Years</SelectItem>
                        <SelectItem value="2-5">2-5 Years</SelectItem>
                        <SelectItem value="5+">5+ Years</SelectItem>
                        <SelectItem value="switcher">Career Switcher</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us about your career goals or any specific questions..."
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    {loading ? "Submitting..." : "Submit & Get Free Counseling"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-xl">Quick Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold">Call Us</p>
                      <p className="text-muted-foreground">+91 9876543210</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold">Email Us</p>
                      <p className="text-muted-foreground">info@digitalacademy.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-semibold">Office Hours</p>
                      <p className="text-muted-foreground">Mon-Sat: 9AM-7PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Campus Locations */}
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-xl">Our Campuses</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {campusLocations.map((location, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4 space-y-1">
                      <h4 className="font-semibold text-blue-600">{location.city}</h4>
                      <p className="text-sm text-muted-foreground">{location.address}</p>
                      <p className="text-sm">{location.phone}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Process */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Simple Enrollment Process
            </h2>
            <p className="text-xl text-muted-foreground">
              Get started in just 4 easy steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {enrollmentSteps.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 relative">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
                {index < enrollmentSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 text-blue-600">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
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

export default Contact;
