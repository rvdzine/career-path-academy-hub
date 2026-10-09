import { Metadata } from "next";
import { getCourseBySlug } from "@/data/coursesData";
import CourseDetailView from "@/components/course/CourseDetailView";

interface PageProps {
  searchParams?: Promise<{ course?: string }>;
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const courseSlug = resolvedSearchParams.course || "master-in-digital-marketing";
  const course = getCourseBySlug(courseSlug);

  return {
    title: `${course.seoTitle} | Institute of Digital Studies (IDS)`,
    description: course.seoDescription,
    keywords: course.keywords,
    openGraph: {
      title: `${course.name} | Institute of Digital Studies`,
      description: course.seoDescription,
      images: [
        {
          url: course.bannerImage,
          width: 1200,
          height: 675,
          alt: course.name,
        },
      ],
      type: "website",
    },
    alternates: {
      canonical: "https://idigitalstudies.com/digital-marketing-course",
    },
  };
}

export default async function DigitalMarketingCourseRoute({ searchParams }: PageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const courseSlug = resolvedSearchParams.course || "master-in-digital-marketing";
  const course = getCourseBySlug(courseSlug);

  return <CourseDetailView course={course} />;
}
