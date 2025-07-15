
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, X } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";

const InternshipForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: null as Date | null,
    gender: "",
    experienceType: "",
    totalExperience: "",
    highestEducation: "",
    currentlyPursuing: "",
    currentCourse: "",
    currentDegree: "",
    currentCollege: "",
    currentCompleteYear: "",
    pursuingCourse: "",
    pursuingDegree: "",
    pursuingCollege: "",
    pursuingCompleteYear: "",
    currentLocation: "",
    preferredLocations: [] as string[],
    skillsAndTools: [] as string[],
    englishLevel: "",
    otherLanguages: [] as string[],
    preferredWorkplace: [] as string[],
    jobType: [] as string[],
    jobTitles: [] as string[],
    resume: null as File | null
  });

  const { toast } = useToast();

  const locations = [
    "Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad", 
    "Pune", "Ahmedabad", "Surat", "Jaipur", "Lucknow", "Kanpur", "Nagpur"
  ];

  const languages = [
    "Hindi", "Bengali", "Telugu", "Marathi", "Tamil", "Gujarati", 
    "Urdu", "Kannada", "Odia", "Malayalam", "Punjabi", "Assamese"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleDateChange = (date: Date | undefined) => {
    setFormData(prev => ({ ...prev, dateOfBirth: date || null }));
  };

  const handleArrayAdd = (field: string, value: string) => {
    if (!value.trim()) return;
    
    setFormData(prev => ({
      ...prev,
      [field]: [...(prev[field as keyof typeof prev] as string[]), value]
    }));
  };

  const handleArrayRemove = (field: string, index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field as keyof typeof prev] as string[]).filter((_, i) => i !== index)
    }));
  };

  const handleMultiSelect = (field: string, value: string) => {
    setFormData(prev => {
      const currentArray = prev[field as keyof typeof prev] as string[];
      const isSelected = currentArray.includes(value);
      
      return {
        ...prev,
        [field]: isSelected 
          ? currentArray.filter(item => item !== value)
          : [...currentArray, value]
      };
    });
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
    Object.entries(formData).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        submissionData.append(key, JSON.stringify(value));
      } else if (value instanceof Date) {
        submissionData.append(key, value.toISOString());
      } else if (value !== null && value !== "") {
        submissionData.append(key, value.toString());
      }
    });

    try {
      const response = await axios.post(
        "http://localhost:8000/api/placement/student-placement/",
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

        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          dateOfBirth: null,
          gender: "",
          experienceType: "",
          totalExperience: "",
          highestEducation: "",
          currentlyPursuing: "",
          currentCourse: "",
          currentDegree: "",
          currentCollege: "",
          currentCompleteYear: "",
          pursuingCourse: "",
          pursuingDegree: "",
          pursuingCollege: "",
          pursuingCompleteYear: "",
          currentLocation: "",
          preferredLocations: [],
          skillsAndTools: [],
          englishLevel: "",
          otherLanguages: [],
          preferredWorkplace: [],
          jobType: [],
          jobTitles: [],
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
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Register for Internship Program
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-blue-600">Personal Information</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
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

            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Mobile Number *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="Enter your mobile number"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Date of Birth *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !formData.dateOfBirth && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.dateOfBirth ? format(formData.dateOfBirth, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={formData.dateOfBirth || undefined}
                      onSelect={handleDateChange}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label>Gender *</Label>
                <RadioGroup value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male">Male</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female">Female</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other">Other</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>

          {/* Experience Details */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-blue-600">Experience Details</h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Experience Type *</Label>
                <RadioGroup value={formData.experienceType} onValueChange={(value) => handleInputChange("experienceType", value)}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="intern" id="intern" />
                    <Label htmlFor="intern">Intern</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="fresher" id="fresher" />
                    <Label htmlFor="fresher">Fresher</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="experienced" id="experienced" />
                    <Label htmlFor="experienced">Experienced</Label>
                  </div>
                </RadioGroup>
              </div>

              {formData.experienceType === "experienced" && (
                <div className="space-y-2">
                  <Label htmlFor="totalExperience">Total Experience *</Label>
                  <Select value={formData.totalExperience} onValueChange={(value) => handleInputChange("totalExperience", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select total experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1">0-1 year</SelectItem>
                      <SelectItem value="1-2">1-2 years</SelectItem>
                      <SelectItem value="2-3">2-3 years</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                      <SelectItem value="5+">5+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
          </div>

          {/* Education Details */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-blue-600">Education Details</h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="highestEducation">Highest Education *</Label>
                <Select value={formData.highestEducation} onValueChange={(value) => handleInputChange("highestEducation", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select highest education" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10th">10th Grade</SelectItem>
                    <SelectItem value="12th">12th Grade</SelectItem>
                    <SelectItem value="diploma">Diploma</SelectItem>
                    <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                    <SelectItem value="master">Master's Degree</SelectItem>
                    <SelectItem value="phd">PhD</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Currently Pursuing *</Label>
                <RadioGroup value={formData.currentlyPursuing} onValueChange={(value) => handleInputChange("currentlyPursuing", value)}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="pursuing-yes" />
                    <Label htmlFor="pursuing-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="pursuing-no" />
                    <Label htmlFor="pursuing-no">No</Label>
                  </div>
                </RadioGroup>
              </div>

              {formData.currentlyPursuing === "yes" && (
                <div className="grid md:grid-cols-2 gap-4 p-4 border rounded-lg">
                  <h4 className="col-span-2 font-medium text-green-600">Current Education</h4>
                  <div className="space-y-2">
                    <Label htmlFor="currentCourse">Course</Label>
                    <Input
                      id="currentCourse"
                      value={formData.currentCourse}
                      onChange={(e) => handleInputChange("currentCourse", e.target.value)}
                      placeholder="e.g., Computer Science"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currentDegree">Degree</Label>
                    <Input
                      id="currentDegree"
                      value={formData.currentDegree}
                      onChange={(e) => handleInputChange("currentDegree", e.target.value)}
                      placeholder="e.g., B.Tech"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currentCollege">College/University</Label>
                    <Input
                      id="currentCollege"
                      value={formData.currentCollege}
                      onChange={(e) => handleInputChange("currentCollege", e.target.value)}
                      placeholder="Enter college name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currentCompleteYear">Expected Completion Year</Label>
                    <Input
                      id="currentCompleteYear"
                      value={formData.currentCompleteYear}
                      onChange={(e) => handleInputChange("currentCompleteYear", e.target.value)}
                      placeholder="e.g., 2025"
                    />
                  </div>
                </div>
              )}

              {formData.currentlyPursuing === "no" && (
                <div className="grid md:grid-cols-2 gap-4 p-4 border rounded-lg">
                  <h4 className="col-span-2 font-medium text-blue-600">Previously Completed</h4>
                  <div className="space-y-2">
                    <Label htmlFor="pursuingCourse">Course</Label>
                    <Input
                      id="pursuingCourse"
                      value={formData.pursuingCourse}
                      onChange={(e) => handleInputChange("pursuingCourse", e.target.value)}
                      placeholder="e.g., Computer Science"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pursuingDegree">Degree</Label>
                    <Input
                      id="pursuingDegree"
                      value={formData.pursuingDegree}
                      onChange={(e) => handleInputChange("pursuingDegree", e.target.value)}
                      placeholder="e.g., B.Tech"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pursuingCollege">College/University</Label>
                    <Input
                      id="pursuingCollege"
                      value={formData.pursuingCollege}
                      onChange={(e) => handleInputChange("pursuingCollege", e.target.value)}
                      placeholder="Enter college name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pursuingCompleteYear">Completion Year</Label>
                    <Input
                      id="pursuingCompleteYear"
                      value={formData.pursuingCompleteYear}
                      onChange={(e) => handleInputChange("pursuingCompleteYear", e.target.value)}
                      placeholder="e.g., 2023"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Location Preferences */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-blue-600">Location Preferences</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="currentLocation">Current Location *</Label>
                <Select value={formData.currentLocation} onValueChange={(value) => handleInputChange("currentLocation", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select current location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((location) => (
                      <SelectItem key={location} value={location}>{location}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label>Job Preferred Locations (Multiple selection allowed)</Label>
                <div className="space-y-2">
                  <Select onValueChange={(value) => handleMultiSelect("preferredLocations", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select preferred locations" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((location) => (
                        <SelectItem key={location} value={location}>{location}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <div className="flex flex-wrap gap-1">
                    {formData.preferredLocations.map((location, index) => (
                      <Badge key={index} variant="secondary" className="flex items-center gap-1">
                        {location}
                        <X className="h-3 w-3 cursor-pointer" onClick={() => handleArrayRemove("preferredLocations", index)} />
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills and Languages */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-blue-600">Skills & Languages</h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Skills & Tools</Label>
                <div className="flex gap-2">
                  <Input
                    placeholder="Add a skill or tool"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleArrayAdd("skillsAndTools", e.currentTarget.value);
                        e.currentTarget.value = '';
                      }
                    }}
                  />
                  <Button 
                    type="button"
                    onClick={(e) => {
                      const input = e.currentTarget.previousElementSibling as HTMLInputElement;
                      handleArrayAdd("skillsAndTools", input.value);
                      input.value = '';
                    }}
                  >
                    Add
                  </Button>
                </div>
                <div className="flex flex-wrap gap-1">
                  {formData.skillsAndTools.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="flex items-center gap-1">
                      {skill}
                      <X className="h-3 w-3 cursor-pointer" onClick={() => handleArrayRemove("skillsAndTools", index)} />
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>English Language Level *</Label>
                  <Select value={formData.englishLevel} onValueChange={(value) => handleInputChange("englishLevel", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select English level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basic">Basic</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="advance">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Other Languages</Label>
                  <div className="space-y-2">
                    <Select onValueChange={(value) => handleMultiSelect("otherLanguages", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select languages" />
                      </SelectTrigger>
                      <SelectContent>
                        {languages.map((language) => (
                          <SelectItem key={language} value={language}>{language}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <div className="flex flex-wrap gap-1">
                      {formData.otherLanguages.map((language, index) => (
                        <Badge key={index} variant="secondary" className="flex items-center gap-1">
                          {language}
                          <X className="h-3 w-3 cursor-pointer" onClick={() => handleArrayRemove("otherLanguages", index)} />
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Job Preferences */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-blue-600">Job Preferences</h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Preferred Workplace (Select all that apply)</Label>
                <div className="flex flex-wrap gap-2">
                  {["WFO (Work From Office)", "WFH (Work From Home)", "Field Work"].map((option) => (
                    <Badge
                      key={option}
                      variant={formData.preferredWorkplace.includes(option) ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => handleMultiSelect("preferredWorkplace", option)}
                    >
                      {option}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Job Type (Select all that apply)</Label>
                <div className="flex flex-wrap gap-2">
                  {["Full Time", "Part Time"].map((option) => (
                    <Badge
                      key={option}
                      variant={formData.jobType.includes(option) ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => handleMultiSelect("jobType", option)}
                    >
                      {option}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Job Looking For (Add up to 5 job titles)</Label>
                <div className="flex gap-2">
                  <Input
                    placeholder="Add job title"
                    disabled={formData.jobTitles.length >= 5}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && formData.jobTitles.length < 5) {
                        e.preventDefault();
                        handleArrayAdd("jobTitles", e.currentTarget.value);
                        e.currentTarget.value = '';
                      }
                    }}
                  />
                  <Button 
                    type="button"
                    disabled={formData.jobTitles.length >= 5}
                    onClick={(e) => {
                      const input = e.currentTarget.previousElementSibling as HTMLInputElement;
                      if (formData.jobTitles.length < 5) {
                        handleArrayAdd("jobTitles", input.value);
                        input.value = '';
                      }
                    }}
                  >
                    Add
                  </Button>
                </div>
                <div className="flex flex-wrap gap-1">
                  {formData.jobTitles.map((title, index) => (
                    <Badge key={index} variant="secondary" className="flex items-center gap-1">
                      {title}
                      <X className="h-3 w-3 cursor-pointer" onClick={() => handleArrayRemove("jobTitles", index)} />
                    </Badge>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">
                  {5 - formData.jobTitles.length} more job titles can be added
                </p>
              </div>
            </div>
          </div>

          {/* Resume Upload */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-blue-600">Resume Upload</h3>
            
            <div className="space-y-2">
              <Label htmlFor="resume">Upload Resume *</Label>
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
