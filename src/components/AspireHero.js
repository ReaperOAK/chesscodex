import React from 'react';

const AspireHero = ({ siteName, sectionClass }) => {
  return (
    <section aria-label="Hero">
      <div className="max-w-7xl mx-auto px-4">
        <div className={"relative overflow-hidden rounded-2xl " + sectionClass} style={{ minHeight: 420 }}>
          {/* Background using image on the right for composition */}
          <div
            className="absolute inset-0 bg-cover bg-right"
            style={{ backgroundImage: "url('/aca.png')" }}
            aria-hidden="true"
          />

          {/* Soft vignette / dim overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" aria-hidden="true"></div>

          {/* Large headline — visually prominent */}
          <h2 className="absolute left-6 top-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-amber-300 uppercase drop-shadow-lg" style={{letterSpacing: '-1px'}}>
            Best Chess Coaching in India
          </h2>

          {/* Main content grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center h-full">
            {/* Left: translucent card + CTAs */}
            <div className="px-6 py-12 md:py-20">
              <div className="max-w-xl">
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-[36px] p-8 sm:p-10 text-white">
                  <p className="text-lg sm:text-xl leading-relaxed text-white/90">
                    Welcome to {siteName}, the leading destination for chess enthusiasts and parents seeking the best chess coaching. Our academy provides top-notch training, personalized mentorship, and structured programs to help students reach titled and rated milestones.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="/aspirechess/contact"
                    className="inline-flex items-center justify-center bg-amber-400 text-gray-900 font-bold px-6 py-3 rounded-full text-lg shadow-xl hover:bg-amber-300 transition"
                    aria-label="Book Free Demo"
                  >
                    Book Free Demo
                  </a>

                  <a
                    href="/aspirechess/courses"
                    className="inline-flex items-center justify-center border border-white/40 text-white font-semibold px-5 py-3 rounded-full text-lg hover:bg-white/5 transition"
                    aria-label="Learn More about courses"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            {/* Right: decorative empty space (image already in background) */}
            <div className="hidden md:block" aria-hidden="true"></div>
          </div>

          {/* Bottom accent stripe */}
          <div className="absolute bottom-0 left-0 right-0 h-3 bg-amber-400" aria-hidden="true"></div>
        </div>
      </div>
    </section>
  );
};

export default AspireHero;
