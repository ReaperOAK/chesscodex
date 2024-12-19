import React from "react";
import { Helmet } from 'react-helmet';

const CollaborateWithUs = () => {
  return (
    <div>
      <Helmet>
        <title>Collaborate With Us - ChessCodex</title>
        <meta name="description" content="Partner with ChessCodex to promote chess, foster creativity, and make a meaningful impact in your community. Learn about our referral program, chess in schools, workspaces, and academies." />
        <meta name="keywords" content="ChessCodex, chess collaboration, chess referral program, chess in schools, chess in workspaces, chess academies" />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#200e4a] via-[#461fa3] to-[#7646eb] text-white py-20 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Collaborate With Us</h1>
          <p className="text-lg md:text-xl">
            Partner with us to promote chess, foster creativity, and make a meaningful impact in your community.
          </p>
        </div>
      </section>

      {/* Sections Wrapper */}
      <div className="space-y-20 py-16 bg-[#f3f1f9]">
        {/* Referral Programme */}
        <section className="bg-white rounded-lg shadow-md py-12">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-[#200e4a] mb-4">
              Referral Programme
            </h2>
            <p className="text-lg text-[#270185] mb-6">
              Share your love for chess and earn rewards by bringing your friends and family to our academy.
            </p>
            <div className="bg-[#f3f1f9] p-8 rounded-lg">
              <ul className="list-disc list-inside text-left text-[#270185]">
                <li className="mb-3">
                  <strong>Earn Discounts:</strong> Receive exclusive discounts for every successful referral.
                </li>
                <li className="mb-3">
                  <strong>Share the Benefits:</strong> Introduce others to the joy of learning chess with us.
                </li>
                <li>
                  <strong>Simple Process:</strong> Refer, enroll, and get rewarded!
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Chess in Schools */}
        <section className="bg-[#f3f1f9] py-12">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-[#200e4a] mb-4">
              Chess in Schools
            </h2>
            <p className="text-lg text-[#270185] mb-6">
              Bring the timeless game of chess to the classroom, enriching young minds through strategic thinking.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-2xl font-bold text-[#461fa3] mb-2">
                  Structured Lessons
                </h3>
                <p className="text-[#270185]">
                  Tailored chess lessons designed to improve cognitive skills and problem-solving abilities.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-2xl font-bold text-[#461fa3] mb-2">
                  Tournaments & Competitions
                </h3>
                <p className="text-[#270185]">
                  Encourage students to showcase their skills and build confidence through competitive events.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Chess in Workspaces */}
        <section className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-[#200e4a] mb-4">
              Chess in Workspaces
            </h2>
            <p className="text-lg text-[#270185] mb-6">
              Empower employees with chess-based workshops that boost strategic thinking, focus, and teamwork.
            </p>
            <div className="flex justify-center">
              <div className="bg-[#f3f1f9] p-8 rounded-lg shadow-lg max-w-xl">
                <ul className="list-disc list-inside text-left text-[#270185]">
                  <li className="mb-3">
                    <strong>Workshops & Training:</strong> Interactive sessions to hone cognitive and analytical skills.
                  </li>
                  <li className="mb-3">
                    <strong>Team Building:</strong> Encourage collaboration and camaraderie through chess.
                  </li>
                  <li>
                    <strong>Corporate Tournaments:</strong> Host engaging tournaments for your organization.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Chess Academies */}
        <section className="bg-[#f3f1f9] py-12">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-[#200e4a] mb-4">
              Chess Academies
            </h2>
            <p className="text-lg text-[#270185] mb-6">
              Join our network of chess academies to expand the game’s reach and create world-class learning opportunities.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-[#270185]">
                Collaborate with us to organize joint events, share resources, and elevate the standard of chess training worldwide.
              </p>
              <p className="text-[#270185] mt-4">
                Our academy network provides a platform for chess enthusiasts to connect, learn, and grow together. We offer comprehensive training programs, access to exclusive resources, and opportunities to participate in national and international tournaments.
              </p>
              <p className="text-[#270185] mt-4">
                By joining our network, you will benefit from our expertise, support, and commitment to excellence in chess education. Together, we can make a significant impact on the chess community and help aspiring players achieve their full potential.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Call to Action */}
      <section className="bg-[#200e4a] text-white py-12 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Let’s Make a Difference Together!</h2>
          <p className="text-lg mb-8">
            Ready to collaborate? Reach out to us today and become a part of our chess community.
          </p>
          <a
            href="/contact"
            className="bg-[#af0505] text-white font-bold py-3 px-6 rounded shadow hover:bg-[#8c0404] transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default CollaborateWithUs;