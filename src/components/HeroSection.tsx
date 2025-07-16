
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Clock } from "lucide-react";
import PlacedStudentCarousel from "@/components/PlacedStudentCarousel";

const HeroSection = () => {
  return (
    <>
    <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-4">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 animate-bounce-gentle">
                🚀 India's Leading Digital Marketing Academy
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Master
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse-soft">
                  {" "}Digital Marketing
                </span>
                <br />
                Launch Your Career
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Transform your career with industry-focused training in SEO, Social Media, PPC, and more. 
                Get hands-on experience and guaranteed placement support.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up [animation-delay:0.2s]">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg" asChild>
                <Link to="/courses">Explore Courses</Link>
              </Button>
              <Button size="lg" variant="outline" className="hover:scale-105 transition-all duration-300 hover:shadow-md" asChild>
                <Link to="/careers">Placement Programs</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 animate-fade-in-up [animation-delay:0.4s]">
              <div className="flex items-center space-x-3 group hover:scale-105 transition-all duration-300">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold">90% Placement Rate</p>
                  <p className="text-sm text-muted-foreground">Job Guarantee</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 group hover:scale-105 transition-all duration-300">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold">5000+ Students</p>
                  <p className="text-sm text-muted-foreground">Trained Successfully</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 group hover:scale-105 transition-all duration-300">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300">
                  <Clock className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold">Flexible Timing</p>
                  <p className="text-sm text-muted-foreground">Online & Offline</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-right">
            <div className="relative z-10 group">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Digital Marketing Training" 
                className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-r from-blue-200 to-purple-200 rounded-2xl -z-10 animate-pulse-soft"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full opacity-60 animate-bounce-gentle"></div>
            <div className="absolute top-10 -left-8 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-40 animate-bounce-gentle [animation-delay:1s]"></div>
          </div>
        </div>
      </div>
    </section>
    <PlacedStudentCarousel />
    </>
  );
};

export default HeroSection;
