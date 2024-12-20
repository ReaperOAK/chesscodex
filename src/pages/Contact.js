import React, { useState, useEffect, useRef } from "react";
import { Helmet } from 'react-helmet';
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
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
        .bindPopup("Cross Road, Purba Sinthee, Dumdum, Kolkata:700030")
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
      <Helmet>
        <title>Contact Us - ChessCodex</title>
        <meta name="description" content="Get in touch with ChessCodex. Send us a message or find our location." />
        <meta name="keywords" content="ChessCodex, contact, chess academy, chess training, chess coaching" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#200e4a] via-[#461fa3] to-[#7646eb] text-white py-20">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold mb-4">Get In Touch</h1>
          <p className="text-lg max-w-xl mx-auto">
            We're here to assist you. Send us a message or find us at our location!
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-[#f3f1f9]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white p-8 rounded-lg shadow-lg relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bold mb-8 text-[#200e4a]">
                  Drop Us a Message
                </h2>
                {submitted ? (
                  <p className="text-center text-[#af0505] text-xl font-medium">
                    Thank you! Your message has been received. We'll get back to you soon.
                  </p>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block font-medium mb-2 text-[#270185]">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full border-[#c2c1d3] rounded-md shadow-sm p-3 focus:ring focus:ring-[#461fa3]"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block font-medium mb-2 text-[#270185]">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full border-[#c2c1d3] rounded-md shadow-sm p-3 focus:ring focus:ring-[#461fa3]"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label htmlFor="message" className="block font-medium mb-2 text-[#270185]">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full border-[#c2c1d3] rounded-md shadow-sm p-3 focus:ring focus:ring-[#461fa3]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="mt-6 w-full py-3 bg-[#461fa3] text-white font-medium rounded-lg shadow-lg hover:bg-[#7646eb] transition duration-300"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold mb-4 text-[#200e4a]">
                    Contact Details
                  </h2>
                  <ul className="space-y-4 text-[#270185]">
                    <li className="flex items-center space-x-2">
                      <FaPhoneAlt className="text-[#af0505]" />
                      <span>+91 98301 49852</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <FaEnvelope className="text-[#af0505]" />
                      <span>info@chesscodex.com</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <FaMapMarkerAlt className="text-[#af0505]" />
                      <span>Cross Road, Purba Sinthee, Dumdum, Kolkata:700030</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-4xl font-bold mb-4 text-[#200e4a]">
                    Connect With Us
                  </h2>
                  <div className="flex space-x-4">
                    <a href="https://www.facebook.com" className="text-[#1877F2] hover:text-[#145dbf]">
                      <FaFacebook size={32} />
                    </a>
                    <a href="https://www.instagram.com" className="text-[#E4405F] hover:text-[#bc2a8d]">
                      <FaInstagram size={32} />
                    </a>
                    <a href="https://www.linkedin.com" className="text-[#0A66C2] hover:text-[#004182]">
                      <FaLinkedin size={32} />
                    </a>
                    <a href="https://wa.me/+919830149852" className="text-[#25D366] hover:text-[#128C7E]">
                      <FaWhatsapp size={32} />
                    </a>
                  </div>
                </div>

                {/* Map Section */}
                <div>
                  <h2 className="text-4xl font-bold mb-4 text-[#200e4a]">
                    Visit Us
                  </h2>
                  <div id="map" className="w-full h-72 rounded-lg shadow-lg relative z-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;