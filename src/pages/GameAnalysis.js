import React from "react";

const GameAnalysis = () => {
  return (
    <section className="py-16 bg-[#f3f1f9]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#200e4a] mb-8">Game Analysis</h2>
        <p className="text-lg text-[#270185] mb-8">
          The game analysis will be done individually by FMs & IMs or sometimes even a GM.
        </p>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-bold text-[#200e4a] mb-4">Service:</h3>
          <ul className="list-disc list-inside text-left text-[#270185] space-y-2">
            <li>In-depth Game Analysis with overview of each game.</li>
            <li>Overview on Player’s Playing Style and Areas of Improvement.</li>
            <li>Suggestions on Specific areas that needs immediate attention.</li>
            <li>Book Recommendations.</li>
          </ul>
          <h3 className="text-2xl font-bold text-[#200e4a] mt-6 mb-4">Time Frame:</h3>
          <p className="text-left text-[#270185]">Approximately one week.</p>
        </div>
        {/* Call to Action and Pricing Section */}
        <div className="mt-12 bg-[#200e4a] text-white py-8 px-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Ready to Improve Your Game?</h3>
          <p className="text-lg mb-6">
            Register for our Game Analysis service today and get personalized feedback from experienced FMs, IMs, and GMs.
          </p>
          <h3 className="text-2xl font-bold mb-6">Pricing</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white text-[#270185] rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-2 text-[#200e4a]">5 Games</h3>
              <p className="text-lg">₹1000</p>
            </div>
            <div className="bg-white text-[#270185] rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-2 text-[#200e4a]">10 Games</h3>
              <p className="text-lg">₹1800</p>
            </div>
          </div>
          <a
            href="https://forms.gle/6Tb4CTK7sRLW7n1E6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#7646eb] text-white py-2 px-4 rounded-lg font-medium hover:bg-[#461fa3] transition"
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default GameAnalysis;