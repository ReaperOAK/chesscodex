import SEO from '../../components/SEO';
import React from 'react';

const collaborationModels = [
    {
        title: "Group Classes",
        points: [
            "Structure: Payment based on hourly remuneration for the coach.",
            "Platform: Classes are conducted on Zoom.",
            "Support: We provide full technical support, curriculum, and high-quality coaching resources.",
            "Additional Benefit: After two successful batches, class duration extends to 1.5 hours for the third batch onward."
        ]
    },
    {
        title: "1:1 Individual Classes",
        points: [
            "Structure: Revenue-sharing model where your academy manages marketing and outreach.",
            "Platform: Classes are conducted on Zoom.",
            "Support: We provide full technical support, curriculum, and high-quality coaching resources.",
            "Coming Soon: A fully automated online classroom and advanced dashboard (Jan 2025)."
        ]
    }
];

const services = [
    {
        title: "Group Class Services",
        points: [
            "Coach Profile: Led by an experienced coach with a minimum peak rating of 1800.",
            "Curriculum: Topic Summarization prepared by GM Saptarshi Roy Chowdhury.",
            "Assignments: Homework after each topic provided by our mentors IM Somak Palit & FM Joydeep Dutta.",
            "Evaluation: Quarterly physical mark sheets sent to your academy HQ.",
            "Feedback: Bi-monthly student progress reports and PTM with coaches and titled players.",
            "Perks: 10% discount on KCA camps/tournaments and events."
        ]
    },
    {
        title: "1:1 Private Class Services",
        points: [
            "Coach Profile: Class led by an experienced coach based on the student's level.",
            "Personalized Coaching: Customized material and opening preparation for each player.",
            "Study Material: Detailed topics on our website with PDFs and Lichess links.",
            "Advanced Study: Classical Game Study curated by our Mentors FM Joydeep Dutta and Arpan Das.",
            "Guidance: Routine and Book Recommendations prepared by titled players."
        ]
    }
];

const pricing = [
    {
        title: "Group Class",
        price: "₹1200 per hour",
        details: "Max 10-12 students. Coach with 1800+ FIDE Rating. 1.5 hours for 3rd batch onwards."
    },
    {
        title: "1:1 Private Class",
        price: "₹800 per hour",
        details: "For a coach of ~1800 level. Partnered academies: 20% revenue share. Non-tied academies: 15% revenue share."
    },
    {
        title: "Premium Game Analysis",
        price: "5 Games: ₹1000 | 10 Games: ₹1800",
        details: "In-depth analysis by FMs, IMs, or GMs. Includes overview of playing style, areas for improvement, and book recommendations. Turnaround time is approx. one week."
    }
];


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