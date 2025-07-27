import React from 'react';
import Slider from 'react-slick';
import { FaBook, FaCrown, FaChalkboardTeacher, FaTasks, FaClipboardCheck, FaFileAlt, FaMedal, FaUsers, FaTrophy } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// ...removed unused imports NextArrow, PrevArrow...

const WhyChooseUs = () => {
  const location = useLocation();
  const isAspireChess = location.pathname.startsWith('/aspirechess');
  const siteName = isAspireChess ? 'AspireChess' : 'Kolkata Chess Academy';

  const highlightedFeatures = [
    { icon: <FaBook className="text-amber-400 text-4xl mb-2" />, title: "Comprehensive Curriculum", description: "Syllabus designed by GM Niaz Murshed to provide a holistic chess education.", link: isAspireChess ? "/aspirechess/courses" : "/contact" },
    { icon: <FaChalkboardTeacher className="text-amber-400 text-4xl mb-2" />, title: "Top Tier Guidance", description: "Insights and techniques from GM Saptarshi Roychowdhury and GM Sayantan Das.", link: isAspireChess ? "/aspirechess/about#team" : "/about#team" },
    { icon: <FaCrown className="text-amber-400 text-4xl mb-2" />, title: "Expert Coaching Panel", description: "Led by IM Somak Palit, FM Joydeep Dutta, and IM-elect Arpan Das for personalized mentorship.", link: isAspireChess ? "/aspirechess/about#team" : "/about#team" },
  ];

  const features = [
    { icon: <FaTasks className="text-amber-400 text-4xl mb-2" />, title: "Weekly Practice Classes", description: "Interactive sessions to refine your strategies and enhance performance.", link: "/aspirechess/courses" },
    { icon: <FaClipboardCheck className="text-amber-400 text-4xl mb-2" />, title: "Regular Homeworks", description: "Engaging assignments and puzzles to keep you challenged and motivated.", link: "/aspirechess/courses" },
    { icon: <FaFileAlt className="text-amber-400 text-4xl mb-2" />, title: "Internal Assessments", description: "Track progress through structured assessments and advance to higher batches.", link: "/aspirechess/courses" },
    { icon: <FaFileAlt className="text-amber-400 text-4xl mb-2" />, title: "Detailed Report Card", description: "Receive personalized feedback to identify strengths and areas for growth.", link: "/aspirechess/courses" },
    { icon: <FaMedal className="text-amber-400 text-4xl mb-2" />, title: "Achievement Recognition", description: "Celebrate your milestones and achievements with certificates and awards.", link: "/aspirechess/achievements-testimonials" },
    { icon: <FaUsers className="text-amber-400 text-4xl mb-2" />, title: "Community Support", description: "Join our community forum to discuss ideas, share experiences, and get support.", link: "https://chat.whatsapp.com/ClWJgf6t1v1LPDhs7NqpCI" },
    { icon: <FaTrophy className="text-amber-400 text-4xl mb-2" />, title: "Tournament Participation", description: "Participate in local and international tournaments to test your skills and gain experience.", link: "/aspirechess/events-blogs" },
  ];

  const sliderSettings = { /* ... slider settings remain the same ... */ };

  // Define classes based on the theme
  const sectionClasses = isAspireChess ? "py-20" : "py-20 bg-gradient-to-r from-brand-light via-white to-brand-light";
  const titleClasses = isAspireChess ? "text-4xl font-extrabold mb-6 text-amber-400" : "text-4xl font-extrabold mb-6 text-brand-primary";
  const descriptionClasses = isAspireChess ? "text-lg mb-12 text-gray-300" : "text-lg mb-12 text-brand-text";
  const cardClasses = isAspireChess 
    ? "flex flex-col items-center justify-start bg-black bg-opacity-30 backdrop-blur-sm border border-gray-700 p-6 rounded-lg shadow-md transform hover:scale-105 hover:shadow-xl transition-all duration-300 h-full"
    : "flex flex-col items-center justify-start bg-white p-6 rounded-lg shadow-md transform hover:scale-105 hover:shadow-xl transition-all duration-300 h-full";
  const cardTitleClasses = isAspireChess ? "text-lg font-semibold text-white mb-2" : "text-lg font-semibold text-brand-primary mb-2";
  const cardDescriptionClasses = isAspireChess ? "text-gray-300 text-center text-sm" : "text-brand-text text-center text-sm";

  return (
    <section className={sectionClasses}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className={titleClasses}>Why Choose {siteName}?</h1>
        <p className={descriptionClasses}>
          At {siteName}, we empower chess enthusiasts with unparalleled coaching, a world-class curriculum, and the tools needed to succeed at any level.
        </p>

        {/* Highlighted Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {highlightedFeatures.map((feature, index) => (
            <NavLink key={index} to={feature.link} className={cardClasses}>
              <div className="flex justify-center items-center mb-2">{feature.icon}</div>
              <h2 className={cardTitleClasses}>{feature.title}</h2>
              <p className={cardDescriptionClasses}>{feature.description}</p>
            </NavLink>
          ))}
        </div>

        {/* Slider for Other Features */}
        <Slider {...sliderSettings}>
          {features.map((feature, index) => (
            <div className="px-2 h-full"> {/* Added padding for slider items */}
              <NavLink key={index} to={feature.link} className={cardClasses}>
                <div className="flex justify-center items-center mb-2">{feature.icon}</div>
                <h2 className={cardTitleClasses}>{feature.title}</h2>
                <p className={cardDescriptionClasses}>{feature.description}</p>
              </NavLink>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WhyChooseUs;