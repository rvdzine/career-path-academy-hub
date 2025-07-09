import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Digital Marketing Manager", 
      company: "TechCorp India",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      testimonial: "The SEO course transformed my career completely. Within 6 months of completion, I landed my dream job with a 150% salary increase!",
      course: "SEO Mastery"
    },
    {
      name: "Rahul Patel",
      role: "Social Media Specialist",
      company: "Creative Agency",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      testimonial: "Amazing hands-on training with real projects. The placement support team helped me get interviews with top companies.",
      course: "Social Media Pro"
    },
    {
      name: "Anita Verma",
      role: "PPC Specialist",
      company: "Digital Solutions Ltd",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      testimonial: "From zero knowledge to managing ₹50L+ ad budgets. The practical approach and mentor support made all the difference.",
      course: "Google Ads Expert"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground">
            Hear from our alumni who transformed their careers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 animate-fade-in-up group cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="relative overflow-hidden rounded-full">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold group-hover:text-blue-600 transition-colors duration-300">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-blue-600 font-medium">{testimonial.company}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed italic group-hover:text-foreground transition-colors duration-300">
                  "{testimonial.testimonial}"
                </p>
                
                <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors duration-300">
                  {testimonial.course}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
