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
    country_code: "+91",
    message: "",
    subscribe_newsletter: false,
    agree_privacy_policy: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const mapRef = useRef(null);
  const location = useLocation();
  const isAspireChess = location.pathname.startsWith('/aspirechess');
  const siteName = isAspireChess ? 'AspireChess' : 'ChessCodex';
  const contactEmail = 'info@kolkatachessacademy.in';
  const contactPhone = '+91 98301 49852';
  const contactAddress = 'Cross Road, Purba Sinthee, Dumdum, Kolkata:700030';

  useEffect(() => {
    if (document.getElementById('map') && !mapRef.current) {
      const map = L.map("map", {
        center: [22.623208, 88.399405],
        zoom: 15,
        scrollWheelZoom: false,
      });
      mapRef.current = map;

      const tileLayerUrl = isAspireChess
        ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
        : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
      
      L.tileLayer(tileLayerUrl, {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      }).addTo(map);

      const customIcon = new L.Icon({
        iconUrl: "/marker-icon.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      });

      L.marker([22.623208, 88.399405], { icon: customIcon })
        .addTo(map)
        .bindPopup(contactAddress)
        .openPopup();
    }
  }, [isAspireChess, contactAddress]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    setSubmitted(true);
  };

  // --- Theme-Aware Class Definitions ---
  const heroClasses = isAspireChess ? "py-24" : "relative bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent text-white py-20";
  const sectionWrapperClasses = isAspireChess ? "py-16 sm:py-24 space-y-20 px-4" : "bg-codex-bg-light";
  const cardClasses = isAspireChess ? "bg-black bg-opacity-25 backdrop-blur-md rounded-2xl p-8 sm:p-12 border border-gray-700/60 shadow-2xl" : "bg-white p-8 rounded-lg shadow-lg";
  const titleClasses = isAspireChess ? "text-amber-400" : "text-brand-dark";
  const textClasses = isAspireChess ? "text-gray-300" : "text-brand-text";
  const inputClasses = isAspireChess ? "bg-gray-900 bg-opacity-50 border-gray-700 text-white placeholder-gray-400 focus:ring-amber-400 rounded-md shadow-sm p-3 w-full" : "w-full border border-brand-light rounded-md shadow-sm p-3 focus:ring focus:ring-brand-secondary";
  const buttonClasses = isAspireChess ? "bg-amber-500 text-gray-900 hover:bg-amber-400" : "bg-brand-secondary text-white hover:bg-brand-primary";
  const labelClasses = isAspireChess ? "block font-medium mb-2 text-gray-300" : "block font-medium mb-2 text-brand-text";
  const iconClasses = isAspireChess ? "text-amber-400" : "text-brand-primary";

  return (
    <div>
      <Helmet>
        <title>Contact Us - {siteName}</title>
        {/* Meta tags */}
      </Helmet>

      <section className={heroClasses}>
        <div className="text-center px-6">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 text-white">Get In Touch</h1>
          <p className={`text-lg max-w-4xl mx-auto ${isAspireChess ? 'text-gray-300' : 'text-white'}`}>
            We're here to assist you with grace and expertise. Feel free to connect with us. Your curiosity and interest are highly valued.
          </p>
        </div>
      </section>

      <div className={sectionWrapperClasses}>
        <section>
          <div className="max-w-6xl mx-auto px-6">
            <div className={cardClasses}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Form */}
                <div>
                  <h2 className={`text-4xl font-bold mb-8 ${titleClasses}`}>Drop Us a Message</h2>
                  {submitted ? (
                    <p className={`text-center text-xl font-medium ${isAspireChess ? 'text-green-400' : 'text-brand-primary'}`}>
                      Thank you! Your message has been received.
                    </p>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div>
                          <label htmlFor="role" className={labelClasses}>I am</label>
                          <select id="role" name="role" value={formData.role} onChange={handleChange} required className={inputClasses}>
                            <option value="">-- Select --</option>
                            <option value="student">Student</option>
                            <option value="teacher">Teacher</option>
                            <option value="parent">Parent</option>
                            <option value="interested">Interested Person</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="name" className={labelClasses}>Name</label>
                          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={inputClasses} />
                        </div>
                        {(formData.role === "student" || formData.role === "parent") && (
                          <div>
                            <label htmlFor="age" className={labelClasses}>Student's Age</label>
                            <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} required className={inputClasses} />
                          </div>
                        )}
                        <div>
                          <label htmlFor="email" className={labelClasses}>Email</label>
                          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputClasses} />
                        </div>
                        <div className="md:col-span-2">
                          <label htmlFor="phone_number" className={labelClasses}>Phone Number</label>
                          <div className="flex">
                            <input type="text" id="country_code" name="country_code" value={formData.country_code} onChange={handleChange} required className={`${inputClasses} w-1/4 mr-2`} />
                            <input type="tel" id="phone_number" name="phone_number" value={formData.phone_number} onChange={handleChange} required className={`${inputClasses} w-3/4`} />
                          </div>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="message" className={labelClasses}>Message</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="5" className={inputClasses}></textarea>
                      </div>
                      <div className="space-y-4">
                        <label className="inline-flex items-center">
                          <input type="checkbox" name="subscribe_newsletter" checked={formData.subscribe_newsletter} onChange={handleChange} className="form-checkbox h-5 w-5 rounded bg-gray-700 border-gray-600 text-amber-500 focus:ring-amber-500" />
                          <span className={`ml-2 ${textClasses}`}>Subscribe to our newsletter</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input type="checkbox" name="agree_privacy_policy" checked={formData.agree_privacy_policy} onChange={handleChange} required className="form-checkbox h-5 w-5 rounded bg-gray-700 border-gray-600 text-amber-500 focus:ring-amber-500" />
                          <span className={`ml-2 ${textClasses}`}>I agree to the <a href="/privacy-policy" className={`${isAspireChess ? 'text-amber-400' : 'text-brand-secondary'} underline`}>privacy policy</a></span>
                        </label>
                      </div>
                      <button type="submit" className={`w-full py-3 font-semibold rounded-lg shadow-lg transition duration-300 ${buttonClasses}`}>Send Message</button>
                    </form>
                  )}
                </div>
                {/* Details & Map */}
                <div className="space-y-8">
                  <div>
                    <h2 className={`text-4xl font-bold mb-4 ${titleClasses}`}>Contact Details</h2>
                    <ul className={`space-y-4 ${textClasses}`}>
                      <li className="flex items-center space-x-3"><FaPhoneAlt className={iconClasses} /><a href={`tel:${contactPhone}`} className="hover:underline">{contactPhone}</a></li>
                      <li className="flex items-center space-x-3"><FaEnvelope className={iconClasses} /><a href={`mailto:${contactEmail}`} className="hover:underline">{contactEmail}</a></li>
                      <li className="flex items-start space-x-3"><FaMapMarkerAlt className={`${iconClasses} mt-1`} /><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactAddress)}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{contactAddress}</a></li>
                    </ul>
                  </div>
                  <div>
                    <h2 className={`text-4xl font-bold mb-4 ${titleClasses}`}>Connect With Us</h2>
                    <div className="flex space-x-4">
                      <a href="https://www.facebook.com" className="text-gray-400 hover:text-white"><FaFacebook size={32} /></a>
                      <a href="https://www.instagram.com" className="text-gray-400 hover:text-white"><FaInstagram size={32} /></a>
                      <a href="https://www.linkedin.com/company/kolkatachessacademy/" className="text-gray-400 hover:text-white"><FaLinkedin size={32} /></a>
                      <a href="https://wa.me/+919830149852" className="text-gray-400 hover:text-white"><FaWhatsapp size={32} /></a>
                      <a href="https://www.youtube.com/@kolkatachessacademy" className="text-gray-400 hover:text-white"><FaYoutube size={32} /></a>
                    </div>
                  </div>
                  <div>
                    <h2 className={`text-4xl font-bold mb-4 ${titleClasses}`}>Visit Us</h2>
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
    </div>
  );
};

export default Contact;