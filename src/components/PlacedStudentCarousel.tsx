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
    location: 'Pune'
  },
  {
    name: "Rohit Mehra",
    company: "Amazon",
    package: "₹10 LPA",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    location: 'Mumbai'
  },
  {
    name: "Simran Kaur",
    company: "Meta",
    package: "₹15 LPA",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    location: 'Bengaluru'
  },
  {
    name: "Amit Verma",
    company: "Zoho",
    package: "₹8 LPA",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    location: 'Noida'
  },
  {
    name: "Neha Singh",
    company: "TCS",
    package: "₹6.5 LPA",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    location: 'Gurgaon'
  },
];

const PlacedStudentsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === dummyStudents.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? dummyStudents.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">
        🎓 Students Placed Successfully
      </h2>

      <div className="relative overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out transform"
             style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {dummyStudents.map((student, index) => (
            <div
              key={index}
              className="min-w-full flex justify-center items-center px-4"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full text-center">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-blue-500"
                />
                <h3 className="text-xl font-semibold">{student.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{student.company}</p>
                <p className="text-blue-600 font-bold text-lg mt-2">{student.package}</p>
                <p>{student.location}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default PlacedStudentsCarousel;
