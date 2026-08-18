import type { Metadata } from "next";
import Blog from "@/components/pages/Blog";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Digital Marketing Blog & Guides | Institute of Digital Studies",
  description:
    "Read expert digital marketing insights, tutorials, and career tips from IDS. Learn SEO, AI marketing, PPC, social media strategies & industry trends.",
  keywords: [
    "digital marketing blog",
    "digital marketing tips",
    "SEO tutorials",
    "AI in digital marketing",
    "social media marketing guides",
    "digital marketing trends Noida",
  ],
  alternates: {
    canonical: "https://idigitalstudies.com/blog",
  },
  openGraph: {
    title: "Digital Marketing Blog & Guides | Institute of Digital Studies",
    description:
      "Read expert digital marketing insights, tutorials, and career tips from IDS. Learn SEO, AI marketing, PPC, social media strategies & industry trends.",
    url: "https://idigitalstudies.com/blog",
    type: "website",
    images: [
      {
        url: "/assets/Blog1.png",
        width: 1200,
        height: 630,
        alt: "Institute of Digital Studies Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Blog & Guides | Institute of Digital Studies",
    description:
      "Read expert digital marketing insights, tutorials, and career tips from IDS. Learn SEO, AI marketing, PPC, social media strategies & industry trends.",
  },
};

export default function BlogPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://idigitalstudies.com" },
    { name: "Blog", url: "https://idigitalstudies.com/blog" },
  ]);

  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
      <Blog />
    </>
  );
}


