import React from "react";
import Image from "next/image";
import insta from "../../assets/insta.svg";
import linkedin from "../../assets/linkedin.svg";
import githubmark from "../../assets/githubmark.svg";
import twitter from "../../assets/twitter.svg";
import Link from "next/link";

const SocialHandles = () => {
  return (
    <div className="flex flex-col items-center gap-7">
      <Link
        href="https://github.com/CodeChefVIT"
        target="__blank"
        rel="noopener noreferrer"
      >
        <Image src={githubmark} alt="img" className="h-10 w-10" />
      </Link>
      <Link
        href="https://www.instagram.com/codechefvit/"
        target="__blank"
        rel="noopener noreferrer"
      >
        <Image src={insta} alt="img" className="h-10 w-10" />
      </Link>
      <Link
        href="https://twitter.com/codechefvit"
        target="__blank"
        rel="noopener noreferrer"
      >
        <Image src={twitter} alt="img" className="h-10 w-10" />
      </Link>
      <Link
        href="https://www.linkedin.com/company/codechef-vit-chapter/mycompany/"
        target="__blank"
        rel="noopener noreferrer"
      >
        <Image src={linkedin} alt="img" className="h-10 w-10" />
      </Link>
    </div>
  );
};

export default SocialHandles;
