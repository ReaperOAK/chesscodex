import React from 'react';

const ChessAcademies = () => {
  const academyDetails = [
    {
      title: "Collaborate with Us",
      details: [
        "Organize joint events, share resources, and elevate the standard of chess training worldwide.",
      ],
    },
    {
      title: "Comprehensive Training Programs",
      details: [
        "Access to exclusive resources and opportunities to participate in national and international tournaments.",
      ],
    },
    {
      title: "Network of Chess Enthusiasts",
      details: [
        "Connect, learn, and grow together with our academy network.",
      ],
    },
  ];

  return (
    <section className="py-16 bg-[#f3f1f9]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#200e4a] mb-8">Chess Academies</h2>
        <p className="text-lg text-[#270185] mb-8">
          Join our network of chess academies to expand the game’s reach and create world-class learning opportunities.
        </p>
        {/* Call to Action and Academy Details Section */}
        <div className="mt-12 bg-[#200e4a] text-white py-8 px-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Ready to Join Our Network?</h3>
          <p className="text-lg mb-6">
            Contact us today to learn more about our Chess Academies program and how we can collaborate.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {academyDetails.map((item, idx) => (
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
            Join Now
          </a>
          <a
            href="/brochures/ChessAcademy.pdf"
            className="inline-block bg-[#7646eb] text-white py-2 px-4 rounded-lg font-medium hover:bg-[#461fa3] transition ml-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Brochure
          </a>
        </div>
      </div>
    </section>
  );
};

export default ChessAcademies;