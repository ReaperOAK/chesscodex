import React from 'react';
import { FaBook, FaCrown, FaChalkboardTeacher, FaTasks, FaClipboardCheck, FaFileAlt, FaMedal, FaUsers } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

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
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gray-100 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-800">Why Choose ChessCodex?</h1>
        <p className="text-lg mb-12 text-gray-600">
          At ChessCodex, we empower chess enthusiasts with unparalleled coaching, a world-class curriculum, and the tools needed to succeed at any level.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <NavLink
              key={index}
              to={feature.link}
              className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md transform hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              {feature.icon}
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h2>
              <p className="text-gray-600 text-center text-sm">{feature.description}</p>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;