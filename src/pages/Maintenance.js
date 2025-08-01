import SEO from '../components/SEO';
import React, { useEffect, useState, useMemo } from 'react';

const Maintenance = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  
  // Memoize the target maintenance end time (e.g., 24 hours from now)
  const maintenanceEndTime = useMemo(() => new Date(Date.now() + 1000 * 60 * 60 * 1000), []);

  // Function to update countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeDifference = maintenanceEndTime - now;

      if (timeDifference > 0) {
        setTimeLeft({
          days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((timeDifference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((timeDifference / (1000 * 60)) % 60),
          seconds: Math.floor((timeDifference / 1000) % 60),
        });
      } else {
        clearInterval(interval); // Clear interval if maintenance ends
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [maintenanceEndTime]);

  return (
    <>
      <SEO
        title="Site Under Maintenance - Kolkata Chess Academy"
        description="Our site is currently undergoing maintenance. We'll be back soon! Contact info@chessacademy.com for urgent queries."
        keywords="maintenance, site down, Kolkata Chess Academy, chess, contact"
        image="https://kolkatachessacademy.in/kca.png"
        url="https://kolkatachessacademy.in/maintenance"
        type="website"
        canonical="https://kolkatachessacademy.in/maintenance"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Site Under Maintenance',
          url: 'https://kolkatachessacademy.in/maintenance',
          description: 'Our site is currently undergoing maintenance. We\'ll be back soon! Contact info@chessacademy.com for urgent queries.'
        }}
      />
      <div className="flex flex-col items-center justify-center min-h-screen bg-brand-subtle text-center px-4">
      <div className="max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-brand-dark">Under Maintenance</h1>
        <p className="text-lg mb-8 text-brand-text">Our site is currently undergoing maintenance. We'll be back soon!</p>
        <div className="flex justify-around text-2xl font-semibold text-brand-secondary">
          <div>
            <span className="block text-5xl">{timeLeft.days}</span>
            <span className="text-sm uppercase">Days</span>
          </div>
          <div>
            <span className="block text-5xl">{timeLeft.hours}</span>
            <span className="text-sm uppercase">Hours</span>
          </div>
          <div>
            <span className="block text-5xl">{timeLeft.minutes}</span>
            <span className="text-sm uppercase">Minutes</span>
          </div>
          <div>
            <span className="block text-5xl">{timeLeft.seconds}</span>
            <span className="text-sm uppercase">Seconds</span>
          </div>
        </div>
      </div>
      <p className="text-brand-text mt-8">
        Thank you for your patience! If you have any questions, please contact us at 
        <a href="mailto:info@chessacademy.com" className="text-brand-primary underline ml-1">info@chessacademy.com</a>.
      </p>
      </div>
    </>
  );
};

export default Maintenance;
