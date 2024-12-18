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
          <h3 className="text-2xl font-bold text-[#200e4a] mt-6 mb-4">Fee:</h3>
          <ul className="list-disc list-inside text-left text-[#270185] space-y-2">
            <li>5 Games: ₹1000</li>
            <li>10 Games: ₹1800</li>
          </ul>
          <h3 className="text-2xl font-bold text-[#200e4a] mt-6 mb-4">Time Frame:</h3>
          <p className="text-left text-[#270185]">Approximately one week.</p>
          <a
            href="https://forms.gle/6Tb4CTK7sRLW7n1E6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-[#461fa3] text-white py-2 px-4 rounded-lg font-medium hover:bg-[#7646eb] transition-colors duration-300"
          >
            Register for Game Analysis
          </a>
        </div>
      </div>
    </section>
  );
};

export default GameAnalysis;