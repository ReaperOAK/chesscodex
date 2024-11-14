import React from 'react';
import WhyChooseUs from '../components/WhyChooseUs';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-600 text-white py-20 text-center relative">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Welcome to ChessCodex</h1>
          <p className="text-lg font-semibold mb-4">Striving for 100% Rated Players</p>
          <p className="text-md max-w-3xl mx-auto">Striving to Help All Players Achieve and Improve Their Chess Rating</p>
          <p className="mt-6 text-lg">Started out with Kolkata Chess Academy, our singular goal was to make India a leading nation in chess titles. ChessCodex is now dedicated to building a community packed with rated players prepared for success.</p>
          <a href="/admission" className="mt-8 inline-block bg-yellow-500 text-gray-800 font-semibold py-3 px-6 rounded-lg shadow hover:bg-yellow-400 transition duration-300">Join ChessCodex Today</a>
        </div>
        <div className="absolute top-0 right-0 mt-2 mr-6 bg-gray-700 bg-opacity-75 p-6 rounded-lg shadow-lg max-w-xs hidden lg:block">
          <h2 className="text-2xl font-bold mb-4">Benefits of Chess</h2>
          <ul className="text-left text-gray-300 space-y-2">
            <li>Helps in Problem Solving & Memory Retention</li>
            <li>Assured Positive Impact in Academic Performance</li>
            <li>Enhances Creativity, Analytical and Critical Thinking</li>
            <li>Improves Focus & Time Management</li>
            <li>Stimulates Growth of Neuron Dendrites</li>
            <li>Can be therapeutic for people dealing with anxiety, ADHD, and other mental health conditions.</li>
          </ul>
        </div>
      </section>

      {/* About Section */}
      <WhyChooseUs/>
      {/* Scholarship Programs Section */}
      <section className="bg-gray-100 py-20 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Scholarship Programs</h2>
          <p className="text-lg mb-8">
            We believe in recognizing talent and hard work. Our scholarship program supports exceptional students who show promise and dedication in chess.
          </p>
          <a href="/exclusives" className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-blue-500 transition duration-300">Learn More</a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">What Our Students Say</h2>
          <div className="space-y-6">
            <blockquote className="italic text-lg">
              “ChessCodex made learning chess accessible and enjoyable. Highly recommended!” - Sarah K.
            </blockquote>
            <blockquote className="italic text-lg">
              “The online sessions are engaging, and the tutors are exceptional!” - David L.
            </blockquote>
            <blockquote className="italic text-lg">
              “ChessCodex helped me master chess without leaving my home!” - Emily R.
            </blockquote>
          </div>
        </div>
      </section>
      <CTA/>
      
    </div>
  );
};

export default Home;