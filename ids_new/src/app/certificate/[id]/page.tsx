import { redirect } from "next/navigation";

export default async function CertificateRedirectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  redirect(`/verify-certificate/${encodeURIComponent(id)}`);
}
