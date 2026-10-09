import type { Metadata } from "next";
import AdminNavbar from "@/components/admin/AdminNavbar";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <AdminNavbar />
      <div className="flex-1">{children}</div>
      <Toaster />
    </div>
  );
}

