import React, { useState } from "react";
import Product from "./Prod1";
import { color, motion } from "framer-motion";
import Arqitel from "../assets/Arqitel.mp4";
import Cula from "../assets/Cula.mp4";
import Layout from "../assets/Layout.mp4";
import ttr from "../assets/ttr.mp4";

const Products = () => {
  var products = [
    {
      title: "arqitel",
      description:
        " With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
      color:"#5355ee"
    },
    {
      title: "Cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: false,
      color:"#4A576B"
    },
    {
      title: "Layout Land",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
      case: false,
      color:"#1626F3"
    },
    {
      title: "TTR",
      description:
        " We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
      color:"#3E4365"
    },
  ];
  const [pos, setpos] = useState(23);
  const mover = (val) => {
    setpos(val * 23);
  };
  const [IsHovered, setIsHovered] = useState(false)
  return (
    
    <div
    
    onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}

    
    className="mt-32 relative"  
    
    >
     
      {products.map((val, index) => (
        <Product mover={mover}  count={index} val={val} key={index} />
      ))}




      <div className=" absolute  top-0 pointer-events-none  w-full h-full">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          className=" window w-[32rem] h-[23rem] absolute left-[44%]  rounded-3xl overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full  relative "
          >
           {IsHovered&& <video autoPlay muted loop src={Arqitel} />}
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full relative "
          >
            {IsHovered&&<video autoPlay muted loop src={Cula} />}
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full relative"
          >
           {IsHovered&&<video autoPlay muted loop src={Layout} />} 
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full relative "
          >
           {IsHovered&&<video autoPlay muted loop src={ttr} />} 
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
