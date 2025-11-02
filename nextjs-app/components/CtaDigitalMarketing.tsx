"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import BookingDialog from "./BookingDialog";
import Link from "next/link";
import ctaimg from "@/components/assets/ctaimage.svg";

const CtaDigitalMarketing = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-[#c81e1e] to-[#520505] text-white overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left Image */}
        <div className="flex justify-center md:justify-start relative">
          <div
            className="absolute top-3 left-3 hidden sm:block"
            style={{
              borderRadius: "0% 35% 0% 35% / 0% 35% 0% 35%",
              width: "260px",
              height: "330px",
              background: "linear-gradient(180deg, #7b1212, #3b0707)",
              opacity: 0.8,
              zIndex: 0,
            }}
          />

          <div
            className="overflow-hidden shadow-lg relative z-10"
            style={{
              borderRadius: "0% 35% 0% 35% / 0% 35% 0% 35%",
              width: "260px",
              height: "330px",
              background: "linear-gradient(180deg, #e63939, #a60f0f)",
            }}
          >
            <Image
              src={ctaimg}
              alt="Digital Marketing Direction"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold leading-snug">
            Are You Planning to Start Your Digital Marketing Course Journey?
            <span className="block text-white/90 mt-1">
              But confused about which course is right for you?
            </span>
          </h2>

          <p className="text-base md:text-lg text-gray-200 font-medium">
            Take the first step towards a high-growth career with a free
            personalized demo session at iDigital Studies, Noida.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <BookingDialog>
              <Button
                size="lg"
                className="bg-[#EA2525] hover:bg-[#d92020] text-white rounded-md px-8 py-5 text-lg font-semibold 
                transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto"
              >
                Book a Free Demo Class
              </Button>
            </BookingDialog>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-md px-8 py-5 text-lg font-semibold 
              border border-green-600 text-green-600 bg-white hover:bg-green-600 hover:text-white 
              transition-all duration-300 hover:scale-105 hover:shadow-md w-full sm:w-auto"
            >
              <Link
                href="https://wa.me/919315471293"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.52 3.48A11.76 11.76 0..." />
                </svg>
                +91 93154 71293
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaDigitalMarketing;
