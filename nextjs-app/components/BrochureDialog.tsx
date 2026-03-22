"use client";

import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle } from "lucide-react";

const BrochureDialog = ({ children }: { children?: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    experience: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      alert("Please fill in all required fields (Name, Email, Phone)");
      return;
    }
    
    try {
      const api = (await import('../lib/axios')).default;
      
      // Prepare the data payload
      const payload = {
        full_name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        interested_courses: formData.course || null,
        experience: formData.experience || null,
        message: formData.message.trim() || null
      };
      
      console.log("Submitting payload:", payload);
      
      const response = await api.post("contact/contact/", payload);

      if (response.status === 201) {
        console.log("Form submitted successfully, opening brochure...");
        
        // Open brochure immediately after successful submission
        const opened = window.open('https://drive.google.com/file/d/1X1LJ-jcjHIpA6H1wFlZdRHA6zziQVh6X/view?usp=sharing', '_blank');
        
        if (!opened) {
          console.warn("Popup blocked - trying alternative method");
          // Fallback if popup is blocked
          window.location.href = 'https://drive.google.com/file/d/1X1LJ-jcjHIpA6H1wFlZdRHA6zziQVh6X/view?usp=sharing';
        }
        
        // Close the form dialog
        setOpen(false);
        
        // Show confirmation popup
        setShowConfirmation(true);
        setTimeout(() => {
          setShowConfirmation(false);
        }, 3000);
        
        // Reset form
        setFormData({
          name: "",
          phone: "",
          email: "",
          course: "",
          experience: "",
          message: "",
        });
      }
    } catch (error: any) {
      console.error("Contact form error:", error);
      console.error("Error response:", error.response?.data);
      
      let errorMessage = "Submission failed. Please try again.";
      
      if (error.response?.data) {
        const errorData = error.response.data;
        if (typeof errorData === 'object') {
          // Handle field-specific errors
          const fieldErrors = [];
          for (const [field, messages] of Object.entries(errorData)) {
            if (Array.isArray(messages)) {
              fieldErrors.push(`${field}: ${messages.join(', ')}`);
            } else {
              fieldErrors.push(`${field}: ${messages}`);
            }
          }
          if (fieldErrors.length > 0) {
            errorMessage = fieldErrors.join('\n');
          }
        } else {
          errorMessage = errorData.toString();
        }
      }
      
      alert(errorMessage);
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          {children || (
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Download className="w-4 h-4 mr-2" />
              Download Brochure
            </Button>
          )}
        </DialogTrigger>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-center text-xl">
              Get Free Counselling
            </DialogTitle>
          </DialogHeader>
          <Card className="shadow-none border-0">
            <CardHeader>
              <CardTitle className="text-2xl bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                Get Free Counselling
              </CardTitle>
              <CardDescription>
                Fill out the form below to download our brochure and get free counselling from our experts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="course">Interested Course</Label>
                  <Select
                    onValueChange={(value) =>
                      handleInputChange("course", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="master_dm_internship">
                        Master in Digital Marketing Course at idigitalstudies
                      </SelectItem>
                      <SelectItem value="specialist_dm">Digital Marketing Specialist Course at iDigitalStudies</SelectItem>
                      <SelectItem value="dm_business_owners">
                      Best Digital Marketing Course for Business Owners
                      </SelectItem>
                      <SelectItem value="foundation_basic_dm">
                      Digital Marketing Course for Beginners
                      </SelectItem>
                      <SelectItem value="custom_dm">
                      Customised Course in Digital Marketing
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Current Experience Level</Label>
                  <Select
                    onValueChange={(value) =>
                      handleInputChange("experience", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fresher_student">Fresher / Student</SelectItem>
                      <SelectItem value="working_professional">Working Professional / Career Switchers</SelectItem>
                      <SelectItem value="business_owner">Business Owner</SelectItem>
                      <SelectItem value="freelancer">Freelancers / Remote Jobs Seekers</SelectItem>
                      <SelectItem value="home_maker">Home Makers</SelectItem>
                      <SelectItem value="others">Others</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    placeholder="Tell us about your career goals or any specific questions..."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg hover:from-[#AA2526] hover:to-[#EA2525] transition-colors"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Submit & Download Brochure
                </Button>
              </form>
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>

      {/* Confirmation Popup */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-4 text-center">
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Success!
            </h3>
            <p className="text-gray-600">
              Brochure opened successfully. If it didn't open automatically, please check your popup blocker settings.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default BrochureDialog;