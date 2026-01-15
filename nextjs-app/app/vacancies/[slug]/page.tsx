"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { vacancyApi } from "@/lib/api";
import { Vacancy } from "@/lib/types";
import { getMediaUrl } from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Building, Briefcase } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function VacancyDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [vacancy, setVacancy] = useState<Vacancy | null>(null);
  const [loading, setLoading] = useState(true);
  const [showJobDescModal, setShowJobDescModal] = useState(false);

  useEffect(() => {
    fetchVacancy();
  }, [slug]);

  const fetchVacancy = async () => {
    try {
      const response = await vacancyApi.getVacancyBySlug(slug);
      setVacancy(response.data);
    } catch (error) {
      console.error("Failed to fetch vacancy:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (!vacancy) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Vacancy Not Found</h1>
          <Link href="/placement">
            <Button>Back to Vacancies</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-10 max-w-4xl">
        <div className="mb-6">
          <Link href="/admin/vacancies">
            <Button variant="outline">← Back to All Vacancies</Button>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-3xl text-red-600 mb-2">
                    {vacancy.title}
                  </CardTitle>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Building className="w-4 h-4" />
                      {vacancy.company}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {vacancy.location}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">
                    {vacancy.stipend}
                  </div>
                  <Badge variant="outline" className="mt-2">
                    {vacancy.job_type}
                  </Badge>
                </div>
              </div>

              <div className="flex gap-2">
                <Badge className="bg-purple-100 text-purple-700">
                  <Briefcase className="w-3 h-3 mr-1" />
                  {vacancy.status}
                </Badge>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Job Description Header */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Job Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                {vacancy.job_description_header}
              </p>
              <Button
                onClick={() => setShowJobDescModal(true)}
                variant="outline"
                className="mt-4"
              >
                View Full Job Description
              </Button>
            </div>

            {/* Required Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Required Skills</h3>
              <div className="flex flex-wrap gap-2">
                {vacancy.skills_list.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Requirements</h3>
              <ul className="space-y-2">
                {vacancy.requirements_list.map((req, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Apply Button */}
            <div className="pt-6 border-t">
              <Link href={`/internship-form?job=${encodeURIComponent(vacancy.title)}`}>
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#EA2525] to-[#AA2526] hover:from-[#AA2526] hover:to-[#EA2525]"
                >
                  Apply for this Position
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex justify-between text-sm text-muted-foreground pt-4 border-t">
              <span>Views: {vacancy.views_count}</span>
              <span>Applications: {vacancy.applications_count}</span>
              <span>Posted: {new Date(vacancy.created_at).toLocaleDateString()}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Job Description Modal */}
      {showJobDescModal && vacancy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={() => setShowJobDescModal(false)}>
          <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full mx-4 max-h-[80vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
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
              <h3 className="text-xl font-semibold mb-2">{vacancy.title}</h3>
              <p className="text-muted-foreground mb-4">{vacancy.company}</p>
              
              {(() => {
                // Check if there's a text job description
                if (vacancy.job_description_body && vacancy.job_description_body.trim()) {
                  return (
                    <div className="prose max-w-none">
                      <p className="whitespace-pre-wrap">{vacancy.job_description_body}</p>
                    </div>
                  );
                }
                // Check if there's a file job description
                if (vacancy.job_description_file) {
                  return (
                    <div className="space-y-4">
                      <p className="text-muted-foreground">Job description is available as a document.</p>
                      <div className="flex gap-4">
                        <Button
                          onClick={() => window.open(getMediaUrl(vacancy.job_description_file), '_blank')}
                          className="bg-gradient-to-r from-[#EA2525] to-[#AA2526] hover:from-[#AA2526] hover:to-[#EA2525]"
                        >
                          View Document
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => {
                            const link = document.createElement('a');
                            link.href = getMediaUrl(vacancy.job_description_file);
                            link.download = `${vacancy.title}_JD`;
                            link.click();
                          }}
                        >
                          Download Document
                        </Button>
                      </div>
                      {vacancy.job_description_file?.endsWith('.pdf') && (
                        <iframe
                          src={getMediaUrl(vacancy.job_description_file)}
                          className="w-full h-96 border rounded"
                          title="Job Description PDF"
                        />
                      )}
                    </div>
                  );
                }
                // No job description available
                return <p className="text-muted-foreground">No detailed job description available.</p>;
              })()}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
