import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProgramsExplorer from "@/components/ProgramsExplorer";
import RecognizedCertifications from "@/components/RecognizedCertifications";
import SuccessStories from "@/components/SuccessStories";
import HiringPartners from "@/components/HiringPartners";
import WhyChooseUs from "@/components/WhyChooseUs";
import ComparisonChart from "@/components/ComparisonChart";
import FacultySection from "@/components/FacultySection";
import AlumniWall from "@/components/AlumniWall";
import ToolsMaster from "@/components/ToolsMaster";
import FAQSection from "@/components/FAQSection";
import DemoBookingForm from "@/components/DemoBookingForm";
import Footer from "@/components/Footer";
import StickyWidgets from "@/components/StickyWidgets";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Header with TopBar & MegaMenu */}
      <Navbar />

      {/* 2. Hero Section */}
      <HeroSection />

      {/* 3. Explore Programs & Categories */}
      <ProgramsExplorer />

      {/* 4. Recognized Certifications */}
      <RecognizedCertifications />

      {/* 5. Real Stories & Video Testimonials */}
      <SuccessStories />

      {/* 5. Trusted By Leading Brands (Hiring Partners) */}
      <HiringPartners />

      {/* 6. Why Students Choose Us (10 USPs) */}
      <WhyChooseUs />

      {/* 7. Backed By World Class Faculties */}
      <FacultySection />

      {/* 8. Meet Our Alumni (Career Transformation Wall) */}
      <AlumniWall />

      {/* 9. Pedagogy Comparison // The IDS Difference */}
      <ComparisonChart />

      {/* 10. Tools You'll Master */}
      <ToolsMaster />

      {/* 11. Free Demo Booking & Career Counseling Section */}
      <DemoBookingForm />

      {/* 12. FAQ Section */}
      <FAQSection />

      {/* 13. Comprehensive Multi-Column Footer */}
      <Footer />

      {/* 14. Sticky Floating Actions & Social Proof Notification */}
      <StickyWidgets />
    </main>
  );
}
