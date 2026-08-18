import BlogDetail from "@/components/pages/BlogDetail";
import JsonLd from "@/components/JsonLd";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";
import axios from "axios";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

const fallbackBlogDetails: Record<
  string,
  { title: string; description: string; image: string; datePublished?: string }
> = {
  "local-seo-checklist-how-to-get-your-business-on-google-maps-for-free": {
    title: "Local SEO Checklist: How to Get Your Business on Google Maps for Free",
    description:
      "Step-by-step guide to get your business on Google Maps for free. Boost visibility, reviews, and local traffic with smart SEO tips.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    datePublished: "2025-01-10T09:00:00Z",
  },
  "what-is-quality-score-5-simple-ways-to-improve-it-in-google-ads": {
    title: "What is Quality Score? 5 Simple Ways to Improve It in Google Ads",
    description:
      "Learn what Quality Score means in Google Ads and 5 simple ways to improve it to get cheaper clicks and higher ad rankings.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    datePublished: "2025-01-12T09:00:00Z",
  },
  "how-to-use-negative-keywords-in-googleads-to-save-money": {
    title: "How to Use Negative Keywords in GoogleAds to Save Money",
    description: "Learn how to use negative keywords in Google Ads to block irrelevant clicks, save money, and boost campaign performance.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80",
    datePublished: "2025-01-15T09:00:00Z",
  },
  "how-to-read-a-basic-seo-report-for-website-owners": {
    title: "How to Read a Basic SEO Report (For Website Owners)?",
    description: "Learn how to read a simple SEO report, understand traffic data, rankings, backlinks, and find what’s really driving results.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    datePublished: "2025-01-18T09:00:00Z",
  },
  "beyond-rankings-how-to-measure-seos-true-impact-on-revenue": {
    title: "Beyond Rankings: How to Measure SEO's True Impact on Revenue?",
    description: "Stop chasing rankings and learn how to track SEO’s actual impact on sales, leads, and revenue with meaningful metrics.",
    image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1200&q=80",
    datePublished: "2025-01-20T09:00:00Z",
  },
  "how-to-leverage-people-also-ask-for-content-and-keyword-ideas": {
    title: "How to Leverage People Also Ask for Content and Keyword Ideas?",
    description: "Turn Google’s “People Also Ask” into a goldmine for keyword and content ideas that match user intent and boost SEO.",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80",
    datePublished: "2025-01-22T09:00:00Z",
  },
  "beginners-guide-to-schema-markup-types-that-boost-visibility": {
    title: "A Beginner's Guide to Schema Markup: Types That Boost Visibility",
    description: "Understand schema markup basics, top types to use, and how they boost search visibility and click-through rates",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    datePublished: "2025-01-25T09:00:00Z",
  },
  "how-to-structure-a-high-converting-ppc-landing-page": {
    title: "How to Structure a High-Converting PPC Landing Page?",
    description: "Learn how to design a PPC landing page that drives conversions, improves Quality Score, and reduces wasted ad spend.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80",
    datePublished: "2025-01-28T09:00:00Z",
  },
  "pmax-campaigns-how-to-set-them-up-for-success-not-just-sales": {
    title: "PMax Campaigns: How to Set Them Up for Success, Not Just Sales",
    description: "Master Google Performance Max campaigns learn setup tips, targeting strategies, and ways to drive real business growth.",
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=800",
    datePublished: "2025-02-01T09:00:00Z",
  },
  "seo-vs-ppc-whats-the-difference-and-which-should-you-use": {
    title: "SEO vs. PPC: What's the Difference and Which Should You Use?",
    description: "Understand the real difference between SEO and PPC, when to use each, and how to combine them for the best ROI.",
    image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51",
    datePublished: "2025-02-05T09:00:00Z",
  },
  "7-most-common-google-ads-mistakes-that-waste-your-budget": {
    title: "7 Most Common Google Ads Mistakes That Waste Your Budget",
    description: "Avoid these common Google Ads mistakes that waste money. Fix your targeting, keywords, and bidding to save budget.",
    image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1200&q=80",
    datePublished: "2025-02-08T09:00:00Z",
  },
  "how-to-do-basic-keyword-research-for-free-in-2025": {
    title: "How to Do Basic Keyword Research for Free in 2026 - Step by Step",
    description: "Find out how to do keyword research for free in 2026 using simple tools, smart strategies, and real search insights to grow your website growth and business.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    datePublished: "2025-02-12T09:00:00Z",
  },
  "how-to-run-a-winning-ab-test-on-facebook-ad-creative": {
    title: "How to Run a Winning A/B Test on Facebook Ad Creative",
    description: "Learn how to A/B test Facebook ad creatives the right way to test visuals, copy, and audience to find what truly converts.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    datePublished: "2025-02-15T09:00:00Z",
  },
  "how-to-use-google-ads-scripts-to-automate-boring-tasks": {
    title: "How to Use Google Ads Scripts to Automate Boring Tasks",
    description: "Save time and boost efficiency with Google Ads scripts. Learn easy automation tips to handle repetitive ad tasks.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    datePublished: "2025-02-18T09:00:00Z",
  },
  "meta-description-checklist-how-to-write-one-that-gets-clicks": {
    title: "Meta Description Checklist: How to Write One That Gets Clicks",
    description: "Write meta descriptions that attract clicks. Follow this quick checklist to boost CTR and stand out in Google results.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    datePublished: "2025-02-22T09:00:00Z",
  },
  "what-are-long-tail-keywords-and-why-they-are-easy-seo-wins": {
    title: "What Are Long-Tail Keywords? (And Why They Are Easy SEO Wins)",
    description: "Discover why long-tail keywords are low-competition, high-conversion SEO wins and how to find them easily.",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80",
    datePublished: "2025-02-25T09:00:00Z",
  },
  "how-to-repurpose-one-piece-of-content-across-all-social-channels": {
    title: "How to Repurpose One Piece of Content Across All Social Channels",
    description: "Turn one piece of content into dozens of posts. Learn how to repurpose blogs, videos, and reels smartly across channels.",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80",
    datePublished: "2025-02-28T09:00:00Z",
  },
  "social-listing-for-seo-find-content-gaps-and-unasked-questions": {
    title: "Social Listing for SEO: Find Content Gaps and Unasked Questions",
    description: "Use social Listing tools to find content gaps, trending topics, and unasked questions that can power your SEO strategy.",
    image: "https://images.unsplash.com/photo-1637606346315-d23ed32a6cfc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U2VvfGVufDB8fDB8fHww",
    datePublished: "2025-03-02T09:00:00Z",
  },
  "free-ai-tools-to-boost-your-digital-marketing-skills": {
    title: "Top 5 Free AI Tools to Boost Your Digital Marketing Skills in 2026",
    description: "Explore the top 5 free AI tools to enhance your digital marketing skills in 2026, from SEO and content creation to analytics and automation.",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80",
    datePublished: "2025-03-05T09:00:00Z",
  },
  "content-creation-tools-every-digital-marketer-should-try": {
    title: "Content Creation Tools Every Digital Marketer Should Try",
    description: "Discover tools for writing, designing, and video creation to boost your content marketing.",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80",
    datePublished: "2025-03-08T09:00:00Z",
  },
  "best-analytics-tools-to-track-your-marketing-performance": {
    title: "Best Analytics Tools to Track Your Marketing Performance",
    description: "Track your marketing success using analytics tools like GA4, SEMrush, and HubSpot.",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80",
    datePublished: "2025-03-12T09:00:00Z",
  },
  "how-to-use-chatgpt-for-digital-marketing-campaigns": {
    title: "How to Use ChatGPT for Digital Marketing Campaigns",
    description: "Learn how ChatGPT can help with content, ad copy, SEO, and strategy for your marketing campaigns.",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80",
    datePublished: "2025-03-15T09:00:00Z",
  },
  "essential-google-tools-every-digital-marketer-should-use": {
    title: "Essential Google Tools Every Digital Marketer Should Use",
    description: "Explore must-use Google tools like Analytics, Tag Manager, and Search Console for marketers.",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80",
    datePublished: "2025-03-18T09:00:00Z",
  },
  "how-to-practice-digital-marketing-without-spending-money": {
    title: "How to Practice Digital Marketing Without Spending Money",
    description: "Learn creative ways to practice campaigns, SEO, and ads without spending a single rupee.",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80",
    datePublished: "2025-03-22T09:00:00Z",
  },
  "the-complete-guide-to-learning-seo-in-30-days": {
    title: "The Complete Guide to Learning SEO in 30 Days",
    description: "Follow a 30-day action plan to master SEO covering keywords, on-page, backlinks, and analytics.",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80",
    datePublished: "2025-03-25T09:00:00Z",
  },
  "top-email-marketing-tools-for-beginners": {
    title: "Top Email Marketing Tools for Beginners",
    description: "Get started with beginner-friendly email marketing tools for automation, design, and analytics.",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80",
    datePublished: "2025-03-28T09:00:00Z",
  },
  "best-youtube-channels-to-learn-digital-marketing-in-hindi": {
    title: "Best YouTube Channels to Learn Digital Marketing in Hindi",
    description: "Explore the best Hindi YouTube channels to learn SEO, Google Ads, and social media marketing.",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80",
    datePublished: "2025-04-02T09:00:00Z",
  },
  "must-know-tools-for-every-digital-marketing-student": {
    title: "Must-Know Tools for Every Digital Marketing Student",
    description: "Discover essential tools for SEO, analytics, email, and content marketing every beginner should master.",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80",
    datePublished: "2025-04-05T09:00:00Z",
  },
  "is-a-digital-marketing-certificate-worth-it-in-2025": {
    title: "Is a Digital Marketing Certificate Worth It in 2025?",
    description: "Find out if digital marketing certifications are still valuable for getting jobs and promotions in 2025.",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80",
    datePublished: "2025-04-08T09:00:00Z",
  },
  "digital-marketing-course-syllabus-explained-module-wise": {
    title: "Digital Marketing Course Syllabus Explained (Module-Wise)",
    description: "A complete breakdown of a typical digital marketing syllabus covering SEO, SMM, content, and PPC modules.",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80",
    datePublished: "2025-04-12T09:00:00Z",
  },
  "how-to-learn-digital-marketing-without-any-prior-experience": {
    title: "How to Learn Digital Marketing Without Any Prior Experience",
    description: "Start from scratch! Learn how to build your digital marketing skills with free tools, courses, and practice.",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80",
    datePublished: "2025-04-15T09:00:00Z",
  },
  "what-to-expect-from-a-digital-marketing-internship-program": {
    title: "What to Expect from a Digital Marketing Internship Program",
    description: "Get insights into what digital marketing internships teach from campaign work to real-world projects.",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80",
    datePublished: "2025-04-18T09:00:00Z",
  },
  "best-digital-marketing-institutes-in-delhi-ncr-2026-update": {
    title: "Top 10 Digital Marketing Institutes in Delhi-NCR (2026 Update)",
    description: "Explore the top 10 digital marketing institutes in Delhi-NCR offering practical training and placements in 2026.",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80",
    datePublished: "2025-04-22T09:00:00Z",
  },
  "salary-of-a-digital-marketer-in-india-city-wise-breakdown": {
    title: "Salary of a Digital Marketer in India: City-Wise Breakdown",
    description: "Check the latest city-wise salary data for digital marketers across India in 2025.",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80",
    datePublished: "2025-04-25T09:00:00Z",
  },
  "best-career-paths-after-a-digital-marketing-certification": {
    title: "Best Career Paths After a Digital Marketing Certification",
    description: "Learn about top career options like SEO specialist, content marketer, and PPC expert after certification.",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80",
    datePublished: "2025-04-28T09:00:00Z",
  },
  "how-long-does-it-take-to-learn-digital-marketing": {
    title: "How Long Does It Take to Learn Digital Marketing?",
    description: "Find out how long it takes to learn digital marketing, depending on your pace, goals, and learning resources.",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80",
    datePublished: "2025-05-02T09:00:00Z",
  },
  "how-to-use-reddit-and-quora-for-content-research": {
    title: "How to Use Reddit and Quora for Content Research in 2026",
    description: "Reddit and Quora are high-intent platforms where users actively seek solutions and voice real-world problems. In 2026, content marketers use these sites not just for ideas but to align with AI search behavior, as Google frequently prioritizes these forums in AI Overviews.",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80",
    datePublished: "2025-05-05T09:00:00Z",
  },
  "how-to-write-content-for-multilingual-seo": {
    title: "How to Write and Optimize Content for Multilingual SEO in 2026",
    description: "Multilingual SEO in 2026 requires moving beyond literal translation to full localization, combining AI-driven keyword research with cultural nuances to match search intent across regions.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    datePublished: "2025-05-08T09:00:00Z",
  },
  "how-to-write-email-newsletters-that-people-actually-read": {
    title: "How to Write a Top-Notch Email Newsletter in 10 Minutes?",
    description: "Learn how to write a top-notch email newsletter in just 10 minutes. Simple steps, templates & tips to boost opens, clicks & engagement fast.",
    image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1200&q=80",
    datePublished: "2025-05-12T09:00:00Z",
  },
  "evergreen-content-vs-trending-content-when-to-use-what": {
    title: "Evergreen vs Trending Content: When to Use What in 2026",
    description: "Evergreen vs trending content in 2026: learn when to use each to drive long-term traffic and short-term spikes. Build a smarter content strategy.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    datePublished: "2025-05-15T09:00:00Z",
  },
};

async function getBlogData(slug: string) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

  try {
    const response = await axios.get(`${API_URL}/blogs/${slug}/`);
    const blog = response.data;
    return {
      title: blog.title,
      description: blog.meta_description || blog.excerpt || blog.title,
      image: blog.featured_image || "https://idigitalstudies.com/IDS_LOGO.svg",
      keywords: blog.meta_keywords ? blog.meta_keywords.split(",") : [],
      datePublished: blog.created_at || blog.published_at || new Date().toISOString(),
      dateModified: blog.updated_at || blog.created_at || new Date().toISOString(),
      author: blog.author_name || "Institute of Digital Studies (IDS)",
    };
  } catch (error) {
    const fallback = fallbackBlogDetails[slug];
    if (fallback) {
      return {
        title: fallback.title,
        description: fallback.description,
        image: fallback.image || "https://idigitalstudies.com/IDS_LOGO.svg",
        keywords: [],
        datePublished: fallback.datePublished || "2025-01-01T00:00:00Z",
        dateModified: fallback.datePublished || "2025-01-01T00:00:00Z",
        author: "Institute of Digital Studies (IDS)",
      };
    }
    return null;
  }
}

export async function generateMetadata({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const blog = await getBlogData(slug);

  if (!blog) {
    return {
      title: "Blog Not Found | iDigitalStudies",
      description: "The blog post you're looking for could not be found.",
      keywords: [],
    };
  }

  return {
    title: `${blog.title} | iDigitalStudies`,
    description: blog.description,
    keywords: blog.keywords,
    alternates: {
      canonical: `https://idigitalstudies.com/blog/${slug}`,
    },
    openGraph: {
      title: `${blog.title} | iDigitalStudies`,
      description: blog.description,
      url: `https://idigitalstudies.com/blog/${slug}`,
      images: [blog.image],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${blog.title} | iDigitalStudies`,
      description: blog.description,
      images: [blog.image],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const blog = await getBlogData(slug);

  const articleSchema = blog
    ? generateArticleSchema({
        headline: blog.title,
        description: blog.description,
        url: `https://idigitalstudies.com/blog/${slug}`,
        image: blog.image,
        datePublished: blog.datePublished,
        dateModified: blog.dateModified,
        authorName: blog.author,
        keywords: blog.keywords,
      })
    : null;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://idigitalstudies.com" },
    { name: "Blog", url: "https://idigitalstudies.com/blog" },
    { name: blog ? blog.title : "Article", url: `https://idigitalstudies.com/blog/${slug}` },
  ]);

  return (
    <>
      {articleSchema && <JsonLd schema={[articleSchema, breadcrumbSchema]} />}
      <BlogDetail slug={slug} />
    </>
  );
}


