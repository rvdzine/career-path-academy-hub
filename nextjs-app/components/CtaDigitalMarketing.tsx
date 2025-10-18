import { Button } from "@/components/ui/button";
import BookingDialog from "./BookingDialog";
import Link from "next/link";
import ctaimg from "@/components/assets/ctaimage.svg";

const CtaDigitalMarketing = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-[#c81e1e] to-[#520505] text-white overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
        
        {/* Left Side Image with Organic Shape */}
        <div className="flex justify-center md:justify-start relative ml-20">
  {/* Back layer (shadow shape) */}
  <div
    className="absolute top-5 left-5"
    style={{
      borderRadius: "0% 35% 0% 35% / 0% 35% 0% 35%",
      width: "300px",
      height: "380px",
      background: "linear-gradient(180deg, #7b1212, #3b0707)",
      opacity: 0.8,
      zIndex: 0,
    }}
  ></div>

  {/* Front layer (main image shape) */}
  <div
    className="overflow-hidden shadow-lg relative z-10"
    style={{
      borderRadius: "0% 35% 0% 35% / 0% 35% 0% 35%",
      width: "300px",
      height: "380px",
      background: "linear-gradient(180deg, #e63939, #a60f0f)",
    }}
  >
    <img
      src={typeof ctaimg === 'string' ? ctaimg : ctaimg.src}
      alt="Digital Marketing Direction"
      className="w-full h-full object-cover"
    />
  </div>
</div>


        {/* Right Side Content */}
        <div className="space-y-6 text-left -ml-20">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Are You Planning to Start Your Digital Marketing Course Journey?{" "}
            <span className="block">But confused about which digital marketing course is right for you?</span>
          </h2>

          <p className="text-lg text-gray-200 font-medium">
            Take the first step towards a high-growth career with a free,
            personalized demo session at iDigital Studies, Noida.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <BookingDialog>
              <Button
                size="lg"
                className="bg-[#EA2525] hover:bg-[#d92020] text-white rounded-md px-8 py-5 text-lg font-semibold 
                           transition-all duration-300 hover:scale-105 hover:shadow-lg focus:ring-2 focus:ring-[#EA2525]/50"
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
                         transition-all duration-300 hover:scale-105 hover:shadow-md focus:ring-2 focus:ring-green-500/50"
            >
               <a
              href="https://wa.me/919315471293"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2 text-sm font-medium text-green-600 border border-green-600 bg-white rounded-md hover:bg-[#25D366] hover:text-white transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.52 3.48A11.76 11.76 0 0 0 12 0C5.372 0 0 5.373 0 12c0 2.11.553 4.151 1.6 5.956L0 24l6.19-1.63A11.86 11.86 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.18-1.239-6.17-3.48-8.52zM12 21.75c-1.911 0-3.798-.5-5.444-1.44l-.39-.22-3.676.97.984-3.582-.25-.37A9.69 9.69 0 0 1 2.25 12c0-5.376 4.374-9.75 9.75-9.75S21.75 6.624 21.75 12 17.376 21.75 12 21.75zm5.174-7.703c-.279-.14-1.648-.813-1.903-.904-.255-.093-.44-.14-.626.14s-.717.904-.88 1.09c-.162.187-.325.21-.603.07s-1.175-.433-2.238-1.382c-.827-.737-1.385-1.646-1.547-1.923-.162-.28-.017-.431.123-.57.127-.125.28-.325.42-.487.14-.162.187-.28.28-.467.094-.187.047-.35-.023-.488-.07-.14-.627-1.514-.86-2.07-.226-.54-.455-.47-.627-.478-.162-.007-.35-.01-.538-.01a1.033 1.033 0 0 0-.75.35c-.26.28-1.01.985-1.01 2.397 0 1.41 1.035 2.77 1.18 2.96.14.187 2.036 3.11 4.938 4.365.69.298 1.228.475 1.647.607.692.22 1.322.188 1.82.114.555-.082 1.648-.673 1.88-1.322.233-.65.233-1.207.162-1.322-.07-.114-.256-.187-.533-.326z" />
              </svg>
              +91 93154 71293
            </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaDigitalMarketing;
