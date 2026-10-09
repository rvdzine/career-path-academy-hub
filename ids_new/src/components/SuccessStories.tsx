"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react";

interface Graduate {
  name: string;
  role: string;
  photo: string;
  video: string;
  course: string;
  hike: string;
}

const graduates: Graduate[] = [
  {
    name: "Isha Verma",
    role: "Performance Marketer",
    photo: "/alumni/isha_verma.jpg",
    video: "/videos/isha.mp4",
    course: "Digital Marketing Master Course",
    hike: "Placed at Nykaa",
  },
  {
    name: "Divya Chaudhary",
    role: "Content Strategist",
    photo: "/alumni/divya.jpg",
    video: "/videos/divya.mp4",
    course: "Content Strategy & Copywriting",
    hike: "Placed at Testbook",
  },
  {
    name: "Gaurav Singh",
    role: "Digital Growth Lead",
    photo: "/alumni/gaurav.jpg",
    video: "/videos/gaurav.mp4",
    course: "Performance Marketing & Growth",
    hike: "Placed at Unilever",
  },
  {
    name: "Bhumi Gupta",
    role: "Automation Specialist",
    photo: "/alumni/bhumi.jpg",
    video: "/videos/bhumi.mp4",
    course: "Marketing Automation Master Course",
    hike: "Placed at Razorpay",
  },
  {
    name: "Loveleen Sharma",
    role: "Social Media Lead",
    photo: "/alumni/loveleen.jpg",
    video: "/videos/loveleen.mp4",
    course: "Social Media & Brand Growth",
    hike: "Placed at Paytm",
  },
  {
    name: "Soham Patel",
    role: "SEO & Growth Analyst",
    photo: "/alumni/soham.jpg",
    video: "/videos/soham.mp4",
    course: "Technical SEO & Data Analytics",
    hike: "Placed at Infosys",
  },
];

function GraduateCard({ grad }: { grad: Graduate }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Autoplay gracefully handled if restricted
          });
      }
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const toggleAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="min-w-[270px] sm:min-w-[290px] max-w-[310px] w-full shrink-0 bg-white rounded-[28px] p-3.5 sm:p-4 border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.06)] flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 relative group cursor-pointer"
    >
      {/* Photo & Video Container with Red Border Frame */}
      <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[#fe4759]/70 bg-slate-950">
        {/* Monochromatic Poster Image */}
        <Image
          src={grad.photo}
          alt={grad.name}
          fill
          className={`object-cover object-top grayscale transition-opacity duration-300 ${
            isPlaying ? "opacity-0" : "opacity-100"
          }`}
          sizes="(max-width: 768px) 280px, 310px"
        />

        {/* Monochromatic Video Element with Filter */}
        {grad.video && (
          <video
            ref={videoRef}
            src={grad.video}
            muted
            loop
            playsInline
            preload="metadata"
            style={{ filter: "grayscale(100%) contrast(108%)" }}
            className={`absolute inset-0 w-full h-full object-cover grayscale contrast-[1.08] transition-opacity duration-300 ${
              isPlaying ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          />
        )}

        {/* Top Status Badge: Hover to Play / Playing Reel */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 text-white text-[10px] font-bold tracking-wide pointer-events-none">
          {isPlaying ? (
            <>
              <span className="w-2 h-2 rounded-full bg-[#fe4759] animate-ping" />
              <span>Playing Reel</span>
            </>
          ) : (
            <>
              <Play className="w-2.5 h-2.5 fill-white" />
              <span>Hover to Play</span>
            </>
          )}
        </div>

        {/* Placement Tag Badge */}
        {grad.hike && (
          <div className="absolute top-3 right-3 z-10 bg-white/95 backdrop-blur-md px-2 py-0.5 rounded-full border border-slate-200/80 text-[10px] font-black text-slate-800 shadow-xs pointer-events-none">
            {grad.hike}
          </div>
        )}

        {/* Center Play Button Watermark when not playing */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-12 h-12 rounded-full bg-white/85 backdrop-blur-xs border border-white/60 flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 group-hover:bg-[#fe4759] transition-all duration-300">
              <Play className="w-5 h-5 text-slate-900 fill-slate-900 group-hover:text-white group-hover:fill-white transition-colors duration-300" />
            </div>
          </div>
        )}

        {/* Sound Toggle Button when video is playing */}
        {isPlaying && (
          <button
            onClick={toggleAudio}
            title={isMuted ? "Unmute Audio" : "Mute Audio"}
            aria-label="Toggle Sound"
            className="absolute bottom-12 right-3 z-20 w-8 h-8 rounded-full bg-black/70 hover:bg-[#fe4759] text-white flex items-center justify-center backdrop-blur-md transition-colors shadow-md cursor-pointer"
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4" />
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
          </button>
        )}

        {/* Gradient shadow overlay at bottom of photo to give depth to nameplate */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none"></div>
      </div>

      {/* Overlapping Floating Nameplate (Matches exact screenshot layout) */}
      <div className="relative -mt-10 mx-2 bg-white rounded-2xl py-3 px-3.5 shadow-[0_8px_24px_rgba(0,0,0,0.1)] border border-slate-100/90 text-center z-10 flex flex-col items-center">
        {/* First Name in Bold Modern Typography */}
        <h3 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight leading-tight group-hover:text-[#fe4759] transition-colors">
          {grad.name}
        </h3>

        {/* Solid Red Alumni Role Badge */}
        <div className="mt-1.5 px-3 py-1 bg-[#fe4759] text-white text-[11px] sm:text-xs font-bold rounded-sm shadow-xs whitespace-nowrap">
          {grad.role}
        </div>

        {/* Subtle bottom curved shadow element */}
        <div className="absolute inset-x-4 -bottom-1.5 h-3 bg-black/10 blur-xs rounded-full -z-10 pointer-events-none"></div>
      </div>
    </div>
  );
}

export default function SuccessStories() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  return (
    <section id="stories" className="py-16 md:py-24 bg-white font-sans relative overflow-hidden">
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-3">
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-slate-900 tracking-tight">
            Real Stories From{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fe4759] to-[#d02e40]">
              Our Graduates
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Hear how our professional certification courses helped learners gain practical skills and
            unlock career growth in digital domains. Hover over any graduate to watch their authentic story.
          </p>
        </div>

        {/* Carousel Container with Left/Right Buttons */}
        <div className="relative group/carousel">
          
          {/* Left Arrow Button */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Previous Stories"
            className={`absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white shadow-xl border border-slate-200/80 flex items-center justify-center text-slate-700 hover:text-white hover:bg-[#fe4759] hover:border-[#fe4759] transition-all cursor-pointer ${
              !canScrollLeft ? "opacity-30 cursor-not-allowed pointer-events-none" : "opacity-90 hover:opacity-100"
            }`}
          >
            <ChevronLeft className="w-5 h-5 -ml-0.5 stroke-[2.5]" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Next Stories"
            className={`absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white shadow-xl border border-slate-200/80 flex items-center justify-center text-slate-700 hover:text-white hover:bg-[#fe4759] hover:border-[#fe4759] transition-all cursor-pointer ${
              !canScrollRight ? "opacity-30 cursor-not-allowed pointer-events-none" : "opacity-90 hover:opacity-100"
            }`}
          >
            <ChevronRight className="w-5 h-5 -mr-0.5 stroke-[2.5]" />
          </button>

          {/* Cards Scroll Track */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex items-stretch gap-5 sm:gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-8 pt-2 px-1"
          >
            
            {/* Card 1: Success Stories Photo Collage Card (Exact match to reference design) */}
            <div className="min-w-[270px] sm:min-w-[290px] max-w-[310px] w-full shrink-0 bg-white rounded-[28px] p-3.5 sm:p-4 border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.06)] flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              
              {/* Mosaic Photo Grid with Central "Success Stories" Block */}
              <div className="grid grid-cols-4 grid-rows-4 gap-1.5 p-1 rounded-2xl border-2 border-[#fe4759]/70 bg-white aspect-[4/5] overflow-hidden">
                
                {/* Row 1: 4 headshots */}
                <div className="relative rounded-lg overflow-hidden border border-[#fe4759]/30 bg-slate-100">
                  <Image src="/alumni/isha_verma.jpg" alt="Graduate" fill sizes="80px" className="object-cover" />
                </div>
                <div className="relative rounded-lg overflow-hidden border border-[#fe4759]/30 bg-slate-100">
                  <Image src="/alumni/divya.jpg" alt="Graduate" fill sizes="80px" className="object-cover" />
                </div>
                <div className="relative rounded-lg overflow-hidden border border-[#fe4759]/30 bg-slate-100">
                  <Image src="/alumni/gaurav.jpg" alt="Graduate" fill sizes="80px" className="object-cover" />
                </div>
                <div className="relative rounded-lg overflow-hidden border border-[#fe4759]/30 bg-slate-100">
                  <Image src="/alumni/bhumi.jpg" alt="Graduate" fill sizes="80px" className="object-cover" />
                </div>

                {/* Row 2: Col 1 Headshot, Col 2-3 Center Tile, Col 4 Headshot */}
                <div className="relative rounded-lg overflow-hidden border border-[#fe4759]/30 bg-slate-100">
                  <Image src="/alumni/loveleen.jpg" alt="Graduate" fill sizes="80px" className="object-cover" />
                </div>

                {/* Central Brand Badge Tile (2x2 span) */}
                <div className="col-span-2 row-span-2 rounded-xl bg-[#fe4759] flex flex-col items-center justify-center p-2 text-white shadow-md text-center z-10">
                  <div className="flex items-center gap-1 mb-1">
                    <TrendingUp className="w-5 h-5 text-white stroke-[2.5]" />
                    <span className="font-black text-sm tracking-tight">IDS</span>
                  </div>
                  <div className="text-base sm:text-lg font-black leading-tight tracking-tight">
                    Success<br />Stories
                  </div>
                </div>

                <div className="relative rounded-lg overflow-hidden border border-[#fe4759]/30 bg-slate-100">
                  <Image src="/alumni/soham.jpg" alt="Graduate" fill sizes="80px" className="object-cover" />
                </div>

                {/* Row 3: Col 1 Headshot, (Col 2-3 covered by center tile), Col 4 spans rows 3-4 */}
                <div className="relative rounded-lg overflow-hidden border border-[#fe4759]/30 bg-slate-100">
                  <Image src="/alumni/isha_verma.jpg" alt="Graduate" fill sizes="80px" className="object-cover" />
                </div>

                {/* Tall right-side headshot spanning row 3 and 4 */}
                <div className="row-span-2 relative rounded-lg overflow-hidden border border-[#fe4759]/30 bg-slate-100">
                  <Image src="/alumni/divya.jpg" alt="Graduate" fill sizes="80px" className="object-cover" />
                </div>

                {/* Row 4: 3 headshots */}
                <div className="relative rounded-lg overflow-hidden border border-[#fe4759]/30 bg-slate-100">
                  <Image src="/alumni/gaurav.jpg" alt="Graduate" fill sizes="80px" className="object-cover" />
                </div>
                <div className="relative rounded-lg overflow-hidden border border-[#fe4759]/30 bg-slate-100">
                  <Image src="/alumni/bhumi.jpg" alt="Graduate" fill sizes="80px" className="object-cover" />
                </div>
                <div className="relative rounded-lg overflow-hidden border border-[#fe4759]/30 bg-slate-100">
                  <Image src="/alumni/loveleen.jpg" alt="Graduate" fill sizes="80px" className="object-cover" />
                </div>

              </div>

              {/* Bottom Label */}
              <div className="mt-3 text-center">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Active Alumni Network
                </span>
              </div>
            </div>

            {/* Individual Graduate Cards with Monochromatic Hover Autoplay Video */}
            {graduates.map((grad, idx) => (
              <GraduateCard key={idx} grad={grad} />
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

