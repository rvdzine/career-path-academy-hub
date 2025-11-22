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

import Slide1 from "@/public/assets/signinmodal1.png";

const SignInModal = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

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
      <DialogContent className="max-w-3xl w-full p-0 overflow-hidden shadow-2xl border-0 bg-white">
        <div className="flex flex-col md:flex-row">
          
          {/* ================= LEFT SIDE IMAGE - HIDDEN ON MOBILE ================= */}
          <div className="hidden md:flex md:w-1/2 bg-red-600 relative items-center justify-center p-6 rounded-tr-[70px] rounded-bl-[70px] overflow-hidden shadow-lg">

            {/* Pattern background */}
            <div
              className="absolute inset-0 opacity-90"
              style={{
                backgroundColor: "#8c1515",
                backgroundImage:
                  "repeating-radial-gradient(circle at 0 0, transparent 0, #8c1515 10px), repeating-linear-gradient(#fd585855, #fd5858)",
              }}
            ></div>

            {/* Image */}
            <div className="relative w-full h-full flex justify-center items-center z-10">
              <Image
                src={Slide1}
                alt="Sign In Banner"
                width={600}
                height={600}
                className="object-contain w-full h-full"
              />
            </div>

            {/* Caption */}
            <div className="absolute bottom-6 text-center text-white font-semibold text-lg z-20">
              Explore Your Digital Future 🚀
            </div>
          </div>

          {/* ================= RIGHT SIDE FORM ================= */}
          <div className="md:w-1/2 w-full bg-white p-6 md:p-8">
            <DialogHeader>
              <DialogTitle className="text-center text-xl md:text-2xl font-semibold text-gray-800">
                Join FREE Online Demo – Become a Digital Marketing Expert
              </DialogTitle>
              <p className="text-center text-gray-600 text-sm mt-1">
                Attend <span className="font-semibold">FREE ONLINE DEMO</span> – Become a Certified Expert in Digital Marketing
              </p>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-5 mt-4">
              
              {/* Name */}
              <div>
                <Label htmlFor="name" className="text-gray-700 text-sm">
                  Full Name
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Enter your full name"
                  className="border border-gray-300 rounded-md bg-white"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-gray-700 text-sm">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="Enter your email"
                  className="border border-gray-300 rounded-md bg-white"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <Label htmlFor="phone" className="text-gray-700 text-sm">
                  Mobile No.
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="Enter your mobile number"
                  className="border border-gray-300 rounded-md bg-white"
                  required
                />
              </div>

              {/* Course Select */}
              <div>
                <Label className="text-gray-700 text-sm">Interested Course</Label>
                <Select onValueChange={(value) => handleInputChange("course", value)}>
                  <SelectTrigger className="border border-gray-300 rounded-md bg-white">
                    <SelectValue placeholder="Select Courses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="complete-digital-marketing">
                      Master in Digital Marketing Course at idigitalstudies
                    </SelectItem>
                    <SelectItem value="seo-mastery">
                      Digital Marketing Specialist Course at iDigitalStudies
                    </SelectItem>
                    <SelectItem value="social-media-pro">
                      Best Digital Marketing Course for Business Owners
                    </SelectItem>
                    <SelectItem value="google-ads-expert">
                      Digital Marketing Course for Beginners
                    </SelectItem>
                    <SelectItem value="email-marketing">
                      Customised Course in Digital Marketing
                    </SelectItem>
                    <SelectItem value="analytics">
                      Degree in Digital Marketing
                    </SelectItem>
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
                  </span>, Visitor Agreement and Privacy Policy.
                </p>
              </div>

              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md py-2"
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
