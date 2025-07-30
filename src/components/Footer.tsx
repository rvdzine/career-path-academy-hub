
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import idg_footer from "@/components/svg/idg_footer.svg"

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center">
             <img src={idg_footer} className="h-12 w-auto" alt="" /> 
              </div>
            </div>
            <p className="text-gray-400 dark:text-gray-500">
              Empowering careers through digital marketing education and guaranteed job placement support.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Courses</h4>
            <ul className="space-y-2 text-gray-400 dark:text-gray-500">
              <li><Link to="/courses" className="hover:text-white transition-colors">Foundation in Digital Marketing</Link></li>
              <li><Link to="/courses" className="hover:text-white transition-colors">Specialist in Digital Marketing</Link></li>
              <li><Link to="/courses" className="hover:text-white transition-colors">Master in Digital Marketing</Link></li>
              <li><Link to="/courses" className="hover:text-white transition-colors">Professional & Business Owner Course</Link></li>
              <li><Link to="/courses" className="hover:text-white transition-colors">Degree in Digital Marketing</Link></li>
              <li><Link to="/courses" className="hover:text-white transition-colors">Diploma in Digital Marketing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 dark:text-gray-500">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/courses" className="hover:text-white transition-colors">Courses</Link></li>
              <li><Link to="/placement" className="hover:text-white transition-colors">Placement</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400 dark:text-gray-500">
              <li>📍 T3, B1603, NXOne, Tech zone 4, Opposite Gaur city mall, Greater Noida, UP, 201306</li>
              <li>📞 +91 9315471293</li>
              <li>✉️ info@idigitalstudies.com</li>
              {/* <li>🌐 www.ids.com</li> */}
            </ul>
            {/* <div className="mt-4 flex items-center gap-2">
              <span className="text-sm text-gray-400 dark:text-gray-500">Theme:</span>
              <ThemeToggle />
            </div> */}
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8 text-center text-gray-400 dark:text-gray-500">
          <p>&copy; {new Date().getFullYear()} Institute of Digital Studies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
