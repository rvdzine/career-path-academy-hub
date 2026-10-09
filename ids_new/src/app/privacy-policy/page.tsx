"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ShieldCheck,
  Lock,
  EyeOff,
  UserCheck,
  CheckCircle2,
  Mail,
  Archive,
  BarChart3,
  Cookie,
  Users2,
  UserCog,
  Baby,
  RefreshCw,
  Phone,
  Clock,
  Printer,
  ChevronRight,
  Info,
  Building,
  Search,
  FileText,
} from "lucide-react";

interface Section {
  id: string;
  number: string;
  title: string;
  icon: any;
}

const sections: Section[] = [
  { id: "no-sale", number: "1", title: "No Unauthorized Sale or Transfer", icon: EyeOff },
  { id: "limitations-disclosure", number: "2", title: "Limitations on Disclosure", icon: Lock },
  { id: "optional-provision", number: "3", title: "Optional Provision of Information", icon: UserCheck },
  { id: "use-cases", number: "4", title: "Use Cases for Personal Information", icon: CheckCircle2 },
  { id: "consent-communication", number: "5", title: "Consent to Communication", icon: Mail },
  { id: "recordkeeping", number: "6", title: "Recordkeeping of Communications", icon: Archive },
  { id: "log-analytics", number: "7", title: "Log Files & Analytics", icon: BarChart3 },
  { id: "cookies-beacons", number: "8", title: "Cookies & Web Beacons", icon: Cookie },
  { id: "third-party-partners", number: "9", title: "Third-Party Partners", icon: Users2 },
  { id: "accuracy-updates", number: "10", title: "Accuracy and Updates", icon: UserCog },
  { id: "children-privacy", number: "11", title: "Children’s Privacy", icon: Baby },
  { id: "changes-policy", number: "12", title: "Changes to this Privacy Policy", icon: RefreshCw },
];

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState<string>("no-sale");
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
            <span className="text-[#fe4759] font-medium">Privacy Policy</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-rose-200/80 shadow-xs text-xs font-bold text-[#fe4759] uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-[#fe4759]" />
              Data Privacy & Protection
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
              Privacy Policy
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              By accessing or using the website of{" "}
              <strong className="text-slate-900 font-semibold">Institute of Digital Studies (IDS)</strong>, a
              subsidiary of{" "}
              <strong className="text-slate-900 font-semibold">Cybershield Technologies Pvt. Ltd.</strong>, you
              consent to the collection, use, and disclosure of your personal information in accordance with this
              Privacy Policy.
            </p>

            {/* Meta Stats */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-600">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200/90 shadow-2xs">
                <Clock className="w-3.5 h-3.5 text-[#fe4759]" />
                Effective Date: <strong className="text-slate-900 ml-1">01/01/2025</strong>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200/90 shadow-2xs">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                Last Updated: <strong className="text-slate-900 ml-1">31/12/2024</strong>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200/90 shadow-2xs">
                <Building className="w-3.5 h-3.5 text-slate-500" />
                Subsidiary of Cybershield Technologies Pvt. Ltd.
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
                        <span
                          className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold ${
                            isActive
                              ? "bg-[#fe4759] text-white"
                              : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                          }`}
                        >
                          {sec.number}
                        </span>
                        <span className="truncate">{sec.title}</span>
                      </div>
                      <ChevronRight
                        className={`w-3 h-3 transition-transform ${
                          isActive ? "text-[#fe4759] translate-x-0.5" : "text-transparent group-hover:text-slate-400"
                        }`}
                      />
                    </button>
                  );
                })}
              </nav>

              {/* Quick Help Card */}
              <div className="pt-3 border-t border-slate-100">
                <div className="rounded-xl bg-gradient-to-br from-rose-50/80 via-white to-rose-50/40 p-3.5 border border-rose-200/70 text-slate-800 text-xs shadow-2xs">
                  <div className="flex items-center gap-2 font-bold text-[#fe4759] mb-1.5">
                    <Phone className="w-3.5 h-3.5" />
                    Privacy Support
                  </div>
                  <p className="text-slate-600 text-[11px] leading-relaxed mb-3">
                    Have questions about data handling or wish to update your records?
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
            {/* Preamble Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#fe4759] flex items-center justify-center shrink-0 border border-rose-100">
                  <Info className="w-5 h-5" />
                </div>
                <div className="space-y-3 leading-relaxed text-sm sm:text-base text-slate-700">
                  <p>
                    By accessing or using the website of{" "}
                    <strong className="text-slate-900 font-semibold">Institute of Digital Studies (IDS)</strong>, a
                    subsidiary of{" "}
                    <strong className="text-slate-900 font-semibold">Cybershield Technologies Pvt. Ltd.</strong>, you
                    consent to the collection, use, and disclosure of your personal information in accordance with this
                    Privacy Policy.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 1: No Unauthorized Sale or Transfer */}
            <section
              id="no-sale"
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs scroll-mt-24 space-y-4"
            >
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="w-8 h-8 rounded-lg bg-rose-50 text-[#fe4759] font-bold text-sm flex items-center justify-center border border-rose-100">
                  1
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  No Unauthorized Sale or Transfer of Personal Information
                </h2>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                We do not sell, rent, lease, or otherwise disclose your personal information obtained through our
                website to third parties for marketing purposes without your explicit consent. Your privacy is important
                to us.
              </p>
            </section>

            {/* Section 2: Limitations on Disclosure */}
            <section
              id="limitations-disclosure"
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs scroll-mt-24 space-y-4"
            >
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="w-8 h-8 rounded-lg bg-rose-50 text-[#fe4759] font-bold text-sm flex items-center justify-center border border-rose-100">
                  2
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Limitations on Disclosure
                </h2>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                We collect personal information only when you voluntarily provide it—such as during registration, inquiry,
                form submission, or other direct communications. We take reasonable steps to ensure the confidentiality of
                such information and protect it from unauthorized access or disclosure. Information is stored securely in
                controlled environments, and highly sensitive data transmitted via encrypted channels where applicable.
              </p>
            </section>

            {/* Section 3: Optional Provision of Information */}
            <section
              id="optional-provision"
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs scroll-mt-24 space-y-4"
            >
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="w-8 h-8 rounded-lg bg-rose-50 text-[#fe4759] font-bold text-sm flex items-center justify-center border border-rose-100">
                  3
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Optional Provision of Information
                </h2>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                You may choose not to provide personal information. However, note that certain features, offers, or
                services—such as enrollment or personalized assistance—may require you to share your contact details and
                preferences.
              </p>
            </section>

            {/* Section 4: Use Cases for Personal Information */}
            <section
              id="use-cases"
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs scroll-mt-24 space-y-4"
            >
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="w-8 h-8 rounded-lg bg-rose-50 text-[#fe4759] font-bold text-sm flex items-center justify-center border border-rose-100">
                  4
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Use Cases for Personal Information
                </h2>
              </div>
              <div className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200/80 space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  We use the information collected for:
                </p>
                <ul className="space-y-2.5 text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#fe4759] mt-2 shrink-0" />
                    <span>Responding to your inquiries or messages.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#fe4759] mt-2 shrink-0" />
                    <span>Processing your applications or registrations.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#fe4759] mt-2 shrink-0" />
                    <span>Sending updates, promotional offers, or relevant information—only if consent is given.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#fe4759] mt-2 shrink-0" />
                    <span>Internal analytics and strategic research.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#fe4759] mt-2 shrink-0" />
                    <span>Detecting and preventing fraudulent or abusive activity.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 5: Consent to Communication */}
            <section
              id="consent-communication"
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs scroll-mt-24 space-y-4"
            >
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="w-8 h-8 rounded-lg bg-rose-50 text-[#fe4759] font-bold text-sm flex items-center justify-center border border-rose-100">
                  5
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Consent to Communication
                </h2>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                By submitting your contact details, you agree to receive communications from IDS—including via phone call,
                SMS, WhatsApp, or email—even if your number is registered under DND (Do Not Disturb). This is for purposes
                related to our relationship or services you’ve requested, including necessary alerts, transaction-related
                updates, and promotional offers (with your prior consent).
              </p>
            </section>

            {/* Section 6: Recordkeeping of Communications */}
            <section
              id="recordkeeping"
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs scroll-mt-24 space-y-4"
            >
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="w-8 h-8 rounded-lg bg-rose-50 text-[#fe4759] font-bold text-sm flex items-center justify-center border border-rose-100">
                  6
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Recordkeeping of Communications
                </h2>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                When you contact us electronically, we retain a record of your communication to help us respond
                effectively. This includes emails, form submissions, or messages sent via the website.
              </p>
            </section>

            {/* Section 7: Log Files & Analytics */}
            <section
              id="log-analytics"
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs scroll-mt-24 space-y-4"
            >
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="w-8 h-8 rounded-lg bg-rose-50 text-[#fe4759] font-bold text-sm flex items-center justify-center border border-rose-100">
                  7
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Log Files & Analytics
                </h2>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Like many websites, IDS collects information through log files that track user interactions anonymously.
                Common data points include:
              </p>
              <ul className="space-y-2 text-sm text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                  <span>IP address</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                  <span>Browser type</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                  <span>ISP</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                  <span>Date and time stamps</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                  <span>Visited and referral pages</span>
                </li>
              </ul>
              <p className="text-xs sm:text-sm text-slate-600">
                This data is used solely for administrative, analytical, and performance optimization purposes, and not
                linked to personally identifiable information.
              </p>
            </section>

            {/* Section 8: Cookies & Web Beacons */}
            <section
              id="cookies-beacons"
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs scroll-mt-24 space-y-4"
            >
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="w-8 h-8 rounded-lg bg-rose-50 text-[#fe4759] font-bold text-sm flex items-center justify-center border border-rose-100">
                  8
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Cookies & Web Beacons
                </h2>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Our website uses cookies to enhance and personalize your experience—such as storing preferences and
                tracking page visits. Disabling cookies may affect certain features or functionality.
              </p>
            </section>

            {/* Section 9: Third-Party Partners */}
            <section
              id="third-party-partners"
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs scroll-mt-24 space-y-4"
            >
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="w-8 h-8 rounded-lg bg-rose-50 text-[#fe4759] font-bold text-sm flex items-center justify-center border border-rose-100">
                  9
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Third-Party Partners
                </h2>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                IDS does not share or disclose personal information to third-party advertisers or marketers without your
                consent. However, we may share data with:
              </p>
              <ul className="space-y-2 text-sm text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fe4759] mt-2 shrink-0" />
                  <span>Business partners or franchisees, only with your agreement or as required for services.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fe4759] mt-2 shrink-0" />
                  <span>Legal authorities, when mandated by law or court order.</span>
                </li>
              </ul>
              <p className="text-xs sm:text-sm text-slate-600">
                Any disclosures are made under strict confidentiality and compliance protocols.
              </p>
            </section>

            {/* Section 10: Accuracy and Updates */}
            <section
              id="accuracy-updates"
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs scroll-mt-24 space-y-4"
            >
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="w-8 h-8 rounded-lg bg-rose-50 text-[#fe4759] font-bold text-sm flex items-center justify-center border border-rose-100">
                  10
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Accuracy and Updates
                </h2>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                We aim to maintain accurate personal information. If you wish to update or correct your data, or restrict
                its usage, please contact us directly at{" "}
                <a
                  href="mailto:info@idigitalstudies.com"
                  className="text-[#fe4759] font-medium underline hover:text-[#d93849]"
                >
                  info@idigitalstudies.com
                </a>
                . Unless you limit access, we assume your consent to use your information as described.
              </p>
            </section>

            {/* Section 11: Children’s Privacy */}
            <section
              id="children-privacy"
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs scroll-mt-24 space-y-4"
            >
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="w-8 h-8 rounded-lg bg-rose-50 text-[#fe4759] font-bold text-sm flex items-center justify-center border border-rose-100">
                  11
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Children’s Privacy
                </h2>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                We do not knowingly collect personal information from children under the age of 13. If we become aware of
                any such collection, we will take reasonable steps to promptly delete that information.
              </p>
            </section>

            {/* Section 12: Changes to this Privacy Policy */}
            <section
              id="changes-policy"
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs scroll-mt-24 space-y-4"
            >
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="w-8 h-8 rounded-lg bg-rose-50 text-[#fe4759] font-bold text-sm flex items-center justify-center border border-rose-100">
                  12
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Changes to this Privacy Policy
                </h2>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                We may periodically modify this policy to reflect changes in law, policy, or business practices. Any updates
                will be posted on this page with a revised “Last Updated” date. Continued use of our website will constitute
                acceptance of the updated policy.
              </p>
            </section>

            {/* Bottom Contact / Copyright Stamp */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <span>© 2026 Institute of Digital Studies (IDS). All rights reserved.</span>
              </div>
              <div className="flex items-center gap-4">
                <Link href="/terms-and-conditions" className="text-[#fe4759] font-semibold hover:underline">
                  Terms & Conditions
                </Link>
                <span>•</span>
                <Link href="/contact-us" className="text-slate-600 hover:text-slate-900">
                  Contact Us
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
