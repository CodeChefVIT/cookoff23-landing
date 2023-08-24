import React from "react";
import Image from "next/image";
import insta from '../../assets/insta.svg'
import linkedin from "../../assets/linkedin.svg";
import githubmark from "../../assets/githubmark.svg";
import twitter from "../../assets/twitter.svg";

const SocialHandles = () => {
  return (
    <div className="flex flex-col items-center gap-7">
      <Image src={githubmark} />
      <Image src={insta} />
      <Image src={twitter} />
      <Image src={linkedin} />
    </div>
  );
};

export default SocialHandles;
