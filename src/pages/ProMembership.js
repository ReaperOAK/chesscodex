import React from "react";
import { useLocation } from 'react-router-dom';

const ProMembership = () => {
  const location = useLocation();
  const isAspireChess = location.pathname.startsWith('/aspirechess');

  const proMembershipDetails = [
    {
      title: "Calculation Pack",
      details: [
        "Structure: 9 curated puzzles every week, divided in 3 levels prepared by a GM.",
        "Frequency: 3 days/week.",
        "Support: You can self-check the positions.",
      ],
    },
    {
      title: "Game Analysis",
      details: [
        "Structure: 8 in-depth game modern and classical analysis, with in-game solvable Diagrams.",
        "Frequency: 8 games to analyse, learn & study for a month.",
        "Support: Deep Dive by Titled Players and their personal insights.",
      ],
    },
    {
      title: "Hot Topic Summarizations",
      details: [
        "Structure: Video explanation Course with Positions- 1 Topic every Month of Beginner & 1 Topic of Intermediate or Advance or Expert Level presented by FM Joydeep Dutta & Arpan Das.",
        "Frequency: 2 Topics every Month.",
        "Support: Homework of specific Topics Presented to work at Home.",
      ],
    },
    {
      title: "Additional Benefits",
      details: [
        "Access to Exclusive Bonus Content.",
        "Access to our exclusive Pro Members Community Forum where we discuss daily ideas around chess!",
      ],
    },
  ];
  const pricingPlans = [
    { plan: "Monthly", price: "₹999 / $14.99" },
    { plan: "Half-Yearly", price: "₹4,999 / $74.99" },
    { plan: "Yearly", price: "₹8,999 / $134.99" },
  ];

  // --- Theme-Aware Class Definitions ---
  const sectionClasses = isAspireChess ? "" : "py-16 bg-brand-light";
  const cardClasses = isAspireChess 
    ? "bg-black bg-opacity-20 backdrop-blur-sm border border-gray-700/50 p-6 rounded-lg shadow-lg"
    : "bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow";
  const titleClasses = isAspireChess ? "text-amber-400" : "text-brand-dark";
  const textClasses = isAspireChess ? "text-gray-300" : "text-brand-text";
  const ctaCardClasses = isAspireChess
    ? "bg-black bg-opacity-25 backdrop-blur-md rounded-lg shadow-xl"
    : "bg-brand-dark text-white rounded-lg shadow-md";

  return (
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
              <h3 className={`text-xl font-bold mb-3 ${isAspireChess ? 'text-white' : 'text-brand-dark'}`}>{item.title}</h3>
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
                <h3 className={`text-2xl font-bold mb-2 ${isAspireChess ? 'text-white' : 'text-brand-dark'}`}>{item.plan} Plan</h3>
                <p className={`text-lg ${textClasses}`}>{item.price}</p>
              </div>
            ))}
          </div>
          <a href="[https://wa.me/+919830149852](https://wa.me/+919830149852)" className={`inline-block font-medium py-2 px-6 rounded-lg transition ${isAspireChess ? 'bg-amber-500 text-gray-900 hover:bg-amber-400' : 'bg-brand-primary text-white hover:bg-brand-secondary'}`}>
            Get Started Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProMembership;