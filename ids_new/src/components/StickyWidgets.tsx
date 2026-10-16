"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle, X } from "lucide-react";
import api from "@/lib/api";

interface EnrolledToastItem {
  name: string;
  course: string;
}

const DEFAULT_ENROLLMENTS: EnrolledToastItem[] = [
  { name: "Sneha J.", course: "Master in Digital Marketing Course" },
  { name: "Jaiaditya N.", course: "Master in Digital Marketing with AI & Automation" },
  { name: "Abhishek S.", course: "Master in Digital Marketing with AI & Automation" },
  { name: "Ravi S.", course: "Master in Digital Marketing with AI & Automation" },
  { name: "Ashutosh", course: "Master in Digital Marketing with AI & Automation" },
  { name: "Lalit N.", course: "Master in Digital Marketing with AI & Automation" },
  { name: "Ankita T.", course: "Advance Performance & Growth Marketing Program" },
  { name: "Kushal G.", course: "Master in Digital Marketing with AI & Automation" },
  { name: "Chandan M.", course: "Master in Digital Marketing with AI & Automation" },
];

export default function StickyWidgets() {
  const [toastVisible, setToastVisible] = useState(false);
  const [toastIndex, setToastIndex] = useState(0);
  const [notifications, setNotifications] = useState<EnrolledToastItem[]>(DEFAULT_ENROLLMENTS);

  useEffect(() => {
    let isMounted = true;
    const fetchRecentEnrollments = async () => {
      try {
        const res = await api.get("/students/recent-enrollments/");
        if (isMounted && res.data && Array.isArray(res.data) && res.data.length > 0) {
          setNotifications(res.data);
        }
      } catch (err) {
        // Silently use defaults if API is temporarily unavailable
      }
    };

    fetchRecentEnrollments();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (notifications.length === 0) return;

    // Show toast after 3.5 seconds, then cycle every 10 seconds
    const initialTimer = setTimeout(() => {
      setToastVisible(true);
    }, 3500);

    const interval = setInterval(() => {
      setToastVisible(false);
      setTimeout(() => {
        setToastIndex((prev) => (prev + 1) % notifications.length);
        setToastVisible(true);
      }, 900);
    }, 10000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [notifications.length]);

  const current = notifications[toastIndex] || notifications[0];

  return (
    <>
      {/* 1. Live Social Proof Toast Notification (Desktop & Tablet) */}
      {toastVisible && current && (
        <div className="hidden sm:block fixed sm:bottom-6 sm:left-6 z-40 max-w-sm bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3.5 shadow-2xl animate-in slide-in-from-bottom duration-300">
          <div className="flex items-center justify-between gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#fe4759]/20 to-[#fe4759]/10 border border-[#fe4759]/25 flex items-center justify-center text-[#fe4759] shrink-0 font-extrabold text-sm shadow-2xs">
              {current.name ? current.name.charAt(0).toUpperCase() : "S"}
            </div>

            <div className="flex-1 min-w-0 pr-1">
              <div className="text-xs font-bold text-slate-900 truncate">
                {current.name}
              </div>
              <p className="text-[11px] text-[#fe4759] font-medium line-clamp-1 mt-0.5">
                Enrolled in {current.course}
              </p>
            </div>

            <button
              onClick={() => setToastVisible(false)}
              className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors"
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
