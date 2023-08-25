import React from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import SVGAnimation from "@/components/SVGAnimation";

const inter = Inter({ subsets: ["latin"] });
import Link from "next/link";

const index = () => {
  return (
    <>
      <Head>
        <title>Cook-off 8.0</title>
        <link rel="icon" href="/Favicon.png" />
      </Head>
      <div className="h-[100vh] w-[100vw] text-grey flex justify-center justify-items-center">
        <div className="flex flex-col justify-center justify-items-center gap-36">
          <div
           className=" flex justify-center relative before:absolute before:bg-dark-grey before:h-56 before:w-56 before:-z-10 before:-bottom-16 before:rounded-full"
           >
            <SVGAnimation /></div>
          <div className="flex justify-center">
            <Link href={"/landing"}>
            <button
              className={`text-grey text-xl rounded-full border-2 border-grey w-56 py-3 ${inter.className}
        `}
            >
              START
            </button>
              </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
