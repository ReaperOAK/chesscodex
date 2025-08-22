import SEO from '../../components/SEO';
import React from 'react';
import { referralDetails } from '../../data';

const ReferralProgramme = () => {


  // KCA Synthwave glassy theme
  const sectionClasses = "py-16 bg-transparent";
  const cardClasses = "bg-black bg-opacity-20 backdrop-blur-sm border border-gray-700/50 p-6 rounded-lg shadow-lg transition hover:shadow-2xl text-left";
  const titleClasses = "text-cyan-300";
  const textClasses = "text-gray-300";
  const ctaCardClasses = "py-8 px-6 bg-black bg-opacity-18 backdrop-blur-sm rounded-lg shadow-xl border border-gray-700/40";

  return (
    <>
      <SEO
        title={'Referral Programme - Kolkata Chess Academy'}
        description={'Kolkata Chess Academy referral programme: share chess, earn rewards, and grow the community.'}
        keywords={'Kolkata Chess Academy, referral, rewards, chess, community'}
        image={'https://kolkatachessacademy.in/kca.png'}
        url={'https://kolkatachessacademy.in/collaborate-with-us/referral-programme'}
        type="article"
        canonical={'https://kolkatachessacademy.in/collaborate-with-us/referral-programme'}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Offer',
          name: 'Kolkata Chess Academy Referral Programme',
          url: 'https://kolkatachessacademy.in/collaborate-with-us/referral-programme',
          description: 'Kolkata Chess Academy referral programme: share chess, earn rewards, and grow the community.'
        }}
      />
      <section className={sectionClasses}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className={`text-3xl font-bold mb-4 ${titleClasses}`}>Referral Programme</h2>
          <p className={`text-lg mb-12 ${textClasses}`}>
            Share your love for chess and earn rewards by bringing your friends and family to our academy.
          </p>
          <div className={`py-8 px-6 ${ctaCardClasses}`}>
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to Refer and Earn?</h3>
            <p className="text-lg mb-6 text-gray-300">
              Join our Referral Programme today and start earning rewards for every successful referral.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {referralDetails.map((item, idx) => (
                <div key={idx} className={cardClasses}>
                  <h3 className={`text-2xl font-bold mb-2 ${titleClasses}`}>{item.title}</h3>
                  <ul className={`text-left list-disc list-inside space-y-1 ${textClasses}`}>
                    {item.details.map((detail, index) => <li key={index}>{detail}</li>)}
                  </ul>
                </div>
              ))}
            </div>
            <a href="https://dashboard.kolkatachessacademy.in" className="inline-block font-medium py-3 px-7 rounded-lg transition transform hover:scale-105 bg-gradient-to-r from-cyan-500 to-pink-500 text-white"> 
              Refer Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReferralProgramme;