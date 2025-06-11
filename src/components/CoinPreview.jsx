import React from 'react';
import rightImg from '../assets/Right.png';
import Features1 from '../assets/icon/Features1.png';

export default function CoinPreview() {
  const portfolios = [
    {
      name: 'Donald Trump',
      desc: "This CoinStats portfolio displays Donald Trump's entire Ethereum holdings",
      pl: '-$11,030,166.26',
      change: '-79.23%',
      changeColor: '#FF4D4F',
      total: '$2,781,695.2',
      icon: Features1,
    },
    {
      name: 'Tesla Bitcoin Holdings',
      desc: 'This CoinStats portfolio includes all known Tesla Bitcoin addresses',
      pl: '$917,298,895.26',
      change: '60.95%',
      changeColor: '#52C41A',
      total: '$1,242,572,481.59',
      icon: Features1,
    },
    {
      name: 'MicroStrategy',
      desc: "This CoinStats portfolio shows MicroStrategy's entire Bitcoin",
      pl: '$20,906,731,934.61',
      change: '61.94%',
      changeColor: '#52C41A',
      total: '$54,646,835,351.41',
      icon: Features1,
    },
    {
      name: 'US Government: Silk Road',
      desc: "This CoinStats portfolio tracks the U.S. government's Bitcoin",
      pl: '$6,535,327,419.76',
      change: '684.71%',
      changeColor: '#52C41A',
      total: '$7,489,792,025.39',
      icon: Features1,
    },
  ];

  return (
    <section
      style={{
        position: 'relative',
        background: '#0A1E19',
        color: 'white',
        padding: '4rem 2rem',
        overflow: 'hidden',
      }}
    >
      {/* Background Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.62)',
          zIndex: 0,
        }}
      />

      {/* Right Image */}
      <img
        src={rightImg}
        alt="right"
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          height: '100%',
          zIndex: 1,
          opacity: 0.8,
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1200px',
          margin: '0 auto',
          width: '80vw',
        }}
      >
        {/* Tabs */}
        <div
          style={{
            display: 'flex',
            gap: '2rem',
            marginBottom: '2rem',
            fontSize: '1.2rem',
          }}
        >
          <span>Coins</span>
          <span>Favorites</span>
          <span
            style={{
              borderBottom: '2px solid #99E39E',
              paddingBottom: '0.3rem',
            }}
          >
            Notable Portfolios
          </span>
          <span>NFTs</span>
        </div>

        {/* Table Headers */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '1rem',
            fontWeight: '600',
          }}
        >
          <span style={{ flex: 2 }}>Name</span>
          <span style={{ flex: 1 }}>P/L</span>
          <span style={{ flex: 1, textAlign: 'right' }}>Total Worth</span>
        </div>

        {/* Portfolio Items */}
        {portfolios.map((item, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              padding: '1rem',
              background: '#121E1A',
              borderRadius: '12px',
              marginBottom: '1rem',
            }}
          >
            <div style={{ flex: 2, display: 'flex', gap: '1rem' }}>
              <img
                src={item.icon}
                alt=""
                style={{ width: 40, height: 40, borderRadius: '50%' }}
              />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: 600 }}>{item.name}</div>
                <div style={{ fontSize: '0.85rem', color: '#ccc' }}>
                  {item.desc}
                </div>
              </div>
            </div>
            <div style={{ flex: 1, color: item.changeColor }}>
              <div>{item.pl}</div>
              <div style={{ fontSize: '0.85rem' }}>{item.change}</div>
            </div>
            <div style={{ flex: 1, textAlign: 'right' }}>{item.total}</div>
          </div>
        ))}

        {/* See More Button */}
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button
            style={{
              padding: '0.8rem 2rem',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'white',
              borderRadius: '10px',
              fontSize: '1rem',
              cursor: 'pointer',
            }}
          >
            See More Coins
          </button>
        </div>
      </div>
    </section>
  );
}
