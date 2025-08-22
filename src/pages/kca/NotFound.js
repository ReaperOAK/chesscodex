import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent py-20">
      <SEO
        title="404 - Page Not Found | Kolkata Chess Academy"
        description="The page you are looking for does not exist. Return to the Kolkata Chess Academy homepage."
        url="https://kolkatachessacademy.in/404"
        type="webpage"
        canonical="https://kolkatachessacademy.in/404"
      />

      <div className="max-w-xl mx-auto text-center bg-black bg-opacity-20 backdrop-blur-md rounded-2xl p-10 border border-gray-700/50 shadow-2xl">
        <h1 className="text-7xl font-extrabold mb-4 text-cyan-300">404</h1>
        <p className="text-lg mb-6 text-gray-300">Oops! The page you are looking for does not exist.</p>
        <Link to="/kca" className="inline-block font-semibold py-3 px-8 rounded-lg transition transform hover:scale-105 bg-gradient-to-r from-cyan-500 to-pink-500 text-white shadow-lg">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
