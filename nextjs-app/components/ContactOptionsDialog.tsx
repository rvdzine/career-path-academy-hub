"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const PHONE_NUMBER = "+91 93154 71293";
const PHONE_DIAL = "tel:+919315471293";
const WHATSAPP_LINK = "https://wa.me/919315471293";

interface ContactOptionsDialogProps {
  children: React.ReactNode;
}

export default function ContactOptionsDialog({
  children,
}: ContactOptionsDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="sm:max-w-md rounded-2xl p-0 overflow-hidden border-0 shadow-2xl">
        {/* Header */}
        <DialogHeader className="bg-[#EA2525] px-6 py-5 text-left">
          <DialogTitle className="text-white text-xl font-bold">
            Get in Touch
          </DialogTitle>
          <p className="text-red-100 text-sm mt-1">
            Choose how you&apos;d like to reach us
          </p>
        </DialogHeader>

        {/* Options */}
        <div className="flex flex-col gap-4 px-6 py-6">

          {/* WhatsApp Option */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl border-2 border-[#25D366] bg-[#25D366]/5 hover:bg-[#25D366]/10 transition-all duration-200 group"
          >
            {/* WhatsApp Icon */}
            <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.52 3.48A11.76 11.76 0 0 0 12 0C5.372 0 0 5.373 0 12c0 2.11.553 4.151 1.6 5.956L0 24l6.19-1.63A11.86 11.86 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.18-1.239-6.17-3.48-8.52zM12 21.75c-1.911 0-3.798-.5-5.444-1.44l-.39-.22-3.676.97.984-3.582-.25-.37A9.69 9.69 0 0 1 2.25 12c0-5.376 4.374-9.75 9.75-9.75S21.75 6.624 21.75 12 17.376 21.75 12 21.75zm5.174-7.703c-.279-.14-1.648-.813-1.903-.904-.255-.093-.44-.14-.626.14s-.717.904-.88 1.09c-.162.187-.325.21-.603.07s-1.175-.433-2.238-1.382c-.827-.737-1.385-1.646-1.547-1.923-.162-.28-.017-.431.123-.57.127-.125.28-.325.42-.487.14-.162.187-.28.28-.467.094-.187.047-.35-.023-.488-.07-.14-.627-1.514-.86-2.07-.226-.54-.455-.47-.627-.478-.162-.007-.35-.01-.538-.01a1.033 1.033 0 0 0-.75.35c-.26.28-1.01.985-1.01 2.397 0 1.41 1.035 2.77 1.18 2.96.14.187 2.036 3.11 4.938 4.365.69.298 1.228.475 1.647.607.692.22 1.322.188 1.82.114.555-.082 1.648-.673 1.88-1.322.233-.65.233-1.207.162-1.322-.07-.114-.256-.187-.533-.326z" />
              </svg>
            </div>

            {/* Text */}
            <div className="flex-1">
              <p className="font-bold text-gray-900 text-base">
                Chat on WhatsApp
              </p>
              <p className="text-gray-500 text-sm mt-0.5">
                Get an instant reply — usually within minutes
              </p>
            </div>

            {/* Arrow */}
            <svg
              className="w-5 h-5 text-[#25D366] group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>

          {/* Call Option */}
          <a
            href={PHONE_DIAL}
            className="flex items-center gap-4 p-4 rounded-xl border-2 border-[#EA2525] bg-[#EA2525]/5 hover:bg-[#EA2525]/10 transition-all duration-200 group"
          >
            {/* Phone Icon */}
            <div className="w-12 h-12 bg-[#EA2525] rounded-full flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6.62 10.79a15.53 15.53 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
              </svg>
            </div>

            {/* Text */}
            <div className="flex-1">
              <p className="font-bold text-gray-900 text-base">Call Us Now</p>
              <p className="text-[#EA2525] font-semibold text-base mt-0.5">
                {PHONE_NUMBER}
              </p>
            </div>

            {/* Arrow */}
            <svg
              className="w-5 h-5 text-[#EA2525] group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>

          {/* Footer note */}
          <p className="text-center text-gray-400 text-xs pt-1">
            Mon – Sat · 9 AM to 7 PM IST
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
