import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

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
    site: 'common', // Specific to ChessCodex
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
    site: 'common', // Common to both sites
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
    site: 'common', // Specific to AspireChess
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
    site: 'common', // Common to both sites
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
    site: 'common', // Specific to ChessCodex
  },
];

// Modal Component
const Modal = ({ course, onClose, isChessCodex, isAspireChess }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-2xl animate-fadeIn">
        <h3 className={`text-2xl font-bold mb-4 ${
          isChessCodex 
            ? 'text-codex-text-dark' 
            : isAspireChess 
            ? 'text-aspire-text-dark' 
            : 'text-kca-text-dark'
        }`}>{course.title}</h3>
        <p className={`${
          isChessCodex 
            ? 'text-codex-text-dark' 
            : isAspireChess 
            ? 'text-aspire-text-dark' 
            : 'text-kca-text-dark'
        } mb-2 font-medium`}>Duration: {course.duration}</p>
        <ul className={`list-disc pl-5 space-y-2 ${
          isChessCodex 
            ? 'text-codex-text-dark' 
            : isAspireChess 
            ? 'text-aspire-text-dark' 
            : 'text-kca-text-dark'
        }`}>
          {course.description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className={`${
              isChessCodex 
                ? 'bg-codex-highlight hover:bg-codex-highlight/80' 
                : isAspireChess 
                ? 'bg-aspire-highlight hover:bg-aspire-highlight/80' 
                : 'bg-kca-highlight hover:bg-kca-highlight/80'
            } text-white px-4 py-2 rounded transition-colors duration-300`}
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
  const location = useLocation();
  const isChessCodex = location.pathname.startsWith('/chesscodex');
  const isAspireChess = location.pathname.startsWith('/aspirechess');

  const openModal = (course) => setSelectedCourse(course);
  const closeModal = () => setSelectedCourse(null);

  // Filter courses based on the current site
  const filteredCourses = coursesData.filter(course => 
    course.site === 'common' || 
    (isChessCodex && course.site === 'chesscodex') || 
    (isAspireChess && course.site === 'aspirechess')
  );
  return (
    <section id="courses" className={`py-16 ${
      isChessCodex 
        ? 'bg-codex-bg-dark' 
        : isAspireChess 
        ? 'bg-aspire-bg-dark' 
        : 'bg-kca-bg-dark'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-white text-center mb-10">Explore Our Chess Courses</h1>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              onClick={() => openModal(course)}
            >
              <div>
                <h2 className={`text-2xl font-semibold ${
                  isChessCodex 
                    ? 'text-codex-primary' 
                    : isAspireChess 
                    ? 'text-aspire-primary' 
                    : 'text-kca-primary'
                } mb-4`}>{course.title}</h2>
                <p className={`${
                  isChessCodex 
                    ? 'text-codex-text-dark' 
                    : isAspireChess 
                    ? 'text-aspire-text-dark' 
                    : 'text-kca-text-dark'
                } font-medium mb-2`}>Duration: {course.duration}</p>
                <ul className={`list-disc pl-4 ${
                  isChessCodex 
                    ? 'text-codex-text-dark' 
                    : isAspireChess 
                    ? 'text-aspire-text-dark' 
                    : 'text-kca-text-dark'
                } space-y-1 text-sm`}>
                  {course.description.slice(0, 3).map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                  <li className={`${
                    isChessCodex 
                      ? 'text-codex-accent' 
                      : isAspireChess 
                      ? 'text-aspire-accent' 
                      : 'text-kca-accent'
                  } italic group-hover:hidden`}>...Read more</li>
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
                      : '#application-form'
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center ${
                    isChessCodex 
                      ? 'bg-codex-secondary hover:bg-codex-accent' 
                      : isAspireChess 
                      ? 'bg-aspire-secondary hover:bg-aspire-accent' 
                      : 'bg-kca-secondary hover:bg-kca-accent'
                  } text-white py-2 px-4 rounded transition duration-300`}
                >
                  {course.title === 'Private Classes' ? 'Contact Us' : 'Enroll Now'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCourse && <Modal course={selectedCourse} onClose={closeModal} isChessCodex={isChessCodex} isAspireChess={isAspireChess} />}
    </section>
  );
};

export default CoursesList;