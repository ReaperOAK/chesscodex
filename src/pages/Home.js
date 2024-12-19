import React from 'react';
import { Helmet } from 'react-helmet';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import WhyChooseUs from '../components/WhyChooseUs';

const benefits = [
  "Helps in Problem Solving & Memory Retention",
  "Assured Positive Impact in Academic Performance",
  "Enhances Creativity, Analytical and Critical Thinking",
  "Improves Focus & Time Management",
  "Stimulates Growth of Neuron Dendrites",
  "Can be therapeutic for people dealing with anxiety, ADHD, and other mental health conditions.",
];

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div>
      <Helmet>
        <title>Home - ChessCodex</title>
        <meta name="description" content="Welcome to ChessCodex. Elevate your chess skills with expert training and comprehensive courses." />
        <meta name="keywords" content="ChessCodex, chess training, chess courses, chess coaching, chess academy" />
      </Helmet>
      {/* Benefits Slider */}
      <div className="bg-gray-700 text-white py-2">
        <Slider {...sliderSettings}>
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <p className="text-lg">{benefit}</p>
            </div>
          ))}
        </Slider>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 via-blue-800 to-indigo-900 text-white py-24 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Welcome to ChessCodex</h1>
          <p className="text-lg mb-4">Building the Future of Chess Excellence</p>
          <p className="text-md mb-6 max-w-3xl mx-auto">
            Started with Kolkata Chess Academy, we now strive to create a community of rated players, enhancing their skills through world-class coaching and resources.
          </p>
          <a
            href="/admission"
            className="bg-yellow-500 text-gray-800 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-400 transition duration-300"
          >
            Join ChessCodex Today
          </a>
        </div>
      </section>

      {/* About Section */}
      <WhyChooseUs />

      {/* Scholarship Programs Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Scholarship Programs</h2>
          <p className="text-lg mb-6 text-gray-600">
            Recognizing talent and hard work, we offer scholarships to support dedicated students with exceptional potential in chess.
          </p>
          <a
            href="/exclusives"
            className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-500 transition duration-300"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Pro Members Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Pro Members</h2>
          <p className="text-lg mb-6 text-gray-600">
            Unlock premium benefits such as exclusive content, personalized coaching, and advanced resources by becoming a Pro Member.
          </p>
          <a
            href="/exclusives"
            className="bg-green-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-green-500 transition duration-300"
          >
            Join Pro Membership
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">What Our Students Say</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              "“ChessCodex made learning chess accessible and enjoyable. Highly recommended!” - Sarah K.",
              "“The online sessions are engaging, and the tutors are exceptional!” - David L.",
              "“ChessCodex helped me master chess without leaving my home!” - Emily R.",
            ].map((testimonial, index) => (
              <blockquote
                key={index}
                className="italic text-gray-700 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                {testimonial}
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborate Section */}
      <section className="bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Collaborate with Us</h2>
          <p className="text-lg mb-6">
            Partner with ChessCodex to promote chess and create a meaningful impact in the community.
          </p>
          <a
            href="/collaborate-with-us"
            className="bg-yellow-500 text-gray-800 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-400 transition duration-300"
          >
            View Brochure
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;