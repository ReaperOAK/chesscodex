import React, { useState } from 'react';
import CTA from '../components/CTA';

const coursesData = [
  {
    title: 'Beginner Course',
    description: 'This course is for those with little to no knowledge of chess. Emphasizing the importance of regular practice, we provide ample opportunities for play, puzzle-solving, and training matches to reinforce learning and improve decision-making. At ChessCodex, our qualified trainers understand the challenges beginners face and teach the game in a simple, friendly way. We provide customized study materials and assignments to spark interest and build a solid foundation. No matter the age, we help students progress confidently to the next level. With our guidance and their passion, the possibilities are endless.',
    duration: '12 months',
  },
  {
    title: 'Intermediate Course',
    description: 'Our Intermediate Course is tailored for players who have grasped the basics and now ready to fight their guts out in actual tournaments! At ChessCodex, our experienced trainers focus on refining strategies and enhancing overall gameplay through personalized instruction. Recognizing the importance of regular practice, we provide opportunities for engaging play, tactical exercises, and analysis of games to deepen understanding. With our guidance and structured practice, students can further develop their chess abilities and confidently advance to the next level, unlocking new possibilities in their chess journey.',
    duration: '18 months',
  },
  {
    title: 'Advanced Course',
    description: 'The Advanced Course at ChessCodex is designed for experienced players seeking to refine their skills and enhance their competitive edge. At this level, there is no room for complacency; mental resilience plays a critical role in overcoming challenges and performing under pressure. Understanding the importance we offer personalized coaching that focuses on advanced strategies, complex tactics, and thorough game analysis making them sharper for competitive play and review high-level games to sharpen decision-making. With our guidance and dedicated practice, students can elevate their chess mastery and prepare for success at the highest levels of competition.',
    duration: '24 months',
  },
  {
    title: 'Expert Course',
    description: 'The Expert Course at ChessCodex is tailored for high-level tournament players aiming for mastery in chess. Our distinguished trainers provide advanced coaching that emphasizes high-level strategies, deep opening preparation, unique calculation techniques, and in-depth analysis of grandmaster games.',
    duration: 'Ongoing',
  },
];

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

const AdmissionCourses = () => {
  const [expandedCourse, setExpandedCourse] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedCourse(expandedCourse === index ? null : index);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-24 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Our Courses & Admission Process</h1>
          <p className="text-lg">Unlock your potential and elevate your chess skills with our expertly designed courses. Join our chess academy and take the first step toward mastering the game!</p>
        </div>
      </section>

      {/* Courses Listings */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Explore Our Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coursesData.map((course, index) => (
              <div key={index} className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">
                  {expandedCourse === index ? course.description : `${course.description.substring(0, 100)}...`}
                </p>
                <p className="text-gray-800 font-semibold">Duration: {course.duration}</p>
                <button
                  onClick={() => toggleReadMore(index)}
                  className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
                >
                  {expandedCourse === index ? 'Read Less' : 'Read More'}
                </button>
                <a
                  href="/"
                  className="mt-4 inline-block bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors duration-300 ml-2"
                >
                  Enroll Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Steps */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">How to Apply</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((item, index) => (
              <div key={index} className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-200">
                <h3 className="text-xl font-semibold text-green-600 mb-2">{item.step}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Eligibility Criteria</h2>
          <ul className="list-disc list-inside space-y-4 text-left max-w-2xl mx-auto">
            <li className="text-lg">Age: 6 years and above.</li>
            <li className="text-lg">No prior chess experience required for beginner courses.</li>
            <li className="text-lg">For advanced courses, basic knowledge of chess rules is necessary.</li>
            <li className="text-lg">Commitment to attend classes regularly.</li>
          </ul>
        </div>
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
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">What is the age limit for joining?</h3>
              <p className="text-gray-600">Students aged 6 years and above can join our courses.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">Do I need prior experience in chess?</h3>
              <p className="text-gray-600">No, beginners are welcome to join our introductory courses.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">How do I pay for the course?</h3>
              <p className="text-gray-600">Payments can be made online through our secure payment gateway.</p>
            </div>
          </div>
        </div>
      </section>
      <CTA/>
    </div>
  );
};

export default AdmissionCourses;