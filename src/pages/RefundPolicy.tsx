import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Refund & Cancellation
          </h1>
          <p className="text-sm text-gray-500 mb-2">
            <strong>Institute of Digital Studies (IDS)</strong>
            <br />
            <strong>A Subsidiary of Cybershield Technologies Pvt. Ltd.</strong>
          </p>
          <p className="text-sm text-gray-500 mb-6">
            <strong>Last updated:</strong> 31 March 2015
          </p>

          <div className="prose prose-sm sm:prose lg:prose-lg max-w-none text-gray-700 space-y-8">
            <p>
              At the <strong>Institute of Digital Studies (IDS)</strong>, we are committed to delivering high-quality educational services. However, we understand that situations may arise where students may need to cancel their registration or withdraw from a course. This document outlines our refund and cancellation policy in detail.
            </p>

            <div>
              <h2 className="text-2xl font-semibold">1. Registration & Admission Cancellation</h2><br/>
              <p>
                <strong>Non-refundable registration fee:</strong> INR 1000
              </p>
              <p>
                Students are eligible for cancellation within 7 days of the registration date, provided that:
              </p>
              <ul className="list-disc list-inside">
                <li><strong>The student has not been assigned to any batch</strong></li>
                <li><strong>The student has been assigned a batch but has not attended any classes</strong></li>
              </ul>
              <p>
                In both cases, a <strong>full refund</strong> (excluding the INR 1000 registration fee) will be issued after deducting applicable <strong>18% GST</strong>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">2. Active Students – Post Batch Allotment</h2><br/>
              <p>
                A student is considered <strong>“active”</strong> after attending at least 3 classes and making the first installment payment.
              </p>
              <table className="table-auto border-collapse border border-gray-300 my-4">
                <thead>
                  <tr>
                    <th className="border border-gray-300 p-2">Condition</th>
                    <th className="border border-gray-300 p-2">Refund Eligibility</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2"><strong>Attended up to 4 classes</strong></td>
                    <td className="border border-gray-300 p-2"><strong>Eligible for up to 25% refund</strong> of tuition (excluding registration fee), subject to management approval.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2"><strong>Attended 5 or more classes</strong></td>
                    <td className="border border-gray-300 p-2"><strong>No refund applicable.</strong></td>
                  </tr>
                </tbody>
              </table>
              <p><strong>All refunds are subject to 18% GST deduction.</strong></p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">3. Active & Ongoing Students</h2><br/>
              <ul className="list-disc list-inside">
                <li><strong>“Active & ongoing”</strong> means attended classes for 1 month or more and paid all due installments.</li>
                <li><strong>A formal written request</strong> must be submitted to the Operations team.</li>
                <li><strong>No refund</strong> for EMI-based payments.</li>
                <li><strong>No refund</strong> if course is paused for future resumption; however, fees may be adjusted.</li>
              </ul>
              <p><strong>All refunds are subject to 18% GST deduction.</strong></p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">4. One-Time Payment Students</h2><br/>
              <p>Eligible for partial refunds as per the below matrix:</p>
              <table className="table-auto border-collapse border border-gray-300 my-4">
                <thead>
                  <tr>
                    <th className="border border-gray-300 p-2">Duration / Classes Attended</th>
                    <th className="border border-gray-300 p-2">Refund % (Excl. Registration Fee)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2"><strong>Up to 8 classes or 1 month</strong></td>
                    <td className="border border-gray-300 p-2"><strong>50%</strong></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2"><strong>Up to 16 classes or 2 months</strong></td>
                    <td className="border border-gray-300 p-2"><strong>25%</strong></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2"><strong>More than 24 classes or 3 months</strong></td>
                    <td className="border border-gray-300 p-2"><strong>No refund</strong></td>
                  </tr>
                </tbody>
              </table>
              <p><strong>All refunds are subject to 18% GST deduction.</strong></p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">5. Discounted / Promotional Enrollments</h2><br/>
              <ul className="list-disc list-inside">
                <li><strong>Refund of INR 1000</strong> is applicable within 7 days of registration, provided <strong>no classes have been attended</strong>.</li>
                <li><strong>No refund</strong> if 3 or more classes have been attended or 1 month has passed (whichever is earlier).</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">6. Refund Processing Timeline</h2><br/>
              <ul className="list-disc list-inside">
                <li><strong>Approved refunds</strong> processed within <strong>5 to 15 working days</strong> from formal approval.</li>
                <li><strong>Refunds will be via the original payment mode.</strong></li>
                <li><strong>If refund is approved, your refund will be processed and a credit will automatically be applied to your original method of payment within 7-10 business days.</strong></li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">7. Cancellation by IDS</h2><br/>
              <p>
                IDS reserves the right to cancel any course or batch due to <strong>unforeseen circumstances</strong>. In such cases:
              </p>
              <ul className="list-disc list-inside">
                <li><strong>Full refund</strong> (excluding third-party charges) will be issued within <strong>10 business days</strong>.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">8. Policy Exceptions</h2><br/>
              <ul className="list-disc list-inside">
                <li><strong>Fees once paid are non-transferable</strong> to another course, batch, or student.</li>
                <li><strong>No refund</strong> for missed classes or partial participation.</li>
                <li><strong>No refund</strong> for violation of IDS’s code of conduct or policies.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">9. Right to Amend</h2><br/>
              <p>
                This policy may be updated without prior notice. The latest version will always be available on our website.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RefundPolicy;


