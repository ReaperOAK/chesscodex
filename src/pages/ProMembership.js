import React from "react";

const ProMembership = () => {
  const proMembershipDetails = [
    {
      title: "Calculation Pack",
      details: [
        "Structure: 9 curated puzzles divided in 3 levels prepared by a GM.",
        "Frequency: 3 days/week.",
        "Support: You can self-check the positions.",
      ],
    },
    {
      title: "Game Analysis",
      details: [
        "Structure: 8 in-depth game modern and classical analysis, with in-game solvable Diagrams.",
        "Frequency: 8 games to analyse, learn & study for a month.",
        "Support: Deep Dive by Titled Players and their personal insights.",
      ],
    },
    {
      title: "Hot Topic Summarizations",
      details: [
        "Structure: Video explanation Course with Positions- 1 Topic every Month of Beginner & 1 Topic of Intermediate or Advance or Expert Level presented by FM Joydeep Dutta & Arpan Das.",
        "Frequency: 2 Topics every Month.",
        "Support: Homework of specific Topics Presented to work at Home.",
      ],
    },
    {
      title: "Additional Benefits",
      details: [
        "Access to Exclusive Bonus Content.",
        "Access to our exclusive Pro Members Community Forum where we discuss daily ideas around chess!",
      ],
    },
  ];

  return (
    <section className="py-16 bg-[#f3f1f9]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#200e4a] mb-8">Pro Members - Kolkata Chess Academy</h2>
        <p className="text-lg text-[#270185] mb-8">
          At Kolkata Chess Academy, we are dedicated to enhancing the quality of chess coaching worldwide. Through our Pro Membership programme, we are trying to regulate the daily chess training at home, with a structured method.
          Our key areas of focus through this Study Method will be Calculation and Strategy with a mix of Endgames, Opening and Psychology.
          Join us in our mission to create structured chess training at home and to set new standards in your career!
        </p>
        <h3 className="text-2xl font-bold text-[#200e4a] mb-6">Our Offerings:</h3>
        <div className="space-y-8">
          {proMembershipDetails.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-[#200e4a] mb-3">{item.title}</h3>
              <ul className="text-left list-disc list-inside text-[#270185] space-y-1">
                {item.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-lg text-[#270185] mt-8">
          We look forward to structuring your training at home and easing the process with fragmented, digestible chess information!
        </p>
      </div>
    </section>
  );
};

export default ProMembership;