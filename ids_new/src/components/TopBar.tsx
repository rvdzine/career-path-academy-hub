"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function TopBar() {
  return (
    <div className="hidden md:block bg-[#FFF5F6] text-xs lg:text-[13px] text-slate-800 border-b border-rose-100 font-sans">
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
        {/* Left Side: Contact Information */}
        <div className="flex items-center gap-4 lg:gap-6 flex-wrap">
          <div className="flex items-center gap-1.5">
            <span className="text-slate-500 font-medium">Email:</span>
            <a
              href="mailto:info@idigitalstudies.com"
              className="text-[#fe4759] hover:text-[#e0384a] font-medium transition-colors"
            >
              info@idigitalstudies.com
            </a>
          </div>
          <div className="h-3.5 w-px bg-rose-200 hidden sm:block"></div>
          <div className="flex items-center gap-1.5">
            <span className="text-slate-500 font-medium">Customer Care No:</span>
            <a
              href="tel:+919315471293"
              className="text-slate-900 font-semibold hover:text-[#fe4759] transition-colors"
            >
              +91 9315471293
            </a>
          </div>
        </div>

        {/* Right Side: Quick Links */}
        <div className="flex items-center gap-4 lg:gap-6 text-slate-600 font-medium">
          <a
            href="#hiring-partners"
            className="hover:text-[#fe4759] transition-colors flex items-center gap-1"
          >
            Hiring Partner
          </a>
          <span className="text-slate-300">•</span>
          <a
            href="#alumni"
            className="hover:text-[#fe4759] transition-colors"
          >
            Participant Reviews
          </a>
          <span className="text-slate-300">•</span>
          <a
            href="#stories"
            className="hover:text-[#e0384a] transition-colors text-[#fe4759] font-semibold"
          >
            Video Testimonials
          </a>
        </div>
      </div>
    </div>
  );
}
