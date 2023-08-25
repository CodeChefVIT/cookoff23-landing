// "use client";
// import useMousePosition from "../utils/useMousePosition";
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
import { useState } from "react";
import AboutMask from "@/components/AboutMask";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const [isHovered, setIsHovered] = useState(false);
  // const { x, y } = useMousePosition();
  // const size = isHovered ? 400 : 240;

  return (
    <>
      <Head>
        <title>Cook-off 8.0</title>
        <link rel="icon" href="/Favicon.png" />
      </Head>
    <main 
    // className={styles.main}
    >
      <motion.div
        // animate={{
        //   WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
        //   WebkitMaskSize: `${size}px`,
        // }}
        // transition={{ type: "tween", ease: "backOut", duration:0.5}}
        // className={styles.mask}
      >
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
      </motion.div>
      {/* <div className={styles.body}>
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
      </div> */}
    </main>
    </>
  );
}
