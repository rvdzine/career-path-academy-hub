import { notFound } from "next/navigation";
import CityPageTemplate from "@/app/templates/CityPageTemplate";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { cityData } from "@/lib/cityData";
import type { Metadata } from "next";

const cities = Object.keys(cityData);

export async function generateStaticParams() {
  return cities.map((city) => ({
    slug: `digital-marketing-course-in-${city}`,
  }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const cityKey = slug.replace("digital-marketing-course-in-", "");
  const city = cityData[cityKey];

  if (!city) {
    return {
      title: "Digital Marketing Course | Institute of Digital Studies",
      description: "Join the best Digital Marketing Course in Delhi NCR.",
    };
  }

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    keywords: [
      `digital marketing course in ${city.cityName.toLowerCase()}`,
      `best digital marketing institute in ${city.cityName.toLowerCase()}`,
      `digital marketing classes ${city.cityName.toLowerCase()}`,
      `digital marketing training ${city.region.toLowerCase()}`,
      "digital marketing course with placement",
    ],
    alternates: {
      canonical: `https://idigitalstudies.com/${slug}`,
    },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: `https://idigitalstudies.com/${slug}`,
      type: "website",
      images: [
        {
          url: "/assets/IdsCertificate.jpg",
          width: 1200,
          height: 630,
          alt: `Digital Marketing Course in ${city.cityName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: city.metaTitle,
      description: city.metaDescription,
    },
  };
}

export default async function Page(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const cityKey = slug.replace("digital-marketing-course-in-", "");
  const city = cityData[cityKey];

  if (!city) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://idigitalstudies.com" },
    { name: `Course in ${city.cityName}`, url: `https://idigitalstudies.com/${slug}` },
  ]);

  const faqSchema = generateFAQSchema(city.cityFaqs);

  return (
    <>
      <JsonLd schema={[breadcrumbSchema, faqSchema]} />
      <CityPageTemplate city={cityKey} />
    </>
  );
}