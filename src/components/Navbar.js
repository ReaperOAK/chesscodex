import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isChessCodex = location.pathname.startsWith('/chesscodex');
  const isAspireChess = location.pathname.startsWith('/aspirechess');
  const siteName = isChessCodex ? 'ChessCodex' : 'AspireChess';
  const logoSrc = isChessCodex ? '/KCA_PNG.png' : isAspireChess ? '/aca.png' : 'KCA_PNG.png';

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { to: isChessCodex ? "/chesscodex/about" : "/aspirechess/about", label: "About" },
    { to: isChessCodex ? "/chesscodex/courses" : "/aspirechess/courses", label: "Admission & Courses" },
    { to: isChessCodex ? "/chesscodex/exclusives" : "/aspirechess/exclusives", label: "Exclusives" },
    { to: isChessCodex ? "/chesscodex/events-blogs" : "/aspirechess/events-blogs", label: "Events & Blogs" },
    { to: isChessCodex ? "/chesscodex/achievements-testimonials" : "/aspirechess/achievements-testimonials", label: "Achievements & Testimonials" },
    { to: isChessCodex ? "/chesscodex/collaborate-with-us" : "/aspirechess/collaborate-with-us", label: "Collaboration" },
    { to: isChessCodex ? "/chesscodex/gallery" : "/aspirechess/gallery", label: "Gallery" },
    { to: isChessCodex ? "/chesscodex/contact" : "/aspirechess/contact", label: "Contact & FAQs" },
  ];

  return (
    <nav className={`${isChessCodex ? 'bg-gradient-to-l from-[#200e4a] via-[#461fa3] to-[#7646eb]' : 'bg-gradient-to-r from-white via-[#461fa3] to-[#7646eb]'} text-white sticky top-0 shadow-lg z-50 w-full`}>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to={isChessCodex ? "/chesscodex" : "/aspirechess"} className="flex items-center text-2xl font-bold" aria-label={`${siteName} Home`}>
              <img src={logoSrc} alt={`${siteName} Logo`} className="h-10 w-auto mr-2" />
              {isChessCodex ? 'ChessCodex' : ''}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end flex-nowrap">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#FFD700] font-semibold transition-colors duration-300 mx-2"
                    : "hover:text-[#e3e1f7] transition-colors duration-300 mx-2"
                }
                aria-label={link.label}
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={isChessCodex ? "/chesscodex/dashboard" : "/aspirechess/dashboard"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#e3e1f7] transition-colors duration-300 mx-2"
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
        <div className="lg:hidden bg-[#200e4a] absolute top-16 left-0 w-full z-50">
          <ul className="flex flex-col items-center space-y-4 px-4 py-6">
            {navLinks.map((link) => (
              <li key={link.to} className="w-full">
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? "block text-[#FFD700] font-semibold text-center"
                      : "block text-white hover:text-[#e3e1f7] text-center"
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
                href={isChessCodex ? "/chesscodex/dashboard" : "/aspirechess/dashboard"}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white hover:text-[#e3e1f7] text-center"
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