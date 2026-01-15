"use client";
// import { useState } from "react";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { CheckCircle, Users, Briefcase, TrendingUp, Building, Award, GraduationCap } from "lucide-react";
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
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-4xl lg:text-6xl font-bold mb-6">
              Jobs & Placement
            </span>
            <br />
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Start your career with our industry-focused internship program. Gain real-world experience and secure your dream job!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-green-100 text-green-700 px-6 py-2 text-lg">
              <GraduationCap className="w-5 h-5 mr-2" />
              Internship Program Available
            </Badge>
            <Badge className="bg-red-100 text-blue-[#EA2525] px-6 py-2 text-lg">
              90% Placement Success Rate
            </Badge>
          </div>
        </div>
      </section>

      {/* Placement Stats */}
      <section className="py-16 bg-gradient-to-r from-[#EA2525] to-[#AA2526] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
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
          <Tabs defaultValue="vacancies" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-gradient-to-r from-red-300 via-red-200 to-red-300 rounded-lg p-1 max-w-2xl mx-auto">

             <TabsTrigger
  value="vacancies"
  className="text-sm py-1 px-4 rounded-md data-[state=active]:bg-white data-[state=active]:text-[#EA2525]"
>
  View Vacancies
</TabsTrigger>

             <TabsTrigger
  value="register"
  className="text-sm py-1 px-4 rounded-md data-[state=active]:bg-white data-[state=active]:text-[#EA2525]"
>
  Register for Job
</TabsTrigger>

<TabsTrigger
  value="recruiters"
  className="text-sm py-1 px-4 rounded-md data-[state=active]:bg-white data-[state=active]:text-[#EA2525]"
>
  For Recruiters
</TabsTrigger>

              {/* <TabsTrigger value="vacancies">View Vacancies</TabsTrigger> */}
              
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
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#EA2525] to-[#AA2526] bg-clip-text text-transparent">
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

      <SuccessStoriesCourses/>
     

      <ProgramForm/>

      <Footer />
    </div>
  );
};

export default Placement;
