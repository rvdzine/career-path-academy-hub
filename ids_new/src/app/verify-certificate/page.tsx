"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, ArrowRight } from "lucide-react";

export default function VerifyPortalHub() {
  const router = useRouter();
  const [certId, setCertId] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = certId.trim();
    if (!clean) {
      setError("Please enter a Certificate ID or Student ID.");
      return;
    }
    setError(null);
    router.push(`/verify-certificate/${clean.toUpperCase()}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800">
      <Navbar />

      <main className="flex-1 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-xl w-full mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Verify Certificate
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Enter the Certificate ID or Student ID to verify credentials issued by{" "}
              <span className="font-semibold text-slate-900">Institute of Digital Studies</span>.
            </p>
          </div>

          {/* Search Card */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-lg p-6 sm:p-8 space-y-5">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="certificate-search-input"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2"
                >
                  Certificate ID / Student ID
                </label>
                <div className="relative">
                  <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    id="certificate-search-input"
                    type="text"
                    value={certId}
                    onChange={(e) => {
                      setCertId(e.target.value);
                      if (error) setError(null);
                    }}
                    placeholder="Enter ID (e.g. IDS/DM01S/2026-00100)"
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#fe4759]/20 focus:border-[#fe4759] transition"
                  />
                </div>
                {error && (
                  <p className="text-xs text-red-600 font-medium mt-1.5">{error}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 px-5 rounded-xl bg-[#fe4759] hover:bg-[#e0384a] text-white text-sm font-bold transition shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Verify Certificate</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
