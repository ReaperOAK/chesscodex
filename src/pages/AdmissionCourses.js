import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import CoursesList from '../components/CoursesList';

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
  const location = useLocation();
  const isChessCodex = location.pathname.startsWith('/chesscodex');
  const siteName = isChessCodex ? 'ChessCodex' : 'AspireChess';
  const siteDescription = isChessCodex
    ? 'Join ChessCodex to elevate your chess skills with expert training and comprehensive courses. Learn more about our admission process and available courses.'
    : 'Join AspireChess to elevate your chess skills with expert training and comprehensive courses. Learn more about our admission process and available courses.';
  const siteKeywords = isChessCodex
    ? 'ChessCodex, chess courses, chess training, chess admission, chess coaching, chess academy'
    : 'AspireChess, chess courses, chess training, chess admission, chess coaching, chess academy';

  const [expandedIndex, setExpandedIndex] = useState(null);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone_number: '',
    course: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/php/application_form.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
        setFormData({ full_name: '', email: '', phone_number: '', course: '' });
      } else {
        console.error('Error:', data.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Admission & Courses - {siteName}</title>
        <meta name="description" content={siteDescription} />
        <meta name="keywords" content={siteKeywords} />
      </Helmet>
      {/* Hero Section */}
      <section id="hero" className="relative bg-gradient-to-br from-[#200e4a] via-[#461fa3] to-[#7646eb] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:flex-1 text-center lg:text-left">
            <h1 className="text-5xl font-extrabold mb-6">
              Elevate Your Chess Skills with <span className="text-[#af0505]">Expert Training</span>
            </h1>
            <p className="text-lg leading-relaxed mb-8">
              Learn from the best with courses curated by Grandmaster Niaz Murshed, the first Grandmaster in Asia.
            </p>
            <a
              href="#courses"
              className="inline-block bg-[#af0505] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#8c0404] transition"
            >
              Explore Courses
            </a>
          </div>
          <div className="lg:flex-1 flex justify-center">
            <div className="relative bg-white text-gray-800 p-6 rounded-lg shadow-lg">
              <img
                src="/Team/niaz.jpg"
                alt="GM Niaz Murshed"
                className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-[#af0505]"
              />
              <h3 className="text-2xl font-semibold text-center">GM Niaz Murshed</h3>
              <p className="text-center text-gray-500 mb-4">Chess Mentor & Grandmaster</p>
              <p className="text-center text-gray-600">
                Guiding chess enthusiasts with unparalleled expertise and passion for the game.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#af0505] opacity-30 blur-lg"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#461fa3] opacity-20 blur-lg"></div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 bg-[#f3f1f9]">
        <CoursesList />
      </section>

      {/* Application Form Section */}
      <section className="py-16 bg-[#f3f1f9]">
        <div className="max-w-6xl mx-auto px-4" id='application-form'>
          <h2 className="text-4xl font-bold text-[#200e4a] mb-12 text-center">Application Form</h2>
          {submitted ? (
            <p className="text-center text-[#af0505] text-xl font-medium">
              Thank you! Your application has been received. We'll get back to you soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-sm font-medium text-[#270185]">Full Name</label>
                  <input
                    type="text"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    required
                    className="block w-full p-2 border border-[#c2c1d3] rounded-md focus:outline-none focus:ring focus:ring-[#461fa3]"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-[#270185]">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="block w-full p-2 border border-[#c2c1d3] rounded-md focus:outline-none focus:ring focus:ring-[#461fa3]"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-[#270185]">Phone Number</label>
                  <input
                    type="tel"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    required
                    className="block w-full p-2 border border-[#c2c1d3] rounded-md focus:outline-none focus:ring focus:ring-[#461fa3]"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-[#270185]">Select Course</label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="block w-full p-2 border border-[#c2c1d3] rounded-md focus:outline-none focus:ring focus:ring-[#461fa3]"
                  >
                    <option value="">-- Choose a Course --</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                    <option value="expert">Expert</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="mt-4 w-full bg-[#af0505] text-white py-2 px-4 rounded hover:bg-[#8c0404] transition-colors duration-300"
              >
                Submit Application
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FAQs Section */}
      <section id="admission" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#200e4a] mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {FAQs.map((faq, index) => (
              <div
                key={index}
                className="p-4 bg-[#f3f1f9] rounded-lg shadow-md cursor-pointer hover:bg-[#e3e1f7] transition"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-[#200e4a]">{faq.question}</h3>
                  <span className="text-[#270185]">
                    {expandedIndex === index ? '-' : '+'}
                  </span>
                </div>
                <div
                  className={`mt-2 text-[#270185] transition-max-height duration-300 ease-in-out ${
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
    </div>
  );
};

export default AdmissionCourses;