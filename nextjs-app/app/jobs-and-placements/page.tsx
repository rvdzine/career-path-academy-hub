import Placement from "@/components/pages/Placement";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/schema";
import type { Metadata } from "next";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Jobs & Placements | 100% Career Support at IDS Noida",
  description:
    "Explore digital marketing jobs & 100% internship placement support at IDS. 2000+ students placed across 50+ hiring partners with top salary packages.",
  keywords: [
    "digital marketing jobs",
    "digital marketing placement Noida",
    "digital marketing internship",
    "hiring partners IDS",
    "digital marketing salary packages",
  ],
  alternates: {
    canonical: "https://idigitalstudies.com/jobs-and-placements",
  },
  openGraph: {
    title: "Jobs & Placements | 100% Career Support at IDS Noida",
    description:
      "Explore digital marketing jobs & 100% internship placement support at IDS. 2000+ students placed across 50+ hiring partners with top salary packages.",
    url: "https://idigitalstudies.com/jobs-and-placements",
    type: "website",
    images: [
      {
        url: "/assets/IdsCertificate.jpg",
        width: 1200,
        height: 630,
        alt: "Jobs & Placements at IDS Noida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jobs & Placements | 100% Career Support at IDS Noida",
    description:
      "Explore digital marketing jobs & 100% internship placement support at IDS. 2000+ students placed across 50+ hiring partners with top salary packages.",
  },
};

export default function PlacementPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://idigitalstudies.com" },
    { name: "Jobs & Placements", url: "https://idigitalstudies.com/jobs-and-placements" },
  ]);

  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
      <Placement />
    </>
  );
}


