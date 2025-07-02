
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { CreditCard, User, Mail, Phone, BookOpen } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface EnrollmentFormProps {
  courseTitle: string;
  coursePrice: string;
  onClose?: () => void;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

const EnrollmentForm = ({ courseTitle, coursePrice, onClose }: EnrollmentFormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    learningGoals: ""
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Load Razorpay script
    const isLoaded = await loadRazorpayScript();
    if (!isLoaded) {
      toast({
        title: "Payment Error",
        description: "Failed to load payment gateway. Please try again.",
        variant: "destructive"
      });
      setIsProcessing(false);
      return;
    }

    // Convert price string to number (remove ₹ and commas)
    const amount = parseInt(coursePrice.replace(/[₹,]/g, '')) * 100; // Convert to paise

    const options = {
      key: 'rzp_test_1234567890', // Replace with your Razorpay key
      amount: amount,
      currency: 'INR',
      name: 'Digital Marketing Academy',
      description: `Enrollment for ${courseTitle}`,
      image: '/placeholder.svg',
      handler: function (response: any) {
        console.log('Payment successful:', response);
        toast({
          title: "Enrollment Successful!",
          description: `Welcome to ${courseTitle}! You'll receive course access details via email.`,
        });
        
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          experience: "",
          learningGoals: ""
        });
        
        if (onClose) onClose();
        setIsProcessing(false);
      },
      prefill: {
        name: formData.fullName,
        email: formData.email,
        contact: formData.phone
      },
      theme: {
        color: '#3B82F6'
      },
      modal: {
        ondismiss: function() {
          setIsProcessing(false);
        }
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.fullName || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Proceed to payment
    handlePayment();
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
          <BookOpen className="w-6 h-6 text-blue-600" />
          Enroll in {courseTitle}
        </CardTitle>
        <div className="text-center">
          <Badge className="text-lg px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600">
            {coursePrice}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Full Name *
            </Label>
            <Input
              id="fullName"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Phone Number *
              </Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="experience">Experience Level</Label>
            <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select your experience level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Beginner (New to Digital Marketing)</SelectItem>
                <SelectItem value="intermediate">Intermediate (Some experience)</SelectItem>
                <SelectItem value="advanced">Advanced (Experienced professional)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="learningGoals">Learning Goals (Optional)</Label>
            <Input
              id="learningGoals"
              value={formData.learningGoals}
              onChange={(e) => handleInputChange("learningGoals", e.target.value)}
              placeholder="What do you hope to achieve with this course?"
            />
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <CreditCard className="w-4 h-4" />
              Payment Details
            </h3>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>• Secure payment via Razorpay</p>
              <p>• Instant course access after payment</p>
              <p>• 7-day money-back guarantee</p>
              <p>• All major cards and UPI accepted</p>
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            disabled={isProcessing}
          >
            {isProcessing ? "Processing..." : `Pay ${coursePrice} & Enroll Now`}
          </Button>
          
          {onClose && (
            <Button type="button" variant="outline" className="w-full" onClick={onClose}>
              Cancel
            </Button>
          )}
        </form>
      </CardContent>
    </Card>
  );
};

export default EnrollmentForm;
