import React from 'react';
import { FaChessKing, FaTrophy } from 'react-icons/fa';
import CTA from '../components/CTA';
import WhyChooseUs from '../components/WhyChooseUs';
import Team from '../components/Team';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-24">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h1 className="text-5xl font-bold mb-4">About ChessCodex</h1>
          <p className="text-lg font-medium">Shaping the Future of Chess Excellence</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
              Empowering Chess Enthusiasts to Achieve Their Best
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Founded as the <span className="font-semibold text-blue-600">Kolkata Chess Academy</span>, our mission has always been to place India on the global chess map. Now known as ChessCodex, we remain committed to creating a strong chess community of rated players, fostering talent, and unlocking potential.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you're a beginner discovering the game, an intermediate player aiming to improve, or a seasoned competitor sharpening your skills, our expert coaches will guide you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Mission & Vision</h2>
            <p className="text-lg text-gray-600">
              Committed to creating a chess culture that inspires and empowers players worldwide.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
            {/* Mission */}
            <div className="flex-1 bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <FaChessKing className="mx-auto text-6xl text-indigo-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                <span className="font-semibold text-indigo-600">To make chess a habit!</span> 
                Cultivate a love for chess through structured programs, fostering critical thinking and creativity in every player.
              </p>
            </div>
            {/* Vision */}
            <div className="flex-1 bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <FaTrophy className="mx-auto text-6xl text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                <span className="font-semibold text-blue-600">Striving for 100% Rated Players.</span> 
                Our vision is to ensure that every player reaches their highest potential, achieving excellence in chess.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Meet Our Team</h2>
          <Team />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <WhyChooseUs />
        </div>
      </section>

      {/* Call-to-Action */}
      <CTA />
    </div>
  );
};

export default About;
