import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import event1 from "../assets/event1.svg";
import event2 from "../assets/event2.svg";
import hoverEvent1 from "../assets/hoverEvent1.svg";

const OtherEvents = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const handleHover1 = () => {
    setIsHovered1(!isHovered1);
  };
  const handleHover2 = () => {
    setIsHovered2(!isHovered2);
  };
  return (
    <div className="h-[50vh] w-[100vw] relative">
      <div className="uppercase text-[16px] md:text-[10px] text-[#B7AB98] mx-[13%] md:mx-[10%] mt-20 mb-10 tracking-[7px]">
        other events
      </div>
      <div className="flex w-full h-full justify-evenly items-center">
        <motion.button
          onMouseEnter={handleHover1}
          onMouseLeave={handleHover1}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1 }}
          className={`rounded-full w-[280px] h-[280px] lg:w-[200px] lg:h-[200px] md:w-[150px] md:h-[150px] flex justify-center items-center ${
            isHovered1 ? "bg-[#eb5939]" : "bg-[#222222]"
          }`}
        >
          {isHovered1 ? (
            <svg
              width="292"
              height="32"
              viewBox="0 0 292 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.1368 31H8.7799V6.90589H0.111352V1.34913H23.7609V6.90589H15.1368V31ZM46.3815 31H25.3991V1.34913H46.3815V6.77253H31.7116V13.2184H46.0703V18.6418H31.7116V25.5321H46.3815V31ZM63.0441 31.5334C54.3756 31.5334 47.4852 25.3099 47.4852 16.1968C47.4852 7.08371 54.3756 0.860138 63.0441 0.860138C69.8011 0.860138 73.5797 4.41646 75.6691 8.10615L70.2457 10.7734C69.0009 8.37288 66.3337 6.46135 63.0441 6.46135C57.8874 6.46135 53.9755 10.5956 53.9755 16.1968C53.9755 21.798 57.8874 25.9322 63.0441 25.9322C66.3337 25.9322 69.0009 24.0652 70.2457 21.6202L75.6691 24.243C73.5353 27.9327 69.8011 31.5334 63.0441 31.5334ZM103.69 31H97.3335V18.5529H83.3305V31H77.018V1.34913H83.3305V12.9961H97.3335V1.34913H103.69V31ZM120.328 31H113.971V6.90589H105.303V1.34913H128.952V6.90589H120.328V31ZM155.376 31H148.485L146.618 25.8878H133.371L131.504 31H124.569L136.038 1.34913H143.951L155.376 31ZM144.884 20.4199L139.994 6.81698L135.06 20.4199H144.884ZM174.554 31H155.705V1.34913H162.018V25.4432H174.554V31ZM201.949 31H194.169L185.19 19.1308L182.878 21.8869V31H176.566V1.34913H182.878V14.5964L193.369 1.34913H201.149L189.368 15.2633L201.949 31ZM200.374 26.8213L203.841 22.0203C205.93 24.1985 209.175 26.0211 213.265 26.0211C216.733 26.0211 218.422 24.3763 218.422 22.6871C218.422 20.4644 215.844 19.7087 212.421 18.9085C207.575 17.7971 201.352 16.4635 201.352 9.83986C201.352 4.90546 205.619 0.904592 212.598 0.904592C217.311 0.904592 221.223 2.32712 224.156 5.03882L220.645 9.66205C218.244 7.43934 215.043 6.4169 212.154 6.4169C209.309 6.4169 207.797 7.66161 207.797 9.43977C207.797 11.4402 210.287 12.0626 213.71 12.8627C218.6 13.9741 224.823 15.4411 224.823 22.0203C224.823 27.4437 220.956 31.5334 212.954 31.5334C207.264 31.5334 203.174 29.6219 200.374 26.8213ZM237.186 22.2425C237.053 22.2425 236.92 22.2425 236.786 22.287V26.6435C236.875 26.688 237.053 26.688 237.186 26.688C238.342 26.688 238.565 25.8433 238.565 24.4653C238.565 23.0427 238.342 22.2425 237.186 22.2425ZM243.943 23.8429V24.9098H242.165V26.599H244.255V27.6659H240.876V21.2201H244.255V22.3315H242.165V23.8429H243.943ZM237.098 27.7549C236.742 27.7549 236.075 27.7549 235.497 27.6659V21.309C236.075 21.2201 236.697 21.1312 237.142 21.1312C239.142 21.1312 239.854 22.2425 239.854 24.4653C239.854 26.7324 239.098 27.7549 237.098 27.7549ZM245.41 21.2201H247.144L247.989 24.7764L248.833 21.2201H250.612C250.7 22.776 250.789 25.5766 250.878 27.6659H249.589C249.589 26.1545 249.545 24.5542 249.456 23.0427L248.567 26.688H247.366L246.477 23.0427H246.433C246.388 24.5542 246.344 26.1545 246.344 27.6659H245.099C245.144 25.5766 245.277 22.776 245.41 21.2201ZM254.123 27.7549C252.345 27.7549 251.767 26.7324 251.767 24.4653C251.767 22.1981 252.345 21.1312 254.123 21.1312C255.902 21.1312 256.524 22.1981 256.524 24.4653C256.524 26.7324 255.902 27.7549 254.123 27.7549ZM254.123 22.2425C253.234 22.2425 253.057 22.9983 253.057 24.4653C253.057 25.8878 253.234 26.688 254.123 26.688C255.057 26.688 255.235 25.8878 255.235 24.4653C255.235 22.9983 255.057 22.2425 254.123 22.2425ZM253.679 8.95078C255.99 8.95078 256.435 10.8179 256.435 11.7514C256.435 13.1295 255.057 13.9296 254.123 14.063C250.923 14.4186 248.611 15.4411 246.744 17.2637C246.744 17.2637 249.989 8.95078 253.679 8.95078ZM238.876 11.2624C243.054 11.2624 245.811 19.5753 245.811 19.5753C243.988 17.2637 241.676 16.3746 238.876 16.3746C237.498 16.3746 236.12 15.4411 236.12 14.063C236.12 12.6405 237.053 11.2624 238.876 11.2624ZM246.655 4.63873C249.634 7.52825 245.811 15.4411 245.811 15.4411C246.122 12.5071 245.099 10.1955 243.099 8.28397C242.121 7.30598 241.765 5.70563 242.699 4.68319C243.677 3.7052 245.322 3.34957 246.655 4.63873ZM258.946 27.8882C258.946 25.9322 260.59 24.2874 262.546 24.2874C264.502 24.2874 266.147 25.9322 266.147 27.8882C266.147 29.8442 264.502 31.489 262.546 31.489C260.59 31.489 258.946 29.8442 258.946 27.8882ZM267.333 16.1968C267.333 8.55069 271.112 0.904592 279.603 0.904592C288.049 0.904592 291.872 8.55069 291.872 16.1968C291.872 23.8429 288.049 31.5334 279.603 31.5334C271.112 31.5334 267.333 23.8429 267.333 16.1968ZM285.426 16.1968C285.426 10.7289 283.826 6.50581 279.603 6.50581C275.335 6.50581 273.735 10.7289 273.735 16.1968C273.735 21.6646 275.335 25.9322 279.603 25.9322C283.826 25.9322 285.426 21.6646 285.426 16.1968Z"
                fill="#0D0D0D"
              />
            </svg>
          ) : (
            <svg
              className="lg:w-[90px] md:w-[70px]"
              width="133"
              height="157"
              viewBox="0 0 133 157"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Group">
                <path
                  id="Vector"
                  d="M28.499 44C28.499 33.9218 32.5026 24.2563 39.629 17.1299C46.7553 10.0036 56.4208 6 66.499 6C76.5772 6 86.2427 10.0036 93.3691 17.1299C100.495 24.2563 104.499 33.9218 104.499 44V66.8C104.499 76.8782 100.495 86.5437 93.3691 93.6701C86.2427 100.796 76.5772 104.8 66.499 104.8C56.4208 104.8 46.7553 100.796 39.629 93.6701C32.5026 86.5437 28.499 76.8782 28.499 66.8V44Z"
                  stroke="#B7B198"
                  stroke-width="11.4"
                />
                <path
                  id="Vector_2"
                  d="M74.1 43.9998H104.5M74.1 66.7998H104.5M66.5 127.6V150.4"
                  stroke="#B7B198"
                  stroke-width="11.4"
                  stroke-linecap="round"
                />
                <path
                  id="Vector_3"
                  d="M133 59.2C133 57.6883 132.399 56.2385 131.331 55.1695C130.262 54.1005 128.812 53.5 127.3 53.5C125.788 53.5 124.338 54.1005 123.269 55.1695C122.201 56.2385 121.6 57.6883 121.6 59.2H133ZM11.4 59.2C11.4 57.6883 10.7995 56.2385 9.73051 55.1695C8.66155 54.1005 7.21173 53.5 5.7 53.5C4.18827 53.5 2.73845 54.1005 1.66949 55.1695C0.600533 56.2385 0 57.6883 0 59.2H11.4ZM93.1912 115.014C91.8689 115.748 90.8923 116.977 90.4761 118.431C90.0599 119.885 90.2383 121.444 90.972 122.766C91.7057 124.089 92.9346 125.065 94.3884 125.481C95.8422 125.898 97.4017 125.719 98.724 124.986L93.1912 115.014ZM121.6 59.2V66.8H133V59.2H121.6ZM11.4 66.8V59.2H0V66.8H11.4ZM66.5 121.9C51.8866 121.9 37.8717 116.095 27.5384 105.762C17.2052 95.4283 11.4 81.4134 11.4 66.8H0C0 84.4369 7.00623 101.351 19.4774 113.823C31.9486 126.294 48.8631 133.3 66.5 133.3V121.9ZM121.6 66.8C121.604 76.6416 118.97 86.3043 113.974 94.7835C108.978 103.263 101.802 110.248 93.1912 115.014L98.724 124.986C109.113 119.232 117.772 110.801 123.8 100.569C129.827 90.3362 133.004 78.6759 133 66.8H121.6Z"
                  fill="#B7B198"
                />
              </g>
            </svg>
          )}
        </motion.button>
        <motion.button
          onMouseEnter={handleHover2}
          onMouseLeave={handleHover2}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1 }}
          className={`rounded-full w-[280px] h-[280px] lg:w-[200px] lg:h-[200px] md:w-[150px] md:h-[150px] flex justify-center items-center ${
            isHovered2 ? "bg-[#eb5939]" : "bg-[#222222]"
          }`}
        >
          <Image
            className="lg:w-[90px] md:w-[70px]"
            src={event2}
            quality={100}
          />
        </motion.button>
      </div>
    </div>
  );
};

export default OtherEvents;
