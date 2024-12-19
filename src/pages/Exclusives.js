import React from "react";
import { Helmet } from 'react-helmet-async';
import { NavLink, Route, Routes, Navigate } from 'react-router-dom';
import ProMembership from './ProMembership';
import Pricing from './Pricing';
import Scholarships from './Scholarships';
import GameAnalysis from './GameAnalysis';

const Exclusives = () => {
  return (
    <div>
      <Helmet>
        <title>Exclusives - ChessCodex</title>
        <meta name="description" content="Unlock exclusive benefits with our Pro Membership and Scholarships. Learn more about our exclusive offers and pricing plans." />
        <meta name="keywords" content="ChessCodex, Pro Membership, chess scholarships, chess exclusives, chess benefits, chess pricing" />
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

      {/* Navigation Links */}
      <nav className="bg-[#f3f1f9] py-4 shadow-md">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <NavLink
            to="pro-membership"
            className={({ isActive }) =>
              isActive
                ? "mx-4 text-[#200e4a] font-semibold border-b-2 border-[#200e4a]"
                : "mx-4 text-[#461fa3] hover:text-[#200e4a]"
            }
          >
            Pro Membership
          </NavLink>
          <NavLink
            to="pricing"
            className={({ isActive }) =>
              isActive
                ? "mx-4 text-[#200e4a] font-semibold border-b-2 border-[#200e4a]"
                : "mx-4 text-[#461fa3] hover:text-[#200e4a]"
            }
          >
            Pricing
          </NavLink>
          <NavLink
            to="scholarships"
            className={({ isActive }) =>
              isActive
                ? "mx-4 text-[#200e4a] font-semibold border-b-2 border-[#200e4a]"
                : "mx-4 text-[#461fa3] hover:text-[#200e4a]"
            }
          >
            Scholarships
          </NavLink>
          <NavLink
            to="game-analysis"
            className={({ isActive }) =>
              isActive
                ? "mx-4 text-[#200e4a] font-semibold border-b-2 border-[#200e4a]"
                : "mx-4 text-[#461fa3] hover:text-[#200e4a]"
            }
          >
            Game Analysis
          </NavLink>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Navigate to="pro-membership" />} />
        <Route path="pro-membership" element={<ProMembership />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="scholarships" element={<Scholarships />} />
        <Route path="game-analysis" element={<GameAnalysis />} />
      </Routes>
    </div>
  );
};

export default Exclusives;