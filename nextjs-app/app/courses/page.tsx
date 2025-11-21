import type { Metadata } from "next";
import Courses from "@/components/pages/Courses";

export const metadata: Metadata = {
  title: "Digital Marketing Courses | iDigitalStudies",
  description:
    "Explore comprehensive Digital Marketing courses at iDigitalStudies. Learn SEO, PPC, Social Media Marketing, Content Strategy, and more with hands-on projects and expert mentorship.",
  keywords: [
    "digital marketing courses",
    "digital marketing training",
    "SEO course",
    "PPC course",
    "social media marketing course",
    "digital marketing institute",
  ],
  openGraph: {
    title: "Digital Marketing Courses | iDigitalStudies",
    description:
      "Explore comprehensive Digital Marketing courses at iDigitalStudies. Learn SEO, PPC, Social Media Marketing, Content Strategy, and more with hands-on projects and expert mentorship.",
    url: "https://www.idigitalstudies.com/courses",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Courses | iDigitalStudies",
    description:
      "Explore comprehensive Digital Marketing courses at iDigitalStudies. Learn SEO, PPC, Social Media Marketing, Content Strategy, and more with hands-on projects and expert mentorship.",
  },
};

export default function CoursesPage() {
  return <Courses />;
}

