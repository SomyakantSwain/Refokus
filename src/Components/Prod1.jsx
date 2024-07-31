import React, { useState } from "react";
import Button from "./Button";
import { motion } from "framer-motion";

function Prod1({val,mover,count}) {
  
  
  const [IsHovered, setIsHovered] = useState(false)
  return (
    <motion.div
    whileHover={{backgroundColor:val.color,padding:"100px",} }
    whileFocus={{ scale: 1.2 }} 
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    className="w-full  h-[23rem] text-white">
      <div onMouseEnter={()=>{mover(count) }} className="max-w-screen-xl  mx-auto flex items-center justify-between">
        <h1 className="text-6xl capitalize font-semibold">{val.title} </h1>
        <div className="dets w-1/3">
          <p className="mb-10 ">
            {val.description}
          </p>

          {IsHovered&&<Button title="Live website" />}
          
        </div>
      </div>
    </motion.div>
  );
}


export default Prod1;
