"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle, X, Sparkles, CheckCircle2 } from "lucide-react";

export default function StickyWidgets() {
  const [toastVisible, setToastVisible] = useState(false);
  const [toastIndex, setToastIndex] = useState(0);

  const notifications = [
    { name: "Ankit G.", city: "New Delhi", course: "Data Analytics Master Course", time: "3 mins ago" },
    { name: "Esha N.", city: "Bengaluru", course: "PG Diploma in Digital Marketing With AI", time: "8 mins ago" },
    { name: "Sujata P.", city: "Mumbai", course: "Financial Modeling Master Course", time: "12 mins ago" },
    { name: "Gaurav P.", city: "Pune", course: "UI UX Design Master Course", time: "16 mins ago" },
    { name: "Chandan M.", city: "Hyderabad", course: "PG Diploma in Advanced Analytics & Agentic AI", time: "22 mins ago" },
  ];

  useEffect(() => {
    // Show toast after 4 seconds, then rotate every 12 seconds
    const initialTimer = setTimeout(() => {
      setToastVisible(true);
    }, 4000);

    const interval = setInterval(() => {
      setToastVisible(false);
      setTimeout(() => {
        setToastIndex((prev) => (prev + 1) % notifications.length);
        setToastVisible(true);
      }, 1000);
    }, 12000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [notifications.length]);

  const current = notifications[toastIndex];

  return (
    <>
      {/* 1. Live Social Proof Toast Notification (Desktop & Tablet) */}
      {toastVisible && (
        <div className="fixed bottom-20 left-4 sm:bottom-6 sm:left-6 z-40 max-w-sm bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3.5 shadow-2xl animate-in slide-in-from-bottom duration-300">
          <div className="flex items-start justify-between gap-3">
            <div className="h-9 w-9 rounded-full bg-[#fe4759]/15 flex items-center justify-center text-[#fe4759] shrink-0 font-bold text-xs">
              {current.name.split(" ")[0][0]}
            </div>

            <div className="flex-1 min-w-0 pr-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 truncate">
                <span>{current.name}</span>
                <span className="text-[10px] font-normal text-slate-400">from {current.city}</span>
              </div>
              <p className="text-[11px] text-[#fe4759] font-semibold line-clamp-1 mt-0.5">
                Enrolled in {current.course}
              </p>
              <div className="flex items-center gap-1 text-[9.5px] text-slate-400 mt-0.5">
                <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                <span>Verified Admission • {current.time}</span>
              </div>
            </div>

            <button
              onClick={() => setToastVisible(false)}
              className="text-slate-400 hover:text-slate-600 p-0.5"
              aria-label="Close notification"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* 2. Floating WhatsApp Button (Desktop) */}
      <aside aria-label="Support and Quick Contact" className="hidden md:block fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/919315471293"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs rounded-full shadow-xl shadow-green-500/20 hover:scale-105 transition-all group"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span>Chat on WhatsApp</span>
        </a>
      </aside>

      {/* 3. Mobile Sticky Bottom Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="grid grid-cols-2 gap-2">
          <a
            href="tel:+919315471293"
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-900 text-white font-bold text-xs shadow-sm"
          >
            <Phone className="w-4 h-4 text-[#fe4759]" />
            <span>Call Now</span>
          </a>

          <a
            href="https://wa.me/919315471293"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#25D366] text-white font-bold text-xs shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
