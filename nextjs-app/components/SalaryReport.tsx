"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { toast } from "@/components/ui/use-toast";
import api from "../lib/axios";


export default function SalaryReportModal({ children }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleViewReport = async () => {
    const { fullName, email, phone, course } = form;

    if (!fullName || !email || !phone || !course) {
      toast({
        title: "Please fill the required fields",
        description: "All four fields are mandatory before proceeding.",
        variant: "destructive",
      });
      return;
    }

    try {
      setLoading(true);
      const response = await api.post(
        "salaryreport/submit/",
        {
          full_name: fullName,
          email: email,
          phone: phone,
          course: course,
        }
      );

      if (response.status === 201) {
        toast({
          title: "Success!",
          description: "Your details have been submitted successfully.",
        });
        setOpen(false);
        window.location.href = "/ss"; // navigate to report
      }
    } catch (error: any) {
      toast({
        title: "Submission Failed",
        description:
          error.response?.data?.error || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>See the Salary Report</DialogTitle>
          <DialogDescription>
            Fill in your details to instantly access the salary insights report.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium">Full Name *</label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium">Email Address *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2"
              placeholder="Enter your email"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Courses Interested In */}
          <div>
            <label className="block text-sm font-medium">Course Interested In *</label>
            <select
              name="course"
              value={form.course}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2"
            >
              <option value="">-- Select a Course --</option>
              <option value="seomastery">SEO Mastery</option>
              <option value="socialmediapro">Social Media Pro</option>
              <option value="googleadsexpert">Google Ads Expert</option>
              <option value="cmbootcamp">
                Content Marketing Bootcamp
              </option>
              <option value="emailmarketingpro">Email Marketing Pro</option>
              <option value="advancedseo">Advanced SEO</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-4">
            <Button
              onClick={handleViewReport}
              disabled={loading}
              className="bg-[#EA2525] hover:bg-[#c21e1e] text-white"
            >
              {loading ? "Submitting..." : "See the Salary Report"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}