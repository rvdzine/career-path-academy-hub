import BlogDetail from "@/components/pages/BlogDetail";

interface BlogDetailPageProps{
  params: Promise< {slug:string} >;
}

export async function generateMetadata({ params }: BlogDetailPageProps) {
  const {slug} = await params;

  const blogDetails: Record<string, { title: string; description: string; image: string }> = {
    "local-seo-checklist-how-to-get-your-business-on-google-maps-for-free": {
      title: "Local SEO Checklist: How to Get Your Business on Google Maps for Free",
      description:
        "Step-by-step guide to get your business on Google Maps for free. Boost visibility, reviews, and local traffic with smart SEO tips.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    },
    "what-is-quality-score-5-simple-ways-to-improve-it-in-google-ads": {
      title: "What is Quality Score? 5 Simple Ways to Improve It in Google Ads",
      description:
        "Learn what Quality Score means in Google Ads and 5 simple ways to improve it to get cheaper clicks and higher ad rankings.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    },
    "how-to-use-negative-keywords-in-googleads-to-save-money":{
      title: "How to Use Negative Keywords in GoogleAds to Save Money",
      description: "Learn how to use negative keywords in Google Ads to block irrelevant clicks, save money, and boost campaign performance. ",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80"
    },
    "how-to-read-a-basic-seo-report-for-website-owners":{
      title: "How to Read a Basic SEO Report (For Website Owners)?",
      description: "Learn how to read a simple SEO report, understand traffic data, rankings, backlinks, and find what’s really driving results.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
    },
    "beyond-rankings-how-to-measure-seos-true-impact-on-revenue":{
      title: "Beyond Rankings: How to Measure SEO's True Impact on Revenue?",
      description: "Stop chasing rankings and learn how to track SEO’s actual impact on sales, leads, and revenue with meaningful metrics.",
      image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1200&q=80"
    },
    "how-to-leverage-people-also-ask-for-content-and-keyword-ideas":{
      title: "How to Leverage People Also Ask for Content and Keyword Ideas?",
      description: "Turn Google’s “People Also Ask” into a goldmine for keyword and content ideas that match user intent and boost SEO.",
      image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80"
    },

    "beginners-guide-to-schema-markup-types-that-boost-visibility":{
      title: "A Beginner's Guide to Schema Markup: Types That Boost Visibility",
      description: "Understand schema markup basics, top types to use, and how they boost search visibility and click-through rates",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
    },

    "how-to-structure-a-high-converting-ppc-landing-page":{
      title: "How to Structure a High-Converting PPC Landing Page?",
      description: "Learn how to design a PPC landing page that drives conversions, improves Quality Score, and reduces wasted ad spend.",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80"
    },

    "pmax-campaigns-how-to-set-them-up-for-success-not-just-sales":{
      title: "PMax Campaigns: How to Set Them Up for Success, Not Just Sales",
      description: "Master Google Performance Max campaigns learn setup tips, targeting strategies, and ways to drive real business growth.",
      image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=800"
    },

    "seo-vs-ppc-whats-the-difference-and-which-should-you-use":{
      title: "SEO vs. PPC: What's the Difference and Which Should You Use?",
      description: "Understand the real difference between SEO and PPC, when to use each, and how to combine them for the best ROI.",
      image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51"
    },

    "7-most-common-google-ads-mistakes-that-waste-your-budget":{
      title: "7 Most Common Google Ads Mistakes That Waste Your Budget",
      description: "Avoid these common Google Ads mistakes that waste money. Fix your targeting, keywords, and bidding to save budget.",
      image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1200&q=80"
    },

    "how-to-do-basic-keyword-research-for-free-in-2025": {
      title: "How to Do Basic Keyword Research for Free in 2025?",
      description: "Find out how to do keyword research for free in 2025 using simple tools, smart strategies, and real search insights.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
    }
  };

  const blog = blogDetails[slug];

  if (!blog) {
    return {
      title: "Blog Not Found | iDigitalStudies",
      description: "The blog post you're looking for could not be found.",
    };
  }

  return {
    title: `${blog.title} | iDigitalStudies`,
    description: blog.description,
    openGraph: {
      title: `${blog.title} | iDigitalStudies`,
      description: blog.description,
      url: `https://idigitalstudies.in/blog/${slug}`,
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
  const {slug} = await params;
  return <BlogDetail slug = {slug}  />;
}

