import React from "react";
import { useAppContext } from "@/context/appContext";
import { motion } from "framer-motion";
import useMousePosition from "@/utils/useMousePosition";

const AboutMask = () => {
  const { setIsHovered, setIsHoveredOnSmall } = useAppContext();
  return (
    <div className="flex px-[13%] md:px-[10%] flex-col justify-center items-stretch gap-[8rem] py-16 h-[100vh] text-black bg-orange relative cursor-default">
      <p
        onMouseEnter={() => {
          setIsHoveredOnSmall(true);
        }}
        onMouseLeave={() => {
          setIsHoveredOnSmall(false);
        }}
        className="text-lg font-normal tracking-[7px]"
      >
        ABOUT EVENT
      </p>
      <p
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        id="proxima"
        className="text-justify text-4xl tracking-wide font-bold leading-relaxed sm:tracking-wide sm:font-semibold"
      >
        Cook off is <span className="text-black">CodeChef VIT</span>&apos;s
        flagship competitive coding event that tests the coding skills of tech
        enthusiasts across the country. The event provides a platform for
        participants to develop their competitive coding skills and test their
        abilities. Cook Off 7.0 will be the seventh edition through which we
        hope to broaden the horizons of the participants
      </p>
    </div>

    // </motion.div>
  );
};

export default AboutMask;
