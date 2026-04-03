"use client";

import Image from "next/image";

type Mentor = {
  name: string;
  role: string;
  company?: string;
  experience?: string;
  avatar: string;
 
};

const mentors: Mentor[] = [
  // {
  //   name: "Avik Bhandari",
  //   role: "Ex. Senior Director",
  //   company: "Meesho",
  //   avatar: "/mentors/avik.jpg",
  //   logo: "/logos/meesho.svg",
  // },
  {
    name: "Ravi Verma",
    role: "Strategist Principal",
    experience: "12+ years",
    company: "Physics Wallah",
    avatar: "/assets/Ravi.jpg",
    
  },
  {
    name: "Sweta Kushwaha",
    role: "Sr.Marketing Manager",
    experience: "8+ years",
    company: "Amazon",
    avatar: "/assets/sweta.jpg",
   
  },
  {
    name: "Deepanshi Kukreja",
    role: "Trainer and Coach ",
    experience: "8+ years",
    company: "WS Cubetect",
    avatar: "/assets/deepanshi.jpeg",
    
  },
  {
    name: "Suleman Khan",
    role: "Trainer & coach",
    experience: "9+ years",
    company: "Mondelez",
    avatar: "/assets/suleman.jpeg",
  },
  {
    name: "Suleman Khan",
    role: "Trainer & coach",
    experience: "7+ years",
    company: "Mondelez",
    avatar: "/assets/jitender-singh.jpg",
  },
  
];

export default function MentorsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900">
          Meet your Mentors
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Get trained by experts with real experience across digital, media,
          brand, and tech industries.
        </p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 ">
          {mentors.map((mentor, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center shadow-sm hover:shadow-md transition"
            >
              <div className="relative w-24 h-24 rounded-full overflow-hidden">
                <Image
                  src={mentor.avatar}
                  alt={mentor.name}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="mt-4 font-semibold text-gray-900 text-lg">
                {mentor.name}
              </h3>

              <p className="text-[#EA2525] text-sm font-medium mt-1">
                {mentor.role}
              </p>
              <p className="text-gray-700 text-sm font-normal mt-1">
                {mentor.experience}
              </p>

              {/* <div className="mt-4 h-8 relative w-full">
                <Image
                  src={mentor.logo}
                  alt={mentor.company || "Company"}
                  fill
                  className="object-contain"
                />
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
