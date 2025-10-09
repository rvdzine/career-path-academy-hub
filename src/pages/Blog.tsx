// src/pages/Blog.tsx
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const blogs = [
  {
    slug: "digital-marketing-trends-2025",
    title: "Local SEO Checklist: How to Get Your Business on Google Maps for Free",
    excerpt: "For any local business, showing up on Google Maps is one of the most powerful....",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "seo-strategies-beginners",
    title: "What is Quality Score? 5 Simple Ways to Improve It in Google Ads",
    excerpt: "If you’ve spent any time poking around in Google Ads, you’ve probably...",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "content-marketing-secrets",
    title: "How to Use Negative Keywords in GoogleAds to Save Money",
    excerpt: "Running Google Ads is kind of like playing poker. You can win big if you know what...",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80",
  },
  // {
  //   slug: "ppc-vs-seo",
  //   title: "PPC vs SEO: Which is Better?",
  //   excerpt: "A deep dive into Pay-Per-Click advertising vs Search Engine Optimization...",
  //   image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  // },
  // {
  //   slug: "social-media-growth",
  //   title: "How to Grow on Social Media",
  //   excerpt: "Step-by-step techniques to skyrocket your reach and followers on Instagram, LinkedIn, and more...",
  //   image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1200&q=80",
  // },
  // {
  //   slug: "ai-in-digital-marketing",
  //   title: "Role of AI in Digital Marketing",
  //   excerpt: "Artificial Intelligence is changing the way businesses approach marketing...",
  //   image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80",
  // },
  // {
  //   slug: "email-marketing-tips",
  //   title: "Email Marketing Best Practices",
  //   excerpt: "Maximize open rates and engagement with these tried-and-true email marketing tips...",
  //   image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  // },
  // {
  //   slug: "analytics-for-marketers",
  //   title: "Google Analytics for Marketers",
  //   excerpt: "Learn how to track and analyze your website traffic effectively with Google Analytics...",
  //   image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80",
  // },
  // {
  //   slug: "building-brand-identity",
  //   title: "Building a Strong Brand Identity",
  //   excerpt: "Brand identity is what makes your business unique. Here's how to establish yours...",
  //   image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=800",
  // },
  // {
  //   slug: "video-marketing-strategies",
  //   title: "Video Marketing Strategies in 2025",
  //   excerpt: "Video is the most engaging content format today. Learn how to leverage it for your brand...",
  //   image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51",
  // },
  // {
  //   slug: "affiliate-marketing-guide",
  //   title: "Affiliate Marketing Guide",
  //   excerpt: "How to start and succeed with affiliate marketing in today’s competitive market...",
  //   image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1200&q=80",
  // },
  // {
  //   slug: "local-seo-importance",
  //   title: "Importance of Local SEO",
  //   excerpt: "Learn why local SEO matters and how it helps businesses attract customers nearby...",
  //   image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  // },
];

const Blog = () => {
  return (
    <>
    <Navbar />
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Our Latest <span className="text-[#EA2525]">Blogs</span>
        </h2>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.slug}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="rounded-t-lg w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <Link
                  to={`/blog/${blog.slug}`}
                  className="inline-block bg-[#EA2525] text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Blog;
