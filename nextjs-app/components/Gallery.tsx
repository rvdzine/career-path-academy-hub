"use client";
import Image from "next/image";
import { useState } from "react";

// 🎨 16 total images (add your real image paths)
const images = [
  { src: "/assets/gallery1.webp", alt: "Digital Marketing Classroom" },
  { src: "/assets/gallery2.webp", alt: "Hands-on Workshop" },
  { src: "/assets/gallery3.webp", alt: "Students Learning Together" },
  { src: "/assets/gallery4.webp", alt: "IDS Event and Seminar" },
  { src: "/assets/gallery5.webp", alt: "Instructor Training Session" },
  { src: "/assets/gallery6.webp", alt: "Certification Ceremony" },
  { src: "/assets/gallery7.png", alt: "Guest Lecture" },
  { src: "/assets/gallery8.png", alt: "Marketing Campaign Project" },
  { src: "/assets/gallery1.webp", alt: "Student Presentation" },
  { src: "/assets/gallery10.png", alt: "Workshop Collaboration" },
  { src: "/assets/gallery11.png", alt: "Creative Discussion" },
  { src: "/assets/gallery12.png", alt: "Practical Demo Session" },
  { src: "/assets/gallery1.webp", alt: "Networking Event" },
  { src: "/assets/gallery6.webp", alt: "Social Media Strategy Talk" },
  { src: "/assets/gallery5.webp", alt: "Classroom Learning" },
  { src: "/assets/gallery16.png", alt: "Success Celebration" },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Our <span className="text-red-600">Gallery</span>
        </h2>
        <p className="text-gray-600">
          Explore our engaging classes, workshops, and student experiences at the{" "}
          <strong>Institute of Digital Studies</strong>.
        </p>
      </div>

      {/* 🔁 Auto-moving image rows */}
      <div className="space-y-8">
        {/* Row 1 – moves left to right */}
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex animate-scroll-left gap-6">
            {[...images, ...images].map((image, index) => (
              <div
                key={`row1-${index}`}
                className="relative flex-shrink-0 w-64 h-48 rounded-2xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 – moves right to left */}
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex animate-scroll-right gap-6">
            {[...images, ...images].map((image, index) => (
              <div
                key={`row2-${index}`}
                className="relative flex-shrink-0 w-64 h-48 rounded-2xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
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
