import React, { useState } from 'react';
import SEO from '../../components/SEO';
import CoursesList from '../../components/CoursesList';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { FAQs } from '../../data';

const AdmissionCourses = () => {
  const siteName = 'Kolkata Chess Academy';
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Use the same transparent/backdrop pattern used by the ACA pages
  const heroSectionClasses = "py-24";
  const sectionWrapperClasses = "py-16 sm:py-24 space-y-20 px-4";
  const gmCardClasses = "relative bg-black bg-opacity-25 backdrop-blur-md p-6 rounded-lg shadow-lg border border-gray-700/50 text-slate-200";
  const sectionCardClasses = "bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-8 sm:p-10 border border-gray-700/50";
  const faqItemClasses = "bg-black bg-opacity-20 backdrop-blur-sm border border-gray-700/50 rounded-lg cursor-pointer hover:border-cyan-400/50 transition";
  const faqQuestionClasses = "text-lg font-semibold text-white";
  const faqAnswerClasses = "pt-4 text-slate-300 text-left";
  const titleClasses = "text-cyan-400";

  return (
    <>
      <SEO
        title={`Admission & Courses - ${siteName}`}
        description={`Explore chess courses and admission details at ${siteName}. Learn from Grandmaster Niaz Murshed and top coaches.`}
  keywords={'Kolkata Chess Academy, admission, chess courses, GM Niaz Murshed, training'}
  image={'https://kolkatachessacademy.in/kca.png'}
        url={'https://kolkatachessacademy.in/admission-courses'}
        type="article"
      />

      <section id="hero" className={heroSectionClasses}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-white">
              Elevate Your Game with <span className="text-cyan-400">Expert Training</span>
            </h1>
            <p className="text-lg leading-relaxed mb-8 text-gray-300">
              Learn from the best with courses curated by Grandmaster Niaz Murshed, the first Grandmaster in South Asia.
            </p>
            <a
              href="#courses"
              className="inline-block py-3 px-8 rounded-lg font-semibold transition bg-cyan-500 text-white hover:bg-cyan-400"
            >
              Explore Courses
            </a>
          </div>
          <div className="lg:flex-1 flex justify-center w-full max-w-sm">
            <div className={gmCardClasses}>
              <img
                src="/Team/niaz.jpg"
                alt="GM Niaz Murshed"
                className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-cyan-500"
              />
              <h3 className="text-2xl font-semibold text-center text-white">GM Niaz Murshed</h3>
              <p className="text-center mb-4 text-cyan-400">Chess Mentor & Grandmaster</p>
              <p className="text-center text-slate-300">
                Guiding chess enthusiasts with unparalleled expertise and passion for the game.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div>
        <section id="courses" className={`${sectionWrapperClasses} bg-black/20`}>
          <CoursesList />
        </section>

        <section className={sectionWrapperClasses} id='application-form'>
          <div className="max-w-4xl mx-auto px-4">
            <div className={`${sectionCardClasses} text-center`}>
              <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${titleClasses}`}>Application Form</h2>
              <p className="text-lg mb-6 text-slate-200">
                Ready to join? Click the button below to fill out our application form.
              </p>
              <a
                href="https://forms.gle/4CaSH9r9sWJ2BZpy8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 bg-pink-500 text-white hover:bg-pink-600"
              >
                Go to Application Form
              </a>
            </div>
          </div>
        </section>

        <section id="admission" className={`${sectionWrapperClasses} bg-black/20`}>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className={`text-4xl font-bold mb-12 ${titleClasses}`}>Frequently Asked Questions</h2>
            <div className="space-y-4">
              {FAQs.map((faq, index) => (
                <div key={index} className={faqItemClasses} onClick={() => toggleFAQ(index)}>
                  <div className="flex justify-between items-center p-4">
                    <h3 className={faqQuestionClasses}>{faq.question}</h3>
                    <span className="text-cyan-400">
                      {expandedIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedIndex === index ? 'max-h-96' : 'max-h-0'}`}
                  >
                    <div className="p-4 border-t border-cyan-500/20">
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
