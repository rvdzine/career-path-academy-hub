// src/pages/BlogDetail.tsx
import { useParams, Link } from "react-router-dom";

const blogDetails: Record<string, { title: string; content: string; image: string }> = {
  "digital-marketing-trends-2025": {
    title: "Top Digital Marketing Trends in 2025",
    content:
      "In 2025, digital marketing is evolving faster than ever. From AI-driven personalization to immersive AR/VR experiences, brands are leveraging innovative tools to engage users like never before...",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },
  "seo-strategies-beginners": {
    title: "SEO Strategies for Beginners",
    content:
      "SEO remains one of the most powerful digital marketing tools. Beginners should focus on keyword research, quality content, and backlinks. Consistency is key to long-term SEO success...",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  "content-marketing-secrets": {
    title: "Secrets of Content Marketing",
    content:
      "Great content drives traffic and builds trust. The secret lies in storytelling, authenticity, and providing real value to your audience...",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80",
  },
  "ppc-vs-seo": {
    title: "PPC vs SEO: Which is Better?",
    content:
      "Both PPC and SEO are powerful tools. PPC delivers instant results, while SEO provides sustainable long-term growth. The best strategy often involves balancing both...",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
  "social-media-growth": {
    title: "How to Grow on Social Media",
    content:
      "Consistency, engaging content, and understanding your audience are key to social media growth. Learn proven techniques to boost your followers and engagement...",
    image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1200&q=80",
  },
  "ai-in-digital-marketing": {
    title: "Role of AI in Digital Marketing",
    content:
      "AI is revolutionizing marketing with personalization, chatbots, predictive analytics, and automation. Discover how to implement AI to scale your marketing efforts...",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80",
  },
  "email-marketing-tips": {
    title: "Email Marketing Best Practices",
    content:
      "Effective email marketing involves crafting catchy subject lines, personalizing messages, and optimizing send times. These practices can significantly boost open rates...",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  "analytics-for-marketers": {
    title: "Google Analytics for Marketers",
    content:
      "Google Analytics provides deep insights into user behavior. Learn how to analyze traffic, set up goals, and leverage reports to optimize campaigns...",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80",
  },
  "building-brand-identity": {
    title: "Building a Strong Brand Identity",
    content:
      "Your brand identity is the face of your business. It combines visuals, voice, and values to create recognition and trust among customers...",
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=800",
  },
  "video-marketing-strategies": {
    title: "Video Marketing Strategies in 2025",
    content:
      "Video continues to dominate in 2025. Short-form videos, live streams, and interactive content are driving the highest engagement across platforms...",
    image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51",
  },
  "affiliate-marketing-guide": {
    title: "Affiliate Marketing Guide",
    content:
      "Affiliate marketing allows you to earn commissions by promoting products. Learn how to pick the right niche, build an audience, and scale earnings...",
    image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1200&q=80",
  },
  "local-seo-importance": {
    title: "Importance of Local SEO",
    content:
      "Local SEO helps businesses attract nearby customers through optimized listings, reviews, and location-based targeting. It’s essential for small businesses...",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
};

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = blogDetails[slug || ""];

  if (!blog) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-700">Blog not found</h2>
        <Link to="/blog" className="mt-4 inline-block text-red-500">
          ← Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-80 object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          {blog.title}
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">{blog.content}</p>

        <div className="mt-8">
          <Link
            to="/blog"
            className="bg-[#EA2525] text-white px-5 py-2 rounded-md hover:bg-red-600 transition"
          >
            ← Back to Blogs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
