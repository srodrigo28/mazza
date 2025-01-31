'use client'

import { motion } from "framer-motion"
import Menu from "./motion/page";
export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">

      <motion.div 
          initial={{ opacity: 1, scale: 1, x: 0 }}
          animate={{ 
                scale: [1, 1.3, 1.3, 1, 1, 0],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["10%", "10%", "30%", "30%"],
          }}
          transition={{ ease: "easeOut", duration: 3 }}
          className="w-72 h-72 bg-zinc-100 absolute"    
      ></motion.div>

      <motion.div drag dragConstraints={{
              top: -50, left: -50, right: 50, bottom: 50
      }}>
        <h1 className="text-6xl cursor-pointer text-white tracking-wider">Mazza</h1>
      </motion.div>

      <img src="./zap.png" className="rounded-full w-36 animate-pulse absolute bottom-2 right-2" alt="" />   
   
    </div>
  );
}
