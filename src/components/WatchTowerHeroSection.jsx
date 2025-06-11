import React, { useEffect, useState } from 'react';
import jungleBg from '../assets/watchtowerHeroBackgroud.jpg';
import Navbar from './Navbar';
import WalletConnectModal from './WalletConnectModal';
import binanceLogo from '../assets/icon/binance.png';
import metamaskLogo from '../assets/icon/metamask.png';
import coinbaseLogo from '../assets/icon/coinbase.png';
import otherLogo from '../assets/icon/other.png';
import WalletConnectModals from './WalletConnectModals';

export default function WatchTowerHeroSection() {
  const [animate, setAnimate] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const heroSectionStyle = {
    backgroundImage: `url(${jungleBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '114vh',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
  };

  const overlayStyle = {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 83%)',
    zIndex: 1,
  };

  const contentWrapper = {
    position: 'relative',
    zIndex: 2,
    color: '#fff',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
    height: '100%',
    padding: '1rem',
  };

  const modalStyle = {
    // background: 'rgba(5, 23, 20, 0.95)',
    borderRadius: '20px',
    padding: '2rem',
    maxWidth: '700px',
    width: '90%',
  };

  const subTextStyle = {
    color: '#ccc',
    marginBottom: '1.5rem',
    fontSize: '1rem',
  };

  const optionsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: '1.2rem',
    marginTop: '2rem',
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
    // marginTop: '0.5rem',
    background: 'none',
    border: 'none',
    // color: '#00bfff',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '0.9rem',
  };

  const mainButtonStyle = {
    marginTop: '1.2rem',
    background: '#92f5ad',
    border: 'none',
    borderRadius: '30px',
    padding: '0.8rem 2.5rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#000',
    cursor: 'pointer',
    boxShadow: '0 0 20px rgba(146, 245, 173, 0.5)',
  };

  return (
    <div style={heroSectionStyle}>
      <Navbar />
      <div style={overlayStyle} />
      <div style={contentWrapper}>
        <div style={modalStyle}>
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
              fontSize: '2.2rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
            }}
          >
            Track All Your Wallets & Exchanges <br /> From One Place
          </h2>
          <p style={subTextStyle}>
            Connect your entire portfolio to track, buy, swap, and stake your
            assets.
          </p>
          <div style={optionsStyle}>
            {[
              { img: binanceLogo, name: 'Binance' },
              { img: metamaskLogo, name: 'MetaMask' },
              { img: coinbaseLogo, name: 'Coinbase' },
              { img: otherLogo, name: 'Other' },
            ].map((item, i) => (
              <div key={i} style={cardStyle}>
                <img src={item.img} alt={item.name} style={imageStyle} />
                <p style={{ fontSize: '0.85rem', color: '#fff' }}>
                  {item.name}
                </p>
                <button style={connectButtonStyle}>Connect →</button>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            marginTop: '1rem',
            background: '#111',
            borderRadius: '12px',
            padding: '0.8rem 1.2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.8rem',
            color: '#ccc',
            fontSize: '0.95rem',
            boxShadow: '0 0 10px rgba(0,0,0,0.4)',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '32%',
          }}
        >
          <span style={{ fontSize: '1.2rem' }}>🔍</span>
          <input
            type="text"
            placeholder="Search wallet addresses, assets on any blockchain"
            style={{
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#ccc',
              width: '100%',
              fontSize: '0.95rem',
            }}
          />
        </div>
        <button style={mainButtonStyle} onClick={() => setShowModal(true)}>
          Connect Portfolio
        </button>
      </div>
      {showModal && <WalletConnectModals onClose={() => setShowModal(false)} />}
    </div>
  );
}
