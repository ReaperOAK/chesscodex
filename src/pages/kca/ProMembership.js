import React from "react";
import SEO from '../../components/SEO';
import { proMembershipDetails, pricingPlans } from '../../data';


const ProMembership = () => {
  // KCA Theme Classes
  const sectionClasses = "py-16 bg-brand-light";
  const cardClasses = "bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow";
  const titleClasses = "text-brand-dark";
  const textClasses = "text-brand-text";
  const ctaCardClasses = "bg-brand-dark text-white rounded-lg shadow-md";

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
                  <h3 className="text-2xl font-bold mb-2 text-brand-dark">{item.plan} Plan</h3>
                  <p className={`text-lg ${textClasses}`}>{item.price}</p>
                </div>
              ))}
            </div>
            <a href="https://wa.me/+919830149852" className="inline-block font-medium py-2 px-6 rounded-lg transition bg-brand-primary text-white hover:bg-brand-secondary">
              Get Started Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProMembership;