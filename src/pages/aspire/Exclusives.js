import React, { useEffect, useRef, useState } from "react";
import SEO from '../../components/SEO';
import { NavLink, Route, Routes, Navigate } from 'react-router-dom';
import ProMembership from './ProMembership';
import Scholarships from './Scholarships';
import GameAnalysis from './GameAnalysis';
import YuddhoRaja from './YuddhoRaja';
import ReferralProgramme from './ReferralProgramme';
import ChessInSchools from './ChessInSchools';
import ChessInWorkspaces from './ChessInWorkspaces';
import ChessAcademies from './ChessAcademies';


const TABS = [
  {
    key: 'exclusives',
    label: 'Exclusives',
    nav: [
      { to: 'yuddho-raja', label: 'Yuddho Raja-y Raja-y' },
      { to: 'game-analysis', label: 'Game Analysis' },
      { to: 'pro-membership', label: 'Pro Membership' },
      { to: 'scholarships', label: 'Scholarships' },
    ],
    default: 'yuddho-raja',
    hero: {
      title: 'Exclusives',
      desc: 'Unlock premium benefits with our Pro Membership, Game Analysis, and Scholarship programs.'
    },
  },
  {
    key: 'collaboration',
    label: 'Collaboration',
    nav: [
      { to: 'referral-programme', label: 'Referral Programme' },
      { to: 'chess-in-schools', label: 'Chess in Schools' },
      { to: 'chess-in-workspaces', label: 'Chess in Workspaces' },
      { to: 'chess-academies', label: 'Chess Academies' },
    ],
    default: 'referral-programme',
    hero: {
      title: 'Collaboration',
      desc: 'Partner with us to promote chess, foster creativity, and make a meaningful impact in your community.'
    },
  },
];

const AspireExclusives = () => {
  const [isSticky, setIsSticky] = useState(false);
  const menuRef = useRef(null);
  const sentinelRef = useRef(null);
  const [activeTab, setActiveTab] = useState('exclusives');

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

  // Find current tab config
  const tab = TABS.find(t => t.key === activeTab);

  // Dynamic SEO title/desc
  const seoTitle = `${tab.hero.title} - AspireChess`;
  const seoDesc = tab.hero.desc;

  // Mobile nav open/close
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDesc}
        keywords={'AspireChess, exclusives, collaboration, pro membership, game analysis, scholarships, partnership'}
        image={'https://kolkatachessacademy.in/aca.png'}
        url={'https://kolkatachessacademy.in/aspirechess/exclusives'}
        type="website"
        canonical={'https://kolkatachessacademy.in/aspirechess/exclusives'}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: seoTitle,
          url: 'https://kolkatachessacademy.in/aspirechess/exclusives',
          description: seoDesc
        }}
      />
      {/* Hero Section */}
      <section className={heroClasses}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white">{tab.hero.title}</h1>
          <p className="text-lg text-gray-300">{tab.hero.desc}</p>
        </div>
      </section>

      {/* Sentinel Element for sticky nav */}
      <div ref={sentinelRef}></div>

      {/* Tabs for Exclusives & Collaboration */}
      <div className="flex justify-center mt-4 gap-4">
        {TABS.map(t => (
          <button
            key={t.key}
            className={`px-6 py-2 rounded-t-lg font-bold focus:outline-none transition-colors duration-200 ${activeTab === t.key ? 'bg-amber-500 text-gray-900' : 'bg-gray-700/50 text-white hover:bg-gray-600/50'}`}
            onClick={() => { setActiveTab(t.key); setMobileNavOpen(false); }}
            aria-current={activeTab === t.key ? 'page' : undefined}
            aria-label={t.label}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Navigation Links for each tab (desktop) */}
      <nav ref={menuRef} className={`${navClasses} ${isSticky ? 'sticky top-16 z-40' : ''}`}>  
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="hidden md:flex flex-wrap justify-center gap-4">
            {tab.nav.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `px-4 py-2 font-semibold rounded-lg shadow-md transition duration-300 ${isActive ? navLinkActiveClasses : navLinkIdleClasses}`}
                aria-label={link.label}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          {/* Mobile nav toggle */}
          <div className="md:hidden flex justify-center mt-2">
            <button
              className="px-4 py-2 bg-amber-500 text-gray-900 rounded-lg font-semibold shadow-md focus:outline-none"
              onClick={() => setMobileNavOpen(o => !o)}
              aria-label="Toggle section navigation"
              aria-expanded={mobileNavOpen}
            >
              {mobileNavOpen ? 'Close Sections' : 'Sections'}
            </button>
          </div>
          {/* Mobile nav links */}
          {mobileNavOpen && (
            <div className="flex flex-col items-center gap-2 mt-2 md:hidden">
              {tab.nav.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) => `w-full px-4 py-2 font-semibold rounded-lg shadow-md transition duration-300 text-center ${isActive ? navLinkActiveClasses : navLinkIdleClasses}`}
                  aria-label={link.label}
                  onClick={() => setMobileNavOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Section content */}
      <Routes>
        {/* Exclusives routes */}
        <Route path="/" element={<Navigate to={tab.default} />} />
        <Route path="pro-membership" element={<ProMembership />} />
        <Route path="game-analysis" element={<GameAnalysis />} />
        <Route path="scholarships" element={<Scholarships />} />
        <Route path="yuddho-raja" element={<YuddhoRaja />} />
        {/* Collaboration routes */}
        <Route path="referral-programme" element={<ReferralProgramme />} />
        <Route path="chess-in-schools" element={<ChessInSchools />} />
        <Route path="chess-in-workspaces" element={<ChessInWorkspaces />} />
        <Route path="chess-academies" element={<ChessAcademies />} />
      </Routes>
    </>
  );
};

export default AspireExclusives;