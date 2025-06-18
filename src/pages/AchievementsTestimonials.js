import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { useLocation } from 'react-router-dom';
import 'swiper/swiper-bundle.css';

const achievementsData = {
  chesscodex: [
    {
      title: "Adreesh Dey's International FIDE Rating",
      description: "Big Congratulations to Adreesh Dey! We are thrilled to share that our student, Adreesh Dey, has achieved his first international FIDE rating of 1589! Starting from scratch just a year ago in our beginners’ group, Adreesh’s dedication and hard work, combined with Aspire Academy’s structured methodology, have brought him to this wonderful milestone. Adreesh’s journey is a testament to what determination and the right guidance can achieve. Here’s to many more achievements and growth ahead! Keep up the great work, Adreesh! We are proud of you! 🎉🏆♟",
      image: "/Achievements/1.jpg",
    },
  ],
  aspirechess: [
    {
      title: "Adreesh Dey's International FIDE Rating",
      description: "Big Congratulations to Adreesh Dey! We are thrilled to share that our student, Adreesh Dey, has achieved his first international FIDE rating of 1589! Starting from scratch just a year ago in our beginners’ group, Adreesh’s dedication and hard work, combined with Aspire Academy’s structured methodology, have brought him to this wonderful milestone. Adreesh’s journey is a testament to what determination and the right guidance can achieve. Here’s to many more achievements and growth ahead! Keep up the great work, Adreesh! We are proud of you! 🎉🏆♟",
      image: "/Achievements/1.jpg",
    },
  ],
};

const testimonials = {
  chesscodex: [
    {
      quote: "The Chess Academy transformed my skills. I went from beginner to tournament winner in months!",
      name: "John Doe",
      role: "Chess Enthusiast",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      quote: "I love the personalized attention here. The supportive community is a game changer!",
      name: "Jane Smith",
      role: "Student",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      quote: "This academy gave me tools to excel in competitions and beyond. Highly recommended!",
      name: "Michael Lee",
      role: "Chess Competitor",
      avatar: "https://randomuser.me/api/portraits/men/50.jpg",
    },
  ],
  aspirechess: [
    {
      quote: "AspireChess Academy has been a game changer for me. The coaches are top-notch!",
      name: "Alice Johnson",
      role: "Chess Enthusiast",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      quote: "The community at AspireChess is incredibly supportive. I've learned so much!",
      name: "Bob Brown",
      role: "Student",
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      quote: "Thanks to AspireChess, I've improved my game and won several tournaments!",
      name: "Charlie Davis",
      role: "Chess Competitor",
      avatar: "https://randomuser.me/api/portraits/men/47.jpg",
    },
  ],
};

const Modal = ({ achievement, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-2xl animate-fadeIn">
        <img
          src={achievement.image}
          alt={achievement.title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />        <h3 className="text-2xl font-bold mb-4 text-brand-text">{achievement.title}</h3>
        <p className="text-brand-text mb-2 font-medium">{achievement.description}</p>
        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="bg-brand-primary text-white px-4 py-2 rounded hover:bg-brand-secondary transition-colors duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const AchievementsTestimonials = () => {
  const location = useLocation();
  const isChessCodex = location.pathname.startsWith('/chesscodex');
  const siteName = isChessCodex ? 'ChessCodex' : 'AspireChess';
  const siteDescription = isChessCodex
    ? 'Celebrating our students\' success stories and heartfelt experiences at ChessCodex. Learn about our notable achievements and read testimonials from our students.'
    : 'Celebrating our students\' success stories and heartfelt experiences at AspireChess. Learn about our notable achievements and read testimonials from our students.';
  const siteKeywords = isChessCodex
    ? 'ChessCodex, chess achievements, chess testimonials, chess success stories, chess training, chess coaching'
    : 'AspireChess, chess achievements, chess testimonials, chess success stories, chess training, chess coaching';

  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const openModal = (achievement) => setSelectedAchievement(achievement);
  const closeModal = () => setSelectedAchievement(null);

  const currentAchievements = isChessCodex ? achievementsData.chesscodex : achievementsData.aspirechess;
  const currentTestimonials = isChessCodex ? testimonials.chesscodex : testimonials.aspirechess;

  return (
    <div>
      <Helmet>
        <title>Achievements & Testimonials - {siteName}</title>
        <meta name="description" content={siteDescription} />
        <meta name="keywords" content={siteKeywords} />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-dark via-brand-secondary to-brand-primary text-white py-20 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Achievements & Testimonials</h1>
          <p className="text-lg">
            Celebrating our students' success stories and heartfelt experiences.
          </p>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-brand-light">        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-brand-dark mb-12">
            Celebrating Notable Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {currentAchievements.map((achievement, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                onClick={() => openModal(achievement)}
              >
                <div>
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold text-brand-primary group-hover:text-brand-secondary">
                    {achievement.title}
                  </h3>
                  <p className="text-brand-text mt-2 group-hover:hidden">
                    {achievement.description.length > 120
                      ? `${achievement.description.substring(0, 120)}...`
                      : achievement.description}
                  </p>
                  <p className="hidden group-hover:block text-brand-text mt-2">
                    {achievement.description}
                  </p>
                </div>
                <div className="mt-4">
                  <button className="text-brand-secondary hover:underline font-medium">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-r from-brand-light via-brand-accent to-brand-light py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">          <h2 className="text-4xl font-bold text-center text-brand-dark mb-12">
            What Our Students Say
          </h2>

          {/* Swiper Slider for all screens */}
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
              1440: { slidesPerView: 3 },
            }}
            className="flex items-center"
          >
            {currentTestimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <img
                      className="w-16 h-16 rounded-full mr-4"
                      src={testimonial.avatar}
                      alt={`${testimonial.name}'s avatar`}
                    />
                    <div>
                      <h4 className="text-xl font-bold text-brand-dark">
                        {testimonial.name}
                      </h4>
                      <p className="text-brand-primary">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-brand-text">{testimonial.quote}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Modal */}
      {selectedAchievement && <Modal achievement={selectedAchievement} onClose={closeModal} />}
    </div>
  );
};

export default AchievementsTestimonials;