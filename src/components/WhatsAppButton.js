import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+919830149852" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8 flex items-center gap-3 bg-[#25D366] text-white py-3 px-4 md:px-5 rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 hover:shadow-2xl scale-105 z-50"
    >
      <FaWhatsapp size={28} className="animate-pulse" />
      <span className="hidden md:inline text-lg font-semibold">
        Chat with Us
      </span>
    </a>
  );
};

export default WhatsAppButton;
