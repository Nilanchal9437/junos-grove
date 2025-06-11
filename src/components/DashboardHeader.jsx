import React, { useState } from 'react';
import Navbar from './Navbar';
import chartImg from '../assets/chart.png';
import otherImg from '../assets/icon/other.png';
import WalletConnectModals from './WalletConnectModals';

export default function DashboardHeader() {
  const [showWalletModal, setShowWalletModal] = useState(false);
  return (
    <div style={{ width: '100%', background: '#000', color: '#fff' }}>
      {/* Add Navbar at the top */}
      {/* <Navbar /> */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '2rem 5rem',
          background: '#000',
          color: '#fff',
          fontFamily: 'sans-serif',
        }}
      >
        {/* <Navbar /> */}
        {/* Left Section: Dashboard and Worth */}
        <div>
          <h2 style={{ margin: 0, fontSize: '2.2rem', textAlign: 'left' }}>
            Dashboard
          </h2>

          {/* Total Worth Block */}
          <div style={{ marginTop: '1rem' }}>
            <div
              style={{
                fontSize: '1.1rem',
                fontWeight: 600,
                textAlign: 'left',
                color: '#ffffff7a',
              }}
            >
              Total Worth:
            </div>
            <div
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <span style={{ fontSize: '2rem', fontWeight: 600 }}>
                $2,796,128.44
              </span>
              <span style={{ fontSize: '1rem', cursor: 'pointer' }}>🔄</span>
            </div>

            {/* Loss Info */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginTop: '0.5rem',
              }}
            >
              <span style={{ color: '#ff4e4e', fontWeight: 500 }}>
                -$11,033,520.22
              </span>
              <span
                style={{
                  background: '#ff4e4e',
                  color: '#fff',
                  borderRadius: '6px',
                  padding: '0.25rem 0.5rem',
                  fontSize: '0.75rem',
                }}
              >
                ▼ 79.26%
              </span>
              <select
                style={{
                  background: '#1a1a1a',
                  color: '#fff',
                  border: '1px solid #333',
                  borderRadius: '6px',
                  padding: '0.3rem 0.5rem',
                }}
              >
                <option>All</option>
                <option>24h</option>
                <option>7d</option>
              </select>
            </div>
          </div>
        </div>
        {/* Placeholder for Chart */}
        <div style={{ marginTop: '1.5rem' }}>
          <img
            src={chartImg} // Replace with actual chart image or chart component
            alt="line-chart"
            style={{ width: '400px', height: '60px', objectFit: 'cover' }}
          />
        </div>
        {/* Right Section: Connect Portfolio Card */}
        <div
          style={{
            background: '#1a1a1a',
            padding: '0.6rem',
            borderRadius: '12px',
            width: '333px',
            display: 'flex',
            // flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          }}
        >
          <div style={{ width: '100vh' }}>
            <p style={{ margin: 0, fontWeight: 600 }}>Connect Your</p>
            <p style={{ margin: 0, fontWeight: 600 }}>Own Portfolio</p>
            <button
              style={{
                background: '#90ee90',
                color: '#000',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                fontWeight: 600,
                cursor: 'pointer',
                marginBottom: '1rem',
              }}
              onClick={() => setShowWalletModal(true)}
            >
              Connect Portfolio
            </button>
          </div>
          <div
            style={{
              //   background: '#2a2a2a',
              // padding: '0.75rem',
              borderRadius: '8px',
              width: '100%',
              height: '100%',
              textAlign: 'center',
            }}
          >
            <img
              src={otherImg} // Replace with actual image URL
              alt="Portfolio Icon"
              style={{ width: '100px', height: '100px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
      {showWalletModal && (
        <WalletConnectModals onClose={() => setShowWalletModal(false)} />
      )}
    </div>
  );
}
