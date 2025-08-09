import SEO from '../../components/SEO';
import React from "react";

const Scholarships = () => {
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


  // KCA Theme Classes
  const sectionClasses = "py-16 bg-brand-subtle";
  const cardClasses = "bg-white rounded-lg shadow-md p-6";
  const titleClasses = "text-brand-dark";
  const textClasses = "text-brand-text";
  const categoryTitleClasses = "text-xl font-semibold text-brand-dark mb-2";

  return (
    <>
      <SEO
        title={'Scholarships - Kolkata Chess Academy'}
        description={'Kolkata Chess Academy scholarship programs for young chess talents and achievers.'}
        keywords={'Kolkata Chess Academy, scholarships, chess, pro membership, awards'}
        image={'https://kolkatachessacademy.in/kca.png'}
        url={'https://kolkatachessacademy.in/exclusives/scholarships'}
        type="article"
        canonical={'https://kolkatachessacademy.in/exclusives/scholarships'}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'EducationalOccupationalProgram',
          name: 'Kolkata Chess Academy Scholarships',
          url: 'https://kolkatachessacademy.in/exclusives/scholarships',
          description: 'Kolkata Chess Academy scholarship programs for young chess talents and achievers.'
        }}
      />
      <section className={sectionClasses}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className={`text-3xl font-bold mb-8 ${titleClasses}`}>Scholarships</h2>
          <div className={cardClasses}>
            <h3 className="text-2xl font-bold mb-6 text-brand-dark">Scholarship Categories</h3>
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
