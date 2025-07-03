
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Calendar, Clock, BookOpen, Award, Wifi, Coffee } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const OfflineCenter = () => {
  const centers = [
    {
      city: "Mumbai",
      address: "Andheri East, Mumbai - 400069",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
      facilities: ["Smart Classrooms", "Wi-Fi", "Cafeteria", "Parking", "Lab Access"],
      batches: [
        { course: "Complete Digital Marketing", timing: "9:00 AM - 12:00 PM", days: "Mon-Fri", seats: 8 },
        { course: "SEO Specialist", timing: "2:00 PM - 5:00 PM", days: "Mon-Wed-Fri", seats: 12 },
        { course: "Social Media Marketing", timing: "6:00 PM - 9:00 PM", days: "Tue-Thu-Sat", seats: 5 }
      ]
    },
    {
      city: "Delhi",
      address: "Rajouri Garden, New Delhi - 110027",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop",
      facilities: ["AC Classrooms", "High-Speed Internet", "Library", "Canteen", "24/7 Security"],
      batches: [
        { course: "Complete Digital Marketing", timing: "10:00 AM - 1:00 PM", days: "Mon-Fri", seats: 15 },
        { course: "Google Ads Mastery", timing: "3:00 PM - 6:00 PM", days: "Mon-Wed-Fri", seats: 10 },
        { course: "Content Marketing", timing: "7:00 PM - 10:00 PM", days: "Tue-Thu-Sat", seats: 7 }
      ]
    },
    {
      city: "Bangalore",
      address: "Koramangala, Bangalore - 560034",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800&h=600&fit=crop",
      facilities: ["Tech-Enabled Rooms", "Fiber Internet", "Food Court", "Gym", "Co-working Space"],
      batches: [
        { course: "Complete Digital Marketing", timing: "9:30 AM - 12:30 PM", days: "Mon-Fri", seats: 20 },
        { course: "Email Marketing Pro", timing: "2:30 PM - 5:30 PM", days: "Mon-Wed-Fri", seats: 8 },
        { course: "Analytics & Reporting", timing: "6:30 PM - 9:30 PM", days: "Tue-Thu-Sat", seats: 12 }
      ]
    }
  ];

  const facilityIcons = {
    "Smart Classrooms": BookOpen,
    "AC Classrooms": BookOpen,
    "Tech-Enabled Rooms": BookOpen,
    "Wi-Fi": Wifi,
    "High-Speed Internet": Wifi,
    "Fiber Internet": Wifi,
    "Cafeteria": Coffee,
    "Canteen": Coffee,
    "Food Court": Coffee,
    "Parking": MapPin,
    "Lab Access": Award,
    "Library": BookOpen,
    "24/7 Security": Award,
    "Gym": Award,
    "Co-working Space": Users
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Offline Training Centers
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Experience hands-on learning in our state-of-the-art facilities across Mumbai, Delhi, and Bangalore. 
            Join batches designed for comprehensive skill development.
          </p>
          <div className="flex justify-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              3 Premium Locations
            </span>
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Small Batch Sizes
            </span>
            <span className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              Industry-Standard Infrastructure
            </span>
          </div>
        </div>
      </section>

      {/* Centers Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {centers.map((center, index) => (
              <div key={center.city} className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Center Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-2xl shadow-xl">
                    <img 
                      src={center.image} 
                      alt={`${center.city} Center`}
                      className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-600 text-white px-4 py-2 text-lg font-semibold">
                        {center.city} Center
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Center Details */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div>
                    <h2 className="text-3xl font-bold mb-3 text-gray-900">{center.city} Campus</h2>
                    <p className="text-lg text-gray-600 flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      {center.address}
                    </p>
                  </div>

                  {/* Facilities */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Premium Facilities</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {center.facilities.map((facility) => {
                        const IconComponent = facilityIcons[facility] || Award;
                        return (
                          <div key={facility} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                            <IconComponent className="w-4 h-4 text-blue-600" />
                            <span className="text-sm font-medium text-gray-700">{facility}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Current Batches */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Current Batches</h3>
                    <div className="space-y-3">
                      {center.batches.map((batch, batchIndex) => (
                        <Card key={batchIndex} className="border-l-4 border-l-blue-600">
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-semibold text-gray-900">{batch.course}</h4>
                              <Badge variant="outline" className={`${batch.seats <= 5 ? 'border-red-500 text-red-600' : 'border-green-500 text-green-600'}`}>
                                {batch.seats} seats left
                              </Badge>
                            </div>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {batch.timing}
                              </span>
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {batch.days}
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-6">
                    Book Your Seat in {center.city}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Offline Learning */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Choose Offline Learning?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the benefits of face-to-face interaction and hands-on learning
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Interactive Learning",
                description: "Direct interaction with instructors and peers for better understanding"
              },
              {
                icon: BookOpen,
                title: "Hands-on Practice",
                description: "Work on real projects with immediate feedback and guidance"
              },
              {
                icon: Award,
                title: "Networking",
                description: "Build professional connections with classmates and industry experts"
              },
              {
                icon: Clock,
                title: "Structured Schedule",
                description: "Fixed timings help maintain discipline and consistent learning"
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OfflineCenter;
