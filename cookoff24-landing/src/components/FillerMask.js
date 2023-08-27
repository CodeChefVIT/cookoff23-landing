import { useAppContext } from "@/context/appContext";

const FillerMask = ({height}) => {
    const {setIsHoveredOnSmall} = useAppContext();
  return (
    <div className={`h-[${height}vh] bg-orange pl-36`}>
    </div>
  );
};

export default FillerMask;
