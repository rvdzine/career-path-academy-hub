
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { MapPin, Clock, Calendar, Users, CreditCard, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";

interface BookingDialogProps {
  children?: React.ReactNode;
  course?: string;
}

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
}

const BookingDialog = ({ children, course }: BookingDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [step, setStep] = useState(1);
  const { toast } = useToast();
  
  const form = useForm<BookingFormData>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      course: course || "",
      message: ""
    }
  });

  const courses = [
    "Complete Digital Marketing",
    "SEO Specialist",
    "Social Media Marketing", 
    "Google Ads Mastery",
    "Content Marketing",
    "Email Marketing Pro"
  ];

  const onSubmit = async (data: BookingFormData) => {
    try{
      const result = await axios.post("https://idg-backend.onrender.com/api/demo/book/", {
        full_name: data.name,
        email: data.email,
        phone: data.phone,
        course: data.course,
        learning_goals: data.message
      });

      if(result.status === 201){
        // setStep(2);
        toast({
          title: "Booking Request submitted!",
          description: "We'll contact you within 24 hours to confirm your seat.",
        });
      }
    } catch (error: any){
      console.log('Booking Error: ', error.response?.data || error.message);

      const isDuplicate = error.response?.data?.error?.include("demo booking already exists");

      toast({
        title: isDuplicate ? "Already Booked" : "Oops! Your Booking is Failed!!",
        description: isDuplicate ? "You have already booked a demo for this course. Please check your email or contact us.": "Please check your inputs and try again.",
        variant: "destructive"
      });
    }
  };

  const handlePayment = () => {
    // Simulate payment process
    toast({
      title: "Booking Successful!",
      description: "Your seat has been reserved. You'll receive a confirmation email shortly.",
    });
    setIsOpen(false);
    // setStep(1);
    form.reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            Book Your Seat - ₹499
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          {/* <DialogTitle className="text-2xl font-bold text-center">
            {step === 1 ? "Reserve Your Seat" : "Complete Payment"}
          </DialogTitle> */}
        </DialogHeader>

        {/* {step === 1 ? ( */}
          <div className="space-y-6">
            {/* Center Info */}
            <Card className="bg-red-100 border-red-400">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#EA2525] mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Noida Center</h3>
                    <p className="text-gray-600">Sector 63, Noida - 201301</p>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        Flexible Timings
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        Small Batches
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Booking Form */}
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    rules={{ required: "Name is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
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
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

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
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your email address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="course"
                  rules={{ required: "Please select a course" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Course</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a course" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {courses.map((course) => (
                            <SelectItem key={course} value={course}>
                              {course}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Message (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Any specific requirements or questions?"
                          rows={3}
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-between items-center pt-4">
                  {/* <div className="text-sm text-gray-600">
                    <p>Seat Reservation Fee: <span className="font-semibold text-lg">₹499</span></p>
                    <p className="text-xs">*Deducted from course fee upon enrollment</p>
                  </div> */}
                  <Button type="submit" size="lg" className="bg-gradient-to-r from-[#EA2525] to-[#AA2526] hover:from-[#AA2526] hover:to-[#EA2525]">
                    Book Demo
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        {/* ) : ( */}
          {/* <div className="space-y-6 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CreditCard className="w-10 h-10 text-green-600" />
            </div> */}
            
            {/* <div>
              <h3 className="text-xl font-semibold mb-2">Payment Details</h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <div className="flex justify-between items-center">
                  <span>Seat Reservation Fee</span>
                  <span className="font-bold text-xl">₹499</span>
                </div>
              </div>
            </div> */}

            {/* <div className="space-y-3">
              <Button 
                onClick={handlePayment}
                size="lg" 
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
              >
                Pay ₹499 & Reserve Seat
              </Button>
              
              <div className="flex justify-center gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  Call: +91-XXXXXXXXXX
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  Query: info@digitalacademy.com
                </span>
              </div>
            </div> */}
          {/* </div>
        )} */}
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
