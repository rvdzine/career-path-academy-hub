"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { vacancyApi } from "@/lib/api";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

interface VacancyFormData {
  title: string;
  company: string;
  location: string;
  type: string;
  duration: string;
  stipend: string;
  description: string;
  skills: string[];
  requirements: string[];
  status: string;
  is_featured: boolean;
}

const VacancyAdmin = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [vacancies, setVacancies] = useState<any[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  // Form state
  const [formData, setFormData] = useState<VacancyFormData>({
    title: "",
    company: "",
    location: "",
    type: "hybrid",
    duration: "",
    stipend: "",
    description: "",
    skills: [],
    requirements: [],
    status: "active",
    is_featured: false,
  });

  // Temporary input states for skills and requirements
  const [skillInput, setSkillInput] = useState("");
  const [requirementInput, setRequirementInput] = useState("");

  useEffect(() => {
    fetchVacancies();
  }, []);

  const fetchVacancies = async () => {
    try {
      const response = await vacancyApi.getVacancies();
      setVacancies(response.data);
    } catch (error) {
      console.error("Error fetching vacancies:", error);
    }
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const addSkill = () => {
    if (skillInput.trim()) {
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, skillInput.trim()],
      }));
      setSkillInput("");
    }
  };

  const removeSkill = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }));
  };

  const addRequirement = () => {
    if (requirementInput.trim()) {
      setFormData((prev) => ({
        ...prev,
        requirements: [...prev.requirements, requirementInput.trim()],
      }));
      setRequirementInput("");
    }
  };

  const removeRequirement = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      requirements: prev.requirements.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (editingId) {
        await vacancyApi.updateVacancy(editingId, formData);
        toast({
          title: "Success!",
          description: "Vacancy updated successfully",
        });
      } else {
        await vacancyApi.createVacancy(formData);
        toast({
          title: "Success!",
          description: "Vacancy created successfully",
        });
      }

      // Reset form
      setFormData({
        title: "",
        company: "",
        location: "",
        type: "hybrid",
        duration: "",
        stipend: "",
        description: "",
        skills: [],
        requirements: [],
        status: "active",
        is_featured: false,
      });
      setEditingId(null);
      fetchVacancies();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to save vacancy",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (vacancy: any) => {
    setFormData({
      title: vacancy.title,
      company: vacancy.company,
      location: vacancy.location,
      type: vacancy.type,
      duration: vacancy.duration,
      stipend: vacancy.stipend,
      description: vacancy.description,
      skills: vacancy.skills || [],
      requirements: vacancy.requirements || [],
      status: vacancy.status,
      is_featured: vacancy.is_featured,
    });
    setEditingId(vacancy.slug);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (slug: string) => {
    if (!confirm("Are you sure you want to delete this vacancy?")) return;

    try {
      await vacancyApi.deleteVacancy(slug);
      toast({
        title: "Success!",
        description: "Vacancy deleted successfully",
      });
      fetchVacancies();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete vacancy",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            Admin <span className="text-[#EA2525]">Job Portal</span>
          </h1>
          <p className="text-gray-600">Create and manage job vacancy postings</p>
        </div>

        {/* Create/Edit Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              {editingId ? "Edit Vacancy" : "Create New Vacancy"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Job Title */}
                <div>
                  <Label htmlFor="title">Job Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    placeholder="e.g., Digital Marketing Intern"
                    required
                  />
                </div>

                {/* Company */}
                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    placeholder="e.g., TechCorp Solutions"
                  />
                </div>

                {/* Location */}
                <div>
                  <Label htmlFor="location">Location *</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                    placeholder="e.g., Mumbai, Maharashtra"
                    required
                  />
                </div>

                {/* Type */}
                <div>
                  <Label htmlFor="type">Work Type *</Label>
                  <Select
                    value={formData.type}
                    onValueChange={(value) => handleInputChange("type", value)}
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

                {/* Duration */}
                <div>
                  <Label htmlFor="duration">Duration *</Label>
                  <Input
                    id="duration"
                    value={formData.duration}
                    onChange={(e) => handleInputChange("duration", e.target.value)}
                    placeholder="e.g., 3 months"
                    required
                  />
                </div>

                {/* Stipend */}
                <div>
                  <Label htmlFor="stipend">Stipend/Salary *</Label>
                  <Input
                    id="stipend"
                    value={formData.stipend}
                    onChange={(e) => handleInputChange("stipend", e.target.value)}
                    placeholder="e.g., ₹8,000/month"
                    required
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <Label htmlFor="description">Job Description *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  placeholder="Describe the job role and responsibilities..."
                  rows={4}
                  required
                />
              </div>

              {/* Skills */}
              <div>
                <Label>Required Skills *</Label>
                <div className="flex gap-2 mb-2">
                  <Input
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    placeholder="Add a skill"
                    onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addSkill())}
                  />
                  <Button type="button" onClick={addSkill}>
                    Add
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {skill}
                      <X
                        className="w-3 h-3 ml-1 cursor-pointer"
                        onClick={() => removeSkill(index)}
                      />
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div>
                <Label>Requirements *</Label>
                <div className="flex gap-2 mb-2">
                  <Input
                    value={requirementInput}
                    onChange={(e) => setRequirementInput(e.target.value)}
                    placeholder="Add a requirement"
                    onKeyPress={(e) =>
                      e.key === "Enter" && (e.preventDefault(), addRequirement())
                    }
                  />
                  <Button type="button" onClick={addRequirement}>
                    Add
                  </Button>
                </div>
                <div className="space-y-1">
                  {formData.requirements.map((req, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 text-sm bg-gray-50 p-2 rounded"
                    >
                      <span className="flex-1">{req}</span>
                      <X
                        className="w-4 h-4 cursor-pointer text-red-500"
                        onClick={() => removeRequirement(index)}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Status and Featured */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="status">Status *</Label>
                  <Select
                    value={formData.status}
                    onValueChange={(value) => handleInputChange("status", value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="closed">Closed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center gap-2 pt-8">
                  <input
                    type="checkbox"
                    id="is_featured"
                    checked={formData.is_featured}
                    onChange={(e) =>
                      handleInputChange("is_featured", e.target.checked)
                    }
                    className="w-4 h-4"
                  />
                  <Label htmlFor="is_featured" className="cursor-pointer">
                    Mark as Featured
                  </Label>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex gap-4">
                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-[#EA2525] hover:bg-red-600"
                >
                  {loading
                    ? "Saving..."
                    : editingId
                    ? "Update Vacancy"
                    : "Create Vacancy"}
                </Button>
                {editingId && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setEditingId(null);
                      setFormData({
                        title: "",
                        company: "",
                        location: "",
                        type: "hybrid",
                        duration: "",
                        stipend: "",
                        description: "",
                        skills: [],
                        requirements: [],
                        status: "active",
                        is_featured: false,
                      });
                    }}
                  >
                    Cancel Edit
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Existing Vacancies List */}
        <Card>
          <CardHeader>
            <CardTitle>Existing Vacancies ({vacancies.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {vacancies.map((vacancy) => (
                <div
                  key={vacancy.id}
                  className="border rounded-lg p-4 hover:shadow-md transition"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-semibold">{vacancy.title}</h3>
                      <p className="text-sm text-gray-600">
                        {vacancy.company} • {vacancy.location}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Badge
                        variant={
                          vacancy.status === "active" ? "default" : "secondary"
                        }
                      >
                        {vacancy.status}
                      </Badge>
                      {vacancy.is_featured && (
                        <Badge variant="outline">Featured</Badge>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    {vacancy.description.substring(0, 150)}...
                  </p>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleEdit(vacancy)}
                    >
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDelete(vacancy.slug)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
              {vacancies.length === 0 && (
                <p className="text-center text-gray-500 py-8">
                  No vacancies created yet. Create your first vacancy above!
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VacancyAdmin;
