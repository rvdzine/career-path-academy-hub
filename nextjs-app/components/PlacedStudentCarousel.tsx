"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Student {
  name: string;
  role: string;
  company: string;
  package: string;
  image: any;
  location: string;
  quote: string;
  logo: string;
}

const dummyStudents: Student[] = [
  {
    name: "Daryl Fernandes",
    role: "Digital Marketing Specialist",
    company: "Salesforce",
    package: "₹8 LPA",
    image: "/assets/daryl.jpg",
    location: "Noida, India",
    quote:
      "Amazing mentors and real-world campaigns helped me land my first digital marketing role.",
    logo: "/svg/Salesforce.svg",
  },
  {
    name: "Simran Kaur",
    role: "Social Media Manager",
    company: "Meesho",
    package: "₹7.5 LPA",
    image: "/assets/Simran2.jpg", 
    location: "Gurgaon, India",
    quote:
      "Built creative campaigns, portfolio & strategy — cracked my dream social media job!",
    logo: "/svg/Meesho.svg",
  },
  {
  name: "Aditya Singh",
  role: "Digital Marketing Analyst",
  company: "Dream11",
  package: "₹9 LPA",
  image: "/assets/Aditiya.jpg",
  location: "Hyderabad, India",
  quote:
    "From zero industry exposure to expert in GA4, dashboards & campaign analysis — Accenture shaped my digital journey.",
  logo: "/svg/Dream11.svg",
},
{
  name: "Rakesh Kumar",
  role: "Performance Marketing Specialist",
  company: "Zomato",
  package: "₹8.2 LPA",
  image: "/assets/rakesh.jpg",
  location: "Bengaluru, India",
  quote:
    "Mastered Meta + Google ads and funnel optimization — now running high-ROI campaigns at Zomato!",
  logo: "/svg/Zomato.svg",
},
{
  name: "Arjun Yadav",
  role: "Growth Marketing Manager",
  company: "Razorpay",
  package: "₹18 LPA",
  image: "/assets/vicky.jpg",
  location: "Bengaluru, India",
  quote:
    "Growth hacking, CRO & analytics helped me crack Razorpay — this program was a game changer!",
  logo: "/svg/razorpay.svg",
},
{
  name: "Vishal Kumar",
  role: "SEO Specialist",
  company: "Medianet",
  package: "₹7 LPA",
  image: "/assets/vishal.jpg",
  location: "Mumbai, India",
  quote:
    "Learnt SEO, keyword research, and content strategy — landing at Groww feels surreal!",
  logo: "/svg/medianet.svg",
},
{
  name: "Bhumi Gupta",
  role: "Marketing Automation Specialist",
  company: "Razorpay",
  package: "₹22 LPA",
  image: "/assets/Bhumi.jpg",
  location: "Pune, India",
  quote:
    "Built CRM workflows, email funnels & automation — now managing scalable campaigns at Nvidia.",
  logo: "/svg/razorpay.svg",
},
{
  name: "Ritika Jain",
  role: "Social Media & Brand Strategist",
  company: "Testbook",
  package: "₹10 LPA",
  image: "/assets/Ritika.jpg",
  location: "Hyderabad, India",
  quote:
    "From design thinking to viral content planning — Swiggy helped me become a brand storyteller.",
  logo: "/svg/testbook.svg",
},

  {
    name: "Isha Verma",
    role: "Software Engineer",
    company: "Nykaa",
    package: "₹12 LPA",
    image: "/assets/Isha Verma.jpeg",
    location: "Pune, India",
    quote:
      "This course gave me real-world projects and confidence to crack Google interviews!",
    logo: "/svg/Nykaa.svg",
  },
  {
    name: "Rohan Mehta",
    role: "Product Marketing Associate",
    company: "Flipkart",
    package: "₹11 LPA",
    image: "/assets/Rohan.jpg",
    location: "Bengaluru, India",
    quote:
      "Hands-on projects + interview prep = my ticket to CRED. Truly life-changing!",
    logo: "/svg/Flipkart.svg",
  },
  {
    name: "Mohit Kumar",
    role: "Backend Developer",
    company: "TCS",
    package: "₹10 LPA",
    image: "/assets/Mohit.jpg",
    location: "Mumbai, India",
    quote:
      "The mentorship and mock interviews were game-changing. Got placed in Amazon within 3 months.",
    logo: "/svg/TCS.svg",
  },
  {
    name: "Loveleen Sharma",
    role: "Frontend Engineer",
    company: "Paytm",
    package: "₹15 LPA",
    image: "/assets/Loveleen.jpg",
    location: "Bengaluru, India",
    quote:
      "From basics to advanced React, this journey shaped me into a strong frontend developer.",
    logo: "/svg/Paytm.svg",
  },
  {
    name: "Priya Kumari",
    role: "System Engineer",
    company: "Myntra",
    package: "₹6.5 LPA",
    image: "/assets/Priya.jpg",
    location: "Gurgaon, India",
    quote:
      "I switched my career into IT confidently with the right guidance and projects.",
    logo: "/svg/Myntra.svg",
  },
];

const PlacedStudentsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, dummyStudents.length - visibleCount);
  const nextSlide = () => setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  const translateX = -(currentIndex * (100 / visibleCount));

  return (
    <>
      <section className="pt-20 pb-10 bg-[#FFEFEF]">
        <div className="text-center mb-8">
          <span className="bg-[#EA2525] text-white px-5 py-1 rounded-full font-medium">
            Success Stories
          </span>
          <h2 className="text-3xl font-bold text-gray-800 mt-4 max-w-3xl mx-auto">
            Our alumni are working in top organizations such as Google, Meta,
            Zomato, Meesho, Flipkart, TCS, and more.
          </h2>
        </div>

        <div className="relative px-4 md:px-8 lg:px-16">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(${translateX}%)` }}
            >
              {dummyStudents.map((student, index) => (
                <div key={index} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3">
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 p-6 flex items-center justify-between h-full">
                    <div className="flex-1 pr-6">
                      <div className="flex items-center gap-3 mb-3 -mt-2">
                        {/* ✅ Uniform Company Logo Box */}
                        <div className="w-11 h-11 flex items-center justify-center rounded-full bg-white border shadow-sm overflow-hidden">
                          <Image
                            src={student.logo}
                            alt={`${student.company} logo`}
                            width={35}
                            height={35}
                            className="object-contain "
                          />
                        </div>

                        <div className="-mt-[2px]">
                          <h3 className="font-semibold text-gray-900 text-base">{student.name}</h3>
                          <p className="text-sm text-gray-500">
                            {student.role} at {student.company}
                          </p>
                        </div>
                      </div>

                      <hr className="my-3 border-gray-200" />

                      <p className="text-gray-600 text-sm italic leading-relaxed mb-5">
                        “{student.quote}”
                      </p>

                      <div className="flex gap-3 flex-wrap">
                        <span className="bg-[#FFEFEF] text-[#EA2525] text-sm px-3 py-1 rounded-full font-medium">
                          {student.package}
                        </span>
                        <span className="bg-[#FFEFEF] text-[#EA2525] text-sm px-3 py-1 rounded-full font-medium">
                          {student.location}
                        </span>
                      </div>
                    </div>

                    <div className="w-28 h-52 rounded-xl overflow-hidden border border-gray-100 relative">
                      <Image src={student.image} alt={student.name} fill className="object-cover" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow border hover:border-[#EA2525]"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow border hover:border-[#EA2525]"
          >
            <ChevronRight size={22} />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-[#EA2525]" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="bg-gradient-to-b from-[#c81e1e] to-[#520505]  py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          <div><h3 className="text-5xl font-bold mb-2">2400</h3><p className="text-lg">Happy Students Trained</p></div>
          <div><h3 className="text-5xl font-bold mb-2">6300</h3><p className="text-lg">Projects Completed</p></div>
          <div><h3 className="text-5xl font-bold mb-2">10+</h3><p className="text-lg">Years Experience</p></div>
          <div><h3 className="text-5xl font-bold mb-2">2000</h3><p className="text-lg">Students Placed</p></div>
        </div>
      </div>
    </>
  );
};

export default PlacedStudentsCarousel;
