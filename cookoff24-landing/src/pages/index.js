import React, { useEffect } from "react";
import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import SVGAnimation from "@/components/SVGAnimation";

const inter = Inter({ subsets: ["latin"] });
import Link from "next/link";

const index = () => {
  /* states and stuff for the cursor stuff */
  /* I want to make a state to store the current position of cursor */
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const mouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);

    return ()=>{window.removeEventListener("mousemove", mouseMove)};
  }, []);
  const cursorVariants = {
    default: {
      x: cursorPos.x - 20,
      y: cursorPos.y - 20
    },
  };

  return (
    <>
      <Head>
        <title>Cook-off 8.0</title>
        <link rel="icon" href="/Favicon.png" />
      </Head>
      {/* body container */}
      <div className="h-[100vh] w-[100vw] text-grey flex justify-center justify-items-center">
        {/* main flex */}
        <div className="flex flex-col justify-center justify-items-center gap-36">
          {/* icon */}
          <div className=" flex justify-center relative before:absolute before:bg-dark-grey before:h-56 before:w-56 before:-z-10 before:-bottom-16 before:rounded-full">
            <SVGAnimation cursorPos = {cursorPos}/>
          </div>
          {/* button */}
          <div className="flex justify-center">
            <Link href={"/landing"}>
              <button
                className={`text-grey text-xl rounded-full border-2 border-grey w-56 py-3 ${inter.className}`}
              >
                START
              </button>
            </Link>
          </div>
        </div>
        {/* cursor div */}
        <motion.div
          className="bg-orange w-10 h-10 fixed rounded-full left-0 top-0"
          variants={cursorVariants}
          animate="default"
        />
      </div>
    </>
  );
};

export default index;
