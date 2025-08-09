import SEO from '../../components/SEO';
import React from 'react';
import { schoolDetails } from '../../data';

const ChessInSchools = () => {

  // KCA Theme Classes
  const sectionClasses = "py-16 bg-brand-subtle";
  const cardClasses = "bg-white text-brand-text rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow";
  const titleClasses = "text-brand-dark";
  const textClasses = "text-brand-text";
  const ctaCardClasses = "bg-brand-dark text-white rounded-lg shadow-md";

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
                  <h3 className="text-2xl font-bold mb-2 text-brand-dark">{item.title}</h3>
                  <ul className={`text-left list-disc list-inside space-y-1 ${textClasses}`}>
                    {item.details.map((detail, index) => <li key={index}>{detail}</li>)}
                  </ul>
                </div>
              ))}
            </div>
            <a href="https://wa.me/+919830149852" className="inline-block font-medium py-2 px-6 rounded-lg transition bg-brand-primary text-white hover:bg-brand-secondary">
              Enquire Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChessInSchools;