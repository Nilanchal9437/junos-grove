import React, { useState } from 'react';
import {
  FaThLarge,
  FaChartBar,
  FaCoins,
  FaPercentage,
  FaImages,
  FaClock,
} from 'react-icons/fa';

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const navItems = [
    { icon: <FaThLarge />, label: 'Dashboard' },
    { icon: <FaChartBar />, label: 'Analytics' },
    { icon: <FaCoins />, label: 'Assets' },
    { icon: <FaPercentage />, label: 'DeFi' },
    { icon: <FaImages />, label: 'NFTs' },
    { icon: <FaClock />, label: 'Transactions' },
  ];

  return (
    <div
      style={{
        width: '260px',
        backgroundColor: '#000',
        height: '100vh',
        padding: '24px 16px',
        boxSizing: 'border-box',
        fontFamily: 'sans-serif',
        display: 'flex',
        flexDirection: 'column',
        color: '#fff',
      }}
    >
      {/* 🧑 User Profile Card */}
      <div
        style={{
          background: '#121212',
          borderRadius: '16px',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '32px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            gap: ' 12px',
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg"
            alt="Trump"
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              objectFit: 'cover',
              marginBottom: '12px',
            }}
          />
          <div style={{ fontSize: '13px', color: '#ccc', marginBottom: '6px' }}>
            Donald Trump
          </div>
        </div>
        <div style={{ fontWeight: 'bold', fontSize: '12px' }}>Trump</div>

        <div style={{ fontSize: '10px', color: '#888', textAlign: 'center' }}>
          This Juno’s portfolio displays Donald Trump's entire Ethereum wallet
          and transaction history.
        </div>
      </div>

      {/* 📚 Navigation */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {navItems.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 14px',
                borderRadius: '12px',
                cursor: 'pointer',
                backgroundColor: isActive ? '#1c2b1f' : 'transparent',
                color: isActive ? '#9EFF6B' : '#ccc',
                transition: '0.2s',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '10px',
                  backgroundColor: isActive ? '#9EFF6B' : '#1a1a1a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isActive ? '#000' : '#aaa',
                }}
              >
                {item.icon}
              </div>
              <span style={{ fontSize: '14px' }}>{item.label}</span>
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
