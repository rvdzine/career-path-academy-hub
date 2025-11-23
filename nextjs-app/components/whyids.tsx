"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function WhyIDS() {
  const reasons = [
    { title: "10+ Years of Experience", desc: "A decade of proven training expertise with success stories across multiple industries.",logo:"/svg/why1.svg" },
    { title: "Live + Recorded Lectures", desc: "Flexibility to attend live sessions and revisit recordings anytime for revision.",logo:"/svg/why2.svg" },
    { title: "Affordable Fees with No Cost EMI", desc: "Learn without financial stress with flexible and budget-friendly payment options.",logo:"/svg/moneys.svg" },
    { title: "Industry-Recognized Certifications", desc: "Credentials that strengthen your resume and open global opportunities.",logo:"/svg/ph_certificate.svg" },
    { title: "Experienced Trainers", desc: "Learn directly from seasoned professionals and industry experts.",logo:"/svg/Classroom.svg" },
    { title: "Hands-on Practical Exposure", desc: "Work on real-world projects and case studies to build job-ready skills.",logo:"/svg/Group of Projects.svg" },
    { title: "Interview Preparation Support", desc: "Get guidance on resume building, mock interviews, and soft skills.",logo:"/svg/Notepad User.svg" },
    { title: "Dedicated Doubt Sessions", desc: "One-on-one and group doubt clearing classes to ensure conceptual clarity.",logo:"/svg/Tuition.svg" },
    { title: "AI Driven Updated Curriculum", desc: "Always aligned with the latest industry tools, technologies, and AI-driven trends.",logo:"/svg/ai.svg" },
    { title: "Career Guidance & Mentorship", desc: "Personalized career counseling to help you choose the right path.",logo:"/svg/Job Seeker.svg" },
    { title: "Placement Assistance", desc: "Strong industry tie-ups and placement support to help you land your dream job.",logo:"/svg/Purposeful man.svg" },
    { title: "Alumni Success Network", desc: "Join a thriving community of successful alumni working in top companies.",logo:"/svg/Users.svg" },
    { title: "Small Batch Size", desc: "Individual attention and interactive learning with limited students per batch.",logo:"/svg/classroom1.svg" },
    { title: "Practical Assignments & Projects", desc: "Apply your learnings on real-time tasks for better retention.",logo:"/svg/whyend.svg" },
  ];

  const tools = [
    { name: "SEMRUSH", category: "SEO Tools", desc: "Learn to conduct keyword research, analyze backlinks, and improve on-page and technical SEO.", img: "/svg/download 7.svg" },
    { name: "Hootsuite", category: "Social Media Management", desc: "Manage multiple platforms and track performance metrics effectively.", img: "/svg/download 10.svg" },
    { name: "HubSpot", category: "Content Marketing", desc: "Craft engaging content and measure success with insights.", img: "/svg/download 36.svg" },
    { name: "Mailchimp", category: "Email Marketing", desc: "Design campaigns, segment audiences, and improve engagement.", img: "/svg/download 16.svg" },
    { name: "Google Ads", category: "PPC Advertising", desc: "Manage budgets, optimize keywords, and analyze performance.", img: "/svg/download 18.svg" },
    { name: "Google Analytics", category: "Analytics & Reporting", desc: "Track performance, behavior, and campaign results.", img: "/svg/download 20.svg" },
    { name: "Salesforce", category: "CRM", desc: "Organize leads and automate communication efficiently.", img: "/svg/download 28.svg" },
    { name: "HubSpot Marketing Hub", category: "Marketing Automation", desc: "Set up workflows and optimize campaigns at scale.", img: "/svg/download 26.svg" },
    { name: "Canva", category: "Video Marketing", desc: "Create videos that boost brand awareness & engagement.", img: "/svg/download 31.svg" },
    { name: "Refersion", category: "Affiliate Marketing", desc: "Manage affiliates and track conversions effectively.", img: "/assets/mask-group.png" },
    { name: "AI-Powered Marketing", category: "AI Tools", desc: "Use AI for content, data analysis, and personalization.", img: "/assets/ai-marketing.png" },
    { name: "Clarity Hotjar", category: "CRO", desc: "Analyze behavior and optimize landing pages.", img: "/assets/conversion-rate.png" },
    { name: "WordPress", category: "CMS", desc: "Design web pages & manage digital content easily.", img: "/assets/wordpress.png" },
    { name: "Pabbly", category: "Performance Marketing", desc: "Optimize ad spend and monitor performance.", img: "/assets/pabbly.png" },
    { name: "Shopify", category: "E-commerce", desc: "Manage products, payments, and customer service.", img: "/assets/shopify.png" },
  ];

  return (
    <div
      className="w-full py-20"
      style={{
        backgroundColor: "#000",
        backgroundImage: `
          linear-gradient(#2a2a2a 1px, transparent 1px),
          linear-gradient(to right, #2a2a2a 1px, transparent 1px)
        `,
        backgroundSize: "30px 30px",
      }}
    >
      {/* Container */}
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* WHY IDS SECTION */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-white mb-3">
            Why choose IDS for Digital Marketing?
          </h2>
          <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto">
            At our institute, we believe in delivering career-transforming learning experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reasons.map((reason, idx) => (
             <Card
  key={idx}
  className="
    relative 
    rounded-2xl 
    overflow-hidden 
    bg-white/10 
    backdrop-blur-md 
    border border-white/30
  "
  style={{
    background: "rgba(255, 255, 255, 0.08)",
    backdropFilter: "blur(9px)",
    WebkitBackdropFilter: "blur(9px)",
    borderRadius: "20px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: `
      0 8px 32px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.07),
      inset 0 -1px 0 rgba(255, 255, 255, 0.1),
      inset 0 0 0px 0px rgba(255, 255, 255, 0)
    `,
  }}
>
                <CardContent className="flex items-start gap-3 p-4">
                  
          {reason.logo && (
            <Image
              src={reason.logo}
              alt={reason.title}
              width={45}
              height={45}
              className="w-8 h-8 object-contain mt-1 flex-shrink-0"
            />
          )}
                  <div>
                    <h4 className="font-semibold text-white">{reason.title}</h4>
                    <p className="text-gray-300 text-sm">{reason.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* TOOLS SECTION */}
<section>
  <div className="max-w-7xl mx-auto px-6 md:px-10">

    <h2 className="text-4xl font-bold text-center text-white mb-3">
      Tools you’ll Master
    </h2>

    <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto">
      Digital marketing relies on a wide variety of tools to manage campaigns,
      analyze performance, create content, and engage with audiences.
    </p>

    {/* GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {tools.map((tool, idx) => (
        <div
          key={idx}
          className="flex flex-col bg-white/10 rounded-2xl overflow-hidden 
          shadow-sm hover:shadow-xl transition-all duration-200 backdrop-blur-md"
        >
          {/* Top Section */}
          <div className="bg-white flex items-center justify-center h-40 rounded-t-2xl">
            <Image
              src={tool.img}
              alt={tool.name}
              width={80}
              height={80}
              className="h-14 w-auto object-contain"
            />
          </div>

          {/* Bottom Section */}
          <div className="px-4 py-5 text-center flex-1 flex flex-col justify-center">
            <h4 className="font-semibold text-white mb-1">{tool.category}</h4>
            <p className="text-gray-300 text-sm leading-snug">{tool.desc}</p>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

      </div>
    </div>
  );
}
