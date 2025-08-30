import React, { useState } from 'react';
import SEO from '../../components/SEO';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { achievementsData, testimonials, coaches, mentorLinks } from '../../data';

const Modal = ({ achievement, onClose }) => {
  const modalBgClasses = "bg-black bg-opacity-70 backdrop-blur-md border border-gray-700";
  const titleClasses = "text-cyan-400";
  const textClasses = "text-slate-200";
  const buttonClasses = "bg-cyan-500 text-white hover:bg-cyan-400";

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
  const siteName = 'Kolkata Chess Academy';
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const openModal = (achievement) => setSelectedAchievement(achievement);
  const closeModal = () => setSelectedAchievement(null);

  const currentAchievements = achievementsData;
  const currentTestimonials = testimonials;

  // Use transparent glassy pattern like Aspire pages so background shows through
  const heroClasses = "py-20 text-center";
  const sectionWrapperClasses = "py-16 sm:py-24 space-y-20 px-4";
  const titleClasses = "text-cyan-400";
  const textClasses = "text-slate-200";
  const cardClasses = "group bg-black bg-opacity-20 backdrop-blur-sm border border-gray-700/50 p-6 rounded-lg shadow-lg hover:shadow-cyan-400/10 transform hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col justify-between";
  const cardTitleClasses = "text-white group-hover:text-cyan-400";

  return (
    <div>
      <SEO
        title={`Achievements & Testimonials - ${siteName}`}
        description={`See achievements and testimonials from students and parents at ${siteName}. Success stories and reviews.`}
        keywords={'Kolkata Chess Academy, achievements, testimonials, chess success stories'}
        image={'https://kolkatachessacademy.in/kca.png'}
        url={'https://kolkatachessacademy.in/achievements-testimonials'}
        type="article"
      />

      <section className={heroClasses}>
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-white">Achievements & Testimonials</h1>
          <p className={`text-lg text-slate-300`}>
            Celebrating our students' success stories and heartfelt experiences.
          </p>
        </div>
      </section>

      <div>
        <section className={sectionWrapperClasses}>
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
                    <button className="font-medium text-cyan-400 hover:underline">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mentors Section */}
        <section>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className={`text-4xl font-bold text-center mb-8 ${titleClasses}`}>
              Meet Our Mentors
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-6">
              {coaches.map((coach, idx) => (
                <div key={idx} className={`${cardClasses} p-4`}>
                  <div className="flex items-start gap-4">
                    <img src={coach.image} alt={coach.name} className="w-20 h-20 rounded-md object-cover border" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">{coach.name}</h3>
                      <p className="text-cyan-300 text-sm">{coach.role}</p>
                      <p className={`${textClasses} mt-2 text-sm`}>{coach.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Mentor Media & Articles</h3>
              <ul className="space-y-2">
                {mentorLinks.map((m, i) => (
                  <li key={i}>
                    <a className="text-cyan-300 hover:underline" href={m.url} target="_blank" rel="noopener noreferrer">{m.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

  <section>
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
              className="pb-12"
            >
              {currentTestimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className={`${cardClasses} min-h-[220px]`}>
                    <div className="flex items-center mb-4">
                      <img className="w-16 h-16 rounded-full mr-4 border-2 border-cyan-400/50" src={testimonial.avatar} alt={`${testimonial.name}'s avatar`} />
                      <div>
                        <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                        <p className="text-cyan-400">{testimonial.role}</p>
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

      {selectedAchievement && <Modal achievement={selectedAchievement} onClose={closeModal} />}
    </div>
  );
};

export default AchievementsTestimonials;
