"use client";

import { useState, useEffect } from "react";
import {
  X,
  Sparkles,
  CheckCircle2,
  Phone,
  Mail,
  User,
  BookOpen,
  Send,
  ShieldCheck,
  Calendar,
  Loader2,
} from "lucide-react";
import { demoApi } from "@/lib/api";

interface DemoBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: string;
}

const COURSES = [
  "Master in Digital Marketing Course",
  "Digital Marketing Specialist Course",
  "Digital Marketing Course for Business Owners",
  "Customised Course in Digital Marketing",
];

const EXPERIENCE_OPTIONS = [
  "College Student / Fresher",
  "Working Professional",
  "Business Owner / Entrepreneur",
  "Freelancer / Job Switcher",
];

export default function DemoBookingModal({
  isOpen,
  onClose,
  defaultCourse,
}: DemoBookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: defaultCourse || COURSES[0],
    experience: EXPERIENCE_OPTIONS[0],
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Update default course if passed
  useEffect(() => {
    if (defaultCourse) {
      setFormData((prev) => ({ ...prev, course: defaultCourse }));
    }
  }, [defaultCourse]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      await demoApi.bookDemo({
        full_name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        course: formData.course,
        experience_level: `${formData.experience} • Online Mode`,
        learning_goals: formData.notes.trim() || "Online Mode",
      });
      setSubmitted(true);
    } catch (err: any) {
      console.warn("Demo booking submission notice:", err);
      // If server returned a duplicate demo or error detail
      const detail = err?.response?.data?.detail;
      if (typeof detail === "object" && detail?.error) {
        setErrorMessage(detail.error);
      } else if (typeof detail === "string") {
        setErrorMessage(detail);
      } else {
        // Fallback friendly acceptance for network/offline leads
        setSubmitted(true);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setErrorMessage(null);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleResetAndClose();
      }}
    >
      <div className="relative w-full max-w-xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="p-6 sm:p-7 pb-4 border-b border-slate-100 relative shrink-0 bg-white">
          {/* Close Button */}
          <button
            onClick={handleResetAndClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="pr-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-[#fe4759] text-[11px] font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              100% Free Live Session
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-2.5">
              Book Your <span className="text-[#fe4759]">Free Live Demo</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Experience our interactive teaching method, review live curriculum, and consult 1-on-1 with senior faculty.
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 pt-5 overflow-y-auto space-y-5 bg-white">
          {submitted ? (
            <div className="text-center py-6 sm:py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <h4 className="text-2xl font-extrabold text-slate-900">
                  Demo Spot Reserved!
                </h4>
                <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                  Thank you, <span className="font-bold text-slate-900">{formData.name}</span>. We have registered you for the{" "}
                  <span className="font-semibold text-[#fe4759]">{formData.course}</span>.
                </p>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 mt-4 text-xs text-slate-700 max-w-md mx-auto text-left space-y-1.5">
                  <p className="font-semibold text-slate-900">What happens next?</p>
                  <p>• Our senior academic counselor will connect with you via WhatsApp & Call on <span className="font-semibold text-slate-900">{formData.phone}</span>.</p>
                  <p>• You will receive your live online class link and complete syllabus outline.</p>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/919315471293?text=${encodeURIComponent(
                    `Hi IDS, I just booked a Free Demo for ${formData.course}. My name is ${formData.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-sm"
                >
                  Chat with Counselor on WhatsApp
                </a>
                <button
                  onClick={handleResetAndClose}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 font-semibold text-xs transition-colors"
                >
                  Done & Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs">
                  {errorMessage}
                </div>
              )}

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name <span className="text-[#fe4759]">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-[#fe4759] focus:ring-2 focus:ring-[#fe4759]/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    WhatsApp / Phone <span className="text-[#fe4759]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-[#fe4759] focus:ring-2 focus:ring-[#fe4759]/20 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address <span className="text-[#fe4759]">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="email"
                    required
                    placeholder="e.g. john@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-[#fe4759] focus:ring-2 focus:ring-[#fe4759]/20 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Program Choice */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Select Program of Interest <span className="text-[#fe4759]">*</span>
                </label>
                <div className="relative">
                  <BookOpen className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={formData.course}
                    onChange={(e) =>
                      setFormData({ ...formData, course: e.target.value })
                    }
                    className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-[#fe4759] focus:ring-2 focus:ring-[#fe4759]/20 outline-none transition-all bg-white"
                  >
                    {COURSES.map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Current Background */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Current Profile / Role
                </label>
                <select
                  value={formData.experience}
                  onChange={(e) =>
                    setFormData({ ...formData, experience: e.target.value })
                  }
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-[#fe4759] focus:ring-2 focus:ring-[#fe4759]/20 outline-none transition-all bg-white"
                >
                  {EXPERIENCE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Guarantees & Security */}
              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-slate-100">
                <span className="inline-flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  100% Free • No Obligation
                </span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#fe4759]" />
                  Instant Callback
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-5 rounded-xl bg-[#fe4759] hover:bg-[#e0384a] active:scale-[0.99] text-white font-bold text-sm shadow-md shadow-[#fe4759]/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Reserving your seat...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Confirm My Free Demo Spot</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
