import React, { useEffect, useRef, useState } from "react";
import SEO from '../../components/SEO';
import { NavLink, Route, Routes, Navigate } from 'react-router-dom';
import ProMembership from './ProMembership';
import Scholarships from './Scholarships';
import GameAnalysis from './GameAnalysis';


const Exclusives = () => {
  const [isSticky, setIsSticky] = useState(false);
  const menuRef = useRef(null);
  const sentinelRef = useRef(null);
  const siteName = 'Kolkata Chess Academy';

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

  // KCA Theme Classes
  const heroClasses = "bg-gradient-to-r from-brand-dark via-brand-secondary to-brand-primary text-white py-16";
  const navClasses = "bg-brand-light py-4 shadow-md";
  const navLinkActiveClasses = "bg-brand-dark text-white";
  const navLinkIdleClasses = "bg-brand-secondary text-white hover:bg-brand-dark";

  return (
    <div>
      <SEO
        title={`Exclusives - ${siteName}`}
        description={`Unlock premium benefits with Pro Membership, Game Analysis, and Scholarship programs at ${siteName}.`}
        keywords={'Kolkata Chess Academy, exclusives, pro membership, game analysis, scholarships'}
        image={'https://kolkatachessacademy.in/kca.png'}
        url={'https://kolkatachessacademy.in/exclusives'}
        type="website"
        canonical={'https://kolkatachessacademy.in/exclusives'}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: `${siteName} Exclusives`,
          url: 'https://kolkatachessacademy.in/exclusives',
          description: `Unlock premium benefits with Pro Membership, Game Analysis, and Scholarship programs at ${siteName}.`
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
          </div>
        </div>
      </nav>

      <div>
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