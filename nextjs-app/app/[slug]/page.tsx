import { notFound } from "next/navigation";
import CityPageTemplate from "@/app/templates/CityPageTemplate";

const cities = [
  "dwarka",
  "noida",
  "gurugram",
  "kalkaji",
  "pitampura",
  "preet-vihar",
  "rajouri-garden",
  "south-extension",
  "south-campus",
];

export async function generateStaticParams() {
  return cities.map((city) => ({
    slug: `digital-marketing-course-in-${city}`
  }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
) {

  const { slug } = await params;

  const city = slug.replace("digital-marketing-course-in-", "");

  const formattedCity = city
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return {
    title: `Digital Marketing Course in ${formattedCity} | IDS`,
    description: `Join the best Digital Marketing Course in ${formattedCity}. Learn SEO, PPC, Social Media Marketing with live projects.`,
  };
}

export default async function Page(
  { params }: { params: Promise<{ slug: string }> }
) {

  const { slug } = await params;

  const city = slug.replace("digital-marketing-course-in-", "");

  if (!cities.includes(city)) {
    notFound();
  }

  return <CityPageTemplate city={city} />;
}