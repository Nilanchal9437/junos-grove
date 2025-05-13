"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const JunosGrove: React.FC = () => {
  const [message, setMessage] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle message submission here
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-[url('/junos-grove.jpg')] bg-cover bg-no-repeat bg-center relative overflow-hidden">
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
                  Treasure map
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

      {/* Main Content */}
      <div className="relative z-20 flex flex-col justify-between h-screen">
        {/* Title Area */}
        <div className="flex-1 flex justify-center mt-20">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl text-white text-center font-bold"
          >
            Title of Juno Grove Here
          </motion.h1>
        </div>

        {/* Message Input Area */}
        <div className="flex-1 flex justify-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="container mx-auto px-4"
          >
            <form
              onSubmit={handleSubmit}
              className="relative max-w-2xl mx-auto"
            >
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Send a message..."
                className="w-full bg-transparent text-white/90 placeholder-white/50 px-0 py-2 border-white/20 focus:outline-none transition-colors text-lg"
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2"
              >
                <motion.div
                  whileHover={{ scale: 1.1, x: 2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white/90 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M3.478 2.404a.75.75 0 00-.926.941l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.404z" />
                  </svg>
                </motion.div>
              </button>
            </form>
          </motion.div>
        </div>

        {/* Back to Trail Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-32 left-8"
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
    </div>
  );
};

export default JunosGrove;
