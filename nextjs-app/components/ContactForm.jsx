"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function CounselingForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    course: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const axios = (await import('axios')).default;
      const api = axios.create({
        baseURL: "https://api.idigitalstudies.com/api/",
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      const response = await api.post("contact/contact/", {
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        interested_courses: formData.course,
        message: formData.message
      });

      if (response.status === 201) {
        // Redirect to thank you page
        window.location.href = "/thank-you";
      }
    } catch (error) {
      console.error("Contact form error:", error);
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <section className="relative flex justify-center items-center py-20 px-6 overflow-hidden bg-white">
      <div
  className="absolute inset-0 pointer-events-none opacity-100"
  style={{
    backgroundColor: "#8c1515",
    backgroundImage:
      "repeating-radial-gradient(circle at 0 0, transparent 0, #8c1515 10px), repeating-linear-gradient(#fd585855, #fd5858)",
  }}
></div>



      {/* Form Card */}
      <div className="relative w-full max-w-3xl bg-white border border-red-100 rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl">

        <h2 className="text-center text-2xl md:text-3xl font-bold text-red-600 mb-1">
          Enroll Now - Free Counseling
        </h2>
        <p className="text-center text-gray-600 mb-8 text-sm md:text-base">
          Fill out the form below and our counselors will contact you within 24 hours
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name & Phone */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Full Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Phone Number <span className="text-red-600">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your phone number"
                pattern="[0-9]{10}"
                maxLength="10"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email Address <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your email address"
              required
            />
          </div>

          {/* Interested Course */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Interested Course
            </label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="">Select your course</option>
              <option value="complete-digital-marketing">
                Complete Digital Marketing
              </option>
              <option value="seo-mastery">Master in Digital Marketing Course at idigitalstudies</option>
              <option value="social-media-pro">Digital Marketing Specialist Course at iDigitalStudies</option>
              <option value="google-ads-expert">Best Digital Marketing Course for Business Owners</option>
              <option value="email-marketing">Digital Marketing Course for Beginners</option>
              <option value="analytics">Customised Course in Digital Marketing</option>
              <option value="content-strategy">Degree in Digital Marketing</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Message (Optional)
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Tell us about your career goals or any specific questions..."
            ></textarea>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white text-lg font-semibold py-2.5 rounded-lg transition-all duration-300 "
          >
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
}
