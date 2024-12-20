import React, { useState } from 'react';

// Course data
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

// Modal Component
const Modal = ({ course, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-2xl animate-fadeIn">
        <h3 className="text-2xl font-bold mb-4 text-[#270185]">{course.title}</h3>
        <p className="text-[#270185] mb-2 font-medium">Duration: {course.duration}</p>
        <ul className="list-disc pl-5 space-y-2 text-[#270185]">
          {course.description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="bg-[#af0505] text-white px-4 py-2 rounded hover:bg-[#8c0404] transition-colors duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const CoursesList = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const openModal = (course) => setSelectedCourse(course);
  const closeModal = () => setSelectedCourse(null);

  return (
    <section id="courses" className="py-16 bg-[#14092e]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-white text-center mb-10">Explore Our Chess Courses</h1>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              onClick={() => openModal(course)}
            >
              <div>
                <h2 className="text-2xl font-semibold text-[#200e4a] mb-4">{course.title}</h2>
                <p className="text-[#270185] font-medium mb-2">Duration: {course.duration}</p>
                <ul className="list-disc pl-4 text-[#270185] space-y-1 text-sm">
                  {course.description.slice(0, 3).map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                  <li className="text-[#7646eb] italic group-hover:hidden">...Read more</li>
                  {course.description.slice(3).map((item, idx) => (
                    <li key={idx} className="hidden group-hover:list-item">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <a
                  href={
                    course.title === 'Private Classes'
                      ? 'https://wa.me/+919830149852'
                      : 'https://forms.gle/4CaSH9r9sWJ2BZpy8'
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-[#461fa3] text-white py-2 px-4 rounded hover:bg-[#7646eb] transition duration-300"
                >
                  {course.title === 'Private Classes' ? 'Contact Us' : 'Enroll Now'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCourse && <Modal course={selectedCourse} onClose={closeModal} />}
    </section>
  );
};

export default CoursesList;