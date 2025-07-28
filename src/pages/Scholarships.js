import SEO from '../components/SEO';
import React from "react";
import { useLocation } from 'react-router-dom';

const Scholarships = () => {
  const location = useLocation();
  const isAspireChess = location.pathname.startsWith('/aspirechess');

  const scholarshipDetails = [
    {
      category: "For our Young FIDE rated & USCF 1200+ rated Stars:",
      benefits: [
        "One-month free subscription to our “Pro Membership”",
      ],
    },
    {
      category: "For our State Age Group category winners:",
      benefits: [
        "1st & 2nd Rank Holders: Six (6) months free subscription to “Pro Membership”",
        "Exclusive 1st Rank Holder: 5 Game Analysis",
        "3rd Rank: 2 Months free “Pro Membership”",
        "4th Rank: 1 Month free “Pro Membership”",
      ],
    },
    {
      category: "For our National Age Group category winners:",
      benefits: [
        "1st & 2nd Rank Holders: 1 year free subscription to “Pro Membership”",
        "Exclusive 1st Rank Holder: Quarterly 5 Game Analysis",
        "Exclusive 2nd Rank Holder: 1 time 5 Game Analysis",
        "3rd Rank: 6 Months free “Pro Membership” & 1 time 5 Game Analysis",
        "4th Rank: 4 Months free “Pro Membership”",
        "5th Rank: 2 Months free “Pro Membership”",
      ],
    },
    {
      category: "Additional Incentives to all Categories:",
      benefits: [
        "Achievement Highlight on all our Social Media Platforms",
        "Personalized Merchandize Gifts",
        "Selected One Kolkata Chess free Registration",
      ],
    },
  ];

  // --- Theme-Aware Class Definitions ---
  const sectionClasses = isAspireChess ? "" : "py-16 bg-brand-subtle";
  const cardClasses = isAspireChess 
    ? "bg-black bg-opacity-20 backdrop-blur-sm border border-gray-700/50 p-6 rounded-lg shadow-lg"
    : "bg-white rounded-lg shadow-md p-6";
  const titleClasses = isAspireChess ? "text-amber-400" : "text-brand-dark";
  const textClasses = isAspireChess ? "text-gray-300" : "text-brand-text";
  const categoryTitleClasses = isAspireChess ? "text-xl font-semibold text-white mb-2" : "text-xl font-semibold text-brand-dark mb-2";

  return (
    <>
      <SEO
        title={isAspireChess ? 'Scholarships - AspireChess' : 'Scholarships - Kolkata Chess Academy'}
        description={isAspireChess ? 'AspireChess scholarship programs for young chess talents and achievers.' : 'Kolkata Chess Academy scholarship programs for young chess talents and achievers.'}
        keywords={isAspireChess ? 'AspireChess, scholarships, chess, pro membership, awards' : 'Kolkata Chess Academy, scholarships, chess, pro membership, awards'}
        image={isAspireChess ? 'https://kolkatachessacademy.in/aca.png' : 'https://kolkatachessacademy.in/kca.png'}
        url={isAspireChess ? 'https://kolkatachessacademy.in/aspirechess/exclusives/scholarships' : 'https://kolkatachessacademy.in/exclusives/scholarships'}
        type="article"
        canonical={isAspireChess ? 'https://kolkatachessacademy.in/aspirechess/exclusives/scholarships' : 'https://kolkatachessacademy.in/exclusives/scholarships'}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'EducationalOccupationalProgram',
          name: isAspireChess ? 'AspireChess Scholarships' : 'Kolkata Chess Academy Scholarships',
          url: isAspireChess ? 'https://kolkatachessacademy.in/aspirechess/exclusives/scholarships' : 'https://kolkatachessacademy.in/exclusives/scholarships',
          description: isAspireChess ? 'AspireChess scholarship programs for young chess talents and achievers.' : 'Kolkata Chess Academy scholarship programs for young chess talents and achievers.'
        }}
      />
      <section className={sectionClasses}>
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className={`text-3xl font-bold mb-8 ${titleClasses}`}>Scholarships</h2>
        <div className={cardClasses}>
          <h3 className={`text-2xl font-bold mb-6 ${isAspireChess ? 'text-white' : 'text-brand-dark'}`}>Scholarship Categories</h3>
          <div className="text-left space-y-6">
            {scholarshipDetails.map((item, idx) => (
              <div key={idx}>
                <h4 className={categoryTitleClasses}>{item.category}</h4>
                <ul className={`list-disc list-inside space-y-1 ${textClasses}`}>
                  {item.benefits.map((benefit, index) => <li key={index}>{benefit}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Scholarships;
