import React, { useState } from 'react';
import CTA from '../components/CTA';
import CoursesList from '../components/CoursesList';

const admissionSteps = [
  {
    step: 'Step 1: Choose a Course',
    description: 'Select the course that best fits your skill level and interest.',
  },
  {
    step: 'Step 2: Fill Out the Application Form',
    description: 'Complete the online application form with accurate information.',
  },
  {
    step: 'Step 3: Submit Payment',
    description: 'Make the necessary payment for the selected course.',
  },
  {
    step: 'Step 4: Confirmation',
    description: 'Receive a confirmation email with further instructions.',
  },
];

const FAQs = [
  {
    question: 'What is the age limit for joining?',
    answer: 'Students aged 6 years and above can join our courses.',
  },
  {
    question: 'Do I need prior experience in chess?',
    answer: 'No, beginners are welcome to join our introductory courses.',
  },
  {
    question: 'How do I pay for the course?',
    answer: 'Payments can be made online through our secure payment gateway.',
  },
  {
    question: 'What are the eligibility criteria?',
    answer: (
      <ul className="list-disc list-inside text-left">
        <li>Age: 6 years and above.</li>
        <li>No prior chess experience required for beginner courses.</li>
        <li>For advanced courses, basic knowledge of chess rules is necessary.</li>
        <li>Commitment to attend classes regularly.</li>
      </ul>
    ),
  },
  {
    question: 'How to Apply?',
    answer: (
      <ul className="list-disc list-inside text-left">
        {admissionSteps.map((item, index) => (
          <li key={index}>{item.step}: {item.description}</li>
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
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text Content */}
            <div className="lg:col-span-6">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                Master Chess with <span className="text-yellow-400">Grandmaster Guidance</span>
              </h1>
              <p className="text-lg md:text-xl mb-8">
                Embark on your journey to chess mastery with expertly curated courses designed by Grandmaster Niaz Murshed, Asia's first Grandmaster and a legend in chess education.
              </p>
            </div>
            {/* Image/Coach Info */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative bg-white text-gray-800 p-8 rounded-xl shadow-2xl max-w-sm transform transition-transform hover:scale-105">
                <img
                  className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-yellow-400"
                  src="/niaz.jpg"
                  alt="GM Niaz Murshed"
                />
                <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">
                  <span className="text-blue-500">GM</span> Niaz Murshed
                </h3>
                <p className="text-center text-gray-600 mb-4">Chess Coach & Mentor</p>
                <p className="text-center text-gray-600">
                  A trailblazer in chess, inspiring players across the globe with unparalleled expertise and passion for the game.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-400 rounded-full opacity-30 blur-lg"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-indigo-300 rounded-full opacity-20 blur-lg"></div>
        </div>
      </section>

      {/* Courses Listings */}
      <section id="courses">
        <CoursesList/>
      </section>

      {/* Google Form Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Application Form</h2>
          <p className="text-center mb-6">Please fill out the application form by clicking the button below:</p>
          <div className="text-center">
            <a
              href="https://forms.gle/4CaSH9r9sWJ2BZpy8"
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Security feature
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
            >
              Open Application Form
            </a>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="admission" className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-semibold">{faq.question}</h3>
                <div
                  className={`text-gray-600 mt-2 overflow-hidden transition-max-height duration-300 ease-in-out ${
                    expandedIndex === index ? 'max-h-screen' : 'max-h-0'
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA/>
    </div>
  );
};

export default AdmissionCourses;