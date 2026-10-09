"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import {
  Award,
  Users,
  Search,
  Plus,
  RefreshCw,
  CheckCircle2,
  Clock,
  Calendar,
  MapPin,
  Mail,
  Phone,
  BookOpen,
  Trash2,
  ExternalLink,
  Copy,
  Check,
  X,
  Filter,
  Monitor,
  Building,
  Shuffle,
  ShieldCheck,
  GraduationCap,
  Sparkles,
  Download,
  FileText,
  Image as ImageIcon,
  Loader2,
} from "lucide-react";
import { studentApi, getVerificationUrl } from "@/lib/api";
import { EnrolledStudent, StudentStats, StudentEnrollFormData } from "@/lib/types";

const AVAILABLE_COURSES = [
  { name: "Master in Digital marketing", code: "DM01M" },
  { name: "Digital marketer for business owners", code: "DM01B" },
  { name: "Digital marketing specialist course", code: "DM01S" },
  { name: "customised course in digital marketing", code: "DM01C" },
];

export default function EnrolledStudentsPage() {
  const [students, setStudents] = useState<EnrolledStudent[]>([]);
  const [stats, setStats] = useState<StudentStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterMode, setFilterMode] = useState<string>("all");
  const [filterCertStatus, setFilterCertStatus] = useState<string>("all");

  // Enroll Modal state
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [enrollSubmitting, setEnrollSubmitting] = useState(false);
  const [enrollError, setEnrollError] = useState<string | null>(null);
  const [enrolledSuccessStudent, setEnrolledSuccessStudent] = useState<EnrolledStudent | null>(null);

  // Form state
  const [formData, setFormData] = useState<StudentEnrollFormData>({
    name: "",
    email: "",
    phone: "",
    location: "",
    course_mode: "online",
    course_name: AVAILABLE_COURSES[0].name,
    course_code: AVAILABLE_COURSES[0].code,
  });
  const [customCourse, setCustomCourse] = useState("");
  const [isCustomCourse, setIsCustomCourse] = useState(false);

  // Issue Certificate Modal state
  const [selectedStudentForCert, setSelectedStudentForCert] = useState<EnrolledStudent | null>(null);
  const [certCompletionDate, setCertCompletionDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const [certDuration, setCertDuration] = useState<string>("3 Months");
  const [customDuration, setCustomDuration] = useState<string>("");
  const [isCustomDuration, setIsCustomDuration] = useState<boolean>(false);
  const [certSubmitting, setCertSubmitting] = useState(false);
  const [certError, setCertError] = useState<string | null>(null);
  const [certSuccessInfo, setCertSuccessInfo] = useState<{
    student_id: string;
    certificate_id: string;
    name: string;
    certificate_url?: string | null;
    duration?: string;
    course_name?: string;
  } | null>(null);

  // View Certificate Details Modal
  const [viewCertStudent, setViewCertStudent] = useState<EnrolledStudent | null>(null);

  // Delete modal state
  const [studentToDelete, setStudentToDelete] = useState<EnrolledStudent | null>(null);
  const [deleteSubmitting, setDeleteSubmitting] = useState(false);

  // Copied student ID feedback
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Email sending state & feedback
  const [sendingEmailId, setSendingEmailId] = useState<string | null>(null);
  const [emailFeedback, setEmailFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleSendCertificateEmail = async (student: EnrolledStudent) => {
    if (!student.email || !student.email.trim()) {
      alert(`Student "${student.name}" does not have an email address recorded.`);
      return;
    }
    try {
      setSendingEmailId(student.student_id);
      setEmailFeedback(null);
      const res = await studentApi.sendCertificateEmail(student.student_id);
      setEmailFeedback({
        type: "success",
        message: res.data?.message || `Certificate successfully emailed to ${student.email}!`,
      });
      setTimeout(() => setEmailFeedback(null), 7000);
    } catch (err: any) {
      console.error("Failed to send certificate email:", err);
      const errMsg =
        err?.response?.data?.detail || "Failed to send certificate email. Please check SMTP settings.";
      setEmailFeedback({
        type: "error",
        message: errMsg,
      });
      setTimeout(() => setEmailFeedback(null), 7000);
    } finally {
      setSendingEmailId(null);
    }
  };

  // Fetch data
  const fetchData = async () => {
    try {
      setRefreshing(true);
      const [listRes, statsRes] = await Promise.allSettled([
        studentApi.getStudents({
          q: searchQuery || undefined,
          course_mode: filterMode !== "all" ? filterMode : undefined,
          certificate_status: filterCertStatus !== "all" ? filterCertStatus : undefined,
        }),
        studentApi.getStats(),
      ]);

      if (listRes.status === "fulfilled") {
        const raw = listRes.value.data;
        const list = Array.isArray(raw) ? raw : (raw?.data || []);
        setStudents(list);
      }
      if (statsRes.status === "fulfilled") {
        const rawStats = statsRes.value.data;
        setStats(rawStats?.data || rawStats);
      }
    } catch (err) {
      console.error("Failed to fetch students data:", err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [filterMode, filterCertStatus]);

  // Handle Search submit / debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 350);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Copy helper
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(text);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Submit enrollment
  const handleEnrollSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnrollError(null);

    const finalCourseName = isCustomCourse ? customCourse.trim() : formData.course_name.trim();

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.location.trim()) {
      setEnrollError("Please fill in all required fields.");
      return;
    }
    if (!finalCourseName) {
      setEnrollError("Please select or enter a course name.");
      return;
    }

    try {
      setEnrollSubmitting(true);
      const selectedCourseObj = AVAILABLE_COURSES.find((c) => c.name === finalCourseName);
      const finalCourseCode = isCustomCourse ? "DM01C" : (selectedCourseObj?.code || "DM01C");

      const payload: StudentEnrollFormData = {
        ...formData,
        course_name: finalCourseName,
        course_code: finalCourseCode,
      };

      const res = await studentApi.enrollStudent(payload);
      const createdStudent: EnrolledStudent = res.data?.data || res.data;
      setEnrolledSuccessStudent(createdStudent);
      fetchData();
    } catch (err: any) {
      console.error("Enrollment error:", err);
      const msg = err.response?.data?.detail || "Failed to enroll student. Please check input.";
      setEnrollError(msg);
    } finally {
      setEnrollSubmitting(false);
    }
  };

  const resetEnrollForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      course_mode: "online",
      course_name: AVAILABLE_COURSES[0].name,
      course_code: AVAILABLE_COURSES[0].code,
    });
    setIsCustomCourse(false);
    setCustomCourse("");
    setEnrollError(null);
    setEnrolledSuccessStudent(null);
    setIsEnrollModalOpen(false);
  };

  // Submit Certificate Issuance
  const handleIssueCertSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedStudentForCert) return;

    if (!certCompletionDate) {
      setCertError("Please provide course completion date.");
      return;
    }

    const finalDuration = isCustomDuration ? customDuration.trim() || "3 Months" : certDuration;

    try {
      setCertSubmitting(true);
      setCertError(null);
      const res = await studentApi.issueCertificate(selectedStudentForCert.student_id, {
        course_completion_date: certCompletionDate,
        duration: finalDuration,
      });

      const updated = res.data?.data || res.data;
      setCertSuccessInfo({
        student_id: updated.student_id,
        certificate_id: updated.certificate_id,
        name: updated.name,
        certificate_url: updated.certificate_url,
        duration: updated.course_duration || finalDuration,
        course_name: updated.course_name,
      });
      fetchData();
    } catch (err: any) {
      console.error("Certificate issuance error:", err);
      const msg = err.response?.data?.detail || "Failed to generate certificate.";
      setCertError(msg);
    } finally {
      setCertSubmitting(false);
    }
  };

  // Handle Delete
  const handleDeleteConfirm = async () => {
    if (!studentToDelete) return;
    try {
      setDeleteSubmitting(true);
      await studentApi.deleteStudent(studentToDelete.student_id);
      setStudentToDelete(null);
      fetchData();
    } catch (err) {
      console.error("Failed to delete student:", err);
      alert("Failed to delete student.");
    } finally {
      setDeleteSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50 pb-16">
      {/* Top Breadcrumb & Actions Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                <Link href="/admin" className="hover:text-gray-900 transition">
                  Admin
                </Link>
                <span>/</span>
                <span className="text-gray-900 font-medium">Students & Certification</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight flex items-center gap-3">
                <span className="p-2 bg-red-50 text-[#EA2525] rounded-xl border border-red-100">
                  <Award className="w-6 h-6" />
                </span>
                Student Enrollment & Certification
              </h1>
              <p className="text-gray-600 text-sm mt-1">
                Enroll students with sequential IDs (starting at <span className="font-semibold text-gray-900">IDS00100</span>) and issue verified course completion certificates.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => fetchData()}
                disabled={refreshing}
                className="px-3.5 py-2.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 text-sm font-medium flex items-center gap-2 shadow-xs transition"
                title="Refresh list"
              >
                <RefreshCw className={`w-4 h-4 ${refreshing ? "animate-spin text-[#EA2525]" : "text-gray-500"}`} />
                <span>Refresh</span>
              </button>
              <button
                onClick={() => {
                  resetEnrollForm();
                  setIsEnrollModalOpen(true);
                }}
                className="px-4 py-2.5 rounded-xl bg-[#EA2525] hover:bg-[#d41f1f] text-white text-sm font-semibold flex items-center gap-2 shadow-xs hover:shadow-md transition active:scale-95"
              >
                <Plus className="w-4 h-4 stroke-[2.5]" />
                <span>Enroll New Student</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-6">
        {/* Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-200 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Total Enrolled
              </span>
              <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
                <Users className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-3">
              <span className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                {stats?.total ?? students.length}
              </span>
              <p className="text-xs text-gray-500 mt-0.5">Sequential ID active</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-200 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Online Mode
              </span>
              <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600">
                <Monitor className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-3">
              <span className="text-2xl sm:text-3xl font-extrabold text-indigo-600">
                {stats?.online ?? 0}
              </span>
              <p className="text-xs text-gray-500 mt-0.5">Remote batches</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-200 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Offline Mode
              </span>
              <div className="p-2 rounded-xl bg-amber-50 text-amber-600">
                <Building className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-3">
              <span className="text-2xl sm:text-3xl font-extrabold text-amber-600">
                {stats?.offline ?? 0}
              </span>
              <p className="text-xs text-gray-500 mt-0.5">Classroom batches</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-200 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Hybrid Mode
              </span>
              <div className="p-2 rounded-xl bg-purple-50 text-purple-600">
                <Shuffle className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-3">
              <span className="text-2xl sm:text-3xl font-extrabold text-purple-600">
                {stats?.hybrid ?? 0}
              </span>
              <p className="text-xs text-gray-500 mt-0.5">Flexible hybrid</p>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-100">
                Certificates Issued
              </span>
              <div className="p-2 rounded-xl bg-white/20 text-white">
                <Award className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-3">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-white">
                  {stats?.certificates_issued ?? 0}
                </span>
                <span className="text-xs text-emerald-100 font-medium">
                  / {stats?.total ?? students.length} total
                </span>
              </div>
              <p className="text-xs text-emerald-100/90 mt-0.5">
                {stats?.certificates_pending ?? 0} pending completion
              </p>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-xs flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by student ID (e.g. IDS00100), student name, email, or phone..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-gray-50/70 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#EA2525]/20 focus:border-[#EA2525] transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1.5 px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium text-gray-600">
              <Filter className="w-3.5 h-3.5 text-gray-500" />
              <span>Mode:</span>
              <select
                value={filterMode}
                onChange={(e) => setFilterMode(e.target.value)}
                className="bg-transparent font-semibold text-gray-900 focus:outline-none cursor-pointer"
              >
                <option value="all">All Modes</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium text-gray-600">
              <Award className="w-3.5 h-3.5 text-gray-500" />
              <span>Certificate:</span>
              <select
                value={filterCertStatus}
                onChange={(e) => setFilterCertStatus(e.target.value)}
                className="bg-transparent font-semibold text-gray-900 focus:outline-none cursor-pointer"
              >
                <option value="all">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="issued">Issued</option>
              </select>
            </div>
          </div>
        </div>

        {/* Students Table */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xs overflow-hidden">
          {loading ? (
            <div className="p-12 text-center">
              <RefreshCw className="w-8 h-8 text-[#EA2525] animate-spin mx-auto mb-3" />
              <p className="text-gray-600 font-medium">Loading enrolled students...</p>
            </div>
          ) : students.length === 0 ? (
            <div className="p-16 text-center">
              <div className="w-16 h-16 rounded-2xl bg-red-50 text-[#EA2525] flex items-center justify-center mx-auto mb-4 border border-red-100">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">No Enrolled Students Found</h3>
              <p className="text-gray-500 text-sm max-w-md mx-auto mt-1 mb-6">
                {searchQuery || filterMode !== "all" || filterCertStatus !== "all"
                  ? "No students match your filter criteria. Try clearing search filters."
                  : "Start enrolling students to automatically assign incremental IDs starting from IDS00100."}
              </p>
              <button
                onClick={() => {
                  resetEnrollForm();
                  setIsEnrollModalOpen(true);
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#EA2525] text-white text-sm font-semibold hover:bg-[#d41f1f] shadow-xs transition"
              >
                <Plus className="w-4 h-4 stroke-[2.5]" />
                Enroll First Student
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50/70 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    <th className="py-3.5 px-4 sm:px-6 w-[140px] whitespace-nowrap">Student ID</th>
                    <th className="py-3.5 px-4 w-[240px] min-w-[220px] max-w-[260px]">Student Details</th>
                    <th className="py-3.5 px-4 min-w-[200px]">Course Enrolled</th>
                    <th className="py-3.5 px-4 whitespace-nowrap">Training Mode</th>
                    <th className="py-3.5 px-4 whitespace-nowrap">Certificate Status</th>
                    <th className="py-3.5 px-4 whitespace-nowrap">Enrollment Date</th>
                    <th className="py-3.5 px-4 text-right pr-6 whitespace-nowrap">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  {students.map((student) => {
                    const isIssued = student.certificate_status === "issued";
                    return (
                      <tr key={student.student_id} className="hover:bg-gray-50/80 transition-colors">
                        {/* Student ID */}
                        <td className="py-4 px-4 sm:px-6 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-sm text-gray-900 bg-gray-100 px-2.5 py-1 rounded-lg border border-gray-200/80">
                              {student.student_id}
                            </span>
                            <button
                              onClick={() => handleCopy(student.student_id)}
                              className="text-gray-400 hover:text-gray-700 p-1 rounded transition"
                              title="Copy Student ID"
                            >
                              {copiedId === student.student_id ? (
                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                            </button>
                          </div>
                        </td>

                        {/* Student Details */}
                        <td className="py-4 px-4 w-[240px] min-w-[220px] max-w-[260px]">
                          <div className="space-y-1">
                            <div className="font-bold text-gray-900 truncate capitalize" title={student.name}>
                              {student.name}
                            </div>
                            <div className="flex items-center gap-1.5 text-xs text-gray-500 truncate" title={student.email}>
                              <Mail className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                              <span className="truncate">{student.email}</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-500 flex-wrap">
                              <span className="flex items-center gap-1 shrink-0 whitespace-nowrap">
                                <Phone className="w-3 h-3 text-gray-400 shrink-0" />
                                {student.phone}
                              </span>
                              <span className="text-gray-300">•</span>
                              <span className="flex items-center gap-1 truncate max-w-[120px]" title={student.location}>
                                <MapPin className="w-3 h-3 text-gray-400 shrink-0" />
                                <span className="truncate">{student.location}</span>
                              </span>
                            </div>
                          </div>
                        </td>

                        {/* Course Name & Code */}
                        <td className="py-4 px-4">
                          <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                              <BookOpen className="w-4 h-4 text-red-500 shrink-0" />
                              <span className="font-semibold text-gray-900 line-clamp-1">
                                {student.course_name}
                              </span>
                            </div>
                            {(student.course_code || AVAILABLE_COURSES.find(c => c.name.toLowerCase() === student.course_name.toLowerCase())?.code) && (
                              <div className="flex items-center gap-1.5 ml-6">
                                <span className="font-mono text-[11px] font-bold text-red-700 bg-red-50 border border-red-200/80 px-2 py-0.5 rounded-md">
                                  {student.course_code || AVAILABLE_COURSES.find(c => c.name.toLowerCase() === student.course_name.toLowerCase())?.code}
                                </span>
                              </div>
                            )}
                          </div>
                        </td>

                        {/* Training Mode */}
                        <td className="py-4 px-4 whitespace-nowrap">
                          {student.course_mode === "online" && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200/60">
                              <Monitor className="w-3 h-3" />
                              Online
                            </span>
                          )}
                          {student.course_mode === "offline" && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200/60">
                              <Building className="w-3 h-3" />
                              Offline
                            </span>
                          )}
                          {student.course_mode === "hybrid" && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-200/60">
                              <Shuffle className="w-3 h-3" />
                              Hybrid
                            </span>
                          )}
                        </td>

                        {/* Certificate Status */}
                        <td className="py-4 px-4 whitespace-nowrap">
                          {isIssued ? (
                            <button
                              onClick={() => setViewCertStudent(student)}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60 hover:bg-emerald-100 transition"
                              title="Click to view certificate record"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                              <span>Issued</span>
                              {student.certificate_id && (
                                <span className="font-mono text-[11px] text-emerald-800 font-bold ml-1">
                                  ({student.certificate_id})
                                </span>
                              )}
                            </button>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 border border-gray-200">
                              <Clock className="w-3.5 h-3.5 text-gray-500" />
                              <span>Pending Completion</span>
                            </span>
                          )}
                        </td>

                        {/* Enrollment Date */}
                        <td className="py-4 px-4 whitespace-nowrap text-xs text-gray-500">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-gray-400" />
                            {student.created_at
                              ? new Date(student.created_at).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric",
                                })
                              : "—"}
                          </span>
                        </td>

                        {/* Actions */}
                        <td className="py-4 px-4 text-right pr-6 whitespace-nowrap">
                          <div className="flex items-center justify-end gap-2">
                            {isIssued ? (
                              <div className="flex items-center gap-1.5">
                                <button
                                  onClick={() => setViewCertStudent(student)}
                                  className="px-2.5 py-1.5 rounded-lg text-xs font-semibold border border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition flex items-center gap-1 shadow-2xs"
                                >
                                  <Award className="w-3.5 h-3.5" />
                                  <span>View & Download</span>
                                </button>
                                <a
                                  href={studentApi.getCertificateDownloadUrl(student.student_id, "png")}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="p-1.5 rounded-lg border border-gray-200 bg-white text-gray-700 hover:text-emerald-700 hover:border-emerald-300 hover:bg-emerald-50 transition shadow-2xs"
                                  title="Download PNG Image"
                                >
                                  <Download className="w-3.5 h-3.5" />
                                </a>
                                <a
                                  href={studentApi.getCertificateDownloadUrl(student.student_id, "pdf")}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="p-1.5 rounded-lg border border-gray-200 bg-white text-gray-700 hover:text-blue-700 hover:border-blue-300 hover:bg-blue-50 transition shadow-2xs"
                                  title="Download Print PDF"
                                >
                                  <FileText className="w-3.5 h-3.5" />
                                </a>
                                <button
                                  onClick={() => handleSendCertificateEmail(student)}
                                  disabled={sendingEmailId === student.student_id}
                                  className="p-1.5 rounded-lg border border-gray-200 bg-white text-gray-700 hover:text-purple-700 hover:border-purple-300 hover:bg-purple-50 transition shadow-2xs disabled:opacity-50 cursor-pointer"
                                  title={`Send Certificate Email to ${student.email || student.name} (a copy will also be delivered to your inbox)`}
                                >
                                  {sendingEmailId === student.student_id ? (
                                    <Loader2 className="w-3.5 h-3.5 animate-spin text-purple-600" />
                                  ) : (
                                    <Mail className="w-3.5 h-3.5 text-purple-600" />
                                  )}
                                </button>
                              </div>
                            ) : (
                              <button
                                onClick={() => {
                                  setSelectedStudentForCert(student);
                                  setCertError(null);
                                  setCertSuccessInfo(null);
                                  setCertCompletionDate(new Date().toISOString().split("T")[0]);
                                }}
                                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#EA2525] text-white hover:bg-[#d41f1f] shadow-xs transition flex items-center gap-1.5"
                              >
                                <Award className="w-3.5 h-3.5" />
                                <span>Issue Certificate</span>
                              </button>
                            )}

                            <button
                              onClick={() => setStudentToDelete(student)}
                              className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition"
                              title="Delete Record"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* ENROLL NEW STUDENT MODAL */}
      {isEnrollModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-gray-100 overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-gradient-to-r from-red-50/60 to-white">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-red-100 text-[#EA2525]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Enroll New Student</h3>
                  <p className="text-xs text-gray-500">
                    Sequential unique ID will start from <span className="font-semibold text-gray-800">IDS00100</span>
                  </p>
                </div>
              </div>
              <button
                onClick={resetEnrollForm}
                className="p-2 text-gray-400 hover:text-gray-600 rounded-xl hover:bg-gray-100 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content / Form */}
            <div className="p-6 overflow-y-auto space-y-5">
              {enrolledSuccessStudent ? (
                /* Celebratory Success State */
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto animate-bounce">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-extrabold text-gray-900">Student Enrolled Successfully!</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {enrolledSuccessStudent.name} has been enrolled in {enrolledSuccessStudent.course_name}.
                    </p>
                  </div>

                  <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-2xl p-5 max-w-sm mx-auto space-y-3">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Assigned Unique Student ID
                      </span>
                      <div className="flex items-center justify-center gap-3 mt-1.5">
                        <span className="text-3xl font-mono font-black text-[#EA2525] tracking-wider">
                          {enrolledSuccessStudent.student_id}
                        </span>
                        <button
                          onClick={() => handleCopy(enrolledSuccessStudent.student_id)}
                          className="p-2 rounded-xl bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition shadow-xs"
                          title="Copy Student ID"
                        >
                          {copiedId === enrolledSuccessStudent.student_id ? (
                            <Check className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="pt-2.5 border-t border-gray-200 flex flex-col items-center gap-1">
                      <span className="text-xs text-gray-500 font-medium">{enrolledSuccessStudent.course_name}</span>
                      {enrolledSuccessStudent.course_code && (
                        <span className="font-mono text-xs font-bold text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded">
                          Course Code: {enrolledSuccessStudent.course_code}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-400">
                      Share this ID with the student for certificate verification.
                    </p>
                  </div>

                  <div className="pt-4 flex justify-center gap-3">
                    <button
                      onClick={() => {
                        setEnrolledSuccessStudent(null);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          location: "",
                          course_mode: "online",
                          course_name: AVAILABLE_COURSES[0].name,
                          course_code: AVAILABLE_COURSES[0].code,
                        });
                      }}
                      className="px-4 py-2.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 text-sm font-semibold transition"
                    >
                      Enroll Another Student
                    </button>
                    <button
                      onClick={resetEnrollForm}
                      className="px-5 py-2.5 rounded-xl bg-[#EA2525] hover:bg-[#d41f1f] text-white text-sm font-semibold shadow-xs transition"
                    >
                      Done
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleEnrollSubmit} className="space-y-4">
                  {enrollError && (
                    <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl font-medium">
                      {enrollError}
                    </div>
                  )}

                  {/* Student Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Student Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#EA2525]/20 focus:border-[#EA2525] transition"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. rahul@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#EA2525]/20 focus:border-[#EA2525] transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#EA2525]/20 focus:border-[#EA2525] transition"
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Location / City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Delhi NCR, Bengaluru, Mumbai"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#EA2525]/20 focus:border-[#EA2525] transition"
                    />
                  </div>

                  {/* Mode of Training */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Mode of Training <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {(["online", "offline", "hybrid"] as const).map((mode) => (
                        <button
                          key={mode}
                          type="button"
                          onClick={() => setFormData({ ...formData, course_mode: mode })}
                          className={`p-3 rounded-xl border text-center transition flex flex-col items-center gap-1.5 ${
                            formData.course_mode === mode
                              ? "border-[#EA2525] bg-red-50/50 text-[#EA2525] font-bold shadow-xs"
                              : "border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          {mode === "online" && <Monitor className="w-4 h-4" />}
                          {mode === "offline" && <Building className="w-4 h-4" />}
                          {mode === "hybrid" && <Shuffle className="w-4 h-4" />}
                          <span className="text-xs capitalize">{mode}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Course Name */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                        Course Name <span className="text-red-500">*</span>
                      </label>
                      <button
                        type="button"
                        onClick={() => setIsCustomCourse(!isCustomCourse)}
                        className="text-xs text-[#EA2525] hover:underline font-semibold"
                      >
                        {isCustomCourse ? "Select from list" : "+ Enter custom course"}
                      </button>
                    </div>

                    {isCustomCourse ? (
                      <div className="space-y-2">
                        <input
                          type="text"
                          required
                          placeholder="Type custom course title..."
                          value={customCourse}
                          onChange={(e) => setCustomCourse(e.target.value)}
                          className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#EA2525]/20 focus:border-[#EA2525] transition"
                        />
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <span>Auto-assigned Course Code:</span>
                          <span className="font-mono font-bold text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded">
                            DM01C
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <select
                          value={formData.course_name}
                          onChange={(e) => {
                            const found = AVAILABLE_COURSES.find((c) => c.name === e.target.value);
                            setFormData({
                              ...formData,
                              course_name: e.target.value,
                              course_code: found?.code || "DM01C",
                            });
                          }}
                          className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#EA2525]/20 focus:border-[#EA2525] transition cursor-pointer font-medium"
                        >
                          {AVAILABLE_COURSES.map((course) => (
                            <option key={course.code} value={course.name}>
                              {course.name} ({course.code})
                            </option>
                          ))}
                        </select>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <span>Auto-assigned Course Code:</span>
                          <span className="font-mono font-bold text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded">
                            {AVAILABLE_COURSES.find((c) => c.name === formData.course_name)?.code || "DM01C"}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-gray-100 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={resetEnrollForm}
                      className="px-4 py-2.5 rounded-xl border border-gray-200 text-gray-700 text-sm font-semibold hover:bg-gray-50 transition"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={enrollSubmitting}
                      className="px-5 py-2.5 rounded-xl bg-[#EA2525] hover:bg-[#d41f1f] text-white text-sm font-semibold shadow-xs hover:shadow-md transition flex items-center gap-2 disabled:opacity-50"
                    >
                      {enrollSubmitting ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Assigning ID & Saving...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4" />
                          <span>Enroll Student</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ISSUE CERTIFICATE MODAL */}
      {selectedStudentForCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-gradient-to-r from-emerald-50 to-white">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-emerald-100 text-emerald-700">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Issue Certificate</h3>
                  <p className="text-xs text-gray-500">Record course completion and issue verified certificate ID</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setSelectedStudentForCert(null);
                  setCertSuccessInfo(null);
                }}
                className="p-2 text-gray-400 hover:text-gray-600 rounded-xl hover:bg-gray-100 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
              {certSuccessInfo ? (
                /* Issued confirmation */
                <div className="text-center py-2 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-xl font-extrabold text-gray-900">Certificate Generated & Issued!</h4>
                    <p className="text-xs text-gray-600 mt-1">
                      Digital certificate for <span className="font-semibold text-gray-900">{certSuccessInfo.name}</span> is ready for download & sharing.
                    </p>
                  </div>

                  {/* Certificate ID Card */}
                  <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-3.5 text-center">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-700">
                      Generated Certificate ID
                    </span>
                    <div className="flex items-center justify-center gap-2 mt-0.5">
                      <span className="text-2xl font-mono font-black text-emerald-900">
                        {certSuccessInfo.certificate_id}
                      </span>
                      <button
                        onClick={() => handleCopy(certSuccessInfo.certificate_id)}
                        className="p-1.5 rounded-lg bg-white border border-emerald-200 text-emerald-800 hover:bg-emerald-100 transition shadow-2xs"
                        title="Copy Certificate ID"
                      >
                        {copiedId === certSuccessInfo.certificate_id ? (
                          <Check className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Certificate Live Preview */}
                  <div className="rounded-2xl border border-gray-200 bg-gray-50 overflow-hidden shadow-xs p-2">
                    <div className="relative aspect-[1526/1031] w-full bg-white rounded-xl overflow-hidden border border-gray-100">
                      <img
                        src={studentApi.getCertificateImageUrl(certSuccessInfo.certificate_id || certSuccessInfo.student_id)}
                        alt="Generated Certificate Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* 1-Click Download Buttons */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <a
                      href={studentApi.getCertificateDownloadUrl(certSuccessInfo.certificate_id || certSuccessInfo.student_id, "png")}
                      target="_blank"
                      rel="noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition flex items-center justify-center gap-2 shadow-xs"
                    >
                      <ImageIcon className="w-4 h-4" />
                      <span>Download PNG</span>
                    </a>
                    <a
                      href={studentApi.getCertificateDownloadUrl(certSuccessInfo.certificate_id || certSuccessInfo.student_id, "pdf")}
                      target="_blank"
                      rel="noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition flex items-center justify-center gap-2 shadow-xs"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Download Print PDF</span>
                    </a>
                  </div>

                  {/* Branded Official Certificate Verification Link */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 space-y-1.5 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        Official Verification & Student View Link
                      </span>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-full">
                        Shareable with Student
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-2 p-2 bg-white border border-slate-200 rounded-xl text-xs">
                      <span className="text-slate-700 font-mono text-[11px] truncate flex-1 font-semibold">
                        {getVerificationUrl(certSuccessInfo.certificate_id)}
                      </span>
                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          onClick={() =>
                            handleCopy(getVerificationUrl(certSuccessInfo.certificate_id))
                          }
                          className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-[11px] transition flex items-center gap-1"
                          title="Copy Student Verification Link"
                        >
                          {copiedId?.includes(certSuccessInfo.certificate_id) ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                              <span className="text-emerald-700 font-bold">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy Link</span>
                            </>
                          )}
                        </button>
                        <a
                          href={`/verify-certificate/${certSuccessInfo.certificate_id}`}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition"
                          title="Open Certificate Page in New Tab"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* 1-Tap Send Certificate to Student via Email */}
                  {selectedStudentForCert && (
                    <div className="space-y-1">
                      <button
                        type="button"
                        onClick={() => handleSendCertificateEmail(selectedStudentForCert)}
                        disabled={sendingEmailId === selectedStudentForCert.student_id}
                        className="w-full py-2.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-700 disabled:opacity-60 text-white text-xs font-bold transition flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                      >
                        {sendingEmailId === selectedStudentForCert.student_id ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Sending Certificate Email...</span>
                          </>
                        ) : (
                          <>
                            <Mail className="w-4 h-4" />
                            <span>Send Certificate to Student via Email ({selectedStudentForCert.email})</span>
                          </>
                        )}
                      </button>
                      <p className="text-[11px] text-gray-500 text-center">
                        ⚡ A record copy will automatically be delivered to your inbox as well.
                      </p>
                    </div>
                  )}

                  <div className="pt-1">
                    <button
                      onClick={() => {
                        setSelectedStudentForCert(null);
                        setCertSuccessInfo(null);
                      }}
                      className="w-full py-2.5 rounded-xl border border-gray-200 hover:bg-gray-100 text-gray-700 text-sm font-semibold transition"
                    >
                      Done
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleIssueCertSubmit} className="space-y-4">
                  {certError && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl font-medium">
                      {certError}
                    </div>
                  )}

                  {/* Student Summary Card */}
                  <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200/80 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 font-medium">Student ID</span>
                      <span className="font-mono font-bold text-sm text-gray-900 bg-white px-2 py-0.5 rounded border border-gray-200">
                        {selectedStudentForCert.student_id}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 font-medium">Student Name</span>
                      <span className="font-bold text-sm text-gray-900">
                        {selectedStudentForCert.name}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 font-medium">Course</span>
                      <span className="font-medium text-xs text-gray-900 text-right max-w-[240px] truncate">
                        {selectedStudentForCert.course_name}
                      </span>
                    </div>
                    {(selectedStudentForCert.course_code || AVAILABLE_COURSES.find(c => c.name.toLowerCase() === selectedStudentForCert.course_name.toLowerCase())?.code) && (
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 font-medium">Course Code</span>
                        <span className="font-mono text-xs font-bold text-red-700 bg-red-50 border border-red-200/80 px-2 py-0.5 rounded">
                          {selectedStudentForCert.course_code || AVAILABLE_COURSES.find(c => c.name.toLowerCase() === selectedStudentForCert.course_name.toLowerCase())?.code}
                        </span>
                      </div>
                    )}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 font-medium">Mode</span>
                      <span className="text-xs capitalize font-semibold text-gray-700">
                        {selectedStudentForCert.course_mode}
                      </span>
                    </div>
                  </div>

                  {/* Course Duration */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                        Course Duration <span className="text-red-500">*</span>
                      </label>
                      <button
                        type="button"
                        onClick={() => setIsCustomDuration(!isCustomDuration)}
                        className="text-xs text-emerald-700 hover:underline font-semibold"
                      >
                        {isCustomDuration ? "Preset options" : "+ Custom duration"}
                      </button>
                    </div>

                    {isCustomDuration ? (
                      <input
                        type="text"
                        required
                        placeholder="e.g. 45 Days, 3 Months, 1 Year"
                        value={customDuration}
                        onChange={(e) => setCustomDuration(e.target.value)}
                        className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition"
                      />
                    ) : (
                      <div className="grid grid-cols-4 gap-2">
                        {["1 Month", "2 Months", "3 Months", "6 Months"].map((dur) => (
                          <button
                            key={dur}
                            type="button"
                            onClick={() => setCertDuration(dur)}
                            className={`py-2 px-2 text-xs font-semibold rounded-xl border transition text-center ${
                              certDuration === dur
                                ? "bg-emerald-600 text-white border-emerald-600 shadow-xs"
                                : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                            }`}
                          >
                            {dur}
                          </button>
                        ))}
                      </div>
                    )}
                    <p className="text-xs text-gray-400 mt-1">
                      Rendered on the certificate under &quot;Duration&quot;.
                    </p>
                  </div>

                  {/* Completion Date */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Course Completion Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={certCompletionDate}
                      onChange={(e) => setCertCompletionDate(e.target.value)}
                      className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition"
                    />
                    <p className="text-xs text-gray-400 mt-1">
                      Formatted as DD/MM/YYYY on the certificate &quot;Date of Issue&quot;.
                    </p>
                  </div>

                  {/* Notice about Certificate Template */}
                  <div className="p-3 bg-emerald-50/70 border border-emerald-200/80 rounded-xl text-xs text-emerald-900 flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      Generating certificate will overlay student details onto the official template, produce <strong>PNG & PDF</strong>, and upload to Cloudinary.
                    </span>
                  </div>

                  {/* Buttons */}
                  <div className="pt-3 border-t border-gray-100 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedStudentForCert(null)}
                      className="px-4 py-2.5 rounded-xl border border-gray-200 text-gray-700 text-sm font-semibold hover:bg-gray-50 transition"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={certSubmitting}
                      className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold shadow-xs transition flex items-center gap-2 disabled:opacity-50"
                    >
                      {certSubmitting ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Generating & Uploading...</span>
                        </>
                      ) : (
                        <>
                          <Award className="w-4 h-4" />
                          <span>Generate & Issue</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* VIEW CERTIFICATE DETAILS MODAL */}
      {viewCertStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-gray-100 overflow-hidden max-h-[92vh] flex flex-col">
            <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-gradient-to-r from-emerald-50 to-white">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-emerald-100 text-emerald-700">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Certificate Record</h3>
                  <p className="text-xs text-gray-500">Verified credentials & digital copy</p>
                </div>
              </div>
              <button
                onClick={() => setViewCertStudent(null)}
                className="p-2 text-gray-400 hover:text-gray-600 rounded-xl hover:bg-gray-100 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 overflow-y-auto">
              {/* Certificate ID Banner */}
              <div className="bg-emerald-50/60 border border-emerald-200 rounded-2xl p-4 text-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                  Certificate ID
                </span>
                <div className="flex items-center justify-center gap-2 mt-1">
                  <span className="text-2xl font-mono font-black text-emerald-900">
                    {viewCertStudent.certificate_id || viewCertStudent.student_id}
                  </span>
                  <button
                    onClick={() =>
                      handleCopy(viewCertStudent.certificate_id || viewCertStudent.student_id)
                    }
                    className="p-1 rounded bg-white text-emerald-700 border border-emerald-200 shadow-2xs"
                    title="Copy"
                  >
                    {copiedId ===
                    (viewCertStudent.certificate_id || viewCertStudent.student_id) ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Certificate Live Preview */}
              <div className="rounded-2xl border border-gray-200 bg-gray-50 overflow-hidden shadow-xs p-2">
                <div className="relative aspect-[1526/1031] w-full bg-white rounded-xl overflow-hidden border border-gray-100">
                  <img
                    src={studentApi.getCertificateImageUrl(viewCertStudent.certificate_id || viewCertStudent.student_id)}
                    alt={`Certificate for ${viewCertStudent.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* 1-Click Download Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={studentApi.getCertificateDownloadUrl(viewCertStudent.certificate_id || viewCertStudent.student_id, "png")}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition flex items-center justify-center gap-2 shadow-xs"
                >
                  <ImageIcon className="w-4 h-4" />
                  <span>Download PNG</span>
                </a>
                <a
                  href={studentApi.getCertificateDownloadUrl(viewCertStudent.certificate_id || viewCertStudent.student_id, "pdf")}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition flex items-center justify-center gap-2 shadow-xs"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Print PDF</span>
                </a>
              </div>

              {/* 1-Tap Send Certificate to Student via Email */}
              <div className="space-y-1">
                <button
                  type="button"
                  onClick={() => handleSendCertificateEmail(viewCertStudent)}
                  disabled={sendingEmailId === viewCertStudent.student_id}
                  className="w-full py-2.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-700 disabled:opacity-60 text-white text-xs font-bold transition flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  {sendingEmailId === viewCertStudent.student_id ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Certificate Email...</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-4 h-4" />
                      <span>Send Certificate to Student via Email ({viewCertStudent.email})</span>
                    </>
                  )}
                </button>
                <p className="text-[11px] text-gray-500 text-center">
                  ⚡ A record copy will automatically be delivered to your inbox as well.
                </p>
              </div>

              {/* Branded Official Certificate Verification Link */}
              {viewCertStudent.certificate_id && (
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 space-y-1.5 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Official Verification & Student View Link
                    </span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-full">
                      Public Access
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2 p-2 bg-white border border-slate-200 rounded-xl text-xs">
                    <span className="text-slate-700 font-mono text-[11px] truncate flex-1 font-semibold">
                      {getVerificationUrl(viewCertStudent.certificate_id)}
                    </span>
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        onClick={() =>
                          handleCopy(getVerificationUrl(viewCertStudent.certificate_id))
                        }
                        className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-[11px] transition flex items-center gap-1"
                        title="Copy Student Verification Link"
                      >
                        {copiedId?.includes(viewCertStudent.certificate_id) ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-700 font-bold">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Link</span>
                          </>
                        )}
                      </button>
                      <a
                        href={`/verify-certificate/${viewCertStudent.certificate_id}`}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition"
                        title="Open Certificate Page in New Tab"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Details List */}
              <div className="space-y-3 text-sm pt-1">
                <div className="flex justify-between py-1.5 border-b border-gray-100">
                  <span className="text-gray-500">Student Name:</span>
                  <span className="font-bold text-gray-900">{viewCertStudent.name}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-gray-100">
                  <span className="text-gray-500">Student ID:</span>
                  <span className="font-mono font-semibold text-gray-900">
                    {viewCertStudent.student_id}
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-gray-100">
                  <span className="text-gray-500">Course:</span>
                  <span className="font-medium text-gray-900 text-right max-w-[240px]">
                    {viewCertStudent.course_name}
                  </span>
                </div>
                {(viewCertStudent.course_code || AVAILABLE_COURSES.find(c => c.name.toLowerCase() === viewCertStudent.course_name.toLowerCase())?.code) && (
                  <div className="flex justify-between py-1.5 border-b border-gray-100">
                    <span className="text-gray-500">Course Code:</span>
                    <span className="font-mono font-bold text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded text-xs">
                      {viewCertStudent.course_code || AVAILABLE_COURSES.find(c => c.name.toLowerCase() === viewCertStudent.course_name.toLowerCase())?.code}
                    </span>
                  </div>
                )}
                <div className="flex justify-between py-1.5 border-b border-gray-100">
                  <span className="text-gray-500">Duration:</span>
                  <span className="font-semibold text-gray-900">
                    {viewCertStudent.course_duration || "3 Months"}
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-gray-100">
                  <span className="text-gray-500">Training Mode:</span>
                  <span className="capitalize font-semibold text-gray-900">
                    {viewCertStudent.course_mode}
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-gray-100">
                  <span className="text-gray-500">Completion Date:</span>
                  <span className="font-medium text-gray-900">
                    {viewCertStudent.course_completion_date || "Not specified"}
                  </span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-gray-500">Issued On:</span>
                  <span className="font-medium text-gray-900">
                    {viewCertStudent.certificate_issued_at
                      ? new Date(viewCertStudent.certificate_issued_at).toLocaleString()
                      : "Completed"}
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setViewCertStudent(null)}
                  className="w-full py-2.5 rounded-xl bg-gray-900 hover:bg-black text-white text-sm font-semibold transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CONFIRM DELETE MODAL */}
      {studentToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl border border-gray-100 p-6 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mx-auto">
              <Trash2 className="w-6 h-6" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900">Delete Enrolled Student?</h3>
              <p className="text-xs text-gray-500 mt-1">
                Are you sure you want to delete <span className="font-semibold text-gray-800">{studentToDelete.name}</span> ({studentToDelete.student_id})? This will also remove any certificate records.
              </p>
            </div>
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setStudentToDelete(null)}
                className="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-700 text-sm font-semibold hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={deleteSubmitting}
                onClick={handleDeleteConfirm}
                className="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-semibold transition disabled:opacity-50"
              >
                {deleteSubmitting ? "Deleting..." : "Yes, Delete"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Email Status Toast Notification */}
      {emailFeedback && (
        <div
          className={`fixed bottom-6 right-6 z-50 max-w-md p-4 rounded-2xl shadow-2xl border flex items-start gap-3 animate-in fade-in slide-in-from-bottom-4 duration-200 ${
            emailFeedback.type === "success"
              ? "bg-slate-900 text-white border-emerald-500/40"
              : "bg-red-950 text-white border-red-500/40"
          }`}
        >
          <div
            className={`p-1.5 rounded-xl shrink-0 ${
              emailFeedback.type === "success"
                ? "bg-emerald-500/20 text-emerald-400"
                : "bg-red-500/20 text-red-400"
            }`}
          >
            {emailFeedback.type === "success" ? (
              <CheckCircle2 className="w-5 h-5" />
            ) : (
              <X className="w-5 h-5" />
            )}
          </div>
          <div className="flex-1 text-xs">
            <p className="font-bold text-sm">
              {emailFeedback.type === "success" ? "Certificate Email Sent" : "Email Delivery Failed"}
            </p>
            <p className="mt-0.5 text-slate-300 leading-relaxed">{emailFeedback.message}</p>
          </div>
          <button
            onClick={() => setEmailFeedback(null)}
            className="text-slate-400 hover:text-white p-1 cursor-pointer"
            title="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
