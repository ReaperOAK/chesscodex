import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhoneAlt, FaYoutube } from 'react-icons/fa';
import { useLocation, Link } from 'react-router-dom';
import Newsletter from './Newsletter';

const Footer = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const isChessCodex = location.pathname.startsWith('/chesscodex');
  const siteName = isChessCodex ? 'ChessCodex' : 'AspireChess';
  const contactEmail = isChessCodex ? 'info@kolkatachessacademy.in' : 'info@kolkatachessacademy.in';
  const contactPhone = isChessCodex ? '+91 98301 49852' : '+91 98301 49852';

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <footer className="bg-[#14092e] text-white py-12">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">About {siteName}</h2>
            <p className="text-white leading-relaxed">
              <strong>Striving to Help All Players Achieve and Improve Their Chess Rating.</strong><br />
              {siteName} is dedicated to building a community packed with rated players through its structured methodology and constant guidance.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">Quick Links</h2>
            <ul className="space-y-2 text-white">
              <li><a href={isChessCodex ? "/chesscodex/exclusives" : "/aspirechess/exclusives"} className="hover:text-[#7646eb]">Pro Members</a></li>
              <li><a href="https://theweekinchess.com/twic" target="_blank" rel="noopener noreferrer" className="hover:text-[#7646eb]">Latest Games</a></li>
              <li><a href="https://ratings.fide.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#7646eb]">FIDE Ratings</a></li>
              <li><a href="https://lichess.org/" target="_blank" rel="noopener noreferrer" className="hover:text-[#7646eb]">Play Online</a></li>
              <li><a href="https://lichess.org/training" target="_blank" rel="noopener noreferrer" className="hover:text-[#7646eb]">Solve Puzzles</a></li>
              <li className="relative">
                <button
                  onClick={toggleDropdown}
                  className="hover:text-[#7646eb] focus:outline-none"
                  aria-label="Tournaments"
                >
                  Tournaments
                </button>
                {isDropdownOpen && (
                  <ul className="absolute mt-2 bg-[#200e4a] text-white rounded shadow-lg">
                    <li><a href="https://tournaments/kolkatachessacademy.in/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-[#461fa3]">Kolkata Chess Academy</a></li>
                    <li><a href="https://www.fide.com/calendar" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-[#461fa3]">World</a></li>
                    <li><a href="https://aicf.in/all-events/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-[#461fa3]">India</a></li>
                    <li><a href="https://www.sbdschess.in/state_events.php" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-[#461fa3]">Bengal</a></li>
                    <li><a href="https://new.uschess.org/play-chess" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-[#461fa3]">US</a></li>
                  </ul>
                )}
              </li>
              <li>
              <Link
              to={isChessCodex ? "/aspirechess" : "/chesscodex"}
              className="text-[#af0505] hover:underline"
            >
              Switch to {isChessCodex ? "AspireChess" : "ChessCodex"}
            </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
            <ul className="space-y-2 text-white">
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-[#af0505] flex-shrink-0" />
                <a href={`mailto:${contactEmail}`} className="hover:underline">{contactEmail}</a>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhoneAlt className="text-[#af0505] flex-shrink-0" />
                <a href={`tel:${contactPhone}`} className="hover:underline">{contactPhone}</a>
              </li>
            </ul>
            <a href={isChessCodex ? "/chesscodex/contact#refund-policy" : "/aspirechess/contact#refund-policy"} className="inline-block mt-4 text-[#af0505] hover:underline">
              Refund Policy
            </a>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">Follow Us</h2>
            <div className="flex space-x-4 mb-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#7646eb] text-2xl">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#7646eb] text-2xl">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/company/kolkatachessacademy/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#7646eb] text-2xl">
                <FaLinkedin />
              </a>
              <a href="https://wa.me/+919830149852" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#7646eb] text-2xl">
                <FaWhatsapp />
              </a>
              <a href="https://www.youtube.com/@kolkatachessacademy" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#7646eb] text-2xl">
                <FaYoutube />
              </a>
            </div>
            <Newsletter position="footer" />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white mt-8 pt-6 text-center text-white">
          <p>
            © {new Date().getFullYear()} {siteName}. All Rights Reserved.
            <br />
            Made with <span className="text-[#af0505]">♥</span> by <a href="https://www.instagram.com/being._owais/profilecard/?igsh=MWo5Nm45cjFuNzVobA==" target="_blank" rel="noopener noreferrer" className="hover:underline">Owais Khan</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;