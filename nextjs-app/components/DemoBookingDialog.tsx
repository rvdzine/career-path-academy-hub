"use client";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import api from '../lib/axios'

interface DemoBookingDialogProps {
  children?: React.ReactNode;
  courseTitle: string;
  courseValue?: string;
}

interface DemoFormData {
  name: string;
  email: string;
  phone: string;
  experienceLevel: string;
  learningGoals: string;
}

const DemoBookingDialog = ({ children, courseTitle, courseValue }: DemoBookingDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<DemoFormData>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      experienceLevel: "",
      learningGoals: ""
    }
  });

  const getCourseValue = () => {
    if (courseValue) return courseValue;
    
    const titleMap: Record<string, string> = {
      "Master in Digital Marketing Course at Institute of Digital Studies": "master_dm_internship",
      "Master in Digital Marketing Course at Insitute of Digital Studies": "master_dm_internship",
      "Digital Marketing Specialist Course at Institute of Digital Studies": "specialist_dm",
      "Digital Marketing Specialist Course at Insitute of Digital Studies": "specialist_dm",
      "Best Digital Marketing Course for Business Owners": "dm_business_owners",
      "Customised Course in Digital Marketing": "custom_dm"
    };
    
    return titleMap[courseTitle] || "custom_dm";
  };

  const onSubmit = async (data: DemoFormData) => {
    try {
      const result = await api.post("online-demo/book/", {
        full_name: data.name,
        email: data.email,
        phone: data.phone,
        course: getCourseValue(),
        course_title: courseTitle,
        experience_level: data.experienceLevel,
        learning_goals: data.learningGoals
      });

      if (result.status === 201) {
        // Redirect to thank you page
        window.location.href = "/thank-you";
      }
    } catch (error: any) {
      console.log('Booking Error: ', error.response?.data || error.message);

      const isDuplicate = error.response?.data?.error?.includes("already booked");
      
      alert(isDuplicate ? "Already Booked: You have already booked a demo for this course." : "Booking Failed: Please check your inputs and try again.");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          {children || (
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Book Free Demo Class
            </Button>
          )}
        </DialogTrigger>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              Book Your Demo Class for - {courseTitle}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  rules={{ required: "Name is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="phone"
                    rules={{
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Please enter a valid 10-digit phone number"
                      }
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    rules={{
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Please enter a valid email address"
                      }
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your email address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="experienceLevel"
                  rules={{ required: "Please select your experience level" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Experience Level *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your experience level" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="fresher_student">
                            Student / Fresher
                          </SelectItem>
                          <SelectItem value="working_professional">
                            Working Professional
                          </SelectItem>
                          <SelectItem value="freelancer">
                            Freelancer
                          </SelectItem>
                          <SelectItem value="business_owner">
                            Business Owner
                          </SelectItem>
                          <SelectItem value="career_switcher">
                            Career Switcher
                          </SelectItem>
                          <SelectItem value="home_maker">
                            Homemaker
                          </SelectItem>
                          <SelectItem value="others">
                            Other
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="learningGoals"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Learning Goals (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your learning goals and expectations..."
                          rows={3}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end pt-4">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="bg-gradient-to-r from-[#EA2525] to-[#AA2526] hover:from-[#AA2526] hover:to-[#EA2525]"
                  >
                    Book Free Demo Class
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
  );
};

export default DemoBookingDialog;
