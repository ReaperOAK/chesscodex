import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-brand-subtle text-brand-text">
      <SEO
        title="404 - Page Not Found | Kolkata Chess Academy"
        description="The page you are looking for does not exist. Return to the Kolkata Chess Academy homepage."
        url="https://kolkatachessacademy.in/404"
        type="webpage"
        canonical="https://kolkatachessacademy.in/404"
      />
      <h1 className="text-6xl font-bold mb-4 text-brand-dark">404</h1>
      <p className="text-xl mb-8">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="bg-brand-secondary text-white py-3 px-6 rounded-lg shadow-lg hover:bg-brand-primary transition duration-300">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
