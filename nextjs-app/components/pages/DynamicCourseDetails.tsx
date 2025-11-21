"use client";

import { useParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import CourseHero from "@/components/courseDetailsComponents/CoursesHero";
import StatsSection from "@/components/courseDetailsComponents/StatsSection";
import Footer from "@/components/Footer";
import EnrollmentDialog from "@/components/EnrollmentDialog";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

import AboutCourse from "@/components/courseDetailsComponents/AboutCourse";
import CourseContent from "@/components/courseDetailsComponents/CourseContent";
import SkillsYouLearn from "@/components/courseDetailsComponents/SkillsYouLearn";
import SuccessStoriesCourses from "@/components/courseDetailsComponents/SuccessStoriesCourses";
import SalaryReport from "@/components/courseDetailsComponents/SalaryReport";
import FAQs from "@/components/courseDetailsComponents/CourseDetailsFaq";
import CourseTable from "../courseDetailsComponents/CourseTable";

const DynamicCourseDetails = () => {
  const params = useParams();
  const courseId = params?.courseId as string;
  const [activeTab, setActiveTab] = useState("about");

  const courseNames: Record<string, string> = {
    "master-in-digital-marketing-course": "Master in Digital Marketing Course at idigitalstudies",
    "specialist-in-digital-marketing": "Digital Marketing Specialist Course at iDigitalStudies",
    "digital-marketing-course-for-business-owners": "Best Digital Marketing Course for Business Owners",
    "foundation-in-digital-marketing": "Digital Marketing Course for Beginners",
    "customised-digital-marketing": "Customised Course in Digital Marketing",
    "degree-digital-marketing": "Degree in Digital Marketing",
  };

  const courseName = courseNames[courseId || ""] || "Course";

  // Section Refs
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const successRef = useRef<HTMLDivElement | null>(null);
  const salaryRef = useRef<HTMLDivElement | null>(null);
  const faqRef = useRef<HTMLDivElement | null>(null);
  const courseTableRef = useRef<HTMLDivElement | null>(null);

  const sectionRefs = {
    about: aboutRef,
    content: contentRef,
    skills: skillsRef,
    successtories: successRef,
    salary: salaryRef,
    faqs: faqRef,
    coursetable: courseTableRef,
  };

  const tabs = [
    { key: "about", label: "About Course" },
    { key: "content", label: "Course Content" },
    { key: "skills", label: "Skills you Learn" },
    { key: "successtories", label: "Success Stories" },
    { key: "salary", label: "Salary Report" },
    { key: "coursetable", label: "Course Table" },
    { key: "faqs", label: "FAQs" },
  ];

  // Scroll to section on tab click
  const handleScrollToSection = (key: string) => {
    const section = sectionRefs[key]?.current;
    if (section) {
      const yOffset = -80; // offset for sticky navbar
      const y =
        section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // adjust for navbar height
      let current = "about";

      Object.entries(sectionRefs).forEach(([key, ref]) => {
        const section = ref.current;
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            current = key;
          }
        }
      });
      setActiveTab(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Navbar />
      <CourseHero />
      <StatsSection />

      {/* Sticky Tabs Section */}
      <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-2 relative">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => handleScrollToSection(tab.key)}
                className={`relative px-6 py-4 font-semibold transition-all duration-300 text-sm md:text-base rounded-t-lg ${
                  activeTab === tab.key
                    ? "text-[#EA2525] bg-red-50"
                    : "text-gray-600 hover:text-[#EA2525] hover:bg-gray-50"
                }`}
              >
                {tab.label}
                {/* Underline animation */}
                <span
                  className={`absolute left-0 bottom-0 h-[3px] bg-gradient-to-r from-[#EA2525] to-[#AA2526] rounded-full transition-all duration-300 ${
                    activeTab === tab.key ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                ></span>
              </button>
            ))}
            {/* Enroll Now Button beside FAQs */}
            <div className="ml-auto hidden md:flex">
              <EnrollmentDialog courseTitle={courseName}>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-[#EA2525] to-[#AA2526] hover:from-[#AA2526] hover:to-[#EA2525] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  <GraduationCap className="w-5 h-5" />
                  Enroll Now
                </Button>
              </EnrollmentDialog>
            </div>
          </div>
        </div>
      </div>

      {/* All sections on single scroll page */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 space-y-32">
        <section ref={aboutRef} id="about" className="scroll-mt-20">
          <AboutCourse />
        </section>

        <section ref={contentRef} id="content" className="scroll-mt-20">
          <CourseContent />
        </section>

        <section ref={skillsRef} id="skills" className="scroll-mt-20">
          <SkillsYouLearn courseId = {courseId} />
        </section>

        <section ref={successRef} id="successtories" className="scroll-mt-20 -mx-4 md:-mx-8 lg:-mx-12">
          <SuccessStoriesCourses />
        </section>

        <section ref={salaryRef} id="salary" className="scroll-mt-20">
          <SalaryReport />
        </section>

        <section ref={courseTableRef} id="coursetable" className="scroll-mt-20">
          <CourseTable />
        </section>

        <section ref={faqRef} id="faqs" className="scroll-mt-20">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <FAQs />
            </div>
            {/* Enroll Now Card beside FAQs on desktop */}
            <div className="w-full md:w-96 sticky top-24">
              <div className="bg-gradient-to-br from-[#EA2525] to-[#AA2526] rounded-2xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-3 rounded-full">
                      <GraduationCap className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold">Ready to Start?</h3>
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Join thousands of students who have transformed their careers with our comprehensive digital marketing course.
                  </p>
                  <EnrollmentDialog courseTitle={courseName}>
                    <Button 
                      size="lg"
                      className="w-full bg-white text-[#EA2525] hover:bg-gray-100 font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Enroll Now
                    </Button>
                  </EnrollmentDialog>
                  <p className="text-xs text-white/80 text-center">
                    ✓ 100% Placement Assistance<br />
                    ✓ Live Projects & Internship<br />
                    ✓ Lifetime Access
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default DynamicCourseDetails;
