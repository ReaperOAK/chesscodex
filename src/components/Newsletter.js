import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const Newsletter = ({ position }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [visible, setVisible] = useState(true);

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

  return (
    <div
      className={`${positionClasses} bg-white p-5 rounded-lg shadow-2xl animate-slideIn transition-all duration-300`}
      style={{ zIndex: 1000 }}
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
          <h3 className="text-lg font-semibold text-green-600 mb-2">Thank You!</h3>
          <p className="text-gray-700">You’ve successfully subscribed to our newsletter.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800">Join Our Newsletter</h3>
            <p className="text-gray-600 text-sm mt-1">
              Stay updated with our latest news and events.
            </p>
          </div>

          {/* Email Input */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Subscribe Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
};

export default Newsletter;
