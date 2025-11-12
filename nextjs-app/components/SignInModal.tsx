"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

// 🖼️ Import your PNG images here
import Slide1 from "@/public/assets/signinmodal1.png";
import Slide2 from "@/public/assets/signinmodal1.png";
import Slide3 from "@/public/assets/signinmodal3.png";

const SignInModal = () => {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
  });

  // Auto open after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  // 🔁 Auto image slider
  const images = [Slide1, Slide2, Slide3];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-4xl w-full p-0 overflow-hidden rounded-2xl shadow-2xl border-0">
        <div className="flex flex-col md:flex-row">
          {/* 🔴 Left side with red bg + slider */}
          <div className="md:w-1/2 w-full bg-red-600 relative flex items-center justify-center p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 opacity-90" />

            {/* Image slider */}
            <div className="relative w-full h-80 md:h-full overflow-hidden rounded-lg z-10">
              {images.map((img, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    index === currentImage ? "opacity-100" : "opacity-0"
                  }`}
                >
                 <div className="flex justify-center items-center w-full h-full">
                   <Image
                   src={img}
                   alt={`Slide ${index + 1}`}
                   width={500}
                   height={500}
                   className="object-contain"/>
                 </div>
                </div>
              ))}
            </div>

            {/* Optional caption text */}
            <div className="absolute bottom-6 text-center text-white font-semibold text-lg z-20">
              Explore Your Digital Future 🚀
            </div>
          </div>

          {/* ⚪ Right side with form */}
          <div className="md:w-1/2 w-full bg-white p-8">
            <DialogHeader>
              <DialogTitle className="text-center text-xl font-semibold text-gray-800">
                DIDM – Helping you open windows of opportunity worldwide
              </DialogTitle>
              <p className="text-center text-gray-600 text-sm mt-1">
                Attend <span className="font-semibold">FREE ONLINE DEMO</span> – Become a Certified Expert in Digital Marketing
              </p>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-5 mt-4">
              {/* Full Name */}
              <div className="space-y-1">
                <Label htmlFor="name" className="text-gray-700 text-sm">
                  Full Name
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Enter your full name"
                  className="border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-red-500 hover:border-red-500 focus:border-red-500 transition-colors duration-200"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <Label htmlFor="email" className="text-gray-700 text-sm">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="Enter your email"
                  className="border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-red-500 hover:border-red-500 focus:border-red-500 transition-colors duration-200"
                  required
                />
              </div>

              {/* Mobile */}
              <div className="space-y-1">
                <Label htmlFor="phone" className="text-gray-700 text-sm">
                  Mobile No.
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="Enter your mobile number"
                  className="border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-red-500 hover:border-red-500 focus:border-red-500 transition-colors duration-200"
                  required
                />
              </div>

              {/* Center */}
              <div className="space-y-1">
                <Label htmlFor="course" className="text-gray-700 text-sm">
                  Choose Center Near You
                </Label>
                <Select onValueChange={(value) => handleInputChange("course", value)}>
                  <SelectTrigger className="border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-red-500 hover:border-red-500 focus:border-red-500 transition-colors duration-200">
                    <SelectValue placeholder="Select Center" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="delhi">Delhi</SelectItem>
                    <SelectItem value="noida">Noida</SelectItem>
                    <SelectItem value="gurgaon">Gurgaon</SelectItem>
                    <SelectItem value="mumbai">Mumbai</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" required />
                <p className="text-xs text-gray-600">
                  By clicking Submit, you agree to our{" "}
                  <span className="text-red-600 underline cursor-pointer">
                    Terms and Conditions
                  </span>
                  , Visitor Agreement and Privacy Policy.
                </p>
              </div>

              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md py-2 transition"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignInModal;
