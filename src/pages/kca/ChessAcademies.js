import SEO from '../../components/SEO';
import React from 'react';
import { collaborationModels, services, pricing } from '../../data';


const InfoCard = ({ title, points }) => (
    <div className="bg-white p-6 rounded-lg shadow-md h-full border border-brand-primary/20">
        <h3 className="text-2xl font-bold mb-4 text-brand-dark">{title}</h3>
        <ul className="text-left list-disc list-inside space-y-2 text-brand-text">
            {points.map((point, index) => <li key={index}>{point}</li>)}
        </ul>
    </div>
);

const PricingCard = ({ title, price, details }) => (
    <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col border border-brand-primary/20">
        <h3 className="text-2xl font-bold text-brand-dark">{title}</h3>
        <p className="text-3xl font-bold text-brand-primary my-4">{price}</p>
        <p className="text-brand-text flex-grow">{details}</p>
    </div>
);


const ChessAcademies = () => {
  return (
    <>
      <SEO
        title="Chess Academies - Kolkata Chess Academy"
        description="Discover Kolkata Chess Academy's network and approach to chess education. Find the best chess academies for your growth."
        keywords="chess, chess academies, Kolkata Chess Academy, education, training"
        image="https://kolkatachessacademy.in/kca.png"
        url="https://kolkatachessacademy.in/chess-academies"
        type="article"
        canonical="https://kolkatachessacademy.in/chess-academies"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'EducationalOrganization',
          name: 'Kolkata Chess Academy',
          url: 'https://kolkatachessacademy.in/chess-academies',
          description: 'Discover Kolkata Chess Academy\'s network and approach to chess education. Find the best chess academies for your growth.'
        }}
      />
            <section>
                <div className="max-w-7xl mx-auto px-6 text-center space-y-20">

                    <div>
                        <h2 className="text-4xl font-bold mb-4 text-brand-primary">Collaboration Opportunities</h2>
                        <p className="text-lg mb-12 text-brand-text max-w-4xl mx-auto">
                            We are dedicated to enhancing the quality of chess coaching worldwide. By collaborating with academies globally, we aim to promote the game and provide high-quality training for players of all levels. Join us in our mission to set new standards in chess coaching!
                        </p>
                        <div className="grid md:grid-cols-2 gap-8">
                            {collaborationModels.map(model => <InfoCard key={model.title} {...model} />)}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-4xl font-bold mb-12 text-brand-primary">Our Services & Curriculum</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {services.map(service => <InfoCard key={service.title} {...service} />)}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-4xl font-bold mb-12 text-brand-primary">Pricing & Terms</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {pricing.map(p => <PricingCard key={p.title} {...p} />)}
                        </div>
                    </div>

                    <div className="py-8 px-6 bg-brand-light rounded-lg shadow-xl">
                        <h3 className="text-3xl font-bold mb-4 text-brand-dark">Ready to Join Our Network?</h3>
                        <p className="text-lg mb-6 text-brand-text">
                            Contact us today to learn more about our Chess Academies program and how we can collaborate to empower players everywhere.
                        </p>
                        <a href="https://wa.me/+919830149852" className="inline-block font-semibold text-lg py-3 px-8 rounded-lg transition bg-brand-primary text-white hover:bg-brand-secondary transform hover:scale-105">
                            Partner With Us
                        </a>
                    </div>

                </div>
            </section>
    </>
  );
};

export default ChessAcademies;