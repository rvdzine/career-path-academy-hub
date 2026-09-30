"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  X,
  Star,
  ShieldCheck,
} from "lucide-react";

interface ReelItem {
  img: string;
  video: string;
  rating: number;
  username: string;
  role: string;
  company: string;
  text: string;
  logo: string;
}

const reels: ReelItem[] = [
  {
    img: "/assets/Isha Verma.jpeg",
    video: "/videos/Isha .mp4",
    rating: 5,
    username: "Isha Verma",
    role: "Performance Marketer",
    company: "Nykaa",
    text: "Real campaigns and mentor audits prepared me to manage high-performing ad budgets at Nykaa.",
    logo: "/svg/Nykaa.svg",
  },
  {
    img: "/assets/Divya.png",
    video: "/videos/Divya.mp4",
    rating: 5,
    username: "Divya Chaudhary",
    role: "Content Strategist",
    company: "Testbook",
    text: "Content strategy training shaped me into a stronger brand storyteller and growth driver.",
    logo: "/svg/testbook.svg",
  },
  {
    img: "/assets/gaurav.png",
    video: "/videos/Gaurav.mp4",
    rating: 5,
    username: "Gaurav Singh",
    role: "Digital Growth Lead",
    company: "Unilever",
    text: "The practical agency framework and 1-on-1 mentorship accelerated my career at Unilever.",
    logo: "/svg/unilever.svg",
  },
  {
    img: "/assets/Bhumi.jpg",
    video: "/videos/Bhumi.mp4",
    rating: 5,
    username: "Bhumi Gupta",
    role: "Automation Specialist",
    company: "Razorpay",
    text: "Hands-on marketing automation and data tracking helped me power high-scale campaigns at Razorpay.",
    logo: "/svg/razorpay.svg",
  },
  {
    img: "/assets/Loveleen.jpg",
    video: "/videos/loveleen.mp4",
    rating: 5,
    username: "Loveleen Sharma",
    role: "Social Media Lead",
    company: "Paytm",
    text: "From viral organic hooks to conversion funnels, IDS gave me the end-to-end skills for Paytm.",
    logo: "/svg/Paytm.svg",
  },
  {
    img: "/assets/soham.png",
    video: "/videos/soham.mp4",
    rating: 5,
    username: "Soham Patel",
    role: "SEO & Growth Analyst",
    company: "Infosys",
    text: "Technical SEO audits and live indexing projects separated me from other applicants at Infosys.",
    logo: "/svg/infosys.svg",
  },
];

export default function ReelsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll every 4.2 seconds unless hovered or playing
  useEffect(() => {
    if (isHovered || playingIndex !== null) return;
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        if (scrollLeft >= maxScroll - 15) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
        }
      }
    }, 4200);

    return () => clearInterval(interval);
  }, [isHovered, playingIndex]);

  const scrollLeft = useCallback(() => {
    scrollRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  }, []);

  const scrollRight = useCallback(() => {
    scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  }, []);

  const stopVideo = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
    setPlayingIndex(null);
  };

  const handleStartPlay = (index: number) => {
    // pause previous video if playing
    if (playingIndex !== null && playingIndex !== index) {
      stopVideo(playingIndex);
    }
    setPlayingIndex(index);
  };

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-t border-gray-100 overflow-hidden">
      {/* Subtle ambient red dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, #EA252514 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-14">
        {/* ─── SECTION HEADER ─── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-8 h-[2.5px] bg-red-600 rounded-full" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-red-600">
                Verified Video Stories // Real Experiences
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-950 tracking-tight leading-[1.08]">
              Hear Directly From <span className="text-red-600">IDS Alumni</span>
            </h2>

            <p className="mt-3 text-gray-600 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
              Watch authentic stories from graduates who turned hands-on agency training into high-growth marketing roles across India.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 flex-shrink-0 self-start md:self-end">
            <button
              onClick={scrollLeft}
              aria-label="Scroll left"
              className="w-12 h-12 rounded-none border-2 border-gray-950 bg-white hover:bg-gray-950 hover:text-white flex items-center justify-center transition-all shadow-sm cursor-pointer active:scale-95"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
              }}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              aria-label="Scroll right"
              className="w-12 h-12 rounded-none border-2 border-gray-950 bg-white hover:bg-gray-950 hover:text-white flex items-center justify-center transition-all shadow-sm cursor-pointer active:scale-95"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
              }}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ─── REEL CAROUSEL TRACK ─── */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-6 pt-2 -mx-2 px-2"
        >
          {reels.map((item, index) => {
            const isPlaying = playingIndex === index;
            const isSvg = item.logo.endsWith(".svg");

            return (
              <div
                key={index}
                className="group relative w-[280px] sm:w-[310px] h-[490px] sm:h-[520px] rounded-3xl border-2 border-gray-950 overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-gray-950 flex-shrink-0 flex flex-col justify-between"
              >
                {isPlaying ? (
                  /* Active Video Player */
                  <div className="relative w-full h-full bg-black">
                    <video
                      ref={(el) => {
                        videoRefs.current[index] = el;
                      }}
                      src={item.video}
                      autoPlay
                      controls
                      playsInline
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => stopVideo(index)}
                      aria-label="Close video"
                      className="absolute top-4 right-4 bg-gray-950/80 hover:bg-red-600 text-white p-2 rounded-xl backdrop-blur-md transition-colors z-20 cursor-pointer shadow-md"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ) : (
                  /* Video Poster Stage */
                  <div
                    onClick={() => handleStartPlay(index)}
                    className="cursor-pointer relative w-full h-full"
                  >
                    {/* Background Poster Image */}
                    <Image
                      src={item.img}
                      alt={`${item.username} - IDS Alumni story`}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 280px, 310px"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Top Overlay Badges */}
                    <div className="absolute top-4 inset-x-4 z-10 flex items-center justify-between pointer-events-none">
                      <div className="bg-gray-950/70 backdrop-blur-md border border-white/15 px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3 h-3 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>
                        <span className="text-[10px] font-black text-white ml-0.5">
                          5.0
                        </span>
                      </div>

                      <div className="bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-gray-200 shadow-xs flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                        <span className="text-[10px] font-black text-gray-950 uppercase tracking-wider">
                          Verified
                        </span>
                      </div>
                    </div>

                    {/* Center Glowing Play Trigger */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-950/25 group-hover:bg-gray-950/45 transition-colors duration-300">
                      <div className="w-14 h-14 rounded-2xl bg-white/90 backdrop-blur-md border border-white/60 flex items-center justify-center pl-1 shadow-2xl group-hover:scale-110 group-hover:bg-red-600 transition-all duration-300">
                        <Play className="w-6 h-6 text-gray-950 fill-gray-950 group-hover:text-white group-hover:fill-white transition-colors duration-300" />
                      </div>
                    </div>

                    {/* Bottom Cinematic Gradient Stage */}
                    <div className="absolute bottom-0 inset-x-0 p-5 pt-12 bg-gradient-to-t from-gray-950 via-gray-950/85 to-transparent text-white pointer-events-none">
                      {/* Name & Role with Company Logo */}
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <div className="min-w-0">
                          <h3 className="font-black text-base sm:text-lg text-white group-hover:text-red-400 transition-colors leading-tight truncate">
                            {item.username}
                          </h3>
                          <p className="text-xs text-gray-300 font-semibold truncate mt-0.5">
                            {item.role}
                          </p>
                        </div>

                        {item.logo && (
                          <div className="w-9 h-9 rounded-xl bg-white border border-gray-200/80 p-1.5 flex items-center justify-center flex-shrink-0 shadow-xs">
                            <Image
                              src={item.logo}
                              alt={`${item.company} logo`}
                              width={26}
                              height={26}
                              className="object-contain"
                              unoptimized={isSvg}
                            />
                          </div>
                        )}
                      </div>

                      {/* Testimonial Quote */}
                      <p className="text-xs text-gray-200 font-normal leading-relaxed line-clamp-2 italic mb-2.5">
                        &ldquo;{item.text}&rdquo;
                      </p>

                      {/* Bottom Accent */}
                      <div className="flex items-center justify-between pt-2.5 border-t border-white/15 text-[10.5px]">
                        <span className="text-red-400 font-extrabold uppercase tracking-wider flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          Placed at {item.company}
                        </span>
                        <span className="text-gray-300 font-mono font-bold uppercase tracking-wider">
                          [ Watch Reel ]
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ─── BOTTOM STATUS NOTE ─── */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 text-xs text-gray-500">
          <p className="text-xs font-semibold text-gray-600">
            Swipe or click arrows to explore alumni journeys
          </p>
          <p className="text-[11px] font-mono font-bold text-gray-400 uppercase tracking-wider">
            {playingIndex !== null
              ? "[ PLAYING VIDEO ]"
              : isHovered
              ? "[ PAUSED ON HOVER ]"
              : "[ AUTO-ADVANCING ]"}
          </p>
        </div>
      </div>
    </section>
  );
}
