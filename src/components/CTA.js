import React from 'react';

const CTA = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Join ChessCodex and Become a Champion</h2>
          <p className="text-lg mb-8">Ready to take your chess skills to the next level? Enroll in our programs and start your journey with ChessCodex.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/admission" className="bg-yellow-500 text-gray-800 font-semibold py-3 px-6 rounded-lg shadow hover:bg-yellow-400 transition duration-300">Enroll Now</a>
            <a href="/contact" className="bg-white text-gray-800 font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-200 transition duration-300">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CTA;