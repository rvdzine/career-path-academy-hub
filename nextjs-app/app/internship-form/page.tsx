import { Suspense } from "react";
import InternshipForm from "@/components/InternshipForm";

export default function InternshipFormPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InternshipForm />
    </Suspense>
  );
}

