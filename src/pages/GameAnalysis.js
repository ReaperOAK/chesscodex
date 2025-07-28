import React from "react";
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';

const GameAnalysis = () => {
  const location = useLocation();
  const isAspireChess = location.pathname.startsWith('/aspirechess');

  // --- Theme-Aware Class Definitions ---
  const sectionClasses = isAspireChess ? "" : "py-16 bg-brand-light";
  const cardClasses = isAspireChess 
    ? "bg-black bg-opacity-20 backdrop-blur-sm border border-gray-700/50 p-6 rounded-lg shadow-lg"
    : "bg-white rounded-lg shadow-md p-6";
  const titleClasses = isAspireChess ? "text-amber-400" : "text-brand-dark";
  const textClasses = isAspireChess ? "text-gray-300" : "text-brand-text";
  const ctaCardClasses = isAspireChess
    ? "bg-black bg-opacity-25 backdrop-blur-md rounded-lg shadow-xl"
    : "bg-brand-dark text-white rounded-lg shadow-md";

  return (
    <section className={sectionClasses}>
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className={`text-3xl font-bold mb-4 ${titleClasses}`}>Game Analysis</h2>
        <p className={`text-lg mb-8 ${textClasses}`}>
          Individual game analysis by FMs, IMs, or even a GM to provide deep insights into your play.
        </p>
        <SEO
          title="Game Analysis - Kolkata Chess Academy"
          description="Deep dive into chess game analysis, strategies, and lessons from Kolkata Chess Academy."
          keywords="chess, game analysis, strategy, lessons, Kolkata Chess Academy"
          image="https://kolkatachessacademy.in/kca.png"
          url="https://kolkatachessacademy.in/exclusives/game-analysis"
          type="article"
          canonical="https://kolkatachessacademy.in/exclusives/game-analysis"
          structuredData={{
            '@context': 'https://schema.org',
            '@type': 'Article',
            name: 'Game Analysis',
            url: 'https://kolkatachessacademy.in/exclusives/game-analysis',
            description: 'Deep dive into chess game analysis, strategies, and lessons from Kolkata Chess Academy.'
          }}
        />
        <div className={cardClasses}>
          <h3 className={`text-2xl font-bold mb-4 ${isAspireChess ? 'text-white' : 'text-brand-dark'}`}>Service Includes:</h3>
          <ul className={`list-disc list-inside text-left space-y-2 ${textClasses}`}>
            <li>In-depth analysis with an overview of each game.</li>
            <li>Assessment of your playing style and areas for improvement.</li>
            <li>Suggestions on specific areas needing immediate attention.</li>
            <li>Personalized book and resource recommendations.</li>
          </ul>
          <h3 className={`text-2xl font-bold mt-6 mb-4 ${isAspireChess ? 'text-white' : 'text-brand-dark'}`}>Time Frame:</h3>
          <p className={`text-left ${textClasses}`}>Approximately one week per batch of games.</p>
        </div>

        {/* Call to Action and Pricing Section */}
        <div className={`mt-12 py-8 px-6 ${ctaCardClasses}`}>
          <h3 className="text-2xl font-bold mb-4 text-white">Ready to Improve Your Game?</h3>
          <p className="text-lg mb-6 text-gray-300">
            Register for our Game Analysis service today for personalized feedback.
          </p>
          <h3 className="text-2xl font-bold mb-6 text-white">Pricing</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className={cardClasses}>
              <h3 className={`text-2xl font-bold mb-2 ${isAspireChess ? 'text-white' : 'text-brand-dark'}`}>5 Games</h3>
              <p className={`text-lg ${textClasses}`}>₹1000</p>
            </div>
            <div className={cardClasses}>
              <h3 className={`text-2xl font-bold mb-2 ${isAspireChess ? 'text-white' : 'text-brand-dark'}`}>10 Games</h3>
              <p className={`text-lg ${textClasses}`}>₹1800</p>
            </div>
          </div>
          <a href="https://forms.gle/6Tb4CTK7sRLW7n1E6" target="_blank" rel="noopener noreferrer" className={`inline-block font-medium py-2 px-6 rounded-lg transition ${isAspireChess ? 'bg-amber-500 text-gray-900 hover:bg-amber-400' : 'bg-brand-primary text-white hover:bg-brand-secondary'}`}>
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default GameAnalysis;