
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">DM</span>
              </div>
              <span className="font-bold text-xl">DigitalAcademy</span>
            </div>
            <p className="text-gray-400">
              Empowering careers through digital marketing education and guaranteed job placement support.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/courses" className="hover:text-white transition-colors">Courses</Link></li>
              <li><Link to="/placement" className="hover:text-white transition-colors">Placement</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Courses</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/courses" className="hover:text-white transition-colors">SEO Training</Link></li>
              <li><Link to="/courses" className="hover:text-white transition-colors">Social Media Marketing</Link></li>
              <li><Link to="/courses" className="hover:text-white transition-colors">Google Ads</Link></li>
              <li><Link to="/courses" className="hover:text-white transition-colors">Email Marketing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📍 Mumbai, Delhi, Bangalore</li>
              <li>📞 +91 9876543210</li>
              <li>✉️ info@digitalacademy.com</li>
              <li>🌐 www.digitalacademy.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Digital Marketing Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
