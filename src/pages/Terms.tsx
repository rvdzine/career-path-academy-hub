import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
          <p className="text-sm text-gray-500 mb-8">
            Welcome to the official website of the Institute of Digital Studies (IDS), a subsidiary of Cybershield Technologies Pvt. Ltd. By accessing or using our website (<a href="https://idigitalstudies.com" className="text-blue-600 underline">https://idigitalstudies.com</a>), you agree to comply with and be bound by the following Terms and Conditions. If you do not agree with any part of these terms, please discontinue use of the website immediately.
            <br /><br />
            We may revise these Terms and Conditions from time to time. Continued use of the website after any modifications implies your acceptance of the revised terms.
          </p>

          <div className="prose prose-lg max-w-none text-gray-700">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold">1. Use of Website and Content</h2>
              <p>
                All content on this website—including text, graphics, images, videos, logos, downloads, and course material—is the property of IDS or its licensors and is protected under applicable intellectual property laws.
              </p>
              <ul className="list-disc ml-6">
                <li>Copy, modify, publish, distribute, or commercially exploit the content without explicit written permission from IDS.</li>
                <li>Use any content for unlawful purposes or outside the scope of permitted educational or informational use.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold">2. Electronic Communication</h2>
              <p>
                By visiting our website, filling forms, or contacting us via email or messaging platforms, you agree to receive communications from us electronically. This includes transactional or promotional messages via email, SMS, WhatsApp, or phone, even if your number is registered under DND (Do Not Disturb).
              </p>
              <p>
                You hereby consent to receive such communications and agree that they satisfy legal requirements for written communication.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold">3. User Accounts</h2>
              <ul className="list-disc ml-6">
                <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                <li>You agree to provide accurate, up-to-date information.</li>
                <li>You must notify us immediately of any unauthorized use of your account.</li>
                <li>IDS reserves the right to suspend or terminate your access without notice if misuse or unauthorized access is detected.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold">4. Privacy Policy</h2>
              <p>
                Your use of this website is also governed by our Privacy Policy, which outlines how we collect, use, store, and protect your personal information. By using our website, you consent to the practices described in the Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold">5. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites for your convenience or reference. IDS does not control or endorse the content or privacy practices of these third-party sites and shall not be held responsible for any harm or damages resulting from your use of such websites.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold">6. Acceptable Use Policy</h2>
              <h3 className="text-xl font-medium mt-4">a) Security Rules:</h3>
              <ul className="list-disc ml-6">
                <li>Gaining unauthorized access to data, accounts, or servers.</li>
                <li>Attempting to breach the website’s security or authentication systems.</li>
                <li>Introducing viruses, malware, or any harmful code.</li>
                <li>Launching denial-of-service attacks, spam, or unauthorized advertising.</li>
              </ul>
              <p>Violation of these rules may result in suspension, legal action, or both.</p>

              <h3 className="text-xl font-medium mt-4">b) General Rules:</h3>
              <ul className="list-disc ml-6">
                <li>Transmit or store illegal, obscene, defamatory, or hateful content.</li>
                <li>Violate intellectual property rights.</li>
                <li>Breach any local, state, national, or international laws.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold">7. Modification and Termination</h2>
              <ul className="list-disc ml-6">
                <li>Modify or discontinue any feature or section of the website at any time without prior notice.</li>
                <li>Restrict or terminate access to any user for any reason, including violation of these Terms.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold">8. Limitation of Liability</h2>
              <p>
                In no event shall IDS, its parent company Cybershield Technologies Pvt. Ltd., or its directors, employees, partners, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages arising from:
              </p>
              <ul className="list-disc ml-6">
                <li>Use or inability to use the website.</li>
                <li>Unauthorized access to or alteration of your data.</li>
                <li>Third-party conduct or content.</li>
                <li>Any other matter related to the use of the website or services.</li>
              </ul>
              <p>You acknowledge that your use of the website is at your sole risk.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold">9. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless IDS, its parent company, directors, employees, affiliates, and agents from and against any claims, damages, liabilities, losses, and expenses—including legal fees—arising from:
              </p>
              <ul className="list-disc ml-6">
                <li>Your use of the website.</li>
                <li>Your violation of these Terms.</li>
                <li>Your infringement of any third-party rights.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold">10. Disclaimer</h2>
              <p>All content and services on this website are provided “as is” and “as available” without warranties of any kind, either express or implied. IDS does not guarantee:</p>
              <ul className="list-disc ml-6">
                <li>That the site will always function uninterrupted or error-free.</li>
                <li>The accuracy or reliability of any content or information.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold">11. Governing Law and Jurisdiction</h2>
              <p>
                These Terms and Conditions are governed by and construed in accordance with the laws of India. Any dispute arising in relation to these terms shall be subject to the exclusive jurisdiction of the courts located in Ghaziabad, UP.
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
