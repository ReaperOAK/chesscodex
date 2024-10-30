import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: About Us */}
          <div>
            <h4 className="text-xl font-semibold mb-4">About ChessCodex</h4>
            <p className="text-gray-400">
              <b><u>Striving to Help All Players Achieve and Improve Their Chess Rating.
              </u></b><br/>
              ChessCodex is dedicated to build a community packed with rated players through it structured methodology and constant guidance.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/exclusives" className="text-gray-400 hover:text-white">Pro Members</a></li>
              <li><a href="https://theweekinchess.com/twic" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Latest Games</a></li>
              <li><a href="https://ratings.fide.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">FIDE Ratings</a></li>
              <li><a href="https://lichess.org/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Play Online</a></li>
              <li><a href="https://lichess.org/training" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Solve Puzzles</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Email: info@chesscodex.com</li>
              <li className="text-gray-400">Phone: +123 456 7890</li>
            </ul>
            <br/>
            <a href="/refund-policy" className="text-xl font-semibold mb-4">Refund Policy</a>
          </div>

          {/* Column 4: Follow Us */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
                <FaLinkedin />
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom: Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400">© 2024 ChessCodex. All Rights Reserved.<br/>Made with &#10084; by Owais Khan</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;