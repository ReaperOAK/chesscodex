import SEO from '../components/SEO';
import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <>
      <SEO
        title="Welcome - Kolkata Chess Academy & Aspire Chess Academy"
        description="Kolkata Chess Academy is our fully online head, providing all online coaching and dashboard support. Aspire Chess Academy (a unit of KCA) operates primarily offline; all its services are under KCA, and online students are redirected to KCA."
        keywords="chess, Kolkata Chess Academy, Aspire Chess Academy, online chess, offline chess, dashboard, training, courses, welcome"
        image="https://kolkatachessacademy.in/aca.png"
        url="https://kolkatachessacademy.in/"
        type="website"
        canonical="https://kolkatachessacademy.in/"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Welcome',
          url: 'https://kolkatachessacademy.in/',
          description: 'Kolkata Chess Academy is fully online and provides dashboard support. Aspire Chess Academy is a unit of KCA, operates offline, and redirects online students to KCA.'
        }}
      />
      <section className="bg-gradient-to-r from-brand-subtle via-white to-brand-subtle py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-10 text-brand-dark">Welcome to Our Chess Academies</h1>
          <p className="text-lg text-brand-text mb-12">
            <strong>Kolkata Chess Academy</strong> is our fully online head, providing all online coaching and dashboard support.<br/>
            <strong>Aspire Chess Academy</strong> (A Unit of Kolkata Chess Academy) operates primarily offline, and all its services are under KCA. Online students of Aspire are redirected to Kolkata Chess Academy.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
            <Link to="/" className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <h2 className="text-3xl font-bold text-brand-dark mb-4">Kolkata Chess Academy</h2>
              <p className="text-lg text-brand-text">All online coaching and dashboard support. For online students and digital services.</p>
            </Link>
            <Link to="/aspirechess" className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <h2 className="text-3xl font-bold text-brand-dark mb-4">Aspire Chess Academy</h2>
              <p className="text-lg text-brand-text">Primarily offline operations. All online students and services are redirected to Kolkata Chess Academy.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default WelcomePage;
