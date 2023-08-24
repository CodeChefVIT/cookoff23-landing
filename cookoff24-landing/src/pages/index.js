import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Link from "next/link";

const index = () => {
  return (
    <div className="h-[100vh] w-[100vw] text-grey">
      <Link href="/landing">
        Click Here
      </Link>
    </div>
  );
};

export default index;
