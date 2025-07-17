
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { generatePRDPdf } from "@/lib/pdfGenerator";

const DownloadPRDButton = () => {
  const handleDownload = () => {
    generatePRDPdf();
  };

  return (
    <Button 
      onClick={handleDownload}
      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
    >
      <Download className="w-4 h-4 mr-2" />
      Download PRD as PDF
    </Button>
  );
};

export default DownloadPRDButton;
