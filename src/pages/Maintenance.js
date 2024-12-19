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
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f3f1f9] text-center px-4">
      <div className="max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-[#200e4a]">Under Maintenance</h1>
        <p className="text-lg mb-8 text-[#270185]">Our site is currently undergoing maintenance. We’ll be back soon!</p>
        <div className="flex justify-around text-2xl font-semibold text-[#461fa3]">
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
      <p className="text-[#3b3a52] mt-8">
        Thank you for your patience! If you have any questions, please contact us at 
        <a href="mailto:info@chessacademy.com" className="text-[#af0505] underline ml-1">info@chessacademy.com</a>.
      </p>
    </div>
  );
};

export default Maintenance;