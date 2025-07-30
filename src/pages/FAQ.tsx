
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is the Institute of Digital Studies (IDS)?",
      answer: "IDS is a leading digital marketing academy offering beginner to advanced-level programs with hands-on learning, mentorship, and guaranteed internship support. It is a subsidiary of Cybershield Technologies Pvt. Ltd."
    },
    {
      question: "What courses do you offer?",
      answer: "We offer a variety of programs:\n\n• Foundation in Digital Marketing (2 months)\n\n• Specialist in Digital Marketing (3 months)\n\n• Master in Digital Marketing (6 months, includes internship)\n\n• Professional & Business Owner Course (customizable, 1-on-1)\n\n• Diploma in Digital Marketing"
    },
    {
      question: "Are your courses available online or offline?",
      answer:
        "Yes! We offer both online (live instructor-led) and offline (in-classroom) sessions depending on your convenience.",
    },
   {
      question: "Do I get a certificate after course completion?",
      answer:
        "Yes, every student receives an industry-recognized certificate from IDS along with guidance to complete certifications from Google, Meta, HubSpot, and more.",
    },
    {
      question: "Is there any internship included in the course?",
      answer:
        "Yes. Our Master’s course includes a guaranteed internship. Students from other programs may also apply for internship opportunities via our placement cell.",
    },
    {
      question: "Do you offer job placement assistance?",
      answer:
        "Yes. We provide placement support, resume building, interview preparation, and connect students with hiring partners in the digital marketing industry.",
    },
    {
      question: "Is there a trial class available before enrollment?",
      answer:
        "Yes, we offer a free demo class so you can experience our teaching style and curriculum before enrolling.",
    },
    {
      question: "What is the minimum qualification to join the course?",
      answer:
        "A 10+2 pass is the basic requirement. However, our students range from freshers to working professionals, business owners, and freelancers.",
    },
    {
      question: "What is the fee structure? Do you offer EMI options?",
      answer:
        "Yes. We have flexible EMI options and installment plans available for all major courses. Please contact our team for customized payment plans.",
    },
    {
      question: "What is your refund & cancellation policy?",
      answer:
        "We have a transparent refund policy based on course stage and attendance. Please click here to read our full Refund & Cancellation Policy.",
    },
    {
      question: "Do you provide recorded sessions?",
      answer:
        "Yes, every session is recorded and made available to students for future reference.",
    },
    {
      question: "Will I get support if I miss a class?",
      answer:
        "Absolutely. You can attend a repeat session in another batch or watch the recorded session anytime.",
    },
    {
      question: "How can I enroll in a course?",
      answer:
        "You can enroll directly through our website, visit our center, or speak to our admissions team at 📞 9315471293 or 📧 info@idigitalstudies.com.",
    },
    {
      question: "Can I customize a course as per my learning goals?",
      answer:
        "Yes. Our Professional & Business Owner course is fully customizable and designed as a 1-to-1 learning plan.",
    },
    {
      question: "Do you provide real-time project exposure?",
      answer:
        "Yes. Every course involves live projects, case studies, and practical tools to ensure hands-on learning.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our courses and services
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg hover:from-[#AA2526] hover:to-[#EA2525] transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQ;
