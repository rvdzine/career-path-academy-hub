import salaryImage from "../../components/assets/salary-report.jpg";
import { Button } from "@/components/ui/button";
import SalaryReportModal from "../SalaryReport";

const SalaryReport = () => {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden bg-white shadow-md rounded-2xl flex flex-col md:flex-row items-center md:items-stretch">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10 md:w-1/2"></div>
          <div className="relative z-10 w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
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
          <div className="w-full md:w-1/2">
            <img
              src={typeof salaryImage === 'string' ? salaryImage : salaryImage.src}
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
