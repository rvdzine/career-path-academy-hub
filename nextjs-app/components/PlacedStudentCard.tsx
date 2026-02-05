"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, Briefcase, FileText, User } from "lucide-react";
import { PlacedStudent } from "@/types/placed-student";

interface PlacedStudentCardProps {
  student: PlacedStudent;
  onViewProfile: () => void;
}

export default function PlacedStudentCard({ student, onViewProfile }: PlacedStudentCardProps) {
  const handleViewCertificate = () => {
    if (student.certificate_url) {
      window.open(student.certificate_url, "_blank");
    } else {
      alert("Certificate not available for this student.");
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group h-full">
      <div className="relative h-72 bg-gradient-to-br from-gray-50 to-gray-100">
        <Image
          src={student.student_image_url || "/placeholder-avatar.svg"}
          alt={student.student_name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-white/95 backdrop-blur-sm shadow-md">
            {student.student_id}
          </Badge>
        </div>
      </div>

      <CardContent className="p-6 space-y-4">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <User className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Student Name</p>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                {student.student_name}
              </h3>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Building2 className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Company</p>
              <p className="font-semibold text-gray-900 dark:text-white">
                {student.company_name}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Briefcase className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Role/Designation</p>
              <p className="font-semibold text-gray-900 dark:text-white">
                {student.student_role}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
            <FileText className="w-4 h-4 text-gray-400" />
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Certificate: <span className="font-mono font-medium">{student.certificate_id}</span>
            </p>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex gap-3">
        <Button
          onClick={onViewProfile}
          className="flex-1 bg-red-600 hover:bg-red-700"
          variant="default"
        >
          View Profile
        </Button>
        <Button
          onClick={handleViewCertificate}
          className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
          variant="outline"
        >
          View Certificate
        </Button>
      </CardFooter>
    </Card>
  );
}
