"use client";

import { useState } from "react";
import Image from "next/image";
import api from "../lib/axios";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  User,
  Mail,
  Phone,
  GraduationCap,
  ChevronDown,
} from "lucide-react";

export default function ProgramForm() {
  const [role, setRole] = useState("working_professional");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
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
        message: "", // Optional field, empty for ProgramForm
      });

      if (response.status === 201) {
        router.push("/thank-you");
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

  const experienceOptions = [
    { label: "Student / Fresher", value: "fresher_student" },
    { label: "Working Professional", value: "working_professional" },
    { label: "Business Owner", value: "business_owner" },
    { label: "Career Switcher", value: "career_switcher" },
    { label: "Freelancer", value: "freelancer" },
    { label: "Homemaker", value: "home_maker" },
    { label: "Other", value: "others" },
  ];

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-t border-gray-100 overflow-hidden">
      {/* Subtle ambient red dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, #EA252514 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* ─── LEFT COLUMN: ILLUSTRATION ─── */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="relative w-full max-w-sm sm:max-w-md mx-auto lg:mx-0 group">
              <Image
                src="/svg/Illustration.svg"
                alt="Digital Marketing Consultation and Counseling"
                width={480}
                height={420}
                className="w-full h-auto object-contain drop-shadow-sm group-hover:scale-102 transition-transform duration-500"
                priority
              />
            </div>
          </div>

          {/* ─── RIGHT COLUMN: BEAUTIFIED FORM CARD ─── */}
          <div className="lg:col-span-7">
            <div className="relative bg-white border border-gray-200/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg shadow-gray-200/50 hover:shadow-xl transition-all duration-300">
              {/* Form Header */}
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="block w-8 h-[2.5px] bg-red-600 rounded-full" />
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-red-600">
                    Direct Admissions // Career Consultation
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-950 tracking-tight leading-tight">
                  Want To Know More <br className="hidden sm:inline" />
                  About The <span className="text-red-600">Program?</span>
                </h2>

                <p className="mt-2 text-xs sm:text-sm text-gray-600 font-normal leading-relaxed">
                  Fill out the form below and our counseling team will connect with you within 24 hours.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Row 1: Full Name & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="group">
                    <label className="text-xs font-bold text-gray-800 mb-1.5 flex items-center gap-1.5">
                      <span>Full Name</span>
                      <span className="text-red-600 font-bold">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <div className="absolute left-3.5 pointer-events-none text-gray-400 group-focus-within:text-red-600 transition-colors">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-stone-50/70 hover:bg-stone-50 border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-950 placeholder:text-gray-400 focus:outline-none focus:border-red-600 focus:bg-white focus:ring-3 focus:ring-red-600/10 transition-all font-medium"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="group">
                    <label className="text-xs font-bold text-gray-800 mb-1.5 flex items-center gap-1.5">
                      <span>Phone Number</span>
                      <span className="text-red-600 font-bold">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <div className="absolute left-3.5 pointer-events-none text-gray-400 group-focus-within:text-red-600 transition-colors">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-stone-50/70 hover:bg-stone-50 border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-950 placeholder:text-gray-400 focus:outline-none focus:border-red-600 focus:bg-white focus:ring-3 focus:ring-red-600/10 transition-all font-medium"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Row 2: Email & Program Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email Address */}
                  <div className="group">
                    <label className="text-xs font-bold text-gray-800 mb-1.5 flex items-center gap-1.5">
                      <span>Email Address</span>
                      <span className="text-red-600 font-bold">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <div className="absolute left-3.5 pointer-events-none text-gray-400 group-focus-within:text-red-600 transition-colors">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-stone-50/70 hover:bg-stone-50 border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-950 placeholder:text-gray-400 focus:outline-none focus:border-red-600 focus:bg-white focus:ring-3 focus:ring-red-600/10 transition-all font-medium"
                        required
                      />
                    </div>
                  </div>

                  {/* Interested Course Dropdown */}
                  <div className="group">
                    <label className="text-xs font-bold text-gray-800 mb-1.5 flex items-center gap-1.5">
                      <span>Interested Course</span>
                      <span className="text-red-600 font-bold">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <div className="absolute left-3.5 pointer-events-none text-gray-400 group-focus-within:text-red-600 transition-colors">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <select
                        className="w-full pl-10 pr-9 py-3 bg-stone-50/70 hover:bg-stone-50 border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-red-600 focus:bg-white focus:ring-3 focus:ring-red-600/10 transition-all font-medium appearance-none cursor-pointer"
                        value={formData.course}
                        onChange={(e) => handleInputChange("course", e.target.value)}
                        required
                      >
                        <option value="">Select a program</option>
                        <option value="master_dm_internship">
                          Master in DM with Internship
                        </option>
                        <option value="specialist_dm">Specialist in DM</option>
                        <option value="dm_business_owners">DM for Business Owners</option>
                        <option value="foundation_basic_dm">Foundation/Basic in DM Course</option>
                        <option value="custom_dm">Custom DM Course</option>
                      </select>
                      <div className="absolute right-3 pointer-events-none text-gray-400">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience Level Pill Selector */}
                <div className="pt-2">
                  <label className="text-xs font-bold text-gray-800 block mb-2.5">
                    Current Experience Level
                  </label>

                  <div className="flex flex-wrap gap-2">
                    {experienceOptions.map((item) => {
                      const isSelected = role === item.value;
                      return (
                        <button
                          key={item.value}
                          type="button"
                          onClick={() => setRole(item.value)}
                          className={`text-xs font-bold px-3.5 py-2 rounded-xl border transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                            isSelected
                              ? "bg-red-600 text-white border-red-600 shadow-sm shadow-red-600/20 scale-[1.02]"
                              : "bg-stone-50/90 text-gray-700 border-gray-200 hover:bg-white hover:border-gray-300"
                          }`}
                        >
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                          <span>{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Submit CTA */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto bg-red-600 hover:bg-gray-950 text-white font-black text-xs uppercase tracking-widest py-3.5 px-8 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-red-600/15 active:scale-95 disabled:opacity-60"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                    }}
                  >
                    <span>
                      {loading ? "Submitting Request..." : "Request Free Consultation"}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


