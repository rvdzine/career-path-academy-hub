import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle, X } from "lucide-react";

interface SubmissionConfirmationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  type?: "enrollment" | "submission" | "booking";
}

const SubmissionConfirmationDialog = ({ 
  isOpen, 
  onClose, 
  title, 
  message,
  type = "submission"
}: SubmissionConfirmationDialogProps) => {
  const getTitle = () => {
    if (title) return title;
    
    switch (type) {
      case "enrollment":
        return "Enrollment Successful!";
      case "booking":
        return "Booking Confirmed!";
      default:
        return "Request Received!";
    }
  };

  const getMessage = () => {
    if (message) return message;
    
    switch (type) {
      case "enrollment":
        return "Thank you for enrolling! We have received your registration and will send you the course details via email within 24 hours.";
      case "booking":
        return "Your booking has been confirmed! We will contact you shortly to finalize the details.";
      default:
        return "Thank you for your submission! We have received your request and will get back to you within 24-48 hours.";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <DialogTitle className="text-xl font-semibold text-gray-900">
                {getTitle()}
              </DialogTitle>
            </div>
          </div>
        </DialogHeader>
        
        <div className="py-4">
          <p className="text-gray-600 leading-relaxed">
            {getMessage()}
          </p>
        </div>

        <div className="flex justify-end pt-4">
          <Button onClick={onClose} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            Got it!
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SubmissionConfirmationDialog;
