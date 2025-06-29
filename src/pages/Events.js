import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

// Data for events
const eventsData = {
  chesscodex: [
    {
      title: "Invitational Inter-Club U-25 Chess Tournament 2024",
      date: "2024-10-02",
      mode: "Offline",
      link: null,
      image: "/events/2024-10-02.jpg",
    },
    {
      title: "Invitational Inter-Club U-25 Chess Tournament 2024",
      date: "2024-11-15",
      mode: "Offline",
      link: "https://forms.gle/zBsTohCXppUNCWjU6",
      image: "/events/2024-11-15.jpg",
    },
  ],
  aspirechess: [
    {
      title: "Invitational Inter-Club U-25 Chess Tournament 2024",
      date: "2024-10-02",
      mode: "Offline",
      link: null,
      image: "/events/2024-10-02.jpg",
    },
    {
      title: "Invitational Inter-Club U-25 Chess Tournament 2024",
      date: "2024-11-15",
      mode: "Offline",
      link: "https://forms.gle/zBsTohCXppUNCWjU6",
      image: "/events/2024-11-15.jpg",
    },
  ],
};

// Data for blogs
const blogsData = {
  chesscodex: [
    {
      title: "The Benefits of Chess for Cognitive Development",
      date: "2023-09-01",
      author: "John Doe",
      link: "/blog/benefits-of-chess",
      image: "/blogs/blog1.jpg",
      content: "Chess has been shown to improve cognitive abilities, enhance problem-solving skills, and boost memory. In this blog, we explore the various benefits of chess for cognitive development and how it can positively impact individuals of all ages.",
    },
    {
      title: "Top 10 Chess Strategies for Beginners",
      date: "2023-08-15",
      author: "Jane Smith",
      link: "/blog/top-10-chess-strategies",
      image: "/blogs/blog2.jpg",
      content: "Starting out in chess can be daunting, but with the right strategies, you can quickly improve your game. In this blog, we cover the top 10 chess strategies for beginners to help you get started on the right foot.",
    },
  ],
  aspirechess: [
    {
      title: "How to Improve Your Chess Rating",
      date: "2023-10-01",
      author: "Alice Johnson",
      link: "/blog/improve-chess-rating",
      image: "/blogs/blog3.jpg",
      content: "Improving your chess rating requires dedication, practice, and the right strategies. In this blog, we provide tips and techniques to help you boost your chess rating and achieve your goals.",
    },
    {
      title: "The Importance of Endgame Knowledge",
      date: "2023-11-20",
      author: "Bob Brown",
      link: "/blog/endgame-knowledge",
      image: "/blogs/blog4.jpg",
      content: "Endgame knowledge is crucial for success in chess. In this blog, we discuss the importance of understanding endgame principles and how they can help you win more games.",
    },
  ],
};

const Events = () => {
  const location = useLocation();
  const isChessCodex = location.pathname.startsWith('/chesscodex');
  const siteName = isChessCodex ? 'ChessCodex' : 'AspireChess';
  const siteDescription = isChessCodex
    ? 'Join us in our exciting tournaments and chess events. Check out the schedule and register for upcoming events at ChessCodex. Read our latest blogs on chess strategies and benefits.'
    : 'Join us in our exciting tournaments and chess events. Check out the schedule and register for upcoming events at AspireChess. Read our latest blogs on chess strategies and benefits.';
  const siteKeywords = isChessCodex
    ? 'ChessCodex, chess events, chess tournaments, chess schedule, chess competitions, chess blogs, chess strategies'
    : 'AspireChess, chess events, chess tournaments, chess schedule, chess competitions, chess blogs, chess strategies';

  const [filter, setFilter] = useState("All");
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000); // Update current date every minute

    return () => clearInterval(interval);
  }, []);

  // Filter events based on the selected mode
  const filteredEvents = (isChessCodex ? eventsData.chesscodex : eventsData.aspirechess).filter(
    (event) => filter === "All" || event.mode === filter
  );

  // Check if the event link is expired
  const isLinkExpired = (date) => {
    const eventDate = new Date(date);
    return currentDate > eventDate;
  };

  return (
    <div>
      <Helmet>
        <title>Upcoming Events & Blogs - {siteName}</title>
        <meta name="description" content={siteDescription} />
        <meta name="keywords" content={siteKeywords} />
      </Helmet>      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-dark via-brand-secondary to-brand-primary text-white py-24">
        <div className="absolute inset-0 opacity-20 bg-pattern"></div>
        <div className="max-w-6xl mx-auto px-6 relative text-center">
          <h1 className="text-5xl font-extrabold mb-4">Upcoming Events & Blogs</h1>
          <p className="text-lg">
            Join us in our exciting tournaments and chess events! Read our latest blogs on chess strategies and benefits.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-brand-light border-t">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-brand-text mb-6">
            Explore Events
          </h2>
          <div className="inline-block relative">
            <label
              htmlFor="filter"
              className="absolute -top-3 left-3 bg-brand-light px-2 text-brand-text"
            >
              Filter by Mode
            </label>
            <select
              id="filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="block appearance-none w-56 py-3 pl-3 pr-4 border border-brand-light rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary text-brand-text"
            >
              <option value="All">All</option>
              <option value="Offline">Offline</option>
              <option value="Online">Online</option>
            </select>
          </div>
        </div>
      </section>      {/* Events Section */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-6xl mx-auto px-6">          <h2 className="text-4xl font-bold text-brand-text mb-10 text-center">
            Event Schedule
          </h2>
          {filteredEvents.length === 0 ? (
            <p className="text-center text-brand-text">
              No events available for the selected mode.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-brand-secondary mb-3">
                      {event.title}
                    </h3>
                    <p className="text-brand-text mb-1">
                      <strong>Date:</strong> {event.date}
                    </p>
                    <p className="text-brand-text mb-4">
                      <strong>Mode:</strong> {event.mode}
                    </p>
                    {event.link && !isLinkExpired(event.date) ? (
                      <a
                        href={event.link}
                        className="block bg-brand-secondary text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-brand-primary transition-colors duration-300"
                      >
                        Register Now
                      </a>
                    ) : (
                      <p className="text-center text-brand-text">
                        Registration link unavailable/expired
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>      {/* Blogs Section */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-6xl mx-auto px-6">          <h2 className="text-4xl font-bold text-brand-text mb-10 text-center">
            Latest Blogs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(isChessCodex ? blogsData.chesscodex : blogsData.aspirechess).map((blog, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-brand-secondary mb-3">
                    {blog.title}
                  </h3>                  <p className="text-brand-text mb-1">
                    <strong>Date:</strong> {blog.date}
                  </p>
                  <p className="text-brand-text mb-1">
                    <strong>Author:</strong> {blog.author}
                  </p>
                  <p className="text-brand-text mb-4">
                    {blog.content.length > 100
                      ? `${blog.content.substring(0, 100)}...`
                      : blog.content}
                  </p>
                  <a
                    href={blog.link}
                    className="block bg-brand-secondary text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-brand-primary transition-colors duration-300"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
