import React from "react";
import SEO from '../../components/SEO';

const YuddhoRaja = () => {
  return (
    <>
      <SEO
        title="Yuddho Raja-y Raja-y - Kolkata Chess Academy"
        description="Join Yuddho Raja-y Raja-y for structured, high-quality chess practice sessions with FIDE-rated players, top coaches, and exclusive resources."
        keywords="Kolkata Chess Academy, Yuddho Raja-y Raja-y, chess practice, FIDE, Kolkata, training"
        image="https://kolkatachessacademy.in/kca.png"
        url="https://kolkatachessacademy.in/exclusives/yuddho-raja"
        type="article"
        canonical="https://kolkatachessacademy.in/exclusives/yuddho-raja"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Event',
          name: 'Yuddho Raja-y Raja-y',
          url: 'https://kolkatachessacademy.in/exclusives/yuddho-raja',
          description: 'Structured, high-quality chess practice sessions with FIDE-rated players and top coaches.'
        }}
      />
      <section className="max-w-3xl mx-auto my-8 p-6 rounded-xl bg-gradient-to-br from-brand-dark/90 via-brand-secondary/80 to-yellow-100/80 shadow-lg border border-brand-primary">
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-2">যুদ্ধ রাজায় রাজায় (Yuddho Raja-y Raja-y)</h2>
        <p className="text-base text-gray-900 mb-2">Struggling to find consistent practice partners or tournament-focused training? Tired of running between academies without noticeable progress?</p>
        <p className="text-base text-gray-900 mb-4">Yuddho Raja-y Raja-y is your ultimate solution! Join us for structured, high-quality practice sessions to sharpen your skills, build confidence, and achieve your chess goals.</p>
        <div className="mb-2">
          <span className="font-semibold text-brand-dark">Benefits</span>
          <ul className="list-disc list-inside text-gray-900 ml-4">
            <li>Play with around 2000 elo FIDE-rated players to elevate your game.</li>
            <li>2-hour sessions, 3 days a week (Mon, Wed, Fri)</li>
            <li>Free access to our chess library, packed with resources for all levels.</li>
            <li>Exclusive opportunity to train with Arpan Das (Jr.) & FM Joydeep Dutta (limited period only).</li>
          </ul>
        </div>
        <div className="mb-2">
          <span className="font-semibold text-brand-dark">Facilities:</span>
          <ul className="list-disc list-inside text-gray-900 ml-4">
            <li>Prime location: Only 1 km from Dum Dum Station at 178/3, Cross Road, Purba Sinthee, Dumdum, Kolkata: 30</li>
            <li>Access to professional chess sets and clocks.</li>
            <li>A focused and comfortable learning environment.</li>
            <li>Unlimited access to our curated chess library.</li>
          </ul>
        </div>
        <div className="mb-2">
          <span className="font-semibold text-brand-dark">Affordable Price:</span>
          <p className="ml-4">Worried about the cost? Here's the best part: It’s just ₹100 per session!<br/>Get 12 practice sessions per month for only ₹1200!</p>
        </div>
        <div className="mb-2">
          <span className="font-semibold text-brand-dark">Eligibility:</span>
          <p className="ml-4">You can be a member of any club or academy and still join us for practice sessions at যুদ্ধ রাজায় রাজায় (Yuddho Raja-y Raja-y).<br/>We welcome all chess enthusiasts to hone their skills with us and practice like a Pro!</p>
        </div>
        <div className="mb-2">
          <span className="font-semibold text-brand-dark">Contact Us:</span>
          <p className="ml-4">(+91) 9330876824 / 9740982294</p>
        </div>
        <p className="text-base text-brand-dark font-semibold mt-2">As we Aspire for 100% Titled Players!</p>
        <p className="text-base text-gray-900">Sign up today to experience the Aspire difference and reach your full potential.</p>
      </section>
    </>
  );
};

export default YuddhoRaja;
