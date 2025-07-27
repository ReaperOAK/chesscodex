// FILE: src/pages/AchievementsTestimonials.js
// ACTION: The entire page has been redesigned to be theme-aware, applying the
// 'aspirechess' glassy aesthetic to all sections, cards, and the modal.

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { useLocation } from 'react-router-dom';
import 'swiper/swiper-bundle.css';

// Universal achievements and testimonials
const achievementsData = [
  { title: "Adreesh Dey's International FIDE Rating", description: "Big Congratulations to Adreesh Dey! We are thrilled to share that our student, Adreesh Dey, has achieved his first international FIDE rating of 1589! ...", image: "/Achievements/1.jpg" }
];

const testimonials = [
  { quote: "If you’re serious about improving your chess skills, I wholeheartedly recommend Arpan Sir and Joydeep Sir [Aspire Chess Academy]. None came close to what I’ve gained under Arpan Sir and Joydeep Sir. Before them, I struggled with positional understanding, planning, and other fundamentals. Here, I’m learning these every day along with so much more. What sets them apart is their friendly and approachable teaching style, which bridges the usual gap between a coach and a student, which makes learning enjoyable and breaks the usual coach-student barrier. They also provide practice sessions that have helped me a lot. I’m truly grateful for their guidance.", name: "Dhruv Kar", role: "Chess Enthusiast", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUPrloGLYTtuRAB7qTnRTnQ35fAmk1NEaxWqTQhbUML5qX5Ovg=w108-h108-p-rp-mo-br100" },
  { quote: "Players get wonderful exposure here and get a chance to play with quality players who are high rated who also frequently visit the sessions. The sessions are conducted in a friendly environment and constant learning. My experience was wonderful. Highly recommended.", name: "Megha Patra", role: "Chess Enthusiast", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXGUStEJ5_047_ExA4qYJj3KThVcb6HJ9aSLMdoEFxw6WvUFLI=w108-h108-p-rp-mo-br100" }
];

const Modal = ({ achievement, onClose, isAspireChess }) => {
    const modalBgClasses = isAspireChess
    ? "bg-gray-900 bg-opacity-70 backdrop-blur-md border border-gray-700"
    : "bg-white";
  const titleClasses = isAspireChess ? "text-amber-400" : "text-brand-text";
  const textClasses = isAspireChess ? "text-gray-300" : "text-brand-text";
  const buttonClasses = isAspireChess
    ? "bg-amber-500 text-gray-900 hover:bg-amber-400"
    : "bg-brand-primary text-white hover:bg-brand-secondary";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className={`${modalBgClasses} rounded-lg shadow-2xl p-6 w-11/12 max-w-2xl animate-fadeIn`}>
        <img src={achievement.image} alt={achievement.title} className="w-full h-auto max-h-64 object-contain rounded-md mb-4" />
        <h3 className={`text-2xl font-bold mb-4 ${titleClasses}`}>{achievement.title}</h3>
        <p className={`${textClasses} mb-2 font-medium`}>{achievement.description}</p>
        <div className="mt-6 text-right">
          <button onClick={onClose} className={`px-4 py-2 rounded font-semibold transition-colors duration-300 ${buttonClasses}`}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const AchievementsTestimonials = () => {
  const location = useLocation();
  const isAspireChess = location.pathname.startsWith('/aspirechess');
  const siteName = isAspireChess ? 'AspireChess' : 'Kolkata Chess Academy';

  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const openModal = (achievement) => setSelectedAchievement(achievement);
  const closeModal = () => setSelectedAchievement(null);

  // Use universal data for both variants
  const currentAchievements = achievementsData;
  const currentTestimonials = testimonials;

  // --- Theme-Aware Class Definitions ---
  const heroClasses = isAspireChess ? "py-20 text-center" : "bg-gradient-to-r from-brand-dark via-brand-secondary to-brand-primary text-white py-20 text-center";
  const sectionWrapperClasses = isAspireChess ? "py-16 sm:py-24 space-y-20 px-4" : "";
  const titleClasses = isAspireChess ? "text-amber-400" : "text-brand-dark";
  const textClasses = isAspireChess ? "text-gray-300" : "text-brand-text";
  const cardClasses = isAspireChess
    ? "group bg-black bg-opacity-20 backdrop-blur-sm border border-gray-700/50 p-6 rounded-lg shadow-lg hover:shadow-amber-400/10 transform hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col justify-between"
    : "group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col justify-between";
  const cardTitleClasses = isAspireChess ? "text-white group-hover:text-amber-300" : "text-brand-primary group-hover:text-brand-secondary";

  return (
    <div>
      <Helmet>
        <title>Achievements & Testimonials - {siteName}</title>
        {/* Meta tags */}
      </Helmet>

      {/* Hero Section */}
      <section className={heroClasses}>
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-white">Achievements & Testimonials</h1>
          <p className={`text-lg ${textClasses}`}>
            Celebrating our students' success stories and heartfelt experiences.
          </p>
        </div>
      </section>

      <div className={sectionWrapperClasses}>
        {/* Achievements Section */}
        <section className={isAspireChess ? "" : "py-16 bg-brand-light"}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className={`text-4xl font-bold text-center mb-12 ${titleClasses}`}>
              Celebrating Notable Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {currentAchievements.map((achievement, index) => (
                <div key={index} className={cardClasses} onClick={() => openModal(achievement)}>
                  <div>
                    <img src={achievement.image} alt={achievement.title} className="w-full h-48 object-cover rounded-md mb-4" />
                    <h3 className={`text-xl font-semibold ${cardTitleClasses}`}>{achievement.title}</h3>
                    <p className={`${textClasses} mt-2`}>
                      {`${achievement.description.substring(0, 120)}...`}
                    </p>
                  </div>
                  <div className="mt-4">
                    <button className={`font-medium ${isAspireChess ? 'text-amber-400 hover:underline' : 'text-brand-secondary hover:underline'}`}>
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={isAspireChess ? "" : "bg-gradient-to-r from-brand-light via-brand-accent to-brand-light py-16"}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className={`text-4xl font-bold text-center mb-12 ${titleClasses}`}>
              What Our Students Say
            </h2>
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              breakpoints={{ 1024: { slidesPerView: 2 }, 1440: { slidesPerView: 3 } }}
              className="pb-12" // Add padding for pagination bullets
            >
              {currentTestimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className={`${cardClasses} min-h-[220px]`}>
                    <div className="flex items-center mb-4">
                      <img className="w-16 h-16 rounded-full mr-4 border-2 border-amber-400/50" src={testimonial.avatar} alt={`${testimonial.name}'s avatar`} />
                      <div>
                        <h4 className={`text-xl font-bold ${isAspireChess ? 'text-white' : 'text-brand-dark'}`}>{testimonial.name}</h4>
                        <p className={isAspireChess ? 'text-amber-300' : 'text-brand-primary'}>{testimonial.role}</p>
                      </div>
                    </div>
                    <p className={textClasses}>"{testimonial.quote}"</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </div>

      {selectedAchievement && <Modal achievement={selectedAchievement} onClose={closeModal} isAspireChess={isAspireChess} />}
    </div>
  );
};

export default AchievementsTestimonials;
