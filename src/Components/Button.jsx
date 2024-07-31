import { motion, easeInOut } from "framer-motion";
import React, { useState } from "react";

import { IoIosReturnRight } from "react-icons/io";
import Arrow from "./Arrow";

const Button = ({ title = "Get Started" }) => {
  const [isHovered, setIsHovered] = useState(true);
  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="primary-btn h-8 w-36 px-4 py-4 bg-white text-black overflow-y-hidden rounded-full"
    >
      <div className="flex justify-between">
        <motion.div
          animate={{ y: isHovered ? "-200%" : "-50%" }}
          transition={{ ease: easeInOut ,delay:0.3}}
          className="flex w-full   translate-y-full items-center justify-between gap-4"
        >
          <span className="text-sm">{title}</span>
        </motion.div>
        <motion.div 
        animate={{ y: isHovered ? "-200%" : "-50%" }}
        transition={{ ease: easeInOut,delay:0.4,duration:0.5}}
        
        className="flex items-center  -translate-y-[50%]">
          <Arrow />
        </motion.div>
      </div>

      <div className="flex justify-between  mt-5 ">
        <motion.div
          animate={{ y: isHovered ? "-310%" : "-50%" }}
          transition={{ ease: easeInOut,delay:0.3}}
          className="flex w-full items-center mt-3 justify-between gap-4"
        >
          <span className="text-sm">{title}</span>
        </motion.div>
        <motion.div 
        animate={{ y: isHovered ? "-175%" : "-50%" }}
        transition={{ ease: easeInOut,delay:0.4,duration:0.5}}
        
        className="flex items-center  -translate-y-[50%]">
          <Arrow />
        </motion.div>
      </div>
    </button>
  );
};

export default Button;
