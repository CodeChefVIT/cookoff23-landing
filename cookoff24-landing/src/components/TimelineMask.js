import { useAppContext } from "@/context/appContext";

const TimelineMask = () => {
    const {setIsHoveredOnSmall} = useAppContext();
  return (
    <div className="h-[100vh] bg-orange pl-36">
        <div className="h-[60vh]"></div>
      <p
        onMouseEnter={() => {
          setIsHoveredOnSmall(true);
        }}
        onMouseLeave={() => {
          setIsHoveredOnSmall(false);
        }}
        className="text-8xl font-bold"
      >
        AND AS THE SANDS OF TIME FALL, WE DRAW NEARER TO THE EMBRACE OF OBLIVION
      </p>
    </div>
  );
};

export default TimelineMask;
