import React from 'react';

const ChessInSchools = () => {
  const schoolDetails = [
    {
      title: "Structured Lessons",
      details: [
        "Tailored chess lessons designed to improve cognitive skills and problem-solving abilities.",
      ],
    },
    {
      title: "Tournaments & Competitions",
      details: [
        "Encourage students to showcase their skills and build confidence through competitive events.",
      ],
    },
  ];

  return (
    <section className="py-16 bg-[#f3f1f9]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#200e4a] mb-8">Chess in Schools</h2>
        <p className="text-lg text-[#270185] mb-8">
          Bring the timeless game of chess to the classroom, enriching young minds through strategic thinking.
        </p>
        {/* Call to Action and School Details Section */}
        <div className="mt-12 bg-[#200e4a] text-white py-8 px-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Ready to Bring Chess to Your School?</h3>
          <p className="text-lg mb-6">
            Contact us today to learn more about our Chess in Schools program and how we can collaborate.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {schoolDetails.map((item, idx) => (
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
            href="https://wa.me/+919830149852"
            className="inline-block bg-[#7646eb] text-white py-2 px-4 rounded-lg font-medium hover:bg-[#461fa3] transition"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ChessInSchools;