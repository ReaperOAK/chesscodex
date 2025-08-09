
import SEO from '../../components/SEO';
import React from "react";
import { scholarshipDetails } from '../../data';

const AspireScholarships = () => {

  // AspireChess theme only
  const sectionClasses = "";
  const cardClasses = "bg-black bg-opacity-20 backdrop-blur-sm border border-gray-700/50 p-6 rounded-lg shadow-lg";
  const titleClasses = "text-amber-400";
  const textClasses = "text-gray-300";
  const categoryTitleClasses = "text-xl font-semibold text-white mb-2";

  return (
    <>
      <SEO
        title="Scholarships - AspireChess"
        description="AspireChess scholarship programs for young chess talents and achievers."
        keywords="AspireChess, scholarships, chess, pro membership, awards"
        image="https://kolkatachessacademy.in/aca.png"
        url="https://kolkatachessacademy.in/aspirechess/exclusives/scholarships"
        type="article"
        canonical="https://kolkatachessacademy.in/aspirechess/exclusives/scholarships"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'EducationalOccupationalProgram',
          name: 'AspireChess Scholarships',
          url: 'https://kolkatachessacademy.in/aspirechess/exclusives/scholarships',
          description: 'AspireChess scholarship programs for young chess talents and achievers.'
        }}
      />
      <section className={sectionClasses}>
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className={`text-3xl font-bold mb-8 ${titleClasses}`}>Scholarships</h2>
        <div className={cardClasses}>
          <h3 className="text-2xl font-bold mb-6 text-white">Scholarship Categories</h3>
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

export default AspireScholarships;
