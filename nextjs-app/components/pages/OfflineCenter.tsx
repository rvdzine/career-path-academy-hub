"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Users,
  Clock,
  BookOpen,
  Award,
  Wifi,
  Coffee,
  Phone,
  Mail,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingDialog from "@/components/BookingDialog";

const OfflineCenter = () => {
  const center = {
    city: "Greater Noida",
    address:
      "T3, B1603, NXOne, Tech zone 4, Opposite Gaur city mall, Greater Noida, UP, 201306",
    image:
      "/assets/gallery4.webp",
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* HERO */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Our Offline Training Center
        </h2>

        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Learn in a structured offline environment designed for real-world skills.
        </p>
      </section>

      {/* MAIN */}
      <main className="flex-1">
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={center.image}
                alt="Noida Training Center"
                className="w-full h-72 sm:h-96 object-cover transition-transform duration-300 hover:scale-105"
              />

              <div className="absolute top-4 left-4">
                <Badge className="bg-[#EA2525] text-white px-4 py-2">
                  Premium Campus
                </Badge>
              </div>
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  World-Class Learning Environment
                </h2>

                <p className="flex items-start gap-3 text-gray-600 mb-3">
                  <MapPin className="w-5 h-5 mt-1 text-gray-700" />
                  <span>{center.address}</span>
                </p>

                <p className="text-gray-600 leading-relaxed">
                  Our Noida center is equipped with modern amenities and
                  cutting-edge technology to provide the best learning
                  experience. Located in the heart of Noida's IT hub, it's easily
                  accessible and designed to foster innovation and creativity.
                </p>
              </div>

              {/* Contact */}
              <div className="bg-red-50 p-5 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Get in Touch
                </h3>

                <div className="flex flex-col gap-3 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#EA2525]" />
                    <span>+91-9315471293</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#EA2525]" />
                    <span>info@idigitalstudies.com</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#EA2525]" />
                    <span>Mon–Sat: 9:00 AM – 9:00 PM</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <BookingDialog>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#EA2525] to-[#AA2526]"
                  >
                    Book Your Demo
                  </Button>
                </BookingDialog>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OfflineCenter;
