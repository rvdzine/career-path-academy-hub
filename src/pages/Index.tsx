import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, BookOpen, Calendar, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialSection from "@/components/TestimonialSection";
import HeroSection from "@/components/HeroSection";
import CourseHighlights from "@/components/CourseHighlights";
import StatsSection from "@/components/StatsSection";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CourseHighlights />
      <StatsSection />
      <TestimonialSection />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
