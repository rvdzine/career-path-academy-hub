
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SubmissionConfirmationDialog from "./SubmissionConfirmationDialog";

interface EventEnrollmentDialogProps {
  eventTitle: string;
  eventType: "event" | "webinar";
  children?: React.ReactNode;
}

const EventEnrollmentDialog = ({ eventTitle, eventType, children }: EventEnrollmentDialogProps) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    experienceType: "",
    interestedCourse: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsDialogOpen(false);
      setShowConfirmation(true);
      setFormData({
        name: "",
        mobile: "",
        email: "",
        experienceType: "",
        interestedCourse: ""
      });
    }, 1000);
  };

  return (
    <>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          {children || (
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Enroll Now
            </Button>
          )}
        </DialogTrigger>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Enroll for {eventType === "event" ? "Event" : "Webinar"}</DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="mobile">Mobile Number *</Label>
              <Input
                id="mobile"
                type="tel"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="experience">Current Experience Type *</Label>
              <Select value={formData.experienceType} onValueChange={(value) => setFormData({ ...formData, experienceType: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your current status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="working-professional">Working Professional</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="course">Interested Course *</Label>
              <Select value={formData.interestedCourse} onValueChange={(value) => setFormData({ ...formData, interestedCourse: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select course you're interested in" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="seo">SEO Training</SelectItem>
                  <SelectItem value="social-media">Social Media Marketing</SelectItem>
                  <SelectItem value="google-ads">Google Ads</SelectItem>
                  <SelectItem value="email-marketing">Email Marketing</SelectItem>
                  <SelectItem value="content-marketing">Content Marketing</SelectItem>
                  <SelectItem value="digital-marketing">Complete Digital Marketing</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enrolling..." : "Enroll Now"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <SubmissionConfirmationDialog
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        type="enrollment"
        title="Event Enrollment Successful!"
        message={`You have been enrolled for ${eventTitle}. We'll send you the event details via email within 24 hours.`}
      />
    </>
  );
};

export default EventEnrollmentDialog;
