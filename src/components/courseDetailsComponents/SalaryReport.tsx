// import React from "react";
import salaryImage from "../../components/assets/salary-report.jpg"; 
import { Button } from "@/components/ui/button";
import SalaryReportModal from "../SalaryReport";

const SalaryReport = () => {
  return (
    <section className="py-2 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#EA2525] mb-4">
            Salary Report 2024–2025
          </h2>
          <p className="text-lg md:text-xl font-semibold text-[#4B444D] mb-6">
            The demand for digital marketers has grown 38% YoY. Here’s what you
            can expect after completing the program.
          </p>
          <SalaryReportModal>
            <Button className="bg-[#EA2525] hover:bg-[#c81f1f] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
              View Report
            </Button>
          </SalaryReportModal>
        </div>

        {/* Right Section */}
        <div className="flex justify-center md:justify-end">
          <img
            src={salaryImage}
            alt="Salary Report"
            className="w-full max-w-md rounded-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default SalaryReport;
