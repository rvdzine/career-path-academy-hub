"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Globe,
  TrendingUp,
  Search,
  Video,
  Share2,
  Zap,
  CheckCircle2,
  Sparkles,
  PhoneCall,
  BarChart3,
  Layers,
  ShieldCheck,
  Clock,
  ExternalLink,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactOptionsDialog from "@/components/ContactOptionsDialog";
import ProgramForm from "@/components/ProgramForm";

type ServiceCategory =
  | "all"
  | "web"
  | "ads"
  | "seo"
  | "video"
  | "automation";

interface ServiceItem {
  id: string;
  category: "web" | "ads" | "seo" | "video" | "automation";
  categoryBadge: string;
  metricBadge: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  capabilities: string[];
}

const servicesData: ServiceItem[] = [
  {
    id: "web-development",
    category: "web",
    categoryBadge: "Web & Tech",
    metricBadge: "95+ PageSpeed Score",
    title: "Website & Web App Development",
    description:
      "Custom, mobile-responsive Next.js and WordPress websites engineered for rapid loading, seamless UX, and high conversion rates.",
    icon: <Globe className="w-5 h-5 text-[#FE4759]" />,
    capabilities: [
      "Next.js & React Web Apps",
      "High-Converting Landing Pages",
      "Shopify & E-Commerce",
      "Core Web Vitals Optimization",
    ],
  },
  {
    id: "performance-marketing",
    category: "ads",
    categoryBadge: "Paid Media",
    metricBadge: "4.8x Average ROAS",
    title: "Performance Marketing & Paid Ads",
    description:
      "Profit-first Meta, Google Search, and YouTube ad campaigns optimized for low customer acquisition costs and scalable revenue.",
    icon: <TrendingUp className="w-5 h-5 text-[#FE4759]" />,
    capabilities: [
      "Meta (FB & IG) Ads Funnels",
      "Google Search & Performance Max",
      "Dynamic Retargeting Systems",
      "Conversion API & GA4 Tracking",
    ],
  },
  {
    id: "search-engine-optimization",
    category: "seo",
    categoryBadge: "Organic Reach",
    metricBadge: "Page 1 Keyword Rankings",
    title: "Search Engine Optimization (SEO)",
    description:
      "Dominate high-intent search queries, outperform local competitors in Delhi-NCR, and secure continuous organic buyer traffic.",
    icon: <Search className="w-5 h-5 text-[#FE4759]" />,
    capabilities: [
      "Technical Site Audits",
      "Keyword & Content Architecture",
      "Google Business Profile (Local)",
      "High-DA Link Building",
    ],
  },
  {
    id: "video-shoots-ugc",
    category: "video",
    categoryBadge: "Creative Studio",
    metricBadge: "40%+ Higher CTR",
    title: "Cinematics, Video Shoots & UGC Ads",
    description:
      "In-studio brand cinematics, engaging reel shoots, and authentic creator UGC ads filmed and color-graded by our in-house media team.",
    icon: <Video className="w-5 h-5 text-[#FE4759]" />,
    capabilities: [
      "Studio & On-Location Shoots",
      "Viral Instagram Reel Formats",
      "High-Converting UGC Ads",
      "Professional Sound & Color Grading",
    ],
  },
  {
    id: "social-media-management",
    category: "video",
    categoryBadge: "Brand & Social",
    metricBadge: "Consistent Growth",
    title: "Social Media Strategy & Branding",
    description:
      "Comprehensive social media management including aesthetic visual guidelines, monthly content calendars, and viral carousels.",
    icon: <Share2 className="w-5 h-5 text-[#FE4759]" />,
    capabilities: [
      "Monthly Content Schedules",
      "Custom Graphic Design Assets",
      "Brand Identity & Style Guides",
      "Community Care & Engagement",
    ],
  },
  {
    id: "lead-funnels-automation",
    category: "automation",
    categoryBadge: "CRM & Funnels",
    metricBadge: "< 2 Min Lead Response",
    title: "Lead Funnels & WhatsApp Automation",
    description:
      "Plug revenue leaks with automated WhatsApp chatbots, instant sales team SMS notifications, and zero-drop CRM integrations.",
    icon: <Zap className="w-5 h-5 text-[#FE4759]" />,
    capabilities: [
      "Official WhatsApp Cloud API",
      "Automated Lead Distribution",
      "CRM & Pipeline Setup",
      "Instant SMS & Email Alerts",
    ],
  },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("all");

  const filteredServices = servicesData.filter((item) => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* ─── 1. STREAMLINED HERO HEADER ─── */}
      <section className="relative w-full bg-white pt-10 sm:pt-14 pb-8 sm:pb-10 border-b border-gray-100 overflow-hidden">
        {/* Subtle dot grid matching homepage */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: "radial-gradient(circle, #FE475914 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Clean Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-gray-400 mb-4 sm:mb-6">
            <Link href="/" className="hover:text-[#FE4759] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
            <span className="text-[#FE4759] font-bold">Services</span>
          </nav>

          {/* Heading & Subtitle */}
          <div className="max-w-3xl mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-950 tracking-tight leading-[1.15]">
              Digital Marketing <span className="text-[#FE4759]">Services</span>
            </h1>
            <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              Practical, agency-standard solutions designed for scalable customer acquisition, custom web development, and business growth.
            </p>
          </div>

          {/* Filter Tabs Capsule */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: `All Services (${servicesData.length})` },
              { id: "web", label: "Web & Apps" },
              { id: "ads", label: "Paid Performance Ads" },
              { id: "seo", label: "Search Engine Optimization" },
              { id: "video", label: "Video & Social Content" },
              { id: "automation", label: "CRM & Automations" },
            ].map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id as ServiceCategory)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#FE4759] text-white shadow-md shadow-red-500/20"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-950"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 2. REIMAGINED SERVICES GRID ─── */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <article
                key={service.id}
                id={service.id}
                className="group relative bg-white rounded-2xl border border-gray-200 hover:border-[#FE4759]/60 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-200 p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Top Meta Header */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FE4759] bg-[#FFF0F2] px-3 py-1 rounded-full border border-[#FEDCE0]">
                      {service.categoryBadge}
                    </span>

                    <span className="text-[11px] font-semibold text-gray-600 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-200/60">
                      {service.metricBadge}
                    </span>
                  </div>

                  {/* Title with Glowing Icon */}
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-[#FFF0F2] border border-[#FEDCE0] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      {service.icon}
                    </div>
                    <h2 className="text-lg font-bold text-gray-950 group-hover:text-[#FE4759] transition-colors leading-snug line-clamp-2 min-h-[3rem] flex items-center">
                      {service.title}
                    </h2>
                  </div>

                  {/* Concise 2-line Description */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-2 min-h-[2.5rem] mb-4 font-normal">
                    {service.description}
                  </p>

                  {/* Deliverables / Capabilities Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="text-[11px] font-medium text-gray-700 bg-gray-100/90 px-2.5 py-1 rounded-md"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Section */}
                <div className="pt-4 border-t border-gray-100">
                  <ContactOptionsDialog>
                    <button className="w-full py-2.5 px-4 rounded-xl bg-[#FE4759] hover:bg-[#E12D40] text-white text-xs font-bold transition-all cursor-pointer shadow-xs active:scale-95 text-center flex items-center justify-center gap-1.5">
                      <span>Request Free Strategy Call</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </ContactOptionsDialog>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. OUR 4-STEP GROWTH METHODOLOGY ─── */}
      <section className="py-14 sm:py-18 bg-[#FFF6F7]/50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-bold text-[#FE4759] uppercase tracking-widest">
              HOW WE WORK
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-950 mt-1">
              Our 4-Step Systematic Growth Engine
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              We eliminate guesswork with rigorous data testing, creative sprints, and rapid execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                step: "01",
                title: "Deep Funnel Audit",
                desc: "We dissect your unit economics, current marketing funnel, competitor positioning, and conversion leakages.",
              },
              {
                step: "02",
                title: "Creative & Tech Build",
                desc: "We construct high-speed landing pages, shoot thumb-stopping video ads, and configure airtight conversion APIs.",
              },
              {
                step: "03",
                title: "Multi-Channel Launch",
                desc: "We deploy campaigns across search, social, and automation with aggressive daily bidding optimizations.",
              },
              {
                step: "04",
                title: "Scale & Predictable ROI",
                desc: "We reinvest profitably into proven winning angles and scale your monthly revenue systematically.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs hover:border-[#FE4759]/60 hover:shadow-md transition-all"
              >
                <div className="text-2xl font-black text-[#FE4759] mb-3">
                  {s.step}
                </div>
                <h3 className="text-base font-bold text-gray-950 mb-2">
                  {s.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. WHY PARTNER WITH US ─── */}
      <section className="py-14 sm:py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-bold text-[#FE4759] uppercase tracking-widest">
                THE AGENCY ADVANTAGE
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-950 mt-1 leading-snug">
                Why Growing Brands Choose Us Over Traditional Agencies
              </h2>
              <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                Traditional agencies outsource work to sub-contractors and send confusing monthly PDF reports. We operate as an extension of your growth team with real-time transparency.
              </p>

              <div className="space-y-3.5 mt-6">
                {[
                  "100% In-House Creative Studio, Developers & Media Buyers",
                  "Live 24/7 Looker Studio Dashboard — No Hidden Metrics",
                  "Rapid 48-Hour Creative & Campaign Turnaround SLA",
                  "Performance-Driven Account Directors with Direct WhatsApp Access",
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-gray-800">
                    <CheckCircle2 className="w-4 h-4 text-[#FE4759] flex-shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#FFF6F7] border border-[#FEDCE0] rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
              <div className="w-12 h-12 rounded-2xl bg-[#FE4759] text-white flex items-center justify-center mb-4 shadow-md shadow-red-500/20">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-950 mb-2">
                Need a Custom Solution for Your Brand?
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                Whether you need a full rebrand, website rebuild, or a 7-figure ad scaling roadmap, our directors will analyze your current numbers and draft an execution plan.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <ContactOptionsDialog>
                  <button className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#FE4759] hover:bg-[#E12D40] text-white font-bold text-xs sm:text-sm shadow-md shadow-red-500/20 transition-all cursor-pointer">
                    Book Free 30-Min Strategy Call
                  </button>
                </ContactOptionsDialog>

                <a
                  href="https://wa.me/919315471293"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3 rounded-full border border-gray-300 hover:border-gray-900 text-gray-800 font-bold text-xs sm:text-sm transition-colors text-center inline-flex items-center justify-center gap-1.5"
                >
                  <span>Chat on WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. LEAD FORM ─── */}
      <ProgramForm />

      {/* ─── 6. FOOTER ─── */}
      <Footer />
    </div>
  );
}
