import React, { useState } from 'react';

import binanceLogo from '../assets/icon/binance.png';
import metamaskLogo from '../assets/icon/metamask.png';
import coinbaseLogo from '../assets/icon/coinbase.png';
import otherLogo from '../assets/icon/other.png';
import WalletConnectModals from './WalletConnectModals';

export default function WalletConnectModal({ onClose }) {
  const [showModal, setShowModal] = useState(false);
  console.log('showModal', showModal);

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
    background: 'rgba(5, 23, 20, 1)',
    color: '#fff',
    borderRadius: '20px',
    padding: '2rem',
    width: '90%',
    maxWidth: '700px',
    marginTop: '2rem',
    height: '80%',
    textAlign: 'center',
    position: 'relative',
    boxShadow: '0 0 30px rgba(0, 0, 0, 0.6)',
  };

  const subTextStyle = {
    color: '#ccc',
    marginBottom: '2rem',
    fontSize: '0.95rem',
  };

  const optionsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: '1.2rem',
    marginTop: '4rem',
  };

  const cardStyle = {
    background: 'rgba(26, 26, 26, 1)',
    borderRadius: '14px',
    padding: '1rem',
    width: '140px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
    height: '30vh',
  };

  const imageStyle = {
    width: '70px',
    height: '70px',
    marginBottom: '0.6rem',
  };

  const connectButtonStyle = {
    marginTop: '0.5rem',
    background: 'none',
    border: 'none',
    // color: '#00bfff',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '0.9rem',
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '15px',
    right: '20px',
    background: 'none',
    border: 'none',
    fontSize: '2rem',
    color: 'white',
    cursor: 'pointer',
  };

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <div
          style={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '70%',
            height: '30%',
            background: 'rgb(154 254 167 / 18%)',
            filter: 'blur(56px)',
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
        <h2
          style={{
            marginBottom: '0.5rem',
            fontSize: '2rem',
            fontWeight: 'bolder',
          }}
        >
          Track All Your Wallets & Exchanges <br /> From One Place
        </h2>
        <p style={subTextStyle}>
          Connect your entire portfolio to track, buy, swap, and stake your
          assets.
        </p>
        <div style={optionsStyle}>
          <div style={cardStyle}>
            <img src={binanceLogo} alt="Binance" style={imageStyle} />
            <p style={{ fontSize: '0.7rem' }}>Binance</p>
            <button style={connectButtonStyle}>Connect→</button>
          </div>
          <div style={cardStyle}>
            <img src={metamaskLogo} alt="MetaMask" style={imageStyle} />
            <p style={{ fontSize: '0.7rem' }}>MetaMask</p>
            <button style={connectButtonStyle}>Connect→</button>
          </div>
          <div style={cardStyle}>
            <img src={coinbaseLogo} alt="Coinbase" style={imageStyle} />
            <p style={{ fontSize: '0.7rem' }}>Coinbase (Individual)</p>
            <button style={connectButtonStyle}>Connect→</button>
          </div>
          <div style={cardStyle} onClick={() => setShowModal(true)}>
            <img src={otherLogo} alt="Other" style={imageStyle} />
            <p style={{ fontSize: '0.7rem' }}>Other</p>
            <button
              style={connectButtonStyle}
              onClick={() => setShowModal(true)}
            >
              Connect→
            </button>
          </div>
        </div>
        {/* <button style={closeButtonStyle} onClick={onClose}>
          ×
        </button> */}
      </div>
      {showModal && <WalletConnectModals onClose={() => setShowModal(false)} />}
    </div>
  );
}
