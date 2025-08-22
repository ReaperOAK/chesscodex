import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// Keep this event visible during testing; set to a future date
const END_DATE = new Date('2025-12-31T23:59:59');

const PopupInaugTournament = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const isAspireChess = location.pathname.startsWith('/aspirechess');

  useEffect(() => {
    const now = new Date();
    if (now <= END_DATE) {
      setShow(true);
    }
  }, []);

  // Close on Escape key for better accessibility
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setShow(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${isAspireChess ? 'bg-gradient-to-br from-black/80 via-brand-primary/80 to-black/70' : 'bg-gradient-to-br from-black/75 via-cyan-700/60 to-pink-800/70'} backdrop-blur-sm animate-fadeIn`}
      onClick={() => setShow(false)}
      role="presentation"
    >
      <div
        className={`relative max-w-2xl w-full p-0 overflow-hidden animate-popupScale rounded-3xl shadow-2xl ${isAspireChess ? 'bg-white/95 border-2 border-brand-primary/30' : 'bg-black bg-opacity-20 border-2 border-cyan-400/20'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Announcement: Grand Inauguration & Tournament"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside the modal
      >
        <button
          className={`absolute top-5 right-5 w-11 h-11 flex items-center justify-center rounded-full ${isAspireChess ? 'bg-white/80 border border-gray-200 text-gray-700 hover:bg-red-500 hover:text-white' : 'bg-white/10 border border-cyan-300 text-cyan-200 hover:bg-cyan-500 hover:text-white'} shadow transition-all duration-200 focus:outline-none focus:ring-2 ${isAspireChess ? 'focus:ring-brand-primary' : 'focus:ring-cyan-400'}`}
          onClick={() => setShow(false)}
          aria-label="Close announcement"
        >
          <span className="sr-only">Close</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img
          src="/popup/aca_inaug-parnasree.png"
          alt="Grand Inauguration & Tournament Poster"
          className={`w-full h-[480px] sm:h-[600px] object-contain ${isAspireChess ? 'bg-white rounded-3xl' : 'bg-transparent'}`}
        />
        <div className="text-center px-4 py-2">
          <p className={`font-semibold text-base sm:text-lg mb-1 ${isAspireChess ? 'text-brand-primary' : 'text-cyan-300'}`}>Grand Inauguration & Tournament</p>
          <p className="text-xs sm:text-sm text-gray-200">Registration closes 15th August 2025.</p>
          <a
            href={isAspireChess ? '/aspirechess/events-blogs' : '/kca/events-blogs'}
            className={`inline-block mt-2 px-6 py-2 rounded-full font-medium text-sm shadow transition-all duration-200 focus:outline-none focus:ring-2 ${isAspireChess ? 'bg-brand-primary text-white hover:bg-brand-primary/90 focus:ring-brand-primary' : 'bg-gradient-to-r from-cyan-500 to-pink-500 text-white hover:opacity-95 focus:ring-cyan-400'}`}
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
