import React, { useState } from 'react';
import { FaChessKing, FaTrophy, FaUsers } from 'react-icons/fa';

const About = () => {
  // State to manage the visibility of coach details
  const [isCoach1Expanded, setIsCoach1Expanded] = useState(false);
  const [isCoach2Expanded, setIsCoach2Expanded] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-24 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">About Our Chess Academy</h1>
          <p className="text-lg">Sharpening minds and nurturing champions since 2010.</p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Mission & Vision</h2>
            <p className="text-lg text-gray-600">To cultivate strategic thinking and excellence in the art of chess, fostering both personal growth and competitive success.</p>
          </div>
          <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="flex-1 bg-white p-8 shadow-lg rounded-lg text-center">
              <FaChessKing className="mx-auto text-5xl text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Mission</h3>
              <p className="text-gray-600">To provide top-tier chess education to students of all ages, promoting critical thinking, problem-solving, and a love for the game.</p>
            </div>
            <div className="flex-1 bg-white p-8 shadow-lg rounded-lg text-center">
              <FaTrophy className="mx-auto text-5xl text-indigo-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Vision</h3>
              <p className="text-gray-600">To nurture the next generation of chess champions by creating a learning environment that values dedication, creativity, and perseverance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <img
                className="w-24 h-24 rounded-full mx-auto mb-4"
                src="/arpan.jpg"
                alt="Coach 1"
              />
              <h3 className="text-xl font-bold text-gray-800">Arpan Das</h3>
              <p className="text-gray-600">
                A passionate chess player with 13 years of experience, a peak Elo rating of 2423, and two International Master norms. 
                {isCoach1Expanded ? (
                  <span>
                    Formerly ranked among the top 100 Indian players of all time, he has represented India multiple times. Now focusing on coaching he has already mentored 10+ titled players and national rankholders in a span of 3 years, guiding them to success. His approach emphasizes the fusion of chess literature with the calculative side of the game.
                  </span>
                ) : (
                  <span> Formerly ranked among the top 100 Indian players. </span>
                )}
              </p>
              <button
                className="text-blue-500 mt-2"
                onClick={() => setIsCoach1Expanded(!isCoach1Expanded)}
              >
                {isCoach1Expanded ? "Read Less" : "Read More"}
              </button>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <img
                className="w-24 h-24 rounded-full mx-auto mb-4"
                src="/niaz.jpg"
                alt="Coach 2"
              />
              <h3 className="text-xl font-bold text-gray-800">Grandmaster Niaz Murshed</h3>
              <p className="text-gray-600">
                A pioneering figure in chess education and the first Grandmaster of Asia.
                {isCoach2Expanded ? (
                  <span> Detailed biography of Coach 2 goes here.</span>
                ) : (
                  <span> A pioneering figure in chess education. </span>
                )}
              </p>
              <button
                className="text-blue-500 mt-2"
                onClick={() => setIsCoach2Expanded(!isCoach2Expanded)}
              >
                {isCoach2Expanded ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Choose Us?</h2>
          <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="flex-1 bg-white p-8 shadow-lg rounded-lg text-center">
              <FaChessKing className="mx-auto text-5xl text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Expert Coaches</h3>
              <p className="text-gray-600">Our coaches are highly experienced, with years of competitive play and coaching expertise.</p>
            </div>
            <div className="flex-1 bg-white p-8 shadow-lg rounded-lg text-center">
              <FaUsers className="mx-auto text-5xl text-indigo-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Community of Learners</h3>
              <p className="text-gray-600">We foster a community where students can learn, practice, and grow together in a supportive environment.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
