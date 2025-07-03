
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Calendar, Clock, BookOpen, Award, Wifi, Coffee } from "lucide-react";
import { Link } from "react-router-dom";
import BookingDialog from "./BookingDialog";

const OfflineSection = () => {
  const facilities = ["Smart Classrooms", "Wi-Fi", "Cafeteria", "Parking", "Lab Access"];
  
  const batches = [
    { course: "Complete Digital Marketing", timing: "9:00 AM - 12:00 PM", days: "Mon-Fri", seats: 8 },
    { course: "SEO Specialist", timing: "2:00 PM - 5:00 PM", days: "Mon-Wed-Fri", seats: 12 },
    { course: "Social Media Marketing", timing: "6:00 PM - 9:00 PM", days: "Tue-Thu-Sat", seats: 5 }
  ];

  const facilityIcons = {
    "Smart Classrooms": BookOpen,
    "Wi-Fi": Wifi,
    "Cafeteria": Coffee,
    "Parking": MapPin,
    "Lab Access": Award
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experience Hands-On Learning
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our offline classes at our premium Noida center for personalized attention and interactive learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Center Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop" 
              alt="Noida Training Center"
              className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4">
              <Badge className="bg-blue-600 text-white px-4 py-2 text-lg font-semibold">
                Noida Center
              </Badge>
            </div>
          </div>

          {/* Center Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold mb-3 text-gray-900">Our Premium Campus</h3>
              <p className="text-lg text-gray-600 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Sector 63, Noida - 201301
              </p>
            </div>

            {/* Facilities */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-gray-900">World-Class Facilities</h4>
              <div className="grid grid-cols-2 gap-3">
                {facilities.map((facility) => {
                  const IconComponent = facilityIcons[facility] || Award;
                  return (
                    <div key={facility} className="flex items-center gap-2 p-2 bg-white rounded-lg shadow-sm">
                      <IconComponent className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-gray-700">{facility}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Batch Info */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-gray-900">Available Batches</h4>
              <div className="space-y-2">
                {batches.slice(0, 2).map((batch, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                    <div>
                      <p className="font-medium text-gray-900">{batch.course}</p>
                      <p className="text-sm text-gray-600">{batch.timing} • {batch.days}</p>
                    </div>
                    <Badge variant="outline" className={`${batch.seats <= 5 ? 'border-red-500 text-red-600' : 'border-green-500 text-green-600'}`}>
                      {batch.seats} seats left
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <BookingDialog>
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Book Your Seat - ₹499
                </Button>
              </BookingDialog>
              
              <Button size="lg" variant="outline" asChild>
                <Link to="/offline-center">View Center Details</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex justify-center gap-8 pt-4 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Small Batches (Max 15)
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                Industry Certified
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfflineSection;
