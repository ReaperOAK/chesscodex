
import React from "react";
import SEO from '../../components/SEO';
import { proMembershipDetails, pricingPlans } from '../../data';

const AspireProMembership = () => {

  // AspireChess theme only
  const sectionClasses = "";
  const cardClasses = "bg-black bg-opacity-20 backdrop-blur-sm border border-gray-700/50 p-6 rounded-lg shadow-lg";
  const titleClasses = "text-amber-400";
  const textClasses = "text-gray-300";
  const ctaCardClasses = "bg-black bg-opacity-25 backdrop-blur-md rounded-lg shadow-xl";

  return (
    <>
      <SEO
        title="Pro Membership - AspireChess"
        description="Unlock exclusive chess content, coaching, and community with AspireChess Pro Membership."
        keywords="AspireChess, pro membership, exclusive, chess, coaching, community"
        image="https://kolkatachessacademy.in/aca.png"
        url="https://kolkatachessacademy.in/aspirechess/exclusives/pro-membership"
        type="article"
        canonical="https://kolkatachessacademy.in/aspirechess/exclusives/pro-membership"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Offer',
          name: 'AspireChess Pro Membership',
          url: 'https://kolkatachessacademy.in/aspirechess/exclusives/pro-membership',
          description: 'Unlock exclusive chess content, coaching, and community with AspireChess Pro Membership.'
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
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
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
                  <h3 className="text-2xl font-bold mb-2 text-white">{item.plan} Plan</h3>
                  <p className={`text-lg ${textClasses}`}>{item.price}</p>
                </div>
              ))}
            </div>
            <a href="https://wa.me/+919830149852" className="inline-block font-medium py-2 px-6 rounded-lg transition bg-amber-500 text-gray-900 hover:bg-amber-400">
              Get Started Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AspireProMembership;