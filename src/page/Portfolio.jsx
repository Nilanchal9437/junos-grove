import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import DashboardHeader from '../components/DashboardHeader';
import Assets from '../components/Assets';
import Chart from '../components/Chart';
import NftsUpdates from '../components/NftsUpdates';
import Transactions from '../components/Transactions';
import DeFiPools from '../components/DeFiPools';

function Portfolio() {
  return (
    <div
      style={{
        height: '100vh',
        width: '100%',
        background: 'black',
        fontFamily: 'sans-serif',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Top Navbar */}
      <Navbar />

      {/* Main layout: Sidebar + Content */}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        {/* Sidebar (fixed width, internal scroll only when needed) */}
        <div
          style={{
            width: '240px',
            background: '#0f1a18',
            borderRight: '1px solid #1e2e2b',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          <Sidebar />
        </div>

        {/* Main content scrollable area */}
        <div
          style={{
            flex: 1,
            padding: '24px',
            overflowY: 'auto',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
          }}
        >
          <DashboardHeader />
          <Assets />
          <Chart />
          <NftsUpdates />
          <Transactions />
          <DeFiPools />
          {/* Add more components here as needed */}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
