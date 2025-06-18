import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import WhyChooseUs from '../components/WhyChooseUs';

const SiteHome = () => {
  const location = useLocation();
  const isChessCodex = location.pathname.startsWith('/chesscodex');
  const isAspireChess = location.pathname.startsWith('/aspirechess');
  const siteName = isChessCodex ? 'ChessCodex' : isAspireChess ? 'AspireChess' : 'Kolkata Chess Academy';
  const siteDescription = isChessCodex
    ? 'Welcome to ChessCodex. Elevate your chess skills with expert training and comprehensive courses.'
    : isAspireChess
    ? 'Welcome to AspireChess. Elevate your chess skills with expert training and comprehensive courses.'
    : 'Welcome to Kolkata Chess Academy. Elevate your chess skills with expert training and comprehensive courses.';
  const siteKeywords = isChessCodex
    ? 'ChessCodex, chess training, chess courses, chess coaching, chess academy'
    : isAspireChess
    ? 'AspireChess, chess training, chess courses, chess coaching, chess academy'
    : 'Kolkata Chess Academy, chess training, chess courses, chess coaching, chess academy';

  return (
    <div>
      <Helmet>
        <title>Home - {siteName}</title>
        <meta name="description" content={siteDescription} />
        <meta name="keywords" content={siteKeywords} />
      </Helmet>

      {/* Hero Section */}
      <section className={`${
        isChessCodex 
          ? 'bg-gradient-to-r from-codex-primary via-codex-secondary to-codex-accent' 
          : isAspireChess 
          ? 'bg-gradient-to-r from-aspire-primary via-aspire-secondary to-aspire-accent' 
          : 'bg-gradient-to-r from-kca-primary via-kca-secondary to-kca-accent'
      } text-white py-24 text-center`}>
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Welcome to {siteName}</h1>
          <p className={`text-lg mb-4 ${
            isChessCodex 
              ? 'text-codex-highlight' 
              : isAspireChess 
              ? 'text-aspire-highlight' 
              : 'text-kca-highlight'
          }`}>{isChessCodex ? 'Striving for 100% Rated Players' : isAspireChess ? 'Aspiring for 100% Titled Players' : 'Striving for 100% Rated Players'}</p>
          <p className="text-md mb-6 max-w-3xl mx-auto">
            {isChessCodex
              ? 'Started with Kolkata Chess Academy, we now strive to create a community of rated players, enhancing their skills through world-class coaching and resources.'
              : isAspireChess
              ? 'AspireChess aims to create a community of rated players, enhancing their skills through world-class coaching and resources.'
              : 'Started as Kolkata Chess Academy, we strive to create a community of rated players, enhancing their skills through world-class coaching and resources.'}
          </p>
          <a
            href={isChessCodex ? "/chesscodex/admission" : isAspireChess ? "/aspirechess/admission" : "/contact"}
            className={`${
              isChessCodex 
                ? 'bg-codex-highlight hover:bg-codex-highlight/80' 
                : isAspireChess 
                ? 'bg-aspire-highlight hover:bg-aspire-highlight/80' 
                : 'bg-kca-highlight hover:bg-kca-highlight/80'
            } text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300`}
          >
            Join {siteName} Today
          </a>
        </div>
      </section>

      {/* About Section */}
      <WhyChooseUs />

      {/* Scholarship Programs Section */}
      <section className={`${
        isChessCodex 
          ? 'bg-gradient-to-r from-codex-secondary via-codex-accent to-codex-primary' 
          : isAspireChess 
          ? 'bg-gradient-to-r from-aspire-secondary via-aspire-accent to-aspire-primary' 
          : 'bg-gradient-to-r from-kca-secondary via-kca-accent to-kca-primary'
      } text-white py-20`}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Scholarship Programs</h2>
          <p className="text-lg mb-6">
            Recognizing talent and hard work, we offer scholarships to support dedicated students with exceptional potential in chess.
          </p>
          <a
            href={isChessCodex ? "/chesscodex/exclusives/scholarships" : isAspireChess ? "/aspirechess/exclusives/scholarships" : "/contact"}
            className={`${
              isChessCodex 
                ? 'bg-codex-highlight hover:bg-codex-highlight/80' 
                : isAspireChess 
                ? 'bg-aspire-highlight hover:bg-aspire-highlight/80' 
                : 'bg-kca-highlight hover:bg-kca-highlight/80'
            } text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300`}
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className={`${
        isChessCodex 
          ? 'bg-gradient-to-r from-codex-accent via-codex-secondary to-codex-primary' 
          : isAspireChess 
          ? 'bg-gradient-to-r from-aspire-accent via-aspire-secondary to-aspire-primary' 
          : 'bg-gradient-to-r from-kca-accent via-kca-secondary to-kca-primary'
      } text-white py-20`}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Collaborate with Us</h2>
          <p className="text-lg mb-6">
            Partner with {siteName} to promote chess and create a meaningful impact in the community.
          </p>
          <a
            href={isChessCodex ? "/chesscodex/collaborate-with-us" : isAspireChess ? "/aspirechess/collaborate-with-us" : "/collaborate-with-us"}
            className={`${
              isChessCodex 
                ? 'bg-codex-highlight hover:bg-codex-highlight/80' 
                : isAspireChess 
                ? 'bg-aspire-highlight hover:bg-aspire-highlight/80' 
                : 'bg-kca-highlight hover:bg-kca-highlight/80'
            } text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300`}
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`${
        isChessCodex 
          ? 'bg-codex-bg-light' 
          : isAspireChess 
          ? 'bg-aspire-bg-light' 
          : 'bg-kca-bg-light'
      } py-20`}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className={`text-4xl font-bold mb-6 ${
            isChessCodex 
              ? 'text-codex-primary' 
              : isAspireChess 
              ? 'text-aspire-primary' 
              : 'text-kca-primary'
          }`}>What Our Students Say</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              `"${siteName} made learning chess accessible and enjoyable. Highly recommended!" - Sarah K.`,
              `"The online sessions are engaging, and the tutors are exceptional!" - David L.`,
              `"${siteName} helped me master chess without leaving my home!" - Emily R.`,
            ].map((testimonial, index) => (
              <blockquote
                key={index}
                className={`italic ${
                  isChessCodex 
                    ? 'text-codex-text-dark' 
                    : isAspireChess 
                    ? 'text-aspire-text-dark' 
                    : 'text-kca-text-dark'
                } bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300`}
              >
                {testimonial}
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Pro Members Section */}
      <section className={`${
        isChessCodex 
          ? 'bg-gradient-to-r from-codex-primary via-codex-secondary to-codex-accent' 
          : isAspireChess 
          ? 'bg-gradient-to-r from-aspire-primary via-aspire-secondary to-aspire-accent' 
          : 'bg-gradient-to-r from-kca-primary via-kca-secondary to-kca-accent'
      } text-white py-20`}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Pro Members</h2>
          <p className="text-lg mb-6">
            Unlock premium benefits such as exclusive content, personalized coaching, and advanced resources by becoming a Pro Member.
          </p>
          <a
            href={isChessCodex ? "/chesscodex/exclusives/pro-membership" : isAspireChess ? "/aspirechess/exclusives/pro-membership" : "/contact"}
            className={`${
              isChessCodex 
                ? 'bg-codex-highlight hover:bg-codex-highlight/80' 
                : isAspireChess 
                ? 'bg-aspire-highlight hover:bg-aspire-highlight/80' 
                : 'bg-kca-highlight hover:bg-kca-highlight/80'
            } text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300`}
          >
            Join Pro Membership
          </a>
        </div>
      </section>
    </div>
  );
};

export default SiteHome;