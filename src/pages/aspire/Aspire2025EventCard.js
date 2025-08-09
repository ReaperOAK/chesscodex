import React, { useState } from "react";

const cardClasses = "bg-black bg-opacity-20 backdrop-blur-sm border border-gray-700/50 rounded-lg shadow-lg overflow-hidden hover:shadow-amber-400/10 transition-all duration-300 group";
const cardTitleClasses = "text-white";
const cardTextClasses = "text-gray-300";
const buttonClasses = "bg-amber-500 hover:bg-amber-400 text-gray-900";

function Aspire2025EventCard({ event, isLinkExpired }) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className={cardClasses}>
        {event.image ? (
          <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
        ) : (
          <div className="w-full h-48 bg-gradient-to-br from-amber-400/30 to-black flex items-center justify-center">
            <span className="text-3xl text-amber-400 font-bold">Aspire Chess Academy</span>
          </div>
        )}
        <div className="p-6">
          <h3 className={`text-2xl font-semibold mb-3 ${cardTitleClasses}`}>{event.title}</h3>
          <p className={`${cardTextClasses} mb-1`}><strong>Date:</strong> {event.date}</p>
          <p className={`${cardTextClasses} mb-1`}><strong>Mode:</strong> {event.mode}</p>
          {event.details && (
            <button
              className={`block mx-auto mb-4 py-1 px-4 rounded-lg font-medium transition-colors duration-300 underline hover:bg-amber-400/20 ${buttonClasses}`}
              onClick={() => setModalOpen(true)}
              aria-label="Show event details"
            >
              Click for more details
            </button>
          )}
          {event.link && !isLinkExpired(event.date) ? (
            <a href={event.link} className={`block text-center py-2 px-4 rounded-lg font-medium transition-colors duration-300 ${buttonClasses}`} target="_blank" rel="noopener noreferrer">
              Register Now
            </a>
          ) : (
            <p className={`text-center font-semibold text-gray-500`}>
              Registration Closed
            </p>
          )}
        </div>
      </div>
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 px-2 sm:px-6">
          <div className="bg-zinc-900 rounded-2xl shadow-2xl w-full max-w-3xl p-0 sm:p-0 relative border-2 border-amber-400 overflow-hidden animate-fadeIn">
            <button
              className="absolute top-4 right-6 text-amber-400 hover:text-amber-200 text-3xl font-bold z-10 focus:outline-none"
              onClick={() => setModalOpen(false)}
              aria-label="Close details modal"
            >
              &times;
            </button>
            <div className="flex flex-col md:flex-row">
              {/* Left: Event visual */}
              <div className="md:w-1/2 w-full flex flex-col items-center justify-center bg-gradient-to-br from-amber-400/20 to-black p-6 md:p-8">
                {event.image ? (
                  <img src={event.image} alt={event.title} className="rounded-xl w-full max-h-64 object-cover shadow-lg border border-amber-400" />
                ) : (
                  <div className="w-full h-48 flex items-center justify-center">
                    <span className="text-3xl text-amber-400 font-bold">Aspire Chess Academy</span>
                  </div>
                )}
                <div className="mt-6 w-full text-center">
                  <h3 className={`text-2xl font-bold mb-2 ${cardTitleClasses}`}>{event.title}</h3>
                  <div className="flex flex-wrap justify-center gap-4 text-base mb-2">
                    <span className="bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full font-semibold">{event.date}</span>
                    <span className="bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full font-semibold">{event.mode}</span>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2 mt-2">
                    <a href={event.details?.registration} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-amber-500 hover:bg-amber-400 text-gray-900 font-semibold rounded-lg shadow transition-colors duration-200">Register</a>
                    <a href={event.details?.message} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-amber-700 hover:bg-amber-600 text-white font-semibold rounded-lg shadow transition-colors duration-200">WhatsApp Group</a>
                  </div>
                </div>
              </div>
              {/* Right: Details */}
              <div className="md:w-1/2 w-full p-6 md:p-8 flex flex-col gap-4 overflow-y-auto max-h-[80vh]">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-amber-400">Time:</span>
                    <span className={cardTextClasses}>{event.details.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-amber-400">Location:</span>
                    <a href={event.details.map} target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-400 break-all">{event.details.location}</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-amber-400">Format:</span>
                    <span className={cardTextClasses}>{event.details.format}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-amber-400">Entry Fees:</span>
                    <span className={cardTextClasses}>{event.details.entryFees}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-amber-400">Prize Fund:</span>
                    <span className={cardTextClasses}>{event.details.prizeFund}</span>
                  </div>
                </div>
                <div className="border-t border-amber-400/30 my-2"></div>
                <div>
                  <span className="font-bold text-amber-400">Prizes:</span>
                  <ul className="list-disc pl-6 mt-1 text-gray-200 text-sm grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                    {event.details.prizes.map((prize, i) => (
                      <li key={i}>{prize.place}{typeof prize.place === 'number' ? '️⃣' : ''} {prize.prize}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="font-bold text-amber-400">Age Categories:</span>
                  <span className="ml-2 text-gray-200">{event.details.ageCategories.join(' | ')}</span>
                  <ul className="list-disc pl-6 mt-1 text-gray-200 text-sm grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                    {event.details.ageCategoryPrizes.map((prize, i) => (
                      <li key={i}>{prize.place}{prize.prize}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="font-bold text-amber-400">Special Category:</span>
                  <span className="ml-2 text-gray-200">{event.details.specialCategory.join(', ')}</span>
                </div>
                <div>
                  <span className="font-bold text-amber-400">Contact:</span>
                  <ul className="list-disc pl-6 mt-1 text-gray-200 text-sm">
                    {event.details.contact.map((c, i) => (
                      <li key={i}>{c.name} - {c.phone}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Aspire2025EventCard;
