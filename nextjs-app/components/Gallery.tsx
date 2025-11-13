"use client";
import Image from "next/image";
import { useState } from "react";

const images = [
  { src: "/assets/gallery1.webp", alt: "Digital Marketing Classroom" },
  { src: "/assets/gallery2.webp", alt: "Hands-on Workshop" },
  { src: "/assets/gallery3.webp", alt: "Students Learning Together" },
  { src: "/assets/gallery4.webp", alt: "IDS Event and Seminar" },
  { src: "/assets/gallery5.webp", alt: "Instructor Training Session" },
  { src: "/assets/gallery6.webp", alt: "Certification Ceremony" },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Our <span className="text-red-600">Gallery</span>
        </h2>
        <p className="text-gray-600 mb-10">
          A glimpse of our engaging classes, workshops, and student experiences at the
          <strong> Institute of Digital Studies</strong>.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="object-cover w-full h-64 hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <Image
            src={selectedImage}
            alt="Enlarged Image"
            width={800}
            height={600}
            className="rounded-2xl shadow-2xl max-h-[90vh] object-contain"
          />
        </div>
      )}
    </section>
  );
}
