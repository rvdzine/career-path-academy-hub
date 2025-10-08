import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import CourseHero from "@/components/courseDetailsComponents/CoursesHero";
import StatsSection from "@/components/courseDetailsComponents/StatsSection";
import Footer from "@/components/Footer";

import AboutCourse from "@/components/courseDetailsComponents/AboutCourse";
import CourseContent from "@/components/courseDetailsComponents/CourseContent";
import SkillsYouLearn from "@/components/courseDetailsComponents/SkillsYouLearn";
import SuccessStoriesCourses from "@/components/courseDetailsComponents/SuccessStoriesCourses";
import SalaryReport from "@/components/courseDetailsComponents/SalaryReport";
import FAQs from "@/components/courseDetailsComponents/CourseDetailsFaq";

const DynamicCourseDetails = () => {
  const {courseId} = useParams<{ courseId: string}>();
  const [activeTab, setActiveTab] = useState("about");

  // Section Refs
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const successRef = useRef<HTMLDivElement | null>(null);
  const salaryRef = useRef<HTMLDivElement | null>(null);
  const faqRef = useRef<HTMLDivElement | null>(null);

  const sectionRefs = {
    about: aboutRef,
    content: contentRef,
    skills: skillsRef,
    successtories: successRef,
    salary: salaryRef,
    faqs: faqRef,
  };

  const tabs = [
    { key: "about", label: "About Course" },
    { key: "content", label: "Course Content" },
    { key: "skills", label: "Skills you Learn" },
    { key: "successtories", label: "Success Stories" },
    { key: "salary", label: "Salary Report" },
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
      <div className="sticky top-0 bg-white border-b z-20">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center relative">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleScrollToSection(tab.key)}
              className={`relative px-4 py-4 font-medium transition-all duration-300 text-base md:text-lg ${
                activeTab === tab.key
                  ? "text-[#EA2525]"
                  : "text-gray-600 hover:text-[#EA2525]"
              }`}
            >
              {tab.label}
              {/* Underline animation */}
              <span
                className={`absolute left-0 bottom-0 h-[3px] bg-[#EA2525] transition-all duration-300 ${
                  activeTab === tab.key ? "w-full opacity-100" : "w-0 opacity-0"
                }`}
              ></span>
            </button>
          ))}
        </div>
      </div>

      {/* All sections on single scroll page */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 space-y-24">
        <section ref={aboutRef} id="about">
          <AboutCourse />
        </section>

        <section ref={contentRef} id="content">
          <CourseContent />
        </section>

        <section ref={skillsRef} id="skills">
          <SkillsYouLearn courseId = {courseId} />
        </section>

        <section ref={successRef} id="successtories">
          <SuccessStoriesCourses />
        </section>

        <section ref={salaryRef} id="salary">
          <SalaryReport />
        </section>

        <section ref={faqRef} id="faqs">
          <FAQs />
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default DynamicCourseDetails;
