import React from "react";
import { useState, useEffect } from "react";

const Countdown = () => {
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
  });
  
  return (
    <div className="h-[100vh] w-[90vw] text-grey text-9xl font-bold  mx-32 flex flex-col gap-64 pt-10 md:text-7xl sm:pt-2 sm:gap-4 sm:text-9xl sm:mx-8">
      <div className="text-lg font-normal tracking-[7px]">COUNTDOWN</div>
      <div className="flex mx-10 justify-between sm:mx-2 sm:flex-col sm:h-[100%] justify-items-center md:ml-0 md:px-10">
      {/* <div className="flex gap-96 ml-16 sm:ml-2 sm:flex-col md:gap-16 justify-items-center"> */}
      <div className="flex flex-col justify-center">
        <div className="flex flex-col justify-center text-center">
          {countdown.days}
        </div>
        <div className="text-orange text-4xl font-semibold text-center -mt-10 md:text-2xl sm:text-4xl">
          D A Y S
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex flex-col justify-center text-center">
          {countdown.hours}
        </div>
        <div className="text-orange text-4xl font-semibold text-center -mt-10 md:text-2xl sm:text-4xl">
          H O U R S
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex flex-col justify-center text-center">
          {countdown.days}
        </div>
        <div className="text-orange text-4xl font-semibold text-center -mt-10 md:text-2xl sm:text-4xl">
          M I N S
        </div>
      </div>
      </div>
    </div>
  );
};

export default Countdown;
