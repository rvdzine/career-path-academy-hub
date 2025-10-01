import { Smile, FileText, Headphones, Users } from "lucide-react";

const StatsSection = () => {
  const stats = [
    { number: "2400", label: "Happy Students Trained by Us", icon: <Smile className="w-10 h-10 text-pink-500" /> },
    { number: "6300", label: "Projects Completed Successfully", icon: <FileText className="w-10 h-10 text-orange-500" /> },
    { number: "10", label: "Years of Experience", icon: <Headphones className="w-10 h-10 text-green-500" /> },
    { number: "2000", label: "Students Placed by Us", icon: <Users className="w-10 h-10 text-red-500" /> },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <p className="text-center text-blue-900 mb-12 max-w-2xl mx-auto">
          Our learner community&apos;s unwavering trust and confidence continue to propel our success story forward.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-center mb-4 gap-5">
                {stat.icon}
                <div className="text-4xl font-bold text-blue-900">{stat.number}</div>
              </div>
              <p className="flex justify-center font-bold items-center mt-2 text-blue-900">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
