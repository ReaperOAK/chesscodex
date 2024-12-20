import React from 'react';

const ReferralProgramme = () => {
  const referralDetails = [
    {
      title: "Earn Discounts",
      details: [
        "Receive exclusive discounts for every successful referral.",
      ],
    },
    {
      title: "Share the Benefits",
      details: [
        "Introduce others to the joy of learning chess with us.",
      ],
    },
    {
      title: "Simple Process",
      details: [
        "Refer, enroll, and get rewarded!",
      ],
    },
  ];

  return (
    <section className="py-16 bg-[#f3f1f9]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#200e4a] mb-8">Referral Programme</h2>
        <p className="text-lg text-[#270185] mb-8">
          Share your love for chess and earn rewards by bringing your friends and family to our academy.
        </p>
        {/* Call to Action and Referral Details Section */}
        <div className="mt-12 bg-[#200e4a] text-white py-8 px-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Ready to Refer and Earn?</h3>
          <p className="text-lg mb-6">
            Join our Referral Programme today and start earning rewards for every successful referral.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {referralDetails.map((item, idx) => (
              <div
                key={idx}
                className="bg-white text-[#270185] rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-bold mb-2 text-[#200e4a]">{item.title}</h3>
                <ul className="text-left list-disc list-inside text-[#270185] space-y-1">
                  {item.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <a
            href="/dashboard"
            className="inline-block bg-[#7646eb] text-white py-2 px-4 rounded-lg font-medium hover:bg-[#461fa3] transition"
          >
            Refer Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReferralProgramme;