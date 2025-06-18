import React from 'react';
import { useLocation } from 'react-router-dom';

const CTA = () => {
  const location = useLocation();
  const isChessCodex = location.pathname.startsWith('/chesscodex');
  const isAspireChess = location.pathname.startsWith('/aspirechess');
  const siteName = isChessCodex ? 'ChessCodex' : isAspireChess ? 'AspireChess' : 'Kolkata Chess Academy';

  return (
    <section className={`${
      isChessCodex 
        ? 'bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent' 
        : isAspireChess 
        ? 'bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent' 
        : 'bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent'
    } text-white py-16 sm:py-20 px-6`}>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
          Unleash Your Inner Grandmaster
        </h1>
        <p className="text-lg sm:text-xl mb-8 text-white max-w-3xl mx-auto">
          Take your chess skills to the next level with <span className="font-semibold">{siteName}</span>. Join our world-class training programs, designed for all skill levels, and start your journey toward mastery.
        </p>        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <a
            href={isChessCodex ? "/chesscodex/admission" : isAspireChess ? "/aspirechess/admission" : "/contact"}
            aria-label="Enroll Now"
            className={`inline-flex items-center justify-center gap-2 ${
              isChessCodex 
                ? 'bg-brand-highlight hover:bg-brand-highlight/80' 
                : isAspireChess 
                ? 'bg-brand-highlight hover:bg-brand-highlight/80' 
                : 'bg-brand-highlight hover:bg-brand-highlight/80'
            } text-white font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300`}
          >
            <span>🎓 Enroll Now</span>
          </a>
          <a
            href={isChessCodex ? "/chesscodex/contact" : isAspireChess ? "/aspirechess/contact" : "/contact"}
            aria-label="Contact Us"
            className={`inline-flex items-center justify-center gap-2 ${
              isChessCodex 
                ? 'bg-brand-secondary hover:bg-brand-accent' 
                : isAspireChess 
                ? 'bg-brand-secondary hover:bg-brand-accent' 
                : 'bg-brand-secondary hover:bg-brand-accent'
            } text-white font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300`}
          >
            <span>📞 Contact Us</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
