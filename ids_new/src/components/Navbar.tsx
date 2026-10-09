"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  MessageCircle,
} from "lucide-react";
import TopBar from "@/components/TopBar";
import MegaMenu from "@/components/MegaMenu";

export default function Navbar() {
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const aboutItems = [
    { title: "About Us", desc: "Our story, mission & global leadership", href: "/about-us" },
    { title: "Campus Glimpse", desc: "Campus culture, student life & bento gallery", href: "/glimpse" },
    { title: "Agency Services", desc: "Full-stack digital marketing & ₹999 test sprints", href: "/services" },
    { title: "Contact Us", desc: "Speak with senior advisors at +91 9315471293", href: "/contact-us" },
    { title: "Refund Policy", desc: "100% transparent fee & money-back policy", href: "/#faq" },
    { title: "Terms & Conditions", desc: "Admissions, enrollment & code of conduct", href: "/terms-and-conditions" },
    { title: "Privacy Policy", desc: "Data protection & student privacy guidelines", href: "/privacy-policy" },
  ];



  return (
    <div id="site-header-wrapper" className="w-full siteNavbar relative z-50">
      {/* 1. Top Utility Bar */}
      <TopBar />

      {/* 2. Main Sticky Navigation Header */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between relative">
          
          {/* Left: Brand Logo & "All Courses" Mega Menu Button */}
          <div className="flex items-center gap-3 xl:gap-5 shrink-0">
            <Link href="/" className="flex items-center group shrink-0">
              <div className="relative h-8 md:h-9 w-36 sm:w-44 md:w-48 flex items-center">
                <Image
                  src="/assets/IDS_new_logo.svg"
                  alt="IDS - Institute of Digital Studies"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* "All Courses" Mega Menu Trigger */}
            <div className="hidden lg:block relative shrink-0">
              <button
                onClick={() => setIsMegaOpen(!isMegaOpen)}
                className={`flex items-center gap-1.5 px-3.5 xl:px-5 py-2 xl:py-2.5 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 shadow-sm cursor-pointer whitespace-nowrap ${
                  isMegaOpen
                    ? "bg-[#d63343] text-white shadow-md shadow-[#fe4759]/30 ring-2 ring-[#fecdd3]"
                    : "bg-[#fe4759] hover:bg-[#e0384a] text-white shadow-sm shadow-[#fe4759]/20 hover:scale-[1.02]"
                }`}
                aria-expanded={isMegaOpen}
                aria-label="Toggle All Courses Mega Menu"
              >
                <span>All Courses</span>
                <span
                  className={`inline-block text-xs transition-transform duration-200 ${
                    isMegaOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▾
                </span>
              </button>
            </div>
          </div>

          {/* Center / Right: Desktop Navigation Links & Action Buttons */}
          <nav
            ref={dropdownRef}
            className="hidden lg:flex items-center gap-2 xl:gap-4 2xl:gap-5 text-slate-700 font-medium text-[13px] xl:text-[14px]"
          >
            {/* Custom Corner-Framed Placement Button (Exact Match to User Reference) */}
            <Link
              href="/jobs-and-placements"
              className="relative group inline-flex items-center justify-center px-3.5 py-1.5 xl:px-4 xl:py-1.5 text-[13px] xl:text-[14px] font-medium text-slate-900 transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer shrink-0"
            >
              {/* Top-Left Bracket (L-Shape) */}
              <span className="absolute top-0 left-0 w-[72%] h-[2px] bg-gradient-to-r from-[#fe4759] via-[#ff6b7a] to-[#ff9aa5] group-hover:w-[85%] transition-all duration-300" />
              <span className="absolute top-0 left-0 w-[2px] h-[65%] bg-[#fe4759] group-hover:h-[80%] transition-all duration-300" />

              {/* Placement Text */}
              <span className="px-1 py-0.5 tracking-tight group-hover:text-[#fe4759] transition-colors">
                Placement
              </span>

              {/* Bottom-Right Bracket (L-Shape) */}
              <span className="absolute bottom-0 right-0 w-[72%] h-[2px] bg-gradient-to-l from-[#fe4759] via-[#ff6b7a] to-[#ff9aa5] group-hover:w-[85%] transition-all duration-300" />
              <span className="absolute bottom-0 right-0 w-[2px] h-[65%] bg-[#fe4759] group-hover:h-[80%] transition-all duration-300" />
            </Link>

            {/* About Us Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("about")}
                className={`flex items-center gap-1 py-1.5 hover:text-[#fe4759] transition-colors cursor-pointer whitespace-nowrap ${
                  activeDropdown === "about" ? "text-[#fe4759] font-semibold" : ""
                }`}
              >
                <span>About Us</span>
                <ChevronDown className="w-3.5 h-3.5 mt-0.5" />
              </button>

              {activeDropdown === "about" && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-slate-100 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  {aboutItems.map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      className="block p-2.5 rounded-lg hover:bg-rose-50/50 transition-colors group"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <div className="text-sm font-semibold text-slate-800 group-hover:text-[#fe4759]">
                        {item.title}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {item.desc}
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Services Link */}
            <Link
              href="/services"
              className="hover:text-[#fe4759] transition-colors whitespace-nowrap font-medium"
            >
              Services
            </Link>

            {/* Blogs Link */}
            <Link
              href="/blog"
              className="hover:text-[#fe4759] transition-colors whitespace-nowrap"
            >
              Blogs
            </Link>

            {/* Book Demo Button */}
            <a
              href="#consultation"
              className="px-4 py-2 text-xs xl:text-sm font-bold text-white bg-[#fe4759] hover:bg-[#e0384a] rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 shadow-sm shadow-[#fe4759]/25"
            >
              Free Demo
            </a>
          </nav>

          {/* Mobile / Tablet: "All Courses" pill + Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="px-3 py-1.5 rounded-full text-xs font-semibold bg-[#fe4759] text-white shadow-xs whitespace-nowrap"
            >
              All Courses ▾
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-800 hover:text-[#fe4759] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Desktop Mega Menu Dropdown */}
        <MegaMenu isOpen={isMegaOpen} onClose={() => setIsMegaOpen(false)} />

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top duration-200">
            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
              <Link
                href="/jobs-and-placements"
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative group flex items-center justify-center py-2 px-3 text-xs font-semibold text-slate-900"
              >
                {/* Top-Left Bracket */}
                <span className="absolute top-0 left-0 w-[70%] h-[2px] bg-gradient-to-r from-[#fe4759] via-[#ff6b7a] to-[#ff9aa5]" />
                <span className="absolute top-0 left-0 w-[2px] h-[65%] bg-[#fe4759]" />

                <span className="group-hover:text-[#fe4759] transition-colors">Placement</span>

                {/* Bottom-Right Bracket */}
                <span className="absolute bottom-0 right-0 w-[70%] h-[2px] bg-gradient-to-l from-[#fe4759] via-[#ff6b7a] to-[#ff9aa5]" />
                <span className="absolute bottom-0 right-0 w-[2px] h-[65%] bg-[#fe4759]" />
              </Link>
              <a
                href="#consultation"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center py-2 px-3 rounded-lg text-xs font-bold border border-[#fe4759] text-[#fe4759]"
              >
                Book Demo
              </a>
            </div>

            {/* Courses Overview Accordion */}
            <div>
              <button
                onClick={() =>
                  setMobileExpandedSection(
                    mobileExpandedSection === "courses" ? null : "courses"
                  )
                }
                className="flex items-center justify-between w-full py-2 text-sm font-bold text-slate-800"
              >
                <span>Browse Courses</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileExpandedSection === "courses" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileExpandedSection === "courses" && (
                <div className="pl-3 py-2 space-y-2.5 text-xs text-slate-600 border-l-2 border-[#fe4759]">
                  <a
                    href="#programs"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block font-semibold text-slate-800 hover:text-[#fe4759]"
                  >
                    • Master in Digital Marketing Course <span className="text-[#fe4759] font-normal">(6 Months)</span>
                  </a>
                  <a
                    href="#programs"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block font-semibold text-slate-800 hover:text-[#fe4759]"
                  >
                    • Digital Marketing Specialist Course <span className="text-[#fe4759] font-normal">(3 Months)</span>
                  </a>
                  <a
                    href="#programs"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block font-semibold text-slate-800 hover:text-[#fe4759]"
                  >
                    • Digital Marketing for Business Owners <span className="text-[#fe4759] font-normal">(1:1 Mentorship)</span>
                  </a>
                  <a
                    href="#programs"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block font-semibold text-slate-800 hover:text-[#fe4759]"
                  >
                    • Digital Marketing for Beginners <span className="text-[#fe4759] font-normal">(2 Months)</span>
                  </a>
                  <a
                    href="#programs"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block font-semibold text-slate-800 hover:text-[#fe4759]"
                  >
                    • Customised Course in Digital Marketing <span className="text-[#fe4759] font-normal">(Tailored)</span>
                  </a>
                  <a
                    href="#programs"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block font-semibold text-slate-800 hover:text-[#fe4759]"
                  >
                    • Degree in Digital Marketing <span className="text-[#fe4759] font-normal">(3-Year UGC)</span>
                  </a>
                </div>
              )}
            </div>

            {/* Direct Navigation Links */}
            <div className="space-y-2 pt-2 border-t border-slate-100 text-sm font-medium text-slate-700">
              <Link
                href="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-1 text-[#fe4759] font-bold"
              >
                Services (Growth Agency)
              </Link>
              <Link
                href="/about-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-1 hover:text-[#fe4759]"
              >
                About Us
              </Link>
              <Link
                href="/contact-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-1 hover:text-[#fe4759]"
              >
                Contact Us
              </Link>
              <Link
                href="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-1 hover:text-[#fe4759]"
              >
                Blogs & Insights
              </Link>
              <a
                href="#hiring-partners"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-1 hover:text-[#fe4759]"
              >
                Hiring Partners & Placements
              </a>
              <a
                href="#alumni"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-1 hover:text-[#fe4759]"
              >
                Student Reviews & Stories
              </a>
              <a
                href="#faq"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-1 hover:text-[#fe4759]"
              >
                FAQs
              </a>
              <a
                href="#faq"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-1 hover:text-[#fe4759]"
              >
                Refund Policy
              </a>
              <Link
                href="/terms-and-conditions"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-1 hover:text-[#fe4759]"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/privacy-policy"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-1 hover:text-[#fe4759]"
              >
                Privacy Policy
              </Link>
            </div>

            {/* Contact Quick Buttons for Mobile */}
            <div className="pt-3 border-t border-slate-100 flex gap-2">
              <a
                href="tel:+919315471293"
                className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold bg-slate-100 text-slate-800 hover:text-[#fe4759]"
              >
                <Phone className="w-3.5 h-3.5 text-[#fe4759]" />
                Call Care
              </a>
              <a
                href="https://wa.me/919315471293"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold bg-[#25D366] text-white"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
