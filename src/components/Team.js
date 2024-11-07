import React, { useState } from 'react';

const coaches = [
  {
    name: 'GM Niaz Murshed',
    role: 'Coach',
    image: '/niaz.jpg',
    description: `A pioneering figure in chess education and the first Grandmaster of Asia.`,
  },
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
    image: 'https://s3-ap-southeast-1.amazonaws.com/tv-prod/photo/27349-large.jpg',
    description: `A distinguished coach with a wealth of experience in competitive chess and coaching.`,
  },
  {
    name: 'Arpan Das',
    role: 'Coach',
    image: '/arpan.jpg',
    description: `A passionate chess player with 13 years of experience, a peak Elo rating of 2423, and two International Master norms. Formerly ranked among the top 100 Indian players of all time, he has represented India multiple times. Now focusing on coaching he has already mentored 10+ titled players and national rankholders in a span of 3 years, guiding them to success. His approach emphasizes the fusion of chess literature with the calculative side of the game.`,
  },
];

const Team = () => {
  const [expandedCoach, setExpandedCoach] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedCoach(expandedCoach === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coaches.map((coach, index) => (
            <div key={index} className="bg-white p-6 shadow-lg rounded-lg">
              <img
                className="w-24 h-24 rounded-full mx-auto mb-4"
                src={coach.image}
                alt={coach.name}
              />
              <h3 className="text-xl font-bold text-gray-800">{coach.name}</h3>
              <p className="text-gray-600 mb-4">{coach.role}</p>
              <p className="text-gray-600">
                {expandedCoach === index ? coach.description : `${coach.description.substring(0, 100)}...`}
              </p>
              <button
                className="text-blue-500 mt-2"
                onClick={() => toggleReadMore(index)}
              >
                {expandedCoach === index ? "Read Less" : "Read More"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;