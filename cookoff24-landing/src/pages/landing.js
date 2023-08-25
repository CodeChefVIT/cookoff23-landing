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
// import styles from "../styles/page.module.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredOnSmall, setIsHoveredOnSmall] = useState(false);

  const { x, y } = useMousePosition();
  const [scrollPosition, setScrollPosition] = useState(0);
  const size = isHovered ? 400 : isHoveredOnSmall ? 100 : 40;

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
    <main className="h-[850vh] w-[100vw] relative  cursor-default">
      <div className="absolute">
        <FixedNav />
        <Welcome />
        <About />
        <Timeline />
        <Banner />
        <Prizes />
        <Faqs />
        <Prizes />
        <RegisterNow />
        <OtherEvents />
        <Socials />
      </div>
      <motion.div>
        {/* <FixedNav /> */}
        <Welcome />
        <About />
        <Timeline />
        <Banner />
        <Prizes />
        <Faqs />
        <Prizes />
        <RegisterNow />
        <OtherEvents />
        <Socials />
      </motion.div>
    </main>
  );
}
