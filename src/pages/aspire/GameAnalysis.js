
import React from "react";
import SEO from '../../components/SEO';


const AspireGameAnalysis = () => {
  // Aspire theme only
  const sectionClasses = "";
  const cardClasses = "bg-black bg-opacity-20 backdrop-blur-sm border border-gray-700/50 p-6 rounded-lg shadow-lg";
  const titleClasses = "text-amber-400";
  const textClasses = "text-gray-300";
  const ctaCardClasses = "bg-black bg-opacity-25 backdrop-blur-md rounded-lg shadow-xl";

  return (
    <section className={sectionClasses}>
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className={`text-3xl font-bold mb-4 ${titleClasses}`}>Game Analysis</h2>
        <p className={`text-lg mb-8 ${textClasses}`}>
          Individual game analysis by FMs, IMs, or even a GM to provide deep insights into your play.
        </p>
        <SEO
          title="Game Analysis - AspireChess"
          description="Deep dive into chess game analysis, strategies, and lessons from AspireChess."
          keywords="chess, game analysis, strategy, lessons, AspireChess"
          image="https://kolkatachessacademy.in/aca.png"
          url="https://kolkatachessacademy.in/aspirechess/exclusives/game-analysis"
          type="article"
          canonical="https://kolkatachessacademy.in/aspirechess/exclusives/game-analysis"
          structuredData={{
            '@context': 'https://schema.org',
            '@type': 'Article',
            name: 'Game Analysis',
            url: 'https://kolkatachessacademy.in/aspirechess/exclusives/game-analysis',
            description: 'Deep dive into chess game analysis, strategies, and lessons from AspireChess.'
          }}
        />
        <div className={cardClasses}>
          <h3 className="text-2xl font-bold mb-4 text-white">Service Includes:</h3>
          <ul className={`list-disc list-inside text-left space-y-2 ${textClasses}`}>
            <li>In-depth analysis with an overview of each game.</li>
            <li>Assessment of your playing style and areas for improvement.</li>
            <li>Suggestions on specific areas needing immediate attention.</li>
            <li>Personalized book and resource recommendations.</li>
          </ul>
          <h3 className="text-2xl font-bold mt-6 mb-4 text-white">Time Frame:</h3>
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
              <h3 className="text-2xl font-bold mb-2 text-white">5 Games</h3>
              <p className={`text-lg ${textClasses}`}>₹1000</p>
            </div>
            <div className={cardClasses}>
              <h3 className="text-2xl font-bold mb-2 text-white">10 Games</h3>
              <p className={`text-lg ${textClasses}`}>₹1800</p>
            </div>
          </div>
          <a href="https://forms.gle/6Tb4CTK7sRLW7n1E6" target="_blank" rel="noopener noreferrer" className="inline-block font-medium py-2 px-6 rounded-lg transition bg-amber-500 text-gray-900 hover:bg-amber-400">
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default AspireGameAnalysis;