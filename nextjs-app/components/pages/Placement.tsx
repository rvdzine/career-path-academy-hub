"use client";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, TrendingUp, Building, GraduationCap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InternshipForm from "@/components/InternshipForm";
import InternshipVacancies from "@/components/InternshipVacancies";
import RecruiterForm from "@/components/RecruiterForm"
import SuccessStoriesCourses from "@/components/courseDetailsComponents/SuccessStoriesCourses";
import ProgramForm from "../ProgramForm";

const Placement = () => {
  const placementStats = [
    { number: "90%", label: "Placement Rate", icon: TrendingUp },
    { number: "50+", label: "Partner Companies", icon: Building },
    // { number: "₹8.5L", label: "Average Package", icon: Award },
    { number: "2000+", label: "Students Placed", icon: Users }
  ];

 

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-8 md:py-10 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
              Jobs & Placements
            </h1>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mb-4">
              Start your career with our industry-focused internship program. Gain real-world experience and secure your dream job!
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <Badge className="bg-green-100 text-green-700 px-3 py-1 text-xs md:text-sm">
                <GraduationCap className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                Internship Program Available
              </Badge>
              <Badge className="bg-red-100 text-[#EA2525] px-3 py-1 text-xs md:text-sm">
                90% Placement Success Rate
              </Badge>
              <Badge className="bg-red-100 text-[#EA2525] px-3 py-1 text-xs md:text-sm">
                50+ Partner Companies
              </Badge>
              <Badge className="bg-red-100 text-[#EA2525] px-3 py-1 text-xs md:text-sm">
                2000+ Students Placed
              </Badge>
            </div>
          </div>

          {/* Placement Stats - Integrated into Hero */}
          {/* <div className="bg-gradient-to-r from-[#EA2525] to-[#AA2526] text-white rounded-xl shadow-lg py-4 md:py-6 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              {placementStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <IconComponent className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="text-xl md:text-2xl font-bold mb-1">{stat.number}</div>
                    <div className="text-blue-100 text-xs md:text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div> */}
        </div>
      </section>

      {/* Main Content - Tabs Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-2xl font-bold mb-2 bg-gradient-to-r from-[#EA2525] to-[#AA2526] bg-clip-text text-transparent">
              Explore Opportunities
            </h2>
            <p className="text-muted-foreground text-xs md:text-sm">
              Choose an option below to get started
            </p>
          </div>
          
          <Tabs defaultValue="vacancies" className="w-full">
            <TabsList className="grid w-full grid-cols-3 gap-1 mb-8 bg-gradient-to-r from-red-300 via-red-200 to-red-300 rounded-lg p-1.5 max-w-3xl mx-auto overflow-hidden">
              <TabsTrigger
                value="vacancies"
                className="text-[10px] sm:text-xs md:text-sm py-2 px-1 sm:px-2 md:px-3 rounded-md data-[state=active]:bg-white data-[state=active]:text-[#EA2525] data-[state=active]:shadow-sm transition-all"
              >
                View Vacancies
              </TabsTrigger>

              <TabsTrigger
                value="register"
                className="text-[10px] sm:text-xs md:text-sm py-2 px-1 sm:px-2 md:px-3 rounded-md data-[state=active]:bg-white data-[state=active]:text-[#EA2525] data-[state=active]:shadow-sm transition-all"
              >
                Register for Job
              </TabsTrigger>

              <TabsTrigger
                value="recruiters"
                className="text-[10px] sm:text-xs md:text-sm py-2 px-1 sm:px-2 md:px-3 rounded-md data-[state=active]:bg-white data-[state=active]:text-[#EA2525] data-[state=active]:shadow-sm transition-all"
              >
                For Recruiters
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="vacancies" className="space-y-8">
              <InternshipVacancies />
            </TabsContent>
            
            <TabsContent value="register" className="space-y-8">
              <InternshipForm />
            </TabsContent>
            
            {/* <TabsContent value="vacancies" className="space-y-8">
              <InternshipVacancies />
            </TabsContent> */}
            
            <TabsContent value="recruiters" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-xl md:text-2xl font-bold mb-2 bg-gradient-to-r from-[#EA2525] to-[#AA2526] bg-clip-text text-transparent">
                  Partner with Us for Hiring
                </h2>
                <p className="text-sm md:text-base text-muted-foreground">
                  Register your company to access our pool of talented candidates
                </p>
              </div>
              <RecruiterForm />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Success Stories */}

      <SuccessStoriesCourses/>
     

      <ProgramForm/>

      <Footer />
    </div>
  );
};

export default Placement;
