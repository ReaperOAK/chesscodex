
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { coursesData } from '../data';

// --- THEMED MODAL COMPONENT ---
const Modal = ({ course, onClose, isAspireChess }) => {
  const modalBgClasses = isAspireChess
    ? "bg-gray-900 bg-opacity-70 backdrop-blur-md border border-gray-700"
    : "bg-white";
  const titleClasses = isAspireChess ? "text-amber-400" : "text-brand-text";
  const textClasses = isAspireChess ? "text-gray-300" : "text-brand-text";
  const buttonClasses = isAspireChess
    ? "bg-amber-500 text-gray-900 hover:bg-amber-400"
    : "bg-brand-highlight text-white hover:bg-brand-highlight/80";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className={`${modalBgClasses} rounded-lg shadow-2xl p-6 w-11/12 max-w-2xl animate-fadeIn`}>
        <h3 className={`text-2xl font-bold mb-4 ${titleClasses}`}>{course.title}</h3>
        <p className={`${textClasses} mb-2 font-medium`}>Duration: {course.duration}</p>
        <p className={`${textClasses} mb-2 font-semibold`}>
          {isAspireChess ? 'Classes held offline at Aspire Chess Academy.' : 'All classes are held online via Kolkata Chess Academy.'}
        </p>
        <ul className={`list-disc pl-5 space-y-2 ${textClasses}`}>
          {course.description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className={`px-4 py-2 rounded font-semibold transition-colors duration-300 ${buttonClasses}`}
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
  const isAspireChess = location.pathname.startsWith('/aspirechess');

  const openModal = (course) => setSelectedCourse(course);
  const closeModal = () => setSelectedCourse(null);

  // Filter courses by site (handle both array and string for 'site')
  const filteredCourses = coursesData.filter(course => {
    if (Array.isArray(course.site)) {
      return isAspireChess
        ? course.site.includes('aspirechess')
        : course.site.includes('kca');
    }
    return isAspireChess
      ? course.site === 'aspirechess'
      : course.site === 'kca';
  });

  // --- THEME-AWARE STYLING ---
  const sectionClasses = isAspireChess ? "" : "py-16 bg-brand-dark";
  const titleClasses = isAspireChess ? "text-4xl font-extrabold text-amber-400 text-center mb-10" : "text-4xl font-extrabold text-white text-center mb-10";
  const cardClasses = isAspireChess
    ? "group bg-black bg-opacity-20 backdrop-blur-sm border border-gray-700/50 p-6 rounded-lg shadow-lg hover:shadow-amber-400/10 transform hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col justify-between"
    : "group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col justify-between";
  const cardTitleClasses = isAspireChess ? "text-2xl font-semibold text-white mb-4" : "text-2xl font-semibold text-brand-primary mb-4";
  const cardTextClasses = isAspireChess ? "text-gray-300" : "text-brand-text";
  const buttonClasses = isAspireChess
    ? "bg-amber-500 hover:bg-amber-400 text-gray-900"
    : "bg-brand-secondary hover:bg-brand-accent text-white";

  return (
    <section id="courses" className={sectionClasses}>
      <div className="max-w-6xl mx-auto px-6">
        <h1 className={titleClasses}>Explore Our Chess Courses</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => {
            // If AspireChess and course has redirect, render as link
            if (isAspireChess && course.redirect) {
              return (
                <a
                  key={index}
                  className={cardClasses + " hover:ring-2 hover:ring-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400"}
                  href={course.redirect}
                  style={{ textDecoration: 'none' }}
                >
                  <div>
                    <h2 className={cardTitleClasses}>{course.title}</h2>
                    <p className={`${cardTextClasses} font-medium mb-2`}>Duration: {course.duration}</p>
                    <p className={`${cardTextClasses} mb-2 font-semibold`}>
                      Classes held offline at Aspire Chess Academy.
                    </p>
                    <ul className={`list-disc pl-4 ${cardTextClasses} space-y-1 text-sm`}>
                      {course.description.slice(0, 4).map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                      {course.description.length > 4 && <li className={`${isAspireChess ? 'text-amber-400' : 'text-brand-accent'} italic`}>...and more</li>}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <div
                      className={`block text-center font-semibold py-2 px-4 rounded transition duration-300 ${buttonClasses}`}
                    >
                      Go to Exclusive
                    </div>
                  </div>
                </a>
              );
            }
            // Default: open modal
            return (
              <div key={index} className={cardClasses} onClick={() => openModal(course)}>
                <div>
                  <h2 className={cardTitleClasses}>{course.title}</h2>
                  <p className={`${cardTextClasses} font-medium mb-2`}>Duration: {course.duration}</p>
                  <p className={`${cardTextClasses} mb-2 font-semibold`}>
                    {isAspireChess ? 'Classes held offline at Aspire Chess Academy.' : 'All classes are held online via Kolkata Chess Academy.'}
                  </p>
                  <ul className={`list-disc pl-4 ${cardTextClasses} space-y-1 text-sm`}>
                    {course.description.slice(0, 4).map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                    {course.title === 'Beginner Course' && course.description.length > 4 && (
                      <li className="text-green-600 font-semibold">One-time admission fee ₹1500 & Chess Kit included</li>
                    )}
                    {course.description.length > 4 && <li className={`${isAspireChess ? 'text-amber-400' : 'text-brand-accent'} italic`}>...and more</li>}
                  </ul>
                  {course.title === 'Beginner Course' && course.price && (
                    <div
                      className={`mt-2 font-semibold text-sm ${isAspireChess ? 'text-amber-400' : 'text-blue-600'}`}
                    >
                      Price: {course.price}
                    </div>
                  )}
                </div>
                <div className="mt-6">
                  <div
                    className={`block text-center font-semibold py-2 px-4 rounded transition duration-300 ${buttonClasses}`}
                  >
                    View Details
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {selectedCourse && <Modal course={selectedCourse} onClose={closeModal} isAspireChess={isAspireChess} />}
    </section>
  );
};

export default CoursesList;
