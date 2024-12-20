import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet';

// Data for events
const eventsData = [
  {
    title: "Invitational Inter-Club U-25 Chess Tournament 2024",
    date: "2024-10-02",
    mode: "Offline",
    link: null,
    image: "/events/event1.jpg",
  },
  {
    title: "Invitational Inter-Club U-25 Chess Tournament 2024",
    date: "2024-11-15",
    mode: "Offline",
    link: "https://forms.gle/zBsTohCXppUNCWjU6",
    image: "/events/event2.jpg",
  },
];

// Data for blogs
const blogsData = [
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
];

const Events = () => {
  const [filter, setFilter] = useState("All");
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000); // Update current date every minute

    return () => clearInterval(interval);
  }, []);

  // Filter events based on the selected mode
  const filteredEvents = eventsData.filter(
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
        <title>Upcoming Events & Blogs - ChessCodex</title>
        <meta name="description" content="Join us in our exciting tournaments and chess events. Check out the schedule and register for upcoming events at ChessCodex. Read our latest blogs on chess strategies and benefits." />
        <meta name="keywords" content="ChessCodex, chess events, chess tournaments, chess schedule, chess competitions, chess blogs, chess strategies" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#200e4a] via-[#461fa3] to-[#7646eb] text-white py-24">
        <div className="absolute inset-0 opacity-20 bg-pattern"></div>
        <div className="max-w-6xl mx-auto px-6 relative text-center">
          <h1 className="text-5xl font-extrabold mb-4">Upcoming Events & Blogs</h1>
          <p className="text-lg">
            Join us in our exciting tournaments and chess events! Read our latest blogs on chess strategies and benefits.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-[#f3f1f9] border-t">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-[#200e4a] mb-6">
            Explore Events
          </h2>
          <div className="inline-block relative">
            <label
              htmlFor="filter"
              className="absolute left-3 top-2 text-[#270185]"
            >
              Filter by Mode
            </label>
            <select
              id="filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="block appearance-none w-56 py-3 pl-10 pr-4 border border-[#c2c1d3] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#461fa3] focus:border-[#461fa3] text-[#270185]"
            >
              <option value="All">All</option>
              <option value="Offline">Offline</option>
              <option value="Online">Online</option>
            </select>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-[#f3f1f9]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#200e4a] mb-10 text-center">
            Event Schedule
          </h2>
          {filteredEvents.length === 0 ? (
            <p className="text-center text-[#270185]">
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
                    <h3 className="text-2xl font-semibold text-[#461fa3] mb-3">
                      {event.title}
                    </h3>
                    <p className="text-[#270185] mb-1">
                      <strong>Date:</strong> {event.date}
                    </p>
                    <p className="text-[#270185] mb-4">
                      <strong>Mode:</strong> {event.mode}
                    </p>
                    {event.link && !isLinkExpired(event.date) ? (
                      <a
                        href={event.link}
                        className="block bg-[#461fa3] text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-[#7646eb] transition-colors duration-300"
                      >
                        Register Now
                      </a>
                    ) : (
                      <p className="text-center text-[#270185]">
                        Registration link unavailable/expired
                      </p>
                    )}
                    <a
                      href="https://kolkatachessacademy.in/events-blogs"
                      className="block text-[#7646eb] text-center mt-4 hover:underline"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Blogs Section */}
      <section className="py-16 bg-[#f3f1f9]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#200e4a] mb-10 text-center">
            Latest Blogs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogsData.map((blog, index) => (
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
                  <h3 className="text-2xl font-semibold text-[#461fa3] mb-3">
                    {blog.title}
                  </h3>
                  <p className="text-[#270185] mb-1">
                    <strong>Date:</strong> {blog.date}
                  </p>
                  <p className="text-[#270185] mb-1">
                    <strong>Author:</strong> {blog.author}
                  </p>
                  <p className="text-[#270185] mb-4">
                    {blog.content.length > 100
                      ? `${blog.content.substring(0, 100)}...`
                      : blog.content}
                  </p>
                  <a
                    href="https://kolkatachessacademy.in/events-blogs"
                    className="block bg-[#461fa3] text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-[#7646eb] transition-colors duration-300"
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