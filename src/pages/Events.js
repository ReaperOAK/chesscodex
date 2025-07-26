// FILE: src/pages/Events.js
// ACTION: The entire page has been redesigned to be theme-aware, applying the
// 'aspirechess' glassy aesthetic to all sections, cards, and filters.

import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

// Data for events
const eventsData = {
  chesscodex: [
    { title: "Invitational Inter-Club U-25 Chess Tournament 2024", date: "2024-10-02", mode: "Offline", link: null, image: "/events/2024-10-02.jpg" },
    { title: "Invitational Inter-Club U-25 Chess Tournament 2024", date: "2024-11-15", mode: "Offline", link: "https://forms.gle/zBsTohCXppUNCWjU6", image: "/events/2024-11-15.jpg" },
  ],
  aspirechess: [
    { title: "Invitational Inter-Club U-25 Chess Tournament 2024", date: "2024-10-02", mode: "Offline", link: null, image: "/events/2024-10-02.jpg" },
    { title: "Invitational Inter-Club U-25 Chess Tournament 2024", date: "2024-11-15", mode: "Offline", link: "https://forms.gle/zBsTohCXppUNCWjU6", image: "/events/2024-11-15.jpg" },
  ],
};

// Data for blogs
const blogsData = {
  chesscodex: [
    { title: "The Benefits of Chess for Cognitive Development", date: "2023-09-01", author: "John Doe", link: "/blog/benefits-of-chess", image: "https://placehold.co/600x400/7646eb/FFF?text=Blog", content: "Chess has been shown to improve cognitive abilities, enhance problem-solving skills, and boost memory..." },
    { title: "Top 10 Chess Strategies for Beginners", date: "2023-08-15", author: "Jane Smith", link: "/blog/top-10-chess-strategies", image: "https://placehold.co/600x400/461fa3/FFF?text=Blog", content: "Starting out in chess can be daunting, but with the right strategies, you can quickly improve your game..." },
  ],
  aspirechess: [
    { title: "How to Improve Your Chess Rating", date: "2023-10-01", author: "Alice Johnson", link: "/blog/improve-chess-rating", image: "https://placehold.co/600x400/374151/FFF?text=Blog", content: "Improving your chess rating requires dedication, practice, and the right strategies..." },
    { title: "The Importance of Endgame Knowledge", date: "2023-11-20", author: "Bob Brown", link: "/blog/endgame-knowledge", image: "https://placehold.co/600x400/6B7280/FFF?text=Blog", content: "Endgame knowledge is crucial for success in chess. In this blog, we discuss the importance of understanding endgame principles..." },
  ],
};

const Events = () => {
  const location = useLocation();
  const isAspireChess = location.pathname.startsWith('/aspirechess');
  const siteName = isAspireChess ? 'AspireChess' : 'ChessCodex';

  const [filter] = useState("All");
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setCurrentDate(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  const events = isAspireChess ? eventsData.aspirechess : eventsData.chesscodex;
  const blogs = isAspireChess ? blogsData.aspirechess : blogsData.chesscodex;

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
      <Helmet>
        <title>Upcoming Events & Blogs - {siteName}</title>
        {/* Meta tags */}
      </Helmet>

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
                    <p className={`${cardTextClasses} mb-4`}>
                      {blog.content.length > 100 ? `${blog.content.substring(0, 100)}...` : blog.content}
                    </p>
                    <a href={blog.link} className={`block text-center py-2 px-4 rounded-lg font-medium transition-colors duration-300 ${buttonClasses}`}>
                      Read More
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
