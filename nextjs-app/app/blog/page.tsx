import type { Metadata } from "next";
import Blog from "@/components/pages/Blog";

export const metadata: Metadata = {
  keywords: [], // Remove keywords from blog listing page
};

export default function BlogPage() {
  return <Blog />;
}

