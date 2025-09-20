import React from 'react';
import SEO from '../../../components/SEO';

const ParnasreeBehala = () => {
  return (
    <div className="py-16 px-4">
      <SEO
        title="Chess Classes Parnasree Behala — Aspire Chess Academy"
        description="Aspire Chess Academy Parnasree Behala — Chess classes for kids and adults. Local coaching, school programs, and summer camps."
        keywords="chess classes Parnasree Behala, chess coaching Parnasree, Aspire Chess Academy"
        image={'https://aspirechessacademy.in/assets/parnasree-hero.jpg'}
        url={'https://aspirechessacademy.in/parnasree-behala'}
        canonical={'https://aspirechessacademy.in/parnasree-behala'}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'SportsClub',
          name: 'Aspire Chess Academy - Parnasree Behala',
          image: 'https://aspirechessacademy.in/assets/parnasree-hero.jpg',
          '@id': 'https://aspirechessacademy.in/parnasree-behala#place',
          url: 'https://aspirechessacademy.in/parnasree-behala',
          telephone: '+91 98301 49852',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Parnasree Bazar Road',
            addressLocality: 'Parnasree Behala',
            addressRegion: 'West Bengal',
            postalCode: '700060',
            addressCountry: 'IN'
          },
          openingHoursSpecification: [
            { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '16:00', closes: '20:30' },
            { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday','Sunday'], opens: '10:00', closes: '18:00' }
          ]
        }}
      />
      <div className="max-w-4xl mx-auto bg-black bg-opacity-20 p-8 rounded-xl">
        <h1 className="text-3xl font-bold text-white mb-4">Aspire Chess Academy — Parnasree Behala</h1>
        <p className="text-gray-300 mb-4">Local chess coaching tailored for children and adults. Structured courses, school coaching, and tournament prep.</p>
        <ul className="text-gray-300 list-disc pl-6">
          <li>Beginner to Advanced coaching</li>
          <li>School team training</li>
          <li>Special weekend workshops</li>
        </ul>
      </div>
    </div>
  );
};

export default ParnasreeBehala;
