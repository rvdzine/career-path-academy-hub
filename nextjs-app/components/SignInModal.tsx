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

import Slide1 from "@/public/assets/signinmodal4.png"; // Assuming this is your main image

const SignInModal = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });

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
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="p-0 rounded-2xl shadow-2xl border-0
        w-[94vw] max-w-md sm:max-w-2xl
        max-h-[92dvh] my-4 overflow-y-auto block"
        onOpenAutoFocus={(e) => e.preventDefault()}
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 z-50 bg-black/60 hover:bg-black/80 text-white 
          rounded-full p-2 backdrop-blur-sm transition"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="flex flex-col lg:flex-row">
          {/* Image Section - Modified for better coverage */}
          <div
            className="relative w-full  ml-[-11px] lg:w-10/19
                       /* Increased min-h to match form height better on mobile/small screens */
                       min-h-[550px]  min-w-[380px]
                       /* Ensure the image container grows vertically to match the form height */
                       flex-grow overflow-hidden"
          >
            <Image
              src={Slide1}
              alt="Free Demo"
              fill
              style={{ objectFit: "cover" }}
              className="absolute inset-1 z-0"
              priority
            />
          </div>

          {/* Form Section */}
          <div className="w-full mb-0 lg:w-14/15 bg-white p-5 sm:p-9 lg:p-4">
            <div className="text-center mb-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Join <span className="text-red-600">FREE</span> Demo
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                Become a Certified Expert in Digital Marketing
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                placeholder="Full Name *"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
              />
              <Input
                type="email"
                placeholder="Email *"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
              />
              <Input
                type="tel"
                placeholder="Mobile No. *"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                required
              />

              <Select
                onValueChange={(v) => handleInputChange("course", v)}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Course" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="master">
                    Master in Digital Marketing
                  </SelectItem>
                  <SelectItem value="specialist">
                    Digital Marketing Specialist
                  </SelectItem>
                  <SelectItem value="business">For Business Owners</SelectItem>
                  <SelectItem value="beginners">Beginners Course</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex items-center gap-3 text-sm text-gray-600">
                <input type="checkbox" required className="w-4 h-4" />
                <span>
                  I agree to{" "}
                  <span className="text-red-600 underline">Terms</span> &{" "}
                  <span className="text-red-600 underline">Privacy</span>
                </span>
              </div>
              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-6 rounded-xl text-lg"
              >
                Register FREE Demo
              </Button>
              <p className="text-center text-sm text-gray-500 mt-4 font-medium">
                Limited Seats • Next Batch Soon
              </p>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignInModal;
