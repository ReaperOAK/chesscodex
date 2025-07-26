import React from 'react';
import { FaEnvelope, FaInfoCircle, FaUndoAlt } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const RefundPolicy = () => {
  const location = useLocation();
  const isAspireChess = location.pathname.startsWith('/aspirechess');
  const contactEmail = 'hello@kolkatachessacademy.in';

  // --- Theme-Aware Class Definitions ---
  const sectionClasses = isAspireChess ? "" : "flex items-center justify-center min-h-screen bg-gradient-to-r from-brand-subtle to-brand-subtle p-6";
  const cardClasses = isAspireChess
    ? "bg-black bg-opacity-25 backdrop-blur-md rounded-2xl p-8 sm:p-12 border border-gray-700/60 shadow-2xl max-w-5xl w-full"
    : "bg-white max-w-5xl w-full p-8 rounded-2xl shadow-2xl relative animate-fadeIn";
  const titleClasses = isAspireChess ? "text-amber-400" : "text-brand-dark";
  const textClasses = isAspireChess ? "text-gray-300" : "text-brand-text";
  const iconClasses = isAspireChess ? "text-amber-400" : "text-brand-primary";
  const highlightClasses = isAspireChess ? "text-white" : "text-brand-dark";

  return (
    <div className={sectionClasses}>
      <div className={cardClasses + ' mx-auto'}>
        <div className="flex items-center justify-center mb-6">
          <FaUndoAlt className={`${iconClasses} text-5xl mr-3`} />
          <h1 className={`text-4xl font-extrabold ${titleClasses}`}>Refund Policy</h1>
        </div>
        <div className={`space-y-6 leading-relaxed ${textClasses}`}>
          <div className="flex items-start">
            <FaInfoCircle className={`${isAspireChess ? 'text-gray-500' : 'text-brand-secondary'} mt-1 mr-3`} />
            <p>
              If you cancel our service within the first <strong className={highlightClasses}>7 days</strong> of payment, we will issue you a <strong className={iconClasses}>full refund</strong>. No questions asked.
            </p>
          </div>
          <div className="flex items-start">
            <FaInfoCircle className={`${isAspireChess ? 'text-gray-500' : 'text-brand-secondary'} mt-1 mr-3`} />
            <p>
              We strive to make you <strong className={highlightClasses}>fully satisfied</strong> with our services. However, if you cancel within the first 7 days of payment, a <strong className={iconClasses}>full refund</strong> will be provided.
            </p>
          </div>
          <div className="flex items-start">
            <FaInfoCircle className={`${isAspireChess ? 'text-gray-500' : 'text-brand-secondary'} mt-1 mr-3`} />
            <p>
              After <strong className={highlightClasses}>7 days</strong>, refunds will be issued on a <strong className={highlightClasses}>prorated basis</strong>, unless specified otherwise in the service agreement.
            </p>
          </div>
          <div className="border-t pt-6 mt-6 border-gray-700/50">
            <p className={`${highlightClasses} text-lg`}>
              If you have any questions regarding our refund policy, reach out to us at:
            </p>
            <div className="mt-2 flex items-center">
              <FaEnvelope className={`${iconClasses} mr-2`} />
              <a href={`mailto:${contactEmail}`} className={`font-semibold underline transition-colors ${isAspireChess ? 'text-amber-300 hover:text-white' : 'text-brand-secondary hover:text-brand-primary'}`}>
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