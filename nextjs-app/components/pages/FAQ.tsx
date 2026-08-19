"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What makes Institute of Digital Studies (IDS) the best digital marketing institute in Noida?",
      answer: "Institute of Digital Studies (IDS) in Sector 62, Noida is renowned for its AI-integrated curriculum, live project budgets, 1:1 mentor coaching, and 100% placement track record across 50+ hiring partner companies."
    },
    {
      question: "What is the duration of the Digital Marketing course at IDS?",
      answer: "The duration ranges from 2 months (Business Owners), 3 months (Foundation/Specialist), to 6 months (Master in Digital Marketing) including a guaranteed 3-month practical industry internship."
    },
    {
      question: "What is the difference between Master, Specialist, and Foundation courses at IDS?",
      answer: "The Master Course (6 Months) covers 50+ modules including AI tools, performance marketing, and 10+ live projects with 100% internship. The Specialist Course (3 Months) focuses deeply on SEO, PPC, and SMM, while the Foundation course provides a swift entry-level overview."
    },
    {
      question: "Is there a guaranteed internship included in the digital marketing course?",
      answer: "Yes, all comprehensive programs at IDS include a verified 3-month industry internship where students manage live client campaigns and real ad budgets."
    },
    {
      question: "What is the job placement success rate at IDS Noida?",
      answer: "IDS maintains a 90%+ placement success rate, having placed over 2,000+ students across top digital agencies, tech startups, and MNCs in Delhi NCR with starting packages between ₹3.5 LPA and ₹8.5 LPA."
    },
    {
      question: "What digital marketing tools and AI software will I master?",
      answer: "You will master Google Analytics 4, Google Search Console, Semrush, Meta Ads Manager, Google Ads (Search & PMax), Mailchimp, HubSpot CRM, Canva, ChatGPT prompt workflows, and conversion optimization tools."
    },
    {
      question: "What is the fee structure and are there No-Cost EMI payment options?",
      answer: "IDS offers pocket-friendly fee structures tailored to each course tier with flexible No-Cost EMI installment plans and special scholarships for college students."
    },
    {
      question: "Are the digital marketing classes suitable for beginners with no technical background?",
      answer: "Absolutely! Over 70% of our students come from non-technical, arts, commerce, or non-marketing backgrounds. We start from foundational fundamentals and build up to advanced campaign execution."
    },
    {
      question: "Can working professionals and entrepreneurs join weekend batches?",
      answer: "Yes! We offer dedicated Saturday/Sunday weekend batches, late evening cohorts, and hybrid online/offline learning models designed specifically for working executives."
    },
    {
      question: "Will I get recognized certifications after completing the course?",
      answer: "Yes, you receive the verified IDS Master Certification along with global industry credentials from Google, Meta, HubSpot, and MSME Government of India."
    },
    {
      question: "Can I attend digital marketing classes online if I am unable to join the Noida campus?",
      answer: "Yes! We offer interactive live online classes with screen sharing, real-time doubt solving, and full LMS recording access for students across India and globally."
    },
    {
      question: "Do you offer 1:1 Digital Marketing coaching for business owners?",
      answer: "Yes, IDS offers customized 1:1 executive coaching for business owners, entrepreneurs, and freelancers looking to scale their online customer acquisition and lead generation funnels."
    },
    {
      question: "What topics are covered in the digital marketing curriculum?",
      answer: "The curriculum covers Search Engine Optimization (SEO), Pay-Per-Click (PPC & Google Ads), Social Media Marketing (SMM & Meta Ads), Content Strategy, Web Analytics (GA4), Marketing Automation, AI Marketing, and E-commerce Scaling."
    },
    {
      question: "Where is the IDS physical campus located?",
      answer: "Our flagship campus is located in Sector 62, Noida, easily accessible via the Noida Electronic City Metro Station (Blue Line)."
    },
    {
      question: "What is the typical salary package for freshers after course completion?",
      answer: "Freshers trained at IDS typically secure starting salary packages between ₹3.5 LPA and ₹5.5 LPA, while candidates with prior experience moving into growth roles secure packages up to ₹8.5+ LPA."
    },
    {
      question: "How can I book a free demo session or speak with a career counselor?",
      answer: "You can book a free live demo session directly through our website or contact our counseling desk to schedule a 1:1 career guidance consultation."
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our courses and services
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg hover:from-[#AA2526] hover:to-[#EA2525] transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQ;
