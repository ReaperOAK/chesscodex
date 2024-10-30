import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-600 text-white py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Welcome to ChessCodex</h1>
          <p className="text-lg font-semibold mb-4">Striving for 100% Rated Players</p>
          <p className="text-md max-w-3xl mx-auto">Striving to Help All Players Achieve and Improve Their Chess Rating</p>
          <p className="mt-6 text-lg">Started out with Kolkata Chess Academy, our singular goal was to make India a leading nation in chess titles. ChessCodex is now dedicated to building a community packed with rated players prepared for success.</p>
          <a href="/admission" className="mt-8 inline-block bg-yellow-500 text-gray-800 font-semibold py-3 px-6 rounded-lg shadow hover:bg-yellow-400 transition duration-300">Join ChessCodex Today</a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
          <p className="text-lg mb-8">
            At ChessCodex, we are committed to nurturing the next generation of chess champions.
            Whether you're a beginner, an intermediate player, or an advanced player aiming to master the game, our expert coaches guide you every step of the way.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <h3 className="text-2xl font-semibold mb-2">Comprehensive Curriculum</h3>
              <p className="text-gray-700">Our syllabus is designed by Grandmaster Niaz Murshed, Asia’s first Grandmaster, to ensure a well-rounded chess education.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <h3 className="text-2xl font-semibold mb-2">Expert Coaching Panel</h3>
              <p className="text-gray-700">Led by International Master Somak Palit, FIDE Master Joydeep Dutta, and IM-elect Arpan Das, our coaches ensure expert guidance.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <h3 className="text-2xl font-semibold mb-2">Top Tier Guidance</h3>
              <p className="text-gray-700">With Chief Advisor GM Saptarshi Roychowdhury and GM Sayantan Das, students receive unparalleled insights and techniques.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Programs Section */}
      <section className="bg-gray-100 py-20 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Scholarship Programs</h2>
          <p className="text-lg mb-8">
            We believe in recognizing talent and hard work. Our scholarship program supports exceptional students who show promise and dedication in chess.
          </p>
          <a href="/scholarship" className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-blue-500 transition duration-300">Learn More</a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">What Our Students Say</h2>
          <div className="space-y-6">
            <blockquote className="italic text-lg">
              “ChessCodex made learning chess accessible and enjoyable. Highly recommended!” - Sarah K.
            </blockquote>
            <blockquote className="italic text-lg">
              “The online sessions are engaging, and the tutors are exceptional!” - David L.
            </blockquote>
            <blockquote className="italic text-lg">
              “ChessCodex helped me master chess without leaving my home!” - Emily R.
            </blockquote>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-600 text-white py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Join ChessCodex and Become a Champion</h2>
          <p className="text-lg mb-8">Ready to take your chess skills to the next level? Enroll in our programs and start your journey with ChessCodex.</p>
          <a href="/admission" className="bg-yellow-500 text-gray-800 font-semibold py-3 px-6 rounded-lg shadow hover:bg-yellow-400 transition duration-300">Enroll Now</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
