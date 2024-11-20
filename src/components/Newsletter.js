import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const Newsletter = ({ position }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [visible, setVisible] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    setSubmitted(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) return null;

  const positionClasses = position === 'footer' ? 'w-full' : 'fixed bottom-4 left-4';

  return (
    <div className={`${positionClasses} bg-white p-6 shadow-lg rounded-lg z-50`}>
      <button
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        onClick={handleClose}
      >
        <FaTimes />
      </button>
      {submitted ? (
        <p className="text-green-600">Thank you for subscribing!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Subscribe to our Newsletter</h3>
          <p className="text-gray-600 mb-4">Get updates on our events and blogs.</p>
          <input
            type="email"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
};

export default Newsletter;