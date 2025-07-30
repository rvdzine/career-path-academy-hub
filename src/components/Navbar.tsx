
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, PhoneCall, ChevronDown } from "lucide-react";
import ContactDialog from "@/components/ContactDialog";
import IDS_LOGO from "@/components/svg/IDS_LOGO.svg"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
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
    {name: "FAQ", path: "/faq"},
    {name: "Terms & Conditions", path: "/terms"},
    {name: "Privacy Policy", path: "/privacy"},
    {name: "Refund Policy", path: "/refund"},
    // {name: "IDS Life", path: "/ids"},
    {name: "Events & Webinars", path: "/events"},
    {name: "Blog", path: "/blog"},
  ]

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            {/* <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">IDS</span>
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Institute of Digital Studies
            </span> */}
            <img src={IDS_LOGO} className="h-10 w-auto" alt="" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
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
              <Button className="bg-[#EA2525] hover:bg-red-600">
                Enroll Now
              </Button>
            </ContactDialog>



            {/* adding contact number on navbar */}
            <a
              href="tel:+91 9876543210"
              className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-[#EA2525] transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              +91 9315471293
            </a>

          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
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
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    isActive(link.path) ? "text-blue-600" : "text-gray-700"
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
                    className={`block text-sm font-medium transition-colors hover:text-blue-600 py-1 ${isActive(link.path) ? "text-blue-600" : "text-gray-700"
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <ContactDialog>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full">
                  Enroll Now
                </Button>
               </ContactDialog>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
