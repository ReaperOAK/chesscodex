
import React, { useState } from 'react';
import SEO from '../../components/SEO';
import CoursesList from '../../components/CoursesList';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { FAQs } from '../../data';


const AspireAdmissionCourses = () => {
  const siteName = 'AspireChess';
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Aspire theme only
  const heroSectionClasses = "py-24";
  const sectionWrapperClasses = "py-16 sm:py-24 space-y-20 px-4";
  const gmCardClasses = "relative bg-black bg-opacity-25 backdrop-blur-md p-6 rounded-lg shadow-lg border border-gray-700/50";
  const sectionCardClasses = "bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-8 sm:p-10 border border-gray-700/50";
  const faqItemClasses = "bg-black bg-opacity-20 backdrop-blur-sm border border-gray-700/50 rounded-lg cursor-pointer hover:border-amber-400/50 transition";
  const faqQuestionClasses = "text-lg font-semibold text-white";
  const faqAnswerClasses = "pt-4 text-gray-300 text-left";
  const titleClasses = "text-amber-400";

  return (
    <>
      <SEO
        title={`Admission & Courses - ${siteName}`}
        description={`AspireChess offers a complete Grandmaster-designed curriculum with regular assessment and feedback. Our focus is on holistic chess mastery, not just online classes.`}
        keywords={'AspireChess, admission, chess courses, GM Niaz Murshed, GM curriculum, assessment, training'}
        image={'https://kolkatachessacademy.in/aca.png'}
        url={'https://kolkatachessacademy.in/aspirechess/courses'}
        type="article"
        canonical={'https://kolkatachessacademy.in/aspirechess/courses'}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Course',
          name: `Chess Courses at ${siteName}`,
          url: 'https://kolkatachessacademy.in/aspirechess/courses',
          description: `AspireChess offers a complete Grandmaster-designed curriculum with regular assessment and feedback. Our focus is on holistic chess mastery, not just online classes.`
        }}
      />

      {/* Hero Section */}
      <section id="hero" className={heroSectionClasses}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-white">
              Complete GM Curriculum with <span className="text-amber-400">Regular Assessment</span>
            </h1>
            <p className="text-lg leading-relaxed mb-8 text-gray-300">
              At AspireChess, our entire curriculum is meticulously crafted by Grandmaster Niaz Murshed, ensuring every student receives world-class training. We emphasize a structured, in-depth learning journey with regular assessments and personalized feedback—far beyond just online classes. Our mission is to nurture true chess mastery through a proven, Grandmaster-led system.
            </p>
            <a
              href="#courses"
              className="inline-block py-3 px-8 rounded-lg font-semibold transition bg-amber-500 text-gray-900 hover:bg-amber-400"
            >
              Explore Courses
            </a>
            <a href="/aspirechess/courses" className="inline-block ml-4 py-3 px-6 rounded-lg font-semibold border border-amber-400 text-amber-300 hover:bg-amber-900/10 transition">
              Explore Offline Courses
            </a>
          </div>
          <div className="lg:flex-1 flex justify-center w-full max-w-sm">
            <div className={gmCardClasses}>
              <img
                src="/Team/niaz.jpg"
                alt="GM Niaz Murshed"
                className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-amber-400"
              />
              <h3 className="text-2xl font-semibold text-center text-white">GM Niaz Murshed</h3>
              <p className="text-center mb-4 text-gray-300">Chess Mentor & Grandmaster</p>
              <p className="text-center text-gray-400">
                Guiding chess enthusiasts with unparalleled expertise and passion for the game.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className={sectionWrapperClasses}>
        {/* Courses Section */}
        <section id="courses">
          <CoursesList />
        </section>

        {/* Application Form Section */}
        <section>
          <div className="max-w-4xl mx-auto px-4" id='application-form'>
            <div className={`${sectionCardClasses} text-center`}>
              <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${titleClasses}`}>Application Form</h2>
              <p className="text-lg mb-6 text-gray-300">
                Ready to join? Click the button below to fill out our application form.
              </p>
              <a
                href="https://forms.gle/4CaSH9r9sWJ2BZpy8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 bg-amber-500 text-gray-900 hover:bg-amber-400"
              >
                Go to Application Form
              </a>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="admission">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className={`text-4xl font-bold mb-12 ${titleClasses}`}>Frequently Asked Questions</h2>
            <div className="space-y-4">
              {FAQs.map((faq, index) => (
                <div key={index} className={faqItemClasses} onClick={() => toggleFAQ(index)}>
                  <div className="flex justify-between items-center p-4">
                    <h3 className={faqQuestionClasses}>{faq.question}</h3>
                    <span className="text-amber-400">
                      {expandedIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedIndex === index ? 'max-h-96' : 'max-h-0'}`}
                  >
                    <div className="p-4 border-t border-gray-700">
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

export default AspireAdmissionCourses;
