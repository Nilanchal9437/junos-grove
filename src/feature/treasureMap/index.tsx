"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface MapPoint {
  id: number;
  x: number;
  y: number;
  type: 'start' | 'checkpoint' | 'end';
  content?: {
    title: string;
    description: string;
  };
}

const TreasureMap: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState<MapPoint | null>(null);

  const mapPoints: MapPoint[] = [
    {
      id: 1,
      x: 20,
      y: 60,
      type: 'start',
      content: {
        title: 'Starting Point',
        description: 'Begin your journey here'
      }
    },
    {
      id: 2,
      x: 40,
      y: 50,
      type: 'checkpoint',
      content: {
        title: 'Checkpoint',
        description: 'These little circles are like what the user holds crypto currency wise and it just has the image of what they hold example solana and its logo on the image, and as the hover over it shows how much the hold and the price details of the coins and such.'
      }
    },
    {
      id: 3,
      x: 80,
      y: 20,
      type: 'end',
      content: {
        title: 'Temple',
        description: 'The final destination'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-[url('/treasure-map.jpg')] bg-cover bg-no-repeat bg-center relative overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0a2614]/40" />

      {/* Dropdown Menu Button */}
      <div className="absolute top-8 right-8 z-30">
        <motion.button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="text-white/90 hover:text-white transition-colors relative"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex flex-col items-end gap-1.5">
            <div className="w-6 h-0.5 bg-current rounded-full" />
            <div className="w-4 h-0.5 bg-current rounded-full" />
            <div className="w-6 h-0.5 bg-current rounded-full" />
          </div>
        </motion.button>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full right-0 mt-2 w-48 bg-[#011A07]/90 backdrop-blur-sm rounded-lg shadow-xl"
            >
              <div className="py-2">
                <Link
                  href="/"
                  className="block px-4 py-2 text-white/90 hover:bg-white/10 transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/junos-grove"
                  className="block px-4 py-2 text-white/90 hover:bg-white/10 transition-colors"
                >
                  Juno's grove
                </Link>
                <Link
                  href="/watchtower"
                  className="block px-4 py-2 text-white/90 hover:bg-white/10 transition-colors"
                >
                  Watch tower
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-20 text-4xl text-white text-center pt-8 font-bold"
      >
        Map
      </motion.h1> 

      {/* Back to Trail Link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-8 left-8 z-20"
      >
        <Link
          href="/"
          className="text-white/70 hover:text-white/90 transition-colors flex items-center gap-2"
        >
          <span>←</span>
          <span>Back to Trail (Home)</span>
        </Link>
      </motion.div>
    </div>
  );
};

export default TreasureMap;
