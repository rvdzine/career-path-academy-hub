"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { authApi, vacancyApi } from "@/lib/api";
import VacancyForm from "@/components/admin/VacancyForm";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { VacancyFormData } from "@/lib/types";

export default function EditVacancyPage() {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;
  const [vacancy, setVacancy] = useState<(VacancyFormData & { slug: string }) | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authApi.isAuthenticated()) {
      router.push("/admin/login");
      return;
    }
    fetchVacancy();
  }, [slug]);

  const fetchVacancy = async () => {
    try {
      const response = await vacancyApi.getVacancyBySlug(slug);
      console.log('Fetched vacancy data:', response.data);
      setVacancy({
        slug: response.data.slug,
        title: response.data.title,
        company: response.data.company,
        location: response.data.location,
        job_type: response.data.job_type,
        stipend: response.data.stipend,
        job_description_header: response.data.job_description_header || '',
        job_description_body: response.data.job_description_body || '',
        job_description_file: null, // File will be shown as existing, not editable directly
        requirements: response.data.requirements,
        skills: response.data.skills,
        status: response.data.status,
      });
    } catch (error) {
      console.error("Failed to fetch vacancy:", error);
      router.push("/admin/vacancies");
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
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Vacancy not found</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/admin/vacancies">
          <Button variant="outline">← Back to Vacancies</Button>
        </Link>
      </div>
      <VacancyForm initialData={vacancy} isEdit={true} />
    </div>
  );
}
