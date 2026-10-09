"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: "Classroom" | "Projects" | "Events" | "Culture";
  spanClass: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/assets/gallery1.webp",
    title: "Interactive Classroom Masterclasses",
    category: "Classroom",
    spanClass: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    src: "/assets/gallery2.webp",
    title: "Agency Collaboration Hub",
    category: "Projects",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    src: "/assets/gallery3.webp",
    title: "1-on-1 Mentor Campaign Audits",
    category: "Classroom",
    spanClass: "md:col-span-1 md:row-span-2",
  },
  {
    id: 4,
    src: "/assets/gallery4.webp",
    title: "High-Tech Analytics Lab",
    category: "Projects",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 5,
    src: "/assets/gallery5.webp",
    title: "Real Client Growth Sprints",
    category: "Projects",
    spanClass: "md:col-span-2 md:row-span-1",
  },
  {
    id: 6,
    src: "/assets/gallery6.webp",
    title: "Live Strategy Pitch Presentations",
    category: "Classroom",
    spanClass: "md:col-span-1 md:row-span-2",
  },
  {
    id: 7,
    src: "/assets/gallery7.jpg",
    title: "Weekend Growth Hackathons",
    category: "Events",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 8,
    src: "/assets/gallery8.jpg",
    title: "Convocation & Placement Milestones",
    category: "Culture",
    spanClass: "md:col-span-2 md:row-span-2",
  },
  {
    id: 9,
    src: "/assets/gallery10.jpg",
    title: "Industry Leader Guest Keynotes",
    category: "Events",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 10,
    src: "/assets/gallery11.jpg",
    title: "Creative Whiteboard Brainstorms",
    category: "Culture",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 11,
    src: "/assets/gallery12.jpg",
    title: "Alumni Meetups & Networking",
    category: "Events",
    spanClass: "md:col-span-2 md:row-span-1",
  },
  {
    id: 12,
    src: "/assets/gallery16.jpg",
    title: "Creative Studio & Lounge Zones",
    category: "Culture",
    spanClass: "md:col-span-1 md:row-span-1",
  },
];

const categories = ["All", "Classroom", "Projects", "Events", "Culture"] as const;

export default function GlimpsePage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredItems = galleryItems.filter(
    (item) => selectedFilter === "All" || item.category === selectedFilter
  );

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) =>
        prev === 0 ? filteredItems.length - 1 : (prev as number) - 1
      );
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) =>
        prev === filteredItems.length - 1 ? 0 : (prev as number) + 1
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFCFF] flex flex-col font-sans selection:bg-[#fe4759]/15 selection:text-[#fe4759]">
      <Navbar />

      {/* ============================================================== */}
      {/* 1. HERO SECTION WITH ATTACHED Frame_136.svg */}
      {/* ============================================================== */}
      <section className="relative pt-12 pb-14 sm:pt-16 sm:pb-20 border-b border-rose-100/70 overflow-hidden bg-gradient-to-b from-[#FFF5F6] via-[#FFF9FA] to-[#FFFFFF]">
        {/* Subtle Ambient Red Dot Grid */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: "radial-gradient(#fe4759 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Ambient Glow */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#fe4759]/10 blur-[100px] rounded-full pointer-events-none"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black text-slate-900 tracking-tight leading-[1.15] max-w-4xl mx-auto">
            A Glimpse Into the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fe4759] to-[#d02e40]">
              IDS Experience
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Where live agency execution, hands-on masterclasses, and an ambitious community come together to transform digital careers.
          </p>

          {/* Attached Hero Banner Showcase: Frame_136.svg */}
          <div className="mt-10 sm:mt-12 max-w-5xl mx-auto">
            <div className="relative bg-white rounded-3xl p-3 sm:p-6 md:p-8 border border-slate-200/80 shadow-[0_12px_45px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300">
              <div className="relative w-full aspect-[5500/4700] max-h-[600px] mx-auto select-none rounded-2xl overflow-hidden bg-slate-50">
                <Image
                  src="/assets/Frame_136.svg"
                  alt="IDS Campus Life & Culture Banner"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. BENTO GRID GALLERY SECTION */}
      {/* ============================================================== */}
      <section className="py-14 sm:py-20 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex-1">
        {/* Section Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-slate-200/80">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="block w-6 h-[2px] bg-[#fe4759] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#fe4759]">
                MOMENTS & MEMORIES
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Inside Our Creative Hub
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer shrink-0 ${
                    isActive
                      ? "bg-[#fe4759] text-white shadow-sm shadow-[#fe4759]/30"
                      : "bg-slate-100 text-slate-600 hover:bg-rose-50 hover:text-[#fe4759]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[220px] sm:auto-rows-[250px]">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxIndex(idx)}
              className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/80 shadow-2xs hover:shadow-xl hover:border-rose-300 transition-all duration-300 cursor-pointer bg-slate-100 ${
                selectedFilter === "All" ? item.spanClass : "col-span-1 row-span-1"
              }`}
            >
              {/* Image */}
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Expand Icon on Hover (Top Right) */}
              <div className="absolute top-3.5 right-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-8 h-8 rounded-full bg-black/40 backdrop-blur-xs text-white flex items-center justify-center border border-white/20">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Caption Pill & Title */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 flex flex-col justify-end text-white">
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-rose-300 mb-1">
                  {item.category}
                </span>
                <h3 className="text-sm sm:text-base font-bold leading-snug drop-shadow-sm group-hover:text-white transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. LIGHTBOX POPUP MODAL */}
      {/* ============================================================== */}
      {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setActiveLightboxIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setActiveLightboxIndex(null)}
            className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/20 transition-colors cursor-pointer"
            aria-label="Close Preview"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Previous Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/20 transition-colors cursor-pointer"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/20 transition-colors cursor-pointer"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Image Container */}
          <div
            className="relative max-w-5xl w-full max-h-[85vh] h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={filteredItems[activeLightboxIndex].src}
                alt={filteredItems[activeLightboxIndex].title}
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="mt-4 text-center text-white">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-rose-400 mb-1">
                {filteredItems[activeLightboxIndex].category}
              </span>
              <h4 className="text-base sm:text-lg font-bold">
                {filteredItems[activeLightboxIndex].title}
              </h4>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
