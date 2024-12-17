import React, { useState } from 'react';

const coursesData = [
  {
    title: 'Beginner Course',
    description: [
      'Introduction to Chess',
      'Piece Movement',
      'Superpowers of Pieces',
      'Mates with Major Pieces',
      'Types of Draws',
      'Candidate Moves',
      'Tactical Patterns',
      'Basics of Endgames',
    ],
    duration: '12 months',
  },
  {
    title: 'Intermediate Course',
    description: [
      'Forcing Moves',
      'Openings',
      'Endgames (Rook, Pawn & Knights)',
      'Minor Piece Mates',
      'Learn from World Champions',
      'Fundamental Strategies (Open File, Outpost, Center, Space & Exchanges)',
    ],
    duration: '18 months',
  },
  {
    title: 'Advanced Course',
    description: [
      'Complete Endgames',
      'Attack & Initiative',
      'Calculation',
      'Colour Complex Piece Play',
    ],
    duration: '24 months',
  },
  {
    title: 'Expert Course',
    description: [
      'Pawn Play',
      'Pawn Structures',
      'Conversions',
      'Prophylaxis',
      'Building a Tailored Opening Repertoire',
    ],
    duration: 'Ongoing',
  },
  {
    title: 'Private Classes',
    description: [
      'Comprehensive Support on behalf of our Academy:',
      '1. Structured methodology and curriculum (designed by GM Niaz Murshed)',
      '2. Expertly curated customized openings (by IMs/GMs)',
      '3. Bi-monthly Parent-Teacher Meetings (PTMs)',
      '4. Customized routines and study materials by one of our dedicated coaches.',
      '5. In-depth classical game analysis with PDF explanations of all World Champions',
      'Contact us: as that would be tailored to your needs. The pricing and timings will vary according to your needs and wants.',
    ],
    duration: 'Flexible',
  },
];

const CoursesList = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const openModal = (course) => {
    setSelectedCourse(course);
  };

  const closeModal = () => {
    setSelectedCourse(null);
  };

  return (
    <section id="courses" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Explore Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 relative group cursor-pointer"
              onClick={() => openModal(course)}
            >
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
                <p className="text-gray-800 font-semibold mb-2">Duration: {course.duration}</p>
                <ul className="list-disc list-inside text-left text-gray-600 mb-2 max-h-0 overflow-hidden group-hover:max-h-full group-hover:opacity-100 transition-all duration-300">
                  {course.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <div className="mt-auto">
                  {course.title === 'Private Classes' ? (
                    <a
                      href="https://wa.me/+919830149852" // Replace with your email link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
                    >
                      Contact Us
                    </a>
                  ) : (
                    <a
                      href="https://forms.gle/4CaSH9r9sWJ2BZpy8" // Replace with your WhatsApp number or email link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
                    >
                      Enroll Now
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedCourse && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{selectedCourse.title}</h3>
              <p className="text-gray-800 font-semibold mb-2">Duration: {selectedCourse.duration}</p>
              <ul className="list-disc list-inside text-left text-gray-600 mb-4">
                {selectedCourse.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <div className="text-right">
                <button
                  onClick={closeModal}
                  className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CoursesList;