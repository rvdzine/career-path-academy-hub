"use client";
import Image from "next/image";
import { useState } from "react";

// 🎨 12 unique images split across 2 distinct rows
const row1Images = [
  { src: "/assets/gallery1.webp", alt: "Digital Marketing Classroom Session at IDS" },
  { src: "/assets/gallery2.webp", alt: "Hands-on Practical Workshop" },
  { src: "/assets/gallery3.webp", alt: "Students Collaborating on Projects" },
  { src: "/assets/gallery4.webp", alt: "IDS Event and Digital Seminar" },
  { src: "/assets/gallery5.webp", alt: "Instructor Led Masterclass" },
  { src: "/assets/gallery6.webp", alt: "Certification Award Ceremony" },
];

const row2Images = [
  { src: "/assets/gallery7.jpg", alt: "Guest Industry Expert Lecture" },
  { src: "/assets/gallery8.jpg", alt: "Live Marketing Campaign Presentation" },
  { src: "/assets/gallery10.jpg", alt: "Group Strategy Discussion" },
  { src: "/assets/gallery11.jpg", alt: "Creative Brainstorming Session" },
  { src: "/assets/gallery12.jpg", alt: "Live Tool Demo and Setup" },
  { src: "/assets/gallery16.jpg", alt: "Student Placement Success Celebration" },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 bg-[#FFF9F9] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Our Gallery
        </h2>
        <p className="text-gray-600">
          Explore our engaging classes, workshops, and student experiences at the{" "}
          <strong>Institute of Digital Studies</strong>.
        </p>
      </div>

      {/* 🔁 Auto-moving image rows */}
      <div className="space-y-8">
        {/* Row 1 – moves left */}
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex animate-scroll-left gap-6">
            {[...row1Images, ...row1Images].map((image, index) => (
              <div
                key={`row1-${index}`}
                className="relative flex-shrink-0 w-64 h-48 rounded-2xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 200px, 260px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 – moves right */}
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex animate-scroll-right gap-6">
            {[...row2Images, ...row2Images].map((image, index) => (
              <div
                key={`row2-${index}`}
                className="relative flex-shrink-0 w-64 h-48 rounded-2xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 200px, 260px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🖼️ Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <Image
            src={selectedImage}
            alt="Enlarged Image"
            width={900}
            height={600}
            className="rounded-2xl shadow-2xl max-h-[90vh] object-contain"
          />
        </div>
      )}
    </section>
  );
}
