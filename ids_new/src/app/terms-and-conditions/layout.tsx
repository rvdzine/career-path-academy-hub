import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Institute of Digital Studies (IDS)",
  description:
    "Official Terms and Conditions of the Institute of Digital Studies (IDS), a subsidiary of Cybershield Technologies Pvt. Ltd., covering website use, user accounts, and our placement assistance policy.",
  alternates: {
    canonical: "https://idigitalstudies.com/terms-and-conditions",
  },
  openGraph: {
    title: "Terms and Conditions | Institute of Digital Studies (IDS)",
    description:
      "Official Terms and Conditions of the Institute of Digital Studies (IDS), a subsidiary of Cybershield Technologies Pvt. Ltd.",
    url: "https://idigitalstudies.com/terms-and-conditions",
    siteName: "IDS",
    type: "website",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
