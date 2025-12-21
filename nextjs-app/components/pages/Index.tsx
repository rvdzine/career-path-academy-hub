"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import TestimonialSection from "@/components/TestimonialSection";
import HeroSection from "@/components/HeroSection";
import CourseHighlightsIndex from "@/components/CourseHighlightsIndex";
// import StatsSection from "@/components/StatsSection";
import CertificationSection from "@/components/CertificationSection";
// import CtaDigitalMarketing from "@/components/CtaDigitalMarketing";
// import OfflineSection from "@/components/OfflineSection";
import Chatbot from "@/components/Chatbot";
import FAQHighlight from "@/components/FAQHighlight";
import Blogs from "@/components/BlogIndex"
// import SalaryReport from "@/components/courseDetailsComponents/SalaryReport";
// import Contactform from "@/components/ContactForm";
import SignInModal from "@/components/SignInModal";
import GallerySection from "@/components/Gallery";
import WhyIDS from "@/components/whyids";
import PlacedStudentsCarousel from "@/components/PlacedStudentCarousel";
import TrackRecordSection from "@/components/TrackRecordSection";
import MentorsSection from "@/components/MentorsSection";
import ReelsSection from "@/components/ReelsSection";
import CompanySlider from "@/components/CompanySlider";
import ProgramForm from "@/components/ProgramForm";
import CoursesSection from "../CoursesSection";
import ToolsYouWillMaster from "../ToolMaster";
import DigitalMarketingSlider from "../DigitalMarketingSlider";
import IDSComparison from "./IDSComparison";
// import WhyIDS from "@/components/whyids";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CoursesSection/>
      <DigitalMarketingSlider/>
      <ToolsYouWillMaster/>
      <PlacedStudentsCarousel/>
      <TrackRecordSection/>
      <CompanySlider/>
      <CertificationSection />
      <IDSComparison/>
      <ReelsSection/>
        
      <MentorsSection/>
     
     
      
      <ProgramForm/>
       <Blogs />
       <FAQHighlight/>
       <GallerySection/>
      <Footer />
      {/* <Chatbot /> */}
       <SignInModal />
    </div>
  );
};

export default Index;
