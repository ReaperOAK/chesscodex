import React from "react";
import { Helmet } from 'react-helmet';

const Exclusives = () => {
  return (
    <div>
      <Helmet>
        <title>Exclusives - ChessCodex</title>
        <meta name="description" content="Unlock exclusive benefits with our Pro Membership and Scholarships. Learn more about our exclusive offers and pricing plans." />
        <meta name="keywords" content="ChessCodex, Pro Membership, chess scholarships, chess exclusives, chess benefits, chess pricing" />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold mb-4">Exclusives</h1>
          <p className="text-lg">
            Unlock exclusive benefits with our Pro Membership and Scholarships.
          </p>
        </div>
      </section>

      {/* Sections Wrapper */}
      <div className="bg-gray-50">
        {/* Pro Members Section */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Pro Membership</h2>
            <div className="space-y-8">
              {[
                {
                  title: "Calculation Pack",
                  details: [
                    "9 curated puzzles divided into 3 levels.",
                    "Frequency: 3 days/week.",
                    "Support: Self-check positions.",
                  ],
                },
                {
                  title: "Game Analysis",
                  details: [
                    "8 modern & classical games analyzed monthly.",
                    "Includes solvable in-game diagrams.",
                    "Insights from titled players.",
                  ],
                },
                {
                  title: "Hot Topic Summarizations",
                  details: [
                    "Video courses with monthly topics.",
                    "Frequency: Beginner and advanced topics monthly.",
                    "Includes homework for hands-on learning.",
                  ],
                },
                {
                  title: "Additional Benefits",
                  details: [
                    "Exclusive bonus content.",
                    "Access to a Pro Members Community Forum.",
                  ],
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <ul className="text-left list-disc list-inside text-gray-600 space-y-1">
                    {item.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 bg-indigo-600 text-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Pricing</h2>
            <p className="text-lg mb-8">
              Affordable plans to kickstart your chess journey!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { plan: "Monthly", price: "₹999 / $14.99" },
                { plan: "Half-Yearly", price: "₹4,999 / $74.99" },
                { plan: "Yearly", price: "₹8,999 / $134.99" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white text-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold mb-2">{item.plan} Plan</h3>
                  <p className="text-lg">{item.price}</p>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/+919830149852"
              className="inline-block mt-6 bg-green-500 py-2 px-4 rounded text-white font-medium hover:bg-green-600 transition"
            >
              Subscribe Now
            </a>
          </div>
        </section>

        {/* Scholarships Section */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Scholarships</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold mb-4">
                Aspiration of the Month Scholarship
              </h3>
              <p className="text-gray-600 mb-6">
                Recognizing outstanding students with Pro Membership scholarships.
              </p>
              <ul className="list-disc list-inside text-left space-y-3 text-gray-700">
                <li>
                  <strong>FIDE Rated & USCF 1200+ Stars:</strong> One-month free
                  Pro Membership.
                </li>
                <li>
                  <strong>State Age Group Winners:</strong>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>1st & 2nd: 6 months Pro Membership + Analysis Bonus.</li>
                    <li>3rd: 2 months Pro Membership.</li>
                  </ul>
                </li>
                <li>
                  <strong>National Age Group Winners:</strong>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>1st & 2nd: 1 year Pro Membership + Game Analysis.</li>
                    <li>3rd: 6 months Pro Membership + Game Analysis.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Game Analysis Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Game Analysis</h2>
            <p className="text-lg text-gray-600 mb-6">
              Improve your gameplay with expert feedback and detailed reviews.
            </p>
            <a
              href="https://forms.gle/6Tb4CTK7sRLW7n1E6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 py-2 px-4 rounded text-white hover:bg-blue-700 transition"
            >
              Learn More
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Exclusives;