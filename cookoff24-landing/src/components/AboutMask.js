import React from "react";
import { useAppContext } from "@/context/appContext";
import { motion } from "framer-motion";
import useMousePosition from "@/utils/useMousePosition";

const AboutMask = () => {
  const { setIsHovered, setIsHoveredOnSmall } = useAppContext();
  return (
    <div className="h-[100vh] w-[100vw] relative  cursor-default  text-black bg-orange pt-32">
      <div
        onMouseEnter={() => {
          setIsHoveredOnSmall(true);
        }}
        onMouseLeave={() => {
          setIsHoveredOnSmall(false);
        }}
        className="uppercase text-[16px] md:text-[10px] mx-[13%] md:mx-[10%] mb-10 tracking-[7px] text-black"
      >
        ABOUT EVENT
      </div>
      <div
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        className="body mx-[13%] md:mx-[10%] flex flex-col justify-center items-stretch gap-[8rem] py-4 h-[100vh] text-dark-grey"
      >
        <p
          id="proxima"
          className="text-justify text-4xl tracking-wide font-bold leading-relaxed lg:text-2xl lg:tracking-wide lg:font-semibold sm:text-2xl sm:tracking-wide sm:font-semibold"
        >
          No, cookoff isn&apos;t your annual culinary challenge, in fact, it is one of codechef vit&apos;s largest competitive coding event. Join us for the ultimate showdown of brains and bytes where a combination of a battle of wits, an algorithmic apocalypse, and a laugh riot, all rolled into one welcomes you and keeps you on the edge of your seat. So whether you&apos;re a code sensei or a debugging diva, this competition is for you!
        </p>
      </div>
    </div>

    // </motion.div>
  );
};

export default AboutMask;
