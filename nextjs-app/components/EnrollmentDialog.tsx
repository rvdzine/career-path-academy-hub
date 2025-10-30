
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import EnrollmentForm from "./EnrollmentForm";

interface EnrollmentDialogProps {
  courseTitle: string;
  // coursePrice: string;
  children?: React.ReactNode;
  triggerText?: string;
}

const EnrollmentDialog = ({ courseTitle, children, triggerText = "Enroll Now" }: EnrollmentDialogProps) => {
  return (
    <Dialog>
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
          // coursePrice={coursePrice}
        />
      </DialogContent>
    </Dialog>
  );
};

export default EnrollmentDialog;
