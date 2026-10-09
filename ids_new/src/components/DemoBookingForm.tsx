"use client";

import { useState } from "react";
import { Sparkles, CheckCircle2, Phone, Mail, User, BookOpen, Send, ShieldCheck } from "lucide-react";

export default function DemoBookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "Data Analytics Master Course",
    experience: "Fresher / College Student",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate or send to FastAPI backend endpoint
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="consultation" className="py-16 md:py-24 bg-white font-sans relative border-t border-slate-100">
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-950 via-rose-950/80 to-slate-950 rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
          
          {/* Subtle Ambient Blob */}
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-[#fe4759]/20 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Column: Value Prop */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fe4759]/20 border border-[#fe4759]/40 text-rose-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Free Counseling & Live Demo
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15]">
                Book Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fe4759] to-rose-300">
                  Free Live Demo Class
                </span>{" "}
                Today
              </h2>

              <p className="text-base text-slate-300 leading-relaxed font-normal">
                Speak with our senior academic counselors, discuss your career
                goals, review detailed curriculum modules, and experience a live session.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-[#fe4759] shrink-0" />
                  <span>1-on-1 Personalized Career Profile Assessment</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-[#fe4759] shrink-0" />
                  <span>Access Complete Syllabus, Tools & Project Repos</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-[#fe4759] shrink-0" />
                  <span>0% Interest Easy EMI Options Available</span>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-3 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Your privacy is 100% protected. No spam ever.</span>
              </div>

            </div>

            {/* Right Column: Lead Form Card */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl p-6 sm:p-8 text-slate-900 shadow-xl max-w-lg mx-auto">
                {submitted ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Demo Session Reserved!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-xs mx-auto">
                      Thank you, <span className="font-semibold text-[#fe4759]">{formData.name}</span>. Our senior career advisor will contact you within 15 minutes.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-6 py-2 text-xs font-bold text-[#fe4759] border border-[#fe4759]/30 rounded-xl hover:bg-[#fe4759]/10 transition-colors"
                    >
                      Book Another Session
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        Request a Free Callback
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Fill in your details to secure your demo seat
                      </p>
                    </div>

                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          placeholder="e.g. John Doe"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#fe4759] focus:ring-1 focus:ring-[#fe4759] outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          placeholder="e.g. john@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#fe4759] focus:ring-1 focus:ring-[#fe4759] outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#fe4759] focus:ring-1 focus:ring-[#fe4759] outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Course */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Select Program *
                      </label>
                      <div className="relative">
                        <BookOpen className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <select
                          value={formData.course}
                          onChange={(e) =>
                            setFormData({ ...formData, course: e.target.value })
                          }
                          className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#fe4759] focus:ring-1 focus:ring-[#fe4759] outline-none transition-all bg-white"
                        >
                          <option>Data Analytics Master Course</option>
                          <option>Digital Marketing Master Course</option>
                          <option>PG Diploma in Digital Marketing with AI</option>
                          <option>PG Diploma in Advanced Analytics & Agentic AI</option>
                          <option>Financial Modeling Master Course</option>
                          <option>Investment Banking Master Course</option>
                          <option>UI UX Design Master Course</option>
                          <option>Content Writing Master Course</option>
                          <option>Medical Scribing Master Course</option>
                        </select>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 px-6 rounded-xl bg-[#fe4759] hover:bg-[#e0384a] text-white font-bold text-sm shadow-md shadow-[#fe4759]/25 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                    >
                      {loading ? (
                        <span>Processing...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Book Free Demo & Get Syllabus</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
