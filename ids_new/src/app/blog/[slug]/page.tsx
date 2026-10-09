"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { allBlogs, BlogPost } from "@/data/blogData";
import { blogApi, getMediaUrl } from "@/lib/api";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Bookmark,
  Check,
  ExternalLink,
  BookOpen,
  Sparkles,
  ChevronRight,
  Loader2,
} from "lucide-react";

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

export default function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);

  // Check static blogs first
  const staticPost = allBlogs.find((b) => b.slug === slug);
  const [post, setPost] = useState<BlogPost | null>(staticPost || null);
  const [notFoundState, setNotFoundState] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadPost() {
      if (staticPost) {
        setPost(staticPost);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const res = await blogApi.getBlogBySlug(slug);
        const b = res.data;
        if (b && isMounted) {
          setPost({
            id: String(b.id),
            slug: b.slug,
            title: b.title,
            category: "Digital Marketing",
            author: b.author_name || "Institute of Digital Studies",
            published: formatDate(b.published_at || b.created_at),
            excerpt: b.excerpt || "",
            link: `https://idigitalstudies.com/blog/${b.slug}`,
            readTime: "5 min read",
            image: b.featured_image ? getMediaUrl(b.featured_image) : "/assets/Blog1.png",
            content: b.content || `<p class="text-base text-slate-700 leading-relaxed">${b.excerpt || ""}</p>`,
            tags: ["Digital Marketing", "Training", "Noida"],
          });
        } else if (isMounted) {
          setNotFoundState(true);
        }
      } catch (err) {
        console.error("Error fetching blog from API:", err);
        if (isMounted) setNotFoundState(true);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadPost();

    return () => {
      isMounted = false;
    };
  }, [slug, staticPost]);

  if (notFoundState) {
    notFound();
  }

  if (loading && !post) {
    return (
      <div className="min-h-screen bg-[#FAFCFF] flex flex-col font-sans">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center py-24">
          <Loader2 className="w-8 h-8 animate-spin text-[#fe4759] mb-4" />
          <p className="text-sm font-medium text-slate-500">Loading article...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return notFound();
  }

  // Related posts from the same category or overall
  const relatedPosts = allBlogs
    .filter((b) => b.slug !== post.slug)
    .slice(0, 3);

  const handleCopyLink = () => {
    if (typeof window !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFCFF] flex flex-col font-sans selection:bg-[#fe4759]/15 selection:text-[#fe4759]">
      <Navbar />

      {/* Breadcrumb Header with IDS Red Warm Gradient */}
      <div className="bg-gradient-to-b from-[#FFF5F6] via-[#FFF9FA] to-[#FFFFFF] border-b border-rose-100/70 py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-4">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-slate-900 transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#fe4759] font-medium truncate max-w-[200px] sm:max-w-none">
              {post.category}
            </span>
          </nav>

          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-[#fe4759] transition-colors mb-4 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Blogs</span>
          </Link>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            {post.title}
          </h1>

          {/* Metadata Bar matching screenshot aesthetics with IDS Red accents */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 pt-3 border-t border-rose-100/80">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-slate-900">Category:</span>
              <span className="text-[#fe4759] font-semibold">{post.category}</span>
            </div>
            <span className="text-slate-300">•</span>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-slate-900">Author:</span>
              <span className="text-[#fe4759] font-semibold">{post.author}</span>
            </div>
            <span className="text-slate-300">•</span>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-slate-900">Published:</span>
              <span className="text-slate-700">{post.published}</span>
            </div>
            <span className="text-slate-300">•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#fe4759]" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Article Body */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-10">
        <article className="bg-white rounded-3xl border border-rose-100/80 p-6 sm:p-10 shadow-sm">
          {/* Action Toolbar */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-100">
            <div className="flex items-center gap-2">
              {post.tags?.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-rose-50 text-[#fe4759] text-[11px] font-semibold"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-[#fe4759] px-3 py-1.5 rounded-lg border border-slate-200 hover:border-rose-300 transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600 font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Share</span>
                  </>
                )}
              </button>

              {post.link && (
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-[#fe4759] px-3 py-1.5 rounded-lg border border-slate-200 hover:border-rose-300 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Original Link</span>
                </a>
              )}
            </div>
          </div>

          {/* Featured Hero Image */}
          {post.image && (
            <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] rounded-2xl overflow-hidden mb-8 shadow-sm border border-slate-200/60 bg-slate-100">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
              />
            </div>
          )}

          {/* Formatted Article Content */}
          <div
            className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-h2:text-xl sm:prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:text-slate-600 prose-p:leading-relaxed prose-p:text-sm sm:prose-p:text-base prose-li:text-slate-600 prose-li:text-sm sm:prose-li:text-base prose-strong:text-slate-900 prose-a:text-[#fe4759]"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author Box */}
          <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4 bg-rose-50/50 p-6 rounded-2xl border border-rose-100/60">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#fe4759] text-white flex items-center justify-center font-bold text-lg shadow-sm">
                {post.author.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">{post.author}</h4>
                <p className="text-xs text-slate-500">
                  Lead Industry Practitioner & Senior Educator at IDS
                </p>
              </div>
            </div>
            <Link
              href="/contact-us"
              className="text-xs font-bold text-white bg-[#fe4759] hover:bg-[#e0384a] px-4 py-2 rounded-xl transition-colors shadow-sm"
            >
              Ask a Question
            </Link>
          </div>
        </article>

        {/* Related Articles Section */}
        <section className="mt-14">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-900">Recommended Articles</h2>
            <Link
              href="/blog"
              className="text-xs font-semibold text-[#fe4759] hover:underline"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((rel) => (
              <Link
                key={rel.id}
                href={`/blog/${rel.slug}`}
                className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-lg hover:border-rose-200/90 hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Visible Thumbnail Image */}
                <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden">
                  {rel.image ? (
                    <Image
                      src={rel.image}
                      alt={rel.title}
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
                <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
                  <h3 className="text-slate-900 group-hover:text-[#fe4759] font-bold text-sm sm:text-base leading-snug line-clamp-2 transition-colors duration-200">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mt-3">
                    {rel.published}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
