"use client";
import { Star } from "lucide-react";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { useRef, useState } from "react";

const reels = [
  {
    img: "/assets/Loveleen.jpg",
    video: "/videos/loveleen.mp4",
    rating: 5,
    username: "Loveleen Sharma",
    text: "This journey strengthened my skills to lead social media at Paytm.",
    logo: "/svg/Paytm.svg",
    
  },
  {
    img: "/assets/Bhumi.jpg",
    video: "/videos/Bhumi.mp4",
    rating: 5,
    username: "Bhumi Gupta",
    text: "Automation skills here helped me power campaigns at Razorpay.",
    logo: "/svg/razorpay.svg",
    
  },
];

export default function ReelsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const scrollLeft = () =>
    scrollRef.current?.scrollBy({ left: -350, behavior: "smooth" });

  const scrollRight = () =>
    scrollRef.current?.scrollBy({ left: 350, behavior: "smooth" });

  const stopVideo = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
    setPlayingIndex(null);
  };

  return (
    <section className="relative py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900">
          Hear from IDS Alumni
        </h2>
        <p className="text-gray-600 text-center mt-4 mb-10 max-w-3xl mx-auto text-lg">
          Hear directly from our students how IDS&apos;s Programs have helped them accelerate their professional journey.
        </p>

        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-[#f5f5f5] text-black rounded-full p-3 shadow-xl"
        >
          <ChevronLeft size={22} />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-10 overflow-x-scroll scrollbar-hide scroll-smooth"
        >
          {reels.map((item, index) => (
            <div
              key={index}
              className="relative w-[280px] h-[500px] flex-shrink-0 rounded-xl overflow-hidden shadow-lg bg-black"
            >
              {playingIndex === index ? (
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  src={item.video}
                  autoPlay
                  controls
                  className="w-full h-full object-cover"
                />
              ) : (
                <>
                  <Image src={item.img} alt="reel" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/40"></div>
                </>
              )}

              {playingIndex !== index && (
                <div
                  onClick={() => setPlayingIndex(index)}
                  className="absolute inset-0 cursor-pointer flex justify-center items-center"
                >
                  <div className="w-16 h-16 bg-white/40 backdrop-blur-xl rounded-full flex justify-center items-center">
                    <Play size={34} className="text-white" />
                  </div>
                </div>
              )}

              {playingIndex === index && (
                <button
                  onClick={() => stopVideo(index)}
                  className="absolute top-3 right-3 bg-black/60 text-white p-2 rounded-full"
                >
                  <X size={20} />
                </button>
              )}

              {/* Bottom Section */}
              <div className="absolute bottom-0 w-full px-5 pb-4 pt-6 bg-gradient-to-t from-black/90 to-transparent text-white">
                <div className="flex gap-1 text-yellow-400 mb-2">
  {Array(item.rating)
    .fill(0)
    .map((_, i) => (
      <Star key={i} size={18} fill="#facc15" stroke="#facc15" />
    ))}
</div>


                <div className="flex justify-between items-center text-sm opacity-90">
                  <div>
                    <p className="font-semibold">@{item.username}</p>
                    <p className="opacity-80">{item.text}</p>
                  </div>

                  {item.logo && (
                    <Image
                      src={item.logo}
                      alt="logo"
                      width={40}
                      height={40}
                      className="opacity-90 object-contain"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-[#f5f5f5] text-black rounded-full p-3 shadow-xl"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </section>
  );
}
