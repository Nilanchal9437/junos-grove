import React from 'react';
import { motion } from 'framer-motion';

interface AlertProps {
  type: 'success' | 'warning' | 'danger';
  message: string;
  timeAgo: string;
}

const AlertIcon = ({ type }: { type: AlertProps['type'] }) => {
  const iconColor = {
    success: 'text-green-400',
    warning: 'text-yellow-400',
    danger: 'text-red-400'
  }[type] || 'text-gray-400'; // Fallback color

  const icon = {
    success: '▲',
    warning: '▼',
    danger: '⚠'
  }[type] || '•';

  return (
    <div className={`${iconColor} text-xl`}>
      {icon}
    </div>
  );
};

const LiveAlert: React.FC<AlertProps> = ({ type, message, timeAgo }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-3 bg-[#011A07]/50 backdrop-blur-sm p-3 rounded-lg mb-2 hover:bg-[#011A07]/60 transition-colors"
    >
      <AlertIcon type={type} />
      <div className="flex-1">
        <p className="text-white/90 text-sm font-medium">{message}</p>
        <p className="text-white/50 text-xs">{timeAgo}</p>
      </div>
    </motion.div>
  );
};

export default LiveAlert; 