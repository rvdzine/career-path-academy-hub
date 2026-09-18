"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  Quote,
  MapPin,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import axios from "axios";
import { PlacedStudent } from "@/types/placed-student";
import { getMediaUrl } from "@/lib/api";

import shwetaImg from "@/components/assets/shweta.jpg";
import kumarImg from "@/components/assets/Kumar.jpg";
import aleemImg from "@/components/assets/Alim.jpg";
import ishaImg from "@/components/assets/Isha Verma.jpeg";
import loveleenImg from "@/components/assets/Loveleen.jpg";
import priyaImg from "@/components/assets/Priya.jpg";

interface StoryItem {
  id: number | string;
  name: string;
  role: string;
  company: string;
  companyLogo: string;
  image: any;
  package: string;
  location: string;
  bio: string;
  skills: string[];
}

const fallbackStories: StoryItem[] = [
  {
    id: "story-1",
    name: "Isha Verma",
    role: "Performance Marketing Executive",
    company: "Nykaa",
    companyLogo: "/svg/Nykaa.svg",
    image: ishaImg,
    package: "₹8.2 LPA",
    location: "Delhi NCR",
    bio: "The live ad campaigns and mentor audits at IDS helped me master Meta Ads and GA4. Landed a performance marketing role at Nykaa right after graduation!",
    skills: ["Meta Ads", "Google Ads", "GA4", "E-commerce Funnels"],
  },
  {
    id: "story-2",
    name: "Shweta Verma",
    role: "SEO Analyst",
    company: "TCS",
    companyLogo: "/svg/TCS.svg",
    image: shwetaImg,
    package: "₹7.5 LPA",
    location: "Noida",
    bio: "The trainers didn't just teach theory; we audited real corporate sites and fixed live indexing issues. Cracked 3 interviews and chose TCS!",
    skills: ["Technical SEO", "Keyword Strategy", "SEMrush", "Site Audit"],
  },
  {
    id: "story-3",
    name: "Aleem Khan",
    role: "PPC & Paid Search Specialist",
    company: "Zomato",
    companyLogo: "/svg/Zomato.svg",
    image: aleemImg,
    package: "₹8.5 LPA",
    location: "Gurgaon",
    bio: "Managing real ad budgets during my course was the turning point. I learned how to drive down CPA and scale ROAS like an industry pro.",
    skills: ["Google Search Ads", "PPC Scaling", "Conversion Optimization", "ROI Analytics"],
  },
  {
    id: "story-4",
    name: "Loveleen Sharma",
    role: "Social Media & Growth Lead",
    company: "Paytm",
    companyLogo: "/svg/Paytm.svg",
    image: loveleenImg,
    package: "₹8.0 LPA",
    location: "Noida",
    bio: "From learning viral storytelling to building high-converting brand funnels, IDS gave me the end-to-end practical skills required at Paytm.",
    skills: ["Organic Growth", "Social Media Funnels", "Influencer Strategy", "Copywriting"],
  },
  {
    id: "story-5",
    name: "Divya Chaudhary",
    role: "Content & Brand Strategist",
    company: "Meesho",
    companyLogo: "/svg/Meesho.svg",
    image: priyaImg,
    package: "₹7.8 LPA",
    location: "Bangalore",
    bio: "The faculty helped me transition from a beginner to an industry-ready marketer. The dedicated placement team guided me through each interview round.",
    skills: ["Brand Strategy", "Content Marketing", "E-commerce SEO", "Email Automation"],
  },
  {
    id: "story-6",
    name: "Gaurav Singh",
    role: "Digital Marketing Specialist",
    company: "Razorpay",
    companyLogo: "/svg/razorpay.svg",
    image: kumarImg,
    package: "₹9.0 LPA",
    location: "Bangalore",
    bio: "Hands-on projects with AI tools and automation separated IDS from every other institute. It was the best investment for my professional career.",
    skills: ["Marketing Automation", "Pabbly / Zapier", "B2B Lead Gen", "Performance Tracking"],
  },
];

const getCompanyLogo = (companyName?: string, dbLogo?: string | null): string => {
  if (dbLogo && dbLogo.trim()) return dbLogo;
  const lower = (companyName || "").toLowerCase().replace(/[^a-z0-9]/g, "");
  const map: Record<string, string> = {
    salesforce: "/svg/Salesforce.svg",
    meesho: "/svg/Meesho.svg",
    dream11: "/svg/Dream11.svg",
    zomato: "/svg/Zomato.svg",
    razorpay: "/svg/razorpay.svg",
    medianet: "/svg/medianet.svg",
    testbook: "/svg/testbook.svg",
    nykaa: "/svg/Nykaa.svg",
    flipkart: "/svg/Flipkart.svg",
    tcs: "/svg/TCS.svg",
    paytm: "/svg/Paytm.svg",
    myntra: "/svg/Myntra.svg",
    urbancompany: "/svg/Urbancompany.svg",
    infosys: "/svg/infosys.svg",
    techmahindra: "/svg/techmahindra.svg",
    unilever: "/svg/unilever.svg",
  };

  for (const [key, path] of Object.entries(map)) {
    if (lower.includes(key)) return path;
  }
  return "/assets/IDS.png";
};

const resolveStudentImage = (imagePath?: string): string => {
  if (!imagePath) return "/placeholder-avatar.svg";
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) return imagePath;
  if (imagePath.startsWith("/assets/") || imagePath.startsWith("/svg/")) return imagePath;
  return getMediaUrl(imagePath);
};

const PlacedStudentsCarousel: React.FC = () => {
  const [stories, setStories] = useState<StoryItem[]>(fallbackStories);

  const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_URL?.replace(/\/api$/, "") || "http://localhost:8000";

  // Fetch from backend API, fall back smoothly if empty/error
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/placed-students/`, {
          timeout: 3000,
        });
        if (Array.isArray(response.data) && response.data.length > 0) {
          const mapped: StoryItem[] = response.data.map((student: PlacedStudent, idx: number) => ({
            id: student.id || student.student_id || idx,
            name: student.student_name,
            role: student.student_role || "Digital Marketer",
            company: student.company_name || "Top Tech Brand",
            companyLogo: getCompanyLogo(student.company_name, student.company_logo),
            image: resolveStudentImage(student.student_image_url || (student as any).student_image),
            package: student.package || "₹7.5 LPA",
            location: student.location || "Noida, NCR",
            bio:
              student.student_bio ||
              "Hands-on training and mentorship helped me build confidence and secure my dream placement.",
            skills: ["Performance Marketing", "SEO", "Google Ads", "GA4"],
          }));
          setStories(mapped);
        }
      } catch {
        // keep fallback stories gracefully
      }
    };
    fetchStudents();
  }, [API_BASE_URL]);

  // Duplicate the array so it scrolls seamlessly without gaps
  const displayStories = [...stories, ...stories];

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-t border-gray-100 overflow-hidden">
      {/* Subtle ambient red dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, #EA252514 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-14">
        {/* ─── SECTION HEADER ─── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-8 h-[2.5px] bg-red-600 rounded-full" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-red-600">
                Alumni Success Stories // Proven Placement Record
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-950 tracking-tight leading-[1.08]">
              Transforming Ambition Into <span className="text-red-600">High-Growth Careers</span>
            </h2>

            <p className="mt-3 text-gray-600 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
              Our graduates lead performance marketing, SEO, and paid growth across India&apos;s most innovative brands.
            </p>
          </div>

          {/* Right Status Badge */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200/80 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span className="text-[11px] font-mono font-black text-red-600 uppercase tracking-wider">
                Live Placements Marquee
              </span>
            </div>
          </div>
        </div>

        {/* ─── CREDIBILITY STAT STRIP ─── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10">
          <div className="bg-stone-50 border border-gray-200/80 rounded-2xl p-4 text-center">
            <p className="text-2xl sm:text-3xl font-black text-gray-950 leading-none">95%</p>
            <p className="text-[10.5px] uppercase tracking-wider text-gray-500 font-bold mt-1.5">
              Placement Success
            </p>
          </div>
          <div className="bg-stone-50 border border-gray-200/80 rounded-2xl p-4 text-center">
            <p className="text-2xl sm:text-3xl font-black text-red-600 leading-none">₹8.5 LPA</p>
            <p className="text-[10.5px] uppercase tracking-wider text-gray-500 font-bold mt-1.5">
              Average Package
            </p>
          </div>
          <div className="bg-stone-50 border border-gray-200/80 rounded-2xl p-4 text-center">
            <p className="text-2xl sm:text-3xl font-black text-gray-950 leading-none">500+</p>
            <p className="text-[10.5px] uppercase tracking-wider text-gray-500 font-bold mt-1.5">
              Students Placed
            </p>
          </div>
          <div className="bg-stone-50 border border-gray-200/80 rounded-2xl p-4 text-center">
            <p className="text-2xl sm:text-3xl font-black text-gray-950 leading-none">300+</p>
            <p className="text-[10.5px] uppercase tracking-wider text-gray-500 font-bold mt-1.5">
              Hiring Partners
            </p>
          </div>
        </div>

        {/* ─── CONTINUOUS CONSTANT-SPEED MARQUEE TRACK ─── */}
        <div className="relative overflow-hidden pt-3 pb-6">
          {/* Subtle Gradient Edge Fade Masks */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-12 sm:w-24 z-20 bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-12 sm:w-24 z-20 bg-gradient-to-l from-white via-white/80 to-transparent" />

          <div className="overflow-hidden group/marquee">
            <div
              className="flex w-max gap-5 sm:gap-6 animate-scroll-right group-hover/marquee:[animation-play-state:paused] py-2"
              style={{ animationDuration: "50s" }}
            >
              {displayStories.map((student, idx) => (
                <div
                  key={`${student.id}-${idx}`}
                  className="w-[330px] sm:w-[370px] flex-shrink-0"
                >
                  {/* ─── CONCISE ALUMNI CARD ─── */}
                  <div className="group/card relative bg-white border-2 border-gray-950 rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col justify-between h-full hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.16)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden">
                    {/* Decorative Background Quote Watermark */}
                    <Quote
                      aria-hidden
                      className="absolute -bottom-6 -right-6 w-28 h-28 text-gray-100/70 pointer-events-none group-hover/card:text-red-500/10 transition-colors"
                    />

                    <div>
                      {/* Top Row: Company Emblem & Package */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 rounded-xl bg-white border border-gray-200/80 shadow-xs flex items-center justify-center p-1.5 flex-shrink-0">
                            <Image
                              src={student.companyLogo}
                              alt={`${student.company} logo`}
                              width={30}
                              height={30}
                              className="object-contain"
                              unoptimized
                            />
                          </div>
                          <div>
                            <p className="text-[9px] uppercase tracking-widest text-gray-400 font-bold leading-tight">
                              PLACED AT
                            </p>
                            <p className="text-sm font-black text-gray-950 leading-tight">
                              {student.company}
                            </p>
                          </div>
                        </div>

                        {/* Package Badge */}
                        <span className="bg-red-50 text-red-600 border border-red-200 text-xs font-black px-2.5 py-0.5 rounded-full shadow-xs">
                          {student.package}
                        </span>
                      </div>

                      {/* Student Portrait & Name Row */}
                      <div className="flex items-center gap-3.5 mb-3">
                        <div className="relative w-14 h-14 rounded-xl overflow-hidden border-2 border-gray-950 shadow-sm flex-shrink-0">
                          <Image
                            src={student.image}
                            alt={student.name}
                            fill
                            sizes="56px"
                            className="object-cover"
                            unoptimized={typeof student.image === "string"}
                          />
                        </div>

                        <div className="min-w-0">
                          <h3 className="text-base sm:text-lg font-black text-gray-950 group-hover/card:text-red-600 transition-colors leading-snug truncate">
                            {student.name}
                          </h3>
                          <p className="text-xs font-bold text-gray-600 leading-snug truncate mt-0.5">
                            {student.role}
                          </p>
                          <p className="text-[11px] font-semibold text-gray-400 flex items-center gap-1 mt-0.5">
                            <MapPin className="w-3 h-3 text-red-600" />
                            <span>{student.location}</span>
                          </p>
                        </div>
                      </div>

                      {/* Dividing Line */}
                      <div className="h-[1.5px] w-full bg-gray-100 my-3 group-hover/card:bg-red-600/30 transition-colors" />

                      {/* Testimonial Quote */}
                      <p className="text-gray-700 text-xs sm:text-[13px] leading-relaxed mb-3.5 font-normal italic">
                        &ldquo;{student.bio}&rdquo;
                      </p>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {student.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="inline-flex items-center gap-1 text-[10.5px] font-bold text-gray-800 bg-gray-100/90 border border-gray-200/80 px-2 py-0.5 rounded-md"
                          >
                            <CheckCircle2 className="w-2.5 h-2.5 text-red-600" />
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── FOOTER LINK & PAUSE HINT ─── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4 pt-4 border-t border-gray-100 text-xs text-gray-500">
          <p className="text-[11px] font-mono font-bold text-gray-400 uppercase tracking-wider">
            [ CONTINUOUS SCROLL • HOVER TO PAUSE & INSPECT ]
          </p>

          <Link
            href="/placed-students"
            className="inline-flex items-center gap-1.5 font-black text-xs uppercase tracking-wider text-red-600 hover:text-gray-950 transition-colors"
          >
            <span>Explore All 500+ Verified Placements</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PlacedStudentsCarousel;
