import React from "react";
import { useState, useEffect } from "react";

const Timeline = () => {
  const timeOfEvent = new Date(2023, 8, 24, 7, 0);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const calculateCountdown = () => {
      const currentTime = new Date();
      const timeDifference = timeOfEvent - currentTime;

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );

        setCountdown({ days, hours, minutes });
      }
    };

    const interval = setInterval(calculateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="h-[100vh] w-[100vw] text-grey text-9xl font-bold flex justify-evenly mx-10 justify-items-center gap-28 sm:flex-col md:gap-16">
      <div className="flex flex-col justify-center">
        <div className="flex flex-col justify-center text-center">
          {countdown.days}
        </div>
        <div className="text-orange text-4xl font-semibold text-center -mt-10">
          D A Y S
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex flex-col justify-center text-center">
          {countdown.hours}
        </div>
        <div className="text-orange text-4xl font-semibold text-center -mt-10">
          H O U R S
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex flex-col justify-center text-center">
          {countdown.days}
        </div>
        <div className="text-orange text-4xl font-semibold text-center -mt-10">
          M I N S
        </div>
      </div>
    </div>
  );
};

export default Timeline;
