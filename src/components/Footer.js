import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Newsletter from './Newsletter';

const Footer = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h4 className="text-2xl font-bold mb-4">About ChessCodex</h4>
            <p className="text-gray-400 leading-relaxed">
              <strong>Empowering chess enthusiasts worldwide.</strong><br />
              ChessCodex offers structured programs and community engagement to help you level up your chess game.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-2xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/exclusives" className="hover:text-yellow-500">Pro Members</a></li>
              <li><a href="https://theweekinchess.com/twic" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">Latest Games</a></li>
              <li><a href="https://ratings.fide.com/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">FIDE Ratings</a></li>
              <li><a href="https://lichess.org/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">Play Online</a></li>
              <li><a href="https://lichess.org/training" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">Solve Puzzles</a></li>
              <li className="relative">
                <button
                  onClick={toggleDropdown}
                  className="hover:text-yellow-500 focus:outline-none"
                >
                  Tournaments
                </button>
                {isDropdownOpen && (
                  <ul className="absolute mt-2 bg-gray-700 text-white rounded shadow-lg">
                    <li><a href="https://tournaments/kolkatachessacademy.in/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-600">Kolkata Chess Academy</a></li>
                    <li><a href="https://www.fide.com/calendar" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-600">World</a></li>
                    <li><a href="https://aicf.in/all-events/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-600">India</a></li>
                    <li><a href="https://www.sbdschess.in/state_events.php" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-600">Bengal</a></li>
                    <li><a href="https://new.uschess.org/play-chess" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-600">US</a></li>
                  </ul>
                )}
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-2xl font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-yellow-500" />
                <span>info@chesscodex.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhoneAlt className="text-yellow-500" />
                <span>+91 98301 49852</span>
              </li>
            </ul>
            <a href="/refund-policy" className="inline-block mt-4 text-yellow-500 hover:underline">
              Refund Policy
            </a>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h4 className="text-2xl font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4 mb-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 text-2xl">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 text-2xl">
                <FaXTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 text-2xl">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 text-2xl">
                <FaLinkedin />
              </a>
              <a href="https://wa.me/+919830149852" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 text-2xl">
                <FaWhatsapp />
              </a>
            </div>
            <Newsletter position="footer" />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} ChessCodex. All Rights Reserved.
            <br />
            Made with <span className="text-yellow-500">♥</span> by Owais Khan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
