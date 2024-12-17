import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+919830149852" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8 bg-green-500 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-50"
    >
      <FaWhatsapp size={24} className="md:hidden" />
      <FaWhatsapp size={32} className="hidden md:block" />
    </a>
  );
};

export default WhatsAppButton;