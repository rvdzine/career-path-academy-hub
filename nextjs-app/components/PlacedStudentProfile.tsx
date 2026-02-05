"use client";

import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Building2, Briefcase, FileText, X, Award } from "lucide-react";
import { PlacedStudent } from "@/types/placed-student";

interface PlacedStudentProfileProps {
  student: PlacedStudent;
  onClose: () => void;
}

export default function PlacedStudentProfile({ student, onClose }: PlacedStudentProfileProps) {
  const handleViewCertificate = () => {
    if (student.certificate_url) {
      window.open(student.certificate_url, "_blank");
    } else {
      alert("Certificate not available for this student.");
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Student Profile</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Header Section with Image */}
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <div className="relative w-48 h-48 flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg"></div>
              <Image
                src={student.student_image_url || "/placeholder-avatar.svg"}
                alt={student.student_name}
                fill
                className="rounded-lg object-cover border-4 border-white dark:border-gray-800 shadow-lg"
              />
            </div>

            <div className="flex-1 space-y-4 text-center md:text-left">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {student.student_name}
                </h2>
                <div className="flex flex-wrap gap-2 mt-2 justify-center md:justify-start">
                  <Badge variant="secondary">{student.student_id}</Badge>
                  <Badge variant="outline">{student.certificate_id}</Badge>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <Building2 className="w-5 h-5 text-primary" />
                  <div className="text-left">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Company</p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {student.company_name}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <div className="text-left">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Role/Designation</p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {student.student_role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Bio Section */}
          {student.student_bio && (
            <div className="space-y-2">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                About
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {student.student_bio}
              </p>
            </div>
          )}

          {/* Certificate Section */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Certificate
            </h3>
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Certificate ID</p>
                  <p className="text-xl font-mono font-bold text-primary">
                    {student.certificate_id}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Issued by <span className="font-semibold">iDigitalStudies</span>
                  </p>
                </div>
                <Button onClick={handleViewCertificate} size="lg">
                  View Certificate
                </Button>
              </div>
            </div>
          </div>

          {/* Certificate Preview if available */}
          {/* {student.certificate_url && student.certificate_url.toLowerCase().endsWith('.pdf') && (
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Certificate Preview</h3>
              <div className="border rounded-lg overflow-hidden">
                <iframe
                  src={student.certificate_url}
                  className="w-full h-96"
                  title="Certificate Preview"
                />
              </div>
            </div>
          )} */}
        </div>
      </DialogContent>
    </Dialog>
  );
}
