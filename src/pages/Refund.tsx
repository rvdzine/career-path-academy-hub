
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Refund = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Refund & Cancellation Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            {/* Refund Policy Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Refund Policy</h2>
              
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">7-Day Money Back Guarantee</h3>
                <p className="text-gray-600 mb-4">
                  We offer a 7-day money-back guarantee from the date of enrollment. If you are not satisfied with our course within the first 7 days, you can request a full refund.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Refund Eligibility</h3>
                <p className="text-gray-600 mb-4">
                  To be eligible for a refund, you must:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                  <li>Request the refund within 7 days of enrollment</li>
                  <li>Have attended less than 25% of the scheduled classes</li>
                  <li>Not have downloaded or accessed more than 25% of course materials</li>
                  <li>Provide a valid reason for the refund request</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Non-Refundable Situations</h3>
                <p className="text-gray-600 mb-4">
                  Refunds will not be provided in the following situations:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                  <li>Requests made after 7 days of enrollment</li>
                  <li>Violation of our terms and conditions</li>
                  <li>Completion of more than 25% of the course</li>
                  <li>Failure to attend classes due to personal reasons</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Refund Process</h3>
                <p className="text-gray-600 mb-4">
                  To request a refund:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                  <li>Send an email to info@ids.com with your refund request</li>
                  <li>Include your enrollment details and reason for refund</li>
                  <li>Our team will review your request within 2-3 business days</li>
                  <li>Approved refunds will be processed within 5-7 business days</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Partial Refunds</h3>
                <p className="text-gray-600 mb-4">
                  In exceptional circumstances, partial refunds may be considered on a case-by-case basis. This is subject to management approval and specific terms.
                </p>
              </div>
            </section>

            {/* Cancellation Policy Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Cancellation Policy</h2>
              
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Course Cancellation by Student</h3>
                <p className="text-gray-600 mb-4">
                  Students can cancel their enrollment under the following conditions:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                  <li><strong>Within 24 hours of enrollment:</strong> Full refund (100%) minus processing fees</li>
                  <li><strong>Within 3 days of enrollment:</strong> 90% refund of course fees</li>
                  <li><strong>Within 7 days of enrollment:</strong> 75% refund of course fees</li>
                  <li><strong>After 7 days:</strong> No refund applicable</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Course Cancellation by IDS</h3>
                <p className="text-gray-600 mb-4">
                  In rare circumstances, IDS may need to cancel a course due to:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                  <li>Insufficient enrollment numbers</li>
                  <li>Instructor unavailability</li>
                  <li>Technical or facility issues</li>
                  <li>Force majeure events</li>
                </ul>
                <p className="text-gray-600 mb-4">
                  In such cases, students will receive:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                  <li>Full refund of all fees paid</li>
                  <li>Option to transfer to another batch</li>
                  <li>Priority enrollment in future courses</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Class Cancellation & Rescheduling</h3>
                <p className="text-gray-600 mb-4">
                  Individual classes may be cancelled or rescheduled due to:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                  <li>Instructor illness or emergency</li>
                  <li>Technical difficulties</li>
                  <li>Public holidays or unforeseen circumstances</li>
                </ul>
                <p className="text-gray-600 mb-4">
                  In such cases, make-up classes will be scheduled at no additional cost.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cancellation Process</h3>
                <p className="text-gray-600 mb-4">
                  To cancel your enrollment:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                  <li>Email your cancellation request to info@ids.com</li>
                  <li>Include your full name, course name, and enrollment ID</li>
                  <li>State the reason for cancellation</li>
                  <li>Cancellation will be processed within 2-3 business days</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-600 mb-4">
                For refund or cancellation related queries, contact us at:
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
