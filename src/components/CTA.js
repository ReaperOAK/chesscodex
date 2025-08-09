import React from 'react';
import { useLocation } from 'react-router-dom';

const CTA = () => {
  const location = useLocation();
  const isAspireChess = location.pathname.startsWith('/aspirechess');
  const siteName = isAspireChess ? 'AspireChess' : 'Kolkata Chess Academy';

  // Visually distinct background for CTA section
 const sectionClasses = isAspireChess
    ? "py-16 sm:py-20 px-relative py-16 sm:py-20 px-6 flex justify-center items-center"
    : "bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent text-white py-16 sm:py-20 px-6";

  const containerClasses =
    "max-w-4xl mx-auto text-center " +
    (isAspireChess
      ? " bg-white bg-opacity-5 backdrop-blur-sm rounded-xl border-2 border-amber-400 rounded-2xl p-10 shadow-xl"
      : "");

  return (
    <section className={sectionClasses}>
      {/* Gradient overlay for highlight effect */}

      <div className={containerClasses} style={{ position: "relative", zIndex: 1 }}>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight text-white">
          Unleash Your Inner Grandmaster
        </h1>
        <p className="text-lg sm:text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
          Take your chess skills to the next level with <span className="font-semibold text-amber-300">{siteName}</span>. Join our world-class training programs, designed for all skill levels, and start your journey toward mastery.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <a
            href={isAspireChess ? "/aspirechess/admission" : "/kca/admission"}
            aria-label="Enroll Now"
            className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-900 font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300"
          >
            <span>🎓 Enroll Now</span>
          </a>
          <a
            href={isAspireChess ? "/aspirechess/contact" : "/kca/contact"}
            aria-label="Contact Us"
            className="inline-flex items-center justify-center gap-2 bg-gray-600 hover:bg-gray-500 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300"
          >
            <span>📞 Contact Us</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;