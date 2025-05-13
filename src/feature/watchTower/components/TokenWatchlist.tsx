import React from 'react';
import { motion } from 'framer-motion';

interface TokenData {
  symbol: string;
  price: string;
  change: string;
}

const formatPrice = (price: string): string => {
  try {
    const num = parseFloat(price.replace(/,/g, ''));
    return num >= 1000 
      ? num.toLocaleString('en-US', { maximumFractionDigits: 0 })
      : num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  } catch {
    return price;
  }
};

const TokenRow: React.FC<TokenData> = ({ symbol, price, change }) => {
  const isPositive = !change.startsWith('-');
  
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="flex items-center justify-between py-2 border-b border-white/10 hover:bg-white/5 px-2 rounded transition-colors"
    >
      <div className="text-white/90 font-medium">{symbol}</div>
      <div className="flex items-center gap-4">
        <span className="text-white/90">{formatPrice(price)}</span>
        <span className={`${isPositive ? 'text-green-400' : 'text-red-400'} font-medium`}>
          {change}
        </span>
      </div>
    </motion.div>
  );
};

const ActivityChart: React.FC = () => {
  const bars = Array.from({ length: 12 }, () => Math.random() * 100);
  
  return (
    <div className="flex items-end h-20 gap-1 mt-4">
      {bars.map((height, index) => (
        <motion.div
          key={index}
          initial={{ height: 0 }}
          animate={{ height: `${height}%` }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="flex-1 bg-green-400/30 rounded-t"
        />
      ))}
    </div>
  );
};

const TokenWatchlist: React.FC = () => {
  const tokens: TokenData[] = [
    { symbol: 'SOL', price: '25.53', change: '+1.2%' },
    { symbol: 'BTC', price: '41,827', change: '2.1%' },
    { symbol: 'DIN', price: '3.18', change: '50.1K' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#011A07]/50 backdrop-blur-sm p-4 rounded-lg"
    >
      <h2 className="text-white/90 text-lg mb-4 font-medium">Token Watchlist</h2>
      <div className="flex flex-col">
        {tokens.map((token, index) => (
          <TokenRow key={index} {...token} />
        ))}
      </div>
      <div className="mt-6">
        <h3 className="text-white/70 text-sm mb-2 font-medium">Acid Rain Activity</h3>
        <ActivityChart />
      </div>
    </motion.div>
  );
};

export default TokenWatchlist; 