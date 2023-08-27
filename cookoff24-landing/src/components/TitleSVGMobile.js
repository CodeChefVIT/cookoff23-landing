import { motion } from "framer-motion";

const TitleSVGMobile = () => {
  return (
    <div className="flex justify-center my-10">
    <motion.svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    //   className="absolute w-[75vw] min-w-[700px] top-48 -right-36 z-20 opacity-100 sm:opacity-100"
      className="w-[75vw] min-w-[450px] mx-auto" 
      whileHover={{ scale: 1.2 }}
    >
      <path
        d="M335.336 350.174L334.823 351.832C335.102 350.814 335.336 350.174 335.336 350.174Z"
        fill="#B7AB98"
      />
      <path
        d="M310.467 326.906L311.602 327.614C311.722 327.687 311.865 327.802 311.985 327.875C311.43 327.596 310.927 327.262 310.467 326.906Z"
        fill="#0D0D0D"
      />
      <path
        d="M320.67 328.71C323.279 327.878 325.469 326.097 327.941 324.902C332.961 322.501 339.154 322.636 344.025 325.319C336.141 327.191 328.29 329.072 320.406 330.944C318.563 331.372 317.177 331.014 315.817 330.344L312.127 327.99C314.75 329.301 317.901 329.599 320.67 328.71Z"
        fill="#0D0D0D"
      />
      <path
        d="M311.985 327.875C311.865 327.802 311.722 327.687 311.602 327.614L312.137 327.958C312.072 327.937 312.05 327.895 311.985 327.875Z"
        fill="#0D0D0D"
      />
      <path
        d="M280.904 281.27C280.904 281.27 282.536 276.002 289.246 271.13C295.956 266.258 314.002 267.817 322.522 273.91C331.041 280.002 329.496 288.789 332.319 290.838C335.151 292.855 349.196 296.061 355.554 307.294C361.913 318.526 356.313 325.452 356.7 327.887C357.086 330.323 363.91 338.207 361.257 352.423C358.604 366.639 340.88 364.04 336.454 361.53C333.249 359.683 334.105 354.497 334.822 351.832L335.336 350.174C335.336 350.174 335.102 350.814 334.822 351.832L327.98 373.945C327.98 373.945 320.036 379.005 299.613 372.114C279.19 365.224 271.103 355.773 271.103 355.773L279.105 329.921C279.105 329.921 268.472 323.174 266.405 316.727C264.328 310.311 264.577 296.492 268.423 289.594C272.376 282.693 280.904 281.27 280.904 281.27Z"
        fill="#B7AB98"
      />
      <path
        d="M280.904 281.27C280.904 281.27 282.536 276.002 289.246 271.13C295.956 266.258 314.003 267.817 322.522 273.91C323.747 274.787 324.745 275.702 325.617 276.685C322.312 276.197 318.85 276.444 315.608 277.364C309.456 279.166 304.174 283.34 300.289 288.409C297.409 292.186 295.235 296.679 295.23 301.417C295.225 306.155 297.839 311.061 302.269 312.753C304.045 308.279 305.885 303.717 309.266 300.274C312.606 296.853 317.902 294.822 322.324 296.653C322.256 301.478 318.908 305.502 316.762 309.791C314.615 314.079 314.027 320.24 318.057 322.877C321.704 325.253 326.44 323.191 330.646 322.034C337.059 320.312 344.085 321.097 349.944 324.157C350.377 327.249 346.994 329.658 343.888 329.909C340.782 330.159 337.7 329.063 334.567 329.055C331.433 329.048 327.852 330.719 327.499 333.816C327.306 335.36 327.896 337.253 326.723 338.28C325.794 339.097 324.323 338.784 323.162 338.389C316.028 336.11 308.862 333.821 301.718 331.575C299.712 330.918 297.523 330.276 295.48 330.891C293.757 331.391 292.418 332.723 291.253 334.073C288.311 337.474 286.007 341.465 284.549 345.717C284.275 346.487 284.046 347.343 284.31 348.101C284.539 348.743 285.066 349.226 285.591 349.603C288.568 351.842 292.221 352.937 295.715 354.196C303.288 356.897 310.518 360.595 317.162 365.145C317.862 365.647 318.595 366.159 319.041 366.903C319.645 367.945 319.566 369.239 319.311 370.407C318.88 372.376 317.939 374.151 316.712 375.696C312.433 375.476 306.814 374.521 299.677 372.134C279.254 365.244 271.168 355.793 271.168 355.793L279.169 329.941C279.169 329.941 268.536 323.194 266.469 316.747C264.392 310.331 264.643 296.512 268.488 289.614C272.376 282.693 280.904 281.27 280.904 281.27Z"
        fill="#A8A094"
      />
      <path
        d="M279.291 279.345C280.238 277.322 282.635 273.147 287.956 269.306C294.063 264.889 306.605 265.35 315.32 268.047C318.702 269.093 321.563 270.442 323.805 272.062C329.842 276.389 331.385 281.997 332.412 285.701C332.773 286.952 333.231 288.698 333.646 288.969C334.116 289.292 335.464 289.887 336.919 290.48C342.689 292.907 352.315 296.92 357.553 306.131C362.759 315.331 360.601 322.075 359.464 325.749C359.262 326.4 359.011 327.213 358.985 327.526C359.1 327.846 359.484 328.678 359.821 329.316C361.744 333.119 365.705 341.043 363.494 352.795C362.646 357.378 360.33 360.831 356.643 363.075C350.425 366.816 342.09 365.769 338.123 364.541C337.05 364.209 336.137 363.82 335.407 363.416C334.862 363.104 334.38 362.706 333.941 362.284L330.136 374.576C329.985 375.064 329.671 375.502 329.225 375.791C328.875 376.003 320.778 380.981 301.234 374.932C300.487 374.701 299.706 374.459 298.968 374.195C278.187 367.194 269.863 357.598 269.488 357.197C268.991 356.616 268.844 355.822 269.066 355.107L276.582 330.816C273.412 328.623 266.209 323.116 264.383 317.384C262.085 310.188 262.537 295.718 266.59 288.492C270.021 282.356 276.539 280.062 279.291 279.345ZM267.593 311.963C267.6 313.783 267.822 315.027 268.501 316.057C269.103 316.991 270.086 317.724 271.622 318.519C274.747 320.164 278.28 320.723 281.794 320.883C284.532 321.018 285.343 319.202 284.832 316.479C284.489 314.591 283.484 312.89 282.628 311.164C279.567 305.051 278.288 297.671 280.821 291.328C280.481 294.038 280.336 296.808 280.417 299.541C280.452 301.155 280.594 302.767 280.962 304.342C282.235 309.902 286.269 314.251 290.576 317.722C291.573 318.529 292.74 319.71 293.925 320.255C295.273 320.85 297.008 320.888 298.458 321.266C300.722 321.895 303.511 323.364 305.29 320.957C306.147 319.797 306.362 318.296 306.589 316.869C307.424 311.64 308.596 306.124 312.161 302.203C313.518 300.698 315.172 299.5 316.829 298.409C312.02 303.584 308.881 310.274 307.988 317.302C307.466 321.523 308.19 325.168 311.57 327.604L310.436 326.896C310.928 327.262 311.429 327.596 311.952 327.865C312.007 327.917 312.072 327.938 312.16 328C313.502 328.843 314.629 329.691 315.827 330.311L317.257 331.217C320.16 333.006 323.176 334.545 326.646 335.191C316.924 333.679 308.268 328.257 298.741 325.879C295.602 325.085 292.286 324.629 289.124 325.29C281.118 326.981 279.942 334.813 277.899 341.414C276.48 345.999 275.071 350.552 273.652 355.137C276.116 357.538 284.344 364.574 300.342 369.988C301.08 370.252 301.795 370.474 302.51 370.695C302.64 370.735 302.738 370.765 302.868 370.806C306.419 371.192 311.206 371.497 312.956 370.792C315.891 369.598 312.816 364.798 305.879 361.19C298.943 357.583 275.209 353.445 275.209 353.445C275.209 353.445 299.561 354.781 313.725 361.516C321.7 365.338 325.231 368.319 326.812 370.234C326.634 370.001 327.556 367.827 327.637 367.567C328.271 365.519 328.728 364.734 327.184 363.044C326.18 361.914 325.155 360.849 323.983 359.916C322.066 358.396 319.858 357.356 317.66 356.284C321.311 356.345 324.945 357.612 327.857 359.832C328.032 359.957 328.23 360.125 328.477 360.131C328.618 360.139 328.745 360.071 328.873 360.004C330.521 359.053 331.145 357.037 331.679 355.313C332.162 353.753 332.859 352.65 333.582 351.235C335.299 347.989 334.643 343.546 333.109 340.327C332.76 339.613 332.336 338.912 331.691 338.463C332.656 338.797 333.373 339.589 334.035 340.329C335.249 341.702 336.358 343.186 337.051 344.861C337.996 347.22 337.659 350.037 336.924 352.411C336.178 355.281 335.918 358.656 337.53 359.547C337.77 359.693 338.326 359.972 339.366 360.294C343.561 361.592 350.049 361.818 354.29 359.282C356.83 357.752 358.446 355.294 359.074 351.997C361.005 341.726 357.607 334.974 355.773 331.342C355.11 330.032 354.648 329.105 354.489 328.237C354.313 327.078 354.666 325.939 355.129 324.444C356.218 321.039 357.85 315.879 353.585 308.359C349.108 300.488 340.34 296.813 335.103 294.622C333.212 293.823 331.854 293.26 330.947 292.623C329.252 291.422 328.69 289.323 328.046 286.915C327.088 283.447 325.896 279.123 321.149 275.694C319.312 274.377 316.822 273.214 313.928 272.319C305.18 269.612 294.655 269.883 290.468 272.934C284.5 277.251 282.953 281.904 282.943 281.936C282.692 282.749 282.015 283.324 281.189 283.46C281.114 283.473 273.659 284.764 270.373 290.66C266.809 297.111 267.602 304.911 267.593 311.963Z"
        fill="#0D0D0D"
      />
      <path
        d="M297.007 272.071C300.955 270.941 305.287 271.569 308.986 273.319C309.454 273.535 309.944 273.794 310.233 274.24C310.523 274.686 310.578 275.309 310.21 275.694C306.715 274.897 302.731 274.876 299.827 277.006C298.672 277.86 297.791 278.977 296.911 280.095C295.916 281.354 294.92 282.614 293.924 283.874C293.348 284.586 292.803 285.308 292.017 285.778C291.263 286.257 290.267 286.483 289.452 286.124C288.702 285.785 288.222 285.031 288.001 284.25C287.605 282.88 287.809 281.411 288.254 280.088C289.612 276.161 293.058 273.201 297.007 272.071Z"
        fill="#4D4D4D"
      />
      <path
        d="M341.19 350.026C341.565 349.964 341.946 350.117 342.293 350.26C344.324 351.067 347.891 352.206 349.843 350.851C350.023 350.728 350.171 350.596 350.329 350.431C351.633 348.982 351.75 346.417 354.205 346.428C354.485 346.443 354.798 346.469 355.021 346.324C355.244 346.179 355.367 345.897 355.447 345.637C355.696 344.716 355.624 338.387 357.871 341.719C358.505 342.663 358.763 344.133 358.894 345.207C359.248 347.632 358.904 350.127 357.864 352.335C356.041 356.154 352.127 358.898 347.937 359.311C345.509 359.558 342.935 359.011 341.186 357.293C339.437 355.576 338.888 352.627 340.31 350.68C340.551 350.363 340.814 350.088 341.19 350.026Z"
        fill="#4D4D4D"
      />
      <g filter="url(#filter0_i_366_98)">
        <path
          d="M165.314 33.3182H148.314C147.829 30.5303 146.935 28.0606 145.632 25.9091C144.329 23.7273 142.708 21.8788 140.768 20.3636C138.829 18.8485 136.617 17.7121 134.132 16.9545C131.677 16.1667 129.026 15.7727 126.177 15.7727C121.117 15.7727 116.632 17.0455 112.723 19.5909C108.814 22.1061 105.753 25.803 103.541 30.6818C101.329 35.5303 100.223 41.4545 100.223 48.4545C100.223 55.5758 101.329 61.5758 103.541 66.4545C105.783 71.303 108.844 74.9697 112.723 77.4545C116.632 79.9091 121.102 81.1364 126.132 81.1364C128.92 81.1364 131.526 80.7727 133.95 80.0455C136.405 79.2879 138.602 78.1818 140.541 76.7273C142.511 75.2727 144.162 73.4848 145.495 71.3636C146.859 69.2424 147.798 66.8182 148.314 64.0909L165.314 64.1818C164.677 68.6061 163.298 72.7576 161.177 76.6364C159.086 80.5152 156.344 83.9394 152.95 86.9091C149.556 89.8485 145.586 92.1515 141.041 93.8182C136.495 95.4545 131.45 96.2727 125.905 96.2727C117.723 96.2727 110.42 94.3788 103.995 90.5909C97.5712 86.803 92.5106 81.3333 88.8136 74.1818C85.1167 67.0303 83.2682 58.4545 83.2682 48.4545C83.2682 38.4242 85.1318 29.8485 88.8591 22.7273C92.5864 15.5758 97.6621 10.1061 104.086 6.31818C110.511 2.5303 117.783 0.63636 125.905 0.63636C131.086 0.63636 135.905 1.36363 140.359 2.81818C144.814 4.27273 148.783 6.40909 152.268 9.22727C155.753 12.0151 158.617 15.4394 160.859 19.5C163.132 23.5303 164.617 28.1364 165.314 33.3182ZM257.539 48.4545C257.539 58.4848 255.66 67.0758 251.902 74.2273C248.175 81.3485 243.084 86.803 236.63 90.5909C230.205 94.3788 222.917 96.2727 214.766 96.2727C206.614 96.2727 199.311 94.3788 192.857 90.5909C186.433 86.7727 181.342 81.303 177.584 74.1818C173.857 67.0303 171.993 58.4545 171.993 48.4545C171.993 38.4242 173.857 29.8485 177.584 22.7273C181.342 15.5758 186.433 10.1061 192.857 6.31818C199.311 2.5303 206.614 0.63636 214.766 0.63636C222.917 0.63636 230.205 2.5303 236.63 6.31818C243.084 10.1061 248.175 15.5758 251.902 22.7273C255.66 29.8485 257.539 38.4242 257.539 48.4545ZM240.584 48.4545C240.584 41.3939 239.478 35.4394 237.266 30.5909C235.084 25.7121 232.054 22.0303 228.175 19.5455C224.296 17.0303 219.827 15.7727 214.766 15.7727C209.705 15.7727 205.236 17.0303 201.357 19.5455C197.478 22.0303 194.433 25.7121 192.22 30.5909C190.039 35.4394 188.948 41.3939 188.948 48.4545C188.948 55.5151 190.039 61.4848 192.22 66.3636C194.433 71.2121 197.478 74.8939 201.357 77.4091C205.236 79.8939 209.705 81.1364 214.766 81.1364C219.827 81.1364 224.296 79.8939 228.175 77.4091C232.054 74.8939 235.084 71.2121 237.266 66.3636C239.478 61.4848 240.584 55.5151 240.584 48.4545ZM350.264 48.4545C350.264 58.4848 348.385 67.0758 344.627 74.2273C340.9 81.3485 335.809 86.803 329.355 90.5909C322.93 94.3788 315.642 96.2727 307.491 96.2727C299.339 96.2727 292.036 94.3788 285.582 90.5909C279.158 86.7727 274.067 81.303 270.309 74.1818C266.582 67.0303 264.718 58.4545 264.718 48.4545C264.718 38.4242 266.582 29.8485 270.309 22.7273C274.067 15.5758 279.158 10.1061 285.582 6.31818C292.036 2.5303 299.339 0.63636 307.491 0.63636C315.642 0.63636 322.93 2.5303 329.355 6.31818C335.809 10.1061 340.9 15.5758 344.627 22.7273C348.385 29.8485 350.264 38.4242 350.264 48.4545ZM333.309 48.4545C333.309 41.3939 332.203 35.4394 329.991 30.5909C327.809 25.7121 324.779 22.0303 320.9 19.5455C317.021 17.0303 312.552 15.7727 307.491 15.7727C302.43 15.7727 297.961 17.0303 294.082 19.5455C290.203 22.0303 287.158 25.7121 284.945 30.5909C282.764 35.4394 281.673 41.3939 281.673 48.4545C281.673 55.5151 282.764 61.4848 284.945 66.3636C287.158 71.2121 290.203 74.8939 294.082 77.4091C297.961 79.8939 302.43 81.1364 307.491 81.1364C312.552 81.1364 317.021 79.8939 320.9 77.4091C324.779 74.8939 327.809 71.2121 329.991 66.3636C332.203 61.4848 333.309 55.5151 333.309 48.4545ZM359.807 95V1.90909H376.67V44.6818H377.807L414.125 1.90909H434.716L398.716 43.6818L435.034 95H414.761L386.989 55.0909L376.67 67.2727V95H359.807ZM179.889 456.273C173.131 456.273 167.131 455.136 161.889 452.864C156.677 450.591 152.586 447.485 149.616 443.545C146.677 439.576 145.222 435.076 145.252 430.045C145.222 426.136 146.07 422.545 147.798 419.273C149.525 416 151.858 413.273 154.798 411.091C157.767 408.879 161.07 407.47 164.707 406.864V406.227C159.919 405.167 156.04 402.727 153.07 398.909C150.131 395.061 148.677 390.621 148.707 385.591C148.677 380.803 150.01 376.53 152.707 372.773C155.404 369.015 159.101 366.061 163.798 363.909C168.495 361.727 173.858 360.636 179.889 360.636C185.858 360.636 191.177 361.727 195.843 363.909C200.54 366.061 204.237 369.015 206.934 372.773C209.661 376.53 211.025 380.803 211.025 385.591C211.025 390.621 209.525 395.061 206.525 398.909C203.555 402.727 199.722 405.167 195.025 406.227V406.864C198.661 407.47 201.934 408.879 204.843 411.091C207.783 413.273 210.116 416 211.843 419.273C213.601 422.545 214.48 426.136 214.48 430.045C214.48 435.076 212.995 439.576 210.025 443.545C207.055 447.485 202.964 450.591 197.752 452.864C192.57 455.136 186.616 456.273 179.889 456.273ZM179.889 443.273C183.373 443.273 186.404 442.682 188.98 441.5C191.555 440.288 193.555 438.591 194.98 436.409C196.404 434.227 197.131 431.712 197.161 428.864C197.131 425.894 196.358 423.273 194.843 421C193.358 418.697 191.313 416.894 188.707 415.591C186.131 414.288 183.192 413.636 179.889 413.636C176.555 413.636 173.586 414.288 170.98 415.591C168.373 416.894 166.313 418.697 164.798 421C163.313 423.273 162.586 425.894 162.616 428.864C162.586 431.712 163.283 434.227 164.707 436.409C166.131 438.561 168.131 440.242 170.707 441.455C173.313 442.667 176.373 443.273 179.889 443.273ZM179.889 400.864C182.737 400.864 185.252 400.288 187.434 399.136C189.646 397.985 191.389 396.379 192.661 394.318C193.934 392.258 194.586 389.879 194.616 387.182C194.586 384.515 193.949 382.182 192.707 380.182C191.464 378.152 189.737 376.591 187.525 375.5C185.313 374.379 182.767 373.818 179.889 373.818C176.949 373.818 174.358 374.379 172.116 375.5C169.904 376.591 168.177 378.152 166.934 380.182C165.722 382.182 165.131 384.515 165.161 387.182C165.131 389.879 165.737 392.258 166.98 394.318C168.252 396.348 169.995 397.955 172.207 399.136C174.449 400.288 177.01 400.864 179.889 400.864ZM230.591 456C227.833 456 225.47 455.03 223.5 453.091C221.53 451.152 220.561 448.788 220.591 446C220.561 443.273 221.53 440.939 223.5 439C225.47 437.061 227.833 436.091 230.591 436.091C233.258 436.091 235.576 437.061 237.545 439C239.545 440.939 240.561 443.273 240.591 446C240.561 447.848 240.076 449.53 239.136 451.045C238.227 452.561 237.015 453.773 235.5 454.682C234.015 455.561 232.379 456 230.591 456ZM281.782 456.773C274.297 456.773 267.873 454.879 262.509 451.091C257.176 447.273 253.07 441.773 250.191 434.591C247.342 427.379 245.918 418.697 245.918 408.545C245.948 398.394 247.388 389.758 250.236 382.636C253.115 375.485 257.221 370.03 262.555 366.273C267.918 362.515 274.327 360.636 281.782 360.636C289.236 360.636 295.645 362.515 301.009 366.273C306.373 370.03 310.479 375.485 313.327 382.636C316.206 389.788 317.645 398.424 317.645 408.545C317.645 418.727 316.206 427.424 313.327 434.636C310.479 441.818 306.373 447.303 301.009 451.091C295.676 454.879 289.267 456.773 281.782 456.773ZM281.782 442.545C287.6 442.545 292.191 439.682 295.555 433.955C298.948 428.197 300.645 419.727 300.645 408.545C300.645 401.152 299.873 394.939 298.327 389.909C296.782 384.879 294.6 381.091 291.782 378.545C288.964 375.97 285.63 374.682 281.782 374.682C275.994 374.682 271.418 377.561 268.055 383.318C264.691 389.045 262.994 397.455 262.964 408.545C262.933 415.97 263.676 422.212 265.191 427.273C266.736 432.333 268.918 436.152 271.736 438.727C274.555 441.273 277.903 442.545 281.782 442.545Z"
          fill="#B7AB98"
        />
        <path
          d="M218.376 228.455C218.376 238.485 216.497 247.076 212.74 254.227C209.012 261.348 203.922 266.803 197.467 270.591C191.043 274.379 183.755 276.273 175.603 276.273C167.452 276.273 160.149 274.379 153.694 270.591C147.27 266.773 142.179 261.303 138.422 254.182C134.694 247.03 132.831 238.455 132.831 228.455C132.831 218.424 134.694 209.848 138.422 202.727C142.179 195.576 147.27 190.106 153.694 186.318C160.149 182.53 167.452 180.636 175.603 180.636C183.755 180.636 191.043 182.53 197.467 186.318C203.922 190.106 209.012 195.576 212.74 202.727C216.497 209.848 218.376 218.424 218.376 228.455ZM201.422 228.455C201.422 221.394 200.316 215.439 198.103 210.591C195.922 205.712 192.891 202.03 189.012 199.545C185.134 197.03 180.664 195.773 175.603 195.773C170.543 195.773 166.073 197.03 162.194 199.545C158.316 202.03 155.27 205.712 153.058 210.591C150.876 215.439 149.785 221.394 149.785 228.455C149.785 235.515 150.876 241.485 153.058 246.364C155.27 251.212 158.316 254.894 162.194 257.409C166.073 259.894 170.543 261.136 175.603 261.136C180.664 261.136 185.134 259.894 189.012 257.409C192.891 254.894 195.922 251.212 198.103 246.364C200.316 241.485 201.422 235.515 201.422 228.455ZM227.919 275V181.909H287.556V196.045H244.783V221.318H283.465V235.455H244.783V275H227.919ZM296.519 275V181.909H356.156V196.045H313.383V221.318H352.065V235.455H313.383V275H296.519Z"
          fill="#EB5939"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_366_98"
          x="83.2681"
          y="0.636353"
          width="351.766"
          height="460.136"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_366_98"
          />
        </filter>
      </defs>
    </motion.svg>
    </div>
  );
};

export default TitleSVGMobile;