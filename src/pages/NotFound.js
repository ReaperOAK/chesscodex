import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <Helmet>
        <title>404 - Page Not Found - ChessCodex</title>
        <meta name="description" content="The page you are looking for does not exist. Return to the ChessCodex homepage." />
      </Helmet>
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;