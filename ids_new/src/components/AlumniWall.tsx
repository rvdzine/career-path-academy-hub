"use client";

import Image from "next/image";
import { Quote } from "lucide-react";

export default function AlumniWall() {
  const testimonials = [
    {
      name: "Isha Verma",
      role: "Performance Marketing Executive",
      company: "Nykaa",
      photo: "/assets/Isha Verma.jpeg",
      testimonial:
        "The live ad campaigns and mentor audits at IDS helped me master Meta Ads and GA4. Landed a performance marketing role at Nykaa right after graduation!",
    },
    {
      name: "Shweta Verma",
      role: "SEO Analyst",
      company: "TCS",
      photo: "/assets/shweta.jpg",
      testimonial:
        "The trainers didn't just teach theory; we audited real corporate sites and fixed live indexing issues. Cracked 3 interviews and chose TCS!",
    },
    {
      name: "Aleem Khan",
      role: "PPC & Paid Search Specialist",
      company: "Zomato",
      photo: "/assets/Alim.jpg",
      testimonial:
        "Managing real ad budgets during my course was the turning point. I learned how to drive down CPA and scale ROAS like an industry pro.",
    },
    {
      name: "Loveleen Sharma",
      role: "Social Media & Growth Lead",
      company: "Paytm",
      photo: "/assets/Loveleen.jpg",
      testimonial:
        "From learning viral storytelling to building high-converting brand funnels, IDS gave me the end-to-end practical skills required at Paytm.",
    },
    {
      name: "Divya Chaudhary",
      role: "Content & Brand Strategist",
      company: "Meesho",
      photo: "/assets/Priya.jpg",
      testimonial:
        "The faculty helped me transition from a beginner to an industry-ready marketer. The dedicated placement team guided me through each interview round.",
    },
    {
      name: "Gaurav Singh",
      role: "Digital Marketing Specialist",
      company: "Razorpay",
      photo: "/assets/Kumar.jpg",
      testimonial:
        "Hands-on projects with AI tools and automation separated IDS from every other institute. It was the best investment for my professional career.",
    },
  ];

  return (
    <section id="alumni" className="py-16 md:py-24 bg-white font-sans relative overflow-hidden border-t border-slate-100">
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-3">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight">
            Meet Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fe4759] to-[#d02e40]">
              Alumni
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Discover the stories of our students who transformed their skills and secured roles at leading organizations.
          </p>
        </div>

        {/* Clean, Un-congested 3-Column Grid using the Original Card Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-6xl mx-auto items-stretch">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[28px] border border-slate-200/80 hover:border-[#fe4759]/40 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-xl hover:shadow-rose-500/[0.06] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Top Brand Rose Banner */}
                <div className="h-20 sm:h-22 w-full bg-gradient-to-r from-[#FFF0F2] via-[#FFF5F6] to-[#FFEBEF] p-4 flex items-start justify-end relative">
                  <Quote className="w-5 h-5 text-rose-300/80 fill-rose-300/30" />
                </div>

                {/* Overlapping Rounded Photo Container */}
                <div className="relative -mt-9 sm:-mt-10 ml-5 sm:ml-6">
                  <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-[20px] overflow-hidden border-2 border-white ring-2 ring-rose-200/70 shadow-md bg-white relative">
                    <Image
                      src={item.photo}
                      alt={item.name}
                      fill
                      sizes="80px"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Graduate Info & Main Testimonial Content Only */}
                <div className="px-5 sm:px-6 pt-3.5 pb-6">
                  <h3 className="text-base sm:text-[17px] font-extrabold text-slate-900 tracking-tight leading-snug group-hover:text-[#fe4759] transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-xs font-semibold text-[#fe4759] mt-0.5">
                    {item.role} • {item.company}
                  </p>

                  {/* Main Testimonial Content */}
                  <p className="text-slate-600 text-xs sm:text-[13.5px] leading-relaxed mt-3.5 font-normal italic">
                    &ldquo;{item.testimonial}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
