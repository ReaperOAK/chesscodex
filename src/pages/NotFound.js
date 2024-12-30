import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f3f1f9] text-[#270185]">
      <Helmet>
        <title>404 - Page Not Found</title>
        <meta name="description" content="The page you are looking for does not exist. Return to the homepage." />
      </Helmet>
      <h1 className="text-6xl font-bold mb-4 text-[#200e4a]">404</h1>
      <p className="text-xl mb-8">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="bg-[#461fa3] text-white py-3 px-6 rounded-lg shadow-lg hover:bg-[#7646eb] transition duration-300">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;