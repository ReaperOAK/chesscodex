import React from 'react';
import { Helmet } from 'react-helmet';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import CTA from '../components/CTA';

// Sample data for achievements
const achievementsData = [
  {
    title: "State Chess Championship 2023",
    description: "Anika won 1st place in the State Chess Championship in Kolkata.",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "National Level Tournament 2023",
    description: "Rohit secured 2nd position in the National Level Tournament.",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "International Chess Olympiad 2022",
    description: "Our team represented India and achieved bronze at the Olympiad.",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Beginner's Tournament 2023",
    description: "Young prodigy Sam clinched 1st place in the Beginner's Tournament.",
    image: "https://via.placeholder.com/300",
  },
];

const testimonials = [
  {
    quote:
      "The Chess Academy transformed my skills. I went from beginner to tournament winner in months!",
    name: "John Doe",
    role: "Chess Enthusiast",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "I love the personalized attention here. The supportive community is a game changer!",
    name: "Jane Smith",
    role: "Student",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      "This academy gave me tools to excel in competitions and beyond. Highly recommended!",
    name: "Michael Lee",
    role: "Chess Competitor",
    avatar: "https://randomuser.me/api/portraits/men/50.jpg",
  },
];

const AchievementsTestimonials = () => {
  return (
    <div>
      <Helmet>
        <title>Achievements & Testimonials - ChessCodex</title>
        <meta name="description" content="Celebrating our students' success stories and heartfelt experiences at ChessCodex. Learn about our notable achievements and read testimonials from our students." />
        <meta name="keywords" content="ChessCodex, chess achievements, chess testimonials, chess success stories, chess training, chess coaching" />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-400 text-white py-20 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Achievements & Testimonials</h1>
          <p className="text-lg">
            Celebrating our students' success stories and heartfelt experiences.
          </p>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Celebrating Notable Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {achievementsData.map((achievement, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2"
              >
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-indigo-600 group-hover:text-indigo-800">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 mt-2">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
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
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <img
                      className="w-16 h-16 rounded-full mr-4"
                      src={testimonial.avatar}
                      alt={`${testimonial.name}'s avatar`}
                    />
                    <div>
                      <h4 className="text-xl font-bold text-gray-800">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">{testimonial.quote}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default AchievementsTestimonials;