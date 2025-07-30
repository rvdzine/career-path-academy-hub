
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users, Clock, Building } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

interface Vacancy {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  duration: string;
  stipend: string;
  posted: string;
  skills: string[];
  description: string;
  requirements: string[];
}

const InternshipVacancies = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const vacancies: Vacancy[] = [
    {
      id: 1,
      title: "Digital Marketing Intern",
      company: "TechCorp Solutions",
      location: "Mumbai, Maharashtra",
      type: "Hybrid",
      duration: "3 months",
      stipend: "₹8,000/month",
      posted: "2 days ago",
      skills: ["SEO", "Social Media", "Content Writing"],
      description: "Join our dynamic marketing team to gain hands-on experience in digital marketing campaigns, SEO optimization, and social media management.",
      requirements: ["Currently pursuing/completed digital marketing course", "Basic knowledge of SEO and social media", "Good communication skills"]
    },
    {
      id: 2,
      title: "SEO Specialist Intern",
      company: "E-commerce Giants",
      location: "Bangalore, Karnataka",
      type: "On-site",
      duration: "6 months",
      stipend: "₹12,000/month",
      posted: "5 days ago",
      skills: ["SEO", "Google Analytics", "Keyword Research"],
      description: "Work with our SEO team to optimize website content, conduct keyword research, and improve organic search rankings.",
      requirements: ["SEO certification preferred", "Knowledge of Google Analytics", "Understanding of keyword research tools"]
    },
    {
      id: 3,
      title: "Social Media Marketing Intern",
      company: "Creative Agency Inc",
      location: "Delhi, NCR",
      type: "Remote",
      duration: "4 months",
      stipend: "₹10,000/month",
      posted: "1 week ago",
      skills: ["Social Media", "Content Creation", "Canva"],
      description: "Create engaging content for social media platforms, manage posting schedules, and analyze social media performance metrics.",
      requirements: ["Strong creative skills", "Experience with design tools", "Understanding of social media platforms"]
    },
    {
      id: 4,
      title: "PPC Campaign Intern",
      company: "Digital Solutions Ltd",
      location: "Pune, Maharashtra",
      type: "Hybrid",
      duration: "3 months",
      stipend: "₹9,000/month",
      posted: "3 days ago",
      skills: ["Google Ads", "PPC", "Analytics"],
      description: "Assist in creating and managing PPC campaigns, monitor ad performance, and optimize campaigns for better ROI.",
      requirements: ["Google Ads certification", "Basic understanding of PPC", "Analytical mindset"]
    },
    {
      id: 5,
      title: "Email Marketing Intern",
      company: "Startup Hub",
      location: "Hyderabad, Telangana",
      type: "Remote",
      duration: "4 months",
      stipend: "₹7,000/month",
      posted: "4 days ago",
      skills: ["Email Marketing", "Automation", "Analytics"],
      description: "Design email campaigns, set up automation workflows, and track email marketing performance metrics.",
      requirements: ["Knowledge of email marketing tools", "Understanding of automation", "Good writing skills"]
    },
    {
      id: 6,
      title: "Content Marketing Intern",
      company: "Media House Pro",
      location: "Chennai, Tamil Nadu",
      type: "On-site",
      duration: "5 months",
      stipend: "₹11,000/month",
      posted: "6 days ago",
      skills: ["Content Strategy", "Writing", "SEO"],
      description: "Create compelling content for blogs, websites, and marketing materials. Collaborate with the marketing team on content strategy.",
      requirements: ["Excellent writing skills", "Content strategy knowledge", "SEO understanding"]
    }
  ];

  const handleApply = (vacancy: typeof vacancies[0]) => {
    navigate(`/internship-form?job=${encodeURIComponent(vacancy.title)}`);
    console.log("Applying for:", vacancy.title);
    toast({
      title: "Application Submitted!",
      description: `Your application for ${vacancy.title} at ${vacancy.company} has been submitted.`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#EA2525] to-[#AA2526]  bg-clip-text text-transparent">
          Open Internship Vacancies
        </h2>
        <p className="text-lg text-muted-foreground">
          Discover exciting internship opportunities from top companies
        </p>
        <Badge className="bg-green-100 text-green-700 mt-2">
          {vacancies.length} Active Positions
        </Badge>
      </div>

      <div className="grid gap-6">
        {vacancies.map((vacancy) => (
          <Card key={vacancy.id} className="hover:shadow-lg transition-shadow duration-300">
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
                      {vacancy.posted}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold">{vacancy.stipend}</div>
                  <Badge variant="outline">{vacancy.type}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{vacancy.description}</p>

              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm mb-2">Required Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {vacancy.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-sm mb-2">Requirements:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {vacancy.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    Duration: {vacancy.duration}
                  </div>
                </div>
                <Button
                  onClick={() => handleApply(vacancy)}
                  className="bg-gradient-to-r from-[#EA2525] to-[#AA2526] hover:from-[#AA2526] hover:to-[#EA2525]"
                >
                  Apply Now
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default InternshipVacancies;
