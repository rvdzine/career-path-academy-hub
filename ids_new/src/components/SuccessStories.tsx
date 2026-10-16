"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
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
      className="w-[250px] sm:w-[265px] shrink-0 bg-white rounded-[24px] p-3 sm:p-3.5 border border-slate-200/80 shadow-[0_8px_25px_rgba(0,0,0,0.05)] flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 relative group cursor-pointer"
    >
      {/* Photo & Video Container with Red Border Frame */}
      <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden border-2 border-[#fe4759]/70 bg-slate-950">
        {/* Monochromatic Poster Image */}
        <Image
          src={grad.photo}
          alt={grad.name}
          fill
          className={`object-cover object-top grayscale transition-opacity duration-300 ${
            isPlaying ? "opacity-0" : "opacity-100"
          }`}
          sizes="(max-width: 768px) 250px, 265px"
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
        <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/20 text-white text-[9px] font-bold tracking-wide pointer-events-none">
          {isPlaying ? (
            <>
              <span className="w-1.5 h-1.5 rounded-full bg-[#fe4759] animate-ping" />
              <span>Playing Reel</span>
            </>
          ) : (
            <>
              <Play className="w-2 h-2 fill-white" />
              <span>Hover to Play</span>
            </>
          )}
        </div>

        {/* Placement Tag Badge */}
        {grad.hike && (
          <div className="absolute top-2.5 right-2.5 z-10 bg-white/95 backdrop-blur-md px-2 py-0.5 rounded-full border border-slate-200/80 text-[9px] font-black text-slate-800 shadow-xs pointer-events-none">
            {grad.hike}
          </div>
        )}

        {/* Center Play Button Watermark when not playing */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-10 h-10 rounded-full bg-white/85 backdrop-blur-xs border border-white/60 flex items-center justify-center pl-0.5 shadow-md group-hover:scale-110 group-hover:bg-[#fe4759] transition-all duration-300">
              <Play className="w-4 h-4 text-slate-900 fill-slate-900 group-hover:text-white group-hover:fill-white transition-colors duration-300" />
            </div>
          </div>
        )}

        {/* Sound Toggle Button when video is playing */}
        {isPlaying && (
          <button
            onClick={toggleAudio}
            title={isMuted ? "Unmute Audio" : "Mute Audio"}
            aria-label="Toggle Sound"
            className="absolute bottom-11 right-2.5 z-20 w-7 h-7 rounded-full bg-black/70 hover:bg-[#fe4759] text-white flex items-center justify-center backdrop-blur-md transition-colors shadow-md cursor-pointer"
          >
            {isMuted ? (
              <VolumeX className="w-3.5 h-3.5" />
            ) : (
              <Volume2 className="w-3.5 h-3.5" />
            )}
          </button>
        )}

        {/* Gradient shadow overlay at bottom of photo to give depth to nameplate */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none"></div>
      </div>

      {/* Overlapping Floating Nameplate */}
      <div className="relative -mt-8 mx-1.5 bg-white rounded-xl py-2.5 px-3 shadow-[0_6px_20px_rgba(0,0,0,0.08)] border border-slate-100/90 text-center z-10 flex flex-col items-center">
        {/* First Name in Bold Modern Typography */}
        <h3 className="text-lg sm:text-xl font-black text-slate-800 tracking-tight leading-tight group-hover:text-[#fe4759] transition-colors">
          {grad.name}
        </h3>

        {/* Solid Red Alumni Role Badge */}
        <div className="mt-1 px-2.5 py-0.5 bg-[#fe4759] text-white text-[10px] sm:text-[11px] font-bold rounded-sm shadow-xs whitespace-nowrap">
          {grad.role}
        </div>

        {/* Subtle bottom curved shadow element */}
        <div className="absolute inset-x-4 -bottom-1 h-2.5 bg-black/10 blur-xs rounded-full -z-10 pointer-events-none"></div>
      </div>
    </div>
  );
}

export default function SuccessStories() {
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

        {/* Main Showcase: Static First Card + Infinite Auto-Scrolling Graduate Cards */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-5 sm:gap-6">
          
          {/* Card 1: Static / Freezed Success Stories Photo Collage Card (Exact match to GraduateCard sizing & anatomy) */}
          <div className="w-[250px] sm:w-[265px] shrink-0 bg-white rounded-[24px] p-3 sm:p-3.5 border border-slate-200/80 shadow-[0_8px_25px_rgba(0,0,0,0.05)] flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 relative group z-20">
            {/* Mosaic Photo Grid in matching aspect-[4/5] container */}
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden border-2 border-[#fe4759]/70 bg-white">
              <div className="grid grid-cols-4 grid-rows-4 gap-1.5 p-1.5 h-full w-full">
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
            </div>

            {/* Overlapping Floating Nameplate (Matches exact GraduateCard anatomy & height) */}
            <div className="relative -mt-8 mx-1.5 bg-white rounded-xl py-2.5 px-3 shadow-[0_6px_20px_rgba(0,0,0,0.08)] border border-slate-100/90 text-center z-10 flex flex-col items-center">
              <h3 className="text-lg sm:text-xl font-black text-slate-800 tracking-tight leading-tight group-hover:text-[#fe4759] transition-colors">
                Alumni Network
              </h3>
              <div className="mt-1 px-2.5 py-0.5 bg-[#fe4759] text-white text-[10px] sm:text-[11px] font-bold rounded-sm shadow-xs whitespace-nowrap">
                3,500+ PLACED
              </div>
              <div className="absolute inset-x-4 -bottom-1 h-2.5 bg-black/10 blur-xs rounded-full -z-10 pointer-events-none"></div>
            </div>
          </div>

          {/* Marquee Wrapper for Cards 2 to the Last */}
          <div className="relative flex-1 min-w-0 overflow-hidden py-1">
            {/* Infinite Horizontal Scrolling Track (Pause on Hover) */}
            <div className="flex w-max items-stretch gap-5 sm:gap-6 animate-marquee hover:[animation-play-state:paused] pb-6 pt-1">
              {[...graduates, ...graduates].map((grad, idx) => (
                <GraduateCard key={`${grad.name}-${idx}`} grad={grad} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

