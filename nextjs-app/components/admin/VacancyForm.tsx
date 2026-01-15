"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { vacancyApi } from "@/lib/api";
import { VacancyFormData } from "@/lib/types";
import { useRouter } from "next/navigation";

interface VacancyFormProps {
  initialData?: VacancyFormData & { slug?: string };
  isEdit?: boolean;
}

export default function VacancyForm({ initialData, isEdit = false }: VacancyFormProps) {
  const { toast } = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState<VacancyFormData>({
    title: initialData?.title || "",
    company: initialData?.company || "",
    location: initialData?.location || "",
    job_type: initialData?.job_type || "hybrid",
    stipend: initialData?.stipend || "",
    job_description_header: initialData?.job_description_header || "",
    job_description_body: initialData?.job_description_body || "",
    job_description_file: null,
    requirements: initialData?.requirements || "",
    skills: initialData?.skills || "",
    status: initialData?.status || "draft",
  });

  const [uploadMethod, setUploadMethod] = useState<'text' | 'file'>('text');

  // Initialize upload method based on existing data
  useEffect(() => {
    if (initialData?.job_description_body) {
      setUploadMethod('text');
    } else if (isEdit) {
      // If editing and no body text, assume file method
      setUploadMethod('file');
    }
  }, [initialData, isEdit]);

  const handleChange = (field: keyof VacancyFormData, value: string | File | null) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleMethodChange = (method: 'text' | 'file') => {
    setUploadMethod(method);
    // Clear the opposite field when switching methods
    if (method === 'text') {
      setFormData(prev => ({ ...prev, job_description_file: null }));
    } else {
      setFormData(prev => ({ ...prev, job_description_body: '' }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const validTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/msword', 'image/jpeg', 'image/jpg'];
      if (!validTypes.includes(file.type)) {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF, DOCX, JPG, or JPEG file",
          variant: "destructive",
        });
        return;
      }
      handleChange("job_description_file", file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate that at least one JD method is provided
    if (uploadMethod === 'text' && !formData.job_description_body?.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter job description text",
        variant: "destructive",
      });
      return;
    }
    
    if (uploadMethod === 'file' && !formData.job_description_file && !isEdit) {
      toast({
        title: "Validation Error",
        description: "Please upload a job description file",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);

    try {
      // Prepare data based on selected method
      const submitData = { ...formData };
      if (uploadMethod === 'text') {
        // Clear file if text method is selected
        submitData.job_description_file = null;
      } else {
        // Clear text if file method is selected
        submitData.job_description_body = '';
      }

      console.log('Submitting data:', {
        ...submitData,
        job_description_file: submitData.job_description_file ? 'File selected' : 'No file'
      });

      if (isEdit && initialData?.slug) {
        await vacancyApi.updateVacancy(initialData.slug, submitData);
        toast({
          title: "Success!",
          description: "Vacancy updated successfully",
        });
      } else {
        await vacancyApi.createVacancy(submitData);
        toast({
          title: "Success!",
          description: "Vacancy created successfully",
        });
      }
      
      router.push("/admin/vacancies");
    } catch (error: any) {
      console.error("Error saving vacancy:", error);
      console.error("Error response:", error.response?.data);
      toast({
        title: "Error",
        description: error.response?.data?.message || error.response?.data?.job_description?.[0] || error.message || "Failed to save vacancy",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>{isEdit ? "Edit Vacancy" : "Create New Vacancy"}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Basic Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Job Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleChange("title", e.target.value)}
                  placeholder="e.g., Digital Marketing Intern"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                  placeholder="e.g., TechCorp Solutions"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location *</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => handleChange("location", e.target.value)}
                placeholder="e.g., Mumbai, Maharashtra"
                required
              />
            </div>
          </div>

          {/* Job Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Job Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="job_type">Job Type *</Label>
                <Select
                  value={formData.job_type}
                  onValueChange={(value: any) => handleChange("job_type", value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="remote">Remote</SelectItem>
                    <SelectItem value="on-site">On-site</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="stipend">Stipend/Salary *</Label>
                <Input
                  id="stipend"
                  value={formData.stipend}
                  onChange={(e) => handleChange("stipend", e.target.value)}
                  placeholder="e.g., ₹8,000/month"
                  required
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Description</h3>
            
            <div className="space-y-2">
              <Label htmlFor="job_description_header">Job Description Header *</Label>
              <Input
                id="job_description_header"
                value={formData.job_description_header}
                onChange={(e) => handleChange("job_description_header", e.target.value)}
                placeholder="Brief one-line description of the role"
                required
              />
              <p className="text-sm text-muted-foreground">
                This will be displayed above the skills section
              </p>
            </div>

            <div className="space-y-2">
              <Label>Job Description * (Choose one method)</Label>
              <div className="flex gap-4 mb-4">
                <Button
                  type="button"
                  variant={uploadMethod === 'text' ? 'default' : 'outline'}
                  onClick={() => handleMethodChange('text')}
                  className={uploadMethod === 'text' ? 'bg-gradient-to-r from-[#EA2525] to-[#AA2526]' : ''}
                >
                  Text Format
                </Button>
                <Button
                  type="button"
                  variant={uploadMethod === 'file' ? 'default' : 'outline'}
                  onClick={() => handleMethodChange('file')}
                  className={uploadMethod === 'file' ? 'bg-gradient-to-r from-[#EA2525] to-[#AA2526]' : ''}
                >
                  Upload Document
                </Button>
              </div>

              {uploadMethod === 'text' ? (
                <div className="space-y-2">
                  <Label htmlFor="job_description_body">Job Description Body</Label>
                  <Textarea
                    id="job_description_body"
                    value={formData.job_description_body}
                    onChange={(e) => handleChange("job_description_body", e.target.value)}
                    placeholder="Enter the complete job description here..."
                    rows={8}
                    required={uploadMethod === 'text'}
                  />
                </div>
              ) : (
                <div className="space-y-2">
                  <Label htmlFor="job_description_file">Upload Job Description</Label>
                  {isEdit && initialData?.job_description_body === '' && (
                    <div className="mb-2 p-3 bg-blue-50 border border-blue-200 rounded">
                      <p className="text-sm text-blue-800">
                        <strong>Current file:</strong> A document is already uploaded for this vacancy.
                        Upload a new file to replace it.
                      </p>
                    </div>
                  )}
                  <Input
                    id="job_description_file"
                    type="file"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg"
                    onChange={handleFileChange}
                    required={uploadMethod === 'file' && !isEdit}
                  />
                  <p className="text-sm text-muted-foreground">
                    Supported formats: PDF, DOCX, JPG, JPEG
                  </p>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="requirements">Requirements * (one per line)</Label>
              <Textarea
                id="requirements"
                value={formData.requirements}
                onChange={(e) => handleChange("requirements", e.target.value)}
                placeholder="Currently pursuing/completed digital marketing course&#10;Basic knowledge of SEO and social media&#10;Good communication skills"
                rows={5}
                required
              />
              <p className="text-sm text-muted-foreground">
                Enter each requirement on a new line
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="skills">Required Skills * (comma separated)</Label>
              <Input
                id="skills"
                value={formData.skills}
                onChange={(e) => handleChange("skills", e.target.value)}
                placeholder="SEO, Social Media, Content Writing, Google Analytics"
                required
              />
              <p className="text-sm text-muted-foreground">
                Separate skills with commas
              </p>
            </div>
          </div>

          {/* Status */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Status</h3>
            
            <div className="space-y-2">
              <Label htmlFor="status">Publication Status *</Label>
              <Select
                value={formData.status}
                onValueChange={(value: any) => handleChange("status", value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <Button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-[#EA2525] to-[#AA2526] hover:from-[#AA2526] hover:to-[#EA2525]"
            >
              {loading ? "Saving..." : isEdit ? "Update Vacancy" : "Create Vacancy"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/admin/vacancies")}
            >
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
