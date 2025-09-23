"use client";

import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const companyData = [
  { name: "Google India", fresher: 60, mid: 150, senior: 400, tier: "product" },
  { name: "Zoho", fresher: 55, mid: 130, senior: 250, tier: "product" },
  { name: "Adobe India", fresher: 45, mid: 100, senior: 270, tier: "product" },
  { name: "Accenture", fresher: 35, mid: 85, senior: 250, tier: "tier1" },
  { name: "Deloitte", fresher: 40, mid: 90, senior: 220, tier: "tier1" },
  { name: "HCL", fresher: 34, mid: 85, senior: 220, tier: "tier2" },
  { name: "TCS", fresher: 32, mid: 80, senior: 210, tier: "tier2" },
  { name: "Wipro", fresher: 30, mid: 75, senior: 200, tier: "tier2" },
  { name: "Publicis Sapient", fresher: 38, mid: 90, senior: 200, tier: "product" },
  { name: "Infosys", fresher: 28, mid: 70, senior: 180, tier: "tier2" },
];

export default function SalaryDashboard() {
  const [currentFilter, setCurrentFilter] = useState("all");
  const [currentUnit, setCurrentUnit] = useState("monthly"); // monthly or yearly
  const [currentView, setCurrentView] = useState("all");
  const [filteredData, setFilteredData] = useState(companyData);

  useEffect(() => {
    let data = [...companyData];
    if (currentFilter !== "all") data = data.filter((c) => c.tier === currentFilter);
    setFilteredData(data);
  }, [currentFilter]);

  // salary conversion for monthly vs yearly
  const convert = (salary: number) =>
    currentUnit === "yearly" ? salary * 12 : salary;

  const chartData = {
    labels: filteredData.map((c) => c.name),
    datasets: [
      {
        label: "Fresher (0-2 yrs)",
        data: filteredData.map((c) => convert(c.fresher)),
        backgroundColor: "#3B82F6",
        borderRadius: 8,
      },
      {
        label: "Mid-level (3-5 yrs)",
        data: filteredData.map((c) => convert(c.mid)),
        backgroundColor: "#22C55E",
        borderRadius: 8,
      },
      {
        label: "Senior (8-10 yrs)",
        data: filteredData.map((c) => convert(c.senior)),
        backgroundColor: "#F59E0B",
        borderRadius: 8,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: { color: "#d1d5db" },
      },
    },
    scales: {
      x: { ticks: { color: "#9CA3AF" }, grid: { color: "#1F2937" } },
      y: { ticks: { color: "#9CA3AF" }, grid: { color: "#1F2937" } },
    },
  };

  return (
    <section className="min-h-screen bg-[#0F172A] text-white py-16 px-6">
      {/* Title */}
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          IT Salary Analytics
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Comprehensive analysis of monthly salaries across top Indian IT companies by experience level
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {["all", "tier1", "tier2", "product"].map((filter) => (
          <button
            key={filter}
            onClick={() => setCurrentFilter(filter)}
            className={`px-4 py-2 rounded-lg border transition ${
              currentFilter === filter
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-gray-800 border-gray-700 hover:bg-gray-700"
            }`}
          >
            {filter === "all"
              ? "All Companies"
              : filter === "tier1"
              ? "Tier 1"
              : filter === "tier2"
              ? "Tier 2"
              : "Product Based"}
          </button>
        ))}
      </div>

      {/* Monthly / Yearly toggle */}
      <div className="flex justify-center gap-4 mb-12">
        <button
          onClick={() => setCurrentUnit("monthly")}
          className={`px-4 py-2 rounded-xl transition ${
            currentUnit === "monthly"
              ? "bg-purple-500 text-white"
              : "bg-gray-700 text-gray-300"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setCurrentUnit("yearly")}
          className={`px-4 py-2 rounded-xl transition ${
            currentUnit === "yearly"
              ? "bg-purple-500 text-white"
              : "bg-gray-700 text-gray-300"
          }`}
        >
          Yearly
        </button>
      </div>

      {/* Chart */}
      <div className="bg-gray-900 rounded-2xl p-6 shadow-xl mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Salary Comparison Chart
        </h2>
        <Bar data={chartData} options={chartOptions} />
      </div>

      {/* Company Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((c, i) => (
          <div
            key={i}
            className="bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              {c.name}
            </h3>
            <p className="mb-2 text-gray-300">
              Fresher: <span className="text-white">{convert(c.fresher)} K</span>
            </p>
            <p className="mb-2 text-gray-300">
              Mid-level: <span className="text-white">{convert(c.mid)} K</span>
            </p>
            <p className="text-gray-300">
              Senior: <span className="text-white">{convert(c.senior)} K</span>
            </p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <p className="text-gray-500 text-center text-sm mt-10">
        Data sourced from Glassdoor, PayScale, and industry reports – Last updated: September 2025
      </p>
    </section>
  );
}
