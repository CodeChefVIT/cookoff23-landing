import React, { useState, useRef } from "react";
import Image from "next/image";
import Options from "./NavbarComps/Options";
import cclogo from "../assets/cclogo.svg";
import SocialHandles from "./NavbarComps/SocialHandles";
import { motion } from "framer-motion";

const FixedNav = () => {
  return (
    <div className="fixed h-screen w-screen text-orange">
      <div className="flex justify-between p-12 ">
        <div className="h-16 w-auto cursor-pointer logo">
          <Image className="h-16 w-auto" src={cclogo} alt="CC Logo" />
        </div>
        <Options />
      </div>
      <div className="absolute left-[3.7rem] bottom-40">
        <SocialHandles />
      </div>
    </div>
  );
};

export default FixedNav;
