import React from 'react';
import { FaBook, FaCrown, FaChalkboardTeacher, FaTasks, FaClipboardCheck, FaFileAlt } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaBook className="text-blue-500 text-5xl mb-4" />,
      title: "Comprehensive Curriculum",
      description: "Syllabus designed by GM Niaz Murshed to provide a holistic chess education.",
    },
    {
      icon: <FaCrown className="text-yellow-500 text-5xl mb-4" />,
      title: "Expert Coaching Panel",
      description: "Led by IM Somak Palit, FM Joydeep Dutta, and IM-elect Arpan Das for personalized mentorship.",
    },
    {
      icon: <FaChalkboardTeacher className="text-green-500 text-5xl mb-4" />,
      title: "Top Tier Guidance",
      description: "Insights and techniques from GM Saptarshi Roychowdhury and GM Sayantan Das.",
    },
    {
      icon: <FaTasks className="text-red-500 text-5xl mb-4" />,
      title: "Weekly Practice Classes",
      description: "Interactive sessions to refine your strategies and enhance performance.",
    },
    {
      icon: <FaClipboardCheck className="text-purple-500 text-5xl mb-4" />,
      title: "Regular Homeworks",
      description: "Engaging assignments and puzzles to keep you challenged and motivated.",
    },
    {
      icon: <FaFileAlt className="text-indigo-500 text-5xl mb-4" />,
      title: "Internal Assessments",
      description: "Track progress through structured assessments and advance to higher batches.",
    },
    {
      icon: <FaFileAlt className="text-pink-500 text-5xl mb-4" />,
      title: "Detailed Report Card",
      description: "Receive personalized feedback to identify strengths and areas for growth.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gray-100 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-800">Why Choose Us?</h2>
        <p className="text-lg mb-12 text-gray-600">
          At ChessCodex, we empower chess enthusiasts with unparalleled coaching, a world-class curriculum, and the tools needed to succeed at any level.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md transform hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;