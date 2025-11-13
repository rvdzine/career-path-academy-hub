"use client";
// src/pages/Blog.tsx
import Link from "next/link";
import Navbar from "@/components/Navbar";

const blogs = [
  {
    slug: "local-seo-checklist-how-to-get-your-business-on-google-maps-for-free",
    title: "Local SEO Checklist: How to Get Your Business on Google Maps for Free",
    excerpt: "For any local business, showing up on Google Maps is one of the most powerful....",
    image: "./assets/Blog1.png",
  },
  {
    slug: "what-is-quality-score-5-simple-ways-to-improve-it-in-google-ads",
    title: "What is Quality Score? 5 Simple Ways to Improve It in Google Ads",
    excerpt: "If you’ve spent any time poking around in Google Ads, you’ve probably...",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "how-to-use-negative-keywords-in-googleads-to-save-money",
    title: "How to Use Negative Keywords in GoogleAds to Save Money",
    excerpt: "Running Google Ads is kind of like playing poker. You can win big if you know what...",
    image: "./assets/Blog3.png",
  },
  {
    slug: "how-to-read-a-basic-seo-report-for-website-owners",
    title: "How to Read a Basic SEO Report (For Website Owners)?",
    excerpt: "Learn how to read a simple SEO report, understand traffic data, rankings, backlinks, and find what’s really driving result..",
    image: "./assets/Blog4.png",
  },
  {
    slug: "beyond-rankings-how-to-measure-seos-true-impact-on-revenue",
    title: "Beyond Rankings: How to Measure SEO's True Impact on Revenue?",
    excerpt: "Stop chasing rankings and learn how to track SEO’s actual impact on sales, leads, and revenue with meaningful metrics....",
    image: "./assets/blog 5.png",
  },
  {
    slug: "how-to-leverage-people-also-ask-for-content-and-keyword-ideas",
    title: "How to Leverage People Also Ask for Content and Keyword Ideas?",
    excerpt: "Turn Google’s “People Also Ask” into a goldmine for keyword and content ideas that match user intent and boost SEO....",
    image: "./assets/blog6.png",
  },
  {
    slug: "beginners-guide-to-schema-markup-types-that-boost-visibility",
    title: "A Beginner's Guide to Schema Markup: Types That Boost Visibility",
    excerpt: "Understand schema markup basics, top types to use, and how they boost search visibility and click-through rates....",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "how-to-structure-a-high-converting-ppc-landing-page",
    title: "How to Structure a High-Converting PPC Landing Page?",
    excerpt: "Learn how to design a PPC landing page that drives conversions, improves Quality Score, and reduces wasted ad spend...",
    image: "./assets/blog8.png",
  },
  {
    slug: "pmax-campaigns-how-to-set-them-up-for-success-not-just-sales",
    title: "PMax Campaigns: How to Set Them Up for Success, Not Just Sales",
    excerpt: "Master Google Performance Max campaigns learn setup tips, targeting strategies, and ways to drive real business growth...",
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=800",
  },
  {
    slug: "seo-vs-ppc-whats-the-difference-and-which-should-you-use",
    title: "SEO vs. PPC: What's the Difference and Which Should You Use?",
    excerpt: "Understand the real difference between SEO and PPC, when to use each, and how to combine them for the best ...",
    image: "./assets/blog10.png",
  },
  {
    slug: "7-most-common-google-ads-mistakes-that-waste-your-budget",
    title: "7 Most Common Google Ads Mistakes That Waste Your Budget",
    excerpt: "Avoid these common Google Ads mistakes that waste money. Fix your targeting, keywords, and bidding to save budget....",
    image: "./assets/blog11.png",
  },
  {
    slug: "how-to-do-basic-keyword-research-for-free-in-2025",
    title: "How to Do Basic Keyword Research for Free in 2025?",
    excerpt: "Find out how to do keyword research for free in 2025 using simple tools, smart strategies, and real search insights....",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "how-to-run-a-winning-ab-test-on-facebook-ad-creative",
    title: "How to Run a Winning A/B Test on Facebook Ad Creatives",
    excerpt: "Alright, let’s talk about Facebook ads or more specifically, how not to throw your money at....",
    image: "./assets/blog13.png",
  },
  {
    slug: "how-to-use-google-ads-scripts-to-automate-boring-tasks",
    title: "How to Use Google Ads Scripts to Automate Boring Tasks",
    excerpt: "Alright, so managing Google Ads can feel like trying to juggle flaming torches while....",
    image: "./assets/blog14.png",
  },
  {
    slug: "meta-description-checklist-how-to-write-one-that-gets-clicks",
    title: "Meta Description Checklist: How to Write One That Gets Clicks",
    excerpt: "A meta description may be small, typically 150–160 characters but....",
    image: "./assets/blog15.png",
  },
  {
    slug: "what-are-long-tail-keywords-and-why-they-are-easy-seo-wins",
    title: "What Are Long-Tail Keywords? (And Why They Are Easy SEO Wins)",
    excerpt: "If you’re just stepping into the world of SEO or content marketing, chances are....",
    image: "./assets/blog16.png",
  },
  {
    slug: "how-to-repurpose-one-piece-of-content-across-all-social-channels",
    title: "How to Repurpose One Piece of Content Across All Social Channels",
    excerpt: "Let’s be real, creating good content is work. Like, the kind that eats your....",
    image: "./assets/blog17.png",
  },
  {
    slug: "social-listing-for-seo-find-content-gaps-and-unasked-questions",
    title: "Social Listing for SEO: Find Content Gaps and Unasked Questions",
    excerpt: "SEO isn’t just about jamming keywords into blog posts anymore. Sure, keyword research and ....",
    image: "./assets/blog18.png",
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
              className="bg-white rounded-lg shadow-md hover:shadow-xl  duration-300"
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
                  href={`/blog/${blog.slug}`}
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
