import type { Metadata } from "next";
import { Instrument_Sans, Caveat } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument",
  weight: ["400", "500", "600", "700"],
});

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caveat",
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "IDS - Master In-Demand Skills For A High-Growth Career",
  description:
    "Key Reasons To Join IDS · Industry Experienced Mentors · Lifetime LMS Access · Hands-On Virtual Internships · Dedicated Placement Assistance.",
  keywords: [
    "IDS",
    "Institute of Digital Studies",
    "Digital Marketing Institute",
    "Data Analytics Master Course",
    "Digital Marketing Course",
    "Financial Modeling Course",
    "Investment Banking Course",
    "UI UX Design Course",
    "Placement Assistance Courses",
    "Virtual Internships",
  ],
  authors: [{ name: "IDS - Institute of Digital Studies" }],
  creator: "IDS",
  publisher: "IDS",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://idigitalstudies.com/",
  },
  openGraph: {
    title: "IDS - Master In-Demand Skills For A High-Growth Career",
    description:
      "Industry Experienced Mentors · Lifetime LMS Access · Hands-On Virtual Internships · Dedicated Placement Assistance.",
    url: "https://idigitalstudies.com/",
    siteName: "IDS",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IDS - Master In-Demand Skills For A High-Growth Career",
    description:
      "Industry Experienced Mentors · Lifetime LMS Access · Hands-On Virtual Internships · Dedicated Placement Assistance.",
    creator: "@idigitalstudies",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://idigitalstudies.com/#organization",
        name: "IDS - Institute of Digital Studies",
        url: "https://idigitalstudies.com/",
        logo: "https://idigitalstudies.com/assets/IDS_new_logo.svg",
        description:
          "IDS offers professional certification courses in digital marketing, data analytics, finance, UI/UX design, and in-demand tech skills.",
        telephone: "+91 9315471293",
        email: "info@idigitalstudies.com",
        sameAs: [
          "https://www.linkedin.com/school/ids-institute/",
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "920",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://idigitalstudies.com/#website",
        url: "https://idigitalstudies.com/",
        name: "IDS",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://idigitalstudies.com/?s={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning className={`${instrumentSans.variable} ${caveat.variable} h-full antialiased scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${instrumentSans.className} min-h-full flex flex-col font-sans bg-white text-slate-900 selection:bg-rose-100 selection:text-[#fe4759]`}
      >
        {children}
      </body>
    </html>
  );
}
