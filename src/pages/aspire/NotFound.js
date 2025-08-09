import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';


const AspireNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black bg-opacity-80 text-gray-200">
      <SEO
        title="404 - Page Not Found | AspireChess"
        description="The page you are looking for does not exist. Return to the AspireChess homepage."
        url="https://kolkatachessacademy.in/aspirechess/404"
        type="webpage"
        canonical="https://kolkatachessacademy.in/aspirechess/404"
      />
      <h1 className="text-6xl font-bold mb-4 text-amber-400">404</h1>
      <p className="text-xl mb-8">Oops! The page you are looking for does not exist.</p>
      <Link to="/aspirechess" className="bg-amber-500 text-gray-900 py-3 px-6 rounded-lg shadow-lg hover:bg-amber-400 transition duration-300">
        Go Back Home
      </Link>
    </div>
  );
};

export default AspireNotFound;
