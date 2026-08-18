import About from "@/components/pages/About";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Institute of Digital Studies (IDS) | Our Story & Values",
  description:
    "Learn about IDS, India's leading AI-powered digital marketing institute in Noida. 3500+ students trained, 100% placement assistance & industry expert mentors.",
  keywords: [
    "about IDS",
    "Institute of Digital Studies",
    "digital marketing institute Noida",
    "digital marketing training academy",
    "AI powered digital marketing course",
    "IDS mentors",
  ],
  alternates: {
    canonical: "https://idigitalstudies.com/about",
  },
  openGraph: {
    title: "About Institute of Digital Studies (IDS) | Our Story & Values",
    description:
      "Learn about IDS, India's leading AI-powered digital marketing institute in Noida. 3500+ students trained, 100% placement assistance & industry expert mentors.",
    url: "https://idigitalstudies.com/about",
    type: "website",
    images: [
      {
        url: "/assets/IdsCertificate.jpg",
        width: 1200,
        height: 630,
        alt: "About Institute of Digital Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Institute of Digital Studies (IDS) | Our Story & Values",
    description:
      "Learn about IDS, India's leading AI-powered digital marketing institute in Noida. 3500+ students trained, 100% placement assistance & industry expert mentors.",
  },
};

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://idigitalstudies.com" },
    { name: "About Us", url: "https://idigitalstudies.com/about" },
  ]);

  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
      <About />
    </>
  );
}


