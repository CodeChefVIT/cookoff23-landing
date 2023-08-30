"use client";
import React from "react";
import { useAppContext } from "@/context/appContext";
import { motion } from "framer-motion";
import useMousePosition from "@/utils/useMousePosition";

const About = () => {
  return (
    <div className="min-h-[100vh] w-[100vw] relative cursor-default xs:my-10" id="about">
      <div
        id="proxima"
        className="uppercase text-[16px] md:text-[12px] mx-[13%] md:mx-[10%] text-[#B7AB98] mt-32 mb-10 tracking-[7px]"
      >
        About Event
      </div>
      <div className="body mx-[13%] md:mx-[10%] flex flex-col justify-center items-stretch gap-[8rem] py-16 h-[100vh] text-grey">
        <p
          id="proxima"
          className="text-justify text-4xl tracking-wide font-bold leading-relaxed lg:text-2xl lg:tracking-wide lg:font-semibold sm:text-2xl sm:tracking-wide sm:font-semibold"
        >
          cookoff is <span className="text-orange">CodeChef VIT</span>&apos;s annual competitive coding event which has been held consecutively for the past eight years. It is india’s largest competitive coding event where participants from all over the country come together to test their knowledge and skills to eventually emerge as an ultimate winner of this  8 hour long event. Participants would be required to solve problems of various complexities with the increase in the difficulty level with each round leading to an ultimate winner.
        </p>
      </div>
    </div>
  );
};

export default About;
