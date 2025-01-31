'use client'

import { motion } from "framer-motion"
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
          transition={{ ease: "easeOut", duration: 6 }}
          className="w-96 h-96 bg-zinc-100 absolute"    
      ></motion.div>

      <motion.div drag dragConstraints={{
              top: -50, left: -50, right: 50, bottom: 50
      }}>
        <h1 className="text-5xl cursor-pointer text-white tracking-wider">Mazzafashion</h1>
      </motion.div>

      <motion.div
          initial={{ 
            rotate: 360,
            opacity: .3,
          }}
          animate={{ scale: 2, opacity: 1, rotate: 360 }}
          // Fade in when the element enters the viewport:
          whileInView={{ opacity: 1 }}
      >
      <img src="./zap.png" className="rounded-full w-36 animate-pulse absolute bottom-2 right-2" alt="" />   
      </motion.div>
   
    </div>
  );
}
