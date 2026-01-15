"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { vacancyApi, authApi } from "@/lib/api";
import { VacancyListItem } from "@/lib/types";
import { Plus, Edit, Trash2, Eye, CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";

export default function VacanciesAdminPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [vacancies, setVacancies] = useState<VacancyListItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authApi.isAuthenticated()) {
      router.push("/admin/login");
      return;
    }
    fetchVacancies();
  }, []);

  const fetchVacancies = async () => {
    try {
      const response = await vacancyApi.getMyVacancies();
      setVacancies(response.data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch vacancies",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (slug: string) => {
    if (!confirm("Are you sure you want to delete this vacancy?")) return;

    try {
      await vacancyApi.deleteVacancy(slug);
      toast({
        title: "Success",
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

  const handlePublish = async (slug: string) => {
    try {
      await vacancyApi.publishVacancy(slug);
      toast({
        title: "Success",
        description: "Vacancy published successfully",
      });
      fetchVacancies();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to publish vacancy",
        variant: "destructive",
      });
    }
  };

  const handleUnpublish = async (slug: string) => {
    try {
      await vacancyApi.unpublishVacancy(slug);
      toast({
        title: "Success",
        description: "Vacancy unpublished successfully",
      });
      fetchVacancies();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to unpublish vacancy",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Manage Vacancies</h1>
          <p className="text-muted-foreground">Create and manage job vacancies</p>
        </div>
        <div className="flex gap-2">
          {/* <Link href="/admin">
            <Button variant="outline">Back to Admin</Button>
          </Link> */}
          <Link href="/admin/vacancies/create">
            <Button className="bg-gradient-to-r from-[#EA2525] to-[#AA2526]">
              <Plus className="w-4 h-4 mr-2" />
              Create Vacancy
            </Button>
          </Link>
        </div>
      </div>

      {vacancies.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground mb-4">No vacancies yet</p>
            <Link href="/admin/vacancies/create">
              <Button className="bg-[#EA2525] hover:bg-red-600">Create Your First Vacancy</Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {vacancies.map((vacancy) => (
            <Card key={vacancy.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <CardTitle className="text-xl">{vacancy.title}</CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{vacancy.company}</span>
                      <span>•</span>
                      <span>{vacancy.location}</span>
                      <span>•</span>
                      <span>{vacancy.stipend}</span>
                    </div>
                    <div className="flex gap-2">
                      <Badge
                        variant={
                          vacancy.status === "published"
                            ? "default"
                            : vacancy.status === "draft"
                            ? "secondary"
                            : "destructive"
                        }
                      >
                        {vacancy.status}
                      </Badge>
                      <Badge variant="outline">{vacancy.job_type}</Badge>
                      {vacancy.skills_list.slice(0, 3).map((skill, idx) => (
                        <Badge key={idx} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(`/vacancies/${vacancy.slug}`, "_blank")}
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Link href={`/admin/vacancies/edit/${vacancy.slug}`}>
                      <Button size="sm" variant="outline">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </Link>
                    {vacancy.status === "draft" ? (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handlePublish(vacancy.slug)}
                      >
                        <CheckCircle className="w-4 h-4" />
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleUnpublish(vacancy.slug)}
                      >
                        <XCircle className="w-4 h-4" />
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDelete(vacancy.slug)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Views: {vacancy.views_count}</span>
                  <span>Applications: {vacancy.applications_count}</span>
                  <span>Created: {new Date(vacancy.created_at).toLocaleDateString()}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
