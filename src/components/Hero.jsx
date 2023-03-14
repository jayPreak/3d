import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
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
            Passionate about crafting seamless digital
            <br className="sm:block hidden" /> experiences that bridge the gap
            between
            <br className="sm:block hidden" />
            <span className="text-[#b71758]">aesthetics</span> and{" "}
            <span className="text-[#b71758]">functionality</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
