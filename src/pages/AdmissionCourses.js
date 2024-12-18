import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import CTA from '../components/CTA';
import CoursesList from '../components/CoursesList';
import { FaChessKnight } from 'react-icons/fa';

const admissionSteps = [
  { step: 'Step 1: Choose a Course', description: 'Select the course that best fits your skill level and interest.' },
  { step: 'Step 2: Fill Out the Application Form', description: 'Complete the online application form with accurate information.' },
  { step: 'Step 3: Submit Payment', description: 'Make the necessary payment for the selected course.' },
  { step: 'Step 4: Confirmation', description: 'Receive a confirmation email with further instructions.' },
];

const FAQs = [
  { question: 'What is the age limit for joining?', answer: 'Students aged 6 years and above can join our courses.' },
  { question: 'Do I need prior experience in chess?', answer: 'No, beginners are welcome to join our introductory courses.' },
  { question: 'How do I pay for the course?', answer: 'Payments can be made online through our secure payment gateway.' },
  {
    question: 'What are the eligibility criteria?',
    answer: (
      <ul className="list-disc pl-5">
        <li>Age: 6 years and above.</li>
        <li>No prior chess experience required for beginner courses.</li>
        <li>Basic chess knowledge is necessary for advanced courses.</li>
        <li>Commitment to attend classes regularly.</li>
      </ul>
    ),
  },
  {
    question: 'How to Apply?',
    answer: (
      <ul className="list-disc pl-5">
        {admissionSteps.map((step, index) => (
          <li key={index}>
            <strong>{step.step}:</strong> {step.description}
          </li>
        ))}
      </ul>
    ),
  },
];

const AdmissionCourses = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div>
      <Helmet>
        <title>Admission & Courses - ChessCodex</title>
        <meta name="description" content="Join ChessCodex to elevate your chess skills with expert training and comprehensive courses. Learn more about our admission process and available courses." />
        <meta name="keywords" content="ChessCodex, chess courses, chess training, chess admission, chess coaching, chess academy" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:flex-1 text-center lg:text-left">
            <h1 className="text-5xl font-extrabold mb-6">
              Elevate Your Chess Skills with <span className="text-yellow-400">Expert Training</span>
            </h1>
            <p className="text-lg leading-relaxed mb-8">
              Learn from the best with courses curated by Grandmaster Niaz Murshed, the first Grandmaster in Asia.
            </p>
            <a
              href="#courses"
              className="inline-block bg-yellow-400 text-blue-900 py-3 px-6 rounded-lg font-semibold hover:bg-yellow-300 transition"
            >
              Explore Courses
            </a>
          </div>
          <div className="lg:flex-1 flex justify-center">
            <div className="relative bg-white text-gray-800 p-6 rounded-lg shadow-lg">
              <img
                src="/niaz.jpg"
                alt="GM Niaz Murshed"
                className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-yellow-400"
              />
              <h3 className="text-2xl font-semibold text-center">GM Niaz Murshed</h3>
              <p className="text-center text-gray-500 mb-4">Chess Mentor & Grandmaster</p>
              <p className="text-center text-gray-600">
                Guiding chess enthusiasts with unparalleled expertise and passion for the game.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-300 opacity-30 blur-lg"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-300 opacity-20 blur-lg"></div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16">
        <CoursesList />
      </section>

      {/* Google Form Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-20">
        <div className="max-w-4xl mx-auto text-center">
          <FaChessKnight className="text-6xl mx-auto mb-6 text-yellow-400" />
          <h2 className="text-4xl font-extrabold mb-6">Join Our Academy</h2>
          <p className="text-lg mb-8">
            Ready to master chess? Fill out the application form to enroll in your desired course.
          </p>
          <a
            href="https://forms.gle/4CaSH9r9sWJ2BZpy8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 text-blue-900 py-3 px-6 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            Open Application Form
          </a>
        </div>
        <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-300 opacity-30 blur-lg"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-300 opacity-20 blur-lg"></div>
      </section>

      {/* FAQs Section */}
      <section id="admission" className="py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {FAQs.map((faq, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-50 transition"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                  <span className="text-gray-500">
                    {expandedIndex === index ? '-' : '+'}
                  </span>
                </div>
                <div
                  className={`mt-2 text-gray-600 transition-max-height duration-300 ease-in-out ${
                    expandedIndex === index ? 'max-h-screen' : 'max-h-0 overflow-hidden'
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default AdmissionCourses;