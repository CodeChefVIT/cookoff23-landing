import React from "react";
import Head from "next/head"
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import Link from "next/link";

const index = () => {
  return (
    <>
    <Head>
        <title>Cook-off 8.0</title>
        <link rel="icon" href="/Favicon.png" />
      </Head>
    <div className="h-[100vh] w-[100vw] text-grey">
      <Link href="/landing">
        Click Here
      </Link>
    </div>
    </>
  );
};

export default index;
