import SEO from '../components/SEO';
import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <>
      <SEO
        title="Welcome - Kolkata Chess Academy & AspireChess"
        description="Choose your chess journey: Kolkata Chess Academy or AspireChess. Elevate your skills with expert training and courses."
        keywords="chess, Kolkata Chess Academy, AspireChess, training, courses, welcome"
        image="https://kolkatachessacademy.in/aca.png"
        url="https://kolkatachessacademy.in/"
        type="website"
        canonical="https://kolkatachessacademy.in/"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Welcome',
          url: 'https://kolkatachessacademy.in/',
          description: 'Choose your chess journey: Kolkata Chess Academy or AspireChess. Elevate your skills with expert training and courses.'
        }}
      />
      <section className="bg-gradient-to-r from-brand-subtle via-white to-brand-subtle py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-10 text-brand-dark">Welcome to Our Chess Academy</h1>
        <p className="text-lg text-brand-text mb-12">
          Join us to elevate your chess skills with expert training and comprehensive courses.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          <Link to="/" className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">Kolkata Chess Academy</h2>
            <p className="text-lg text-brand-text">Join Kolkata Chess Academy to elevate your chess skills with expert training and comprehensive courses.</p>
          </Link>
          <Link to="/aspirechess" className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">AspireChess</h2>
            <p className="text-lg text-brand-text">Join AspireChess to elevate your chess skills with expert training and comprehensive courses.</p>
          </Link>
        </div>
      </div>
    </section>
    </>
  );
};

export default WelcomePage;
