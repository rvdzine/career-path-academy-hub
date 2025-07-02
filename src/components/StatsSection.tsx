
const StatsSection = () => {
  const stats = [
    { number: "5000+", label: "Students Trained" },
    { number: "90%", label: "Placement Rate" },
    { number: "50+", label: "Partner Companies" },
    { number: "4.8/5", label: "Average Rating" }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-blue-100 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
