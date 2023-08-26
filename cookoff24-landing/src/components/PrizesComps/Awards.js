import React from "react";

const Awards = (props) => {
  return (
    <div>
      <div className="parent container relative">
        <div className="text border border-x-0 border-grey w-[100vw] flex justify-between items-center">
          <p className="px-36 text-9xl font-bold tracking-wide cursor-pointer">
            {props.title}
          </p>
          <p className="px-36 w-[45vw] text-lg tracking-wide text-black">
            {props.content}
          </p>
        </div>
        <div className=" overlay transition-all absolute top-0 bg-orange w-[100vw] flex justify-between items-center">
          <p className="px-36 text-9xl font-bold tracking-wide cursor-pointer text-orange">
            {props.title}
          </p>
          <p className="px-36 w-[45vw] text-lg tracking-wide text-orange">
            {props.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Awards;
