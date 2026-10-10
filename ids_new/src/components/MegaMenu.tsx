"use client";

import Link from "next/link";
import { X } from "lucide-react";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDemoModal?: () => void;
}

export interface IDSCourse {
  id: string;
  title: string;
  category: string;
  badge: string;
  duration: string;
  mode: string;
  desc: string;
  affiliation: string;
  slug: string;
}

export const idsCourses: IDSCourse[] = [
  {
    id: "master",
    title: "Master in Digital Marketing Course",
    category: "Advanced Master Track",
    badge: "Flagship Program",
    duration: "6 Months",
    mode: "Online / Offline",
    desc: "Full-stack digital marketing with Generative AI, Advanced SEO, Meta & Google Ads, and 10+ live client projects.",
    affiliation: "NSDC / Medhavi Univ",
    slug: "/courses/master-in-digital-marketing",
  },
  {
    id: "specialist",
    title: "Digital Marketing Specialist Course",
    category: "Specialist Track",
    badge: "Fast-Track",
    duration: "3 Months",
    mode: "Online / Offline",
    desc: "Intensive tactical sprint covering Performance Marketing, Paid Media scaling, CRO, and verified portfolio building.",
    affiliation: "MSME Certified",
    slug: "/courses/digital-marketing-specialist",
  },
  {
    id: "business-owners",
    title: "Digital Marketing Course for Business Owners",
    category: "Executive Track",
    badge: "1:1 Mentorship",
    duration: "Custom Timeline",
    mode: "Online (1:1)",
    desc: "Personalized executive coaching for founders and business leaders to scale direct leads, CAC reduction, and sales.",
    affiliation: "MSME",
    slug: "/courses/digital-marketing-for-business-owners",
  },
  {
    id: "customised",
    title: "Customised Course in Digital Marketing",
    category: "Tailored Track",
    badge: "Modular Choice",
    duration: "Flexible Timeline",
    mode: "Online / Offline",
    desc: "Tailored curriculum structured around your target career goal — choose specific modules in SEO, PPC, or Growth Analytics.",
    affiliation: "MSME",
    slug: "/courses/customised-course-in-digital-marketing",
  },
];

export default function MegaMenu({ isOpen, onClose, onOpenDemoModal }: MegaMenuProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-slate-900/25 backdrop-blur-[2px] z-40 transition-opacity duration-200"
        onClick={onClose}
      />

      {/* Floating Mega Dropdown Panel for All 4 Courses */}
      <div className="absolute top-full left-0 right-0 max-w-[1400px] w-full mx-auto mt-2 z-50 px-4 sm:px-6 lg:px-8 animate-in fade-in slide-in-from-top-2 duration-200">
        <div className="bg-white border border-slate-200/90 shadow-2xl rounded-2xl p-5 sm:p-7 max-h-[calc(100vh-100px)] overflow-y-auto">
          
          {/* Top Header Bar without icons */}
          <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100 flex-wrap gap-3">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">
                  Our 4 Certified Digital Marketing Programs
                </h3>
                <span className="text-[11px] font-bold text-[#fe4759] bg-rose-50 border border-rose-100 px-2.5 py-0.5 rounded-full">
                  Official Curriculum
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                100% Practical Training • Live Ad Budgets • Govt. Recognized Certifications (MSME / NSDC / Medhavi Univ)
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="tel:+919315471293"
                className="hidden sm:inline-flex items-center text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-xl transition-colors"
              >
                +91 9315471293
              </a>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenDemoModal?.();
                }}
                className="inline-flex items-center text-xs font-bold text-white bg-[#fe4759] hover:bg-[#e0384a] px-4 py-2 rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                Book Free Demo
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* 4 Courses Grid: 2 by 2 balanced clean layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {idsCourses.map((course) => (
              <Link
                key={course.id}
                href={course.slug}
                onClick={onClose}
                className="group relative bg-white border border-slate-200/90 hover:border-[#fe4759]/60 hover:shadow-xl hover:shadow-rose-500/5 rounded-2xl p-5 sm:p-6 transition-all duration-200 flex flex-col justify-between hover:-translate-y-0.5"
              >
                <div>
                  {/* Track Badge, Tag & Duration */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#fe4759] bg-rose-50 border border-rose-100/80 px-2.5 py-1 rounded-md">
                        {course.category}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-600 bg-slate-100 border border-slate-200/60 px-2 py-0.5 rounded-md">
                        {course.badge}
                      </span>
                    </div>

                    <span className="text-[11px] font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-md shrink-0">
                      {course.duration}
                    </span>
                  </div>

                  {/* Course Title */}
                  <h4 className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-[#fe4759] transition-colors mb-2">
                    {course.title}
                  </h4>

                  {/* Mode & Affiliation */}
                  <div className="flex items-center gap-2 mb-2.5 text-[11px] text-slate-500">
                    <span className="font-medium text-slate-700 bg-slate-50 border border-slate-200/70 px-2 py-0.5 rounded">
                      {course.mode}
                    </span>
                    <span>•</span>
                    <span className="font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      {course.affiliation}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {course.desc}
                  </p>
                </div>

                {/* Bottom Row: Clean View Details action */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-medium text-slate-400">
                    Industry Certified
                  </span>

                  <span className="text-xs font-bold text-[#fe4759] group-hover:underline inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    View Details
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
