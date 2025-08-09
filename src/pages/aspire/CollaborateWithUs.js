import React, { useEffect, useRef, useState } from "react";
import SEO from '../../components/SEO';
import { NavLink, Route, Routes, Navigate } from 'react-router-dom';
import ReferralProgramme from './ReferralProgramme';
import ChessInSchools from './ChessInSchools';
import ChessInWorkspaces from './ChessInWorkspaces';
import ChessAcademies from './ChessAcademies';
// ...removed duplicate import...

const AspireCollaborateWithUs = () => {
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
    <>
      <SEO
        title={`Collaborate With Us - AspireChess`}
        description={`Partner with AspireChess to promote chess, foster creativity, and make a meaningful impact in your community.`}
        keywords={'AspireChess, collaborate, partnership, chess, community'}
        image={'https://kolkatachessacademy.in/aca.png'}
        url={'https://kolkatachessacademy.in/aspirechess/collaborate-with-us'}
        type="website"
        canonical={'https://kolkatachessacademy.in/aspirechess/collaborate-with-us'}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: `Collaborate With Us - AspireChess`,
          url: 'https://kolkatachessacademy.in/aspirechess/collaborate-with-us',
          description: `Partner with AspireChess to promote chess, foster creativity, and make a meaningful impact in your community.`
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

      <div className="py-16 sm:py-24">
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

export default AspireCollaborateWithUs;