"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import toolimg1 from "../components/svg/download 7.svg";
import toolimg2 from "../components/svg/download 10.svg";
import toolimg3 from "../components/svg/download 16.svg";
import toolimg4 from "../components/svg/download 18.svg";
import toolimg5 from "../components/svg/download 20.svg";
import toolimg6 from "../components/svg/download 26.svg";
import toolimg7 from "../components/svg/download 28.svg";
import toolimg8 from "../components/svg/download 31.svg";
import toolimg9 from "../components/svg/download 36.svg";
import toolimg10 from "../components/svg/Group 1000002025.svg";

export default function WhyIDS() {
  const reasons = [
    {
      title: "10+ Years of Experience",
      desc: "A decade of proven training expertise with success stories across multiple industries.",
    },
    {
      title: "Live + Recorded Lectures",
      desc: "Flexibility to attend live sessions and revisit recordings anytime for revision.",
    },
    {
      title: "Affordable Fees with No Cost EMI",
      desc: "Learn without financial stress with flexible and budget-friendly payment options.",
    },
    {
      title: "Industry-Recognized Certifications",
      desc: "Credentials that strengthen your resume and open global opportunities.",
    },
    {
      title: "Experienced Trainers",
      desc: "Learn directly from seasoned professionals and industry experts.",
    },
    {
      title: "Hands-on Practical Exposure",
      desc: "Work on real-world projects and case studies to build job-ready skills.",
    },
    {
      title: "Interview Preparation Support",
      desc: "Get guidance on resume building, mock interviews, and soft skills.",
    },
    {
      title: "Dedicated Doubt Sessions",
      desc: "One-on-one and group doubt clearing classes to ensure conceptual clarity.",
    },
    {
      title: "AI Driven Updated Curriculum",
      desc: "Always aligned with the latest industry tools, technologies, and AI-driven trends.",
    },
    {
      title: "Career Guidance & Mentorship",
      desc: "Personalized career counseling to help you choose the right path.",
    },
    {
      title: "Placement Assistance",
      desc: "Strong industry tie-ups and placement support to help you land your dream job.",
    },
    {
      title: "Alumni Success Network",
      desc: "Join a thriving community of successful alumni working in top companies.",
    },
    {
      title: "Small Batch Size",
      desc: "Individual attention and interactive learning with limited students per batch.",
    },
    {
      title: "Practical Assignments & Projects",
      desc: "Apply your learnings on real-time tasks for better retention.",
    },
  ];

  const tools = [
    {
      name: "SEMRUSH",
      category: "SEO Tools",
      desc: "Keyword research · Backlink analysis · Site audits",
      img: toolimg1,
    },
    {
      name: "Hootsuite",
      category: "Social Media Management",
      desc: "Post scheduling · Engagement tracking · Performance analytics",
      img: toolimg2,
    },
    {
      name: "HubSpot",
      category: "Content Marketing",
      desc: "Content creation · Lead generation · Performance tracking",
      img: toolimg3,
    },
    {
      name: "Mailchimp",
      category: "Email Marketing",
      desc: "Automated campaigns · A/B testing · Audience segmentation",
      img: toolimg4,
    },
    {
      name: "Google Ads",
      category: "PPC Advertising",
      desc: "Ad management · Keyword targeting · Campaign analytics",
      img: toolimg5,
    },
    {
      name: "Google Analytics",
      category: "Analytics & Reporting",
      desc: "Traffic insights · Conversion tracking · Detailed reporting",
      img: toolimg6,
    },
    {
      name: "Salesforce",
      category: "CRM",
      desc: "Contact management · Sales automation · Forecasting",
      img: toolimg7,
    },
    {
      name: "HubSpot Marketing Hub",
      category: "Marketing Automation",
      desc: "Lead nurturing · Email workflows · Campaign analytics",
      img: toolimg8,
    },
    {
      name: "Canva",
      category: "Video Marketing",
      desc: "Video creation · Templates · Editing tools",
      img: toolimg9,
    },
    {
      name: "Refersion",
      category: "Affiliate Marketing",
      desc: "Affiliate tracking · Commission management · Performance reports",
      img: toolimg10,
    },
  ];

  return (
    <div className="bg-rose-50 py-16 px-6 md:px-20 rounded-[20px] max-w-7xl mx-auto">

      {/* --- WHY CHOOSE IDS SECTION --- */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold text-center mb-3">
          Why choose IDS for Digital Marketing?
        </h2>
        <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto">
          At our institute, we believe in delivering not just courses, but career-transforming
          experiences. Here’s why learners prefer us:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reasons.map((reason, idx) => (
            <Card key={idx} className="border-none bg-white shadow-sm hover:shadow-md transition rounded-xl">
              <CardContent className="flex items-start gap-3 p-4">
                <CheckCircle className="text-gray-700 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">{reason.title}</h4>
                  <p className="text-gray-600 text-sm">{reason.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* --- TOOLS SECTION --- */}
     {/* --- TOOLS SECTION --- */}
<section className="py-16 px-6 md:px-6 rounded-[20px] max-w-7xl mx-auto">
  <h2 className="text-4xl font-bold text-center mb-3">Tools you’ll Master</h2>
  <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto">
    Digital marketing relies on a wide variety of tools to manage campaigns,
    analyze performance, create content, and engage with audiences.
  </p>

  {/* GRID */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
    {tools.map((tool, idx) => (
      <div key={idx} className="flex flex-col bg-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
        {/* White top section */}
        <div className="bg-white flex items-center justify-center h-40  rounded-2xl">
          <img
            src={tool.img}
            alt={tool.name}
            className="h-14 w-auto object-contain"
          />
        </div>

        {/* Gray bottom section */}
        <div className="px-4 py-5 text-center flex-1 flex flex-col justify-center">
          <h4 className="font-semibold text-gray-900 mb-1">{tool.category}</h4>
          <p className="text-gray-600 text-sm leading-snug">{tool.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>



    </div>
  );
}
