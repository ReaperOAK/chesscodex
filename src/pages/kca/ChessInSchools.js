import SEO from '../../components/SEO';
import React from 'react';
import { schoolDetails } from '../../data';

const ChessInSchools = () => {

  // KCA Synthwave glassy theme
  const sectionClasses = "py-16 bg-transparent";
  const cardClasses = "bg-black bg-opacity-20 backdrop-blur-sm border border-gray-700/50 p-6 rounded-lg shadow-lg text-left transition hover:scale-102";
  const titleClasses = "text-cyan-300";
  const textClasses = "text-gray-300";
  const ctaCardClasses = "py-8 px-6 bg-black bg-opacity-18 backdrop-blur-sm rounded-lg shadow-xl border border-gray-700/40";

  return (
    <>
      <SEO
        title={'Chess in Schools - Kolkata Chess Academy'}
        description={'Kolkata Chess Academy brings chess to schools, enriching students with cognitive and strategic skills.'}
        keywords={'Kolkata Chess Academy, chess in schools, education, cognitive skills, strategy'}
        image={'https://kolkatachessacademy.in/kca.png'}
        url={'https://kolkatachessacademy.in/chess-in-schools'}
        type="article"
        canonical={'https://kolkatachessacademy.in/chess-in-schools'}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'EducationalOrganization',
          name: 'Kolkata Chess Academy',
          url: 'https://kolkatachessacademy.in/chess-in-schools',
          description: 'Kolkata Chess Academy brings chess to schools, enriching students with cognitive and strategic skills.'
        }}
      />
      <section className={sectionClasses}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className={`text-3xl font-bold mb-4 ${titleClasses}`}>Chess in Schools</h2>
          <p className={`text-lg mb-12 ${textClasses}`}>
            Bring the timeless game of chess to the classroom, enriching young minds through strategic thinking.
          </p>

          <div className={`py-8 px-6 ${ctaCardClasses}`}>
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to Bring Chess to Your School?</h3>
            <p className="text-lg mb-6 text-gray-300">
              Contact us today to learn more about our Chess in Schools program and how we can collaborate.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {schoolDetails.map((item, idx) => (
                <div key={idx} className={cardClasses}>
                  <h3 className={`text-2xl font-bold mb-2 ${titleClasses}`}>{item.title}</h3>
                  <ul className={`text-left list-disc list-inside space-y-1 ${textClasses}`}>
                    {item.details.map((detail, index) => <li key={index}>{detail}</li>)}
                  </ul>
                </div>
              ))}
            </div>
            <a href="https://wa.me/+919830149852" className="inline-block font-medium py-3 px-7 rounded-lg transition transform hover:scale-105 bg-gradient-to-r from-cyan-500 to-pink-500 text-white">
              Enquire Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChessInSchools;