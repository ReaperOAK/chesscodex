import React from 'react';
import { FaBook, FaCrown, FaChalkboardTeacher, FaTasks, FaClipboardCheck, FaFileAlt } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
        <p className="text-lg mb-8">
          At ChessCodex, we are committed to nurturing the next generation of chess champions.
          Whether you're a beginner, an intermediate player, or an advanced player aiming to master the game, our expert coaches guide you every step of the way.
        </p>
        <div className="bg-white p-8 rounded-lg shadow-lg text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start">
              <FaBook className="text-blue-500 text-4xl mr-4" />
              <div>
                <h3 className="text-2xl font-semibold mb-2">Comprehensive Curriculum</h3>
                <p className="text-gray-700">Our syllabus is designed by Grandmaster Niaz Murshed, Asia’s first Grandmaster, to ensure a well-rounded chess education.</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaCrown className="text-yellow-500 text-4xl mr-4" />
              <div>
                <h3 className="text-2xl font-semibold mb-2">Expert Coaching Panel</h3>
                <p className="text-gray-700">Led by International Master Somak Palit, FIDE Master Joydeep Dutta, and IM-elect Arpan Das, our coaches ensure expert guidance.</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaChalkboardTeacher className="text-green-500 text-4xl mr-4" />
              <div>
                <h3 className="text-2xl font-semibold mb-2">Top Tier Guidance</h3>
                <p className="text-gray-700">With Chief Advisor GM Saptarshi Roychowdhury and GM Sayantan Das, students receive unparalleled insights and techniques.</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaTasks className="text-red-500 text-4xl mr-4" />
              <div>
                <h3 className="text-2xl font-semibold mb-2">Weekly Practice Classes</h3>
                <p className="text-gray-700">Regular practice sessions to hone your skills and strategies.</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaClipboardCheck className="text-purple-500 text-4xl mr-4" />
              <div>
                <h3 className="text-2xl font-semibold mb-2">Regular Homeworks</h3>
                <p className="text-gray-700">Assignments and puzzles to keep you engaged and improving.</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaFileAlt className="text-indigo-500 text-4xl mr-4" />
              <div>
                <h3 className="text-2xl font-semibold mb-2">Regular Internal Assessments</h3>
                <p className="text-gray-700">Assessments to track your progress and promote you to the next batch.</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaFileAlt className="text-pink-500 text-4xl mr-4" />
              <div>
                <h3 className="text-2xl font-semibold mb-2">Report Card</h3>
                <p className="text-gray-700">Detailed report cards based on internal assessments to help you understand your strengths and areas for improvement.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;