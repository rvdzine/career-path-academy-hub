"use client";

import { useState } from "react";
import Image from "next/image";
import { useSuccessModal } from "@/hooks/use-success-modal";
import api from '../lib/axios';

export default function ProgramForm() {
  const [role, setRole] = useState("working_professional");
  const { showSuccess, SuccessModal } = useSuccessModal();
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await api.post("contact/contact/", {
        full_name: formData.name,
        email: formData.email,
        phone: formData.phone,
        interested_courses: formData.course,
        experience: role,
        message: "" // Optional field, empty for ProgramForm
      });

      if (response.status === 201) {
        showSuccess({
          title: "Thank You!",
          description: "Your details have been submitted successfully. We'll contact you within 24 hours.",
          autoCloseDelay: 4000
        });

        // Reset form
        setFormData({
          name: "",
          phone: "",
          email: "",
          course: "",
        });
        setRole("working_professional");
      }
    } catch (error: any) {
      const errorMsg =
        error?.response?.data?.non_field_errors?.[0] ||
        error?.response?.data?.email?.[0] ||
        "Something went wrong. Please try again.";
      
      alert(`Error: ${errorMsg}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SuccessModal />
      <section className="w-full bg-[#FFF9F9] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* LEFT ILLUSTRATION */}
        <div className="flex justify-center order-1 lg:order-none">
          <Image
            src="/svg/Illustration.svg"
            alt="Program Illustration"
            width={480}
            height={420}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md"
            priority
          />
        </div>

        {/* RIGHT FORM CONTENT */}
        <div className="order-2 lg:order-none">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-3">
            Want to know more about the <br className="hidden sm:block" /> Program?
          </h2>

          <p className="text-sm sm:text-base text-gray-600 mb-8 sm:mb-10">
            Fill out the form below and our counselors will contact you within
            24 hours
          </p>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">

            {/* Name */}
            <div>
              <label className="text-sm text-gray-700 mb-1 block">
              Full Name *
              </label>
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-red-500"
                required
              />
            </div>

            {/* Mobile */}
            <div>
              <label className="text-sm text-gray-700 mb-1 block">
              Phone Number *
              </label>
              <input
                type="tel"
                placeholder="+91 -"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-red-500"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-700 mb-1 block">
              Email Address *
              </label>
              <input
                type="email"
                placeholder="abc@abc.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-red-500"
                required
              />
            </div>

            {/* Course */}
            <div>
              <label className="text-sm text-gray-700 mb-1 block">
              Interested Courses
              </label>
              <select 
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm text-gray-600 focus:outline-none focus:border-red-500"
                value={formData.course}
                onChange={(e) => handleInputChange("course", e.target.value)}
              >
                <option value="">Select</option>
                <option value="master_dm_internship">Master in DM with Internship</option>
                <option value="specialist_dm">Specialist in DM</option>
                <option value="dm_business_owners">DM for Business Owners</option>
                <option value="foundation_basic_dm">Foundation/Basic in DM Course</option>
                <option value="custom_dm">Custom DM Course</option>
              </select>
            </div>

            {/* Role */}
            <div className="sm:col-span-2 mt-2">
              <label className="text-sm text-gray-700 block mb-3">
              Current Experience Level
              </label>

              <div className="flex flex-wrap gap-4 sm:gap-6">
                {[
                  { label: "Fresher/Student", value: "fresher_student" },
                  { label: "Working Professional", value: "working_professional" },
                  { label: "Business Owner", value: "business_owner" },
                  { label: "Freelancer", value: "freelancer" },
                  { label: "Home Maker", value: "home_maker" },
                  { label: "Others", value: "others" },
                ].map((item) => (
                  <label
                    key={item.value}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="role"
                      value={item.value}
                      checked={role === item.value}
                      onChange={(e) => setRole(e.target.value)}
                      className="accent-red-500"
                    />
                    <span className="text-gray-700 text-sm">
                      {item.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit */}
            <div className="sm:col-span-2 mt-6 flex justify-center sm:justify-start">
              <button
                type="submit"
                disabled={loading}
                className="bg-red-500 hover:bg-red-600 text-white px-10 sm:px-12 py-3 rounded-full text-sm sm:text-base font-medium transition disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
    </>
  );
}
