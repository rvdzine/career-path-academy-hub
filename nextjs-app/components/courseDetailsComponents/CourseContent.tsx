"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { ChevronDown, ChevronUp, BookOpen } from "lucide-react";

const CourseContent = () => {
    const params = useParams();
    const courseId = params?.courseId as string;
    const [openModule, setOpenModule] = useState<number | null>(1);

    // Course-specific content
    const courseContent: Record<string, any> = {
        "foundation-in-digital-marketing": {
            description: "Your program is divided into 4 carefully structured modules with 2+ live projects, 10+ assignments, and 12+ hours of hands-on practice.",
            modules: [
        {
            id: 1,
            title: "Introduction to Digital Marketing",
            sections: [
                        "Understanding Digital Marketing Fundamentals",
                        "Digital Marketing vs Traditional Marketing",
                        "Digital Marketing Channels Overview",
                        "Setting Up Your Digital Presence",
                        "Introduction to Analytics & Metrics",
                    ],
                },
                {
                    id: 2,
                    title: "Search Engine Optimization (SEO) Basics",
                    sections: [
                        "What is SEO and Why It Matters",
                        "Keyword Research Fundamentals",
                        "On-Page SEO Basics (Title, Meta, Headings)",
                        "Content Optimization for SEO",
                        "Local SEO Introduction (Google My Business)",
                        "Basic SEO Tools & Analytics",
                    ],
                },
                {
                    id: 3,
                    title: "Social Media Marketing",
                    sections: [
                        "Introduction to Social Media Platforms",
                        "Facebook & Instagram Marketing Basics",
                        "Content Creation for Social Media",
                        "Social Media Scheduling & Posting",
                        "Engagement & Community Management",
                        "Basic Social Media Analytics",
                    ],
                },
                {
                    id: 4,
                    title: "Google Ads & Paid Advertising Basics",
                    sections: [
                        "Introduction to Google Ads",
                        "Creating Your First Ad Campaign",
                        "Keyword Targeting & Bidding Basics",
                        "Ad Copy Writing Fundamentals",
                        "Understanding Ad Performance Metrics",
                        "Budget Management & Optimization",
                    ],
                },
            ],
        },
        "specialist-in-digital-marketing": {
            description: "Your program is divided into 6 carefully structured modules with 5+ live projects, 15+ assignments, and 18+ hours of hands-on practice.",
            modules: [
                {
                    id: 1,
                    title: "Advanced SEO & Content Marketing",
                    sections: [
                        "Advanced Keyword Research & Competitor Analysis",
                        "Technical SEO (Site Speed, Mobile Optimization, Schema)",
                        "On-Page & Off-Page SEO Strategies",
                        "Content Strategy & Blogging",
                        "Link Building Techniques",
                        "Local SEO & Google My Business Optimization",
                        "SEO Analytics & Rank Tracking",
                    ],
                },
                {
                    id: 2,
                    title: "Google Ads & PPC Mastery",
                    sections: [
                        "Advanced Google Ads Campaign Setup",
                        "Search, Display, Video & Shopping Ads",
                        "Keyword Research & Negative Keywords",
                        "Ad Copy Optimization & A/B Testing",
                        "Bidding Strategies & Budget Management",
                        "Quality Score Optimization",
                        "Conversion Tracking & Analytics",
                    ],
                },
                {
                    id: 3,
                    title: "Social Media Marketing & Advertising",
                    sections: [
                        "Facebook & Instagram Ads Manager",
                        "LinkedIn Advertising for B2B",
                        "TikTok & Emerging Platform Marketing",
                        "Social Media Content Strategy",
                        "Influencer Marketing Basics",
                        "Social Media Analytics & Reporting",
                    ],
                },
                {
                    id: 4,
                    title: "Email Marketing & Automation",
                    sections: [
                        "Email Marketing Fundamentals",
                        "Email Campaign Design & Copywriting",
                        "Marketing Automation Tools (Mailchimp, ActiveCampaign)",
                        "Segmentation & Personalization",
                        "Email Analytics & Optimization",
                        "CRM Integration Basics",
                    ],
                },
                {
                    id: 5,
                    title: "Analytics & Data Analysis",
                    sections: [
                        "Google Analytics 4 (GA4) Advanced",
                        "Google Tag Manager Setup",
                        "Conversion Tracking & Goals",
                        "Data Analysis & Reporting",
                        "Dashboard Creation",
                        "Performance Metrics & KPIs",
                    ],
                },
                {
                    id: 6,
                    title: "E-commerce & Performance Marketing",
                    sections: [
                        "E-commerce Marketing Strategies",
                        "Shopify & WooCommerce Marketing",
                        "Amazon & Flipkart Seller Marketing",
                        "Performance Marketing & ROI Optimization",
                        "Conversion Rate Optimization (CRO)",
                        "A/B Testing Fundamentals",
                    ],
                },
            ],
        },
        "digital-marketing-course-for-business-owners": {
            description: "Your program is divided into 8 carefully structured modules with 10+ live projects, 20+ assignments, and 24+ hours of hands-on practice tailored for business growth.",
            modules: [
                {
                    id: 1,
                    title: "Digital Marketing Strategy for Business",
                    sections: [
                        "Building Your Digital Marketing Roadmap",
                        "Understanding Your Target Audience",
                        "Competitive Analysis & Market Research",
                        "Setting Marketing Goals & KPIs",
                        "Budget Planning & Resource Allocation",
                        "Creating Your Unique Value Proposition",
                    ],
                },
                {
                    id: 2,
                    title: "Website & Landing Page Optimization",
                    sections: [
                        "Website Planning & Structure",
                        "Landing Page Design for Conversions",
                        "User Experience (UX) Optimization",
                        "Mobile Optimization",
                        "Website Speed & Performance",
                        "Conversion Funnel Design",
                    ],
                },
                {
                    id: 3,
                    title: "SEO for Business Growth",
                    sections: [
                        "Local SEO for Business Visibility",
                        "Google My Business Optimization",
                        "On-Page SEO for Business Websites",
                        "Content Marketing Strategy",
                        "Local Link Building",
                        "SEO Analytics & Reporting",
                    ],
                },
                {
                    id: 4,
                    title: "Google Ads for Lead Generation",
                    sections: [
                        "Google Ads Campaign Strategy",
                        "Search Ads for Business Leads",
                        "Local Ads & Location Targeting",
                        "Display & Video Advertising",
                        "Remarketing & Retargeting",
                        "Lead Tracking & Conversion Optimization",
                    ],
                },
                {
                    id: 5,
                    title: "Social Media Marketing for Business",
                    sections: [
                        "Social Media Strategy for Business",
                        "Facebook & Instagram Business Marketing",
                        "LinkedIn for B2B Lead Generation",
                        "Content Creation & Branding",
                        "Social Media Advertising",
                        "Community Building & Engagement",
                    ],
                },
                {
                    id: 6,
                    title: "Email Marketing & Customer Retention",
                    sections: [
                        "Email Marketing for Business",
                        "Customer Segmentation",
                        "Email Automation & Drip Campaigns",
                        "Newsletter Strategy",
                        "Customer Retention Campaigns",
                        "Email Analytics & ROI",
                    ],
                },
                {
                    id: 7,
                    title: "Analytics & Business Intelligence",
                    sections: [
                        "Google Analytics for Business",
                        "Tracking Business Goals & Conversions",
                        "Customer Journey Analysis",
                        "Marketing Attribution",
                        "ROI Calculation & Reporting",
                        "Data-Driven Decision Making",
                    ],
                },
                {
                    id: 8,
                    title: "Growth Hacking & Scaling",
                    sections: [
                        "Growth Hacking Strategies",
                        "Viral Marketing Techniques",
                        "Referral & Affiliate Programs",
                        "Partnership Marketing",
                        "Scaling Marketing Operations",
                        "Marketing Automation for Growth",
                    ],
                },
            ],
        },
        "master-in-digital-marketing-course": {
            description: "Your program is divided into 8 carefully structured modules with 10+ live projects, 20+ assignments, and 24+ hours of hands-on practice.",
            modules: [
                {
                    id: 1,
                    title: "Introduction to Digital Marketing",
                    sections: [
                        "Digital Marketing Fundamentals & Ecosystem",
                        "Understanding Digital Marketing Channels",
                        "Digital Marketing Strategy & Planning",
                        "Target Audience Analysis & Personas",
                        "Marketing Funnel & Customer Journey",
                        "Setting Up Digital Marketing Infrastructure",
            ],
        },
        {
            id: 2,
            title: "Website Planning & Creation",
            sections: [
                "Domain & Hosting Basics",
                "CMS Overview (WordPress, Shopify, Wix)",
                "Building a Business Website (Hands-on)",
                "Landing Page Design Principles",
                        "User Experience (UX) & Conversion Optimization",
                        "Tracking Setup (GA4, GTM, Facebook Pixel)",
            ],
        },
        {
            id: 3,
            title: "Search Engine Optimization (SEO)",
            sections: [
                        "Advanced Keyword Research & Competitor Analysis",
                        "On-Page SEO (Title, Meta, Content, Internal Linking)",
                        "Technical SEO (Speed, Mobile, Schema, Core Web Vitals)",
                        "Off-Page SEO (Link Building, Guest Posting)",
                        "Local SEO (Google My Business, Citations)",
                        "SEO Analytics & Reporting (Rank Tracking, Tools)",
                    ],
                },
                {
                    id: 4,
                    title: "Google Ads & SEM",
                    sections: [
                        "Google Ads Account Setup & Structure",
                        "Search Ads Campaign Creation",
                        "Display & Video Advertising",
                        "Shopping Ads & Performance Max",
                        "Keyword Research & Negative Keywords",
                        "Bidding Strategies & Quality Score Optimization",
                        "Conversion Tracking & Analytics",
                    ],
                },
                {
                    id: 5,
                    title: "Social Media Marketing & Advertising",
                    sections: [
                        "Facebook & Instagram Ads Manager",
                        "LinkedIn Advertising for B2B",
                        "TikTok & Emerging Platform Marketing",
                        "Social Media Content Strategy",
                        "Influencer Marketing",
                        "Social Media Analytics & Community Management",
                    ],
                },
                {
                    id: 6,
                    title: "Content Marketing & Email Automation",
                    sections: [
                        "Content Strategy & Planning",
                        "Blog Writing & SEO Content",
                        "Video Marketing (YouTube, Shorts, Reels)",
                        "Email Marketing & Automation (Mailchimp, ActiveCampaign)",
                        "Marketing Automation Workflows",
                        "Content Analytics & Performance",
                    ],
                },
                {
                    id: 7,
                    title: "Analytics & Performance Marketing",
                    sections: [
                        "Google Analytics 4 (GA4) Advanced",
                        "Google Tag Manager (GTM) Setup",
                        "Conversion Rate Optimization (CRO)",
                        "A/B Testing & Heatmap Tools",
                        "E-commerce Marketing (Shopify, WooCommerce, Amazon)",
                        "Performance Marketing & ROI Optimization",
                    ],
                },
                {
                    id: 8,
                    title: "Advanced Strategies & Emerging Trends",
                    sections: [
                        "AI in Digital Marketing (ChatGPT, Jasper, etc.)",
                        "Marketing Automation (HubSpot, CRM Integration)",
                        "Remarketing & Retargeting Strategies",
                        "Voice Search Optimization",
                        "AR/VR Marketing",
                        "Growth Hacking & Web3 Marketing Basics",
                    ],
                },
            ],
        },
    };

    // Get content for current course or default to master course
    const content = courseContent[courseId || ""] || courseContent["master-in-digital-marketing-course"];
    const { description, modules } = content;

    return (
        <div className="w-full max-w-6xl mx-auto">
            <div className="space-y-2 mb-8">
                <h3 className="text-[#EA2525] font-bold text-sm uppercase tracking-wider mb-2">
                Course content
            </h3>
                <h1 className='text-3xl md:text-4xl font-bold  mb-6'>
                    {description}
            </h1>
            </div>

            <div className="space-y-4">
                {modules.map((module, index) => (
                    <div
                        key={module.id}
                        className={`border-2 rounded-xl overflow-hidden transition-all duration-300 ${
                            openModule === module.id
                                ? "border-[#EA2525] shadow-lg shadow-red-100"
                                : "border-gray-200 hover:border-gray-300"
                        }`}
                    >
                        <button
                            onClick={() =>
                                setOpenModule(openModule === module.id ? null : module.id)
                            }
                            className={`w-full flex justify-between items-center px-6 py-5 transition-all duration-300 ${
                                openModule === module.id
                                    ? "bg-gradient-to-r from-red-50 to-orange-50"
                                    : "bg-gray-50 hover:bg-gray-100"
                            }`}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                                    openModule === module.id
                                        ? "bg-[#EA2525] text-white"
                                        : "bg-gray-200 text-gray-600"
                                }`}>
                                    <BookOpen className="w-5 h-5" />
                                </div>
                                <span className={`font-bold text-lg ${
                                    openModule === module.id
                                        ? "text-[#EA2525]"
                                        : "text-[#4B444D]"
                                }`}>
                                    Module {module.id}: {module.title}
                                </span>
                            </div>
                            <div className={`transition-transform duration-300 ${
                                openModule === module.id ? "rotate-180" : ""
                            }`}>
                                {openModule === module.id ? (
                                    <ChevronUp className="w-6 h-6 text-[#EA2525]" />
                                ) : (
                                    <ChevronDown className="w-6 h-6 text-gray-600" />
                                )}
                            </div>
                        </button>

                        {openModule === module.id && (
                            <div className="px-6 py-5 bg-white animate-in slide-in-from-top-2 duration-300">
                                <ul className="space-y-3">
                                {module.sections.map((s, idx) => (
                                        <li key={idx} className="flex items-start gap-3 group">
                                            <span className="text-[#EA2525] font-bold mt-1 group-hover:scale-110 transition-transform">✓</span>
                                            <span className="text-gray-700 group-hover:text-[#4B444D] transition-colors">{s}</span>
                                        </li>
                                ))}
                            </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseContent;
