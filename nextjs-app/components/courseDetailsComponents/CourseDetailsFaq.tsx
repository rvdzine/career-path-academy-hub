import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: " What makes iDigitalStudies the best digital marketing institute in Noida?",
      answer: "iDigitalStudies is known for its industry-relevant curriculum, expert trainers, hands-on experience, and personalized attention. We ensure our students gain practical knowledge that is directly applicable to real-world digital marketing challenges."
    },
    {
      question: "What is the duration of the Digital Marketing course in Noida at iDigitalStudies?",
      answer: "The duration of our Digital Marketing course ranges from 3 months for specialized programs to 6 months for comprehensive courses, including internships and practical training."
    },
    {
      question: "Is there an internship included in the digital marketing course at iDigitalStudies?",
      answer:
        "Yes, we offer a 100% Internship as part of our 6-month Digital Marketing course to provide students with hands-on industry experience",
    },
   {
      question: "What topics are covered in the Digital Marketing course in Noida?",
      answer:
        "Our Digital Marketing course covers SEO, SEM, Social Media Marketing (SMM), Content Marketing, Google Analytics, PPC, Email Marketing, Affiliate Marketing, and much more.",
    },
    {
      question: "Are the digital marketing classes in Noida offered by iDigitalStudies suitable for beginners?",
      answer:
        "Absolutely! Our Digital Marketing courses are designed to cater to both beginners and experienced professionals. We start with foundational concepts and gradually move to advanced strategies.",
    },
    {
      question: "Will I get certification after completing the digital marketing course?",
      answer:
        "Yes, iDigitalStudies provides a certification upon completion of the course, which is recognized by industry leaders and enhances your credibility as a digital marketing professional.",
    },
    {
      question: "How do I enroll in the Digital Marketing course at iDigitalStudies in Noida?",
      answer:
        "You can enroll by visiting our website or contacting our admissions team for a free consultation. We'll guide you through the process and help you choose the right course based on your goals.",
    },
    {
      question: "What is the fee structure for the Digital Marketing course at iDigitalStudies?",
      answer:
        "The fee structure depends on the course type and duration. For detailed information, please visit our website or contact our team for the most accurate pricing details.",
    },
    {
      question: "Do you offer 1:1 Digital Marketing classes in Noida?",
      answer:
        "Yes, iDigitalStudies offers 1:1 Digital Marketing coaching for business owners and professionals who need personalized attention and tailored strategies to grow their businesses online.",
    },
    {
      question: "Can I attend digital marketing classes online if I am unable to join the Noida campus?",
      answer:
        "Yes, we offer online digital marketing classes for students across the globe. Our virtual classes provide the same level of training, resources, and support as in-person classes in Noida.",
    },
    // {
    //   question: "Do you provide recorded sessions?",
    //   answer:
    //     "Yes, every session is recorded and made available to students for future reference.",
    // },
    // {
    //   question: "Will I get support if I miss a class?",
    //   answer:
    //     "Absolutely. You can attend a repeat session in another batch or watch the recorded session anytime.",
    // },
    // {
    //   question: "How can I enroll in a course?",
    //   answer:
    //     "You can enroll directly through our website, visit our center, or speak to our admissions team at 📞 9315471293 or 📧 info@idigitalstudies.com.",
    // },
    // {
    //   question: "Can I customize a course as per my learning goals?",
    //   answer:
    //     "Yes. Our Professional & Business Owner course is fully customizable and designed as a 1-to-1 learning plan.",
    // },
    // {
    //   question: "Do you provide real-time project exposure?",
    //   answer:
    //     "Yes. Every course involves live projects, case studies, and practical tools to ensure hands-on learning.",
    // },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">      
      <div className="space-y-2 mb-8">
        <h3 className="text-[#EA2525] font-bold text-sm uppercase tracking-wider mb-2">
          FAQs
        </h3>
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#4B444D] to-[#EA2525] bg-clip-text text-transparent mb-6">
          Find answers to common questions about our courses
        </h1>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`} 
            className="bg-white rounded-xl border-2 border-gray-200 hover:border-[#EA2525] transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <AccordionTrigger className="px-6 py-5 text-left hover:no-underline group">
              <span className="font-bold text-lg text-[#4B444D] group-hover:text-[#EA2525] transition-colors">
                {faq.question}
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-5 text-gray-700 leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4 text-lg">Still have questions?</p>
        <a 
          href="/contact" 
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#EA2525] to-[#AA2526] text-white font-bold rounded-xl hover:from-[#AA2526] hover:to-[#EA2525] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default FAQ;
