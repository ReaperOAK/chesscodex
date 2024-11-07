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
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Benefits</h3>
            <ul className="list-disc list-inside text-left text-gray-700 mb-8">
              <li>Access to exclusive content and resources</li>
              <li>Priority support and coaching</li>
              <li>Discounts on courses and events</li>
              <li>Monthly webinars and Q&A sessions</li>
            </ul>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Pricings</h3>
            <p className="text-lg text-gray-700 mb-8">Join our Pro Membership for just $29.99/month or $299.99/year.</p>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Offerings</h3>
            <ul className="list-disc list-inside text-left text-gray-700">
              <li>Exclusive video tutorials and articles</li>
              <li>Personalized game analysis</li>
              <li>Access to private forums and community</li>
              <li>Special invitations to events and tournaments</li>
            </ul>
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
          </div>
        </div>
      </section>

      {/* PrimeChess Beginner Merit Test Section */}
      <section className="py-16 bg-gray-100 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">PrimeChess Beginner Merit Test</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700 mb-8">
              PrimeChess Beginner Merit Test is a quick MCQ-type Online assessment for kids aged 6 to 13. It is a simple test that evaluates the logical reasoning and visual puzzle-solving skills of the candidate. The test consists of 25 to 30 questions and the candidate must score 50% or above to be eligible for the scholarship.
            </p>
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2">Code</th>
                  <th className="py-2">Exam Title</th>
                  <th className="py-2">Questions</th>
                  <th className="py-2">Duration</th>
                  <th className="py-2">Exam</th>
                  <th className="py-2">Start Now</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">MERIT10</td>
                  <td className="py-2">PrimeChess Beginner Merit Test</td>
                  <td className="py-2">30</td>
                  <td className="py-2">30 Min</td>
                  <td className="py-2">Online</td>
                  <td className="py-2">
                    <a
                      href="https://somelink.com"
                      className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
                    >
                      Start Test
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
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
              href="/game-analysis"
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