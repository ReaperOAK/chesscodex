import SEO from '../components/SEO';
import React from 'react';
import { useLocation } from 'react-router-dom';

const ReferralProgramme = () => {
  const location = useLocation();
  const isAspireChess = location.pathname.startsWith('/aspirechess');

  const referralDetails = [
    { title: "Earn Discounts", details: ["Receive exclusive discounts for every successful referral."] },
    { title: "Share the Benefits", details: ["Introduce others to the joy of learning chess with us."] },
    { title: "Simple Process", details: ["Refer, enroll, and get rewarded!"] },
  ];

  // --- Theme-Aware Class Definitions ---
  const sectionClasses = isAspireChess ? "" : "py-16 bg-brand-subtle";
  const cardClasses = isAspireChess 
    ? "bg-black bg-opacity-20 backdrop-blur-sm border border-gray-700/50 p-6 rounded-lg shadow-lg"
    : "bg-white text-brand-text rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow";
  const titleClasses = isAspireChess ? "text-amber-400" : "text-brand-dark";
  const textClasses = isAspireChess ? "text-gray-300" : "text-brand-text";
  const ctaCardClasses = isAspireChess
    ? "bg-black bg-opacity-25 backdrop-blur-md rounded-lg shadow-xl"
    : "bg-brand-dark text-white rounded-lg shadow-md";

  return (
    <>
      <SEO
        title={isAspireChess ? 'Referral Programme - AspireChess' : 'Referral Programme - Kolkata Chess Academy'}
        description={isAspireChess ? 'AspireChess referral programme: share chess, earn rewards, and grow the community.' : 'Kolkata Chess Academy referral programme: share chess, earn rewards, and grow the community.'}
        keywords={isAspireChess ? 'AspireChess, referral, rewards, chess, community' : 'Kolkata Chess Academy, referral, rewards, chess, community'}
        image={isAspireChess ? 'https://kolkatachessacademy.in/aca.png' : 'https://kolkatachessacademy.in/kca.png'}
        url={isAspireChess ? 'https://kolkatachessacademy.in/aspirechess/collaborate-with-us/referral-programme' : 'https://kolkatachessacademy.in/collaborate-with-us/referral-programme'}
        type="article"
        canonical={isAspireChess ? 'https://kolkatachessacademy.in/aspirechess/collaborate-with-us/referral-programme' : 'https://kolkatachessacademy.in/collaborate-with-us/referral-programme'}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Offer',
          name: isAspireChess ? 'AspireChess Referral Programme' : 'Kolkata Chess Academy Referral Programme',
          url: isAspireChess ? 'https://kolkatachessacademy.in/aspirechess/collaborate-with-us/referral-programme' : 'https://kolkatachessacademy.in/collaborate-with-us/referral-programme',
          description: isAspireChess ? 'AspireChess referral programme: share chess, earn rewards, and grow the community.' : 'Kolkata Chess Academy referral programme: share chess, earn rewards, and grow the community.'
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
                <h3 className={`text-2xl font-bold mb-2 ${isAspireChess ? 'text-white' : 'text-brand-dark'}`}>{item.title}</h3>
                <ul className={`text-left list-disc list-inside space-y-1 ${textClasses}`}>
                  {item.details.map((detail, index) => <li key={index}>{detail}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <a href="https://dashboard.kolkatachessacademy.in" className={`inline-block font-medium py-2 px-6 rounded-lg transition ${isAspireChess ? 'bg-amber-500 text-gray-900 hover:bg-amber-400' : 'bg-brand-primary text-white hover:bg-brand-secondary'}`}> 
            Refer Now
          </a>
        </div>
      </div>
    </section>
    </>
  );
};

export default ReferralProgramme;