import React from 'react';
import secure from '../assets/icon/Overlay.png'; // Assuming you have a secure icon
export default function WalletConnectModals({ onClose }) {
  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.6)',
    zIndex: 999,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const modalStyle = {
    background: 'rgba(26, 26, 26, 1)',
    color: '#fff',
    borderRadius: '12px',
    padding: '1.5rem',
    width: '70%',
    // maxWidth: '600px',
    marginTop: '2rem',
    maxHeight: '80vh',
    overflowY: 'auto',
    textAlign: 'left',
    position: 'relative',
    boxShadow: '0 0 30px rgba(0, 0, 0, 0.6)',
  };

  const headerStyle = {
    display: 'flex',
    // justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: '1.5rem',
    gap: '1rem',
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    margin: 0,
  };

  const searchStyle = {
    width: '100%',
    padding: '0.75rem 1rem',
    borderRadius: '8px',
    border: '1px solid rgba(38, 38, 38, 1)',
    background: 'rgba(0, 0, 0, 1)',
    color: 'white',
    marginBottom: '1.5rem',
    fontSize: '0.9rem',
  };

  const tabContainerStyle = {
    display: 'flex',
    gap: '0.5rem',
    overflowX: 'auto',
    paddingBottom: '0.5rem',
    marginBottom: '1.5rem',
  };

  const tabStyle = {
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    background: 'rgba(0, 0, 0, 1)',
    border: '1px solid rgba(38, 38, 38, 1)',
    color: '#CBD5E1',
    fontSize: '0.8rem',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  };

  const activeTabStyle = {
    ...tabStyle,
    background: '#aa7010',
    color: 'white',
  };

  const walletGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem',
  };

  const walletItemStyle = {
    background: 'rgba(0, 0, 0, 1)',
    borderRadius: '8px',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'row',
    height: '9vh',
    alignItems: 'center',
    gap: '0.5rem',
    cursor: 'pointer',
    transition: 'transform 0.2s',
    ':hover': {
      transform: 'scale(1.03)',
    },
  };

  const walletImageStyle = {
    // width: '40px',
    // height: '40px',
    borderRadius: '50%',
    objectFit: 'cover',
  };

  const walletNameStyle = {
    fontSize: '0.8rem',
    textAlign: 'center',
    margin: 0,
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '15px',
    right: '15px',
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    color: '#CBD5E1',
    cursor: 'pointer',
  };

  // Sample wallet data - replace with your actual wallet data and logos
  const wallets = [
    { name: 'Add Any Wallet', logo: '+' },
    { name: 'Binance', logo: 'B' },
    { name: 'Phantom', logo: 'P' },
    { name: 'MetaMask', logo: 'M' },
    { name: 'Coinbase (Indivi)', logo: 'C' },
    { name: 'Bitcoin Wallet', logo: 'B' },
    { name: 'OKX Wallet', logo: 'O' },
    { name: 'Bitget', logo: 'B' },
    { name: 'Binance US', logo: 'B' },
    { name: 'Trust Wallet', logo: 'T' },
    { name: 'Keplr Wallet', logo: 'K' },
    { name: 'Bybit', logo: 'B' },
    { name: 'Fibereum Wallet', logo: 'F' },
    { name: 'Rabby Wallet', logo: 'R' },
    { name: 'Ledger Wallet', logo: 'L' },
  ];

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <div style={headerStyle}>
          <h2 style={titleStyle}>300+ platforms supported</h2>
          <img style={{ height: '5vh' }} src={secure} />
        </div>

        <input
          type="text"
          placeholder="Search for platforms, exchanges or wallets"
          style={searchStyle}
        />

        <div style={tabContainerStyle}>
          <button style={activeTabStyle}>All</button>
          <button style={tabStyle}>Exchanges</button>
          <button style={tabStyle}>EVMs</button>
          <button style={tabStyle}>Solana</button>
          <button style={tabStyle}>Cosmos</button>
          <button style={tabStyle}>Starknet</button>
          <button style={tabStyle}>Ton</button>
          <button style={tabStyle}>New</button>
        </div>

        <div style={walletGridStyle}>
          {wallets.map((wallet, index) => (
            <div key={index} style={walletItemStyle}>
              <div style={walletImageStyle}>{wallet.logo}</div>
              <p style={walletNameStyle}>{wallet.name}</p>
            </div>
          ))}
          <div style={{ ...walletItemStyle, gridColumn: '1 / -1' }}>
            <div style={walletImageStyle}>+</div>
            <p style={walletNameStyle}>Add Manual Portfolio</p>
          </div>
        </div>

        <button style={closeButtonStyle} onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
}
