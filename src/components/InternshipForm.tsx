
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";

const InternshipForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    experience: "",
    skills: "",
    resume: null as File | null
  });
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, resume: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.resume) {
      toast({
        title: "Resume Required",
        description: "Please upload your resume before submitting.",
        variant: "destructive" 
      });
      return;
    }

    const submissionData = new FormData();
    submissionData.append("full_name", formData.fullName);
    submissionData.append("email", formData.email);
    submissionData.append("phone", formData.phone);
    submissionData.append("experience_level", formData.experience);
    submissionData.append("key_skills", formData.skills);
    submissionData.append("resume", formData.resume);

    try {
      const response = await axios.post(
        "https://idg-backend.onrender.com/api/careers/student-placement/", 
        submissionData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );

      if (response.status === 201) {
        toast({
          title: "Registration Successful!",
          description: "Your internship application has been submitted. We'll contact you soon.",
        });

        setFormData({
          fullName: "",
          email: "",
          phone: "",
          course: "",
          experience: "",
          skills: "",
          resume: null
        });
      }
    } catch (error: any) {
      toast({
        title: "Submission Failed",
        description: error?.response?.data?.resume?.[0] || "Something went wrong. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Registration for Job
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="course">Course Completed/Enrolled</Label>
              <Select value={formData.course} onValueChange={(value) => handleInputChange("course", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your course" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="seo">SEO Mastery</SelectItem>
                  <SelectItem value="social-media">Social Media Marketing</SelectItem>
                  <SelectItem value="google-ads">Google Ads & PPC</SelectItem>
                  <SelectItem value="email-marketing">Email Marketing</SelectItem>
                  <SelectItem value="analytics">Analytics & Data Insights</SelectItem>
                  <SelectItem value="content-strategy">Content Strategy</SelectItem>
                  <SelectItem value="complete">Complete Digital Marketing</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="experience">Experience Level</Label>
            <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select your experience level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fresher">Fresher (0-6 months)</SelectItem>
                <SelectItem value="beginner">Beginner (6 months - 1 year)</SelectItem>
                <SelectItem value="intermediate">Intermediate (1-2 years)</SelectItem>
                <SelectItem value="experienced">Experienced (2+ years)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="skills">Key Skills</Label>
            <Textarea
              id="skills"
              value={formData.skills}
              onChange={(e) => handleInputChange("skills", e.target.value)}
              placeholder="List your key skills (e.g., SEO, Google Ads, Social Media Management, Analytics)"
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="resume">Upload Resume</Label>
            <Input
              id="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="cursor-pointer"
            />
            <p className="text-xs text-muted-foreground">
              Supported formats: PDF, DOC, DOCX (Max 5MB)
            </p>
          </div>

          <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            Submit Application
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default InternshipForm;
