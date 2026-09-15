import Link from "next/link";
import Image from "next/image";
import { Clock, Calendar, ArrowRight } from "lucide-react";

const blogs = [
  {
    slug: "local-seo-checklist-how-to-get-your-business-on-google-maps-for-free",
    title: "Local SEO Checklist: How to Get Your Business on Google Maps for Free",
    excerpt:
      "For any local business, showing up on Google Maps is one of the most powerful ways to drive walk-in customers and high-intent local calls.",
    image: "/assets/Blog1.png",
    category: "Search Engine Optimization",
    readTime: "5 min read",
    date: "25 Nov, 2025",
  },
  {
    slug: "what-is-quality-score-5-simple-ways-to-improve-it-in-google-ads",
    title: "What is Quality Score? 5 Simple Ways to Improve It in Google Ads",
    excerpt:
      "If you’ve spent any time inside Google Ads, you know Quality Score directly impacts your cost-per-click and ad placement auction wins.",
    image: "/assets/Blog2.png",
    category: "Performance Marketing",
    readTime: "6 min read",
    date: "10 Oct, 2025",
  },
  {
    slug: "how-to-use-negative-keywords-in-googleads-to-save-money",
    title: "How to Use Negative Keywords in Google Ads to Save Money",
    excerpt:
      "Running Google Ads without negative keywords is like letting budget leak away. Learn how to prevent irrelevant clicks and maximize your campaign ROAS.",
    image: "/assets/Blog3.png",
    category: "Paid Advertising",
    readTime: "4 min read",
    date: "05 Sep, 2025",
  },
];

const BlogIndex = () => {
  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-t border-gray-100 overflow-hidden">
      {/* Subtle ambient red dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, #EA252514 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-14">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="flex items-center justify-center gap-3 mb-2.5">
            <span className="block w-8 h-[2.5px] bg-red-600 rounded-full" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-red-600">
              Insights & Strategy // Latest Articles
            </span>
            <span className="block w-8 h-[2.5px] bg-red-600 rounded-full" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-950 tracking-tight leading-tight">
            Our Latest <span className="text-red-600">Blogs & Guides</span>
          </h2>

          <p className="mt-2.5 text-xs sm:text-sm text-gray-600 font-normal leading-relaxed">
            Practical strategies, SEO checklists, and paid marketing playbooks written by active practitioners.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogs.map((blog) => (
            <article
              key={blog.slug}
              className="group flex flex-col bg-white border border-gray-200/90 hover:border-red-600/40 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Media Container */}
              <Link href={`/blog/${blog.slug}`} className="block relative w-full h-52 sm:h-56 overflow-hidden bg-stone-100">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block bg-white/95 backdrop-blur-xs text-red-600 text-[10px] sm:text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full border border-gray-200/70 shadow-xs">
                    {blog.category}
                  </span>
                </div>
              </Link>

              {/* Content Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                {/* Meta details */}
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-red-600 flex-shrink-0" />
                    <span className="font-medium">{blog.date}</span>
                  </div>
                  <span className="text-gray-300">•</span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-red-600 flex-shrink-0" />
                    <span className="font-medium">{blog.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-black text-gray-950 group-hover:text-red-600 transition-colors line-clamp-2 leading-snug mb-2.5">
                  <Link href={`/blog/${blog.slug}`}>
                    {blog.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 leading-relaxed font-normal mb-6 flex-1">
                  {blog.excerpt}
                </p>

                {/* Footer Action */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-red-600 hover:text-gray-950 transition-colors"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12 sm:mt-14">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2.5 bg-red-600 hover:bg-gray-950 text-white font-black text-xs uppercase tracking-widest py-3.5 px-8 transition-all duration-200 shadow-md shadow-red-600/15 active:scale-95"
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
            }}
          >
            <span>View More Blogs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogIndex;

