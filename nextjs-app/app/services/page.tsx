import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import CtaDigitalMarketing from "@/components/CtaDigitalMarketing";
import ContactOptionsDialog from "@/components/ContactOptionsDialog";

export const metadata: Metadata = {
  title: "Digital Marketing Services in Noida | iDigital Studies",
  description:
    "Explore our full range of digital marketing services — Website & App Development, UGC Ads, Social Media Management, Lead Generation, Shoots & Branding. Results guaranteed or no bill.",
  keywords: [
    "digital marketing services",
    "digital marketing services in noida",
    "website development noida",
    "lead generation services",
    "social media management",
    "UGC ads india",
    "branding services noida",
    "cinematics and shoots",
  ],
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-white"
        style={{ minHeight: "52vh" }}
      >
        {/* Subtle red glow orb — top right */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(234,37,37,0.07) 0%, transparent 70%)",
            transform: "translate(30%, -30%)",
          }}
        />

        {/* Light grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(234,37,37,0.04) 1px, transparent 1px),
              linear-gradient(to right, rgba(234,37,37,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "44px 44px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center min-h-[52vh] py-16">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* ── LEFT: Text + CTAs ── */}
            <div>
              {/* Badge */}
              <span className="inline-block bg-[#EA2525]/10 border border-[#EA2525]/40 text-[#EA2525] text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
                Our Services
              </span>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.15] mb-6">
                Everything Your Brand{" "}
                <span className="text-[#EA2525]">Needs to Win</span> Online
              </h1>

              {/* Subtext */}
              <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
                From high-converting websites to scroll-stopping ads — we build,
                run, and scale your digital presence. One agency. Full stack.{" "}
                
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <ContactOptionsDialog>
                  <button className="bg-[#EA2525] hover:bg-red-700 text-white font-semibold px-7 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/20 text-sm sm:text-base">
                    Book a Free Strategy Call
                  </button>
                </ContactOptionsDialog>
              </div>
            </div>

            {/* ── RIGHT: Decorative service cards cluster ── */}
            <div className="hidden lg:flex items-center justify-center relative h-[420px]">

              {/* Soft red glow behind cards */}
              <div
                className="absolute w-80 h-80 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(234,37,37,0.08) 0%, transparent 70%)",
                }}
              />

              {/* Card 1 — top left, tilted left */}
              <div
                className="absolute top-0 left-4 bg-white rounded-2xl shadow-lg border border-gray-100 px-5 py-4 w-48"
                style={{ transform: "rotate(-5deg)" }}
              >
                <div className="text-2xl mb-2">🌐</div>
                <p className="text-gray-900 font-bold text-sm leading-tight">Website & App Development</p>
                <span className="mt-2 inline-block text-[10px] bg-[#EA2525] text-white px-2 py-0.5 rounded-full font-semibold">
                  First at ₹999
                </span>
              </div>

              {/* Card 2 — top right, tilted right */}
              <div
                className="absolute top-4 right-0 bg-white rounded-2xl shadow-lg border border-gray-100 px-5 py-4 w-44"
                style={{ transform: "rotate(4deg)" }}
              >
                <div className="text-2xl mb-2">🎬</div>
                <p className="text-gray-900 font-bold text-sm leading-tight">UGC & Creative Ads</p>
                <span className="mt-2 inline-block text-[10px] bg-[#EA2525] text-white px-2 py-0.5 rounded-full font-semibold">
                  First at ₹999
                </span>
              </div>

              {/* Card 3 — middle left, slight tilt */}
              <div
                className="absolute top-[38%] left-0 bg-white rounded-2xl shadow-xl border border-gray-100 px-5 py-4 w-44"
                style={{ transform: "rotate(-3deg)" }}
              >
                <div className="text-2xl mb-2">📱</div>
                <p className="text-gray-900 font-bold text-sm leading-tight">Social Media Mgmt</p>
                <span className="mt-2 inline-block text-[10px] bg-gray-100 text-gray-700 border border-gray-200 px-2 py-0.5 rounded-full font-semibold">
                  No Results = No Charge
                </span>
              </div>

              {/* Card 4 — center, no tilt — hero card */}
              <div className="absolute bg-white rounded-2xl shadow-2xl border border-gray-100 px-6 py-5 w-52 z-10 top-[28%] left-[28%]">
                <div className="text-3xl mb-3">🎯</div>
                <p className="text-gray-900 font-bold text-base leading-tight">Lead Generation</p>
                <p className="text-gray-500 text-xs mt-1">High-intent campaigns</p>
                <span className="mt-3 inline-block text-[10px] bg-gray-900 text-white px-2 py-0.5 rounded-full font-semibold">
                  Guaranteed or No Bill
                </span>
              </div>

              {/* Card 5 — bottom right */}
              <div
                className="absolute bottom-6 right-2 bg-white rounded-2xl shadow-lg border border-gray-100 px-5 py-4 w-44"
                style={{ transform: "rotate(5deg)" }}
              >
                <div className="text-2xl mb-2">🎥</div>
                <p className="text-gray-900 font-bold text-sm leading-tight">Shoots & Cinematics</p>
                <span className="mt-2 inline-block text-[10px] bg-[#EA2525] text-white px-2 py-0.5 rounded-full font-semibold">
                  First at ₹999
                </span>
              </div>

              {/* Card 6 — bottom left */}
              <div
                className="absolute bottom-2 left-6 bg-white rounded-2xl shadow-lg border border-gray-100 px-5 py-4 w-44"
                style={{ transform: "rotate(-4deg)" }}
              >
                <div className="text-2xl mb-2">✦</div>
                <p className="text-gray-900 font-bold text-sm leading-tight">Branding & Graphics</p>
                <span className="mt-2 inline-block text-[10px] bg-gray-900 text-white px-2 py-0.5 rounded-full font-semibold">
                  Full Branding Kit
                </span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── SERVICES SECTION ────────────────────────────────── */}
      <ServicesSection />


      <Footer />
    </div>
  );
}
