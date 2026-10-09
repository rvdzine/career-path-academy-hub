"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { studentApi, getVerificationUrl } from "@/lib/api";
import {
  ShieldCheck,
  Copy,
  Check,
  Download,
  FileText,
  ImageIcon,
  Calendar,
  BookOpen,
  Award,
  User,
  Search,
  Maximize2,
  X,
  AlertCircle,
  Building2,
} from "lucide-react";

interface CertificateData {
  valid: boolean;
  status: string;
  student_id: string;
  certificate_id: string;
  name: string;
  course_name: string;
  course_code: string;
  course_mode: string;
  course_duration: string;
  course_completion_date: string | null;
  certificate_issued_at: string | null;
  issuer: string;
  issuer_signatory: string;
  issuer_url: string;
  verification_route: string;
  message?: string;
}

export default function VerifyCertificatePage() {
  const params = useParams();
  const router = useRouter();

  // Support catch-all array segment (e.g. ['IDS', 'DM01S', '2026-00100']) or single string
  const rawId = Array.isArray(params?.id)
    ? params.id.map((segment) => decodeURIComponent(segment)).join("/")
    : (params?.id as string) || "";
  const identifier = decodeURIComponent(rawId).trim();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<CertificateData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedId, setCopiedId] = useState(false);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [newSearchId, setNewSearchId] = useState("");

  useEffect(() => {
    if (!identifier) {
      setError("No certificate ID provided.");
      setLoading(false);
      return;
    }

    let isMounted = true;
    setLoading(true);
    setError(null);

    studentApi
      .verifyCertificate(identifier)
      .then((res) => {
        if (!isMounted) return;
        const cert = res.data;
        if (cert.valid) {
          setData(cert);
          document.title = `${cert.name} - Certificate Verification | IDS`;
        } else {
          setError(cert.message || "Certificate has not been issued yet.");
        }
      })
      .catch((err) => {
        if (!isMounted) return;
        console.error("Verification error:", err);
        const msg =
          err.response?.data?.detail ||
          `Certificate credential '${identifier}' was not found in the registry.`;
        setError(msg);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [identifier]);

  const certificateId = data?.certificate_id || identifier;
  const imageUrl = studentApi.getCertificateImageUrl(certificateId);
  const downloadPngUrl = studentApi.getCertificateDownloadUrl(certificateId, "png");
  const downloadPdfUrl = studentApi.getCertificateDownloadUrl(certificateId, "pdf");

  const handleCopyLink = () => {
    const url = getVerificationUrl(certificateId);
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleCopyId = () => {
    navigator.clipboard.writeText(certificateId);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSearchId.trim()) {
      router.push(`/verify-certificate/${newSearchId.trim().toUpperCase()}`);
    }
  };

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "N/A";
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800">
      <Navbar />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-6">
            <Link href="/" className="hover:text-slate-900 transition">
              Home
            </Link>
            <span>/</span>
            <Link href="/verify-certificate" className="hover:text-slate-900 transition">
              Verify Certificate
            </Link>
            <span>/</span>
            <span className="text-slate-800 font-mono font-bold truncate max-w-[280px]">
              {identifier}
            </span>
          </nav>

          {/* Loading Skeleton */}
          {loading && (
            <div className="space-y-6 animate-pulse">
              <div className="h-24 bg-white rounded-2xl border border-slate-200/80 p-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-200 rounded-xl shrink-0" />
                <div className="space-y-2 flex-1">
                  <div className="h-5 bg-slate-200 rounded w-1/3" />
                  <div className="h-3.5 bg-slate-100 rounded w-1/2" />
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/80 p-4 aspect-[1184/800] w-full" />
                <div className="lg:col-span-5 space-y-4">
                  <div className="h-64 bg-white rounded-2xl border border-slate-200/80 p-6" />
                  <div className="h-32 bg-white rounded-2xl border border-slate-200/80 p-6" />
                </div>
              </div>
            </div>
          )}

          {/* Error / Not Found State */}
          {!loading && error && (
            <div className="max-w-xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-md text-center p-8 sm:p-10">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-4 border border-amber-200">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h1 className="text-xl font-bold text-slate-900">
                Certificate Not Found
              </h1>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {error}
              </p>

              <div className="mt-6 bg-slate-50 border border-slate-200 rounded-xl p-4 text-left">
                <form onSubmit={handleSearchSubmit} className="flex gap-2">
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={newSearchId}
                      onChange={(e) => setNewSearchId(e.target.value)}
                      placeholder="Enter ID (e.g. IDS/DM01S/2026-00100)"
                      className="w-full pl-9 pr-3 py-2 bg-white border border-slate-300 rounded-lg text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#fe4759]/20 focus:border-[#fe4759]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#fe4759] hover:bg-[#e0384a] text-white text-xs font-bold rounded-lg transition"
                  >
                    Verify
                  </button>
                </form>
              </div>

              <div className="mt-5 text-xs text-slate-500">
                <Link href="/verify-certificate" className="text-[#fe4759] hover:underline font-semibold">
                  Go back to Search
                </Link>
              </div>
            </div>
          )}

          {/* Valid Verified Certificate View */}
          {!loading && data && (
            <div className="space-y-6">
              {/* Top Verified Header Card */}
              <div className="rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Verified Certificate
                      </span>
                    </div>
                    <h1 className="text-xl sm:text-2xl font-bold text-slate-900 capitalize">
                      {data.name}
                    </h1>
                    <p className="text-xs text-slate-500">
                      {data.course_name}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={handleCopyLink}
                    className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition flex items-center gap-1.5"
                  >
                    {copiedLink ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Link</span>
                      </>
                    )}
                  </button>
                  <a
                    href={downloadPdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-[#fe4759] hover:bg-[#e0384a] text-white text-xs font-bold transition flex items-center gap-1.5 shadow-xs"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>

              {/* Main Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left Column: Certificate Viewer */}
                <div className="lg:col-span-7 space-y-3">
                  <div className="relative group bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden p-3">
                    <div className="relative w-full aspect-[1184/800] bg-slate-100 rounded-xl overflow-hidden border border-slate-100">
                      <img
                        src={imageUrl}
                        alt={`Certificate for ${data.name}`}
                        className="w-full h-full object-contain"
                      />

                      <button
                        onClick={() => setIsZoomOpen(true)}
                        className="absolute bottom-2.5 right-2.5 px-2.5 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-900 text-white text-[11px] font-semibold backdrop-blur-md flex items-center gap-1.5 transition"
                      >
                        <Maximize2 className="w-3 h-3" />
                        <span>Enlarge</span>
                      </button>
                    </div>
                  </div>

                  {/* Download Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={downloadPngUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold transition flex items-center justify-center gap-2 shadow-xs"
                    >
                      <ImageIcon className="w-4 h-4 text-emerald-600" />
                      <span>Download PNG</span>
                    </a>
                    <a
                      href={downloadPdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold transition flex items-center justify-center gap-2 shadow-xs"
                    >
                      <FileText className="w-4 h-4 text-blue-600" />
                      <span>Download PDF</span>
                    </a>
                  </div>
                </div>

                {/* Right Column: Credential Details */}
                <div className="lg:col-span-5 space-y-4">
                  {/* Credential Details Card */}
                  <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-5 space-y-3.5">
                    <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-[#fe4759]" />
                        <h2 className="text-sm font-bold text-slate-900">
                          Certificate Details
                        </h2>
                      </div>
                      <span className="text-[10px] font-bold uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        Active
                      </span>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div className="flex items-start justify-between gap-3">
                        <span className="text-slate-500 font-medium flex items-center gap-1.5 shrink-0">
                          <User className="w-3.5 h-3.5 text-slate-400" />
                          Student Name
                        </span>
                        <span className="font-bold text-slate-900 text-right capitalize">
                          {data.name}
                        </span>
                      </div>

                      <div className="flex items-start justify-between gap-3">
                        <span className="text-slate-500 font-medium flex items-center gap-1.5 shrink-0">
                          <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                          Course
                        </span>
                        <span className="font-semibold text-slate-900 text-right">
                          {data.course_name}
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-3">
                        <span className="text-slate-500 font-medium">Course Code</span>
                        <span className="font-mono font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded text-[11px]">
                          {data.course_code}
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-3 bg-slate-50 p-2.5 rounded-xl border border-slate-200/70">
                        <div>
                          <span className="block text-[10px] font-semibold text-slate-400">
                            Certificate ID
                          </span>
                          <span className="font-mono font-bold text-xs text-slate-900">
                            {data.certificate_id}
                          </span>
                        </div>
                        <button
                          onClick={handleCopyId}
                          className="p-1 rounded-md bg-white border border-slate-200 text-slate-600 hover:text-slate-900 transition"
                          title="Copy Certificate ID"
                        >
                          {copiedId ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-0.5">
                        <div className="p-2 bg-slate-50 rounded-lg border border-slate-200/70">
                          <span className="text-[10px] text-slate-500 block">Duration</span>
                          <span className="font-semibold text-slate-800 text-xs">
                            {data.course_duration}
                          </span>
                        </div>
                        <div className="p-2 bg-slate-50 rounded-lg border border-slate-200/70">
                          <span className="text-[10px] text-slate-500 block">Mode</span>
                          <span className="font-semibold text-slate-800 text-xs capitalize">
                            {data.course_mode}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-3">
                        <span className="text-slate-500 font-medium flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          Date of Issue
                        </span>
                        <span className="font-semibold text-slate-800">
                          {formatDate(data.course_completion_date)}
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-3">
                        <span className="text-slate-500 font-medium flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5 text-slate-400" />
                          Issued By
                        </span>
                        <span className="font-semibold text-slate-800">
                          {data.issuer}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Verification URL Box */}
                  <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-4 space-y-2">
                    <span className="text-[11px] font-semibold text-slate-500 block">
                      Verification Link
                    </span>
                    <div className="flex items-center justify-between gap-2 p-2 bg-slate-50 border border-slate-200 rounded-xl text-xs">
                      <span className="text-slate-600 font-mono text-[11px] truncate flex-1 pl-1">
                        {getVerificationUrl(certificateId)}
                      </span>
                      <button
                        onClick={handleCopyLink}
                        className="p-1 rounded-md bg-white border border-slate-200 text-slate-700 hover:text-slate-900 transition shrink-0"
                        title="Copy Link"
                      >
                        {copiedLink ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Full Screen Lightbox Modal for Certificate */}
      {isZoomOpen && data && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setIsZoomOpen(false)}
              className="absolute -top-10 right-0 p-1.5 text-white/80 hover:text-white rounded-full bg-white/10 transition"
              title="Close Full Screen"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-full bg-slate-950 rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src={imageUrl}
                alt={`Certificate Full View for ${data.name}`}
                className="w-full max-h-[85vh] object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
