import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const coachesData = {
  chesscodex: [
    { name: 'GM Sayantan Das', role: 'Guest Coach & Opening Expert', image: '/Team/sayantan.jpg', description: `India's 81st GM, is an invaluable part of our coaching team, bringing over two decades of elite chess experience and multiple National Championship titles. His role in our academy goes beyond coaching—he meticulously designs and refines opening repertoires that ensure our players are always well-prepared and a step ahead of their opponents.` },
    { name: 'GM Saptarshi Roy Chowdhury', role: 'Chief Advisor & Strategy Maker', image: '/Team/saptarshi.jpg', description: `Grandmaster Saptarshi Roy Chowdhury, with over 15 years of coaching experience, is the strategic mind behind our academy’s success. As Chief Advisor, he focuses on building dynamic, engaging positions that challenge and inspire our students to think deeply about every move.` },
    { name: 'IM Somak Palit', role: 'Coach', image: '/Team/somak.jpg', description: `A prominent member of the Indian Railway Chess Team, brings a unique and simplified approach to our academy. His methodology focuses on distilling vast and often overwhelming chess material into digestible and practical lessons, ensuring that students grasp essential strategies and enjoy chess without feeling overloaded.` },
    { name: 'FM Joydeep Dutta', role: 'Coach', image: '/Team/joydeep.jpg', description: `FM Dutta, with a peak Elo of 2355, has claimed numerous national titles, bringing his prowess to develop various rank holders. With over a decade of coaching experience, his unique approach focuses on identifying each student’s strengths and weaknesses to foster growth.` },
    { name: 'Arpan Das', role: 'Coach', image: '/Team/arpan.jpg', description: `A passionate chess player with 13 years of experience, a peak Elo rating of 2423, and two International Master norms. Formerly ranked among the top 100 Indian players of all time, he has represented India multiple times. Now focusing on coaching, he has already mentored 10+ titled players and national rankholders in a span of 3 years.` },
  ],
  aspirechess: [
    { name: 'GM Niaz Murshed', role: 'Chief Mentor', image: '/Team/niaz.jpg', description: `The first Grandmaster from South Asia, brings his legendary expertise and strategic vision to guide our elite players.` },
    { name: 'GM Saptarshi Roy Chowdhury', role: 'Chief Advisor', image: '/Team/saptarshi.jpg', description: `With over 15 years of coaching experience, he is the strategic mind behind our academy’s success, building dynamic and engaging positions.` },
    { name: 'GM Sayantan Das', role: 'Guest Coach', image: '/Team/sayantan.jpg', description: `India's 81st GM, meticulously designs and refines opening repertoires to keep our players a step ahead.` },
  ],
};

const Team = () => {
  const [expandedCoach, setExpandedCoach] = useState(null);
  const location = useLocation();
  const isAspireChess = location.pathname.startsWith('/aspirechess');
  const coaches = isAspireChess ? coachesData.aspirechess : coachesData.chesscodex;

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
  