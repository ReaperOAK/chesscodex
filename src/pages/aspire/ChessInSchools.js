
import SEO from '../../components/SEO';
import React from 'react';


const AspireChessInSchools = () => {
  const schoolDetails = [
    { title: "Structured Lessons", details: ["Tailored chess lessons designed to improve cognitive skills and problem-solving abilities."] },
    { title: "Tournaments & Competitions", details: ["Encourage students to showcase their skills and build confidence through competitive events."] },
  ];

  // Aspire theme only
  const sectionClasses = "";
  const cardClasses = "bg-black bg-opacity-20 backdrop-blur-sm border border-gray-700/50 p-6 rounded-lg shadow-lg";
  const titleClasses = "text-amber-400";
  const textClasses = "text-gray-300";
  const ctaCardClasses = "bg-black bg-opacity-25 backdrop-blur-md rounded-lg shadow-xl";

  return (
    <>
      <SEO
        title={'Chess in Schools - AspireChess'}
        description={'AspireChess brings chess to schools, enriching students with cognitive and strategic skills.'}
        keywords={'AspireChess, chess in schools, education, cognitive skills, strategy'}
        image={'https://kolkatachessacademy.in/aca.png'}
        url={'https://kolkatachessacademy.in/aspirechess/chess-in-schools'}
        type="article"
        canonical={'https://kolkatachessacademy.in/aspirechess/chess-in-schools'}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'EducationalOrganization',
          name: 'AspireChess',
          url: 'https://kolkatachessacademy.in/aspirechess/chess-in-schools',
          description: 'AspireChess brings chess to schools, enriching students with cognitive and strategic skills.'
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
                <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                <ul className={`text-left list-disc list-inside space-y-1 ${textClasses}`}>
                  {item.details.map((detail, index) => <li key={index}>{detail}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <a href="https://wa.me/+919830149852" className="inline-block font-medium py-2 px-6 rounded-lg transition bg-amber-500 text-gray-900 hover:bg-amber-400">
            Enquire Now
          </a>
        </div>
      </div>
      </section>
    </>
  );
};

export default AspireChessInSchools;