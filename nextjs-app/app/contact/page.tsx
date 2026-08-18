import Contact from "@/components/pages/Contact";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Institute of Digital Studies | Get in Touch (IDS)",
  description:
    "Contact IDS for digital marketing course inquiries & counseling. Visit our Noida center or call +91 93154 71293. Book a free demo class today!",
  keywords: [
    "contact IDS",
    "Institute of Digital Studies contact",
    "digital marketing course admission Noida",
    "digital marketing institute Noida phone number",
    "IDS Noida location",
  ],
  alternates: {
    canonical: "https://idigitalstudies.com/contact",
  },
  openGraph: {
    title: "Contact Institute of Digital Studies | Get in Touch (IDS)",
    description:
      "Contact IDS for digital marketing course inquiries & counseling. Visit our Noida center or call +91 93154 71293. Book a free demo class today!",
    url: "https://idigitalstudies.com/contact",
    type: "website",
    images: [
      {
        url: "/assets/offsectionimg.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Institute of Digital Studies Noida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Institute of Digital Studies | Get in Touch (IDS)",
    description:
      "Contact IDS for digital marketing course inquiries & counseling. Visit our Noida center or call +91 93154 71293. Book a free demo class today!",
  },
};

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://idigitalstudies.com" },
    { name: "Contact Us", url: "https://idigitalstudies.com/contact" },
  ]);

  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
      <Contact />
    </>
  );
}


