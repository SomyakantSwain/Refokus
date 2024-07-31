import { motion } from "framer-motion";
import React from "react";
import { LuMoveRight } from "react-icons/lu";

function Card({ width, start, para, hover = "false " }) {
    return (
        <motion.div
             whileHover={{backgroundColor:hover==="true"&&"#7443ff",padding:"25px"}}

            className={`w-1/2 bg-zinc-800 p-5 rounded-xl ${width} min-h-[27rem] flex flex-col justify-between `}
        >
            <div className="w-full">
                <div className="w-full flex  justify-between items-center">
                    {
                        start === false ? <h3>Up Next:News </h3>:
                            (<h3>Get in Touch</h3>)

                        
 

          }

                <LuMoveRight />
                </div>
               {

                start ===false ?  <h1 className="text-3xl font-medium mt-10">Insight and behind <br/> the scenes</h1>:
                <h1 className="text-3xl font-medium mt-10">Let's get to it,<br/>together.</h1>
               }
            </div>
            <div className="down w-full  ">
                {start === true && (
                    <>
                        <h1 className="text-8xl font-semibold tracking-tight leading-none">
                            Start a project
                        </h1>
                        <button className="rounded-full mt-5 py-2 px-3 border-[1px] border-zinc-50 ">
                            Contact us{" "}
                        </button>
                    </>
                )}
                {para && (
                    <p className="text-sm text-zinc-500 font-medium">
                        Explore what drives our team.
                    </p>
                )}
            </div>
        </motion.div>
    );
}

export default Card;
