import React from 'react';

const CTA = () => {
  return (
    <section className="bg-gradient-to-br from-[#200e4a] via-[#461fa3] to-[#7646eb] text-white py-16 sm:py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
          Unleash Your Inner Grandmaster
        </h1>
        <p className="text-lg sm:text-xl mb-8 text-white max-w-3xl mx-auto">
          Take your chess skills to the next level with <span className="font-semibold">ChessCodex</span>. Join our world-class training programs, designed for all skill levels, and start your journey toward mastery.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <a
            href="/admission"
            aria-label="Enroll Now"
            className="inline-flex items-center justify-center gap-2 bg-[#af0505] text-white font-semibold py-3 px-6 rounded-full shadow-md hover:bg-[#8c0404] hover:shadow-lg transition-transform transform hover:scale-105 duration-300"
          >
            <span>🎓 Enroll Now</span>
          </a>
          <a
            href="/contact"
            aria-label="Contact Us"
            className="inline-flex items-center justify-center gap-2 bg-[#461fa3] text-white font-semibold py-3 px-6 rounded-full shadow-md hover:bg-[#7646eb] hover:shadow-lg transition-transform transform hover:scale-105 duration-300"
          >
            <span>📞 Contact Us</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;