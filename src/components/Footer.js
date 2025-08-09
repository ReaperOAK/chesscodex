import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhoneAlt, FaYoutube } from 'react-icons/fa';
import { useLocation, Link } from 'react-router-dom';
import Newsletter from './Newsletter';

const Footer = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const isAspireChess = location.pathname.startsWith('/aspirechess');
  const siteName = isAspireChess ? 'Aspire Chess Academy' : 'Kolkata Chess Academy';
  const contactEmail = 'info@kolkatachessacademy.in';
  const contactPhone = '+91 98301 49852';

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Define theme-based classes
  const footerClasses = isAspireChess
    ? "bg-black bg-opacity-40 backdrop-blur-md border-t border-gray-700/50"
    : "bg-brand-dark";
  const textColor = isAspireChess ? "text-gray-300" : "text-white";
  const headingColor = isAspireChess ? "text-white" : "text-white";
  const linkHoverClass = isAspireChess ? "hover:text-amber-300" : "hover:text-yellow-300";
  const iconHoverClass = isAspireChess ? "hover:text-amber-300" : "hover:text-brand-accent";
  const highlightClass = isAspireChess ? "text-amber-400" : "text-brand-highlight";
  const dropdownBg = isAspireChess ? "bg-gray-900 bg-opacity-80 backdrop-blur-md" : "bg-brand-primary";
  const dropdownHoverBg = isAspireChess ? "hover:bg-gray-700" : "hover:bg-brand-secondary";

  return (
    <footer className={`${footerClasses} text-white py-12`}>
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h2 className={`text-2xl font-bold mb-4 ${headingColor}`}>About {siteName}</h2>
            {isAspireChess ? (
              <p className={`${textColor} leading-relaxed`}>
                Helping all “Aspiring” players with a Grand-Master approached Thinking curated by a team of grandmasters. Aspire Chess Academy is dedicated to build the academy with highest number of titled players.
              </p>
            ) : (
              <p className={`${textColor} leading-relaxed`}>
                <strong>Kolkata Chess Academy (KCA):</strong> Our fully online head, providing comprehensive online chess coaching, dashboard support, and digital resources for students worldwide.<br/>
                Aspire Chess Academy is a unit of KCA, focused on offline activities and local engagement.
              </p>
            )}
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className={`text-2xl font-bold mb-4 ${headingColor}`}>Quick Links</h2>
            <ul className={`space-y-2 ${textColor}`}>
              <li><a href={isAspireChess ? "/aspirechess/exclusives" : "/kca/exclusives"} className={linkHoverClass}>Pro Members</a></li>
              <li><a href="[https://theweekinchess.com/twic](https://theweekinchess.com/twic)" target="_blank" rel="noopener noreferrer" className={linkHoverClass}>Latest Games</a></li>
              <li><a href="[https://ratings.fide.com/](https://ratings.fide.com/)" target="_blank" rel="noopener noreferrer" className={linkHoverClass}>FIDE Ratings</a></li>
              <li><a href="[https://lichess.org/](https://lichess.org/)" target="_blank" rel="noopener noreferrer" className={linkHoverClass}>Play Online</a></li>
              <li><a href="[https://lichess.org/training](https://lichess.org/training)" target="_blank" rel="noopener noreferrer" className={linkHoverClass}>Solve Puzzles</a></li>
              <li className="relative">
                <button onClick={toggleDropdown} className={`${linkHoverClass} focus:outline-none`} aria-label="Tournaments">
                  Tournaments
                </button>
                {isDropdownOpen && (
                  <ul className={`absolute bottom-full mb-2 ${dropdownBg} rounded shadow-lg z-10`}>
                    <li><a href="[https://tournaments.kolkatachessacademy.in/](https://tournaments.kolkatachessacademy.in/)" target="_blank" rel="noopener noreferrer" className={`block px-4 py-2 ${dropdownHoverBg}`}>KCA</a></li>
                    <li><a href="[https://www.fide.com/calendar](https://www.fide.com/calendar)" target="_blank" rel="noopener noreferrer" className={`block px-4 py-2 ${dropdownHoverBg}`}>World</a></li>
                    <li><a href="[https://aicf.in/all-events/](https://aicf.in/all-events/)" target="_blank" rel="noopener noreferrer" className={`block px-4 py-2 ${dropdownHoverBg}`}>India</a></li>
                    <li><a href="[https://www.sbdschess.in/state_events.php](https://www.sbdschess.in/state_events.php)" target="_blank" rel="noopener noreferrer" className={`block px-4 py-2 ${dropdownHoverBg}`}>Bengal</a></li>
                    <li><a href="[https://new.uschess.org/play-chess](https://new.uschess.org/play-chess)" target="_blank" rel="noopener noreferrer" className={`block px-4 py-2 ${dropdownHoverBg}`}>US</a></li>
                  </ul>
                )}
              </li>
              <li><Link to="/aspirechess" className={`${highlightClass} hover:underline`}>AspireChess</Link></li>
              <li><Link to="/kca" className={`${highlightClass} hover:underline`}>Kolkata Chess Academy</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className={`text-2xl font-bold mb-4 ${headingColor}`}>Contact Us</h2>
            <ul className={`space-y-2 ${textColor}`}>
              <li className="flex items-center space-x-2">
                <FaEnvelope className={`${highlightClass} flex-shrink-0`} />
                <a href={`mailto:${contactEmail}`} className="hover:underline">{contactEmail}</a>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhoneAlt className={`${highlightClass} flex-shrink-0`} />
                <a href={`tel:${contactPhone}`} className="hover:underline">{contactPhone}</a>
              </li>
            </ul>
            <a href={isAspireChess ? "/aspirechess/contact#refund-policy" : "/kca/contact#refund-policy"} className={`inline-block mt-4 ${highlightClass} hover:underline`}>
              Refund Policy
            </a>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h2 className={`text-2xl font-bold mb-4 ${headingColor}`}>Follow Us</h2>
            <div className="flex space-x-4 mb-6">
              <a href="https://www.facebook.com/profile.php?id=61576362964556" target="_blank" rel="noopener noreferrer" className={`text-gray-400 ${iconHoverClass} text-2xl`}><FaFacebook /></a>
              <a href="https://www.instagram.com/kolkatachessacademy/" target="_blank" rel="noopener noreferrer" className={`text-gray-400 ${iconHoverClass} text-2xl`}><FaInstagram /></a>
              <a href="https://www.linkedin.com/company/kolkatachessacademy/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className={`text-gray-400 ${iconHoverClass} text-2xl`}><FaLinkedin /></a>
              <a href="https://wa.me/+919830149852" target="_blank" rel="noopener noreferrer" className={`text-gray-400 ${iconHoverClass} text-2xl`}><FaWhatsapp /></a>
              <a href="https://www.youtube.com/@kolkatachessacademy" target="_blank" rel="noopener noreferrer" className={`text-gray-400 ${iconHoverClass} text-2xl`}><FaYoutube /></a>
            </div>
            <Newsletter position="footer" />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} {siteName}. All Rights Reserved.
            <br />
            Made with <span className={highlightClass}>♥</span> by <a href="[https://www.instagram.com/being._owais/profilecard/?igsh=MWo5Nm45cjFuNzVobA==](https://www.instagram.com/being._owais/profilecard/?igsh=MWo5Nm45cjFuNzVobA==)" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-300">Owais Khan</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;