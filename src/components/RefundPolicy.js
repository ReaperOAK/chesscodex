import React from 'react';
import { FaEnvelope, FaInfoCircle, FaUndoAlt } from 'react-icons/fa';

const RefundPolicy = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#f3f1f9] to-[#f3f1f9] p-6">
      <div className="bg-white max-w-4xl w-full p-8 rounded-2xl shadow-2xl relative animate-fadeIn">
        <div className="flex items-center justify-center mb-6">
          <FaUndoAlt className="text-[#200e4a] text-5xl mr-3" />
          <h1 className="text-4xl font-extrabold text-[#200e4a]">Refund Policy</h1>
        </div>
        <div className="space-y-6 text-[#270185] leading-relaxed">
          <div className="flex items-start">
            <FaInfoCircle className="text-[#461fa3] mt-1 mr-3" />
            <p>
              If you cancel our service within the first <strong className="text-[#200e4a]">7 days</strong> of payment, we will issue you a <strong className="text-[#af0505]">full refund</strong>. No questions asked.
            </p>
          </div>
          <div className="flex items-start">
            <FaInfoCircle className="text-[#461fa3] mt-1 mr-3" />
            <p>
              We strive to make you <strong className="text-[#200e4a]">fully satisfied</strong> with our services. However, if you cancel within the first 7 days of payment, a <strong className="text-[#af0505]">full refund</strong> will be provided.
            </p>
          </div>
          <div className="flex items-start">
            <FaInfoCircle className="text-[#461fa3] mt-1 mr-3" />
            <p>
              After <strong className="text-[#200e4a]">7 days</strong>, refunds will be issued on a <strong className="text-[#461fa3]">prorated basis</strong>, unless specified otherwise in the service agreement.
            </p>
          </div>
          <div className="border-t pt-6 mt-6">
            <p className="text-[#200e4a] text-lg">
              If you have any questions regarding our refund policy, reach out to us at:
            </p>
            <div className="mt-2 flex items-center">
              <FaEnvelope className="text-[#af0505] mr-2" />
              <a
                href="mailto:hello@kolkatachessacademy.in"
                className="text-[#461fa3] font-semibold underline hover:text-[#7646eb] transition-colors"
              >
                hello@kolkatachessacademy.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;