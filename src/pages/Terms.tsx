
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing and using the services of Institute of Digital Studies (IDS), you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Course Enrollment</h2>
              <p className="text-gray-600 mb-4">
                Course enrollment is subject to availability and payment of applicable fees. Once enrolled, students are expected to maintain regular attendance and participate actively in classes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Payment Terms</h2>
              <p className="text-gray-600 mb-4">
                All course fees must be paid as per the agreed payment schedule. Late payments may result in suspension of access to course materials and classes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Intellectual Property</h2>
              <p className="text-gray-600 mb-4">
                All course materials, content, and resources provided by IDS are proprietary and protected by intellectual property laws. Students may not reproduce, distribute, or sell any course materials without written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Code of Conduct</h2>
              <p className="text-gray-600 mb-4">
                Students are expected to maintain professional behavior and respect towards instructors and fellow students. Violation of conduct policies may result in course termination without refund.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                IDS shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services or inability to use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Modifications</h2>
              <p className="text-gray-600 mb-4">
                IDS reserves the right to modify these terms and conditions at any time. Changes will be communicated to enrolled students via email or through our website.
              </p>
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

export default Terms;
