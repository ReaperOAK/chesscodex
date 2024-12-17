import React, { useState, useEffect, useRef } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      // If the map is already initialized, do nothing
      return;
    }

    // Initialize the map
    const map = L.map('map').setView([22.623208, 88.399405], 15);
    mapRef.current = map;

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Create a custom icon
    const customIcon = new L.Icon({
      iconUrl: '/marker-icon.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    // Add a marker with the custom icon
    L.marker([22.623208, 88.399405], { icon: customIcon }).addTo(map)
      .bindPopup('123 Chess Lane, Kolkata, India')
      .openPopup();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/php/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error('Error:', data.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-24 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg">We'd love to hear from you! Reach out to us anytime.</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Get in Touch</h2>
          {submitted ? (
            <p className="text-green-600 text-center">Thank you for your message! We will get back to you soon.</p>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    className="w-full p-3 border rounded" 
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    className="w-full p-3 border rounded" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  rows="5" 
                  className="w-full p-3 border rounded" 
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Contact Information</h2>
          <p className="text-lg mb-2">Phone: <a href="tel:++919830149852" className="text-blue-600">+1 234 567 890</a></p>
          <p className="text-lg mb-2">Email: <a href="mailto:info@chessacademy.com" className="text-blue-600">info@chessacademy.com</a></p>
          <p className="text-lg mb-2">Address: 123 Chess Lane, Kolkata, India</p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Find Us Here</h2>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <div id="map" className="w-full h-60"></div>
          </div>
        </div>
      </section>

      {/* Social Media Links Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Follow Us</h2>
          <div className="flex justify-center space-x-6">
            <a href="https://facebook.com" className="text-blue-600 hover:text-blue-500">
              <FaFacebook/>
            </a>
            <a href="https://twitter.com" className="text-blue-400 hover:text-blue-300">
              <FaTwitter/>
            </a>
            <a href="https://instagram.com" className="text-pink-600 hover:text-pink-500">
              <FaInstagram/>
            </a>
            <a href="https://linkedin.com" className="text-blue-800 hover:text-blue-700">
              <FaLinkedin/>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;