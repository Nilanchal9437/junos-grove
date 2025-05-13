import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaWallet } from "react-icons/fa";
import { GiWatchtower } from "react-icons/gi";
import Logo from "@/components/Logo";

interface NavButtonProps {
  href: string;
  text: string;
  icon: React.ReactNode;
  note?: string;
  className?: string;
}

export const NavButton: React.FC<NavButtonProps> = ({
  href,
  text,
  icon,
  note,
  className,
}) => {
  return (
    <Link href={href}>
      <motion.div
        className={`cursor-pointer ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-end space-y-1">
          <div className="flex items-center space-x-2 text-white bg-transparent">
            <span className="text-lg font-medium flex items-center gap-2">
              {icon}
              {text}
            </span>
          </div>
          {note && (
            <span className="text-sm text-gray-300 italic pr-2">{note}</span>
          )}
        </div>
      </motion.div>
    </Link>
  );
};

const NavigationButtons: React.FC = () => {
  return (
    <div
      className="fixed h-fit w-full mx-auto px-4 
      sm:max-w-[640px] sm:px-6 
      md:max-w-[768px] 
      lg:max-w-[1024px] lg:px-8 
      xl:max-w-[1280px]"
    >
      <div className="grid grid-cols-3 justify-between items-center">
        <div className="mt-2">
          <Logo />
        </div>
        <div className="mx-auto mt-2">
          <NavButton
            href="/connect-wallet"
            text="Connect Wallet"
            icon={<FaWallet className="w-5 h-5" />}
            className="px-6 py-1 text-lg font-medium text-white 
            bg-green-800/20 hover:bg-green-700/30 
            border-2 border-green-500 rounded-[30px]
            transition-all duration-300 
            shadow-[0_0_15px_rgba(34,197,94,0.2)] 
            hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]"
          />
        </div>
        <div className="ml-auto">
          <NavButton
            href="/watchtower"
            text="Watchtower"
            icon={<GiWatchtower className="w-5 h-5" />}
            className="pointer-events-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default NavigationButtons;
