
import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  // Determine brand by route
  const isAspireChess = location.pathname.startsWith('/aspirechess');
  // Branding clarification
  const siteName = isAspireChess ? 'Aspire Chess Academy' : 'Kolkata Chess Academy';
  const logoSrc = isAspireChess ? '/aca.png' : '/kca.png';

  const toggleMenu = () => setIsOpen(!isOpen);

  // Navigation links for each brand
  const navLinks = isAspireChess
    ? [
        { to: '/aspirechess/about', label: 'About' },
        { to: '/aspirechess/courses', label: 'Admission & Courses' },
        { to: '/aspirechess/exclusives', label: 'Exclusives & Collaboration' },
        { to: '/aspirechess/events-blogs', label: 'Events & Blogs' },
        { to: '/aspirechess/achievements-testimonials', label: 'Achievements & Testimonials' },
        { to: '/aspirechess/gallery', label: 'Gallery' },
        { to: '/aspirechess/contact', label: 'Contact & FAQs' },
      ]
    : [
        { to: '/kca/about', label: 'About' },
        { to: '/kca/courses', label: 'Admission & Courses' },
        { to: '/kca/exclusives', label: 'Exclusives & Collaboration' },
        { to: '/kca/events-blogs', label: 'Events & Blogs' },
        { to: '/kca/achievements-testimonials', label: 'Achievements & Testimonials' },
        { to: '/kca/gallery', label: 'Gallery' },
        { to: '/kca/contact', label: 'Contact & FAQs' },
      ];

  // Navbar classes for each brand
  const navClasses = isAspireChess
    ? 'bg-black bg-opacity-20 backdrop-blur-md border-b border-gray-700/50'
    : 'bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent';

  return (
    <nav className={`${navClasses} text-white sticky top-0 shadow-lg z-50 w-full`}>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to={isAspireChess ? '/aspirechess' : '/kca'} className="flex items-center text-2xl font-bold" aria-label={`${siteName} Home`}>
              <img src={logoSrc} alt={`${siteName} Logo`} className="h-10 w-auto mr-2" />
              {siteName}
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? 'text-yellow-300 font-semibold'
                    : 'text-white hover:text-yellow-300 transition-colors duration-300'
                }
                aria-label={link.label}
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="https://dashboard.kolkatachessacademy.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-amber-300 transition-colors duration-300 mx-2"
              aria-label="Dashboard"
            >
              Dashboard
            </a>
            {/* Explore Online Courses Prompt for Aspire (desktop) */}
            {isAspireChess && (
              <a
                href="/aspirechess/courses"
                className="ml-4 bg-yellow-400 text-black font-bold px-5 py-2 rounded-full shadow-lg hover:bg-yellow-500 transition-colors duration-200 text-lg"
                style={{ boxShadow: '0 2px 12px 0 rgba(0,0,0,0.12)' }}
              >
                Explore Online Courses
              </a>
            )}
          </div>
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none" aria-label="Toggle Menu">
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isOpen && (
        <div className={isAspireChess ? 'lg:hidden bg-black bg-opacity-80 backdrop-blur-lg absolute top-16 left-0 w-full z-50' : 'lg:hidden bg-brand-dark absolute top-16 left-0 w-full z-50'}>
          <ul className="flex flex-col items-center space-y-4 px-4 py-6">
            {navLinks.map((link) => (
              <li key={link.to} className="w-full">
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? 'block text-yellow-300 font-semibold text-center'
                      : 'block text-white hover:text-yellow-300 text-center'
                  }
                  onClick={toggleMenu}
                  aria-label={link.label}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="w-full">
              <a
                href="https://dashboard.kolkatachessacademy.in"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white hover:text-yellow-300 text-center"
                onClick={toggleMenu}
                aria-label="Dashboard"
              >
                Dashboard
              </a>
            </li>
            {/* Explore Online Courses Prompt for Aspire (mobile) */}
            {isAspireChess && (
              <li className="w-full">
                <a
                  href="/aspirechess/courses"
                  className="block bg-yellow-400 text-black font-bold px-5 py-2 rounded-full shadow-lg hover:bg-yellow-500 transition-colors duration-200 text-lg text-center mt-2"
                  style={{ boxShadow: '0 2px 12px 0 rgba(0,0,0,0.12)' }}
                  onClick={toggleMenu}
                >
                  Explore Online Courses
                </a>
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;