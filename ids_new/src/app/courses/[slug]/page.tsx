import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCourseBySlug, getAllCourseSlugs, COURSES_DATA } from "@/data/coursesData";
import CourseDetailView from "@/components/course/CourseDetailView";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCourseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

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
      canonical: `https://idigitalstudies.com/courses/${course.slug}`,
    },
  };
}

export default async function DynamicCoursePage({ params }: PageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  return <CourseDetailView course={course} />;
}
