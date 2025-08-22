import React from "react";
import SEO from '../../components/SEO';
import { proMembershipDetails, pricingPlans } from '../../data';


const ProMembership = () => {
  // KCA Theme Classes
  const sectionClasses = "py-16 bg-transparent";
  const cardClasses = "bg-black bg-opacity-20 backdrop-blur-sm border border-gray-700/50 p-6 rounded-lg shadow-lg transition hover:shadow-2xl";
  const titleClasses = "text-cyan-300";
  const textClasses = "text-gray-300";
  const ctaCardClasses = "mt-16 py-8 px-6 bg-black bg-opacity-18 backdrop-blur-sm rounded-lg shadow-xl border border-gray-700/40";

  return (
    <>
      <SEO
        title={'Pro Membership - Kolkata Chess Academy'}
        description={'Unlock exclusive chess content, coaching, and community with Kolkata Chess Academy Pro Membership.'}
        keywords={'Kolkata Chess Academy, pro membership, exclusive, chess, coaching, community'}
        image={'https://kolkatachessacademy.in/kca.png'}
        url={'https://kolkatachessacademy.in/exclusives/pro-membership'}
        type="article"
        canonical={'https://kolkatachessacademy.in/exclusives/pro-membership'}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Offer',
          name: 'Kolkata Chess Academy Pro Membership',
          url: 'https://kolkatachessacademy.in/exclusives/pro-membership',
          description: 'Unlock exclusive chess content, coaching, and community with Kolkata Chess Academy Pro Membership.'
        }}
      />
      <section className={sectionClasses}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className={`text-3xl font-bold mb-4 ${titleClasses}`}>Pro Membership</h2>
          <p className={`text-lg mb-12 ${textClasses}`}>
            We are dedicated to enhancing the quality of chess coaching worldwide. Our Pro Membership regulates daily chess training at home with a structured method, focusing on Calculation, Strategy, Endgames, Openings, and Psychology.
          </p>
          <h3 className={`text-2xl font-bold mb-8 ${titleClasses}`}>Our Offerings:</h3>
          <div className="space-y-8">
            {proMembershipDetails.map((item, idx) => (
              <div key={idx} className={cardClasses}>
                <h3 className="text-xl font-bold mb-3 text-brand-dark">{item.title}</h3>
                <ul className={`text-left list-disc list-inside space-y-1 ${textClasses}`}>
                  {item.details.map((detail, index) => <li key={index}>{detail}</li>)}
                </ul>
              </div>
            ))}
          </div>
          {/* Call to Action and Pricing Section */}
          <div className={`mt-16 py-8 px-6 ${ctaCardClasses}`}>
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to Elevate Your Chess Skills?</h3>
            <p className="text-lg mb-6 text-gray-300">
              Join our Pro Membership today and gain access to exclusive content, personalized coaching, and a supportive community.
            </p>
            <h3 className="text-2xl font-bold mb-6 text-white">Pricing</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {pricingPlans.map((item, idx) => (
                  <div key={idx} className={cardClasses}>
                    <h3 className={`text-2xl font-bold mb-2 ${titleClasses}`}>{item.plan} Plan</h3>
                    <p className={`text-lg ${textClasses}`}>{item.price}</p>
                  </div>
                ))}
            </div>
            <a href="https://wa.me/+919830149852" className="inline-block font-medium py-3 px-7 rounded-lg transition transform hover:scale-105 bg-gradient-to-r from-cyan-500 to-pink-500 text-white">
              Get Started Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProMembership;