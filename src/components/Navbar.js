
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
        { to: '/aspirechess/exclusives', label: 'Exclusives' },
        { to: '/aspirechess/events-blogs', label: 'Events & Blogs' },
        { to: '/aspirechess/achievements-testimonials', label: 'Achievements & Testimonials' },
        { to: '/aspirechess/collaborate-with-us', label: 'Collaboration' },
        { to: '/aspirechess/gallery', label: 'Gallery' },
        { to: '/aspirechess/contact', label: 'Contact & FAQs' },
      ]
    : [
        { to: '/about', label: 'About' },
        { to: '/courses', label: 'Admission & Courses' },
        { to: '/exclusives', label: 'Exclusives' },
        { to: '/events-blogs', label: 'Events & Blogs' },
        { to: '/achievements-testimonials', label: 'Achievements & Testimonials' },
        { to: '/collaborate-with-us', label: 'Collaboration' },
        { to: '/gallery', label: 'Gallery' },
        { to: '/contact', label: 'Contact & FAQs' },
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
            <Link to={isAspireChess ? '/aspirechess' : '/'} className="flex items-center text-2xl font-bold" aria-label={`${siteName} Home`}>
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
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;