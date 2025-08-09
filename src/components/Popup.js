import React, { useEffect, useState } from 'react';

const END_DATE = new Date('2025-08-15T23:59:59');

const PopupInaugTournament = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const now = new Date();
    if (now <= END_DATE) {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black/80 via-brand-primary/80 to-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative bg-white/95 rounded-3xl shadow-2xl border-2 border-brand-primary/30 max-w-2xl w-full p-0 overflow-hidden animate-popupScale">
        <button
          className="absolute top-5 right-5 w-11 h-11 flex items-center justify-center rounded-full bg-white/80 border border-gray-200 shadow hover:bg-red-500 hover:text-white text-gray-700 text-3xl font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary"
          onClick={() => setShow(false)}
          aria-label="Close announcement"
        >
          <span className="sr-only">Close</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img
          src='/popup/aca_inaug-parnasree.png'
          alt="Grand Inauguration & Tournament Poster"
          className="w-full h-[480px] sm:h-[600px] object-contain bg-white rounded-3xl"
        />
        <div className="text-center px-4 py-2">
          <p className="font-semibold text-base sm:text-lg text-brand-primary mb-1">Grand Inauguration & Tournament</p>
          <p className="text-xs sm:text-sm text-gray-700">Registration closes 15th August 2025.</p>
          <a
            href="/aspirechess/events-blogs"
            className="inline-block mt-2 px-6 py-2 rounded-full bg-brand-primary text-white font-medium text-sm shadow hover:bg-brand-primary/90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary"
          >
            Register Now
          </a>
        </div>
      </div>
      {/* Animations */}
      <style>{`
        .animate-fadeIn { animation: fadeIn 0.5s cubic-bezier(.4,0,.2,1); }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-popupScale { animation: popupScale 0.5s cubic-bezier(.4,0,.2,1); }
        @keyframes popupScale { from { transform: scale(0.85); opacity: 0; } to { transform: scale(1); opacity: 1; } }
      `}</style>
    </div>
  );
};

export default PopupInaugTournament;
