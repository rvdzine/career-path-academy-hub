"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ThankYouPage() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    // Countdown timer
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          router.push("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [router]);

  const handleReturnHome = () => {
    router.push("/");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full text-center space-y-8">
          {/* Green Check Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-75"></div>
              <div className="relative bg-gradient-to-br from-green-400 to-green-600 rounded-full p-6 shadow-lg">
                <CheckCircle className="h-16 w-16 text-white" />
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-black">
              Thank You!
            </h1>
            <p className="text-lg text-black leading-relaxed">
              We have received your message correctly. Our team will contact you soon.
            </p>
          </div>

          {/* Return to Homepage Button */}
          <div className="space-y-4">
            <Button
              onClick={handleReturnHome}
              className="w-full bg-[#EA2525] hover:bg-red-600 text-black font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Return to Homepage
            </Button>
            
            {/* Auto-redirect message */}
            <p className="text-sm text-gray-600">
              Redirecting to homepage in {countdown} seconds...
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
