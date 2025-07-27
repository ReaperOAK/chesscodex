import React, { useEffect, useRef, useState } from "react";
import { Helmet } from 'react-helmet-async';
import { NavLink, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import ProMembership from './ProMembership';
import Scholarships from './Scholarships';
import GameAnalysis from './GameAnalysis';

const Exclusives = () => {
  const [isSticky, setIsSticky] = useState(false);
  const menuRef = useRef(null);
  const sentinelRef = useRef(null);
  // ...removed unused navigate...
  const location = useLocation();
  const isAspireChess = location.pathname.startsWith('/aspirechess');
  const siteName = isAspireChess ? 'AspireChess' : 'Kolkata Chess Academy';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      { rootMargin: "-1px 0px 0px 0px", threshold: 1 }
    );
    const currentSentinel = sentinelRef.current;
    if (currentSentinel) observer.observe(currentSentinel);
    return () => {
      if (currentSentinel) observer.unobserve(currentSentinel);
    };
  }, []);

  // ...removed unused handleDropdownChange...

  // --- Theme-Aware Class Definitions ---
  const heroClasses = isAspireChess 
    ? "py-24" 
    : "bg-gradient-to-r from-brand-dark via-brand-secondary to-brand-primary text-white py-16";
  
  const navClasses = isAspireChess
    ? `bg-black bg-opacity-20 backdrop-blur-md border-y border-gray-700/50 py-4 shadow-lg`
    : `bg-brand-light py-4 shadow-md`;
  
  const navLinkActiveClasses = isAspireChess
    ? "bg-amber-500 text-gray-900"
    : "bg-brand-dark text-white";

  const navLinkIdleClasses = isAspireChess
    ? "bg-gray-700/50 text-white hover:bg-gray-600/50"
    : "bg-brand-secondary text-white hover:bg-brand-dark";

  return (
    <div>
      <Helmet>
        <title>Exclusives - {siteName}</title>
        {/* Meta tags */}
      </Helmet>
      
      {/* Hero Section */}
      <section className={heroClasses}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white">Exclusives</h1>
          <p className="text-lg text-gray-300">
            Unlock premium benefits with our Pro Membership, Game Analysis, and Scholarship programs.
          </p>
        </div>
      </section>

      {/* Sentinel Element for sticky nav */}
      <div ref={sentinelRef}></div>

      {/* Navigation Links */}
      <nav ref={menuRef} className={`${navClasses} ${isSticky ? 'sticky top-16 z-40' : ''}`}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="hidden md:flex flex-wrap justify-center gap-4">
            <NavLink to="pro-membership" className={({ isActive }) => `px-4 py-2 font-semibold rounded-lg shadow-md transition duration-300 ${isActive ? navLinkActiveClasses : navLinkIdleClasses}`}>Pro Membership</NavLink>
            <NavLink to="game-analysis" className={({ isActive }) => `px-4 py-2 font-semibold rounded-lg shadow-md transition duration-300 ${isActive ? navLinkActiveClasses : navLinkIdleClasses}`}>Game Analysis</NavLink>
            <NavLink to="scholarships" className={({ isActive }) => `px-4 py-2 font-semibold rounded-lg shadow-md transition duration-300 ${isActive ? navLinkActiveClasses : navLinkIdleClasses}`}>Scholarships</NavLink>
          </div>
        </div>
      </nav>

      <div className={isAspireChess ? "py-16 sm:py-24" : ""}>
        <Routes>
          <Route path="/" element={<Navigate to="pro-membership" />} />
          <Route path="pro-membership" element={<ProMembership />} />
          <Route path="game-analysis" element={<GameAnalysis />} />
          <Route path="scholarships" element={<Scholarships />} />
        </Routes>
      </div>
    </div>
  );
};

export default Exclusives;