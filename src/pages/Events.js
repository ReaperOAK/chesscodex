// FILE: src/pages/Events.js
// ACTION: The entire page has been redesigned to be theme-aware, applying the
// 'aspirechess' glassy aesthetic to all sections, cards, and filters.

import React, { useState, useEffect } from "react";
import SEO from '../components/SEO';
import { useLocation } from 'react-router-dom';

// Data for events
const eventsData = [
    { title: "Invitational Inter-Club U-25 Chess Tournament 2024", date: "2024-10-02", mode: "Offline", link: null, image: "/events/2024-10-02.jpg" },
    { title: "Invitational Inter-Club U-25 Chess Tournament 2024", date: "2024-11-15", mode: "Offline", link: "https://forms.gle/zBsTohCXppUNCWjU6", image: "/events/2024-11-15.jpg" },
   ];

// Data for blogs
const blogsData = [
  {
    title: "Chess Blog: PDF Insight",
    date: "2025-07-28",
    author: "AspireChess Team",
    link: "/blogs/1.pdf",
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "View the full blog in PDF format."
  }
];

const Events = () => {
  const location = useLocation();
  // Theme detection only for style, not for data
  const isAspireChess = location.pathname.startsWith('/aspirechess');
  const siteName = isAspireChess ? 'AspireChess' : 'Kolkata Chess Academy';

  const [filter] = useState("All");
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setCurrentDate(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  // Universal data usage
  const events = eventsData;
  const blogs = blogsData;

  const filteredEvents = events.filter(event => filter === "All" || event.mode === filter);
  const isLinkExpired = (date) => new Date(date) < currentDate;

  // --- Theme-Aware Class Definitions ---
  const heroClasses = isAspireChess ? "py-24" : "relative bg-gradient-to-r from-brand-dark via-brand-secondary to-brand-primary text-white py-24";
  const sectionWrapperClasses = isAspireChess ? "py-16 sm:py-24 space-y-20 px-4" : "";
  const titleClasses = isAspireChess ? "text-amber-400" : "text-brand-text";
  const cardClasses = isAspireChess
    ? "bg-black bg-opacity-20 backdrop-blur-sm border border-gray-700/50 rounded-lg shadow-lg overflow-hidden hover:shadow-amber-400/10 transition-all duration-300 group"
    : "bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200";
  const cardTitleClasses = isAspireChess ? "text-white" : "text-brand-secondary";
  const cardTextClasses = isAspireChess ? "text-gray-300" : "text-brand-text";
  const buttonClasses = isAspireChess ? "bg-amber-500 hover:bg-amber-400 text-gray-900" : "bg-brand-secondary hover:bg-brand-primary text-white";

  return (
    <div>
      <SEO
        title={`Upcoming Events & Blogs - ${siteName}`}
        description={`See upcoming chess events, tournaments, and latest blogs from ${siteName}. Register and stay updated!`}
        keywords={isAspireChess ? 'AspireChess, events, chess tournaments, chess blogs' : 'Kolkata Chess Academy, events, chess tournaments, chess blogs'}
        image={isAspireChess ? 'https://kolkatachessacademy.in/aca.png' : 'https://kolkatachessacademy.in/kca.png'}
        url={isAspireChess ? 'https://kolkatachessacademy.in/aspirechess/events-blogs' : 'https://kolkatachessacademy.in/events'}
        type="event"
        canonical={isAspireChess ? 'https://kolkatachessacademy.in/aspirechess/events-blogs' : 'https://kolkatachessacademy.in/events'}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Event',
          name: `${siteName} Events`,
          url: isAspireChess ? 'https://kolkatachessacademy.in/aspirechess/events-blogs' : 'https://kolkatachessacademy.in/events',
          description: `See upcoming chess events, tournaments, and latest blogs from ${siteName}. Register and stay updated!`
        }}
      />

      {/* Hero Section */}
      <section className={heroClasses}>
        <div className="max-w-6xl mx-auto px-6 relative text-center">
          <h1 className="text-5xl font-extrabold mb-4 text-white">Upcoming Events & Blogs</h1>
          <p className="text-lg text-gray-300">
            Join our exciting tournaments and stay updated with our latest articles on chess strategies and benefits.
          </p>
        </div>
      </section>

      <div className={sectionWrapperClasses}>
        {/* Events Section */}
        <section className={isAspireChess ? "" : "py-16 bg-brand-light"}>
          <div className="max-w-6xl mx-auto px-6">
            <h2 className={`text-4xl font-bold text-center mb-10 ${titleClasses}`}>Event Schedule</h2>
            {/* Filter UI can be added here if needed */}
            {filteredEvents.length === 0 ? (
              <p className={`text-center ${cardTextClasses}`}>No events available for the selected mode.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map((event, index) => (
                  <div key={index} className={cardClasses}>
                    <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <h3 className={`text-2xl font-semibold mb-3 ${cardTitleClasses}`}>{event.title}</h3>
                      <p className={`${cardTextClasses} mb-1`}><strong>Date:</strong> {event.date}</p>
                      <p className={`${cardTextClasses} mb-4`}><strong>Mode:</strong> {event.mode}</p>
                      {event.link && !isLinkExpired(event.date) ? (
                        <a href={event.link} className={`block text-center py-2 px-4 rounded-lg font-medium transition-colors duration-300 ${buttonClasses}`}>
                          Register Now
                        </a>
                      ) : (
                        <p className={`text-center font-semibold ${isAspireChess ? 'text-gray-500' : 'text-brand-text'}`}>
                          Registration Closed
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Blogs Section */}
        <section className={isAspireChess ? "" : "py-16 bg-brand-light"}>
          <div className="max-w-6xl mx-auto px-6">
            <h2 className={`text-4xl font-bold text-center mb-10 ${titleClasses}`}>Latest Blogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog, index) => (
                <div key={index} className={cardClasses}>
                  <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className={`text-2xl font-semibold mb-3 ${cardTitleClasses}`}>{blog.title}</h3>
                    <p className={`${cardTextClasses} mb-1`}><strong>Date:</strong> {blog.date}</p>
                    <p className={`${cardTextClasses} mb-4`}><strong>Author:</strong> {blog.author}</p>
                    <p className={`${cardTextClasses} mb-4`}>{blog.content}</p>
                    <a href={blog.link} target="_blank" rel="noopener noreferrer" className={`block text-center py-2 px-4 rounded-lg font-medium transition-colors duration-300 ${buttonClasses}`}>
                      View PDF
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Events;
