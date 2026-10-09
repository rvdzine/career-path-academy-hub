"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogCategories, allBlogs, BlogPost } from "@/data/blogData";
import { Search, BookOpen, Sparkles, ArrowRight, Loader2 } from "lucide-react";
import { blogApi, getMediaUrl } from "@/lib/api";

function formatDate(dateStr?: string): string {
  if (!dateStr) return "Recently Published";
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

function detectCategory(title: string, excerpt: string = ""): string {
  const text = `${title} ${excerpt}`.toLowerCase();
  if (text.includes("data analytic") || text.includes("analytics tool") || text.includes("tableau") || text.includes("power bi")) {
    return "Data Analytics";
  }
  if (text.includes("data science") || text.includes("machine learning") || text.includes("python")) {
    return "Data Science";
  }
  if (text.includes("ui/ux") || text.includes("design") || text.includes("figma")) {
    return "UI/UX Design";
  }
  if (text.includes("content") || text.includes("copywriting") || text.includes("writing")) {
    return "Content Writing";
  }
  if (text.includes("finance") || text.includes("financial") || text.includes("banking")) {
    return "Financial Modeling";
  }
  return "Digital Marketing";
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>(allBlogs);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    let isMounted = true;

    async function fetchDynamicBlogs() {
      try {
        setLoading(true);
        const res = await blogApi.getBlogs({ status: "published" });
        const apiBlogs = Array.isArray(res.data) ? res.data : [];

        if (apiBlogs.length > 0 && isMounted) {
          const formattedApiBlogs: BlogPost[] = apiBlogs.map((b: any) => ({
            id: String(b.id),
            slug: b.slug,
            title: b.title,
            category: detectCategory(b.title, b.excerpt),
            author: b.author_name || "Institute of Digital Studies",
            published: formatDate(b.published_at || b.created_at),
            excerpt: b.excerpt || "",
            link: `https://idigitalstudies.com/blog/${b.slug}`,
            readTime: "5 min read",
            image: b.featured_image ? getMediaUrl(b.featured_image) : "/assets/Blog1.png",
            content: b.content || "",
            tags: ["Digital Marketing", "IDS Guides"],
          }));

          // Merge: dynamic database blogs first, then non-duplicate static blogs
          const apiSlugs = new Set(formattedApiBlogs.map((b) => b.slug));
          const uniqueStatic = allBlogs.filter((b) => !apiSlugs.has(b.slug));

          setBlogs([...formattedApiBlogs, ...uniqueStatic]);
        }
      } catch (err) {
        console.warn("Failed to fetch dynamic blogs from backend API. Falling back to static data:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchDynamicBlogs();

    return () => {
      isMounted = false;
    };
  }, []);

  // Filter posts based on category and search query
  const filteredBlogs = useMemo(() => {
    return blogs.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.author.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q) ||
        (post.tags && post.tags.some((t) => t.toLowerCase().includes(q)));

      return matchesCategory && matchesSearch;
    });
  }, [blogs, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#FAFCFF] flex flex-col font-sans selection:bg-[#fe4759]/15 selection:text-[#fe4759]">
      {/* Global Navigation Header */}
      <Navbar />

      {/* Hero Header with Subtle Grid Pattern in IDS Red Brand Theme */}
      <section className="relative pt-12 pb-10 sm:pt-16 sm:pb-12 border-b border-rose-100/70 overflow-hidden bg-gradient-to-b from-[#FFF5F6] via-[#FFF9FA] to-[#FFFFFF]">
        {/* Subtle decorative grid background overlay with IDS red brand tint */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(254, 71, 89, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(254, 71, 89, 0.08) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        {/* Soft Radial Ambient Glow */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[240px] bg-[#fe4759]/10 blur-[90px] rounded-full pointer-events-none"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Header Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Welcome to Our Blog
          </h1>

          {/* Subtitle */}
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Explore the latest insights, updates, and resources across various categories.
          </p>

          {/* Sleek Search & Quick Filter Bar */}
          <div className="mt-7 max-w-xl mx-auto relative">
            <div className="relative flex items-center bg-white rounded-full border border-rose-200/80 shadow-xs focus-within:border-[#fe4759] focus-within:ring-2 focus-within:ring-rose-100 transition-all">
              <Search className="w-4 h-4 text-slate-400 ml-4.5 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by topic, keyword, or author..."
                className="w-full py-2.5 pl-3 pr-4 text-xs sm:text-sm text-slate-800 placeholder-slate-400 bg-transparent rounded-full focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="mr-3 text-xs text-slate-400 hover:text-slate-700 bg-slate-100 px-2 py-0.5 rounded-full"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {/* Category Filter Pills */}
        <div className="w-full mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-rose-200">
            {/* All Topics Tab */}
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer shrink-0 ${
                selectedCategory === "All"
                  ? "bg-[#fe4759] text-white shadow-md shadow-[#fe4759]/25 font-semibold"
                  : "bg-[#F1F5F9] text-slate-700 hover:bg-rose-50 hover:text-[#fe4759]"
              }`}
            >
              All Topics
            </button>

            {blogCategories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer shrink-0 ${
                    isActive
                      ? "bg-[#fe4759] text-white shadow-md shadow-[#fe4759]/25 font-semibold"
                      : "bg-[#F1F5F9] text-slate-700 hover:bg-rose-50 hover:text-[#fe4759]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Filter Summary */}
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-200/70 text-xs sm:text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <span>
              Showing{" "}
              <span className="font-bold text-slate-900">{filteredBlogs.length}</span>{" "}
              {filteredBlogs.length === 1 ? "article" : "articles"}
              {selectedCategory !== "All" && (
                <span>
                  {" "}
                  in <span className="font-semibold text-[#fe4759]">{selectedCategory}</span>
                </span>
              )}
              {searchQuery && (
                <span>
                  {" "}
                  matching &quot;<span className="font-medium text-slate-800">{searchQuery}</span>&quot;
                </span>
              )}
            </span>
            {loading && (
              <span className="inline-flex items-center gap-1 text-[11px] text-slate-400">
                <Loader2 className="w-3 h-3 animate-spin text-[#fe4759]" />
                Syncing database...
              </span>
            )}
          </div>
          {(selectedCategory !== "All" || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="text-xs text-[#fe4759] hover:underline font-medium cursor-pointer"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* Cards Grid: Minimal, subtle card design with permanently visible image */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map((post) => (
              <Link
                key={post.id || post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-xl hover:border-rose-200/90 hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Visible Thumbnail Image */}
                <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-300">
                      <BookOpen className="w-8 h-8 opacity-40" />
                    </div>
                  )}
                </div>

                {/* Card Content: Title & Published Date */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                  <h3 className="text-slate-900 group-hover:text-[#fe4759] font-bold text-base sm:text-[17px] leading-snug line-clamp-2 transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mt-4">
                    {post.published}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200/80 p-8 max-w-lg mx-auto">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900 mb-1">No articles found</h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-5">
              We couldn&apos;t find any blog posts matching &quot;{searchQuery}&quot; in{" "}
              {selectedCategory}.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="px-4 py-2 bg-[#fe4759] hover:bg-[#e0384a] text-white text-xs font-semibold rounded-xl shadow-xs transition-colors"
            >
              View All Articles
            </button>
          </div>
        )}

        {/* Bottom CTA Banner */}
        <section className="mt-16 bg-gradient-to-r from-slate-950 via-[#1a0e14] to-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl border border-rose-950/40">
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-96 h-96 bg-[#fe4759]/20 rounded-full blur-3xl pointer-events-none"
          />
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fe4759]/20 border border-[#fe4759]/30 text-rose-200 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#fe4759]" />
              Stay Ahead of Industry Trends
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Master In-Demand Digital & Tech Skills?
            </h2>
            <p className="mt-3 text-slate-300 text-xs sm:text-sm leading-relaxed">
              Join 25,000+ students and professionals who leveled up their careers through IDS
              industry-accredited certification bootcamps with 100% placement support.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-[#fe4759] hover:bg-[#e0384a] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl shadow-md transition-transform hover:scale-105 active:scale-95"
              >
                <span>Book Free Career Counseling</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-medium px-5 py-3 rounded-xl border border-white/20 transition-colors"
              >
                <span>Explore Agency Services</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
