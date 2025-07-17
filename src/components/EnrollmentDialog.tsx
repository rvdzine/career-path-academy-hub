
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import EnrollmentForm from "./EnrollmentForm";
import SubmissionConfirmationDialog from "./SubmissionConfirmationDialog";

interface EnrollmentDialogProps {
  courseTitle: string;
  coursePrice: string;
  children?: React.ReactNode;
  triggerText?: string;
}

const EnrollmentDialog = ({ courseTitle, coursePrice, children, triggerText = "Enroll Now" }: EnrollmentDialogProps) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleEnrollmentSuccess = () => {
    setIsDialogOpen(false);
    setShowConfirmation(true);
  };

  return (
    <>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          {children || (
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              {triggerText}
            </Button>
          )}
        </DialogTrigger>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <EnrollmentForm 
            courseTitle={courseTitle} 
            coursePrice={coursePrice}
            onSuccess={handleEnrollmentSuccess}
          />
        </DialogContent>
      </Dialog>

      <SubmissionConfirmationDialog
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        type="enrollment"
        title="Course Enrollment Successful!"
        message={`Thank you for enrolling in ${courseTitle}! We have received your registration and will send you the course details and payment instructions via email within 24 hours.`}
      />
    </>
  );
};

export default EnrollmentDialog;
