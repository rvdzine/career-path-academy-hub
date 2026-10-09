"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ShieldCheck,
  FileText,
  Mail,
  Lock,
  ExternalLink,
  AlertTriangle,
  RefreshCw,
  Scale,
  Briefcase,
  CheckCircle2,
  Phone,
  Clock,
  Printer,
  ChevronRight,
  BookOpen,
  Info,
  Building,
  GraduationCap,
  Search,
} from "lucide-react";

interface Section {
  id: string;
  number: string;
  title: string;
  icon: any;
}

const sections: Section[] = [
  { id: "use-of-content", number: "1", title: "Use of Website and Content", icon: BookOpen },
  { id: "electronic-comm", number: "2", title: "Electronic Communication", icon: Mail },
  { id: "user-accounts", number: "3", title: "User Accounts", icon: Lock },
  { id: "privacy-policy", number: "4", title: "Privacy Policy", icon: ShieldCheck },
  { id: "third-party-links", number: "5", title: "Third-Party Links", icon: ExternalLink },
  { id: "acceptable-use", number: "6", title: "Acceptable Use Policy", icon: AlertTriangle },
  { id: "modification-termination", number: "7", title: "Modification and Termination", icon: RefreshCw },
  { id: "limitation-liability", number: "8", title: "Limitation of Liability", icon: Scale },
  { id: "indemnification", number: "9", title: "Indemnification", icon: ShieldCheck },
  { id: "disclaimer", number: "10", title: "Disclaimer", icon: Info },
  { id: "governing-law", number: "11", title: "Governing Law and Jurisdiction", icon: Building },
  { id: "placement-assistance", number: "12", title: "Placement Assistance Policy", icon: GraduationCap },
];

export default function TermsAndConditionsPage() {
  const [activeSection, setActiveSection] = useState<string>("use-of-content");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(id);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const filteredSections = sections.filter((s) =>
    s.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col selection:bg-[#fe4759]/20 selection:text-[#fe4759]">
      <Navbar />

      {/* Light Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF5F6] via-[#FFF9FA] to-white pt-12 sm:pt-16 pb-12 sm:pb-16 border-b border-slate-200/80">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#fe4759]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#fe4759]/4 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 mb-5">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-600">Legal & Policies</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#fe4759] font-medium">Terms & Conditions</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-rose-200/80 shadow-xs text-xs font-bold text-[#fe4759] uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-[#fe4759]" />
              Official Legal Agreement
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
              Terms and Conditions
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Welcome to the official website of the{" "}
              <strong className="text-slate-900 font-semibold">Institute of Digital Studies (IDS)</strong>, a subsidiary of{" "}
              <strong className="text-slate-900 font-semibold">Cybershield Technologies Pvt. Ltd.</strong>
            </p>

            {/* Quick Meta Stats */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-600">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200/90 shadow-2xs">
                <Clock className="w-3.5 h-3.5 text-[#fe4759]" />
                Last Updated: <strong className="text-slate-900 ml-1">10/9/2026</strong>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200/90 shadow-2xs">
                <Building className="w-3.5 h-3.5 text-slate-500" />
                Subsidiary of Cybershield Technologies Pvt. Ltd.
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200/90 shadow-2xs">
                <Scale className="w-3.5 h-3.5 text-slate-500" />
                Jurisdiction: Ghaziabad, UP, India
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Sticky Navigation Column */}
          <aside className="lg:col-span-4 xl:col-span-3 sticky top-20 z-20">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#fe4759]" />
                  Table of Contents
                </h2>
                <button
                  onClick={handlePrint}
                  title="Print this document"
                  className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                >
                  <Printer className="w-4 h-4" />
                </button>
              </div>

              {/* Search filter within sections */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Filter sections..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#fe4759]/20 focus:border-[#fe4759] transition-all"
                />
              </div>

              {/* Navigation Links */}
              <nav className="space-y-1 max-h-[50vh] overflow-y-auto pr-1">
                {filteredSections.map((sec) => {
                  const Icon = sec.icon;
                  const isActive = activeSection === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => scrollTo(sec.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center justify-between group ${
                        isActive
                          ? "bg-[#fe4759]/10 text-[#fe4759] font-semibold border-l-2 border-[#fe4759]"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <span className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold ${
                          isActive ? "bg-[#fe4759] text-white" : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                        }`}>
                          {sec.number}
                        </span>
                        <span className="truncate">{sec.title}</span>
                      </div>
                      <ChevronRight className={`w-3 h-3 transition-transform ${isActive ? "text-[#fe4759] translate-x-0.5" : "text-transparent group-hover:text-slate-400"}`} />
                    </button>
                  );
                })}
              </nav>

              {/* Quick Help Card */}
              <div className="pt-3 border-t border-slate-100">
                <div className="rounded-xl bg-gradient-to-br from-rose-50/80 via-white to-rose-50/40 p-3.5 border border-rose-200/70 text-slate-800 text-xs shadow-2xs">
                  <div className="flex items-center gap-2 font-bold text-[#fe4759] mb-1.5">
                    <Phone className="w-3.5 h-3.5" />
                    Have Questions?
                  </div>
                  <p className="text-slate-600 text-[11px] leading-relaxed mb-3">
                    Contact our student support & compliance desk for assistance.
                  </p>
                  <div className="space-y-1 text-[11px]">
                    <a
                      href="tel:+919315471293"
                      className="block font-semibold text-slate-900 hover:text-[#fe4759] transition-colors"
                    >
                      +91 93154 71293
                    </a>
                    <a
                      href="mailto:info@idigitalstudies.com"
                      className="block text-slate-600 hover:text-[#fe4759] transition-colors truncate"
                    >
                      info@idigitalstudies.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Right Main Legal Text Column */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-8">
            {/* Introductory Preamble Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#fe4759] flex items-center justify-center shrink-0 border border-rose-100">
                  <Info className="w-5 h-5" />
                </div>
                <div className="space-y-3 leading-relaxed text-sm sm:text-base text-slate-700">
                  <p>
                    Welcome to the official website of the{" "}
                    <strong className="text-slate-900 font-semibold">Institute of Digital Studies (IDS)</strong>, a
                    subsidiary of{" "}
                    <strong className="text-slate-900 font-semibold">Cybershield Technologies Pvt. Ltd.</strong> By
                    accessing or using our website (
                    <a
                      href="https://idigitalstudies.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#fe4759] font-medium hover:underline inline-flex items-center gap-0.5"
                    >
                      https://idigitalstudies.com
                      <ExternalLink className="w-3 h-3 ml-0.5 inline" />
                    </a>
                    ), you agree to comply with and be bound by the following Terms and Conditions.
                  </p>
                  <p className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80 text-amber-900 text-xs sm:text-sm">
                    <strong>Important Note:</strong> If you do not agree with any part of these terms, please discontinue use
                    of the website immediately. We may revise these Terms and Conditions from time to time. Continued use of
                    the website after any modifications implies your acceptance of the revised terms.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 1: Use of Website and Content */}
            <section
              id="use-of-content"
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs scroll-mt-24 space-y-4"
            >
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="w-8 h-8 rounded-lg bg-rose-50 text-[#fe4759] font-bold text-sm flex items-center justify-center border border-rose-100">
                  1
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Use of Website and Content
                </h2>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                All content on this website—including text, graphics, images, videos, logos, downloads, and course
                material—is the property of IDS or its licensors and is protected under applicable intellectual property laws.
              </p>
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  You are strictly prohibited from:
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#fe4759] mt-2 shrink-0" />
                    <span>
                      Copying, modifying, publishing, distributing, or commercially exploiting any content without explicit written permission from IDS.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#fe4759] mt-2 shrink-0" />
                    <span>
                      Using any content for unlawful purposes or outside the scope of permitted educational or informational use.
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 2: Electronic Communication */}
            <section
              id="electronic-comm"
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs scroll-mt-24 space-y-4"
            >
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="w-8 h-8 rounded-lg bg-rose-50 text-[#fe4759] font-bold text-sm flex items-center justify-center border border-rose-100">
                  2
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Electronic Communication
                </h2>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                By visiting our website, filling forms, or contacting us via email or messaging platforms, you agree to
                receive communications from us electronically. This includes transactional or promotional messages via email,
                SMS, WhatsApp, or phone, even if your number is registered under DND (Do Not Disturb).
              </p>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span>
                  You hereby consent to receive such communications and agree that they satisfy legal requirements for written communication.
                </span>
              </div>
            </section>

            {/* Section 3: User Accounts */}
            <section
              id="user-accounts"
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs scroll-mt-24 space-y-4"
            >
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="w-8 h-8 rounded-lg bg-rose-50 text-[#fe4759] font-bold text-sm flex items-center justify-center border border-rose-100">
                  3
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  User Accounts
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="font-semibold text-slate-900 mb-1 flex items-center gap-2">
                    <Lock className="w-4 h-4 text-[#fe4759]" />
                    Credential Confidentiality
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    You are solely responsible for maintaining the confidentiality of your account credentials.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="font-semibold text-slate-900 mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Accurate Information
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    You agree to provide accurate, truthful, and up-to-date information across all profile and enrollment details.
                  </p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-slate-700 pt-2">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fe4759] mt-2 shrink-0" />
                  <span>You must notify us immediately of any unauthorized use or security breach of your account.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fe4759] mt-2 shrink-0" />
                  <span>
                    IDS reserves the right to suspend or terminate your access without prior notice if misuse or unauthorized access is detected.
                  </span>
                </li>
              </ul>
            </section>

            {/* Section 4: Privacy Policy */}
            <section
              id="privacy-policy"
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs scroll-mt-24 space-y-4"
            >
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="w-8 h-8 rounded-lg bg-rose-50 text-[#fe4759] font-bold text-sm flex items-center justify-center border border-rose-100">
                  4
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Privacy Policy
                </h2>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Your use of this website is also governed by our{" "}
                <Link href="/privacy-policy" className="text-[#fe4759] font-medium underline hover:text-[#d93849]">
                  Privacy Policy
                </Link>
                , which outlines how we collect, use, store, and protect your personal information. By using our website,
                you consent to the practices described in the Privacy Policy.
              </p>
            </section>

            {/* Section 5: Third-Party Links */}
            <section
              id="third-party-links"
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs scroll-mt-24 space-y-4"
            >
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="w-8 h-8 rounded-lg bg-rose-50 text-[#fe4759] font-bold text-sm flex items-center justify-center border border-rose-100">
                  5
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Third-Party Links
                </h2>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Our website may contain links to third-party websites for your convenience or reference. IDS does not control
                or endorse the content or privacy practices of these third-party sites and shall not be held responsible for
                any harm or damages resulting from your use of such websites.
              </p>
            </section>

            {/* Section 6: Acceptable Use Policy */}
            <section
              id="acceptable-use"
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs scroll-mt-24 space-y-5"
            >
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="w-8 h-8 rounded-lg bg-rose-50 text-[#fe4759] font-bold text-sm flex items-center justify-center border border-rose-100">
                  6
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Acceptable Use Policy
                </h2>
              </div>

              {/* Sub-item A: Security Rules */}
              <div className="rounded-xl border border-rose-200 bg-rose-50/40 p-4 sm:p-5 space-y-3">
                <h3 className="text-sm font-bold text-rose-950 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#fe4759]" />
                  a) Security Rules
                </h3>
                <p className="text-xs text-rose-900/80">
                  The following actions are strictly prohibited and may result in immediate access suspension, legal action, or both:
                </p>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-800">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#fe4759] mt-2 shrink-0" />
                    <span>Gaining unauthorized access to data, accounts, or servers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#fe4759] mt-2 shrink-0" />
                    <span>Attempting to breach the website’s security or authentication systems.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#fe4759] mt-2 shrink-0" />
                    <span>Introducing viruses, malware, or any harmful code.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#fe4759] mt-2 shrink-0" />
                    <span>Launching denial-of-service (DoS) attacks, spam, or unauthorized advertising.</span>
                  </li>
                </ul>
              </div>

              {/* Sub-item B: General Rules */}
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5 space-y-3">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-slate-600" />
                  b) General Rules
                </h3>
                <p className="text-xs text-slate-600">You may not under any circumstances:</p>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                    <span>Transmit or store illegal, obscene, defamatory, or hateful content.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                    <span>Violate intellectual property rights or trade secrets.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                    <span>Breach any local, state, national, or international laws and regulations.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 7: Modification and Termination */}
            <section
              id="modification-termination"
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs scroll-mt-24 space-y-4"
            >
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="w-8 h-8 rounded-lg bg-rose-50 text-[#fe4759] font-bold text-sm flex items-center justify-center border border-rose-100">
                  7
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Modification and Termination
                </h2>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                IDS reserves the right to:
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fe4759] mt-2 shrink-0" />
                  <span>Modify or discontinue any feature, course module, or section of the website at any time without prior notice.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fe4759] mt-2 shrink-0" />
                  <span>Restrict or terminate access to any user for any reason, including violation of these Terms.</span>
                </li>
              </ul>
            </section>

            {/* Section 8: Limitation of Liability */}
            <section
              id="limitation-liability"
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs scroll-mt-24 space-y-4"
            >
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="w-8 h-8 rounded-lg bg-rose-50 text-[#fe4759] font-bold text-sm flex items-center justify-center border border-rose-100">
                  8
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Limitation of Liability
                </h2>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                In no event shall IDS, its parent company <strong className="text-slate-900">Cybershield Technologies Pvt. Ltd.</strong>, or its
                directors, employees, partners, or affiliates be liable for any indirect, incidental, special, consequential,
                or punitive damages arising from:
              </p>
              <ul className="space-y-2 text-sm text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                  <span>Use or inability to use the website or services.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                  <span>Unauthorized access to or alteration of your data or transmissions.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                  <span>Third-party conduct, statements, or content on the platform.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                  <span>Any other matter related to the use of the website or educational services.</span>
                </li>
              </ul>
              <p className="text-xs sm:text-sm font-medium text-slate-600 italic">
                You acknowledge and agree that your use of the website is at your sole risk.
              </p>
            </section>

            {/* Section 9: Indemnification */}
            <section
              id="indemnification"
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs scroll-mt-24 space-y-4"
            >
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="w-8 h-8 rounded-lg bg-rose-50 text-[#fe4759] font-bold text-sm flex items-center justify-center border border-rose-100">
                  9
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Indemnification
                </h2>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                You agree to indemnify and hold harmless IDS, its parent company, directors, employees, affiliates, and agents
                from and against any claims, damages, liabilities, losses, and expenses—including legal fees—arising from:
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fe4759] mt-2 shrink-0" />
                  <span>Your use of or activities on the website.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fe4759] mt-2 shrink-0" />
                  <span>Your violation of these Terms and Conditions.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fe4759] mt-2 shrink-0" />
                  <span>Your infringement of any third-party intellectual property, privacy, or contractual rights.</span>
                </li>
              </ul>
            </section>

            {/* Section 10: Disclaimer */}
            <section
              id="disclaimer"
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs scroll-mt-24 space-y-4"
            >
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="w-8 h-8 rounded-lg bg-rose-50 text-[#fe4759] font-bold text-sm flex items-center justify-center border border-rose-100">
                  10
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Disclaimer
                </h2>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                All content and services on this website are provided <strong className="text-slate-900">“as is”</strong> and{" "}
                <strong className="text-slate-900">“as available”</strong> without warranties of any kind, either express or
                implied. IDS does not guarantee:
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                  <span>That the site will always function uninterrupted, timely, secure, or error-free.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                  <span>The accuracy, timeliness, or reliability of any content, learning materials, or information.</span>
                </li>
              </ul>
            </section>

            {/* Section 11: Governing Law and Jurisdiction */}
            <section
              id="governing-law"
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs scroll-mt-24 space-y-4"
            >
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="w-8 h-8 rounded-lg bg-rose-50 text-[#fe4759] font-bold text-sm flex items-center justify-center border border-rose-100">
                  11
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Governing Law and Jurisdiction
                </h2>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <Building className="w-5 h-5 text-slate-600 mt-0.5 shrink-0" />
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  These Terms and Conditions are governed by and construed in accordance with the laws of India. Any
                  dispute arising in relation to these terms shall be subject to the exclusive jurisdiction of the courts
                  located in <strong className="text-slate-900 font-semibold">Ghaziabad, Uttar Pradesh (UP), India</strong>.
                </p>
              </div>
            </section>

            {/* Section 12: Placement Assistance Policy */}
            <section
              id="placement-assistance"
              className="relative overflow-hidden bg-gradient-to-br from-white via-rose-50/20 to-white rounded-2xl border-2 border-rose-200/90 p-6 sm:p-8 shadow-md scroll-mt-24 space-y-6"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#fe4759]/5 rounded-bl-full pointer-events-none" />

              <div className="flex items-center justify-between border-b border-rose-100 pb-4 relative z-10">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#fe4759] text-white font-bold text-sm flex items-center justify-center shadow-xs">
                    12
                  </span>
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                      Placement Assistance Policy
                    </h2>
                    <span className="text-xs text-[#fe4759] font-semibold tracking-wide uppercase">
                      Academic & Professional Eligibility Guidelines
                    </span>
                  </div>
                </div>
                <GraduationCap className="w-6 h-6 text-[#fe4759] hidden sm:block" />
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed relative z-10">
                <p>
                  Institute of Digital Studies (IDS) provides placement assistance to eligible students who successfully
                  complete the training program and meet the institute’s academic and professional requirements. Placement
                  assistance is intended to support students in connecting with potential employers and career opportunities.
                </p>

                <div className="rounded-xl bg-white border border-rose-100 shadow-xs p-5 space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Mandatory Student Criteria & Commitments:
                  </h3>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span>
                        <strong className="text-slate-900">Attendance Requirement:</strong> Students must maintain{" "}
                        <strong className="text-[#fe4759]">95%–100% attendance</strong> throughout the course to remain eligible for placement assistance.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span>
                        <strong className="text-slate-900">Assignments & Projects:</strong> All assignments, projects, and practical tasks must be completed and submitted on time as per institute guidelines.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span>
                        <strong className="text-slate-900">Assessments & Evaluations:</strong> Students are required to participate in and complete all assessments, tests, and learning activities conducted during the training program.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span>
                        <strong className="text-slate-900">Practical Sessions & Case Studies:</strong> Participation in practical sessions, live projects, and case studies is mandatory to ensure industry readiness.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span>
                        <strong className="text-slate-900">Career Readiness Bootcamps:</strong> Students must attend resume building, portfolio preparation, and mock interview preparation sessions conducted by the institute.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span>
                        <strong className="text-slate-900">Interview Participation:</strong> Students are expected to participate in all interviews and placement activities arranged by the institute.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Important Clarification Callout */}
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-xs sm:text-sm space-y-2">
                  <div className="font-bold flex items-center gap-2 text-amber-900">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                    Crucial Disclaimer Regarding Hiring Decisions
                  </div>
                  <ul className="space-y-1.5 text-xs text-amber-900 leading-relaxed list-disc list-inside">
                    <li>
                      Final job selection depends on the student’s performance, skills, interview results, and the hiring company’s specific requirements.
                    </li>
                    <li>
                      <strong className="font-semibold">IDS provides placement assistance only and does not guarantee a job</strong>, as hiring decisions are made independently by the recruiting companies.
                    </li>
                    <li>
                      The institute reserves the right to withdraw placement assistance if a student fails to meet course requirements, maintains poor attendance, or violates institute policies.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Bottom Contact / Revision Stamp */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-500" />
                <span>Document Version: Effective as of <strong>October 09, 2026</strong></span>
              </div>
              <div className="flex items-center gap-4">
                <Link href="/contact-us" className="text-[#fe4759] font-semibold hover:underline">
                  Contact Compliance Desk
                </Link>
                <span>•</span>
                <Link href="/verify-certificate" className="text-slate-600 hover:text-slate-900">
                  Verify Credentials
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
