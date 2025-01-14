import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import WhyChooseUs from '../components/WhyChooseUs';

const SiteHome = () => {
  const location = useLocation();
  const isChessCodex = location.pathname.startsWith('/chesscodex');
  const siteName = isChessCodex ? 'ChessCodex' : 'AspireChess';
  const siteDescription = isChessCodex
    ? 'Welcome to ChessCodex. Elevate your chess skills with expert training and comprehensive courses.'
    : 'Welcome to AspireChess. Elevate your chess skills with expert training and comprehensive courses.';
  const siteKeywords = isChessCodex
    ? 'ChessCodex, chess training, chess courses, chess coaching, chess academy'
    : 'AspireChess, chess training, chess courses, chess coaching, chess academy';

  return (
    <div>
      <Helmet>
        <title>Home - {siteName}</title>
        <meta name="description" content={siteDescription} />
        <meta name="keywords" content={siteKeywords} />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#200e4a] via-[#461fa3] to-[#7646eb] text-white py-24 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Welcome to {siteName}</h1>
          <p className="text-lg mb-4 text-[#af0505]">{isChessCodex ? 'Striving for 100% Rated Players' : 'Aspiring for 100% Titled Players'}</p>
          <p className="text-md mb-6 max-w-3xl mx-auto">
            {isChessCodex
              ? 'Started with Kolkata Chess Academy, we now strive to create a community of rated players, enhancing their skills through world-class coaching and resources.'
              : 'AspireChess aims to create a community of rated players, enhancing their skills through world-class coaching and resources.'}
          </p>
          <a
            href={isChessCodex ? "/chesscodex/admission" : "/aspirechess/admission"}
            className="bg-[#af0505] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-[#8c0404] transition duration-300"
          >
            Join {siteName} Today
          </a>
        </div>
      </section>

      {/* About Section */}
      <WhyChooseUs />

      {/* Scholarship Programs Section */}
      <section className="bg-gradient-to-r from-[#461fa3] via-[#7646eb] to-[#200e4a] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Scholarship Programs</h2>
          <p className="text-lg mb-6">
            Recognizing talent and hard work, we offer scholarships to support dedicated students with exceptional potential in chess.
          </p>
          <a
            href={isChessCodex ? "/chesscodex/exclusives/scholarships" : "/aspirechess/exclusives/scholarships"}
            className="bg-[#af0505] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-[#8c0404] transition duration-300"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="bg-gradient-to-r from-[#7646eb] via-[#461fa3] to-[#200e4a] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Collaborate with Us</h2>
          <p className="text-lg mb-6">
            Partner with ChessCodex to promote chess and create a meaningful impact in the community.
          </p>
          <a
            href={isChessCodex ? "/chesscodex/collaborate-with-us" : "/aspirechess/collaborate-with-us"}
            className="bg-[#af0505] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-[#8c0404] transition duration-300"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#f3f1f9] py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-[#200e4a]">What Our Students Say</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              "“ChessCodex made learning chess accessible and enjoyable. Highly recommended!” - Sarah K.",
              "“The online sessions are engaging, and the tutors are exceptional!” - David L.",
              "“ChessCodex helped me master chess without leaving my home!” - Emily R.",
            ].map((testimonial, index) => (
              <blockquote
                key={index}
                className="italic text-[#270185] bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                {testimonial}
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Pro Members Section */}
      <section className="bg-gradient-to-r from-[#200e4a] via-[#461fa3] to-[#7646eb] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Pro Members</h2>
          <p className="text-lg mb-6">
            Unlock premium benefits such as exclusive content, personalized coaching, and advanced resources by becoming a Pro Member.
          </p>
          <a
            href={isChessCodex ? "/chesscodex/exclusives/pro-membership" : "/aspirechess/exclusives/pro-membership"}
            className="bg-[#af0505] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-[#8c0404] transition duration-300"
          >
            Join Pro Membership
          </a>
        </div>
      </section>
    </div>
  );
};

export default SiteHome;