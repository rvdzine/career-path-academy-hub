"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import axios from "axios";
import { PlacedStudent } from "@/types/placed-student";
import { getMediaUrl } from "@/lib/api";

const getCompanyLogo = (companyName?: string, dbLogo?: string | null): string => {
  if (dbLogo && dbLogo.trim()) return dbLogo;
  const lower = (companyName || "").toLowerCase().replace(/[^a-z0-9]/g, "");
  const map: Record<string, string> = {
    salesforce: "/svg/Salesforce.svg",
    meesho: "/svg/Meesho.svg",
    dream11: "/svg/Dream11.svg",
    zomato: "/svg/Zomato.svg",
    razorpay: "/svg/razorpay.svg",
    medianet: "/svg/medianet.svg",
    testbook: "/svg/testbook.svg",
    nykaa: "/svg/Nykaa.svg",
    flipkart: "/svg/Flipkart.svg",
    tcs: "/svg/TCS.svg",
    paytm: "/svg/Paytm.svg",
    myntra: "/svg/Myntra.svg",
    urbancompany: "/svg/Urbancompany.svg",
    infosys: "/svg/infosys.svg",
    techmahindra: "/svg/techmahindra.svg",
    unilever: "/svg/unilever.svg",
  };

  for (const [key, path] of Object.entries(map)) {
    if (lower.includes(key)) return path;
  }
  return "/assets/IDS.png";
};

const resolveStudentImage = (imagePath?: string): string => {
  if (!imagePath) return "/placeholder-avatar.svg";
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) return imagePath;
  if (imagePath.startsWith("/assets/") || imagePath.startsWith("/svg/")) return imagePath;
  return getMediaUrl(imagePath);
};

const PlacedStudentsCarousel = () => {
  const [students, setStudents] = useState<PlacedStudent[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL?.replace(/\/api$/, "") || "http://localhost:8000";

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_BASE_URL}/api/placed-students/`);
        setStudents(response.data || []);
      } catch (error) {
        console.error("Failed to fetch placed students from database:", error);
        setStudents([]);
      } finally {
        setLoading(false);
      }
    };
    fetchStudents();
  }, [API_BASE_URL]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, students.length - visibleCount);
  const nextSlide = () => setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));

  useEffect(() => {
    if (students.length <= visibleCount) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [maxIndex, visibleCount, students.length]);

  const translateX = -(currentIndex * (100 / visibleCount));

  return (
    <section className="w-full bg-[#FFF9F9] py-20">
      <div className="text-center mb-8">
        <span className="bg-[#EA2525] text-white px-5 py-1 rounded-full font-medium">
          Success Stories
        </span>
        <h2 className="text-3xl font-bold text-black mt-4 max-w-3xl mx-auto">
          Our alumni are working in top organizations such as Google, Meta,
          Zomato, Meesho, Flipkart, TCS, and more.
        </h2>
      </div>

      <div className="relative px-4 md:px-8 lg:px-16">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <Loader2 className="w-8 h-8 animate-spin text-[#EA2525]" />
            <p className="text-sm text-gray-500">Loading student stories...</p>
          </div>
        ) : students.length === 0 ? (
          <div className="text-center py-16 text-gray-500">
            No placed students found.
          </div>
        ) : (
          <>
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(${translateX}%)` }}
              >
                {students.map((student) => {
                  const companyLogo = getCompanyLogo(student.company_name, student.company_logo);
                  const studentImg = resolveStudentImage(student.student_image_url || (student as any).student_image);

                  return (
                    <div
                      key={student.id || student.student_id}
                      className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3"
                    >
                      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 p-6 flex flex-col md:flex-row items-center justify-between h-full">
                        <div className="flex-1 pr-0 md:pr-6">
                          <div className="flex items-center gap-3 mb-3 -mt-2">
                            {/* Uniform Company Logo Box */}
                            <div className="w-11 h-11 flex items-center justify-center rounded-full bg-white border shadow-sm overflow-hidden flex-shrink-0">
                              <Image
                                src={companyLogo}
                                alt={`${student.company_name} logo`}
                                width={35}
                                height={35}
                                className="object-contain"
                                unoptimized
                              />
                            </div>

                            <div className="-mt-[2px]">
                              <h3 className="font-semibold text-gray-900 text-base">
                                {student.student_name}
                              </h3>
                              <p className="text-sm text-gray-500">
                                {student.student_role} at {student.company_name}
                              </p>
                            </div>
                          </div>

                          <hr className="my-3 border-gray-200" />

                          {student.student_bio && (
                            <p className="text-gray-600 text-sm italic leading-relaxed mb-5 line-clamp-3">
                              “{student.student_bio}”
                            </p>
                          )}

                          <div className="flex gap-3 flex-wrap">
                            {student.package && (
                              <span className="bg-[#FFEFEF] text-[#EA2525] text-sm px-3 py-1 rounded-full font-medium">
                                {student.package}
                              </span>
                            )}
                            {student.location && (
                              <span className="bg-[#FFEFEF] text-[#EA2525] text-sm px-3 py-1 rounded-full font-medium">
                                {student.location}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="w-full md:w-28 md:h-52 h-64 rounded-xl overflow-hidden border border-gray-100 relative mt-4 md:mt-0 flex-shrink-0">
                          <Image
                            src={studentImg}
                            alt={student.student_name}
                            fill
                            loading="lazy"
                            sizes="(max-width: 768px) 100vw, 120px"
                            className="object-cover"
                            unoptimized
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Arrows */}
            {students.length > visibleCount && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow border hover:border-[#EA2525] transition"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow border hover:border-[#EA2525] transition"
                  aria-label="Next Slide"
                >
                  <ChevronRight size={22} />
                </button>
              </>
            )}

            {/* Dots */}
            {maxIndex > 0 && (
              <div className="flex justify-center mt-8 gap-2">
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? "bg-[#EA2525]" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default PlacedStudentsCarousel;
