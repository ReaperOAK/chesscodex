import React, { useEffect, useRef, useState } from "react";
import SEO from '../components/SEO';
import { NavLink, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import ReferralProgramme from './ReferralProgramme';
import ChessInSchools from './ChessInSchools';
import ChessInWorkspaces from './ChessInWorkspaces';
import ChessAcademies from './ChessAcademies';
// ...removed duplicate import...
const CollaborateWithUs = () => {
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
    <>
      <SEO
        title={`Collaborate With Us - ${siteName}`}
        description={`Partner with ${siteName} to promote chess, foster creativity, and make a meaningful impact in your community.`}
        keywords={isAspireChess ? 'AspireChess, collaborate, partnership, chess, community' : 'Kolkata Chess Academy, collaborate, partnership, chess, community'}
        image={isAspireChess ? 'https://kolkatachessacademy.in/aca.png' : 'https://kolkatachessacademy.in/kca.png'}
        url={isAspireChess ? 'https://kolkatachessacademy.in/aspirechess/collaborate-with-us' : 'https://kolkatachessacademy.in/collaborate-with-us'}
        type="website"
        canonical={isAspireChess ? 'https://kolkatachessacademy.in/aspirechess/collaborate-with-us' : 'https://kolkatachessacademy.in/collaborate-with-us'}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: `Collaborate With Us - ${siteName}`,
          url: isAspireChess ? 'https://kolkatachessacademy.in/aspirechess/collaborate-with-us' : 'https://kolkatachessacademy.in/collaborate-with-us',
          description: `Partner with ${siteName} to promote chess, foster creativity, and make a meaningful impact in your community.`
        }}
      />
      
      {/* Hero Section */}
      <section className={heroClasses}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white">Collaborate With Us</h1>
          <p className="text-lg text-gray-300">
            Partner with us to promote chess, foster creativity, and make a meaningful impact in your community.
          </p>
        </div>
      </section>

      {/* Sentinel Element for sticky nav */}
      <div ref={sentinelRef}></div>

      {/* Navigation Links */}
      <nav ref={menuRef} className={`${navClasses} ${isSticky ? 'sticky top-16 z-40' : ''}`}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="hidden md:flex flex-wrap justify-center gap-4">
            <NavLink to="referral-programme" className={({ isActive }) => `px-4 py-2 font-semibold rounded-lg shadow-md transition duration-300 ${isActive ? navLinkActiveClasses : navLinkIdleClasses}`}>Referral Programme</NavLink>
            <NavLink to="chess-in-schools" className={({ isActive }) => `px-4 py-2 font-semibold rounded-lg shadow-md transition duration-300 ${isActive ? navLinkActiveClasses : navLinkIdleClasses}`}>Chess in Schools</NavLink>
            <NavLink to="chess-in-workspaces" className={({ isActive }) => `px-4 py-2 font-semibold rounded-lg shadow-md transition duration-300 ${isActive ? navLinkActiveClasses : navLinkIdleClasses}`}>Chess in Workspaces</NavLink>
            <NavLink to="chess-academies" className={({ isActive }) => `px-4 py-2 font-semibold rounded-lg shadow-md transition duration-300 ${isActive ? navLinkActiveClasses : navLinkIdleClasses}`}>Chess Academies</NavLink>
          </div>
        </div>
      </nav>

      <div className={isAspireChess ? "py-16 sm:py-24" : ""}>
        <Routes>
          <Route path="/" element={<Navigate to="referral-programme" />} />
          <Route path="referral-programme" element={<ReferralProgramme />} />
          <Route path="chess-in-schools" element={<ChessInSchools />} />
          <Route path="chess-in-workspaces" element={<ChessInWorkspaces />} />
          <Route path="chess-academies" element={<ChessAcademies />} />
        </Routes>
      </div>
    </>
  );
};

export default CollaborateWithUs;