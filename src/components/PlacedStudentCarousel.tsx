import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Student {
  name: string;
  company: string;
  package: string;
  image: string;
  location: string;
}

const dummyStudents: Student[] = [
  {
    name: "Ananya Sharma",
    company: "Google",
    package: "₹12 LPA",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    location: "Pune",
  },
  {
    name: "Rohit Mehra",
    company: "Amazon",
    package: "₹10 LPA",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    location: "Mumbai",
  },
  {
    name: "Simran Kaur",
    company: "Meta",
    package: "₹15 LPA",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    location: "Bengaluru",
  },
  {
    name: "Amit Verma",
    company: "Zoho",
    package: "₹8 LPA",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    location: "Noida",
  },
  {
    name: "Neha Singh",
    company: "TCS",
    package: "₹6.5 LPA",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    location: "Gurgaon",
  },
];

const PlacedStudentsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // Update visible count based on screen size
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
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, dummyStudents.length - visibleCount);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3500);
    return () => clearInterval(interval);
  }, [maxIndex]);

  const translateX = -(currentIndex * (100 / visibleCount));

  return (
    <div className="relative w-full overflow-hidden py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10 flex items-center justify-center gap-2">
        🎓 <span>Students Placed Successfully</span>
      </h2>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out gap-6"
            style={{
              transform: `translateX(${translateX}%)`,
            }}
          >
            {dummyStudents.map((student, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3"
              >
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center h-full border border-gray-100">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-[#EA2525] object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    {student.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">{student.company}</p>
                  <p className="text-[#EA2525] font-bold text-lg mb-1">
                    {student.package}
                  </p>
                  <p className="text-sm text-gray-500">{student.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200 z-10 border border-gray-200"
          aria-label="Previous students"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200 z-10 border border-gray-200"
          aria-label="Next students"
        >
          <ChevronRight size={20} />
        </button>

        {/* Dot indicators */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex
                  ? 'bg-[#EA2525]'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlacedStudentsCarousel;