import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Clock, Sparkle } from "lucide-react";
import PlacedStudentCarousel from "@/components/PlacedStudentCarousel";
import hero from "@/components/assets/hero.png";
import BrochureDialog from "../pages/BrochureDialog";
import { FaDownload } from "react-icons/fa";
import chimg7 from "../components/svg/sparkle.svg"

const HeroSection = () => {
  return (
    <>
      <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-left">
              <div className="space-y-4">
                <Badge className="bg-red-100 text-red-700 hover:bg-red-200 animate-bounce-gentle">
                  🚀 India's Leading Digital Marketing Academy
                </Badge>
                <h1 className="text-4xl top-8 lg:text-6xl font-bold leading-tight relative">
                  {/* AI Driven Badge */}
                  <Badge
                    className="absolute -top-9 left-0 flex items-center gap-2 px-4 py-1 text-lg font-semibold 
    bg-gradient-to-r from-[#0061FF] to-[#60EFFF] text-white rounded-full shadow-md"
                  >
                    <img src={chimg7} alt="AI Driven" className="w-4 h-4" />
                    AI Driven
                  </Badge>

                  {/* Rest of the title */}
                  <span className="line-through decoration-4 decoration-red-500 text-black">
                    Best
                  </span>{" "}
                  <span className="bg-gradient-to-r from-[#EA2525] to-[#AA2526] bg-clip-text text-transparent animate-pulse-soft">
                    Digital Marketing
                  </span>
                  <br />
                  <span className="text-black">Institute in Noida</span>
                </h1>
                <p className="text-xl relative top-7 text-muted-foreground leading-relaxed">
                  IDS: Noida's premier SEO & Digital Marketing institute.<br />
                  Learn from experts with live projects and guaranteed placement support.<br />
                  Enroll now!
                </p>
              </div>

              <div className="flex flex-col relative top-6 sm:flex-row gap-4 animate-fade-in-up [animation-delay:0.2s]">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#EA2525] to-[#AA2526] hover:from-[#EA2525] hover:to-[#AA2526] transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  asChild
                >
                  <Link to="/courses">Explore Courses</Link>
                </Button>

                {/* Brochure download button */}
                <BrochureDialog courseTitle="Master in Digital Marketing">
                  <Button
                    size="lg"
                    variant="outline"
                    className="flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 hover:shadow-md"
                  >
                    <FaDownload className="text-sm" />
                    Download Brochure
                  </Button>
                </BrochureDialog>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 animate-fade-in-up [animation-delay:0.4s]">
                <div className="flex items-center space-x-3 group hover:scale-105 transition-all duration-300">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold">90% Placement</p>
                    <p className="text-sm text-muted-foreground">Job Guarantee</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 group hover:scale-105 transition-all duration-300">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold">2000+ Students</p>
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
                  src={hero}
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
