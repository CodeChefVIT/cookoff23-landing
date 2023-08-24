import React from "react";

const About = () => {
  return (
    <div className="flex flex-col justify-between items-center py-16 px-36 h-[100vh] w-[100vw] text-grey">
      <p className="text-5xl font-semibold tracking-wider">ABOUT</p>
      <p className="text-justify text-4xl tracking-wide font-bold leading-relaxed">
        Cook off is <span className="text-orange">CodeChef VIT</span>’s flagship
        competitive coding event that tests the coding skills of tech
        enthusiasts across the country. The event provides a platform for
        participants to develop their competitive coding skills and test their
        abilities. Cook Off 7.0 will be the seventh edition through which we
        hope to broaden the horizons of the participants.
      </p>
      <div
        className="bg-dark-grey h-24 w-72 flex items-center justify-center rounded-2xl"
      >
        <p className="text-2xl font-bold tracking-wider">
          <span className="text-orange">VENUE</span>: ANNA AUDI
        </p>
      </div>
    </div>
  );
};

export default About;
