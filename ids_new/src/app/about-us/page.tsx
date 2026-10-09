"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  TrendingUp,
  Building,
  Ribbon,
  MapPin,
  Users,
  Globe,
  Star,
  CheckCircle2,
  Trophy,
  Send,
  Sparkles,
  Target,
  BookOpen,
  Compass,
  Rocket,
  Check,
  ShieldCheck,
  Clock,
  Laptop,
  Headphones,
} from "lucide-react";

const galleryImages = [
  "/assets/gallery1.webp",
  "/assets/gallery2.webp",
  "/assets/gallery3.webp",
  "/assets/gallery4.webp",
  "/assets/gallery5.webp",
  "/assets/gallery6.webp",
  "/assets/gallery7.jpg",
  "/assets/gallery8.jpg",
  "/assets/gallery10.jpg",
  "/assets/gallery11.jpg",
  "/assets/gallery12.jpg",
  "/assets/gallery16.jpg",
];

const statCards = [
  {
    icon: Building,
    title: "Headquarters",
    subtitle: "Greater Noida, India",
  },
  {
    icon: Ribbon,
    title: "Established",
    subtitle: "Pioneering Digital Education Since 2015",
  },
  {
    icon: MapPin,
    title: "National Reach",
    subtitle: "Learners Across 20+ Major Cities",
  },
  {
    icon: Users,
    title: "Alumni Impact",
    subtitle: "10,000+ Careers Transformed",
  },
  {
    icon: Globe,
    title: "Industry Network",
    subtitle: "300+ Active Hiring & Corporate Allies",
  },
  {
    icon: Star,
    title: "Trust Score",
    subtitle: "4.9/5 Rating by Verified Graduates",
    isStar: true,
  },
];

const coreValues = [
  {
    step: "01",
    badge: "Excellence",
    title: "Quality Education",
    description:
      "We believe in providing industry-relevant, practical education that prepares students for real-world challenges through hands-on project execution.",
    icon: BookOpen,
    highlight: "Real-world project execution",
  },
  {
    step: "02",
    badge: "Outcomes",
    title: "Career Success",
    description:
      "Our primary goal is to ensure every student achieves their career objectives through our comprehensive support system and placement guidance.",
    icon: Target,
    highlight: "Dedicated placement guidance",
  },
  {
    step: "03",
    badge: "Network",
    title: "Industry Connection",
    description:
      "We maintain strong relationships with leading corporate partners to provide the best hiring opportunities and live case studies for our students.",
    icon: Users,
    highlight: "300+ Corporate partners",
  },
  {
    step: "04",
    badge: "Innovation",
    title: "Continuous Learning",
    description:
      "We stay updated with the latest digital marketing and tech trends, continuously refreshing our curriculum to ensure our learners stay ahead.",
    icon: TrendingUp,
    highlight: "Constantly updated syllabus",
  },
];



function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export default function AboutUsPage() {
  const [activeStoryTab, setActiveStoryTab] = useState<"mission" | "story">("mission");
  const [galleryStep, setGalleryStep] = useState(0);
  const [activeGlowCard, setActiveGlowCard] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setGalleryStep((prev) => (prev + 1) % galleryImages.length);
    }, 1100);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveGlowCard((prev) => (prev + 1) % statCards.length);
    }, 1300);
    return () => clearInterval(timer);
  }, []);

  const card1Index = galleryStep;
  const card2Index = (galleryStep + 4) % galleryImages.length;
  const card3Index = (galleryStep + 8) % galleryImages.length;

  const alumniCompanies = [
    {
      name: "Physics Wallah",
      logo: (
        <Image
          src="/mentors/pw.png"
          alt="Physics Wallah"
          width={90}
          height={32}
          className="object-contain max-h-7 max-w-[85px] w-auto"
        />
      ),
    },
    {
      name: "TCS",
      logo: (
        <Image
          src="/assets/TCS.svg"
          alt="TCS"
          width={80}
          height={28}
          className="object-contain max-h-7 max-w-[75px] w-auto"
        />
      ),
    },
    {
      name: "Zomato",
      logo: (
        <Image
          src="/svg/Zomato.svg"
          alt="Zomato"
          width={80}
          height={30}
          className="object-contain max-h-8 max-w-[80px] w-auto"
        />
      ),
    },
    {
      name: "Nykaa",
      logo: (
        <Image
          src="/svg/Nykaa.svg"
          alt="Nykaa"
          width={80}
          height={28}
          className="object-contain max-h-7 max-w-[75px] w-auto"
        />
      ),
    },
    {
      name: "Paytm",
      logo: (
        <Image
          src="/svg/Paytm.svg"
          alt="Paytm"
          width={80}
          height={28}
          className="object-contain max-h-7 max-w-[75px] w-auto"
        />
      ),
    },
    {
      name: "Urban Company",
      logo: (
        <Image
          src="/svg/Urbancompany.svg"
          alt="Urban Company"
          width={85}
          height={28}
          className="object-contain max-h-7 max-w-[80px] w-auto"
        />
      ),
    },
    {
      name: "Meesho",
      logo: (
        <Image
          src="/svg/Meesho.svg"
          alt="Meesho"
          width={85}
          height={28}
          className="object-contain max-h-7 max-w-[80px] w-auto"
        />
      ),
    },
    {
      name: "Razorpay",
      logo: (
        <Image
          src="/svg/razorpay.svg"
          alt="Razorpay"
          width={85}
          height={28}
          className="object-contain max-h-7 max-w-[80px] w-auto"
        />
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-rose-100 selection:text-[#fe4759]">
      {/* ─── GLOBAL SITE NAVBAR ─── */}
      <Navbar />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 1: HERO SECTION (The Story Behind IDS)
          ══════════════════════════════════════════════════════════════ */}
      <section className="relative pt-10 sm:pt-14 lg:pt-16 pb-16 lg:pb-20 bg-gradient-to-b from-[#FFF5F6] via-[#FFF9FA] to-white overflow-hidden">
        {/* Subtle Ambient Red Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#fe4759]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#fe4759]/4 rounded-full blur-2xl pointer-events-none"></div>

        <div className="max-w-[1360px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left: Text & CTA */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Badge: WELCOME */}
              <div className="inline-block">
                <span className="text-xs sm:text-sm font-black text-[#fe4759] tracking-[0.2em] uppercase">
                  WELCOME
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] font-black text-[#0B132A] leading-tight tracking-tight">
                The Story Behind <span className="text-[#fe4759]">iDigitalStudies</span>
              </h1>

              {/* Mission Description (Grounded, realistic & authentic) */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                Founded with a clear mission to bridge the gap between academic education and real-world employability, iDigitalStudies empowers ambitious learners with practical, project-based training, expert mentorship, and dedicated career guidance.
              </p>

              {/* CTA Buttons */}
              <div className="flex items-center gap-4 pt-2 flex-wrap">
                <Link
                  href="/#programs"
                  className="px-7 py-3.5 bg-[#fe4759] hover:bg-[#e0384a] text-white font-bold text-sm sm:text-base rounded-xl transition-all shadow-md shadow-[#fe4759]/25 hover:shadow-lg hover:-translate-y-0.5"
                >
                  Explore Programs
                </Link>
                <a
                  href="https://wa.me/919315471293"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 bg-white hover:bg-rose-50/60 text-[#fe4759] font-bold text-sm sm:text-base rounded-xl border border-[#fe4759] transition-all hover:-translate-y-0.5 shadow-2xs"
                >
                  Contact Us
                </a>
              </div>

            </div>

            {/* Right: Dynamic Auto-Changing Gallery Mosaic (3 Distinct Cards Cycling Every ~1s) */}
            <div className="lg:col-span-6">
              <div className="max-w-[520px] w-full mx-auto space-y-4">
                
                {/* Top Row: Two Square Cards Side by Side */}
                <div className="grid grid-cols-2 gap-4">
                  
                  {/* Card 1: Dynamic Campus & Classroom Gallery */}
                  <div className="relative rounded-[28px] overflow-hidden aspect-square shadow-xl shadow-slate-200/60 border border-slate-100 bg-slate-100 group">
                    {galleryImages.map((img, i) => (
                      <div
                        key={`c1-${img}`}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                          i === card1Index ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                        }`}
                      >
                        <Image
                          src={img}
                          alt="IDS Campus & Training"
                          fill
                          sizes="(max-width: 768px) 50vw, 260px"
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          priority={i === 0}
                          unoptimized
                        />
                      </div>
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20 pointer-events-none" />
                    <div className="absolute bottom-3 left-3.5 right-3.5 z-30">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[11px] font-bold tracking-tight shadow-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#fe4759] animate-pulse" />
                        Classroom &amp; Labs
                      </span>
                    </div>
                  </div>

                  {/* Card 2: Dynamic Team & Projects Gallery */}
                  <div className="relative rounded-[28px] overflow-hidden aspect-square shadow-xl shadow-slate-200/60 border border-slate-100 bg-slate-100 group">
                    {galleryImages.map((img, i) => (
                      <div
                        key={`c2-${img}`}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                          i === card2Index ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                        }`}
                      >
                        <Image
                          src={img}
                          alt="IDS Student Collaboration"
                          fill
                          sizes="(max-width: 768px) 50vw, 260px"
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          priority={i === 4}
                          unoptimized
                        />
                      </div>
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20 pointer-events-none" />
                    <div className="absolute bottom-3 left-3.5 right-3.5 z-30">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[11px] font-bold tracking-tight shadow-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#fe4759] animate-pulse" />
                        Live Workshops
                      </span>
                    </div>
                  </div>

                </div>

                {/* Bottom Row: Wide Card */}
                <div className="relative rounded-[28px] overflow-hidden h-[160px] sm:h-[175px] shadow-xl shadow-slate-200/60 border border-slate-100 bg-slate-100 group">
                  {galleryImages.map((img, i) => (
                    <div
                      key={`c3-${img}`}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        i === card3Index ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                      }`}
                    >
                      <Image
                        src={img}
                        alt="IDS Learning Environment"
                        fill
                        sizes="(max-width: 768px) 100vw, 520px"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        priority={i === 8}
                        unoptimized
                      />
                    </div>
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent z-20 pointer-events-none" />
                  <div className="absolute bottom-4 left-5 right-5 z-30 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold tracking-tight shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#fe4759] animate-pulse" />
                      Life at iDigitalStudies • Practical Project Training
                    </span>
                    <span className="hidden sm:inline-block text-[11px] font-semibold text-white/80">
                      iDigitalStudies Campus
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Bottom Partner Logos (Razorpay, GyanDhan, KPMG, Amazon, Google, Airtel) */}
          <div className="mt-14 pt-8 border-t border-slate-200/60">
            <div className="flex items-center justify-between gap-6 flex-wrap opacity-75 hover:opacity-100 transition-opacity">
              {/* Razorpay */}
              <div className="flex items-center gap-1 text-slate-700 font-bold text-lg">
                <span className="italic font-black text-xl text-[#fe4759]">/</span>Razorpay
              </div>
              {/* GyanDhan */}
              <div className="flex items-center gap-1 text-slate-600 font-semibold text-xs tracking-wider">
                <span className="w-5 h-5 rounded-full border border-slate-400 flex items-center justify-center text-[10px] font-bold">
                  GD
                </span>
                GyanDhan
              </div>
              {/* KPMG */}
              <div className="font-sans font-black text-xl text-slate-800 tracking-wider">
                KPMG
              </div>
              {/* Amazon */}
              <div className="font-sans font-bold text-lg text-slate-800 tracking-tight">
                amazon
              </div>
              {/* Google */}
              <div className="font-sans font-bold text-lg tracking-tight flex">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </div>
              {/* Airtel */}
              <div className="flex items-center gap-1 font-bold text-slate-800 text-lg">
                <span className="text-red-600 font-black">airtel</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 2: MISSION & KEY MILESTONES
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white relative">
        <div className="max-w-[1360px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Big Card: Affordable World-Class Education (In Brand Red Theme) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#FF4D63] via-[#FE324E] to-[#E0243E] rounded-[36px] p-8 sm:p-10 text-white shadow-xl shadow-[#fe4759]/25 flex flex-col justify-between">
              <div>
                
                {/* Top Toggle Tabs */}
                <div className="flex items-center gap-2 mb-6">
                  <button
                    onClick={() => setActiveStoryTab("mission")}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                      activeStoryTab === "mission"
                        ? "bg-white text-[#fe4759] shadow-xs"
                        : "bg-white/15 text-white hover:bg-white/25"
                    }`}
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>MISSION</span>
                  </button>
                  <button
                    onClick={() => setActiveStoryTab("story")}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                      activeStoryTab === "story"
                        ? "bg-white text-[#fe4759] shadow-xs"
                        : "bg-white/15 text-white hover:bg-white/25"
                    }`}
                  >
                    <span>◎</span>
                    <span>OUR STORY</span>
                  </button>
                </div>

                {/* Sub-badge: Empowering Professionals */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold mb-6">
                  <Trophy className="w-3.5 h-3.5" />
                  <span>Empowering Professionals</span>
                </div>

                {/* Main Headline */}
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-white leading-[1.1] tracking-tight mb-5">
                  Affordable <br />
                  World-Class <br />
                  Education
                </h2>

                {/* Description */}
                <p className="text-white/95 text-sm leading-relaxed mb-6 font-normal">
                  Our mission is to provide World Class Education at affordable pricing through our live
                  online and self-paced learning programs. We are continuously working hard to identify
                  various skill development courses that are in demand.
                </p>

                {/* 4 Checkmark Bullets */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-white/95">
                    <CheckCircle2 className="w-4 h-4 text-white stroke-[2.5]" />
                    <span>Live Online Coaching</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-white/95">
                    <CheckCircle2 className="w-4 h-4 text-white stroke-[2.5]" />
                    <span>Industry Curriculum</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-white/95">
                    <CheckCircle2 className="w-4 h-4 text-white stroke-[2.5]" />
                    <span>Practical Skill Focus</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-white/95">
                    <CheckCircle2 className="w-4 h-4 text-white stroke-[2.5]" />
                    <span>24/7 Support</span>
                  </div>
                </div>

              </div>

              {/* Bottom Button */}
              <Link
                href="/#programs"
                className="w-full py-3.5 px-6 rounded-2xl bg-white hover:bg-slate-50 text-[#fe4759] font-bold text-sm text-center transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>View Our Courses</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>

            </div>

            {/* Right Side 2x3 Grid of 6 Brand-Themed Cards with Sequential Red Glow Animation (7 Cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {statCards.map((card, idx) => {
                const Icon = card.icon;
                const isActive = activeGlowCard === idx;
                return (
                  <div
                    key={card.title}
                    className={`relative bg-white rounded-[26px] p-6 border transition-all duration-500 overflow-hidden flex flex-col justify-between group cursor-default ${
                      isActive
                        ? "border-[#fe4759] shadow-[0_10px_35px_rgba(254,71,89,0.2)] -translate-y-1.5 ring-2 ring-[#fe4759]/25"
                        : "border-slate-200/80 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:border-[#fe4759]/40 hover:shadow-xl hover:shadow-rose-500/[0.06] hover:-translate-y-1"
                    }`}
                  >
                    {/* Ambient Corner Glow */}
                    <div
                      className={`absolute top-0 right-0 w-24 h-24 rounded-bl-3xl pointer-events-none transition-all duration-500 ${
                        isActive
                          ? "bg-gradient-to-bl from-rose-200/70 via-rose-100/40 to-transparent scale-125"
                          : "bg-gradient-to-bl from-rose-50 via-rose-50/40 to-transparent group-hover:scale-110"
                      }`}
                    />

                    {/* Top Icon Badge */}
                    <div
                      className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-5 transition-all duration-500 shadow-2xs ${
                        isActive
                          ? "bg-[#fe4759] text-white border-[#fe4759] scale-110 shadow-lg shadow-[#fe4759]/35"
                          : "bg-rose-50 text-[#fe4759] border-rose-100/80 group-hover:bg-[#fe4759] group-hover:text-white group-hover:scale-105"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 stroke-[2.2] ${
                          card.isStar && !isActive
                            ? "fill-[#fe4759]/20"
                            : card.isStar
                            ? "fill-white/30"
                            : ""
                        }`}
                      />
                    </div>

                    {/* Bottom Title and Subtitle */}
                    <div>
                      <div
                        className={`text-base sm:text-lg font-black tracking-tight transition-all duration-500 origin-left flex items-center gap-2 ${
                          isActive
                            ? "text-[#fe4759] drop-shadow-[0_0_14px_rgba(254,71,89,0.85)] scale-[1.03]"
                            : "text-slate-900 group-hover:text-[#fe4759]"
                        }`}
                      >
                        <span>{card.title}</span>
                        <span
                          className={`inline-block w-2 h-2 rounded-full bg-[#fe4759] shadow-[0_0_8px_#fe4759] transition-all duration-500 ${
                            isActive ? "opacity-100 scale-100 animate-pulse" : "opacity-0 scale-50"
                          }`}
                        />
                      </div>
                      <div className="text-xs sm:text-[13px] text-slate-500 font-medium mt-1">
                        {card.subtitle}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 3: THE FOUNDER'S PHILOSOPHY
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FFF9FA] relative overflow-hidden">
        {/* Giant Watermark Background Text: "VISION" */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
          <span className="text-[120px] sm:text-[180px] lg:text-[240px] font-black text-rose-950/[0.03] tracking-widest uppercase">
            VISION
          </span>
        </div>

        {/* Faint Red Dot Matrix Background */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none z-0"
          style={{
            backgroundImage: "radial-gradient(#fe4759 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px",
          }}
        ></div>

        <div className="max-w-[1360px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left: Founder's Asymmetrical Photo Card */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
                
                {/* Thin Red Outline Frame Behind Photo */}
                <div className="absolute -top-3 -right-3 w-full h-full rounded-tr-[54px] rounded-bl-[54px] rounded-tl-3xl rounded-br-3xl border-2 border-[#fe4759]/30 pointer-events-none"></div>

                {/* Main Photo Container */}
                <div className="relative w-full aspect-[4/5] rounded-tr-[54px] rounded-bl-[54px] rounded-tl-3xl rounded-br-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                  <Image
                    src="/assets/Arjun.jpg"
                    alt="Abhishek Kumar, Founder & Director"
                    fill
                    sizes="(max-width: 768px) 380px, 420px"
                    className="object-cover object-top"
                  />
                </div>

                {/* Top-Left Floating Badge: PRACTICAL EXCELLENCE */}
                <div className="absolute -top-5 -left-4 sm:-left-6 bg-white rounded-2xl p-3 sm:p-3.5 shadow-xl border border-slate-100 max-w-[200px] z-20">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#fe4759] uppercase tracking-wider mb-0.5">
                    <div className="w-5 h-5 rounded-lg bg-rose-50 text-[#fe4759] flex items-center justify-center">
                      <TrendingUp className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span>PRACTICAL EXCELLENCE</span>
                  </div>
                  <p className="text-[11px] font-bold text-slate-700 leading-tight">
                    Empowering ambitious careers with real projects.
                  </p>
                </div>

                {/* Bottom-Right Floating Badge: Top 1% Mentor / Top Voice */}
                <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-gradient-to-r from-[#FF4D63] to-[#FE324E] text-white rounded-2xl p-3 sm:p-3.5 shadow-xl shadow-[#fe4759]/25 z-20 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center">
                    <LinkedInIcon className="w-4 h-4 fill-white" />
                  </div>
                  <div className="leading-tight">
                    <div className="text-[9px] font-extrabold uppercase tracking-wider text-rose-100">
                      TOP 1% MENTOR
                    </div>
                    <div className="text-xs font-black">
                      Top Voice
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right: The Philosophy & Bio */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200/60">
                <Sparkles className="w-3.5 h-3.5 text-[#fe4759]" />
                <span className="text-xs font-bold text-[#fe4759] tracking-wider uppercase">
                  THE FOUNDER’S PHILOSOPHY
                </span>
              </div>

              {/* Big Quote */}
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#0B132A] leading-[1.12] tracking-tight">
                &ldquo;Think Beyond Classrooms <br />
                <span className="text-[#fe4759]">Work on Real-Time Projects.</span>&rdquo;
              </h2>

              {/* Philosophy Body */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-2xl">
                In the fastest-evolving times, companies demand excellence and reward only the{" "}
                <span className="font-bold italic text-[#fe4759]">boldest</span>. We have designed IDS
                programs beyond classrooms, where our students gain first-hand experience through
                real-life projects and well-structured internships.
              </p>

              {/* Founder Name & Title */}
              <div className="pt-2">
                <div className="text-2xl font-black text-slate-900 tracking-tight">
                  Abhishek Kumar
                </div>
                <div className="text-xs font-bold text-[#fe4759] uppercase tracking-wider mt-0.5">
                  FOUNDER & DIRECTOR, IDS
                </div>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-[#fe4759] transition-colors mt-2"
                >
                  <LinkedInIcon className="w-3.5 h-3.5" />
                  <span>LINKEDIN</span>
                </a>
              </div>

              {/* Endorsements */}
              <div className="flex items-center gap-3 pt-2">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full border-2 border-white overflow-hidden relative shadow-xs">
                    <Image src="/mentors/deepanshu.jpg" alt="Leader" fill sizes="28px" className="object-cover" />
                  </div>
                  <div className="w-7 h-7 rounded-full border-2 border-white overflow-hidden relative shadow-xs">
                    <Image src="/mentors/gaurav.jpg" alt="Leader" fill sizes="28px" className="object-cover" />
                  </div>
                  <div className="w-7 h-7 rounded-full border-2 border-white overflow-hidden relative shadow-xs">
                    <Image src="/mentors/swati.jpg" alt="Leader" fill sizes="28px" className="object-cover" />
                  </div>
                </div>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  ENDORSED BY FORTUNE 500 LEADERSHIP
                </span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 4: OUR VISION & CORE VALUES
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
        {/* Subtle Ambient Red Glows */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#fe4759]/4 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#fe4759]/4 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1360px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200/60 mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#fe4759]" />
              <span className="text-xs font-bold text-[#fe4759] tracking-wider uppercase">
                PURPOSE &amp; PRINCIPLES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B132A] tracking-tight leading-tight">
              Our Vision &amp; <span className="text-[#fe4759]">Core Values</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm sm:text-base mt-3.5 font-normal max-w-xl mx-auto leading-relaxed">
              The guiding compass and foundational pillars that drive our curriculum, inspire our mentors, and empower every learner who steps into IDS.
            </p>
          </div>

          {/* Dual Spotlight Cards: Our Vision & Our Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20">
            
            {/* Card 1: Our Vision */}
            <div className="relative bg-gradient-to-br from-white via-rose-50/30 to-white rounded-[32px] p-7 sm:p-9 border border-rose-200/70 shadow-[0_10px_35px_rgba(254,71,89,0.06)] hover:shadow-xl hover:shadow-rose-500/[0.1] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-rose-200/40 via-rose-100/20 to-transparent rounded-bl-[40px] pointer-events-none group-hover:scale-110 transition-transform duration-500" />
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-13 h-13 rounded-2xl bg-[#fe4759] text-white flex items-center justify-center shadow-lg shadow-[#fe4759]/30 group-hover:scale-105 transition-transform duration-300">
                    <Compass className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-rose-100/80 text-[#fe4759] text-xs font-black tracking-wider uppercase">
                    OUR HORIZON
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-3.5 group-hover:text-[#fe4759] transition-colors">
                  Our Vision
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal mb-6">
                  To become the most trusted digital marketing and professional education platform in India, known for producing industry-ready professionals who drive digital transformation across businesses. We envision a future where every student achieves their career aspirations through our comprehensive, practical training programs.
                </p>
              </div>

              {/* Highlights */}
              <div className="pt-5 border-t border-rose-100/80 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800">
                  <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center text-[#fe4759] shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Industry-Ready Graduates</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800">
                  <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center text-[#fe4759] shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Digital Transformation Focus</span>
                </div>
              </div>
            </div>

            {/* Card 2: Our Mission */}
            <div className="relative bg-gradient-to-br from-white via-rose-50/30 to-white rounded-[32px] p-7 sm:p-9 border border-rose-200/70 shadow-[0_10px_35px_rgba(254,71,89,0.06)] hover:shadow-xl hover:shadow-rose-500/[0.1] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-rose-200/40 via-rose-100/20 to-transparent rounded-bl-[40px] pointer-events-none group-hover:scale-110 transition-transform duration-500" />
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-13 h-13 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-lg shadow-slate-900/20 group-hover:bg-[#fe4759] group-hover:scale-105 transition-all duration-300">
                    <Rocket className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-black tracking-wider uppercase group-hover:bg-rose-100 group-hover:text-[#fe4759] transition-colors">
                    OUR PURPOSE
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-3.5 group-hover:text-[#fe4759] transition-colors">
                  Our Mission
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal mb-6">
                  To empower individuals with cutting-edge digital marketing skills and provide them with the support needed to build successful careers in the digital economy. We are committed to delivering practical, industry-relevant education that bridges the gap between learning and employment.
                </p>
              </div>

              {/* Highlights */}
              <div className="pt-5 border-t border-rose-100/80 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800">
                  <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center text-[#fe4759] shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Employability-First Learning</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800">
                  <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center text-[#fe4759] shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Practical Project Focus</span>
                </div>
              </div>
            </div>

          </div>

          {/* Sub-header for Core Values */}
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
            <div className="text-xs font-bold text-[#fe4759] tracking-[0.2em] uppercase mb-2">
              THE PILLARS THAT DEFINE US
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B132A] tracking-tight">
              Our 4 Core <span className="text-[#fe4759]">Values</span>
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm mt-2 font-normal">
              The timeless principles that guide every lecture, project, and student interaction.
            </p>
          </div>

          {/* 4 Core Values Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="relative bg-white rounded-[28px] p-6 sm:p-7 border border-slate-200/80 hover:border-[#fe4759]/50 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:shadow-rose-500/[0.1] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  {/* Watermark Step Number */}
                  <div className="absolute top-5 right-6 text-3xl font-black text-slate-100 group-hover:text-rose-100/70 transition-colors pointer-events-none select-none">
                    {val.step}
                  </div>

                  <div>
                    {/* Icon Badge */}
                    <div className="w-13 h-13 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-[#fe4759] mb-6 group-hover:bg-[#fe4759] group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#fe4759]/30 transition-all duration-300">
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>

                    {/* Badge Pill */}
                    <div className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-extrabold uppercase tracking-wider mb-2.5 group-hover:bg-rose-50 group-hover:text-[#fe4759] transition-colors">
                      {val.badge}
                    </div>

                    {/* Title */}
                    <h4 className="text-lg font-black text-slate-900 tracking-tight group-hover:text-[#fe4759] transition-colors mb-2.5">
                      {val.title}
                    </h4>

                    {/* Description */}
                    <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed font-normal">
                      {val.description}
                    </p>
                  </div>

                  {/* Bottom Feature Pill */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-700 group-hover:text-[#fe4759] transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-[#fe4759] shrink-0" />
                    <span>{val.highlight}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 5: WHY STUDENTS CHOOSE US (Bento-Grid Architecture)
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-24 lg:py-28 bg-gradient-to-b from-[#FFF8F9] via-white to-[#FFF9FA] border-t border-slate-100 relative overflow-hidden">
        {/* Subtle Ambient Decorative Red Glows */}
        <div className="absolute top-10 right-1/4 w-[450px] h-[450px] bg-[#fe4759]/4 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#fe4759]/4 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1360px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200/80 mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#fe4759]" />
              <span className="text-xs font-black text-[#fe4759] tracking-wider uppercase">
                THE IDIGITALSTUDIES ADVANTAGE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#0B132A] tracking-tight leading-tight">
              Why Students <span className="text-[#fe4759]">Choose Us</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3.5 font-normal max-w-xl mx-auto leading-relaxed">
              Designed from the ground up to empower your career with practical execution, lifetime support, and industry-backed mentorship.
            </p>
          </div>

          {/* Master Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* ── CARD 1: Placement Guarantee (Spans 7 cols on lg) ── */}
            <div className="lg:col-span-7 bg-gradient-to-br from-[#0B132A] via-[#121A33] to-[#1B274A] text-white rounded-[32px] p-7 sm:p-9 border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col justify-between group">
              {/* Corner Ambient Glow */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#fe4759]/25 rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-700" />
              
              <div className="relative z-10">
                {/* Header Strip */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-bold tracking-tight">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Placement Assistance Active
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center p-2.5 shrink-0 group-hover:scale-105 transition-transform">
                    <Image
                      src="/svg/job_seeker.svg"
                      alt="Placement Guarantee"
                      width={32}
                      height={32}
                      className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(254,71,89,0.5)]"
                      unoptimized
                    />
                  </div>
                </div>

                {/* Big Stat & Title */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-100 to-rose-200 tracking-tight">
                      90%
                    </span>
                    <span className="text-sm sm:text-base font-bold text-rose-300 tracking-wide uppercase">
                      Placement Success Rate
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-2">
                    Placement Guarantee
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal max-w-xl">
                  We provide comprehensive placement support with a 90% success rate.
                </p>

                {/* Key Benefits Chips */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-6 pb-2">
                  <div className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-200 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#fe4759] shrink-0" />
                    <span>1-on-1 Mock Interviews</span>
                  </div>
                  <div className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-200 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#fe4759] shrink-0" />
                    <span>Resume Optimization</span>
                  </div>
                  <div className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-200 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#fe4759] shrink-0" />
                    <span>500+ Hiring Drives</span>
                  </div>
                </div>
              </div>

              {/* Bottom: Stacked Alumni Avatars */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between gap-4 flex-wrap relative z-10">
                <div className="flex items-center gap-3">
                  <div className="flex items-center -space-x-2.5">
                    <div className="relative w-8 h-8 rounded-full border-2 border-[#121A33] overflow-hidden shadow-xs">
                      <Image src="/alumni/shranya.jpg" alt="Alumni" fill sizes="32px" className="object-cover" />
                    </div>
                    <div className="relative w-8 h-8 rounded-full border-2 border-[#121A33] overflow-hidden shadow-xs">
                      <Image src="/alumni/anushka.jpg" alt="Alumni" fill sizes="32px" className="object-cover" />
                    </div>
                    <div className="relative w-8 h-8 rounded-full border-2 border-[#121A33] overflow-hidden shadow-xs">
                      <Image src="/alumni/mannat.jpg" alt="Alumni" fill sizes="32px" className="object-cover" />
                    </div>
                    <div className="relative w-8 h-8 rounded-full border-2 border-[#121A33] overflow-hidden shadow-xs">
                      <Image src="/alumni/divyansh.jpg" alt="Alumni" fill sizes="32px" className="object-cover" />
                    </div>
                  </div>
                  <span className="text-xs font-medium text-slate-300">
                    <strong className="text-white font-bold">3,500+</strong> Graduates Placed in Top MNCs
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-300">
                  <span>Guaranteed Career Support</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#fe4759]" />
                </div>
              </div>
            </div>

            {/* ── CARD 2: Hands-on Learning (Spans 5 cols on lg) ── */}
            <div className="lg:col-span-5 bg-white rounded-[32px] p-7 sm:p-9 border border-slate-200/90 hover:border-[#fe4759]/50 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:shadow-rose-500/[0.08] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
              {/* Corner Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-rose-100/50 via-rose-50/20 to-transparent rounded-bl-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
              
              <div>
                {/* Header Strip */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-13 h-13 rounded-2xl bg-rose-50 border border-rose-100/80 flex items-center justify-center p-2.5 text-[#fe4759] shadow-2xs group-hover:bg-[#fe4759] group-hover:text-white transition-all duration-300">
                    <Image
                      src="/svg/group_projects.svg"
                      alt="Hands-on Learning"
                      width={36}
                      height={36}
                      className="w-full h-full object-contain filter group-hover:brightness-0 group-hover:invert transition-all"
                      unoptimized
                    />
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold tracking-tight uppercase group-hover:bg-rose-50 group-hover:text-[#fe4759] transition-colors">
                    100% Practical
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight group-hover:text-[#fe4759] transition-colors mb-3">
                  Hands-on Learning
                </h3>

                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal mb-6">
                  Every course includes practical projects and real-world case studies.
                </p>

                {/* Practical Metric Inset Box */}
                <div className="bg-[#FFF9FA] rounded-2xl p-4 sm:p-5 border border-rose-100/80 space-y-3">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-800">
                    <span>Live Ad Spend per Student</span>
                    <span className="text-[#fe4759] font-black">₹50,000+ Budget</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-rose-100 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#fe4759] to-rose-400 w-4/5 rounded-full" />
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-500 font-medium pt-1">
                    <span>15+ Client Case Studies</span>
                    <span className="font-semibold text-slate-700">Live ROAS Tracking</span>
                  </div>
                </div>
              </div>

              {/* Bottom Feature Pill */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-600 group-hover:text-[#fe4759] transition-colors">
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#fe4759] stroke-[3]" />
                  Zero Pure Theory • Total Execution
                </span>
                <span className="text-[11px] font-semibold text-slate-400">Project Verified</span>
              </div>
            </div>

            {/* ── CARD 3: Industry-Relevant Curriculum (Spans 4 cols on lg) ── */}
            <div className="lg:col-span-4 bg-white rounded-[30px] p-7 sm:p-8 border border-slate-200/90 hover:border-[#fe4759]/50 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:shadow-rose-500/[0.08] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-13 h-13 rounded-2xl bg-rose-50 border border-rose-100/80 flex items-center justify-center p-2.5 text-[#fe4759] shadow-2xs group-hover:bg-[#fe4759] group-hover:text-white transition-all duration-300">
                    <Image
                      src="/svg/ai.svg"
                      alt="Industry-Relevant Curriculum"
                      width={32}
                      height={32}
                      className="w-full h-full object-contain filter group-hover:brightness-0 group-hover:invert transition-all"
                      unoptimized
                    />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-rose-50 text-[#fe4759] text-[11px] font-bold tracking-tight uppercase">
                    Updated for 2026
                  </span>
                </div>

                <h3 className="text-xl font-black text-slate-900 tracking-tight group-hover:text-[#fe4759] transition-colors mb-2.5">
                  Industry-Relevant Curriculum
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed font-normal mb-5">
                  Our curriculum is regularly updated to match current industry trends and requirements.
                </p>

                {/* In-Demand Tools Stack */}
                <div className="pt-2">
                  <div className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mb-2.5">
                    Integrated AI &amp; Toolchain:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {["ChatGPT-4o", "Google Ads", "Meta Ads", "SEMrush", "GA4"].map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/70 text-slate-700 text-xs font-semibold hover:border-[#fe4759]/40 hover:bg-rose-50/50 transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-600 group-hover:text-[#fe4759] transition-colors">
                <CheckCircle2 className="w-4 h-4 text-[#fe4759] shrink-0" />
                <span>Quarterly Syllabus Audits</span>
              </div>
            </div>

            {/* ── CARD 4: Flexible Learning Options (Spans 4 cols on lg) ── */}
            <div className="lg:col-span-4 bg-white rounded-[30px] p-7 sm:p-8 border border-slate-200/90 hover:border-[#fe4759]/50 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:shadow-rose-500/[0.08] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-13 h-13 rounded-2xl bg-rose-50 border border-rose-100/80 flex items-center justify-center p-2.5 text-[#fe4759] shadow-2xs group-hover:bg-[#fe4759] group-hover:text-white transition-all duration-300">
                    <Image
                      src="/svg/Classroom.svg"
                      alt="Flexible Learning Options"
                      width={32}
                      height={32}
                      className="w-full h-full object-contain filter group-hover:brightness-0 group-hover:invert transition-all"
                      unoptimized
                    />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold tracking-tight uppercase group-hover:bg-rose-50 group-hover:text-[#fe4759] transition-colors">
                    3 Custom Modes
                  </span>
                </div>

                <h3 className="text-xl font-black text-slate-900 tracking-tight group-hover:text-[#fe4759] transition-colors mb-2.5">
                  Flexible Learning Options
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed font-normal mb-5">
                  Choose from online, offline, or hybrid learning modes to suit your schedule.
                </p>

                {/* Mode Selector Chips */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs font-semibold text-slate-800">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#fe4759]" />
                      Live Online Batches
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">Interactive Zoom</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs font-semibold text-slate-800">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      Offline Campus
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">Noida High-Tech Labs</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs font-semibold text-slate-800">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      Hybrid Flex
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">Self-Paced + Mentors</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-600 group-hover:text-[#fe4759] transition-colors">
                <Clock className="w-4 h-4 text-[#fe4759] shrink-0" />
                <span>Weekday &amp; Weekend Batches</span>
              </div>
            </div>

            {/* ── CARD 5: Lifetime Support (Spans 4 cols on lg) ── */}
            <div className="lg:col-span-4 bg-white rounded-[30px] p-7 sm:p-8 border border-slate-200/90 hover:border-[#fe4759]/50 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:shadow-rose-500/[0.08] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-13 h-13 rounded-2xl bg-rose-50 border border-rose-100/80 flex items-center justify-center p-2.5 text-[#fe4759] shadow-2xs group-hover:bg-[#fe4759] group-hover:text-white transition-all duration-300">
                    <Image
                      src="/svg/why_lms.svg"
                      alt="Lifetime Support"
                      width={32}
                      height={32}
                      className="w-full h-full object-contain filter group-hover:brightness-0 group-hover:invert transition-all"
                      unoptimized
                    />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold tracking-tight uppercase group-hover:bg-rose-50 group-hover:text-[#fe4759] transition-colors">
                    Perpetual Value
                  </span>
                </div>

                <h3 className="text-xl font-black text-slate-900 tracking-tight group-hover:text-[#fe4759] transition-colors mb-2.5">
                  Lifetime Support
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed font-normal mb-5">
                  Get continued support and access to updated content even after course completion.
                </p>

                {/* Key Checklist */}
                <div className="space-y-2.5 pt-1 text-xs text-slate-700 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#fe4759] shrink-0" />
                    <span>Lifetime LMS Portal Access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#fe4759] shrink-0" />
                    <span>Free Access to New Course Versions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#fe4759] shrink-0" />
                    <span>Post-Course Mentor Doubt Clearing</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-600 group-hover:text-[#fe4759] transition-colors">
                <ShieldCheck className="w-4 h-4 text-[#fe4759] shrink-0" />
                <span>Lifelong Professional Advisory</span>
              </div>
            </div>

            {/* ── CARD 6: Strong Alumni Network (Spans 12 cols on lg - Full Width Showcase) ── */}
            <div className="lg:col-span-12 bg-gradient-to-r from-white via-[#FFF8F9] to-white rounded-[32px] p-7 sm:p-9 border border-rose-200/80 shadow-[0_8px_30px_rgba(254,71,89,0.06)] hover:shadow-2xl hover:shadow-rose-500/[0.1] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              {/* Subtle Ambient Radial Highlight */}
              <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#fe4759]/6 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                {/* Left Content */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#fe4759] text-white flex items-center justify-center p-2.5 shadow-md shadow-[#fe4759]/30">
                      <Image
                        src="/svg/users_community.svg"
                        alt="Alumni Network"
                        width={30}
                        height={30}
                        className="w-full h-full object-contain filter brightness-0 invert"
                        unoptimized
                      />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-rose-100 text-[#fe4759] text-xs font-black tracking-wider uppercase">
                      5000+ STRONG COMMUNITY
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Strong Alumni Network
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-xl">
                    Join a community of 5000+ successful digital marketing professionals.
                  </p>

                  <div className="flex items-center gap-3 sm:gap-6 flex-wrap pt-1 text-xs sm:text-sm font-bold text-slate-800">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#fe4759] stroke-[3]" />
                      <span>Private Mastermind Groups</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#fe4759] stroke-[3]" />
                      <span>Direct Peer Referrals</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#fe4759] stroke-[3]" />
                      <span>City Networking Meetups</span>
                    </div>
                  </div>
                </div>

                {/* Right Content: Top Alumni Hiring Badges Box */}
                <div className="lg:col-span-5 bg-white rounded-2xl p-5 sm:p-6 border border-rose-100/90 shadow-md shadow-rose-900/[0.04]">
                  <div className="text-xs font-black text-slate-800 tracking-tight mb-3 flex items-center justify-between">
                    <span>Our Alumni Lead Teams At:</span>
                    <span className="text-[#fe4759] font-bold">5,000+ Strong</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Zomato", "TCS", "Paytm", "Nykaa", "Urban Company", "Physics Wallah", "Meesho"].map((brand) => (
                      <span
                        key={brand}
                        className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-bold text-slate-700 hover:bg-rose-50 hover:text-[#fe4759] hover:border-[#fe4759]/30 transition-all cursor-default"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>Active in 20+ Cities Worldwide</span>
                    <Link
                      href="/#contact"
                      className="font-bold text-[#fe4759] hover:underline flex items-center gap-1"
                    >
                      Connect with Alumni
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 6: COMPANIES WHERE OUR ALUMNI WORK
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-100 relative overflow-hidden">
        {/* Subtle Ambient Red Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#fe4759]/3 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1360px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-14">
            <div className="text-xs font-bold text-[#fe4759] tracking-[0.2em] uppercase mb-2">
              CAREER PLACEMENTS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B132A] tracking-tight">
              Companies Where Our <span className="text-[#fe4759]">Alumni Work</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-3 font-normal max-w-lg mx-auto">
              Our graduates are hired by India's fastest-growing tech unicorns, media powerhouses, and global brands.
            </p>
          </div>

          {/* Elevated Circular Brand Badges */}
          <div className="flex items-center justify-center gap-6 sm:gap-8 lg:gap-10 flex-wrap">
            {alumniCompanies.map((c, i) => (
              <div key={i} className="flex flex-col items-center gap-3 group">
                {/* Elevated Circle */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white shadow-[0_12px_28px_rgba(0,0,0,0.06)] border border-slate-100 flex items-center justify-center p-3.5 group-hover:scale-105 group-hover:shadow-xl group-hover:border-rose-200/80 group-hover:shadow-rose-500/[0.08] transition-all duration-300">
                  {c.logo}
                </div>
                {/* Name Pill */}
                <div className="px-3.5 py-1 rounded-full bg-white border border-slate-200/60 text-[9px] sm:text-[10px] font-bold text-slate-600 group-hover:text-[#fe4759] group-hover:border-rose-200 transition-colors uppercase tracking-wider shadow-2xs">
                  {c.name}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── GLOBAL SITE FOOTER ─── */}
      <Footer />
    </div>
  );
}
