import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialSection from "@/components/TestimonialSection";
import HeroSection from "@/components/HeroSection";
import CourseHighlights from "@/components/CourseHighlights";
import StatsSection from "@/components/StatsSection";
import CertificationSection from "@/components/CertificationSection";
import CtaDigitalMarketing from "@/components/CtaDigitalMarketing";
import OfflineSection from "@/components/OfflineSection";
import Chatbot from "@/components/Chatbot";
import FAQHighlight from "@/components/FAQHighlight";
import Blogs from "@/components/BlogIndex"
// import WhyIDS from "@/components/whyids";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CourseHighlights />
      <CtaDigitalMarketing />
      <OfflineSection />
      <CertificationSection />
      {/* <WhyIDS/> added in certificationsection */}
      
      {/* <StatsSection /> */}
      {/* <TestimonialSection /> */}
      <Blogs />
      <FAQHighlight/>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
