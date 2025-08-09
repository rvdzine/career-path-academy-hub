import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MSMELogo from "./assets/MSME_logo.jpg";
import NSDCLogo from "./assets/logo_nsdc.svg";
import SkillsNSDC from "./assets/skills_nsdc.svg";
import { Award, Shield, CheckCircle, Star } from "lucide-react";

const CertificationSection = () => {
  const certifications = [
    {
      name: "MSME Registered",
      description: "Registered under Ministry of Micro, Small & Medium Enterprises",
      icon: Shield,
      color: "from-blue-500 to-blue-600",
      badge: "Government Recognized",
      image: MSMELogo, 
    },
    {
      name: "Skill India (NSDC)",
      description: "Affiliated with National Skill Development Corporation",
      icon: Award,
      color: "from-green-500 to-green-600",
      badge: "NSDC Partner",
       image: NSDCLogo,
       
    },
  ];

  const trustIndicators = [
    { icon: CheckCircle, text: "Government Recognized Training" },
    { icon: Award, text: "Industry Standard Certification" },
    { icon: Shield, text: "Quality Assured Programs" },
    { icon: Star, text: "Nationally Accepted Credentials" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Government Recognized Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Our programs are affiliated with leading government bodies, ensuring you receive
            industry-recognized certifications that boost your career prospects.
          </p>
        </div>

        {/* Main Certification Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-3 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  {/* Optional Image */}
                  {cert.image && (
                    <img
                      src={cert.image}
                      alt={`${cert.name} logo`}
                      className="w-16 h-16 object-contain rounded-xl shadow-md"
                    />
                  )}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {cert.name}
                      </h3>
                      <Badge
                        className={`bg-gradient-to-r ${cert.color} text-white border-0 hover:scale-105 transition-transform duration-300`}
                      >
                        {cert.badge}
                      </Badge>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">{cert.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in-up [animation-delay:0.4s]">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Why Choose Our Certified Programs?
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustIndicators.map((indicator, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group hover:transform hover:scale-110 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-green-100 rounded-full flex items-center justify-center mb-3 group-hover:shadow-lg transition-shadow duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-200 group-hover:to-green-200">
                  <indicator.icon className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                </div>
                <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  {indicator.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-in-up [animation-delay:0.6s]">
          <p className="text-lg text-gray-600 mb-4">
            Join thousands of professionals who have advanced their careers with our certified programs
          </p>
          {/* <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1 hover:text-green-600 transition-colors duration-300">
              <CheckCircle className="w-4 h-4 text-green-500" />
              MSME Registration: UDYAM-UP-27-0123456
            </span>
            <span className="flex items-center gap-1 hover:text-green-600 transition-colors duration-300">
              <CheckCircle className="w-4 h-4 text-green-500" />
              NSDC Partner ID: NSDC/2024/DM/001
            </span>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
