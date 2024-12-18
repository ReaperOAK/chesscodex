import React, { useState } from "react";
import CTA from "../components/CTA";

// Data for events
const eventsData = [
  {
    title: "Invitational Inter-Club U-25 Chess Tournament 2024",
    date: "02/10/2024",
    mode: "Offline",
    link: null,
  },
  {
    title: "Invitational Inter-Club U-25 Chess Tournament 2024",
    date: "15/11/2024",
    mode: "Offline",
    link: "https://forms.gle/zBsTohCXppUNCWjU6",
  },
];

const Events = () => {
  const [filter, setFilter] = useState("All");

  // Filter events based on the selected mode
  const filteredEvents = eventsData.filter(
    (event) => filter === "All" || event.mode === filter
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 text-white py-24">
        <div className="absolute inset-0 opacity-20 bg-pattern"></div>
        <div className="max-w-6xl mx-auto px-6 relative text-center">
          <h1 className="text-5xl font-extrabold mb-4">Upcoming Events</h1>
          <p className="text-lg">
            Join us in our exciting tournaments and chess events!
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 border-t">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Explore Events
          </h2>
          <div className="inline-block relative">
            <label
              htmlFor="filter"
              className="absolute left-3 top-2 text-gray-500"
            >
              Filter by Mode
            </label>
            <select
              id="filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="block appearance-none w-56 py-3 pl-10 pr-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-gray-700"
            >
              <option value="All">All</option>
              <option value="Offline">Offline</option>
            </select>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">
            Event Schedule
          </h2>
          {filteredEvents.length === 0 ? (
            <p className="text-center text-gray-500">
              No events available for the selected mode.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
                >
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                      {event.title}
                    </h3>
                    <p className="text-gray-700 mb-1">
                      <strong>Date:</strong> {event.date}
                    </p>
                    <p className="text-gray-700 mb-4">
                      <strong>Mode:</strong> {event.mode}
                    </p>
                    {event.link ? (
                      <a
                        href={event.link}
                        className="block bg-blue-600 text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-blue-500 transition-colors duration-300"
                      >
                        Register Now
                      </a>
                    ) : (
                      <p className="text-center text-gray-500">
                        Registration link not available
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </div>
  );
};

export default Events;
