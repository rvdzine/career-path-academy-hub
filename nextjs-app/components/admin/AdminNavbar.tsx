"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  Briefcase,
  GraduationCap,
  ExternalLink,
  LogOut,
  ShieldCheck,
  Menu,
  X,
} from "lucide-react";
import { authApi } from "@/lib/api";

export default function AdminNavbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<{ username: string } | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const storedUser = typeof window !== "undefined" ? localStorage.getItem("user") : null;
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        setUser({ username: "Admin" });
      }
    } else {
      setUser({ username: "Admin" });
    }
  }, []);

  // Do not render navbar on the login page
  if (pathname === "/admin/login") {
    return null;
  }

  const handleLogout = () => {
    if (confirm("Are you sure you want to log out?")) {
      authApi.logout();
      router.push("/admin/login");
    }
  };

  const navLinks = [
    {
      name: "Dashboard",
      href: "/admin",
      icon: LayoutDashboard,
      active: pathname === "/admin",
    },
    {
      name: "Manage Blogs",
      href: "/admin/blogs",
      icon: BookOpen,
      active: pathname.startsWith("/admin/blogs"),
    },
    {
      name: "Manage Vacancies",
      href: "/admin/vacancies",
      icon: Briefcase,
      active: pathname.startsWith("/admin/vacancies"),
    },
    {
      name: "Placed Students",
      href: "/admin/placed-students",
      icon: GraduationCap,
      active: pathname.startsWith("/admin/placed-students"),
    },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Brand Logo & Title */}
          <div className="flex items-center gap-6">
            <Link href="/admin" className="flex items-center gap-3">
              <Image
                src="/IDS_LOGO.svg"
                width={130}
                height={40}
                alt="Institute of Digital Studies"
                priority
                className="h-9 w-auto"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition ${
                      item.active
                        ? "bg-red-50 text-[#EA2525]"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${item.active ? "text-[#EA2525]" : "text-gray-500"}`} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Live Website Link */}
            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-1 text-xs font-medium text-gray-600 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-200 transition"
            >
              <span>Live Site</span>
              <ExternalLink className="w-3 h-3 text-gray-400" />
            </Link>

            {/* User Badge */}
            <div className="flex items-center gap-1.5 bg-gray-100 px-3 py-1.5 rounded-full text-xs text-gray-700">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>
                <strong className="text-gray-900">{user?.username || "admin"}</strong>
              </span>
            </div>

            {/* Sign Out Button */}
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 text-xs font-semibold bg-red-50 text-red-700 hover:bg-red-100 px-3.5 py-2 rounded-lg transition border border-red-200"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition ${
                  item.active
                    ? "bg-red-50 text-[#EA2525]"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon className={`w-5 h-5 ${item.active ? "text-[#EA2525]" : "text-gray-500"}`} />
                <span>{item.name}</span>
              </Link>
            );
          })}

          <div className="pt-3 border-t border-gray-100 space-y-2">
            <div className="flex items-center justify-between px-3 py-2 text-xs text-gray-500">
              <span>Signed in as:</span>
              <strong className="text-gray-900">{user?.username || "admin"}</strong>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/"
                target="_blank"
                className="flex items-center justify-center gap-1 text-xs font-semibold py-2 px-3 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50"
              >
                <span>Live Site</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center justify-center gap-1 text-xs font-semibold py-2 px-3 rounded-lg bg-red-50 text-red-700 border border-red-200 hover:bg-red-100"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
