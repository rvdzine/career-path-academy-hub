"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Image from "../components/assets/Alim.jpg" // make sure this is uncommented

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
      desc: "Learn without financial stress flexible and budget-friendly payment options.",
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
      desc: "Always aligned with the latest industry tools, technologies, and AI Driven trends.",
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
      img: "/tools/semrush.png",
    },
    {
      name: "Hootsuite",
      category: "Social Media Management",
      desc: "Post scheduling · Engagement tracking · Performance analytics",
      img: "/tools/hootsuite.png",
    },
    {
      name: "HubSpot",
      category: "Content Marketing",
      desc: "Content creation · Lead generation · Performance tracking",
      img: "/tools/hubspot.png",
    },
    {
      name: "Mailchimp",
      category: "Email Marketing",
      desc: "Automated campaigns · A/B testing · Audience segmentation",
      img: "/tools/mailchimp.png",
    },
    {
      name: "Google Ads",
      category: "PPC Advertising",
      desc: "Ad management · Keyword targeting · Campaign analytics",
      img: "/tools/googleads.png",
    },
    {
      name: "Google Analytics",
      category: "Analytics",
      desc: "Track website traffic and user engagement effectively.",
      img: "/tools/ga.png",
    },
    {
      name: "Converro Salesforce",
      category: "CRM Integration",
      desc: "Customer relationship management and automation.",
      img: "/tools/converro.png",
    },
    {
      name: "HubSpot Marketing Hub",
      category: "Marketing Automation",
      desc: "Streamline and automate marketing workflows.",
      img: "/tools/hubspot-mh.png",
    },
    {
      name: "Canva",
      category: "Design Tool",
      desc: "Create professional visuals, posts, and banners easily.",
      img: "/tools/canva.png",
    },
    {
      name: "Refersion",
      category: "Affiliate Marketing",
      desc: "Manage and track affiliate partnerships efficiently.",
      img: "/tools/refersion.png",
    },
  ];

  return (
    <div className="bg-rose-50 py-16 px-6 md:px-20 w-[1300px] rounded-[20px] mx-auto">

      {/* --- WHY CHOOSE IDS SECTION --- */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-4xl font-bold text-center mb-3">
          Why choose IDS for Digital Marketing?
        </h2>
        <p className="text-center text-gray-700 mb-10">
          At our institute, we believe in delivering not just courses, but career-transforming
          experiences. Here’s why learners prefer us:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reasons.map((reason, idx) => (
            <Card key={idx} className="border-none bg-white shadow-sm hover:shadow-md transition">
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
      <section className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-3">Tools you’ll Master</h2>
        <p className="text-center text-gray-700 mb-10">
          Digital marketing relies on a wide variety of tools to manage campaigns, analyze
          performance, create content, and engage with audiences.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {tools.map((tool, idx) => (
            <Card
              key={idx}
              className="flex flex-col items-center justify-center p-6 bg-white shadow-sm border-none hover:shadow-md transition"
            >
              {/* <Image
                src={tool.img} 
                alt={tool.name}
                width={80}
                height={80}
                className="object-contain mb-4"
              /> */}
              <h4 className="font-semibold text-center">{tool.category}</h4>
              <p className="text-gray-600 text-sm text-center">{tool.desc}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
