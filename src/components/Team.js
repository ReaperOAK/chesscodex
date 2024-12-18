import React, { useState } from 'react';

// Team data
const coaches = [
  {
    name: 'GM Sayantan Das',
    role: 'Guest Coach & Opening Expert',
    image: 'https://cbin.b-cdn.net/img/SA/Sayantan_1TKRS_667x1000.jpeg',
    description: `India's 81st GM, is an invaluable part of our coaching team, bringing over two decades of elite chess experience and multiple National Championship titles. His role in our academy goes beyond coaching—he meticulously designs and refines opening repertoires that ensure our players are always well-prepared and a step ahead of their opponents.`,
  },
  {
    name: 'GM Saptarshi Roy Chowdhury',
    role: 'Chief Advisor & Breakthrough Strategy Maker',
    image: 'https://thechesspedia.net/wp-content/uploads/2020/01/roy_chowdhury_saptarshi.jpg',
    description: `Grandmaster Saptarshi Roy Chowdhury, with over 30 years of coaching experience, is the strategic mind behind our academy’s success. As Chief Advisor, he focuses on building dynamic, engaging positions that challenge and inspire our students to think deeply about every move.`,
  },
  {
    name: 'IM Somak Palit',
    role: 'Coach',
    image: 'https://cbin.b-cdn.net/img/SO/Somak_3_PZXC5_1000x667.jpeg',
    description: `A prominent member of the Indian Railway Chess Team, brings a unique and simplified approach to our academy. His methodology focuses on distilling vast and often overwhelming chess material into digestible and practical lessons, ensuring that students grasp essential strategies and enjoy chess without feeling overloaded.`,
  },
  {
    name: 'FM Joydeep Dutta',
    role: 'Coach',
    image: '/joydeep.jpeg',
    description: `A distinguished coach with a wealth of experience in competitive chess and coaching.`,
  },
  {
    name: 'Arpan Das',
    role: 'Coach',
    image: '/arpan.jpg',
    description: `A passionate chess player with 13 years of experience, a peak Elo rating of 2423, and two International Master norms. Formerly ranked among the top 100 Indian players of all time, he has represented India multiple times. Now focusing on coaching, he has already mentored 10+ titled players and national rankholders in a span of 3 years, guiding them to success.`,
  },
];

// Component
const Team = () => {
  const [expandedCoach, setExpandedCoach] = useState(null);

  const toggleDescription = (index) => {
    setExpandedCoach(expandedCoach === index ? null : index);
  };

  const highlightTitle = (name) => {
    const titleRegex = /^(GM|IM|FM)/;
    const match = name.match(titleRegex);
    if (match) {
      return (
        <>
          <span className="text-blue-500">{match[0]}</span> {name.replace(titleRegex, '').trim()}
        </>
      );
    }
    return name;
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-10">Meet Our Expert Coaches</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {coaches.map((coach, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent opacity-20"></div>
              <img
                className="w-full h-64 object-cover"
                src={coach.image}
                alt={coach.name}
              />
              <div className="p-6 relative z-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {highlightTitle(coach.name)}
                </h3>
                <p className="text-blue-600 font-semibold mb-4">{coach.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {expandedCoach === index
                    ? coach.description
                    : `${coach.description.substring(0, 120)}...`}
                </p>
                <button
                  onClick={() => toggleDescription(index)}
                  className="text-blue-500 hover:underline font-medium"
                >
                  {expandedCoach === index ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;