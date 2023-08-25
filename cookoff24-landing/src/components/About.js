"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useMousePosition from "@/utils/useMousePosition";
import React from "react";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const [scrollPosition, setScrollPosition] = useState(0);
  const size = isHovered ? 400 : 40;

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY || window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="h-[100vh] w-[100vw] relative overflow-hidden cursor-default">
      <div className="absolute body flex flex-col justify-between items-center gap-7 py-16 px-36 h-[100vh]   text-grey">
        <p className="text-5xl font-semibold tracking-wider">ABOUT</p>
        <p className="text-justify text-4xl tracking-wide font-bold leading-relaxed">
          Cook off is <span className="text-orange">CodeChef VIT</span>’s
          flagship competitive coding event that tests the coding skills of tech
          enthusiasts across the country. The event provides a platform for
          participants to develop their competitive coding skills and test their
          abilities. Cook Off 7.0 will be the seventh edition through which we
          hope to broaden the horizons of the participants.
        </p>
        <div className="bg-dark-grey h-24 w-72 flex items-center justify-center rounded-2xl">
          <p
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
            className="text-2xl font-bold tracking-wider"
          >
            <span className="text-orange">VENUE</span>: ANNA AUDI
          </p>
        </div>
      </div>
      <motion.div
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${
            y + scrollPosition - size / 2 - window.innerHeight
          }px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
        className="absolute mask-content one flex flex-col justify-between items-center gap-7 py-16 px-36 h-[100vh]  text-black bg-orange"
      >
        <p
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className="text-5xl font-semibold tracking-wider"
        >
          ABOUT
        </p>
        <p
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className="text-justify text-4xl tracking-wide font-bold leading-relaxed"
        >
          Cook off is <span className="text-black">CodeChef VIT</span>’s
          flagship competitive coding event that tests the coding skills of tech
          enthusiasts across the country. The event provides a platform for
          participants to develop their competitive coding skills and test their
          abilities. Cook Off 7.0 will be the seventh edition through which we
          hope to broaden the horizons of the participants
        </p>
        <div
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className="bg-dark-grey h-24 w-72 flex items-center justify-center justify-self-end rounded-2xl"
        >
          <p className="text-2xl font-bold tracking-wider text-orange">
            <span className="text-grey">VENUE</span>: ANNA AUDI
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
