
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Refund = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Refund Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7-Day Money Back Guarantee</h2>
              <p className="text-gray-600 mb-4">
                We offer a 7-day money-back guarantee from the date of enrollment. If you are not satisfied with our course within the first 7 days, you can request a full refund.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Refund Eligibility</h2>
              <p className="text-gray-600 mb-4">
                To be eligible for a refund, you must:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Request the refund within 7 days of enrollment</li>
                <li>Have attended less than 25% of the scheduled classes</li>
                <li>Not have downloaded or accessed more than 25% of course materials</li>
                <li>Provide a valid reason for the refund request</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Non-Refundable Situations</h2>
              <p className="text-gray-600 mb-4">
                Refunds will not be provided in the following situations:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Requests made after 7 days of enrollment</li>
                <li>Violation of our terms and conditions</li>
                <li>Completion of more than 25% of the course</li>
                <li>Failure to attend classes due to personal reasons</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Refund Process</h2>
              <p className="text-gray-600 mb-4">
                To request a refund:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Send an email to info@ids.com with your refund request</li>
                <li>Include your enrollment details and reason for refund</li>
                <li>Our team will review your request within 2-3 business days</li>
                <li>Approved refunds will be processed within 5-7 business days</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Partial Refunds</h2>
              <p className="text-gray-600 mb-4">
                In exceptional circumstances, partial refunds may be considered on a case-by-case basis. This is subject to management approval and specific terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibent text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-600 mb-4">
                For refund-related queries, contact us at:
              </p>
              <ul className="list-none text-gray-600 mb-4 space-y-2">
                <li>Email: info@ids.com</li>
                <li>Phone: +91 9876543210</li>
                <li>Address: Sector 63, Noida - 201301</li>
              </ul>
            </section>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Refund;
