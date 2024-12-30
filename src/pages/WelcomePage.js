import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <section className="bg-gradient-to-r from-[#f3f1f9] via-white to-[#f3f1f9] py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-10 text-[#200e4a]">Welcome to Our Chess Academy</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <Link to="/chesscodex" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <h2 className="text-2xl font-bold text-[#200e4a] mb-4">ChessCodex</h2>
            <p className="text-lg text-[#270185]">Elevate your chess skills with expert training and comprehensive courses at ChessCodex.</p>
          </Link>
          <Link to="/aspirechess" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <h2 className="text-2xl font-bold text-[#200e4a] mb-4">AspireChess</h2>
            <p className="text-lg text-[#270185]">Join AspireChess to elevate your chess skills with expert training and comprehensive courses.</p>
          </Link>
          <a href="/dashboard" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <h2 className="text-2xl font-bold text-[#200e4a] mb-4">Dashboard</h2>
            <p className="text-lg text-[#270185]">Visit our Dashboard</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WelcomePage;