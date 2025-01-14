import React from 'react';
import { Helmet } from 'react-helmet';
import { FaChessKing, FaTrophy } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import WhyChooseUs from '../components/WhyChooseUs';
import Team from '../components/Team';

const About = () => {
  const location = useLocation();
  const isChessCodex = location.pathname.startsWith('/chesscodex');
  const siteName = isChessCodex ? 'ChessCodex' : 'AspireChess';
  const siteDescription = isChessCodex
    ? 'Learn more about ChessCodex, our mission, and our team of expert coaches. Empowering chess enthusiasts to achieve their best.'
    : 'Learn more about AspireChess, our mission, and our team of expert coaches. Empowering chess enthusiasts to achieve their best.';
  const siteKeywords = isChessCodex
    ? 'ChessCodex, Kolkata Chess Academy, chess training, chess coaching, chess courses, chess community'
    : 'AspireChess, chess training, chess coaching, chess courses, chess community';

  return (
    <div>
      <Helmet>
        <title>About Us - {siteName}</title>
        <meta name="description" content={siteDescription} />
        <meta name="keywords" content={siteKeywords} />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#200e4a] via-[#461fa3] to-[#7646eb] text-white py-24">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h1 className="text-5xl font-bold mb-4">About {siteName}</h1>
          <p className="text-lg font-medium text-[#af0505]">{isChessCodex ? 'Striving for 100% Rated Players' : 'Aspiring for 100% Titled Players'}</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-[#f3f1f9]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-4xl font-bold text-[#200e4a] text-center mb-6">
              {isChessCodex
                ? 'Striving to Help All Players Achieve and Improve Their Chess Rating'
                : 'Aspiring to make India the most Titled Heavy Country.'}
            </h2>
            <p className="text-lg text-[#270185] leading-relaxed mb-6">
              {isChessCodex
                ? 'Started out with Kolkata Chess Academy our singular goal was of making India the leading nation in chess titles, ChessCodex is now dedicated to building a community packed with rated players who are prepared for success. Our academy provides structured, professional chess education that supports each student’s unique growth, whether they are absolute beginners or seasoned tournament players.'
                : 'Situated in Dumdum, Aspire Chess Academy was established with a singular goal: to inspire and train future chess champions, and we aim to make India the Most titled Heavy Country, through our structured and professional chess education, focusing on personalized growth for each student, from absolute beginners to seasoned tournament players.'}
            </p>
            <p className="text-lg text-[#270185] leading-relaxed">
              At {siteName}, we are committed to nurturing the next generation of chess champions. Whether you're just starting out, an intermediate player aiming for the next level, or an advanced player looking to master the game, our panel of expert coaches is here to guide you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#200e4a] mb-4">Our Mission & Vision</h2>
            <p className="text-lg text-[#270185]">
              Committed to creating a chess culture that inspires and empowers players worldwide.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
            {/* Mission */}
            <div className="flex-1 bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <FaChessKing className="mx-auto text-6xl text-indigo-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                <span className="font-semibold text-indigo-600">{isChessCodex
                ? 'To make chess a habit!'
                : 'To make chess a habit!'}</span>
                {isChessCodex
                ? ' Cultivate a love for chess through structured programs, fostering critical thinking and creativity in every player.'
                : ' While we understand chess can be very costly at the advanced level, considering the tournament and coaching expenses, we envision a world where chess education is accessible and where every student has the opportunity to shine. Aspire Chess Academy is here to turn that vision into reality by providing the highest standard of chess coaching and fostering a community of passionate players.'}     
              </p>
            </div>
            {/* Vision */}
            <div className="flex-1 bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <FaTrophy className="mx-auto text-6xl text-indigo-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                <span className="font-semibold text-indigo-600">
                {isChessCodex
                ? 'Striving for 100% Rated Players.'
                : 'Aspiring for 100% Titled Players.'}</span>
                {isChessCodex
                ? ' Cultivate a love for chess through structured programs, fostering critical thinking and creativity in every player.'
                : ' Our vision is to ensure that every player reaches their highest potential, achieving excellence in chess.'}                
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 bg-[#f3f1f9]">
        <div className="max-w-6xl mx-auto px-6" id="team">
          <h2 className="text-4xl font-bold text-[#200e4a] text-center mb-12">Meet Our Team</h2>
          <Team />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <WhyChooseUs />
        </div>
      </section>
    </div>
  );
};

export default About;