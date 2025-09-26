// src/components/ContactDialog.tsx
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

const ContactDialog = ({ children }: { children?: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted contact popup:", formData);
    setOpen(false); // close modal
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            Enroll Now
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">
            Enroll Now - Free Counseling
          </DialogTitle>
        </DialogHeader>
        <Card className="shadow-none border-0">
          <CardHeader>
            <CardTitle className="text-2xl bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
              Enroll Now - Free Counseling
            </CardTitle>
            <CardDescription>
              Fill out the form below and our counselors will contact you
              within 24 hours
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
                    <SelectItem value="fresher">Fresher / Student</SelectItem>
                    <SelectItem value="0-2-years">0-2 Years</SelectItem>
                    <SelectItem value="2-5-years">2-5 Years</SelectItem>
                    <SelectItem value="5-plus-years">5+ Years</SelectItem>
                    <SelectItem value="career-switcher">
                      Career Switcher
                    </SelectItem>
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
                Submit & Get Free Counseling
              </Button>
            </form>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
