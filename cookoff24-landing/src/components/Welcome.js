import React from "react";

const Welcome = () => {
  return (
    <div className="h-[100vh] w-[100vw] relative  cursor-default">
      <div className="absolute body flex flex-col justify-center items-left gap-[8rem] py-16 px-36 h-[100vh]   text-grey">
        <p className="text-lg font-normal tracking-[0.15rem] ">ABOUT EVENT</p>
        <p className="text-left text-4xl tracking-wide font-bold leading-relaxed  sm:text-2xl sm:tracking-wide sm:font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, totam amet. Unde magnam dicta temporibus accusamus, perferendis quis, quae voluptatum consequatur repellat nihil cumque eaque magni ipsa ea? Assumenda quibusdam voluptatem corrupti non incidunt sapiente doloribus? Et ipsum optio veritatis velit magnam dignissimos laborum, repudiandae rem dolor perspiciatis voluptatum quos, repellat, corrupti quo ea sequi. Voluptatem.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
