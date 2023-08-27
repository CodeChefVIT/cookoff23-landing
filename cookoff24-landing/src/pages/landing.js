"use client";
import useMousePosition from "../utils/useMousePosition";
import Image from "next/image";
import { Inter } from "next/font/google";
import FixedNav from "@/components/FixedNav";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Banner from "@/components/Banner";
import Prizes from "@/components/Prizes";
import Faqs from "@/components/Faqs";
import RegisterNow from "@/components/RegisterNow";
import OtherEvents from "@/components/OtherEvents";
import Socials from "@/components/Socials";
import Welcome from "@/components/Welcome";
import { useAppContext } from "@/context/appContext";
// import styles from "../styles/page.module.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import AboutMask from "@/components/AboutMask";
import WelcomeMask from "@/components/WelcomeMask";
import TimelineMask from "@/components/TimelineMask";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { setInnerHeight, scrollPosition, setScrollPosition, size } =
    useAppContext();
  console.log(size);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY || window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    setInnerHeight(window.innerHeight);
  }, []);
  const { x, y } = useMousePosition();

  return (
    <main className="h-[850vh] w-[100vw] relative cursor-default overflow-x-hidden">
      <div className="absolute">
        <FixedNav />
        <Welcome />
        <About />
        <Timeline />
        <Banner />
        <RegisterNow />
        <Prizes />
        <OtherEvents />
        <Faqs />
        <Socials />
      </div>
      <motion.div
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${
            y - size / 2 + scrollPosition
          }px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
        className="one mask-content -z-30"
      >
        <WelcomeMask />
        <AboutMask />
        <TimelineMask/>
      </motion.div>
    </main>
  );
}
