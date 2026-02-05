"use client";

import { useEffect, useState } from "react";
import { PlacedStudent } from "@/types/placed-student";

interface PlacedStudentsCarouselProps {
  students: PlacedStudent[];
}

export default function PlacedStudentsCarousel({ students }: PlacedStudentsCarouselProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || students.length === 0) {
    return (
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Success Stories
          </h2>
          {/* <div className="text-center text-gray-600 dark:text-gray-400">
            Loading testimonials...
          </div>   */}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-red-50 via-pink-50 to-red-50 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-3">
          Our Success Stories
        </h2>
        <p className="text-center text-sm md:text-base text-gray-600 dark:text-gray-400 mb-8">
          Hear from our placed students about their journey
        </p>
      </div>
    </div>
  );
}
