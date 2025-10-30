"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const salaryData = [
  { company: "Google India", fresher: 60000, intermediate: 150000, senior: 400000, tier: "tier1", type: "product", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { company: "Accenture", fresher: 35000, intermediate: 85000, senior: 250000, tier: "tier1", type: "service", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Accenture.svg"  },
  { company: "Deloitte", fresher: 40000, intermediate: 90000, senior: 220000, tier: "tier1", type: "service", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { company: "Wipro", fresher: 30000, intermediate: 75000, senior: 200000, tier: "tier2", type: "service", logo:"https://upload.wikimedia.org/wikipedia/commons/4/49/Wipro_Ltd_logo.svg"  },
  { company: "Infosys", fresher: 28000, intermediate: 70000, senior: 180000, tier: "tier2", type: "service", logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Infosys_logo.svg" },
  { company: "TCS", fresher: 32000, intermediate: 80000, senior: 210000, tier: "tier2", type: "service", logo:"https://upload.wikimedia.org/wikipedia/commons/9/9e/Tata_Consultancy_Services_Logo.svg"  },
  { company: "HCL", fresher: 34000, intermediate: 85000, senior: 220000, tier: "tier2", type: "service", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8c/HCL_Technologies_logo.svg"  },
  { company: "Cognizant", fresher: 30000, intermediate: 65000, senior: 170000, tier: "tier2", type: "service", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Cognizant_logo.svg" },
  { company: "Zoho", fresher: 55000, intermediate: 130000, senior: 350000, tier: "tier1", type: "product", logo:  "https://upload.wikimedia.org/wikipedia/commons/7/77/Zoho_logo.svg" },
  { company: "Adobe India", fresher: 45000, intermediate: 100000, senior: 270000, tier: "tier1", type: "product", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Corporate_logo.svg" },
  { company: "Publicis Sapient", fresher: 38000, intermediate: 90000, senior: 200000, tier: "tier1", type: "service", logo: "https://upload.wikimedia.org/wikipedia/commons/1/10/Publicis_Sapient_logo.svg" },
  { company: "Wunderman Thompson", fresher: 36000, intermediate: 80000, senior: 180000, tier: "tier2", type: "service", logo:"https://upload.wikimedia.org/wikipedia/commons/3/31/Wunderman_Thompson_logo.svg" },
];
export default function Home() {
  const [filter, setFilter] = useState("all");
  const [view, setView] = useState("all");
  const [unit, setUnit] = useState("monthly");

  const formatCurrency = (amount) => {
    const converted = unit === "yearly" ? amount * 12 : amount;
    if (converted >= 10000000) return `₹${(converted / 10000000).toFixed(1)} Cr`;
    if (converted >= 100000) return `₹${(converted / 100000).toFixed(1)} L`;
    return `₹${(converted / 1000).toFixed(0)} K`;
  };

  const filteredData = salaryData.filter(
    (c) => filter === "all" || c.tier === filter || c.type === filter
  );

  const avg = {
    senior: formatCurrency(filteredData.reduce((a, c) => a + (unit === "yearly" ? c.senior * 12 : c.senior), 0) / filteredData.length),
    mid: formatCurrency(filteredData.reduce((a, c) => a + (unit === "yearly" ? c.intermediate * 12 : c.intermediate), 0) / filteredData.length),
    fresher: formatCurrency(filteredData.reduce((a, c) => a + (unit === "yearly" ? c.fresher * 12 : c.fresher), 0) / filteredData.length),
  };

  const maxSalary = Math.max(
    ...filteredData.map((c) => Math.max(c.fresher, c.intermediate, c.senior))
  );

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white px-6 py-8">
      {/* HEADER */}
      <motion.header
        className="text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold">IT Salary Analytics</h1>
        <p className="text-gray-400">
          Comprehensive analysis of monthly salaries across top Indian IT companies by experience level
        </p>
      </motion.header>

      {/* FILTER BUTTONS */}
      <div className="flex justify-center gap-3 mb-6 flex-wrap">
        {["all", "tier1", "tier2", "service", "product"].map((btn) => (
          <button
            key={btn}
            className={`px-4 py-2 rounded-full ${
              filter === btn ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600"
            }`}
            onClick={() => setFilter(btn)}
          >
            {btn === "all"
              ? "All Companies"
              : btn === "tier1"
              ? "Tier 1"
              : btn === "tier2"
              ? "Tier 2"
              : btn === "service"
              ? "Service Based"
              : "Product Based"}
          </button>
        ))}
      </div>

      {/* TOGGLE MONTHLY / YEARLY */}
      <div className="flex justify-center gap-3 mb-8">
        {["monthly", "yearly"].map((btn) => (
          <button
            key={btn}
            className={`px-4 py-1 rounded-full ${
              unit === btn ? "bg-green-600" : "bg-gray-700 hover:bg-gray-600"
            }`}
            onClick={() => setUnit(btn)}
          >
            {btn.charAt(0).toUpperCase() + btn.slice(1)}
          </button>
        ))}
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <motion.div className="bg-gray-800 p-4 rounded-xl text-center">
          <div className="text-2xl font-bold">{filteredData.length}</div>
          <div className="text-gray-400">Companies Analyzed</div>
        </motion.div>
        <motion.div className="bg-gray-800 p-4 rounded-xl text-center">
          <div className="text-2xl font-bold">{avg.senior}</div>
          <div className="text-gray-400">Average Senior Salary</div>
        </motion.div>
        <motion.div className="bg-gray-800 p-4 rounded-xl text-center">
          <div className="text-2xl font-bold">{avg.mid}</div>
          <div className="text-gray-400">Average Mid-level</div>
        </motion.div>
        <motion.div className="bg-gray-800 p-4 rounded-xl text-center">
          <div className="text-2xl font-bold">{avg.fresher}</div>
          <div className="text-gray-400">Average Fresher</div>
        </motion.div>
      </div>

      {/* CHART */}
      <div className="space-y-3 mb-10">
        {filteredData.map((c, i) => (
          <motion.div
            key={i}
            className="bg-gray-900 p-3 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-sm font-semibold mb-2">{c.company}</div>
            <div className="space-y-2">
              {(view === "all" || view === "fresher") && (
                <div className="bg-blue-600 h-4 rounded-full relative" style={{ width: `${(c.fresher / maxSalary) * 100}%` }}>
                  <span className="absolute right-0 -top-5 text-xs">{formatCurrency(c.fresher)}</span>
                </div>
              )}
              {(view === "all" || view === "intermediate") && (
                <div className="bg-green-600 h-4 rounded-full relative" style={{ width: `${(c.intermediate / maxSalary) * 100}%` }}>
                  <span className="absolute right-0 -top-5 text-xs">{formatCurrency(c.intermediate)}</span>
                </div>
              )}
              {(view === "all" || view === "senior") && (
                <div className="bg-yellow-500 h-4 rounded-full relative" style={{ width: `${(c.senior / maxSalary) * 100}%` }}>
                  <span className="absolute right-0 -top-5 text-xs">{formatCurrency(c.senior)}</span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* CARDS GRID */}
       <div className="grid md:grid-cols-3 gap-6">
        {filteredData.map((c, i) => (
          <motion.div
            key={i}
            className="bg-gray-800 rounded-2xl p-5 shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">{c.company}</h3>
              <img src={c.logo as string} alt={c.company} className="h-8 w-auto" />
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-400">Fresher (0-2 yrs)</p>
                <p className="font-semibold text-green-400">{formatCurrency(c.fresher)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Mid-level (3-5 yrs)</p>
                <p className="font-semibold text-green-400">{formatCurrency(c.intermediate)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Senior (8-10 yrs)</p>
                <p className="font-semibold text-green-400">{formatCurrency(c.senior)}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FOOTER */}
      <footer className="text-center mt-10 text-gray-500 text-sm">
        Data sourced from Glassdoor, PayScale, and industry reports • Last updated: September 2025
      </footer>
    </div>
  );
}
