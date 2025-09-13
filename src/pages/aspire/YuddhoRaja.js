import React from "react";
import SEO from '../../components/SEO';

const YuddhoRaja = () => {
  return (
    <>
      <SEO
        title="Yuddho Raja-y Raja-y - AspireChess"
        description="Join Yuddho Raja-y Raja-y for structured, high-quality chess practice sessions with FIDE-rated players, top coaches, and exclusive resources."
        keywords="AspireChess, Yuddho Raja-y Raja-y, chess practice, FIDE, Kolkata, training"
        image="https://kolkatachessacademy.in/aca.png"
        url="https://kolkatachessacademy.in/aspirechess/exclusives/yuddho-raja"
        type="article"
        canonical="https://kolkatachessacademy.in/aspirechess/exclusives/yuddho-raja"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Event',
          name: 'Yuddho Raja-y Raja-y',
          url: 'https://kolkatachessacademy.in/aspirechess/exclusives/yuddho-raja',
          description: 'Structured, high-quality chess practice sessions with FIDE-rated players and top coaches.'
        }}
      />
      <section className="py-16 min-h-[60vh] bg-black bg-opacity-20 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-lg mx-auto max-w-4xl px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 text-amber-400 drop-shadow">যুদ্ধ রাজায় রাজায় (Yuddho Raja-y Raja-y)</h2>
          <p className="text-lg text-gray-300 mb-2">Struggling to find consistent practice partners or tournament-focused training? Tired of running between academies without noticeable progress?</p>
          <p className="text-lg text-gray-300 mb-6">Yuddho Raja-y Raja-y is your ultimate solution! Join us for structured, high-quality practice sessions to sharpen your skills, build confidence, and achieve your chess goals.</p>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-bold text-amber-400 mb-2">Benefits</h3>
          <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1 text-left">
            <li>Play with around 2000 elo FIDE-rated players to elevate your game.</li>
            <li>2-hour sessions, 3 days a week (Mon, Wed, Fri)</li>
            <li>Free access to our chess library, packed with resources for all levels.</li>
            {/* <li>Exclusive opportunity to train with Arpan Das (Jr.) & FM Joydeep Dutta (limited period only).</li> */}
          </ul>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-bold text-amber-400 mb-2">Facilities</h3>
          <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1 text-left">
            <li>Prime location: Only 1 km from Dum Dum Station at 178/3, Cross Road, Purba Sinthee, Dumdum, Kolkata: 30</li>
            <li>Access to professional chess sets and clocks.</li>
            <li>A focused and comfortable learning environment.</li>
            <li>Unlimited access to our curated chess library.</li>
          </ul>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-bold text-amber-400 mb-2">Affordable Price</h3>
          <p className="text-lg text-gray-300 ml-4">Worried about the cost? Here's the best part: It’s just ₹100 per session!<br/>Get 12 practice sessions per month for only ₹1200!</p>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-bold text-amber-400 mb-2">Eligibility</h3>
          <p className="text-lg text-gray-300 ml-4">You can be a member of any club or academy and still join us for practice sessions at যুদ্ধ রাজায় রাজায় (Yuddho Raja-y Raja-y).<br/>We welcome all chess enthusiasts to hone their skills with us and practice like a Pro!</p>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-bold text-amber-400 mb-2">Contact Us</h3>
          <p className="text-lg text-gray-300 ml-4">(+91) 9330876824 / 9740982294</p>
        </div>
        <div className="text-center mt-8">
          <p className="text-lg text-amber-400 font-semibold mb-2">As we Aspire for 100% Titled Players!</p>
          <p className="text-lg text-gray-300">Sign up today to experience the Aspire difference and reach your full potential.</p>
        </div>
      </section>
    </>
  );
};

export default YuddhoRaja;
