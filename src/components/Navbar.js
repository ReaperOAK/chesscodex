import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { to: "/about", label: "About" },
    { to: "/courses", label: "Admission/Courses" },
    { to: "/achievements-testimonials", label: "Achievements/Testimonials" },
    { to: "/events-blogs", label: "Events/Blogs" },
    { to: "/gallery", label: "Gallery" },
    { to: "/collaborate-with-us", label: "Collaboration" },
    { to: "/faqs", label: "FAQs" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white sticky top-0 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-2xl font-bold">
              <img src="/KCA_PNG.png" alt="Logo" className="h-10 w-auto mr-2" />
              ChessCodex
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="hover:text-gray-200 transition-colors duration-300"
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="https://dashboard.kolkatachessacademy.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition-colors duration-300"
            >
              Dashboard
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-blue-700">
          <ul className="space-y-4 px-4 py-6">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className="block text-white hover:text-gray-200"
                  onClick={toggleMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <a
                href="https://dashboard.kolkatachessacademy.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white hover:text-gray-200"
                onClick={toggleMenu}
              >
                Dashboard
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
