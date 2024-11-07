import React from 'react';

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
      'Contact us: as that would be tailored to your needs.',
      'The pricing and timings will vary according to your needs and wants.',
    ],
    duration: 'Flexible',
  },
];

const CoursesList = () => {
  return (
    <section id="courses" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Explore Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course, index) => (
            <div
              key={index}
              className="bg-white p-4 shadow-lg rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 relative group"
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
                  <a
                    href="/"
                    className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesList;