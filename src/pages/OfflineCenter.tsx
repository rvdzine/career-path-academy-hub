
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Calendar, Clock, BookOpen, Award, Wifi, Coffee, Phone, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingDialog from "@/components/BookingDialog";

const OfflineCenter = () => {
  const center = {
    city: "Noida",
    address: "Sector 63, Noida - 201301",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    facilities: ["Smart Classrooms", "High-Speed Wi-Fi", "Modern Lab", "Cafeteria", "Free Parking", "AC Environment"],
    batches: [
      { course: "Complete Digital Marketing", timing: "9:00 AM - 12:00 PM", days: "Mon-Fri", seats: 8, duration: "3 Months" },
      { course: "SEO Specialist", timing: "2:00 PM - 5:00 PM", days: "Mon-Wed-Fri", seats: 12, duration: "2 Months" },
      { course: "Social Media Marketing", timing: "6:00 PM - 9:00 PM", days: "Tue-Thu-Sat", seats: 5, duration: "1.5 Months" },
      { course: "Google Ads Mastery", timing: "10:00 AM - 1:00 PM", days: "Sat-Sun", seats: 15, duration: "1 Month" },
      { course: "Content Marketing", timing: "3:00 PM - 6:00 PM", days: "Sat-Sun", seats: 10, duration: "1 Month" }
    ]
  };

  const facilityIcons = {
    "Smart Classrooms": BookOpen,
    "High-Speed Wi-Fi": Wifi,
    "Modern Lab": Award,
    "Cafeteria": Coffee,
    "Free Parking": MapPin,
    "AC Environment": Award
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Noida Training Center
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Experience premium offline training in our state-of-the-art facility with personalized attention 
            and hands-on learning approach.
          </p>
          <div className="flex justify-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Premium Location in Noida
            </span>
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Small Batch Sizes (Max 15)
            </span>
            <span className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              Industry-Standard Infrastructure
            </span>
          </div>
        </div>
      </section>

      {/* Center Details Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Center Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img 
                src={center.image} 
                alt="Noida Training Center"
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-blue-600 text-white px-6 py-3 text-lg font-semibold">
                  Premium Campus
                </Badge>
              </div>
            </div>

            {/* Center Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-4 text-gray-900">World-Class Learning Environment</h2>
                <p className="text-lg text-gray-600 flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5" />
                  {center.address}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our Noida center is equipped with modern amenities and cutting-edge technology to provide 
                  the best learning experience. Located in the heart of Noida's IT hub, it's easily accessible 
                  and designed to foster innovation and creativity.
                </p>
              </div>

              {/* Contact Info */}
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Get in Touch</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">+91-XXXXXXXXXX</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">noida@digitalacademy.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Mon-Sat: 9:00 AM - 9:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <BookingDialog>
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Book Your Seat - ₹499
                  </Button>
                </BookingDialog>
                
                <Button size="lg" variant="outline">
                  Schedule a Visit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Premium Facilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for an exceptional learning experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {center.facilities.map((facility) => {
              const IconComponent = facilityIcons[facility] || Award;
              return (
                <Card key={facility} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{facility}</h3>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Batches Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Available Batches</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our flexible batch timings designed to fit your schedule
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {center.batches.map((batch, index) => (
              <Card key={index} className="border-l-4 border-l-blue-600 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{batch.course}</CardTitle>
                    <Badge variant="outline" className={`${batch.seats <= 5 ? 'border-red-500 text-red-600' : 'border-green-500 text-green-600'}`}>
                      {batch.seats} seats left
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      {batch.timing}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      {batch.days}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <BookOpen className="w-4 h-4" />
                      Duration: {batch.duration}
                    </div>
                  </div>
                  <BookingDialog course={batch.course}>
                    <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Reserve Seat - ₹499
                    </Button>
                  </BookingDialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Offline Learning */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
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
                title: "Personal Attention",
                description: "Direct interaction with instructors for personalized guidance and immediate doubt resolution"
              },
              {
                icon: BookOpen,
                title: "Hands-on Practice",
                description: "Work on live projects with real-time feedback and practical implementation"
              },
              {
                icon: Award,
                title: "Networking",
                description: "Build valuable connections with peers and industry professionals"
              },
              {
                icon: Clock,
                title: "Structured Learning",
                description: "Fixed schedules help maintain discipline and ensure consistent progress"
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-white">
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

          {/* Final CTA */}
          <div className="text-center mt-12">
            <BookingDialog>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4">
                Start Your Journey - Book Now for ₹499
              </Button>
            </BookingDialog>
            <p className="text-sm text-gray-600 mt-2">*Booking amount will be adjusted in your course fee</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OfflineCenter;
