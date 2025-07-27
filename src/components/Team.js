
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';


// Unified coaches data for both brands
const coaches = [
  { name: 'GM Sayantan Das', role: 'Guest Coach & Opening Expert', image: '/Team/sayantan.jpg', description: `India's 81st GM, is an invaluable part of our coaching team, bringing over two decades of experience and deep opening knowledge.` },
  { name: 'GM Saptarshi Roy Chowdhury', role: 'Chief Advisor & Strategy Maker', image: '/Team/saptarshi.jpg', description: `Grandmaster Saptarshi Roy Chowdhury, with over 15 years of coaching experience, is our chief advisor and strategy maker.` },
  { name: 'IM Somak Palit', role: 'Coach', image: '/Team/somak.jpg', description: `A prominent member of the Indian Railway Chess Team, brings a unique and simplified approach to our academy. His mentorship is invaluable.` },
  { name: 'FM Joydeep Dutta', role: 'Coach', image: '/Team/joydeep.jpg', description: `FM Dutta, with a peak Elo of 2355, has claimed numerous national titles, bringing his prowess to develop various chess talents.` },
  { name: 'Arpan Das', role: 'Coach', image: '/Team/arpan.jpg', description: `A passionate chess player with 13 years of experience, a peak Elo rating of 2423, and two International Master norms. Focuses on youth development.` }
];


const Team = () => {
  const [expandedCoach, setExpandedCoach] = useState(null);
  const location = useLocation();
  const isAspireChess = location.pathname.startsWith('/aspirechess');

  const toggleDescription = (index) => {
    setExpandedCoach(expandedCoach === index ? null : index);
  };

  const highlightTitle = (name) => {
    const titleRegex = /^(GM|IM|FM)/;
    const match = name.match(titleRegex);
    if (match) {
      return (
        <>
          <span className={isAspireChess ? "text-amber-400" : "text-brand-primary"}>{match[0]}</span> {name.replace(titleRegex, '').trim()}
        </>
      );
    }
    return name;
  };

  const cardClasses = isAspireChess
    ? "bg-black bg-opacity-20 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-amber-400/10 transition-all duration-300 group"
    : "bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2";

  const textClasses = isAspireChess ? "text-gray-300 text-sm leading-relaxed" : "text-brand-text text-sm leading-relaxed mb-4";
  const buttonClasses = isAspireChess ? "text-amber-400 hover:text-white font-medium" : "text-brand-primary hover:underline font-medium";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {coaches.map((coach, index) => (
        <div key={index} className={cardClasses}>
          <div className="relative">
            <img
              className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              src={coach.image}
              alt={coach.name}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h2 className="text-2xl font-bold text-white mb-1" style={{textShadow: '0 1px 3px rgba(0,0,0,0.7)'}}>
                {highlightTitle(coach.name)}
              </h2>
              <p className="text-amber-300 font-semibold">{coach.role}</p>
            </div>
          </div>
          <div className="p-6">
            <p className={textClasses}>
              {expandedCoach === index
                ? coach.description
                : `${coach.description.substring(0, 120)}...`}
            </p>
            <button
              onClick={() => toggleDescription(index)}
              className={buttonClasses}
            >
              {expandedCoach === index ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
  