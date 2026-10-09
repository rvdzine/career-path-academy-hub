import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Institute of Digital Studies (IDS)",
  description:
    "Official Privacy Policy of the Institute of Digital Studies (IDS), a subsidiary of Cybershield Technologies Pvt. Ltd., covering data collection, protection, and privacy practices.",
  alternates: {
    canonical: "https://idigitalstudies.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Institute of Digital Studies (IDS)",
    description:
      "Official Privacy Policy of the Institute of Digital Studies (IDS), a subsidiary of Cybershield Technologies Pvt. Ltd.",
    url: "https://idigitalstudies.com/privacy-policy",
    siteName: "IDS",
    type: "website",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
