import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // For hamburger icon

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-white">
              <img src='/kcalogo.jpg' alt="ChessCodex Logo" className="h-10 w-auto" />
            </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Menu Links */}
          <div className="hidden md:flex space-x-4 items-center">
            <NavLink
              to="/"
              exact
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white"
              activeClassName="bg-gray-900"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white"
              activeClassName="bg-gray-900"
            >
              About Us
            </NavLink>
            <NavLink
              to="/courses"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white"
              activeClassName="bg-gray-900"
            >
              Admission & Courses
            </NavLink>
            <NavLink
              to="/achievements-testimonials"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white"
              activeClassName="bg-gray-900"
            >
              Achievements & Testimonials
            </NavLink>
            <NavLink
              to="/exclusives"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white"
              activeClassName="bg-gray-900"
            >
              Exclusives
            </NavLink>
            <NavLink
              to="/events-blogs"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white"
              activeClassName="bg-gray-900"
            >
              Events & Blogs
            </NavLink>
            <NavLink
              to="/gallery"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white"
              activeClassName="bg-gray-900"
            >
              Gallery
            </NavLink>
            <NavLink
              to="/collaborate-with-us"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white"
              activeClassName="bg-gray-900"
            >
              Collaborate with Us
            </NavLink>
            <NavLink
              to="/faqs"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white"
              activeClassName="bg-gray-900"
            >
              FAQs
            </NavLink>
            <NavLink
              to="/contact"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white"
              activeClassName="bg-gray-900"
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/dashboard"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white"
              activeClassName="bg-gray-900"
            >
              Dashboard
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <li>
              <NavLink
                to="/"
                exact
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                activeClassName="bg-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                activeClassName="bg-gray-900"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/courses"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                activeClassName="bg-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Admission & Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/achievements-testimonials"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                activeClassName="bg-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Student's Achievements & Testimonials
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/exclusives"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                activeClassName="bg-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Exclusives
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/events-blogs"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                activeClassName="bg-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Upcoming Events & Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                activeClassName="bg-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/collaborate-with-us"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                activeClassName="bg-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Collaborate with Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faqs"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                activeClassName="bg-gray-900"
                onClick={() => setIsOpen(false)}
              >
                FAQs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                activeClassName="bg-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                activeClassName="bg-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;