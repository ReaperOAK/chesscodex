import React from 'react';

const ChessInWorkspaces = () => {
  const workspaceDetails = [
    {
      title: "Workshops & Training",
      details: [
        "Interactive sessions to hone cognitive and analytical skills.",
      ],
    },
    {
      title: "Team Building",
      details: [
        "Encourage collaboration and camaraderie through chess.",
      ],
    },
    {
      title: "Corporate Tournaments",
      details: [
        "Host engaging tournaments for your organization.",
      ],
    },
  ];
  return (
    <section className="py-16 bg-brand-subtle">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-brand-dark mb-8">Chess in Workspaces</h2>
        <p className="text-lg text-brand-text mb-8">
          Empower employees with chess-based workshops that boost strategic thinking, focus, and teamwork.
        </p>
        {/* Call to Action and Workspace Details Section */}
        <div className="mt-12 bg-brand-dark text-white py-8 px-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Ready to Empower Your Workspace?</h3>
          <p className="text-lg mb-6">
            Contact us today to learn more about our Chess in Workspaces program and how we can collaborate.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {workspaceDetails.map((item, idx) => (
              <div
                key={idx}
                className="bg-white text-brand-text rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-bold mb-2 text-brand-dark">{item.title}</h3>
                <ul className="text-left list-disc list-inside text-brand-text space-y-1">
                  {item.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>          <a
            href="https://wa.me/+919830149852"
            className="inline-block bg-brand-primary text-white py-2 px-4 rounded-lg font-medium hover:bg-brand-secondary transition"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ChessInWorkspaces;
