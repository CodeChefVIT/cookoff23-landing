"use client";
import React from "react";
import { useAppContext } from "@/context/appContext";
import { motion } from "framer-motion";
import useMousePosition from "@/utils/useMousePosition";

const About = () => {
  /*these states help manage the size of cursor*/
  // const [isHovered, setIsHovered] = useState(false);
  // const [isHoveredOnSmall, setIsHoveredOnSmall] = useState(false);

  // const [innerHeight, setInnerHeight] = useState(0);
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const size = isHovered ? 400 : isHoveredOnSmall ? 100 : 40;

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollPosition(window.scrollY || window.pageYOffset);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   setInnerHeight(window.innerHeight);
  // }
  // , []);
  const { x, y } = useMousePosition();
  const {
    isHovered,
    setIsHovered,
    isHoveredOnSmall,
    setIsHoveredOnSmall,
    innerHeight,
    setInnerHeight,
    scrollPosition,
    setScrollPosition,
    size,
  } = useAppContext();

  //basically for cursor we need to keep track of it's size, it's mouse position and the scroll position
  return (
    <div className="h-[100vh] w-[100vw] relative  cursor-default ">
      <div className="body flex flex-col justify-center items-stretch gap-[8rem] py-16 px-36 h-[100vh] md:px-5   text-grey">

        <p className="text-left text-4xl tracking-wide font-bold leading-relaxed  sm:text-2xl sm:tracking-wide sm:font-semibold">
          Cook off is <span className="text-orange">CodeChef VIT</span>&apos;s
          flagship competitive coding event that tests the coding skills of tech
          enthusiasts across the country. The event provides a platform for
          participants to develop their competitive coding skills and test their
          abilities. Cook Off 7.0 will be the seventh edition through which we
          hope to broaden the horizons of the participants.
        </p>
      </div>
      {/* <motion.div
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${
            y + scrollPosition - size / 2 - innerHeight
          }px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
        className="absolute mask-content one flex flex-col justify-center items-left gap-[8rem] py-16 px-36 h-[100vh]  text-black bg-orange"
      >
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
          Cook off is <span className="text-black">CodeChef VIT</span>’s
          flagship competitive coding event that tests the coding skills of tech
          enthusiasts across the country. The event provides a platform for
          participants to develop their competitive coding skills and test their
          abilities. Cook Off 7.0 will be the seventh edition through which we
          hope to broaden the horizons of the participants
        </p>
      </motion.div> */}
    </div>
  );
};

export default About;
