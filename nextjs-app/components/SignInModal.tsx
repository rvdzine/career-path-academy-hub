"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

// Images import
import DesktopImage from "@/public/assets/signinmodal5.png";        // Web / Desktop
import MobileImage from "@/public/assets/signinmodal6mobile.png";      // Mobile Only

const SignInModal = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });

  // Modal 3 seconds baad khulega
  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setOpen(false); // Submit karne ke baad band ho jayega
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="p-0 rounded-2xl shadow-2xl border-0 max-w-3xl w-[90vw] max-h-[92dvh] overflow-y-auto"
        onOpenAutoFocus={(e) => e.preventDefault()}
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        {/* Close Button */}
        {/* <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 z-50 bg-black/70 hover:bg-black text-white rounded-full p-2.5 backdrop-blur-md transition-all duration-200"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button> */}

        <div className="flex flex-col lg:flex-row min-h-[580px]">
          {/* ========== IMAGE SECTION - RESPONSIVE (Mobile vs Desktop) ========== */}
          <div className="relative w-full lg:w-1/2 min-h-[220px]">
            {/* Mobile Image*/}
            <Image
              src={MobileImage}
              alt="Free Demo - Mobile View"
              fill
              priority
              className="object-cover lg:hidden"
            />

            {/* Desktop Image */}
            <Image
              src={DesktopImage}
              alt="Free Demo - Desktop View"
              fill
              priority
              className="object-cover hidden lg:block"
            />
          </div>

          {/* ========== FORM SECTION ========== */}
          <div className="w-full lg:w-1/2 bg-white p-6 sm:p-10 flex flex-col justify-center">
            <div className="text-center mb-4">
              <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-tight">
                Join <span className="text-red-600">FREE</span> Demo
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mt-3 font-semibold">
                Become a Certified Expert in Digital Marketing
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                placeholder="Full Name *"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
                className="h-12 text-base"
              />
              <Input
                type="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
                className="h-12 text-base"
              />
              <Input
                type="tel"
                placeholder="Mobile Number *"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                required
                className="h-12 text-base"
              />

              <Select onValueChange={(v) => handleInputChange("course", v)} required>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select Course" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="master">Master in Digital Marketing</SelectItem>
                  <SelectItem value="specialist">Digital Marketing Specialist</SelectItem>
                  <SelectItem value="business">For Business Owners</SelectItem>
                  <SelectItem value="beginners">Beginners Course</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex items-start gap-3 text-sm text-gray-600">
                <input type="checkbox" required className="mt-1 w-5 h-5 rounded border-gray-300" />
                <span>
                  I agree to <span className="text-red-600 underline cursor-pointer">Terms</span> &{" "}
                  <span className="text-red-600 underline cursor-pointer">Privacy Policy</span>
                </span>
              </div>

              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-7 rounded-xl text-lg shadow-lg transition-all"
              >
                Register for FREE Demo
              </Button>

              <p className="text-center text-sm font-bold text-red-600 mt-5">
                Limited Seats • Next Batch Starting Soon!
              </p>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignInModal;