import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Logo: React.FC = () => {
  return (
    <motion.div
      className="text-white text-xl font-bold z-20"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Image src="/logo.png" alt="Logo" width={40} height={40} />
    </motion.div>
  );
};

export default Logo;
