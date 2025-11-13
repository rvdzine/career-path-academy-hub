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

// 🖼️ Import your single static image
import Slide1 from "@/public/assets/signinmodal2.png";

const SignInModal = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
  });

  // ⏳ Auto open after 3 seconds
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
      <DialogContent className="max-w-3xl w-full p-0 overflow-hidden  shadow-2xl border-0 bg-white">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 w-full bg-red-600 relative flex items-center justify-center p-8 m-5 rounded-tr-[100px] rounded-bl-[100px] overflow-hidden shadow-lg">
            {/* Pattern background */}
            <div
              className="absolute inset-0 opacity-90"
              style={{
                backgroundColor: "#8c1515",
                backgroundImage:
                  "repeating-radial-gradient(circle at 0 0, transparent 0, #8c1515 10px), repeating-linear-gradient(#fd585855, #fd5858)",
              }}
            ></div>

            {/* Static image */}
            <div className="relative w-full h-50 md:h-full flex justify-center items-center z-10">
              <Image
                src={Slide1}
                alt="Sign In Banner"
                width={800}
                height={800}
                className="object-contain w-full h-full"
              />
            </div>

            {/* Optional caption text */}
            <div className="absolute bottom-6 text-center text-white font-semibold text-lg z-20">
              Explore Your Digital Future 🚀
            </div>
          </div>

          {/* ⚪ Right side with form */}
          <div className="md:w-1/2 w-full  bg-white p-8">
            <DialogHeader>
              <DialogTitle className="text-center text-xl font-semibold text-gray-800">
                Join FREE Online Demo – Become a Digital Marketing Expert
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
                  Interested Course
                </Label>
                <Select onValueChange={(value) => handleInputChange("course", value)}>
                  <SelectTrigger className="border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-red-500 hover:border-red-500 focus:border-red-500 transition-colors duration-200">
                    <SelectValue placeholder="Select Center" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="complete-digital-marketing">
                      Complete Digital Marketing
                    </SelectItem>
                    <SelectItem value="seo-mastery">SEO Mastery</SelectItem>
                    <SelectItem value="social-media-pro">
                      Social Media Marketing Pro
                    </SelectItem>
                    <SelectItem value="google-ads-expert">
                      Google Ads & PPC Expert
                    </SelectItem>
                    <SelectItem value="email-marketing">
                      Email Marketing Specialist
                    </SelectItem>
                    <SelectItem value="analytics">
                      Analytics & Data Insights
                    </SelectItem>
                    <SelectItem value="content-strategy">
                      Content Strategy & Creation
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
