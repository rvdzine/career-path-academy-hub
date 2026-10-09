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
  Award,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { authApi } from "@/lib/api";

export default function AdminNavbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      name: "Blogs",
      longName: "Manage Blogs",
      href: "/admin/blogs",
      icon: BookOpen,
      active: pathname.startsWith("/admin/blogs"),
    },
    {
      name: "Vacancies",
      longName: "Manage Vacancies",
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
    {
      name: "Enrolled Students",
      href: "/admin/students",
      icon: Award,
      active: pathname.startsWith("/admin/students"),
    },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-xs">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          {/* Left: Brand Logo & Title */}
          <div className="flex items-center gap-3 lg:gap-6 shrink-0 min-w-0">
            <Link href="/admin" className="flex items-center gap-3 shrink-0">
              <Image
                src="/assets/IDS_new_logo.svg"
                width={156}
                height={26}
                alt="Institute of Digital Studies"
                priority
                className="h-8 w-auto"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 flex-nowrap">
              {navLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`inline-flex items-center gap-1.5 px-2.5 lg:px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition shrink-0 ${
                      item.active
                        ? "bg-red-50 text-[#EA2525]"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    <Icon className={`w-4 h-4 shrink-0 ${item.active ? "text-[#EA2525]" : "text-gray-500"}`} />
                    <span className="whitespace-nowrap">
                      {item.longName ? (
                        <>
                          <span className="hidden xl:inline">Manage </span>
                          <span>{item.name}</span>
                        </>
                      ) : (
                        item.name
                      )}
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right Desktop Actions */}
          <div className="hidden md:flex items-center">
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

          <div className="pt-3 border-t border-gray-100">
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-1.5 text-xs font-semibold py-2.5 px-3 rounded-xl bg-red-50 text-red-700 border border-red-200 hover:bg-red-100 transition"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
