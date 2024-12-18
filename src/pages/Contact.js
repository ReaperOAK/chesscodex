import React, { useState, useEffect, useRef } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      const map = L.map("map").setView([22.623208, 88.399405], 15);
      mapRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      const customIcon = new L.Icon({
        iconUrl: "/marker-icon.png",
        iconSize: [30, 45],
        iconAnchor: [15, 45],
      });

      L.marker([22.623208, 88.399405], { icon: customIcon })
        .addTo(map)
        .bindPopup("123 Chess Lane, Kolkata, India")
        .openPopup();
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/php/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("Error:", data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-indigo-500 text-white py-20">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold mb-4">Get In Touch</h1>
          <p className="text-lg max-w-xl mx-auto">
            We're here to assist you. Send us a message or find us at our location!
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Drop Us a Message
          </h2>
          {submitted ? (
            <p className="text-center text-green-600 text-xl font-medium">
              Thank you! Your message has been received. We'll get back to you soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="block font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="mt-6 w-full py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Visit Us
          </h2>
          <div id="map" className="w-full h-72 rounded-lg shadow-lg"></div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-gray-100">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Connect With Us
          </h2>
          <div className="flex justify-center space-x-8">
            <a href="https://www.facebook.com" className="text-blue-600 hover:text-blue-500">
              <FaFacebook size={32} />
            </a>
            <a href="https://www.instagram.com" className="text-pink-600 hover:text-pink-500">
              <FaInstagram size={32} />
            </a>
            <a href="https://www.twitter.com" className="text-blue-400 hover:text-blue-300">
              <FaTwitter size={32} />
            </a>
            <a href="https://www.linkedin.com" className="text-blue-800 hover:text-blue-700">
              <FaLinkedin size={32} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;