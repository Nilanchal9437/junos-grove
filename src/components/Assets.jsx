import React from 'react';
import ethIcon from '../assets/icon/bitcoin.png';
import trogIcon from '../assets/icon/bitcoin.png';
import trumpIcon from '../assets/icon/bitcoin.png';

const mockData = [
  {
    rank: 2,
    name: 'Ethereum',
    symbol: 'ETH',
    amount: '492.95',
    change: -4.36,
    icon: ethIcon,
    marketCap: '$308B',
    price: '$2,554.38',
    total: '$1,259,182.7',
    avgBuy: '$3,152.38',
  },
  {
    rank: 2645,
    name: 'Trog',
    symbol: 'TROG',
    amount: '210,345,378,002',
    change: 9.13,
    icon: trogIcon,
    marketCap: '$2.4M',
    price: '$0.00000561',
    total: '$1,180,037.57',
    avgBuy: '$0.00003518',
  },
  {
    rank: 1640,
    name: 'MAGA',
    symbol: 'TRUMP',
    amount: '579,290',
    change: -3.71,
    icon: trumpIcon,
    marketCap: '$8.7M',
    price: '$0.1937',
    total: '$112,186.46',
    avgBuy: '$2.42',
  },
  {
    rank: 1640,
    name: 'MAGA',
    symbol: 'TRUMP',
    amount: '579,290',
    change: -3.71,
    icon: trumpIcon,
    marketCap: '$8.7M',
    price: '$0.1937',
    total: '$112,186.46',
    avgBuy: '$2.42',
  },
  {
    rank: 1640,
    name: 'MAGA',
    symbol: 'TRUMP',
    amount: '579,290',
    change: -3.71,
    icon: trumpIcon,
    marketCap: '$8.7M',
    price: '$0.1937',
    total: '$112,186.46',
    avgBuy: '$2.42',
  },
  {
    rank: 1640,
    name: 'MAGA',
    symbol: 'TRUMP',
    amount: '579,290',
    change: -3.71,
    icon: trumpIcon,
    marketCap: '$8.7M',
    price: '$0.1937',
    total: '$112,186.46',
    avgBuy: '$2.42',
  },
  {
    rank: 1640,
    name: 'MAGA',
    symbol: 'TRUMP',
    amount: '579,290',
    change: -3.71,
    icon: trumpIcon,
    marketCap: '$8.7M',
    price: '$0.1937',
    total: '$112,186.46',
    avgBuy: '$2.42',
  },
  {
    rank: 1640,
    name: 'MAGA',
    symbol: 'TRUMP',
    amount: '579,290',
    change: -3.71,
    icon: trumpIcon,
    marketCap: '$8.7M',
    price: '$0.1937',
    total: '$112,186.46',
    avgBuy: '$2.42',
  },
  {
    rank: 1640,
    name: 'MAGA',
    symbol: 'TRUMP',
    amount: '579,290',
    change: -3.71,
    icon: trumpIcon,
    marketCap: '$8.7M',
    price: '$0.1937',
    total: '$112,186.46',
    avgBuy: '$2.42',
  },
  {
    rank: 1640,
    name: 'MAGA',
    symbol: 'TRUMP',
    amount: '579,290',
    change: -3.71,
    icon: trumpIcon,
    marketCap: '$8.7M',
    price: '$0.1937',
    total: '$112,186.46',
    avgBuy: '$2.42',
  },
  {
    rank: 1640,
    name: 'MAGA',
    symbol: 'TRUMP',
    amount: '579,290',
    change: -3.71,
    icon: trumpIcon,
    marketCap: '$8.7M',
    price: '$0.1937',
    total: '$112,186.46',
    avgBuy: '$2.42',
  },
  {
    rank: 1640,
    name: 'MAGA',
    symbol: 'TRUMP',
    amount: '579,290',
    change: -3.71,
    icon: trumpIcon,
    marketCap: '$8.7M',
    price: '$0.1937',
    total: '$112,186.46',
    avgBuy: '$2.42',
  },
  {
    rank: 1640,
    name: 'MAGA',
    symbol: 'TRUMP',
    amount: '579,290',
    change: -3.71,
    icon: trumpIcon,
    marketCap: '$8.7M',
    price: '$0.1937',
    total: '$112,186.46',
    avgBuy: '$2.42',
  },
  // Add more rows here as needed
];

const Assets = () => {
  return (
    <div
      style={{
        background: '#0f1a18',
        padding: '24px',
        borderRadius: '12px',
        color: '#ffffff',
        fontFamily: 'sans-serif',
        // overflowX: 'auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '16px',
        }}
      >
        <h2 style={{ fontSize: '18px' }}>Assets</h2>
        <button
          style={{
            background: '#182825',
            color: '#aaa',
            border: '1px solid #2a3d38',
            padding: '6px 12px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '13px',
          }}
        >
          See More Assets
        </button>
      </div>

      {/* Table Layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1fr)',
          borderTop: '1px solid #1e2e2b',
        }}
      >
        {/* LEFT TABLE */}
        <div>
          <div style={{ display: 'flex', padding: '8px 12px', color: '#888' }}>
            <div style={{ width: '40px' }}>Rank</div>
            <div style={{ flex: 1 }}>Name</div>
            <div style={{ width: '100px', textAlign: 'right' }}>Amount</div>
            <div style={{ width: '80px', textAlign: 'right' }}>24h</div>
          </div>
          {mockData.map((asset, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px 12px',
                borderTop: '1px solid #1e2e2b',
              }}
            >
              <div style={{ width: '40px', fontSize: '14px' }}>
                {asset.rank}
              </div>
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <img
                  src={asset.icon}
                  alt={asset.name}
                  style={{ width: '20px', height: '20px', borderRadius: '50%' }}
                />
                <span style={{ fontWeight: 500 }}>{asset.name}</span>
                <span style={{ color: '#888', fontSize: '12px' }}>
                  • {asset.symbol}
                </span>
              </div>
              <div style={{ width: '100px', textAlign: 'right' }}>
                {asset.amount}
              </div>
              <div
                style={{
                  width: '80px',
                  textAlign: 'right',
                  color: asset.change > 0 ? '#00ffb3' : '#ff4d4f',
                }}
              >
                {asset.change > 0 ? `+${asset.change}%` : `${asset.change}%`}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT TABLE */}
        <div style={{ borderLeft: '1px dashed #1e2e2b' }}>
          <div style={{ display: 'flex', padding: '8px 12px', color: '#888' }}>
            <div style={{ width: '100px' }}>Market Cap</div>
            <div style={{ width: '100px' }}>Price</div>
            <div style={{ flex: 1 }}>Total</div>
            <div style={{ width: '100px', textAlign: 'right' }}>Avg Buy</div>
          </div>
          {mockData.map((asset, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px 12px',
                borderTop: '1px solid #1e2e2b',
              }}
            >
              <div style={{ width: '100px' }}>{asset.marketCap}</div>
              <div style={{ width: '100px' }}>{asset.price}</div>
              <div style={{ flex: 1 }}>{asset.total}</div>
              <div
                style={{ width: '100px', textAlign: 'right', color: '#aaa' }}
              >
                {asset.avgBuy}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Assets;
