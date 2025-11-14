interface SkillsYouLearnProps {
  courseId?: string;
}

const SkillsYouLearn = ({ courseId }: SkillsYouLearnProps) => {
  const isFoundationCourse = courseId === "foundation-in-digital-marketing";

  const beginnerSkills = [
    "Introduction to Digital Marketing Fundamentals",
    "SEO Basics (On-page & Off-page)",
    "Google Ads Fundamentals",
    "Social Media Marketing (Facebook, Instagram)",
    "Content Creation & Blogging",
    "Email Marketing Basics",
    "Google Analytics (Basic)",
    "Google My Business Setup",
    "Canva for Social Media Graphics",
    "Basic Website Setup (WordPress)",
    "Lead Generation Basics",
    "Digital Marketing Strategy Introduction",
  ];

  const advanceSkills = [
    "Advanced SEO (On-page, Off-page, Technical)",
    "Advanced SEM (Search, Display, Video, Shopping Ads)",
    "Paid Social Media Advertising (Meta, LinkedIn, TikTok)",
    "Content Strategy & Funnel Planning",
    "Email Marketing Automation",
    "Mobile Marketing (ASO, Push Notifications)",
    "Google Analytics (GA4 Advanced)",
    "Google Tag Manager (Tracking & Conversions)",
    "Conversion Rate Optimization (CRO)",
    "A/B Testing & Heatmap Tools",
    "CRM Management",
    "E-commerce Marketing (Shopify, WooCommerce, Amazon, Flipkart)",
    "Performance Marketing (ROI Optimization)",
  ]

  const moreAdvanceSkills = [
    "AI in Digital Marketing (ChatGPT, Jasper, etc.)",
    "Remarketing / Retargeting Strategies",
    "Copywriting & Storytelling for Branding",
    "Graphic Design (Canva, Photoshop, Figma)",
    "Video Marketing (YouTube, Shorts, Reels)",
    "Influencer & Affiliate Marketing",
    "Marketing Automation (HubSpot, Mailchimp, ActiveCampaign)",
    "Voice Search Optimization",
    "AR/VR Marketing",
    "Growth Hacking",
    "Web3 & Blockchain Marketing Basics",
  ]


  return (
    <section className="bg-gray-50 py-12 px-6 rounded-lg">
      <div className="mx-auto">
        <h3 className="text-red-600 font-semibold text-lg mb-2">
          Skills You Learn
        </h3>

        {isFoundationCourse ? (
          <>
            <h2 className="text-2xl md:text-3xl font-bold text-[#4B444D] mb-6">
              Start your digital marketing journey and build a strong base with
              essential tools, platforms, and marketing strategies.
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
              {beginnerSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </>
        ) : (
          <>
            <h2 className="text-2xl md:text-3xl font-bold text-[#4B444D] mb-6">
              Become a full-stack digital marketer with advanced strategies, automation tools, and real-world campaign management experience.
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
                {advanceSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
                {moreAdvanceSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default SkillsYouLearn;
