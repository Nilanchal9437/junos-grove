"use client";

import React from "react";
import { motion } from 'framer-motion';

const TreasureMap: React.FC = () => {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="treasure-map-container">
      <style jsx>{`
        .treasure-map-container svg {
          shape-rendering: crispEdges;
        }
        .treasure-map-container svg path {
          stroke: none !important;
          shape-rendering: crispEdges;
        }
      `}</style>
      <div className="min-h-screen bg-[#0a2614] flex items-center justify-center p-4">
        <motion.div 
          className="relative w-full max-w-4xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <svg 
            className="w-full h-full" 
            viewBox="0 0 1074 602" 
            preserveAspectRatio="xMidYMid meet"
            style={{ 
              filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.5))',
              background: 'transparent'
            }}
          >
            {/* Map background */}
            <motion.path
              fill="#c4a853"
              d="M824.000000,1.000000 
                C867.687561,1.000000 911.375122,1.000000 955.582031,1.362817 
                C958.400879,7.150348 960.700439,12.575061 963.000000,18.333101 
                C963.000000,19.110861 963.000000,19.555294 962.652954,20.049572"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />

            {/* Glowing path */}
            <motion.path
              d="M100 300 
                 C200 300, 250 250, 300 230
                 C350 210, 400 200, 450 180
                 C500 160, 550 150, 600 100"
              fill="none"
              stroke="#f3d03e"
              strokeWidth="6"
              strokeDasharray="15,15"
              strokeLinecap="round"
              className="drop-shadow-[0_0_8px_rgba(243,208,62,0.8)]"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />

            {/* Glowing dots */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <motion.g
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 * i, duration: 0.3 }}
              >
                <circle
                  cx={100 + i * 100}
                  cy={300 - i * 40}
                  r="6"
                  fill="#f3d03e"
                  className="animate-pulse drop-shadow-[0_0_8px_rgba(243,208,62,0.8)]"
                />
              </motion.g>
            ))}

            {/* X mark */}
            <motion.path
              d="M80 290 L120 310 M120 290 L80 310"
              stroke="#8b4513"
              strokeWidth="8"
              strokeLinecap="round"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            />

            {/* Detailed pyramid */}
            <motion.g
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <path
                d="M580 80 L660 80 L620 20 Z"
                fill="#8b4513"
              />
              <path
                d="M590 70 L650 70 L620 30 Z"
                fill="#a0522d"
              />
              <path
                d="M600 60 L640 60 L620 40 Z"
                fill="#b8860b"
              />
            </motion.g>

            {/* Map overlay gradient */}
            <motion.rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#mapGradient)"
              opacity="0.2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
            />

            {/* Gradient definitions */}
            <defs>
              <radialGradient id="mapGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="100%" stopColor="#8b7424" />
              </radialGradient>
            </defs>
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default TreasureMap;
