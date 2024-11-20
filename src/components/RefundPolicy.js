import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Refund Policy</h1>
        <p className="text-lg text-gray-700 mb-4">
          If you cancel our service within the first 7 days of payment, we will issue you a full refund. No questions asked.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          We hope to make you fully satisfied with our services. However, if you are not satisfied with any of our services and if you cancel our service within the first 7 days of payment, we will issue you a full refund. No questions asked.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          For any reasons, if you want to get a refund after the first 7 days of your payment, then we will issue you a prorated refund unless specified otherwise in the service agreement.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          If you have any questions about our refund policy, please contact us at: <a href="mailto:hello@chesscodex.com" className="text-blue-600 underline">hello@chesscodex.com</a>
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;