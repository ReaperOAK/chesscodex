
import SEO from '../../components/SEO';
import React from 'react';

const AspireReferralProgramme = () => {
  // AspireChess only
  const referralDetails = [
    { title: "Earn Discounts", details: ["Receive exclusive discounts for every successful referral."] },
    { title: "Share the Benefits", details: ["Introduce others to the joy of learning chess with us."] },
    { title: "Simple Process", details: ["Refer, enroll, and get rewarded!"] },
  ];

  // AspireChess theme only
  const sectionClasses = "";
  const cardClasses = "bg-black bg-opacity-20 backdrop-blur-sm border border-gray-700/50 p-6 rounded-lg shadow-lg";
  const titleClasses = "text-amber-400";
  const textClasses = "text-gray-300";
  const ctaCardClasses = "bg-black bg-opacity-25 backdrop-blur-md rounded-lg shadow-xl";

  return (
    <>
      <SEO
        title="Referral Programme - AspireChess"
        description="AspireChess referral programme: share chess, earn rewards, and grow the community."
        keywords="AspireChess, referral, rewards, chess, community"
        image="https://kolkatachessacademy.in/aca.png"
        url="https://kolkatachessacademy.in/aspirechess/collaborate-with-us/referral-programme"
        type="article"
        canonical="https://kolkatachessacademy.in/aspirechess/collaborate-with-us/referral-programme"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Offer',
          name: 'AspireChess Referral Programme',
          url: 'https://kolkatachessacademy.in/aspirechess/collaborate-with-us/referral-programme',
          description: 'AspireChess referral programme: share chess, earn rewards, and grow the community.'
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
                <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                <ul className={`text-left list-disc list-inside space-y-1 ${textClasses}`}>
                  {item.details.map((detail, index) => <li key={index}>{detail}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <a href="https://dashboard.kolkatachessacademy.in" className="inline-block font-medium py-2 px-6 rounded-lg transition bg-amber-500 text-gray-900 hover:bg-amber-400"> 
            Refer Now
          </a>
        </div>
      </div>
    </section>
    </>
  );
};

export default AspireReferralProgramme;