import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { GiJungle, GiTreasureMap } from "react-icons/gi";
import { NavButton } from "@/feature/home/NavigationButtons";

const MainContent: React.FC = () => {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <motion.div
      className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-black/60 pointer-events-none" /> */}

      <AnimatePresence>
        {!isStarted && (
          <motion.div
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3 } }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20 relative"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 
              drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]
              animate-glow"
            >
              Juno
            </h1>
            <h2 className="text-4xl md:text-6xl font-semibold text-white mb-4
              drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              Crypto Jungle
            </h2>
            <p className="text-xl md:text-2xl text-gray-300">
              (Something along these lines)
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.button
          onClick={() => setIsStarted(true)}
          className="px-6 py-2 text-lg font-medium text-white 
            bg-green-800/20 hover:bg-green-700/30 
            border-2 border-green-500 rounded-[30px]
            transition-all duration-300 
            shadow-[0_0_15px_rgba(34,197,94,0.2)] 
            hover:shadow-[0_0_25px_rgba(34,197,94,0.4)] pointer-events-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Begin now
        </motion.button>
      </motion.div>
      <NavButton
        href="/junos-grove"
        text="Juno's Grove"
        icon={<GiJungle className="w-5 h-5" />}
        className="pointer-events-auto absolute top-[60%] right-40"
      />
      <NavButton
        href="/treasure-map"
        text="Treasure Map"
        icon={<GiTreasureMap className="w-6 h-6" />}
        className="pointer-events-auto transform absolute top-[70%] left-[5%]"
      />
    </motion.div>
  );
};

export default MainContent;
