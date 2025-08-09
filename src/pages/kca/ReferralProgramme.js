import SEO from '../../components/SEO';
import React from 'react';
import { referralDetails } from '../../data';

const ReferralProgramme = () => {


  // KCA Theme Classes
  const sectionClasses = "py-16 bg-brand-subtle";
  const cardClasses = "bg-white text-brand-text rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow";
  const titleClasses = "text-brand-dark";
  const textClasses = "text-brand-text";
  const ctaCardClasses = "bg-brand-dark text-white rounded-lg shadow-md";

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
                  <h3 className="text-2xl font-bold mb-2 text-brand-dark">{item.title}</h3>
                  <ul className={`text-left list-disc list-inside space-y-1 ${textClasses}`}>
                    {item.details.map((detail, index) => <li key={index}>{detail}</li>)}
                  </ul>
                </div>
              ))}
            </div>
            <a href="https://dashboard.kolkatachessacademy.in" className="inline-block font-medium py-2 px-6 rounded-lg transition bg-brand-primary text-white hover:bg-brand-secondary"> 
              Refer Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReferralProgramme;