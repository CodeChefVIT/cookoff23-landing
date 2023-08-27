"use client";
import React from "react";
import { useAppContext } from "@/context/appContext";
import { motion } from "framer-motion";
import useMousePosition from "@/utils/useMousePosition";

const About = () => {
  return (
    <div className="h-[100vh] w-[100vw] relative  cursor-default ">
      <div className="body mx-[13%] md:mx-[10%] flex flex-col justify-center items-stretch gap-[8rem] py-16 h-[100vh] text-grey">
        <p
          id="proxima"
          className="text-justify text-4xl tracking-wide font-bold leading-relaxed sm:text-2xl sm:tracking-wide sm:font-semibold"
        >
          Cook off is <span className="text-orange">CodeChef VIT</span>&apos;s
          flagship competitive coding event that tests the coding skills of tech
          enthusiasts across the country. The event provides a platform for
          participants to develop their competitive coding skills and test their
          abilities. Cook Off 7.0 will be the seventh edition through which we
          hope to broaden the horizons of the participants.
        </p>
      </div>
    </div>
  );
};

export default About;
