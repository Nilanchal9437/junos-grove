"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LiveAlert from "./components/LiveAlert";
import TokenWatchlist from "./components/TokenWatchlist";
import WalletSurveillance from "./components/WalletSurveillance";
import Link from "next/link";

const WatchTower: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const alerts = [
    {
      type: "success" as const,
      message: "Whale moved 90,000 SOL to DEX",
      timeAgo: "5m ago",
    },
    {
      type: "warning" as const,
      message: "Token X dropped -12%",
      timeAgo: "28m ago",
    },
    {
      type: "danger" as const,
      message: "High wallet activity on new memecoin",
      timeAgo: "1h ago",
    },
  ];

  return (
    <div className="min-h-screen bg-[url('/watch-tower.jpg')] bg-cover bg-no-repeat bg-center relative overflow-hidden">
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
                  href="/treasure-map"
                  className="block px-4 py-2 text-white/90 hover:bg-white/10 transition-colors"
                >
                  Tresure map
                </Link>
                <Link
                  href="/junos-grove"
                  className="block px-4 py-2 text-white/90 hover:bg-white/10 transition-colors"
                >
                  Juno's grove
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Moon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-20 right-32 z-10"
      >
        <div className="w-16 h-16 rounded-full bg-[#f3d03e]/80" />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 relative z-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl text-white/90 text-center mb-12 font-bold"
        >
          Watch Tower
        </motion.h1>
        <div className="pt-50">
          <AnimatePresence>
            {isLoading ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex justify-center items-center h-[60vh]"
              >
                <div className="text-white/70">
                  Loading surveillance data...
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
              >
                {/* Live Alerts */}
                <div>
                  <h2 className="text-white/90 text-lg mb-4 font-medium">
                    Live Alerts
                  </h2>
                  <div className="space-y-3">
                    {alerts.map((alert, index) => (
                      <LiveAlert key={index} {...alert} />
                    ))}
                  </div>
                </div>

                {/* Token Watchlist */}
                <div>
                  <TokenWatchlist />
                </div>

                {/* Wallet Surveillance */}
                <div>
                  <WalletSurveillance />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Back to Trail Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-8 left-8"
        >
          <a
            href="/"
            className="text-white/70 hover:text-white/90 transition-colors flex items-center gap-2"
          >
            <span>←</span>
            <span>Back to Trail (Home)</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default WatchTower;
