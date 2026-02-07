"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { blogApi } from "@/lib/api";
import { BlogListItem } from "@/lib/types";
import { Pencil, Trash2, Eye, Plus } from "lucide-react";

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<BlogListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "published" | "draft">("all");

  useEffect(() => {
    fetchBlogs();
  }, [filter]);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const params = filter !== "all" ? { status: filter } : {};
      const response = await blogApi.getBlogs(params);
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (slug: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) {
      return;
    }

    try {
      await blogApi.deleteBlog(slug);
      fetchBlogs();
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("Failed to delete blog");
    }
  };



  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Manage Blogs</h1>
        <Link
          href="/admin/blogs/new"
          className="bg-[#EA2525] text-white px-4 py-2 rounded-md hover:bg-red-600 flex items-center gap-2"
        >
          <Plus size={20} />
          Create New Blog
        </Link>
      </div>

      {/* Filters */}
      <div className="mb-6 flex gap-2">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-md ${
            filter === "all"
              ? "bg-[#EA2525] text-white"
              : "bg-white text-gray-700 border"
          }`}
        >
          All ({blogs.length})
        </button>
        <button
          onClick={() => setFilter("published")}
          className={`px-4 py-2 rounded-md ${
            filter === "published"
              ? "bg-[#EA2525] text-white"
              : "bg-white text-gray-700 border"
          }`}
        >
          Published
        </button>
        <button
          onClick={() => setFilter("draft")}
          className={`px-4 py-2 rounded-md ${
            filter === "draft"
              ? "bg-[#EA2525] text-white"
              : "bg-white text-gray-700 border"
          }`}
        >
          Drafts
        </button>
      </div>

      {/* Blog List */}
      {loading ? (
        <div className="text-center py-12">
          <div className="text-xl text-gray-600">Loading blogs...</div>
        </div>
      ) : blogs.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <p className="text-gray-600 mb-4">No blogs found</p>
          <Link
            href="/admin/blogs/new"
            className="text-[#EA2525] hover:underline"
          >
            Create your first blog
          </Link>
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Author
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Views
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Published
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {blogs.map((blog) => (
                <tr key={blog.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <img
                        src={blog.featured_image}
                        alt={blog.title}
                        className="h-10 w-10 rounded object-cover mr-3"
                      />
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {blog.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {blog.excerpt.substring(0, 60)}...
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        blog.status === "published"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {blog.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {blog.author?.username || "Unknown"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {blog.views_count}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {blog.published_at
                      ? new Date(blog.published_at).toLocaleDateString()
                      : "-"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end gap-2">
                      <Link
                        href={`/blog/${blog.slug}`}
                        target="_blank"
                        className="text-blue-600 hover:text-blue-900"
                        title="View"
                      >
                        <Eye size={18} />
                      </Link>
                      <Link
                        href={`/admin/blogs/edit/${blog.slug}`}
                        className="text-indigo-600 hover:text-indigo-900"
                        title="Edit"
                      >
                        <Pencil size={18} />
                      </Link>
                      <button
                        onClick={() => handleDelete(blog.slug, blog.title)}
                        className="text-red-600 hover:text-red-900"
                        title="Delete"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
