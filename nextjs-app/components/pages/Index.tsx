"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import TestimonialSection from "@/components/TestimonialSection";
import HeroSection from "@/components/HeroSection";
import CourseHighlightsIndex from "@/components/CourseHighlightsIndex";
// import StatsSection from "@/components/StatsSection";
import CertificationSection from "@/components/CertificationSection";
import CtaDigitalMarketing from "@/components/CtaDigitalMarketing";
import OfflineSection from "@/components/OfflineSection";
import Chatbot from "@/components/Chatbot";
import FAQHighlight from "@/components/FAQHighlight";
import Blogs from "@/components/BlogIndex"
import SalaryReport from "@/components/courseDetailsComponents/SalaryReport";
import Contactform from "@/components/ContactForm";
import SignInModal from "@/components/SignInModal";
import GallerySection from "@/components/Gallery";
import WhyIDS from "../whyids";
import PlacedStudentsCarousel from "../PlacedStudentCarousel";
import TrackRecordSection from "../TrackRecordSection";
import MentorsSection from "../MentorsSection";
import ReelsSection from "../ReelsSection";
import CompanySlider from "../CompanySlider";
// import WhyIDS from "@/components/whyids";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CourseHighlightsIndex />
      {/* <CtaDigitalMarketing /> */}
      {/* <OfflineSection /> */}
      
      <WhyIDS/> 
      <CertificationSection />
      <PlacedStudentsCarousel/>
      {/* <StatsSection /> */}
      {/* <TestimonialSection /> */}
      {/* <SalaryReport/> */}
      <TrackRecordSection/>
    
      <ReelsSection/>
        <CompanySlider/>
      <MentorsSection/>
     
     
      <FAQHighlight/>
       <Blogs />
       <GallerySection/>
      <Footer />
      <Chatbot />
       <SignInModal />
    </div>
  );
};

export default Index;
