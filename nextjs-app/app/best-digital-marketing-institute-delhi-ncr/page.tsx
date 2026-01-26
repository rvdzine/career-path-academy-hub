"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import axios from "axios";
import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import EnrollmentDialog from "@/components/EnrollmentDialog";
import DemoBookingDialog from "@/components/DemoBookingDialog";
// import { Badge } from "lucide-react";
import {
  Trophy,
  Video,
  CreditCard,
  Award,
  Users,
  Code2,
  MessageCircle,
  HelpCircle,
  Brain,
  Compass,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { useSuccessModal } from "@/hooks/use-success-modal";
import api from '@/lib/axios';
import Lottie from "lottie-react";
import courseAnimation1 from "@/public/assets/Animations/1.1.json";
import courseAnimation2 from "@/public/assets/Animations/2.json";
import courseAnimation4 from "@/public/assets/Animations/4.json";

// SVG icons
const chimg3 = "/svg/chimg3.svg";
const chimg4 = "/svg/clipboard.svg";
const chimg6 = "/svg/verify.svg";

// Course data matching /courses page
type CourseKey = "Master Course" | "Specialist Course" | "Custom Course";

const courseData: Record<CourseKey, any> = {
  "Master Course": {
    tag: "AI Driven",
    title: "Master in Digital Marketing Course at Institute of Digital Studies",
    animation: courseAnimation1,
    duration: "6 Months",
    mode: "Off/Online",
    badge: "Hinglish",
    salary: "₹8.5 LPA",
    internship: "3 Months",
    certification: "Certification",
    projects: "10+ Live Projects",
    content:
      "Our 6-Month Digital Marketing Course with 100% Internship provides hands-on experience in SEO, SEM, social media, content marketing, and more.",
  },
  "Specialist Course": {
    tag: "AI Driven",
    title: "Digital Marketing Specialist Course at Institute of Digital Studies",
    animation: courseAnimation2,
    duration: "3 Months",
    mode: "Off/Online",
    badge: "Hinglish",
    salary: "₹6.2 LPA",
    certification: "Certification",
    projects: "5+ Live Projects",
    content:
      "In-depth Digital Marketing training covering SEO, PPC, social media, email marketing, and analytics with live projects.",
  },
  "Custom Course": {
    tag: "AI Driven",
    title: "Customised Course in Digital Marketing",
    animation: courseAnimation4,
    duration: "Customised Timeline",
    mode: "Off/Online",
    badge: "Hinglish/English",
    salary: "Depends on Skills",
    certification: "Certification",
    projects: "Custom Projects",
    content:
      "A completely customized digital marketing program designed according to your goals, skills, and learning pace.",
  },
};

// Badge Component
const BadgeComponent = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-[#FFF2F2] rounded">
    {children}
  </div>
);

// Info Box Component
const Info = ({
  label,
  value,
  isSalary = false,
}: {
  label: string;
  value: string;
  isSalary?: boolean;
}) => {
  const showDisclaimer = isSalary && !value.toLowerCase().includes("depend");

  return (
    <div className="border rounded-lg p-3 text-center">
      <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
        {label}
        {isSalary && <span className="text-red-500 font-bold">*</span>}
      </p>
      <p className="font-bold">{value}</p>
      {showDisclaimer && (
        <p className="text-[10px] text-gray-400 mt-1">Depends on skills</p>
      )}
    </div>
  );
};

// ImageCarousel Component
function ImageCarousel() {
  const images = [
    // {
    //   src: "/assets/gallery2.webp",
    //   alt: "Institute of Digital Studies Delhi Ncr - Students Receiving Certificates 1",
    // },
    // {
    //   src: "/assets/gallery12.png",
    //   alt: "Institute of Digital Studies Delhi Ncr - Students Receiving Certificates 2",
    // },
    // {
    //   src: "/assets/gallery5.webp",
    //   alt: "Institute of Digital Studies Delhi Ncr - Students Receiving Certificates 3",
    // },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full overflow-hidden group">
      {/* <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <Image
              src={image.src}
              alt={image.alt}
              width={1920}
              height={400}
              className="w-full  object-cover sm:h-[200px] md:h-[400px] lg:h-[400px] xl:h-[400px]"
              priority={index === 0}
            />
          </div>
        ))}
      </div> */}

      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-800 hover:bg-white hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 sm:opacity-100 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-800 hover:bg-white hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 sm:opacity-100 z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? "bg-white w-6 sm:w-8 h-2.5 sm:h-3"
                : "bg-white/60 w-2.5 sm:w-3 h-2.5 sm:h-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function BestDigitalMarketingInstitute() {
  // Form State for Counselling Section (matching Contact page)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    experience: "",
  });

  const [loading, setLoading] = useState(false);
  const { showSuccess, SuccessModal } = useSuccessModal();

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await api.post("contact/contact/", {
        full_name: formData.name,
        email: formData.email,
        phone: formData.phone,
        interested_courses: formData.course,
        experience: formData.experience,
        message: "",
      });

      if (response.status === 201) {
        showSuccess({
          title: "Thank You!",
          description:
            "Your details have been submitted successfully. We'll contact you within 24 hours.",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          course: "",
          experience: "",
        });
      }
    } catch (error: any) {
      const errorMsg =
        error?.response?.data?.non_field_errors?.[0] ||
        error?.response?.data?.email?.[0] ||
        "Something went wrong. Please try again.";

      alert(`Error: ${errorMsg}`);
    } finally {
      setLoading(false);
    }
  };

  // Handler for "For More Details" button clicks
  // const handleCourseDetailsClick = async (courseTitle: string) => {
  //   try {
  //     await api.post("contact/contact/", {
  //       full_name: "Course Details Request",
  //       email: "details@request.com",
  //       phone: "0000000000",
  //       interested_courses: courseTitle,
  //       experience: "Inquiry",
  //       message: `User clicked 'For More Details' for: ${courseTitle}`,
  //     });
  //   } catch (error) {
  //     console.error("Error logging course details click:", error);
  //   }
  // };

  return (
    <>
      <SuccessModal />
      <Navbar />
      {/* HERO CAROUSEL */}
      <div className="w-full relative">
        <ImageCarousel />
      </div>

      {/* HERO GRADIENT */}
      <section className="w-full bg-gradient-to-br from-red-950 via-red-700 to-rose-800 text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center relative">
          <div className="absolute inset-0"></div>

          {/* ========= Updated H1 as per your request ========= */}
          <h1 className="relative text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-rose-100 to-orange-100 drop-shadow-lg">
            AI-Powered Best Digital Marketing Institute in Delhi NCR
            </span>
          </h1>

          {/* ========= New Cockpit Description Added ========= */}
          <p className="relative text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl mx-auto text-gray-100 leading-relaxed font-medium opacity-95 px-4 mt-6">
          Join iDigitalStudies is one of the the Best Digital Marketing 
          Institute in Delhi Ncr. Learn SEO, Social Media, Google Ads & more with expert trainers and 
          hands-on projects.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="w-full bg-gradient-to-r #FFEFEF text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <div className="bg-white backdrop-blur-md border rounded-t-lg sm:rounded-2xl p-2 sm:p-8 md:p-10 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                  <svg
                    className="w-7 h-7 sm:w-8 sm:h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.953a1 1 0 00.95.69h4.16c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.953c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.287-3.953a1 1 0 00-.364-1.118L2.98 9.38c-.783-.57-.38-1.81.588-1.81h4.16a1 1 0 00.95-.69l1.286-3.953z" />
                  </svg>
                </div>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-bold leading-tight text-black">
                Digital Marketing Course For Transforming Your Career with
                  <span className="block text-black">Modern AI Generation</span>
                </h1>
              </div>
            </div>
            <div className="space-y-3 text-left">
              <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed font-medium">
                Upgrade{" "}
                <strong className="text-black">
                  your career with Institute of Digital Studies,
                </strong>{" "}
                – the Best Digital Marketing Institute in Delhi Ncr. Expert
                mentors, live projects & 100% practical learning.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed">
                Learn <strong>SEO, Social Media, Google Ads & more</strong> with
                expert trainers and hands-on projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-white dark:from-gray-900 dark:via-gray-850 dark:to-gray-800 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-3xl font-bold bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600 mb-6 sm:mb-4">
              Why Choose Institute of Digital Studies?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Do you lack the skills you need to move ahead? Now, you can become a digital marketing specialist without leaving your job. Boost your career with the Delhi Institute of Digital Marketing. A place to learn digital marketing from Executive Level to Manager Level in all practical ways. The high demand for a digital marketing course is best suited for working professionals, job seekers, freelancers, students, and entrepreneurs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "10+ Years of Experience",
                desc: "A decade of proven training expertise...",
                gradient: "from-pink-500 to-rose-500",
                icon: Trophy,
              },
              {
                title: "Live + Recorded Lectures",
                desc: "Flexibility to attend live sessions...",
                gradient: "from-purple-500 to-pink-500",
                icon: Video,
              },
              {
                title: "Affordable Fees with No Cost EMI",
                desc: "Learn without financial stress...",
                gradient: "from-emerald-500 to-teal-500",
                icon: CreditCard,
              },
              {
                title: "Industry-Recognized Certifications",
                desc: "Credentials that strengthen your resume...",
                gradient: "from-amber-500 to-orange-500",
                icon: Award,
              },
              {
                title: "Experienced Trainers",
                desc: "Learn directly from seasoned professionals...",
                gradient: "from-indigo-500 to-purple-500",
                icon: Users,
              },
              {
                title: "Hands-on Practical Exposure",
                desc: "Work on real-world projects...",
                gradient: "from-rose-500 to-pink-500",
                icon: Code2,
              },
              {
                title: "Interview Preparation Support",
                desc: "Get guidance on resume building...",
                gradient: "from-cyan-500 to-blue-500",
                icon: MessageCircle,
              },
              {
                title: "Dedicated Doubt Sessions",
                desc: "One-on-one and group doubt clearing...",
                gradient: "from-lime-500 to-emerald-500",
                icon: HelpCircle,
              },
              {
                title: "AI Driven Updated Curriculum",
                desc: "Always aligned with latest AI trends...",
                gradient: "from-violet-500 to-purple-500",
                icon: Brain,
              },
              {
                title: "Career Guidance & Mentorship",
                desc: "Personalized career counseling...",
                gradient: "from-fuchsia-500 to-pink-500",
                icon: Compass,
              },
              {
                title: "Placement Assistance",
                desc: "End-to-end support to land your dream job...",
                gradient: "from-red-500 to-rose-500",
                icon: Briefcase,
              },
              {
                title: "Alumni Success Network",
                desc: "Join a thriving community of professionals...",
                gradient: "from-sky-500 to-indigo-500",
                icon: GraduationCap,
              },
            ].map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-pink-100 dark:border-pink-900/50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500 bg-gradient-to-br ${feature.gradient}`}
                  />

                  <div className="relative flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br ${feature.gradient} p-3 shadow-lg group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}
                    >
                      <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                        {feature.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 h-1 w-0 group-hover:w-full bg-gradient-to-r from-pink-500 to-rose-500 rounded-full transition-all duration-700" />
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Trusted by{" "}
              <span className="font-bold text-pink-600 text-2xl">5,000+</span>{" "}
              students & professionals
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Benefits of Online Digital Marketing Course – Delhi Ncr
            </h2>
            <p className="mt-2 sm:mt-3 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              Industry-aligned curriculum, live projects, and 100% placement
              support.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-xl overflow-hidden">
            <div className="p-5 sm:p-8 md:p-10">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-4 sm:gap-y-6">
                {[
                  "Flexible Online Batches – Learn anytime with weekday/weekend options.",
                  "Live Interactive Classes – Learn directly from expert trainers.",
                  "LMS Access – Recorded sessions, notes, and study material available 24/7.",
                  "E-Notes & Resources – Easy-to-understand study materials for quick revision.",
                  "Practical Assignments – Hands-on training with real digital marketing tools.",
                  "Live Projects – Work on real campaigns for practical experience.",
                  "Internship & Placement Support – Get job assistance and industry connections.",
                  "30+ Certifications – Earn Google, HubSpot, Facebook, and IDS certificates.",
                  "2 Months Practical Exposure – Work on live projects guided by industry experts.",
                ].map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2.5 sm:gap-3 group"
                  >
                    <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mt-0.5 group-hover:bg-emerald-600 dark:group-hover:bg-emerald-500 transition-colors duration-200">
                      <svg
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 dark:text-emerald-300 group-hover:text-white transition-colors duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-200 text-sm sm:text-base leading-relaxed font-medium">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950 px-4 sm:px-6 py-3 sm:py-4 text-center border-t border-emerald-100 dark:border-emerald-800">
              <p className="text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                Rated{" "}
                <span className="text-emerald-800 dark:text-emerald-300">
                  4.9/5
                </span>{" "}
                by{" "}
                <span className="underline decoration-emerald-600 dark:decoration-emerald-400">
                  1,200+
                </span>{" "}
                students in Delhi Ncr
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRAINING SCHEDULE */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-850 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12 items-center">
              <div className="text-left">
                <h1 className="text-4xl font-bold  bg-clip-text bg-gradient-to-r from-black-600    ">
                  Digital Marketing Course Training Schedule
                </h1>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold "></h1>
                <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-4xl font-bold ">
                  Delhi Ncr
                </h1>
              </div>
              <div className="text-right md:text-left">
                <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg border border-blue-100 dark:border-blue-900">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center justify-center md:justify-start gap-2">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    Delhi Ncr
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-3 sm:mb-4">
                    Sessions run <span className="font-bold">all day</span> with
                    full flexibility
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-4 text-xs sm:text-sm">
                    <span className="flex items-center gap-1 text-blue-600 dark:text-blue-400">
                      <svg
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>{" "}
                      Multiple Batches
                    </span>
                    <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                      <svg
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>{" "}
                      Online & Offline
                    </span>
                    <span className="flex items-center gap-1 text-purple-600 dark:text-purple-400">
                      <svg
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>{" "}
                      Full Flexibility
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-10 sm:mb-12">
              <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg border border-blue-100 dark:border-blue-900">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Schedule & Batches
                </h3>
                <ul className="space-y-2 sm:space-y-3 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  <li>
                    <strong>Training Centre Timing:</strong> 9:00 AM – 9:00 PM
                  </li>
                  <li>
                    <strong>Batch Type:</strong> Weekdays | Weekends
                  </li>
                  <li>
                    <strong>Training Mode:</strong> In-Class | Online
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg border border-emerald-100 dark:border-emerald-900">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Who Can Join?
                </h3>
                <ul className="space-y-2 sm:space-y-3 text-gray-700 dark:text-gray-300 text-xs sm:text-sm">
                  <li>
                    <strong>Education:</strong> Any Level
                  </li>
                  <li>
                    <strong>Technical Skill:</strong> Basic (Smartphone +
                    Internet)
                  </li>
                  <li>
                    <strong>Profiles:</strong> Professionals, Job Seekers,
                    Housewives, Students, Freelancers
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950 dark:to-pink-950 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-8 sm:mb-10 shadow-lg border border-red-100 dark:border-red-800">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-5 sm:mb-6 text-center">
                Available Course Levels
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                {[
                  "Master In Digital Marketing (MIDM)",
                  "Advanced Internet Marketing (AIMTP)",
                  "Customised Professional Course",
                ].map((course, i) => (
                  <div
                    key={i}
                    className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 text-center "
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-full bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="font-semibold text-gray-800 dark:text-gray-200 text-xs sm:text-sm">
                      {course}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 text-center sm:text-left">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                    <svg
                      className="w-10 h-10 sm:w-12 sm:h-12 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                </div>
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed flex-1">
                  <strong className="text-red-600 dark:text-red-400">
                    Institute of Digital Studies 
                  </strong>{" "}
                  was awarded <strong>"Most Promising Brand"</strong> by{" "}
                  <strong>Assocham</strong>. We are <strong>ISO 9001</strong>{" "}
                  certified and registered under{" "}
                  <strong>MSME (Govt. of India)</strong>. Get{" "}
                  <strong>industry-expert training</strong> at our Delhi Ncr         
                  centre.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOOK COUNSELLING - WITH API INTEGRATION */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-gray-850 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-14">
              <h2 className="text-4xl   font-bold bg-clip-text bg-gradient-to-r from-black to-purple-700">
                Book Your Free Counselling & Start Your Journey
              </h2>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto px-4">
                <strong className="">
                  5,000+ students
                </strong>{" "}
                who transformed their careers with{" "}
                <strong>Institute of Digital Studies</strong>.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start">
              {/* LEFT: Form matching Contact page */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 border border-blue-100 dark:border-purple-900">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-5 sm:mb-6 text-center lg:text-left">
                  Fill Details for Free Counselling
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Full Name *"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
                        required
                        disabled={loading}
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="Phone Number *"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
                        required
                        disabled={loading}
                      />
                    </div>
                  </div>

                  <div>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="Email Address *"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
                      required
                      disabled={loading}
                    />
                  </div>

                  <div>
                    <select
                      value={formData.course}
                      onChange={(e) => handleInputChange("course", e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
                      required
                      disabled={loading}
                    >
                      <option value="">Select a course</option>
                      <option value="master_dm_internship">Master in DM with Internship</option>
                      <option value="specialist_dm">Specialist in DM</option>
                      <option value="dm_business_owners">DM for Business Owners</option>
                      <option value="foundation_basic_dm">Foundation/Basic in DM Course</option>
                      <option value="custom_dm">Custom DM Course</option>
                    </select>
                  </div>

                  <div>
                    <select
                      value={formData.experience}
                      onChange={(e) => handleInputChange("experience", e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
                      disabled={loading}
                    >
                      <option value="">Select your experience level</option>
                      <option value="fresher_student">Fresher/Student</option>
                      <option value="working_professional">Working Professional / Career Switchers</option>
                      <option value="business_owner">Business Owner</option>
                      <option value="freelancer">Freelancers / Remote Jobs Seekers</option>
                      <option value="home_maker">Home Makers</option>
                      <option value="others">Others</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-[#EA2525] to-[#AA2526] hover:from-[#AA2526] hover:to-[#EA2525] text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {loading ? "Submitting..." : "Submit & Get Free Counseling"}
                  </button>
                </form>

                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4 text-emerald-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    ISO 9001 Certified
                  </span>
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4 text-emerald-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    MSME Registered
                  </span>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="flex flex-col justify-center space-y-6 sm:space-y-8">
                <div className="bg-gradient-to-r text-black rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                    Ready to Launch Your Career?
                  </h3>
                  <p className="text-base sm:text-lg mb-5 sm:mb-6 opacity-90">
                    Secure your seat today and get:
                  </p>
                  <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                    {[
                      "Free 1-on-1 Counselling Session",
                      "100% Placement Assistance",
                      "30+ Industry Certifications",
                      "Live Projects & Internship",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2.5 sm:gap-3"
                      >
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                  {/* <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center bg-white text-black font-bold py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg sm:rounded-xl hover:bg-gray-100 transition text-sm sm:text-base"
                    >
                      Book Free Counselling
                    </a>
                    <a
                      href="/courses"
                      className="inline-flex items-center justify-center border-2 text-white bg-[#ea2525] font-bold py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg sm:rounded-xl text-sm sm:text-base"
                    >
                      View All Courses
                    </a>
                  </div> */}
                </div>

                <div className="grid grid-cols-3 gap-3 sm:gap-4 text-center">
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">
                      5K+
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      Students Trained
                    </div>
                  </div>
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow">
                    <div className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400">
                      95%
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      Placement Rate
                    </div>
                  </div>
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow">
                    <div className="text-2xl sm:text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                      4.9
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      Student Rating
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="text-black py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold">
              Digital Marketing Course in Delhi NCR
            </h1>
            <p className="mt-4">
              Forget dusty classrooms and theory-heavy lectures. At{" "}
              <strong>Institute of Digital Studies</strong>, you jump straight into the
              action. From crafting your first ad campaign to fine-tuning
              conversions, every lesson is built for real-world, hands-on
              application.
            </p>
          </div>
        </section>

        {/* Three Courses – Left | Center | Right – No Boxes */}
        <section className="py-4 px-6">
          <div className="mx-auto">
            <div className="px-28 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              {/* Left: Masters Course */}
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-2xl font-bold text-gray-800 leading-tight">
                  Masters in Digital Marketing Course
                </h3>
                <Link href = "/contact">
                <button
                  className="mt-8 px-8 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition shadow-lg"
                  >
                  For More Details →
                </button>
                  </Link>
              </div>

              {/* Center: Specialist Course */}
              <div className="flex flex-col items-center justify-center border-x-4 border-indigo-200 px-10">
                <h3 className="text-2xl font-bold text-gray-800 leading-tight">
                  Specialist in Digital Marketing Course
                </h3>
                <Link href = "/contact">
                <button
                  className="mt-8 px-8 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition shadow-lg"
                  >
                  For More Details →
                </button>
                  </Link>
              </div>

              {/* Right: Beginners Course */}
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-2xl font-bold text-gray-800 leading-tight">
                  Digital Marketing Course for Beginners
                </h3>
                <Link href = "/contact">
                <button
                  className="mt-8 px-8 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition shadow-lg"
                  >
                  For More Details →
                </button>
                  </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Classroom Highlight Box */}
        <section className="py-8 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-3xl p-12 md:p-16 text-center">
              <h2 className="text-3xl sm:xl font-bold text-gray-900 leading-snug">
                Classroom sessions let you network, ask questions on the spot,
                <br />
                and get personal mentorship from trainers who actually care
                about your growth.
              </h2>
            </div>
          </div>
        </section>
      </div>

      {/* Courses */}
      <h1 className="text-center font-bold text-4xl mb-4 mt-4">Master In Digital Marketing Course In Delhi Ncr</h1>
      <p className="text-center">Digital marketing is booming, and Delhi Ncr is buzzing with opportunities. Institute of Digital Studies equips 
you with the skills and confidence to stand out in a crowded market.</p>
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 gap-10">
          {(Object.keys(courseData) as CourseKey[]).map((key) => {
            const data = courseData[key];

            return (
              <div
                key={key}
                className="bg-white border border-gray-300 rounded-2xl shadow-lg flex flex-col md:flex-row p-6 md:p-8"
              >
                {/* Animation */}
                <div className="w-full md:w-[45%] h-[360px] flex items-center justify-center bg-[#FFF5F5] rounded-xl">
                  <Lottie
                    animationData={data.animation}
                    loop
                    autoplay
                    className="w-full h-full max-h-[420px]"
                  />
                </div>

                {/* Content */}
                <div className="md:w-[55%] md:pl-8 mt-6 md:mt-0 flex flex-col justify-between">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm w-fit mb-3">
                    {data.tag}
                  </span>

                  <h3 className="text-2xl font-bold mb-3">{data.title}</h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <BadgeComponent>
                      <img src={chimg6} className="w-4 h-4" alt="" />
                      {data.certification}
                    </BadgeComponent>
                    <BadgeComponent>
                      <img src={chimg4} className="w-4 h-4" alt="" />
                      {data.projects}
                    </BadgeComponent>
                    <BadgeComponent>
                      <img src={chimg3} className="w-4 h-4" alt="" />
                      {data.badge}
                    </BadgeComponent>
                  </div>

                  <p className="text-sm text-gray-600 mb-4">{data.content}</p>

                  {/* Info */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <Info label="Duration" value={data.duration} />
                    {data.mode && <Info label="Mode" value={data.mode} />}
                    {data.salary && <Info label="Avg Salary" value={data.salary} isSalary />}
                    {data.internship && <Info label="Internship" value={data.internship} />}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <DemoBookingDialog courseTitle={data.title}>
                      <button className="flex-1 border border-[#EA2525] text-[#EA2525] px-6 py-2 rounded-md font-medium hover:bg-[#EA2525]/10">
                        Book Free Demo Class
                      </button>
                    </DemoBookingDialog>

                    <EnrollmentDialog courseTitle={data.title}>
                      <button className="flex-1 bg-[#EA2525] text-white px-6 py-2 rounded-md font-medium hover:bg-[#c21e1e]">
                        Enroll Now
                      </button>
                    </EnrollmentDialog>
                  </div>

                  {(key === "Master Course" || key === "Specialist Course") && (
                    <p className="text-xs text-gray-500 mt-3">
                      <b>150+</b> Students enrolled last week
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="max-w-5xl mx-auto mt-6">
            <div className="rounded-3xl p-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 leading-snug">
                Students from Delhi, Gurugram, and Noida swear by the institute’s result-driven approach. 
                Here, it’s not just about finishing a course, it's about becoming industry-ready, certified, and 
                confident enough to step into a real digital marketing role. 
              </h2>
            </div>
          </div>
      </section>

      {/* 50+ MODULES */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-850 dark:to-gray-800 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 relative">
              <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                50+ Industry-Aligned Modules
              </div>

              {/* === MAIN HEADING REPLACED AS REQUESTED === */}
              <h1 className="text-4xl font-bold">
                Institute of Digital Studies offers 50+ Modules that you will learn in Our
                Digital Marketing Course
              </h1>

              <h2 className="mt-2 sm:mt-3 text-xl font-bold text-gray-800 dark:text-white">
                Institute of Digital Studies ,{" "}
                <span className="">Delhi NCR</span>
              </h2>
            </div>

            {/* === Rest of the 3 Columns (Unchanged) === */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {/* Column 1 */}
              <div className="group relative bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-xl overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 sm:h-2 bg-gradient-to-r from-blue-500 to-indigo-600" />
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 p-2.5 sm:p-3 shadow-lg mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-full h-full text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  Core Digital Strategy
                </h3>
                <ul className="space-y-2.5 sm:space-y-3">
                  {[
                    "Ice Breaker for Digital Marketing Overview",
                    "Digital Marketing Strategy",
                    "Web Designing with no codes",
                    "Practical Approach",
                    "Email Marketing",
                    "Inbound Marketing",
                    "Search Engine Optimization (SEO)",
                    "Google Webmaster Tool",
                    "Search Engine Algorithms",
                    "Local Business Listing",
                    "Google Analytics",
                  ].map((mod, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 sm:gap-3 group/item"
                    >
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900/50 dark:to-pink-900/50 flex items-center justify-center mt-0.5 group-hover/item:scale-110 transition-transform">
                        <svg
                          className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-red-600 dark:text-red-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        {mod}
                      </span>
                    </li>
                  ))}
                </ul>
                
              </div>

              {/* Column 2 */}
              <div className="group relative bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-xl  overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 sm:h-2 bg-gradient-to-r from-purple-500 to-pink-600" />
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 p-2.5 sm:p-3 shadow-lg mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-full h-full text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  Performance & Advertising
                </h3>
                <ul className="space-y-2.5 sm:space-y-3">
                  {[
                    "Competitor Analysis",
                    "Social Media Marketing",
                    "Video Marketing Fundamentals",
                    "E-commerce Marketing",
                    "Mobile Marketing",
                    "Optimization Conversion Rate",
                    "Google Adwords",
                    "Online Display Advertising",
                    "Online Reputation Management (ORM)",
                    "Creating Marketing Strategy",
                  ].map((mod, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 sm:gap-3 group/item"
                    >
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900/50 dark:to-pink-900/50 flex items-center justify-center mt-0.5 group-hover/item:scale-110 transition-transform">
                        <svg
                          className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-red-600 dark:text-red-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        {mod}
                      </span>
                    </li>
                  ))}
                </ul>
               
              </div>

              {/* Column 3 */}
              <div className="group relative bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-xl  overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 sm:h-2 bg-gradient-to-r from-emerald-500 to-teal-600" />
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 p-2.5 sm:p-3 shadow-lg mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-full h-full text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3-1.343-3-3S10.343 2 12 2s3 1.343 3 3-1.343 3-3 3zm0 2c2.21 0 4 1.79 4 4v1h-2v-1c0-1.105-.895-2-2-2s-2 .895-2 2v1H8v-1c0-2.21 1.79-4 4-4z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  Growth & Monetization
                </h3>
                <ul className="space-y-2.5 sm:space-y-3">
                  {[
                    "Live Practical Session",
                    "Case Study Discussion",
                    "Digital Marketing Interview Preparation",
                    "Blogging",
                    "Adsense",
                    "Affiliate Marketing",
                    "Freelancer Pushups",
                    "Search Engine & Social Marketing Parameters",
                    "Remarketing Concept",
                    "Other Modules",
                  ].map((mod, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 sm:gap-3 group/item"
                    >
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900/50 dark:to-pink-900/50 flex items-center justify-center mt-0.5 group-hover/item:scale-110 transition-transform">
                        <svg
                          className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-red-600 dark:text-red-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        {mod}
                      </span>
                    </li>
                  ))}
                </ul>
                
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              {/* <div className="inline-flex items-center gap-2.5 sm:gap-3 bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all hover:scale-105 cursor-pointer">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.84l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.36a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.611 1 1 0 01-1.64 0zM13.38 15.644a1 1 0 00-1.64 0 8.97 8.97 0 01-1.35-.63l-.12-.16-.098-.086a1 1 0 00-1.28 0l-.098.086-.12.16a8.97 8.97 0 01-1.35.63 1 1 0 001.64 0 9.026 9.026 0 012.38-.49 1 1 0 00.39 0 11.11 11.11 0 011.38.49 1 1 0 00.89.89 9.026 9.026 0 01.39 1.38 1 1 0 000 .39c-.134.15-.333.232-.53.232a11.11 11.11 0 01-3.76.25 1 1 0 00-.89.89 9.026 9.026 0 01-.25 3.76 1 1 0 00.89.89 11.11 11.11 0 003.76-.25c.197 0 .396-.082.53-.232a1 1 0 000-.39 9.026 9.026 0 01-.39-1.38 1 1 0 00-.89-.89 11.11 11.11 0 01-1.38-.49 1 1 0 00-.39 0 9.026 9.026 0 01-2.38.49z" />
                </svg>
                <span className="font-bold text-base sm:text-lg">
                  Join 5,000+ Students Now
                </span>
              </div> */}
              <p className="mt-5 sm:mt-6 text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300">
                <strong>Institute of Digital Studies</strong> — Delhi NCR{" "}
                <span className="text-red-600">Most Trusted</span> Digital
                Marketing Institute
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}
