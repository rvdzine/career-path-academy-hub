import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQHighlight = () => {
  const faqs = [
    {
      question: "What is the Institute of Digital Studies (IDS)?",
      answer:
        "IDS is a leading digital marketing academy offering beginner to advanced-level programs with hands-on learning, mentorship, and guaranteed internship support.",
    },
    {
      question: "Are your courses available online or offline?",
      answer:
        "Yes! We offer both online (live instructor-led) and offline (in-classroom) sessions depending on your convenience.",
    },
    {
      question: "Do you provide job placement assistance?",
      answer:
        "Yes. We provide placement support, resume building, interview preparation, and connect students with hiring partners.",
    },
    {
      question: "Do I get a certificate after course completion?",
      answer:
        "Yes, every student receives an industry-recognized certificate from IDS along with guidance to complete certifications from Google, Meta, and HubSpot.",
    },
    {
      question: "Is there an internship included in the course?",
      answer:
        "Yes. Our Master’s course includes a guaranteed internship. Students from other programs may also apply via our placement cell.",
    },
    {
      question: "Is there a trial/demo class before enrollment?",
      answer:
        "Yes, we offer a free demo class so you can experience our teaching style and curriculum before enrolling.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Most Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Quick answers to what students usually ask
          </p>
        </div>

        {/* Grid with 6 Questions */}
        <div className="grid md:grid-cols-2 gap-6 max-w-[1350px] mx-auto">
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              type="multiple" // ✅ allows independent expand/collapse
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
      </div>
    </section>
  );
};

export default FAQHighlight;
