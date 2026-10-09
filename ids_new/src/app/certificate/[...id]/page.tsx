import { redirect } from "next/navigation";

export default async function CertificateRedirectPage({
  params,
}: {
  params: Promise<{ id: string | string[] }>;
}) {
  const resolved = await params;
  const id = Array.isArray(resolved?.id)
    ? resolved.id.join("/")
    : resolved?.id || "";
  redirect(`/verify-certificate/${id}`);
}
