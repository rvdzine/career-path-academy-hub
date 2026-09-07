"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Building, ArrowUpDown, Check, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { vacancyApi, getMediaUrl } from "@/lib/api";
import { Vacancy } from "@/lib/types";

const InternshipVacancies = () => {
  const router = useRouter();
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);
  const [loading, setLoading] = useState(true);
  const [applyingFor, setApplyingFor] = useState<string | null>(null);
  const [selectedVacancy, setSelectedVacancy] = useState<Vacancy | null>(null);
  const [showJobDescModal, setShowJobDescModal] = useState(false);
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  useEffect(() => {
    fetchVacancies();
  }, []);

  const fetchVacancies = async () => {
    try {
      setLoading(true);
      const response = await vacancyApi.getVacancies({ status: 'published' });
      setVacancies(response.data || []);
    } catch (error) {
      console.error("Failed to fetch vacancies from database:", error);
      setVacancies([]);
    } finally {
      setLoading(false);
    }
  };

  const handleApply = (title: string, company?: string) => {
    setApplyingFor(title);
    setTimeout(() => {
      router.push(`/internship-form?job=${encodeURIComponent(title)}`);
    }, 300);
  };

  const handleViewJobDescription = (vacancy: Vacancy) => {
    setSelectedVacancy(vacancy);
    setShowJobDescModal(true);
  };

  // Sort vacancies based on selected order
  const sortedVacancies = [...vacancies].sort((a, b) => {
    const dateA = new Date(a.created_at || 0).getTime();
    const dateB = new Date(b.created_at || 0).getTime();
    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
  });

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#EA2525] to-[#AA2526] bg-clip-text text-transparent">
          Open Internship Vacancies
        </h2>
        <p className="text-lg text-muted-foreground">
          Discover exciting internship opportunities from top companies
        </p>
        <div className="flex justify-center items-center gap-4 mt-4 flex-wrap">
          <Badge className="bg-green-100 text-green-700">
            {vacancies.length} Active Positions
          </Badge>

          {/* Sort Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowSortDropdown(!showSortDropdown)}
              className="hidden md:flex items-center gap-2 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-4 py-2 rounded-md transition text-sm shadow-md"
            >
              <ArrowUpDown className="h-4 w-4" />
              Sort: {sortOrder === 'newest' ? 'Newest First' : 'Oldest First'}
            </button>

            {showSortDropdown && (
              <div className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-xl border border-gray-200 py-2 min-w-[180px] z-10">
                <button
                  onClick={() => {
                    setSortOrder('newest');
                    setShowSortDropdown(false);
                  }}
                  className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center justify-between text-sm"
                >
                  <span>Newest First</span>
                  {sortOrder === 'newest' && <Check className="h-4 w-4 text-green-600" />}
                </button>
                <button
                  onClick={() => {
                    setSortOrder('oldest');
                    setShowSortDropdown(false);
                  }}
                  className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center justify-between text-sm"
                >
                  <span>Oldest First</span>
                  {sortOrder === 'oldest' && <Check className="h-4 w-4 text-green-600" />}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-16 space-y-4">
          <Loader2 className="w-8 h-8 animate-spin text-[#EA2525]" />
          <p className="text-muted-foreground text-sm">Loading available vacancies...</p>
        </div>
      ) : sortedVacancies.length === 0 ? (
        <div className="text-center py-12 border rounded-xl bg-gray-50/50">
          <p className="text-muted-foreground text-base">No active vacancies at this moment. Please check back soon!</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {sortedVacancies.map((vacancy) => (
            <Card key={vacancy.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl text-red-600">{vacancy.title}</CardTitle>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      {vacancy.company && (
                        <div className="flex items-center gap-1">
                          <Building className="w-4 h-4" />
                          {vacancy.company}
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {vacancy.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {vacancy.created_at ? new Date(vacancy.created_at).toLocaleDateString() : "Recent"}
                      </div>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-lg font-bold">{vacancy.stipend}</div>
                    <Badge variant="outline" className="capitalize">
                      {vacancy.job_type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground line-clamp-2">
                  {vacancy.job_description_header || vacancy.job_description_body || "No description provided."}
                </p>

                <div className="space-y-3">
                  {vacancy.skills_list && vacancy.skills_list.length > 0 && (
                    <div>
                      <h4 className="font-medium text-sm mb-2">Required Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {vacancy.skills_list.map((skill, index) => (
                          <Badge key={`${vacancy.id}-skill-${index}`} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="font-medium text-sm mb-2">Requirements:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {vacancy.requirements_list && vacancy.requirements_list.length > 0 ? (
                        vacancy.requirements_list.map((req, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                            {req}
                          </li>
                        ))
                      ) : (
                        <li className="text-muted-foreground">No specific requirements listed</li>
                      )}
                    </ul>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t gap-2">
                  <Button
                    variant="outline"
                    onClick={() => handleViewJobDescription(vacancy)}
                    className="flex-1"
                  >
                    View Job Description
                  </Button>
                  <Button
                    onClick={() => handleApply(vacancy.title, vacancy.company)}
                    disabled={applyingFor === vacancy.title}
                    className="flex-1 bg-gradient-to-r from-[#EA2525] to-[#AA2526] hover:from-[#AA2526] hover:to-[#EA2525]"
                  >
                    {applyingFor === vacancy.title ? "Loading..." : "Apply Now"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Job Description Modal */}
      {showJobDescModal && selectedVacancy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setShowJobDescModal(false)}
        >
          <div
            className="bg-white rounded-lg shadow-xl max-w-3xl w-full mx-4 max-h-[80vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b flex justify-between items-center">
              <h2 className="text-2xl font-bold text-red-600">Job Description</h2>
              <button
                onClick={() => setShowJobDescModal(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <h3 className="text-xl font-semibold mb-1">{selectedVacancy.title}</h3>
              {selectedVacancy.company && (
                <p className="text-muted-foreground mb-4">{selectedVacancy.company}</p>
              )}

              {selectedVacancy.job_description_body && selectedVacancy.job_description_body.trim() ? (
                <div className="prose max-w-none">
                  <p className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                    {selectedVacancy.job_description_body}
                  </p>
                </div>
              ) : selectedVacancy.job_description_file ? (
                <div className="space-y-4">
                  <p className="text-muted-foreground">Job description is available as an attached document.</p>
                  <div className="flex gap-4">
                    <Button
                      onClick={() => window.open(getMediaUrl(selectedVacancy.job_description_file), '_blank')}
                      className="bg-gradient-to-r from-[#EA2525] to-[#AA2526] hover:from-[#AA2526] hover:to-[#EA2525]"
                    >
                      View Document
                    </Button>
                  </div>
                  {selectedVacancy.job_description_file?.endsWith('.pdf') && (
                    <iframe
                      src={getMediaUrl(selectedVacancy.job_description_file)}
                      className="w-full h-96 border rounded"
                      title="Job Description PDF"
                    />
                  )}
                </div>
              ) : selectedVacancy.job_description_header ? (
                <div className="prose max-w-none">
                  <p className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                    {selectedVacancy.job_description_header}
                  </p>
                </div>
              ) : (
                <div className="text-center text-muted-foreground py-8">
                  <p>No job description available.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InternshipVacancies;
