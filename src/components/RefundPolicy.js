import React from 'react';
import { FaEnvelope, FaInfoCircle, FaUndoAlt } from 'react-icons/fa';

const RefundPolicy = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-gray-100 p-6">
      {/* Refund Policy Card */}
      <div className="bg-white max-w-4xl w-full p-8 rounded-2xl shadow-2xl relative animate-fadeIn">
        {/* Header Section */}
        <div className="flex items-center justify-center mb-6">
          <FaUndoAlt className="text-blue-500 text-5xl mr-3" />
          <h1 className="text-4xl font-extrabold text-gray-800">Refund Policy</h1>
        </div>

        {/* Policy Content */}
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <div className="flex items-start">
            <FaInfoCircle className="text-blue-400 mt-1 mr-3" />
            <p>
              If you cancel our service within the first <strong className="text-gray-800">7 days</strong> of payment, we will issue you a <strong className="text-green-600">full refund</strong>. No questions asked.
            </p>
          </div>

          <div className="flex items-start">
            <FaInfoCircle className="text-blue-400 mt-1 mr-3" />
            <p>
              We strive to make you <strong className="text-gray-800">fully satisfied</strong> with our services. However, if you cancel within the first 7 days of payment, a <strong className="text-green-600">full refund</strong> will be provided.
            </p>
          </div>

          <div className="flex items-start">
            <FaInfoCircle className="text-blue-400 mt-1 mr-3" />
            <p>
              After <strong className="text-gray-800">7 days</strong>, refunds will be issued on a <strong className="text-blue-500">prorated basis</strong>, unless specified otherwise in the service agreement.
            </p>
          </div>

          {/* Contact Section */}
          <div className="border-t pt-6 mt-6">
            <p className="text-gray-800 text-lg">
              If you have any questions regarding our refund policy, reach out to us at:
            </p>
            <div className="mt-2 flex items-center">
              <FaEnvelope className="text-blue-500 mr-2" />
              <a
                href="mailto:hello@chesscodex.com"
                className="text-blue-600 font-semibold underline hover:text-blue-800 transition-colors"
              >
                hello@chesscodex.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
