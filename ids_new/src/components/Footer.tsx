"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  ShieldCheck,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 font-sans border-t border-slate-800">
      
      {/* 1. Top Red Contact Strip */}
      <div className="bg-[#fe4759] text-white py-4 px-4 sm:px-6 shadow-md">
        <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-white animate-pulse"></span>
            <span className="font-bold text-sm">
              Ready to accelerate your career? Talk to our senior career advisors today.
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 flex-wrap text-xs sm:text-sm font-semibold">
            <a
              href="tel:+919315471293"
              className="flex items-center gap-1.5 hover:underline"
            >
              <Phone className="w-4 h-4" />
              <span>+91 9315471293</span>
            </a>
            <span className="opacity-50">|</span>
            <a
              href="mailto:info@idigitalstudies.com"
              className="flex items-center gap-1.5 hover:underline"
            >
              <Mail className="w-4 h-4" />
              <span>info@idigitalstudies.com</span>
            </a>
            <span className="opacity-50">|</span>
            <a
              href="https://wa.me/919315471293"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-white text-[#fe4759] px-3.5 py-1 rounded-full text-xs font-bold hover:bg-slate-100 transition-colors shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Links Columns (5-column balanced grid) */}
      <div className="max-w-[1400px] w-full mx-auto py-14 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4 lg:col-span-1">
            <Link href="/" className="relative h-9 w-44 md:w-48 block">
              <Image
                src="/assets/IDS_new_logo.svg"
                alt="IDS Logo"
                fill
                className="object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              IDS (Institute of Digital Studies), a subsidiary of Cybershield Technologies Pvt. Ltd., is India&apos;s premier digital marketing institute providing 100% practical training on live ad budgets and generative AI tools.
            </p>
            <div className="pt-2">
              <span className="inline-block text-[11px] font-semibold text-rose-400 bg-rose-500/10 border border-rose-500/20 px-3 py-1 rounded-full">
                MSME & NSDC Aligned Curriculum
              </span>
            </div>
          </div>

          {/* Column 2: Our 4 Certified Programs */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4 border-b border-slate-800 pb-2">
              Our Programs
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/courses/master-in-digital-marketing" className="hover:text-[#fe4759] transition-colors">
                  Master in Digital Marketing (6 Mos)
                </Link>
              </li>
              <li>
                <Link href="/courses/digital-marketing-specialist" className="hover:text-[#fe4759] transition-colors">
                  Digital Marketing Specialist (3 Mos)
                </Link>
              </li>
              <li>
                <Link href="/courses/digital-marketing-for-business-owners" className="hover:text-[#fe4759] transition-colors">
                  Digital Marketing for Business Owners
                </Link>
              </li>
              <li>
                <Link href="/courses/customised-course-in-digital-marketing" className="hover:text-[#fe4759] transition-colors">
                  Customised Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4 border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/about-us" className="hover:text-[#fe4759] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/glimpse" className="hover:text-[#fe4759] transition-colors">
                  Campus Glimpse
                </Link>
              </li>
              <li>
                <Link href="/jobs-and-placements" className="hover:text-[#fe4759] transition-colors">
                  Jobs & Placements
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#fe4759] transition-colors">
                  Agency Services
                </Link>
              </li>
              <li>
                <Link href="/#hiring-partners" className="hover:text-[#fe4759] transition-colors">
                  Hiring Partners
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#fe4759] transition-colors">
                  Blog & Marketing Insights
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-[#fe4759] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Policies */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4 border-b border-slate-800 pb-2 flex items-center gap-1.5">
              <span>Policies & Trust</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-[#fe4759] transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fe4759]" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="hover:text-[#fe4759] transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fe4759]" />
                  <span>Terms & Conditions</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/verify-certificate"
                  className="text-white hover:text-[#fe4759] font-medium transition-colors flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#fe4759]" />
                  <span>Verify Certificate</span>
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-[#fe4759] transition-colors">
                  Refund & Cancellation Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy#consent-communication" className="hover:text-[#fe4759] transition-colors">
                  Communication & DND Policy
                </Link>
              </li>
              <li>
                <Link href="/jobs-and-placements" className="hover:text-[#fe4759] transition-colors">
                  Placement Assistance Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Campus & Contact */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4 border-b border-slate-800 pb-2">
              Contact & Campus
            </h4>
            
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#fe4759] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  F407-408, Arthamart, Tech zone IV, Greater Noida, UP - 201306
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#fe4759] shrink-0" />
                <a href="tel:+919315471293" className="hover:text-white transition-colors">
                  +91 9315471293
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#fe4759] shrink-0" />
                <a href="mailto:info@idigitalstudies.com" className="hover:text-white transition-colors">
                  info@idigitalstudies.com
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-slate-800/80">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-[11px] leading-relaxed">
                  <span className="text-slate-300 font-semibold block">Training Modes</span>
                  Online Live (Pan-India) & Offline Campus (Greater Noida)
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Bottom Legal & Copyright Bar */}
      <div className="border-t border-slate-900 py-6 px-4 bg-slate-950/80">
        <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 IDS - Institute of Digital Studies, a subsidiary of Cybershield Technologies Pvt. Ltd. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <Link href="/verify-certificate" className="hover:text-[#fe4759] transition-colors font-medium text-slate-400">
              Verify Certificate
            </Link>
            <span>•</span>
            <Link href="/privacy-policy" className="hover:text-[#fe4759] text-slate-300 font-medium transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms-and-conditions" className="hover:text-[#fe4759] text-slate-300 font-medium transition-colors">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link href="/#faq" className="hover:text-[#fe4759] transition-colors">
              Refund Policy
            </Link>
            <span>•</span>
            <Link href="/contact-us" className="hover:text-[#fe4759] transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
