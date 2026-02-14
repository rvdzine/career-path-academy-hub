"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { blogApi } from "@/lib/api";
import { Blog, BlogFormData } from "@/lib/types";
import RichTextEditor from "./RichTextEditor";
import { useSuccessModal } from "@/hooks/use-success-modal";

interface BlogFormProps {
  blog?: Blog;
  isEdit?: boolean;
}

export default function BlogForm({ blog, isEdit = false }: BlogFormProps) {
  const router = useRouter();
  const { showSuccess, SuccessModal } = useSuccessModal();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [uploadingImage, setUploadingImage] = useState(false);
  
  const [formData, setFormData] = useState<BlogFormData>({
    title: blog?.title || "",
    excerpt: blog?.excerpt || "",
    content: blog?.content || "",
    meta_description: blog?.meta_description || "",
    meta_keywords: blog?.meta_keywords || "",
    featured_image: blog?.featured_image || "",
    status: blog?.status || "draft",
    is_featured: blog?.is_featured || false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleContentChange = (value: string) => {
    setFormData((prev) => ({ ...prev, content: value }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file size (5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError("Image size should be less than 5MB");
      return;
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/avif'];
    if (!allowedTypes.includes(file.type)) {
      setError("Only JPEG, PNG, WEBP, and AVIF images are allowed");
      return;
    }

    setUploadingImage(true);
    setError("");

    try {
      const response = await blogApi.uploadImage(file);
      setFormData((prev) => ({ ...prev, featured_image: response.data.url }));
    } catch (err: any) {
      console.error("Error uploading image:", err);
      setError(err.response?.data?.error || "Failed to upload image");
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent, saveAs: "draft" | "published") => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const dataToSubmit = { ...formData, status: saveAs };

      if (isEdit && blog) {
        await blogApi.updateBlog(blog.slug, dataToSubmit);
        showSuccess({
          title: "Blog Updated!",
          description: `Blog has been ${saveAs === 'published' ? 'published' : 'saved as draft'} successfully`,
          autoCloseDelay: 3000
        });
      } else {
        await blogApi.createBlog(dataToSubmit);
        showSuccess({
          title: "Blog Published Successfully!",
          description: `Your blog has been ${saveAs === 'published' ? 'published' : 'saved as draft'} successfully`,
          autoCloseDelay: 3000
        });
      }

      setTimeout(() => router.push("/admin/blogs"), 3000);
    } catch (err: any) {
      console.error("Error saving blog:", err);
      setError(err.response?.data?.message || "Failed to save blog");
    } finally {
      setLoading(false);
    }
  };

  // Character count for meta description
  const metaDescLength = formData.meta_description.length;
  const metaDescColor =
    metaDescLength < 50
      ? "text-red-600"
      : metaDescLength > 160
      ? "text-red-600"
      : "text-green-600";

  return (
    <>
      <SuccessModal />
      <form className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {/* Title */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
          Blog Title *
        </label>
        <input
          type="text"
          id="title"
          name="title"
          required
          value={formData.title}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#EA2525] focus:border-[#EA2525]"
          placeholder="Enter blog title"
        />
      </div>

      {/* Excerpt */}
      <div>
        <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-2">
          Excerpt (Short Description) *
        </label>
        <textarea
          id="excerpt"
          name="excerpt"
          required
          rows={3}
          value={formData.excerpt}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#EA2525] focus:border-[#EA2525]"
          placeholder="Brief description for blog listing"
        />
      </div>

      {/* Content */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Blog Content *
        </label>
        <RichTextEditor
          content={formData.content}
          onChange={handleContentChange}
        />
      </div>

      {/* Featured Image */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Featured Image
        </label>
        
        {/* Upload Button */}
        <div className="flex gap-4 mb-2">
          <label className="flex-1">
            <input
              type="file"
              accept="image/jpeg,image/jpg,image/png,image/webp,image/avif"
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
            />
            <div className="w-full px-4 py-2 border-2 border-dashed border-gray-300 rounded-md hover:border-[#EA2525] cursor-pointer text-center transition">
              {uploadingImage ? (
                <span className="text-gray-600">Uploading...</span>
              ) : (
                <span className="text-gray-600">
                  📤 Click to Upload Image (Max 5MB)
                </span>
              )}
            </div>
          </label>
        </div>
        
        {/* OR Divider */}
        <div className="flex items-center gap-2 my-3">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="text-sm text-gray-500">OR</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>
        
        {/* URL Input */}
        <input
          type="url"
          id="featured_image"
          name="featured_image"
          value={formData.featured_image}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#EA2525] focus:border-[#EA2525]"
          placeholder="Or paste image URL: https://example.com/image.jpg"
        />
        
        {/* Image Preview */}
        {formData.featured_image && (
          <div className="mt-3">
            <p className="text-sm text-gray-600 mb-2">Preview:</p>
            <img
              src={formData.featured_image}
              alt="Preview"
              className="h-40 w-auto rounded border shadow-sm"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x200?text=Invalid+Image";
              }}
            />
          </div>
        )}
        
        <p className="text-xs text-gray-500 mt-2">
          Supported formats: JPEG, PNG, WEBP, AVIF • Max size: 5MB • Recommended: 1200x630px
        </p>
      </div>

      {/* SEO Section */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">SEO Settings</h3>

        {/* Meta Description */}
        <div className="mb-4">
          <label htmlFor="meta_description" className="block text-sm font-medium text-gray-700 mb-2">
            Meta Description * (50-160 characters)
          </label>
          <textarea
            id="meta_description"
            name="meta_description"
            required
            rows={3}
            value={formData.meta_description}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#EA2525] focus:border-[#EA2525]"
            placeholder="SEO meta description"
          />
          <p className={`text-sm mt-1 ${metaDescColor}`}>
            {metaDescLength} characters
            {metaDescLength < 50 && " (too short)"}
            {metaDescLength > 160 && " (too long)"}
          </p>
        </div>

        {/* Meta Keywords */}
        <div>
          <label htmlFor="meta_keywords" className="block text-sm font-medium text-gray-700 mb-2">
            Meta Keywords (Optional)
          </label>
          <input
            type="text"
            id="meta_keywords"
            name="meta_keywords"
            value={formData.meta_keywords}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#EA2525] focus:border-[#EA2525]"
            placeholder="seo, digital marketing, keywords"
          />
        </div>
      </div>

      {/* Featured Checkbox */}
      <div className="flex items-center">
        <input
          type="checkbox"
          id="is_featured"
          name="is_featured"
          checked={formData.is_featured}
          onChange={handleChange}
          className="h-4 w-4 text-[#EA2525] focus:ring-[#EA2525] border-gray-300 rounded"
        />
        <label htmlFor="is_featured" className="ml-2 block text-sm text-gray-900">
          Mark as Featured Blog
        </label>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 pt-6 border-t">
        <button
          type="button"
          onClick={(e) => handleSubmit(e, "draft")}
          disabled={loading}
          className="flex-1 bg-gray-600 text-white px-6 py-3 rounded-md hover:bg-gray-700 disabled:opacity-50"
        >
          {loading ? "Saving..." : "Save as Draft"}
        </button>
        <button
          type="button"
          onClick={(e) => handleSubmit(e, "published")}
          disabled={loading}
          className="flex-1 bg-[#EA2525] text-white px-6 py-3 rounded-md hover:bg-red-600 disabled:opacity-50"
        >
          {loading ? "Publishing..." : "Publish Blog"}
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin/blogs")}
          className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Cancel
        </button>
      </div>
    </form>
    </>
  );
}
