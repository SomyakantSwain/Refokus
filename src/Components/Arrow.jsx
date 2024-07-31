import React, { useState } from "react";
import { motion, easeInOut } from "framer-motion";
import { IoIosReturnRight } from "react-icons/io";

function Arrow() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    
    >
      <div>
      <motion.div
        animate={{ y: isHovered ? "-150%" : 0 }}
        transition={{ ease: easeInOut, delay: 0.1 }}
        
        >
        <IoIosReturnRight />
      </motion.div>
    </div>
    </button>
  );
}

export default Arrow;
