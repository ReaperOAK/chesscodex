import React, { useState, useEffect, useRef } from "react";
import { Helmet } from 'react-helmet';
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaYoutube } from "react-icons/fa";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import FAQs from "../components/FAQs";
import RefundPolicy from "../components/RefundPolicy";
import { useLocation } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    role: "",
    name: "",
    age: "",
    email: "",
    phone_number: "",
    country_code: "+91", // Default country code
    message: "",
    subscribe_newsletter: false,
    agree_privacy_policy: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const mapRef = useRef(null);  const location = useLocation();
  const isChessCodex = location.pathname.startsWith('/chesscodex');
  const isAspireChess = location.pathname.startsWith('/aspirechess');
  const siteName = isChessCodex ? 'ChessCodex' : isAspireChess ? 'AspireChess' : 'Kolkata Chess Academy';
  const siteDescription = isChessCodex
    ? 'Get in touch with ChessCodex. Send us a message or find our location.'
    : isAspireChess
    ? 'Get in touch with AspireChess. Send us a message or find our location.'
    : 'Get in touch with Kolkata Chess Academy. Send us a message or find our location.';
  const siteKeywords = isChessCodex
    ? 'ChessCodex, contact, chess academy, chess training, chess coaching'
    : isAspireChess
    ? 'AspireChess, contact, chess academy, chess training, chess coaching'
    : 'Kolkata Chess Academy, contact, chess academy, chess training, chess coaching';
  const contactEmail = isChessCodex ? 'info@kolkatachessacademy.in' : 'info@kolkatachessacademy.in';
  const contactPhone = isChessCodex ? '+91 98301 49852' : '+91 98301 49852';
  const contactAddress = isChessCodex
    ? 'Cross Road, Purba Sinthee, Dumdum, Kolkata:700030'
    : 'Cross Road, Purba Sinthee, Dumdum, Kolkata:700030';

  useEffect(() => {
    if (!mapRef.current) {
      const map = L.map("map", {
        center: [22.623208, 88.399405],
        zoom: 15,
        scrollWheelZoom: false,
      });
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
        .bindPopup(contactAddress)
        .openPopup();
    }
  }, [contactAddress]);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
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
        setFormData({
          role: "",
          name: "",
          age: "",
          email: "",
          phone_number: "",
          country_code: "+91", // Reset country code
          message: "",
          subscribe_newsletter: false,
          agree_privacy_policy: false,
        });
      } else {
        console.error("Error:", data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Contact Us - {siteName}</title>
        <meta name="description" content={siteDescription} />
        <meta name="keywords" content={siteKeywords} />
      </Helmet>
      {/* Hero Section */}
      <section        className={`relative ${
          isChessCodex 
          ? 'bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent' 
          : isAspireChess 
          ? 'bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent' 
          : 'bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent'
        }text-white py-20`}>
        <div className="text-center px-6 md:px-12 lg:px-24">
          <h1 className="text-6xl font-extrabold mb-4">Get In Touch</h1>
          <p className="text-lg max-w-4xl mx-auto">
            Seek further insights into the offerings of Kolkata Chess Academy, we're here to assist you with grace and expertise. Feel free to connect with us. Your curiosity and interest are highly valued.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className={`py-16 ${
        isChessCodex 
          ? 'bg-codex-bg-light' 
          : isAspireChess 
          ? 'bg-aspire-bg-light' 
          : 'bg-kca-bg-light'
      }`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white p-8 rounded-lg shadow-lg relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>                <h2 className="text-4xl font-bold mb-8 text-brand-dark">
                  Drop Us a Message
                </h2>
                {submitted ? (                  <p className="text-center text-brand-primary text-xl font-medium">
                    Thank you! Your message has been received. We'll get back to you soon.
                  </p>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div>                        <label htmlFor="role" className="block font-medium mb-2 text-brand-text">
                          I am
                        </label>                        <select
                          id="role"
                          name="role"
                          value={formData.role}
                          onChange={handleChange}
                          required
                          className="w-full border border-brand-light rounded-md shadow-sm p-3 focus:ring focus:ring-brand-secondary"
                        >
                          <option value="">-- Select --</option>
                          <option value="student">Student</option>
                          <option value="teacher">Teacher</option>
                          <option value="parent">Parent</option>
                          <option value="interested">Interested Person</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>                        <label htmlFor="name" className="block font-medium mb-2 text-brand-text">
                          Name
                        </label>                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full border border-brand-light rounded-md shadow-sm p-3 focus:ring focus:ring-brand-secondary"
                        />
                      </div>
                      {(formData.role === "student" || formData.role === "parent") && (
                        <div>                          <label htmlFor="age" className="block font-medium mb-2 text-brand-text">
                            Student's Age
                          </label>                          <input
                            type="number"
                            id="age"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            required
                            className="w-full border border-brand-light rounded-md shadow-sm p-3 focus:ring focus:ring-brand-secondary"
                          />
                        </div>
                      )}
                      <div>                        <label htmlFor="email" className="block font-medium mb-2 text-brand-text">
                          Email
                        </label>                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full border border-brand-light rounded-md shadow-sm p-3 focus:ring focus:ring-brand-secondary"
                        />
                      </div>
                      <div>                        <label htmlFor="phone_number" className="block font-medium mb-2 text-brand-text">
                          Phone Number
                        </label>
                        <div className="flex">
                          <input
                            type="text"
                            id="country_code"
                            name="country_code"
                            value={formData.country_code}
                            onChange={handleChange}
                            required
                            className="w-1/3  border border-brand-light rounded-md shadow-sm p-3 focus:ring focus:ring-brand-secondary mr-2"
                          />
                          <input
                            type="tel"
                            id="phone_number"
                            name="phone_number"
                            value={formData.phone_number}
                            onChange={handleChange}
                            required
                            className="w-2/3 border border-brand-light rounded-md shadow-sm p-3 focus:ring focus:ring-brand-secondary"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">                      <label htmlFor="message" className="block font-medium mb-2 text-brand-text">
                        Message
                      </label>                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full border border-brand-light rounded-md shadow-sm p-3 focus:ring focus:ring-brand-secondary"
                      />
                    </div>
                    <div className="mt-4">
                      <label className="inline-flex items-center">                        <input
                          type="checkbox"
                          name="subscribe_newsletter"
                          checked={formData.subscribe_newsletter}
                          onChange={handleChange}
                          className="form-checkbox h-5 w-5 text-brand-primary"
                        />
                        <span className="ml-2 text-brand-text">Subscribe to our newsletter</span>
                      </label>
                    </div>
                    <div className="mt-4">
                      <label className="inline-flex items-center">                        <input
                          type="checkbox"
                          name="agree_privacy_policy"
                          checked={formData.agree_privacy_policy}
                          onChange={handleChange}
                          required
                          className="form-checkbox h-5 w-5 text-brand-primary"
                        />
                        <span className="ml-2 text-brand-text">
                          I agree to the <a href="/privacy-policy" className="text-brand-secondary underline">privacy policy</a>
                        </span>
                      </label>
                    </div>                    <button
                      type="submit"
                      className="mt-6 w-full py-3 bg-brand-secondary text-white font-medium rounded-lg shadow-lg hover:bg-brand-primary transition duration-300"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>

              <div className="space-y-8">
                <div>                  <h2 className="text-4xl font-bold mb-4 text-brand-dark">
                    Contact Details
                  </h2>
                  <ul className="space-y-4 text-brand-text">                    <li className="flex items-center space-x-2">
                      <FaPhoneAlt className="text-brand-primary" />
                      <a href={`tel:${contactPhone}`} className="hover:underline">{contactPhone}</a>
                    </li>
                    <li className="flex items-center space-x-2">
                      <FaEnvelope className="text-brand-primary" />
                      <a href={`mailto:${contactEmail}`} className="hover:underline">{contactEmail}</a>
                    </li>
                    <li className="flex items-center space-x-2">
                      <FaMapMarkerAlt className="text-brand-primary" />
                      <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactAddress)}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{contactAddress}</a>
                    </li>
                  </ul>
                </div>

                <div>                  <h2 className="text-4xl font-bold mb-4 text-brand-dark">
                    Connect With Us
                  </h2>
                  <div className="flex space-x-4">
                    <a href="https://www.facebook.com" className="text-[#1877F2] hover:text-[#145dbf]">
                      <FaFacebook size={32} />
                    </a>
                    <a href="https://www.instagram.com" className="text-[#E4405F] hover:text-[#bc2a8d]">
                      <FaInstagram size={32} />
                    </a>
                    <a href="https://www.linkedin.com/company/kolkatachessacademy/" className="text-[#0A66C2] hover:text-[#004182]">
                      <FaLinkedin size={32} />
                    </a>
                    <a href="https://wa.me/+919830149852" className="text-[#25D366] hover:text-[#128C7E]">
                      <FaWhatsapp size={32} />
                    </a>
                    <a href="https://www.youtube.com/@kolkatachessacademy" className="text-[#FF0000] hover:text-[#cc0000]">
                      <FaYoutube size={32} />
                    </a>
                  </div>
                </div>

                {/* Map Section */}
                <div>                  <h2 className="text-4xl font-bold mb-4 text-brand-dark">
                    Visit Us
                  </h2>
                  <div id="map" className="w-full h-72 rounded-lg shadow-lg relative z-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="faqs">
        <FAQs />
      </section>
      <section id="refund-policy">
        <RefundPolicy />
      </section>
    </div>
  );
};

export default Contact;
