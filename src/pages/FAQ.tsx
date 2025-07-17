
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What courses does Institute of Digital Studies offer?",
      answer: "We offer comprehensive digital marketing courses including SEO, Social Media Marketing, Google Ads, Email Marketing, Content Marketing, and complete Digital Marketing certification programs."
    },
    {
      question: "Do you provide job placement assistance?",
      answer: "Yes, we provide 100% job placement assistance with our industry partnerships. We have tie-ups with leading companies and provide interview preparation and career guidance."
    },
    {
      question: "What is the duration of the courses?",
      answer: "Course duration varies from 2-6 months depending on the program. We offer both intensive and regular batches to suit different schedules."
    },
    {
      question: "Are the courses suitable for beginners?",
      answer: "Absolutely! Our courses are designed for all levels - from complete beginners to professionals looking to upgrade their skills. We start with fundamentals and progress to advanced topics."
    },
    {
      question: "Do you offer online classes?",
      answer: "Yes, we offer both online and offline classes. Our online classes are live and interactive with recorded sessions available for review."
    },
    {
      question: "What certifications will I receive?",
      answer: "You'll receive industry-recognized certifications from IDS along with Google, Facebook, and other platform certifications upon successful completion."
    },
    {
      question: "What is your refund policy?",
      answer: "We offer a 7-day money-back guarantee if you're not satisfied with our course. Please refer to our refund policy page for detailed terms."
    },
    {
      question: "Do you provide study materials?",
      answer: "Yes, we provide comprehensive study materials, video recordings, practical assignments, and access to premium tools and software."
    }
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
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
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
