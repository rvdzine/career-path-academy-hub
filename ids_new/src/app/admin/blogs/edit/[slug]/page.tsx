"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import BlogForm from "@/components/admin/BlogForm";
import { blogApi } from "@/lib/api";
import { Blog } from "@/lib/types";

export default function EditBlogPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchBlog();
  }, [slug]);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      const response = await blogApi.getBlogBySlug(slug);
      setBlog(response.data);
    } catch (err: any) {
      console.error("Error fetching blog:", err);
      setError("Failed to load blog");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="text-xl text-gray-600">Loading blog...</div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="text-center py-12">
        <div className="text-xl text-red-600">{error || "Blog not found"}</div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Edit Blog</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <BlogForm blog={blog} isEdit={true} />
      </div>
    </div>
  );
}
