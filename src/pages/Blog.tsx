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
  {
    slug: "basic-seo-report",
    title: "How to Read a Basic SEO Report (For Website Owners)?",
    excerpt: "Learn how to read a simple SEO report, understand traffic data, rankings, backlinks, and find what’s really driving result..",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "seo-beyond-ranking",
    title: "Beyond Rankings: How to Measure SEO's True Impact on Revenue?",
    excerpt: "Stop chasing rankings and learn how to track SEO’s actual impact on sales, leads, and revenue with meaningful metrics....",
    image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "leverage-ideas",
    title: "How to Leverage People Also Ask for Content and Keyword Ideas?",
    excerpt: "Turn Google’s “People Also Ask” into a goldmine for keyword and content ideas that match user intent and boost SEO....",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "boost-visibility",
    title: "A Beginner's Guide to Schema Markup: Types That Boost Visibility",
    excerpt: "Understand schema markup basics, top types to use, and how they boost search visibility and click-through rates....",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "how-to-structure-high-converting-ppc",
    title: "How to Structure a High-Converting PPC Landing Page?",
    excerpt: "Learn how to design a PPC landing page that drives conversions, improves Quality Score, and reduces wasted ad spend...",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "pmax-campaigns",
    title: "PMax Campaigns: How to Set Them Up for Success, Not Just Sales",
    excerpt: "Master Google Performance Max campaigns learn setup tips, targeting strategies, and ways to drive real business growth...",
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=800",
  },
  {
    slug: "seo-vs-ppc",
    title: "SEO vs. PPC: What's the Difference and Which Should You Use?",
    excerpt: "Understand the real difference between SEO and PPC, when to use each, and how to combine them for the best ...",
    image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51",
  },
  {
    slug: "7-common-mistakes-in-google-ads",
    title: "7 Most Common Google Ads Mistakes That Waste Your Budget",
    excerpt: "Avoid these common Google Ads mistakes that waste money. Fix your targeting, keywords, and bidding to save budget....",
    image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "basic-keyword-research",
    title: "How to Do Basic Keyword Research for Free in 2025?",
    excerpt: "Find out how to do keyword research for free in 2025 using simple tools, smart strategies, and real search insights....",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
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

// "This is the new branch"