import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { DogCanvas } from "./canvas";
import "./XD.css";
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[90px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#b71758]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-pink-700 " />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi I'm <span className="text-[#b71758]">Jayesh</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Passionate about crafting seamless digital experiences that bridge
            the gap between
            <span className="text-[#b71758]"> aesthetics</span> and{" "}
            <span className="text-[#b71758]">functionality</span>
          </p>
        </div>
      </div>

      <DogCanvas />
      {/* <div className="absolute xs:bottom-52 bottom-56 w-full flex justify-center items-center">
        <a href="#about">
          <div className="h-6 w-6 border-x-8 border-x-transparent border-b-[16px] border-b-gray-700"></div>
          <div
          className="opacity-50"
            data-te-animation-init
            data-te-animation-start="onScroll"
            data-te-animation-on-scroll="repeat"
            data-te-animation-show-on-load="false"
            data-te-animation="[slide-right_1s_ease-in-out]"
            
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-11 w-11"
            >
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
          </div>
        </a>
      </div> */}
      {/* the uh uh the animated scolly thing */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
      {/* the uh uh the animated scolly thing end */}
    </section>
  );
};

export default Hero;
