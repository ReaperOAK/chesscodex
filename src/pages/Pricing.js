import React from "react";

const Pricing = () => {
  const pricingPlans = [
    { plan: "Monthly", price: "₹999 / $14.99" },
    { plan: "Half-Yearly", price: "₹4,999 / $74.99" },
    { plan: "Yearly", price: "₹8,999 / $134.99" },
  ];

  return (
    <section className="py-12 bg-[#f3f1f9] text-[#270185]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 text-[#200e4a]">Pricing</h2>
        <p className="text-lg mb-8">
          Affordable plans to kickstart your chess journey!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((item, idx) => (
            <div
              key={idx}
              className="bg-white text-[#270185] rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-2 text-[#200e4a]">{item.plan} Plan</h3>
              <p className="text-lg">{item.price}</p>
            </div>
          ))}
        </div>
        <a
          href="https://wa.me/+919830149852"
          className="inline-block mt-6 bg-[#461fa3] text-white py-2 px-4 rounded-lg font-medium hover:bg-[#7646eb] transition"
        >
          Subscribe Now
        </a>
      </div>
    </section>
  );
};

export default Pricing;