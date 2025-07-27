import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Newsletter = ({ position }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [visible, setVisible] = useState(true);
  const location = useLocation();
  const isAspireChess = location.pathname.startsWith('/aspirechess');
  const logoSrc = isAspireChess ? '/aca.png' : '/kca.png';
  const siteName = isAspireChess ? 'AspireChess' : 'Kolkata Chess Academy';

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simplified submission logic for demonstration
    setSubmitted(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible && position !== 'footer') return null;

  // --- THEME-AWARE STYLING ---
  const positionClasses = position === 'footer' ? 'w-full mx-auto my-6' : 'fixed bottom-4 left-4 w-[320px] md:w-[350px]';
  
  const containerClasses = isAspireChess
    ? 'bg-black bg-opacity-20 backdrop-blur-md border border-gray-700/50'
    : 'bg-white';
  
  const titleColor = isAspireChess ? 'text-white' : 'text-brand-text';
  const textColor = isAspireChess ? 'text-gray-300' : 'text-brand-text';
  const closeButtonColor = isAspireChess ? 'text-gray-400 hover:text-white' : 'text-brand-text hover:text-brand-dark';

  const inputClasses = isAspireChess
    ? 'bg-gray-800 bg-opacity-50 border-gray-600 text-white placeholder-gray-400 focus:ring-amber-400'
    : 'border-brand-light text-brand-text placeholder-brand-text focus:ring-brand-secondary';

  const buttonClasses = isAspireChess
    ? 'bg-amber-500 text-gray-900 hover:bg-amber-400'
    : 'bg-brand-highlight text-white hover:bg-brand-highlight/80';

  return (
    <div
      className={`${positionClasses} ${containerClasses} p-5 rounded-lg shadow-2xl transition-all duration-300 ${!visible ? 'animate-slideOut' : 'animate-slideIn'}`}
      style={{ zIndex: 1000 }}
      aria-label="Newsletter Subscription Form"
    >
      {/* Close Button (only for fixed position) */}
      {position !== 'footer' && (
        <button
          onClick={handleClose}
          className={`absolute top-2 right-2 transition-transform transform hover:scale-110 ${closeButtonColor}`}
          aria-label="Close"
        >
          <FaTimes size={18} />
        </button>
      )}

      {/* Content */}
      {submitted ? (
        <div className="text-center">
          <h3 className={`text-lg font-semibold mb-2 ${titleColor}`}>Thank You!</h3>
          <p className={textColor}>You’ve successfully subscribed to our newsletter.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center space-x-3">
            <img src={logoSrc} alt="Logo" className="w-8 h-8" />
            <h2 className={`text-xl font-bold ${titleColor}`}>Join Our Newsletter</h2>
          </div>
          <p className={`text-sm mt-1 ${textColor}`}>
            Stay updated with our latest news and events from {siteName}.
          </p>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className={`w-full px-3 py-2 rounded border focus:outline-none focus:ring-2 ${inputClasses}`}
            aria-label="Email Address"
          />

          <button
            type="submit"
            className={`w-full py-2 rounded font-semibold hover:scale-105 transition-transform transform ${buttonClasses}`}
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
};

export default Newsletter;
