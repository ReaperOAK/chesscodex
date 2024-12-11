import React from 'react';

const Exclusives = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-24 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Exclusives</h1>
          <p className="text-lg">Unlock exclusive benefits and opportunities with our Pro Membership and Scholarships.</p>
        </div>
      </section>

      {/* Pro Members Section */}
      <section className="py-16 bg-gray-100 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Pro Members</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Pro Members - Kolkata Chess Academy</h3>
            <p className="text-lg text-gray-700 mb-8">
              At Kolkata Chess Academy, we are dedicated to enhancing the quality of chess coaching worldwide. Through our Pro Membership programme, we are trying to regulate the daily chess training at home, with a structured method.
              Our key areas of focus through this Study Method will be Calculation and Strategy with a mix of Endgames, Opening and Psychology.
              Join us in our mission to create structured chess training at home and to set new standards in your career!
            </p>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Offerings</h3>
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg mb-8">
              <h4 className="text-2xl font-bold text-gray-800 mb-2">Calculation Pack</h4>
              <p className="text-gray-700">Structure: 9 curated puzzles divided in 3 levels prepared by a GM.</p>
              <p className="text-gray-700">Frequency: 3 days/ week.</p>
              <p className="text-gray-700">Support: You can self-check the positions.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg mb-8">
              <h4 className="text-2xl font-bold text-gray-800 mb-2">Game Analysis</h4>
              <p className="text-gray-700">Structure: 8 in-depth game modern and classical analysis, with in-game solvable Diagrams.</p>
              <p className="text-gray-700">Frequency: 8 games to analyse, learn & study for a month.</p>
              <p className="text-gray-700">Support: Deep Dive by Titled Players and their personal insights.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg mb-8">
              <h4 className="text-2xl font-bold text-gray-800 mb-2">Hot Topic Summarizations</h4>
              <p className="text-gray-700">Structure: Video explanation Course with Positions- 1 Topic every Month of Beginner & 1 Topic of Intermediate or Advance or Expert Level presented by FM Joydeep Dutta & Arpan Das.</p>
              <p className="text-gray-700">Frequency: 2 Topics every Month</p>
              <p className="text-gray-700">Support: Homework of specific Topics Presented to work at Home.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg mb-8">
              <h4 className="text-2xl font-bold text-gray-800 mb-2">Additional Benefits</h4>
              <p className="text-gray-700">Access to Exclusive Bonus Content.</p>
              <p className="text-gray-700">Access to our exclusive Pro Members Community Forum where we discuss daily ideas around chess!</p>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Pricing and Terms</h3>
            <p className="text-lg text-gray-700 mb-8">Monthly Plan: ₹999 / $14.99</p>
            <p className="text-lg text-gray-700 mb-8">Half-Yearly Plan: ₹4,999 / $74.99</p>
            <p className="text-lg text-gray-700 mb-8">Yearly Plan: ₹8,999 / $134.99</p>
            <a
              href="/subscribe"
              className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
            >
              Subscribe
            </a>
          </div>
        </div>
      </section>

      {/* Scholarships Section */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Scholarships</h2>
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Aspiration of the Month Scholarship</h3>
            <p className="text-lg text-gray-700 mb-8">
              Our "Aspiration of the Month Scholarship" recognizes and supports outstanding students who show exceptional promise and dedication in chess. Each month, one student will be awarded a full scholarship to our Pro Membership.
            </p>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Scholarships Categories</h3>
            <ul className="list-disc list-inside text-left text-gray-700 mb-8">
              <li>For our Young FIDE rated & USCF 1200+ rated Stars:
                <ul className="list-disc list-inside ml-4">
                  <li>One-month free subscription to our “Pro Membership”</li>
                </ul>
              </li>
              <li>For our State Age Group category winners:
                <ul className="list-disc list-inside ml-4">
                  <li>1st & 2nd Rank Holders: Six (6) months free subscription to “Pro Membership”</li>
                  <li>Exclusive 1st Rank Holder: 5 Game Analysis</li>
                  <li>3rd Rank- 2 Months free “Pro Membership”</li>
                  <li>4th Rank- 1 Month free “Pro Membership”</li>
                </ul>
              </li>
              <li>For our National Age Group category winners:
                <ul className="list-disc list-inside ml-4">
                  <li>1st & 2nd Rank Holders: 1 year free subscription to “Pro Membership”</li>
                  <li>Exclusive 1st Rank Holder: Quarterly 5 Game Analysis</li>
                  <li>Exclusive 2nd Rank Holder: 1 time 5 Game Analysis</li>
                  <li>3rd Rank- 6 Months free “Pro Membership” & 1 time 5 Game Analysis</li>
                  <li>4th Rank- 4 Months free “Pro Membership”</li>
                  <li>5th Rank- 2 Months free “Pro Membership”</li>
                </ul>
              </li>
            </ul>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Additional Incentives to both Categories</h3>
            <ul className="list-disc list-inside text-left text-gray-700">
              <li>Achievement Highlight on all our Social Media Platforms</li>
              <li>Personalized Merchandize Gifts</li>
              <li>Selected One free Tournament Registration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Game Analysis Section */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Game Analysis</h2>
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700 mb-8">
              Enhance your chess skills with our comprehensive game analysis service. Our expert coaches will analyze your games, provide detailed feedback, and offer personalized recommendations to help you improve your strategies and performance.
            </p>
            <a
              href="https://forms.gle/6Tb4CTK7sRLW7n1E6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Exclusives;