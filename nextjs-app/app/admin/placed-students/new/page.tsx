"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Upload } from "lucide-react";
import Link from "next/link";
import axios from "axios";
import SuccessModal from "@/components/SuccessModal";

export default function NewPlacedStudentPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    student_name: "",
    company_name: "",
    student_role: "",
    student_bio: "",
  });
  const [studentImage, setStudentImage] = useState<File | null>(null);
  const [certificate, setCertificate] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL?.replace(/\/api$/, '') || "http://localhost:8000";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("Image size should not exceed 2MB");
        return;
      }
      setStudentImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleCertificateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCertificate(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.student_name || !formData.company_name || !formData.student_role || !studentImage) {
      alert("Please fill in all required fields and upload a student image");
      return;
    }

    setLoading(true);

    try {
      const submitData = new FormData();
      submitData.append("student_name", formData.student_name);
      submitData.append("company_name", formData.company_name);
      submitData.append("student_role", formData.student_role);
      if (formData.student_bio) {
        submitData.append("student_bio", formData.student_bio);
      }
      submitData.append("student_image", studentImage);
      
      if (certificate) {
        submitData.append("certificate", certificate);
      }

      const response = await axios.post(`${API_BASE_URL}/api/placed-students/`, submitData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Show success modal
      setShowSuccessModal(true);
      
      // Redirect after modal closes
      setTimeout(() => {
        window.location.href = "/admin/placed-students";
      }, 3000);
    } catch (error: any) {
      console.error("Error adding student:", error);
      const errorMessage = error.response?.data?.student_image?.[0] || 
                          error.response?.data?.message || 
                          error.message ||
                          "Failed to add student. Please check all fields.";
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Link
          href="/admin/placed-students"
          className="text-red-600 hover:text-red-700 flex items-center gap-2 mb-4"
        >
          <ArrowLeft size={20} />
          Back to Students
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">Add New Placed Student</h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-6">
        {/* Student Name */}
        <div>
          <Label htmlFor="student_name">
            Student Name <span className="text-red-600">*</span>
          </Label>
          <Input
            id="student_name"
            name="student_name"
            value={formData.student_name}
            onChange={handleInputChange}
            placeholder="Enter student name"
            required
          />
        </div>

        {/* Student Image */}
        <div>
          <Label htmlFor="student_image">
            Student Image <span className="text-red-600">*</span> (Max 2MB)
          </Label>
          <div className="mt-2">
            <input
              type="file"
              id="student_image"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            <label
              htmlFor="student_image"
              className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-red-600"
            >
              {imagePreview ? (
                <img src={imagePreview} alt="Preview" className="h-full object-contain" />
              ) : (
                <div className="text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-600">Click to upload student image</p>
                </div>
              )}
            </label>
          </div>
        </div>

        {/* Company Name */}
        <div>
          <Label htmlFor="company_name">
            Company Name <span className="text-red-600">*</span>
          </Label>
          <Input
            id="company_name"
            name="company_name"
            value={formData.company_name}
            onChange={handleInputChange}
            placeholder="Enter company name"
            required
          />
        </div>

        {/* Student Role */}
        <div>
          <Label htmlFor="student_role">
            Role/Designation <span className="text-red-600">*</span>
          </Label>
          <Input
            id="student_role"
            name="student_role"
            value={formData.student_role}
            onChange={handleInputChange}
            placeholder="e.g., Digital Marketing Executive"
            required
          />
        </div>

        {/* Student Bio */}
        <div>
          <Label htmlFor="student_bio">Student Bio (Optional)</Label>
          <Textarea
            id="student_bio"
            name="student_bio"
            value={formData.student_bio}
            onChange={handleInputChange}
            placeholder="Enter student bio or testimonial"
            rows={4}
          />
        </div>

        {/* Certificate Upload */}
        <div>
          <Label htmlFor="certificate">Certificate (Optional)</Label>
          <p className="text-sm text-gray-500 mb-2">
            Upload a certificate PDF or image. If not provided, a certificate will be auto-generated.
          </p>
          <input
            type="file"
            id="certificate"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleCertificateChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
          />
          {certificate && (
            <p className="mt-2 text-sm text-green-600">Selected: {certificate.name}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex gap-4">
          <Button
            type="submit"
            disabled={loading}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            {loading ? "Adding..." : "Add Student"}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push("/admin/placed-students")}
          >
            Cancel
          </Button>
        </div>
      </form>

      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        message="New Student Added Successfully"
      />
    </div>
  );
}
