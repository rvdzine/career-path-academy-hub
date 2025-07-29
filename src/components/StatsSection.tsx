
const StatsSection = () => {
  const stats = [
    { number: "5000+", label: "Students Trained" },
    { number: "90%", label: "Placement Rate" },
    { number: "50+", label: "Partner Companies" },
    { number: "4.8/5", label: "Average Rating" }
  ];

  return (
    <section className="py-16 bg-[#EA2525] text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group hover:scale-110 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl lg:text-5xl font-bold mb-2 group-hover:text-yellow-300 transition-colors duration-300 animate-pulse-soft">
                {stat.number}
              </div>
              <div className="text-blue-100 text-lg group-hover:text-white transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
