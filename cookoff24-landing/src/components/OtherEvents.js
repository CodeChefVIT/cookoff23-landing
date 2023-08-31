import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

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
    <div className="h-[60vh] w-[100vw] relative z-10">
      <div
        id="proxima"
        className="uppercase text-[16px] md:text-[10px] text-[#B7AB98] mx-[13%] md:mx-[10%] mt-20 mb-10 tracking-[7px]"
      >
        other events
      </div>
      <div className="flex sm:flex-col w-full h-full justify-evenly items-center">
        <Link href="https://techtalks.codechefvit.com" target="__blank" rel="noopener noreferrer" >
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
              width="338"
              height="338"
              viewBox="0 0 338 338"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_4_4)">
                <path
                  d="M169 337.5C262.06 337.5 337.5 262.06 337.5 169C337.5 75.94 262.06 0.5 169 0.5C75.94 0.5 0.5 75.94 0.5 169C0.5 262.06 75.94 337.5 169 337.5Z"
                  fill="#EB5939"
                  stroke="black"
                />
                <path
                  d="M23.0155 159.03V185H16.5637V159.03H6.53356V154.042H33.0456V159.03H23.0155ZM34.7036 185V154.042H59.047V159.03H41.1554V166.837H57.6916V171.825H41.1554V180.012H59.9145V185H34.7036ZM77.296 180.337C81.1996 180.337 83.9286 178.367 85.4828 174.428L91.1213 176.596C89.8924 179.596 88.1032 181.819 85.7539 183.265C83.4045 184.711 80.5852 185.434 77.296 185.434C72.3081 185.434 68.4587 184.024 65.7478 181.205C63.037 178.386 61.6816 174.446 61.6816 169.386C61.6816 164.289 62.9828 160.386 65.5852 157.675C68.2237 154.928 72.037 153.554 77.0249 153.554C80.6755 153.554 83.6394 154.295 85.9165 155.777C88.1936 157.223 89.784 159.355 90.6876 162.175L84.9948 163.747C84.5249 162.193 83.5671 160.964 82.1213 160.06C80.7117 159.12 79.049 158.651 77.1334 158.651C74.2057 158.651 71.9828 159.572 70.4647 161.416C68.9466 163.223 68.1876 165.88 68.1876 169.386C68.1876 172.928 68.9647 175.639 70.5189 177.518C72.1093 179.398 74.3683 180.337 77.296 180.337ZM113.502 185V171.717H100.002V185H93.5499V154.042H100.002V166.349H113.502V154.042H119.954V185H113.502ZM138.159 159.03V185H131.707V159.03H121.677V154.042H148.189V159.03H138.159ZM171.697 185L168.986 177.084H157.167L154.402 185H147.95L159.227 154.042H166.871L178.149 185H171.697ZM163.022 158.813L162.914 159.301C162.769 159.843 162.588 160.458 162.371 161.145C162.191 161.795 160.944 165.482 158.631 172.205H167.522L164.432 163.313L163.51 160.331L163.022 158.813ZM180.523 185V154.042H186.975V180.012H203.565V185H180.523ZM227.56 185L216.446 170.795L212.597 173.723V185H206.145V154.042H212.597V168.084L226.53 154.042H234.121L220.892 167.163L235.205 185H227.56ZM262.031 176.054C262.031 179.09 260.911 181.422 258.67 183.048C256.429 184.639 253.122 185.434 248.748 185.434C244.772 185.434 241.664 184.729 239.423 183.319C237.182 181.91 235.736 179.777 235.085 176.922L241.32 175.892C241.754 177.518 242.585 178.711 243.814 179.47C245.043 180.229 246.76 180.608 248.965 180.608C253.483 180.608 255.742 179.217 255.742 176.434C255.742 175.566 255.471 174.843 254.929 174.265C254.423 173.687 253.7 173.217 252.76 172.855C251.82 172.458 250.013 171.988 247.339 171.446C245.025 170.904 243.399 170.47 242.459 170.145C241.555 169.819 240.742 169.44 240.019 169.006C239.296 168.536 238.664 167.994 238.122 167.38C237.616 166.765 237.218 166.042 236.929 165.211C236.676 164.343 236.549 163.349 236.549 162.229C236.549 159.446 237.598 157.313 239.694 155.831C241.79 154.313 244.845 153.554 248.857 153.554C252.688 153.554 255.561 154.169 257.477 155.398C259.429 156.59 260.676 158.578 261.218 161.361L254.929 162.175C254.604 160.837 253.953 159.843 252.977 159.193C252.001 158.506 250.592 158.163 248.748 158.163C244.808 158.163 242.839 159.392 242.839 161.849C242.839 162.645 243.037 163.313 243.435 163.855C243.869 164.361 244.483 164.795 245.278 165.157C246.11 165.518 247.79 165.97 250.32 166.512C253.284 167.127 255.399 167.705 256.664 168.247C257.965 168.789 258.977 169.422 259.7 170.145C260.459 170.831 261.037 171.663 261.435 172.639C261.832 173.614 262.031 174.753 262.031 176.054ZM292.721 178.711V185H286.811V178.711H272.769V174.048L285.835 154.042H292.721V174.102H296.841V178.711H292.721ZM286.811 163.964C286.811 163.169 286.829 162.319 286.865 161.416C286.938 160.476 286.992 159.88 287.028 159.627C286.63 160.458 285.944 161.651 284.968 163.205L277.757 174.102H286.811V163.964ZM298.305 185V178.277H304.649V185H298.305ZM329.154 169.494C329.154 174.735 328.251 178.711 326.443 181.422C324.636 184.096 321.944 185.434 318.365 185.434C311.281 185.434 307.739 180.12 307.739 169.494C307.739 165.771 308.118 162.753 308.877 160.44C309.672 158.09 310.847 156.355 312.401 155.235C313.956 154.114 315.998 153.554 318.528 153.554C322.178 153.554 324.853 154.892 326.552 157.566C328.287 160.205 329.154 164.181 329.154 169.494ZM322.919 169.494C322.919 166.639 322.775 164.434 322.486 162.88C322.233 161.289 321.799 160.151 321.184 159.464C320.57 158.777 319.666 158.434 318.474 158.434C317.245 158.434 316.305 158.777 315.654 159.464C315.04 160.151 314.588 161.289 314.299 162.88C314.046 164.434 313.919 166.639 313.919 169.494C313.919 172.313 314.064 174.518 314.353 176.108C314.642 177.699 315.094 178.855 315.709 179.578C316.323 180.265 317.227 180.608 318.419 180.608C319.576 180.608 320.462 180.247 321.076 179.524C321.727 178.765 322.197 177.59 322.486 176C322.775 174.41 322.919 172.241 322.919 169.494Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_4_4">
                  <rect width="338" height="338" fill="white" />
                </clipPath>
              </defs>
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
                  strokeWidth="11.4"
                />
                <path
                  id="Vector_2"
                  d="M74.1 43.9998H104.5M74.1 66.7998H104.5M66.5 127.6V150.4"
                  stroke="#B7B198"
                  strokeWidth="11.4"
                  strokeLinecap="round"
                />
                <path
                  id="Vector_3"
                  d="M133 59.2C133 57.6883 132.399 56.2385 131.331 55.1695C130.262 54.1005 128.812 53.5 127.3 53.5C125.788 53.5 124.338 54.1005 123.269 55.1695C122.201 56.2385 121.6 57.6883 121.6 59.2H133ZM11.4 59.2C11.4 57.6883 10.7995 56.2385 9.73051 55.1695C8.66155 54.1005 7.21173 53.5 5.7 53.5C4.18827 53.5 2.73845 54.1005 1.66949 55.1695C0.600533 56.2385 0 57.6883 0 59.2H11.4ZM93.1912 115.014C91.8689 115.748 90.8923 116.977 90.4761 118.431C90.0599 119.885 90.2383 121.444 90.972 122.766C91.7057 124.089 92.9346 125.065 94.3884 125.481C95.8422 125.898 97.4017 125.719 98.724 124.986L93.1912 115.014ZM121.6 59.2V66.8H133V59.2H121.6ZM11.4 66.8V59.2H0V66.8H11.4ZM66.5 121.9C51.8866 121.9 37.8717 116.095 27.5384 105.762C17.2052 95.4283 11.4 81.4134 11.4 66.8H0C0 84.4369 7.00623 101.351 19.4774 113.823C31.9486 126.294 48.8631 133.3 66.5 133.3V121.9ZM121.6 66.8C121.604 76.6416 118.97 86.3043 113.974 94.7835C108.978 103.263 101.802 110.248 93.1912 115.014L98.724 124.986C109.113 119.232 117.772 110.801 123.8 100.569C129.827 90.3362 133.004 78.6759 133 66.8H121.6Z"
                  fill="#B7B198"
                />
              </g>
            </svg>
          )}
        </motion.button></Link>
        <Link href="https://clueminati.codechefvit.com" target="__blank" rel="noopener noreferrer" >
        <motion.button
          onMouseEnter={handleHover2}
          onMouseLeave={handleHover2}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1 }}
          className={`rounded-full w-[280px] h-[280px] lg:w-[200px] lg:h-[200px] md:w-[150px] md:h-[150px] flex justify-center items-center ${
            isHovered2 ? "bg-[#eb5939]" : "bg-[#222222]"
          }`}
        >
          {isHovered2 ? (
            <svg
              width="338"
              height="338"
              viewBox="0 0 338 338"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_4_4)">
                <path
                  d="M169 337.5C262.06 337.5 337.5 262.06 337.5 169C337.5 75.94 262.06 0.5 169 0.5C75.94 0.5 0.5 75.94 0.5 169C0.5 262.06 75.94 337.5 169 337.5Z"
                  fill="#EB5939"
                  stroke="black"
                />
                <path
                  d="M48.4414 182.027C52.6052 182.027 55.5161 179.925 57.1739 175.723L63.1884 178.036C61.8775 181.236 59.9691 183.607 57.4631 185.149C54.957 186.692 51.9498 187.463 48.4414 187.463C43.1209 187.463 39.0149 185.959 36.1233 182.952C33.2317 179.945 31.786 175.742 31.786 170.345C31.786 164.908 33.1739 160.745 35.9498 157.853C38.7643 154.923 42.8317 153.458 48.1522 153.458C52.0462 153.458 55.2076 154.248 57.6366 155.829C60.0655 157.371 61.7619 159.646 62.7257 162.653L56.6534 164.33C56.1522 162.672 55.1305 161.361 53.5884 160.398C52.0847 159.395 50.3113 158.894 48.2679 158.894C45.145 158.894 42.7739 159.877 41.1546 161.843C39.5353 163.771 38.7257 166.605 38.7257 170.345C38.7257 174.123 39.5546 177.014 41.2125 179.019C42.9088 181.024 45.3185 182.027 48.4414 182.027ZM65.7789 187V153.978H72.6608V181.68H90.3572V187H65.7789ZM106.815 187.463C102.265 187.463 98.7763 186.364 96.3474 184.166C93.9571 181.93 92.7619 178.749 92.7619 174.624V153.978H99.6438V174.104C99.6438 176.725 100.261 178.711 101.494 180.06C102.767 181.371 104.598 182.027 106.988 182.027C109.456 182.027 111.345 181.333 112.656 179.945C114.005 178.518 114.68 176.494 114.68 173.872V153.978H121.62V174.277C121.62 178.48 120.328 181.737 117.745 184.051C115.162 186.325 111.519 187.463 106.815 187.463ZM125.829 187V153.978H151.796V159.299H132.711V167.627H150.35V172.947H132.711V181.68H152.721V187H125.829ZM183.29 187V166.99C183.29 166.528 183.29 166.084 183.29 165.66C183.29 165.198 183.367 163.231 183.522 159.761C182.404 163.964 181.575 166.894 181.035 168.552L175.078 187H170.163L164.206 168.552L161.719 159.761C161.912 163.386 162.008 165.795 162.008 166.99V187H155.878V153.978H165.131L171.03 172.427L171.551 174.219L172.649 178.672L174.153 173.352L180.225 153.978H189.42V187H183.29ZM193.943 187V153.978H200.825V187H193.943ZM225.403 187L211.003 161.554C211.272 164.022 211.427 166.007 211.465 167.511V187H205.335V153.978H213.2L227.831 179.598C227.562 177.246 227.407 175.106 227.369 173.178V153.978H233.499V187H225.403ZM261.362 187L258.47 178.557H245.863L242.914 187H236.032L248.061 153.978H256.215L268.244 187H261.362ZM252.109 159.067L251.993 159.588C251.839 160.166 251.646 160.822 251.415 161.554C251.222 162.248 249.892 166.181 247.424 173.352H256.909L253.612 163.867L252.629 160.687L252.109 159.067ZM285.639 159.299V187H278.757V159.299H268.058V153.978H296.338V159.299H285.639ZM298.106 187V153.978H304.988V187H298.106Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_4_4">
                  <rect width="338" height="338" fill="white" />
                </clipPath>
              </defs>
            </svg>
          ) : (
            <svg
              className="lg:w-[90px] md:w-[70px]"
              width="147"
              height="147"
              viewBox="0 0 147 147"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector"
                d="M122.959 45.908C122.634 48.0489 123.352 50.2164 124.881 51.7456L135.306 62.1707C138.431 65.2955 140 69.3978 140 73.5C140 77.6022 138.438 81.6978 135.306 84.8293L124.595 95.5403C123.875 96.2595 122.997 96.8001 122.03 97.1187C121.064 97.4374 120.037 97.5253 119.03 97.3754C115.905 96.91 113.698 94.184 112.594 91.2254C111.626 88.611 110.016 86.2821 107.912 84.4528C105.808 82.6235 103.278 81.3526 100.554 80.7569C97.8306 80.1612 95.0009 80.2599 92.3255 81.0438C89.65 81.8278 87.2146 83.2718 85.2432 85.2432C83.2718 87.2146 81.8278 89.65 81.0438 92.3255C80.2599 95.0009 80.1612 97.8306 80.7569 100.554C81.3526 103.278 82.6235 105.808 84.4528 107.912C86.2821 110.016 88.611 111.626 91.2254 112.594C94.1907 113.698 96.91 115.899 97.3754 119.03C97.5258 120.037 97.4382 121.064 97.1195 122.031C96.8008 122.997 96.2599 123.875 95.5403 124.595L84.836 135.299C83.3493 136.791 81.5825 137.974 79.6371 138.781C77.6917 139.588 75.606 140.002 73.5 140C71.3954 140.003 69.3111 139.589 67.3668 138.784C65.4225 137.978 63.6566 136.796 62.1707 135.306L51.7456 124.881C50.992 124.126 50.072 123.558 49.0594 123.224C48.0467 122.889 46.9697 122.796 45.9147 122.953C42.6369 123.445 40.3298 126.304 39.133 129.389C38.1299 131.963 36.5007 134.248 34.3928 136.034C32.2849 137.821 29.7649 139.054 27.0606 139.622C24.3563 140.19 21.5531 140.074 18.9046 139.286C16.2561 138.498 13.8459 137.062 11.892 135.108C9.93803 133.154 8.50207 130.744 7.71396 128.095C6.92585 125.447 6.81046 122.644 7.37824 119.939C7.94601 117.235 9.17903 114.715 10.9658 112.607C12.7525 110.499 15.0365 108.87 17.6113 107.867C20.6963 106.67 23.5552 104.363 24.0406 101.085C24.1982 100.031 24.1065 98.9541 23.7729 97.9415C23.4392 96.9289 22.8728 96.0086 22.1191 95.2544L11.694 84.8293C10.2037 83.3434 9.02176 81.5775 8.2162 79.6332C7.41065 77.6889 6.99733 75.6046 7.00001 73.5C7.00001 69.3978 8.5691 65.2955 11.694 62.1707L21.8398 52.0248C23.4355 50.4291 25.7027 49.6778 27.9367 50.0103C31.3607 50.5222 33.7676 53.5208 35.0707 56.7254C36.1059 59.2635 37.7527 61.5062 39.8645 63.2538C41.9763 65.0014 44.4875 66.1995 47.1744 66.7416C49.8614 67.2837 52.6407 67.1528 55.2649 66.3607C57.889 65.5686 60.2765 64.1397 62.2148 62.2015C64.153 60.2632 65.5818 57.8757 66.374 55.2516C67.1661 52.6274 67.297 49.8481 66.7549 47.1611C66.2128 44.4742 65.0147 41.963 63.2671 39.8512C61.5195 37.7394 59.2768 36.0926 56.7387 35.0574C53.534 33.7543 50.5355 31.3474 50.0235 27.9234C49.6911 25.6894 50.4358 23.4289 52.0381 21.8265L62.1773 11.6873C63.6631 10.199 65.4281 9.01879 67.3712 8.21441C69.3142 7.41003 71.397 6.99734 73.5 7.00001C77.6022 7.00001 81.7045 8.5691 84.8293 11.694L95.2544 22.1191C96.7836 23.6483 98.9511 24.3663 101.085 24.0472C104.363 23.5552 106.67 20.6963 107.867 17.6113C108.87 15.0365 110.499 12.7525 112.607 10.9658C114.715 9.17903 117.235 7.94601 119.939 7.37824C122.644 6.81046 125.447 6.92585 128.095 7.71396C130.744 8.50207 133.154 9.93803 135.108 11.892C137.062 13.8459 138.498 16.2561 139.286 18.9046C140.074 21.5531 140.19 24.3563 139.622 27.0606C139.054 29.7649 137.821 32.2849 136.034 34.3928C134.248 36.5007 131.963 38.1299 129.389 39.133C126.304 40.3298 123.445 42.6302 122.959 45.908Z"
                stroke="#B7B198"
                strokeWidth="13.2973"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </motion.button></Link>
      </div>
    </div>
  );
};

export default OtherEvents;
