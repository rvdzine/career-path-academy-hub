import type { Metadata } from "next";
import PlacedStudentsClient from "@/components/pages/PlacedStudentsClient";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Placed Students & Success Stories | Institute of Digital Studies",
  description:
    "Discover placed students & alumni success stories from IDS Noida. Verified certificate verification, hiring companies, and salary packages.",
  keywords: [
    "placed students IDS",
    "digital marketing alumni",
    "student success stories",
    "IDS certificate verification",
    "digital marketing jobs Noida",
  ],
  alternates: {
    canonical: "https://idigitalstudies.com/placed-students",
  },
  openGraph: {
    title: "Placed Students & Success Stories | Institute of Digital Studies",
    description:
      "Discover placed students & alumni success stories from IDS Noida. Verified certificate verification, hiring companies, and salary packages.",
    url: "https://idigitalstudies.com/placed-students",
    type: "website",
    images: [
      {
        url: "/assets/IdsCertificate.jpg",
        width: 1200,
        height: 630,
        alt: "Placed Students of Institute of Digital Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Placed Students & Success Stories | Institute of Digital Studies",
    description:
      "Discover placed students & alumni success stories from IDS Noida. Verified certificate verification, hiring companies, and salary packages.",
  },
};

export default function PlacedStudentsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://idigitalstudies.com" },
    { name: "Placed Students", url: "https://idigitalstudies.com/placed-students" },
  ]);

  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
      <PlacedStudentsClient />
    </>
  );
}
