import React, { useEffect, useRef, useState } from "react";
import SEO from '../../components/SEO';
import { NavLink, Route, Routes, Navigate } from 'react-router-dom';
import ProMembership from './ProMembership';
import Scholarships from './Scholarships';
import GameAnalysis from './GameAnalysis';
import YuddhoRaja from './YuddhoRaja';


const AspireExclusives = () => {
  const [isSticky, setIsSticky] = useState(false);
  const menuRef = useRef(null);
  const sentinelRef = useRef(null);

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

  // Aspire theme only
  const heroClasses = "py-24";
  const navClasses = `bg-black bg-opacity-20 backdrop-blur-md border-y border-gray-700/50 py-4 shadow-lg`;
  const navLinkActiveClasses = "bg-amber-500 text-gray-900";
  const navLinkIdleClasses = "bg-gray-700/50 text-white hover:bg-gray-600/50";

  return (
    <div>
      <SEO
        title={`Exclusives - AspireChess`}
        description={`Unlock premium benefits with Pro Membership, Game Analysis, and Scholarship programs at AspireChess.`}
        keywords={'AspireChess, exclusives, pro membership, game analysis, scholarships'}
        image={'https://kolkatachessacademy.in/aca.png'}
        url={'https://kolkatachessacademy.in/aspirechess/exclusives'}
        type="website"
        canonical={'https://kolkatachessacademy.in/aspirechess/exclusives'}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: `AspireChess Exclusives`,
          url: 'https://kolkatachessacademy.in/aspirechess/exclusives',
          description: `Unlock premium benefits with Pro Membership, Game Analysis, and Scholarship programs at AspireChess.`
        }}
      />
      
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
            <NavLink to="yuddho-raja" className={({ isActive }) => `px-4 py-2 font-semibold rounded-lg shadow-md transition duration-300 ${isActive ? navLinkActiveClasses : navLinkIdleClasses}`}>Yuddho Raja-y Raja-y</NavLink>
          </div>
        </div>
      </nav>

      <div className="py-16 sm:py-24">
        <Routes>
          <Route path="/" element={<Navigate to="pro-membership" />} />
          <Route path="pro-membership" element={<ProMembership />} />
          <Route path="game-analysis" element={<GameAnalysis />} />
          <Route path="scholarships" element={<Scholarships />} />
          <Route path="yuddho-raja" element={<YuddhoRaja />} />
        </Routes>
      </div>
    </div>
  );
};

export default AspireExclusives;