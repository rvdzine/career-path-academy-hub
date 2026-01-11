"use client";

import BlogForm from "@/components/admin/BlogForm";

export default function NewBlogPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Create New Blog</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <BlogForm />
      </div>
    </div>
  );
}
