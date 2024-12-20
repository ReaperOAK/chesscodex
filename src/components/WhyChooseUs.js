import React from 'react';
import Slider from 'react-slick';
import { FaBook, FaCrown, FaChalkboardTeacher, FaTasks, FaClipboardCheck, FaFileAlt, FaMedal, FaUsers, FaTrophy } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextArrow, PrevArrow } from './CustomArrows';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaBook className="text-blue-500 text-4xl mb-2" />,
      title: "Comprehensive Curriculum",
      description: "Syllabus designed by GM Niaz Murshed to provide a holistic chess education.",
      link: "/courses",
    },
    {
      icon: <FaCrown className="text-yellow-500 text-4xl mb-2" />,
      title: "Expert Coaching Panel",
      description: "Led by IM Somak Palit, FM Joydeep Dutta, and IM-elect Arpan Das for personalized mentorship.",
      link: "/about",
    },
    {
      icon: <FaChalkboardTeacher className="text-green-500 text-4xl mb-2" />,
      title: "Top Tier Guidance",
      description: "Insights and techniques from GM Saptarshi Roychowdhury and GM Sayantan Das.",
      link: "/about",
    },
    {
      icon: <FaTasks className="text-red-500 text-4xl mb-2" />,
      title: "Weekly Practice Classes",
      description: "Interactive sessions to refine your strategies and enhance performance.",
      link: "/courses",
    },
    {
      icon: <FaClipboardCheck className="text-purple-500 text-4xl mb-2" />,
      title: "Regular Homeworks",
      description: "Engaging assignments and puzzles to keep you challenged and motivated.",
      link: "/courses",
    },
    {
      icon: <FaFileAlt className="text-indigo-500 text-4xl mb-2" />,
      title: "Internal Assessments",
      description: "Track progress through structured assessments and advance to higher batches.",
      link: "/courses",
    },
    {
      icon: <FaFileAlt className="text-pink-500 text-4xl mb-2" />,
      title: "Detailed Report Card",
      description: "Receive personalized feedback to identify strengths and areas for growth.",
      link: "/courses",
    },
    {
      icon: <FaMedal className="text-orange-500 text-4xl mb-2" />,
      title: "Achievement Recognition",
      description: "Celebrate your milestones and achievements with certificates and awards.",
      link: "/achievements-testimonials",
    },
    {
      icon: <FaUsers className="text-teal-500 text-4xl mb-2" />,
      title: "Community Support",
      description: "Join our community forum to discuss ideas, share experiences, and get support from fellow chess enthusiasts.",
      link: "https://chat.whatsapp.com/ClWJgf6t1v1LPDhs7NqpCI",
    },
    {
      icon: <FaTrophy className="text-gold-500 text-4xl mb-2" />,
      title: "Tournament Participation",
      description: "Participate in local and international tournaments to test your skills and gain experience.",
      link: "/events-blogs",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-20 bg-gradient-to-r from-[#f3f1f9] via-white to-[#f3f1f9]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-extrabold mb-6 text-[#200e4a]">Why Choose ChessCodex?</h1>
        <p className="text-lg mb-12 text-[#270185]">
          At ChessCodex, we empower chess enthusiasts with unparalleled coaching, a world-class curriculum, and the tools needed to succeed at any level.
        </p>
        <Slider {...sliderSettings}>
          {features.map((feature, index) => (
            <NavLink
              key={index}
              to={feature.link}
              className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-md transform hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center items-center mb-2">
                {feature.icon}
              </div>
              <h2 className="text-lg font-semibold text-[#200e4a] mb-2">{feature.title}</h2>
              <p className="text-[#270185] text-center text-sm">{feature.description}</p>
            </NavLink>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WhyChooseUs;