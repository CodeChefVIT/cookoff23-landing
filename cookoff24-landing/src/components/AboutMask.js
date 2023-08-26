import React from "react";
import { useAppContext } from "@/context/appContext";
import { motion } from "framer-motion";
import useMousePosition from "@/utils/useMousePosition";

const AboutMask = () => {
  const { setIsHovered, setIsHoveredOnSmall } = useAppContext();
  return (

    <div className="flex flex-col justify-center items-left gap-[8rem] py-16 px-36 h-[100vh] text-grey bg-orange relative  cursor-default">
      <p
        onMouseEnter={() => {
          setIsHoveredOnSmall(true);
        }}
        onMouseLeave={() => {
          setIsHoveredOnSmall(false);
        }}
        className="text-lg font-normal tracking-[0.15rem]"
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
        className="text-left text-4xl tracking-wide font-bold leading-relaxed"
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
