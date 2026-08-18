/**
 * Centralized Schema.org (JSON-LD) Generator Library
 * Provides type-safe builders for Structured Data markup across iDigitalStudies.
 * Conforms to Google Search Central and Schema.org specifications.
 */

export interface OrganizationSchemaParams {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
  telephone?: string;
  email?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    latitude: string | number;
    longitude: string | number;
  };
  sameAs?: string[];
}

export interface CourseSchemaParams {
  name: string;
  description: string;
  providerName?: string;
  providerUrl?: string;
  url?: string;
  duration?: string; // ISO 8601 duration format, e.g. "P6M" for 6 months, "P3M" for 3 months
  courseMode?: 'Online' | 'Offline' | 'Blended';
  inLanguage?: string;
  educationalCredentialAwarded?: string;
  price?: number | string;
  priceCurrency?: string;
  ratingValue?: number;
  reviewCount?: number;
  syllabusUrl?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ArticleSchemaParams {
  headline: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  authorUrl?: string;
  publisherName?: string;
  publisherLogo?: string;
  keywords?: string[];
  articleBody?: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface LocalBusinessSchemaParams extends OrganizationSchemaParams {
  priceRange?: string;
  openingHours?: string[];
  image?: string[];
}

const DEFAULT_BASE_URL = 'https://idigitalstudies.com';
const DEFAULT_ORG_NAME = 'Institute of Digital Studies (IDS)';
const DEFAULT_LOGO = 'https://idigitalstudies.com/IDS_LOGO.svg';
const DEFAULT_PHONE = '+919315471293';
const DEFAULT_EMAIL = 'info@idigitalstudies.com';

const DEFAULT_ADDRESS = {
  streetAddress: 'T3, B1603, NXOne, TechZone 4, Opposite Gaur City Mall',
  addressLocality: 'Greater Noida',
  addressRegion: 'Uttar Pradesh',
  postalCode: '201306',
  addressCountry: 'IN',
};

const DEFAULT_SOCIAL_LINKS = [
  'https://www.facebook.com/instituteofdigitalstudies/',
  'https://www.instagram.com/instituteofdigitalstudies/',
  'https://www.linkedin.com/company/institute-of-digital-marketing-studies/',
  'https://www.youtube.com/@instituteofdigitalstudies5567',
];

/**
 * Generates an Organization schema for the root website.
 */
export function generateOrganizationSchema(params?: OrganizationSchemaParams) {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    '@id': `${params?.url || DEFAULT_BASE_URL}/#organization`,
    name: params?.name || DEFAULT_ORG_NAME,
    url: params?.url || DEFAULT_BASE_URL,
    logo: {
      '@type': 'ImageObject',
      url: params?.logo || DEFAULT_LOGO,
    },
    description:
      params?.description ||
      'Institute of Digital Studies (IDS) is a premier AI-Integrated Digital Marketing Institute offering practical training in SEO, PPC, SMO with 100% placement assistance.',
    email: params?.email || DEFAULT_EMAIL,
    telephone: params?.telephone || DEFAULT_PHONE,
    address: {
      '@type': 'PostalAddress',
      streetAddress: params?.address?.streetAddress || DEFAULT_ADDRESS.streetAddress,
      addressLocality: params?.address?.addressLocality || DEFAULT_ADDRESS.addressLocality,
      addressRegion: params?.address?.addressRegion || DEFAULT_ADDRESS.addressRegion,
      postalCode: params?.address?.postalCode || DEFAULT_ADDRESS.postalCode,
      addressCountry: params?.address?.addressCountry || DEFAULT_ADDRESS.addressCountry,
    },
    sameAs: params?.sameAs || DEFAULT_SOCIAL_LINKS,
  };
}

/**
 * Generates a LocalBusiness schema for physical Noida / Greater Noida campus.
 */
export function generateLocalBusinessSchema(params?: LocalBusinessSchemaParams) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${params?.url || DEFAULT_BASE_URL}/#localbusiness`,
    name: params?.name || DEFAULT_ORG_NAME,
    url: params?.url || DEFAULT_BASE_URL,
    logo: params?.logo || DEFAULT_LOGO,
    image: params?.image || [DEFAULT_LOGO],
    telephone: params?.telephone || DEFAULT_PHONE,
    email: params?.email || DEFAULT_EMAIL,
    priceRange: params?.priceRange || '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: params?.address?.streetAddress || DEFAULT_ADDRESS.streetAddress,
      addressLocality: params?.address?.addressLocality || DEFAULT_ADDRESS.addressLocality,
      addressRegion: params?.address?.addressRegion || DEFAULT_ADDRESS.addressRegion,
      postalCode: params?.address?.postalCode || DEFAULT_ADDRESS.postalCode,
      addressCountry: params?.address?.addressCountry || DEFAULT_ADDRESS.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: params?.geo?.latitude || 28.6019,
      longitude: params?.geo?.longitude || 77.4326,
    },
    sameAs: params?.sameAs || DEFAULT_SOCIAL_LINKS,
  };
}

/**
 * Generates a Course schema for individual course pages.
 */
export function generateCourseSchema(params: CourseSchemaParams) {
  const schema: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: params.name,
    description: params.description,
    provider: {
      '@type': 'EducationalOrganization',
      name: params.providerName || DEFAULT_ORG_NAME,
      sameAs: params.providerUrl || DEFAULT_BASE_URL,
    },
    inLanguage: params.inLanguage || 'en',
    courseMode: params.courseMode || 'Blended',
  };

  if (params.url) {
    schema.url = params.url;
  }

  if (params.duration) {
    schema.timeRequired = params.duration;
  }

  if (params.educationalCredentialAwarded) {
    schema.educationalCredentialAwarded = params.educationalCredentialAwarded;
  }

  if (params.price !== undefined) {
    schema.offers = {
      '@type': 'Offer',
      price: params.price,
      priceCurrency: params.priceCurrency || 'INR',
      category: 'Paid',
      availability: 'https://schema.org/InStock',
    };
  }

  if (params.ratingValue && params.reviewCount) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: params.ratingValue,
      reviewCount: params.reviewCount,
      bestRating: 5,
      worstRating: 1,
    };
  }

  return schema;
}

/**
 * Generates FAQPage schema for FAQ pages and accordion sections.
 */
export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generates Article / BlogPosting schema for blog detail pages.
 */
export function generateArticleSchema(params: ArticleSchemaParams) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': params.url,
    },
    headline: params.headline,
    description: params.description,
    image: params.image ? [params.image] : undefined,
    datePublished: params.datePublished,
    dateModified: params.dateModified || params.datePublished,
    author: {
      '@type': 'Organization',
      name: params.authorName || DEFAULT_ORG_NAME,
      url: params.authorUrl || DEFAULT_BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: params.publisherName || DEFAULT_ORG_NAME,
      logo: {
        '@type': 'ImageObject',
        url: params.publisherLogo || DEFAULT_LOGO,
      },
    },
    keywords: params.keywords?.join(', '),
    articleBody: params.articleBody,
  };
}

/**
 * Generates BreadcrumbList schema for enhanced navigation snippets in Google SERP.
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
