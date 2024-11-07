import React from 'react';
import { FaChessKing, FaTrophy } from 'react-icons/fa';
import CTA from '../components/CTA';
import WhyChooseUs from '../components/WhyChooseUs';
import Newsletter from '../components/Newsletter';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-24 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">About ChessCodex</h1>
          <p className="text-lg">Striving for 100% rated players</p>
        </div>
      </section>

      {/* New Content Section */}
      <section className="py-16 bg-gray-100 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Striving to Help All Players Achieve and Improve Their Chess Rating</h2>
            <p className="text-lg text-gray-700 mb-4">
              Started out with Kolkata Chess Academy, our singular goal was of making India the leading nation in chess titles. ChessCodex is now dedicated to building a community packed with rated players who are prepared for success. Our academy provides structured, professional chess education that supports each student’s unique growth, whether they are absolute beginners or seasoned tournament players.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              At ChessCodex, we are committed to nurturing the next generation of chess champions. Whether you're just starting out, an intermediate player aiming for the next level, or an advanced player looking to master the game, our panel of expert coaches is here to guide you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Mission & Vision</h2>
          </div>
          <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="flex-1 bg-white p-8 shadow-lg rounded-lg text-center">
              <FaChessKing className="mx-auto text-5xl text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Mission</h3>
              <p className="text-gray-600">To make chess a Habit! Foster an environment to develop a passion for the game through a structured and goal-oriented course of action, and squeeze the best potential out of the young minds.</p>
            </div>
            <div className="flex-1 bg-white p-8 shadow-lg rounded-lg text-center">
              <FaTrophy className="mx-auto text-5xl text-indigo-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Vision</h3>
              <p className="text-gray-600">Striving for 100% Rated Players. Striving to Help All Players Achieve and Improve Their Chess Rating.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs/>
      <CTA/>

      {/* Newsletter Subscription */}
      <Newsletter/>
    </div>
  );
};

export default About;