"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { authApi } from "@/lib/api";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Don't apply auth check on login page
  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    if (isLoginPage) {
      setLoading(false);
      return;
    }

    const checkAuth = () => {
      const authenticated = authApi.isAuthenticated();
      setIsAuthenticated(authenticated);
      setLoading(false);
      
      if (!authenticated) {
        router.push("/admin/login");
      }
    };

    checkAuth();
  }, [router, isLoginPage]);

  const handleLogout = () => {
    authApi.logout();
    router.push("/admin/login");
  };

  // If it's the login page, just render it without the admin layout
  if (isLoginPage) {
    return <>{children}</>;
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-xl font-bold text-gray-900">
                iDigitalStudies
              </Link>
              <nav className="flex space-x-4">
                <Link
                  href="/admin/blogs"
                  className="text-gray-700 hover:text-[#EA2525] px-3 py-2 rounded-md text-sm font-medium"
                >
                  All Blogs
                </Link>
                <Link
                  href="/admin/blogs/new"
                  className="text-gray-700 hover:text-[#EA2525] px-3 py-2 rounded-md text-sm font-medium"
                >
                  Create New
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-[#EA2525] text-sm"
              >
                View Site
              </Link>
              <button
                onClick={handleLogout}
                className="bg-[#EA2525] text-white px-4 py-2 rounded-md text-sm hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
