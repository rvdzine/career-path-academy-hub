
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const IDSLife = () => {
  const galleryImages = [
    { src: "/placeholder.svg", alt: "Students in classroom" },
    { src: "/placeholder.svg", alt: "Workshop session" },
    { src: "/placeholder.svg", alt: "Group project" },
    { src: "/placeholder.svg", alt: "Industry visit" },
    { src: "/placeholder.svg", alt: "Certification ceremony" },
    { src: "/placeholder.svg", alt: "Alumni meetup" },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      course: "Digital Marketing",
      text: "The learning environment at IDS is amazing. The practical approach and industry exposure helped me land my dream job.",
      image: "/placeholder.svg"
    },
    {
      name: "Rahul Kumar",
      course: "SEO Specialist",
      text: "IDS not only taught me skills but also shaped my career. The community here is very supportive and inspiring.",
      image: "/placeholder.svg"
    },
    {
      name: "Sneha Patel",
      course: "Social Media Marketing",
      text: "The hands-on training and real projects gave me confidence to start my own digital marketing agency.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Life at IDS</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover the vibrant community, innovative learning environment, and inspiring journey of students at Institute of Digital Studies
          </p>
        </div>
      </section>

      {/* Campus Life */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Campus Life</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience a dynamic learning environment where innovation meets practical application
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Interactive Learning</h3>
              <p className="text-gray-600">Hands-on workshops, live projects, and interactive sessions with industry experts.</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Support</h3>
              <p className="text-gray-600">Strong peer network, mentorship programs, and alumni connections.</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Industry Exposure</h3>
              <p className="text-gray-600">Regular industry visits, guest lectures, and real-world project experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Photo Gallery</h2>
            <p className="text-xl text-gray-600">Moments that define our journey together</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="aspect-video bg-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Voices</h2>
            <p className="text-xl text-gray-600">Hear from our amazing students about their IDS experience</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.course}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join the IDS Family?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start your journey with us and become part of a community that believes in growth, innovation, and success.
          </p>
          <a 
            href="/courses" 
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Explore Courses
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IDSLife;
