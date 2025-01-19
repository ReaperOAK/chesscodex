import React, { useEffect, useRef, useState } from "react";
import { Helmet } from 'react-helmet-async';
import { NavLink, Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';
import ProMembership from './ProMembership';
import Scholarships from './Scholarships';
import GameAnalysis from './GameAnalysis';

const Exclusives = () => {
  const [isSticky, setIsSticky] = useState(false);
  const menuRef = useRef(null);
  const sentinelRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const isChessCodex = location.pathname.startsWith('/chesscodex');
  const isAspireChess = location.pathname.startsWith('/aspirechess');
  const siteName = isChessCodex ? 'ChessCodex' : 'AspireChess';
  const siteDescription = isChessCodex
    ? 'Unlock exclusive benefits with our Pro Membership and Scholarships. Learn more about our exclusive offers and pricing plans.'
    : 'Unlock exclusive benefits with our Pro Membership and Scholarships. Learn more about our exclusive offers and pricing plans.';
  const siteKeywords = isChessCodex
    ? 'ChessCodex, Pro Membership, chess scholarships, chess exclusives, chess benefits, chess pricing'
    : 'AspireChess, Pro Membership, chess scholarships, chess exclusives, chess benefits, chess pricing';

  useEffect(() => {
    const currentSentinelRef = sentinelRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (currentSentinelRef) {
      observer.observe(currentSentinelRef);
    }

    return () => {
      if (currentSentinelRef) {
        observer.unobserve(currentSentinelRef);
      }
    };
  }, []);

  const handleDropdownChange = (event) => {
    navigate(event.target.value);
  };

  return (
    <div>
      <Helmet>
        <title>Exclusives - {siteName}</title>
        <meta name="description" content={siteDescription} />
        <meta name="keywords" content={siteKeywords} />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#200e4a] via-[#461fa3] to-[#7646eb] text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold mb-4">Exclusives</h1>
          <p className="text-lg">
            Unlock exclusive benefits with our Pro Membership and Scholarships.
          </p>
        </div>
      </section>

      {/* Sentinel Element */}
      <div ref={sentinelRef} className="h-1"></div>

      {/* Navigation Links */}
      <nav ref={menuRef} className={`bg-[#f3f1f9] py-4 shadow-md ${isSticky ? 'sticky top-10 z-40' : ''}`}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="md:hidden">
            <select
              onChange={handleDropdownChange}
              className="w-full px-4 py-2 bg-[#461fa3] text-white font-semibold rounded-lg shadow-md focus:outline-none"
            >
              <option value="pro-membership">Pro Membership</option>
              <option value="game-analysis">Game Analysis</option>
              {(isChessCodex || isAspireChess) && (<option value="scholarships">Scholarships</option>)}
            </select>
          </div>
          <div className="hidden md:flex flex-wrap justify-center space-x-2 space-y-2 md:space-y-0">
            <NavLink
              to="pro-membership"
              className={({ isActive }) =>
                isActive
                  ? "px-4 py-2 bg-[#200e4a] text-white font-semibold rounded-lg shadow-md transition duration-300"
                  : "px-4 py-2 bg-[#461fa3] text-white font-semibold rounded-lg shadow-md hover:bg-[#200e4a] transition duration-300"
              }
            >
              Pro Membership
            </NavLink>
            <NavLink
              to="game-analysis"
              className={({ isActive }) =>
                isActive
                  ? "px-4 py-2 bg-[#200e4a] text-white font-semibold rounded-lg shadow-md transition duration-300"
                  : "px-4 py-2 bg-[#461fa3] text-white font-semibold rounded-lg shadow-md hover:bg-[#200e4a] transition duration-300"
              }
            >
              Game Analysis
            </NavLink>
            {(isChessCodex || isAspireChess) && (
            <NavLink
              to="scholarships"
              className={({ isActive }) =>
                isActive
                  ? "px-4 py-2 bg-[#200e4a] text-white font-semibold rounded-lg shadow-md transition duration-300"
                  : "px-4 py-2 bg-[#461fa3] text-white font-semibold rounded-lg shadow-md hover:bg-[#200e4a] transition duration-300"
              }
            >
              Scholarships
            </NavLink>
          )}
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Navigate to="pro-membership" />} />
        <Route path="pro-membership" element={<ProMembership />} />
        <Route path="game-analysis" element={<GameAnalysis />} />
        <Route path="scholarships" element={<Scholarships />} />
      </Routes>

      {/* Add padding at the bottom to prevent overlay */}
      <div className="pb-20"></div>
    </div>
  );
};

export default Exclusives;