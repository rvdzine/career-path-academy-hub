import { Button } from "@/components/ui/button";
import BookingDialog from "./BookingDialog";

const CtaDigitalMarketing = () => {
  return (
    <section className="py-16 bg-gray-900 dark:bg-gray-950 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">
            Are You Planning to Start Your Digital Marketing Course Journey?
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            Get A Free DEMO For DIGITAL MARKETING COURSE IN NOIDA Now
          </p>
        </div>
        <div className="text-center text-lg">
          <p className="font-bold">Confused about which digital marketing course is right for you? <br />Take the first step towards a high-growth career with a free, personalized demo session at iDigital Studies, Noida.</p>
          <span>Call Now at +91-9315471293</span>
        </div>
        <div className="flex justify-center items-center mt-12">
          <BookingDialog>
            <Button size="lg" className="bg-[#EA2525] transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Book Your Free Seat Now
            </Button>
          </BookingDialog>
        </div>
      </div>
    </section>
  );
};

export default CtaDigitalMarketing;