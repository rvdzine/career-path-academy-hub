import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import ContactDialog from "@/components/ContactDialog";
import IDS_LOGO from "@/components/svg/IDS_LOGO.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Offline Center", path: "/offline-center" },
    { name: "Jobs & Placements", path: "/jobs-and-placements" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const moreLinks = [
    { name: "FAQ", path: "/faq" },
    { name: "Terms & Conditions", path: "/terms" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Refund Policy", path: "/refund" },
    // { name: "Events & Webinars", path: "/events" },
    // { name: "Blog", path: "/blog" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={IDS_LOGO} className="h-10 w-auto" alt="IDS Logo" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-[#EA2525] ${
                  isActive(link.path) ? "text-[#EA2525]" : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center text-sm font-medium text-gray-700 hover:text-black transition-colors">
                  More
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white shadow-lg border">
                {moreLinks.map((link) => (
                  <DropdownMenuItem key={link.name} asChild>
                    <Link
                      to={link.path}
                      className={`block px-4 py-2 text-sm hover:bg-gray-50 ${
                        isActive(link.path) ? "text-[#EA2525] font-medium" : "text-gray-700"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <ContactDialog>
              <Button className="bg-[#EA2525] hover:bg-red-600">Enroll Now</Button>
            </ContactDialog>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919315471293"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2 text-sm font-medium text-green-600 border border-green-600 bg-white rounded-md hover:bg-[#25D366] hover:text-white transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.52 3.48A11.76 11.76 0 0 0 12 0C5.372 0 0 5.373 0 12c0 2.11.553 4.151 1.6 5.956L0 24l6.19-1.63A11.86 11.86 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.18-1.239-6.17-3.48-8.52zM12 21.75c-1.911 0-3.798-.5-5.444-1.44l-.39-.22-3.676.97.984-3.582-.25-.37A9.69 9.69 0 0 1 2.25 12c0-5.376 4.374-9.75 9.75-9.75S21.75 6.624 21.75 12 17.376 21.75 12 21.75zm5.174-7.703c-.279-.14-1.648-.813-1.903-.904-.255-.093-.44-.14-.626.14s-.717.904-.88 1.09c-.162.187-.325.21-.603.07s-1.175-.433-2.238-1.382c-.827-.737-1.385-1.646-1.547-1.923-.162-.28-.017-.431.123-.57.127-.125.28-.325.42-.487.14-.162.187-.28.28-.467.094-.187.047-.35-.023-.488-.07-.14-.627-1.514-.86-2.07-.226-.54-.455-.47-.627-.478-.162-.007-.35-.01-.538-.01a1.033 1.033 0 0 0-.75.35c-.26.28-1.01.985-1.01 2.397 0 1.41 1.035 2.77 1.18 2.96.14.187 2.036 3.11 4.938 4.365.69.298 1.228.475 1.647.607.692.22 1.322.188 1.82.114.555-.082 1.648-.673 1.88-1.322.233-.65.233-1.207.162-1.322-.07-.114-.256-.187-.533-.326z" />
              </svg>
              +91 93154 71293
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#EA2525]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-[#EA2525] ${
                    isActive(link.path) ? "text-[#EA2525]" : "text-gray-700"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <div className="border-t pt-4">
                <p className="text-xs font-semibold text-gray-500 mb-2">MORE</p>
                {moreLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block text-sm font-medium transition-colors hover:text-[#EA2525] py-1 ${
                      isActive(link.path) ? "text-[#EA2525]" : "text-gray-700"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <ContactDialog>
                <Button className="bg-[#EA2525] hover:bg-red-600 w-full">Enroll Now</Button>
              </ContactDialog>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
