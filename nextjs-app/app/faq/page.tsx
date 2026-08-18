import FAQ from "@/components/pages/FAQ";
import JsonLd from "@/components/JsonLd";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Course FAQs | Institute of Digital Studies (IDS)",
  description:
    "Get answers to common questions about IDS digital marketing courses in Noida: course duration, syllabus, fees, 100% internship, certifications, and 1:1 mentorship.",
  keywords: [
    "digital marketing course FAQs",
    "digital marketing institute Noida FAQs",
    "IDS Noida questions",
    "digital marketing course fees Noida",
    "digital marketing internship Noida",
  ],
  alternates: {
    canonical: "https://idigitalstudies.com/faq",
  },
  openGraph: {
    title: "Digital Marketing Course FAQs | Institute of Digital Studies (IDS)",
    description:
      "Get answers to common questions about IDS digital marketing courses in Noida: course duration, syllabus, fees, 100% internship, certifications, and 1:1 mentorship.",
    url: "https://idigitalstudies.com/faq",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Course FAQs | Institute of Digital Studies (IDS)",
    description:
      "Get answers to common questions about IDS digital marketing courses in Noida: course duration, syllabus, fees, 100% internship, certifications, and 1:1 mentorship.",
  },
};

const faqData = [
  {
    question: "What makes Institute of Digital Studies (IDS) the best digital marketing institute in Noida?",
    answer:
      "Institute of Digital Studies (IDS) is known for its industry-relevant curriculum, expert trainers, hands-on experience, and personalized attention. We ensure our students gain practical knowledge that is directly applicable to real-world digital marketing challenges.",
  },
  {
    question: "What is the duration of the Digital Marketing course in Noida at Institute of Digital Studies (IDS)?",
    answer:
      "The duration of our Digital Marketing course ranges from 3 months for specialized programs to 6 months for comprehensive courses, including internships and practical training.",
  },
  {
    question: "Is there an internship included in the digital marketing course at Institute of Digital Studies (IDS)?",
    answer:
      "Yes, we offer a 100% Internship as part of our 6-month Digital Marketing course to provide students with hands-on industry experience.",
  },
  {
    question: "What topics are covered in the Digital Marketing course in Noida?",
    answer:
      "Our Digital Marketing course covers SEO, SEM, Social Media Marketing (SMM), Content Marketing, Google Analytics, PPC, Email Marketing, Affiliate Marketing, and much more.",
  },
  {
    question: "Are the digital marketing classes in Noida offered by Institute of Digital Studies (IDS) suitable for beginners?",
    answer:
      "Absolutely! Our Digital Marketing courses are designed to cater to both beginners and experienced professionals. We start with foundational concepts and gradually move to advanced strategies.",
  },
  {
    question: "Will I get certification after completing the digital marketing course?",
    answer:
      "Yes, Institute of Digital Studies (IDS) provides a certification upon completion of the course, which is recognized by industry leaders and enhances your credibility as a digital marketing professional.",
  },
  {
    question: "How do I enroll in the Digital Marketing course at Institute of Digital Studies (IDS) in Noida?",
    answer:
      "You can enroll by visiting our website or contacting our admissions team for a free consultation. We'll guide you through the process and help you choose the right course based on your goals.",
  },
  {
    question: "What is the fee structure for the Digital Marketing course at Institute of Digital Studies (IDS)?",
    answer:
      "The fee structure depends on the course type and duration. For detailed information, please visit our website or contact our team for the most accurate pricing details.",
  },
  {
    question: "Do you offer 1:1 Digital Marketing classes in Noida?",
    answer:
      "Yes, Institute of Digital Studies (IDS) offers 1:1 Digital Marketing coaching for business owners and professionals who need personalized attention and tailored strategies to grow their businesses online.",
  },
  {
    question: "Can I attend digital marketing classes online if I am unable to join the Noida campus?",
    answer:
      "Yes, we offer online digital marketing classes for students across the globe. Our virtual classes provide the same level of training, resources, and support as in-person classes in Noida.",
  },
];

export default function FAQPage() {
  const faqSchema = generateFAQSchema(faqData);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://idigitalstudies.com" },
    { name: "FAQs", url: "https://idigitalstudies.com/faq" },
  ]);

  return (
    <>
      <JsonLd schema={[faqSchema, breadcrumbSchema]} />
      <FAQ />
    </>
  );
}


