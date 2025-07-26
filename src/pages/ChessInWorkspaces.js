import React from 'react';
import { useLocation } from 'react-router-dom';

const ChessInWorkspaces = () => {
  const location = useLocation();
  const isAspireChess = location.pathname.startsWith('/aspirechess');
  
  const workspaceDetails = [
    { title: "Workshops & Training", details: ["Interactive sessions to hone cognitive and analytical skills."] },
    { title: "Team Building", details: ["Encourage collaboration and camaraderie through chess."] },
    { title: "Corporate Tournaments", details: ["Host engaging tournaments for your organization."] },
  ];

  // --- Theme-Aware Class Definitions ---
  const sectionClasses = isAspireChess ? "" : "py-16 bg-brand-subtle";
  const cardClasses = isAspireChess 
    ? "bg-black bg-opacity-20 backdrop-blur-sm border border-gray-700/50 p-6 rounded-lg shadow-lg"
    : "bg-white text-brand-text rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow";
  const titleClasses = isAspireChess ? "text-amber-400" : "text-brand-dark";
  const textClasses = isAspireChess ? "text-gray-300" : "text-brand-text";
  const ctaCardClasses = isAspireChess
    ? "bg-black bg-opacity-25 backdrop-blur-md rounded-lg shadow-xl"
    : "bg-brand-dark text-white rounded-lg shadow-md";

  return (
    <section className={sectionClasses}>
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className={`text-3xl font-bold mb-4 ${titleClasses}`}>Chess in Workspaces</h2>
        <p className={`text-lg mb-12 ${textClasses}`}>
          Empower employees with chess-based workshops that boost strategic thinking, focus, and teamwork.
        </p>

        <div className={`py-8 px-6 ${ctaCardClasses}`}>
          <h3 className="text-2xl font-bold mb-4 text-white">Ready to Empower Your Workspace?</h3>
          <p className="text-lg mb-6 text-gray-300">
            Contact us today to learn more about our Chess in Workspaces program.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {workspaceDetails.map((item, idx) => (
              <div key={idx} className={cardClasses}>
                <h3 className={`text-2xl font-bold mb-2 ${isAspireChess ? 'text-white' : 'text-brand-dark'}`}>{item.title}</h3>
                <ul className={`text-left list-disc list-inside space-y-1 ${textClasses}`}>
                  {item.details.map((detail, index) => <li key={index}>{detail}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <a href="[https://wa.me/+919830149852](https://wa.me/+919830149852)" className={`inline-block font-medium py-2 px-6 rounded-lg transition ${isAspireChess ? 'bg-amber-500 text-gray-900 hover:bg-amber-400' : 'bg-brand-primary text-white hover:bg-brand-secondary'}`}>
            Enquire Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ChessInWorkspaces;