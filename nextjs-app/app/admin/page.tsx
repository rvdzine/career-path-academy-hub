"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import {
  BookOpen,
  Briefcase,
  GraduationCap,
  Plus,
  ExternalLink,
  LogOut,
  Activity,
  Database,
  Cloud,
  ShieldCheck,
  Eye,
  ArrowRight,
  RefreshCw,
  AlertTriangle,
  ServerCrash,
  CheckCircle2,
  Clock,
} from "lucide-react";
import { blogApi, vacancyApi, authApi } from "@/lib/api";

interface HealthData {
  status: string;
  database: string;
  cloudinary: boolean;
  cloud_name?: string;
  service: string;
  version: string;
  timestamp: string;
  uptime_seconds?: number;
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<{ username: string } | null>(null);
  const [checkingAuth, setCheckingAuth] = useState(true);

  // Live Stats
  const [stats, setStats] = useState({
    totalBlogs: 0,
    publishedBlogs: 0,
    draftBlogs: 0,
    totalVacancies: 0,
    totalStudents: 0,
  });

  // Dynamic Live Health Status
  const [backendHealth, setBackendHealth] = useState<HealthData | null>(null);
  const [healthLoading, setHealthLoading] = useState(true);
  const [healthError, setHealthError] = useState<string | null>(null);
  const [lastCheckedTime, setLastCheckedTime] = useState<string>("");

  const loadDashboardData = useCallback(async () => {
    setHealthLoading(true);
    setHealthError(null);
    const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

    // 1. Live Health Check Ping
    try {
      const healthRes = await axios.get(`${API_BASE}/health/`, { timeout: 4000 });
      setBackendHealth(healthRes.data);
      setHealthError(null);
    } catch (err: any) {
      console.warn("Backend health check failed:", err);
      setBackendHealth(null);
      setHealthError(
        err.code === "ERR_NETWORK" || err.message?.includes("Network Error")
          ? "Backend is offline / connection refused"
          : "Backend returned an error"
      );
    } finally {
      setHealthLoading(false);
      setLastCheckedTime(new Date().toLocaleTimeString());
    }

    // 2. Fetch Live Content Stats (if backend reachable)
    let totalBlogs = 0;
    let publishedBlogs = 0;
    let draftBlogs = 0;
    try {
      const blogsRes = await blogApi.getBlogs({});
      const blogsList = blogsRes.data || [];
      totalBlogs = blogsList.length;
      publishedBlogs = blogsList.filter((b: any) => b.status === "published").length;
      draftBlogs = blogsList.filter((b: any) => b.status === "draft").length;
    } catch {
      // Backend offline
    }

    let totalVacancies = 0;
    try {
      const vacRes = await vacancyApi.getVacancies({});
      totalVacancies = (vacRes.data || []).length;
    } catch {
      // Backend offline
    }

    let totalStudents = 0;
    try {
      const studentsRes = await axios.get(`${API_BASE}/placed-students/`, { timeout: 4000 });
      totalStudents = (studentsRes.data || []).length;
    } catch {
      // Backend offline
    }

    setStats({
      totalBlogs,
      publishedBlogs,
      draftBlogs,
      totalVacancies,
      totalStudents,
    });
  }, []);

  useEffect(() => {
    // 1. Auth Protection Check
    const token = typeof window !== "undefined" ? localStorage.getItem("auth_token") : null;
    const storedUser = typeof window !== "undefined" ? localStorage.getItem("user") : null;

    if (!token) {
      router.push("/admin/login");
      return;
    }

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        setUser({ username: "Admin" });
      }
    } else {
      setUser({ username: "Admin" });
    }

    setCheckingAuth(false);
    loadDashboardData();
  }, [router, loadDashboardData]);

  const handleLogout = () => {
    if (confirm("Are you sure you want to log out?")) {
      authApi.logout();
      router.push("/admin/login");
    }
  };

  const formatUptime = (seconds?: number) => {
    if (!seconds) return "Just started";
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (hrs > 0) return `${hrs}h ${mins}m`;
    if (mins > 0) return `${mins}m ${secs}s`;
    return `${secs}s`;
  };

  if (checkingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm text-gray-500 font-medium">Verifying admin session...</p>
        </div>
      </div>
    );
  }

  const isServerOnline = backendHealth !== null && backendHealth.status === "healthy";
  const isDbConnected = backendHealth?.database === "connected";
  const isCloudinaryActive = Boolean(backendHealth?.cloudinary);

  return (
    <div className="py-6">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* ========================================================================= */}
        {/* DYNAMIC REAL-TIME SERVER STATUS BAR */}
        {/* ========================================================================= */}
        <div
          className={`border rounded-2xl p-5 shadow-sm transition-all duration-300 ${
            healthLoading
              ? "bg-amber-50/60 border-amber-200"
              : isServerOnline
              ? "bg-white border-emerald-200 ring-1 ring-emerald-100"
              : "bg-red-50/80 border-red-200 ring-1 ring-red-100"
          }`}
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Left: Server Status & Details */}
            <div className="flex items-center gap-3.5">
              {/* Pulsing Status Dot */}
              <div className="relative flex items-center justify-center">
                <div
                  className={`w-3.5 h-3.5 rounded-full ${
                    healthLoading
                      ? "bg-amber-500 animate-pulse"
                      : isServerOnline
                      ? "bg-emerald-500 animate-pulse"
                      : "bg-red-500 animate-ping"
                  }`}
                ></div>
                {!isServerOnline && !healthLoading && (
                  <div className="absolute w-3.5 h-3.5 rounded-full bg-red-600"></div>
                )}
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-bold text-gray-900">
                    FastAPI Backend 2.0
                  </p>

                  {/* Status Badge */}
                  {healthLoading ? (
                    <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                      <RefreshCw className="w-2.5 h-2.5 animate-spin" />
                      CHECKING...
                    </span>
                  ) : isServerOnline ? (
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                      <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                      ONLINE • HEALTHY
                    </span>
                  ) : (
                    <span className="bg-red-100 text-red-800 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                      <ServerCrash className="w-2.5 h-2.5 text-red-600" />
                      OFFLINE • UNREACHABLE
                    </span>
                  )}
                </div>

                <p className="text-xs text-gray-600 mt-0.5">
                  {healthLoading ? (
                    "Pinging http://localhost:8000/api/health/..."
                  ) : isServerOnline ? (
                    `Service: ${backendHealth?.service} v${backendHealth?.version} • Uptime: ${formatUptime(
                      backendHealth?.uptime_seconds
                    )}`
                  ) : (
                    <span className="text-red-700 font-medium">
                      Cannot connect to backend server. Make sure Uvicorn is running on port 8000.
                    </span>
                  )}
                </p>
              </div>
            </div>

            {/* Right: Live Diagnostics Chips */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
              {/* PostgreSQL Status */}
              <div
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium border transition ${
                  isDbConnected
                    ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                    : "bg-red-100/70 text-red-700 border-red-300"
                }`}
              >
                <Database className="w-3.5 h-3.5" />
                <span>
                  PostgreSQL: {isDbConnected ? "Connected (ids_db)" : "Disconnected"}
                </span>
              </div>

              {/* Cloudinary Status */}
              <div
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium border transition ${
                  isCloudinaryActive
                    ? "bg-purple-50 text-purple-700 border-purple-200"
                    : "bg-gray-100 text-gray-600 border-gray-200"
                }`}
              >
                <Cloud className="w-3.5 h-3.5" />
                <span>
                  Cloudinary: {isCloudinaryActive ? `Active (${backendHealth?.cloud_name || "ids"})` : "Disabled"}
                </span>
              </div>

              {/* Swagger Link */}
              <a
                href="http://localhost:8000/docs"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-gray-700 hover:text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 px-3 py-1.5 rounded-lg font-medium transition shadow-2xs"
              >
                <span>Swagger Docs</span>
                <ExternalLink className="w-3 h-3 text-gray-500" />
              </a>
            </div>
          </div>

          {/* Last Ping Timestamp */}
          {lastCheckedTime && (
            <div className="mt-3 pt-2.5 border-t border-gray-200/60 flex items-center justify-between text-[11px] text-gray-500">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                Last live ping: {lastCheckedTime}
              </span>
              {!isServerOnline && !healthLoading && (
                <span className="text-red-600 font-semibold flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3" />
                  Failed to fetch live API data
                </span>
              )}
            </div>
          )}
        </div>

        {/* Quick Stats Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: Total Blogs */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-red-50 text-[#EA2525] rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Content</span>
            </div>
            <p className="text-3xl font-extrabold text-gray-900">{stats.totalBlogs}</p>
            <p className="text-sm font-medium text-gray-600 mt-1">Total Blog Articles</p>
            <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-100 text-xs text-gray-500">
              <span className="text-emerald-600 font-semibold">{stats.publishedBlogs} Published</span>
              <span>•</span>
              <span className="text-amber-600 font-semibold">{stats.draftBlogs} Drafts</span>
            </div>
          </div>

          {/* Card 2: Vacancies */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                <Briefcase className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Careers</span>
            </div>
            <p className="text-3xl font-extrabold text-gray-900">{stats.totalVacancies}</p>
            <p className="text-sm font-medium text-gray-600 mt-1">Active Job Vacancies</p>
            <div className="mt-3 pt-3 border-t border-gray-100 text-xs text-gray-500">
              Hiring partner opportunities
            </div>
          </div>

          {/* Card 3: Placed Students */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Showcase</span>
            </div>
            <p className="text-3xl font-extrabold text-gray-900">{stats.totalStudents}</p>
            <p className="text-sm font-medium text-gray-600 mt-1">Placed Students</p>
            <div className="mt-3 pt-3 border-t border-gray-100 text-xs text-gray-500">
              Verified placement profiles
            </div>
          </div>

          {/* Card 4: Dynamic System Status Card */}
          <div
            className={`rounded-2xl p-6 shadow-sm transition ${
              isServerOnline
                ? "bg-gradient-to-br from-gray-900 to-gray-800 text-white"
                : "bg-gradient-to-br from-red-950 to-red-900 text-white"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  isServerOnline ? "bg-white/10 text-emerald-400" : "bg-red-500/20 text-red-300"
                }`}
              >
                <Activity className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Engine</span>
            </div>
            <p className="text-xl font-bold text-white">FastAPI 2.0</p>
            <p className="text-xs text-gray-300 mt-1">PostgreSQL + Cloudinary</p>
            <div
              className={`mt-3 pt-3 border-t text-xs flex items-center gap-1.5 ${
                isServerOnline
                  ? "border-white/10 text-emerald-400"
                  : "border-red-800 text-red-300"
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full ${
                  isServerOnline ? "bg-emerald-400" : "bg-red-400 animate-ping"
                }`}
              ></div>
              <span>{isServerOnline ? "All Systems Operational" : "Backend Offline"}</span>
            </div>
          </div>
        </section>

        {/* Primary Management Modules Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Module 1: Blogs Management */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:border-red-200 hover:shadow-md transition group">
            <div>
              <div className="w-12 h-12 bg-red-100 text-[#EA2525] rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Blog Articles</h2>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Create and publish SEO-optimized blog posts, upload featured banner images directly to Cloudinary CDN, manage meta descriptions, and track view counts.
              </p>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-gray-100">
              <Link
                href="/admin/blogs"
                className="w-full bg-[#EA2525] hover:bg-red-700 text-white text-sm font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition shadow-sm shadow-red-200"
              >
                <span>Manage All Blogs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/admin/blogs/new"
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition"
              >
                <Plus className="w-4 h-4 text-red-600" />
                <span>Create New Blog</span>
              </Link>
            </div>
          </div>

          {/* Module 2: Vacancies Management */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:border-blue-200 hover:shadow-md transition group">
            <div>
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Briefcase className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Job Vacancies</h2>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Post new career openings, specify required skills and stipends, attach job description documents, and manage live applications.
              </p>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-gray-100">
              <Link
                href="/admin/vacancies"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition shadow-sm shadow-blue-200"
              >
                <span>Manage Job Vacancies</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/admin/vacancies"
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition"
              >
                <Plus className="w-4 h-4 text-blue-600" />
                <span>Post New Vacancy</span>
              </Link>
            </div>
          </div>

          {/* Module 3: Placed Students Showcase */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:border-emerald-200 hover:shadow-md transition group">
            <div>
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Placed Students</h2>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Showcase successful alumni profiles, student roles, hiring partner companies, and upload course completion certificates.
              </p>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-gray-100">
              <Link
                href="/admin/placed-students"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition shadow-sm shadow-emerald-200"
              >
                <span>Manage Placed Students</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/admin/placed-students/new"
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition"
              >
                <Plus className="w-4 h-4 text-emerald-600" />
                <span>Add Placed Student</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Live Website Quick Links */}
        <section className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h3 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Eye className="w-4 h-4 text-gray-500" />
            <span>Public Website Navigation Shortcuts</span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-semibold">
            <Link
              href="/"
              target="_blank"
              className="p-3 rounded-xl bg-gray-50 hover:bg-red-50 text-gray-700 hover:text-[#EA2525] border border-gray-200 hover:border-red-200 flex items-center justify-between transition"
            >
              <span>Homepage (/)</span>
              <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
            </Link>
            <Link
              href="/blog"
              target="_blank"
              className="p-3 rounded-xl bg-gray-50 hover:bg-red-50 text-gray-700 hover:text-[#EA2525] border border-gray-200 hover:border-red-200 flex items-center justify-between transition"
            >
              <span>Blog Articles (/blog)</span>
              <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
            </Link>
            <Link
              href="/vacancies"
              target="_blank"
              className="p-3 rounded-xl bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-600 border border-gray-200 hover:border-blue-200 flex items-center justify-between transition"
            >
              <span>Vacancies (/vacancies)</span>
              <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
            </Link>
            <Link
              href="/placed-students"
              target="_blank"
              className="p-3 rounded-xl bg-gray-50 hover:bg-emerald-50 text-gray-700 hover:text-emerald-600 border border-gray-200 hover:border-emerald-200 flex items-center justify-between transition"
            >
              <span>Showcase (/placed-students)</span>
              <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
