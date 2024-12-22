import React, { useEffect, useRef, useState } from "react";
import { Helmet } from 'react-helmet-async';
import { NavLink, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import ReferralProgramme from './ReferralProgramme';
import ChessInSchools from './ChessInSchools';
import ChessInWorkspaces from './ChessInWorkspaces';
import ChessAcademies from './ChessAcademies';

const CollaborateWithUs = () => {
  const [isSticky, setIsSticky] = useState(false);
  const menuRef = useRef(null);
  const sentinelRef = useRef(null);
  const navigate = useNavigate();

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
        <title>Collaborate With Us - ChessCodex</title>
        <meta name="description" content="Partner with ChessCodex to promote chess, foster creativity, and make a meaningful impact in your community. Learn about our referral program, chess in schools, workspaces, and academies." />
        <meta name="keywords" content="ChessCodex, chess collaboration, chess referral program, chess in schools, chess in workspaces, chess academies" />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#200e4a] via-[#461fa3] to-[#7646eb] text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold mb-4">Collaborate With Us</h1>
          <p className="text-lg">
            Partner with us to promote chess, foster creativity, and make a meaningful impact in your community.
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
              <option value="referral-programme">Referral Programme</option>
              <option value="chess-in-schools">Chess in Schools</option>
              <option value="chess-in-workspaces">Chess in Workspaces</option>
              <option value="chess-academies">Chess Academies</option>
            </select>
          </div>
          <div className="hidden md:flex flex-wrap justify-center space-x-2 space-y-2 md:space-y-0">
            <NavLink
              to="referral-programme"
              className={({ isActive }) =>
                isActive
                  ? "px-4 py-2 bg-[#200e4a] text-white font-semibold rounded-lg shadow-md transition duration-300"
                  : "px-4 py-2 bg-[#461fa3] text-white font-semibold rounded-lg shadow-md hover:bg-[#200e4a] transition duration-300"
              }
            >
              Referral Programme
            </NavLink>
            <NavLink
              to="chess-in-schools"
              className={({ isActive }) =>
                isActive
                  ? "px-4 py-2 bg-[#200e4a] text-white font-semibold rounded-lg shadow-md transition duration-300"
                  : "px-4 py-2 bg-[#461fa3] text-white font-semibold rounded-lg shadow-md hover:bg-[#200e4a] transition duration-300"
              }
            >
              Chess in Schools
            </NavLink>
            <NavLink
              to="chess-in-workspaces"
              className={({ isActive }) =>
                isActive
                  ? "px-4 py-2 bg-[#200e4a] text-white font-semibold rounded-lg shadow-md transition duration-300"
                  : "px-4 py-2 bg-[#461fa3] text-white font-semibold rounded-lg shadow-md hover:bg-[#200e4a] transition duration-300"
              }
            >
              Chess in Workspaces
            </NavLink>
            <NavLink
              to="chess-academies"
              className={({ isActive }) =>
                isActive
                  ? "px-4 py-2 bg-[#200e4a] text-white font-semibold rounded-lg shadow-md transition duration-300"
                  : "px-4 py-2 bg-[#461fa3] text-white font-semibold rounded-lg shadow-md hover:bg-[#200e4a] transition duration-300"
              }
            >
              Chess Academies
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Navigate to="referral-programme" />} />
        <Route path="referral-programme" element={<ReferralProgramme />} />
        <Route path="chess-in-schools" element={<ChessInSchools />} />
        <Route path="chess-in-workspaces" element={<ChessInWorkspaces />} />
        <Route path="chess-academies" element={<ChessAcademies />} />
      </Routes>

      {/* Collaboration Section */}
      <section className="bg-gradient-to-r from-[#200e4a] via-[#461fa3] to-[#7646eb] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Collaborate with Us</h2>
          <p className="text-lg mb-6">
            Partner with ChessCodex to promote chess and create a meaningful impact in the community.
          </p>
          <a
            href="/collaborate-with-us/chess-academies"
            className="bg-[#af0505] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-[#8c0404] transition duration-300"
          >
            View Brochure
          </a>
        </div>
      </section>
    </div>
  );
};

export default CollaborateWithUs;