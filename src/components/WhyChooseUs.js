import React from 'react';
import Slider from 'react-slick';
import { FaBook, FaCrown, FaChalkboardTeacher, FaTasks, FaClipboardCheck, FaFileAlt, FaMedal, FaUsers, FaTrophy } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextArrow, PrevArrow } from './CustomArrows';

const WhyChooseUs = () => {
  const location = useLocation();
  const isChessCodex = location.pathname.startsWith('/chesscodex');
  const isAspireChess = location.pathname.startsWith('/aspirechess');
  const siteName = isChessCodex ? 'ChessCodex' : isAspireChess ? 'AspireChess' : 'Kolkata Chess Academy';

  const highlightedFeatures = [    {      icon: <FaBook className="text-brand-secondary text-4xl mb-2" />,
      title: "Comprehensive Curriculum",
      description: "Syllabus designed by GM Niaz Murshed to provide a holistic chess education.",
      link: isChessCodex ? "/chesscodex/courses" : isAspireChess ? "/aspirechess/courses" : "/contact",
    },
    {      icon: <FaChalkboardTeacher className="text-brand-accent text-4xl mb-2" />,
      title: "Top Tier Guidance",
      description: "Insights and techniques from GM Saptarshi Roychowdhury and GM Sayantan Das.",
      link: isChessCodex ? "/chesscodx/about#team" : isAspireChess ? "/aspirechess/about#team" : "/about#team",
    },
    {      icon: <FaCrown className="text-brand-highlight text-4xl mb-2" />,
      title: "Expert Coaching Panel",
      description: "Led by IM Somak Palit, FM Joydeep Dutta, and IM-elect Arpan Das for personalized mentorship.",
      link: isChessCodex ? "/chesscodex/about#team" : isAspireChess ? "/aspirechess/about#team" : "/about#team",
    },
  ];

  const features = [    {
      icon: <FaTasks className="text-brand-secondary text-4xl mb-2" />,
      title: "Weekly Practice Classes",
      description: "Interactive sessions to refine your strategies and enhance performance.",
      link: isChessCodex ? "/chesscodex/courses" : "/aspirechess/courses",
    },
    {
      icon: <FaClipboardCheck className="text-brand-accent text-4xl mb-2" />,
      title: "Regular Homeworks",
      description: "Engaging assignments and puzzles to keep you challenged and motivated.",
      link: isChessCodex ? "/chesscodex/courses" : "/aspirechess/courses",
    },
    {
      icon: <FaFileAlt className="text-brand-primary text-4xl mb-2" />,
      title: "Internal Assessments",
      description: "Track progress through structured assessments and advance to higher batches.",
      link: isChessCodex ? "/chesscodex/courses" : "/aspirechess/courses",
    },
    {
      icon: <FaFileAlt className="text-brand-highlight text-4xl mb-2" />,
      title: "Detailed Report Card",
      description: "Receive personalized feedback to identify strengths and areas for growth.",
      link: isChessCodex ? "/chesscodex/courses" : "/aspirechess/courses",
    },
    {
      icon: <FaMedal className="text-brand-secondary text-4xl mb-2" />,
      title: "Achievement Recognition",
      description: "Celebrate your milestones and achievements with certificates and awards.",
      link: isChessCodex ? "/chesscodex/achievements-testimonials" : "/aspirechess/achievements-testimonials",
    },
    {
      icon: <FaUsers className="text-brand-accent text-4xl mb-2" />,
      title: "Community Support",
      description: "Join our community forum to discuss ideas, share experiences, and get support.",
      link: "https://chat.whatsapp.com/ClWJgf6t1v1LPDhs7NqpCI",
    },
    {
      icon: <FaTrophy className="text-brand-primary text-4xl mb-2" />,
      title: "Tournament Participation",
      description: "Participate in local and international tournaments to test your skills and gain experience.",
      link: isChessCodex ? "/chesscodex/events-blogs" : "/aspirechess/events-blogs",
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
  };  return (
    <section className="py-20 bg-gradient-to-r from-brand-light via-white to-brand-light">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-extrabold mb-6 text-brand-primary">Why Choose {siteName}?</h1>
        <p className="text-lg mb-12 text-brand-text">
          At {siteName}, we empower chess enthusiasts with unparalleled coaching, a world-class curriculum, and the tools needed to succeed at any level.
        </p>

        {/* Highlighted Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {highlightedFeatures.map((feature, index) => (
            <NavLink
              key={index}
              to={feature.link}
              className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-md transform hover:scale-105 hover:shadow-xl transition-all duration-300 h-full"
            >              <div className="flex justify-center items-center mb-2">
                {feature.icon}
              </div>              <h2 className="text-lg font-semibold text-brand-primary mb-2">{feature.title}</h2>
              <p className="text-brand-text text-center text-sm">{feature.description}</p>
            </NavLink>
          ))}
        </div>

        {/* Slider for Other Features */}
        <Slider {...sliderSettings}>
          {features.map((feature, index) => (
            <NavLink
              key={index}
              to={feature.link}
              className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-md transform hover:scale-105 hover:shadow-xl transition-all duration-300 h-full"
            >
              <div className="flex justify-center items-center mb-2">
                {feature.icon}
              </div>              <h2 className="text-lg font-semibold text-brand-primary mb-2">{feature.title}</h2><p className="text-brand-text text-center text-sm">{feature.description}</p>
            </NavLink>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WhyChooseUs;
