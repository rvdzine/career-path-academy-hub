import BlogDetail from "@/components/pages/BlogDetail";

interface BlogDetailPageProps{
  params: Promise< {slug:string} >;
}

export async function generateMetadata({ params }: BlogDetailPageProps) {
  const {slug} = await params;

  const blogDetails: Record<string, { title: string; description: string; image: string }> = {
    "digital-marketing-trends-2025": {
      title: "Local SEO Checklist: How to Get Your Business on Google Maps for Free",
      description:
        "Step-by-step guide to get your business on Google Maps for free. Boost visibility, reviews, and local traffic with smart SEO tips.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    },
    "seo-strategies-beginners": {
      title: "What is Quality Score? 5 Simple Ways to Improve It in Google Ads",
      description:
        "Learn what Quality Score means in Google Ads and 5 simple ways to improve it to get cheaper clicks and higher ad rankings.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    },
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

