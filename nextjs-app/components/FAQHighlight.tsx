import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const FAQHighlight = () => {
  const faqs = [
    {
      question: "What makes iDigitalStudies the best digital marketing institute in Noida?",
      answer:
        "iDigitalStudies is known for its industry-relevant curriculum, expert trainers, hands-on experience, and personalized attention. We ensure our students gain practical knowledge that is directly applicable to real-world digital marketing challenges.",
    },
    {
      question: "What is the duration of the Digital Marketing course in Noida at iDigitalStudies?",
      answer:
        "The duration of our Digital Marketing course ranges from 3 months for specialized programs to 6 months for comprehensive courses, including internships and practical training.",
    },
    {
      question: "Is there an internship included in the digital marketing course at iDigitalStudies?",
      answer:
        "Yes, we offer a 100% Internship as part of our 6-month Digital Marketing course to provide students with hands-on industry experience.",
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
  ];

  return (
    <section className="bg-white-50 py-8">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Quick answers to what students usually ask
          </p>
        </div>

        {/* Single Column FAQ List */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              type="multiple" // allows independent expand/collapse
              className="w-full"
            >
              <AccordionItem
                value={`item-${index}`}
                className="border border-gray-300 rounded-lg transition-all duration-300 hover:border-red-500 data-[state=open]:border-red-500"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-10">
          <Link href="/faq">
            <Button className="bg-[#EA2525] hover:bg-red-600 px-8 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg focus:ring-2 focus:ring-[#EA2525]/50">
              View More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default FAQHighlight;
