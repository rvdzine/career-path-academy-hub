import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Isha from "../../components/assets/Isha Verma.jpeg";
import Loveleen from "../../components/assets/Loveleen.jpg";
import priya from "../../components/assets/Priya.jpg";
import mohit from "../../components/assets/Mohit.jpg";

interface Student {
    name: string;
    role: string;
    company: string;
    package: string;
    image: string;
    location: string;
    quote: string;
}

const dummyStudents: Student[] = [
    {
        name: "Isha Verma",
        role: "Software Engineer",
        company: "G",
        package: "₹12 LPA",
        image: Isha,
        location: "Pune, India",
        quote:
            "This course gave me real-world projects and confidence to crack Google interviews!",
    },
    {
        name: "Mohit Kumar",
        role: "Backend Developer",
        company: "A",
        package: "₹10 LPA",
        image: mohit,
        location: "Mumbai, India",
        quote:
            "The mentorship and mock interviews were game-changing. Got placed in Amazon within 3 months.",
    },
    {
        name: "Loveleen Sharma",
        role: "Frontend Engineer",
        company: "M",
        package: "₹15 LPA",
        image: Loveleen,
        location: "Bengaluru, India",
        quote:
            "From basics to advanced React, this journey shaped me into a strong frontend developer.",
    },
    {
        name: "Jitendra Singh",
        role: "Full Stack Developer",
        company: "Z",
        package: "₹8 LPA",
        image: "https://randomuser.me/api/portraits/men/65.jpg",
        location: "Noida, India",
        quote:
            "Hands-on projects and internship support helped me secure a role at Zoho.",
    },
    {
        name: "Priya Kumari",
        role: "System Engineer",
        company: "T",
        package: "₹6.5 LPA",
        image: priya,
        location: "Gurgaon, India",
        quote:
            "I switched my career into IT confidently with the right guidance and projects.",
    },
    {
        name: "Isha Verma",
        role: "Software Engineer",
        company: "G",
        package: "₹12 LPA",
        image: Isha,
        location: "Pune, India",
        quote:
            "This course gave me real-world projects and confidence to crack Google interviews!",
    },
    {
        name: "Mohit Kumar",
        role: "Backend Developer",
        company: "A",
        package: "₹10 LPA",
        image: mohit,
        location: "Mumbai, India",
        quote:
            "The mentorship and mock interviews were game-changing. Got placed in Amazon within 3 months.",
    },
    {
        name: "Loveleen Sharma",
        role: "Frontend Engineer",
        company: "M",
        package: "₹15 LPA",
        image: Loveleen,
        location: "Bengaluru, India",
        quote:
            "From basics to advanced React, this journey shaped me into a strong frontend developer.",
    },
    {
        name: "Jitendra Singh",
        role: "Full Stack Developer",
        company: "Z",
        package: "₹8 LPA",
        image: "https://randomuser.me/api/portraits/men/65.jpg",
        location: "Noida, India",
        quote:
            "Hands-on projects and internship support helped me secure a role at Zoho.",
    },
];

const SuccessStoriesCourses = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(3);

    useEffect(() => {
        const updateVisibleCount = () => {
            if (window.innerWidth < 768) {
                setVisibleCount(1);
            } else if (window.innerWidth < 1024) {
                setVisibleCount(2);
            } else {
                setVisibleCount(3);
            }
        };

        updateVisibleCount();
        window.addEventListener("resize", updateVisibleCount);
        return () => window.removeEventListener("resize", updateVisibleCount);
    }, []);

    const maxIndex = Math.max(0, dummyStudents.length - visibleCount);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 4000);
        return () => clearInterval(interval);
    }, [maxIndex]);

    const translateX = -(currentIndex * (100 / visibleCount));

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
                <div className="text-center mb-10">
                    <h3 className="text-red-600 font-semibold text-lg mb-2">
                        Success Stories
                    </h3>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#4B444D] mb-6">
                        Our alumni are working in top organizations such as Google, Meta,
                        Zomato, Meesho, Flipkart, TCS, and more.
                    </h2>
                </div>

                {/* Carousel Container */}
                <div className="relative px-4 md:px-8 lg:px-16">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(${translateX}%)` }}
                        >
                            {dummyStudents.map((student, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3"
                                >
                                    <div className="bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 p-6 flex items-center gap-6 h-full min-h-[280px]">

                                        {/* Left Side - Details */}
                                        <div className="flex-1">
                                            {/* Logo + Name + Role */}
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-18 h-18 flex items-center justify-center rounded-full bg-black p-2">
                                                    <img
                                                        // src={student.logo}
                                                        alt={student.company}
                                                        className="w-full h-full object-contain invert"
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-gray-900 text-base">
                                                        {student.name}
                                                    </h3>
                                                    <p className="text-sm text-gray-500">
                                                        {student.role} at {student.company}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Quote */}
                                            <p className="text-gray-600 text-sm leading-relaxed mb-5">
                                                "{student.quote}"
                                            </p>

                                            {/* Tags */}
                                            <div className="flex gap-3 flex-wrap">
                                                <span className="bg-[#FFEFEF] text-[#EA2525] text-sm px-3 py-1 rounded-full font-medium">
                                                    {student.package}
                                                </span>
                                                <span className="bg-[#FFEFEF] text-[#EA2525] text-sm px-3 py-1 rounded-full font-medium">
                                                    {student.location}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Right Side - Photo with cut shape */}
                                        {/* Right Side - Photo with layered background effect */}
                                        <div className="relative w-32 h-40 flex-shrink-0">
                                            {/* Back Layer (Shadow Shape) */}
                                            <div
                                                className="absolute top-2 left-2"
                                                style={{
                                                    borderRadius: "70% 70% 100% 0% / 75% 68% 80% 40%",
                                                    width: "100%",
                                                    height: "100%",
                                                    background: "#FFEFEF",
                                                    opacity: 0.9,
                                                    zIndex: 0,
                                                }}
                                            ></div>

                                            {/* Front Layer (Image Shape) */}
                                            <div
                                                className="absolute inset-0 overflow-hidden z-10"
                                                style={{
                                                    borderRadius: "70% 70% 100% 0% / 75% 68% 80% 40%",
                                                    background: "#FFEFEF",
                                                }}
                                            >
                                                <img
                                                    src={student.image}
                                                    alt={student.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <button
                        onClick={prevSlide}
                        className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md border hover:border-[#EA2525] transition-colors"
                    >
                        <ChevronLeft size={22} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md border hover:border-[#EA2525] transition-colors"
                    >
                        <ChevronRight size={22} />
                    </button>

                    {/* Dots */}
                    <div className="flex justify-center mt-8 gap-2">
                        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex
                                    ? "bg-[#EA2525]"
                                    : "bg-gray-300 hover:bg-gray-400"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SuccessStoriesCourses;