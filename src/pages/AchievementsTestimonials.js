import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import CTA from '../components/CTA';

// Sample data for achievements
const achievementsData = [
  {
    title: "State Chess Championship 2023",
    description: "Our student, Anika, won 1st place in the State Chess Championship held in Kolkata.",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "National Level Tournament 2023",
    description: "Rohit secured a remarkable 2nd position in the National Level Tournament.",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "International Chess Olympiad 2022",
    description: "Our academy's team represented India and achieved a bronze medal at the International Chess Olympiad.",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Beginner's Tournament 2023",
    description: "Young chess prodigy, Sam, won 1st place in the Beginner's Tournament.",
    image: "https://via.placeholder.com/300",
  },
];

const testimonials = [
  {
    quote:
      "The Chess Academy has truly transformed my skills. The instructors are passionate and dedicated. I went from a beginner to winning local tournaments in just a few months!",
    name: "John Doe",
    role: "Chess Enthusiast",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "I love the personalized attention I received at the academy. The community is so supportive, and I've made lifelong friends here. Highly recommend it to anyone interested in chess!",
    name: "Jane Smith",
    role: "Student",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      "This academy gave me the tools to excel in competitions. The strategic thinking and problem-solving skills I've developed here extend beyond just chess.",
    name: "Michael Lee",
    role: "Chess Competitor",
    avatar: "https://randomuser.me/api/portraits/men/50.jpg",
  },
];

const AchievementsTestimonials = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-400 text-white py-24 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Student Achievements & Testimonials</h1>
          <p className="text-lg">Celebrating the accomplishments and experiences of our aspirations!</p>
        </div>
      </section>

      {/* Achievements List */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Notable Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievementsData.map((achievement, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                <img src={achievement.image} alt={achievement.title} className="w-full h-48 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-semibold text-purple-600 mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Testimonials</h2>
          
          {/* Responsive Grid for larger screens */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <img
                    className="w-16 h-16 rounded-full mr-4"
                    src={testimonial.avatar}
                    alt={`${testimonial.name}'s avatar`}
                  />
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.quote}</p>
              </div>
            ))}
          </div>

          {/* Swiper Slider for Mobile */}
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className="md:hidden"
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
                      <h4 className="text-xl font-bold text-gray-800">{testimonial.name}</h4>
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

      <CTA/>
    </div>
  );
};

export default AchievementsTestimonials;