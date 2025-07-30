
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import EventEnrollmentDialog from "@/components/EventEnrollmentDialog";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Digital Marketing Trends 2024",
      type: "webinar" as const,
      date: "2024-02-15",
      time: "6:00 PM - 7:30 PM",
      location: "Online",
      description: "Explore the latest trends and strategies in digital marketing for 2024. Learn from industry experts about emerging technologies and consumer behavior.",
      speaker: "Sarah Johnson, Digital Marketing Director at TechCorp",
      attendees: 150,
      price: "Free",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "SEO Workshop: Advanced Techniques",
      type: "event" as const,
      date: "2024-02-20",
      time: "10:00 AM - 4:00 PM",
      location: "IDS Campus, Sector 63, Noida",
      description: "Hands-on workshop covering advanced SEO techniques, technical SEO, and latest algorithm updates. Practical exercises included.",
      speaker: "Amit Sharma, SEO Expert",
      attendees: 50,
      price: "₹999",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Social Media Strategy Masterclass",
      type: "webinar" as const,
      date: "2024-02-25",
      time: "7:00 PM - 8:30 PM",
      location: "Online",
      description: "Learn how to create effective social media strategies that drive engagement and conversions across different platforms.",
      speaker: "Priya Patel, Social Media Strategist",
      attendees: 200,
      price: "Free",
      image: "/placeholder.svg"
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Google Ads Certification Workshop",
      type: "event" as const,
      date: "2024-01-10",
      time: "9:00 AM - 5:00 PM",
      location: "IDS Campus, Sector 63, Noida",
      description: "Comprehensive workshop to prepare for Google Ads certification with practical exercises and exam preparation.",
      speaker: "Rahul Kumar, Google Ads Specialist",
      attendees: 75,
      price: "₹1,499",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Content Marketing Strategies",
      type: "webinar" as const,
      date: "2024-01-05",
      time: "6:30 PM - 8:00 PM",
      location: "Online",
      description: "Deep dive into content marketing strategies that work in 2024. Learn about content planning, creation, and distribution.",
      speaker: "Neha Singh, Content Marketing Manager",
      attendees: 180,
      price: "Free",
      image: "/placeholder.svg"
    }
  ];

  const EventCard = ({ event, isPast = false }: { event: typeof upcomingEvents[0], isPast?: boolean }) => (
    <div className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge variant={event.type === "webinar" ? "secondary" : "default"}>
            {event.type === "webinar" ? "Webinar" : "Workshop"}
          </Badge>
          <Badge variant="outline">{event.price}</Badge>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h3>
        <p className="text-gray-600 mb-4">{event.description}</p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-2" />
            {new Date(event.date).toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="w-4 h-4 mr-2" />
            {event.time}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="w-4 h-4 mr-2" />
            {event.location}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Users className="w-4 h-4 mr-2" />
            {event.attendees} participants
          </div>
        </div>

        <div className="border-t pt-4">
          <p className="text-sm text-gray-600 mb-3">
            <strong>Speaker:</strong> {event.speaker}
          </p>
          
          {!isPast && (
            <EventEnrollmentDialog eventTitle={event.title} eventType={event.type} />
          )}
          
          {isPast && (
            <div className="text-sm text-gray-500">Event Completed</div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#EA2525] to-[#AA2526] bg-clip-text text-transparent mb-4">
            Events & Webinars
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our exclusive events and webinars to learn from industry experts and network with fellow digital marketing enthusiasts
          </p>
        </div>

        <Tabs defaultValue="upcoming" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-gradient-to-r from-red-300 via-red-200 to-red-300">
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-6">
            {upcomingEvents.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No upcoming events scheduled.</p>
                <p className="text-gray-400 mt-2">Check back soon for new events!</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="past" className="space-y-6">
            {pastEvents.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastEvents.map((event) => (
                  <EventCard key={event.id} event={event} isPast={true} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No past events to display.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Events;
