import React from 'react';
import SEO from '../../../components/SEO';

const DumDum = () => {
  return (
    <div className="py-16 px-4">
      <SEO
        title="Chess Classes Dum Dum — Aspire Chess Academy"
        description="Aspire Chess Academy Dum Dum — Chess classes for kids and adults. Local coaching, tournaments, and summer camps."
        keywords="chess classes Dum Dum, chess coaching Dum Dum, Aspire Chess Academy"
        image={'https://aspirechessacademy.in/assets/dumdum-hero.jpg'}
        url={'https://aspirechessacademy.in/dum-dum'}
        canonical={'https://aspirechessacademy.in/dum-dum'}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'SportsClub',
          name: 'Aspire Chess Academy - Dum Dum',
          image: 'https://aspirechessacademy.in/assets/dumdum-hero.jpg',
          '@id': 'https://aspirechessacademy.in/dum-dum#place',
          url: 'https://aspirechessacademy.in/dum-dum',
          telephone: '+91 98301 49852',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Dumdum Cross Road, 178/3, Purba Sinthi Rd, Jhilbagan',
            addressLocality: 'Dum Dum',
            addressRegion: 'West Bengal',
            postalCode: '700030',
            addressCountry: 'IN'
          },
          openingHoursSpecification: [
            { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '16:00', closes: '20:30' },
            { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday','Sunday'], opens: '10:00', closes: '18:00' }
          ]
        }}
      />
      <div className="max-w-4xl mx-auto bg-black bg-opacity-20 p-8 rounded-xl">
        <h1 className="text-3xl font-bold text-white mb-4">Aspire Chess Academy — Dum Dum</h1>
        <p className="text-gray-300 mb-4">Local chess coaching for beginners, school teams, and competitive players. Join weekend batches or after-school programs.</p>
        <ul className="text-gray-300 list-disc pl-6">
          <li>Beginner to Advanced coaching</li>
          <li>School team training</li>
          <li>Weekend and weekday batches</li>
        </ul>
      </div>
    </div>
  );
};

export default DumDum;
