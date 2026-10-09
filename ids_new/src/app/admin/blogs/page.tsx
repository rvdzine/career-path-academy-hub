"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { blogApi } from "@/lib/api";
import { BlogListItem } from "@/lib/types";
import { Pencil, Trash2, Eye, Plus } from "lucide-react";

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<BlogListItem[]>([]);
  const [allBlogs, setAllBlogs] = useState<BlogListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "published" | "draft">("all");

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await blogApi.getBlogs({});
      const data = response.data || [];
      setAllBlogs(data);
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (filter === "all") {
      setBlogs(allBlogs);
    } else {
      setBlogs(allBlogs.filter((b) => b.status === filter));
    }
  }, [filter, allBlogs]);

  const handleDelete = async (slug: string) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;
    try {
      await blogApi.deleteBlog(slug);
      fetchBlogs();
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("Failed to delete blog");
    }
  };

  const handlePublish = async (slug: string) => {
    try {
      await blogApi.publishBlog(slug);
      fetchBlogs();
    } catch (error) {
      console.error("Error publishing blog:", error);
    }
  };

  const handleUnpublish = async (slug: string) => {
    try {
      await blogApi.unpublishBlog(slug);
      fetchBlogs();
    } catch (error) {
      console.error("Error unpublishing blog:", error);
    }
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-12 text-gray-500">Loading blogs...</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Manage Blogs</h1>
          <p className="text-gray-500 mt-1">
            {allBlogs.length} total •{" "}
            {allBlogs.filter((b) => b.status === "published").length} published •{" "}
            {allBlogs.filter((b) => b.status === "draft").length} drafts
          </p>
        </div>
        <Link
          href="/admin/blogs/new"
          className="inline-flex items-center gap-2 bg-[#EA2525] hover:bg-red-700 text-white font-semibold px-4 py-2.5 rounded-xl transition shadow-sm shadow-red-200"
        >
          <Plus className="w-4 h-4" />
          New Blog
        </Link>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6">
        {(["all", "published", "draft"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition ${
              filter === f
                ? "bg-[#EA2525] text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* Blog List */}
      {blogs.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-200">
          <p className="text-gray-500 mb-4">No blogs found.</p>
          <Link
            href="/admin/blogs/new"
            className="text-[#EA2525] hover:underline font-medium"
          >
            Create your first blog →
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm flex items-start gap-4 hover:shadow-md transition"
            >
              {/* Featured Image */}
              {blog.featured_image && (
                <img
                  src={blog.featured_image}
                  alt={blog.title}
                  className="w-20 h-20 rounded-xl object-cover flex-shrink-0 bg-gray-100"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              )}

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-bold text-gray-900 line-clamp-1">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2 mt-0.5">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full font-semibold ${
                          blog.status === "published"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {blog.status}
                      </span>
                      {blog.is_featured && (
                        <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-semibold">
                          Featured
                        </span>
                      )}
                      <span>{blog.views_count} views</span>
                      {blog.published_at && (
                        <span>{new Date(blog.published_at).toLocaleDateString()}</span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <a
                      href={`/blog/${blog.slug}`}
                      target="_blank"
                      className="p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition"
                      title="View post"
                    >
                      <Eye className="w-4 h-4" />
                    </a>
                    <Link
                      href={`/admin/blogs/edit/${blog.slug}`}
                      className="p-2 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition"
                      title="Edit post"
                    >
                      <Pencil className="w-4 h-4" />
                    </Link>
                    {blog.status === "draft" ? (
                      <button
                        onClick={() => handlePublish(blog.slug)}
                        className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition"
                      >
                        Publish
                      </button>
                    ) : (
                      <button
                        onClick={() => handleUnpublish(blog.slug)}
                        className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-amber-50 text-amber-700 hover:bg-amber-100 transition"
                      >
                        Unpublish
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(blog.slug)}
                      className="p-2 rounded-lg text-gray-500 hover:text-red-600 hover:bg-red-50 transition"
                      title="Delete post"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
