import { useEffect, useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import shweta from "../components/assets/shweta.jpg";
import kumar from "../components/assets/Kumar.jpg";
import aleem from "../components/assets/Alim.jpg";
import Isha from "../components/assets/Isha Verma.jpeg";
import loveleen from "../components/assets/Loveleen.jpg";
import priya from "../components/assets/Priya.jpg";

const testimonials = [
  {
    name: "Shweta Verma",
    role: "SEO Analyst",
    company: " TechMinds Solutions",
    image: shweta,
    testimonial:
      "Joining iDigital Studies was the best decision for my career. The trainers didn't just teach theory; they made us work on live client projects. I had 3 interviews within a month of completing the course and got placed as an SEO Analyst with a great package. The placement team guided me through every step. Highly recommended!",
    course: "SEO Mastery",
  },
  // {
  //   name: "Rahul Patel",
  //   role: "Social Media Specialist",
  //   company: "Creative Agency",
  //   image: kumar,
  //   testimonial:
  //     "Amazing hands-on training with real projects. The placement support team helped me get interviews with top companies.",
  //   course: "Social Media Pro",
  // },
  {
    name: "Aleem Khan",
    role: "PPC Specialist",
    company: "E-Commerce Hub",
    image: aleem,
    testimonial:
      "The in-depth training on Google Ads and analytics was incredible. We managed real ad budgets and learned to optimize for ROI. This practical experience was exactly what employers wanted. I'm now a PPC specialist, all thanks to the expert guidance and strong placement support from iDigital Studies.",
    course: "Google Ads Expert",
  },
  {
    name: "Isha Verma",
    role: "Social Media Executive,",
    company: "BrandWave Media",
    image: Isha,
    testimonial:
      "As a complete beginner, I was nervous, but the faculty at iDigital Studies made everything so clear. The practical assignments on real brands built my confidence. Thanks to their dedicated placement cell, I landed my dream job in social media just weeks after my final exam. Thank you!",
    course: "Content Marketing Bootcamp",
  },
  // {
  //   name: "Priya Kumari",
  //   role: "Email Marketing Specialist",
  //   company: "MailerX",
  //   image: priya,
  //   testimonial:
  //     "I can now build high-converting campaigns and track ROI. Got promoted within 3 months!",
  //   course: "Email Marketing Pro",
  // },
  // {
  //   name: "Loveleen Sharma",
  //   role: "SEO Analyst",
  //   company: "Brandify",
  //   image: loveleen,
  //   testimonial:
  //     "The case studies and projects were game changers. I got real-world exposure before even joining a company.",
  //   course: "Advanced SEO",
  // },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // Responsive visible cards
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  // Next & Prev with modulo
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };
  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 3500);
    return () => clearInterval(interval);
  }, []);

  // Calculate shift
  const translateX = -(currentIndex * (100 / visibleCount));

  return (
    <section className="w-full py-24 bg-white overflow-hidden relative">
      <div className="mx-auto px-4 max-w-[1300px]">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl font-bold mb-4">Why iDigitalStudies is every student's choice for Digital Marketing?</h1>
          <h2 className="text-4xl mt-24 font-bold mb-4 bg-gradient-to-r from-[#EA2525] to-[#ff4d4d] bg-clip-text text-transparent">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our alumni who transformed their careers with our programs
          </p>
        </div>

        {/* Slider */}
        <div className="relative mx-auto max-w-[1300px]">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out gap-6"
              style={{ transform: `translateX(${translateX}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3"
                >
                  <Card className="transition-all duration-300 border border-gray-200 rounded-2xl hover:border-[#EA2525] bg-[#fafafa] h-full">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center space-x-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full object-cover border-2 border-[#EA2525]"
                        />
                        <div>
                          <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          <p className="text-xs text-[#EA2525] font-medium">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed italic">
                        “{testimonial.testimonial}”
                      </p>

                      <Badge
                        variant="secondary"
                        className="bg-[#ffe9e9] text-[#EA2525] hover:bg-[#ffdede] transition-colors duration-300"
                      >
                        {testimonial.course}
                      </Badge>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full border border-gray-300 hover:border-[#EA2525] transition-colors duration-200 z-10"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full border border-gray-300 hover:border-[#EA2525] transition-colors duration-200 z-10"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
