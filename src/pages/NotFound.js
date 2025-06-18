import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-brand-subtle text-brand-text">
      <Helmet>
        <title>404 - Page Not Found</title>
        <meta name="description" content="The page you are looking for does not exist. Return to the homepage." />
      </Helmet>
      <h1 className="text-6xl font-bold mb-4 text-brand-dark">404</h1>
      <p className="text-xl mb-8">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="bg-brand-secondary text-white py-3 px-6 rounded-lg shadow-lg hover:bg-brand-primary transition duration-300">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
