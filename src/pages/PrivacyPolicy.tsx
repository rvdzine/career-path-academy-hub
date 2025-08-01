import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-8">
            Effective Date: 01/01/2025 &nbsp;&nbsp;|&nbsp;&nbsp; Last Updated: 31/12/2024
          </p>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              By accessing or using the website of Institute of Digital Studies (IDS), a subsidiary of Cybershield Technologies Pvt. Ltd., you consent to the collection, use, and disclosure of your personal information in accordance with this Privacy Policy.
            </p>
            <br />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold">1. No Unauthorized Sale or Transfer of Personal Information</h2>
              <p>
                We do not sell, rent, lease, or otherwise disclose your personal information obtained through our website to third parties for marketing purposes without your explicit consent. Your privacy is important to us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold">2. Limitations on Disclosure</h2>
              <p>
                We collect personal information only when you voluntarily provide it—such as during registration, inquiry, form submission, or other direct communications. We take reasonable steps to ensure the confidentiality of such information and protect it from unauthorized access or disclosure. Information is stored securely in controlled environments, and highly sensitive data transmitted via encrypted channels where applicable.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold">3. Optional Provision of Information</h2>
              <p>
                You may choose not to provide personal information. However, note that certain features, offers, or services—such as enrollment or personalized assistance—may require you to share your contact details and preferences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold">4. Use Cases for Personal Information</h2>
              <ul className="list-disc ml-6">
                <li>Responding to your inquiries or messages.</li>
                <li>Processing your applications or registrations.</li>
                <li>Sending updates, promotional offers, or relevant information—only if consent is given.</li>
                <li>Internal analytics and strategic research.</li>
                <li>Detecting and preventing fraudulent or abusive activity.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold">5. Consent to Communication</h2>
              <p>
                By submitting your contact details, you agree to receive communications from IDS—including via phone call, SMS, WhatsApp, or email—even if your number is registered under DND (Do Not Disturb). This is for purposes related to our relationship or services you’ve requested, including necessary alerts, transaction-related updates, and promotional offers (with your prior consent).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold">6. Recordkeeping of Communications</h2>
              <p>
                When you contact us electronically, we retain a record of your communication to help us respond effectively. This includes emails, form submissions, or messages sent via the website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold">7. Log Files & Analytics</h2>
              <p>Like many websites, IDS collects information through log files that track user interactions anonymously. Common data points include:</p>
              <ul className="list-disc ml-6">
                <li>IP address</li>
                <li>Browser type</li>
                <li>ISP</li>
                <li>Date and time stamps</li>
                <li>Visited and referral pages</li>
              </ul>
              <p>
                This data is used solely for administrative, analytical, and performance optimization purposes, and not linked to personally identifiable information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold">8. Cookies & Web Beacons</h2>
              <p>
                Our website uses cookies to enhance and personalize your experience—such as storing preferences and tracking page visits. Disabling cookies may affect certain features or functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold">9. Third-Party Partners</h2>
              <p>
                IDS does not share or disclose personal information to third-party advertisers or marketers without your consent.
                However, we may share data with:
              </p>
              <ul className="list-disc ml-6">
                <li>Business partners or franchisees, only with your agreement or as required for services.</li>
                <li>Legal authorities, when mandated by law or court order.</li>
              </ul>
              <p>
                Any disclosures are made under strict confidentiality and compliance protocols.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold">10. Accuracy and Updates</h2>
              <p>
                We aim to maintain accurate personal information. If you wish to update or correct your data, or restrict its usage, please contact us directly. Unless you limit access, we assume your consent to use your information as described.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold">11. Children’s Privacy</h2>
              <p>
                We do not knowingly collect personal information from children under the age of 13. If we become aware of any such collection, we will take reasonable steps to promptly delete that information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold">12. Changes to this Privacy Policy</h2>
              <p>
                We may periodically modify this policy to reflect changes in law, policy, or business practices. Any updates will be posted on this page with a revised “Last Updated” date. Continued use of our website will constitute acceptance of the updated policy.
              </p>
            </section>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Institute of Digital Studies (IDS). All rights reserved.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
