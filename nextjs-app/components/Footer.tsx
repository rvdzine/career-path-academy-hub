import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
// import idg_footer from "@/components/svg/idg_footer.svg";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import csh_footer from "@/components/svg/cybershields-footer-logo.svg";
import Image from "next/image";

// import the SalaryReportModal
import SalaryReportModal from "@/components/SalaryReport";

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-10 gap-y-12 items-start">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center">
                <Link href="/" className="flex items-center space-x-2">
                  <Image
                    src="/idg_footer.svg"
                    width={120}
                    height={40}
                    alt="IDS Logo"
                  />
                </Link>
              </div>
            </div>
            <p className="text-gray-400 dark:text-gray-500">
              Join the best Digital Marketing Institute in Noida. iDigital
              Studies offers practical Digital Marketing courses like SEO, SMO,
              PPC with live projects, 100% placement assistance, and expert
              training. Enroll today!
            </p>
            <Link
              href="/best-digital-marketing-institute-delhi-ncr"
              className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors"
            >
              Delhi Ncr | Dwarka | Gurugram | Kalkaji | Pitampura |  Preet Vihar | Rajouri Garden | South Extension | South Campus | Noida
            </Link>

            <div className="flex space-x-4 pt-4">
              <a
                href="https://www.facebook.com/instituteofdigitalstudies/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-lg"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-lg"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.instagram.com/instituteofdigitalstudies/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-lg"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/institute-of-digital-marketing-studies/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-lg"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.youtube.com/@instituteofdigitalstudies5567"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-lg"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-semibold mb-4">Courses</h4>
            <ul className="space-y-2 text-gray-400 dark:text-gray-500">
              <li>
                <Link
                  href="/courses"
                  className="hover:text-white transition-colors"
                >
                  Foundation in Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="hover:text-white transition-colors"
                >
                  Specialist in Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="hover:text-white transition-colors"
                >
                  Master in Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="hover:text-white transition-colors"
                >
                  Professional & Business Owner Course
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="hover:text-white transition-colors"
                >
                  Degree in Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="hover:text-white transition-colors"
                >
                  Diploma in Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 dark:text-gray-500">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="hover:text-white transition-colors"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/placement"
                  className="hover:text-white transition-colors"
                >
                  Placement
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                {/* Use SalaryReportModal instead of a Link */}
                <SalaryReportModal>
                  <button className="hover:text-white transition-colors">
                    Salary Report
                  </button>
                </SalaryReportModal>
              </li>
            </ul>
          </div>

          {/* Important */}
          <div>
            <h4 className="font-semibold mb-4">Important Links</h4>
            <ul className="space-y-2 text-gray-400 dark:text-gray-500">
              <li>
                <Link
                  href="/blog"
                  className="hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-white transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy & Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/refund"
                  className="hover:text-white transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                {/* Use SalaryReportModal instead of a Link */}
                <SalaryReportModal>
                  <button className="hover:text-white transition-colors">
                    Salary Report
                  </button>
                </SalaryReportModal>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400 dark:text-gray-500">
              <li className="flex items-start gap-2">
                <MdLocationOn className="text-xl mt-1" />
                T3, B1603, NXOne, Tech zone 4, Opposite Gaur city mall, Greater
                Noida, UP, 201306 Business Address: T3, B1603, NXOne, Tech zone
                4, Opposite Gaur city mall, Greater Noida, UP, 201306
              </li>
              <li className="flex items-center gap-2">
                <MdPhone className="text-xl" />
                <a
                  href="tel:+919315471293"
                  className="hover:text-white transition-colors"
                >
                  +91 9315471293
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MdEmail className="text-xl" />
                <a
                  href="mailto:info@idigitalstudies.com"
                  className="hover:text-white transition-colors"
                >
                  info@idigitalstudies.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t flex justify-between border-gray-800 dark:border-gray-700 mt-12 pt-8 text-gray-400 dark:text-gray-500">
          <p className="text-left font-semibold">
            &copy; {new Date().getFullYear()} Institute of Digital Studies(IDS).
            A Unit of Cybershield Technologies Pvt. Ltd.
          </p>
          <a
            href="https://cybershieldtechnologies.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={typeof csh_footer === "string" ? csh_footer : csh_footer.src}
              className="h-10 w-auto"
              alt="Cybershield Technologies"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
