import React, { useState } from 'react';
import SEO from '../components/SEO';
import { useLocation } from 'react-router-dom';
import CoursesList from '../components/CoursesList';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQs = [
  { question: 'What is the age limit for joining?', answer: 'Students aged 4 years and above can join our courses.' },
  { question: 'Do I need prior experience in chess?', answer: 'No, beginners are welcome to join our introductory courses.' },
  { question: 'How do I pay for the course?', answer: 'Payments can be made online through our secure payment gateway.' },
  {
    question: 'What are the eligibility criteria?',
    answer: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Age: 6 years and above.</li>
        <li>No prior chess experience required for beginner courses.</li>
        <li>Basic chess knowledge is necessary for advanced courses.</li>
        <li>Commitment to attend classes regularly.</li>
      </ul>
    ),
  },
];

const AdmissionCourses = () => {
  const location = useLocation();
  const isAspireChess = location.pathname.startsWith('/aspirechess');
  const siteName = isAspireChess ? 'AspireChess' : 'Kolkata Chess Academy';
  
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // --- Theme-Aware Class Definitions ---
  const heroSectionClasses = isAspireChess
    ? "py-24"
    : "relative bg-gradient-to-br from-brand-dark via-brand-secondary to-brand-primary text-white py-20";
  
  const sectionWrapperClasses = isAspireChess ? "py-16 sm:py-24 space-y-20 px-4" : "";

  const gmCardClasses = isAspireChess
    ? "relative bg-black bg-opacity-25 backdrop-blur-md p-6 rounded-lg shadow-lg border border-gray-700/50"
    : "relative bg-white text-brand-text p-6 rounded-lg shadow-lg";

  const sectionCardClasses = isAspireChess
    ? "bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-8 sm:p-10 border border-gray-700/50"
    : "bg-white p-8 rounded-lg shadow-md";

  const faqItemClasses = isAspireChess
    ? "bg-black bg-opacity-20 backdrop-blur-sm border border-gray-700/50 rounded-lg cursor-pointer hover:border-amber-400/50 transition"
    : "p-4 bg-brand-light rounded-lg shadow-md cursor-pointer hover:bg-brand-accent transition";
  
  const faqQuestionClasses = isAspireChess ? "text-lg font-semibold text-white" : "text-lg font-semibold text-brand-dark";
  const faqAnswerClasses = isAspireChess ? "pt-4 text-gray-300 text-left" : "mt-2 text-brand-text";
  const titleClasses = isAspireChess ? "text-amber-400" : "text-brand-dark";

  return (
    <>
      <SEO
        title={`Admission & Courses - ${siteName}`}
        description={`Explore chess courses and admission details at ${siteName}. Learn from Grandmaster Niaz Murshed and top coaches.`}
        keywords={isAspireChess ? 'AspireChess, admission, chess courses, GM Niaz Murshed, training' : 'Kolkata Chess Academy, admission, chess courses, GM Niaz Murshed, training'}
        image={isAspireChess ? 'https://kolkatachessacademy.in/aca.png' : 'https://kolkatachessacademy.in/kca.png'}
        url={isAspireChess ? 'https://kolkatachessacademy.in/aspirechess/courses' : 'https://kolkatachessacademy.in/admission-courses'}
        type="article"
        canonical={isAspireChess ? 'https://kolkatachessacademy.in/aspirechess/courses' : 'https://kolkatachessacademy.in/admission-courses'}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Course',
          name: `Chess Courses at ${siteName}`,
          url: isAspireChess ? 'https://kolkatachessacademy.in/aspirechess/courses' : 'https://kolkatachessacademy.in/admission-courses',
          description: `Explore chess courses and admission details at ${siteName}. Learn from Grandmaster Niaz Murshed and top coaches.`
        }}
      />

      {/* Hero Section */}
      <section id="hero" className={heroSectionClasses}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-white">
              Elevate Your Game with <span className={isAspireChess ? "text-amber-400" : "text-brand-primary"}>Expert Training</span>
            </h1>
            <p className="text-lg leading-relaxed mb-8 text-gray-300">
              Learn from the best with courses curated by Grandmaster Niaz Murshed, the first Grandmaster in South Asia.
            </p>
            <a
              href="#courses"
              className={`inline-block py-3 px-8 rounded-lg font-semibold transition ${isAspireChess ? 'bg-amber-500 text-gray-900 hover:bg-amber-400' : 'bg-brand-primary text-white hover:bg-brand-secondary'}`}
            >
              Explore Courses
            </a>
          </div>
          <div className="lg:flex-1 flex justify-center w-full max-w-sm">
            <div className={gmCardClasses}>
              <img
                src="/Team/niaz.jpg"
                alt="GM Niaz Murshed"
                className={`w-28 h-28 rounded-full mx-auto mb-4 border-4 ${isAspireChess ? 'border-amber-400' : 'border-brand-primary'}`}
              />
              <h3 className={`text-2xl font-semibold text-center ${isAspireChess ? 'text-white' : 'text-brand-dark'}`}>GM Niaz Murshed</h3>
              <p className={`text-center mb-4 ${isAspireChess ? 'text-gray-300' : 'text-brand-text'}`}>Chess Mentor & Grandmaster</p>
              <p className={`text-center ${isAspireChess ? 'text-gray-400' : 'text-brand-text'}`}>
                Guiding chess enthusiasts with unparalleled expertise and passion for the game.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className={sectionWrapperClasses}>
        {/* Courses Section */}
        <section id="courses" className={isAspireChess ? "" : "py-16 bg-brand-light"}>
          <CoursesList />
        </section>

        {/* Application Form Section */}
        <section className={isAspireChess ? "" : "py-16 bg-brand-light"}>
          <div className="max-w-4xl mx-auto px-4" id='application-form'>
            <div className={`${sectionCardClasses} text-center`}>
              <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${titleClasses}`}>Application Form</h2>
              <p className={`text-lg mb-6 ${isAspireChess ? 'text-gray-300' : 'text-brand-text'}`}>
                Ready to join? Click the button below to fill out our application form.
              </p>
              <a
                href="https://forms.gle/4CaSH9r9sWJ2BZpy8"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 ${isAspireChess ? 'bg-amber-500 text-gray-900 hover:bg-amber-400' : 'bg-brand-primary text-white hover:bg-brand-secondary'}`}
              >
                Go to Application Form
              </a>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="admission" className={isAspireChess ? "" : "py-16 bg-white"}>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className={`text-4xl font-bold mb-12 ${titleClasses}`}>Frequently Asked Questions</h2>
            <div className="space-y-4">
              {FAQs.map((faq, index) => (
                <div key={index} className={faqItemClasses} onClick={() => toggleFAQ(index)}>
                  <div className="flex justify-between items-center p-4">
                    <h3 className={faqQuestionClasses}>{faq.question}</h3>
                    <span className={isAspireChess ? 'text-amber-400' : 'text-brand-text'}>
                      {expandedIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedIndex === index ? 'max-h-96' : 'max-h-0'}`}
                  >
                    <div className={`p-4 border-t ${isAspireChess ? 'border-gray-700' : 'border-gray-200'}`}>
                      <div className={faqAnswerClasses}>{faq.answer}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AdmissionCourses;
