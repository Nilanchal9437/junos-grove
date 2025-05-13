import React from 'react';
import { motion } from 'framer-motion';

interface WalletData {
  address: string;
  label: string;
  lastSeen: string;
  status: 'active' | 'inactive' | 'warning';
}

const getStatusColor = (status: WalletData['status']) => {
  const colors = {
    active: 'bg-green-400',
    inactive: 'bg-gray-400',
    warning: 'bg-yellow-400'
  };
  return colors[status] || colors.inactive;
};

const WalletCard: React.FC<WalletData> = ({ address, label, lastSeen, status }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="bg-[#011A07]/70 hover:bg-[#011A07]/80 p-3 rounded-lg mb-2 transition-colors cursor-pointer"
    >
      <div className="flex items-center gap-2">
        <motion.div 
          className={`w-2 h-2 ${getStatusColor(status)} rounded-full`}
          animate={{ scale: status === 'active' ? [1, 1.2, 1] : 1 }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
        <span className="text-white/90 text-sm font-mono">{address}</span>
      </div>
      <div className="mt-2 flex justify-between items-center">
        <span className="text-white/70 text-xs font-medium">{label}</span>
        <span className="text-white/50 text-xs">{lastSeen}</span>
      </div>
    </motion.div>
  );
};

const WalletSurveillance: React.FC = () => {
  const wallets: WalletData[] = [
    {
      address: 'oceantrader.sol',
      label: 'Safe',
      lastSeen: '2min ago',
      status: 'active'
    },
    {
      address: 'tiger.era',
      label: 'Last Trade',
      lastSeen: '5min ago',
      status: 'warning'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-[#011A07]/50 backdrop-blur-sm p-4 rounded-lg"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white/90 text-lg font-medium">Wallet Surveillance</h2>
        <span className="text-white/50 text-xs">2 Active</span>
      </div>
      <div className="flex flex-col gap-2">
        {wallets.map((wallet, index) => (
          <WalletCard key={index} {...wallet} />
        ))}
      </div>
    </motion.div>
  );
};

export default WalletSurveillance; 