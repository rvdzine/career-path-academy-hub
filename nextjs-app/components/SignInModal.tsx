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
import { useSuccessModal } from "@/hooks/use-success-modal";
import api from '../lib/axios';

// Images import
import DesktopImage from "@/public/assets/signinmodal5.png";        
import MobileImage from "@/public/assets/signinmodal6mobile.png";     

const SignInModal = () => {
  const [open, setOpen] = useState(false);
  const { showSuccess, SuccessModal } = useSuccessModal();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    experienceLevel: "",
    message: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await api.post("demo/book/", {
        full_name: formData.name,
        email: formData.email,
        phone: formData.phone,
        course: formData.course,
        experience_level: formData.experienceLevel,
        learning_goals: formData.message
      });

      if (result.status === 201) {
        // Close the dialog first
        setOpen(false);
        
        // Then show success modal after a brief delay
        setTimeout(() => {
          showSuccess({
            title: "Demo Booked Successfully!",
            description: "We'll contact you within 24 hours to confirm your seat.",
            autoCloseDelay: 4000
          });
        }, 300);

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          course: "",
          experienceLevel: "",
          message: "",
        });
      }
    } catch (error: any) {
      console.log('Booking Error: ', error.response?.data || error.message);
      
      const isDuplicate = error.response?.data?.error?.includes("demo booking already exists");
      
      alert(isDuplicate ? "Already Booked: You have already booked a demo for this course." : "Booking Failed: Please check your inputs and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SuccessModal />
      <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="p-0 rounded-2xl shadow-2xl border-0 max-w-3xl w-[90vw] max-h-[92dvh] overflow-y-auto"
        onOpenAutoFocus={(e) => e.preventDefault()}
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
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
                Book Your <span className="text-red-600">FREE</span> Demo Class
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mt-3 font-semibold">
              Get course details, career guidance, and practical learning roadmap
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

              <Select 
                onValueChange={(v) => handleInputChange("course", v)} 
                required
                value={formData.course}
              >
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Choose Your Course *" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="master_dm_internship">Master in DM with Internship</SelectItem>
                  <SelectItem value="specialist_dm">Specialist in DM</SelectItem>
                  <SelectItem value="dm_business_owners">DM for Business Owners</SelectItem>
                  <SelectItem value="foundation_basic_dm">Foundation/Basic in DM Course</SelectItem>
                  <SelectItem value="custom_dm">Custom DM Course</SelectItem>
                </SelectContent>
              </Select>

              <Select 
                onValueChange={(v) => handleInputChange("experienceLevel", v)} 
                required
                value={formData.experienceLevel}
              >
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Current Experience Level *" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fresher_student">Student / Fresher</SelectItem>
                  <SelectItem value="working_professional">Working Professional</SelectItem>
                  <SelectItem value="freelancer">Freelancer</SelectItem>
                  <SelectItem value="business_owner">Business Owner</SelectItem>
                  <SelectItem value="career_switcher">Career Switcher</SelectItem>
                  <SelectItem value="home_maker">Homemaker</SelectItem>
                  <SelectItem value="others">Other</SelectItem>
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
                disabled={loading}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-7 rounded-xl text-lg shadow-lg transition-all disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Reserve My Free Demo Seat"}
              </Button>

              <p className="text-center text-sm font-bold text-red-600 mt-5">
                Limited Seats • Next Batch Starting Soon!
              </p>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
    </>
  );
};

export default SignInModal;