import type { Metadata } from "next";
import ThankYouClient from "@/components/pages/ThankYouClient";

export const metadata: Metadata = {
  title: "Thank You | Institute of Digital Studies",
  description: "Thank you for contacting Institute of Digital Studies.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return <ThankYouClient />;
}
