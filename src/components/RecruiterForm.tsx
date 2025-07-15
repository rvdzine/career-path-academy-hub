
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";

const RecruiterForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    companyEmail: "",
    salaryRange: "",
    companyWebsite: "",
    employeeCount: "",
    contactPersonName: "",
    phoneNumber: "",
    address: "",
    pinCode: "",
    city: "",
    state: "",
    country: "",
    jobProfile: "",
    jobOpeningCount: "",
    industryType: "",
    jobDescriptionType: "text",
    jobDescriptionText: "",
    jobDescriptionFile: null as File | null
  });

  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, jobDescriptionFile: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.jobDescriptionType === "file" && !formData.jobDescriptionFile) {
      toast({
        title: "Job Description Required",
        description: "Please upload a job description file or switch to text input.",
        variant: "destructive"
      });
      return;
    }

    if (formData.jobDescriptionType === "text" && !formData.jobDescriptionText.trim()) {
      toast({
        title: "Job Description Required",
        description: "Please provide a job description.",
        variant: "destructive"
      });
      return;
    }

    const submissionData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null && value !== "") {
        submissionData.append(key, value.toString());
      }
    });

    try {
      // Note: You'll need to create a backend endpoint for recruiters
      const response = await axios.post(
        "http://localhost:8000/api/placement/recruiter-registration/",
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
          description: "Your company has been registered. We'll contact you soon.",
        });

        // Reset form
        setFormData({
          companyName: "",
          companyEmail: "",
          salaryRange: "",
          companyWebsite: "",
          employeeCount: "",
          contactPersonName: "",
          phoneNumber: "",
          address: "",
          pinCode: "",
          city: "",
          state: "",
          country: "",
          jobProfile: "",
          jobOpeningCount: "",
          industryType: "",
          jobDescriptionType: "text",
          jobDescriptionText: "",
          jobDescriptionFile: null
        });
      }
    } catch (error: any) {
      toast({
        title: "Submission Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Register Your Company for Hiring
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Company Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-blue-600">Company Information</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name *</Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange("companyName", e.target.value)}
                  placeholder="Enter company name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="companyEmail">Company Email *</Label>
                <Input
                  id="companyEmail"
                  type="email"
                  value={formData.companyEmail}
                  onChange={(e) => handleInputChange("companyEmail", e.target.value)}
                  placeholder="Enter company email"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="salaryRange">Salary/Stipend Range *</Label>
                <Input
                  id="salaryRange"
                  value={formData.salaryRange}
                  onChange={(e) => handleInputChange("salaryRange", e.target.value)}
                  placeholder="e.g., ₹3-5 LPA or ₹15,000-25,000/month"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="companyWebsite">Company Website URL</Label>
                <Input
                  id="companyWebsite"
                  type="url"
                  value={formData.companyWebsite}
                  onChange={(e) => handleInputChange("companyWebsite", e.target.value)}
                  placeholder="https://www.yourcompany.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="employeeCount">Number of Employees *</Label>
                <Select value={formData.employeeCount} onValueChange={(value) => handleInputChange("employeeCount", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select employee count" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1-10</SelectItem>
                    <SelectItem value="11-50">11-50</SelectItem>
                    <SelectItem value="51-200">51-200</SelectItem>
                    <SelectItem value="201-500">201-500</SelectItem>
                    <SelectItem value="501-1000">501-1000</SelectItem>
                    <SelectItem value="1000+">1000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="industryType">Industry Type *</Label>
                <Select value={formData.industryType} onValueChange={(value) => handleInputChange("industryType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select industry type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="consulting">Consulting</SelectItem>
                    <SelectItem value="media">Media & Entertainment</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-blue-600">Contact Information</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="contactPersonName">Contact Person Name *</Label>
                <Input
                  id="contactPersonName"
                  value={formData.contactPersonName}
                  onChange={(e) => handleInputChange("contactPersonName", e.target.value)}
                  placeholder="Enter contact person name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phoneNumber">Phone Number *</Label>
                <Input
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                  placeholder="Enter phone number"
                  required
                />
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-blue-600">Company Address</h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="address">Full Address *</Label>
                <Textarea
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  placeholder="Enter complete address"
                  required
                />
              </div>

              <div className="grid md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="pinCode">PIN Code *</Label>
                  <Input
                    id="pinCode"
                    value={formData.pinCode}
                    onChange={(e) => handleInputChange("pinCode", e.target.value)}
                    placeholder="PIN Code"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    placeholder="City"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State *</Label>
                  <Input
                    id="state"
                    value={formData.state}
                    onChange={(e) => handleInputChange("state", e.target.value)}
                    placeholder="State"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country *</Label>
                  <Input
                    id="country"
                    value={formData.country}
                    onChange={(e) => handleInputChange("country", e.target.value)}
                    placeholder="Country"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Job Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-blue-600">Job Information</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="jobProfile">Job Profile *</Label>
                <Input
                  id="jobProfile"
                  value={formData.jobProfile}
                  onChange={(e) => handleInputChange("jobProfile", e.target.value)}
                  placeholder="e.g., Digital Marketing Executive"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="jobOpeningCount">Job Opening Count *</Label>
                <Input
                  id="jobOpeningCount"
                  type="number"
                  value={formData.jobOpeningCount}
                  onChange={(e) => handleInputChange("jobOpeningCount", e.target.value)}
                  placeholder="Number of openings"
                  required
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Job Description *</Label>
                <RadioGroup 
                  value={formData.jobDescriptionType} 
                  onValueChange={(value) => handleInputChange("jobDescriptionType", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="text" id="text" />
                    <Label htmlFor="text">Write job description</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="file" id="file" />
                    <Label htmlFor="file">Upload job description file</Label>
                  </div>
                </RadioGroup>
              </div>

              {formData.jobDescriptionType === "text" && (
                <div className="space-y-2">
                  <Label htmlFor="jobDescriptionText">Job Description</Label>
                  <Textarea
                    id="jobDescriptionText"
                    value={formData.jobDescriptionText}
                    onChange={(e) => handleInputChange("jobDescriptionText", e.target.value)}
                    placeholder="Enter detailed job description, requirements, responsibilities..."
                    rows={8}
                  />
                </div>
              )}

              {formData.jobDescriptionType === "file" && (
                <div className="space-y-2">
                  <Label htmlFor="jobDescriptionFile">Upload Job Description</Label>
                  <Input
                    id="jobDescriptionFile"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="cursor-pointer"
                  />
                  <p className="text-xs text-muted-foreground">
                    Supported formats: PDF, DOC, DOCX (Max 5MB)
                  </p>
                </div>
              )}
            </div>
          </div>

          <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            Register Company for Hiring
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default RecruiterForm;
