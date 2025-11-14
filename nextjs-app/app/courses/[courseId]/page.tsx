import DynamicCourseDetails from "@/components/pages/DynamicCourseDetails";
import type { Metadata } from "next";

interface CourseDetailsPageProps {
  params: Promise<{ courseId: string }>;
}

export async function generateMetadata({ params }: CourseDetailsPageProps): Promise<Metadata> {
  const { courseId } = await params;

  const courseMetadata: Record<string, { title: string; description: string; keywords: string[] }> = {
    "master-in-digital-marketing-course": {
      title: "Master in Digital Marketing Course| iDigitalStudies",
      description:
        "Join iDigitalStudies' Master in Digital Marketing Course and gain expertise in SEO, PPC, social media, content, and analytics. Build a strong career with hands-on projects and expert mentorship.",
      keywords: ["master in digital marketing", "master in digital marketing course"],
    },
    "specialist-in-digital-marketing": {
      title: "Digital Marketing Specialist Course in Noida | iDigitalStudies",
      description:
        "Master SEO, PPC, social media & more with idigitalstudies' Digital Marketing Specialist Course. Get hands-on training, expert guidance, and boost your career in digital marketing.",
      keywords: ["digital marketing specialist course"],
    },
    "digital-marketing-course-for-business-owners": {
      title: "Digital Marketing Course for Business Owners | iDigitalStudies",
      description:
        "Enroll in iDigitalStudies' Digital Marketing Course for Business Owners. Learn practical strategies to grow your business online with expert-led training.",
      keywords: ["digital marketing course for business owners"],
    },
    "foundation-in-digital-marketing": {
      title: "Foundation in Digital Marketing Course in Noida | Get Certified",
      description:
        "Launch your career with our Foundation in Digital Marketing course in Noida. Learn SEO, Social Media, PPC, Email Marketing & more. Hands-on training with live projects and placement assistance. Enroll now!",
      keywords: ["foundation in digital marketing", "foundation in digital marketing course in Noida"],
    },
  };

  const course = courseMetadata[courseId];

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
    openGraph: {
      title: course.title,
      description: course.description,
      url: `https://www.idigitalstudies.com/courses/${courseId}`,
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
  return <DynamicCourseDetails />;
}

