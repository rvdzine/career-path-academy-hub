"use client";

import Image from "next/image";

type Mentor = {
  name: string;
  role: string;
  company?: string;
  avatar: string;
  logo: string;
};

const mentors: Mentor[] = [
  {
    name: "Avik Bhandari",
    role: "Ex. Senior Director",
    company: "Meesho",
    avatar: "/mentors/avik.jpg",
    logo: "/logos/meesho.svg",
  },
  {
    name: "Madhuvanthi S",
    role: "Strategy Principal",
    company: "Mamaearth",
    avatar: "/mentors/madhuvanthi.jpg",
    logo: "/logos/mamaearth.svg",
  },
  {
    name: "Karan Bhagi",
    role: "Ex. Marketing Director",
    company: "Surf Excel",
    avatar: "/mentors/karan.jpg",
    logo: "/logos/surf.svg",
  },
  {
    name: "Arun A",
    role: "Ex. Sr. PM Digital Commerce",
    company: "Unilever",
    avatar: "/mentors/arun.jpg",
    logo: "/logos/unilever.svg",
  },
  {
    name: "Mohona Dey",
    role: "Revenue Growth Mgmt.",
    company: "Mondelez",
    avatar: "/mentors/mohona.jpg",
    logo: "/logos/mondelez.svg",
  },
  {
    name: "Pankaj Yadav",
    role: "Sr. Category Manager",
    company: "Amazon",
    avatar: "/mentors/pankaj.jpg",
    logo: "/logos/amazon.svg",
  },
  {
    name: "Aalekh Tripathi",
    role: "Ex. Marketing Manager",
    company: "Love Beauty & Planet",
    avatar: "/mentors/aalekh.jpg",
    logo: "/logos/lovebeauty.svg",
  },
  {
    name: "Tarun Jyot Singh",
    role: "Founder",
    company: "1DigitalStack",
    avatar: "/mentors/tarun.jpg",
    logo: "/logos/1digitalstack.svg",
  },
  {
    name: "Ankur Devpura",
    role: "Ex. eCommerce Head",
    company: "GSK",
    avatar: "/mentors/ankur.jpg",
    logo: "/logos/gsk.svg",
  },
  {
    name: "Sriram G",
    role: "Strategy Head",
    company: "Whole Truth",
    avatar: "/mentors/sriram.jpg",
    logo: "/logos/wholetruth.svg",
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

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
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

              <div className="mt-4 h-8 relative w-full">
                <Image
                  src={mentor.logo}
                  alt={mentor.company || "Company"}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
