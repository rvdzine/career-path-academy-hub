"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Users,
  Calendar,
  Clock,
  BookOpen,
  Award,
  Wifi,
  Coffee,
  Phone,
  Mail,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingDialog from "@/components/BookingDialog";

const OfflineCenter = () => {
  const center = {
    city: "Greater Noida",
    address:
      "T3, B1603, NXOne, Tech zone 4, Opposite Gaur city mall, Greater Noida, UP, 201306",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&h=900&fit=crop&q=80",
    facilities: [
      "Smart Classrooms",
      "High-Speed Wi-Fi",
      "Modern Lab",
      "Cafeteria",
      "Free Parking",
      "AC Environment",
    ],
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
    Cafeteria: Coffee,
    "Free Parking": MapPin,
    "AC Environment": Award,
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* HERO */}
      <header className="w-full bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#EA2525] to-[#AA2526]">
            Our Noida Training Center
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
            Experience premium offline training in our state-of-the-art facility with personalized attention and hands-on learning.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-xs sm:text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Premium Location
            </span>
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4" /> Small Batch Sizes
            </span>
            <span className="flex items-center gap-2">
              <Award className="w-4 h-4" /> Industry Infrastructure
            </span>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="flex-1">
        <section className="container mx-auto px-4 py-10 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={center.image}
                alt="Noida Training Center"
                className="w-full h-64 sm:h-80 md:h-96 object-cover transition-transform duration-300 hover:scale-105"
              />

              <div className="absolute top-4 left-4">
                <Badge className="bg-[#EA2525] text-white px-4 py-2 text-sm">Premium Campus</Badge>
              </div>
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">World-Class Learning Environment</h2>
                <p className="flex items-start gap-3 text-sm sm:text-base text-gray-600 mb-3">
                  <MapPin className="w-5 h-5 mt-1 text-gray-700" />
                  <span>{center.address}</span>
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Our Noida center is equipped with modern amenities and cutting-edge technology to provide the best learning experience. Located in the heart of Noida's IT hub, it's easily accessible and designed to foster innovation and creativity.
                </p>
              </div>

              <div className="bg-red-50 sm:bg-red-100 p-4 sm:p-6 rounded-lg">
                <h3 className="text-sm sm:text-lg font-semibold text-gray-900 mb-2">Get in Touch</h3>
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-3 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#EA2525]" />
                    <span>+91-9315471293</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#EA2525]" />
                    <span>info@idigitalstudies.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#EA2525]" />
                    <span>Mon-Sat: 9:00 AM - 9:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <BookingDialog>
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-[#EA2525] to-[#AA2526]">Book Your Demo</Button>
                </BookingDialog>
                <Button size="lg" variant="outline" className="w-full sm:w-auto hidden">Schedule a Visit</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="bg-gray-50 py-10 sm:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Premium Facilities</h3>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mt-2">Everything you need for an exceptional learning experience</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
              {center.facilities.map((facility) => {
                const Icon = facilityIcons[facility] || Award;
                return (
                  <Card key={facility} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-4 sm:p-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-3">
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-red-700" />
                      </div>
                      <h4 className="text-xs sm:text-sm md:text-base font-semibold text-gray-900">{facility}</h4>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Batches - responsive grid */}
        {/* <section className="py-10 sm:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Available Batches</h3>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mt-2">Choose from our flexible batch timings designed to fit your schedule</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {center.batches.map((batch, idx) => (
                <Card key={idx} className="border-l-4 border-l-blue-600 hover:shadow-lg transition-shadow flex flex-col">
                  <CardHeader className="p-4">
                    <div className="flex items-start justify-between gap-4">
                      <CardTitle className="text-sm sm:text-base font-semibold">{batch.course}</CardTitle>
                      <Badge variant="outline" className={`${batch.seats <= 5 ? 'border-red-500 text-red-600' : 'border-green-500 text-green-600'} text-xs sm:text-sm`}>{batch.seats} seats left</Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="p-4 mt-auto">
                    <div className="space-y-2 text-sm sm:text-base text-gray-600">
                      <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> <span>{batch.timing}</span></div>
                      <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> <span>{batch.days}</span></div>
                      <div className="flex items-center gap-2"><BookOpen className="w-4 h-4" /> <span>Duration: {batch.duration}</span></div>
                    </div>

                    <div className="mt-4">
                      <BookingDialog course={batch.course}>
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">Book Demo Class</Button>
                      </BookingDialog>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* Why choose */}
        <section className="py-10 sm:py-12 lg:py-16 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Why Choose Offline Learning?</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { icon: Users, title: 'Personal Attention', description: 'Direct interaction with instructors for personalized guidance' },
                { icon: BookOpen, title: 'Hands-on Practice', description: 'Work on live projects with real-time feedback' },
                { icon: Award, title: 'Networking', description: 'Build connections with peers and industry professionals' },
                { icon: Clock, title: 'Structured Learning', description: 'Fixed schedules to maintain discipline and progress' }
              ].map((item, i) => (
                <Card key={i} className="text-center hover:shadow-lg transition-shadow bg-white">
                  <CardContent className="p-4 sm:p-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-red-100 mx-auto flex items-center justify-center mb-3">
                      <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#EA2525]" />
                    </div>
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-600 mt-2">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <BookingDialog>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#EA2525] to-[#AA2526] text-base px-6 py-3 w-auto sm:text-base text-sm sm:px-6 sm:py-3 px-4 py-2 text-xs px-3 py-1.5">
                  Start Your Journey - Book Your Free Demo Now!
               </Button>
              </BookingDialog>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OfflineCenter;
