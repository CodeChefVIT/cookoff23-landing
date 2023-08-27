import React, { useState } from "react";
import { motion } from "framer-motion";
import Awards from "./PrizesComps/Awards";

const Prizes = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (hoverState) => {
    setIsHovered(hoverState);
  };
  return (
    <div
      id="proxima"
      className="min-h-[100vh] w-[100vw] text-grey flex flex-col items-start justify-between gap-[3.1rem] py-16"
    >
      <p className=" tracking-[7px] md:text-[10px] mx-[13%] md:mx-[10%] mt-10 mb-10">
        PRIZES
      </p>
      <div>
        <Awards
          title="FIRST"
          content="You’ll get like 1.5 Lakhs in cash, damm that's a lot of money. What
            are you going to do with all? I’m gonna buy myself some doge."
        />
        <Awards
          title="SECOND"
          content="You’ll get like 1.5 Lakhs in cash, damm that’s a lot of money. What
            are you going to do with all? I’m gonna buy myself some doge."
        />
        <Awards
          title="THIRD"
          content="You’ll get like 1.5 Lakhs in cash, damm that’s a lot of money. What
            are you going to do with all? I’m gonna buy myself some doge."
        />
        <Awards
          title="FRESHERS"
          content="You’ll get like 1.5 Lakhs in cash, damm that’s a lot of money. What
            are you going to do with all? I’m gonna buy myself some doge."
        />
        <Awards
          title="WOMEN"
          content="You’ll get like 1.5 Lakhs in cash, damm that’s a lot of money. What
            are you going to do with all? I’m gonna buy myself some doge."
        />
      </div>
    </div>
  );
};

export default Prizes;
