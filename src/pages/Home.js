import React from 'react';
import { Helmet } from 'react-helmet';
import WhyChooseUs from '../components/WhyChooseUs';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - ChessCodex</title>
        <meta name="description" content="Welcome to ChessCodex. Elevate your chess skills with expert training and comprehensive courses." />
        <meta name="keywords" content="ChessCodex, chess training, chess courses, chess coaching, chess academy" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#200e4a] via-[#461fa3] to-[#7646eb] text-white py-24 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Welcome to ChessCodex</h1>
          <p className="text-lg mb-4">Building the Future of Chess Excellence</p>
          <p className="text-md mb-6 max-w-3xl mx-auto">
            Started with Kolkata Chess Academy, we now strive to create a community of rated players, enhancing their skills through world-class coaching and resources.
          </p>
          <a
            href="/admission"
            className="bg-[#af0505] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-[#8c0404] transition duration-300"
          >
            Join ChessCodex Today
          </a>
        </div>
      </section>

      {/* About Section */}
      <WhyChooseUs />

      {/* Scholarship Programs Section */}
      <section className="bg-[#f3f1f9] py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-[#200e4a]">Scholarship Programs</h2>
          <p className="text-lg mb-6 text-[#270185]">
            Recognizing talent and hard work, we offer scholarships to support dedicated students with exceptional potential in chess.
          </p>
          <a
            href="/exclusives"
            className="bg-[#461fa3] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-[#7646eb] transition duration-300"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Pro Members Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-[#200e4a]">Pro Members</h2>
          <p className="text-lg mb-6 text-[#270185]">
            Unlock premium benefits such as exclusive content, personalized coaching, and advanced resources by becoming a Pro Member.
          </p>
          <a
            href="/exclusives"
            className="bg-[#461fa3] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-[#7646eb] transition duration-300"
          >
            Join Pro Membership
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#f3f1f9] py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-[#200e4a]">What Our Students Say</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              "“ChessCodex made learning chess accessible and enjoyable. Highly recommended!” - Sarah K.",
              "“The online sessions are engaging, and the tutors are exceptional!” - David L.",
              "“ChessCodex helped me master chess without leaving my home!” - Emily R.",
            ].map((testimonial, index) => (
              <blockquote
                key={index}
                className="italic text-[#270185] bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                {testimonial}
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborate Section */}
      <section className="bg-gradient-to-r from-[#200e4a] via-[#461fa3] to-[#7646eb] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Collaborate with Us</h2>
          <p className="text-lg mb-6">
            Partner with ChessCodex to promote chess and create a meaningful impact in the community.
          </p>
          <a
            href="/collaborate-with-us"
            className="bg-[#af0505] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-[#8c0404] transition duration-300"
          >
            View Brochure
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;