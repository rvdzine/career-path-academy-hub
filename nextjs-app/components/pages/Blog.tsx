"use client";
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
  {
    slug: "free-ai-tools-to-boost-your-digital-marketing-skills",
    title: "Free AI Tools to Boost Your Digital Marketing Skills",
    excerpt: "If you're new to internet marketing, you could have noticed that it's not just....",
    image: "./assets/blog18.png",
  },
  {
    slug: "content-creation-tools-every-digital-marketer-should-try",
    title: "Content Creation Tools Every Digital Marketer Should Try",
    excerpt: "If you work in digital marketing, you are probably aware....",
    image: "./assets/blog18.png",
  },
  {
    slug: "best-analytics-tools-to-track-your-marketing-performance",
    title: "Best Analytics Tools to Track Your Marketing Performance",
    excerpt: "Have you ever wondered why successful marketers always seem to know what works and what doesn't?  It's not just creativity that  ....",
    image: "./assets/blog18.png",
  },
  {
    slug: "how-to-use-chatgpt-for-digital-marketing-campaigns",
    title: "How to Use ChatGPT for Digital Marketing Campaigns",
    excerpt: "Google has a treasure chest full of information for digital marketers who want to make sense of data, effectiveness, and online growth.  The best part is?....",
    image: "./assets/blog18.png",
  },
  {
    slug: "essential-google-tools-every-digital-marketer-should-use",
    title: "Essential Google Tools Every Digital Marketer Should Use",
    excerpt: "Have you ever wondered why successful marketers always seem to know what works and what doesn't?  It's not just creativity that  ....",
    image: "./assets/blog18.png",
  },
  {
    slug: "how-to-practice-digital-marketing-without-spending-money",
    title: "How to Practice Digital Marketing Without Spending Money",
    excerpt: "To be honest, digital marketing seems exciting until you consider the high cost of tools, advertisements, and training.  The good news is....",
    image: "./assets/blog18.png",
  },

  // 19  nov

  // {
  //   slug: "the-complete-guide-to-learning-seo-in-30-days",
  //   title: "The Complete Guide to Learning SEO in 30 Days",
  //   excerpt: "So, you want to learn SEO in 30 days? Great decision! SEO (Search Engine Optimization) isn’t....",
  //   image: "./assets/blog18.png",
  // },

  // {
  //   slug: "top-email-marketing-tools-for-beginners",
  //   title: "Top Email Marketing Tools for Beginners",
  //   excerpt: "Starting with email marketing can feel like juggling a hundred tiny tasks at once designing templates, building lists, tracking opens, and....",
  //   image: "./assets/blog18.png",
  // },

  // {
  //   slug: "best-youtube-channels-to-learn-digital-marketing-in-hindi",
  //   title: "Best YouTube Channels to Learn Digital Marketing in Hindi",
  //   excerpt: "It can feel like you're juggling a hundred little tasks at once when you first start...",
  //   image: "./assets/blog18.png",
  // },

  // 20 nov
  // {
  //   slug: "must-know-tools-for-every-digital-marketing-student",
  //   title: "Must-Know Tools for Every Digital Marketing Student",
  //   excerpt: "If you're learning about digital marketing, you probably already know that there...",
  //   image: "./assets/blog18.png",
  // },

  // {
  //   slug: "is-a-digital-marketing-certificate-worth-it-in-2025",
  //   title: "Is a Digital Marketing Certificate Worth It in 2025?",
  //   excerpt: "Digital marketing changes faster than most of us can check our social media feeds. With AI ....",
  //   image: "./assets/blog18.png",
  // },
  // {
  //   slug: "digital-marketing-course-syllabus-explained-module-wise",
  //   title: "Digital Marketing Course Syllabus Explained (Module-Wise)",
  //   excerpt: "You made a smart choice when you decided to get into digital marketing. But you probably....",
  //   image: "./assets/blog18.png",
  // },

  // 21 nov
  // {
  //   slug: "how-to-learn-digital-marketing-without-any-prior-experience",
  //   title: "How to Learn Digital Marketing Without Any Prior Experience",
  //   excerpt: "So you want to get into digital marketing but don't know anything about it? Don't worry; everyone....",
  //   image: "./assets/blog18.png",
  // },
  // {
  //   slug: "what-to-expect-from-a-digital-marketing-internship-program",
  //   title: "What to Expect from a Digital Marketing Internship Program",
  //   excerpt: "It can be exciting and a little scary to start an internship in digital marketing. You’re stepping into....",
  //   image: "./assets/blog18.png",
  // },
  // {
  //   slug: "best-digital-marketing-institutes-in-delhi-ncr-2025-update",
  //   title: "Best Digital Marketing Institutes in Delhi-NCR (2025 Update)",
  //   excerpt: "It can be hard to find the right place to learn digital marketing. There are a lot of schools in ....",
  //   image: "./assets/blog18.png",
  // },



  // 22 nov
  // {
  //   slug: "salary-of-a-digital-marketer-in-india-city-wise-breakdown",
  //   title: "Salary of a Digital Marketer in India: City-Wise Breakdown",
  //   excerpt: "You're not the only one who has ever wondered how much digital marketers really make in different Indian cities. As marketing goes completely....",
  //   image: "./assets/blog18.png",
  // },
  // {
  //   slug: "best-career-paths-after-a-digital-marketing-certification",
  //   title: "Best Career Paths After a Digital Marketing Certification",
  //   excerpt: "Congratulations on finishing your digital marketing certification! But what now?....",
  //   image: "./assets/blog18.png",
  // },
  // {
  //   slug: "how-long-does-it-take-to-learn-digital-marketing",
  //   title: "How Long Does It Take to Learn Digital Marketing?",
  //   excerpt: "There are many skills that go into digital marketing. You have SEO (Search Engine Optimization), social media marketing, content marketing, email campaigns, PPC ads, and....",
  //   image: "./assets/blog18.png",
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
