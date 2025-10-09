import salaryImage from "../../components/assets/salary-report.jpg";
import { Button } from "@/components/ui/button";
import SalaryReportModal from "../SalaryReport";

const SalaryReport = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Outer Card */}
        <div className="relative overflow-hidden bg-white shadow-md rounded-2xl flex flex-col md:flex-row items-center md:items-stretch">
          {/* Gradient Overlay (Right Side Fade) */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10 md:w-1/2"></div>

          {/* Left Section */}
          <div className="relative z-20 w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-[#EA2525] text-base md:text-lg font-semibold mb-3">
              Salary Report 2024–2025
            </h3>
            <p className="text-gray-900 text-2xl md:text-3xl font-semibold leading-snug mb-6">
              The demand for digital marketers has grown 38% YoY. Here’s what
              you can expect after completing the program
            </p>
            <SalaryReportModal>
              <Button className="bg-[#EA2525] hover:bg-[#c81f1f] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 w-fit">
                View Report
              </Button>
            </SalaryReportModal>
          </div>

          {/* Right Section - Image */}
          <div className="w-full md:w-1/2">
            <img
              src={salaryImage}
              alt="Salary Report Preview"
              className="w-full h-full object-cover rounded-r-2xl md:rounded-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalaryReport;
