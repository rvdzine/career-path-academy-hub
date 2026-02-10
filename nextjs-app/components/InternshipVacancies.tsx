"use client";
import Link from "next/link"

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users, Building, ArrowUpDown, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { vacancyApi } from "@/lib/api";
import { Vacancy } from "@/lib/types";
import { getMediaUrl } from "@/lib/api";

interface HardcodedVacancy {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  stipend: string;
  posted: string;
  skills: string[];
  description: string;
  requirements: string[];
}

const InternshipVacancies = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [apiVacancies, setApiVacancies] = useState<Vacancy[]>([]);
  const [loading, setLoading] = useState(true);
  const [applyingFor, setApplyingFor] = useState<string | null>(null);
  const [selectedVacancy, setSelectedVacancy] = useState<Vacancy | HardcodedVacancy | null>(null);
  const [showJobDescModal, setShowJobDescModal] = useState(false);
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  // Hardcoded vacancies (existing ones)
  const hardcodedVacancies: HardcodedVacancy[] = [
    {
      id: 1,
      title: "Digital Marketing Intern",
      company: "TechCorp Solutions",
      location: "Mumbai, Maharashtra",
      type: "Hybrid",
      stipend: "₹8,000/month",
      posted: "2 days ago",
      skills: ["SEO", "Social Media", "Content Writing"],
      description: "Join our dynamic marketing team to gain hands-on experience in digital marketing campaigns, SEO optimization, and social media management. You will work closely with experienced marketers and learn industry best practices.",
      requirements: ["Currently pursuing/completed digital marketing course", "Basic knowledge of SEO and social media", "Good communication skills"]
    },
    {
      id: 2,
      title: "SEO Specialist Intern",
      company: "E-commerce Giants",
      location: "Bangalore, Karnataka",
      type: "On-site",
      stipend: "₹12,000/month",
      posted: "5 days ago",
      skills: ["SEO", "Google Analytics", "Keyword Research"],
      description: "Work with our SEO team to optimize website content, conduct keyword research, and improve organic search rankings. Learn advanced SEO techniques and tools used by industry professionals.",
      requirements: ["SEO certification preferred", "Knowledge of Google Analytics", "Understanding of keyword research tools"]
    },
    {
      id: 3,
      title: "Social Media Marketing Intern",
      company: "Creative Agency Inc",
      location: "Delhi, NCR",
      type: "Remote",
      stipend: "₹10,000/month",
      posted: "1 week ago",
      skills: ["Social Media", "Content Creation", "Canva"],
      description: "Create engaging content for social media platforms, manage posting schedules, and analyze social media performance metrics. Develop creative campaigns that resonate with target audiences.",
      requirements: ["Strong creative skills", "Experience with design tools", "Understanding of social media platforms"]
    },
    {
      id: 4,
      title: "PPC Campaign Intern",
      company: "Digital Solutions Ltd",
      location: "Pune, Maharashtra",
      type: "Hybrid",
      stipend: "₹9,000/month",
      posted: "3 days ago",
      skills: ["Google Ads", "PPC", "Analytics"],
      description: "Assist in creating and managing PPC campaigns, monitor ad performance, and optimize campaigns for better ROI. Learn how to maximize advertising budgets and drive conversions.",
      requirements: ["Google Ads certification", "Basic understanding of PPC", "Analytical mindset"]
    },
    {
      id: 5,
      title: "Email Marketing Intern",
      company: "Startup Hub",
      location: "Hyderabad, Telangana",
      type: "Remote",
      stipend: "₹7,000/month",
      posted: "4 days ago",
      skills: ["Email Marketing", "Automation", "Analytics"],
      description: "Design email campaigns, set up automation workflows, and track email marketing performance metrics. Master the art of crafting compelling email content that drives engagement.",
      requirements: ["Knowledge of email marketing tools", "Understanding of automation", "Good writing skills"]
    },
    {
      id: 6,
      title: "Content Marketing Intern",
      company: "Media House Pro",
      location: "Chennai, Tamil Nadu",
      type: "On-site",
      stipend: "₹11,000/month",
      posted: "6 days ago",
      skills: ["Content Strategy", "Writing", "SEO"],
      description: "Create compelling content for blogs, websites, and marketing materials. Collaborate with the marketing team on content strategy and learn how to create content that converts.",
      requirements: ["Excellent writing skills", "Content strategy knowledge", "SEO understanding"]
    }
  ];

  useEffect(() => {
    fetchVacancies();
  }, []);

  const fetchVacancies = async () => {
    try {
      const response = await vacancyApi.getVacancies({ status: 'published' });
      setApiVacancies(response.data || []);
    } catch (error) {
      console.error("Failed to fetch vacancies:", error);
      setApiVacancies([]);
    } finally {
      setLoading(false);
    }
  };

  const handleApply = (title: string, company: string) => {
    // Show loading state
    setApplyingFor(title);
    // Navigate to the form after a brief moment
    setTimeout(() => {
      router.push(`/internship-form?job=${encodeURIComponent(title)}`);
    }, 300);
  };

  const handleViewJobDescription = (vacancy: Vacancy | HardcodedVacancy) => {
    setSelectedVacancy(vacancy);
    setShowJobDescModal(true);
  };

  const handleDownloadFile = (fileUrl: string) => {
    window.open(fileUrl, '_blank');
  };

  const totalVacancies = apiVacancies.length + hardcodedVacancies.length;

  // Sort vacancies based on selected order
  const getSortedVacancies = () => {
    const allVacancies = [...apiVacancies, ...hardcodedVacancies];
    
    return allVacancies.sort((a, b) => {
      // For API vacancies, use created_at
      // For hardcoded vacancies, we'll use a mock date based on "posted" text
      const getDate = (vacancy: Vacancy | HardcodedVacancy) => {
        if ('created_at' in vacancy) {
          return new Date(vacancy.created_at).getTime();
        } else {
          // Parse "X days ago" to approximate date
          const daysAgo = parseInt(vacancy.posted.match(/\d+/)?.[0] || '0');
          return Date.now() - (daysAgo * 24 * 60 * 60 * 1000);
        }
      };

      const dateA = getDate(a);
      const dateB = getDate(b);

      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });
  };

  const sortedVacancies = getSortedVacancies();

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#EA2525] to-[#AA2526]  bg-clip-text text-transparent">
          Open Internship Vacancies
        </h2>
        <p className="text-lg text-muted-foreground">
          Discover exciting internship opportunities from top companies
        </p>
        <div className="flex justify-center items-center gap-4 mt-4 flex-wrap">
          <Badge className="bg-green-100 text-green-700">
            {totalVacancies} Active Positions
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

          <Link className="hidden md:flex items-center gap-2 bg-[#EA2525] text-white px-4 py-2 rounded-md hover:bg-red-600 transition text-sm shadow-md"
           href = "/admin/vacancies" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Manage Vacancy (Officals only)
          </Link>
        </div>
      </div>

      <div className="grid gap-6">
        {/* Sorted Vacancies (API + Hardcoded) */}
        {sortedVacancies.map((vacancy) => {
          const isApiVacancy = 'created_at' in vacancy;
          const vacancyKey = isApiVacancy ? `api-${vacancy.id}` : `hardcoded-${vacancy.id}`;
          
          return (
            <Card key={vacancyKey} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <CardTitle className="text-xl text-red-600">{vacancy.title}</CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Building className="w-4 h-4" />
                        {vacancy.company}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {vacancy.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {isApiVacancy 
                          ? new Date(vacancy.created_at).toLocaleDateString()
                          : vacancy.posted
                        }
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold">{vacancy.stipend}</div>
                    <Badge variant="outline">
                      {isApiVacancy ? vacancy.job_type : vacancy.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground line-clamp-2">
                  {isApiVacancy ? vacancy.job_description_header : vacancy.description}
                </p>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-sm mb-2">Required Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {(isApiVacancy ? vacancy.skills_list : vacancy.skills).map((skill, index) => (
                        <Badge key={`${vacancyKey}-skill-${index}`} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm mb-2">Requirements:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {isApiVacancy ? (
                        vacancy.requirements_list && vacancy.requirements_list.length > 0 ? (
                          vacancy.requirements_list.map((req, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                              {req}
                            </li>
                          ))
                        ) : (
                          <li className="text-muted-foreground">No requirements listed</li>
                        )
                      ) : (
                        vacancy.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                            {req}
                          </li>
                        ))
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
                    onClick={() => handleApply(vacancy.title, vacancy.company)} disabled={applyingFor === vacancy.title}
                    className="flex-1 bg-gradient-to-r from-[#EA2525] to-[#AA2526] hover:from-[#AA2526] hover:to-[#EA2525]"
                  >
                    {applyingFor === vacancy.title ? "Loading..." : "Apply Now"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Job Description Modal */}
      {showJobDescModal && selectedVacancy && (
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
              <h3 className="text-xl font-semibold mb-2">{selectedVacancy.title}</h3>
              <p className="text-muted-foreground mb-4">{selectedVacancy.company}</p>
              
              {(() => {
                // Check if it's an API vacancy with job_description_body
                if ('job_description_body' in selectedVacancy && selectedVacancy.job_description_body && selectedVacancy.job_description_body.trim()) {
                  return (
                    <div className="prose max-w-none">
                      <p className="whitespace-pre-wrap">{selectedVacancy.job_description_body}</p>
                    </div>
                  );
                }
                // Check if it's an API vacancy with job_description_file
                if ('job_description_file' in selectedVacancy && selectedVacancy.job_description_file) {
                  return (
                    <div className="space-y-4">
                      <p className="text-muted-foreground">Job description is available as a document.</p>
                      <div className="flex gap-4">
                        <Button
                          onClick={() => window.open(getMediaUrl(selectedVacancy.job_description_file), '_blank')}
                          className="bg-gradient-to-r from-[#EA2525] to-[#AA2526] hover:from-[#AA2526] hover:to-[#EA2525]"
                        >
                          View Document
                        </Button>
                        {/* <Button
                          variant="outline"
                          onClick={() => {
                            const link = document.createElement('a');
                            link.href = getMediaUrl(selectedVacancy.job_description_file);
                            link.download = `${selectedVacancy.title}_JD`;
                            link.click();
                          }}
                        >
                          Download Document
                        </Button> */}
                      </div>
                      {selectedVacancy.job_description_file?.endsWith('.pdf') && (
                        <iframe
                          src={getMediaUrl(selectedVacancy.job_description_file)}
                          className="w-full h-96 border rounded"
                          title="Job Description PDF"
                        />
                      )}
                    </div>
                  );
                }
                // Check if it's a hardcoded vacancy with description
                if ('description' in selectedVacancy) {
                  return (
                    <div className="prose max-w-none">
                      <p className="whitespace-pre-wrap">{selectedVacancy.description}</p>
                    </div>
                  );
                }
                // No job description available
                return (
                  <div className="text-center text-muted-foreground py-8">
                    <p>No job description available.</p>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InternshipVacancies;
