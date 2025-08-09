
import React, { useState, useEffect, useRef } from "react";
import SEO from '../../components/SEO';
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaYoutube } from "react-icons/fa";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import FAQs from '../../components/FAQs';
import RefundPolicy from '../../components/RefundPolicy';


const AspireContact = () => {
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
  const siteName = 'AspireChess';
  const contactEmail = 'info@kolkatachessacademy.in';
  const contactPhone = '+91 98301 49852';
  const branches = React.useMemo(() => ([
    {
      name: 'Dumdum Branch',
      address: 'Dumdum Cross Road, 178/3, Purba Sinthi Rd, Jhilbagan, Dumdum, Kolkata, West Bengal 700030',
      mapCenter: [22.623208, 88.399405],
      mapType: 'leaflet',
      mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Dumdum Cross Road, 178/3, Purba Sinthi Rd, Jhilbagan, Dumdum, Kolkata, West Bengal 700030')}`
    },
    {
      name: 'Parnasree Branch',
      address: 'Parnasree Nababani Sangha, Airport More, Behala, Kolkata - 700060',
      mapCenter: [22.5129781, 88.3021747],
      mapType: 'iframe',
      mapUrl: 'https://maps.app.goo.gl/dBzYZ2vBUtzfKmUt5?g_st=aw',
      iframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.7655452333593!2d88.3021747!3d22.512978099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027bd571b2cc83%3A0xae3b75f83e0ed1e6!2sAspire%20Chess%20Academy%20(A%20Unit%20of%20Kolkata%20Chess%20Academy)!5e0!3m2!1sen!2sin!4v1754725362116!5m2!1sen!2sin" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    }
  ]), []);


  useEffect(() => {
    // Only render map for Dumdum branch (Leaflet)
    const dumdum = branches[0];
    if (document.getElementById('map-dumdum') && !mapRef.current) {
      const map = L.map('map-dumdum', {
        center: dumdum.mapCenter,
        zoom: 15,
        scrollWheelZoom: false,
      });
      mapRef.current = map;
      const tileLayerUrl = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';
      L.tileLayer(tileLayerUrl, {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      }).addTo(map);
      const mapDiv = document.getElementById('map-dumdum');
      if (mapDiv) {
        mapDiv.style.border = '4px solid #FFD700';
        mapDiv.style.boxShadow = '0 0 24px 4px #FFD70088';
      }
      const customIcon = new L.Icon({
        iconUrl: "/marker-icon.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      });
      L.marker(dumdum.mapCenter, { icon: customIcon })
        .addTo(map)
        .bindPopup(dumdum.address)
        .openPopup();
    }
  }, [branches]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    setSubmitted(true);
  };


  // Aspire theme only
  const heroClasses = "py-24";
  const sectionWrapperClasses = "py-16 sm:py-24 space-y-20 px-4";
  const cardClasses = "bg-black bg-opacity-25 backdrop-blur-md rounded-2xl p-8 sm:p-12 border border-gray-700/60 shadow-2xl";
  const titleClasses = "text-amber-400";
  const textClasses = "text-gray-300";
  const inputClasses = "bg-gray-900 bg-opacity-50 border-gray-700 text-white placeholder-gray-400 focus:ring-amber-400 rounded-md shadow-sm p-3 w-full";
  const buttonClasses = "bg-amber-500 text-gray-900 hover:bg-amber-400";
  const labelClasses = "block font-medium mb-2 text-gray-300";
  const iconClasses = "text-amber-400";

  return (
    <div>

      <SEO
        title={`Contact Us - ${siteName}`}
        description={`Contact ${siteName} for chess coaching, queries, and support. Reach us by phone, email, or visit our academy.`}
        keywords={'AspireChess, contact, chess academy, chess coaching, support'}
        image={'https://kolkatachessacademy.in/aca.png'}
        url={'https://kolkatachessacademy.in/aspirechess/contact'}
        type="contact"
        canonical={'https://kolkatachessacademy.in/aspirechess/contact'}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: siteName,
          url: 'https://kolkatachessacademy.in/aspirechess/contact',
          contactPoint: [{
            '@type': 'ContactPoint',
            telephone: contactPhone,
            contactType: 'customer support',
            email: contactEmail
          }],
          address: branches[0].address
        }}
      />

      <section className={heroClasses}>
        <div className="text-center px-6">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 text-white">Get In Touch</h1>
          <p className="text-lg max-w-4xl mx-auto text-gray-300">
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
                    <p className="text-center text-xl font-medium text-green-400">
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
                          <span className={`ml-2 ${textClasses}`}>I agree to the <a href="/privacy-policy" className="text-amber-400 underline">privacy policy</a></span>
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
                      {branches.map((branch, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <FaMapMarkerAlt className={`${iconClasses} mt-1`} />
                          <span>
                            <span className="font-semibold text-amber-400">{branch.name}:</span> <a href={branch.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">{branch.address}</a>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h2 className={`text-4xl font-bold mb-4 ${titleClasses}`}>Connect With Us</h2>
                    <div className="flex space-x-4">
                      <a href="https://www.facebook.com/profile.php?id=61576362964556" className="text-gray-400 hover:text-white"><FaFacebook size={32} /></a>
                      <a href="https://www.instagram.com/kolkatachessacademy/" className="text-gray-400 hover:text-white"><FaInstagram size={32} /></a>
                      <a href="https://www.linkedin.com/company/kolkatachessacademy/?viewAsMember=true" className="text-gray-400 hover:text-white"><FaLinkedin size={32} /></a>
                      <a href="https://wa.me/+919830149852" className="text-gray-400 hover:text-white"><FaWhatsapp size={32} /></a>
                      <a href="https://www.youtube.com/@kolkatachessacademy" className="text-gray-400 hover:text-white"><FaYoutube size={32} /></a>
                    </div>
                  </div>
                  <div>
                    <h2 className={`text-4xl font-bold mb-4 ${titleClasses}`}>Visit Our Branches</h2>
                    {/* Dumdum Branch Map */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-white mb-2">Dumdum Branch</h3>
                      <div id="map-dumdum" className="w-full h-72 rounded-lg shadow-lg relative z-0"></div>
                    </div>
                    {/* Parnasree Branch Map (iframe) */}
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Parnasree Branch</h3>
                      <div className="w-full h-72 rounded-lg shadow-lg relative z-0" style={{overflow:'hidden'}} dangerouslySetInnerHTML={{__html: branches[1].iframe}}></div>
                    </div>
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

export default AspireContact;