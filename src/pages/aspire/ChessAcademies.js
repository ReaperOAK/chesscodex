import SEO from '../../components/SEO';
import React from 'react';
import { collaborationModels, services, pricing } from '../../data';

const InfoCard = ({ title, points }) => (
    <div className="bg-black bg-opacity-20 backdrop-blur-sm border border-gray-700/50 p-6 rounded-lg shadow-lg h-full">
        <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
        <ul className="text-left list-disc list-inside space-y-2 text-gray-300">
            {points.map((point, index) => <li key={index}>{point}</li>)}
        </ul>
    </div>
);

const PricingCard = ({ title, price, details }) => (
     <div className="bg-black bg-opacity-20 backdrop-blur-sm border border-gray-700/50 p-6 rounded-lg shadow-lg h-full flex flex-col">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="text-3xl font-bold text-amber-400 my-4">{price}</p>
        <p className="text-gray-400 flex-grow">{details}</p>
    </div>
);



const AspireChessAcademies = () => {
    return (
        <>
            <SEO
                title="Chess Academies - AspireChess"
                description="Discover AspireChess's network and approach to chess education. Find the best chess academies for your growth."
                keywords="chess, chess academies, AspireChess, education, training"
                image="https://kolkatachessacademy.in/aca.png"
                url="https://kolkatachessacademy.in/aspirechess/chess-academies"
                type="article"
                canonical="https://kolkatachessacademy.in/aspirechess/chess-academies"
                structuredData={{
                    '@context': 'https://schema.org',
                    '@type': 'EducationalOrganization',
                    name: 'AspireChess',
                    url: 'https://kolkatachessacademy.in/aspirechess/chess-academies',
                    description: 'Discover AspireChess\'s network and approach to chess education. Find the best chess academies for your growth.'
                }}
            />
            <section>
            <div className="max-w-7xl mx-auto px-6 text-center space-y-20">
        
                <div>
                        <h2 className="text-4xl font-bold mb-4 text-amber-400">Collaboration Opportunities</h2>
                        <p className="text-lg mb-12 text-gray-300 max-w-4xl mx-auto">
                                We are dedicated to enhancing the quality of chess coaching worldwide. By collaborating with academies globally, we aim to promote the game and provide high-quality training for players of all levels. Join us in our mission to set new standards in chess coaching!
                        </p>
                        <div className="grid md:grid-cols-2 gap-8">
                                {collaborationModels.map(model => <InfoCard key={model.title} {...model} />)}
                        </div>
                </div>

                <div>
                        <h2 className="text-4xl font-bold mb-12 text-amber-400">Our Services & Curriculum</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                                {services.map(service => <InfoCard key={service.title} {...service} />)}
                        </div>
                </div>

                <div>
                        <h2 className="text-4xl font-bold mb-12 text-amber-400">Pricing & Terms</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                                {pricing.map(p => <PricingCard key={p.title} {...p} />)}
                        </div>
                </div>

            </div>
            </section>
        </>
    );
};

export default AspireChessAcademies;