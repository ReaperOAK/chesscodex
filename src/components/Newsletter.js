import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Newsletter = ({ position, theme }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [visible, setVisible] = useState(true);
  const location = useLocation();
  const isChessCodex = location.pathname.startsWith('/chesscodex');
  const logoSrc = isChessCodex ? '/KCA_PNG.png' : '/KCA_PNG.png';
  const siteName = isChessCodex ? 'ChessCodex' : 'AspireChess';

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/php/newsletter.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (data.success) setSubmitted(true);
      else console.error('Error:', data.message);
    } catch (error) {
      console.error('Error submitting email:', error);
    }
  };

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) return null;

  const positionClasses =
    position === 'footer'
      ? 'w-full mx-auto my-6'
      : 'fixed bottom-4 left-4 w-[320px] md:w-[350px]';

  const textColor = theme === 'contact' ? 'text-[#270185]' : 'text-[#270185]';
  const buttonClasses = 'bg-[#af0505] text-white hover:bg-[#8c0404]';
  const inputClasses = 'border-[#c2c1d3] text-[#270185] placeholder-[#270185] focus:ring-[#461fa3] border-2';

  return (
    <div
      className={`${positionClasses} bg-white p-5 rounded-lg shadow-2xl animate-slideIn transition-all duration-300`}
      style={{ zIndex: 1000 }}
      aria-label="Newsletter Subscription Form"
    >
      {/* Close Button */}
      <button
        onClick={handleClose}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-transform transform hover:scale-110"
        aria-label="Close"
      >
        <FaTimes size={18} />
      </button>

      {/* Content */}
      {submitted ? (
        <div className="text-center">
          <h3 className={`text-lg font-semibold mb-2 ${textColor}`}>Thank You!</h3>
          <p className={textColor}>You’ve successfully subscribed to our newsletter.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center space-x-2">
            <h2 className={`text-xl font-bold ${textColor}`}>Join Our Newsletter</h2>
            <img src={logoSrc} alt="Logo" className="w-8 h-8" />
          </div>
          <p className={`text-sm mt-1 ${textColor}`}>
            Stay updated with our latest news and events from {siteName}.
          </p>

          {/* Email Input */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className={`w-full px-3 py-2 rounded focus:outline-none focus:ring-2 ${inputClasses}`}
            aria-label="Email Address"
          />

          {/* Subscribe Button */}
          <button
            type="submit"
            className={`w-full py-2 rounded hover:scale-105 transition-transform transform ${buttonClasses}`}
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
};

export default Newsletter;