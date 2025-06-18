import React from 'react';
import { FaEnvelope, FaInfoCircle, FaUndoAlt } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const RefundPolicy = () => {
  const location = useLocation();
  const isChessCodex = location.pathname.startsWith('/chesscodex');
  const contactEmail = isChessCodex ? 'hello@kolkatachessacademy.in' : 'hello@kolkatachessacademy.in';
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-brand-subtle to-brand-subtle p-6">
      <div className="bg-white max-w-4xl w-full p-8 rounded-2xl shadow-2xl relative animate-fadeIn">
        <div className="flex items-center justify-center mb-6">
          <FaUndoAlt className="text-brand-primary text-5xl mr-3" />
          <h1 className="text-4xl font-extrabold text-brand-dark">Refund Policy</h1>
        </div>
        <div className="space-y-6 text-brand-text leading-relaxed">
          <div className="flex items-start">
            <FaInfoCircle className="text-brand-secondary mt-1 mr-3" />
            <p>
              If you cancel our service within the first <strong className="text-brand-dark">7 days</strong> of payment, we will issue you a <strong className="text-brand-primary">full refund</strong>. No questions asked.
            </p>
          </div>
          <div className="flex items-start">
            <FaInfoCircle className="text-brand-secondary mt-1 mr-3" />
            <p>
              We strive to make you <strong className="text-brand-dark">fully satisfied</strong> with our services. However, if you cancel within the first 7 days of payment, a <strong className="text-brand-primary">full refund</strong> will be provided.
            </p>
          </div>
          <div className="flex items-start">
            <FaInfoCircle className="text-brand-secondary mt-1 mr-3" />
            <p>
              After <strong className="text-brand-dark">7 days</strong>, refunds will be issued on a <strong className="text-brand-secondary">prorated basis</strong>, unless specified otherwise in the service agreement.
            </p>
          </div>
          <div className="border-t pt-6 mt-6">
            <p className="text-brand-dark text-lg">
              If you have any questions regarding our refund policy, reach out to us at:
            </p>
            <div className="mt-2 flex items-center">
              <FaEnvelope className="text-brand-primary mr-2" />
              <a
                href={`mailto:${contactEmail}`}
                className="text-brand-secondary font-semibold underline hover:text-brand-primary transition-colors"
              >
                {contactEmail}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;