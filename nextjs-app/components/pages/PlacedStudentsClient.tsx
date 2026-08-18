"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlacedStudentsCarousel from "@/components/PlacedStudentsCarousel";
import PlacedStudentCard from "@/components/PlacedStudentCard";
import PlacedStudentProfile from "@/components/PlacedStudentProfile";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import axios from "axios";
import { PlacedStudent } from "@/types/placed-student";

export default function PlacedStudentsClient() {
  const [students, setStudents] = useState<PlacedStudent[]>([]);
  const [filteredStudents, setFilteredStudents] = useState<PlacedStudent[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStudent, setSelectedStudent] = useState<PlacedStudent | null>(null);
  const [loading, setLoading] = useState(true);

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL?.replace(/\/api$/, '') || "http://localhost:8000";

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}/api/placed-students/`);
      setStudents(response.data);
      setFilteredStudents(response.data);
    } catch (error) {
      console.error("Error fetching placed students:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      setFilteredStudents(students);
      return;
    }

    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/placed-students/search/?q=${searchQuery}`
      );
      setFilteredStudents(response.data);
    } catch (error) {
      console.error("Error searching students:", error);
      setFilteredStudents([]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Carousel Header */}
        <PlacedStudentsCarousel students={students.slice(0, 5)} />

        {/* Search Bar */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between max-w-4xl mx-auto">
            <div className="flex-1 w-full flex gap-2">
              <Input
                type="text"
                placeholder="Search by Student ID (IDS_001) or Certificate ID (IDSC_001)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 border-rose-400 focus:border-rose-500 focus:ring-rose-500"
              />
              <Button onClick={handleSearch} className="bg-red-600 hover:bg-red-700">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>

        {/* Students Grid */}
        <div className="container mx-auto px-4 py-8">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              <p className="mt-4 text-gray-600 dark:text-gray-400">Loading students...</p>
            </div>
          ) : filteredStudents.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 dark:text-gray-400">
                No students found. Try a different search query.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStudents.map((student) => (
                <PlacedStudentCard
                  key={student.id}
                  student={student}
                  onViewProfile={() => setSelectedStudent(student)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Profile Modal */}
      {selectedStudent && (
        <PlacedStudentProfile
          student={selectedStudent}
          onClose={() => setSelectedStudent(null)}
        />
      )}

      <Footer />
    </>
  );
}
