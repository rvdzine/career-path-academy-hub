
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Play } from "lucide-react"

const IDS = () => {
    const galleryImages = [
        { src: "/placeholder.svg", alt: "Students in classroom" },
        { src: "/placeholder.svg", alt: "Workshop session" },
        { src: "/placeholder.svg", alt: "Group project" },
        { src: "/placeholder.svg", alt: "Industry visit" },
        { src: "/placeholder.svg", alt: "Certification ceremony" },
        { src: "/placeholder.svg", alt: "Alumni meetup" },
    ];

    const videos = [
        {
            id: 1,
            title: "Campus Tour - IDS Noida",
            description: "Take a virtual tour of our state-of-the-art campus and modern facilities.",
            thumbnail: "/placeholder.svg",
            duration: "5:32"
        },
        {
            id: 2,
            title: "Student Success Stories",
            description: "Hear from our alumni about their journey and achievements after IDS.",
            thumbnail: "/placeholder.svg",
            duration: "8:45"
        },
        {
            id: 3,
            title: "Digital Marketing Workshop Highlights",
            description: "Behind the scenes of our intensive digital marketing workshops.",
            thumbnail: "/placeholder.svg",
            duration: "12:15"
        },
        {
            id: 4,
            title: "Industry Expert Sessions",
            description: "Watch highlights from our guest lectures by industry professionals.",
            thumbnail: "/placeholder.svg",
            duration: "15:30"
        }
    ];

    const shortVideos = [
        {
            id: 1,
            title: "Quick SEO Tips",
            thumbnail: "/placeholder.svg",
            duration: "0:45"
        },
        {
            id: 2,
            title: "Social Media Hacks",
            thumbnail: "/placeholder.svg",
            duration: "1:20"
        },
        {
            id: 3,
            title: "Google Ads Basics",
            thumbnail: "/placeholder.svg",
            duration: "0:58"
        },
        {
            id: 4,
            title: "Content Creation Tips",
            thumbnail: "/placeholder.svg",
            duration: "1:15"
        },
        {
            id: 5,
            title: "Email Marketing Secrets",
            thumbnail: "/placeholder.svg",
            duration: "0:52"
        },
        {
            id: 6,
            title: "Analytics Explained",
            thumbnail: "/placeholder.svg",
            duration: "1:30"
        }
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

            {/* Videos Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Videos</h2>
                        <p className="text-xl text-gray-600">Get an inside look at our campus life and learning experience</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {videos.map((video) => (
                            <div key={video.id} className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                                <div className="relative aspect-video">
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-50 transition-all">
                                        <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                                            <Play className="w-6 h-6 text-blue-600 ml-1" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                                        {video.duration}
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
                                    <p className="text-gray-600 text-sm">{video.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Short Videos Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Quick Learning Videos</h2>
                        <p className="text-xl text-gray-600">Bite-sized learning content for quick insights</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {shortVideos.map((video) => (
                            <div key={video.id} className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                                <div className="relative aspect-video">
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-50 transition-all">
                                        <div className="w-10 h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                                            <Play className="w-4 h-4 text-blue-600 ml-0.5" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-1 right-1 bg-black bg-opacity-75 text-white px-1.5 py-0.5 rounded text-xs">
                                        {video.duration}
                                    </div>
                                </div>
                                <div className="p-3">
                                    <h3 className="font-medium text-sm">{video.title}</h3>
                                </div>
                            </div>
                        ))}
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

export default IDS;
