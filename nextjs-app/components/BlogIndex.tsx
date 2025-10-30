import Link from "next/link";
import { Button } from "./ui/button";
import { Clock } from "lucide-react";

const blogs = [
  {
    slug: "digital-marketing-trends-2025",
    title: "Local SEO Checklist: How to Get Your Business on Google Maps for Free",
    excerpt:
      "For any local business, showing up on Google Maps is one of the most powerful....",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    date: "25 Nov, 2025",
  },
  {
    slug: "seo-strategies-beginners",
    title: "What is Quality Score? 5 Simple Ways to Improve It in Google Ads",
    excerpt:
      "If you’ve spent any time poking around in Google Ads, you’ve probably...",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    date: "10 Oct, 2025",
  },
  {
    slug: "content-marketing-secrets",
    title: "How to Use Negative Keywords in GoogleAds to Save Money",
    excerpt:
      "Running Google Ads is kind of like playing poker. You can win big if you know what...",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80",
    date: "05 Sep, 2025",
  },
];

const BlogIndex = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Our Latest <span className="text-[#EA2525]">Blogs</span>
        </h2>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.slug}
              className="relative bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
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

                {/* Footer with Button + Date Badge */}
                <div className="flex items-center justify-between">
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="inline-block bg-[#EA2525] text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                  >
                    Read Blog
                  </Link>

                  <div className="flex items-center gap-1 bg-[#FFF2F2] text-gray-700 text-sm px-3 py-1 rounded-full shadow-sm">
                    <Clock className="w-4 h-4 text-[#000]" />
                    <span>{blog.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <Link href="/blog">
            <Button className="bg-[#EA2525] hover:bg-red-600 px-6 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg focus:ring-2 focus:ring-[#EA2525]/50">
              View More Blogs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogIndex;
