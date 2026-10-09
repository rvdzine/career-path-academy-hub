"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { authApi } from "@/lib/api";
import VacancyForm from "@/components/admin/VacancyForm";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CreateVacancyPage() {
  const router = useRouter();

  useEffect(() => {
    if (!authApi.isAuthenticated()) {
      router.push("/admin/login");
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/admin/vacancies">
          <Button variant="outline">← Back to Vacancies</Button>
        </Link>
      </div>
      <VacancyForm />
    </div>
  );
}
