"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Globe,
  Film,
  Smartphone,
  Target,
  Video,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  TrendingUp,
  Award,
  Phone,
  MessageCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Star,
  Clock,
  Laptop,
  Flame,
  Check,
  Building,
} from "lucide-react";

interface ServiceItem {
  id: string;
  iconSymbol: string;
  icon: any;
  title: string;
  category: string;
  quote: string;
  description: string;
  offerBadge: string;
  badgeType: "price" | "guarantee" | "kit";
  deliverables: string[];
  popular?: boolean;
}

const servicesData: ServiceItem[] = [
  {
    id: "web-app",
    iconSymbol: "🌐",
    icon: Globe,
    title: "WEBSITE & APP DEVELOPMENT",
    category: "Development & Engineering",
    quote:
      "Your business exists offline. Your competition exists online and that's why they're winning.",
    description:
      "High converting, mobile-first websites and applications built to turn casual visitors into loyal paying customers.",
    offerBadge: "First Project at ₹999",
    badgeType: "price",
    popular: true,
    deliverables: [
      "Next.js / React & WordPress Architecture",
      "Sub-second (<1s) page load optimization",
      "Conversion-rate optimized UI/UX design",
      "E-Commerce, CRM & Payment Gateway integration",
    ],
  },
  {
    id: "ugc-ads",
    iconSymbol: "🎬",
    icon: Film,
    title: "UGC & CREATIVE ADS",
    category: "Performance Video",
    quote: "Your product is good. Your ads just haven't proved it yet.",
    description:
      "Scroll-stopping UGC and creative ads that generate massive revenue. Real creators, real hooks, and verified buyer psychology.",
    offerBadge: "First Video at ₹999",
    badgeType: "price",
    popular: true,
    deliverables: [
      "Psychological 3-second visual hooks & scripts",
      "Vetted creator network across all demographics",
      "Multi-angle split-testing ad variations",
      "Format-optimized for Meta, Reels & YouTube Shorts",
    ],
  },
  {
    id: "social-media",
    iconSymbol: "📱",
    icon: Smartphone,
    title: "SOCIAL MEDIA MANAGEMENT",
    category: "Organic Growth & Community",
    quote:
      "Posting consistently but still not growing? The problem isn't your strategy.",
    description:
      "We manage your entire social presence to build community authority, spark engagement, and drive consistent sales through organic growth.",
    offerBadge: "No Results = No Charges",
    badgeType: "guarantee",
    deliverables: [
      "High-production daily carousels & video reels",
      "Trend-jacking & viral audio synchronization",
      "Active DM funnel automation & lead capture",
      "Brand voice storytelling & reputation building",
    ],
  },
  {
    id: "lead-gen",
    iconSymbol: "🎯",
    icon: Target,
    title: "LEAD GENERATION",
    category: "Paid Performance Marketing",
    quote: "More enquiries won't grow your business. Better ones will.",
    description:
      "High-intent lead generation campaigns that flood your sales pipeline with qualified, ready-to-buy decision makers.",
    offerBadge: "Guaranteed or No Bill",
    badgeType: "guarantee",
    popular: true,
    deliverables: [
      "Hyper-targeted Meta Ads & Google Search intent",
      "High-converting dedicated landing page funnels",
      "Automated WhatsApp lead qualification bots",
      "Transparent live dashboard & verified CPL tracking",
    ],
  },
  {
    id: "shoots-cinematics",
    iconSymbol: "🎥",
    icon: Video,
    title: "SHOOTS & CINEMATICS",
    category: "Studio & Commercial Production",
    quote:
      "People buy with their eyes first. If your visuals don't stop them nothing else gets the chance.",
    description:
      "Premium production quality that positions your brand as an undeniable market leader through cinematic excellence.",
    offerBadge: "First Shoot at ₹999",
    badgeType: "price",
    deliverables: [
      "4K Cinema camera rigs & professional lighting",
      "On-location or studio commercial photography",
      "Color grading, sound design & 3D motion graphics",
      "Founder stories, brand films & product showcases",
    ],
  },
  {
    id: "branding-graphics",
    iconSymbol: "✦",
    icon: Sparkles,
    title: "BRANDING & GRAPHICS",
    category: "Identity & Visual Systems",
    quote:
      "A business without a brand is just another option; easily ignored and easily replaced.",
    description:
      "Complete brand identity systems and design languages that make you unforgettable in a crowded, noisy marketplace.",
    offerBadge: "Full Branding Kit",
    badgeType: "kit",
    deliverables: [
      "Full corporate logo system & vector guidelines",
      "Typography pairing & custom color palettes",
      "Packaging, business cards & merchandise design",
      "Ready-to-use social media design component library",
    ],
  },
];

const faqs = [
  {
    q: "How does the 'First Project at ₹999' offer work?",
    a: "We believe in earning your trust with undeniable proof before asking for larger retainers. For your first engagement—whether it's a high-converting landing page prototype, an ad creative video, or a professional product shoot—we execute at just ₹999. Once you see the quality and speed, you can scale with our full-stack growth packages.",
  },
  {
    q: "What does 'No Results = No Charges' and 'Guaranteed or No Bill' mean?",
    a: "We operate on performance-backed accountability. Before launching your campaigns, we mutually define clear, measurable KPIs (such as verified leads, minimum ROAS, or follower engagement growth). If we fail to hit these agreed benchmarks within the milestone window, you do not pay our management fee.",
  },
  {
    q: "Can I combine multiple services into an omnichannel growth package?",
    a: "Absolutely! Over 80% of our clients leverage our full-stack capabilities—combining Website Development + UGC Ad Creation + Lead Generation. An integrated pipeline ensures your brand visuals match your ads, and your ads send traffic to a site engineered to convert.",
  },
  {
    q: "How quickly can our campaigns or new website go live?",
    a: "Our agile execution framework allows us to turn around initial landing pages and UGC ad videos within 5 to 7 business days from onboarding. Full-scale ad campaigns and brand identity packages typically launch within 10 to 14 days.",
  },
  {
    q: "Who handles our account and communication?",
    a: "You receive a dedicated Growth Lead and direct access to a dedicated WhatsApp channel with our dev team, copywriters, and media buyers. We conduct weekly performance reviews and provide a 24/7 real-time ROI dashboard.",
  },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string>("all");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  
  // Strategy Call Booking Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    businessName: "",
    serviceNeeded: "Website & App Development",
    monthlyBudget: "₹25,000 - ₹50,000",
    message: "",
  });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);
    setTimeout(() => {
      setFormSubmitting(false);
      setFormSubmitted(true);
    }, 800);
  };

  const filteredServices =
    selectedService === "all"
      ? servicesData
      : servicesData.filter((s) => s.id === selectedService);

  const prefillService = (serviceTitle: string) => {
    setFormData((prev) => ({ ...prev, serviceNeeded: serviceTitle }));
    const formElement = document.getElementById("strategy-call-section");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-rose-100 selection:text-[#fe4759]">
      {/* ─── SITE NAVBAR ─── */}
      <Navbar />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 1: HERO SECTION
          ══════════════════════════════════════════════════════════════ */}
      <section className="relative pt-12 sm:pt-16 lg:pt-20 pb-16 lg:pb-24 bg-gradient-to-b from-[#FFF5F6] via-[#FFF9FA] to-white overflow-hidden">
        {/* Subtle Ambient Red Glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#fe4759]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#fe4759]/5 rounded-full blur-2xl pointer-events-none" />

        {/* Delicate Grid Texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(rgba(254,71,89,0.06) 1px, transparent 1px),
              linear-gradient(to right, rgba(254,71,89,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

        <div className="max-w-[1360px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Headlines, Trust & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Top Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-rose-200/90 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#fe4759] animate-ping" />
                <span className="text-xs font-black text-[#fe4759] tracking-widest uppercase">
                  FULL-STACK GROWTH AGENCY
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-[#0B132A] leading-[1.12] tracking-tight">
                Everything Your Brand{" "}
                <span className="text-[#fe4759] underline decoration-[#fe4759]/30 underline-offset-8">
                  Needs to Win
                </span>{" "}
                Online
              </h1>

              {/* Subtitle / Promise */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                From high-converting websites to scroll-stopping ads — we build, run, and scale your digital presence. One agency. Full stack. Results guaranteed or we don&apos;t get paid.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#strategy-call-section"
                  className="px-8 py-4 bg-[#fe4759] hover:bg-[#e0384a] text-white font-extrabold text-sm sm:text-base rounded-2xl transition-all shadow-lg shadow-[#fe4759]/25 hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 group"
                >
                  <span>Book a Free Strategy Call</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="https://wa.me/919315471293?text=Hi%20iDigitalStudies%20team,%20I%20am%20interested%20in%20your%20digital%20marketing%20services%20and%20the%20%E2%82%B9999%20introductory%20offer."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-4 bg-white hover:bg-rose-50/60 text-[#fe4759] font-bold text-sm sm:text-base rounded-2xl border border-rose-200 transition-all hover:-translate-y-0.5 shadow-2xs flex items-center gap-2.5"
                >
                  <MessageCircle className="w-4 h-4 text-[#fe4759]" />
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </a>
              </div>

              {/* Trust Tagline with Checkmarks */}
              <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-600">
                <span className="flex items-center gap-1.5 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  First Project at ₹999
                </span>
                <span className="flex items-center gap-1.5 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  No Results = No Charge
                </span>
                <span className="flex items-center gap-1.5 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  Guaranteed or No Bill
                </span>
              </div>

            </div>

            {/* Right Column: Interactive Tilted Service Cards Matrix (Desktop & Tablet) */}
            <div className="lg:col-span-5 relative flex items-center justify-center min-h-[440px]">
              
              {/* Central Ambient Glow */}
              <div className="absolute w-72 h-72 bg-[#fe4759]/15 rounded-full blur-3xl pointer-events-none" />

              {/* Floating Container */}
              <div className="relative w-full max-w-[460px] h-[440px]">
                
                {/* 1. Website & App Dev (Top Left, Tilted Left) */}
                <div className="absolute top-0 left-2 w-48 sm:w-52 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-200/80 -rotate-3 hover:rotate-0 hover:scale-105 hover:z-30 transition-all duration-300 group cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">🌐</span>
                    <span className="text-[10px] bg-[#fe4759] text-white px-2.5 py-0.5 rounded-full font-bold shadow-xs">
                      First at ₹999
                    </span>
                  </div>
                  <h4 className="text-slate-900 font-extrabold text-xs sm:text-sm leading-tight group-hover:text-[#fe4759] transition-colors">
                    Website & App Dev
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                    Mobile-first & High CRO
                  </p>
                </div>

                {/* 2. UGC & Creative Ads (Top Right, Tilted Right) */}
                <div className="absolute top-4 right-0 w-48 sm:w-50 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-200/80 rotate-4 hover:rotate-0 hover:scale-105 hover:z-30 transition-all duration-300 group cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">🎬</span>
                    <span className="text-[10px] bg-[#fe4759] text-white px-2.5 py-0.5 rounded-full font-bold shadow-xs">
                      First at ₹999
                    </span>
                  </div>
                  <h4 className="text-slate-900 font-extrabold text-xs sm:text-sm leading-tight group-hover:text-[#fe4759] transition-colors">
                    UGC & Creative Ads
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                    Viral Hooks & Creator Net
                  </p>
                </div>

                {/* 3. Social Media Management (Middle Left) */}
                <div className="absolute top-[36%] left-0 w-48 sm:w-50 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-200/80 -rotate-2 hover:rotate-0 hover:scale-105 hover:z-30 transition-all duration-300 group cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">📱</span>
                    <span className="text-[10px] bg-slate-100 text-slate-800 border border-slate-200 px-2 py-0.5 rounded-full font-bold">
                      No Results = No Charge
                    </span>
                  </div>
                  <h4 className="text-slate-900 font-extrabold text-xs sm:text-sm leading-tight group-hover:text-[#fe4759] transition-colors">
                    Social Media Mgmt
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                    Organic Engagement & DMs
                  </p>
                </div>

                {/* 4. Centerpiece Hero Card: Lead Generation */}
                <div className="absolute top-[28%] left-[22%] sm:left-[24%] z-20 w-52 sm:w-56 bg-[#0B132A] text-white rounded-3xl p-5 shadow-2xl border-2 border-[#fe4759]/40 hover:scale-105 transition-all duration-300 group cursor-pointer">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl">🎯</span>
                    <span className="text-[10px] bg-[#fe4759] text-white px-2.5 py-0.5 rounded-full font-black uppercase tracking-wider">
                      Flagship
                    </span>
                  </div>
                  <h4 className="text-white font-black text-sm sm:text-base leading-tight">
                    Lead Generation
                  </h4>
                  <p className="text-[11px] text-slate-300 mt-1">
                    High-intent targeted campaigns
                  </p>
                  <div className="mt-3.5 pt-3 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/80 border border-emerald-800/80 px-2 py-0.5 rounded-md">
                      Guaranteed or No Bill
                    </span>
                    <span className="text-xs text-[#fe4759] font-extrabold">4.8x ROAS</span>
                  </div>
                </div>

                {/* 5. Shoots & Cinematics (Bottom Right, Tilted) */}
                <div className="absolute bottom-4 right-1 w-48 sm:w-50 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-200/80 rotate-3 hover:rotate-0 hover:scale-105 hover:z-30 transition-all duration-300 group cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">🎥</span>
                    <span className="text-[10px] bg-[#fe4759] text-white px-2.5 py-0.5 rounded-full font-bold shadow-xs">
                      First at ₹999
                    </span>
                  </div>
                  <h4 className="text-slate-900 font-extrabold text-xs sm:text-sm leading-tight group-hover:text-[#fe4759] transition-colors">
                    Shoots & Cinematics
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                    4K Studio & On-Location
                  </p>
                </div>

                {/* 6. Branding & Graphics (Bottom Left, Tilted) */}
                <div className="absolute bottom-1 left-4 w-48 sm:w-52 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-200/80 -rotate-3 hover:rotate-0 hover:scale-105 hover:z-30 transition-all duration-300 group cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">✦</span>
                    <span className="text-[10px] bg-slate-900 text-white px-2 py-0.5 rounded-full font-bold">
                      Full Kit
                    </span>
                  </div>
                  <h4 className="text-slate-900 font-extrabold text-xs sm:text-sm leading-tight group-hover:text-[#fe4759] transition-colors">
                    Branding & Graphics
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                    Complete Visual Identity
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 2: AGENCY PERFORMANCE & TRUST METRICS BAR
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-8 bg-white border-y border-slate-200/80">
        <div className="max-w-[1360px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            
            <div className="p-4 rounded-2xl bg-rose-50/40 border border-rose-100/60">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#fe4759] tracking-tight">
                150+
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
                Brands Scaled
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">From startups to enterprises</p>
            </div>

            <div className="p-4 rounded-2xl bg-rose-50/40 border border-rose-100/60">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#fe4759] tracking-tight">
                ₹10Cr+
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
                Ad Spend Managed
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">Meta & Google verified ROI</p>
            </div>

            <div className="p-4 rounded-2xl bg-rose-50/40 border border-rose-100/60">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#fe4759] tracking-tight">
                4.8x
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
                Average ROAS
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">Across E-Com & Lead funnels</p>
            </div>

            <div className="p-4 rounded-2xl bg-rose-50/40 border border-rose-100/60">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#fe4759] tracking-tight">
                ₹999
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
                Zero-Risk First Project
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">Quality guaranteed upfront</p>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 3: DIGITAL MARKETING SERVICES - THE 6 CORE OFFERINGS
          ══════════════════════════════════════════════════════════════ */}
      <section
        id="services-grid"
        className="py-16 sm:py-24 bg-[#FFF9F9] relative overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(rgba(254,71,89,0.035) 1px, transparent 1px),
            linear-gradient(to right, rgba(254,71,89,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
        }}
      >
        <div className="max-w-[1360px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <span className="inline-block bg-[#fe4759]/10 border border-[#fe4759]/30 text-[#fe4759] text-xs sm:text-sm font-black px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
              Digital Marketing Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B132A] leading-tight tracking-tight">
              Everything Your Brand Needs <br className="hidden sm:inline" />
              <span className="text-[#fe4759]">to Win Online</span>
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              From building your digital presence to running campaigns that convert — we do it all, with one promise: results or we don&apos;t get paid.
            </p>

            {/* Quick Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              <button
                onClick={() => setSelectedService("all")}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  selectedService === "all"
                    ? "bg-[#fe4759] text-white shadow-md shadow-[#fe4759]/25"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-[#fe4759]/40"
                }`}
              >
                All 6 Services
              </button>
              {servicesData.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedService(s.id)}
                  className={`px-3.5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                    selectedService === s.id
                      ? "bg-[#fe4759] text-white shadow-md shadow-[#fe4759]/25"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-[#fe4759]/40"
                  }`}
                >
                  <span className="mr-1.5">{s.iconSymbol}</span>
                  {s.title.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Service Cards Grid (3 Columns on Large Screens) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {filteredServices.map((service) => {
              return (
                <div
                  key={service.id}
                  className="group relative flex flex-col rounded-[28px] p-7 sm:p-8 bg-white border border-slate-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:shadow-[#fe4759]/10 hover:border-[#fe4759]/50 transition-all duration-300 hover:-translate-y-1.5"
                >
                  {/* Popular Tag */}
                  {service.popular && (
                    <div className="absolute top-6 right-6">
                      <span className="inline-flex items-center gap-1 bg-amber-50 border border-amber-200 text-amber-900 text-[10px] font-black uppercase px-2.5 py-1 rounded-full">
                        <Flame className="w-3 h-3 text-amber-500 fill-amber-500" />
                        Most Requested
                      </span>
                    </div>
                  )}

                  {/* Top Icon & Category */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-50 to-rose-100/60 border border-rose-200/80 text-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-xs">
                      {service.iconSymbol}
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#fe4759] block">
                        {service.category}
                      </span>
                      <h3 className="text-slate-900 font-black text-lg sm:text-xl leading-snug">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Brand Divider */}
                  <div className="w-12 h-[2.5px] bg-[#fe4759] mb-4 group-hover:w-20 transition-all duration-300" />

                  {/* Hard-hitting Quote */}
                  <div className="bg-rose-50/60 border-l-3 border-[#fe4759] p-3.5 rounded-r-xl mb-4">
                    <p className="text-[#fe4759] text-xs sm:text-sm font-semibold italic leading-relaxed">
                      &ldquo;{service.quote}&rdquo;
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2.5 pt-2 mb-6 border-t border-slate-100 flex-1">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block mb-2">
                      Key Deliverables:
                    </span>
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Offer Badge + Claim Button Footer */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span
                        className={`inline-block px-3.5 py-1 rounded-full text-xs font-black tracking-wide ${
                          service.badgeType === "price"
                            ? "bg-[#fe4759] text-white shadow-sm shadow-[#fe4759]/25"
                            : service.badgeType === "guarantee"
                            ? "bg-slate-900 text-emerald-400 border border-slate-800"
                            : "bg-slate-900 text-white"
                        }`}
                      >
                        {service.offerBadge}
                      </span>

                      <button
                        onClick={() => prefillService(service.title)}
                        className="text-xs font-bold text-[#fe4759] hover:underline flex items-center gap-1 group/btn"
                      >
                        <span>Select Service</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>

                    <button
                      onClick={() => prefillService(service.title)}
                      className="w-full py-2.5 bg-slate-50 hover:bg-[#fe4759] text-slate-800 hover:text-white font-bold text-xs sm:text-sm rounded-xl border border-slate-200 hover:border-[#fe4759] transition-all duration-200 text-center cursor-pointer"
                    >
                      Claim Offer & Book Consultation
                    </button>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Central Call-to-Action Card */}
          <div className="mt-16 bg-gradient-to-r from-slate-900 via-[#0B132A] to-slate-900 rounded-[32px] p-8 sm:p-12 text-white shadow-2xl border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center lg:text-left">
              <span className="inline-block text-[#fe4759] text-xs font-black uppercase tracking-widest bg-[#fe4759]/10 px-3 py-1 rounded-full">
                Zero-Risk Onboarding
              </span>
              <h3 className="text-2xl sm:text-3xl font-black">
                Not sure which service fits your business?
              </h3>
              <p className="text-slate-400 text-sm sm:text-base max-w-xl">
                Speak directly with our senior growth architects. We will analyze your current brand, audit your competitors, and give you an exact execution blueprint.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
              <a
                href="#strategy-call-section"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#fe4759] hover:bg-[#e0384a] text-white font-black text-sm sm:text-base rounded-xl transition-all shadow-lg shadow-[#fe4759]/30 hover:scale-105 text-center"
              >
                Book a Free Strategy Call
              </a>
              <a
                href="tel:+919315471293"
                className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base rounded-xl border border-white/20 transition-all text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#fe4759]" />
                <span>+91 93154 71293</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 4: OUR 4-STEP "RISK-REVERSED" GROWTH FRAMEWORK
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-white relative">
        <div className="max-w-[1360px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-[#fe4759] bg-rose-50 px-3.5 py-1 rounded-full border border-rose-100">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B132A] mt-3">
              The 4-Step Risk-Reversed Process
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              From initial audit to revenue multiplication — seamless, transparent, and built for speed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Step 1 */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-xs hover:border-[#fe4759]/50 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-[#fe4759] font-black text-lg flex items-center justify-center mb-5 group-hover:bg-[#fe4759] group-hover:text-white transition-colors">
                01
              </div>
              <h4 className="font-extrabold text-slate-900 text-lg mb-2">
                Audit & Discovery
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We deep dive into your numbers, current conversion drop-offs, and your competitors&apos; winning ad funnels.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-xs hover:border-[#fe4759]/50 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-[#fe4759] font-black text-lg flex items-center justify-center mb-5 group-hover:bg-[#fe4759] group-hover:text-white transition-colors">
                02
              </div>
              <h4 className="font-extrabold text-slate-900 text-lg mb-2">
                ₹999 Test Sprint
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Test our quality risk-free with your first website prototype, ad video, or shoot at just ₹999. Zero long-term lock-in.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-xs hover:border-[#fe4759]/50 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-[#fe4759] font-black text-lg flex items-center justify-center mb-5 group-hover:bg-[#fe4759] group-hover:text-white transition-colors">
                03
              </div>
              <h4 className="font-extrabold text-slate-900 text-lg mb-2">
                Omnichannel Launch
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We launch campaigns across Meta, Google, and organic social. Everything tracked live with verified ROAS metrics.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-xs hover:border-[#fe4759]/50 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-[#fe4759] font-black text-lg flex items-center justify-center mb-5 group-hover:bg-[#fe4759] group-hover:text-white transition-colors">
                04
              </div>
              <h4 className="font-extrabold text-slate-900 text-lg mb-2">
                Scale & Dominate
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We double down on top-performing hooks and funnel winners, multiplying your monthly sales while reducing customer acquisition cost.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 5: INTERACTIVE STRATEGY CALL BOOKING FORM
          ══════════════════════════════════════════════════════════════ */}
      <section
        id="strategy-call-section"
        className="py-16 sm:py-24 bg-gradient-to-b from-[#FFF5F6] to-white relative"
      >
        <div className="max-w-[1360px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Value Proposition & Direct Contact */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-rose-200 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#fe4759]" />
                <span className="text-xs font-black text-[#fe4759] tracking-wider uppercase">
                  FREE 30-MIN STRATEGY CALL
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-[#0B132A] leading-tight">
                Let&apos;s Build Your Custom <br />
                <span className="text-[#fe4759]">Growth Roadmap</span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Tell us about your brand goals. Our senior strategists will review your current website, ads, or social handles and prepare a custom breakdown before our call.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#fe4759] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-slate-900 text-sm">
                      Zero Sales Pressure
                    </h5>
                    <p className="text-xs text-slate-500">
                      Just practical insights and actionable recommendations.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#fe4759] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-slate-900 text-sm">
                      Rapid 2-Hour Response
                    </h5>
                    <p className="text-xs text-slate-500">
                      Our growth leads will connect with you same-day.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#fe4759] flex items-center justify-center shrink-0">
                    <Building className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-slate-900 text-sm">
                      Headquarters in Noida
                    </h5>
                    <p className="text-xs text-slate-500">
                      F407-408, Arthamart, Tech zone IV, Greater Noida 201306
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Consultation Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[32px] p-8 sm:p-10 shadow-2xl border border-rose-100/90 relative">
                
                {formSubmitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <Check className="w-8 h-8 stroke-[3]" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900">
                      Strategy Call Requested!
                    </h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto">
                      Thank you! One of our Senior Growth Directors will contact you via WhatsApp and Phone within 2 hours to confirm your time slot.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="mt-4 px-6 py-2.5 bg-[#fe4759] text-white font-bold rounded-xl text-sm hover:bg-[#e0384a]"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    
                    <div className="border-b border-slate-100 pb-4">
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                        Book Your Free Strategy Call
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                        Claim your introductory ₹999 project or request a full proposal.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#fe4759]/20 focus:border-[#fe4759]"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Phone Number (WhatsApp) *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#fe4759]/20 focus:border-[#fe4759]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="rahul@mybrand.com"
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#fe4759]/20 focus:border-[#fe4759]"
                        />
                      </div>

                      {/* Business Name */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Brand / Website URL
                        </label>
                        <input
                          type="text"
                          value={formData.businessName}
                          onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                          placeholder="e.g. mybrand.in"
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#fe4759]/20 focus:border-[#fe4759]"
                        />
                      </div>
                    </div>

                    {/* Primary Service Desired */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Primary Service Desired
                      </label>
                      <select
                        value={formData.serviceNeeded}
                        onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#fe4759]/20 focus:border-[#fe4759] bg-white text-slate-800"
                      >
                        <option value="Website & App Development">🌐 Website & App Development (First at ₹999)</option>
                        <option value="UGC & Creative Ads">🎬 UGC & Creative Ads (First Video at ₹999)</option>
                        <option value="Social Media Management">📱 Social Media Management (No Results = No Charge)</option>
                        <option value="Lead Generation">🎯 Lead Generation (Guaranteed or No Bill)</option>
                        <option value="Shoots & Cinematics">🎥 Shoots & Cinematics (First Shoot at ₹999)</option>
                        <option value="Branding & Graphics">✦ Branding & Graphics (Full Branding Kit)</option>
                        <option value="Full-Stack All Services">🚀 Full-Stack Omnichannel Package (All Services)</option>
                      </select>
                    </div>

                    {/* Estimated Monthly Budget */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Estimated Monthly Ad/Marketing Budget
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {["Intro ₹999 Test", "₹25k - ₹50k", "₹50k - ₹1L", "₹1L - ₹5L+"].map((b) => (
                          <button
                            type="button"
                            key={b}
                            onClick={() => setFormData({ ...formData, monthlyBudget: b })}
                            className={`py-2 px-2 text-xs font-bold rounded-lg border text-center transition-all ${
                              formData.monthlyBudget === b
                                ? "bg-[#fe4759] text-white border-[#fe4759]"
                                : "bg-slate-50 text-slate-700 border-slate-200 hover:border-[#fe4759]/40"
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message / Goals */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Tell us about your goals (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="What are your target numbers or key challenges right now?"
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#fe4759]/20 focus:border-[#fe4759]"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={formSubmitting}
                      className="w-full py-4 bg-[#fe4759] hover:bg-[#e0384a] text-white font-black text-sm sm:text-base rounded-xl transition-all shadow-lg shadow-[#fe4759]/30 hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {formSubmitting ? (
                        <span>Submitting Your Details...</span>
                      ) : (
                        <>
                          <span>Claim ₹999 Offer & Confirm Call</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-[11px] text-slate-400">
                      🔒 100% confidential. Your data will never be shared with third parties.
                    </p>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 6: FREQUENTLY ASKED QUESTIONS (ACCORDION)
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
        <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-[#fe4759] bg-rose-50 px-3.5 py-1 rounded-full border border-rose-100">
              Clear Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B132A] mt-3">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Everything you need to know about our guarantees, deliverables, and onboarding.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "border-[#fe4759]/40 bg-rose-50/20 shadow-sm"
                      : "border-slate-200 hover:border-slate-300 bg-white"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                        isOpen ? "bg-[#fe4759] text-white rotate-180" : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-rose-100/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 7: BOTTOM HIGH-CONVERTING ACTION STRIP
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-14 bg-gradient-to-r from-[#fe4759] to-[#e0384a] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
            Ready to Scale Your Digital Revenue?
          </h2>
          <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto">
            Get your first project live at just ₹999. Results delivered or you pay nothing.
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#strategy-call-section"
              className="px-8 py-3.5 bg-white text-[#fe4759] hover:bg-slate-100 font-black text-sm sm:text-base rounded-full shadow-lg transition-transform hover:scale-105"
            >
              Book a Free Strategy Call
            </a>

            <a
              href="https://wa.me/919315471293?text=Hi%20iDigitalStudies,%20I%20want%20to%20discuss%20agency%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-black/20 hover:bg-black/30 text-white font-bold text-sm sm:text-base rounded-full border border-white/30 transition-transform hover:scale-105 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us Directly</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─── SITE FOOTER ─── */}
      <Footer />
    </div>
  );
}
