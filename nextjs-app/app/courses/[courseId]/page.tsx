import DynamicCourseDetails from "@/components/pages/DynamicCourseDetails";
import JsonLd from "@/components/JsonLd";
import { generateCourseSchema, generateBreadcrumbSchema } from "@/lib/schema";
import type { Metadata } from "next";

interface CourseDetailsPageProps {
  params: Promise<{ courseId: string }>;
}

const courseDetailsData: Record<
  string,
  {
    title: string;
    description: string;
    keywords: string[];
    duration: string;
    courseMode: 'Online' | 'Offline' | 'Blended';
    price?: number | string;
    educationalCredentialAwarded?: string;
    ratingValue: number;
    reviewCount: number;
  }
> = {
  "master-in-digital-marketing-course": {
    title: "Master in Digital Marketing Course | iDigitalStudies",
    description:
      "Join iDigitalStudies' Master in Digital Marketing Course and gain expertise in SEO, PPC, social media, content, and analytics. Build a strong career with hands-on projects and expert mentorship.",
    keywords: ["master in digital marketing", "master in digital marketing course", "digital marketing course in noida"],
    duration: "P6M",
    courseMode: "Blended",
    educationalCredentialAwarded: "Master Certification in Digital Marketing",
    ratingValue: 4.9,
    reviewCount: 380,
  },
  "specialist-in-digital-marketing": {
    title: "Digital Marketing Specialist Course in Noida | iDigitalStudies",
    description:
      "Master SEO, PPC, social media & more with idigitalstudies' Digital Marketing Specialist Course. Get hands-on training, expert guidance, and boost your career in digital marketing.",
    keywords: ["digital marketing specialist course", "specialist in digital marketing"],
    duration: "P3M",
    courseMode: "Blended",
    educationalCredentialAwarded: "Specialist Certification in Digital Marketing",
    ratingValue: 4.8,
    reviewCount: 240,
  },
  "digital-marketing-course-for-business-owners": {
    title: "Digital Marketing Course for Business Owners | iDigitalStudies",
    description:
      "Enroll in iDigitalStudies' Digital Marketing Course for Business Owners. Learn practical strategies to grow your business online with expert-led training.",
    keywords: ["digital marketing course for business owners", "business marketing training"],
    duration: "P2M",
    courseMode: "Blended",
    educationalCredentialAwarded: "Executive Certificate in Digital Business Growth",
    ratingValue: 4.9,
    reviewCount: 160,
  },
  "foundation-in-digital-marketing": {
    title: "Foundation in Digital Marketing Course in Noida | Get Certified",
    description:
      "Launch your career with our Foundation in Digital Marketing course in Noida. Learn SEO, Social Media, PPC, Email Marketing & more. Hands-on training with live projects and placement assistance. Enroll now!",
    keywords: ["foundation in digital marketing", "foundation in digital marketing course in Noida"],
    duration: "P3M",
    courseMode: "Blended",
    educationalCredentialAwarded: "Foundation Certificate in Digital Marketing",
    ratingValue: 4.8,
    reviewCount: 190,
  },
};

export async function generateMetadata({ params }: CourseDetailsPageProps): Promise<Metadata> {
  const { courseId } = await params;
  const course = courseDetailsData[courseId];

  if (!course) {
    return {
      title: "Course Not Found | iDigitalStudies",
      description: "The course you're looking for could not be found.",
      keywords: [],
    };
  }

  return {
    title: course.title,
    description: course.description,
    keywords: course.keywords,
    alternates: {
      canonical: `https://idigitalstudies.com/courses/${courseId}`,
    },
    openGraph: {
      title: course.title,
      description: course.description,
      url: `https://idigitalstudies.com/courses/${courseId}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: course.title,
      description: course.description,
    },
  };
}

export default async function CourseDetailsPage({ params }: CourseDetailsPageProps) {
  const { courseId } = await params;
  const course = courseDetailsData[courseId];

  const courseSchema = course
    ? generateCourseSchema({
        name: course.title,
        description: course.description,
        url: `https://idigitalstudies.com/courses/${courseId}`,
        duration: course.duration,
        courseMode: course.courseMode,
        educationalCredentialAwarded: course.educationalCredentialAwarded,
        ratingValue: course.ratingValue,
        reviewCount: course.reviewCount,
      })
    : null;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://idigitalstudies.com" },
    { name: "Courses", url: "https://idigitalstudies.com/courses" },
    {
      name: course ? course.title.split("|")[0].trim() : "Course Details",
      url: `https://idigitalstudies.com/courses/${courseId}`,
    },
  ]);

  return (
    <>
      {courseSchema && <JsonLd schema={[courseSchema, breadcrumbSchema]} />}
      <DynamicCourseDetails />
    </>
  );
}


