import React from "react";

const Scholarships = () => {
  const scholarshipDetails = [
    {
      category: "For our Young FIDE rated & USCF 1200+ rated Stars:",
      benefits: [
        "One-month free subscription to our “Pro Membership”",
      ],
    },
    {
      category: "For our State Age Group category winners:",
      benefits: [
        "1st & 2nd Rank Holders: Six (6) months free subscription to “Pro Membership”",
        "Exclusive 1st Rank Holder: 5 Game Analysis",
        "3rd Rank: 2 Months free “Pro Membership”",
        "4th Rank: 1 Month free “Pro Membership”",
      ],
    },
    {
      category: "For our National Age Group category winners:",
      benefits: [
        "1st & 2nd Rank Holders: 1 year free subscription to “Pro Membership”",
        "Exclusive 1st Rank Holder: Quarterly 5 Game Analysis",
        "Exclusive 2nd Rank Holder: 1 time 5 Game Analysis",
        "3rd Rank: 6 Months free “Pro Membership” & 1 time 5 Game Analysis",
        "4th Rank: 4 Months free “Pro Membership”",
        "5th Rank: 2 Months free “Pro Membership”",
      ],
    },
    {
      category: "Additional Incentives to both Categories:",
      benefits: [
        "Achievement Highlight on all our Social Media Platforms",
        "Personalized Merchandize Gifts",
        "Selected One free Tournament Registration",
      ],
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Scholarships</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-bold mb-4">Scholarships Categories</h3>
          <div className="text-left space-y-6">
            {scholarshipDetails.map((item, idx) => (
              <div key={idx}>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{item.category}</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {item.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scholarships;